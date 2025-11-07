"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Globe } from "lucide-react"
import type { LocationData } from "@/lib/geoplugin"

interface GlobalLocationsProps {
  allLocations: LocationData[]
  currentLocation: LocationData | null
}

export default function GlobalLocations({ allLocations, currentLocation }: GlobalLocationsProps) {
  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#01adff]/10 border border-[#01adff]/30 mb-6">
            <Globe className="w-4 h-4 text-[#01adff]" />
            <span className="text-sm font-medium text-[#01adff]">Global Presence</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className="text-black">We're Everywhere</span>
            <br />
            <span className="bg-gradient-to-r from-[#01adff] to-[#1564e5] bg-clip-text text-transparent">
              You Need Us
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            With offices across the globe, we're always ready to support your project locally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allLocations.map((location) => (
            <Card
              key={location.id}
              className={`bg-white rounded-lg border transition-all duration-300 hover:shadow-xl hover:border-[#01adff]/50 ${
                currentLocation?.id === location.id
                  ? "border-[#01adff] ring-2 ring-[#01adff]/20 shadow-lg"
                  : "border-gray-200 shadow-md"
              }`}
            >
              <CardHeader className="p-6">
                <CardTitle className="text-xl font-bold text-black flex items-center justify-between">
                  <span>{location.name}</span>
                  {currentLocation?.id === location.id && (
                    <span className="text-xs px-3 py-1 bg-gradient-to-r from-[#01adff] to-[#1564e5] text-white rounded-full font-semibold">
                      Your Location
                    </span>
                  )}
                </CardTitle>
              </CardHeader>

              <CardContent className="p-6 pt-0 space-y-4">
                {[
                  { icon: MapPin, value: location.address },
                  { icon: Phone, value: location.phone },
                  { icon: Mail, value: location.email },
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <item.icon className="w-5 h-5 text-[#01adff] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm leading-relaxed">{item.value}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
