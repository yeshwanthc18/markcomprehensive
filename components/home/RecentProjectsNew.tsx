"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HomeHowWeWork from "./process-details-section"; // your full-section component
import Image from "next/image";
import Image1 from "../../public/compressed-images/project-photos/ROTANA - 4 STAR HOTEL/IMG_5500.jpg";

export default function StickyExpandSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // scroll progress for entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // scaling the small card into a full section
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.9, 1.2, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], ["1.5rem", "0rem"]);
  const opacityCard = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 0.6, 0]);
  const opacitySection = useTransform(scrollYProgress, [0.4, 0.7, 1], [0, 0.6, 1]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-black text-white overflow-hidden">
      {/* Sticky Card that expands */}
      <motion.div
        className="sticky top-0 flex items-center justify-center h-screen"
        style={{ scale }}
      >
        <motion.div
          style={{
            borderRadius,
            opacity: opacityCard,
          }}
          className="relative w-[85%] md:w-[60%] h-[60vh] bg-[#1f2937] overflow-hidden shadow-2xl"
        >
          <Image
            src={Image1}
            alt="Hotel project"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Hospitality</h2>
            <p className="max-w-lg text-gray-300 text-lg">
              Mountain resort blending natural stone architecture with contemporary façade systems.
            </p>
            <button className="mt-6 underline hover:text-[#01adff] transition-colors">
              View details →
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Full-Width Section Revealed After Expansion */}
      <motion.div
        style={{ opacity: opacitySection }}
        className="absolute top-0 left-0 w-full h-screen flex items-center justify-center"
      >
        <HomeHowWeWork />
      </motion.div>
    </div>
  );
}
