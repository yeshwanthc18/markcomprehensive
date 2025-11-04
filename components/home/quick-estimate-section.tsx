"use client"

import { Badge } from "@/components/ui/badge"
import { Calculator, Clock, FileText, Shield, ArrowRight, Zap } from "lucide-react"
import { useQuickEstimate } from "@/contexts/quick-estimate-context"
import ButtonPrimary from "../layout/Button"

export default function QuickEstimateSection() {
  const { openPopup } = useQuickEstimate()

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
       

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            Get Your Project Quote in
            <span className="text-[#01adff]"> 24 Hours</span>
          </h2>

          <p className="text-xl text-black leading-relaxed mb-12 max-w-3xl mx-auto">
            Receive a detailed estimate for your facade project within 24 hours. Our experts will analyze your
            requirements and provide competitive pricing tailored to your specific needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ButtonPrimary
              onClick={openPopup}
              className="inline-flex items-center justify-center px-8 py-4 "
            >
              <Zap className="mr-2 h-5 w-5" />
              Get Instant Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </ButtonPrimary>

            {/* <p className="text-sm text-gray-500 flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              Free • No Commitment • 24hr Response
            </p> */}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-8 bg-white shadow-lg rounded-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-[#01adff]/10 rounded-md flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-[#01adff]" />
            </div>
            <h3 className="font-bold text-[#1c345c] text-xl mb-3">24-Hour Response</h3>
            <p className="text-black">Get your detailed project estimate delivered within 24 hours of submission</p>
          </div>

          <div className="text-center p-8 bg-white shadow-lg  rounded-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-[#01adff]/10 flex  rounded-md items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-[#01adff]" />
            </div>
            <h3 className="font-bold text-[#1c345c] text-xl mb-3">Detailed Analysis</h3>
            <p className="text-black">Comprehensive project breakdown with materials, timeline, and cost analysis</p>
          </div>

          <div className="text-center p-8 bg-white shadow-lg  rounded-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-[#01adff]/10 flex  rounded-md items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-[#01adff]" />
            </div>
            <h3 className="font-bold text-[#1c345c] text-xl mb-3">No Commitment</h3>
            <p className="text-black">Free professional quote with absolutely no obligations or hidden costs</p>
          </div>
        </div>
      </div>
    </section>
  )
}
