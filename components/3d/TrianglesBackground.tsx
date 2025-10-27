"use client";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function TrianglesBackgroundScene() {
  const ref = useRef<THREE.Points>(null!);

  return (
    <group>
      <Points ref={ref} positions={new Float32Array([
        -5, 2, -10,
        5, 2, -10,
        0, -5, -10,
      ])}>
        <PointMaterial
          transparent
          color="#00baff"
          size={0.1}
          sizeAttenuation
        />
      </Points>
    </group>
  );
}

export default function TrianglesBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <TrianglesBackgroundScene />
      </Canvas>
    </div>
  );
}
