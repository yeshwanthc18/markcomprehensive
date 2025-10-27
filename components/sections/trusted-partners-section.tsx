"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import ScrollTriggerComponent from "@/components/animations/scroll-trigger"

const partners = [
  { name: "Saint-Gobain", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Technal", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Giesse", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Guardian Glass", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Pilkington", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Reynaers", logo: "/placeholder.svg?height=60&width=120" },
]

const industries = ["Banks", "Schools", "Mosques", "Hotels", "Developers", "Government", "Healthcare", "Retail"]

export default function TrustedPartnersSection() {
  const [currentPartner, setCurrentPartner] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartner((prev) => (prev + 1) % partners.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
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
          <div className="bg-white  shadow-xl p-8 mb-12">
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

        {/* Industries Grid */}
        <ScrollTriggerComponent animation="fadeInUp" stagger={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white  p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-lg font-semibold text-slate-900">{industry}</div>
              </div>
            ))}
          </div>
        </ScrollTriggerComponent>
      </div>
    </section>
  )
}
