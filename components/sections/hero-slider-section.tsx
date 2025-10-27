"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Play, ArrowRight } from "lucide-react"
import Link from "next/link"

const heroSlides = [
  {
    id: 1,
    title: "Innovating Façades",
    subtitle: "Shaping Skylines",
    description:
      "Crafting iconic facade systems that combine innovation, aesthetics, and engineering precision across Oman and the Middle East.",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta: "Explore Projects",
    ctaLink: "/projects",
  },
  {
    id: 2,
    title: "Smart Interiors",
    subtitle: "Lasting Impact",
    description:
      "Complete architectural solutions from curtain walls to skylights, aluminum windows, and decorative metal cladding.",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta: "Our Services",
    ctaLink: "/services",
  },
  {
    id: 3,
    title: "Craftsmanship",
    subtitle: "Defines Excellence",
    description:
      "Blending Middle Eastern heritage with innovation to create timeless, elegant façades that stand the test of time.",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta: "About Us",
    ctaLink: "/about",
  },
  {
    id: 4,
    title: "Architectural Systems",
    subtitle: "Built to Endure",
    description:
      "Premium materials and global partnerships with industry leaders like Saint-Gobain, Technal, and Giesse.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta: "Contact Us",
    ctaLink: "/contact",
  },
]

export default function HeroSliderSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-6 sm:px-8 lg:px-12 w-full">
                <div className="max-w-3xl">
                  <div className="transform transition-all duration-1000 delay-300">
                    <Badge className="mb-6 bg-[#01adff]/20 hover:bg-[#01adff]/30 text-white border-blue-400 px-6 py-3 text-base backdrop-blur-sm">
                      Mark Comprehensive LLC
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                      {slide.title}
                      <span className="block text-blue-300 mt-2">{slide.subtitle}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-50 mb-8 leading-relaxed max-w-2xl">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        asChild
                        size="lg"
                        className="bg-[#01adff] hover:bg-[#01adff] text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                      >
                        <Link href={slide.ctaLink}>
                          {slide.cta} <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm bg-transparent"
                      >
                        <Play className="mr-2 h-5 w-5" />
                        Watch Video
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <button
          onClick={prevSlide}
          className="p-3  bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3  transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3  bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Auto-play toggle */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-8 right-8 p-3  bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all duration-300"
      >
        <Play className={`h-5 w-5 ${isAutoPlaying ? "opacity-100" : "opacity-50"}`} />
      </button>
    </section>
  )
}
