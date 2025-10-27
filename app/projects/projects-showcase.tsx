"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import {
  PROJECTS,
  ALL_REGIONS,
  ALL_TYPES,
  type Region,
  type PType,
} from "@/lib/project-data";
import Image from "@/components/SmartImage";

export default function ProjectShowcase() {
  const [region, setRegion] = useState<Region | "All">("All");
  const [types, setTypes] = useState<PType[]>([]);
  const [lightbox, setLightbox] = useState<{
    projectId: string;
    index: number;
  } | null>(null);

  const filtered = useMemo(() => {
    return PROJECTS.filter(
      (p) =>
        (region === "All" || p.region === region) &&
        (types.length === 0 || types.includes(p.type))
    );
  }, [region, types]);

  const openLightbox = (projectId: string, index: number) =>
    setLightbox({ projectId, index });
  const closeLightbox = () => setLightbox(null);

  const currentProject = lightbox
    ? PROJECTS.find((p) => p.id === lightbox.projectId)
    : null;
  const currentImage =
    currentProject && lightbox ? currentProject.images[lightbox.index] : null;

  const nextImage = () => {
    if (!currentProject || !lightbox) return;
    const next = (lightbox.index + 1) % currentProject.images.length;
    setLightbox({ projectId: currentProject.id, index: next });
  };
  const prevImage = () => {
    if (!currentProject || !lightbox) return;
    const prev =
      (lightbox.index - 1 + currentProject.images.length) %
      currentProject.images.length;
    setLightbox({ projectId: currentProject.id, index: prev });
  };

  const toggleType = (t: PType) =>
    setTypes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );

  return (
    <section aria-labelledby="project-showcase-title">
      <div className="mx-auto container px-4 py-12 md:py-16">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Our <span className="text-[#01adff]">Projects</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
          </div>
          <p className="mt-6 text-lg md:text-xl text-white max-w-3xl mx-auto">
            Interactive exploration of our facade projects across the GCC and
            India. Filter by region or project type and open images in a
            high‑resolution lightbox.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-6 md:mb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-white">
              Region:
            </span>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setRegion("All")}
              className={cn(
                " border px-4",
                region === "All" ? "text-white" : ""
              )}
              style={{
                borderColor: region === "All" ? "#01adff" : "#000000",
                backgroundColor: region === "All" ? "#01adff" : "#ffffff",
                color: region === "All" ? "#ffffff" : "#001952",
              }}
            >
              All
            </Button>
            {ALL_REGIONS.map((r) => (
              <Button
                key={r}
                size="sm"
                variant="outline"
                onClick={() => setRegion(r)}
                className=" border px-4"
                style={{
                  borderColor: region === r ? "#01adff" : "#000000",
                  backgroundColor: region === r ? "#01adff" : "#ffffff",
                  color: region === r ? "#ffffff" : "#001952",
                }}
                aria-pressed={region === r}
              >
                {r}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-white">
              Project type:
            </span>
            {ALL_TYPES.map((t) => {
              const active = types.includes(t);
              return (
                <Badge
                  key={t}
                  onClick={() => toggleType(t)}
                  role="switch"
                  aria-checked={active}
                  className={cn(
                    "cursor-pointer select-none  px-3 py-1 text-xs",
                    active ? "text-white" : ""
                  )}
                  style={{
                    backgroundColor: active ? "#001952" : "#ffffff",
                    border: `1px solid ${active ? "#000000" : "#001952"}`,
                    color: active ? "#ffffff" : "#001952",
                  }}
                >
                  {t}
                </Badge>
              );
            })}
            {types.length > 0 && (
              <Button
                size="sm"
                onClick={() => setTypes([])}
                className=""
                style={{ backgroundColor: "#001952", color: "#ffffff" }}
              >
                Clear
              </Button>
            )}
          </div>
        </div>

        {/* Results meta */}
        <div className="mb-4 text-sm  text-white">
          Showing {filtered.length} project{filtered.length === 1 ? "" : "s"}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p) => (
            <Card
              key={p.id}
              className="group overflow-hidden border"
              style={{ borderColor: "#e5e7eb", backgroundColor: "#ffffff" }}
            >
              <Link href={`/projects/${p.id}`} className="block">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={p.images[0].src}
                    alt={p.images[0].alt}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 p-3"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0))",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white">
                        {p.city}
                      </span>
                      <span className="text-xs text-white/80">{p.year}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start justify-between px-4 py-4">
                  <div className="space-y-1">
                    <h3
                      className="text-base font-semibold"
                      style={{ color: "#001952" }}
                    >
                      {p.name}
                    </h3>
                    <p className="text-sm" style={{ color: "#000000" }}>
                      {p.type} · {p.region}
                    </p>
                  </div>
                  <Badge
                    className=" text-xs"
                    style={{ backgroundColor: "#01adff", color: "#ffffff" }}
                  >
                    {p.images.length} photos
                  </Badge>
                </div>
              </Link>
              <div className="px-4 pb-4">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={(e) => {
                    e.preventDefault();
                    openLightbox(p.id, 0);
                  }}
                  className="w-full"
                  style={{
                    borderColor: "#01adff",
                    color: "#01adff",
                  }}
                >
                  View Gallery
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={!!lightbox} onOpenChange={(v) => !v && closeLightbox()}>
        <DialogContent
          className="max-w-5xl border-0 p-0 outline-none"
          style={{ backgroundColor: "#000000" }}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
          }}
          tabIndex={0}
          aria-label="Project image viewer"
        >
          {currentProject && currentImage && (
            <div className="relative">
              <Image
                src={currentImage.src || "/placeholder.svg"}
                alt={currentImage.alt}
                loading="eager"
                decoding="async"
                unoptimized
                className="h-auto w-full max-h-[80vh] object-contain"
              />

              {/* Controls */}
              <div className="absolute inset-0 flex items-center justify-between px-2">
                <button
                  aria-label="Previous image"
                  onClick={prevImage}
                  className=" px-3 py-2 text-white focus:outline-none focus:ring-2"
                  style={{ backgroundColor: "rgba(28,52,92,0.6)" }}
                >
                  ‹
                </button>
                <button
                  aria-label="Next image"
                  onClick={nextImage}
                  className=" px-3 py-2 text-white focus:outline-none focus:ring-2"
                  style={{ backgroundColor: "rgba(28,52,92,0.6)" }}
                >
                  ›
                </button>
              </div>

              {/* Caption */}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="text-sm text-white">
                  <span className="font-medium">{currentProject.name}</span>
                  <span className="opacity-80"> — {currentProject.city}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <span>{lightbox!.index + 1}</span>
                  <span>/</span>
                  <span>{currentProject.images.length}</span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
