import { Badge } from "@/components/ui/badge"
import ScrollTriggerComponent from "@/components/animations/scroll-trigger"
import SpecialtyCard from "@/components/ui/specialty-card"
import { Zap, Leaf, Star } from "lucide-react"

const specialties = [
  {
    icon: Zap,
    title: "Smart Building Integration",
    description: "IoT-enabled façade systems with automated controls and real-time monitoring capabilities.",
    badge: "Technology",
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    icon: Leaf,
    title: "Sustainable Solutions",
    description: "Energy-efficient designs that reduce environmental impact and operational costs.",
    badge: "Sustainability",
    image: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    icon: Star,
    title: "Premium Finishes",
    description: "Luxury façade solutions with custom finishes and architectural excellence.",
    badge: "Luxury",
    image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
]

export default function SpecialtiesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200 px-6 py-2">Our Specialties</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Cutting-Edge Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Innovative technologies and sustainable practices that set us apart in the industry.
            </p>
          </div>
        </ScrollTriggerComponent>

        <ScrollTriggerComponent animation="scaleIn" stagger={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <SpecialtyCard key={index} {...specialty} />
            ))}
          </div>
        </ScrollTriggerComponent>
      </div>
    </section>
  )
}
