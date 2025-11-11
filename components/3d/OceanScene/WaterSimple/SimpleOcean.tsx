"use client";

import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import WaterSimple from "./WaterSimple.js";
import { Text } from "@react-three/drei";

const SimpleOcean = () => {
  const waterRef = useRef<THREE.Group>(null);
  const textRef = useRef<THREE.Group>(null!);

  const waterNormals = useLoader(
    THREE.TextureLoader,
    "/textures/ocean/waternormals.jpg"
  );

  const waterColor = "#1f98a8";

  const position: [number, number, number] = [0, -2, -5];
  const rotation: [number, number, number] = [-1.72, 0, 0];
  const scale: [number, number, number] = [55, 45, 40];
  const textPosition: [number, number, number] = [0, -1, 0];
  const waveIntensity = 0.2;
  const waveSpeed = 1;

  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

  useEffect(() => {
    if (waterRef.current) {
      waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

      const water = new WaterSimple(new THREE.PlaneGeometry(2, 2, 25, 25), {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: waterNormals,
        sunDirection: new THREE.Vector3(20, 1, 1).normalize(),
        sunColor: 0xffffff,
        waterColor: waterColor,
        distortionScale: 0.7,
        side: 2,
      });

      waterRef.current.add(water);

      return () => {
        waterRef.current?.remove(water);
      };
    }
  }, [waterNormals, waterColor]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Animate water
    if (waterRef.current) {
      const waterObj = waterRef.current.children[0] as WaterSimple;
      // @ts-ignore
      waterObj.material.uniforms.time.value -= 0.05 / 60.0;
    }

    // Animate text rotation and wave motion
    if (textRef.current) {
      textRef.current.rotation.x = -Math.sin(time) * 0.01;
      textRef.current.rotation.y = Math.sin(time) * 0.01;
      textRef.current.rotation.z = Math.cos(time) * 0.01;

      textRef.current.position.y =
        textPosition[1];
      textRef.current.position.x =
        textPosition[0] + Math.sin(time * 0.1 * waveSpeed) * (waveIntensity / 1);
      textRef.current.rotation.z = Math.sin(time * waveSpeed * 0.8) * 0.05;
    }
  });

  return (
    <>
      {/* 🌊 Water Surface */}
      <group
        ref={waterRef}
        position={position}
        rotation={rotation}
        scale={scale}
      />

      {/* 🪶 Floating Text */}
      <group ref={textRef} position={textPosition} rotation={[1, 1, 0]}>
        <Text
          fontSize={0.15}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Urbanist-SemiBoldItalic.ttf"
          letterSpacing={0.1}
          renderOrder={20}
        >
          Beyond Façades. Beyond Borders.
        </Text>
      </group>
    </>
  );
};

export default SimpleOcean;
