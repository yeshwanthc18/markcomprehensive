import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ScrollTriggerComponent from "@/components/animations/scroll-trigger"
import MagneticButton from "@/components/animations/magnetic-button"
import ProjectCard from "@/components/ui/project-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const projectShowcase = [
  {
    title: "Manhattan Sky Tower",
    location: "New York, USA",
    type: "Commercial High-Rise",
    image: "https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Berlin Innovation Hub",
    location: "Berlin, Germany",
    type: "Office Complex",
    image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "London Financial District",
    location: "London, UK",
    type: "Mixed-Use Development",
    image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
]

export default function ProjectShowcaseSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-purple-100 text-purple-800 hover:bg-purple-200 px-6 py-2">
              Featured Projects
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Transforming Skylines Worldwide</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover our award-winning projects that showcase innovation, quality, and architectural excellence.
            </p>
          </div>
        </ScrollTriggerComponent>

        <ScrollTriggerComponent animation="scaleIn" stagger={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {projectShowcase.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </ScrollTriggerComponent>

        <div className="text-center">
          <MagneticButton>
            <Button
              asChild
              size="lg"
              className="bg-[#01adff] hover:bg-[#01adff] text-white px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/portfolio">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
