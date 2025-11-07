"use client"

import { ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactBanner() {
  return (
    <section className="relative overflow-hidden py-24 px-6 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-gradient-to-r from-[#01adff]/10 via-[#1564e5]/10 to-purple-500/10 blur-3xl"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(1, 173, 255, 0.3)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#01adff]/10 border border-[#01adff]/30">
          <Zap className="w-4 h-4 text-[#01adff]" />
          <span className="text-sm font-medium text-[#01adff]">Get in Touch</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-[#01adff] via-[#1564e5] to-purple-600 bg-clip-text text-transparent">
            Let's Build
          </span>
          <br />
          <span className="text-black">Something Amazing</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Have a project in mind? Our team of experts is ready to help you bring your vision to life. Reach out to us
          today.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button className="bg-gradient-to-r from-[#01adff] to-[#1564e5] hover:from-[#0099e6] hover:to-[#1250cc] text-white font-semibold px-8 py-6 rounded-lg text-base group">
            Start a Project
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            className="border-gray-300 text-black hover:bg-gray-100 px-8 py-6 rounded-lg text-base bg-white"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
