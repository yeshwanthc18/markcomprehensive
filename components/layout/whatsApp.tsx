"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// ✅ Register GSAP ScrollTo plugin
gsap.registerPlugin(ScrollToPlugin);

const WhatsAppButton: React.FC = () => {
  const [showTop, setShowTop] = useState(false);
  const topBtnRef = useRef<HTMLButtonElement>(null);

  // Track scroll position to toggle visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowTop(true);
      else setShowTop(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate button fade in/out
  useEffect(() => {
    if (topBtnRef.current) {
      gsap.to(topBtnRef.current, {
        opacity: showTop ? 1 : 0,
        y: showTop ? 0 : 20,
        duration: 0.6,
        ease: "power2.out",
        pointerEvents: showTop ? "auto" : "none",
      });
    }
  }, [showTop]);

  // ✅ Smooth scroll-to-top with GSAP ScrollToPlugin
  const scrollToTop = () => {
    gsap.to(window, { duration: 1, scrollTo: { y: 0 }, ease: "power2.inOut" });
  };

  return (
    <div className="fixed bottom-[50px] md:bottom-[40px] right-12 flex flex-col items-center gap-4 z-50">
      {/* 💬 WhatsApp Button */}
      <a
        href="https://wa.me/+96891315526"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center"
      >
        <div className="bg-[#25D366] p-3 rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <FaWhatsapp size={28} className="text-white" />
        </div>
      </a>
      {/* 🔼 Back to Top Button */}
      <button
        ref={topBtnRef}
        onClick={scrollToTop}
        className="opacity-0 bg-[#01adff]  text-white p-3 rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
        aria-label="Back to top"
      >
        <FaArrowUp size={24} />
      </button>
    </div>
  );
};

export default WhatsAppButton;
