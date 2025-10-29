"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";

import { ServiceCard } from "@/components/ui/service-card";
import { servicesData } from "@/lib/services-data";
import ScrollTriggerComponent from "@/components/animations/scroll-trigger";

export default function ServiceShowcaseNew() {
  const containerRef = useRef<HTMLDivElement | null>(null);

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
        className="grid md:w-[80dvw] mx-auto py-24 mt-16"
      >
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
              Our <span className="text-[#01adff]">Services</span>
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
            </div>
            <p className="mt-6 text-lg md:text-xl text-black max-w-3xl mx-auto">
              Interactive exploration of our facade projects across the GCC and
              India. Filter by region or project type and open images in a
              high-resolution lightbox.
            </p>
          </div>
        </ScrollTriggerComponent>
        <div className="relative mt-10  h-full w-full grid grid-cols-2 gap-[5rem]">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="relative w-full h-full rounded-[1vw] flex"
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
    </>
  );
}
