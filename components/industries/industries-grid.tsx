"use client"

import type React from "react"

import { useMemo, useState } from "react"
import Link from "next/link"
import ScrollTriggerComponent from "@/components/animations/scroll-trigger"
import { Building2, Hotel, Home, Hospital, Store, Landmark } from "lucide-react"
import { forwardRef } from "react"

type Region = "Oman" | "India" | "Iraq" | "KSA" | "UAE"
type IndustryKey = "commercial" | "hospitality" | "residential" | "healthcare" | "retail" | "government"

type Industry = {
  key: IndustryKey
  title: string
  solutions: string
  regions: Region[]
  Icon: React.ComponentType<{ className?: string }>
  accent?: "light" | "deep"
}

const BRAND = {
  primary: "#01adff",
  primaryDeep: "#1c345c",
  secondary: "#001952",
  black: "#000000",
  white: "#ffffff",
} as const

const ALL_REGIONS: Region[] = ["Oman", "India", "Iraq", "KSA", "UAE"]

const INDUSTRIES: Industry[] = [
  {
    key: "commercial",
    title: "Commercial",
    solutions: "High-rise glazing, dynamic cladding",
    regions: ["UAE", "KSA", "India", "Oman", "Iraq"],
    Icon: Building2,
    accent: "light",
  },
  {
    key: "hospitality",
    title: "Hospitality",
    solutions: "Luxury hotel façades, bespoke designs",
    regions: ["UAE", "KSA", "India", "Oman"],
    Icon: Hotel,
    accent: "deep",
  },
  {
    key: "residential",
    title: "Residential",
    solutions: "Balcony systems, noise‑reduction façades",
    regions: ["India", "UAE", "KSA", "Oman"],
    Icon: Home,
    accent: "light",
  },
  {
    key: "healthcare",
    title: "Healthcare",
    solutions: "Antimicrobial coatings, daylight optimization",
    regions: ["UAE", "India", "KSA"],
    Icon: Hospital,
    accent: "deep",
  },
  {
    key: "retail",
    title: "Retail & Hospitality",
    solutions: "Signature storefronts, LED‑integrated façades",
    regions: ["UAE", "KSA", "India", "Oman"],
    Icon: Store,
    accent: "light",
  },
  {
    key: "government",
    title: "Government / Public",
    solutions: "Durable, vandal‑resistant materials",
    regions: ["UAE", "KSA", "Iraq", "Oman"],
    Icon: Landmark,
    accent: "deep",
  },
]

export function IndustriesGrid({ initialRegion }: { initialRegion?: Region | "All" }) {
  const [region, setRegion] = useState<Region | "All">(initialRegion || "All")

  const filtered = useMemo(() => {
    if (region === "All") return INDUSTRIES
    return INDUSTRIES.filter((i) => i.regions.includes(region))
  }, [region])

  return (
    <section className="w-full bg-white" aria-labelledby="industries-heading">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        {/* Animate header with fadeInUp */}
        <ScrollTriggerComponent animation="fadeInUp" className="flex flex-col gap-4 md:gap-5">
          <h1
            id="industries-heading"
            className="text-pretty font-sans text-3xl font-semibold tracking-tight text-black md:text-4xl"
          >
            Industries We Serve
          </h1>
          <p className="max-w-2xl text-black/70">
            A visually engaging breakdown of sectors Mark Comprehensive caters to. Hover to discover solutions and jump
            straight to regional project examples.
          </p>
        </ScrollTriggerComponent>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {(["All", ...ALL_REGIONS] as (Region | "All")[]).map((r) => {
            const isActive = region === r
            return (
              <button
                key={r}
                type="button"
                onClick={() => setRegion(r)}
                aria-pressed={isActive}
                className={[
                  "inline-flex items-center  border px-4 py-2 text-sm font-medium transition-colors",
                  isActive ? "text-white" : "text-[color:#001952]",
                ].join(" ")}
                style={{
                  borderColor: BRAND.primaryDeep,
                  backgroundColor: isActive ? BRAND.primary : BRAND.white,
                }}
              >
                {r}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <div
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Industries list"
        >
          {filtered.map((item, idx) => (
            // One-by-one reveal with stagger per card
            <ScrollTriggerComponent key={item.key} animation="fadeInUp" stagger={idx * 0.1}>
              <IndustryCard industry={item} />
            </ScrollTriggerComponent>
          ))}
        </div>
      </div>
    </section>
  )
}

type IndustryCardProps = {
  industry: Industry
}

const cardBase = "group relative  border bg-white p-6 shadow-sm transition-transform will-change-transform"
const cardHover = "hover:-translate-y-1"
const iconWrap = "mb-4 inline-flex h-12 w-12 items-center justify-center "

const badge = "absolute right-4 top-4  px-3 py-1 text-xs font-semibold"

const solutionsText = "text-sm text-black/70"

const buttonBase =
  "mt-6 inline-flex items-center justify-center  px-3.5 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2"

const IndustryCard = forwardRef<HTMLDivElement, IndustryCardProps>((props, ref) => {
  const { industry } = props
  const { Icon } = industry
  const accentBg = industry.accent === "light" ? BRAND.primary : BRAND.primaryDeep
  const accentText = industry.accent === "light" ? BRAND.secondary : BRAND.white

  return (
    <div
      ref={ref}
      role="listitem"
      className={[cardBase, cardHover].join(" ")}
      style={{ borderColor: BRAND.primaryDeep }}
    >
      {/* Accent badge */}
      <span
        className={badge}
        style={{
          backgroundColor: BRAND.secondary,
          color: BRAND.white,
        }}
      >
        {industry.regions.length}+ Regions
      </span>

      {/* Icon */}
      <div className={iconWrap} style={{ backgroundColor: `${accentBg}1A` /* ~10% alpha */ }}>
        <Icon className="h-6 w-6" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-black">{industry.title}</h3>
      <p className={solutionsText}>{industry.solutions}</p>

      {/* Regions row */}
      <div className="mt-3 flex flex-wrap gap-2">
        {industry.regions.slice(0, 4).map((r) => (
          <span
            key={r}
            className=" px-2.5 py-1 text-xs"
            style={{
              backgroundColor: BRAND.white,
              border: `1px solid ${BRAND.primaryDeep}`,
              color: BRAND.secondary,
            }}
          >
            {r}
          </span>
        ))}
      </div>

      {/* CTA */}
      <Link
        href={{
          pathname: "/projects",
          query: { industry: industry.title, region: "All" },
        }}
        className={buttonBase}
        style={{
          backgroundColor: BRAND.primary,
          color: BRAND.white,
          boxShadow: `0 6px 16px 0 ${BRAND.primary}40`,
        }}
      >
        View Projects
      </Link>

      {/* Hover ring */}
      <div
        className="pointer-events-none absolute inset-0  ring-0 transition-all duration-300"
        style={{ boxShadow: `0 0 0 0 ${BRAND.primary}00` }}
      />
      <style jsx>{`
        .group:hover .ring-0 {
          box-shadow: 0 0 0 3px ${BRAND.primary};
        }
      `}</style>
    </div>
  )
})
