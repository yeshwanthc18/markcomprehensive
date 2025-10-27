"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Image1 from "../../public/compressed-images/project-photos/PENSION FUND/IMG_5441.jpg";
import Image2 from "../../public/compressed-images/project-photos/ROTANA - 4 STAR HOTEL/IMG_5500.jpg";
import Image3 from "../../public/compressed-images/project-photos/DOWNE/IMG_3868.jpg";
import HomeHowWeWork from "./process-details-section";

type ProjectData = {
  name: string;
  region: string;
  type: string;
  city: string;
  year: string;
  status: string;
  area: string;
  description: string;
  system: string;
  number: string;
  image: any;
};

const projectImages = {
  image1: Image1,
  image2: Image2,
  image3: Image3,
  image4: Image1,
  image5: Image2,
  image6: Image3,
};

const projects: ProjectData[] = [
  {
    number: "01",
    name: "Al Meera Hypermarket",
    region: "Oman",
    type: "Commercial",
    city: "Muscat",
    year: "2024",
    status: "Completed",
    area: "25,000 m²",
    description:
      "A modern hypermarket featuring high-efficiency stick curtain wall system with shading fins.",
    system: "Stick Curtain Wall",
    image: projectImages.image1,
  },
  {
    number: "02",
    name: "Alila Hotel",
    region: "Oman",
    type: "Hospitality",
    city: "Jabal Akhdar",
    year: "2023",
    status: "Completed",
    area: "30,000 m²",
    description:
      "Mountain resort blending natural stone architecture with contemporary façade systems.",
    system: "Stone Cladding with Integrated Aluminum",
    image: projectImages.image2,
  },
  {
    number: "03",
    name: "Al Mouj Development",
    region: "Oman",
    type: "Residential",
    city: "Muscat",
    year: "2024",
    status: "In Progress",
    area: "50,000 m²",
    description:
      "Waterfront mixed-use development with contemporary glass façades and aluminum shading systems offering luxurious coastal living.",
    system: "Unitized Curtain Wall & Window Wall",
    image: projectImages.image3,
  },
  {
    number: "04",
    name: "Dhar Hassan Villa",
    region: "Oman",
    type: "Residential",
    city: "Muscat",
    year: "2022",
    status: "Completed",
    area: "1,200 m²",
    description:
      "Luxury private villa featuring floor-to-ceiling glazing and locally crafted stone façades.",
    system: "Hybrid Curtain Wall",
    image: projectImages.image4,
  },
  {
    number: "05",
    name: "Downe Tower",
    region: "Oman",
    type: "Highrise",
    city: "Muscat",
    year: "2023",
    status: "In Progress",
    area: "40,000 m²",
    description:
      "Contemporary highrise with sleek glass façade utilizing unitized system.",
    system: "Unitized Curtain Wall System",
    image: projectImages.image5,
  },
  {
    number: "06",
    name: "Ibrahim Elite",
    region: "Oman",
    type: "Residential",
    city: "Muscat",
    year: "2023",
    status: "Completed",
    area: "18,000 m²",
    description:
      "Premium apartment complex featuring elegant façade with vertical aluminum fins.",
    system: "Window Wall with Vertical Fins",
    image: projectImages.image6,
  },
];

