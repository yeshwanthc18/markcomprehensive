"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useMemo, useRef, useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import FilterMenu from "./FilterMenu/FilterMenu";
import { PROJECTS, PType, Region } from "@/lib/project-data";
import { ServiceCard } from "@/components/ui/service-card";
import { servicesData } from "@/lib/services-data";

// Example project data arrays (replace with real data)

export default function ProjectShowcaseNew() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // const [region, setRegion] = useState<Region>("All");
  // const [projectType, setProjectType] = useState<PType>("All");

  // const filtered = useMemo(() => {
  //   return PROJECTS.filter(
  //     (p) =>
  //       (region === "All" || p.region === region) &&
  //       (projectType === "All" || projectType.includes(p.type))
  //   );
  // }, [region, projectType]);

  // Scroll + velocity setup
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 200,
  });

  const scale = useTransform(smoothVelocity, [-1000, 0, 1000], [0.85, 1, 0.85]);
  const rotate = useTransform(smoothVelocity, [-2000, 0, 2000], [-8, 0, 8]);

  return (
    <>
      <section
        ref={containerRef}
        className="grid w-[80dvw] mx-auto py-24 mt-16"
      >
        <div className="relative  h-full w-full grid grid-cols-2 gap-[5rem]">
          {/* Text Section */}
          <div className="absolute h-[15rem] flex flex-col items-start justify-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
              Our <span className="text-[#01adff]">Services</span>
            </h1>
            <div className="mt-4 flex justify-center">
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent" />
            </div>
            <p className="mt-6 text-lg md:text-xl text-white max-w-3xl mx-auto">
              Interactive exploration of our facade projects across the GCC and
              India. Filter by region or project type and open images in a
              high-resolution lightbox.
            </p>
          </div>

          {/* Project Cards */}
          {/* {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative w-full h-full rounded-[1vw]"
              style={{
                marginTop:
                  index % 2 === 0 ? (index === 0 ? "20rem" : "10rem") : 0,
                scale,
                rotateX: rotate,
                rotateY: rotate,
                transformPerspective: 1200,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <ProjectCard {...project} />
              
            </motion.div>
          ))} */}

           {servicesData.map((service, index) => ( <motion.div
              key={index}
              className="relative w-full h-full rounded-[1vw]"
              style={{
                marginTop:
                  index % 2 === 0 ? (index === 0 ? "20rem" : "7rem") : 0,
                scale,
                rotateX: rotate,
                rotateY: rotate,
                transformPerspective: 1200,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <ServiceCard key={index} service={service} index={index} />
              
            </motion.div>
                          
                        ))}
        </div>
      </section>
      {/* <FilterMenu
      // onProjectTypeChange={(pType) => setProjectType(pType)}
      // onRegionChange={(rType) => setRegion(rType)}
      /> */}
    </>
  );
}
