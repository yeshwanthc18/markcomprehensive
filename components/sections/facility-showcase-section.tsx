"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ScrollTriggerComponent from "@/components/animations/scroll-trigger"
import { Factory, Cog, Shield, Zap, ArrowRight, MapPin } from "lucide-react"

const facilityFeatures = [
  {
    icon: Factory,
    title: "Modern Fabrication Lines",
    description: "Advanced aluminum fabrication and assembly lines with cutting-edge technology",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Cog,
    title: "Precision Engineering",
    description: "State-of-the-art equipment ensuring highest quality standards and precision",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Shield,
    title: "Quality Control",
    description: "Rigorous quality control processes meeting international standards",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Zap,
    title: "Latest Technology",
    description: "Equipped with the latest technology for efficient production and delivery",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
]

export default function FacilityShowcaseSection() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200 px-6 py-2">
              <MapPin className="w-4 h-4 mr-2" />
              Our Facility
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Manufacturing Excellence</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Located in the Halban Industrial area, our factory includes excellent fabrication facilities with modern
              advanced aluminum fabrication and assembly lines.
            </p>
          </div>
        </ScrollTriggerComponent>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Feature Navigation */}
          <div className="lg:col-span-1">
            <ScrollTriggerComponent animation="fadeInLeft">
              <div className="space-y-4">
                {facilityFeatures.map((feature, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`w-full text-left p-6  transition-all duration-300 ${
                      activeFeature === index
                        ? "bg-[#01adff] text-white shadow-xl"
                        : "bg-white hover:bg-slate-50 text-slate-900 shadow-lg"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3  ${activeFeature === index ? "bg-white/20" : "bg-blue-100"}`}>
                        <feature.icon
                          className={`h-6 w-6 ${activeFeature === index ? "text-white" : "text-[#01adff]"}`}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                        <p className={`text-sm ${activeFeature === index ? "text-blue-100" : "text-slate-600"}`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </ScrollTriggerComponent>
          </div>

          {/* Feature Display */}
          <div className="lg:col-span-2">
            <ScrollTriggerComponent animation="fadeInRight">
              <Card className="overflow-hidden shadow-2xl border-0">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={facilityFeatures[activeFeature].image || "/placeholder.svg"}
                    alt={facilityFeatures[activeFeature].title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <Badge className="mb-4 bg-[#01adff] text-white">Featured</Badge>
                    <h3 className="text-2xl font-bold text-white mb-2">{facilityFeatures[activeFeature].title}</h3>
                    <p className="text-blue-100 leading-relaxed">{facilityFeatures[activeFeature].description}</p>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Halban Industrial Area</h4>
                      <p className="text-slate-600">Sultanate of Oman</p>
                    </div>
                    <Button className="bg-[#01adff] hover:bg-[#01adff] text-white">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollTriggerComponent>
          </div>
        </div>
      </div>
    </section>
  )
}
