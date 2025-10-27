import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ScrollTriggerComponent from "@/components/animations/scroll-trigger"
import { ArrowRight, Building2, Sun, Home, DoorOpen } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Building2,
    title: "Façade Glazing Systems",
    subtitle: "Engineered for Transparency, Strength & Aesthetics",
    description:
      "Advanced curtain wall systems and structural glazing solutions that combine architectural beauty with engineering excellence.",
    features: ["Structural Glazing", "Curtain Walls", "Spider Systems", "Weather Sealing"],
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Popular",
    color: "blue",
  },
  {
    icon: Sun,
    title: "Skylights & Smart Access Systems",
    subtitle: "Natural Light Meets Automation",
    description:
      "Innovative skylight solutions with automated access systems that bring natural light while maintaining security.",
    features: ["Automated Skylights", "Smart Controls", "Weather Sensors", "Energy Efficiency"],
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Smart",
    color: "green",
  },
  {
    icon: Home,
    title: "Innovative Interior Solutions",
    subtitle: "Elegance, Functionality & Customization",
    description:
      "Complete interior architectural solutions including partitions, decorative elements, and custom metalwork.",
    features: ["Interior Partitions", "Decorative Cladding", "Custom Metalwork", "Acoustic Solutions"],
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Custom",
    color: "purple",
  },
  {
    icon: DoorOpen,
    title: "Framed Doors & Windows",
    subtitle: "Crafted in Glass, Aluminum, and Steel",
    description: "High-performance doors and windows designed for durability, security, and aesthetic appeal.",
    features: ["Aluminum Frames", "Steel Construction", "Security Features", "Thermal Insulation"],
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Durable",
    color: "orange",
  },
]

export default function AboutServicesGridSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200 px-6 py-2">What We Offer</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Façade & Interior Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">for Modern Architecture</p>
          </div>
        </ScrollTriggerComponent>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ScrollTriggerComponent key={index} animation="scaleIn" stagger={0.2}>
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  {/* Image Section */}
                  <div className="aspect-square md:aspect-auto overflow-hidden relative">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`bg-${service.color}-600 text-white`}>{service.badge}</Badge>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className={`p-3 bg-${service.color}-600 `}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#01adff] transition-colors">
                        {service.title}
                      </h3>
                      <p className={`text-${service.color}-600 font-semibold text-sm mb-4`}>{service.subtitle}</p>
                      <p className="text-slate-600 mb-6 leading-relaxed text-sm">{service.description}</p>

                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-slate-600">
                            <div className={`w-2 h-2 bg-${service.color}-600  mr-3`}></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      asChild
                      className={`bg-${service.color}-600 hover:bg-${service.color}-700 text-white group-hover:shadow-lg transition-all duration-300`}
                    >
                      <Link href="/services">
                        Explore More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </ScrollTriggerComponent>
          ))}
        </div>
      </div>
    </section>
  )
}
