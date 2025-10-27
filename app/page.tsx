"use client";

import RecentProjectsSection from "@/components/home/recent-projects-section";
import WelcomeSection from "@/components/home/welcome-section";
import KeyNumbersSection from "@/components/home/key-numbers-section";
import ServiceHighlightsSection from "@/components/home/service-highlights-section";
import IndustryHighlightsSection from "@/components/home/industry-highlights-section";
import RecentArticlesSection from "@/components/home/recent-articles-section";
import TestimonialsSliderSection from "@/components/home/testimonials-slider-section";
import HeroSliderSection from "@/components/sections/hero-slider-section";
import HeroSection from "@/components/home/hero-section";
import { CompareDemo } from "@/components/animated/compare";
import ThreeDViewer from "@/components/3d/Three";
import QuickEstimateSection from "@/components/home/quick-estimate-section";
import { ProgressiveBlur } from "@/components/animated/blur";
import ProjectShowcase from "@/components/home/recent";
import TriangleScrollAnimation from "@/components/animations/trianglescrollanimation";
import ScrollVelocity from "@/components/animated/scroll-velocity";
import { useLenis } from "@/components/animated/Lenis";
import HomeHowWeWork from "@/components/home/process-details-section";
import TriangleGroupScroll from "@/components/home/TriangleMove/TriangleGroupScroll";
import GradientBG from "@/components/animated/background-white-gradient";
import BackgroundGradientAnimation from "@/components/animated/background-gradient-animation";
import Image from "next/image";
import Overlay from "../public/compressed-images/bg2.png";
import { TimelineProjects } from "@/components/home/recent-projects";
import TracingScrollbar from "./TriangleCursor";
import TriangleCursor from "./TriangleCursor";
import RecentProjects from "@/components/home/recentprojects";
import DomeGallery from "@/components/animations/DomeGallery";

export default function HomePage() {
  useLenis();
  return (
    <div className="flex flex-col">
      <ThreeDViewer />

      <TimelineProjects />
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
        <WelcomeSection />
      </BackgroundGradientAnimation>

      <GradientBG className="min-h-screen">
        <ServiceHighlightsSection />
      </GradientBG>

      <GradientBG className="min-h-screen">
        <RecentProjects />
      </GradientBG>

    

      {/* <KeyNumbersSection /> */}
      <HomeHowWeWork />

      <IndustryHighlightsSection />
      <div style={{ width: "100vw", height: "100vh" }}>
         <div className="text-center py-24 pb-1 px-6 relative z-10">
            <div className="inline-block relative mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black relative">
                Strong Patnerships <span className="text-[#01adff]">Stronger Solutions</span>
              </h2>
              <div className="mt-4 flex justify-center">
                <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
              </div>
            </div>
         
          </div>
        <DomeGallery />
      </div>
      <GradientBG className="min-h-screen mt-60">
        <RecentArticlesSection />
      </GradientBG>
      {/* <Testimonials /> */}
      <BackgroundGradientAnimation>
        <TestimonialsSliderSection />
      </BackgroundGradientAnimation>
      <GradientBG className="min-h-screen">
        <QuickEstimateSection />
      </GradientBG>
    </div>
  );
}
