"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Award, ArrowRight } from "lucide-react";

import Image from "@/components/SmartImage";
import Logo from "../../public/compressed-images/mark logo light bg.png";
import ButtonPrimary from "./Button";
import { useQuickEstimate } from "@/contexts/quick-estimate-context";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "../ui/glowing-effect";

type Service = {
  title: string;
  href: string;
  desc: string;
  imageSrc: string;
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement | null>(null);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);
  const overTrigger = useRef(false);
  const overPanel = useRef(false);
  const pathname = usePathname();
  const { openPopup } = useQuickEstimate();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const services: Service[] = [
    {
      title: "Curtain Wall Systems",
      href: "/services/curtain-wall",
      desc: "Unitized and stick systems engineered for performance.",
      imageSrc: "/images/curtain-wall-facade-aluminium-system.jpg",
    },
    {
      title: "Point Fixed Glass Facade",
      href: "/services/point-fixed-glass-facade",
      desc: "Minimal sightlines. Maximum clarity.",
      imageSrc: "/images/point-fixed-glass-facade.jpg",
    },
    {
      title: "Hinged Doors & Windows",
      href: "/services/hinged-doors-windows",
      desc: "Elegance and functionality with durable aluminium framing.",
      imageSrc: "/images/hinged-aluminium-door.jpg",
    },
    {
      title: "Sliding Doors & Windows",
      href: "/services/sliding-doors-windows",
      desc: "Smooth operation with broad opening options.",
      imageSrc: "/images/sliding-glass-door.jpg",
    },
    {
      title: "Folding Doors",
      href: "/services/folding-door-systems",
      desc: "Seamlessly connect indoor and outdoor spaces.",
      imageSrc: "/images/folding-glass-door-bi-fold.jpg",
    },
    {
      title: "Swing Doors",
      href: "/services/swing-doors",
      desc: "Style meets practicality for interiors and entries.",
      imageSrc: "/images/swing-glass-door.jpg",
    },
    {
      title: "Sky Light",
      href: "/services/skylight",
      desc: "Where sky meets style—daylight by design.",
      imageSrc: "/images/architectural-skylight.jpg",
    },
    {
      title: "Office Partition",
      href: "/services/office-partitions",
      desc: "Privacy, acoustics, and transparency in balance.",
      imageSrc: "/images/office-glass-partition.jpg",
    },
    {
      title: "Shower / Toilet Partitions",
      href: "/services/shower-toilet-partitions",
      desc: "Sealed in style splashed in luxury.",
      imageSrc: "/images/shower-glass-partition.jpg",
    },
    {
      title: "Handrails & Stair Solution",
      href: "/services/handrails-stairs",
      desc: "Guiding your path with strength and style.",
      imageSrc: "/images/glass-handrail-stair.jpg",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // ✅ Only activate heavy blur after 150px on home
      if (pathname === "/") {
        setIsScrolled(window.scrollY > 150);
      } else {
        // ✅ For other pages, you can make it react immediately
        setIsScrolled(window.scrollY > 0);
      }
    };

    // Run it once immediately (so nav state is correct even without scrolling)
    handleScroll();

    // ✅ Remove any old scroll listeners before adding a new one
    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll);

    // ✅ Cleanup properly on unmount or route change
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const onDocKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("keydown", onDocKey);
    return () => document.removeEventListener("keydown", onDocKey);
  }, []);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    if (servicesOpen) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [servicesOpen]);

  useEffect(() => {
    return () => {
      if (openTimer.current) window.clearTimeout(openTimer.current);
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Main header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          pathname === "/"
            ? isScrolled
              ? "backdrop-blur-3xl bg-white/40"
              : "backdrop-blur-0 bg-transparent"
            : "backdrop-blur-3xl bg-white/40"
        }`}
      >
        <nav className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 group flex-shrink-0"
            >
              <div className="px-2 sm:px-4 py-2 sm:py-[9px]">
                <Image src={Logo} alt="Mark" width={100} priority />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:block flex-grow">
              <div className="flex items-center justify-center space-x-0.5 xl:space-x-1">
                {navigation.slice(0, 3).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 xl:px-4 py-2 text-sm lg:text-base font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? "font-bold text-[#01adff]"
                        : isScrolled
                        ? "text-gray-700 hover:text-[#01adff]"
                        : "text-[#1c345c] hover:text-[#01adff]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div
                  className="relative"
                  onFocusCapture={() => {
                    overTrigger.current = true;
                    setServicesOpen(true);
                  }}
                  onBlurCapture={(e) => {
                    if (
                      megaRef.current &&
                      !megaRef.current.contains(e.relatedTarget as Node)
                    ) {
                      overTrigger.current = false;
                      if (closeTimer.current)
                        window.clearTimeout(closeTimer.current);
                      closeTimer.current = window.setTimeout(() => {
                        if (!overPanel.current && !overTrigger.current)
                          setServicesOpen(false);
                      }, 180);
                    }
                  }}
                  onMouseEnter={() => {
                    overTrigger.current = true;
                    if (closeTimer.current)
                      window.clearTimeout(closeTimer.current);
                    if (openTimer.current)
                      window.clearTimeout(openTimer.current);
                    openTimer.current = window.setTimeout(
                      () => setServicesOpen(true),
                      80
                    );
                  }}
                  onMouseLeave={() => {
                    overTrigger.current = false;
                    if (openTimer.current)
                      window.clearTimeout(openTimer.current);
                    if (closeTimer.current)
                      window.clearTimeout(closeTimer.current);
                    closeTimer.current = window.setTimeout(() => {
                      if (!overPanel.current && !overTrigger.current)
                        setServicesOpen(false);
                    }, 180);
                  }}
                >
                  <Link href="/services">
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                      aria-controls="services-mega"
                      onClick={() => setServicesOpen((o) => !o)}
                      className={`px-3 xl:px-4 py-2 text-sm lg:text-base font-medium transition-colors duration-200 ${
                        isScrolled
                          ? "text-gray-700 hover:text-[#01adff]"
                          : "text-[#1c345c] hover:text-[#01adff]"
                      } ${
                        isActive("/services") ? "font-bold text-[#01adff]" : ""
                      }`}
                    >
                      Services
                    </button>
                  </Link>

                  {/* Mega menu */}
                  {servicesOpen && (
                    <div
                      ref={megaRef}
                      id="services-mega"
                      onMouseEnter={() => {
                        overPanel.current = true;
                        if (closeTimer.current)
                          window.clearTimeout(closeTimer.current);
                      }}
                      onMouseLeave={() => {
                        overPanel.current = false;
                        if (closeTimer.current)
                          window.clearTimeout(closeTimer.current);
                        closeTimer.current = window.setTimeout(() => {
                          if (!overPanel.current && !overTrigger.current)
                            setServicesOpen(false);
                        }, 180);
                      }}
                      className={cn(
                        "absolute left-1/2 -translate-x-1/2 mt-3 w-[880px] max-w-[92vw] rounded-md border shadow-lg z-[60]",
                        isScrolled
                          ? "bg-white backdrop-blur-3xl border-border"
                          : "bg-white/90 backdrop-blur-3xl border-border"
                      )}
                    >
                      <div className="grid grid-cols-12">
                        {/* Left banner */}
                        <div className="col-span-4 hidden md:flex flex-col p-6 rounded-md bg-gradient-to-b from-[#001952] via-[#16213e] to-[#0f3460] text-white">
                          <div>
                            <h3 className="mt-4 text-[18px] font-semibold leading-snug">
                              End‑to‑end facade solutions
                            </h3>
                            <p className="mt-2 text-sm text-white/80 leading-6">
                              From consulting to installation, built to your
                              specs and budget.
                            </p>
                          </div>
                          <div className="mt-6">
                            <ButtonPrimary
                              className="inline-flex items-center gap-2 bg-[#01adff] px-4 py-2 rounded-md"
                              onClick={() => setServicesOpen(false)}
                            >
                              Explore all services
                              <ArrowRight className="h-4 w-4" />
                            </ButtonPrimary>
                          </div>
                        </div>

                        <div className="col-span-12 md:col-span-8 p-4 sm:p-6">
                          <ul className="grid grid-cols-1 sm:grid-cols-2 rounded-none">
                            <GlowingEffect
                              spread={40}
                              glow={true}
                              disabled={false}
                              proximity={64}
                              inactiveZone={0.01}
                            />
                            {services.map((s) => (
                              <li key={s.href}>
                                <Link
                                  href={s.href}
                                  onClick={() => setServicesOpen(false)}
                                  className="group flex items-start gap-3 p-4 hover:bg-muted transition rounded-md"
                                >
                                  <div className="h-12 w-12 flex items-center justify-center rounded-none flex-shrink-0">
                                    <Image
                                      src={s.imageSrc || "/placeholder.svg"}
                                      alt={s.title}
                                      width={48}
                                      height={48}
                                      className="h-12 w-12 object-cover rounded-sm"
                                    />
                                  </div>
                                  <div className="min-w-0">
                                    <p className="truncate text-sm font-semibold tracking-tight text-[#001952]">
                                      {s.title}
                                    </p>
                                    <p className="mt-1 text-xs text-foreground/70 leading-5">
                                      {s.desc}
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {navigation.slice(4).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 xl:px-4 py-2 text-sm lg:text-base font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? "font-bold text-[#01adff]"
                        : isScrolled
                        ? "text-gray-700 hover:text-[#01adff]"
                        : "text-gray-700 hover:text-[#01adff]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <ButtonPrimary onClick={openPopup} className="text-sm">
                <span>Get Quote</span>
                <ArrowRight className="h-4 w-4" />
              </ButtonPrimary>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex-shrink-0">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 transition-colors duration-200 ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#01adff]"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 bg-white">
              <div className="px-3 sm:px-4 py-4 space-y-2">
                {navigation.slice(0, 3).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 sm:px-4 py-3 text-base font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? "bg-gradient-to-r from-[#1564e5] to-[#01adff] text-white rounded-md"
                        : "text-gray-700 hover:text-[#01adff]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <details className="border border-gray-200 rounded-md">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-3 sm:px-4 py-3 text-base font-medium text-gray-700">
                    Services
                    <span className="text-xs text-gray-500">Tap to expand</span>
                  </summary>
                  <div className="px-2 sm:px-3 pb-3 space-y-1">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-3 sm:px-4 py-2 text-sm text-gray-700 hover:text-[#01adff] rounded-md hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {s.title}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="mt-2 inline-flex items-center gap-2 bg-[#01adff] px-3 sm:px-4 py-2 text-sm font-medium text-[#001952] rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      All services
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </details>
                {navigation.slice(4).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 sm:px-4 py-3 text-base font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? "bg-gradient-to-r from-[#1564e5] to-[#01adff] text-white rounded-md"
                        : "text-gray-700 hover:text-[#01adff]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-100">
                  <Button
                    className="w-full bg-gradient-to-r from-[#1564e5] to-[#01adff] hover:from-[#1564e5]/90 hover:to-[#01adff]/90 text-white font-medium py-2 sm:py-3 text-sm sm:text-base rounded-md"
                    onClick={() => {
                      openPopup();
                      setIsMenuOpen(false);
                    }}
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="pt-4 border-t border-gray-100 space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 text-sm text-black">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">+968 9131 5526</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-black">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">info@markcomprehensive.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-black">
                    <Award className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">ISO 9001 Certified</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
