"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Section = { id: string; label: string };
type Brand = {
  primary: string;
  primaryDeep: string;
  navy: string;
  black: string;
  white: string;
};

export function ScrollspyNav({
  sections,
  brand,
  offset = 96,
}: {
  sections: readonly Section[];
  brand: Brand;
  offset?: number;
}) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sections]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="sticky top-24">
      {/* Header */}
      <div
        className="text-xl font-semibold uppercase  mb-4"
        style={{ color: brand.primaryDeep }}
      >
        Navigation
      </div>

      {/* Floating Container */}
      <div className="relative rounded-2xl bg-white/10 dark:bg-white/5 border border-white/20 backdrop-blur-xl p-5 shadow-[0_8px_30px_rgba(1,173,255,0.05)]">
        {/* Accent gradient line */}
     

        <ul className="space-y-2 pl-3 relative">
          {sections.map((section) => {
            const isActive = active === section.id;
            return (
              <li key={section.id}>
                <Link
                  href={`#${section.id}`}
                  onClick={(e) => handleClick(e, section.id)}
                  className={`group flex items-center justify-between rounded-lg px-3 py-2 text-[15px] font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[#01adff] bg-[#01adff]/10"
                      : "text-gray-700 dark:text-gray-300 hover:text-[#01adff]"
                  }`}
                >
                  {/* Label */}
                  <span className="relative z-10 flex items-center gap-2">
                    {isActive && (
                      <motion.span
                        layoutId="glow-dot"
                        className="w-2 h-2 rounded-full bg-[#01adff] shadow-[0_0_10px_#01adff]"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    {section.label}
                  </span>

               
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
