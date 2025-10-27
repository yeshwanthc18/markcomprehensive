import ScrollTriggerComponent from "@/components/animations/scroll-trigger"
import Counter from "@/components/animations/counter"
import { Users, Building2, Globe, Award } from "lucide-react"

const stats = [
  { icon: Users, number: 50, suffix: "+", label: "Clients", color: "blue" },
  { icon: Building2, number: 100, suffix: "+", label: "Projects", color: "green" },
  { icon: Globe, number: 10, suffix: "+", label: "Countries", color: "purple" },
  { icon: Award, number: 100, suffix: "+", label: "Staff Members", color: "orange" },
]

export default function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-[#01adff] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5  blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5  blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Trusted by Industries</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">Backed by Global Brands</p>
          </div>
        </ScrollTriggerComponent>

        <ScrollTriggerComponent animation="scaleIn" stagger={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto mb-6 p-6 bg-white/10 backdrop-blur-sm  w-fit group-hover:bg-white/20 transition-all duration-300 shadow-lg">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">
                  <Counter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-blue-100 font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollTriggerComponent>
      </div>
    </section>
  )
}
