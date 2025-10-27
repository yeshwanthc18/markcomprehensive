import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ScrollTriggerComponent from "@/components/animations/scroll-trigger"
import MagneticButton from "@/components/animations/magnetic-button"
import Link from "next/link"
import { TrendingUp, Globe, Award, Users } from "lucide-react"

const highlights = [
  { icon: Globe, text: "6 Global Locations" },
  { icon: Award, text: "500+ Projects Completed" },
  { icon: Users, text: "1000+ Satisfied Clients" },
]

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5  blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5  blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollTriggerComponent animation="fadeInUp" stagger={0.2}>
          <Badge className="mb-8 bg-blue-500/20 hover:bg-blue-500/30 text-white border-blue-400 px-6 py-3">
            <TrendingUp className="w-5 h-5 mr-3" />
            Ready to Get Started?
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Building?</h2>

          <p className="text-xl mb-12 max-w-3xl mx-auto text-blue-50 leading-relaxed">
            Contact our experts today to discuss your façade project and discover how we can bring your vision to life
            with innovative solutions and exceptional craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <MagneticButton>
              <Button
                asChild
                size="lg"
                className="bg-white text-[#01adff] hover:bg-blue-50 px-10 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-10 py-6 backdrop-blur-sm text-lg bg-transparent"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </MagneticButton>
          </div>

          {/* Highlights */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-blue-100">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm  px-6 py-3">
                <highlight.icon className="w-5 h-5" />
                <span className="font-medium">{highlight.text}</span>
              </div>
            ))}
          </div>
        </ScrollTriggerComponent>
      </div>
    </section>
  )
}
