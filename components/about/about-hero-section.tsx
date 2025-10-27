"use client";

import ScrollTriggerComponent from "@/components/animations/scroll-trigger";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function AboutBanner() {
  return (
    <section className="relative border-b overflow-hidden"  style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
        }}>
      <div
        className="relative h-[800px] md:h-[820px] w-full"
       
      >
        <video
          src="/images/Markweb.mp4" 
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" /> */}

        <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent">
          <div className="container"></div>
        </div>
      </div>
    </section>
  );
}
