"use client";

import {
  Environment,
  Hud,
  Html,
  useGLTF,
  useProgress,
  Sky,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Birds from "./Birds";
import ButtonPrimary from "../layout/Button";
import HeroSky from "./HeroSky";
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
  { position: [3, 0.1, -10], rotation: [0, 1, 0], scale: 0.15 },
];

//
// 🏙️ Street Scene (responsive scaling + scroll animation)
//
function StreetScene({
  modelContainerRef,
}: {
  modelContainerRef: React.RefObject<HTMLDivElement>;
}) {
  const { scene } = useGLTF("/office_building/streetview.glb");
  const modelRef = useRef<THREE.Group>(null);
  const { size } = useThree();

  // Adjust scale dynamically for mobile
  const [scale, setScale] = useState(3.6);

  // useEffect(() => {
  //   if (size.width < 768) setScale(1.8);
  //   else if (size.width < 1024) setScale(2.5);
  //   else setScale(3.6);
  // }, [size.width]);

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
      modelRef.current.rotation.y = 0.0 - scroll * 0.001;
      modelRef.current.rotation.x = -0.07 - scroll * 0.001;
      modelRef.current.position.z = -64.7 + scroll * Math.PI * 4.5;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={[56.0, -9, -64.7]}
      scale={scale}
      rotation={[-0.07, 0.0, 0]}
      renderOrder={0}
    />
  );
}

//
// 🌅 Main Scene Viewer
//
export default function ThreeDViewer() {
  const modelContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: modelContainerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  // ✅ Responsive camera FOV
  const fov = isMobile ? 45 : 27;

  // ✅ Lighting defaults
  const ambientIntensity = 0.3;
  const ambientColor = "#ffffff";

  const dirIntensity = 5.5;
  const dirColor = "#ffffff";
  const dirX = 1;
  const dirY = 17;
  const dirZ = 19.5;

  const hemiIntensity = 0.4;
  const hemiColorGround = "#ffffff";

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
        {/* Overlay Content */}
        <div
          className="absolute inset-0 flex justify-center items-center z-10 p-4"
        >
          <motion.div
            style={{
              opacity,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              border: "1.5px solid rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(6px)",
              borderRadius: "1.5rem",
              padding: isMobile ? "1.5rem" : "2rem",
              width: isMobile ? "90%" : "40%",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <h1
              className="text-center font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#9be7ff] to-[#01adff]"
              style={{
                fontSize: isMobile ? "1.8rem" : "2.5rem",
                color: "#1c345c",
              }}
            >
              Engineering the Future of Modern Architecture
            </h1>
            <p
              className="max-w-prose"
              style={{
                color: "#1c345c",
                fontSize: isMobile ? "0.9rem" : "1rem",
              }}
            >
              Combining Design Vision with Engineering Excellence, we create
              façades that perform beautifully across materials, climates, and
              cityscapes.
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
            {/* Birds */}
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

              {/* Street Scene */}
              <StreetScene modelContainerRef={modelContainerRef} />
            </Hud>

            {/* Ocean & Sky */}
            <ScrollableOceanScene modelContainerRef={modelContainerRef} />
            <Sky />
            {/* <CloudField /> */}
            <HeroSky />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

useGLTF.preload("/office_building/streetview.glb");
