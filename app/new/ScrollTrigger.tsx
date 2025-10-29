"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import RecentArticlesSection from "@/components/home/recent-articles-section";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollingCardsGsap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardBRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const fullRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
          pin: true,
        },
      });

      // Fade/scale out Card A & C
      tl.to(".cardA, .cardC", { scale: 0.8, opacity: 0.3 }, 0);

      // Expand Card B to full width
      tl.to(cardBRef.current, {
        scale: 1.2,
        zIndex: 10,
        boxShadow: "0 0 50px rgba(0,0,0,0.4)",
      }, 0.2);

      // Show full component overlay
      tl.to(previewRef.current, { opacity: 0 }, 0.5);
      tl.to(fullRef.current, { opacity: 1, pointerEvents: "auto" }, 0.6);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900">
        <h1 className="text-6xl font-bold">Scroll Down</h1>
      </section>

      {/* Scroll Section with Cards */}
      <section ref={containerRef} className="relative h-[100vh]">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center gap-6">
          {/* Card A */}
          <div className="cardA bg-blue-500 w-80 h-40 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg transition-all">
            Card A
          </div>

          {/* Card B */}
          <div
            ref={cardBRef}
            className="relative bg-pink-500 w-96 h-52 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg overflow-hidden"
          >
            {/* Preview (small) */}
            <div
              ref={previewRef}
              className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
            >
              Preview of Component
            </div>

            {/* Full Component (hidden initially) */}
            <div
              ref={fullRef}
              className="absolute inset-0 bg-white text-black opacity-0 pointer-events-none overflow-y-auto"
            >
              <RecentArticlesSection />
            </div>
          </div>

          {/* Card C */}
          <div className="cardC bg-green-500 w-80 h-40 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg transition-all">
            Card C
          </div>
        </div>
      </section>

      {/* End Section */}
      <section className="h-screen bg-gradient-to-br from-orange-900 to-red-900 flex items-center justify-center">
        <h2 className="text-5xl font-bold">Expanded Component Fully Visible</h2>
      </section>
    </div>
  );
}
