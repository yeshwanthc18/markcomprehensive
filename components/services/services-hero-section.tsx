import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#1c345c] via-[#01adff] to-[#01adff] text-white py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600')]"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors">
            Our Services
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Comprehensive
            <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Façade Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-blue-100 leading-relaxed">
            From innovative glazing systems to smart access solutions, we deliver cutting-edge 
            architectural aluminum systems that transform buildings worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#1c345c] hover:bg-blue-50 font-semibold">
              <Link href="#services">Explore Our Solutions</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 bg-transparent font-semibold"
            >
              <Link href="/contact">Get Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
