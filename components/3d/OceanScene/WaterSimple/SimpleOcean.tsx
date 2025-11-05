"use client";

import { Text } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";
import WaterSimple from "./WaterSimple.js";

const SimpleOcean = () => {
  const groupRef = useRef<THREE.Group>(null!);
  const waterMesh = useRef<THREE.Mesh | null>(null);
  const textRef = useRef<THREE.Group>(null!);

  // ✅ Load water normal texture
  const waterNormals = useLoader(
    THREE.TextureLoader,
    "/textures/ocean/waternormals.jpg"
  );
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

  // 🎛 Leva Controls
  const {
    position,
    rotation,
    waterColor,
    distortionScale,
    waveSpeed,
    waveStrength,
    turbulence,
    waveIntensity,
    textPosition,

  } = useControls("🌊 Ocean Controls", {
    position: { value: [0, -50, 0], step: 0.1, label: "Ocean Position (x,y,z)" },
    rotation: { value: [-Math.PI / 2, 0, 0], step: 0.01, label: "Rotation" },
    waterColor: "#10bfe1",
    distortionScale: { value: 120, min: 1, max: 200, step: 1 },
    waveSpeed: { value: 0.4, min: 0.1, max: 6, step: 0.1 },
    waveStrength: { value: 6.0, min: 0.5, max: 10, step: 0.1 },
    turbulence: { value: 0.9, min: 0, max: 2, step: 0.05 },
    waveIntensity: { value: 2.5, min: 0.5, max: 3, step: 0.1 },
    textPosition: {
      value: [0, -1, 0],
      step: 1,
      label: "Text Absolute Position (x,y,z)",
    },
  });

  // ✅ Create and add the water plane
  useEffect(() => {
    if (!groupRef.current) return;

    const water = new WaterSimple(
      new THREE.PlaneGeometry(4000, 4000, 1024, 1024),
      {
        textureWidth: 2048,
        textureHeight: 2048,
        waterNormals,
        sunDirection: new THREE.Vector3(1, 1, 1).normalize(),
        sunColor: 0xffffff,
        waterColor,
        distortionScale,
        side: THREE.DoubleSide,
      }
    );

    water.rotation.set(rotation[0], rotation[1], rotation[2]);
    groupRef.current.add(water);
    waterMesh.current = water;

    // start waves instantly
    const material: any = water.material;
    if (material?.uniforms?.time) material.uniforms.time.value = Math.random() * 500;

    return () => {
      groupRef.current?.remove(water);
    };
  }, [waterNormals, waterColor, distortionScale, rotation]);

  // ✅ Animate waves
 // ✅ Animate waves
useFrame(({ clock }) => {
  if (!waterMesh.current) return;
  const t = clock.getElapsedTime();
  const material: any = waterMesh.current.material;
  
  // Wave movement
  if (material?.uniforms?.time) material.uniforms.time.value = t * waveSpeed + 100;

  // Turbulence
  if (material.uniforms.distortionScale)
    material.uniforms.distortionScale.value =
      distortionScale * (1 + Math.sin(t * 0.8) * turbulence * 0.5);

  // ✅ Live update the water color
  if (material.uniforms.waterColor) {
    material.uniforms.waterColor.value.set(waterColor);
  }
});


  return (
    <>
      {/* 🌊 Ocean */}
      <group ref={groupRef} position={position} />

      {/* 🩵 Absolutely Positioned Floating Text */}
      <group ref={textRef} position={textPosition}>
        <Text
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.woff"
          letterSpacing={0.1}
          // outlineWidth={0.3}
         // outlineColor="#00c8ff"

          // outlineOpacity={0.9}
          renderOrder={20}
        >
          Beyond Façades. Beyond Borders.
        </Text>
      </group>
    </>
  );
};

export default SimpleOcean;
