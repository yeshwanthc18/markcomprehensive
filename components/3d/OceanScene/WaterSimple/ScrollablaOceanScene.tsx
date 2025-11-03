import * as THREE from "three";
import { useControls } from "leva";
import { useRef } from "react";
import { useScroll, useSpring } from "framer-motion";
import { useFrame } from "@react-three/fiber";
import OceanScene from "../OceanScene";
import CloudField from "../../CloudField";

function ScrollableOceanScene({
  modelContainerRef,
}: {
  modelContainerRef: React.RefObject<HTMLDivElement>;
}) {
  const oceanRef = useRef<THREE.Group>(null);

  const { oceanPosX, oceanPosY, oceanPosZ, oceanScale } = useControls(
    "Ocean Scene",
    {
      oceanPosX: { value: 0, min: -100, max: 100, step: 0.1 },
      oceanPosY: { value: 0, min: -100, max: 100, step: 0.1 },
      oceanPosZ: { value: 0, min: -100, max: 100, step: 0.1 },
      oceanScale: { value: 1, min: 0.1, max: 10, step: 0.1 },
    }
  );

  const { scrollYProgress } = useScroll({
    target: modelContainerRef,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.4,
  });

  useFrame(() => {
    const scroll = smoothScroll.get();
    if (oceanRef.current) {
      oceanRef.current.position.z = oceanPosZ + scroll * Math.PI * 4.5;
      oceanRef.current.rotation.y = scroll * 0.0005;
    }
  });

  return (
    <group
      ref={oceanRef}
      position={[oceanPosX, oceanPosY, oceanPosZ]}
      scale={oceanScale}
    >
      <OceanScene />
      <CloudField />
    </group>
  );
}

export default ScrollableOceanScene;
