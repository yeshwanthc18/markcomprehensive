"use client"

import { useLocationContext } from "@/components/providers/location-provider"
import ScrollTriggerComponent from "@/components/animations/scroll-trigger"
import LocationInfoCard from "@/components/ui/location-info-card"
import LocationSpecialtiesCard from "@/components/ui/location-specialties-card"
import LocationProjectsCard from "@/components/ui/location-projects-card"
import { Badge } from "@/components/ui/badge"

export default function LocationSpecificSection() {
  const { locationData, locationError } = useLocationContext()

  if (!locationData) return null

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollTriggerComponent animation="fadeInLeft">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Your Local Expertise</h2>
              <h3 className="text-2xl font-semibold text-[#01adff] mb-4 flex items-center gap-2">
                {locationData.name}
                <Badge className="bg-[#01adff] text-white">{locationError ? "Default Region" : "Your Region"}</Badge>
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">{locationData.description}</p>

              <LocationInfoCard locationData={locationData} />
            </div>
          </ScrollTriggerComponent>

          <ScrollTriggerComponent animation="fadeInRight" stagger={0.2}>
            <div className="space-y-6">
              <LocationSpecialtiesCard specialties={locationData.specialties} />
              <LocationProjectsCard projects={locationData.projects} />
            </div>
          </ScrollTriggerComponent>
        </div>
      </div>
    </section>
  )
}
