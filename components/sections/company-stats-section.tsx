import ScrollTriggerComponent from "@/components/animations/scroll-trigger"
import Counter from "@/components/animations/counter"
import { Building2, Users, Globe, Award } from "lucide-react"

const companyStats = [
  { icon: Building2, number: 500, suffix: "+", label: "Projects Completed" },
  { icon: Users, number: 150, suffix: "+", label: "Expert Team Members" },
  { icon: Globe, number: 6, suffix: "", label: "Global Locations" },
  { icon: Award, number: 25, suffix: "+", label: "Years Experience" },
]

export default function CompanyStatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollTriggerComponent animation="scaleIn" stagger={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto mb-4 p-4 bg-blue-100  w-fit group-hover:bg-blue-200 transition-colors">
                  <stat.icon className="h-8 w-8 text-[#01adff]" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#01adff] mb-2">
                  <Counter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollTriggerComponent>
      </div>
    </section>
  )
}
