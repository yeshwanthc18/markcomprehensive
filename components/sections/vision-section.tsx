import { Card, CardContent } from "@/components/ui/card"
import ScrollTriggerComponent from "@/components/animations/scroll-trigger"
import { Eye, Globe, Palette } from "lucide-react"

const visionItems = [
  {
    icon: Eye,
    title: "Strategic Vision & Innovation",
    description: "Merge client visions with innovation for aesthetic, sustainable, functional facade solutions.",
    gradient: "from-blue-500 to-[#01adff]",
  },
  {
    icon: Globe,
    title: "Premium Materials & Global Partnerships",
    description:
      "Partnering with industry leaders like Saint-Gobain, Technal, and Giesse for certified, durable materials.",
    gradient: "from-green-500 to-green-600",
  },
  {
    icon: Palette,
    title: "Innovative & Culturally-Inspired Design",
    description: "Blending Middle Eastern heritage with innovation to create timeless, elegant façades.",
    gradient: "from-purple-500 to-purple-600",
  },
]

export default function VisionSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Strategic Vision</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Driving innovation in facade solutions through strategic partnerships and cultural inspiration
            </p>
          </div>
        </ScrollTriggerComponent>

        <ScrollTriggerComponent animation="scaleIn" stagger={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visionItems.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`mx-auto mb-6 p-6 bg-gradient-to-br ${item.gradient}  w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#01adff] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollTriggerComponent>
      </div>
    </section>
  )
}
