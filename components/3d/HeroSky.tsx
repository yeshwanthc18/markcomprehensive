import { useTexture } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { Mesh } from "three";
 
const vShaderBg = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;
 
const fShaderBg = `
varying vec2 vUv;
uniform sampler2D uTexture;
uniform float uTransparency;
 
void main() {
  vec2 flippedUv = vec2(vUv.x, 1.0 - vUv.y);
  vec4 texel = texture2D(uTexture, flippedUv);
 
  // Gamma correction
  texel.rgb = pow(texel.rgb, vec3(1));
 
  // Apply transparency
  texel.a *= uTransparency;
 
  gl_FragColor = texel;
}
`;
 
type HeroSkyProps = {
  transparency?: number; // optional prop, default 1.0
};
 
const HeroSky: React.FC<HeroSkyProps> = ({ transparency = 0.4 }) => {
  const oceanBackgroundRef = useRef<Mesh>(null);
  const skyTexture = useTexture("/office_building/textures/sky.png");
 
  const bgShaderUniforms = useMemo(
    () => ({
      uTexture: { value: skyTexture },
      uTransparency: { value: transparency },
    }),
    [skyTexture, transparency]
  );
 
  // update transparency dynamically if prop changes
  if (bgShaderUniforms.uTransparency.value !== transparency) {
    bgShaderUniforms.uTransparency.value = transparency;
  }
 
  return (
    <mesh
      ref={oceanBackgroundRef}
      position={[0, 7, -35.8]}
      scale={[3, 1, 1]}
    >
      <planeGeometry args={[20, 20, 1, 1]} />
      <shaderMaterial
        vertexShader={vShaderBg}
        fragmentShader={fShaderBg}
        uniforms={bgShaderUniforms}
        transparent
      />
    </mesh>
  );
};
 
export default HeroSky;
 