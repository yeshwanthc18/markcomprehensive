"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function useLenis() {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);


    setTimeout(() => {
      lenis.scrollTo(0, { immediate: true });
    }, 100);

    return () => {
      lenis.destroy();
    };
  }, [pathname]);
}
