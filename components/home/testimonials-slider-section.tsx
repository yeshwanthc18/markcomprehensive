"use client";

import type React from "react";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import gsap from "gsap";

const BRAND = {
  primary: "#01adff",
  deep: "#1c345c",
  navy: "#001952",
  black: "#000000",
  white: "#ffffff",
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
    position: "CTO, Alitic",
    company: "Alitic",
    content: "They tailor their solutions to our specific needs and goals.",
    project: "Custom ERP Rollout",
    image:
      "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=",
  },
  {
    id: 2,
    name: "Jahan Melad",
    position: "Project Manager, Buildwave",
    company: "Buildwave",
    content:
      "They organized their work and internal management was outstanding.",
    project: "Financial District Facade",
    image:
      "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=",
  },
  {
    id: 3,
    name: "Jim Halpert",
    position: "Lead Engineering, InHive Space",
    company: "InHive",
    content: "Working with them was a great experience.",
    project: "InHive HQ",
    image:
      "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    position: "Lead Architect",
    company: "LAG",
    content:
      "Flawless execution and clear communication throughout the project.",
    project: "Bridge Tower",
    image:
      "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=",
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
  const tlRef = useRef<gsap.core.Tween | null>(null);
  const [hovering, setHovering] = useState(false);
  const [inView, setInView] = useState(true);
  const [prefersReduced, setPrefersReduced] = useState(false);

  const loopItems = useMemo(() => [...items, ...items], [items]);

  const measureHalfWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;

    const half = Math.floor(track.children.length / 2);
    let w = 0;

    for (let i = 0; i < half; i++) {
      const el = track.children[i] as HTMLElement;
      if (el) w += el.offsetWidth;
    }

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0");
    w += gap * (half - 1);

    return w;
  }, []);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(m.matches);
    const onChange = () => setPrefersReduced(m.matches);
    m.addEventListener?.("change", onChange);

    const section = sectionRef.current;
    if (!section) return;

    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    io.observe(section);

    const build = () => {
      if (!trackRef.current || prefersReduced) return;
      const track = trackRef.current;
      const distance = measureHalfWidth();

      if (!distance || distance <= 0) return;

      if (tlRef.current) {
        tlRef.current.kill();
        tlRef.current = null;
      }

      gsap.set(track, { x: 0 });

      const tween = gsap.to(track, {
        x: -distance,
        duration: speed,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x: string) => {
            const n = Number.parseFloat(x);
            const wrapped = ((n % -distance) + -distance) % -distance;
            return `${wrapped}px`;
          },
        },
      });

      tlRef.current = tween;

      if (hovering || !inView) {
        tween.pause();
      }
    };

    build();

    const ro = new ResizeObserver(() => {
      build();
    });
    ro.observe(trackRef.current!);

    return () => {
      m.removeEventListener?.("change", onChange);
      io.disconnect();
      ro.disconnect();
      if (tlRef.current) {
        tlRef.current.kill();
        tlRef.current = null;
      }
    };
  }, [measureHalfWidth, speed, prefersReduced, hovering, inView]);

  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;

    if (hovering || !inView || prefersReduced) {
      tl.pause();
    } else {
      tl.resume();
    }
  }, [hovering, inView, prefersReduced]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tl = tlRef.current;
      if (!tl) return;
      if (e.key === "ArrowRight") tl.timeScale(1);
      if (e.key === "ArrowLeft") tl.timeScale(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const stepBy = (dir: 1 | -1) => {
    const tl = tlRef.current;
    if (tl) {
      tl.timeScale(dir);
      tl.play();
    }
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="reviews-title"
      className="py-40"
      id="contact"
    
    >
      <div className="container mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center tracking-tight">
              Success <span className="text-[#01adff]">Stories</span>
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
            </div>
             <p className="mt-6 mb-8 text-lg md:text-xl text-white max-w-2xl mx-auto">
              Discover our latest architectural innovations
            </p>
          </div>
        </div>

        {/* Marquee track */}
        <div
          role="region"
          aria-label="Client testimonials"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onFocus={() => setHovering(true)}
          onBlur={() => setHovering(false)}
          className="overflow-hidden"
        >
          <div
            ref={trackRef}
            className="flex gap-12 md:gap-8 will-change-transform select-none"
          >
            {loopItems.map((t, idx) => (
              <Card
                key={`${t.id}-${idx}`}
                data-card
                className="rounded-lg sm:min-w-[420px] lg:min-w-[520px] border backdrop-blur-2xl"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center justify-between pb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt={t.name}
                        className="h-12 w-12 rounded-lg object-contain"
                      />
                      <div className="text-sm">
                        <div
                          className="font-semibold"
                          style={{ color: BRAND.black }}
                        >
                          {t.name}
                        </div>
                        <div style={{ color: BRAND.navy }}>{t.position}</div>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="px-4 py-2 rounded-md"
                      style={{
                        borderColor: BRAND.deep,
                        color: BRAND.navy,
                        background: BRAND.white,
                      }}
                      aria-label={`Company ${t.company}`}
                    >
                      {t.company}
                    </Badge>
                  </div>

                  <div className="relative mt-6 md:mt-8">
                    <Quote
                      aria-hidden="true"
                      className="absolute -top-8 -left-1 h-8 w-8"
                      style={{ color: BRAND.deep }}
                    />
                    <blockquote
                      className="text-pretty text-xl md:text-2xl leading-relaxed font-semibold"
                      style={{ color: BRAND.black }}
                    >
                      "{t.content}"
                    </blockquote>
                  </div>

                  <div className="mt-6">
                    <Badge
                      className="border rounded-sm p-4"
                      style={{
                        background: `${BRAND.primary}1A`,
                        color: BRAND.primary,
                        borderColor: `${BRAND.primary}4D`,
                      }}
                    >
                      Project: {t.project}
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
