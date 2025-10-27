"use client";

import { useState, useEffect, useRef } from "react";
import Image from "@/components/SmartImage";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import ButtonPrimary from "../layout/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Image1 from "../../public/compressed-images/project-photos/PENSION FUND/IMG_5441.jpg";
import Image2 from "../../public/compressed-images/project-photos/ROTANA - 4 STAR HOTEL/IMG_5500.jpg";
import Image3 from "../../public/compressed-images/project-photos/DOWNE/IMG_3868.jpg";
import TriangleScrollAnimation from "../animations/trianglescrollanimation";
import TrianglesBackground from "../3d/TrianglesBackground";

const recentProjects = [
  {
    id: 1,
    image: Image1,
    title: "Dubai Marina Tower",
    region: "Middle East",
    description:
      "State-of-the-art curtain wall system with integrated smart glass technology for this 80-story residential tower.",
    completionDate: "2024",
    projectType: "High-Rise Residential",
  },
  {
    id: 2,
    image: Image2,
    title: "London Financial District",
    region: "Europe",
    description:
      "Innovative aluminum facade system with energy-efficient glazing for a premium commercial complex.",
    completionDate: "2024",
    projectType: "Commercial Complex",
  },
  {
    id: 3,
    image: Image3,
    title: "Singapore Tech Hub",
    region: "Asia Pacific",
    description:
      "Advanced structural glazing with automated skylight systems for this cutting-edge technology center.",
    completionDate: "2024",
    projectType: "Technology Center",
  },
];



export default function RecentProjectsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const handleNext = () => {
    setDirection("next");
    setIndex((prev) => (prev + 1) % recentProjects.length);
  };

  const handlePrev = () => {
    setDirection("prev");
    setIndex((prev) => (prev - 1 + recentProjects.length) % recentProjects.length);
  };

  const project = recentProjects[index];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
     {/* <TriangleScrollAnimation /> */}
     <TrianglesBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            Recent <span className="text-[#01adff]">Projects</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
          </div>
          <p className="mt-6 text-lg md:text-xl text-black max-w-2xl mx-auto">
            Our Recent Projects
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Image with smooth overlap transition */}
          <div className="relative w-full h-[500px] overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={project.id}
                className="absolute inset-0 shadow-xl overflow-hidden"
                initial={{
                  opacity: 0,
                  scale: 1.05,
                  rotateY: direction === "next" ? 25 : -25,
                  x: direction === "next" ? 80 : -80,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotateY: 0,
                  x: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  rotateY: direction === "next" ? -25 : 25,
                  x: direction === "next" ? -80 : 80,
                  transition: { duration: 0.7 },
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute bottom-5 right-5 flex gap-6 bg-white/80 backdrop-blur-sm px-5 py-3 shadow-md">
              <button
                onClick={handlePrev}
                className="text-sm font-semibold hover:text-[#01adff] transition-colors"
              >
                PREV
              </button>
              <button
                onClick={handleNext}
                className="text-sm font-semibold hover:text-[#01adff] transition-colors"
              >
                NEXT
              </button>
            </div>
          </div>

          {/* Text Side */}
          <AnimatePresence mode="wait">
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
              }}
              exit={{
                opacity: 0,
                y: -40,
                transition: { duration: 0.5 },
              }}
            >
             
              <h2 className="text-4xl font-bold text-black mb-6">
                {project.title}
              </h2>

              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-[#01adff]/10 text-[#01adff] font-medium">
                  {project.projectType}
                </Badge>
                <span className="flex items-center gap-2 text-sm text-gray-700">
                  <Calendar className="w-4 h-4 text-[#01adff]" />
                  {project.completionDate}
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-700">
                  <MapPin className="w-4 h-4 text-[#01adff]" />
                  {project.region}
                </span>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {project.description}
              </p>

              <ButtonPrimary>
                <Link
                  href={`/projects/${project.id}`}
                  className="flex justify-center items-center"
                >
                  See Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </ButtonPrimary>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
