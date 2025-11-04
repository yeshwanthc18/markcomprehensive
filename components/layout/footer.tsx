import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Award,
  Shield,
  Zap,
  Leaf,
  Star,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Logo from "../../public/compressed-images/LogoMark.png";
import Overlay from "../../public/compressed-images/bg2.png";
import Image from "@/components/SmartImage";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Façade Design & Engineering", href: "/services" },
    { name: "Precision Fabrication", href: "/services" },
    { name: "Professional Installation", href: "/services" },
    { name: "Maintenance & Support", href: "/services" },
  ];

  const company = [
    { name: "About Mark Comprehensive", href: "/about" },
    { name: "Project Portfolio", href: "/portfolio" },
    { name: "Global Locations", href: "/contact" },
    { name: "Career Opportunities", href: "/careers" },
  ];

  const locations = [
    {
      name: "Kerala, India",
      city: "Kochi",
      address: "Marine Drive, Ernakulam, Kochi, Kerala 682031, India",
      phone: "+91 484 235 6789",
      email: "kerala@markcomprehensive.com",
      timezone: "IST (UTC+5:30)",
      languages: ["Malayalam", "English", "Tamil", "Hindi"],
    },
    {
      name: "Bangalore, India",
      city: "Bangalore",
      address:
        "UB City Mall, Vittal Mallya Road, Bangalore, Karnataka 560001, India",
      phone: "+91 80 4567 8901",
      email: "bangalore@markcomprehensive.com",
      timezone: "IST (UTC+5:30)",
      languages: ["English", "Kannada", "Hindi", "Tamil"],
    },
    {
      name: "UAE",
      city: "Dubai",
      address:
        "Sheikh Zayed Road, Dubai International Financial Centre, Dubai, UAE",
      phone: "+971 4 567 8901",
      email: "uae@markcomprehensive.com",
      timezone: "GST (UTC+4)",
      languages: ["Arabic", "English", "Hindi", "Urdu"],
    },
    {
      name: "Oman",
      city: "Muscat",
      address: "Al Khuwair, Muscat Governorate, Sultanate of Oman",
      phone: "+968 2456 7890",
      email: "oman@markcomprehensive.com",
      timezone: "GST (UTC+4)",
      languages: ["Arabic", "English", "Hindi", "Baluchi"],
    },
    {
      name: "Iraq",
      city: "Baghdad",
      address: "Karrada District, Baghdad, Republic of Iraq",
      phone: "+964 1 789 0123",
      email: "iraq@markcomprehensive.com",
      timezone: "AST (UTC+3)",
      languages: ["Arabic", "Kurdish", "English"],
    },
    {
      name: "Saudi Arabia",
      city: "Riyadh",
      address: "King Fahd Road, Riyadh 12213, Kingdom of Saudi Arabia",
      phone: "+966 11 456 7890",
      email: "saudi@markcomprehensive.com",
      timezone: "AST (UTC+3)",
      languages: ["Arabic", "English"],
    },
  ];

  const certifications = [
    { icon: Award, name: "LEED Platinum", desc: "Sustainable Building" },
    { icon: Shield, name: "ISO 9001:2015", desc: "Quality Management" },
    { icon: Zap, name: "Energy Star", desc: "Energy Efficiency" },
    { icon: Leaf, name: "BREEAM", desc: "Environmental Assessment" },
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "6", label: "Global Locations" },
    { number: "1000+", label: "Happy Clients" },
  ];

  return (
    <footer className="text-white relative" style={{ backgroundColor: "#001952" }}>
{/*     
        <div className="absolute inset-y-0 right-0 w-1/2">
          <Image
            src={Overlay}
            alt="Background overlay"
            fill
            priority
            className="object-cover object-right"
          />
 
      </div> */}

      {/* Main Footer Content */}
      <div className="container mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-4">
              <div>
                <Image src={Logo} alt="Mark" width={150} />
              </div>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Leading the industry in architectural aluminum systems design,
              fabrication, and installation. Transforming skylines worldwide
              with innovative façade solutions since 1999.
            </p>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-md"
                  style={{ backgroundColor: "#1c345c" }}
                >
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{ color: "#01adff" }}
                  >
                    {achievement.number}
                  </div>
                  <div className="text-xs text-gray-400">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h4
                className="text-sm font-semibold uppercase tracking-wide"
                style={{ color: "#01adff" }}
              >
                Certifications & Standards
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-3  rounded-md  hover:opacity-80 transition-colors"
                    style={{ backgroundColor: "#1c345c" }}
                  >
                    <cert.icon
                      className="h-4 w-4 flex-shrink-0"
                      style={{ color: "#01adff" }}
                    />
                    <div>
                      <div className="text-xs font-medium text-white">
                        {cert.name}
                      </div>
                      <div className="text-xs text-gray-400">{cert.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="heading-sm text-white mb-8">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="group flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <ArrowRight
                      className="h-4 w-4 mr-3 group-hover:translate-x-1 transition-transform"
                      style={{ color: "#01adff" }}
                    />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <h4
                className="text-sm font-semibold uppercase tracking-wide mb-4"
                style={{ color: "#01adff" }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Global Locations */}
          <div>
            <h3 className="heading-sm text-white mb-8">Global Presence</h3>
            <div className="space-y-4">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="p-4  rounded-md hover:opacity-80 transition-colors"
                  style={{ backgroundColor: "#1c345c" }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-semibold text-white text-sm">
                        {location.name}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {location.city}
                      </div>
                    </div>
                    <Globe className="h-4 w-4" style={{ color: "#01adff" }} />
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-300">
                    <Phone className="h-3 w-3" style={{ color: "#01adff" }} />
                    <span>{location.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="heading-sm text-white mb-8">Get In Touch</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div
                  className="w-10 h-10  rounded-md flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(1, 173, 255, 0.2)" }}
                >
                  <Phone className="h-5 w-5" style={{ color: "#01adff" }} />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm mb-1">
                    24/7 Support
                  </div>
                  <div className="text-gray-300 text-sm">+968 9131 5526</div>
                  <div className="text-gray-400 text-xs">
                    Emergency: +1 (212) 555-HELP
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div
                  className="w-10 h-10  rounded-md flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(1, 173, 255, 0.2)" }}
                >
                  <Mail className="h-5 w-5" style={{ color: "#01adff" }} />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm mb-1">
                    Email Us
                  </div>
                  <div className="text-gray-300 text-sm">
                    info@markcomprehensive.com
                  </div>
                  <div className="text-gray-400 text-xs">
                    quotes@markcomprehensive.com
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div
                  className="w-10 h-10  rounded-md flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(1, 173, 255, 0.2)" }}
                >
                  <MapPin className="h-5 w-5" style={{ color: "#01adff" }} />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm mb-1">
                    Headquarters
                  </div>
                  <div className="text-gray-300 text-sm">350 Fifth Avenue</div>
                  <div className="text-gray-400 text-xs">
                    Mark Comprehensive LLP Kunnamangalam, Calicut, Kerala, India - 673571
                  </div>
                </div>
              </div>
            </div>

            {/* Professional CTA */}
            <div
              className="p-6  rounded-md"
              style={{ backgroundColor: "#01adff" }}
            >
              <h4 className="font-bold text-white mb-2">Ready to Start?</h4>
              <p className="text-white/80 text-sm mb-4">
                Get your free consultation today
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white px-4 py-2  rounded-md font-semibold text-sm hover:bg-gray-100 transition-colors"
                style={{ color: "#01adff" }}
              >
                Get Free Quote
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Contact Banner */}
      <div
        style={{ backgroundColor: "#001952", borderTop: "1px solid #01adff" }}
      >
        <div className="container mx-auto container-padding py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mb-0 text-center lg:text-left">
              <h3 className="heading-md text-white mb-2">
                Transform Your Building Today
              </h3>
              <p className="text-white/80 body-md">
                Contact our global team of façade experts for a personalized
                consultation and competitive quote.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="h-5 w-5" />
                <div>
                  <div className="font-semibold text-white">
                    +968 9131 5526
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="bg-white px-8 py-3  rounded-md font-semibold hover:bg-gray-100 transition-colors text-center shadow-lg"
                style={{ color: "#01adff" }}
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Bottom Bar */}
      <div
        style={{ backgroundColor: "#000000", borderTop: "1px solid #1c345c" }}
      >
        <div className="container mx-auto container-padding py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-8">
              <p className="text-gray-400 text-sm">
                © {currentYear} Mark Comprehensive LLC. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-gray-400 text-sm">
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" style={{ color: "#01adff" }} />
                  <span>6 Countries • 500+ Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span>ISO 9001 Certified</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/accessibility"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Accessibility
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
