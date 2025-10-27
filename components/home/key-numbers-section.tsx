"use client";

import ScrollTriggerComponent from "@/components/animations/scroll-trigger";
import Counter from "@/components/animations/counter";
import { Briefcase, CheckCircle, Globe2, Users } from "lucide-react";
import BackgroundGradientAnimation from "../animated/background-gradient-animation";
import Image from "next/image";
import Overlay from "../../public/compressed-images/bg2.png";

const keyNumbers = [
  { number: 14, suffix: "+", label: "Years of Experience", icon: Briefcase },
  { number: 500, suffix: "+", label: "Projects Completed", icon: CheckCircle },
  { number: 6, suffix: "+", label: "Regions Served", icon: Globe2 },
  { number: 100, suffix: "+", label: "Professional Expertise", icon: Users },
];

export default function KeyNumbersSection() {
  return (
    <BackgroundGradientAnimation
      overlayImage={
        <div className="relative w-full h-full">
          <Image
            src={Overlay}
            alt="Background overlay"
            fill
            priority
            className="object-contain object-right opacity-80"
          />
        </div>
      }
    >
      <section className="relative py-32 overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#01adff] rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80  rounded-full filter blur-3xl opacity-15 animate-pulse-slower"></div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(1,173,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(1,173,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Enhanced Section Heading */}

          <ScrollTriggerComponent animation="fadeInUp">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Key <span className="text-[#01adff]">Numbers</span>
              </h2>
              <div className="mt-4 flex justify-center">
                <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
              </div>
              <p className="mt-6 text-lg md:text-xl text-white max-w-3xl mx-auto">
                Trusted globally with a proven record of{" "}
                <span className="text-[#01adff] font-semibold">
                  excellence and innovation
                </span>{" "}
                that drives success
              </p>
            </div>
          </ScrollTriggerComponent>

          {/* Enhanced Numbers Grid */}
          <ScrollTriggerComponent animation="fadeInUp" stagger={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
              {keyNumbers.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group relative flex flex-col items-center text-center p-8 md:p-10  bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl hover:scale-105 hover:shadow-2xl hover:shadow-[#01adff]/20 transition-all duration-500 ease-out overflow-hidden"
                  >
                    {/* Floating Particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-[#01adff] animate-float"
                          style={{
                            left: `${20 + i * 30}%`,
                            animationDelay: `${i * 0.5}s`,
                          }}
                        ></div>
                      ))}
                    </div>

                    {/* Enhanced Icon Container */}
                    <div className="relative mb-8">
                      <Icon className="w-10 h-10 text-[#01adff] group-hover:scale-110 transition-transform duration-500" />
                    </div>

                    {/* Enhanced Counter */}
                    <div className="relative mb-4">
                      <div className="text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80 drop-shadow-2xl">
                        <Counter
                          end={stat.number}
                          suffix={stat.suffix}
                          duration={2500}
                        />
                      </div>
                      {/* Counter Glow Effect */}
                      <div className="absolute inset-0 text-5xl md:text-6xl font-bold tracking-tight text-[#01adff] opacity-20 blur-md group-hover:opacity-30 transition-opacity duration-500">
                        <Counter
                          end={stat.number}
                          suffix={stat.suffix}
                          duration={2500}
                        />
                      </div>
                    </div>

                    {/* Enhanced Label */}
                    <p className="text-lg md:text-xl font-semibold text-white/90 group-hover:text-white transition-colors duration-500 leading-tight px-4">
                      {stat.label}
                    </p>

                    {/* Subtle Background Pattern */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#01adff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                );
              })}
            </div>
          </ScrollTriggerComponent>
        </div>
      </section>
    </BackgroundGradientAnimation>
  );
}
