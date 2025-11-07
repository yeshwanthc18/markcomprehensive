import {
  Color,
  FrontSide,
  Matrix4,
  Mesh,
  PerspectiveCamera,
  Plane,
  ShaderMaterial,
  UniformsLib,
  UniformsUtils,
  Vector3,
  Vector4,
  WebGLRenderTarget,
} from "three";

// interface WaterOptions {
//   textureWidth?: number;
//   textureHeight?: number;
//   clipBias?: number;
//   alpha?: number;
//   time?: number;
//   waterNormals?: Texture;
//   sunDirection?: Vector3;
//   sunColor?: ColorRepresentation;
//   waterColor?: ColorRepresentation;
//   eye?: Vector3;
//   distortionScale?: number;
//   side?: Side;
//   fog?: boolean;
// }

const fShaderReflective = `uniform sampler2D mirrorSampler;
uniform float alpha;
uniform float time;
uniform float size;
uniform float distortionScale;
uniform sampler2D normalSampler;
uniform vec3 sunColor;
uniform vec3 sunDirection;
uniform vec3 eye;
uniform vec3 waterColor;
uniform float underwaterBlueIntensity;

varying vec4 mirrorCoord;
varying vec4 worldPosition;

varying vec2 vUv;


//Update

varying float vElevation;
const vec3 uDepthColor = vec3(0.7,0.7,0.7);
const vec3 uSurfaceColor = vec3(0.9,0.9,0.9);
const float uColorOffset = 0.08;
const float uColorMultiplier = 5.0;


vec4 getNoise( vec2 uv ) {

float amplifiedTime = time * 3.0;

vec2 uv0 = ( uv / 103.0 ) + vec2(amplifiedTime / 17.0, amplifiedTime / 29.0);
vec2 uv1 = uv / 107.0-vec2( amplifiedTime / -19.0, amplifiedTime / 31.0 );
vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( amplifiedTime / 101.0, amplifiedTime / 97.0 );
vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( amplifiedTime / 109.0, amplifiedTime / -113.0 );
vec4 noise = texture2D( normalSampler, uv0 ) +
texture2D( normalSampler, uv1 ) +
texture2D( normalSampler, uv2 ) +
texture2D( normalSampler, uv3 );
return noise * 0.5 - 1.0;
}

void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
    vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
    float direction = max( 0.0, dot( eyeDirection, reflection ) );
    specularColor += pow( direction, shiny ) * sunColor * spec;
    diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
}

#include <common>
#include <packing>
#include <bsdfs>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>


vec3 overlay(vec3 A, vec3 B) {
    return mix(
        2.0 * A * B,
        1.0 - 2.0 * (1.0 - A) * (1.0 - B),
        step(0.5, B) // Step determines which formula to use
    );
}

vec3 softLight(vec3 A, vec3 B) {
    return mix(
        2.0 * A * B + A * A * (1.0 - 2.0 * B),
        2.0 * A * (1.0 - B) + sqrt(A) * (2.0 * B - 1.0),
        step(0.5, B) // Step determines which formula to use
    );
}

void main() {

#include <logdepthbuf_fragment>
vec4 noise = getNoise( worldPosition.xz * size );
vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

vec3 diffuseLight = vec3(0.0);
vec3 specularLight = vec3(-0.3);

vec3 worldToEye = eye-worldPosition.xyz;
vec3 eyeDirection = normalize( worldToEye );
sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

float distance = length(worldToEye);

vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
float rf0 = 0.3;
float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
vec3 outgoingLight = albedo;

//Adding color depth to the water
float mixStrength = (vElevation + uColorOffset) * uColorMultiplier;
vec3 color = mix(uDepthColor, uSurfaceColor, mixStrength);

//outgoingLight *=vElevation * 2.0 + 0.8;

outgoingLight *=color;

vec4 textureColor = texture2D(normalSampler, vUv);

//outgoingLight *= textureColor.rgb;

vec4 skyBlue = vec4(vec3(0.5098, 0.6941, 0.8706),1.0);
vec4 sunsetYellow = vec4(vec3(0.9020, 0.7843, 0.6118),1.0);
vec4 underwaterBlue = vec4(vec3(0.0, 0.086, 0.306),1.0);

vec4 finalColor = vec4( outgoingLight, alpha ) * skyBlue * sunsetYellow ;
gl_FragColor = mix(finalColor, underwaterBlue, underwaterBlueIntensity);

#include <tonemapping_fragment>
#include <colorspace_fragment>
#include <fog_fragment>	
}`;

