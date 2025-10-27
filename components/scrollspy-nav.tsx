"use client"

import type React from "react"

import { useEffect, useMemo, useState } from "react"

type Section = { id: string; label: string }
type Brand = {
  primary: string
  primaryDeep: string
  navy: string
  black: string
  white: string
}

export function ScrollspyNav({
  sections,
  brand,
  offset = 96,
}: {
  sections: readonly Section[]
  brand: Brand
  offset?: number
}) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "")

  useEffect(() => {
    if (typeof window === "undefined") return
    const ids = sections.map((s) => s.id)
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el)

    if (els.length === 0) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        // Trigger when 60% of a section is visible
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      },
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [sections])

  const linkBase = "block  px-3 py-2 text-sm transition-colors focus:outline-none focus-visible:ring-2"

  const linkStyles = useMemo(
    () => ({
      base: {
        color: brand.navy,
        border: `1px solid ${brand.navy}`,
        backgroundColor: brand.white,
      },
      active: {
        color: brand.black,
        border: `1px solid ${brand.navy}`,
        backgroundColor: brand.primary,
      },
      focusRing: {
        boxShadow: `0 0 0 2px ${brand.primary}`,
      },
    }),
    [brand],
  )

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <div className="sticky top-24">
      <div className="text-xs uppercase tracking-wide mb-3" style={{ color: brand.primaryDeep }}>
        On this page
      </div>
      <ul className="space-y-2">
        {sections.map((s) => {
          const isActive = active === s.id
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={isActive ? "true" : undefined}
                onClick={(e) => handleClick(e, s.id)}
                className={linkBase}
                style={isActive ? linkStyles.active : linkStyles.base}
                onFocus={(e) => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow = linkStyles.focusRing.boxShadow
                }}
                onBlur={(e) => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow = "none"
                }}
              >
                {s.label}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
