"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import ScrollTriggerComponent from "@/components/animations/scroll-trigger"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Facade Glazing Systems",
    subtitle: "Engineered for Transparency, Strength & Aesthetics",
    description:
      "Advanced curtain wall systems and structural glazing solutions that combine architectural beauty with engineering excellence.",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: ["Structural Glazing", "Curtain Walls", "Spider Systems", "Weather Sealing"],
    badge: "Popular",
  },
  {
    id: 2,
    title: "Skylights & Smart Access Systems",
    subtitle: "Natural Light Meets Automation",
    description:
      "Innovative skylight solutions with automated access systems that bring natural light while maintaining security and climate control.",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: ["Automated Skylights", "Smart Controls", "Weather Sensors", "Energy Efficiency"],
    badge: "Smart",
  },
  {
    id: 3,
    title: "Innovative Interior Solutions",
    subtitle: "Elegance, Functionality & Customization",
    description:
      "Complete interior architectural solutions including partitions, decorative elements, and custom metalwork.",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: ["Interior Partitions", "Decorative Cladding", "Custom Metalwork", "Acoustic Solutions"],
    badge: "Custom",
  },
  {
    id: 4,
    title: "Framed Doors & Windows",
    subtitle: "Crafted in Glass, Aluminum, and Steel",
    description:
      "High-performance doors and windows designed for durability, security, and aesthetic appeal in various architectural styles.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: ["Aluminum Frames", "Steel Construction", "Security Features", "Thermal Insulation"],
    badge: "Durable",
  },
]

export default function ServicesSliderSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView] = useState(3)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, services.length - itemsPerView + 1))
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.max(1, services.length - itemsPerView + 1)) % Math.max(1, services.length - itemsPerView + 1),
    )
  }

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200 px-6 py-2">What We Offer</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Façade & Interior Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">for Modern Architecture</p>
          </div>
        </ScrollTriggerComponent>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex space-x-4">
              <button
                onClick={prevSlide}
                className="p-3  bg-blue-100 hover:bg-blue-200 text-[#01adff] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3  bg-blue-100 hover:bg-blue-200 text-[#01adff] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            <div className="text-sm text-slate-500">
              {currentIndex + 1} - {Math.min(currentIndex + itemsPerView, services.length)} of {services.length}
            </div>
          </div>

          {/* Services Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {services.map((service, index) => (
                <div key={service.id} className="w-1/3 flex-shrink-0 px-4">
                  <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden">
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-[#01adff] text-white">{service.badge}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#01adff] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[#01adff] font-semibold mb-4">{service.subtitle}</p>
                      <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-slate-600">
                            <div className="w-2 h-2 bg-[#01adff]  mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Button
                        asChild
                        className="w-full bg-[#01adff] hover:bg-[#01adff] text-white group-hover:shadow-lg transition-all duration-300"
                      >
                        <Link href="/services">
                          Explore More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