const vShaderReflective = `uniform mat4 textureMatrix;
uniform float time;

varying vec4 mirrorCoord;
varying vec4 worldPosition;

#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>

const float uBigWavesElevationY = 0.18;
const float uBigWavesElevationX = 0.11; //default 0.15
const vec2 uBigWavesFrequency =  vec2(1.0,0.5); //default vec2(4,1.5)
const float uBigWavesSpeed =  0.5;

const float uSmallWavesElevation =  0.07; //default 0.15
const float uSmallWavesFrequency =  3.0;
const float uSmallWavesSpeed =  0.2;
const float uSmallIterations =  1.0; //default 4.0


varying float vElevation;
varying vec2 vUv;


// Classic Perlin 3D Noise 
// by Stefan Gustavson
//
vec4 permute(vec4 x)
{
    return mod(((x*34.0)+1.0)*x, 289.0);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
    vec3 Pi0 = floor(P); // Integer part for indexing
    vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
    Pi0 = mod(Pi0, 289.0);
    Pi1 = mod(Pi1, 289.0);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
    return 2.2 * n_xyz;
}



void main() {
mirrorCoord = modelMatrix * vec4( position, 1.0 );
worldPosition = mirrorCoord.xyzw;
mirrorCoord = textureMatrix * mirrorCoord;


vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );

// X-Elevation
float xElevation = sin(mvPosition.x * uBigWavesFrequency.x + time * 10.0 * uBigWavesSpeed) *
                    sin(mvPosition.z * uBigWavesFrequency.y + time * 10.0 * uBigWavesSpeed) *
                    uBigWavesElevationX;

for(float i = 1.0; i <= uSmallIterations; i++)
{
    xElevation -= abs(cnoise(vec3(mvPosition.xz * uSmallWavesFrequency * i, time * 10.0 * uSmallWavesSpeed)) * uSmallWavesElevation / i);
}

// X-Elevation
float yElevation = sin(mvPosition.y * uBigWavesFrequency.y + time * 10.0 * uBigWavesSpeed) *
                    sin(mvPosition.z * uBigWavesFrequency.y + time * 10.0 * uBigWavesSpeed) *
                    uBigWavesElevationY;

for(float i = 1.0; i <= uSmallIterations; i++)
{
    yElevation -= abs(cnoise(vec3(mvPosition.yz * uSmallWavesFrequency * i, time * 10.0 * uSmallWavesSpeed)) * uSmallWavesElevation / i);
}


mvPosition.y += xElevation + yElevation;

vElevation = xElevation + yElevation;
vUv = uv;

gl_Position = projectionMatrix * mvPosition;

#include <beginnormal_vertex>
#include <defaultnormal_vertex>
#include <logdepthbuf_vertex>
#include <fog_vertex>
#include <shadowmap_vertex>
}



// void main() {
//     vec3 pos = position;
// pos.x += sin(pos.x * 0.5 + time*5.0) * 0.02;
// mirrorCoord = modelMatrix * vec4( pos, 1.0 );
// worldPosition = mirrorCoord.xyzw;
// mirrorCoord = textureMatrix * mirrorCoord;


// //pos.x += cos(pos.y * 0.5 + time*5.0) * 0.02;
// pos.z += sin(pos.x * 0.5 + time*5.0) * 0.02;
// pos.z += cos(pos.y * 0.5 + time*5.0) * 0.02;
// // pos.y += sin(pos.x * 0.5 + time*5.0) * 0.02;
// // pos.y += cos(pos.y * 0.5 + time*5.0) * 0.02;

// vec4 mvPosition =  modelViewMatrix * vec4( pos, 1.0 );
// //mvPosition.z += sin(mvPosition.x + time)*0.5 + sin(mvPosition.y  + time)*0.5;

// gl_Position = projectionMatrix * mvPosition;

// #include <beginnormal_vertex>
// #include <defaultnormal_vertex>
// #include <logdepthbuf_vertex>
// #include <fog_vertex>
// #include <shadowmap_vertex>
// }`;

