export type ServiceSlug =
  | "curtain-wall"
  | "point-fixed-glass-facade"
  | "hinged-doors-windows"
  | "sliding-doors-windows"
  | "folding-door-systems"
  | "swing-doors"
  | "skylight"
  | "office-partitions"
  | "shower-toilet-partitions"
  | "handrails-stairs"
  | "internal-doors-partitions"
  | "decorative-facade-cladding"
  | "decorative-canopy"
  | "decorative-pergola"
  | "decorative-architectural-louvers"
  |"facade-design-consultancy-services";
import DharHassan4 from "@/public/compressed-images/project-photos/DHAR HASSAN VILLA/IMG_6551.jpg";
import DharHassan5 from "@/public/compressed-images/project-photos/DHAR HASSAN VILLA/IMG_6608.jpg";
import DharHassan6 from "@/public/compressed-images/project-photos/DHAR HASSAN VILLA/IMG_6728.jpg";
import DharHassan7 from "@/public/compressed-images/project-photos/DHAR HASSAN VILLA/IMG_6750.jpg";
import CurtainWall from "@/public/compressed-images/curtain-wall-systems.png"
import CurtainWall1 from "@/public/compressed-images/curtain-wall-1.png"
import CurtainWall2 from "@/public/compressed-images/curtain-wall-2.webp"
import { StaticImageData } from "next/image";

