"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Globe, Award, Zap, ChevronRight } from "lucide-react";
import Skiper16 from "./ScrollStack";
import Image from "next/image";
import BannerImg from "../../public/compressed-images/image2.jpg"; // replace with your banner image path

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  metrics: string;
};

// timelineEvents same as before
const timelineEvents: TimelineEvent[] = [
  {
    year: "1998",
    title: "Sister Company Founded",
    description:
      "United Aluminium LLC established in UAE as leading aluminum, glass and cladding fabricators.",
    icon: Building2,
    metrics: "UAE Foundation",
  },
  {
    year: "2010",
    title: "Mark Comprehensive Born",
    description:
      "Started successful journey in Sultanate of Oman with full support and experience from sister concern.",
    icon: Award,
    metrics: "Oman Launch",
  },
  {
    year: "2015",
    title: "Facility Expansion",
    description:
      "Established modern fabrication facilities in Halban Industrial area with advanced aluminum fabrication lines.",
    icon: Zap,
    metrics: "Modern Facilities",
  },
  {
    year: "2020",
    title: "Regional Growth",
    description:
      "Expanded services across 10+ countries, serving banks, schools, mosques, hotels, and developers.",
    icon: Globe,
    metrics: "10+ Countries",
  },
  {
    year: "2024",
    title: "Industry Leadership",
    description:
      "Recognized as one of the leading façade specialists with 100+ projects and 50+ satisfied clients.",
    icon: Award,
    metrics: "100+ Projects",
  },
];

export default function ResponsiveStackingTimelineFixed() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [stackedCards, setStackedCards] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          const ds = el.dataset?.index;
          const index = ds != null ? Number(ds) : -1;
          if (!Number.isFinite(index) || index < 0) return;

          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setVisibleCards((prev) => {
              const next = new Set<number>(prev);
              next.add(index);

              const sortedVisible = Array.from(next).sort((a, b) => a - b);
              setStackedCards(sortedVisible);
              return next;
            });
          }
        });
      },
      {
        threshold: [0, 0.5, 1],
        root: null,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getCardStyle = (index: number): CSSProperties => {
    const stackPosition = stackedCards.indexOf(index);
    const isStacked = stackPosition !== -1;
    const isVisible = visibleCards.has(index);

    if (!isVisible) {
      return {
        opacity: 0,
        transform: "translateY(50px) scale(0.9)",
        pointerEvents: "none",
      };
    }

    if (isStacked) {
      const offset = stackPosition * 8;
      const scale = 1 - stackPosition * 0.03;
      return {
        opacity: 1,
        transform: `translateY(${offset}px) scale(${scale})`,
        zIndex: stackedCards.length - stackPosition + 10,
        boxShadow: `0 ${4 + stackPosition * 4}px ${
          20 + stackPosition * 8
        }px rgba(0,0,0,${0.1 + stackPosition * 0.02})`,
      };
    }

    return {
      opacity: 1,
      transform: "translateY(0px) scale(1)",
      zIndex: 1,
    };
  };

  return (
    <div className="min-h-screen container mx-auto">
      {/* Header */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            Company <span className="text-[#01adff]">Timeline</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
          </div>
          <p className="mt-6 text-lg md:text-xl text-black max-w-3xl mx-auto">
            Discover how we've grown from a small startup to industry leadership
            through key milestones
          </p>
        </div>
      </section>

      <div className="flex gap-8 py-8">
        {/* Left Banner */}
        <div className="flex-shrink-0  w-1/2 sticky top-3 hidden md:block">
          <Image
            src={BannerImg}
            alt="Company Banner"
            className="object-cover"
            fill
          />
        </div>

        {/* Right Timeline */}
        <div className="flex-1">
          <Skiper16 />
        </div>
      </div>
    </div>
  );
}
