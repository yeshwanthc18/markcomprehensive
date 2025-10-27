"use client";

import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ScrollTriggerComponent from "@/components/animations/scroll-trigger";
import ButtonPrimary from "../layout/Button";
import Image1 from "../../public/compressed-images/project-photos/JUMAN/IMG_5503.jpg";
import Image2 from "../../public/compressed-images/project-photos/TANMIA/IMG_5467.jpg";
import Image3 from "../../public/compressed-images/project-photos/ALMOUJ/IMG_3761.jpg";

const articles = [
  {
    id: 1,
    title: "The Future of Smart Glass Technology in Modern Architecture",
    excerpt:
      "Exploring how smart glass is revolutionizing building facades with energy efficiency and user comfort.",
    author: "Mark Engineering Team",
    date: "December 15, 2024",
    readTime: "5 min read",
    category: "Technology",
    image: Image1,
  },
  {
    id: 2,
    title: "Sustainable Facade Solutions for Climate-Conscious Construction",
    excerpt:
      "How modern facade systems contribute to green building certifications and environmental sustainability.",
    author: "Sustainability Team",
    date: "December 10, 2024",
    readTime: "7 min read",
    category: "Sustainability",
    image: Image2,
  },
  {
    id: 3,
    title: "Middle East Construction Trends: Facade Innovation in 2024",
    excerpt:
      "Regional insights into the latest facade technologies and design trends shaping the Middle East skyline.",
    author: "Regional Experts",
    date: "December 5, 2024",
    readTime: "6 min read",
    category: "Industry Trends",
    image: Image3,
  },
];

export default function RecentArticlesSection() {
  return (
    <section className="py-24 ">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
              Recent <span className="text-[#01adff]">Articles</span>
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
            </div>
            <p className="mt-6 text-lg md:text-xl text-black max-w-2xl mx-auto">
              Stay updated with the latest trends, technologies, and insights in facade engineering
            </p>
          </div>
        </ScrollTriggerComponent>

        <ScrollTriggerComponent animation="scaleIn" stagger={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="group relative bg-white border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <span className="absolute top-4 left-4 bg-[#01adff] text-white text-xs font-semibold px-2 py-1">
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between h-[calc(100%-16rem)]">
                  <div>
                    <h3 className="text-xl font-bold text-[#1c345c] mb-2 transition-colors duration-500 group-hover:text-[#01adff]">
                      {article.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-4">{article.excerpt}</p>
                  </div>

                  <div className="flex flex-col gap-3 mt-auto">
                    <div className="flex justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${article.id}`}
                      className="flex items-center justify-center mt-2 px-4 py-2 border border-[#01adff] text-[#01adff] font-semibold text-sm transition-all duration-300 hover:bg-[#01adff] hover:text-white"
                    >
                      Read Article <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollTriggerComponent>

        <div className="text-center mt-12 flex justify-center">
          <ButtonPrimary>
            <Link href="/blog" className="flex items-center justify-center">
              View All Articles <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </ButtonPrimary>
        </div>
      </div>
    </section>
  );
}
