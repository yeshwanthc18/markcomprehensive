"use client"

import Image, { StaticImageData } from "next/image"
import { useEffect, useState, useCallback } from "react"

export function ServiceGallery({
  images,
  brand,
  title,
}: {
  images: (string | StaticImageData)[];
  title: string
  brand: { primary: string; primaryDeep: string; navy: string; black: string; white: string }
}) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const close = useCallback(() => setOpen(false), [])
  const openAt = useCallback((i: number) => {
    setIndex(i)
    setOpen(true)
  }, [])

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open, close, prev, next])

  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => openAt(i)}
            className="group relative overflow-hidden text-left rounded-sm"
            style={{ border: `1px solid ${brand.navy}`, backgroundColor: brand.white }}
            aria-label={`Open image ${i + 1} of ${images.length}`}
          >
            <Image
              src={src || "/placeholder.svg"}
              alt={`${title} image ${i + 1}`}
              className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              width={800}
              height={420}
              loading="lazy"
              decoding="async"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ outline: `1px solid ${brand.navy}`, outlineOffset: "-2px", opacity: 0.6 }}
            />
            <div
              className="absolute bottom-0 inset-x-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: brand.primary }}
            />
          </button>
        ))}
      </div>

      {/* Lightbox Popup */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image preview`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          onClick={close}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: brand.white, border: `1px solid ${brand.navy}` }}
          >
            <div className="flex items-center justify-between p-2" style={{ borderBottom: `1px solid ${brand.navy}` }}>
              <div className="text-sm" style={{ color: brand.navy }}>
                {title} — {index + 1} / {images.length}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="px-3 py-1 text-sm"
                  style={{ backgroundColor: brand.white, color: brand.navy, border: `1px solid ${brand.navy}` }}
                >
                  Prev
                </button>
                <button
                  onClick={next}
                  className="px-3 py-1 text-sm"
                  style={{ backgroundColor: brand.navy, color: brand.white, border: `1px solid ${brand.navy}` }}
                >
                  Next
                </button>
                <button
                  onClick={close}
                  className="px-3 py-1 text-sm"
                  style={{ backgroundColor: brand.white, color: brand.navy, border: `1px solid ${brand.navy}` }}
                  aria-label="Close preview"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="p-2">
              <Image
                src={images[index] || "/placeholder.svg"}
                alt={`${title} preview ${index + 1}`}
                className="w-full h-[60vh] object-contain bg-[color:var(--img-bg)]"
                style={{ ["--img-bg" as any]: "#f7f7f9" }}
                width={1600}
                height={900}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
