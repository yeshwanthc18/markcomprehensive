"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import ButtonPrimary from "../layout/Button";
import { BackgroundGradientAnimation } from "../animated/background-gradient-animation";

const ThreeDViewer = dynamic(() => import("../3d/Three"), { ssr: false });

export default function HeroSection() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  // Hover parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      setTransform({ x, y });
    };
    const handleMouseLeave = () => setTransform({ x: 0, y: 0 });
    const section = sectionRef.current;
    section?.addEventListener("mousemove", handleMouseMove);
    section?.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      section?.removeEventListener("mousemove", handleMouseMove);
      section?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden flex items-center justify-center min-h-[90vh] sm:min-h-screen text-white"
      aria-label="Aluminum facade hero"
      id="hero"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 opacity-80">
        <BackgroundGradientAnimation />
      </div>
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-10 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Text Section */}
        <div className="max-w-xl space-y-6">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight 
             text-transparent bg-clip-text 
             bg-gradient-to-r from-white via-[#9be7ff] to-[#01adff] 
             animate-gradient-x drop-shadow-[0_0_20px_rgba(1,173,255,0.25)]"
          >
            Advanced Aluminum Systems for Iconic Architecture
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            We design and build high-performance façades that blend modern
            engineering with timeless aesthetics redefining urban skylines.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <ButtonPrimary>
              <Link
                href="/services"
                className="flex items-center justify-center"
              >
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </ButtonPrimary>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white bg-white/5 hover:border-[#01adff]/40 hover:text-[#01adff] transition-colors duration-300"
            >
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>

          <ul className="flex flex-wrap gap-3 text-sm text-white/70 pt-4">
            {["Curtain Walls", "Unitized Systems", "Skylights", "Cladding"].map(
              (item) => (
                <li
                  key={item}
                  className="border border-white/10 px-3 py-1.5 hover:border-[#01adff]/50 hover:text-[#01adff] transition duration-300"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* 3D Model - Fixed height, contained */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center pointer-events-none">
          <div className="absolute inset-0 scale-110 opacity-90">
            <ThreeDViewer />
          </div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}
