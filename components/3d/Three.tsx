"use client";

import {
  Environment,
  Hud,
  Text,
  useGLTF,
  Html,
  useProgress,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, Suspense } from "react";
import * as THREE from "three";
import HeroSky from "./HeroSky";
import ButtonPrimary from "../layout/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CloudField from "./CloudField";
import Birds from "./Birds";

// 🌀 Loader component for 3D scene
function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center text-black">
        <div className="w-10 h-10 border-4 border-t-transparent border-black rounded-full animate-spin mb-3"></div>
        <p className="text-sm font-medium">{progress.toFixed(0)}% loaded</p>
      </div>
    </Html>
  );
}

const birdPositions = [
  /*Far Birds*/
  { position: [1, 2, 0], rotation: [0, 0, 0], scale: 0.05 },
  { position: [-3, 2, 0], rotation: [0, Math.PI, 0], scale: 0.1 },

  /*Top Birds*/
  { position: [-2, 2, -9], rotation: [0, -1, 0], scale: 0.2 },
  {
    position: [-2, 2, -9],
    rotation: [0, -1, 0],
    scale: 0.1,
  },

  /*Bottom Birds*/
  { position: [3, 0, -9], rotation: [0, 1, 0], scale: 0.15 },
  { position: [3, 0.1, -10], rotation: [0, 1, 0], scale: 0.15 },
];
function StreetScene({
  modelContainerRef,
}: {
  modelContainerRef: React.RefObject<HTMLDivElement>;
}) {
  const { scene } = useGLTF("/office_building/streetview.glb");
  const modelRef = useRef<THREE.Group>(null);

  const { scrollYProgress } = useScroll({
    target: modelContainerRef,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.4,
  });

  const position = [1.2, -1.9, 3.9];
  const rotation = [-12.76, 0.07, 0];

  useFrame(() => {
    const scroll = smoothScroll.get();
    if (modelRef.current) {
      modelRef.current.rotation.y = rotation[1] - scroll * 0.1;
      const baseZ = position[1];
      const baseRotx = rotation[0];
      modelRef.current.rotation.x = baseRotx - scroll * 0.1;
      modelRef.current.position.z = baseZ + scroll * Math.PI * 2.5;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={position}
      rotation={rotation}
      scale={2}
    />
  );
}

export default function ThreeDViewer() {
  const modelContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: modelContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <div
      ref={modelContainerRef}
      style={{
        width: "100vw",
        height: "250vh",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "sticky",
          top: 0,
        }}
      >
        {/* Overlay content */}
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 500,
          }}
        >
          <motion.div
            style={{
              opacity,
              width: "40%",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              border: "1.5px solid rgba(255, 255, 255, 0.5)",
              height: "fit-content",
              backdropFilter: "blur(5px)",
              borderRadius: "2rem",
              padding: "2rem",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <h1
              className="text-center text-4xl md:text-5xl lg:text-4.5xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#9be7ff] to-[#01adff] animate-gradient-x"
              style={{ color: "#1c345c" }}
            >
              Engineering the future of modern Architecture
            </h1>
            <p style={{ color: "#1c345c" }}>
              Combining Design vision with Engeneering Excellence, We create
              façades that perform beautifully across materials,climates and
              cityspaces.
            </p>
            <ButtonPrimary>
              <Link
                href="/services"
                className="flex items-center justify-center"
              >
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </ButtonPrimary>
          </motion.div>
        </div>

        {/* Canvas + Loader */}
        <Canvas camera={{ fov: 85 }}>
          <Suspense fallback={<Loader />}>
            {birdPositions.map((item, index) => (
              <Birds
                key={index}
                position={new THREE.Vector3(...item.position)}
                rotation={new THREE.Euler(...item.rotation)}
                scale={item.scale}
              />
            ))}
            <Hud>
              <ambientLight intensity={0.8} color={0xffcadde9} />
              <Environment preset="city" />
              <StreetScene modelContainerRef={modelContainerRef} />
              <HeroSky />
            </Hud>
            <CloudField />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

useGLTF.preload("/office_building/mark_building_v4.glb");
