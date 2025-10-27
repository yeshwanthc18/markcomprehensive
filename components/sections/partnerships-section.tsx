import { Badge } from "@/components/ui/badge"
import ScrollTriggerComponent from "@/components/animations/scroll-trigger"

export default function PartnershipsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10  blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10  blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <ScrollTriggerComponent animation="fadeInUp">
          <Badge className="mb-8 bg-blue-500/20 text-white border-blue-400 px-6 py-3 text-base">
            Partnership Excellence
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">We build Only Big things</h2>
          <h3 className="text-2xl md:text-3xl text-blue-300 mb-6">Strong Partnerships, Stronger Solutions</h3>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Through strategic alliances with global industry leaders and a commitment to excellence, we deliver
            architectural solutions that define skylines and inspire communities across the Middle East.
          </p>
        </ScrollTriggerComponent>
      </div>
    </section>
  )
}
