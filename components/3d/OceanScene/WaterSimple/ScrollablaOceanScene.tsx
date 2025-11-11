import * as THREE from "three";
import { useRef } from "react";
import { useScroll, useSpring } from "framer-motion";
import { useFrame } from "@react-three/fiber";
import OceanScene from "../OceanScene";

function ScrollableOceanScene({
  modelContainerRef,
}: {
  modelContainerRef: React.RefObject<HTMLDivElement>;
}) {
  const oceanRef = useRef<THREE.Group>(null);
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
      oceanRef.current.position.z = 0 + scroll * Math.PI * 4.5;
      oceanRef.current.rotation.y = scroll * 0.0005;
    }
  });

  return (
    <group
      ref={oceanRef}
      position={[0, 0, 0]}
      scale={1}
    >
      <OceanScene />
    </group>
  );
}

export default ScrollableOceanScene;
