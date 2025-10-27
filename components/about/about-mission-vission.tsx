"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollTriggerComponent from "@/components/animations/scroll-trigger";
import { Target, Eye } from "lucide-react";
import Image from "next/image";
import AboutBanner from "../../public/compressed-images/about-banner.jpg";

export default function MissionVisionSection() {
  return (
    <section className="relative overflow-hidden">
      {/* 🔹 Full-Width Banner */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[100%]  lg:h-[800px]">
        <Image
          src={AboutBanner}
          alt="About Banner"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/30" />
        <div className="relative inset-0 flex flex-col pt-24  justify-center items-center">
          <ScrollTriggerComponent animation="fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_4px_20px_rgba(1,173,255,0.4)]">
              Mission & <span className="text-[#01adff]">Vision</span>
            </h2>
          </ScrollTriggerComponent>
          <div className="relative container px-6 sm:px-8 pt-24 lg:px-12 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Mission Card */}
              <ScrollTriggerComponent animation="fadeInLeft">
                <Card className="relative h-full border border-white/20 backdrop-blur-md bg-black/60 text-white shadow-[0_8px_40px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500 hover:bg-black/20 hover:shadow-[0_12px_60px_rgba(1,173,255,0.2)]">
                  <div className="absolute top-0 left-0 w-full h-[6px] bg-[#01adff]/70" />
                  <CardHeader className="pb-6 px-6 pt-10">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-4 bg-[#01adff] rounded-lg shadow-lg shadow-[#01adff]/40">
                        <Target className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-3xl text-white">
                        Our Mission
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="px-6 pb-10">
                    <p className="text-lg text-white/90 leading-relaxed mb-6">
                      Transforming the built environment through innovative
                      façade solutions that combine aesthetic excellence,
                      structural integrity, and environmental responsibility.
                    </p>
                    <div className="space-y-4">
                      {[
                        "Excellence in every project",
                        "Innovation-driven solutions",
                        "Sustainable building practices",
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 group hover:translate-x-2 transition-transform"
                        >
                          <span className="w-3 h-3 bg-[#01adff] rounded-full shadow-[0_0_10px_rgba(1,173,255,0.8)]" />
                          <span className="text-white/90">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollTriggerComponent>

              {/* Vision Card */}
              <ScrollTriggerComponent animation="fadeInRight">
                <Card className="relative h-full border border-white/20 backdrop-blur-md bg-black/60 text-white shadow-[0_8px_40px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500 hover:bg-black/30 hover:shadow-[0_12px_60px_rgba(1,173,255,0.2)]">
                  <div className="absolute top-0 left-0 w-full h-[6px] bg-[#001952]/70" />
                  <CardHeader className="pb-6 px-6 pt-10">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-4 bg-[#001952] rounded-lg shadow-lg shadow-[#001952]/40">
                        <Eye className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-3xl text-white">
                        Our Vision
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="px-6 pb-10">
                    <p className="text-lg text-white/90 leading-relaxed mb-6">
                      To be the world’s most trusted partner in façade
                      innovation, setting new standards for sustainable building
                      solutions and architectural excellence.
                    </p>
                    <div className="space-y-4">
                      {[
                        "Global industry leadership",
                        "Sustainable future building",
                        "Architectural innovation",
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 group hover:translate-x-2 transition-transform"
                        >
                          <span className="w-3 h-3 bg-[#01adff] rounded-full shadow-[0_0_10px_rgba(1,173,255,0.8)]" />
                          <span className="text-white/90">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollTriggerComponent>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Glass Cards Section */}

      {/* Decorative Blurs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#01adff]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#001952]/20 blur-3xl rounded-full" />
    </section>
  );
}
