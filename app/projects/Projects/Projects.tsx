"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import styles from "./Projects.module.css";
import ProjectCard, { ProjectCardProps } from "../ProjectCard/ProjectCard";

// Example project data arrays (replace with real data)
const projectsOne = [
  {
    id: "proj1",
    name: "Al Meera Hypermarket",
    city: "Muscat",
    year: "2024",
    type: "Commercial",
    region: "Oman",
    images: [{ src: "/images/1.jpg", alt: "Al Meera Hypermarket" }],
  },
  {
    id: "proj2",
    name: "Lulu Mall",
    city: "Doha",
    year: "2023",
    type: "Retail",
    region: "Qatar",
    images: [{ src: "/images/2.jpg", alt: "Lulu Mall" }],
  },
  {
    id: "proj3",
    name: "Riyadh Tower",
    city: "Riyadh",
    year: "2023",
    type: "Commercial",
    region: "Saudi Arabia",
    images: [{ src: "/images/3.jpg", alt: "Riyadh Tower" }],
  },
  {
    id: "proj4",
    name: "Dubai Marina Plaza",
    city: "Dubai",
    year: "2022",
    type: "Mixed Use",
    region: "UAE",
    images: [{ src: "/images/4.jpg", alt: "Dubai Marina Plaza" }],
  },
  {
    id: "proj5",
    name: "Oman Convention Center",
    city: "Muscat",
    year: "2021",
    type: "Institutional",
    region: "Oman",
    images: [{ src: "/images/5.jpg", alt: "Oman Convention Center" }],
  },
  {
    id: "proj6",
    name: "Ajman City Center",
    city: "Ajman",
    year: "2021",
    type: "Commercial",
    region: "UAE",
    images: [{ src: "/images/6.jpg", alt: "Ajman City Center" }],
  },
];

const projectsTwo = [
  {
    id: "proj7",
    name: "Al Ain Square",
    city: "Al Ain",
    year: "2020",
    type: "Residential",
    region: "UAE",
    images: [{ src: "/images/7.jpg", alt: "Al Ain Square" }],
  },
  {
    id: "proj8",
    name: "Kuwait Mall",
    city: "Kuwait City",
    year: "2020",
    type: "Retail",
    region: "Kuwait",
    images: [{ src: "/images/8.jpg", alt: "Kuwait Mall" }],
  },
  {
    id: "proj9",
    name: "Doha Corniche",
    city: "Doha",
    year: "2019",
    type: "Public",
    region: "Qatar",
    images: [{ src: "/images/9.jpg", alt: "Doha Corniche" }],
  },
  {
    id: "proj10",
    name: "Dubai Frame",
    city: "Dubai",
    year: "2019",
    type: "Landmark",
    region: "UAE",
    images: [{ src: "/images/10.jpg", alt: "Dubai Frame" }],
  },
  {
    id: "proj11",
    name: "Jeddah Mall",
    city: "Jeddah",
    year: "2018",
    type: "Commercial",
    region: "Saudi Arabia",
    images: [{ src: "/images/11.jpg", alt: "Jeddah Mall" }],
  },
  {
    id: "proj12",
    name: "Muscat Grand Mall",
    city: "Muscat",
    year: "2018",
    type: "Retail",
    region: "Oman",
    images: [{ src: "/images/12.jpg", alt: "Muscat Grand Mall" }],
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Scroll and velocity setup
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 200,
  });

  // Animate scale + perspective tilt based on scroll speed
  const scale = useTransform(smoothVelocity, [-1000, 0, 1000], [0.85, 1, 0.85]);
  const rotate = useTransform(smoothVelocity, [-2000, 0, 2000], [-8, 0, 8]);

  return (
    <section ref={containerRef} className={styles.projectsContainer}>
      <div className={styles.colOneContainer}>
        <div className={styles.textContainer}>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
            Our <span className="text-[#01adff]">Projects</span>
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

        <Column projects={projectsOne} scale={scale} rotate={rotate} />
      </div>

      <Column projects={projectsTwo} scale={scale} rotate={rotate} />
    </section>
  );
}

interface ColumnProps {
  projects: ProjectCardProps[];
  scale: MotionValue<number>;
  rotate: MotionValue<number>;
}

const Column: React.FC<ColumnProps> = ({ projects, scale, rotate }) => {
  return (
    <div className={styles.colOne}>
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className={styles.imageContainer}
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
  );
};
