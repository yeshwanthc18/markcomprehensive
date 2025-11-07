"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Header from "./headerone";
import Footer from "./footer";

import { useLenis } from "../animated/Lenis";
import { QuickEstimateProvider } from "@/contexts/quick-estimate-context";
import QuickEstimatePopup from "@/components/quick-estimate-popup";
import { useScrollToTop } from "@/app/ScrollToTop";
import ScrollToTop from "../scroll-to-top";
import TriangleCursor from "@/app/TriangleCursor";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const progressRef = useRef<HTMLDivElement>(null);
  const isComingSoon = pathname === "/coming-soon";

  useLenis();

  useEffect(() => {
    if (!progressRef.current) return;

    // Reset and animate progress bar for each route change
    const bar = progressRef.current;
    const tl = gsap.timeline();

    tl.set(bar, { scaleX: 0, opacity: 1, transformOrigin: "left center" })
      .to(bar, {
        scaleX: 1,
        duration: 1.2,
        ease: "power2.inOut",
      })
      .to(bar, {
        opacity: 0,
        duration: 0.4,
        delay: 0.2,
      });
  }, [pathname]);

  useScrollToTop();

  return (
    <QuickEstimateProvider>
      {/* Top progress bar */}
      <div
        ref={progressRef}
        className="fixed top-0 left-0 h-[3px] w-full bg-[#01adff] z-[9999] scale-x-0 opacity-0"
      />
   

      {!isComingSoon && <Header />}
   

      <TriangleCursor />
      <main className="min-h-screen"  data-scroll-root>{children}</main>

      {!isComingSoon && <Footer />}

      {/* ✅ Popup stays available everywhere */}
      <QuickEstimatePopup />
    </QuickEstimateProvider>
  );
}
