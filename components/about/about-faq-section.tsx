"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react";
import ScrollTriggerComponent from "@/components/animations/scroll-trigger";

const faqs = [
  {
    category: "Company",
    question: "How long has Mark Comprehensive been in business?",
    answer:
      "Mark Comprehensive was established in 2010 in the Sultanate of Oman, with full support and experience from our sister company United Aluminium LLC, which was founded in 1998 in the UAE. This gives us over 25 years of combined experience in the aluminum and facade industry.",
  },
  {
    category: "Services",
    question: "What types of facade systems do you specialize in?",
    answer:
      "We specialize in a comprehensive range of facade solutions including curtain walls, structural glazing, spider systems, skylights, smart access systems, interior solutions, framed doors & windows, cladding & design elements, fire-rated solutions, and louvers & ventilation systems.",
  },
  {
    category: "Projects",
    question: "Do you handle both commercial and residential projects?",
    answer:
      "Yes, we handle projects across all sectors including commercial buildings, residential complexes, government facilities, healthcare institutions, educational buildings, hospitality projects, and retail developments. Our experience spans banks, schools, mosques, hotels, and developer projects.",
  },
  {
    category: "Quality",
    question: "What quality standards and certifications do you maintain?",
    answer:
      "We maintain the highest quality standards and work with globally recognized partners like Saint-Gobain, Technal, and Giesse. Our products meet international standards and certifications, and we follow rigorous quality control processes throughout design, fabrication, and installation.",
  },
  {
    category: "Geographic",
    question: "Which countries do you serve?",
    answer:
      "We serve clients across 10+ countries in the Middle East region, with our main operations based in Oman and UAE. Our strategic locations allow us to efficiently serve projects throughout the GCC and broader Middle East region.",
  },
  {
    category: "Process",
    question:
      "What is your typical project timeline from design to completion?",
    answer:
      "Project timelines vary based on scope and complexity. Typically, our process includes consultation (1-2 weeks), design development (2-4 weeks), fabrication (4-8 weeks), and installation (2-6 weeks). We provide detailed timelines during the consultation phase based on your specific requirements.",
  },
  {
    category: "Support",
    question: "Do you provide maintenance and after-sales support?",
    answer:
      "Yes, we provide comprehensive maintenance services including regular inspections, preventive maintenance, repair services, warranty support, and emergency response. Our goal is to ensure your facade systems perform optimally throughout their lifecycle.",
  },
  {
    category: "Technology",
    question:
      "Do you offer smart building integration and sustainable solutions?",
    answer:
      "Absolutely. We offer IoT-enabled facade systems with automated controls and monitoring, as well as energy-efficient designs that reduce environmental impact. Our solutions include smart access systems, automated louvers, and sustainable materials that contribute to green building certifications.",
  },
];

const categories = [
  "All",
  "Company",
  "Services",
  "Projects",
  "Quality",
  "Geographic",
  "Process",
  "Support",
  "Technology",
];

export default function AboutFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFAQs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
              Frequently Asked <span className="text-[#01adff]">Questions</span>
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
            </div>
            <p className="mt-6 text-lg md:text-xl text-black max-w-3xl mx-auto">
              Find answers to common questions about our services, processes,
              and company. Can't find what you're looking for? Contact our team
              directly.
            </p>
          </div>
        </ScrollTriggerComponent>

        {/* Category Filter */}
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                className={`${
                  activeCategory === category
                    ? "bg-[#01adff] hover:bg-[#01adff] text-white"
                    : "hover:bg-blue-50 hover:text-[#01adff]"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollTriggerComponent>

        {/* FAQ List */}
        <ScrollTriggerComponent animation="scaleIn" stagger={0.1}>
          <div className="space-y-4 mb-16">
            {filteredFAQs.map((faq, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <Badge className="bg-blue-100 text-blue-800 text-xs">
                        {faq.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {faq.question}
                      </h3>
                    </div>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-[#01adff] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-600 leading-relaxed pl-20">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollTriggerComponent>

        {/* Contact Support */}
        <ScrollTriggerComponent animation="fadeInUp">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-[#01adff] to-slate-700 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Our expert team is here to help. Contact us directly for
                personalized assistance with your facade project needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#01adff] bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#01adff] bg-transparent"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollTriggerComponent>
      </div>
    </section>
  );
}
