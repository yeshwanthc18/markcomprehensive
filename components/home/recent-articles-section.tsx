"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ScrollTriggerComponent from "@/components/animations/scroll-trigger";
import ButtonPrimary, { ButtonSecondary } from "../layout/Button";
import Image1 from "../../public/compressed-images/project-photos/JUMAN/IMG_5503.jpg";
import Image2 from "../../public/compressed-images/project-photos/TANMIA/IMG_5467.jpg";
import Image3 from "../../public/compressed-images/project-photos/ALMOUJ/IMG_3761.jpg";
import Image4 from "../../public/compressed-images/project-photos/JUMAN/IMG_5482.jpg";

const articles = [
  {
    id: 1,
    title: "The Future of Smart Glass Technology in Modern Architecture",
    excerpt:
      "Exploring how smart glass is revolutionizing building facades with energy efficiency and user comfort.",
    category: "Technology",
    image: Image1,
  },
  {
    id: 2,
    title: "Sustainable Facade Solutions for Climate-Conscious Construction",
    excerpt:
      "How modern facade systems contribute to green building certifications and environmental sustainability.",
    category: "Sustainability",
    image: Image2,
  },
  {
    id: 3,
    title: "Middle East Construction Trends: Facade Innovation in 2024",
    excerpt:
      "Regional insights into the latest facade technologies and design trends shaping the Middle East skyline.",
    category: "Industry Trends",
    image: Image3,
  },
  {
    id: 4,
    title: "The Rise of Parametric Design in Facade Engineering",
    excerpt:
      "Discover how AI-driven parametric tools are reshaping how architects design high-performance facades.",
    category: "Innovation",
    image: Image1,
  },
];

export default function RecentArticlesSection() {
  return (
    <section
      className="relative py-28 overflow-hidden text-white"
      style={{
        backgroundImage: `url('/images/contact-banner.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1f]/80 via-[#0a0f1f]/70 to-[#0a0f1f]/60 backdrop-blur-[3px]" />

      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center">
          {/* LEFT SIDE - TEXT BLOCK */}
          <ScrollTriggerComponent animation="fadeInUp">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#01adff] ">
                Insights & Innovation
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Stay informed with the latest advancements and expert
                perspectives shaping the future of facade engineering and modern
                architecture.
              </p>
              <ButtonPrimary className="px-6 py-3 bg-gradient-to-r from-[#01adff] to-[#1564e5] hover:shadow-[0_0_30px_#01adff80] text-white font-semibold rounded-full">
                <Link href="/blog" className="flex items-center justify-center">
                  View All Articles <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </ButtonPrimary>
            </div>
          </ScrollTriggerComponent>

          {/* RIGHT SIDE - GRID OF ARTICLES */}
          <ScrollTriggerComponent animation="fadeInUp" stagger={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <div
                  key={article.id}
                  className={`group relative rounded-md overflow-hidden border border-white/10 bg-white/10 backdrop-blur-2xl shadow-lg hover:shadow-[0_0_35px_rgba(1,173,255,0.25)] transition-all duration-500 ${
                    index % 2 !== 0 ? "lg:mt-8" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1f]/80 to-transparent transition-opacity duration-700 group-hover:opacity-60" />
                    <span className="absolute top-3 left-3 bg-[#01adff]/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                      {article.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 transition-colors duration-500 group-hover:text-[#01adff]">
                        {article.title}
                      </h3>
                    
                    </div>

                    <ButtonSecondary
                      className="mt-4 w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-[#01adff]/10 hover:text-[#01adff] transition-all duration-300 rounded-md"
                    >
                      Read Article <ArrowRight className="w-4 h-4" />
                    </ButtonSecondary>
                  </div>

                  {/* Glow Border */}
                  <div className="absolute inset-0 rounded-md border border-transparent group-hover:border-[#01adff]/40 transition duration-500"></div>
                </div>
              ))}
            </div>
          </ScrollTriggerComponent>
        </div>
      </div>
    </section>
  );
}
