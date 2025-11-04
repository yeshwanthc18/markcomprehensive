"use client";
import React from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import ScrollTriggerComponent from "@/components/animations/scroll-trigger";

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
  }
);

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 2,
      startLat: 10.1632, // Kerala (Trivandrum approx)
      startLng: 76.6413,
      endLat: 25.276987, // Dubai
      endLng: 55.296249,
      arcAlt: 0.25,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 9.9312, // Kochi
      startLng: 76.2673,
      endLat: 24.7136, // Riyadh
      endLng: 46.6753,
      arcAlt: 0.22,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 12.9716, // Bangalore
      startLng: 77.5946,
      endLat: 23.5859, // Muscat
      endLng: 58.4059,
      arcAlt: 0.28,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 25.276987, // Dubai
      startLng: 55.296249,
      endLat: 33.3152, // Baghdad
      endLng: 44.3661,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 10.8505, // Kerala general region
      startLng: 76.2711,
      endLat: 12.9716, // Bangalore
      endLng: 77.5946,
      arcAlt: 0.18,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 24.7136, // Riyadh
      startLng: 46.6753,
      endLat: 25.276987, // Dubai
      endLng: 55.296249,
      arcAlt: 0.26,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];

  return (
    <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
          <ScrollTriggerComponent animation="fadeInUp">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
                Our <span className="text-[#01adff]">Locations</span>
              </h2>
              <div className="mt-4 flex justify-center">
                <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
              </div>
            </div>
          </ScrollTriggerComponent>
        </motion.div>
        {/* <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" /> */}
        <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
