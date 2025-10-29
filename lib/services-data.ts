import {
  Building2,
  Zap,
  Leaf,
  Wrench,
  Shield,
  Hammer,
  Wind,
} from "lucide-react";
import DharHassan4 from "@/public/compressed-images/project-photos/DHAR HASSAN VILLA/IMG_6551.jpg";
import DharHassan5 from "@/public/compressed-images/project-photos/DHAR HASSAN VILLA/IMG_6608.jpg";
import DharHassan6 from "@/public/compressed-images/project-photos/DHAR HASSAN VILLA/IMG_6728.jpg";
import DharHassan7 from "@/public/compressed-images/project-photos/DHAR HASSAN VILLA/IMG_6750.jpg";

export const servicesData = [
  {
    icon: Building2,
    title: "Curtain Wall Systems",
    link: "/services/curtain-wall",
    description:
      "A non-structural cladding system using glass panels secured in aluminium frames. Materials and glass types are selected for aesthetic intent and performance, similar to facade glazing.",
    features: [
      "Curtain wall systems with thermal breaks",
      "Structural glazing for seamless appearance",
      "Point-fixed glazing with minimal framework",
      "Double-skin facades for enhanced performance",
      "Energy-efficient glass options and coatings",
      "Custom glazing solutions for unique designs",
    ],
    color: "bg-blue-100 text-[#01adff]",
    image: DharHassan4,
    specs: {
      thermalPerformance: "U-value: 0.8-1.2 W/m²K",
      acousticRating: "35-45 dB reduction",
      waterResistance: "Class E1200 (600 Pa)",
      windResistance: "Up to 2400 Pa",
      fireRating: "EI30-EI60 available",
    },
    category: "Glazing",
  },
  {
    icon: Zap,
    title: "Point Fixed Glass Facade",
    link: "/services/point-fixed-glass-facade",
    description:
      "Spider fittings and point-fixation systems in stainless steel support tempered/laminated glass panels for highly transparent facades.",
    features: [
      "Automated skylights with weather sensors",
      "Smart glass technology with variable opacity",
      "Remote access control and monitoring",
      "Weather-responsive opening systems",
      "Integration with building management systems",
      "Emergency smoke evacuation capabilities",
    ],
    color: "bg-green-100 text-green-600",
    image: DharHassan5,
    specs: {
      thermalPerformance: "U-value: 1.0-1.5 W/m²K",
      acousticRating: "30-40 dB reduction",
      waterResistance: "Class E900 (450 Pa)",
      windResistance: "Up to 2000 Pa",
      automationResponse: "< 30 seconds",
    },
    category: "Smart Systems",
  },
  {
    icon: Leaf,
    title: "Hinged Doors & Windows (MH Series)",
    link: "/services/hinged-doors-windows",
    description:
      "Hinged doors/windows with premium aluminium frames and glass panels. Designed for residential and commercial facades with smooth operation and lasting durability",
    features: [
      "Interior glass partitions with acoustic properties",
      "Movable wall systems for flexible spaces",
      "Decorative glass elements and artistic features",
      "Acoustic wall systems for noise control",
      "Custom design solutions for unique requirements",
      "Integration with lighting and HVAC systems",
    ],
    color: "bg-amber-100 text-amber-600",
    image: DharHassan6,
    specs: {
      acousticRating: "40-50 dB reduction",
      fireRating: "Up to 60 minutes",
      customization: "Extensive design options",
      installation: "Modular system design",
      maintenance: "Low maintenance required",
    },
    category: "Interior",
  },
  {
    icon: Wrench,
    title: "Sliding Doors & Windows (MS Series)",
    link: "/services/sliding-doors-windows",
    description:
      "Sliding windows/doors with 2-3 leaf options, fly screen/louver integrations, and fixed combinations to fit diverse layouts.",
    features: [
      "Thermal break technology for energy efficiency",
      "Multi-point locking systems for security",
      "Sound insulation options for quiet environments",
      "Custom finishes and color options",
      "Advanced security features and hardware",
      "Weather sealing for all climates",
    ],
    color: "bg-purple-100 text-purple-600",
    image: DharHassan7,
    specs: {
      thermalPerformance: "U-value: 0.9-1.4 W/m²K",
      acousticRating: "35-45 dB reduction",
      airPermeability: "Class 4 (≤ 3 m³/h·m²)",
      securityRating: "RC2-RC3 certified",
      weatherSealing: "Class 9A certified",
    },
    category: "Openings",
  },
  {
    icon: Shield,
    title: "Folding Doors (MF Series)",
    link: "/services/folding-doors",
    description:
      "Bi-fold/accordion systems that fold and stack, creating wide openings with uninterrupted views using robust aluminium frames and glass panels.",
    features: [
      "Aluminum composite panels with various finishes",
      "Rainscreen systems for moisture management",
      "Decorative cladding with custom patterns",
      "Custom finishes and architectural details",
      "Weather-resistant materials and coatings",
      "Sustainable and recyclable options",
    ],
    color: "bg-red-100 text-red-600",
    image: DharHassan5,
    specs: {
      weatherResistance: "Excellent (25+ years)",
      fireRating: "Class A non-combustible",
      durability: "25+ year warranty",
      maintenance: "Minimal cleaning required",
      sustainability: "100% recyclable",
    },
    category: "Cladding",
  },
  {
    icon: Hammer,
    title: "Swing Doors",
    link: "/services/swing-doors",
    description:
      "Swing doors crafted with sleek aluminium frames and glass panels to bring durability and luminous interiors with simple, reliable operation.",
    features: [
      "Fire-resistant glazing with integrity ratings",
      "Smoke control systems for safe evacuation",
      "Emergency exit doors with panic hardware",
      "Compartmentation solutions for fire spread prevention",
      "Full regulatory compliance and certification",
      "Integration with fire alarm systems",
    ],
    color: "bg-orange-100 text-orange-600",
    image: DharHassan6,
    specs: {
      fireRating: "EI30-EI120 certified",
      smokeControl: "Sa/S200 classification",
      integrity: "Up to 120 minutes",
      insulation: "Up to 120 minutes",
      compliance: "All major building codes",
    },
    category: "Safety",
  },
];
