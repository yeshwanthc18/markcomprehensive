import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Download,
  FileText,
  Wrench,
  Building2,
  Shield,
  BookOpen,
} from "lucide-react";
import ButtonPrimary from "../layout/Button";

export function TechnicalResourcesSection() {
  const resources = [
    {
      title: "Technical Datasheets",
      description:
        "Comprehensive specifications and performance data for all our facade systems",
      icon: FileText,
      color: "bg-blue-100 text-[#01adff]",
      downloadCount: "150+ files",
    },
    {
      title: "Installation Guides",
      description:
        "Step-by-step instructions and best practices for proper installation",
      icon: Wrench,
      color: "bg-green-100 text-green-600",
      downloadCount: "50+ guides",
    },
    {
      title: "BIM Objects",
      description:
        "Building Information Modeling resources and 3D models for architects",
      icon: Building2,
      color: "bg-purple-100 text-purple-600",
      downloadCount: "200+ objects",
    },
    {
      title: "Compliance Documents",
      description:
        "Certifications, test reports, and regulatory compliance documentation",
      icon: Shield,
      color: "bg-amber-100 text-amber-600",
      downloadCount: "75+ documents",
    },
    {
      title: "Design Guidelines",
      description:
        "Architectural design principles and aesthetic considerations",
      icon: BookOpen,
      color: "bg-red-100 text-red-600",
      downloadCount: "25+ guides",
    },
    {
      title: "CAD Drawings",
      description:
        "Detailed technical drawings and section details for all systems",
      icon: FileText,
      color: "bg-teal-100 text-teal-600",
      downloadCount: "300+ drawings",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            Technical <span className="text-[#01adff]">Resources</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
          </div>
          <p className="mt-6 text-lg md:text-xl text-black max-w-3xl mx-auto">
            Access comprehensive documentation, specifications, and design
            resources to support your facade projects from concept to
            completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl rounded-md transition-all duration-300 border-0 shadow-lg"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-14 h-14  ${resource.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <resource.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl font-bold">
                  {resource.title}
                </CardTitle>
                <CardDescription className="text-black leading-relaxed">
                  {resource.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{resource.downloadCount}</span>
                  <span className="bg-gray-100 px-2 py-1 ">PDF & DWG</span>
                </div>
              </CardContent>
              <CardFooter>
                <ButtonPrimary className="w-full flex items-center justify-center gap-2 transition-all duration-300">
                  <Download className="h-4 w-4" />
                  Download Resources
                </ButtonPrimary>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
