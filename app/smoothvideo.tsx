"use client";
import { useEffect, useRef } from "react";
import { useScroll, useSpring } from "framer-motion";

export default function ScrollVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll progress across the section (0 → 1)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"], // map full section height
  });

  // Apply spring smoothing for inertia-like feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.15,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Link scroll progress to video currentTime
    const unsubscribe = smoothProgress.on("change", (value) => {
      if (!video.duration) return;
      const duration = video.duration;
      video.currentTime = duration * value; // maps 0→1 to 0→video length
    });

    return () => unsubscribe();
  }, [smoothProgress]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[1600vh] bg-black overflow-hidden" 
    >
      {/* Sticky full-screen video */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <video
          ref={videoRef}
          src="/images/scroll-video.mp4"
          className="w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
        />
      </div>

      {/* Optional next section content */}
      <div className="h-screen flex items-center justify-center text-white text-4xl bg-[#050505]">
        <p>Scroll Finished 🎬</p>
      </div>
    </section>
  );
}
