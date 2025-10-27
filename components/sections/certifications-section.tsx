"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ScrollTriggerComponent from "@/components/animations/scroll-trigger"
import { Award, Shield, Globe, CheckCircle } from "lucide-react"

const certifications = [
  {
    category: "Quality Standards",
    icon: Shield,
    color: "blue",
    items: [
      { name: "ISO 9001:2015", description: "Quality Management Systems", status: "Certified" },
      { name: "ISO 14001", description: "Environmental Management", status: "Certified" },
      { name: "OHSAS 18001", description: "Occupational Health & Safety", status: "Certified" },
    ],
  },
  {
    category: "Industry Certifications",
    icon: Award,
    color: "green",
    items: [
      { name: "LEED Accredited", description: "Green Building Certification", status: "Accredited" },
      { name: "CWCT Standards", description: "Curtain Wall Testing", status: "Compliant" },
      { name: "CE Marking", description: "European Conformity", status: "Certified" },
    ],
  },
  {
    category: "Global Partnerships",
    icon: Globe,
    color: "purple",
    items: [
      { name: "Saint-Gobain Partner", description: "Premium Glass Solutions", status: "Authorized" },
      { name: "Technal Certified", description: "Aluminum Systems", status: "Certified" },
      { name: "Giesse Hardware", description: "Window & Door Hardware", status: "Partner" },
    ],
  },
]

export default function CertificationsSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-amber-100 text-amber-800 hover:bg-amber-200 px-6 py-2">Quality Assurance</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Certifications & Standards</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Committed to international quality standards and continuous improvement in all our processes
            </p>
          </div>
        </ScrollTriggerComponent>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Tabs */}
          <div className="lg:col-span-1">
            <ScrollTriggerComponent animation="fadeInLeft">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`w-full text-left p-6  transition-all duration-300 ${
                      activeCategory === index
                        ? `bg-${cert.color}-600 text-white shadow-xl`
                        : "bg-white hover:bg-slate-50 text-slate-900 shadow-lg"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3  ${
                          activeCategory === index ? "bg-white/20" : `bg-${cert.color}-100`
                        }`}
                      >
                        <cert.icon
                          className={`h-6 w-6 ${activeCategory === index ? "text-white" : `text-${cert.color}-600`}`}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{cert.category}</h3>
                        <p className={`text-sm ${activeCategory === index ? "text-white/80" : "text-slate-600"}`}>
                          {cert.items.length} Standards
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </ScrollTriggerComponent>
          </div>

          {/* Certifications Display */}
          <div className="lg:col-span-3">
            <ScrollTriggerComponent animation="fadeInRight">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications[activeCategory].items.map((item, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge
                          className={`bg-${certifications[activeCategory].color}-100 text-${certifications[activeCategory].color}-800`}
                        >
                          {item.status}
                        </Badge>
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#01adff] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollTriggerComponent>
          </div>
        </div>
      </div>
    </section>
  )
}
