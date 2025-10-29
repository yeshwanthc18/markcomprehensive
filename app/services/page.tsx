import { VideoShowcaseSection } from "@/components/services/video-showcase-section";
import { TechnicalResourcesSection } from "@/components/services/technical-resources-section";
import ProcessSection from "@/components/services/process-section";
import { CaseStudiesSection } from "@/components/services/case-studies-section";
import ServicePageWalkthrough from "@/components/3d/ServicesWalkthrough";
import ServiceShowcaseNew from "./ProjectShowcaseNew/ServiceShowcaseNew";
import { ServicesHeroSection } from "@/components/services/services-hero-section";

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* <div className="sketchfab-embed-wrapper">
        <iframe
          title="Office Interior"
          src="https://sketchfab.com/models/4f349b0d9362497cb29b062d14665f06/embed?ui_infos=0&ui_controls=0&ui_watermark=0&ui_watermark_link=0&ui_annotations=0"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          className="w-full h-[500px]"
        />
      </div> */}
      {/* <BuildingWalkthrough /> */}
      {/* <ServicePageWalkthrough /> */}

      {/* Sections */}
      {/* <ServicesHeroSection /> */}

      <ServiceShowcaseNew />
      {/* <VideoShowcaseSection /> */}
      <TechnicalResourcesSection />
      {/* <ProcessSection /> */}
      <CaseStudiesSection />
      {/* <ServicesCTASection /> */}
    </div>
  );
}
