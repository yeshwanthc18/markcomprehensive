"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
  children,
  className,
  interactive = true,
  containerClassName,
  overlayImage,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
  overlayImage?: React.ReactNode;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [parallaxTransform, setParallaxTransform] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frameId: number;

    const move = () => {
      setCurX(prev => prev + (tgX - prev) / 20);
      setCurY(prev => prev + (tgY - prev) / 20);

      if (interactiveRef.current) {
        interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }

      frameId = requestAnimationFrame(move);
    };

    frameId = requestAnimationFrame(move);

    return () => cancelAnimationFrame(frameId);
  }, [tgX, tgY]);

  // Parallax mouse effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 40;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 40;
      
      setParallaxTransform({ x, y });
    };

    const handleMouseLeave = () => {
      setParallaxTransform({ x: 0, y: 0 });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !overlayRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const scrollOffset = Math.max(0, -rect.top) * 0.3;
      
      overlayRef.current.style.transform = `translate(${parallaxTransform.x}px, ${parallaxTransform.y - scrollOffset}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [parallaxTransform]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-screen relative overflow-hidden bg-gradient-to-b from-[#001952] via-[#16213e] to-[#0f3460]",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Parallax Overlay Image */}
      {overlayImage && (
        <div
          ref={overlayRef}
          className="absolute top-0 right-0 w-1/2 h-full opacity-20 mix-blend-lighten z-20 pointer-events-none"
          style={{
            transform: `translate(${parallaxTransform.x}px, ${parallaxTransform.y}px)`,
            transition: "transform 0.15s ease-out",
            willChange: "transform",
          }}
        >
          {overlayImage}
        </div>
      )}

      <div className={cn("relative z-10", className)}>{children}</div>

      <div className="absolute inset-0 opacity-80">
        <div className="gradients-container h-full w-full blur-[80px]">
          {/* First color - moving from top */}
          <div
            className="absolute w-[600px] h-[600px] left-[20%] 
            bg-[radial-gradient(circle_at_center,_rgba(18,113,255,0.4)_0%,_transparent_70%)]
            animate-[moveVertical_8s_ease-in-out_infinite]"
            style={{
              mixBlendMode: 'soft-light',
            }}
          ></div>

          {/* Second color - moving from top */}
          <div
            className="absolute w-[500px] h-[500px] right-[20%]
            bg-[radial-gradient(circle_at_center,_rgba(100,220,255,0.4)_0%,_transparent_70%)]
            animate-[moveVertical_10s_ease-in-out_infinite_2s]"
            style={{
              mixBlendMode: 'soft-light',
            }}
          ></div>

          {/* Bottom accent gradients */}
          <div
            className="absolute bottom-0 left-[10%] w-[400px] h-[400px]
            bg-[radial-gradient(circle_at_center,_rgba(18,113,255,0.3)_0%,_transparent_60%)]
            animate-[float_6s_ease-in-out_infinite]"
            style={{
              mixBlendMode: 'soft-light',
            }}
          ></div>

          <div
            className="absolute bottom-0 right-[15%] w-[450px] h-[450px]
            bg-[radial-gradient(circle_at_center,_rgba(100,220,255,0.35)_0%,_transparent_60%)]
            animate-[float_7s_ease-in-out_infinite_1s]"
            style={{
              mixBlendMode: 'soft-light',
            }}
          ></div>

          {/* Interactive hover element */}
          {interactive && (
            <div
              ref={interactiveRef}
              className={cn(
                "absolute w-[800px] h-[800px] -top-[400px] -left-[400px] transition-opacity duration-300",
                "bg-[radial-gradient(circle_at_center,_rgba(100,220,255,0.5)_0%,_transparent_50%)]",
                isHovered ? "opacity-100" : "opacity-0"
              )}
              style={{
                mixBlendMode: 'soft-light',
                pointerEvents: 'none',
              }}
            ></div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes moveVertical {
          0%, 100% {
            transform: translateY(-20%) translateX(0);
          }
          50% {
            transform: translateY(120%) translateX(10%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default BackgroundGradientAnimation;