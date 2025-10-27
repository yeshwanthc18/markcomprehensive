export type Region = "Oman" | "India" | "Iraq" | "KSA" | "UAE";
export type PType =
  | "Highrise"
  | "Commercial"
  | "Residential"
  | "Institutional"
  | "Hospitality"
  | "Education"
  | "Corporate";
import AlMeera from "@/public/compressed-images/project-photos/AL MEERA HYPERMARKET/IMG_3730.jpg";
import Alila1 from "@/public/compressed-images/project-photos/ALILA/IMG-20200913-WA0012.jpg";
import Alila2 from "@/public/compressed-images/project-photos/ALILA/IMG-20200918-WA0043.jpg";
import Alila3 from "@/public/compressed-images/project-photos/ALILA/b37daaef-151a-470b-acea-35e2dda00e49.jpeg";
import Alila4 from "@/public/compressed-images/project-photos/ALILA/e18a39d7-60b7-41c8-979a-4dc0c2c5fec8.jpg";
import Almouj1 from "@/public/compressed-images/project-photos/ALMOUJ/IMG_3752.jpg";
import Almouj2 from "@/public/compressed-images/project-photos/ALMOUJ/IMG_3761.jpg";
import Almouj3 from "@/public/compressed-images/project-photos/ALMOUJ/IMG_3764.jpg";
import Almouj4 from "@/public/compressed-images/project-photos/ALMOUJ/IMG_3772.jpg";
import DharHassan1 from "@/public/compressed-images/project-photos/DHAR HASSAN VILLA/IMG_6470.jpg";
import DharHassan2 from "@/public/compressed-images/project-photos/DHAR HASSAN VILLA/IMG_6517.jpg";
import DharHassan3 from "@/public/compressed-images/project-photos/DHAR HASSAN VILLA/IMG_6542.jpg";
import DharHassan4 from "@/public/compressed-images/project-photos/DHAR HASSAN VILLA/IMG_6551.jpg";
import DharHassan5 from "@/public/compressed-images/project-photos/DHAR HASSAN VILLA/IMG_6608.jpg";
import DharHassan6 from "@/public/compressed-images/project-photos/DHAR HASSAN VILLA/IMG_6728.jpg";
import DharHassan7 from "@/public/compressed-images/project-photos/DHAR HASSAN VILLA/IMG_6750.jpg";

export type Project = {
  id: string;
  name: string;
  region: Region;
  type: PType;
  city: string;
  year: number;
  mainContractor?: string;
  images: { src: any; alt: string }[];
  description: string;
  client?: string;
  markScope?: string;
  area?: string;
  systemType?: string;
  architect?: string;
  glassType?: string;
  rooms?:string;
  sector?: string;
  outcome?: string;
  status: "Completed" | "In Progress" | "Planned";
  facadeDetails: {
    system?: string;
    material?: string;
    profileSystem?: string;
    finish?: string;
    mullionDepth?: string;
    transomDepth?: string;
    thermalBreak?: string;
    anchorage?: string;
    glassType?: string;
    sealing?: string;
    performance?: string[];
  };
  performanceHighlights?:
    | {
        daylightOptimisation?: string;
        thermalEfficiency?: string;
        coastalDurability: string;
        childSafeDesign?: string;
        aestheticContinuity?: string;
      }
    | string[];
  glassSpecification?: {
    parameter?: string;
    type?: string;
    buildUp?: string;
    coating?: string;
    uValue?: string;
    solarHeatGainCoefficient?: string;
    vlt?: string;
    colourTone?: string;
    acousticPerformance?: string;
  };
  scopeOfWork?: string;
  features: string[];
  challenges?: string | string[];
  solution?: string | string[];
};

export const ALL_REGIONS: Region[] = ["Oman", "India", "Iraq", "KSA", "UAE"];
export const ALL_TYPES: PType[] = [
  "Highrise",
  "Commercial",
  "Residential",
  "Institutional",
  "Hospitality",
  "Education",
  "Corporate",
];

