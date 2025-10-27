import { Badge } from "@/components/ui/badge"
import ScrollTriggerComponent from "@/components/animations/scroll-trigger"
import TestimonialCard from "@/components/ui/testimonial-card"

const testimonials = [
  {
    quote:
      "Mark Comprehensive transformed our vision into reality. Their attention to detail and innovative approach exceeded our expectations.",
    author: "Sarah Johnson",
    title: "Chief Architect, Metropolitan Design",
    project: "Manhattan Sky Tower",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    quote:
      "The quality of work and professionalism shown throughout our project was exceptional. Highly recommended for any façade project.",
    author: "Michael Chen",
    title: "Project Manager, Global Construction",
    project: "Berlin Innovation Hub",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    quote:
      "Their sustainable solutions helped us achieve LEED Platinum certification while maintaining aesthetic excellence.",
    author: "Emma Rodriguez",
    title: "Sustainability Director, EcoBuilt",
    project: "Toronto Waterfront",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-amber-100 text-amber-800 hover:bg-amber-200 px-6 py-2">
              Client Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by leading architects, developers, and construction companies worldwide.
            </p>
          </div>
        </ScrollTriggerComponent>

        <ScrollTriggerComponent animation="scaleIn" stagger={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </ScrollTriggerComponent>
      </div>
    </section>
  )
}
