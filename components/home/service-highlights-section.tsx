"use client";

import type React from "react";

import { useEffect, useMemo, useRef, useState } from "react";
import { PanelsTopLeft, Building2, ScanLine, Wrench } from "lucide-react";
import Link from "next/link";
import type { JSX } from "react/jsx-runtime";
import Image1 from "../../public/compressed-images/project-photos/DHAR HASSAN VILLA/IMG_6470.jpg";
import Image2 from "../../public/compressed-images/project-photos/DHAR HASSAN VILLA/IMG_6517.jpg";
import Image3 from "../../public/compressed-images/project-photos/DHAR HASSAN VILLA/IMG_6551.jpg";
import Image4 from "../../public/compressed-images/project-photos/DOWNE/IMG_3868.jpg";
import Image from "@/components/SmartImage";
import ButtonPrimary from "../layout/Button";

type Region = "Oman" | "India" | "Iraq" | "KSA" | "UAE";

type Service = {
  key: string;
  title: string;
  summary: string;
  points: string[];
  icon: JSX.Element;
  image: { src: any; alt: string };
  defaultRegion: Region;
};

const BRAND = {
  primary: "#01adff",
  primaryDeep: "#1c345c",
  navy: "#001952",
  black: "#000000",
  white: "#ffffff",
};

const services: Service[] = [
  {
    key: "curtain-wall",
    title: "Curtain Wall Systems",
    summary:
      "High-performance unitized and stick systems engineered for skyline-scale façades.",
    points: [
      "Thermal + acoustic optimization",
      "Precision-engineered mullions",
      "Custom frit and coating options",
    ],
    icon: <PanelsTopLeft className="h-6 w-6" aria-hidden="true" />,
    image: {
      src: Image1,
      alt: "Curtain wall system visualization",
    },
    defaultRegion: "UAE",
  },
  {
    key: "structural-glazing",
    title: "Structural Glazing",
    summary:
      "Minimal sightlines with engineered strength for visually seamless envelopes.",
    points: [
      "Spider/point-supported systems",
      "Silicone and toggled assemblies",
      "Finite element performance validation",
    ],
    icon: <Building2 className="h-6 w-6" aria-hidden="true" />,
    image: {
      src: Image2,
      alt: "Structural glazing visualization",
    },
    defaultRegion: "KSA",
  },
  {
    key: "smart-glass",
    title: "Smart Glass Integration",
    summary:
      "Electrochromic and sensor-driven façades for comfort, efficiency, and clarity.",
    points: [
      "Electrochromic + PDLC options",
      "BMS/IoT integrations",
      "Daylight + heat-gain orchestration",
    ],
    icon: <ScanLine className="h-6 w-6" aria-hidden="true" />,
    image: {
      src: Image3,
      alt: "Smart glass integration visualization",
    },
    defaultRegion: "Oman",
  },
  {
    key: "installation-maintenance",
    title: "Installation & Maintenance",
    summary:
      "Full lifecycle delivery—from precision installation to proactive aftercare.",
    points: [
      "Certified on-site execution",
      "Rigorous QA/QC, safety-first",
      "Long-term service agreements",
    ],
    icon: <Wrench className="h-6 w-6" aria-hidden="true" />,
    image: {
      src: Image4,
      alt: "Installation and maintenance visualization",
    },
    defaultRegion: "India",
  },
];

// Intersection observer hook for per-item reveal and active step tracking
function useStepObserver(count: number) {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState<boolean[]>(() =>
    Array(count).fill(false)
  );

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.index);
          if (entry.isIntersecting) {
            setActive(idx);
            setRevealed((prev) => {
              if (prev[idx]) return prev;
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }
        });
      },
      {
        root: null,
        threshold: prefersReduced ? 0.1 : 0.4,
        rootMargin: "0px 0px -25% 0px",
      }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [count]);

  return { itemsRef, active, revealed, setActive };
}

