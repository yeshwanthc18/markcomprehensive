// "use client"

import { useLenis } from "@/components/animated/Lenis";
import ProjectShowcase from "./projects-showcase"
import ProjectShowcaseNew from "./ProjectShowcaseNew/ProjectShowcaseNew";
import BackgroundGradientAnimation from "@/components/animated/background-gradient-animation";

export default function ProjectsPage() {
  //  useLenis();
  return (
    <BackgroundGradientAnimation>
      <ProjectShowcaseNew />
    </BackgroundGradientAnimation>
  )
}