export type Service = {
  slug: ServiceSlug;
  title: string;
  tagline: string;
  summary: string;
  heroImage: any;
  gallery: { img: StaticImageData | string }[];
  specification: { title: string; detail: string }[];
  process: { step: string; detail: string }[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "curtain-wall",
    title: "Curtain Wall Systems",
    tagline: "Precision-engineered facades for performance and presence.",
    summary:
      "Mark Comprehensive LLC provides world-class curtain wall systems that integrate aesthetics, structural strength, and energy efficiency. We specialize in stick, semi-unitized, and unitized façades, designed for high performance under the region’s challenging climatic conditions. Every system is engineered for air and water tightness, structural stability, and thermal insulation ensuring optimal building envelope performance for commercial, hospitality, and institutional projects.",
    heroImage: CurtainWall,
    gallery: [
      { img: CurtainWall1 },
      { img: CurtainWall2 },
      { img: CurtainWall1 },
      { img: CurtainWall2 },
      { img: CurtainWall1 },
       { img: CurtainWall2 },
    ],
    specification: [
      { title: "Aluminium", detail: "Extruded aluminium sections, Alloy 6063" },
      { title: "Gaskets", detail: "Weather resistant EPDM" },
      { title: "Finishes", detail: "Powder coating / Anodising / PVDF" },
      { title: "Hardware", detail: "As per system selection" },
      { title: "Profile Series", detail: "M50 / M80 / MC100 / MC120" },
    ],
    process: [
      {
        step: "01 Discovery",
        detail: "Scope, constraints, and targets alignment.",
      },
      {
        step: "02 Engineering",
        detail: "System design, calcs, shop drawings.",
      },
      { step: "03 Fabrication", detail: "QC’d production and pre-assembly." },
      {
        step: "04 Installation",
        detail: "Specialist crews and safe execution.",
      },
      {
        step: "05 Commissioning",
        detail: "Testing and handover documentation.",
      },
    ],
    faqs: [
      {
        q: "Thermal performance?",
        a: "Thermally broken/improved frames available to meet energy targets.",
      },
      {
        q: "System formats?",
        a: "Unitized, stick-built, or hybrid per project needs.",
      },
    ],
  },
  {
    slug: "point-fixed-glass-facade",
    title: "Point Fixed Glass Facade",
    tagline: "Minimal sightlines. Maximum clarity.",
    summary:
      "Our spider and point-fixed glazing systems bring exceptional transparency and lightness to architectural designs. Constructed with laminated safety glass and precision stainless-steel fittings, they provide a sleek, frameless aesthetic while maintaining superior structural and weather performance.",
    heroImage: DharHassan4,
    specification: [
      { title: "Stainless Steel", detail: "Spider fittings in SS304 / SS316" },
      { title: "Gaskets", detail: "Weather resistant EPDM" },
      { title: "Finishes", detail: "Mirror / Brushed" },
      { title: "Glazing", detail: "IGU and single glazed options" },
      { title: "Fins", detail: "Glass / Rope / Metal" },
      { title: "Fixation", detail: "Single point fixation" },
    ],
    gallery: [
      { img: DharHassan4 },
      { img: DharHassan5 },
      { img: DharHassan7 },
      { img: DharHassan6 },
      { img: DharHassan4 },
    ],
    process: [
      {
        step: "01 Feasibility",
        detail: "Geometry, loads, and fixing strategy.",
      },
      {
        step: "02 Detailing",
        detail: "Bracketry, tolerances, interfaces in 3D.",
      },
      { step: "03 Mock-up", detail: "Visual/performance validation." },
      { step: "04 Delivery", detail: "Procurement, fabrication, sequencing." },
      { step: "05 Maintenance", detail: "Cleaning and inspection plans." },
    ],
    faqs: [
      {
        q: "Applications?",
        a: "Facades, lobbies, skylights, canopies, handrails, partitions, staircases.",
      },
    ],
  },
  {
    slug: "hinged-doors-windows",
    title: "Aluminium Hinged Door & Window Systems",
    tagline: "Elegance and functionality with durable aluminium framing.",
    summary:
      "Our hinged aluminium door and window systems combine strength, design flexibility, and superior performance. Manufactured from leading global systems such as Technal, Gutmann, Schüco, and Alumil, these solutions are ideal for premium residential and commercial spaces. Each system is precision-engineered for smooth operation, airtightness, and high energy efficiency, ensuring long-term durability and minimal maintenance.",
    heroImage: DharHassan4,
    gallery: [
      { img: DharHassan4 },
      { img: DharHassan5 },
      { img: DharHassan7 },
      { img: DharHassan6 },
      { img: DharHassan4 },
    ],
    specification: [
      { title: "Aluminium", detail: "Alloy 6063, extruded sections" },
      { title: "Gaskets", detail: "Weather resistant EPDM" },
      { title: "Finishes", detail: "Powder coat / Anodising / PVDF" },
      { title: "System Range", detail: "MH40 / MH42" },
      { title: "Visible Face Width", detail: "52 / 60 / 88 / 93 / 102 mm" },
      { title: "Frame", detail: "H: 51 mm, W: 40/42 mm" },
      { title: "Sash", detail: "H: 52–102 mm, W: 88/93/103 mm" },
    ],
    process: [
      { step: "01 Survey", detail: "Openings, tolerances, and design intent." },
      { step: "02 Detailing", detail: "Hinge/hardware, drainage, sealing." },
      { step: "03 Fabrication", detail: "Cutting, assembly, glazing QC." },
      {
        step: "04 Installation",
        detail: "Plumb, level, and weathering checks.",
      },
      { step: "05 Handover", detail: "Operation and maintenance briefing." },
    ],
    faqs: [
      {
        q: "Inward/outward opening?",
        a: "Both configurations are supported per layout.",
      },
    ],
  },
  {
    slug: "sliding-doors-windows",
    title: "Sliding Door & Window Systems",
    tagline: "Smooth operation with broad opening options.",
    summary:
      "Our sliding door and window systems offer architectural freedom with effortless functionality. Designed for wide openings, panoramic views, and maximum natural light, these systems are both visually minimal and technically advanced.",
    heroImage: DharHassan4,
    specification: [
      { title: "Aluminium", detail: "Alloy 6063" },
      { title: "Gaskets", detail: "Weather resistant EPDM" },
      { title: "Finishes", detail: "Powder coat / Anodising / PVDF" },
      { title: "System Range", detail: "MS45 / MS92" },
      { title: "Frame", detail: "H: 40/41 mm, W: 45/92 mm" },
      { title: "Sash", detail: "H: 52/59 mm, W: 27/35 mm" },
      { title: "Interlock", detail: "59 mm" },
      { title: "Glazing", detail: "8 / 10 / 24 mm" },
    ],
    gallery: [
      { img: DharHassan4 },
      { img: DharHassan5 },
      { img: DharHassan7 },
      { img: DharHassan6 },
      { img: DharHassan4 },
    ],
    process: [
      { step: "01 Survey", detail: "Span, stacking, and clearance checks." },
      {
        step: "02 Detailing",
        detail: "Tracks, rollers, interlocks, drainage.",
      },
      { step: "03 Fabrication", detail: "Precision cutting and assembly." },
      {
        step: "04 Installation",
        detail: "Track leveling and operation checks.",
      },
      { step: "05 Handover", detail: "Care and maintenance guidance." },
    ],
    faqs: [
      {
        q: "Fly screens or louvers?",
        a: "Yes, both integration options are supported.",
      },
    ],
  },
  {
    slug: "folding-door-systems",
    title: "Folding Door Systems",
    tagline: "Seamlessly connect indoor and outdoor spaces.",
    summary:
      "Our folding door systems combine design flexibility with performance, enabling full-width openings for modern hospitality, retail, and residential spaces. Built with robust aluminium profiles and stainless-steel pivot hardware, these doors ensure silent, stable operation and effective weather protection.",
    heroImage: DharHassan4,
    specification: [
      { title: "Aluminium", detail: "Alloy 6063" },
      { title: "Gaskets", detail: "Weather resistant EPDM" },
      { title: "Finishes", detail: "Powder coat / Anodising / PVDF" },
      { title: "System Range", detail: "MF48" },
      { title: "Visible Face Width", detail: "52 mm" },
      { title: "Frame", detail: "H: 50 mm, W: 48 mm" },
      { title: "Sash", detail: "H: 59 mm, W: 40 mm" },
      { title: "Glazing", detail: "Up to 24 mm" },
    ],
    gallery: [
      { img: DharHassan4 },
      { img: DharHassan5 },
      { img: DharHassan7 },
      { img: DharHassan6 },
      { img: DharHassan4 },
    ],
    process: [
      {
        step: "01 Survey",
        detail: "Threshold, stacking side, and clear width.",
      },
      {
        step: "02 Detailing",
        detail: "Top/bottom rails, meeting profiles, seals.",
      },
      { step: "03 Fabrication", detail: "Leaf assembly and hinge alignment." },
      {
        step: "04 Installation",
        detail: "Track setup, swing, and sealing checks.",
      },
      {
        step: "05 Handover",
        detail: "Operation and periodic adjustment notes.",
      },
    ],
    faqs: [
      {
        q: "Leaf configurations?",
        a: "3–6 leaf configurations commonly supported.",
      },
    ],
  },
  {
    slug: "swing-doors",
    title: "Swing Door Systems",
    tagline: "Style meets practicality for interiors and entries.",
    summary:
      "Our swing door systems are designed for high-traffic entrances and architectural interiors. These doors combine refined appearance with precision hardware, ensuring stability and reliability over extended operation cycles.",
    heroImage: DharHassan4,
    specification: [
      { title: "Aluminium", detail: "Alloy 6063" },
      { title: "Gaskets", detail: "Weather resistant EPDM" },
      { title: "Finishes", detail: "RAL powder coat, Wood finish, Anodised" },
      { title: "Hardware", detail: "As per system selection" },
      { title: "Profile Size", detail: "As per system selection" },
    ],
    gallery: [
      { img: DharHassan4 },
      { img: DharHassan5 },
      { img: DharHassan7 },
      { img: DharHassan6 },
      { img: DharHassan4 },
    ],
    process: [
      {
        step: "01 Survey",
        detail: "Clearances, swing direction, and hardware.",
      },
      { step: "02 Detailing", detail: "Seals, closers, and thresholds." },
      { step: "03 Fabrication", detail: "Frame/leaf prep, glazing, QA." },
      {
        step: "04 Installation",
        detail: "Fitment, alignment, operation checks.",
      },
    ],
    faqs: [
      {
        q: "Double or single leaf?",
        a: "Both configurations are available with fixed side/top panels.",
      },
    ],
  },
  {
    slug: "skylight",
    title: "Skylight & Canopy Systems",
    tagline: "Where sky meets style—daylight by design.",
    summary:
      "Our skylight and canopy systems are engineered to enhance natural lighting and architectural appeal while maintaining superior watertightness and insulation.",
    heroImage: DharHassan4,
    specification: [
      { title: "Aluminium", detail: "Alloy 6063" },
      { title: "Gaskets", detail: "Weather resistant EPDM" },
      { title: "Finishes", detail: "Powder coat / Anodising / PVDF" },
      { title: "Hardware", detail: "As per system selection" },
      { title: "Profile", detail: "M50" },
    ],
    gallery: [
      { img: DharHassan4 },
      { img: DharHassan5 },
      { img: DharHassan7 },
      { img: DharHassan6 },
      { img: DharHassan4 },
    ],
    process: [
      { step: "01 Survey", detail: "Openings, fall protection, drainage." },
      { step: "02 Detailing", detail: "Pitch, joints, flashing, sealing." },
      { step: "03 Fabrication", detail: "Frame build and glaze." },
      { step: "04 Installation", detail: "Weathering and leak tests." },
    ],
    faqs: [
      { q: "Commercial or residential?", a: "Suitable for both applications." },
    ],
  },
  {
    slug: "office-partitions",
    title: "Office Partition Systems",
    tagline: "Privacy, acoustics, and transparency in balance.",
    summary:
      "Our office partition systems bring sophistication, transparency, and acoustic comfort to modern workplaces. Designed with anodized aluminium frames and high-quality glass, they create flexible, reconfigurable environments suited to today’s corporate architecture.",
    heroImage: DharHassan4,
    specification: [
      { title: "Frames", detail: "Aluminium; corrosion-resistant" },
      { title: "Infill", detail: "Glass panels; optional blinds/film" },
      { title: "Finishes", detail: "Powder coat / Anodising" },
      { title: "Acoustics", detail: "Configurable per requirement" },
    ],
    gallery: [
      { img: DharHassan4 },
      { img: DharHassan5 },
      { img: DharHassan7 },
      { img: DharHassan6 },
      { img: DharHassan4 },
    ],
    process: [
      { step: "01 Survey", detail: "Layout, heights, and doors/locks." },
      { step: "02 Detailing", detail: "Junctions, services, and glazing." },
      { step: "03 Fabrication", detail: "Frames and modules assembly." },
      { step: "04 Installation", detail: "Plumb, line, and acoustic seals." },
    ],
    faqs: [
      {
        q: "Branding film?",
        a: "Yes, frosted/privacy/branding films are supported.",
      },
    ],
  },
  {
    slug: "shower-toilet-partitions",
    title: "Shower & Toilet Partitions",
    tagline: "Sealed in style—splashed in luxury.",
    summary:
      "We provide moisture-resistant and hygienic partition systems for bathrooms, spas, and hospitality spaces. Built with tempered glass and aluminium profiles, these systems offer privacy, durability, and aesthetic value.",
    heroImage: DharHassan4,
    specification: [
      { title: "Frames", detail: "Aluminium, moisture-resistant" },
      { title: "Infill", detail: "Tempered/laminated glass" },
      { title: "Finishes", detail: "Powder coat / Anodising" },
      { title: "Hardware", detail: "As per system selection" },
    ],
    gallery: [
      { img: DharHassan4 },
      { img: DharHassan5 },
      { img: DharHassan7 },
      { img: DharHassan6 },
      { img: DharHassan4 },
    ],
    process: [
      { step: "01 Survey", detail: "Wet area layout and fixing substrates." },
      { step: "02 Detailing", detail: "Seals, thresholds, hinges/handles." },
      {
        step: "03 Fabrication",
        detail: "Accurate cutouts and edge finishing.",
      },
      { step: "04 Installation", detail: "Water-tightness, stability checks." },
    ],
    faqs: [
      {
        q: "Waterproofing?",
        a: "We coordinate sealing details to prevent leakage.",
      },
    ],
  },
  {
    slug: "handrails-stairs",
    title: "Handrails & Stair Solution",
    tagline: "Guiding your path with strength and style.",
    summary:
      "Our handrail and balustrade systems combine safety and style. Fabricated from stainless steel, aluminium, and laminated glass, they are designed and tested to comply with global loading and deflection criteria.",
    heroImage: DharHassan4,
    specification: [
      { title: "Posts", detail: "Aluminium; robust and durable" },
      { title: "Infill", detail: "Glass panels (various edge details)" },
      { title: "Channels", detail: "Bottom U-channel/F-channel types" },
      { title: "Finishes", detail: "Powder coat / Anodising" },
    ],
    gallery: [
      { img: DharHassan4 },
      { img: DharHassan5 },
      { img: DharHassan7 },
      { img: DharHassan6 },
      { img: DharHassan4 },
    ],
    process: [
      { step: "01 Survey", detail: "Heights, loads, code compliance." },
      { step: "02 Detailing", detail: "Fixings, channels, jointing." },
      { step: "03 Fabrication", detail: "Posts and glass processing." },
      { step: "04 Installation", detail: "Alignment and safety verification." },
    ],
    faqs: [
      {
        q: "Edge protection?",
        a: "We design per local safety codes and use-case.",
      },
    ],
  },
  {
    slug: "internal-doors-partitions",
    title: "Internal Doors / Partitions",
    tagline: "Where strength meets transparency.",
    summary:
      "Aluminium and glass combinations for modern internal doors and partitions that provide privacy, security, and light transmission.",
    heroImage: DharHassan4,
    specification: [
      { title: "Frames", detail: "Aluminium; strong and durable" },
      { title: "Infill", detail: "Glass; clear/frosted/laminated" },
      { title: "Finishes", detail: "Powder coat / Anodising" },
      { title: "Hardware", detail: "Locks, closers, handles as specified" },
    ],
    gallery: [
      { img: DharHassan4 },
      { img: DharHassan5 },
      { img: DharHassan7 },
      { img: DharHassan6 },
      { img: DharHassan4 },
    ],
    process: [
      { step: "01 Survey", detail: "Openings and privacy needs." },
      {
        step: "02 Detailing",
        detail: "Seals, hardware, and swing/slide logic.",
      },
      { step: "03 Fabrication", detail: "Frames, leaves, glazing." },
      { step: "04 Installation", detail: "Operation and safety checks." },
    ],
    faqs: [
      {
        q: "Acoustic options?",
        a: "Acoustic glazing and seals can be specified.",
      },
    ],
  },
  {
    slug: "decorative-facade-cladding",
    title: "Decorative Facade Cladding",
    tagline: "Where beauty meets structure.",
    summary:
      "Durable metal cladding in aluminium/steel providing weather resistance, design flexibility, and varied profiles for unique facade expressions.",
    heroImage: DharHassan4,
    gallery: [
      { img: DharHassan4 },
      { img: DharHassan5 },
      { img: DharHassan7 },
      { img: DharHassan6 },
      { img: DharHassan4 },
    ],
    specification: [
      { title: "Materials", detail: "Aluminium / Steel" },
      { title: "Finishes", detail: "Powder coat / Paint / PVDF" },
      { title: "Profiles", detail: "Flat panels, shingles, corrugated" },
      {
        title: "Customization",
        detail: "Colour, texture, and profile options",
      },
    ],
    process: [
      { step: "01 Concept", detail: "Aesthetic direction and performance." },
      { step: "02 Detailing", detail: "Subframing, joints, and fixings." },
      { step: "03 Fabrication", detail: "Panel forming and coating." },
      { step: "04 Installation", detail: "Rainscreen and alignment checks." },
    ],
    faqs: [
      { q: "Rainscreen?", a: "Ventilated rainscreen assemblies supported." },
    ],
  },
  {
    slug: "decorative-canopy",
    title: "Canopy (Decorative Metal)",
    tagline: "Projecting form with protection and presence.",
    summary:
      "Aluminium or steel canopies providing weather protection with broad design freedom across shapes and finishes.",
    heroImage: DharHassan4,
    gallery: [
      { img: DharHassan4 },
      { img: DharHassan5 },
      { img: DharHassan7 },
      { img: DharHassan6 },
      { img: DharHassan4 },
    ],
    specification: [
      { title: "Materials", detail: "Aluminium / Steel" },
      { title: "Finishes", detail: "Paint / Powder coat / PVDF" },
      { title: "Design", detail: "Flat/curved, integrated drainage possible" },
      { title: "Fixings", detail: "Engineered brackets and anchors" },
    ],
    process: [
      { step: "01 Survey", detail: "Loads, spans, and fix points." },
      { step: "02 Detailing", detail: "Water management and joints." },
      { step: "03 Fabrication", detail: "Frames/skins, coating." },
      { step: "04 Installation", detail: "Bracketry and alignment checks." },
    ],
    faqs: [
      { q: "Lighting integration?", a: "Yes, provisions can be coordinated." },
    ],
  },
  {
    slug: "decorative-pergola",
    title: "Pergola (Decorative Metal)",
    tagline: "Shade and space with architectural clarity.",
    summary:
      "Open-roof frameworks in aluminium or steel that create outdoor living spaces and complement building facades.",
    heroImage: DharHassan4,
    gallery: [
      { img: DharHassan4 },
      { img: DharHassan5 },
      { img: DharHassan7 },
      { img: DharHassan6 },
      { img: DharHassan4 },
    ],
    specification: [
      { title: "Materials", detail: "Aluminium / Steel" },
      { title: "Finishes", detail: "Powder coat / Paint" },
      { title: "Customization", detail: "Size, shape, and finish to suit" },
      {
        title: "Integration",
        detail: "Screens, lighting, or greenery options",
      },
    ],
    process: [
      { step: "01 Concept", detail: "Use-cases and footprint definition." },
      { step: "02 Detailing", detail: "Connections and water shedding." },
      { step: "03 Fabrication", detail: "Members and coatings." },
      { step: "04 Installation", detail: "Anchorage and level checks." },
    ],
    faqs: [
      {
        q: "Freestanding?",
        a: "Both freestanding and facade-tied options available.",
      },
    ],
  },
  {
    slug: "decorative-architectural-louvers",
    title: "Architectural Louvers",
    tagline: "Ventilation and sun control with aesthetic order.",
    summary:
      "Horizontal/vertical slats to pass air/light while screening sun, reducing heat gain. Aluminium/steel systems with configurable spacing and angles.",
    heroImage: DharHassan4,
    gallery: [
      { img: DharHassan4 },
      { img: DharHassan5 },
      { img: DharHassan7 },
      { img: DharHassan6 },
      { img: DharHassan4 },
    ],
    specification: [
      { title: "Aluminium", detail: "Alloy 6063 extrusions" },
      { title: "Gaskets", detail: "Weather resistant EPDM" },
      { title: "Finishes", detail: "RAL powder coat / Wood finish / Anodised" },
      { title: "Blade Options", detail: "Z-blades / Aerofoil blades" },
      {
        title: "System Ranges",
        detail: "Jindal, Hindalco, Technal, Alumil etc.",
      },
    ],
    process: [
      { step: "01 Analysis", detail: "Airflow, shading, and visual targets." },
      { step: "02 Detailing", detail: "Blade spacing/angle and fixings." },
      { step: "03 Fabrication", detail: "Frames and blade assemblies." },
      { step: "04 Installation", detail: "Plumb, alignment, and fastening." },
    ],
    faqs: [
      {
        q: "Adjustable blades?",
        a: "Fixed and adjustable designs are possible based on spec.",
      },
    ],
  },
   {
    slug: "facade-design-consultancy-services",
    title: "Façade Design & Consultancy Services",
    tagline: "Ventilation and sun control with aesthetic order.",
    summary:
      "Our façade design and consultancy division provides end-to-end technical guidance — from concept to completion. We assist architects, consultants, and developers in achieving efficient, sustainable, and visually refined façade solutions through design optimization and performance-based analysis.",
    heroImage: DharHassan4,
    gallery: [
      { img: DharHassan4 },
      { img: DharHassan5 },
      { img: DharHassan7 },
      { img: DharHassan6 },
      { img: DharHassan4 },
    ],
    specification: [
      { title: "Aluminium", detail: "Alloy 6063 extrusions" },
      { title: "Gaskets", detail: "Weather resistant EPDM" },
      { title: "Finishes", detail: "RAL powder coat / Wood finish / Anodised" },
      { title: "Blade Options", detail: "Z-blades / Aerofoil blades" },
      {
        title: "System Ranges",
        detail: "Jindal, Hindalco, Technal, Alumil etc.",
      },
    ],
    process: [
      { step: "01 Analysis", detail: "Airflow, shading, and visual targets." },
      { step: "02 Detailing", detail: "Blade spacing/angle and fixings." },
      { step: "03 Fabrication", detail: "Frames and blade assemblies." },
      { step: "04 Installation", detail: "Plumb, alignment, and fastening." },
    ],
    faqs: [
      {
        q: "Adjustable blades?",
        a: "Fixed and adjustable designs are possible based on spec.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
