import Image from "next/image";
import Link from "next/link";
import Curtainwall from "../../../public/images/curtain-wall-facade-aluminium-system.jpg";
import Gallery11 from "../../../public/images/curtain-wall-facade-aluminium-system.jpg";

import Gallery12 from "../../../public/images/curtain-wall-facade-aluminium-system.jpg";

import Gallery13 from "../../../public/images/curtain-wall-facade-aluminium-system.jpg";

import Gallery14 from "../../../public/images/curtain-wall-facade-aluminium-system.jpg";

import Gallery15 from "../../../public/images/curtain-wall-facade-aluminium-system.jpg";

import Gallery16 from "../../../public/images/curtain-wall-facade-aluminium-system.jpg";

export default function CurtainWallVisualPage() {
  // Brand palette (3-5 colors total)
  const brand = {
    primary: "#01adff",
    navy: "#001952",
    deep: "#1c345c",
    black: "#000000",
    white: "#ffffff",
  };

  // Static service data (duplicate example)
  const service = {
    title: "Curtain Wall Systems",
    tagline: "Engineered transparency—performance without compromise.",
    summary:
      "Our curtain wall systems unite structural reliability with design freedom. From unitized configurations for speed and precision to stick systems for on‑site flexibility, we deliver solutions tailored to your building’s performance, budget, and aesthetic.",
    heroImage: Curtainwall,
    benefits: [
      {
        title: "Optimized Performance",
        detail:
          "Thermal, acoustic, wind and water resistance engineered to specification.",
      },
      {
        title: "Design Flexibility",
        detail:
          "Unitized and stick systems with tailored profiles and infill options.",
      },
      {
        title: "Faster Delivery",
        detail:
          "Prefabrication reduces site time and improves quality consistency.",
      },
    ],
    specification: [
      { title: "System Types", detail: "Unitized, Stick, Semi‑unitized" },
      { title: "Materials", detail: "Aluminium framing with glass infills" },
      { title: "Glazing", detail: "Double/Triple glazing, Low‑E coatings" },
      { title: "Standards", detail: "ASTM, EN, local facade compliance" },
      { title: "Finish", detail: "PVDF, Anodized, Powder coated" },
      { title: "Accessories", detail: "Vent modules, Louvres, Spandrels" },
    ],
    process: [
      {
        step: "01 – Consultation",
        detail: "Brief, feasibility, and baseline specs.",
      },
      {
        step: "02 – Design & Engineering",
        detail: "System selection, calculations, and shop drawings.",
      },
      { step: "03 – Fabrication", detail: "Precision manufacturing and QC." },
      {
        step: "04 – Installation",
        detail: "Sequenced installation and on‑site QA.",
      },
      {
        step: "05 – Commissioning",
        detail: "Testing, handover, and documentation.",
      },
    ],
    gallery: [Gallery11, Gallery12, Gallery13, Gallery14, Gallery15, Gallery16],
    faqs: [
      {
        q: "What’s the key difference between unitized and stick systems?",
        a: "Unitized panels are factory-assembled and installed as large modules for speed and precision; stick systems are assembled on site to accommodate complex site constraints.",
      },
      {
        q: "Can the system meet my thermal and acoustic targets?",
        a: "Yes. We tailor glass specifications, thermal breaks, and gaskets to meet your project’s performance requirements.",
      },
      {
        q: "Do you provide testing and certification?",
        a: "We coordinate lab and field testing, and deliver compliant documentation based on local and international standards.",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white font-sans" style={{ color: brand.black }}>
  {/* Top Ribbon */}
  <div className="w-full border-b" style={{ backgroundColor: brand.primary, borderColor: brand.navy }}>
    <div className="container mx-auto px-4 py-2 text-center">
      <p className="text-xs md:text-sm font-semibold tracking-wide" style={{ color: brand.black }}>
        Beyond Façades. Beyond Borders.
      </p>
    </div>
  </div>

  {/* Hero Banner */}
  <section className="relative border-b" style={{ borderColor: brand.navy }}>
    <div className="relative h-[500px] md:h-[420px]">
      <Image
        src={service.heroImage || "/placeholder.svg"}
        alt={`${service.title} hero`}
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent">
        <div className="container">
  <nav aria-label="Breadcrumb" className="text-xs md:text-sm mb-2 text-white flex gap-2">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:underline">Services</Link>
          <span>/</span>
          <span className="font-medium">{service.title}</span>
        </nav>
        <h1 className="text-3xl md:text-5xl font-bold text-white">{service.title}</h1>
        <p className="mt-2 md:mt-4 text-sm md:text-lg text-white/90">{service.tagline}</p>
        </div>
      
      </div>
    </div>
  </section>

  {/* Overview + CTA */}
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4 grid md:grid-cols-[2fr_1fr] gap-8 items-center">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: brand.navy }}>Overview</h2>
        <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">{service.summary}</p>
      </div>
      <div className="flex md:flex-col gap-4">
        <Link
          href={{ pathname: "/projects", query: { type: service.title } }}
          className="px-6 py-3 text-sm md:text-base font-semibold bg-navy text-white border border-navy rounded-lg hover:bg-white hover:text-navy transition-all"
          style={{ backgroundColor: brand.navy, borderColor: brand.navy }}
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 text-sm md:text-base font-semibold bg-white text-navy border border-navy rounded-lg hover:bg-navy hover:text-white transition-all"
        >
          Talk to an Expert
        </Link>
      </div>
    </div>
  </section>

  {/* Benefits */}
  <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: brand.navy }}>Benefits</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {service.benefits.map((b) => (
          <div
            key={b.title}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
          >
            <h3 className="text-lg font-semibold mb-2" style={{ color: brand.navy }}>{b.title}</h3>
            <p className="text-gray-600">{b.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Specification */}
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: brand.navy }}>Specification</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {service.specification.map((c) => (
          <div
            key={c.title}
            className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold" style={{ color: brand.navy }}>{c.title}</h3>
            <p className="mt-2 text-gray-600">{c.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Process */}
  <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: brand.navy }}>Process</h2>
      <ol className="grid md:grid-cols-2 gap-6">
        {service.process.map((p) => (
          <li
            key={p.step}
            className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: brand.navy, color: brand.white }}>
              {p.step}
            </div>
            <p className="mt-3 text-gray-600">{p.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>

  {/* Gallery */}
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: brand.navy }}>Gallery</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {service.gallery.map((src, i) => (
          <div key={i} className="relative h-[220px] rounded-xl overflow-hidden border border-gray-200 hover:scale-105 transition-transform">
            <Image
              src={src || "/placeholder.svg"}
              alt={`Gallery ${i + 1}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* FAQs */}
  <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: brand.navy }}>FAQs</h2>
      <div className="space-y-4">
        {service.faqs.map((f) => (
          <details key={f.q} className="group border border-gray-200 rounded-xl p-4 bg-white hover:shadow-md transition-shadow">
            <summary className="cursor-pointer font-medium">{f.q}</summary>
            <p className="mt-2 text-gray-600">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>

  {/* Contact CTA */}
  <section className="py-24 bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0">
      <div>
        <h3 className="text-xl md:text-2xl font-bold" style={{ color: brand.navy }}>
          Ready to start your {service.title} project?
        </h3>
        <p className="mt-2 text-gray-700">Speak with our engineering team for specifications, samples, and timelines.</p>
      </div>
      <div className="flex gap-4">
        <Link
          href="/contact"
          className="px-6 py-3 bg-primary text-black font-semibold rounded-lg border border-primary hover:bg-black hover:text-white transition-all"
          style={{ backgroundColor: brand.primary, borderColor: brand.primary }}
        >
          Contact Us
        </Link>
        <Link
          href="/services"
          className="px-6 py-3 bg-white text-navy font-semibold rounded-lg border border-navy hover:bg-navy hover:text-white transition-all"
        >
          Explore Services
        </Link>
      </div>
    </div>
  </section>
</main>

  );
}
