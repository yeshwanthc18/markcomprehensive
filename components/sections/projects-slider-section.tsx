"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ScrollTriggerComponent from "@/components/animations/scroll-trigger"
import Link from "next/link"

const projectCategories = [
  {
    id: 1,
    title: "Crafting Iconic Facades Since 2010",
    description:
      "With over a decade of excellence, Mark Comprehensive delivers high-performance facade systems that combine innovation, aesthetics, and engineering precision across Oman and the Middle East.",
    image: "https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg?auto=compress&cs=tinysrgb&w=800",
    projects: ["Muscat Grand Mall", "Royal Opera House", "Sultan Qaboos University"],
    badge: "Heritage",
  },
  {
    id: 2,
    title: "Complete Architectural Solutions",
    description:
      "From curtain walls to skylights, aluminum windows, and decorative metal cladding—we provide end-to-end design, fabrication, and installation services tailored to modern construction needs.",
    image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    projects: ["Dubai Business Bay", "Doha Financial District", "Kuwait City Tower"],
    badge: "Modern",
  },
  {
    id: 3,
    title: "Innovative Design Excellence",
    description:
      "Pushing the boundaries of architectural possibilities with cutting-edge facade technologies and sustainable building solutions.",
    image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800",
    projects: ["Green Building Complex", "Smart Office Tower", "Sustainable Residential"],
    badge: "Innovation",
  },
]

export default function ProjectsSliderSection() {
  const [activeProject, setActiveProject] = useState(0)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-100 text-purple-800 hover:bg-purple-200 px-6 py-2">Our Portfolio</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Transforming Architectural Visions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our award-winning projects across the Middle East
            </p>
          </div>
        </ScrollTriggerComponent>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {projectCategories.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  className={`w-full text-left p-6  transition-all duration-300 ${
                    activeProject === index
                      ? "bg-[#01adff] text-white shadow-xl"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-900"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={activeProject === index ? "bg-white/20 text-white" : "bg-blue-100 text-blue-800"}>
                      {project.badge}
                    </Badge>
                    <div className="text-sm opacity-70">0{index + 1}</div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      activeProject === index ? "text-blue-100" : "text-slate-600"
                    }`}
                  >
                    {project.description.substring(0, 120)}...
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Active Project Display */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden shadow-2xl border-0">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={projectCategories[activeProject].image || "/placeholder.svg"}
                  alt={projectCategories[activeProject].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="mb-4 bg-[#01adff] text-white">{projectCategories[activeProject].badge}</Badge>
                  <h3 className="text-2xl font-bold text-white mb-2">{projectCategories[activeProject].title}</h3>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-slate-600 mb-6 leading-relaxed">{projectCategories[activeProject].description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Featured Projects:</h4>
                  <div className="space-y-2">
                    {projectCategories[activeProject].projects.map((project, idx) => (
                      <div key={idx} className="flex items-center text-slate-600">
                        <div className="w-2 h-2 bg-[#01adff]  mr-3"></div>
                        {project}
                      </div>
                    ))}
                  </div>
                </div>
                <Button
                  asChild
                  className="bg-[#01adff] hover:bg-[#01adff] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/projects">
                    View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