export default function RecentProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hospitalityCardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Calculate the grid column position dynamically
  const gridColStart = useTransform(scrollYProgress, [0, 0.6], [2, 1]);
  const gridColEnd = useTransform(scrollYProgress, [0, 0.6], [3, 4]);
  const cardPadding = useTransform(scrollYProgress, [0, 0.6], [20, 20]);
  const titleSize = useTransform(scrollYProgress, [0, 0.6], [60, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0]);
  const cardWidth = useTransform(scrollYProgress, [0.2, 0.4], [280, 450]);
  const xOffset = useTransform(cardWidth, (w) => -(w - 250) / 2);
  const scale = useTransform(scrollYProgress, [0.2, 1], [1, 4.6]); 
  const translateY = useTransform(scale, (s) => `${(1 - s) * 50}%`);
  const sticky = useTransform(scrollYProgress, [0, 1], ["350px", "450px"]);
   const cardBottom = useTransform(scrollYProgress, [0, 0.8], ["2rem", "4rem"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Header Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
              Key <span className="text-[#01adff]">Highlights</span>
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
            </div>
            <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Discover our latest architectural innovations
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[280px] relative">
            {/* Card 1 */}
            <div className="bg-[#1a3d4d] text-white p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <Image
                  src={projects[0].image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="text-sm text-gray-400">
                  {projects[0].number} / 06
                </div>
              </div>
              <div className="relative z-10">
                <div className="text-5xl font-bold mb-3 text-[#9be7ff]">
                  {projects[0].area}
                </div>
                <p className="text-gray-300 mb-2 text-sm">{projects[0].name}</p>
                <button className="text-white underline text-sm hover:text-[#01adff] transition-colors">
                  Explore project →
                </button>
              </div>
            </div>

            {/* Card 2 - Hospitality (Sticky Expanding) */}
            <motion.div
              ref={hospitalityCardRef}
              className=" text-white overflow-hidden flex flex-col justify-between lg:row-span-3 relative group"
              style={{
                position: "sticky",
                bottom: cardBottom,
                gridColumn: gridColEnd.get()
                  ? `${Math.round(gridColStart.get())} / ${Math.round(
                      gridColEnd.get()
                    )}`
                  : "1 / 2",
                padding: cardPadding,
                zIndex: 20,
                opacity:contentOpacity,
                marginTop: sticky,
                scale,
              }}
            >
              {/* <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity">
                <Image
                  src={projects[1].image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="text-sm text-gray-400">
                  {projects[1].number} / 06
                </div>
              </div>
              <div className="relative z-10">
                <motion.div
                  className="font-bold mb-4"
                  style={{
                    fontSize: titleSize,
                    lineHeight: 1.1,
                  }}
                >
                  {projects[1].type}
                </motion.div>
                <a href="#" className="text-white underline text-sm hover:text-[#01adff] transition-colors mt-6">
                  View details →
                </a>
              </div> */}
              <HomeHowWeWork />
            </motion.div>

            {/* Card 3 - Featured Card */}
            <div className="overflow-hidden relative transition-all duration-500 hover:shadow-2xl">
              <div className="absolute inset-0">
                <Image
                  src={projects[2].image}
                  alt={projects[2].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between p-8">
                <div>
                  <div className="text-sm text-white/80 mb-2">
                    {projects[2].number} / 06
                  </div>
                  <div className="text-xs text-white/70 uppercase tracking-wider">
                    {projects[2].system}
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {projects[2].name}
                  </h3>
                  <p className="text-white/90 text-sm mb-3">
                    {projects[2].description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-white/70 mb-4">
                    <span>{projects[2].city}</span>
                    <span>•</span>
                    <span>{projects[2].year}</span>
                    <span>•</span>
                    <span>{projects[2].status}</span>
                  </div>
                  <button className="text-white underline text-sm hover:text-[#01adff] transition-colors">
                    Explore more →
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="overflow-hidden relative transition-all duration-500 hover:shadow-2xl group">
              <div className="absolute inset-0">
                <Image
                  src={projects[3].image}
                  alt={projects[3].name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <div className="text-sm text-white/80">
                  {projects[3].number} / 06
                </div>
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {projects[3].name}
                  </h3>
                  <p className="text-white/80 text-sm">{projects[3].type}</p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-[#0d3d4d] text-white p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 opacity-10">
                <Image
                  src={projects[4].image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="text-sm text-gray-400">
                  {projects[4].number} / 06
                </div>
              </div>
              <div className="relative z-10">
                <div className="text-sm text-[#01adff] uppercase mb-3 tracking-wider">
                  {projects[4].status}
                </div>
                <div className="text-5xl font-bold mb-3">
                  {projects[4].area.split(",")[0]}
                </div>
                <p className="text-gray-400 text-sm">
                  {projects[4].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
