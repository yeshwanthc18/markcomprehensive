import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ScrollTriggerComponent from "@/components/animations/scroll-trigger"

export default function CompanyStorySection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollTriggerComponent animation="fadeInLeft">
            <div>
              <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 px-6 py-2">Our Company Story</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">MARK COMPREHENSIVE</h2>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Mark Comprehensive LLC, has started its successful journey in Sultanate of Oman in 2010 with a full
                  support and experience from our sister concern United Aluminium LLC, the leading aluminum, glass and
                  cladding fabricators in the UAE since 1998.
                </p>

                <p>
                  We specialize in a range of architectural products and services to meet the needs of the ever growing
                  and fast paced UAE and Oman construction industries. Our custom architectural products and designs are
                  known for their aesthetics, durability, strength, workmanship and quality.
                </p>

                <p>
                  We have successfully installed our products to business establishments, banks, schools, religious
                  organizations, supermarkets, individual homeowners and contractors alike.
                </p>

                <p>
                  We provide the latest technology and equipment allowing us to give our customers the best possible
                  service throughout the process from the design stages, through fabrication, to satisfactory on-site
                  installation and maintenance.
                </p>
              </div>
            </div>
          </ScrollTriggerComponent>

          <ScrollTriggerComponent animation="fadeInRight">
            <div className="space-y-8">
              <div className="relative">
                <div className="aspect-[4/3]  overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Mark Comprehensive Facility"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#01adff] text-white p-6  shadow-xl">
                  <div className="text-3xl font-bold">2010</div>
                  <div className="text-blue-100">Established</div>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Manufacturing Excellence</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Located in the Halban Industrial area, our factory includes excellent fabrication facilities with
                    modern advanced aluminum fabrication and assembly lines. The company employs some of the most highly
                    qualified and experienced professionals in the aluminum and glass industry in the region.
                  </p>
                </CardContent>
              </Card>
            </div>
          </ScrollTriggerComponent>
        </div>
      </div>
    </section>
  )
}
