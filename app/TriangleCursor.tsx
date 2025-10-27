"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TriangleCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rotate = useMotionValue(0);
  const [hovered, setHovered] = useState(false);

  const springConfig = { stiffness: 200, damping: 20, mass: 0.3 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);
  const smoothRotate = useSpring(rotate, springConfig);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      // small rotation based on horizontal position
      rotate.set((e.clientX / window.innerWidth - 0.5) * 40);
    };

    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    window.addEventListener("mousemove", handleMove);

    const linkSelector = "a, button,Link,Button, [data-cursor-hover]";
    const els = Array.from(document.querySelectorAll(linkSelector));
    els.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [x, y, rotate]);

  const size = hovered ? 52 : 30;
  const innerSize = 100;

  const fillColor = "#11a5e0"; 
  const strokeColor = "#11a5e0";

  return (
    <motion.svg
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      width={size}
      height={size}
      viewBox="-4 -4 108 108" 
      style={{
        translateX: useTransform(smoothX, (v) => `${v - size / 2}px`),
        translateY: useTransform(smoothY, (v) => `${v - size / 2}px`),
        rotate: smoothRotate,
      }}
    >
      <defs>
        <linearGradient id="cursorGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      <motion.path
        d="M50 6 L96 92 L4 92 Z"
        fill={hovered ? "transparent" : "url(#cursorGrad)"}
        stroke="none"
        initial={false}
        animate={{ scale: hovered ? 0.95 : 1 }} 
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      />

      <motion.path
        d="M50 6 L96 92 L4 92 Z"
        fill="none"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke" 
        shapeRendering="geometricPrecision"
        initial={false}
        animate={{
          strokeOpacity: hovered ? 1 : 0,
          scale: hovered ? 1.06 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />
    </motion.svg>
  );
}
