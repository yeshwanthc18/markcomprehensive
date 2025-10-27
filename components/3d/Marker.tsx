"use client"
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

type MarkerProps = {
  position: [number, number, number];
  onClick: () => void;
};

function Marker({ position, onClick }: MarkerProps) {
  const meshRef = useRef<Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; 
    }
  });
  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <sphereGeometry args={[2, 16, 16]} />
      <meshStandardMaterial color="#01adff" emissive="#01adff" />
    </mesh>
  );
}

export default Marker;