"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Play, FileText, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useState } from "react"


interface ServiceCardProps {
  service: {
    icon: React.ComponentType<{ className?: string }>
    title: string
    description: string
    features: string[]
    color: string
    image: any
    specs: Partial<Record<string, string>>
    category?: string
  }
  index: number
   className?: string
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0  shadow-lg">
      {/* Image Section */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className={`${service.color.replace("bg-", "bg-opacity-90 bg-")} border-0 text-white`}>Featured</Badge>
          {service.category && (
            <Badge variant="secondary" className="bg-white/90 text-black">
              {service.category}
            </Badge>
          )}
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="lg"
            className=" w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30"
          >
            <Play className="h-8 w-8 text-white ml-1" />
          </Button>
        </div>
      </div>

      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-12 h-12  ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
          >
            <service.icon className="h-6 w-6" />
          </div>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-black">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>

        <CardTitle className="text-2xl font-bold group-hover:text-[#01adff] transition-colors">
          {service.title}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed text-black">{service.description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Features List */}
        <div className="space-y-3">
          {service.features.slice(0, isExpanded ? service.features.length : 3).map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 leading-relaxed">{feature}</span>
            </div>
          ))}

          {service.features.length > 3 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#01adff] hover:text-[#1c345c] p-0 h-auto font-medium"
            >
              {isExpanded ? "Show Less" : `Show ${service.features.length - 3} More Features`}
            </Button>
          )}
        </div>

        {/* Technical Specifications */}
        {/* <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5  border">
          <h4 className="font-semibold text-black mb-4 flex items-center gap-2">
            <div className="w-2 h-2  bg-[#01adff]"></div>
            Technical Specifications
          </h4>
          <div className="grid grid-cols-1 gap-3">
            {Object.entries(service.specs).map(([key, value], i) => (
              <div key={i} className="flex items-start justify-between">
                <span className="font-medium text-gray-700 text-sm">
                  {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}:
                </span>
                <span className="text-black text-sm font-medium text-right ml-2">{value}</span>
              </div>
            ))}
          </div>
        </div> */}
      </CardContent>

      {/* <CardFooter className="flex gap-3 border-t pt-6">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 flex items-center justify-center gap-2 hover:bg-[#01adff] hover:text-white hover:border-[#01adff] transition-all duration-300 bg-transparent"
        >
          <Play className="h-4 w-4" />
          Watch Demo
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex-1 flex items-center justify-center gap-2 hover:bg-[#01adff] hover:text-white hover:border-[#01adff] transition-all duration-300 bg-transparent"
        >
          <FileText className="h-4 w-4" />
          Get Specs
        </Button>
      </CardFooter> */}
    </Card>
  )
}
