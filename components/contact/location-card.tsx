"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MapPin, Phone, Mail, Building2 } from "lucide-react"
import type { LocationData } from "@/lib/geoplugin"

interface LocationCardProps {
  location: LocationData
  detectedCountry: string
}

export default function LocationCard({ location, detectedCountry }: LocationCardProps) {
  return (
    <Card className="bg-white border-0 shadow-none sticky top-16">
      <CardHeader className="p-6 sm:p-8 bg-gradient-to-r from-[#01adff]/10 to-[#1564e5]/10 ">
        <CardTitle className="text-2xl font-bold flex items-center gap-3 text-black">
          <div className="p-3 bg-gradient-to-r from-[#01adff] to-[#1564e5] rounded-lg">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          {location.name}
        </CardTitle>
        <CardDescription className="text-gray-600 mt-2">{detectedCountry}</CardDescription>
      </CardHeader>

      <CardContent className="p-6 sm:p-8 space-y-6">
        {[
          { icon: MapPin, label: "Address", value: location.address },
          { icon: Phone, label: "Phone", value: location.phone },
          { icon: Mail, label: "Email", value: location.email },
        ].map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="p-3 bg-gray-100 rounded-lg">
                <item.icon className="w-5 h-5 text-[#01adff]" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{item.label}</p>
              <p className="text-gray-600 mt-1 leading-relaxed">{item.value}</p>
            </div>
          </div>
        ))}

        {/* {location.specialties.length > 0 && (
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm font-semibold text-gray-900 mb-4">Specialties</p>
            <div className="space-y-2">
              {location.specialties.slice(0, 3).map((specialty, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#01adff] to-[#1564e5] rounded-full"></div>
                  <span className="text-gray-600 text-sm">{specialty}</span>
                </div>
              ))}
            </div>
          </div>
        )} */}
      </CardContent>
    </Card>
  )
}
