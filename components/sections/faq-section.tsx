"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp } from "lucide-react"
import ScrollTriggerComponent from "@/components/animations/scroll-trigger"

const faqs = [
  {
    question: "What types of facade systems do you offer?",
    answer:
      "We offer a wide range of facade solutions including curtain walls, structural glazing, spider systems, and decorative cladding using materials like aluminum, glass, copper, and corten steel.",
  },
  {
    question: "Do you provide end-to-end project services?",
    answer:
      "Yes, we provide complete architectural solutions from initial design and engineering to fabrication, installation, and maintenance. Our team handles every aspect of your project.",
  },
  {
    question: "Are your products certified and compliant with global standards?",
    answer:
      "Absolutely. All our products meet international standards and certifications. We partner with globally recognized brands like Saint-Gobain, Technal, and Giesse to ensure quality and compliance.",
  },
  {
    question: "Can you handle large-scale and international projects?",
    answer:
      "Yes, we have successfully completed projects across 10+ countries in the Middle East region. Our experienced team and global partnerships enable us to handle projects of any scale.",
  },
]

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-200 px-6 py-2">
              Popular Questions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Learn how we build smarter, design better, and innovate faster.</p>
          </div>
        </ScrollTriggerComponent>

        <ScrollTriggerComponent animation="scaleIn" stagger={0.1}>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-[#01adff] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollTriggerComponent>
      </div>
    </section>
  )
}
