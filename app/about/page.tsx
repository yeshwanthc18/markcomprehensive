import { LocationProvider } from "@/components/providers/location-provider";
// import AboutHeroSection from "@/components/about/about-hero-section";
// import MissionVisionSection from "@/components/about/about-mission-vission";
import AboutValuesSection from "@/components/about/about-values-section";
import ClientsSection from "@/components/about/clients-section";
import ResponsiveStackingTimeline from "@/components/about/company-timeline-section";
import GlobalLocationsSection from "@/components/about/global-locations-section";
import LeadershipTeamSection from "@/components/about/leadership-team-section";
import AboutFAQSection from "@/components/about/about-faq-section";
import Skiper16 from "@/components/about/ScrollStack";
import GradientBG from "@/components/animated/background-white-gradient";
import BackgroundGradientAnimation from "@/components/animated/background-gradient-animation";
import Image from "next/image";
import Overlay from "../../public/images/bg2.png";
// import AboutBanner from "@/components/about/about-hero-section";
import TriangleGroupScroll from "@/components/home/TriangleMove/TriangleGroupScroll";
import AboutBanner from "@/components/about/about-hero-section";

export default function AboutPage() {
  return (
    <LocationProvider>
      <div className="flex flex-col">
        <AboutBanner />
        {/* <MissionVisionSection /> */}
        {/* <TriangleGroupScroll /> */}
        <GradientBG className="min-h-screen">
          <TriangleGroupScroll />
        </GradientBG>
        {/* Values */}
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
          <AboutValuesSection />
        </BackgroundGradientAnimation>

        {/* Timeline */}
        <GradientBG className="min-h-screen">
          <ResponsiveStackingTimeline />
        </GradientBG>

        {/* Leadership Team */}

        <LeadershipTeamSection />

        {/* Clients */}
        {/* <GradientBG className="min-h-screen">
          <ClientsSection />
        </GradientBG> */}

        {/* Global Locations */}
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
          <GlobalLocationsSection />
        </BackgroundGradientAnimation>

        {/* FAQ */}
        <GradientBG className="min-h-screen">
          <AboutFAQSection />
        </GradientBG>
      </div>
    </LocationProvider>
  );
}
