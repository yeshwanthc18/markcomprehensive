"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type GradientBGProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GradientBG({ children, className = "" }: GradientBGProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftTriangle = useRef<SVGSVGElement>(null);
  const rightTriangle = useRef<SVGSVGElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 💫 Ambient gradient drift loop
    gsap.to(gradientRef.current, {
      duration: 8,
      backgroundPosition: "60% 40%",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // 🌀 Smooth scroll rotation for both triangles
    gsap.to(leftTriangle.current, {
      rotate: 180,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      ease: "none",
    });

    gsap.to(rightTriangle.current, {
      rotate: -180,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      ease: "none",
    });

    // 🌈 Subtle floating motion loop for gentle realism
    gsap.to([leftTriangle.current, rightTriangle.current], {
      y: "+=20",
      x: "+=10",
      duration: 6,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-visible ${className}`}
      style={{ perspective: 1000 }}
    >
      {/* 🌈 Animated Gradient Layer */}
      <div
        ref={gradientRef}
        className="absolute inset-0 z-0 will-change-transform  transition duration-2000"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(1,173,255,0.45) 0%, rgba(1,173,255,0.2) 10%, rgba(255,255,255,0) 20%)",
          backgroundSize: "200% 200%",
          filter: "blur(60px)",
          transform: "translateZ(0)",
        }}
      />

      {/* 🔷 Two Triangles */}
      <svg
        ref={leftTriangle}
        width="80"
        
        height="80"
        viewBox="0 0 100 100"
        className="absolute left-[8%] top-[15%] z-[1] opacity-60"
        style={{ willChange: "transform" }}
      >
        <polygon
          points="50,0 100,100 0,100"
          fill="url(#triGradient)"
          stroke="#01ADFF"
          strokeWidth="1"
        />
        <defs>
          <radialGradient id="triGradient" cx="100%" cy="100%" r="100%">
            <stop offset="0%" stopColor="#01ADFF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#01ADFF" stopOpacity="0.6" />
          </radialGradient>
        </defs>
      </svg>
    
      

      <svg
        ref={rightTriangle}
        width="80"
        height="80"
        viewBox="0 0 100 100"
        className="absolute right-[4%] bottom-[15%] z-[1] opacity-60"
        style={{ willChange: "transform" }}
      >
        <polygon
          points="50,0 100,100 0,100"
          fill="url(#triGradient2)"
          stroke="rgba(1,173,255,0.5)"
          strokeWidth="1"
        />
        <defs>
          <radialGradient id="triGradient2" cx="70%" cy="80%" r="80%">
            <stop offset="0%" stopColor="#01ADFF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#01ADFF" stopOpacity="0.6" />
          </radialGradient>
        </defs>
      </svg>
      

      {/* ✨ Soft shimmer overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(1,173,255,0.25), transparent 80%)",
          mixBlendMode: "screen",
          animation: "pulse 8s ease-in-out infinite",
        }}
      />

      {/* 🌟 Foreground layer (for sticky content) */}
      <div className="relative z-[10]">{children}</div>

      <style jsx>{`
        @keyframes pulse {
          0% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}
