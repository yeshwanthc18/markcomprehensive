"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TriangleScrollAnimation() {
  const triangleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triangleRef.current) return;

    gsap.fromTo(
      triangleRef.current,
      {
        x: 0, 
        y: window.innerHeight - 140, 
        rotation: 0,
      },
      {
        x: window.innerHeight - 40, 
        y: 0, 
        rotation: 180,
        scrollTrigger: {
          trigger: document.body,
          start: "top left",
          end: "bottom bottom",
          scrub: 1.5, 
          markers: false, 
        },
        ease: "none",
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Fixed Triangle */}
      <div
        ref={triangleRef}
        className="fixed w-0 h-0 z-50 pointer-events-none top-0 left-0"
        style={{
          borderLeft: "60px solid transparent",
          borderRight: "60px solid transparent",
          borderBottom: "104px solid rgba(1, 173, 255, 0.85)",
          filter: "drop-shadow(0 10px 40px rgba(1, 173, 255, 0.6))",
        }}
      />
    </div>
  );
}