"use client"
import React from "react"

type RevealProps = {
  threshold?: number
  delay?: number
  className?: string
  children: React.ReactNode
}

export function Reveal({ threshold = 0.25, delay = 0.5, className, children }: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [shown, setShown] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true)
      return
    }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true)
            io.disconnect()
          }
        })
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-700",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className || "",
      ].join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
