"use client";

import { motion, useMotionValue, useTransform, useSpring, MotionValue } from "framer-motion";
import { useEffect } from "react";
import Overlay from "@/public/images/bg1.png";

type GradientBGProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GradientBG({ children, className = "" }: GradientBGProps) {
  const x: MotionValue<number> = useMotionValue(0);
  const y: MotionValue<number> = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 30, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 30, damping: 20 });

  const gradientPosition = useTransform(
    [smoothX, smoothY],
    ([latestX, latestY]: number[]) =>
      `radial-gradient(
        circle at ${50 + latestX}% ${50 + latestY}%,
        rgba(173, 224, 255, 0.6) 0%,   /* Light blue core */
        rgba(185, 232, 255, 0.4) 35%,  /* Softer blue */
        rgba(210, 242, 255, 0.25) 90%, /* Fades out smoothly */
        rgba(255, 255, 255, 0) 100%    /* Pure transparent - no gray */
      )`
  );

  useEffect(() => {
    const animate = () => {
      x.set(Math.sin(Date.now() / 1500) * 15);
      y.set(Math.cos(Date.now() / 1800) * 12);
      requestAnimationFrame(animate);
    };
    animate();
  }, [x, y]);

  return (
    <motion.div
      className={`relative w-full h-full overflow-visible ${className}`}
      style={{ background: gradientPosition }}
    >
      {/* 🌫️ Overlay Image */}
      <div
        className="absolute inset-0 left-0 w-full h-full pointer-events-none z-0"
        style={{
          backgroundImage: `url(${Overlay.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
          mixBlendMode: "soft-light",
          opacity: 1,
        }}
      />

      {/* 💎 Subtle animated shine */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(173, 224, 255, 0.25), transparent 70%)",
          mixBlendMode: "overlay",
        }}
        animate={{ opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🌟 Foreground content */}
      <div className="relative z-20">{children}</div>
    </motion.div>
  );
}