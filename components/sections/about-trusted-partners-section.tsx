"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ScrollTriggerComponent from "@/components/animations/scroll-trigger"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const partners = [
  { name: "Saint-Gobain", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Technal", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Giesse", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Guardian Glass", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Pilkington", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Reynaers", logo: "/placeholder.svg?height=60&width=120" },
]

const partnershipHighlights = [
  {
    title: "Crafting Iconic Facades Since 2010",
    description:
      "With over a decade of excellence, Mark Comprehensive delivers high-performance facade systems that combine innovation, aesthetics, and engineering precision across Oman and the Middle East.",
    number: "01",
  },
  {
    title: "Complete Architectural Solutions",
    description:
      "From curtain walls to skylights, aluminum windows, and decorative metal cladding—we provide end-to-end design, fabrication, and installation services tailored to modern construction needs.",
    number: "02",
  },
  {
    title: "Global Quality Standards",
    description:
      "Partnering with world leaders like Saint-Gobain, Technal, and Giesse, we serve banks, schools, mosques, hotels, and developers with quality that stands the test of time.",
    number: "03",
  },
]

export default function AboutTrustedPartnersSection() {
  const [currentPartner, setCurrentPartner] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartner((prev) => (prev + 1) % partners.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-amber-100 text-amber-800 hover:bg-amber-200 px-6 py-2">Global Partnerships</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Trusted by Industries</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Partnering with world leaders like Saint-Gobain, Technal, and Giesse, we serve banks, schools, mosques,
              hotels, and developers with quality that stands the test of time.
            </p>
          </div>
        </ScrollTriggerComponent>

        {/* Partners Carousel */}
        <ScrollTriggerComponent animation="scaleIn">
          <div className="bg-white  shadow-xl p-8 mb-16">
            <div className="flex justify-center items-center space-x-12 overflow-hidden">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 transition-all duration-500 ${
                    index === currentPartner ? "scale-110 opacity-100" : "scale-90 opacity-60 grayscale"
                  }`}
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollTriggerComponent>

        {/* Partnership Highlights */}
        <ScrollTriggerComponent animation="fadeInUp" stagger={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipHighlights.map((highlight, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-6xl font-bold text-blue-100 group-hover:text-blue-200 transition-colors">
                      {highlight.number}
                    </div>
                    <div className="w-12 h-12 bg-[#01adff]  flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowRight className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#01adff] transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{highlight.description}</p>
                  <Button
                    asChild
                    variant="ghost"
                    className="p-0 h-auto text-[#01adff] hover:text-[#01adff] font-semibold"
                  >
                    <Link href="/services">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollTriggerComponent>
      </div>
    </section>
  )
}
