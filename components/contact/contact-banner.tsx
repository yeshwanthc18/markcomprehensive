"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactBanner() {
  return (
    <section className="relative h-[80vh] flex items-center w-full py-24 px-6 sm:px-10 overflow-hidden">
      {/* 🌆 Background Banner / Overlay */}
      <div
        className="absolute inset-0 bg-[url('/images/contact-banner.png')] bg-cover bg-bottom opacity-100"
        aria-hidden="true"
      ></div>

      {/* Soft gradient overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl  tracking-tight mb-6">
          Contact Us
        </h2>

        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Have an idea or project in mind? Let’s collaborate and turn your vision into reality with our expert team.
        </p>
{/* 
        <div className="flex justify-center">
          <Button
            className="bg-gradient-to-r from-[#01adff] to-[#1564e5] hover:from-[#00a0e0] hover:to-[#0e50c9] text-white font-semibold px-8 py-6 rounded-xl text-base shadow-lg shadow-blue-500/30 transition-all duration-300 group"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div> */}
      </div>

      {/* Decorative subtle gradient blur for depth */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#01adff]/30 blur-[150px] rounded-full opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/30 blur-[150px] rounded-full opacity-40"></div>
    </section>
  );
}
