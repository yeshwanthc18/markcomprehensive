import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"
import Link from "next/link"

export function ServicesCTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1c345c] via-[#01adff] to-[#01adff] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600')]"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to Transform
          <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Your Building?
          </span>
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100 leading-relaxed">
          Contact our team of facade experts to discuss your project requirements 
          and discover how we can bring your architectural vision to life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button asChild size="lg" className="bg-white text-[#1c345c] hover:bg-blue-50 font-semibold px-8">
            <Link href="/contact" className="flex items-center gap-2">
              Get Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="border-white/30 text-white hover:bg-white/10 bg-transparent font-semibold px-8"
          >
            <Link href="/portfolio" className="flex items-center gap-2">
              View Our Projects
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 p-4  bg-white/10 backdrop-blur-sm border border-white/20">
            <Phone className="h-5 w-5 text-blue-200" />
            <div className="text-left">
              <div className="text-sm text-blue-200">Call us directly</div>
              <div className="font-semibold">+1 (555) 123-4567</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 p-4  bg-white/10 backdrop-blur-sm border border-white/20">
            <Mail className="h-5 w-5 text-blue-200" />
            <div className="text-left">
              <div className="text-sm text-blue-200">Email our team</div>
              <div className="font-semibold">info@markcomprehensive.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
