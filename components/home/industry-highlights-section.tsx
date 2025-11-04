"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollTriggerComponent from "@/components/animations/scroll-trigger";
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  Home,
  ShoppingBag,
  GraduationCap,
} from "lucide-react";
import Overlay from "../../public/compressed-images/bg2.png";
import Image from "@/components/SmartImage";
import BackgroundGradientAnimation from "../animated/background-gradient-animation";
import Image1 from "../../public/compressed-images/project-photos/JUMAN/IMG_5503.jpg";
import Image2 from "../../public/compressed-images/project-photos/TANMIA/IMG_5467.jpg";
import Image3 from "../../public/compressed-images/project-photos/ALMOUJ/IMG_3761.jpg";
import Image4 from "../../public/compressed-images/project-photos/DOWNE/IMG_3858.jpg";

const industries = [
  {
    icon: Building2,
    title: "Commercial Buildings",
    description:
      "Office towers, shopping centers, and mixed-use developments with cutting-edge facade solutions.",
    projects: "200+",
    image:
      Image1,
  },
  {
    icon: Home,
    title: "Residential Complexes",
    description:
      "High-rise apartments, luxury condominiums, and residential towers with modern aesthetics.",
    projects: "150+",
    image:
      Image2,
  },
  {
    icon: ShoppingBag,
    title: "Retail & Hospitality",
    description:
      "Hotels, restaurants, and retail spaces with attractive and functional facade systems.",
    projects: "100+",
    image:
      Image3,
  },
  {
    icon: GraduationCap,
    title: "Educational & Institutional",
    description:
      "Schools, universities, and government buildings with durable and sustainable solutions.",
    projects: "80+",
    image:
      Image4,
  },
];

// Decorative background with flowing, glassy shapes using only theme colors
function FlowingDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Glow orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* 3D-ish rings */}
      <div className="ring ring-1" />
      <div className="ring ring-2" />
      <div className="ring ring-3" />

      {/* Soft gradient sweep */}
      <div className="sweep" />
      <style jsx>{`
        /* Colors: #01adff (primary), #1c345c (primary), #001952 (secondary), #000000 (secondary) */
        @keyframes floatY {
          0% {
            transform: translateY(0) translateZ(0);
          }
          50% {
            transform: translateY(-18px) translateZ(0);
          }
          100% {
            transform: translateY(0) translateZ(0);
          }
        }
        @keyframes slowRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes driftX {
          0% {
            transform: translateX(-4%);
          }
          50% {
            transform: translateX(4%);
          }
          100% {
            transform: translateX(-4%);
          }
        }
        .orb {
          position: absolute;
          width: 320px;
          height: 320px;
          filter: blur(30px);
          border-radius: 9999px;
          opacity: 0.25;
          background: radial-gradient(closest-side, #01adff, transparent 70%);
          mix-blend-mode: screen;
          animation: floatY 8s ease-in-out infinite;
        }
        .orb-1 {
          top: -40px;
          left: -60px;
        }
        .orb-2 {
          bottom: -60px;
          right: -40px;
          animation-duration: 10s;
        }
        .orb-3 {
          top: 30%;
          right: 15%;
          width: 260px;
          height: 260px;
          animation-duration: 12s;
        }

        .ring {
          position: absolute;
          width: 380px;
          height: 380px;
          border-radius: 9999px;
          background: conic-gradient(
            from 0deg,
            rgba(1, 173, 255, 0.8),
            rgba(28, 52, 92, 0.6),
            rgba(0, 25, 82, 0.7),
            rgba(0, 0, 0, 0.6),
            rgba(1, 173, 255, 0.8)
          );
          mask: radial-gradient(closest-side, transparent 64%, #000 66%);
          -webkit-mask: radial-gradient(
            closest-side,
            transparent 64%,
            #000 66%
          );
          filter: blur(0.5px);
          opacity: 0.4;
          animation: slowRotate 28s linear infinite;
        }
        .ring-1 {
          top: -120px;
          right: 8%;
        }
        .ring-2 {
          bottom: -140px;
          left: 4%;
          width: 460px;
          height: 460px;
          animation-duration: 36s;
          opacity: 0.35;
        }
        .ring-3 {
          top: 40%;
          left: 55%;
          width: 280px;
          height: 280px;
          animation-duration: 22s;
          opacity: 0.45;
        }

        .sweep {
          position: absolute;
          inset: -20%;
          background: radial-gradient(
              70% 50% at 30% 20%,
              rgba(1, 173, 255, 0.07),
              transparent 60%
            ),
            radial-gradient(
              60% 40% at 80% 70%,
              rgba(28, 52, 92, 0.15),
              transparent 60%
            );
          animation: driftX 18s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default function IndustryHighlightsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % industries.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + industries.length) % industries.length
    );

  return (
    <BackgroundGradientAnimation
        overlayImage={
          <div className="relative w-full h-full">
            <Image
              src={Overlay}
              alt="Background overlay"
              fill
              priority
              className="object-contain object-right"
            />
          </div>
        }
      >
    <section className="relative py-28 overflow-hidden">
    
      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Industry <span className="text-[#01adff]">Highlights</span>
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
            </div>
            <p className="mt-6 text-lg md:text-xl text-white max-w-3xl mx-auto">
              Specialized facade solutions across diverse industries and
              building types
            </p>
          </div>
        </ScrollTriggerComponent>

        <ScrollTriggerComponent animation="scaleIn">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className={`group relative rounded-sm border border-[#1c345c]/40 bg-[#001952]/40 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_0_1px_#01adff] ${
                  index === currentIndex ? "ring-1 ring-[#01adff]" : ""
                }`}
              >
                {/* soft top edge light */}
                <div className="pointer-events-none absolute inset-x-0 -top-16 h-28 bg-gradient-to-b from-white/10 to-transparent" />
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={
                      industry.image
                    }
                    alt={industry.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="p-3 bg-[#000000]/50 rounded-md  border border-[#1c345c]/40 backdrop-blur-md ">
                      <industry.icon className="w-6 h-6 text-[#01adff]" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#01adff]  rounded-md p-2 text-md text-white font-semibold shadow">
                      {industry.projects}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 transition-colors group-hover:text-[#01adff]">
                    {industry.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>

                {/* subtle bottom glow */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#01adff]/10 to-transparent" />
              </Card>
            ))}
          </div>
        </ScrollTriggerComponent>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-10">
          <Button
            variant="outline"
            size="lg"
            onClick={prevSlide}
            className="border-[#01adff] rounded-lg text-[#01adff] hover:bg-[#01adff] hover:text-white bg-transparent"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={nextSlide}
            className="border-[#01adff] rounded-lg text-[#01adff] hover:bg-[#01adff] hover:text-white bg-transparent"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
    </BackgroundGradientAnimation>
  );
}
