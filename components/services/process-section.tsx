"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"

// Simple inline icons
function IconDiscover(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="#1c345c" strokeWidth="2" fill="none" />
      <path d="M10 10 L6 18 L14 14 L18 6 Z" stroke="#01adff" fill="none" strokeWidth="2" />
    </svg>
  )
}

function IconDesign(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect x="4" y="4" width="16" height="12" rx="2" stroke="#1c345c" strokeWidth="2" fill="none" />
      <path d="M4 16 L20 16 M8 20 L16 20" stroke="#01adff" strokeWidth="2" />
    </svg>
  )
}

function IconFab(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M4 8h16v10H4z" stroke="#1c345c" strokeWidth="2" fill="none" />
      <path d="M4 8l8-4 8 4" stroke="#01adff" strokeWidth="2" fill="none" />
    </svg>
  )
}

function IconInstall(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M6 18h12M6 14h12M6 10h12" stroke="#1c345c" strokeWidth="2" />
      <path d="M8 10v8 M16 10v8" stroke="#01adff" strokeWidth="2" />
    </svg>
  )
}

function IconHandover(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M7 12h10" stroke="#1c345c" strokeWidth="2" />
      <path d="M15 8l4 4-4 4" stroke="#01adff" strokeWidth="2" fill="none" />
      <circle cx="6" cy="12" r="3" stroke="#1c345c" strokeWidth="2" fill="none" />
    </svg>
  )
}

type Step = {
  key: string
  title: string
  summary: string
  points: string[]
  cta?: { label: string; href: string }
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element
}

const THEME = {
  accent: "#01adff",
  primary: "#1c345c",
  navy: "#001952",
  black: "#000000",
  white: "#ffffff",
} as const

const DEFAULT_STEPS: Step[] = [
  {
    key: "discover",
    title: "Discovery & Requirements",
    summary: "We align on vision, constraints, and performance targets.",
    points: [
      "Stakeholder interviews and site context",
      "Standards, codes, and budget alignment",
      "Initial facade strategy hypotheses",
    ],
    Icon: IconDiscover,
    cta: { label: "Start a brief", href: "/contact?topic=discovery" },
  },
  {
    key: "design",
    title: "Design & Engineering",
    summary: "From concept to engineered detail drawings.",
    points: ["Material selection and mockups", "Thermal/structural checks", "Shop drawings & submittals"],
    Icon: IconDesign,
    cta: { label: "See design work", href: "/projects?type=Design" },
  },
  {
    key: "fabrication",
    title: "Fabrication",
    summary: "Precision manufacturing for consistent quality.",
    points: ["Curtain wall units & glazing", "QA checkpoints at station gates", "Packing & logistics"],
    Icon: IconFab,
    cta: { label: "Tour our facility", href: "/about#facility" },
  },
  {
    key: "installation",
    title: "Installation & QA",
    summary: "On‑site execution with safety-first operations.",
    points: ["Install sequencing & cranes", "On-site testing & inspections", "Handover documentation"],
    Icon: IconInstall,
    cta: { label: "View methodology", href: "/services/installation-maintenance" },
  },
  {
    key: "handover",
    title: "Handover & Support",
    summary: "Long-term reliability with responsive service.",
    points: ["As-builts & O&M manuals", "Warranty & SLAs", "Periodic facade health checks"],
    Icon: IconHandover,
    cta: { label: "Request support", href: "/contact?topic=support" },
  },
]

function useScrollProgress(containerRef: React.RefObject<HTMLDivElement>, steps: Step[]) {
  const [active, setActive] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const containerHeight = container.offsetHeight

      // Calculate scroll progress within the container
      const scrollStart = rect.top + windowHeight * 0.3
      const scrollEnd = rect.bottom - windowHeight * 0.7
      const scrollDistance = scrollEnd - scrollStart

      let progress = 0
      if (scrollDistance > 0) {
        progress = Math.max(0, Math.min(1, -scrollStart / scrollDistance))
      }

      setScrollProgress(progress)

      // Calculate active step based on scroll progress
      const stepIndex = Math.min(
        steps.length - 1,
        Math.floor(progress * steps.length)
      )
      setActive(stepIndex)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll)
  }, [containerRef, steps.length])

  return { active, scrollProgress }
}