export default function ServiceHighlightsSticky() {
  const { itemsRef, active, revealed, setActive } = useStepObserver(
    services.length
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        setActive((i) => Math.min(i + 1, services.length - 1));
      }
      if (e.key === "ArrowUp" || e.key === "PageUp") {
        setActive((i) => Math.max(i - 1, 0));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const activeService = useMemo(() => services[active], [active]);

  return (
    <section
      aria-labelledby="services-heading"
      className="relative w-full"
    >
      {/* Decorative background orbs (brand-only) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute -top-16 -left-16 h-64 w-64  opacity-10 blur-2xl"
          style={{
            background: `radial-gradient(closest-side, ${BRAND.primary} 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute top-32 -right-10 h-48 w-48  opacity-10 blur-xl"
          style={{
            background: `radial-gradient(closest-side, ${BRAND.primaryDeep} 0%, transparent 70%)`,
          }}
        />
      </div>
      <div className="mx-auto container px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            Service <span className="text-[#01adff]">Highlights</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
          </div>
          <p className="mt-6 text-lg md:text-xl text-black max-w-3xl mx-auto">
            Precision-engineered systems, integrated technologies, and
            end‑to‑end delivery all tailored to your project’s performance
            goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Steps list */}
          <div className="lg:col-span-5">
            <ol className="space-y-5">
              {services.map((s, idx) => {
                const isActive = active === idx;
                const isRevealed = revealed[idx];
                return (
                  <li key={s.key}>
                    <div
                      // observe each step
                      ref={(el) => {
                        itemsRef.current[idx] = el;
                      }}
                      data-index={idx}
                      className={[
                        "group  border p-4 md:p-5 transition-all",
                        isActive
                          ? "border-[color:var(--brand-primary)] bg-[color:var(--brand-navy)]/5 shadow-sm"
                          : "border-black/15 bg-white hover:border-black/20",
                      ].join(" ")}
                      style={
                        {
                          // CSS variables for brand palette
                          ["--brand-primary" as any]: BRAND.primary,
                          ["--brand-deep" as any]: BRAND.primaryDeep,
                          ["--brand-navy" as any]: BRAND.navy,
                        } as React.CSSProperties
                      }
                    >
                      <button
                        type="button"
                        onClick={() => {
                          // scroll into view and set active
                          itemsRef.current[idx]?.scrollIntoView({
                            block: "start",
                            behavior: "smooth",
                          });
                          setActive(idx);
                        }}
                        className="flex w-full items-start gap-4 text-left outline-none"
                        aria-current={isActive ? "step" : undefined}
                        aria-controls={`service-panel-${s.key}`}
                      >
                        <span
                          className={[
                            "flex h-11 w-11 shrink-0 items-center justify-center  border transition-colors",
                            isActive
                              ? "border-[color:var(--brand-primary)] bg-[color:var(--brand-primary)] text-white"
                              : "border-black/15 bg-white text-[color:var(--brand-deep)]",
                          ].join(" ")}
                          aria-hidden="true"
                        >
                          {s.icon}
                        </span>
                        <span className="flex-1">
                          <span
                            className={[
                              "text-lg font-semibold",
                              isActive
                                ? "text-[color:var(--brand-navy)]"
                                : "text-black",
                            ].join(" ")}
                          >
                            {s.title}
                          </span>
                          <span className="mt-1 block text-sm text-black/80">
                            {s.summary}
                          </span>
                          <ul className="mt-3 grid list-disc grid-cols-1 gap-x-6 gap-y-1.5 pl-5 text-sm text-black/80 md:grid-cols-2">
                            {s.points.map((p) => (
                              <li key={p}>{p}</li>
                            ))}
                          </ul>
                        </span>
                      </button>

                      {/* one-by-one entry animation */}
                      <div
                        aria-hidden="true"
                        className={[
                          "mt-4 h-1 w-full origin-left  transition-all",
                          isActive
                            ? "bg-[color:var(--brand-primary)] scale-x-100"
                            : "bg-black/10 scale-x-75 group-hover:scale-x-95",
                        ].join(" ")}
                        style={{
                          transitionDuration: "600ms",
                          transform:
                            isRevealed || isActive
                              ? "scaleX(1)"
                              : "scaleX(0.3)",
                          opacity: isRevealed ? 1 : 0,
                        }}
                      />
                    </div>
                  </li>
                );
              })}
            </ol>
            <div className="mt-10">
              <ButtonPrimary>
                <Link href="/services">View Services</Link>
              </ButtonPrimary>
            </div>
          </div>

          {/* Sticky artboard */}
          <div className="lg:col-span-7 hidden md:block">
            <div
              className="relative h-[60vh] overflow-hidden  border border-black/15 bg-[color:var(--brand-navy)] text-white shadow-md md:h-[70vh] lg:sticky lg:top-28"
              id={`service-panel-${activeService.key}`}
              role="region"
              aria-live="polite"
              aria-label={`${activeService.title} preview`}
              style={
                {
                  ["--brand-primary" as any]: BRAND.primary,
                  ["--brand-deep" as any]: BRAND.primaryDeep,
                  ["--brand-navy" as any]: BRAND.navy,
                } as React.CSSProperties
              }
            >
              {/* layered background for subtle 3D feel */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, ${BRAND.navy} 0%, ${BRAND.primaryDeep} 100%)`,
                }}
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -right-20 -top-16 h-72 w-72  opacity-20 blur-3xl"
                style={{
                  background: `radial-gradient(closest-side, ${BRAND.primary} 0%, transparent 70%)`,
                }}
                aria-hidden="true"
              />
              {/* animated rings */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2">
                <div className="animate-[spin_18s_linear_infinite]  border border-white/10 p-14" />
                <div className="animate-[spin_28s_linear_infinite_reverse]  border border-white/10 p-24" />
              </div>

              {/* content */}
              <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center">
                <span className="inline-flex items-center gap-2  border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium">
                  <span
                    className="inline-block h-2 w-2 "
                    style={{ backgroundColor: BRAND.primary }}
                  />
                  {activeService.defaultRegion}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                  {activeService.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/80">
                  {activeService.summary}
                </p>

                <div className="mt-7 w-full max-w-2xl overflow-hidden  border border-white/15 bg-white/5 shadow-inner">
                  <Image
                    src={activeService.image.src || "/placeholder.svg"}
                    alt={activeService.image.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-80 w-full object-cover md:h-[24rem]"
                  />
                  <div
                    className="h-1 w-full"
                    style={{ backgroundColor: BRAND.primary }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
