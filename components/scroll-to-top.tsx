"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Delay to allow DOM/layout to render before resetting scroll
    setTimeout(() => {
      // Try scrolling window
      window.scrollTo({ top: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Try scrolling any container with this attribute
      const scrollRoot = document.querySelector<HTMLElement>("[data-scroll-root]");
      if (scrollRoot) {
        scrollRoot.scrollTo({ top: 0, behavior: "auto" });
      }
    }, 100);
  }, [pathname]);

  return null;
}
