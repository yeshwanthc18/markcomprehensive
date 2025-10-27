import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollTriggerComponent from "@/components/animations/scroll-trigger";
import { Award, Users, Leaf, Zap, Shield, Heart } from "lucide-react";

const palette = {
  primary: "#01adff",
  primaryDeep: "#1c345c",
  secondary: "#001952",
};

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "Uncompromising commitment to quality in every aspect of our work, from design to delivery.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "Building strong, collaborative relationships with clients, suppliers, and team members.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Creating environmentally responsible solutions that contribute to a sustainable future.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Continuously pushing boundaries with cutting-edge technology and creative solutions.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Conducting business with honesty, transparency, and ethical practices in all our dealings.",
  },
  {
    icon: Heart,
    title: "Care",
    description:
      "Genuine concern for our people, clients, and communities, fostering long-term relationships.",
  },
];

export default function AboutValuesSection() {
  return (
    <section className="py-24 ">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Core <span className="text-[#01adff]">Values</span>
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
            </div>
            <p className="mt-6 text-lg md:text-xl text-white max-w-3xl mx-auto">
              The principles that guide our decisions, shape our culture, and
              drive our commitment to excellence.
            </p>
          </div>
        </ScrollTriggerComponent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ScrollTriggerComponent
              key={index}
              animation="scaleIn"
              stagger={0.8}
            >
              <Card className="h-full border border-black/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-black/20 backdrop-blur-xl">
                <CardHeader className="text-center pb-4">
                  <div
                    className="mx-auto mb-4 p-4  w-fit"
                    style={{
                      backgroundColor: `${palette.primary}1A`,
                      color: palette.primary,
                    }}
                  >
                    <value.icon className="h-8 w-8" />
                  </div>
                  <CardTitle
                    className="text-xl"
                    style={{ color: "white" }}
                  >
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="leading-relaxed text-white/70">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollTriggerComponent>
          ))}
        </div>
      </div>
    </section>
  );
}
