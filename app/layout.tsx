import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import { QuickEstimateProvider } from "@/contexts/quick-estimate-context";
import QuickEstimatePopup from "@/components/quick-estimate-popup";
import { useGSAP } from "@gsap/react";
import { useScrollToTop } from "./ScrollToTop";

const urbanist = localFont({
  src: [
    {
      path: "../public/fonts/Urbanist-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Urbanist-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Urbanist-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mark Comprehensive LLC - Façade Specialists",
  description:
    "Leading façade specialist in architectural aluminum systems design, fabrication, and installation worldwide.",
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);
  }

  return (
    <html lang="en" className={urbanist.variable}>
      <body className="font-urbanist">
        <QuickEstimateProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </QuickEstimateProvider>
      </body>
    </html>
  );
}
