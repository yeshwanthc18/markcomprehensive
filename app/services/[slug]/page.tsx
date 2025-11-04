import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image, { StaticImageData } from "next/image";

import { getServiceBySlug, SERVICES } from "@/lib/service-data";
import { Reveal } from "@/components/reveal-on-scroll";
import { ScrollspyNav } from "@/components/scrollspy-nav";
import { ServiceGallery } from "@/components/service-gallery";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getServiceBySlug(params.slug);
  const title = service
    ? `${service.title} – Mark Comprehensive`
    : "Service – Mark Comprehensive";
  return {
    title,
    description: service?.summary,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return notFound();

  // Brand palette (kept to 5 colors total)
  const brand = {
    primary: "#01adff",
    primaryDeep: "#1c345c",
    navy: "#001952",
    black: "#000000",
    white: "#ffffff",
  };

  // Added "gallery" to sections for sticky nav
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "specification", label: "Specification" },
    { id: "process", label: "Process" },
    { id: "gallery", label: "Gallery" },
    { id: "faqs", label: "FAQs" },
    { id: "contact", label: "Contact" },
  ] as const;

  // Build a gallery: include hero + real images + placeholders
  const galleryFallbackQuery = encodeURIComponent(
    `${service.title} project detail photo`
  );
  const gallery: (string | StaticImageData)[] = service.gallery.map(
    (item) => item.img
  );

  return (
    <main
      className="min-h-screen mt-16 bg-white text-[color:var(--fg)]"
      style={{ ["--fg" as any]: brand.black }}
    >
      {/* Top brand ribbon */}
      <div
        className="w-full border-b"
        style={{ backgroundColor: brand.primary, borderColor: brand.navy }}
      >
        <div className="mx-auto container px-4 py-2">
          <p
            className="text-xs md:text-sm font-medium text-balance"
            style={{ color: brand.black }}
          >
            Beyond Façades. Beyond Borders.
          </p>
        </div>
      </div>
      <section
        className="relative border-b"
        style={{ borderColor: brand.navy }}
      >
        <div className="relative h-[80vh]">
          <Image
            src={service.heroImage}
            alt={`${service.title} hero`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70" />
          <div className="flex relative justify-center items-center h-[80vh] p-6 md:p-10 ">
            <div className="container">
              {/* <nav
                aria-label="Breadcrumb"
                className="text-xs md:text-sm mb-2 text-white flex gap-2"
              >
                <Link href="/" className="hover:underline">
                  Home
                </Link>
                <span>/</span>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
                <span>/</span>
                <span className="font-medium">{service.title}</span>
              </nav> */}
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                {service.title}
              </h1>
              <p className="mt-2 md:mt-4 text-sm md:text-lg text-white/90">
                {service.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content with sticky nav */}
      <section className="border-t" style={{ borderColor: brand.navy }}>
        <div className="mx-auto container px-4 py-12 md:py-16 grid md:grid-cols-[220px_minmax(0,1fr)] gap-8">
          {/* Sticky nav */}
          <aside className="hidden md:block">
            <div className="sticky top-24">
              <ScrollspyNav sections={sections} brand={brand} offset={96} />
            </div>
          </aside>

          {/* Main */}
          <div className="space-y-16">
            <section id="overview">
              <Reveal>
                <h2
                  className="text-3xl font-semibold text-black"
                  style={{ ["--navy" as any]: brand.navy }}
                >
                  Overview
                </h2>
                <p
                  className="mt-3 text-lg leading-relaxed text-black"
                  style={{ ["--fg-muted" as any]: brand.primaryDeep }}
                >
                  {service.summary}
                </p>
              </Reveal>
            </section>

            {/* Mid-page CTA */}
            <section aria-label="Capabilities CTA" className="py-12">
              <Reveal>
                <div
                  className="relative overflow-hidden rounded-2xl px-8 py-10 md:px-12 md:py-12 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${brand.navy} 0%, ${brand.navy} 40%, ${brand.primary} 120%)`,
                    border: `1px solid ${brand.navy}`,
                  }}
                >
                  {/* Decorative gradient strip at top */}
                  <div
                    className="absolute top-0 left-0 w-full h-1 opacity-80"
                    style={{ backgroundColor: brand.primary }}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 md:flex md:items-center md:justify-between md:gap-12">
                    <div className="max-w-2xl">
                      <h3
                        className="text-2xl md:text-3xl font-semibold tracking-tight leading-snug"
                        style={{ color: brand.white }}
                      >
                        Precision-engineered facades, delivered end-to-end
                      </h3>
                      <p
                        className="mt-3 text-sm md:text-base leading-relaxed opacity-90"
                        style={{ color: brand.white }}
                      >
                        From design development to on-site commissioning, our{" "}
                        <span className="font-medium capitalize">
                          {service.title.toLowerCase()}
                        </span>{" "}
                        services align aesthetics with performance and
                        compliance.
                      </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-6 md:mt-0 flex flex-wrap gap-3">
                      <Link
                        href={{
                          pathname: "/projects",
                          query: { type: service.title },
                        }}
                        className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-300"
                        style={{
                          backgroundColor: brand.primary,
                          color: brand.black,
                          border: `1px solid ${brand.primary}`,
                        }}
                      >
                        View Related Projects
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-300"
                        style={{
                          backgroundColor: brand.white,
                          color: brand.navy,
                          border: `1px solid ${brand.white}`,
                        }}
                      >
                        Request Consultation
                      </Link>
                    </div>
                  </div>

                  {/* Decorative bottom fade */}
                  <div
                    className="absolute bottom-0 left-0 w-full h-1 opacity-60"
                    style={{ backgroundColor: brand.primary }}
                  ></div>
                </div>
              </Reveal>
            </section>

            <section aria-label="Project Gallery">
              <Reveal>
                <h2
                  className="text-2xl font-semibold text-black"
                  style={{ ["--navy" as any]: brand.navy }}
                >
                  Models
                </h2>
              </Reveal>
              <div className="mt-6">
                <ServiceGallery
                  images={gallery}
                  brand={brand}
                  title={service.title}
                />
              </div>
            </section>

            <section id="specification">
              <Reveal>
                <h2
                  className="text-2xl font-semibold text-black"
                  style={{ ["--navy" as any]: brand.navy }}
                >
                  Specification
                </h2>
              </Reveal>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.specification.map((c, i) => (
                  <Reveal key={c.title} delay={i * 60}>
                    <div
                      className="p-4 h-full transition-transform rounded-md hover:-translate-y-0.5"
                      style={{
                        backgroundColor: brand.white,
                        border: `1px solid ${brand.navy}`,
                      }}
                    >
                      <div
                        className="text-l font-semibold text-black"
                        style={{ ["--navy" as any]: brand.navy }}
                      >
                        {c.title}
                      </div>
                      <p
                        className="mt-2 text-md leading-relaxed text-black"
                        style={{ ["--fg-muted" as any]: brand.primaryDeep }}
                      >
                        {c.detail}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            <section id="process">
              <Reveal>
                <h2
                  className="text-2xl font-semibold text-black"
                  style={{ ["--navy" as any]: brand.navy }}
                >
                  Process
                </h2>
              </Reveal>
              <ol className="mt-6 grid md:grid-cols-2 gap-4">
                {service.process.map((p, i) => (
                  <Reveal key={p.step} delay={i * 70}>
                    <li
                      className="p-4 rounded-md transition-transform hover:-translate-y-0.5"
                      style={{
                        backgroundColor: brand.white,
                        border: `1px solid ${brand.navy}`,
                      }}
                    >
                      <div
                        className="inline-flex rounded-md items-center gap-2 px-2.5 py-1 text-sm font-medium"
                        style={{
                          backgroundColor: brand.navy,
                          color: brand.white,
                          border: `1px solid ${brand.navy}`,
                        }}
                      >
                        {p.step}
                      </div>
                      <p
                        className="mt-3 text-md leading-relaxed text-black"
                        style={{ ["--fg-muted" as any]: brand.primaryDeep }}
                      >
                        {p.detail}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </section>

            {/* Gallery section added */}
            <section id="gallery" aria-label="Project Gallery">
              <Reveal>
                <h2
                  className="text-2xl font-semibold text-black"
                  style={{ ["--navy" as any]: brand.navy }}
                >
                  Gallery
                </h2>
              </Reveal>
              <div className="mt-6">
                <ServiceGallery
                  images={gallery}
                  brand={brand}
                  title={service.title}
                />
              </div>
            </section>

            <section id="faqs">
              <Reveal>
                <h2
                  className="text-2xl font-semibold text-black"
                  style={{ ["--navy" as any]: brand.navy }}
                >
                  FAQs
                </h2>
              </Reveal>
              <div
                className="mt-6 divide-y"
                style={{ borderColor: brand.navy }}
              >
                {service.faqs.map((f, i) => (
                  <Reveal key={f.q} delay={i * 80}>
                    <details className="group py-3">
                      <summary
                        className="cursor-pointer list-none text-black font-medium"
                        style={{ ["--navy" as any]: brand.navy }}
                      >
                        {f.q}
                      </summary>
                      <p
                        className="mt-2 text-sm leading-relaxed text-black"
                        style={{ ["--fg-muted" as any]: brand.primaryDeep }}
                      >
                        {f.a}
                      </p>
                    </details>
                  </Reveal>
                ))}
              </div>
            </section>

            <section id="contact">
              <Reveal>
                <div
                  className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                  style={{
                    border: `1px solid ${brand.navy}`,
                    backgroundColor: brand.white,
                  }}
                >
                  <div>
                    <h3
                      className="text-lg font-semibold text-black"
                      style={{ ["--navy" as any]: brand.navy }}
                    >
                      Ready to start your {service.title} project?
                    </h3>
                    <p
                      className="mt-1 text-sm text-black"
                      style={{ ["--fg-muted" as any]: brand.primaryDeep }}
                    >
                      Speak with our engineering team for specifications,
                      samples, and timelines.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5"
                    style={{
                      backgroundColor: brand.primary,
                      color: brand.black,
                      border: `1px solid ${brand.primary}`,
                    }}
                  >
                    Contact Us
                  </Link>
                </div>
              </Reveal>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