class WaterSimple extends Mesh {
  constructor(geometry, options = {}) {
    super(geometry);

    this.isWater = true;

    const scope = this;

    const textureWidth =
      options.textureWidth !== undefined ? options.textureWidth : 512;
    const textureHeight =
      options.textureHeight !== undefined ? options.textureHeight : 512;

    const clipBias = options.clipBias !== undefined ? options.clipBias : 0.0;
    const alpha = options.alpha !== undefined ? options.alpha : 1.0;
    const time = options.time !== undefined ? options.time : 0.0;
    const normalSampler =
      options.waterNormals !== undefined ? options.waterNormals : null;
    const sunDirection =
      options.sunDirection !== undefined
        ? options.sunDirection
        : new Vector3(0.70707, 0.70707, 0.0);
    const sunColor = new Color(
      options.sunColor !== undefined ? options.sunColor : 0xffffff
    );
    const waterColor = new Color(
      options.waterColor !== undefined ? options.waterColor : 0x7f7f7f
    );
    const eye = options.eye !== undefined ? options.eye : new Vector3(0, 0, 0);
    const distortionScale =
      options.distortionScale !== undefined ? options.distortionScale : 20.0;
    const side = options.side !== undefined ? options.side : FrontSide;
    const fog = options.fog !== undefined ? options.fog : false;
    const underwaterBlueIntensity =
      options.underwaterBlueIntensity !== undefined
        ? options.underwaterBlueIntensity
        : 0.0;

    //

    const mirrorPlane = new Plane();
    const normal = new Vector3();
    const mirrorWorldPosition = new Vector3();
    const cameraWorldPosition = new Vector3();
    const rotationMatrix = new Matrix4();
    const lookAtPosition = new Vector3(0, 0, -1);
    const clipPlane = new Vector4();

    const view = new Vector3();
    const target = new Vector3();
    const q = new Vector4();

    const textureMatrix = new Matrix4();

    const mirrorCamera = new PerspectiveCamera();

    const renderTarget = new WebGLRenderTarget(textureWidth, textureHeight);

    const mirrorShader = {
      name: "MirrorShader",

      uniforms: UniformsUtils.merge([
        UniformsLib["fog"],
        UniformsLib["lights"],
        {
          normalSampler: { value: null },
          mirrorSampler: { value: null },
          alpha: { value: 1.0 },
          time: { value: 0.0 },
          size: { value: 5.5 }, //Default value 1.0, increasing the value adding roughness
          distortionScale: { value: 20.0 },
          textureMatrix: { value: new Matrix4() },
          sunColor: { value: new Color(0x7f7f7f) },
          sunDirection: { value: new Vector3(0.70707, 0.70707, 0) },
          eye: { value: new Vector3() },
          waterColor: { value: new Color(0x555555) },
          underwaterBlueIntensity: { value: 0.0 },
        },
      ]),

      vertexShader: vShaderReflective,

      fragmentShader: fShaderReflective,
    };

    const material = new ShaderMaterial({
      name: mirrorShader.name,
      uniforms: UniformsUtils.clone(mirrorShader.uniforms),
      vertexShader: mirrorShader.vertexShader,
      fragmentShader: mirrorShader.fragmentShader,
      lights: true,
      side: side,
      fog: fog,
    });

    material.uniforms["mirrorSampler"].value = renderTarget.texture;
    material.uniforms["textureMatrix"].value = textureMatrix;
    material.uniforms["alpha"].value = alpha;
    material.uniforms["time"].value = time;
    material.uniforms["normalSampler"].value = normalSampler;
    material.uniforms["sunColor"].value = sunColor;
    material.uniforms["waterColor"].value = waterColor;
    material.uniforms["sunDirection"].value = sunDirection;
    material.uniforms["distortionScale"].value = distortionScale;
    material.uniforms["underwaterBlueIntensity"].value =
      underwaterBlueIntensity;

    material.uniforms["eye"].value = eye;

    scope.material = material;

    scope.onBeforeRender = function (renderer, scene, camera) {
      mirrorWorldPosition.setFromMatrixPosition(scope.matrixWorld);
      cameraWorldPosition.setFromMatrixPosition(camera.matrixWorld);

      rotationMatrix.extractRotation(scope.matrixWorld);

      normal.set(0, 0, 1);
      normal.applyMatrix4(rotationMatrix);

      view.subVectors(mirrorWorldPosition, cameraWorldPosition);

      // Avoid rendering when mirror is facing away

      if (view.dot(normal) > 0) return;

      view.reflect(normal).negate();
      view.add(mirrorWorldPosition);

      rotationMatrix.extractRotation(camera.matrixWorld);

      lookAtPosition.set(0, 0, -1);
      lookAtPosition.applyMatrix4(rotationMatrix);
      lookAtPosition.add(cameraWorldPosition);

      target.subVectors(mirrorWorldPosition, lookAtPosition);
      target.reflect(normal).negate();
      target.add(mirrorWorldPosition);

      mirrorCamera.position.copy(view);
      mirrorCamera.up.set(0, 1, 0);
      mirrorCamera.up.applyMatrix4(rotationMatrix);
      mirrorCamera.up.reflect(normal);
      mirrorCamera.lookAt(target);

      mirrorCamera.far = camera.far; // Used in WebGLBackground

      mirrorCamera.updateMatrixWorld();
      mirrorCamera.projectionMatrix.copy(camera.projectionMatrix);

      // Update the texture matrix
      textureMatrix.set(
        0.5,
        0.0,
        0.0,
        0.5,
        0.0,
        0.5,
        0.0,
        0.5,
        0.0,
        0.0,
        0.5,
        0.5,
        0.0,
        0.0,
        0.0,
        1.0
      );
      textureMatrix.multiply(mirrorCamera.projectionMatrix);
      textureMatrix.multiply(mirrorCamera.matrixWorldInverse);

      // Now update projection matrix with new clip plane, implementing code from: http://www.terathon.com/code/oblique.html
      // Paper explaining this technique: http://www.terathon.com/lengyel/Lengyel-Oblique.pdf
      mirrorPlane.setFromNormalAndCoplanarPoint(normal, mirrorWorldPosition);
      mirrorPlane.applyMatrix4(mirrorCamera.matrixWorldInverse);

      clipPlane.set(
        mirrorPlane.normal.x,
        mirrorPlane.normal.y,
        mirrorPlane.normal.z,
        mirrorPlane.constant
      );

      const projectionMatrix = mirrorCamera.projectionMatrix;

      q.x =
        (Math.sign(clipPlane.x) + projectionMatrix.elements[8]) /
        projectionMatrix.elements[0];
      q.y =
        (Math.sign(clipPlane.y) + projectionMatrix.elements[9]) /
        projectionMatrix.elements[5];
      q.z = -1.0;
      q.w =
        (1.0 + projectionMatrix.elements[10]) / projectionMatrix.elements[14];

      // Calculate the scaled plane vector
      clipPlane.multiplyScalar(2.0 / clipPlane.dot(q));

      // Replacing the third row of the projection matrix
      projectionMatrix.elements[2] = clipPlane.x;
      projectionMatrix.elements[6] = clipPlane.y;
      projectionMatrix.elements[10] = clipPlane.z + 1.0 - clipBias;
      projectionMatrix.elements[14] = clipPlane.w;

      eye.setFromMatrixPosition(camera.matrixWorld);

      // Render

      const currentRenderTarget = renderer.getRenderTarget();

      const currentXrEnabled = renderer.xr.enabled;
      const currentShadowAutoUpdate = renderer.shadowMap.autoUpdate;

      scope.visible = false;

      renderer.xr.enabled = false; // Avoid camera modification and recursion
      renderer.shadowMap.autoUpdate = false; // Avoid re-computing shadows

      renderer.setRenderTarget(renderTarget);

      renderer.state.buffers.depth.setMask(true); // make sure the depth buffer is writable so it can be properly cleared, see #18897

      if (renderer.autoClear === false) renderer.clear();
      renderer.render(scene, mirrorCamera);

      scope.visible = true;

      renderer.xr.enabled = currentXrEnabled;
      renderer.shadowMap.autoUpdate = currentShadowAutoUpdate;

      renderer.setRenderTarget(currentRenderTarget);

      // Restore viewport

      const viewport = camera.viewport;

      if (viewport !== undefined) {
        renderer.state.viewport(viewport);
      }
    };
  }
}

export default WaterSimple;
