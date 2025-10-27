"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Edward Alexander",
    date: "28 Aug, 2017",
    rating: 4.9,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Overall pleasurable experience. Pay a little first and pay a little during development as milestones are achieved, which made me feel very confident and comfortable. Seamless and easy process.",
  },
  {
    name: "Diana Johnston",
    date: "29 Aug, 2017",
    rating: 4.9,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Working with the team was smooth and transparent. Communication was clear, and I loved how easy the entire process was. Highly recommend!",
  },
  {
    name: "Lauren Contreras",
    date: "29 Aug, 2017",
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Excellent service! They kept me updated at every stage. I felt comfortable and supported throughout the whole journey.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="relative  container  py-16 px-6 md:px-20 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 overflow-hidden">
      {/* Left Side – Customer List */}
      <div className="flex flex-col items-start w-full md:w-1/3 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-[#01ADFF] pl-3">
          Customer Reviews
        </h2>

        <div className="space-y-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              onClick={() => setActiveIndex(i)}
              whileHover={{ scale: 1.02 }}
              className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                activeIndex === i ? "bg-[#E9F7FF]" : "hover:bg-[#F4FAFF]"
              }`}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-800">{t.name}</p>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Star size={14} className="text-[#01ADFF]" />
                  <span className="font-semibold text-gray-700">
                    {t.rating}
                  </span>
                  <span className="text-gray-400">on {t.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Side – Testimonial Text */}
      <div className="w-full md:w-2/3 text-gray-700">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="text-lg italic leading-relaxed"
          >
            <span className="text-4xl font-serif text-[#01ADFF] mr-2">“</span>
            {testimonials[activeIndex].text}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
