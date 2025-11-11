"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import gsap from "gsap";

const BRAND = {
  primary: "#01adff",
  deep: "#1c345c",
  navy: "#001952",
  white: "#ffffff",
  black: "#000000",
};

export type Testimonial = {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  project: string;
  image?: string;
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Denis Slavska",
    position: "CTO",
    company: "Alitic",
    content: "They tailor their solutions to our specific needs and goals.",
    project: "Custom ERP Rollout",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 2,
    name: "Jahan Melad",
    position: "Project Manager",
    company: "Buildwave",
    content: "They organized their work and internal management was outstanding.",
    project: "Financial District Facade",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    position: "Lead Architect",
    company: "LAG",
    content: "Flawless execution and clear communication throughout the project.",
    project: "Bridge Tower",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
  },
  {
    id: 4,
    name: "Jim Halpert",
    position: "Engineer",
    company: "InHive",
    content: "Working with them was a great experience from start to finish.",
    project: "InHive HQ",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
];

export default function TestimonialsAutoscrollGSAP({
  items = DEFAULT_TESTIMONIALS,
  speed = 40,
}: {
  items?: Testimonial[];
  speed?: number;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [hovering, setHovering] = useState(false);
  const [inView, setInView] = useState(true);
  const [prefersReduced, setPrefersReduced] = useState(false);

  const loopItems = useMemo(() => [...items, ...items], [items]);

  // 🔧 Measure half width of track (so we know when to loop)
  const measureHalfWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;

    const half = Math.floor(track.children.length / 2);
    let totalWidth = 0;

    for (let i = 0; i < half; i++) {
      const el = track.children[i] as HTMLElement;
      if (el) totalWidth += el.offsetWidth;
    }

    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || "0");
    totalWidth += gap * (half - 1);

    return totalWidth;
  }, []);

  // 🌀 Create GSAP scroll animation once
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(m.matches);
    const handleChange = () => setPrefersReduced(m.matches);
    m.addEventListener("change", handleChange);

    const section = sectionRef.current;
    if (!section) return;

    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    io.observe(section);

    const track = trackRef.current;
    if (!track || prefersReduced) return;

    const distance = measureHalfWidth();
    if (!distance) return;

    gsap.set(track, { x: 0 });

    const tween = gsap.to(track, {
      x: -distance,
      duration: speed,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const n = parseFloat(x);
          const wrapped = ((n % -distance) + -distance) % -distance;
          return `${wrapped}px`;
        },
      },
    });

    tweenRef.current = tween;

    const resizeObserver = new ResizeObserver(() => {
      // ✅ Smooth rebuild on resize without resetting position
      const currentX = gsap.getProperty(track, "x") as number;
      const d = measureHalfWidth();
      tween.vars.x = -d;
      tween.invalidate().restart(false).pause().play();
      gsap.set(track, { x: currentX });
    });

    resizeObserver.observe(track);

    return () => {
      m.removeEventListener("change", handleChange);
      io.disconnect();
      resizeObserver.disconnect();
      tween.kill();
    };
  }, [measureHalfWidth, speed, prefersReduced]);

  // ✋ Pause / resume smoothly
  useEffect(() => {
    const tl = tweenRef.current;
    if (!tl) return;

    if (hovering || !inView || prefersReduced) {
      tl.pause();
    } else {
      tl.resume();
    }
  }, [hovering, inView, prefersReduced]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="reviews-title"
      className="py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-10 relative">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Client <span className="text-[#01adff]">Testimonials</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Hear what our partners say about working with us.
          </p>
        </div>

        {/* Testimonials Track */}
        <div
          role="region"
          aria-label="Client testimonials"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className="overflow-hidden select-none"
        >
          <div
            ref={trackRef}
            className="flex gap-6 md:gap-10 will-change-transform"
          >
            {loopItems.map((t, idx) => (
              <Card
                key={`${t.id}-${idx}`}
                className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 text-white 
                min-w-[85%] sm:min-w-[380px] md:min-w-[440px] lg:min-w-[520px] transition-transform hover:scale-[1.02]"
              >
                <CardContent className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-12 w-12 rounded-xl object-cover border border-white/20"
                      />
                      <div className="text-sm">
                        <div className="font-semibold text-white">
                          {t.name}
                        </div>
                        <div className="text-white/60">{t.position}</div>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="px-4 py-1 rounded-md border-[#01adff]/50 text-[#01adff] bg-[#01adff]/10"
                    >
                      {t.company}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="relative mt-6 md:mt-8">
                    <Quote
                      className="absolute -top-6 -left-2 h-7 w-7 text-[#01adff]/40"
                      aria-hidden="true"
                    />
                    <blockquote className="text-lg md:text-xl leading-relaxed font-medium text-white/90">
                      “{t.content}”
                    </blockquote>
                  </div>

                  {/* Project Tag */}
                  <div className="mt-6">
                    <Badge
                      className="px-3 py-1 rounded-md border-[#01adff]/30 bg-[#01adff]/10 text-[#01adff] text-sm"
                    >
                      {t.project}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
}
