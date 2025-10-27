import { notFound } from "next/navigation"
import Link from "next/link"
import { PROJECTS } from "@/lib/project-data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowLeft, MapPin, Calendar, Building2, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { CompareDemo } from "@/components/animated/compare"

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.id,
  }))
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const project = PROJECTS.find((p) => p.id === params.slug)

  if (!project) {
    notFound()
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
            background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
          }}
        />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <Link href="/projects">
              <Button variant="ghost" className="mb-4 text-white hover:text-white/80">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{project.name}</h1>
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
              <h2 className="text-3xl font-bold text-[#001952] mb-4">Project Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>
            </section>

            {/* Facade System Details */}
            <section>
              <h2 className="text-3xl font-bold text-[#001952] mb-6">Facade System</h2>
              <Card className="p-6 border-2" style={{ borderColor: "#01adff" ,backgroundColor:"#001952"}}>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-white uppercase mb-2">System Type</h3>
                    <p className="text-lg font-medium text-white">{project.facadeDetails.system}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white uppercase mb-2">Material</h3>
                    <p className="text-lg font-medium text-white">{project.facadeDetails.material}</p>
                  </div>
                  {project.facadeDetails.glassType && (
                    <div className="md:col-span-2">
                      <h3 className="text-sm font-semibold text-white uppercase mb-2">Glass Specification</h3>
                      <p className="text-lg font-medium text-white">{project.facadeDetails.glassType}</p>
                    </div>
                  )}
                  <div className="md:col-span-2">
                    <h3 className="text-sm font-semibold text-white uppercase mb-3">Performance Specifications</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.facadeDetails.performance.map((spec, idx) => (
                        <div key={idx} className="flex items-start gap-2 bg-gray-50 p-3 rounded">
                          <CheckCircle2 className="h-5 w-5 text-[#01adff] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-3xl font-bold text-[#001952] mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 border  hover:border-[#01adff] transition-colors"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#01adff] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenge & Solution */}
            {project.challenges && project.solution && (
              <section className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                  <h3 className="text-xl font-bold text-red-900 mb-3">Challenge</h3>
                  <p className="text-gray-700 leading-relaxed">{project.challenges}</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                  <h3 className="text-xl font-bold text-green-900 mb-3">Solution</h3>
                  <p className="text-gray-700 leading-relaxed">{project.solution}</p>
                </div>
              </section>
            )}

            {/* Image Gallery */}
            <section>
              <h2 className="text-3xl font-bold text-[#001952] mb-6">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.slice(1).map((image, idx) => (
                  <div key={idx} className="relative aspect-[4/3] overflow-hidden  group">
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
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info Card */}
            <Card className="p-6 sticky top-4">
              <h3 className="text-xl font-bold text-[#001952] mb-4">Project Information</h3>
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
                    <p className="font-medium text-[#001952]">{project.client}</p>
                  </div>
                )}
                {project.area && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Facade Area</p>
                    <p className="font-medium text-[#001952]">{project.area}</p>
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
                <Button className="w-full" style={{ backgroundColor: "#01adff", color: "#ffffff" }}>
                  Request Similar Project
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <CompareDemo />
    </main>
  )
}
