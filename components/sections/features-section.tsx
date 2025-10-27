import { Badge } from "@/components/ui/badge"
import ScrollTriggerComponent from "@/components/animations/scroll-trigger"
import FeatureCard from "@/components/ui/feature-card"
import { Building2, Shield, Award, Users } from "lucide-react"

const features = [
  {
    icon: Building2,
    title: "Expert Design",
    description: "Cutting-edge architectural aluminum system designs tailored to your vision and requirements",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    icon: Shield,
    title: "Quality Fabrication",
    description: "State-of-the-art manufacturing with precision engineering and premium materials",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    icon: Award,
    title: "Professional Installation",
    description: "Skilled installation teams ensuring perfect execution with rigorous safety standards",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    icon: Users,
    title: "Global Expertise",
    description: "International presence with local expertise in major markets across 6 countries",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 px-6 py-2">Why Choose Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Why Choose Mark Comprehensive?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We combine decades of experience with cutting-edge technology to deliver exceptional façade solutions that
              exceed expectations.
            </p>
          </div>
        </ScrollTriggerComponent>

        <ScrollTriggerComponent animation="scaleIn" stagger={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </ScrollTriggerComponent>
      </div>
    </section>
  )
}
