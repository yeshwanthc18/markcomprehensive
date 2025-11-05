import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MapPin } from "lucide-react";
import Image1 from "../../public/compressed-images/image.jpg";
import Image2 from "../../public/compressed-images/image2.jpg";
import Image3 from "../../public/compressed-images/image3.jpg";
import Image4 from "../../public/compressed-images/image4.jpg";
import Image from "next/image";
import ButtonPrimary from "../layout/Button";
import { PROJECTS } from "@/lib/project-data";

export function CaseStudiesSection() {
  const project = PROJECTS;

  const caseStudies = [
    {
      title: "Manhattan Corporate Tower",
      location: "New York, USA",
      year: "2023",
      client: "Fortune 500 Company",
      image: Image1,
      services: ["Facade Glazing", "Smart Access", "Fire Rated"],
      description:
        "A 45-story corporate headquarters featuring advanced glazing systems with integrated smart access controls and fire-rated solutions.",
      stats: {
        area: "15,000 m²",
        floors: "45 floors",
        completion: "18 months",
      },
    },
    {
      title: "Berlin Cultural Center",
      location: "Berlin, Germany",
      year: "2023",
      client: "City of Berlin",
      image: Image2,
      services: ["Cladding Design", "Louvers", "Interior Solutions"],
      description:
        "An innovative cultural center with dynamic facade elements, natural ventilation systems, and stunning interior glass partitions.",
      stats: {
        area: "8,500 m²",
        floors: "6 floors",
        completion: "14 months",
      },
    },
    {
      title: "Dubai Luxury Residences",
      location: "Dubai, UAE",
      year: "2022",
      client: "Premium Developer",
      image: Image3,
      services: ["Glazing Systems", "Skylights", "Framed Windows"],
      description:
        "High-end residential complex with premium glazing systems, automated skylights, and custom-designed window solutions.",
      stats: {
        area: "22,000 m²",
        floors: "35 floors",
        completion: "24 months",
      },
    },
  ];

  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            Success <span className="text-[#01adff]">Stories</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
          </div>
          <p className="mt-6 text-lg md:text-xl text-black max-w-3xl mx-auto">
            Discover how our innovative facade solutions have transformed iconic
            buildings and delivered exceptional results for clients worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {project.slice(0, 3).map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden group rounded-md hover:shadow-2xl transition-all duration-500 border-0 shadow-lg"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.images[0]?.src}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-black hover:bg-white">
                    {item.year}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl font-bold group-hover:text-[#01adff] transition-colors">
                    {item.name}
                  </CardTitle>
                </div>

                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  {item.region}
                </div>

                <p className="text-black text-sm leading-relaxed">
                  {item.description.slice(0, 150)}...
                </p>
              </CardHeader>

              <CardFooter className="pt-4 border-t flex justify-center items-center">
                <ButtonPrimary className="">
                  <ExternalLink className="h-4 w-4" />
                  View Full Case Study
                </ButtonPrimary>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
