"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function TriangleGroupScroll() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredTriangle, setHoveredTriangle] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const createMotionStyles = (startX: string, startY: string) => {
    const x = useTransform(scrollYProgress, [0, 1], [startX, "0vw"]);
    const y = useTransform(scrollYProgress, [0, 1], [startY, "0vh"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [90, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const blurPx = useTransform(scrollYProgress, [0, 1], [30, 0]);

    const smoothX = useSpring(x, { stiffness: 100, damping: 20 });
    const smoothY = useSpring(y, { stiffness: 100, damping: 20 });
    const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 25 });
    const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 20 });
    const smoothScale = useSpring(scale, { stiffness: 100, damping: 20 });
    const smoothBlur = useSpring(blurPx, { stiffness: 100, damping: 18 });

    return {
      x: smoothX,
      y: smoothY,
      opacity: smoothOpacity,
      rotate: smoothRotate,
      scale: smoothScale,
      filter: useTransform(smoothBlur, (b) => `blur(${b}px)`),
    };
  };

  const gradientStart = useTransform(
    scrollYProgress,
    [0, 1],
    ["#1c345c", "#01adff"]
  );
  const gradientEnd = useTransform(
    scrollYProgress,
    [0, 1],
    ["#01adff", "#1c345c"]
  );

  const topTri = createMotionStyles("40vw", "-100vh");
  const leftBottomTri = createMotionStyles("-40vw", "-100vh");
  const rightBottomTri = createMotionStyles("40vw", "-50vh");

  const textOpacity = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  const smoothTextOpacity = useSpring(textOpacity, {
    stiffness: 100,
    damping: 20,
  });

  // Card visibility - only show after triangles are in position (at scroll progress 0.95+)
  const cardOpacity = useTransform(scrollYProgress, [0.9, 1], [0.5, 1]);
  const smoothCardOpacity = useSpring(cardOpacity, {
    stiffness: 100,
    damping: 20,
  });

  const TriangleSVG = ({
    width = 300,
    height = 280,
    stroke = "transparent",
    strokeWidth = 1,
    gradientId,
    stop1,
    stop2,
  }: {
    width?: number;
    height?: number;
    stroke?: string;
    strokeWidth?: number;
    gradientId: string;
    stop1: any;
    stop2: any;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 110"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <motion.stop offset="0%" stopColor={stop1} />
          <motion.stop offset="100%" stopColor={stop2} />
        </linearGradient>
      </defs>
      <polygon
        className="transition-all duration-300"
        points="60,5 115,105 5,105"
        fill={`url(#${gradientId})`}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );

  const CenterText: React.FC<{ text: string; style?: any }> = ({
    text,
    style,
  }) => (
    <motion.p
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm md:text-base pointer-events-none z-10"
      style={style}
    >
      {text}
    </motion.p>
  );

  const HoverCard = ({
    id,
    title,
    description,
    direction,
  }: {
    id: string;
    title: string;
    description: string;
    direction:
      | "top"
      | "bottom-left"
      | "bottom-right"
      | "left-mobile"
      | "mobile"
      | "top-mobile";
  }) => {
    const directionConfig = {
      top: {
        x: 290,
        y: -250,
      },
      "top-mobile": {
        x: 20,
        y: -240,
      },
      "bottom-left": {
        x: -260,
        y: -250,
      },
      "left-mobile": {
        x: 80,
        y: -240,
      },
      "bottom-right": {
        x: 290,
        y: -240,
      },
      mobile: {
        x: -40,
        y: -240,
      },
    };

    return (
      <motion.div
        className="absolute pointer-events-auto z-20"
        style={{
          x: directionConfig[direction].x,
          y: directionConfig[direction].y,
          opacity: smoothCardOpacity,
        }}
      >
        <div className="backdrop-blur-3xl border border-[#01adff] shadow-lg p-4 w-64 rounded-lg">
          <h3 className="font-bold text-lg text-[#1c345c] mb-2">{title}</h3>
          <p className="text-sm text-black leading-relaxed">{description}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <section ref={containerRef} className="relative py-32 overflow-visible ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 px-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
          Our <span className="text-[#01adff]">Values</span>
        </h2>
        <div className="mt-4 flex justify-center">
          <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
        </div>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Specialized facade solutions across diverse industries and building
          types
        </p>
      </motion.div>

      <div
        style={{
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "sticky",
          top: 50,
          left: 0,
          right: 0,
        }}
      >
        {/* Top Triangle */}
        <motion.div
          className="relative cursor-pointer"
          style={topTri}
          onMouseEnter={() => setHoveredTriangle("top")}
          onMouseLeave={() => setHoveredTriangle(null)}
          onTouchStart={() => setHoveredTriangle("top")}
          onTouchEnd={() => setHoveredTriangle(null)}
          tabIndex={0}
          role="button"
          aria-label="Our Values"
        >
          <CenterText
            text="Our Values"
            style={{ opacity: smoothTextOpacity }}
          />
          <TriangleSVG
            gradientId="grad-top"
            stop1={gradientStart}
            stop2={gradientEnd}
          />

          <div className="absolute right-7 top-20 text-cyan-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 120 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-16 h-6"
            >
              <line x1="0" y1="12" x2="110" y2="12" strokeLinecap="round" />
              <polyline
                points="100,4 112,12 100,20"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <HoverCard
            id="top"
            title="Our Values"
            description="We believe in transparency, integrity, and delivering excellence in every project. Our core values guide every decision we make."
            direction={isMobile ? "top-mobile" : "top"}
          />
        </motion.div>

        {/* Bottom Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-0.5rem",
            gap: "2rem",
          }}
        >
          <motion.div
            className="relative cursor-pointer"
            style={leftBottomTri}
            onMouseEnter={() => setHoveredTriangle("left")}
            onMouseLeave={() => setHoveredTriangle(null)}
            onTouchStart={() => setHoveredTriangle("left")}
            onTouchEnd={() => setHoveredTriangle(null)}
            tabIndex={0}
            role="button"
            aria-label="Our Vision"
          >
            <CenterText
              text="Our Vision"
              style={{ opacity: smoothTextOpacity }}
            />
            <TriangleSVG
              gradientId="grad-left"
              stop1={gradientStart}
              stop2={gradientEnd}
            />
            <div className="absolute left-7 top-20 text-cyan-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="w-16 h-6 scale-x-[-1]"
              >
                <line x1="0" y1="12" x2="110" y2="12" strokeLinecap="round" />
                <polyline
                  points="100,4 112,12 100,20"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <HoverCard
              id="left"
              title="Our Vision"
              description="To transform urban landscapes with innovative facade solutions that inspire, protect, and enhance communities worldwide."
              direction={isMobile ? "left-mobile" : "bottom-left"}
            />
          </motion.div>

          <motion.div
            className="relative cursor-pointer"
            style={rightBottomTri}
            onMouseEnter={() => setHoveredTriangle("right")}
            onMouseLeave={() => setHoveredTriangle(null)}
            onTouchStart={() => setHoveredTriangle("right")}
            onTouchEnd={() => setHoveredTriangle(null)}
            tabIndex={0}
            role="button"
            aria-label="Our Mission"
          >
            <CenterText
              text="Our Mission"
              style={{ opacity: smoothTextOpacity }}
            />
            <TriangleSVG
              gradientId="grad-right"
              stop1={gradientStart}
              stop2={gradientEnd}
            />
            <div className="absolute right-7 top-20 text-cyan-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="w-16 h-6"
              >
                <line x1="0" y1="12" x2="110" y2="12" strokeLinecap="round" />
                <polyline
                  points="100,4 112,12 100,20"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <HoverCard
              id="right"
              title="Our Mission"
              description="Delivering cutting-edge facade engineering and design services that exceed expectations and set new industry standards."
              direction={isMobile ? "mobile" : "bottom-right"}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
