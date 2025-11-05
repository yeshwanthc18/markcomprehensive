"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function ServiceGallery({
  images,
  brand,
  title,
}: {
  images: (string | StaticImageData)[];
  title: string;
  brand: { primary: string; primaryDeep: string; navy: string; black: string; white: string };
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const close = useCallback(() => setOpen(false), []);
  const openAt = useCallback((i: number) => {
    setIndex(i);
    setDirection(0);
    setOpen(true);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  // Esc / arrows
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  // Direction-aware slide
  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 120 : -120, opacity: 0.001, scale: 0.985 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -120 : 120, opacity: 0.001, scale: 0.985 }),
  };

  return (
    <div>
      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => openAt(i)}
            className="group relative overflow-hidden rounded-2xl border bg-white transition-transform duration-500 hover:scale-[1.02] hover:shadow-lg"
            style={{ borderColor: `${brand.navy}1a` }}
            aria-label={`Open image ${i + 1} of ${images.length}`}
          >
            <Image
              src={src}
              alt={`${title} image ${i + 1}`}
              className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 select-none"
              width={800}
              height={420}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence initial={false} custom={direction}>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${title} image preview`}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(16px)" }}
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              initial={{ opacity: 0, y: 34, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.2, 0.6, 0.2, 1] }}
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.92))",
                border: `1px solid ${brand.navy}22`,
              }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-4 py-2 border-b text-sm"
                style={{ borderColor: `${brand.navy}22`, color: brand.navy }}
              >
                <span>
                  {title} — {index + 1} / {images.length}
                </span>
                <button
                  onClick={close}
                  className="p-2 rounded-full hover:bg-black/[0.06] transition"
                  aria-label="Close preview"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Stage */}
              <div className="relative h-[70vh] bg-[#f7f8fb]">
                {/* Animated image layer — pointer-events disabled so buttons work */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <AnimatePresence mode="wait" initial={false} custom={direction}>
                    <motion.div
                      key={index}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 100, damping: 18 },
                        opacity: { duration: 0.25 },
                        scale: { duration: 0.25 },
                      }}
                      className="absolute w-full h-full flex items-center justify-center"
                      style={{ willChange: "transform, opacity" }}
                    >
                      <Image
                        src={images[index] || "/placeholder.svg"}
                        alt={`${title} preview ${index + 1}`}
                        className="w-auto max-h-[64vh] object-contain select-none"
                        width={1600}
                        height={900}
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Controls — above image with z-index & pointer-events */}
                <div className="absolute inset-0 z-10 flex items-center justify-between px-2 md:px-4">
                  <button
                    onClick={prev}
                    className="pointer-events-auto rounded-full bg-white/80 hover:bg-white text-[0] p-2 md:p-3 shadow-md backdrop-blur-md transition transform hover:scale-110 border border-white/60"
                    aria-label="Previous"
                    title="Previous (←)"
                    style={{ color: brand.navy }}
                  >
                    <ChevronLeft size={26} />
                  </button>

                  <button
                    onClick={next}
                    className="pointer-events-auto rounded-full bg-white/80 hover:bg-white text-[0] p-2 md:p-3 shadow-md backdrop-blur-md transition transform hover:scale-110 border border-white/60"
                    aria-label="Next"
                    title="Next (→)"
                    style={{ color: brand.navy }}
                  >
                    <ChevronRight size={26} />
                  </button>
                </div>

                {/* Subtle bottom gradient for polish */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
