"use client";

import { ServiceCard } from "@/components/ui/service-card";
import {
  Building2,
  Wrench,
  Hammer,
  Shield,
  Zap,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import Image1 from "../../public/compressed-images/image.jpg";
import Image2 from "../../public/compressed-images/image2.jpg";
import Image3 from "../../public/compressed-images/image3.jpg";
import Image4 from "../../public/compressed-images/image4.jpg";
import { servicesData } from "@/lib/services-data";

type SpecKeys =
  | "thermalPerformance"
  | "acousticRating"
  | "waterResistance"
  | "windResistance"
  | "fireRating"
  | "customization"
  | "installation"
  | "airPermeability"
  | "securityRating"
  | "weatherResistance"
  | "durability"
  | "maintenance"
  | "smokeControl"
  | "integrity"
  | "insulation"
  | "airflow"
  | "automation"
  | "solarControl";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: string;
  image: any;
  specs: Partial<Record<SpecKeys, string>>;
};



export function ServicesGridSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            Our <span className="text-[#01adff]">Facade</span> Solutions
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
          </div>
          <p className="mt-6 text-lg md:text-xl text-black max-w-3xl mx-auto">
            We offer comprehensive solutions for all your façade needs with
            technical excellence, innovative design, and unmatched quality
            standards.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
