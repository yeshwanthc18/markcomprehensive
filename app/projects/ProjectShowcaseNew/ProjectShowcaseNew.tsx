"use client"

import { motion, useScroll, useSpring, useTransform, useVelocity } from "framer-motion"
import { useMemo, useRef, useState, useEffect } from "react"
import ProjectCard from "../ProjectCard/ProjectCard"
import FilterMenu from "./FilterMenu/FilterMenu"
import { PROJECTS, type PType, type Region } from "@/lib/project-data"
import { useIsMobile } from "@/hooks/use-mobile"

export default function ProjectShowcaseNew() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const [region, setRegion] = useState<Region | "All">("All")
  const [projectType, setProjectType] = useState<PType | "All">("All")
  const [mounted, setMounted] = useState(false)

  const isMobile = useIsMobile()

  useEffect(() => {
    setMounted(true)
  }, [])

  const filtered = useMemo(() => {
    return PROJECTS.filter(
      (p) => (region === "All" || p.region === region) && (projectType === "All" || p.type === projectType),
    )
  }, [region, projectType])

  // Scroll + velocity setup
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 200,
  })

  const scale = useTransform(smoothVelocity, [-1000, 0, 1000], [0.85, 1, 0.85])
  const rotate = useTransform(smoothVelocity, [-2000, 0, 2000], [-8, 0, 8])

  if (mounted && isMobile) {
    return <MobileLayout />
  }

  return <DesktopLayout />

  function DesktopLayout() {
    return (
      <>
        <section ref={containerRef} className="grid container mx-auto py-24 mt-16">
          <div className="relative h-full w-full grid grid-cols-2 gap-[4rem]">
            {/* Text Section */}
            <div className="absolute h-[15rem] flex flex-col items-start justify-center">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
                Our <span className="text-[#01adff]">Projects</span>
              </h1>
              <div className="mt-4 flex justify-center">
                <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent" />
              </div>
              <p className="mt-6 text-lg md:text-xl text-white max-w-xl mx-auto">
                Interactive exploration of our facade projects across the GCC and India. Filter by region or project
                type and open images in a high-resolution lightbox.
              </p>
            </div>

            {/* Project Cards */}
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative w-full h-full rounded-[1vw]"
                style={{
                  marginTop: index % 2 === 0 ? (index === 0 ? "20rem" : "10rem") : 0,
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
            ))}
          </div>
        </section>
        <FilterMenu
          onProjectTypeChange={(pType) => setProjectType(pType as PType | "All")}
          onRegionChange={(rType) => setRegion(rType as Region | "All")}
        />
      </>
    )
  }

  function MobileLayout() {
    return (
      <>
        <section
          ref={containerRef}
          className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 mt-8 sm:mt-12 md:mt-16"
        >
          <div className="max-w-7xl mx-auto">
            <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
              {/* Text Section */}
              <div className="flex flex-col items-start justify-center py-8 sm:py-12 md:py-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                  Our <span className="text-[#01adff]">Projects</span>
                </h1>
                <div className="mt-3 sm:mt-4 flex justify-start">
                  <div className="w-16 sm:w-20 md:w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent" />
                </div>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white max-w-xl">
                  Interactive exploration of our facade projects across the GCC and India. Filter by region or project
                  type and open images in a high-resolution lightbox.
                </p>
              </div>

              {/* Project Cards Container */}
              <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12">
                {filtered.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="relative w-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden"
                    style={{
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
                ))}
              </div>
            </div>
          </div>
        </section>
        <FilterMenu
          onProjectTypeChange={(pType) => setProjectType(pType as PType | "All")}
          onRegionChange={(rType) => setRegion(rType as Region | "All")}
        />
      </>
    )
  }
}
