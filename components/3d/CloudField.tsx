import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
 
export default function CloudField() {
  const group = useRef<THREE.Group>(null!); // Z-axis clouds
  const sideGroup = useRef<THREE.Group>(null!); // X-axis clouds
 
  const texture = useTexture("/office_building/textures/cloud10.png");
  texture.colorSpace = THREE.SRGBColorSpace;
 
  const fog = new THREE.Fog(0x4584b4, -100, 3000);
 
  const material = new THREE.ShaderMaterial({
    uniforms: {
      map: { value: texture },
      fogColor: { value: fog.color },
      fogNear: { value: fog.near },
      fogFar: { value: fog.far },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D map;
      uniform vec3 fogColor;
      uniform float fogNear;
      uniform float fogFar;
      varying vec2 vUv;
      void main() {
        float depth = gl_FragCoord.z / gl_FragCoord.w;
        float fogFactor = smoothstep(fogNear, fogFar, depth);
        vec4 tex = texture2D(map, vUv);
        tex.a *= pow(gl_FragCoord.z, 20.0);
        gl_FragColor = mix(tex, vec4(fogColor, tex.a), fogFactor);
      }
    `,
    transparent: true,
    depthWrite: false,
    depthTest: true,
  });
 
  const lightMaterial = new THREE.ShaderMaterial({
    uniforms: {
      map: { value: texture },
      brightness: { value: 1.6 },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D map;
      uniform float brightness;
      varying vec2 vUv;
      void main() {
        vec4 tex = texture2D(map, vUv);
        tex.rgb *= brightness;
        gl_FragColor = vec4(tex.rgb, tex.a * 0.55);
      }
    `,
    transparent: true,
    depthWrite: false,
    depthTest: false,
  });
 
  // Helper to create cloud geometry (same as your original)
  const createCloudGeometry = (
    count: number,
    rangeZ: number,
    rangeX: number,
    yOffset: number,
    scaleMultiplier: number
  ) => {
    const geometry = new THREE.BufferGeometry();
    const tempPlane = new THREE.PlaneGeometry(64, 64);
    const positions: number[] = [];
    const uvs: number[] = [];
    const indices: number[] = [];
    let indexOffset = 0;
 
    for (let i = 0; i < count; i++) {
      const x = Math.random() * rangeX - rangeX / 2;
      const y = yOffset - Math.random() * Math.random() * 100;
      const z = Math.random() * rangeZ - rangeZ / 2;
      const rotation = Math.random() * Math.PI;
      const scale = (Math.random() * 1.5 + 1.0) * scaleMultiplier;
 
      const posAttr = tempPlane.attributes.position as THREE.BufferAttribute;
      const uvAttr = tempPlane.attributes.uv as THREE.BufferAttribute;
      const idx = tempPlane.index!;
 
      for (let j = 0; j < posAttr.count; j++) {
        const vx = posAttr.getX(j) * scale;
        const vy = posAttr.getY(j) * scale;
 
        const cos = Math.cos(rotation);
        const sin = Math.sin(rotation);
        const rx = vx * cos - vy * sin;
        const ry = vx * sin + vy * cos;
 
        positions.push(rx + x, ry + y, z);
        uvs.push(uvAttr.getX(j), uvAttr.getY(j));
      }
 
      for (let j = 0; j < idx.count; j++) {
        indices.push(idx.getX(j) + indexOffset);
      }
 
      indexOffset += posAttr.count;
    }
 
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
    geometry.setIndex(indices);
 
    return geometry;
  };
 
  const forwardClouds = createCloudGeometry(4000, 14000, 1000, 0.5, 1.0);
  const sideClouds = createCloudGeometry(1800, 2000, 9000, 400, 3.2);
 
  const target = useRef({ x: 0, y: 0 });
  const lerpFactor = 0.08;
 
  const zLoop = 8000;
  const xLoop = 9000;
 
  useFrame(({ mouse, clock }) => {
    const elapsed = clock.getElapsedTime() * 30;
 
    // Smooth mouse parallax
    target.current.x += (mouse.x * 1200 - target.current.x) * lerpFactor;
    target.current.y += (-mouse.y * 1300 - target.current.y) * lerpFactor;
 
    // Infinite Z-axis clouds
    if (group.current) {
      const zPos = -((elapsed % zLoop) + zLoop) % zLoop; // seamless modulo
      group.current.position.z = zPos;
      // group.current.position.set(
      //   target.current.x * 0.01,
      //   target.current.y * 0.01,
      //   zPos
      // );
    }
 
    // Infinite X-axis drifting clouds
    if (sideGroup.current) {
      const xPos = ((elapsed * 15.15) % xLoop) - xLoop / 2;
      sideGroup.current.position.set(xPos, 350 + target.current.y * 0.02, 0);
    }
  });
 
  return (
    <>
      <group ref={group} position={[0, 5, 0]}>
        <mesh geometry={forwardClouds} material={material} />
      </group>
 
      <group ref={sideGroup} scale={0.2}>
        <mesh geometry={sideClouds} material={lightMaterial} />
      </group>
    </>
  );
}
 