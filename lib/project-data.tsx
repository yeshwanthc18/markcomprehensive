export type Region = "Oman" | "India" | "Iraq" | "KSA" | "UAE";
export type PType =
  | "Highrise"
  | "Commercial"
  | "Residential"
  | "Institutional"
  | "Hospitality"
  | "Education"
  | "Corporate"
  | "Retail";
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
import DOWNE1 from "@/public/compressed-images/project-photos/DOWNE/IMG_3846.jpg";
import DOWNE2 from "@/public/compressed-images/project-photos/DOWNE/IMG_3858.jpg";
import DOWNE3 from "@/public/compressed-images/project-photos/DOWNE/IMG_3868.jpg";
import DOWNE4 from "@/public/compressed-images/project-photos/DOWNE/IMG_3871.jpg";
import IbrahimElite1 from "@/public/compressed-images/project-photos/IBRAHIM - ELITE/IMG_5435.jpg";
import Juman1 from "@/public/compressed-images/project-photos/JUMAN/IMG_5503.jpg";
import Nesto1 from "@/public/compressed-images/project-photos/NESTO - RUVI/IMG_3718.jpg";
import Nesto2 from "@/public/compressed-images/project-photos/NESTO - RUVI/IMG_3714.jpg";
import Nesto3 from "@/public/compressed-images/project-photos/NESTO - RUVI/IMG_3723.jpg";




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
  rooms?: string;
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
  "Retail",
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
        src: Almouj1,
        alt: "Al Mouj Kindergarten",
      },
      {
        src: Almouj2,
        alt: "Al Mouj Kindergarten",
      },
       {
        src: Almouj3,
        alt: "Al Mouj Kindergarten",
      },
       {
        src: Almouj4,
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
        src: DOWNE1,
        alt: "Downe House Muscat",
      },
      {
        src: DOWNE2,
        alt: "Downe House Muscat",
      },
       {
        src: DOWNE3,
        alt: "Downe House Muscat",
      },
       {
        src: DOWNE4,
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
    rooms: "~250 (rooms, suites & apartments)",
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
      system:
        "Semi-unitised / unitised aluminium curtain-wall system across primary elevations",

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
    rooms: "~250 (rooms, suites & apartments)",
    sector: "Luxury residential – waterfront apartments",

    description:
      "Juman is a premium waterfront residential development nestled within the larger Al Mouj Muscat master-plan in Muscat, Oman. The project consists of iconic apartment buildings offering 1- and 2-bed units (e.g., Juman Two: 76 one-bed + 76 two-bed apartments) around landscaped gardens and pool decks overlooking the marina. Designed to capture resort-style living with high-end finishes, waterfront views and elevated amenity spaces, it presents a strong architectural and market-statement.",
    images: [
      {
        src: Juman1,
        alt: "Juman",
      },
      {
        src: Juman1,
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
      system:
        "Semi-unitised / stick-type aluminium curtain-wall + window/door systems",

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
    id: "al-mouj-mosque",
    name: "Al Mouj Mosque",
    region: "Oman",
    type: "Residential",
    city: "Al Hail, Muscat",
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
    rooms: "~250 (rooms, suites & apartments)",
    sector: "Luxury residential – waterfront apartments",

    description:
      "As part of the Al Mouj Muscat master-planned waterfront community in the Al Hail district of Muscat, the mosque anchors the north side of the Community Hub plot and provides a central cultural and worship facility for the development. The building is positioned between the main boulevard of Al Mouj and adjacent residential neighbourhoods, and is described as a “distinctive architectural statement” within the context of the hub. Its role: community-facing, welcoming worshippers and residents, with a façade designed to reflect modern Islamic architecture and the premium residential setting.",
    images: [
      {
        src: AlMeera,
        alt: "Al Mouj Mosque",
      },
      {
        src: AlMeera,
        alt: "Al Mouj Mosque",
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
      system:
        "Semi-unitised / stick-type aluminium curtain-wall + window/door systems",

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
    id: "ibrahim-elite",
    name: "Ibrahim Elite",
    region: "Oman",
    type: "Residential",
    city: "Muscat",
    year: 2019,
    status: "Completed",
    client: "To be confirmed",
    architect: "To be confirmed",
    mainContractor: "To be confirmed",
    markScope: "Aluminium façade & glazing systems – design, supply, install",
    systemType:
      "Unitised/Semi-unitised curtain wall + aluminium windows/doors + architectural aluminium features",
    glassType: "Double glazed Low-E assembly (Assumed: 6 + 12 + 6)",
    // area: "Approx. 48,000 m²",
    sector: "Luxury residential",

    description:
      "Ibrahim Elite is a premium office/residential or mixed-use development (to be confirmed) in Muscat, Oman. It reflects modern architecture, high-quality finishes and is positioned as a flagship property in its location.",
    images: [
      {
        src: IbrahimElite1,
        alt: "Ibrahim Elite ",
      },
      {
        src: IbrahimElite1,
        alt: "Ibrahim Elite ",
      },
    ],
    scopeOfWork:
      "Mark Aluminium was engaged to supply and install the aluminium façade and glazing systems for the Ibrahim Elite project, including",
    features: [
      "Design, supply, fabrication and installation of aluminium curtain-wall / glazed façades for the building’s primary elevations.",
      "Aluminium framed windows, doors and internal glazing partitions in selected zones (e.g., lobby, retail, office).",
      "Custom aluminium architectural features (sun-shade fins, louvers or decorative aluminium screen elements) associated with façade design.",
      "Coordination with the main contractor, structural interface, MEP penetrations and façade waterproofing & interface works.",
      "Full QA/QC, mock-up testing, documentation and hand-over of the façade system.",
    ],
    facadeDetails: {
      system:
        "Semi-unitised or unitised aluminium curtain-wall system for primary façade",

      profileSystem:
        "High-performance façade aluminium system (custom specification)",
      finish:
        "Polyester powder-coated aluminium, likely colour RAL 7016 (Anthracite) or similar premium tone, approx. 60 µm thickness",
      // glassType: "Low-E Double Glazed Units (24mm)",
      // performance: ["U-Value: 1.5 W/m²K", "SHGC: 0.27", "Daylight Factor: 65%"],
      mullionDepth: "Approx. 150 mm (typical)",
      transomDepth: "Approx. 100 mm (typical)",
      thermalBreak:
        "Polyamide thermal-break within aluminium profiles to meet climate demands",
      anchorage:
        "Stainless steel fixings (AISI 316) suitable for Muscat’s coastal & saline environment",
      // sealing: "Two-stage silicone with structural glazing sealant",
    },
    performanceHighlights: [
      "The façade is designed to maximise daylighting and visual connectivity, enhancing occupant experience for office/residential use.",
      "Sun-shade fins / aluminium louvers reduce solar gain, critical for Muscat’s hot and high-solar-load climate.",
      "Durable aluminium finishes and corrosion-resistant fixings ensure long-term performance in a coastal environment.",
      "Internal aluminium glazing partitions provide transparency and aesthetic sophistication in lobby or amenity zones.",
    ],

    glassSpecification: {
      type: "Double Glazed Unit (DGU) – e.g., 6 mm clear + 12 mm argon cavity + 6 mm Low-E coated glass",
      // buildUp: "6 mm clear + 12 mm argon cavity + 6 mm Low-E glass",
      coating: "Low-E neutral/clear for solar control and interior comfort",
      uValue: "Approx. 1.6 W/m²K (to be confirmed)",
      solarHeatGainCoefficient: "Approx. 0.25-0.30 (to be confirmed)",
      vlt: "Approx. 48-52% (to be confirmed)",
      colourTone:
        "Neutral clear or slight blue-grey tint to support premium aesthetic",
      // acousticPerformance: "Approx. 35-38 dB Rw (typical performance level)",
    },
    challenges:
      "Coastal & salt-laden environment,	Large glazed spans and thermal control,	Quality aesthetic / premium finish expectations",
    solution: [
      "The façade was designed with high-durability powder coating and stainless-steel fixings to resist corrosion.",
      "Extensive glazing required high-performance glass, thermal-break profiles and precise installation to meet comfort and energy requirements.",
      "Given the premium nature of the project, tight tolerances, uniform finishes and meticulous QA/QC were applied by Mark Aluminium.",
    ],
  },
  {
    id: "al-mouj-community-hub",
    name: "Al Mouj Community Hub",
    region: "Oman",
    type: "Residential",
    city: "Al Hail district, Al Mouj Muscat",
    year: 2019,
    status: "Completed",
    client: "Al Mouj Muscat SAOC / Al Mouj masterplan",
    architect: "To be confirmed",
    mainContractor: "To be confirmed",
    markScope: "Aluminium façade & glazing systems – design, supply, install",
    systemType:
      "Unitised/semi-unitised curtain wall + aluminium doors/windows + architectural aluminium elements",
    glassType: "Double glazed Low-E assembly (Assumed: 6 + 12 + 6)",
    // area: "Approx. 48,000 m²",
    sector: "Luxury residential",

    description:
      "The Al Mouj Community Hub is a landmark community facility located in the Al Hail district of Al Mouj Muscat. The Hub features a striking architectural façade, with a glazed frontage along the main boulevard adjacent to Plots A02 (residential) and the Ghadeer Park Villas. The facility includes a mosque (for men and women), cultural centre, children’s activity and arts classrooms, a kindergarten and a sales/experience centre — reflecting the developer’s community-first focus.",
    images: [
      {
        src: AlMeera,
        alt: "Al Mouj Community Hub",
      },
      {
        src: AlMeera,
        alt: "Al Mouj Community Hub",
      },
    ],
    scopeOfWork: "Mark Aluminium’s contribution would be described as",
    features: [
      "Design, fabrication, supply and installation of the aluminium façade and architectural glazing systems for the Community Hub building.",
      "Aluminium-framed curtain-wall/glazed frontage along the boulevard, including the main entrance elevation.",
      "Aluminium doors, windows and glazed partitions for the internal spaces (cultural centre, classrooms, women’s prayer hall, library zone).",
      "Custom aluminium architectural elements (sun-shade fins, decorative aluminium screens) to meet aesthetic demands and solar control requirements in Muscat’s climate.",
      "Coordination with the main contractor, structural frame, MEP penetrations, waterproofing and façade interface detailing.",
      "QA/QC testing, mock-up, commissioning, and hand-over documentation aligning with Mark Aluminium’s delivery standards.",
    ],
    facadeDetails: {
      system:
        "Unitised/semi-unitised aluminium curtain-wall system for main frontage",

      profileSystem:
        "Premium aluminium façade system (customised) equivalent to high-performance global brands",
      finish:
        "Polyester powder-coated aluminium; likely colour theme aligned with Al Mouj (e.g., RAL 7016 Anthracite or lighter complementary tone)",
      // glassType: "Low-E Double Glazed Units (24mm)",
      // performance: ["U-Value: 1.5 W/m²K", "SHGC: 0.27", "Daylight Factor: 65%"],
      mullionDepth: "Approx. 150 mm (typical)",
      transomDepth: "Approx. 100 mm (typical)",
      thermalBreak:
        "Polyamide thermal-isolation strip within aluminium profiles",
      anchorage:
        "Stainless steel fixings (AISI 316) suitable for coastal environment and wind-load demands",
      // sealing: "Two-stage silicone with structural glazing sealant",
    },
    performanceHighlights: [
      "The Community Hub’s glazing-rich façade along the boulevard creates an open, inviting presence and enhances community engagement in the Al Mouj masterplan.",
      "Sun-control aluminium fins or screens (assumed) help mitigate the high solar load of Muscat’s climate, while enabling large glazed expanses for daylight and transparency.",
      "Durable aluminium finishes and high-spec glazing ensure long-term performance in a coastal, high-humidity environment — aligning with Mark Aluminium’s emphasis on quality and asset value.",
      "Internal aluminium-glazed partitions enable functional flexibility in the cultural centre, classrooms and library, fostering an environment of openness and connectivity.",
    ],

    glassSpecification: {
      type: "Double Glazed Unit (DGU) – e.g., 6 mm clear + 12 mm argon cavity + 6 mm Low-E coated glass",
      // buildUp: "6 mm clear + 12 mm argon cavity + 6 mm Low-E glass",
      coating:
        "Neutral/clear Low-E coating for solar control and daylight efficiency",
      uValue: "Approx. 1.6 W/m²K (to be verified)",
      solarHeatGainCoefficient: "Approx. 0.25-0.30 (to be verified)",
      vlt: "Approx. 48-52% (to be verified)",
      colourTone:
        "Slight neutral-clear/blue-grey tint to maintain bright and welcoming interior ambience",
      // acousticPerformance: "Approx. 35-38 dB Rw (typical performance level)",
    },
    challenges:
      "Coastal exposure + solar intensity,	Architectural statement + community fit-out,	Complex interface zones",
    solution: [
      "The façade must withstand high salt-laden air, UV exposure and thermal stresses – resolved via powder-coated aluminium with corrosion-resistant fixings and high-performance glazing/thermal-break systems.",
      "As a hub building (mosque + community spaces + kindergarten), the design called for architectural finesse and functional durability — Mark Aluminium’s turnkey approach ensured seamless integration and quality execution.",
      "Given the Hub’s multi-use nature (prayer halls, library, sales/experience centre, kindergarten) and plaza/landscape integration, façade coordination and installation phasing were critical — addressed through modular fabrication and stringent QA/QC protocols.",
    ],
  },
  {
    id: "al-meera-hypermarket",
    name: "Al Meera Hypermarket",
    region: "Oman",
    type: "Residential",
    city: "Amerat (Al Amarat), Muscat",
    year: 2019,
    status: "Completed",
    client: "Al Mouj Muscat SAOC / Al Mouj masterplan",
    architect: "Ibrahim Jaidah Architects & Engineers (design & supervision)",
    // mainContractor: "To be confirmed",
    markScope: "Aluminium façade & glazing systems – design, supply, install",
    systemType:
      "Semi-unitised curtain wall + aluminium windows/doors (retail storefront system)",
    glassType: "Double glazed Low-E unit (assumed)",
    area: "Approx. 23,081 m² (B + G + M)",
    sector: "Retail – Large Format Hypermarket / Mall Extension",

    description:
      "The Al Meera Hypermarket in Amerat (Muscat) is part of the regional expansion of the retail chain in Oman, serving neighbourhood catchments with large format retail. According to architect firm Ibrahim Jaidah Architects & Engineers, the Amerat branch is listed as “Al Meera Mall in Al Amarat, OMAN – Built-up area: 23,081 m², Floors: B + G + Mezzanine”. The façade is described as “simple in its core rectangular spaces connected with glass facades” and “the main building façade is standardized and is to be used across all new developments”.",
    images: [
      {
        src: AlMeera,
        alt: "Al Meera Hypermarket",
      },
      {
        src: AlMeera,
        alt: "Al Meera Hypermarket",
      },
    ],
    scopeOfWork:
      "Mark Aluminium was engaged to deliver the architectural aluminium and glazing package for the Al Meera Amerat development, including",
    features: [
      "Design, supply, fabrication and installation of aluminium façade systems (curtain-wall / glazing façades) for the front elevation and storefront areas.",
      "Aluminium framed windows and doors for ancillary spaces, service zones and glazed shop-front interfaces.",
      "Integration of large glass façade areas connecting internal retail spaces to exterior visual exposure, in line with the standardized design intent.",
      "Coordination with main contractor and façade consultant to ensure alignment with the standardized façade system and glass façade modules.",
      "Coordination with the main contractor, structural frame, MEP penetrations, waterproofing and façade interface detailing.",
      "Quality assurance, mock-up testing, and hand-over documentation to ensure compliance with performance and aesthetic requirements.",
    ],
    facadeDetails: {
      system:
        "Semi-unitised aluminium curtain-wall system for the storefront elevation",

      profileSystem:
        "Premium aluminium façade system equivalent to global standard, adapted for retail façade modularity",
      finish:
        "Polyester powder-coated aluminium, likely in a standard retail tone (e.g., RAL 7016 Anthracite or another brand aligned finish)",
      // glassType: "Low-E Double Glazed Units (24mm)",
      // performance: ["U-Value: 1.5 W/m²K", "SHGC: 0.27", "Daylight Factor: 65%"],
      mullionDepth: "Approx. 140-150 mm (typical retail façade proportion)",
      transomDepth: "Approx. 80-100 mm (typical)",
      thermalBreak:
        "Polyamide thermal break within aluminium sections to moderate internal heat loads",
      anchorage:
        "Stainless steel fixings (AISI 316) or equivalent, designed for durability in local climate",
      // sealing: "Two-stage silicone with structural glazing sealant",
    },
    performanceHighlights: [
      "The design intent emphasises large glazed façade surfaces to enhance visual connectivity between the retail interior and the exterior environment—consistent with the “glass-facade” language adopted for Al Meera’s standardized roll-out.",
      "Aluminium façade systems are optimized for retail conditions: durability, maintainability, quick installation and visual uniformity across multiple locations.",
      "Thermal and daylight performance are important even for retail façade given the Muscat climate: using glass with Low-E coatings and thermally broken aluminium frames helps reduce internal heat gain while enabling welcoming storefronts.",
      "The standardized façade modular approach supports economies of scale, faster installation and brand consistency across sites.",
    ],

    glassSpecification: {
      type: "Double Glazed Unit (DGU), e.g., 6 mm clear + 12 mm argon cavity + 6 mm Low-E or laminated glass for retail application",
      // buildUp: "6 mm clear + 12 mm argon cavity + 6 mm Low-E glass",
      coating: "Low-E clear/neutral for solar control and daylight clarity",
      uValue: "Approx. 1.6 W/m²K (to be confirmed)",
      solarHeatGainCoefficient: "Approx. 0.27-0.30 (to be confirmed)",
      vlt: "Approx. 50-55% (to be confirmed)",
      colourTone:
        "Clear or light neutral tint, ensuring daylighting and visibility of retail interiors",
      // acousticPerformance: "Approx. 35-38 dB Rw (typical performance level)",
    },
    challenges:
      "Large expanse of façade with retail opening hours constraints ,	Balancing transparency and solar control,	Durability in coastal environment: ",
    solution: [
      "Mark Aluminium’s modular fabrication approach allowed faster on-site installation and minimized disruption to site logistics and fit-out.",
      "The retail façade demanded high visibility but Muscat’s coastal solar load is high—Mark proposed Low-E glass and shading/overhang strategies embedded in façade design.",
      "Aluminium frames and fixings specified with corrosion-resistant finishes, high salt-spray rating powder-coating, and SS fixings to ensure long-term asset value.",
    ],
  },
  {
    id: "alila-hinu-bay",
    name: "Alila Hinu Bay",
    region: "Oman",
    type: "Hospitality",
    city: "Mirbat / Salalah (Southwest coast of Oman)",
    year: 2019,
    status: "Completed",
    client: "Alila Hotels & Resorts (Salalah / Oman)",
    architect: "Ibrahim Jaidah Architects & Engineers (design & supervision)",
    // mainContractor: "To be confirmed",
    markScope: "Aluminium façade & glazing systems – design, supply, install",
    systemType:
      "Unitised/semi-unitised curtain wall + aluminium windows/doors + architectural aluminium elements",
    glassType: "Double glazed Low-E assembly (6 + 12 + 6)",
    area: "Resort site spans 45 hectares (approx)",
    sector: "Hospitality – Luxury beachfront resort",

    description:
      "The Alila Hinu Bay resort is a luxury beachfront development located on the southwest coast of Oman, near Mirbat in the Dhofar region, part of the greater Salalah area. The architecture follows a minimalist contemporary style with a clear influence of Omani vernacular materials (e.g., Omani marble on the façade) and large glazed surfaces that connect indoor-outdoor living. Given its premium resort status, the building envelope demands high aesthetic, high performance (thermal, solar, durability) and integration with coastal/climate conditions.",
    images: [
      {
        src: Alila1,
        alt: "Alila Hinu Bay",
      },
      {
        src: Alila2,
        alt: "Alila Hinu Bay",
      },
       {
        src: Alila3,
        alt: "Alila Hinu Bay",
      },
       {
        src: Alila4,
        alt: "Alila Hinu Bay",
      },
    ],
    scopeOfWork:
      "Mark Aluminium was engaged to supply and install the architectural aluminium façade and glazing systems for the Alila Hinu Bay resort, including",
    features: [
      "Design & engineering of the aluminium façade and large glazed curtain-wall/window systems for the resort’s main buildings and villas.",
      "Supply, fabrication and installation of aluminium framed doors, windows and large glazing panels in guest-rooms, lobby, dining areas and villas.",
      "Custom aluminium architectural elements (aluminium sun-shade fins, decorative aluminium screens) integrated into façade design to reflect the resort aesthetic and manage solar load.",
      "Coordination with main contractor & façade consultant for structural interface, MEP penetrations, waterproofing, and installation in a coastal/desert environment.",
      "Quality assurance: façade mock-ups, on-site testing, commissioning, documentation and hand-over in line with Mark Aluminium’s standards.",
    ],
    facadeDetails: {
      system:
        "Unitised / semi-unitised aluminium curtain-wall system across primary façades and villa glazing zones",

      profileSystem:
        "Premium aluminium façade system (customised) equivalent to global high-performance brands, adapted for resort conditions",
      finish:
        "Polyester powder-coated aluminium, likely colour tone aligned with resort aesthetic (e.g., neutral/earth tones), approx. 60 µm thickness",
      // glassType: "Low-E Double Glazed Units (24mm)",
      // performance: ["U-Value: 1.5 W/m²K", "SHGC: 0.27", "Daylight Factor: 65%"],
      mullionDepth:
        "Approx. 150 mm typical (for heavy glazed and load bearing façade)",
      transomDepth: "Approx. 100 mm typical",
      thermalBreak:
        "Polyamide (or similar) thermal-break within aluminium profiles to ensure thermal performance in warm coastal environment",
      anchorage:
        "Stainless steel fixings (AISI 316 or equivalent) designed for corrosion resistance in salt-air exposure",
      // sealing: "Two-stage silicone with structural glazing sealant",
    },
    performanceHighlights: [
      "The design emphasises daylight, transparency and visual connection to the seascape and desert background — the large glazing expanses and minimal aluminium profiles support this. ",
      "Aluminium façade systems are optimized for retail conditions: durability, maintainability, quick installation and visual uniformity across multiple locations.",
      "Thermal and daylight performance are important even for retail façade given the Muscat climate: using glass with Low-E coatings and thermally broken aluminium frames helps reduce internal heat gain while enabling welcoming storefronts.",
      "The standardized façade modular approach supports economies of scale, faster installation and brand consistency across sites.",
    ],

    glassSpecification: {
      type: "Double Glazed Unit (DGU) – e.g., 6 mm clear + 12 mm argon cavity + 6 mm Low-E laminated/toughened glass",
      // buildUp: "6 mm clear + 12 mm argon cavity + 6 mm Low-E glass",
      coating: "Low-E neutral/clear for solar control and daylight quality",
      uValue: "Approx. 1.4-1.8 W/m²K (to be confirmed)",
      solarHeatGainCoefficient: "Approx. 0.25-0.30 (to be confirmed)",
      vlt: "Approx. 45-55% (to be confirmed)",
      colourTone:
        "Slight neutral or blue/grey tint to complement resort aesthetic and reduce glare",
      // acousticPerformance: "Approx. 35-38 dB Rw (typical performance level)",
    },
    challenges:
      "Large expanse of façade with retail opening hours constraints ,	Balancing transparency and solar control,	Durability in coastal environment",
    solution: [
      "Mark Aluminium’s modular fabrication approach allowed faster on-site installation and minimized disruption to site logistics and fit-out.",
      "The retail façade demanded high visibility but Muscat’s coastal solar load is high—Mark proposed Low-E glass and shading/overhang strategies embedded in façade design.",
      "Aluminium frames and fixings specified with corrosion-resistant finishes, high salt-spray rating powder-coating, and SS fixings to ensure long-term asset value.",
    ],
  },
  {
    id: "al-rawda-building",
    name: "Al Rawda Building",
    region: "Oman",
    type: "Hospitality",
    city: "Boushar (Bawshar) area, Muscat",
    year: 2019,
    status: "Completed",
    // client: "Alila Hotels & Resorts (Salalah / Oman)",
    // architect: "Ibrahim Jaidah Architects & Engineers (design & supervision)",
    // mainContractor: "To be confirmed",
    markScope: "Aluminium façade & glazing systems – design, supply, install",
    systemType:
      "Semi-unitised curtain-wall + aluminium windows/doors + architectural aluminium elements",
    glassType: "Glass Type (Assumed)	Double glazed Low-E assembly (6 + 12 + 6)",
    // area: "Resort site spans 45 hectares (approx)",
    sector: "Residential / Mixed-use (Premium apartments + retail)",

    description:
      "The Al Rawda Building is a residential-commercial development located in the Boushar (also spelled Bawshar) area of Muscat, Oman. It is described as “a commercial / residential project, strategically located in the heart of Bawshar on Al Maha Street.” The project features apartments with hotel-style finishes, included amenities such as a gym and swimming pool, and sits in a high-traffic residential-commercial district.",
    images: [
      {
        src: AlMeera,
        alt: "Al Rawda Building",
      },
      {
        src: AlMeera,
        alt: "Al Rawda Building",
      },
    ],
    scopeOfWork: "Mark Aluminium was engaged to deliver the following works",
    features: [
      "Design, supply, fabrication and installation of architectural aluminium façade systems for the primary building elevations of Al Rawda.",
      "Aluminium framed windows, sliding/door systems for the residential units and commercial ground floor spaces.",
      "Internal aluminium glazing partitions and aluminium framed elements in common areas (lobby, gym, swimming pool facilities).",
      "Custom aluminium architectural features (for example sun-shade fins, aluminium decorative panels) as required by design aesthetics.",
      "Coordination with the main contractor, structural works, MEP interfaces, waterproofing and façade envelope integration.",

      "Quality assurance, mock-ups, testing (air, water infiltration, etc.), hand-over documentation and warranty support.",
    ],
    facadeDetails: {
      system:
        "System Type	Semi-unitised aluminium curtain-wall / window-wall system for primary façade zones and high-visibility elevations",

      profileSystem:
        "Profile System	Premium aluminium façade system (equivalent to global high-performance brands) customised for this project",
      finish:
        "Finish	Polyester powder-coated aluminium, colour likely in a premium tone (e.g., RAL 7016 Anthracite or similar) to match high-end finish; approx. 60 µm thickness",
      // glassType: "Low-E Double Glazed Units (24mm)",
      // performance: ["U-Value: 1.5 W/m²K", "SHGC: 0.27", "Daylight Factor: 65%"],
      mullionDepth: "Approx. 150 mm (typical)",
      transomDepth: "Approx. 100 mm (typical)",
      thermalBreak:
        "Thermal Break	Polyamide strip thermal-break within aluminium profiles to meet performance in Muscat climate",
      anchorage:
        "Anchorage & Fixings	Stainless steel (AISI 316) fixings/brackets suitable for coastal and high-humidity environment",
      // sealing: "Two-stage silicone with structural glazing sealant",
    },
    performanceHighlights: [
      "The building’s façade is designed for high-visibility and premium finish in a busy residential / commercial zone, thus the aluminium and glazing execution emphasises quality, durability and aesthetics.",
      "In the Muscat / Boushar climate, solar control and heat mitigation are critical — the assumed combination of Low-E glazing + thermal-break aluminium frames supports comfort and efficiency.",
      "Large glazed surfaces and clean aluminium finishes help deliver a contemporary, “hotel-style” residential aesthetic that matches descriptions of the project (“hotel finishes”, “luxury apartments”).",
      "The coastal/humidity conditions in Muscat mean the aluminium façade system likely needed corrosion-resistant treatments and high durability — a capability Mark Aluminium offers as part of its value proposition.",
    ],

    glassSpecification: {
      type: "Double Glazed Unit (DGU) – 6 mm clear + 12 mm argon cavity + 6 mm Low-E coated glass (or equivalent)",
      // buildUp: "6 mm clear + 12 mm argon cavity + 6 mm Low-E glass",
      coating:
        "Coating	Low-E neutral/clear for solar control and daylight optimisation",
      uValue: "U-Value	Approx. 1.6 W/m²K (to be verified)",
      solarHeatGainCoefficient:
        "Solar Heat Gain Coefficient (SHGC)	Approx. 0.25-0.30 (to be verified)",
      vlt: "Visible Light Transmittance (VLT)	Approx. 48-52% (to be verified)",
      colourTone:
        "Tint / Colour	Slight neutral or clear tint to support premium residential view & aesthetics",
      // acousticPerformance: "Approx. 35-38 dB Rw (typical performance level)",
    },
    challenges:
      "Coastal exposure & humidity ,	Balancing transparency and solar load,	Commercial-residential mixture, High quality finish expectation",
    solution: [
      "To address salt-laden air and high humidity, specification of powder-coated aluminium with high salt-spray resistance and stainless steel fixings was utilised (or should be specified).",
      "With large glazed areas, the design had to maintain openness and daylight while controlling solar heat gain — hence the selection of Low-E glazing and thermal-break frames.",
      "The building includes both retail/commercial at lower floors and residences above — which means façade installation had to accommodate multiple uses, through coherent modular system and careful phasing.",
      "Given the “luxury / hotel-finishes” positioning, tight tolerances, high-end aluminium finishes, and stringent QA/QC procedures were critical — Mark Aluminium’s process supports this.",
    ],
  },
  {
    id: "hq-building-csepf",
    name: "HQ Building – Civil Service Employees Pension Fund (CSEPF)",
    region: "Oman",
    type: "Institutional",
    city: "Ghala Heights, Muscat",
    year: 2020,
    status: "Completed",
    // client: "Civil Service Employees Pension Fund (CSEPF), Sultanate of Oman",
    // architect: "SSH International",
    // mainContractor: "To be confirmed",
    markScope: "Aluminium façade & glazing systems – design, supply, install",
    systemType:
      "Unitised / semi-unitised curtain-wall + aluminium windows/doors + architectural aluminium elements",
    glassType: "Glass Type (Assumed)	Double glazed Low-E assembly (6 + 12 + 6)",
    // area: "Built-up area approximately 146,000 m²",
    sector:
      "Institutional / Commercial / Mixed-Use (Retail + Offices + Serviced Apartments)",

    description:
      "Located in the Ghala Heights area of Muscat, this headquarters investment building is commissioned by the Civil Service Employees Pension Fund (CSEPF) as part of its portfolio-diversification strategy. The project is a large multi-purpose development comprising retail, office, hotel/serviced apartments, and parking facilities. The façade system balances large glazed spans with solar control and performance durability suited for Muscat’s climate.",

    images: [
      {
        src: AlMeera,
        alt: "HQ Building – Ghala Heights, Muscat",
      },
      {
        src: AlMeera,
        alt: "CSEPF HQ – Muscat, Oman",
      },
    ],

    scopeOfWork: "Mark Aluminium was engaged to deliver the following works",
    features: [
      "Design, supply, fabrication and installation of aluminium façade systems — including curtain-wall/glazed systems for the building’s prominent elevations.",
      "Aluminium framed windows, doors, and interior architectural glazing partitions for office floors and serviced apartment levels.",
      "Custom aluminium architectural shading fins, sun-control elements and façade accents to meet performance requirements in Muscat’s climate.",
      "Coordination with the main contractor, structural frame, MEP interfaces, waterproofing, and façade installation logistics (especially for mixed-use and multi-level parking).",
      "Façade mock-ups, QA/QC testing, commissioning, and hand-over documentation aligned with Mark Aluminium’s standards.",
    ],

    facadeDetails: {
      system:
        "Unitised or semi-unitised aluminium curtain-wall system across primary elevations of the mixed-use tower",
      profileSystem:
        "High-performance aluminium façade system (customised) equivalent to global façade brands",
      finish:
        "Polyester powder-coated aluminium, likely in a premium tone (e.g., RAL 7016 Anthracite or similar) with approx. 60 µm thickness",
      mullionDepth: "Approx. 150 mm (typical)",
      transomDepth: "Approx. 100 mm (typical)",
      thermalBreak:
        "Polyamide strip thermal-break within aluminium profiles to handle coastal heat load",
      anchorage:
        "Stainless steel (AISI 316) fixings/brackets designed for coastal saline exposure and high wind loading",
    },

    performanceHighlights: [
      "The mixed-use program combining retail, offices, and serviced apartments required façade flexibility and high performance — balancing large glazed spans with solar control and heat mitigation.",
      "Sun-shade fins and aluminium screen elements help reduce solar exposure on west and south-facing façades, improving comfort and energy efficiency.",
      "The building’s high-visibility location in Ghala Heights demanded premium aluminium and glazing systems to ensure architectural impact and long-term durability.",
      "Interior aluminium-framed glazing partitions support a modern, open aesthetic across office and serviced apartment levels.",
    ],

    glassSpecification: {
      type: "Double Glazed Unit (DGU) – 6 mm clear + 12 mm argon cavity + 6 mm Low-E coated glass (or equivalent)",
      coating:
        "Coating	Low-E neutral / clear for solar control and daylight optimisation",
      uValue: "Approx. 1.6 W/m²K (to be verified)",
      solarHeatGainCoefficient: "Approx. 0.27 (to be verified)",
      vlt: "Approx. 48-52% (to be verified)",
      colourTone:
        "Slight neutral or blue-grey tint to maintain premium aesthetic and glare control",
    },

    challenges:
      "Complex mixed-use program, Coastal/urban exposure, High solar load and humidity, Large façade scale and performance consistency",

    solution: [
      "A building combining retail, offices, serviced apartments and parking means façade works must coordinate across many trades and differing functional requirements. Mark’s modular fabrication and façade scheduling streamline this.",
      "The Muscat region — especially near Bausher/Ghala — has high solar loads, salt-laden air and humidity; Mark Aluminium’s design includes premium finishes and materials rated for these conditions.",
      "With ~146,000 m² built-up area, the façade system had to maintain consistent quality, aesthetics and performance across a large vertical and horizontal span — Mark’s QA/QC process ensures uniformity and standardisation.",
    ],
  },
  {
    id: "itower-business-tower",
    name: "iTower Business Tower",
    region: "Oman",
    type: "Commercial",
    city: "Bausher (Bawshar), Muscat",
    year: 2018,
    status: "Completed",
    // developer: "Gulf Muscat United",
    markScope: "Aluminium façade & glazing systems – design, supply, install",
    systemType:
      "Unitised / semi-unitised curtain-wall + aluminium windows/doors + architectural aluminium elements",
    glassType:
      "Glass Type (Assumed)\tDouble glazed Low-E assembly (6 + 12 + 6)",
    sector: "Commercial Office Building / Freehold Offices",
    area: "approx. 17,454 m² of built area",
    description:
      "The iTower Business Tower is a seven-storey commercial office building offering freehold ownership of office spaces in Oman. Developed by Gulf Muscat United, it is located in the Bausher (Bawshar) district of Muscat, within an emerging business hub. The tower was envisioned as one of the most technologically advanced 'smart office' developments in Oman, featuring approximately 17,454 m² of built area, 71 offices ranging from 42 m² to 1,550 m², and three levels of underground parking.",

    images: [
      {
        src: AlMeera,
        alt: "iTower Business Tower – Muscat, Oman",
      },
      {
        src: AlMeera,
        alt: "Gulf Muscat United iTower – Bausher",
      },
    ],

    scopeOfWork: "Mark Aluminium was engaged to deliver the following works",
    features: [
      "Design, supply, fabrication and installation of aluminium façade and glazing systems for the main elevations of the iTower Business Tower.",
      "Unitised or semi-unitised curtain-wall systems providing large glazed spans with clean corporate lines.",
      "Aluminium framed windows, doors, and storefront systems for the retail and main entrance zones.",
      "Architectural aluminium fins and decorative screen elements enhancing solar performance and visual appeal.",
      "Coordination with main contractor, structural interfaces, waterproofing, and MEP penetrations for integrated façade envelope performance.",
      "Comprehensive QA/QC, mock-up testing, commissioning, and hand-over documentation aligned with project standards.",
    ],

    facadeDetails: {
      system:
        "Unitised or semi-unitised aluminium curtain-wall system on principal elevations",
      profileSystem:
        "Profile System	High-performance aluminium façade system (equivalent to premium global brands) customised for the project",
      finish:
        "Polyester powder-coated aluminium, corporate tone likely RAL 7016 Anthracite, approx. 60 µm thickness",
      mullionDepth: "Approx. 150 mm (typical)",
      transomDepth: "Approx. 100 mm (typical)",
      thermalBreak:
        "Polyamide strip thermal-break within aluminium profiles for improved thermal efficiency",
      anchorage:
        "Stainless steel (AISI 316) fixings/brackets suitable for Muscat’s urban climatic conditions",
    },

    performanceHighlights: [
      "The façade of the iTower promotes a modern, corporate visual identity, aligning with its positioning as a freehold office building in Muscat’s evolving business district.",
      "Large glazing areas combined with aluminium framing support daylight entry and views, while the assumed inclusion of sun-shade or architectural aluminium features works to mitigate solar heat gain in the Muscat climate.",
      "The technical requirements required for office performance (thermal comfort, daylighting, durability, maintenance) are addressed through the assumed high-performance glazing and thermally-broken aluminium façade system..",
      "For Mark Aluminium, participation in such a commercial office tower extends the company’s reference base into corporate high-rise aluminium/glazing solutions, complementing its residential, institutional and hospitality portfolio.",
    ],

    glassSpecification: {
      type: "Double Glazed Unit (DGU) – 6 mm clear + 12 mm argon cavity + 6 mm Low-E coated glass (or equivalent)",
      coating: "Low-E neutral / clear glass for daylighting and solar control",
      uValue: "Approx. 1.6 W/m²K (to be verified)",
      solarHeatGainCoefficient: "Approx. 0.25–0.30 (to be verified)",
      vlt: "Approx. 48–52% (to be verified)",
      colourTone:
        "Slight neutral or blue-grey tint supporting corporate aesthetic and glare reduction",
    },

    challenges:
      "Urban façade logistics, Thermal/solar exposure, Brand-grade finish & performance",

    solution: [
      "The tower’s central location in Muscat likely required careful planning of façade installation logistics, erection sequencing, and minimal disruption to surrounding built-up environment — Mark Aluminium’s modular façade approach facilitates that.",
      "Although not a coastal waterfront project, Muscat’s climate still imposes high solar loads; carefully selected glazing with Low-E, thermal-break profiles and aluminium sun-shade elements mitigate this risk.",
      "As a commercial grade freehold office, aesthetic appearance, performance durability, and maintenance minimisation are key — Mark’s quality control protocols ensure the façade meets these expectations.",
    ],
  },
  {
  id: "nesto-hypermarket-ruwi",
  name: "Nesto Hypermarket – Ruwi, Muscat, Oman",
  region: "Oman",
  type: "Retail",
  city: "Ruwi, Muscat Governorate",
  year: 2023,
  status: "Completed",
  markScope: "Aluminium façade & glazing systems – design, supply, install",
  systemType: "Stick-type or semi-unitised aluminium curtain-wall / storefront system",
  glassType: "Double glazed Low-E assembly (6 + 12 + 6)",
  sector: "Retail – Hypermarket",
  area: "Large format retail floorplate with extensive glazed frontage",
  description:
    "Nesto Hypermarket in Ruwi is a key retail anchor located in Muscat’s prime commercial district. The branch serves a high-footfall catchment and is part of the wider Nesto retail chain across Oman and the GCC. The façade design focuses on maximizing transparency, visibility, and durability for heavy-use retail environments.",

  images: [
    {
      src: Nesto2,
      alt: "Nesto Hypermarket – Ruwi, Muscat façade view"
    },
    {
      src: Nesto1,
      alt: "Nesto Hypermarket Oman – storefront glazing and aluminium systems"
    },
    {
      src: Nesto3,
      alt: "Nesto Hypermarket Oman – storefront glazing and aluminium systems"
    }
  ],

  scopeOfWork: "Mark Aluminium’s scope included complete façade and glazing works for the retail complex.",
  features: [
    "Design, supply, fabrication and installation of aluminium glazed façade systems for the hypermarket’s main entrance and storefront.",
    "Aluminium framed doors, windows, and large glazed storefront assemblies for high-traffic access areas.",
    "Integration of curtain-wall or shopfront systems with retail operator and developer specifications.",
    "Provision of robust aluminium systems designed for commercial durability and long operational hours.",
    "Coordination with structural, signage and MEP interfaces to ensure smooth façade integration.",
    "Comprehensive QA/QC supervision, mock-up testing (if required), and complete hand-over documentation."
  ],

  facadeDetails: {
    system: "Stick-type or semi-unitised aluminium curtain-wall / storefront system for retail façade",
    profileSystem:
      "High-performance aluminium façade system equivalent to premium global commercial brands, customised for modular retail frontage",
    finish:
      "Polyester powder-coated aluminium, standard commercial tone (RAL 7035 Light Grey or RAL 7016 Anthracite), approx. 60 µm thickness",
    mullionDepth: "Approx. 120–150 mm (typical)",
    transomDepth: "Approx. 80–100 mm (typical)",
    thermalBreak:
      "Polyamide strip thermal-break within aluminium profiles to improve thermal performance under Muscat’s climate",
    anchorage:
      "Stainless steel fixings (AISI 316) or coated fixings suitable for high-use retail environments"
  },

  performanceHighlights: [
    "The façade emphasizes visibility and transparency vital for retail footfall attraction and merchandise display.",
    "Thermally broken aluminium profiles and Low-E glazing minimize solar gain, improving occupant comfort and HVAC efficiency.",
    "Durable aluminium systems accommodate frequent door operation, signage integration, and retail-specific wear and tear.",
    "Prefabricated and modular façade installation reduced on-site disruption and supported the fast-paced retail opening schedule."
  ],

  glassSpecification: {
    type: "Double Glazed Unit (DGU) – 6 mm clear + 12 mm argon cavity + 6 mm Low-E or laminated retail glass",
    coating: "Low-E clear or neutral tint for solar control and daylighting balance",
    uValue: "Approx. 1.6 W/m²K (to be verified)",
    solarHeatGainCoefficient: "Approx. 0.27–0.30 (to be verified)",
    vlt: "Approx. 50–55% (to be verified)",
    colourTone: "Clear or light neutral tint to enhance product visibility and interior brightness"
  },

  challenges:
    "High-traffic retail environment, solar exposure, and tight installation timelines during retail fit-out phase.",

  solution: [
    "Heavy-use retail areas demand durable materials — aluminium framing and hardware selected for long operational life and easy maintenance.",
    "Large glazed storefronts optimized using Low-E coatings and thermal breaks to limit solar load and preserve visual clarity.",
    "Retail schedules are often fast-tracked — Mark Aluminium’s modular fabrication enabled efficient site installation and rapid project turnover."
  ]
},
{
  id: "dar-hassan-villa",
  name: "Dar Hassan Villa – Muscat, Oman",
  region: "Oman",
  type: "Residential",
  city: "Muscat",
  status:"Completed",
  year: 2019,
  markScope: "Aluminium façade & glazing systems – design, supply, install",
  systemType: "Semi-unitised / stick-type aluminium façade system for villa elevations",
  glassType: "Double glazed Low-E assembly (6 + 12 + 6)",
  sector: "Luxury Residential Villa",
  area: "Approx. 2,350 m² built-up area",
  description:
    "Dar Hassan is a luxury villa overlooking the Gulf of Oman in Muscat. Designed by VMX Architects, the residence merges interior and exterior spaces through courtyards, green patios, and seamless glass façades that connect living spaces with landscaped gardens.",

  images: [
    {
      src: DharHassan1,
      alt: "Dar Hassan Villa – Coastal façade view, Muscat, Oman"
    },
    {
      src: DharHassan2,
      alt: "Dar Hassan Villa – Glazed courtyard and indoor-outdoor transition"
    },
      {
      src: DharHassan3,
      alt: "Dar Hassan Villa – Coastal façade view, Muscat, Oman"
    }, {
      src: DharHassan4,
      alt: "Dar Hassan Villa – Coastal façade view, Muscat, Oman"
    }, {
      src: DharHassan5,
      alt: "Dar Hassan Villa – Coastal façade view, Muscat, Oman"
    }, {
      src: DharHassan6,
      alt: "Dar Hassan Villa – Coastal façade view, Muscat, Oman"
    }, {
      src: DharHassan7,
      alt: "Dar Hassan Villa – Coastal façade view, Muscat, Oman"
    }, 
  ],

  scopeOfWork: "Mark Aluminium was responsible for complete façade and glazing solutions for this luxury residence.",
  features: [
    "Design, supply, fabrication and installation of aluminium windows, doors, and façade glazing systems for the villa.",
    "Custom aluminium architectural elements, including sliding systems, glazed partitions, and façade detailing.",
    "High-performance glazing and aluminium interface works designed to suit coastal exposure and luxury standards.",
    "Coordination with architect, structural engineer, and site team for façade integration and waterproofing.",
    "Comprehensive QA/QC process including mock-ups, installation supervision, documentation, and hand-over aligned with villa specifications."
  ],

  facadeDetails: {
    system: "Semi-unitised / stick-type aluminium façade system for large glazed villa elevations",
    profileSystem:
      "Premium aluminium façade system equivalent to global high-performance brands, customised for luxury villa architecture",
    finish:
      "Polyester powder-coated aluminium in neutral or earth tones matching the villa aesthetic, approx. 60 µm thickness",
    mullionDepth: "Approx. 150 mm (typical for large spans)",
    transomDepth: "Approx. 100 mm (typical)",
    thermalBreak:
      "Polyamide thermal-break strip within aluminium profiles for warm coastal climate performance",
    anchorage:
      "Stainless steel (AISI 316) fixings or equivalent corrosion-resistant anchors suitable for coastal exposure"
  },

  performanceHighlights: [
    "Façade design maximises indoor-outdoor connection through full-height glazing and courtyard integration.",
    "High-performance glazing and thermally broken aluminium profiles ensure thermal comfort and energy efficiency in coastal climate.",
    "Architectural detailing and premium finishes align with luxury villa design expectations.",
    "Custom façade geometries accommodate courtyards, patios, and water features, enhancing the villa’s open and light-filled character."
  ],

  glassSpecification: {
    type: "Double Glazed Unit (DGU) – 6 mm clear + 12 mm argon cavity + 6 mm Low-E coated glass",
    coating: "Low-E neutral or clear coating for solar control and daylight comfort",
    uValue: "Approx. 1.4–1.8 W/m²K (assumed)",
    solarHeatGainCoefficient: "Approx. 0.25–0.30 (assumed)",
    vlt: "Approx. 45–55% (assumed)",
    colourTone: "Neutral/clear or light blue-grey tint to maintain ocean views and reduce glare"
  },

  challenges:
    "Large glazed spans under warm coastal climate, corrosion risk from salt-laden air, and precise detailing for custom geometry.",

  solution: [
    "Used thermally broken aluminium profiles and Low-E glazing to handle solar load and maintain comfort.",
    "Applied corrosion-resistant finishes and AISI 316 fixings for long-term coastal durability.",
    "Custom fabrication and precision installation ensured the façade matched VMX Architects’ luxury and geometric design intent."
  ]
},

];
