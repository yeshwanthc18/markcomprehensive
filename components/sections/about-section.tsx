import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ScrollTriggerComponent from "@/components/animations/scroll-trigger"
import { ArrowRight, MapPin, Calendar } from "lucide-react"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollTriggerComponent animation="fadeInLeft">
            <div>
              <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 px-6 py-2">
                <Calendar className="w-4 h-4 mr-2" />
                Shaping the Skyline Since 2010
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Mark Comprehensive</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Founded in the Sultanate of Oman in 2010, Mark Comprehensive LLC has become a trusted leader in custom
                  facade and architectural systems across the Middle East.
                </p>
                <p>
                  Specializing in aluminum, glass, and decorative metal solutions, we serve the evolving needs of the
                  region's fast-paced construction industry.
                </p>
                <p>
                  Our products are recognized for their aesthetic value, structural strength, and long-lasting
                  performance. From corporate buildings and religious institutions to schools, supermarkets, and private
                  residences—we bring craftsmanship and quality to every project.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8 mb-8">
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin className="w-5 h-5 text-[#01adff]" />
                  <span className="font-medium">Sultanate of Oman</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Calendar className="w-5 h-5 text-[#01adff]" />
                  <span className="font-medium">Since 2010</span>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-[#01adff] hover:bg-[#01adff] text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </ScrollTriggerComponent>

          <ScrollTriggerComponent animation="fadeInRight">
            <div className="relative">
              <div className="aspect-[4/3]  overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Mark Comprehensive Building"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#01adff] text-white p-6  shadow-xl">
                <div className="text-3xl font-bold">14+</div>
                <div className="text-blue-100">Years of Excellence</div>
              </div>
            </div>
          </ScrollTriggerComponent>
        </div>
      </div>
    </section>
  )
}