export default function ProcessSection({
  title = "Our Project Process",
  subtitle = "A clear, collaborative path from brief to handover.",
  steps = DEFAULT_STEPS,
}: {
  title?: string
  subtitle?: string
  steps?: Step[]
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { active, scrollProgress } = useScrollProgress(containerRef, steps)

  const progressPercentage = useMemo(() => {
    return Math.min(100, scrollProgress * 100)
  }, [scrollProgress])

  return (
    <div>
      {/* Header Section */}
    
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
              Our Project <span className="text-[#01adff]"> Process</span>
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
            </div>
            <p className="mt-6 text-lg md:text-xl text-black max-w-3xl mx-auto">
              A clear, collaborative path from brief to handover.
            </p>
          </div>
      

      {/* Scroll-triggered Process Section */}
      <section 
        ref={containerRef}
        aria-labelledby="process-heading"
        className="container relative"
        style={{ height: `${steps.length * 80}vh` }} 
      >
        {/* Sticky Progress Bar */}
        <div className="sticky top-20 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4">
          <div className="mx-auto container px-4 md:px-6">
            <div 
              className="h-2 w-full  mb-4"
              style={{ backgroundColor: `${THEME.primary}20` }}
            >
              <div
                className="h-2  transition-all duration-300 ease-out"
                style={{ 
                  width: `${progressPercentage}%`, 
                  backgroundColor: THEME.accent 
                }}
              />
            </div>
            
            {/* Step indicators */}
            <div className="flex justify-between">
              {steps.map((step, i) => (
                <div
                  key={step.key}
                  className={`flex flex-col items-center transition-all duration-500 ${
                    i <= active ? 'opacity-100' : 'opacity-40'
                  }`}
                >
                  <div 
                    className="w-3 h-3  mb-2 transition-all duration-500"
                    style={{ 
                      backgroundColor: i <= active ? THEME.accent : `${THEME.primary}40`,
                      transform: i === active ? 'scale(1.3)' : 'scale(1)',
                      boxShadow: i === active ? `0 0 20px ${THEME.accent}60` : 'none'
                    }}
                  />
                  <span 
                    className="text-xs font-medium text-center"
                    style={{ 
                      color: i <= active ? THEME.accent : THEME.primary 
                    }}
                  >
                    {step.title.split(' ')[0]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Card Display */}
        <div className="sticky top-48 z-10 flex items-center justify-center min-h-screen px-4 md:px-6">
          <div className="w-full max-w-4xl">
            {steps.map((step, idx) => {
              const isActive = idx === active
              const isPast = idx < active
              const isFuture = idx > active
              
              return (
                <div
                  key={step.key}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    isActive ? 'opacity-100 scale-100' : 
                    isPast ? 'opacity-60 scale-95' : 'opacity-30 scale-105'
                  }`}
                  style={{
                    transform: `
                      translateY(${isPast ? '-20px' : isFuture ? '20px' : '0px'}) 
                      scale(${isActive ? 1 : 0.95})
                      rotateX(${isFuture ? '5deg' : isPast ? '-5deg' : '0deg'})
                    `,
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                    zIndex: isActive ? 10 : isPast ? 5 : 1,
                    pointerEvents: isActive ? 'auto' : 'none'
                  }}
                >
                  <div
                    className="bg-white border shadow-xl p-8 md:p-12 mx-auto"
                    style={{
                      borderColor: isActive ? THEME.accent : `${THEME.primary}30`,
                      boxShadow: isActive 
                        ? `0 32px 80px -12px ${THEME.navy}25, 0 0 0 1px ${THEME.accent}30` 
                        : `0 16px 40px -8px ${THEME.navy}15`,
                    }}
                  >
                    {/* Card Header */}
                    <div className="flex items-start gap-6 mb-8">
                      <div 
                        className="p-4 transition-all duration-500"
                        style={{
                          backgroundColor: isActive ? `${THEME.accent}15` : `${THEME.primary}10`
                        }}
                      >
                        <step.Icon 
                          className="h-12 w-12 transition-colors duration-500"
                          style={{ 
                            color: isActive ? THEME.accent : THEME.primary 
                          }}
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span 
                            className="text-sm font-bold px-3 py-1 "
                            style={{
                              backgroundColor: isActive ? `${THEME.accent}20` : `${THEME.primary}15`,
                              color: isActive ? THEME.accent : THEME.primary
                            }}
                          >
                            Step {idx + 1}
                          </span>
                          {isActive && (
                            <div 
                              className="w-2 h-2  animate-pulse"
                              style={{ backgroundColor: THEME.accent }}
                            />
                          )}
                        </div>
                        
                        <h3 
                          className="text-2xl md:text-3xl font-bold mb-4"
                          style={{ color: THEME.navy }}
                        >
                          {step.title}
                        </h3>
                        <p 
                          className="text-lg md:text-xl opacity-80"
                          style={{ color: THEME.black }}
                        >
                          {step.summary}
                        </p>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4" style={{ color: THEME.navy }}>
                          Key Activities
                        </h4>
                        <ul className="space-y-3">
                          {step.points.map((pt, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div 
                                className="mt-2 w-6 h-6  flex items-center justify-center flex-shrink-0"
                                style={{ 
                                  backgroundColor: isActive ? `${THEME.accent}20` : `${THEME.primary}15`
                                }}
                              >
                                <div 
                                  className="w-2.5 h-2.5 "
                                  style={{ backgroundColor: isActive ? THEME.accent : THEME.primary }}
                                />
                              </div>
                              <span 
                                className="text-base leading-relaxed"
                                style={{ color: THEME.navy }}
                              >
                                {pt}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col justify-center">
                        {step.cta && (
                          <a
                            href={step.cta.href}
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-all duration-500 hover:scale-105 hover:-translate-y-1 group"
                            style={{
                              color: THEME.white,
                              backgroundColor: isActive ? THEME.accent : THEME.primary,
                              boxShadow: isActive 
                                ? `0 12px 32px ${THEME.accent}40`
                                : `0 8px 24px ${THEME.primary}30`
                            }}
                          >
                            {step.cta.label}
                            <svg className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Progress indicator for current step */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="text-sm opacity-70" style={{ color: THEME.navy }}>
                        Step {idx + 1} of {steps.length}
                      </div>
                      <div className="text-sm opacity-70" style={{ color: THEME.navy }}>
                        Scroll to continue
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Scroll Progress Indicator - Side */}
        {/* <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30">
          <div className="flex flex-col space-y-3">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-1 h-12  transition-all duration-500 ${
                  index <= active ? 'opacity-100' : 'opacity-30'
                }`}
                style={{
                  backgroundColor: index <= active ? THEME.accent : THEME.primary,
                  transform: index === active ? 'scale(1.5)' : 'scale(1)'
                }}
              />
            ))}
          </div>
        </div> */}
      </section>

      {/* Footer Section */}
      <section className="w-full bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
          <h3 className="text-2xl font-bold mb-4" style={{ color: THEME.navy }}>
            Ready to Start Your Project?
          </h3>
          <p className="text-lg mb-8" style={{ color: THEME.black, opacity: 0.8 }}>
            Let's discuss how our proven process can bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            style={{
              color: THEME.white,
              backgroundColor: THEME.accent,
              boxShadow: `0 12px 32px ${THEME.accent}40`
            }}
          >
            Get Started Today
            <svg className="ml-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}