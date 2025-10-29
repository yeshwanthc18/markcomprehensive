import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS } from "@/lib/project-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Building2,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";
import { CompareDemo } from "@/components/animated/compare";
import { Reveal } from "@/components/reveal-on-scroll";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.id,
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = PROJECTS.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }



  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src={project.images[0].src || "/placeholder.svg"}
          alt={project.images[0].alt}
          unoptimized
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
          }}
        />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <Link href="/projects">
              <Button
                variant="ghost"
                className="mb-4 text-white hover:text-white/80 hover:bg-[#001952]"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {project.name}
            </h1>
            <div className="flex flex-wrap gap-3 items-center text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span className="text-lg">
                  {project.city}, {project.region}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span className="text-lg">{project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                <span className="text-lg">{project.type}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <section>
              <Reveal>
              <h2 className="text-3xl font-bold text-[#001952] mb-4">
                Project Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.description}
              </p>
              </Reveal>
            </section>
            <section>
              <h2 className="text-3xl font-bold text-[#001952] mb-4">
                Before & After
              </h2>
              <Reveal>
              <CompareDemo />
              </Reveal>
            </section>

            {/* Scope of Work */}
            {project.scopeOfWork && (
              <section>
                <Reveal>
                <h2 className="text-3xl font-bold text-[#001952] mb-4">
                  Scope of Work
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {project.scopeOfWork}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 border hover:border-[#01adff] transition-colors"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#01adff] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                </Reveal>
              </section>
            )}

            {/* Key Features */}
            {/* <section>
              <h2 className="text-3xl font-bold text-[#001952] mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 border hover:border-[#01adff] transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-[#01adff] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section> */}

            {/* Facade System Details */}
            <Reveal>
            <section>
              <h2 className="text-3xl font-bold text-[#001952] mb-6">
                Facade System Details
              </h2>
              <Card
                className="p-6 border-2"
                style={{ borderColor: "#01adff", backgroundColor: "#001952" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.facadeDetails.system && (
                    <div>
                      <h3 className="text-sm font-semibold text-white uppercase mb-2">
                        System Type
                      </h3>
                      <p className="text-base font-medium text-white">
                        {project.facadeDetails.system}
                      </p>
                    </div>
                  )}
                  {project.facadeDetails.profileSystem && (
                    <div>
                      <h3 className="text-sm font-semibold text-white uppercase mb-2">
                        Profile System
                      </h3>
                      <p className="text-base font-medium text-white">
                        {project.facadeDetails.profileSystem}
                      </p>
                    </div>
                  )}
                  {project.facadeDetails.finish && (
                    <div>
                      <h3 className="text-sm font-semibold text-white uppercase mb-2">
                        Finish
                      </h3>
                      <p className="text-base font-medium text-white">
                        {project.facadeDetails.finish}
                      </p>
                    </div>
                  )}
                  {project.facadeDetails.glassType && (
                    <div>
                      <h3 className="text-sm font-semibold text-white uppercase mb-2">
                        Glass Type
                      </h3>
                      <p className="text-base font-medium text-white">
                        {project.facadeDetails.glassType}
                      </p>
                    </div>
                  )}
                  {project.facadeDetails.mullionDepth && (
                    <div>
                      <h3 className="text-sm font-semibold text-white uppercase mb-2">
                        Mullion Depth
                      </h3>
                      <p className="text-base font-medium text-white">
                        {project.facadeDetails.mullionDepth}
                      </p>
                    </div>
                  )}
                  {project.facadeDetails.transomDepth && (
                    <div>
                      <h3 className="text-sm font-semibold text-white uppercase mb-2">
                        Transom Depth
                      </h3>
                      <p className="text-base font-medium text-white">
                        {project.facadeDetails.transomDepth}
                      </p>
                    </div>
                  )}
                  {project.facadeDetails.thermalBreak && (
                    <div>
                      <h3 className="text-sm font-semibold text-white uppercase mb-2">
                        Thermal Break
                      </h3>
                      <p className="text-base font-medium text-white">
                        {project.facadeDetails.thermalBreak}
                      </p>
                    </div>
                  )}
                  {project.facadeDetails.anchorage && (
                    <div>
                      <h3 className="text-sm font-semibold text-white uppercase mb-2">
                        Anchorage
                      </h3>
                      <p className="text-base font-medium text-white">
                        {project.facadeDetails.anchorage}
                      </p>
                    </div>
                  )}
                  {project.facadeDetails.sealing && (
                    <div className="md:col-span-2">
                      <h3 className="text-sm font-semibold text-white uppercase mb-2">
                        Sealing
                      </h3>
                      <p className="text-base font-medium text-white">
                        {project.facadeDetails.sealing}
                      </p>
                    </div>
                  )}
                  {project.facadeDetails.performance &&
                    project.facadeDetails.performance.length > 0 && (
                      <div className="md:col-span-2">
                        <h3 className="text-sm font-semibold text-white uppercase mb-3">
                          Performance Specifications
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {project.facadeDetails.performance.map(
                            (spec, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 bg-white/10 p-3 rounded"
                              >
                                <CheckCircle2 className="h-5 w-5 text-[#01adff] flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-white">
                                  {spec}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                </div>
              </Card>
            </section>
            </Reveal>

            {/* Performance Highlights */}
            <Reveal>
            {project.performanceHighlights &&
              typeof project.performanceHighlights === "object" &&
              !Array.isArray(project.performanceHighlights) && (
                <section>
                  <h2 className="text-3xl font-bold text-[#001952] mb-6">
                    Performance Highlights
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.performanceHighlights.daylightOptimisation && (
                      <Card
                        className="p-6 border-l-4"
                        style={{ borderLeftColor: "#01adff" }}
                      >
                        <h3 className="text-lg font-bold text-[#001952] mb-2">
                          Daylight Optimisation
                        </h3>
                        <p className="text-gray-700">
                          {project.performanceHighlights.daylightOptimisation}
                        </p>
                      </Card>
                    )}
                    {project.performanceHighlights.thermalEfficiency && (
                      <Card
                        className="p-6 border-l-4"
                        style={{ borderLeftColor: "#01adff" }}
                      >
                        <h3 className="text-lg font-bold text-[#001952] mb-2">
                          Thermal Efficiency
                        </h3>
                        <p className="text-gray-700">
                          {project.performanceHighlights.thermalEfficiency}
                        </p>
                      </Card>
                    )}
                    {project.performanceHighlights.coastalDurability && (
                      <Card
                        className="p-6 border-l-4"
                        style={{ borderLeftColor: "#01adff" }}
                      >
                        <h3 className="text-lg font-bold text-[#001952] mb-2">
                          Coastal Durability
                        </h3>
                        <p className="text-gray-700">
                          {project.performanceHighlights.coastalDurability}
                        </p>
                      </Card>
                    )}
                    {project.performanceHighlights.childSafeDesign && (
                      <Card
                        className="p-6 border-l-4"
                        style={{ borderLeftColor: "#01adff" }}
                      >
                        <h3 className="text-lg font-bold text-[#001952] mb-2">
                          Child Safe Design
                        </h3>
                        <p className="text-gray-700">
                          {project.performanceHighlights.childSafeDesign}
                        </p>
                      </Card>
                    )}
                    {project.performanceHighlights.aestheticContinuity && (
                      <Card
                        className="p-6 border-l-4 md:col-span-2"
                        style={{ borderLeftColor: "#01adff" }}
                      >
                        <h3 className="text-lg font-bold text-[#001952] mb-2">
                          Aesthetic Continuity
                        </h3>
                        <p className="text-gray-700">
                          {project.performanceHighlights.aestheticContinuity}
                        </p>
                      </Card>
                    )}
                  </div>
                </section>
              )}
              </Reveal>

            {/* Glass Specification */}
            <Reveal>
            {project.glassSpecification && (
              <section>
                <h2 className="text-3xl font-bold text-[#001952] mb-6">
                  Glass Specification
                </h2>
                <Card
                  className="p-6 border-2"
                  style={{ borderColor: "#01adff" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.glassSpecification.type && (
                      <div>
                        <h3 className="text-xl  text-gray-600 uppercase mb-2 font-extrabold">
                          Type
                        </h3>
                        <p className="text-base font-medium text-gray-900">
                          {project.glassSpecification.type}
                        </p>
                      </div>
                    )}
                    {project.glassSpecification.buildUp && (
                      <div>
                        <h3 className="text-xl  text-gray-600 uppercase mb-2 font-extrabold">
                          Build Up
                        </h3>
                        <p className="text-base font-medium text-gray-900">
                          {project.glassSpecification.buildUp}
                        </p>
                      </div>
                    )}
                    {project.glassSpecification.coating && (
                      <div>
                        <h3 className="text-xl  text-gray-600 uppercase mb-2 font-extrabold">
                          Coating
                        </h3>
                        <p className="text-base font-medium text-gray-900">
                          {project.glassSpecification.coating}
                        </p>
                      </div>
                    )}
                    {project.glassSpecification.uValue && (
                      <div>
                        <h3 className="text-xl  text-gray-600 uppercase mb-2 font-extrabold">
                          U-Value
                        </h3>
                        <p className="text-base font-medium text-gray-900">
                          {project.glassSpecification.uValue}
                        </p>
                      </div>
                    )}
                    {project.glassSpecification.solarHeatGainCoefficient && (
                      <div>
                        <h3 className="text-xl  text-gray-600 uppercase mb-2 font-extrabold">
                          SHGC
                        </h3>
                        <p className="text-base font-medium text-gray-900">
                          {project.glassSpecification.solarHeatGainCoefficient}
                        </p>
                      </div>
                    )}
                    {project.glassSpecification.vlt && (
                      <div>
                        <h3 className="text-xl  text-gray-600 uppercase mb-2 font-extrabold">
                          VLT
                        </h3>
                        <p className="text-base font-medium text-gray-900">
                          {project.glassSpecification.vlt}
                        </p>
                      </div>
                    )}
                    {project.glassSpecification.colourTone && (
                      <div>
                        <h3 className="text-xl  text-gray-600 uppercase mb-2 font-extrabold">
                          Colour Tone
                        </h3>
                        <p className="text-base font-medium text-gray-900">
                          {project.glassSpecification.colourTone}
                        </p>
                      </div>
                    )}
                    {project.glassSpecification.acousticPerformance && (
                      <div>
                        <h3 className="text-xl  text-gray-600 uppercase mb-2 font-extrabold">
                          Acoustic Performance
                        </h3>
                        <p className="text-base font-medium text-gray-900">
                          {project.glassSpecification.acousticPerformance}
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              </section>
            )}
            </Reveal>

            {/* Challenge & Solution */}
            <Reveal>
            {project.challenges && project.solution && (
              <section className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-bold text-red-900 mb-3">
                        Challenges
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {project.challenges}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-bold text-green-900 mb-3">
                        Solution
                      </h3>
                      {Array.isArray(project.solution) ? (
                        <ul className="space-y-2">
                          {project.solution.map((sol, idx) => (
                            <li
                              key={idx}
                              className="text-gray-700 leading-relaxed flex gap-2"
                            >
                              <span className="text-green-600 font-bold">
                                •
                              </span>
                              <span>{sol}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-700 leading-relaxed">
                          {project.solution}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            )}
            </Reveal>

            {/* Image Gallery */}
            <Reveal>
            <section>
              <h2 className="text-3xl font-bold text-[#001952] mb-6">
                Project Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.slice(1).map((image, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[4/3] overflow-hidden group rounded"
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      unoptimized
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </section>
            </Reveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info Card */}
            <Card className="p-6 sticky top-4">
              <h3 className="text-xl font-bold text-[#001952] mb-4">
                Project Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Status</p>
                  <Badge
                    className="text-sm"
                    style={{
                      backgroundColor:
                        project.status === "Completed"
                          ? "#10b981"
                          : project.status === "In Progress"
                          ? "#f59e0b"
                          : "#6b7280",
                      color: "#ffffff",
                    }}
                  >
                    {project.status}
                  </Badge>
                </div>
                {project.client && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Client</p>
                    <p className="font-medium text-[#001952]">
                      {project.client}
                    </p>
                  </div>
                )}
                {project.architect && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Architect</p>
                    <p className="font-medium text-[#001952]">
                      {project.architect}
                    </p>
                  </div>
                )}
                {project.mainContractor && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      Main Contractor
                    </p>
                    <p className="font-medium text-[#001952]">
                      {project.mainContractor}
                    </p>
                  </div>
                )}
                {project.area && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Facade Area</p>
                    <p className="font-medium text-[#001952]">{project.area}</p>
                  </div>
                )}
                {project.sector && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Sector</p>
                    <p className="font-medium text-[#001952]">
                      {project.sector}
                    </p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p className="font-medium text-[#001952]">
                    {project.city}, {project.region}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Completion Year</p>
                  <p className="font-medium text-[#001952]">{project.year}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Project Type</p>
                  <p className="font-medium text-[#001952]">{project.type}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <Button
                  className="w-full"
                  style={{ backgroundColor: "#01adff", color: "#ffffff" }}
                >
                  Request Similar Project
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
