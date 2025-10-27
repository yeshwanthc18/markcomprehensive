import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ScrollTriggerComponent from "@/components/animations/scroll-trigger"
import { Target, Award, Heart, Users, Eye } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "Continuously pushing the boundaries of what's possible in façade technology and design.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Uncompromising commitment to excellence in every project we undertake.",
  },
  {
    icon: Heart,
    title: "Sustainability",
    description: "Building a better future through environmentally responsible solutions.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Collaborating closely with clients to achieve their architectural vision.",
  },
]

export default function MissionValuesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Guiding principles that drive our commitment to excellence.
            </p>
          </div>
        </ScrollTriggerComponent>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ScrollTriggerComponent animation="fadeInLeft">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Eye className="h-6 w-6 text-[#01adff]" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-lg leading-relaxed">
                  To transform the built environment through innovative façade solutions that combine aesthetic
                  excellence, structural integrity, and environmental responsibility. We strive to push the boundaries
                  of architectural aluminum systems while maintaining the highest standards of quality and
                  craftsmanship.
                </p>
              </CardContent>
            </Card>
          </ScrollTriggerComponent>

          <ScrollTriggerComponent animation="fadeInRight">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Target className="h-6 w-6 text-[#01adff]" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-lg leading-relaxed">
                  To be the world's most trusted partner in façade innovation, setting new standards for sustainable
                  building solutions and architectural excellence. We envision a future where every building we touch
                  contributes to a more beautiful, efficient, and sustainable world.
                </p>
              </CardContent>
            </Card>
          </ScrollTriggerComponent>
        </div>

        <ScrollTriggerComponent animation="scaleIn" stagger={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-blue-100  w-fit">
                    <value.icon className="h-8 w-8 text-[#01adff]" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollTriggerComponent>
      </div>
    </section>
  )
}
