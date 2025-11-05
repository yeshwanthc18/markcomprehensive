"use client";

import {
  Environment,
  Hud,
  Html,
  useGLTF,
  useProgress,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { EffectComposer, HueSaturation } from "@react-three/postprocessing";

import { useRef, Suspense } from "react";
import * as THREE from "three";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useControls, Leva } from "leva";

import Birds from "./Birds";
import ButtonPrimary from "../layout/Button";
import HeroSky from "./HeroSky";
import OceanBackground from "./OceanScene/OceanBackground";
import OceanScene from "./OceanScene/OceanScene";
import ScrollableOceanScene from "./OceanScene/WaterSimple/ScrollablaOceanScene";
import CloudField from "./CloudField";

//
// 🌀 Loader
//
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

//
// 🐦 Bird positions
//
const birdPositions = [
  { position: [1, 2, 0], rotation: [0, 0, 0], scale: 0.05 },
  { position: [-3, 2, 0], rotation: [0, Math.PI, 0], scale: 0.1 },
  { position: [-2, 2, -9], rotation: [0, -1, 0], scale: 0.2 },
  { position: [-2, 2, -9], rotation: [0, -1, 0], scale: 0.1 },
  { position: [3, 0, -9], rotation: [0, 1, 0], scale: 0.15 },
  { position: [3, 0.1, -10], rotation: [0, 1, 0], scale: 0.15 },
];

//
// 🏙️ Street Scene (scroll + Leva control)
//
function StreetScene({
  modelContainerRef,
}: {
  modelContainerRef: React.RefObject<HTMLDivElement>;
}) {
  const { scene } = useGLTF("/office_building/streetview.glb");
  const modelRef = useRef<THREE.Group>(null);

  // 🎚️ Position / rotation / scale controls
  const { posX, posY, posZ, rotX, rotY, rotZ, scale } = useControls(
    "Street Scene",
    {
      posX: { value: 56.0, min: -100, max: 100, step: 0.1 },
      posY: { value: -9, min: -100, max: 100, step: 0.1 },
      posZ: { value: -64.7, min: -100, max: 100, step: 0.1 },
      rotX: { value: -0.07, min: -Math.PI, max: Math.PI, step: 0.01 },
      rotY: { value: 0.0, min: -Math.PI, max: Math.PI, step: 0.01 },
      rotZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
      scale: { value: 3.6, min: 0.1, max: 10, step: 0.1 },
    }
  );

  // 🌀 Scroll animation
  const { scrollYProgress } = useScroll({
    target: modelContainerRef,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.4,
  });

  useFrame(() => {
    const scroll = smoothScroll.get();
    if (modelRef.current) {
      modelRef.current.rotation.y = rotY - scroll * 0.001;
      modelRef.current.rotation.x = rotX - scroll * 0.001;
      modelRef.current.position.z = posZ + scroll * Math.PI * 4.5;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={[posX, posY, posZ]}
      scale={scale}
      rotation={[rotX, rotY, rotZ]}
      renderOrder={0}
    />
  );
}

//
// 🌅 Main Scene Viewer
//
export default function ThreeDViewer() {
  const modelContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: modelContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  const { saturation } = useControls("Post FX", {
  saturation: { value: 0, min: -1, max: 1, step: 0.05 },
});


  // 🎥 Camera FOV control
  const { fov } = useControls("Camera", {
    fov: { value: 30, min: 10, max: 100, step: 1 },
  });

  // 💡 Lighting controls
  const {
    ambientIntensity,
    ambientColor,
    dirIntensity,
    dirColor,
    dirX,
    dirY,
    dirZ,
    hemiIntensity,
    hemiColorSky,
    hemiColorGround,
  } = useControls("Lighting", {
    ambientIntensity: { value: 0.3, min: 0, max: 5, step: 0.1 },
    ambientColor: "#ffffff",
    dirIntensity: { value: 5.5, min: 0, max: 50, step: 0.1 },
    dirColor: "#ffffff",
    dirX: { value: 1, min: -20, max: 20, step: 0.5 },
    dirY: { value: 17, min: -20, max: 20, step: 0.5 },
    dirZ: { value: 19.5, min: -20, max: 20, step: 0.5 },
    hemiIntensity: { value: 0.4, min: 0, max: 2, step: 0.1 },
    hemiColorSky: "#87ceeb",
    hemiColorGround: "#ffffff",
  });

  return (
    <div
      ref={modelContainerRef}
      style={{
        width: "100vw",
        height: "250vh",
        position: "relative",
      }}
    >
      {/* 🎚️ Leva Controls */}
      <Leva collapsed />

      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "sticky",
          top: 0,
        }}
      >
        {/* Overlay Content */}
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
            zIndex: 1,
          }}
        >
          <motion.div
            style={{
              opacity,
              width: "40%",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              border: "1.5px solid rgba(255, 255, 255, 0.5)",
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
              Combining Design vision with Engineering Excellence, We create
              façades that perform beautifully across materials, climates and
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

        {/* 🖼️ 3D Scene */}
        <Canvas camera={{ fov }}>
          <Suspense fallback={<Loader />}>
            {/* 🐦 Birds */}
            {birdPositions.map((item, index) => (
              <Birds
                key={index}
                position={new THREE.Vector3(...item.position)}
                rotation={new THREE.Euler(...item.rotation)}
                scale={item.scale}
              />
            ))}

            {/* Lights and Environment */}
            <Hud>
              <ambientLight intensity={ambientIntensity} color={ambientColor} />
              <directionalLight
                intensity={dirIntensity}
                color={dirColor}
                position={[dirX, dirY, dirZ]}
                castShadow
              />
              <hemisphereLight
                intensity={hemiIntensity}
                groundColor={hemiColorGround}
              />
              <Environment preset="city" />

              {/* 🏙️ Street Scene */}
              <StreetScene modelContainerRef={modelContainerRef} />
            </Hud>

            {/* 🌊 Simple Ocean — put before lights, but control render order */}
            {/* <SimpleOcean /> */}

            <ScrollableOceanScene modelContainerRef={modelContainerRef} />

            <HeroSky />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

useGLTF.preload("/office_building/streetview.glb");
