"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import WaterSimple from "./WaterSimple.js";

const SimpleOcean = () => {
  const { scene } = useThree();
  const waterRef = useRef<THREE.Group>(null);

  // ✅ Load normal map
  const waterNormals = useLoader(
    THREE.TextureLoader,
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg"
  );

  // ✅ Add Leva controls for position, rotation, and scale
  const { posX, posY, posZ, rotX, rotY, rotZ, scaleX, scaleY, scaleZ } =
    useControls("🌊 SimpleOcean Controls", {
      posX: { value: -4, min: -20, max: 20, step: 0.1 },
      posY: { value: -1, min: -10, max: 10, step: 0.1 },
      posZ: { value: -5, min: -20, max: 20, step: 0.1 },
      rotX: { value: -Math.PI / 2, min: -Math.PI, max: Math.PI, step: 0.01 },
      rotY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
      rotZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
      scaleX: { value: 30, min: 1, max: 100, step: 1 },
      scaleY: { value: 20, min: 1, max: 100, step: 1 },
      scaleZ: { value: 5, min: 1, max: 100, step: 1 },
    });

  // ✅ Initialize Water
  useEffect(() => {
    if (waterRef.current) {
      waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

      const water = new WaterSimple(new THREE.PlaneGeometry(1, 1, 32, 32), {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: waterNormals,
        sunDirection: new THREE.Vector3(10, 1, 1).normalize(),
        sunColor: 0xffffff,
        waterColor: 0x024f83,
        distortionScale: -60,
        side: 2,
      });

      waterRef.current.add(water);

      return () => {
        waterRef.current?.remove(water);
      };
    }
  }, [waterNormals]);

  // ✅ Animate water
  useFrame(() => {
    if (waterRef.current) {
      const water = waterRef.current.children[0] as WaterSimple;
      //@ts-ignore
      water.material.uniforms["time"].value -= 0.4 / 60.0;
    }
  });

  return (
    <group
      ref={waterRef}
      position={[posX, posY, posZ]}
      rotation={[rotX, rotY, rotZ]}
      scale={[scaleX, scaleY, scaleZ]}
    />
  );
};

export default SimpleOcean;