export const PROJECTS: Project[] = [
  {
    id: "al-mouj-kindergarten",
    name: "Al Mouj Kindergarten",
    region: "Oman",
    type: "Education",
    city: "Muscat",
    year: 2020,
    status: "Completed",
    client: "Al Mouj Muscat SAOC",
    architect: "SSH Consultants",
    mainContractor: "Shaksy Engineering Services LLC",
    markScope: "Aluminium façade & glazing systems — design, supply, install",
    systemType: "Semi-unitised curtain wall + doors + windows + louvers",
    glassType: "6 + 12 + 6 Low-E Double Glazed Unit",
    area: "25,000 m²",
    sector: "Education / Community Infrastructure",

    description:
      "Part of the iconic Al Mouj Muscat waterfront community, the Al Mouj Kindergarten forms a key component of the master-planned Community Hub that also includes a mosque, sales centre, and public plaza.Developed by Al Mouj Muscat SAOC and designed by SSH Consultants, the Kindergarten brings together modern learning environments, sustainable materials, and a contemporary façade aesthetic that aligns with the masterplan’s architectural vocabulary. Located along Oman’s coastline, the structure demanded façade systems engineered for high solar exposure, saline air, and coastal humidity — while maintaining child-safe daylighting and aesthetic softness.",
    images: [
      {
        src: AlMeera,
        alt: "Al Mouj Kindergarten",
      },
      {
        src: AlMeera,
        alt: "Al Mouj Kindergarten",
      },
    ],
    scopeOfWork:
      "Mark Aluminium was appointed for the complete aluminium façade and glazing package, covering design detailing, fabrication, supply, and installation.The scope included",
    features: [
      "Unitised curtain wall and aluminium window systems",
      "Aluminium doors and skylight framing",
      "Fixed and operable louvres for classroom ventilation",
      "Interior aluminium-framed partitions and safety glazing",
      "Coordination with structural and waterproofing systems",
      "Final QA/QC testing, documentation, and hand-over",
    ],
    facadeDetails: {
      system: "Semi-unitised curtain wall with aluminium framing",
      material: "",
      profileSystem:
        "Custom system equivalent to Schüco / Reynaers CW-50 standards",
      finish: "Polyester powder-coated, RAL 7016 (Anthracite Grey), 60 microns",
      glassType: "Low-E Double Glazed Units (24mm)",
      performance: ["U-Value: 1.5 W/m²K", "SHGC: 0.27", "Daylight Factor: 65%"],
      mullionDepth: "~150 mm",
      transomDepth: "~100 mm",
      thermalBreak: "Polyamide strip with EPDM gaskets",
      anchorage:
        "Mechanical fixing to RC frame via SS brackets (AISI 316 grade)",
      sealing: "Two-stage silicone with structural glazing sealant",
    },
    performanceHighlights: {
      daylightOptimisation:
        "The DGU façade maximises daylight penetration, reducing artificial lighting requirements in classrooms.",
      thermalEfficiency:
        "Low-E coating and thermal-break framing mitigate solar heat gain, improving comfort and reducing HVAC load.",
      coastalDurability:
        "All aluminium components use corrosion-resistant finishes suited to Muscat’s marine environment.",
      childSafeDesign:
        "Toughened inner panes and smooth edge finishes meet educational-facility safety codes.",

      aestheticContinuity:
        "The façade blends harmoniously with the Hub’s contemporary architecture through consistent line geometry and soft neutral tones.",
    },
    glassSpecification: {
      type: "Double Glazed Unit (DGU)",
      buildUp: "6 mm clear + 12 mm argon cavity + 6 mm Low-E coated",
      coating: "Saint-Gobain SKN 144 / Guardian SunGuard SN 70 (or equivalent)",
      uValue: "≈ 1.6 W/m²K",
      solarHeatGainCoefficient: "≈ 0.27",
      vlt: "≈ 49 %",
      colourTone: "Neutral Blue / Clear Silver Low-E",
      acousticPerformance: "35–38 dB Rw (typical for DGU assemblies)",
    },

    challenges: "Marine Exposure, High Solar Load, Tight Timeline",
    solution:
      "To prevent corrosion, Mark used AISI 316 SS fixings and applied multi-layer powder-coating with salt-spray resistance > 1,000 hours.South-facing façades integrated horizontal shading fins to cut direct radiation by ≈ 40 %. Modular fabrication at Mark’s Muscat facility allowed phased deliveries and reduced installation time by 20 %.",
  },
  {
    id: "downe-house-muscat",
    name: "Downe House Muscat",
    region: "Oman",
    type: "Education",
    city: "Seeb (Al Bandar), Muscat",
    year: 2022,
    status: "Completed",
    client:
      "Oman Ministry of Defence Pension Fund (franchise with Downe House School)",
    architect: "(To be confirmed)",
    mainContractor: "(To be confirmed)",
    markScope: "Aluminium façade & glazing systems – design, supply, install",
    systemType:
      "Unitised curtain wall + aluminium doors/windows + sun-shade louvres",
    glassType: "Double glazed Low-E assembly (6 + 12 + 6)",
    area: "41,000 m²",
    sector: "Education – International premium all-girls campus",

    description:
      "Downe House Muscat is a purpose-built, premium British all-girls school campus located in Seeb (Al Bandar), Muscat, Oman. Developed under a franchise agreement between the UK-based Downe House School and the Oman Ministry of Defence Pension Fund, the campus opened in September 2022 and spans approximately 41,000 m² of built-area. The school features state-of-the-art educational buildings including STEM, Arts & Design, Performing Arts and Sports facilities, conforming to global standards of learning and built environment. ",
    images: [
      {
        src: AlMeera,
        alt: "Downe House Muscat",
      },
      {
        src: AlMeera,
        alt: "Downe House Muscat",
      },
    ],
    scopeOfWork:
      "Mark Aluminium was engaged to supply and install the architectural aluminium façade and glazing systems for the main buildings on campus. The scope included",
    features: [
      "Design, fabrication and installation of aluminium curtain-wall / glazed façades for façade elevations of the academic blocks, library, performing arts centre and sports academy.",
      "Aluminium-framed doors and windows systems for classrooms, labs and ancillary areas.",
      "Interior aluminium partition glazing and safety doors in key circulation and atrium zones.",
      "Provision of aluminium sun-shade louvres and façade fins to control sunlight in Muscat’s intense climate.",
      "Full coordination with the main contractor, consultant engineer and MEP/structural trades for façade interface, waterproofing and structural fixings.",
      "Performance testing (mock-up, air/water infiltration, acoustics) and hand-over documentation per project standards.",
    ],
    facadeDetails: {
      system:
        "Unitised or Semi-unitised aluminium curtain-wall system across primary elevations",
      material: "",
      profileSystem:
        "Equivalent to premium façade systems (e.g., Schüco / Reynaers class) customised for campus aesthetic",
      finish:
        "Powder-coated aluminium, Colour RAL 7016 (Anthracite) or similar dark-tone finish to align with modern architectural language",
      // glassType: "Low-E Double Glazed Units (24mm)",
      // performance: ["U-Value: 1.5 W/m²K", "SHGC: 0.27", "Daylight Factor: 65%"],
      mullionDepth: "Approx. 150 mm (typical)",
      transomDepth: "Approx. 100 mm (typical)",
      thermalBreak:
        "Polyamide thermal-isolation strip incorporated inside aluminium profiles",
      anchorage:
        "Stainless-steel brackets (AISI 316) embedded in structural frame, with drainage/relief design suitable for coastal conditions)",
      // sealing: "Two-stage silicone with structural glazing sealant",
    },
    performanceHighlights: {
      daylightOptimisation:
        "The façade design emphasises daylight optimisation to enhance learning spaces while controlling glare and solar heat gain — especially critical in Muscat’s climate",
      thermalEfficiency:
        "Aluminium sun-shade fins/louvres provide passive solar shading on south- and west-facing elevations, contributing to reduced HVAC load and improved thermal comfort.",
      coastalDurability:
        "Powder-coated aluminium profiles and marine-grade fixings ensure durability and lifespan in the coastal, salt-laden environment of Muscat.",
      childSafeDesign:
        "Interior aluminium-framed glazed partitions foster visual connectivity, safety and transparency in the educational environment, aligning with the school’s “inspiring learning” ethos.",

      aestheticContinuity:
        "The façade blends harmoniously with the Hub’s contemporary architecture through consistent line geometry and soft neutral tones.",
    },
    glassSpecification: {
      type: "Double Glazed Unit (DGU) – 6 mm clear + 12 mm argon cavity + 6 mm Low-E laminated/toughened glass",
      buildUp: "6 mm clear + 12 mm argon cavity + 6 mm Low-E coated",
      coating:
        "Coating	Low-E coating (e.g., neutral or slight tint) for solar performance",
      uValue: "~1.6 W/m²K (assumed)",
      solarHeatGainCoefficient: "SHGC	~0.27 (assumed)",
      vlt: "~48-52% (assumed)",
      colourTone:
        "Neutral-clear or slightly blue/grey tint, maintaining educational environment daylight quality",
      acousticPerformance: "Approx. 35 – 38 dB Rw (typical)",
    },

    challenges:
      "Coastal Exposure & Corrosion Risk, Complex Architectural Geometry, Tight Programme & Academic Fit-out Needs",
    solution: [
      "To address high humidity and salt spray, Mark Aluminium applied a 60-micron polyester powder-coat finish and used AISI 316 stainless fixings, enhancing longevity and appearance.",
      "The campus features multiple interconnected buildings and large spans (e.g., performing arts centre). Modularised façade units were fabricated off-site to manage installation speed and ensure quality.",
      "Close coordination with the school’s operational schedule meant Mark’s team worked phasing façade installation around interior fit-out, minimising disruption and aligning with the opening timeline.",
    ],
  },
  {
    id: "rural-areas-electricity-company",
    name: "Rural Areas Electricity Company HQ",
    region: "Oman",
    type: "Corporate",
    city: "Ghala, Muscat",
    year: 2022,
    status: "Completed",
    client: "Rural Areas Electricity Company (RAEC)",
    architect: "(To be confirmed)",
    mainContractor: "(To be confirmed)",
    markScope:
      "Mark’s Scope	Aluminium façade & glazing systems – design, supply, install",
    systemType:
      "Semi-unitised/unitised curtain-wall + aluminium doors/windows + sun-shade louvres",
    glassType: "Double glazed Low-E assembly (assumed: 6 + 12 + 6)",
    area: "18,000 m²",
    sector: "Corporate / Institutional HQ",

    description:
      "The Head Office building of the Rural Areas Electricity Company (RAEC) in Ghala, Muscat covers approximately 18,000 m² of built-up area. linesandvisions.comThis landmark office facility serves as the central administrative hub for RAEC’s operations across Oman’s rural electricity network.Located in Ghala, Muscat, the project demanded high quality architecture that reflects both corporate identity and durable building envelope performance in a coastal, high-solar-radiation environment.",
    images: [
      {
        src: AlMeera,
        alt: "Rural Areas Electricity Company HQ",
      },
      {
        src: AlMeera,
        alt: "Rural Areas Electricity Company HQ",
      },
    ],
    scopeOfWork:
      "Mark Aluminium was commissioned to deliver the full aluminium façade and glazing package for the RAEC HQ, including",
    features: [
      "Design & supply of the aluminium curtain-wall façade system for the main elevation.",
      "Aluminium framed windows and doors for office zones and common areas.",
      "Interior architectural aluminium glazed partitions and entrance framing.",
      "Custom aluminium sun-shade louvres and fins to control glare and solar gain.",
      "Coordination with main contractor, structural works, MEP penetrations and waterproofing systems.",
      "Final QA/QC, hand-over documentation and maintenance support.",
    ],
    facadeDetails: {
      system:
        "Semi-unitised / Unitised aluminium curtain-wall system across main façade",
      material: "",
      profileSystem:
        "Equivalent to high-performance systems (e.g., Schüco / Reynaers class) customised for the project specification",
      finish:
        "Polyester powder-coated aluminium, likely RAL 7016 (Anthracite) or similar dark-toned finish, 60 microns",
      // glassType: "Low-E Double Glazed Units (24mm)",
      // performance: ["U-Value: 1.5 W/m²K", "SHGC: 0.27", "Daylight Factor: 65%"],
      mullionDepth: "Approx. 150 mm (typical)",
      transomDepth: "Approx. 100 mm (typical)",
      thermalBreak: "Polyamide thermal-break within aluminium profiles",
      anchorage:
        "Stainless-steel brackets (AISI 316) embedded in structural frame, with drainage/relief design suitable for coastal conditions)",
      // sealing: "Two-stage silicone with structural glazing sealant",
    },
    performanceHighlights: [
      "The curtain-wall façade provides a modern corporate aesthetic while integrating high daylight ingress into the workspace, enhancing occupant experience.",
      "Sun-shade louvres and aluminium fins mitigate direct solar gain, essential for Muscat’s hot, high-insolation climate.",
      "Aluminium profiles and coatings are specified for durability in a coastal environment (salt spray, humidity) ensuring long term asset value.",
      "Interior aluminium glazed partitions deliver visual connectivity, transparency and a premium finish aligned with the HQ’s brand image.",
    ],

    glassSpecification: {
      type: "Double Glazed Unit (DGU)",
      buildUp:
        "Build-Up	6 mm clear + 12 mm argon cavity + 6 mm Low-E coated glass (assumed)",
      coating: "Low-E neutral/clear coating for solar control",
      uValue: "Approx. 1.6 W/m²K (assumed)",
      solarHeatGainCoefficient:
        "Solar Heat Gain Coefficient (SHGC)	Approx. 0.27 (assumed)",
      vlt: "Approx. 48-52% (assumed)",
      colourTone:
        "Neutral clear or slight tinted/blue-grey to match corporate aesthetic",
      // acousticPerformance: "Approx. 35 – 38 dB Rw (typical)",
    },

    challenges:
      "Coastal & Wind Exposure,	Corporate Brand Requirement, Integration with Services",
    solution: [
      "Given Ghala’s coastal setting, the façade system was engineered for enhanced corrosion resistance (selecting powder-coat finishes certified for salt-spray exposure) and high wind-load compliance.",
      "The façade aesthetic needed to align with RAEC’s corporate identity—Mark Aluminium coordinated closely on finish selection, colour matching and visual impression.",
      "The building’s administrative function meant heavy integration of MEP (data, communications) and structural interface—Mark Aluminium’s design and installation teams managed coordination for penetrations, fire-stop, façade access and maintenance pathways.",
    ],
  },
  {
    id: "qatar-airways-office-building",
    name: "Qatar Airways Office Building",
    region: "Oman",
    type: "Corporate",
    city: "Ghala Hills (Plot 419, Exhibition Street), Muscat, Sultanate of Oman",
    year: 2019,
    status: "Completed",
    client: "Qatar Airways",
    architect: "(To be confirmed)",
    mainContractor: "(To be confirmed)",
    markScope: "Aluminium façade & glazing systems – design, supply, install",
    systemType:
      "Unitised/semi-unitised curtain wall + aluminium doors/windows + sun-shade louvres",
    glassType: "Double-glazed Low-E unit (assumed: 6 + 12 + 6)",
    area: "18,000 m²",
    sector: "Corporate Office / Aviation HQ",

    description:
      "Located along Sultan Qaboos Highway in the Ghala commercial corridor of Muscat, the Qatar Airways office building (Plot No. 419, Exhibition Street, Ghala Hills) serves as a prominent corporate landmark for Qatar Airways’ Oman operations. The building is strategically positioned near major infrastructure and reflects a modern architectural definition aligned with the airline’s global brand identity.",
    images: [
      {
        src: AlMeera,
        alt: "Qatar Airways Office Building",
      },
      {
        src: AlMeera,
        alt: "Qatar Airways Office Building",
      },
    ],
    scopeOfWork:
      "Mark Aluminium was engaged for the turnkey aluminium façade and architectural glazing package of the building, with scope including",
    features: [
      "Design, supply, fabrication and installation of the aluminium curtain-wall façade for the primary elevations.",
      "Aluminium framed doors, windows and storefront systems for the ground and upper floors.",
      "Internal aluminium partition glazing and entrance lobby feature glazing.",
      "Sun-shade louvre and fin systems integrated into the façade design to address Muscat’s sun-load.",
      "Coordination with main contractor, structural interface, MEP penetrations and façade waterproofing.",
      "Mock-up, QA/QC testing, commissioning and handover documentation.",
    ],
    facadeDetails: {
      system: "Unitised/semi-unitised curtain wall with aluminium framing",
      material: "",
      profileSystem:
        "High‐performance façade system (equivalent to premium global brands)",
      finish:
        "Polyester powder-coated aluminium, Colour: RAL 7016 (Anthracite) or equivalent, 60 µm thickness",
      // glassType: "Low-E Double Glazed Units (24mm)",
      // performance: ["U-Value: 1.5 W/m²K", "SHGC: 0.27", "Daylight Factor: 65%"],
      mullionDepth: "Approx. 150 mm typical",
      transomDepth: "Approx. 100 mm typical",
      thermalBreak:
        "Polyamide thermal insulation strips within aluminium profiles",
      anchorage:
        "Stainless-steel fixings (AISI 316) suited for coastal environment",
      // sealing: "Two-stage silicone with structural glazing sealant",
    },
    performanceHighlights: [
      "The façade design emphasises daylight ingress while mitigating solar heat gain, optimizing occupant comfort in Muscat’s hot climate.",
      "Integrated sun-shading fins/louvres on sun-exposed façades help reduce HVAC load and control glare, demonstrating Mark Aluminium’s expertise in performance-façade solutions.",
      "Use of premium corrosion-resistant aluminium finishes and marine-grade fixings ensures durability in the coastal environment aligning with the high-spec corporate nature of the building.",
      "The high-quality aluminium and glazing systems enhance the prestige of the Qatar Airways brand within Oman.",
    ],

    glassSpecification: {
      type: "Double-Glazed Unit (DGU) – 6 mm clear + 12 mm argon cavity + 6 mm Low-E coated glass",
      buildUp:
        "Build-Up	6 mm clear + 12 mm argon cavity + 6 mm Low-E coated glass (assumed)",
      coating: "Low-E neutral/clear for solar control",
      uValue: "Approx. 1.6 W/m²K",
      solarHeatGainCoefficient: "Approx. 0.27",
      vlt: "Approx. 48-52%",
      colourTone:
        "Neutral clear or slight blue/grey tint to maintain corporate aesthetic",
      acousticPerformance: "Approx. 35-38 dB Rw (typical performance level)",
    },

    challenges:
      "High Solar & Coastal Load,	Corporate Branding & Quality Expectation, Site Access & Construction Phasing",
    solution: [
      "Muscat’s climate implies intense solar radiation and salt-laden air; Mark Aluminium responded by specifying high-performance Low-E glazing and corrosion-resistant finishes.",
      "As a flagship corporate office, the façade demanded premium finishes, strict tolerances, and brand-aligning aesthetic detail — Mark Aluminium delivered a superior finish and tight quality control.",
      "Given its prominent highway-facing location, façade installation required careful logistics and modular fabrication to minimise disruption and ensure timely delivery.",
    ],
  },
  {
    id: "the-pearl-muscat",
    name: "The Pearl Muscat",
    region: "Oman",
    type: "Residential",
    city: "Muscat Hills, Seeb",
    year: 2019,
    status: "Completed",
    client: "Developer	Al Osool Properties (MJS Group)",
    architect: "Nadan Engineering Consultants LLC",
    mainContractor: "Atlantic Construction LLC",
    markScope: "Aluminium façade & glazing systems – design, supply, install",
    systemType:
      "System Type	Semi-unitised curtain‐wall + aluminium windows/doors + architectural fins",
    glassType: "Glass Type	Double glazed Low-E unit (assumed: 6 + 12 + 6)",
    area: "Approx. 48,000 m²",
    sector: "Residential / Mixed-use luxury apartments",

    description:
      "The Pearl Muscat is a high-end residential & mixed-use development by Al Osool Properties (MJS Group) located in the Muscat Hills area of Seeb, Muscat.The project comprises two basement levels for parking, ground floor retail (37 shops) and approximately six typical floors plus a penthouse level, spanning an approximate built-up area of ~48,000 m². It is marketed as an ITC (Investment & Trade Category) free-hold project for non-Omanis, emphasising premium finishes, amenities (swimming pools, garden play area, jogging track) and strategic location near Muscat International Airport.  ",
    images: [
      {
        src: AlMeera,
        alt: "The Pearl Muscat",
      },
      {
        src: AlMeera,
        alt: "The Pearl Muscat",
      },
    ],
    scopeOfWork:
      "Mark Aluminium was engaged to deliver the architectural aluminium façade and glazing works for the Pearl Muscat development. The scope included",
    features: [
      "Supply, fabrication and installation of aluminium façade systems for the residential tower elevations and podium commercial frontage.",
      "Aluminium framed windows and doors across apartments and retail frontage.",
      "Internal aluminium framed glazed partitions in selected common areas (lobbies, amenity zones).",
      "Custom aluminium architectural fins / sun-shade elements to modulate sunlight and align with high-end aesthetic demands.",
      "Coordination with main contractor (Atlantic Construction LLC) and consultant (Nadan Engineering Consultants LLC) for structural fixings, waterproofing, and facade integration. ",
      "Quality assurance / commissioning, warranty hand-over, and maintenance support aligned with Mark Aluminium’s standards.",
    ],
    facadeDetails: {
      system: "Semi-unitised curtain wall + aluminium window & door systems",

      profileSystem:
        "High-performance aluminium façade system (equivalent to premium global standard) customised for the project",
      finish:
        "Polyester powder-coated aluminium, Colour RAL 7016 (Anthracite) or similar; 60-micron thickness",
      // glassType: "Low-E Double Glazed Units (24mm)",
      // performance: ["U-Value: 1.5 W/m²K", "SHGC: 0.27", "Daylight Factor: 65%"],
      mullionDepth: "Approx. 150 mm",
      transomDepth: "Approx. 100 mm",
      thermalBreak: "Polyamide strip thermal-break within aluminium profiles",
      anchorage:
        "Anchorage & Fixings	Stainless steel (AISI 316) brackets and fixings suited to salt-air coastal environment",
      // sealing: "Two-stage silicone with structural glazing sealant",
    },
    performanceHighlights: [
      "The façade design balances luxury residential appeal with high performance: large glazed areas for daylighting and views, combined with sun-control via aluminium fins and shading devices.",
      "Premium finishes and detailing align with the high-end nature of The Pearl Muscat, catering to expatriate investors (ITC category) and discerning residents.",
      "In Muscat Hills’ coastal setting, aluminium systems with corrosion-resistant finishes and robust anchorage ensure long-term maintenance-friendly performance.",
      "Internal glazed partitions in amenity areas create a sense of openness, transparency and modern lifestyle ambience, enhancing the resident experience.",
    ],

    glassSpecification: {
      type: "Double Glazed Unit (DGU)",
      buildUp: "6 mm clear + 12 mm argon cavity + 6 mm Low-E glass",
      coating: "Coating	Low-E neutral/clear for solar control",
      uValue: "Approx. 1.6 W/m²K",
      solarHeatGainCoefficient: "Approx. 0.27",
      vlt: "Approx. 48-52%",
      colourTone:
        "Tint / Colour	Neutral clear or slight blue/grey tint to suit premium residential aesthetic",
      // acousticPerformance: "Approx. 35-38 dB Rw (typical performance level)",
    },
    outcome:
      "The Pearl Muscat stands out as a premium residential landmark in Muscat Hills, delivering high-spec architecture, luxury living amenities and quality façade execution. For Mark Aluminium, the project strengthens its portfolio in the Oman residential sector, showcasing capability in high-end aluminium/glazing systems for investor-driven developments. This reference adds credibility as Mark targets its Indian expansion into luxury residential and mixed-use segments in Karnataka & Kerala.",
    challenges:
      "High coastal exposure & salt atmosphere,	Mixed retail & residential interfaces, Investor-market aesthetic demands",
    solution: [
      "Mark Aluminium specified powder-coated aluminium with high salt-spray resistance and stainless steel fixings to ensure durability.",
      "The podium retail façade required large spans and integration of storefront glazing which was modularised for faster onsite assembly, reducing disturbance to residential deliveries.",
      "With the ITC freehold positioning, the façade had to reflect a premium look and finish; Mark Aluminium’s shop-drawing coordination and finishing controls ensured consistent high quality across all units.",
    ],
  },
    {
    id: "al-mouj-rayhaan-by-rotana",
    name: "Al Mouj Rayhaan by Rotana",
    region: "Oman",
    type: "Hospitality",
    city: "Al Mouj Muscat, Sultanate of Oman",
    year: 2019,
    status: "Completed",
    client: "Golden Group Holding (management by Rayhaan by Rotana)",
    architect: "Nadan Engineering Consultants LLC",
    mainContractor: "Atlantic Construction LLC",
    markScope: "Aluminium façade & glazing systems – design, supply, install",
    systemType:
      "Semi-unitised/unitised curtain wall + aluminium doors/windows + sun-shade fins",
    glassType: "Double glazed Low-E assembly (assumed: 6 + 12 + 6)",
    area: "Approx. 48,000 m²",
    rooms:"~250 (rooms, suites & apartments)",
    sector: "Hospitality – resort/hotel / waterfront leisure",

    description:
      "Located within the premium waterfront Al Mouj Muscat master-development, this four-star hotel by the hospitality group Rayhaan by Rotana (in partnership with Golden Group Holding) is a 250-room plus resort property designed to serve leisure and business guests in a high-value coastal environment.Set within a 6-km stretch of Muscat’s coastline, the location demands premium finishes, robust performance and distinctive architecture.",
    images: [
      {
        src: AlMeera,
        alt: "Al Mouj Rayhaan by Rotana",
      },
      {
        src: AlMeera,
        alt: "Al Mouj Rayhaan by Rotana",
      },
    ],
    scopeOfWork:
      "Mark Aluminium was appointed to provide turnkey architectural aluminium and glazing systems for the hotel, including",
    features: [
      "Design, supply, fabrication and installation of aluminium façade systems (curtain-wall, glazing façades) for the hotel’s frontage and amenity wings.",
      "Aluminium framed doors, windows and storefront systems for guest-rooms, F&B outlets and lobby zones.",
      "Internal architectural aluminium glazing partitions (e.g., in lobby, dining, meeting areas).",
      "Custom aluminium sun-shade elements and fins adapted to the coastal, high-solar-load environment.",
      "Coordination with main contractor, façade consultants, structural works and MEP interfaces.",
      "Quality assurance, mock-up testing, on-site performance verification and final hand-over documentation.",
    ],
    facadeDetails: {
      system: "Semi-unitised / unitised aluminium curtain-wall system across primary elevations",

      profileSystem:
        "High-performance aluminium façade system (equivalent global standard) tailored for the project",
      finish:
        "Polyester powder-coated aluminium, RAL 7016 (Anthracite) or equivalent dark tone; thickness ~60 µm",
      // glassType: "Low-E Double Glazed Units (24mm)",
      // performance: ["U-Value: 1.5 W/m²K", "SHGC: 0.27", "Daylight Factor: 65%"],
      mullionDepth: "Approx. 150 mm",
      transomDepth: "Approx. 100 mm",
      thermalBreak: "Polyamide/thermally-isolated aluminium section",
      anchorage:
        "AISI 316 stainless steel brackets and fixings designed for coastal environment",
      // sealing: "Two-stage silicone with structural glazing sealant",
    },
    performanceHighlights: [
      "Designed to deliver luxury hotel ambience while optimising daylighting and views over the waterfront, integrated with high-performance façade systems.",
      "Sun-control via aluminium fins and shading devices: critical in Muscat’s intense solar-radiation and coastal climate environment.",
      "Durable finishes and high-quality aluminium systems suited for salt-laden air and humid conditions—maintaining asset-value and minimal maintenance.",
      "The façade package supports the hotel’s positioning as a high-spec hospitality asset within the Al Mouj masterplan.",
    ],

    glassSpecification: {
      type: "Double Glazed Unit (DGU) – e.g., 6 mm clear + 12 mm argon cavity + 6 mm Low-E",
      // buildUp: "6 mm clear + 12 mm argon cavity + 6 mm Low-E glass",
      coating: "Coating	Low-E neutral/clear for solar control",
      uValue: "~1.6 W/m²K",
      solarHeatGainCoefficient: "~0.27",
      vlt: "~48-52%",
      colourTone:
        "Tint / Colour	Neutral clear / slight blue-grey to suit hotel premium aesthetic",
      // acousticPerformance: "Approx. 35-38 dB Rw (typical performance level)",
    },
    challenges:
      "Coastal exposure & salt corrosion risk,	High-level aesthetic and quality demands, Integration with complex hotel spaces",
    solution: [
      "Mark Aluminium specified premium powder-coated aluminium with salt-spray certification, and stainless-steel fixings to enhance durability.",
      "As a resort/hospitality project, finishes, tolerances and visual impression were key — Mark Aluminium’s shop drawings and quality control addressed this.",
      "Large spans, double-height lobbies and varied façade zones (guest rooms, F&B, retail) required modularisation and precise coordination to maintain schedule and performance.",
    ],
  },
    {
    id: "juman",
    name: "Juman – residential waterfront apartments (Juman One, Juman Two)",
    region: "Oman",
    type: "Residential",
    city: "Marina / Ocean-front zone, Al Mouj Muscat, Sultanate of Oman",
    year: 2019,
    status: "Completed",
    client: "Al Mouj Muscat SAOC",
    architect: "Nadan Engineering Consultants LLC",
    mainContractor: "Atlantic Construction LLC",
    markScope: "Aluminium façade & glazing systems – design, supply, install",
    systemType:
      "Semi-unitised curtain‐wall + aluminium window/door systems + architectural aluminium elements",
    glassType: "Double glazed Low-E assembly (assumed: 6+12+6)",
    area: "Approx. 48,000 m²",
    rooms:"~250 (rooms, suites & apartments)",
    sector: "Luxury residential – waterfront apartments",

    description:
      "Juman is a premium waterfront residential development nestled within the larger Al Mouj Muscat master-plan in Muscat, Oman. The project consists of iconic apartment buildings offering 1- and 2-bed units (e.g., Juman Two: 76 one-bed + 76 two-bed apartments) around landscaped gardens and pool decks overlooking the marina. Designed to capture resort-style living with high-end finishes, waterfront views and elevated amenity spaces, it presents a strong architectural and market-statement.",
    images: [
      {
        src: AlMeera,
        alt: "Juman",
      },
      {
        src: AlMeera,
        alt: "Juman",
      },
    ],
    scopeOfWork:
      "Mark Aluminium was engaged to deliver the architectural aluminium/façade works for the Juman development, including",
    features: [
      "Design, fabrication, supply and installation of aluminium façade systems for the residential blocks, including large glazed windows and balcony doors.",
      "Aluminium framed doors/windows systems for apartments, and glazed façade segments facing the marina.",
      "Internal aluminium partition glazing (in lobby zones or common amenity areas) and architectural aluminium frames for terrace glazing units.",
      "Custom aluminium architectural elements (sun-shade fins, louvers or slatted aluminium screens) integrated into the façade design to manage solar load and add visual texture.",
      "Coordination with main contractor, façade consultant, structural interface and MEP for penetrations, waterproofing, and approved finishes.",
    ],
    facadeDetails: {
      system: "Semi-unitised / stick-type aluminium curtain-wall + window/door systems",

      profileSystem:
        "Profile System	Equivalent to premium façade systems (e.g., Schüco / Reynaers class) customised for project aesthetic",
      finish:
        "Finish	Polyester powder-coated aluminium, likely colour RAL 7016 (Anthracite) or similar; approx. 60 µm thickness",
      // glassType: "Low-E Double Glazed Units (24mm)",
      // performance: ["U-Value: 1.5 W/m²K", "SHGC: 0.27", "Daylight Factor: 65%"],
      mullionDepth: "Approx. 150 mm",
      transomDepth: "Approx. 100 mm",
      thermalBreak: "Polyamide thermal-break within aluminium profiles",
      anchorage:
        "Stainless steel (AISI 316) fixings for corrosion resistance (given waterfront environment)",
      // sealing: "Two-stage silicone with structural glazing sealant",
    },
    performanceHighlights: [
      "Designed to maximise daylight and capture marina or water views, while managing solar heat gain via large glazed surfaces and shading elements. For example, the design of Juman Two emphasises “lofty ceilings … large glass windows that open directly onto the grounds”. ",
      "Aluminium architectural elements (slatted screens/fins) provide both visual elegance and functional shading – appropriate for Muscat’s high solar-radiation context.",
      "Premium finishes and durable materials cater to the luxury residential positioning of the project, with implied robustness for the coastal environment.",
      "Internal aluminium-framed glazing partitions contribute to high-quality amenity-space architecture (e.g., lobby, lounge, gym) aligning with the resort-style living concept.",
    ],

    glassSpecification: {
      type: "Type	Double Glazed Unit (DGU) – e.g., 6 mm clear + 12 mm argon cavity + 6 mm Low-E coated glass",
      // buildUp: "6 mm clear + 12 mm argon cavity + 6 mm Low-E glass",
      coating: "Low-E neutral/clear for solar control",
      uValue: "Approx. 1.6 W/m²K",
      solarHeatGainCoefficient: "Approx. 0.25-0.30",
      vlt: "Approx. 48-52%",
      colourTone:
        "Tint / Colour	Neutral clear or slight blue/grey tint to suit high-end residential aesthetic",
      // acousticPerformance: "Approx. 35-38 dB Rw (typical performance level)",
    },
    challenges:
      "High coastal exposure & salt-laden environment,	Large glazed spans with thermal/solar load,	Luxury aesthetic consistency",
    solution: [
      "To mitigate corrosion and durability concerns, specify powder-coated aluminium finishes with high salt-spray rating, and marine-grade stainless fixings.",
      "The combination of expansive glazing and high solar exposure means high-performance glass and thermal-break framing are critical; Mark Aluminium’s assumed façade system addresses this.",
      "For a high-end residential brand like Juman, uniform finish quality, tight tolerances in glazing appearance, and seamless integration of architectural aluminium elements are key – Mark’s approach would emphasize shop-drawing & QA process to maintain standard.",
    ],
  },
  {
    id: "al-meera-hypermarket",
    name: "Al Meera Hypermarket",
    region: "Oman",
    type: "Commercial",
    city: "Muscat",
    year: 2024,
    status: "Completed",
    client: "Al Meera Group",
    area: "25,000 m²",
    description:
      "A modern hypermarket featuring a high-efficiency stick curtain wall system with shading fins and insulated roof glazing. Designed to maximize daylight and reduce energy consumption while maintaining a comfortable shopping experience.",
    images: [
      {
        src: AlMeera,
        alt: "Al Meera Hypermarket facade",
      },
      {
        src: AlMeera,
        alt: "Al Meera Hypermarket facade",
      },
    ],
    facadeDetails: {
      system: "Stick Curtain Wall with Shading Fins",
      material: "Anodized Aluminum & Insulated Glass Units",
      profileSystem: "Anodized Aluminum & Insulated Glass Units",
      glassType: "Low-E Double Glazed Units (24mm)",
      performance: ["U-Value: 1.5 W/m²K", "SHGC: 0.27", "Daylight Factor: 65%"],
    },
    features: [
      "Energy-efficient façade design",
      "External shading fins for solar control",
      "Integrated signage bands",
      "Thermally broken profiles",
      "High-visibility storefront glazing",
    ],
    challenges:
      "Balancing energy efficiency and visibility for retail display areas.",
    solution:
      "Used high-transmission glass with selective coatings and integrated aluminum shading fins for optimal daylight control.",
  },

  {
    id: "alila-hotel",
    name: "Alila",
    region: "Oman",
    type: "Hospitality",
    city: "Jabal Akhdar",
    year: 2023,
    status: "Completed",
    client: "Alila Hotels & Resorts",
    area: "30,000 m²",
    description:
      "A mountain resort blending natural stone architecture with contemporary façade systems, emphasizing sustainability and harmony with the surrounding landscape.",
    images: [
      {
        src: Alila1,
        alt: "Alila Hotel facade at sunset",
      },
      {
        src: Alila2,
        alt: "Alila Hotel facade at sunset",
      },
      {
        src: Alila3,
        alt: "Alila Hotel facade at sunset",
      },
      {
        src: Alila4,
        alt: "Alila Hotel facade at sunset",
      },
    ],
    facadeDetails: {
      system: "Stone Cladding with Integrated Aluminum Glazing",
      profileSystem: "Anodized Aluminum & Insulated Glass Units",
      material: "Omani Stone & Thermal Aluminum Frames",
      performance: ["Thermal Resistance: 0.35 m²K/W", "Wind Load: 1.8 kPa"],
    },
    features: [
      "Locally sourced stone cladding",
      "Recessed glazing for thermal comfort",
      "Natural ventilation courtyards",
      "Custom wooden shading screens",
      "LEED Silver certified materials",
    ],
    challenges: "Harsh mountain climate with large temperature variation.",
    solution:
      "Stone façade with deep recesses minimizes heat gain and enhances insulation performance.",
  },
  {
    id: "almouj",
    name: "Al Mouj Development",
    region: "Oman",
    type: "Residential",
    city: "Muscat",
    year: 2024,
    status: "In Progress",
    client: "The Wave Muscat",
    area: "50,000 m²",
    description:
      "A waterfront mixed-use development with contemporary glass façades and aluminum shading systems offering luxurious coastal living.",
    images: [
      {
        src: Almouj1,
        alt: "Al Mouj waterfront residences",
      },
      {
        src: Almouj2,
        alt: "Al Mouj waterfront residences",
      },
      {
        src: Almouj3,
        alt: "Al Mouj waterfront residences",
      },
      {
        src: Almouj4,
        alt: "Al Mouj waterfront residences",
      },
    ],
    facadeDetails: {
      system: "Unitized Curtain Wall & Window Wall System",
      profileSystem: "Anodized Aluminum & Insulated Glass Units",
      material: "Marine-grade Aluminum & Solar Control Glass",
      glassType: "Triple Silver Low-E IGU (28mm)",
      performance: [
        "U-Value: 1.3 W/m²K",
        "SHGC: 0.26",
        "Sound Insulation: 40 dB",
      ],
    },
    features: [
      "Marine-grade anodized finish",
      "Corrosion-resistant glazing hardware",
      "Integrated balcony glass railings",
      "Thermal and acoustic performance optimized for coastal zones",
    ],
    challenges: "High humidity and salt exposure near the coastline.",
    solution:
      "Marine-grade aluminum systems with anti-corrosive coatings for longevity.",
  },
  {
    id: "dhar-hassan-villa",
    name: "Dhar Hassan Villa",
    region: "Oman",
    type: "Residential",
    city: "Muscat",
    year: 2022,
    status: "Completed",
    client: "Private Client",
    area: "1,200 m²",
    description:
      "A luxury private villa featuring floor-to-ceiling glazing and locally crafted stone façades, creating a seamless indoor-outdoor connection.",
    images: [
      {
        src: DharHassan1,
        alt: "Dhar Hassan Villa exterior",
      },
      {
        src: DharHassan2,
        alt: "Dhar Hassan Villa exterior",
      },
      {
        src: DharHassan3,
        alt: "Dhar Hassan Villa exterior",
      },
      {
        src: DharHassan4,
        alt: "Dhar Hassan Villa exterior",
      },
      {
        src: DharHassan5,
        alt: "Dhar Hassan Villa exterior",
      },
      {
        src: DharHassan6,
        alt: "Dhar Hassan Villa exterior",
      },
      {
        src: DharHassan7,
        alt: "Dhar Hassan Villa exterior",
      },
    ],
    facadeDetails: {
      system: "Hybrid Curtain Wall & Stone Cladding",
      profileSystem: "Anodized Aluminum & Insulated Glass Units",
      material: "Omani Limestone & Aluminum Frames",
      performance: ["Thermal U-Value: 1.6 W/m²K", "Sound Reduction: 38 dB"],
    },
    features: [
      "Seamless glass façade transitions",
      "Natural ventilation corridors",
      "Custom sandblasted stone textures",
      "Minimalist aluminum framing system",
    ],
    challenges: "Integrating modern façade systems with traditional materials.",
    solution:
      "Used a hybrid system combining stone cladding and slim aluminum mullions for visual and thermal harmony.",
  },
  {
    id: "downe-tower",
    name: "Downe",
    region: "Oman",
    type: "Highrise",
    city: "Muscat",
    year: 2023,
    status: "In Progress",
    client: "Downe Properties",
    area: "40,000 m²",
    description:
      "A contemporary highrise with a sleek glass façade utilizing a unitized system for rapid installation and superior thermal performance.",
    images: [
      {
        src: AlMeera,
        alt: "Downe Tower glass facade",
      },
    ],
    facadeDetails: {
      system: "Unitized Curtain Wall System",
      profileSystem: "Anodized Aluminum & Insulated Glass Units",
      material: "Aluminum & Low-E Glass",
      performance: ["Air Infiltration: <0.1 cfm/ft²", "Wind Load: 2.0 kPa"],
    },
    features: [
      "Prefabricated façade modules",
      "High acoustic insulation",
      "Integrated maintenance systems",
    ],
    challenges:
      "Tight construction schedule and performance requirements for tall building standards.",
    solution:
      "Used prefabricated unitized panels to accelerate installation and ensure quality.",
  },
  {
    id: "ibrahim-elite",
    name: "Ibrahim - Elite",
    region: "Oman",
    type: "Residential",
    city: "Muscat",
    year: 2023,
    status: "Completed",
    client: "Elite Properties Oman",
    area: "18,000 m²",
    description:
      "A premium apartment complex featuring an elegant façade with vertical aluminum fins and solar-control glazing for improved comfort and privacy.",
    images: [
      {
        src: AlMeera,
        alt: "Ibrahim Elite apartment façade",
      },
    ],
    facadeDetails: {
      system: "Window Wall with Vertical Fins",
      material: "Powder-coated Aluminum & Tinted Glass",
      profileSystem: "Anodized Aluminum & Insulated Glass Units",
      performance: ["SHGC: 0.3", "U-Value: 1.7 W/m²K"],
    },
    features: [
      "Vertical sun fins for privacy",
      "Natural ventilation",
      "Reflective façade finish",
    ],
    challenges:
      "Achieving both privacy and daylight for densely spaced residential units.",
    solution:
      "Installed adjustable aluminum fins allowing controlled light and visibility.",
  },
  {
    id: "juman-hotel",
    name: "Juman",
    region: "Oman",
    type: "Hospitality",
    city: "Muscat",
    year: 2024,
    status: "Planned",
    client: "Juman Hospitality Group",
    area: "20,000 m²",
    description:
      "A 4-star beachfront hotel with panoramic glazing, combining transparency and performance through structural glass systems.",
    images: [
      {
        src: AlMeera,
        alt: "Juman hotel lobby view",
      },
    ],
    facadeDetails: {
      system: "Structural Glazing System",
      material: "Tempered Glass & Stainless Steel",
      profileSystem: "Anodized Aluminum & Insulated Glass Units",
      performance: ["U-Value: 1.4 W/m²K", "Deflection: L/180"],
    },
    features: [
      "Seamless structural glass façade",
      "LED integrated mullions",
      "Panoramic sea views",
    ],
    challenges: "High wind exposure near the coast.",
    solution:
      "Used structural spider fittings rated for high wind zones with reinforced anchors.",
  },
  {
    id: "nesto-uvi",
    name: "Nesto - UVI",
    region: "Oman",
    type: "Commercial",
    city: "Sohar",
    year: 2022,
    status: "Completed",
    client: "Nesto Group",
    area: "15,000 m²",
    description:
      "Retail complex combining high-performance storefront glazing and composite panels for a modern commercial appeal.",
    images: [
      {
        src: AlMeera,
        alt: "Nesto UVI retail center",
      },
    ],
    facadeDetails: {
      system: "Stick Curtain Wall + ACP Cladding",
      material: "Aluminum Composite Panels & Clear Glass",
      profileSystem: "Anodized Aluminum & Insulated Glass Units",
      performance: ["U-Value: 1.8 W/m²K", "Fire Resistance: Class A2"],
    },
    features: [
      "ACP façade with branding flexibility",
      "High clarity glass entrances",
      "Easy maintenance façade system",
    ],
    challenges: "Brand integration and budget efficiency.",
    solution:
      "Optimized aluminum composite panel layout with modular glazing systems.",
  },
  {
    id: "pension-fund-building",
    name: "Pension Fund",
    region: "Oman",
    type: "Institutional",
    city: "Muscat",
    year: 2021,
    status: "Completed",
    client: "Oman Pension Authority",
    area: "12,000 m²",
    description:
      "Institutional office building featuring a high-performance double-glazed façade and vertical shading screens for energy savings.",
    images: [
      {
        src: AlMeera,
        alt: "Pension Fund building façade",
      },
    ],
    facadeDetails: {
      system: "Curtain Wall with External Screens",
      material: "Powder-coated Aluminum & Double Glazing",
      profileSystem: "Anodized Aluminum & Insulated Glass Units",
      performance: ["Energy Reduction: 35%", "Noise Reduction: 40 dB"],
    },
    features: [
      "Vertical aluminum shading fins",
      "Daylight optimization design",
      "Automated roller shading inside",
    ],
    challenges: "Reducing glare and heat load for office workers.",
    solution:
      "Dynamic façade design with internal and external shading control.",
  },
  {
    id: "rotana-hotel",
    name: "Rotana - 4 Star Hotel",
    region: "Oman",
    type: "Hospitality",
    city: "Muscat",
    year: 2023,
    status: "Completed",
    client: "Rotana Group",
    area: "35,000 m²",
    description:
      "Modern 4-star hotel featuring a glazed façade with integrated LED lighting and aluminum fins for an elegant night-time identity.",
    images: [
      {
        src: AlMeera,
        alt: "Rotana Hotel night view",
      },
    ],
    facadeDetails: {
      system: "Unitized Curtain Wall with LED Integration",
      profileSystem: "Anodized Aluminum & Insulated Glass Units",
      material: "Aluminum & Laminated Glass",
      performance: ["Sound Insulation: 42 dB", "U-Value: 1.5 W/m²K"],
    },
    features: [
      "LED-integrated mullions",
      "Frameless lobby glazing",
      "Automatic entrance systems",
    ],
    challenges: "Creating a signature night-time visual identity.",
    solution:
      "Custom LED-integrated mullions with programmable control systems.",
  },
  {
    id: "tanmia-office",
    name: "Tanmia",
    region: "Oman",
    type: "Commercial",
    city: "Muscat",
    year: 2022,
    status: "Completed",
    client: "Oman National Investments Development Co.",
    area: "10,000 m²",
    description:
      "Corporate office building designed with a modern stick glazing façade and aluminum sun breakers to reduce glare.",
    images: [
      {
        src: AlMeera,
        alt: "Tanmia office building",
      },
    ],
    facadeDetails: {
      system: "Stick Glazing System with Louvers",
      material: "Aluminum & Solar Glass",
      profileSystem: "Anodized Aluminum & Insulated Glass Units",
      performance: ["Solar Heat Gain: 0.25", "Air Tightness: Class 4"],
    },
    features: [
      "Horizontal aluminum sun breakers",
      "Green building certified materials",
      "Facade-integrated maintenance system",
    ],
    challenges: "Reducing solar glare without compromising aesthetics.",
    solution:
      "Optimized louver angles for effective daylight and heat control.",
  },
];
