
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import {
  Award,
  Building2,
  ChevronRight,
  Globe,
  Zap,
} from "lucide-react";
import React, { useRef } from "react";
import { CardContent } from "../ui/card";

const projects = [
  {
    title: "Project 1",
    src: "/compressed-images/lummi/img8.png",
  },
  {
    title: "Project 2",
    src: "/compressed-images/lummi/img14.png",
  },
  {
    title: "Project 3",
    src: "/compressed-images/lummi/img10.png",
  },
  {
    title: "Project 4",
    src: "/compressed-images/lummi/img15.png",
  },
  {
    title: "Project 5",
    src: "/compressed-images/lummi/img12.png",
  },
];

const timelineEvents = [
  {
    year: "1998",
    title: "Sister Company Founded",
    description:
      "United Aluminium LLC established in UAE as leading aluminum, glass and cladding fabricators.",
    icon: Building2,
    metrics: "UAE Foundation",
  },
  {
    year: "2010",
    title: "Mark Comprehensive Born",
    description:
      "Started successful journey in Sultanate of Oman with full support and experience from sister concern.",
    icon: Award,
    metrics: "Oman Launch",
  },
  {
    year: "2015",
    title: "Facility Expansion",
    description:
      "Established modern fabrication facilities in Halban Industrial area with advanced aluminum fabrication lines.",
    icon: Zap,
    metrics: "Modern Facilities",
  },
  {
    year: "2020",
    title: "Regional Growth",
    description:
      "Expanded services across 10+ countries, serving banks, schools, mosques, hotels, and developers.",
    icon: Globe,
    metrics: "10+ Countries",
  },
  {
    year: "2024",
    title: "Industry Leadership",
    description:
      "Recognized as one of the leading façade specialists with 100+ projects and 50+ satisfied clients.",
    icon: Award,
    metrics: "100+ Projects",
  },
];

const StickyCard = ({
  i,
  title,
  src,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  src: string;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  // pick the matching timeline event
  const event = timelineEvents[i];

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 20 + 250}px)`,
        }}
        className="rounded-xl relative -top-1/2 flex h-[300px] w-full origin-top flex-col backdrop-blur-xl overflow-hidden bg-white/50  border border-gray-200"
      >
        <CardContent className="p-6 sm:p-8">
          <div className="flex items-start justify-between mb-4">
            <span className="px-3 py-1 text-xs bg-[#01adff]/10 text-[#01adff] border border-[#01adff] rounded-sm">
              {event.metrics}
            </span>
            <div className="p-2 bg-blue-50  rounded-md group-hover:bg-blue-100 transition-colors">
              <event.icon className="h-5 w-5 text-[#01adff]" />
            </div>
          </div>

          <div className="text-2xl sm:text-3xl font-bold text-[#01adff] mb-3">
            {event.year}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
            {event.title}
          </h3>

          <p className="text-black leading-relaxed mb-4">
            {event.description}
          </p>
        </CardContent>
      </motion.div>
    </div>
  );
};

const Skiper16 = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main
        ref={container}
        className="relative flex w-full flex-col items-center -pt-10 justify-center pb-[50vh]"
      >
        {projects.map((project, i) => {
          const targetScale = Math.max(
            0.5,
            1 - (projects.length - i - 1) * 0.1
          );
          return (
            <StickyCard
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </ReactLenis>
  );
};

export { StickyCard };
export default Skiper16;
