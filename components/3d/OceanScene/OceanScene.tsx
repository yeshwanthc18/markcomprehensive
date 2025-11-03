import { Environment, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Group, MathUtils, Mesh, MeshStandardMaterial } from "three";

import OceanBackground from "./OceanBackground";
import OilRig from "./OilRig";
import SimpleOcean from "./WaterSimple/SimpleOcean";
import ThreeDViewer from "../Three";

const OceanScene = () => {
  const { camera } = useThree();

  const scroll = useScroll();
  const oceanGroupRef = useRef<Group>(null);
  const groupRef = useRef<Group>(null);
  const opacityRef = useRef(1); // Store opacity in useRef to prevent re-renders

  const scrollStartingPoint = 0.3;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Inside OceanScene.tsx
useEffect(() => {
  if (oceanGroupRef.current) {
    oceanGroupRef.current.traverse((child) => {
      child.layers.set(1); // assign layer 1 to ocean
    });
  }
  camera.layers.enable(1); // make camera also render layer 1
}, [camera]);


  // useFrame(() => {
  //   if (!oceanGroupRef.current || !groupRef.current) return;

  //   const scrollOffset = scroll.offset;

  //   //Conditional Visibility
  //   const targetOpacity = scrollOffset >= 0.14 && scrollOffset <= 0.73 ? 1 : 0;
  //   opacityRef.current = MathUtils.lerp(opacityRef.current, targetOpacity, 0.1); // Smooth transition without causing re-renders

  //   groupRef.current.children.forEach((child) => {
  //     if (child instanceof Mesh) {
  //       (child.material as MeshStandardMaterial).opacity = opacityRef.current;
  //     }
  //   });

  //   //Camera animation to show the earth core

  //   if (camera) {
  //     let targetZ = scrollOffset >= 0.52 ? 10 : 5; // Default z position
  //     let targetY = 0; // Default y position

  //     //Here we are keeping 0.88 condition top because if we don't then the other condition will only execute
  //     if (scrollOffset > 0.69) {
  //       // When scrollOffset > 0.88, set z to 60 and animate y
  //       targetZ = 60;
  //       const speedFactor = MathUtils.lerp(
  //         15,
  //         20,
  //         Math.min(1, Math.max(0, (scrollOffset - 0.68) / (1 - 0.68)))
  //       );
  //       targetY = -scrollOffset * speedFactor * 2.2;
  //     } else if (scrollOffset > 0.62) {
  //       // When scrollOffset > 0.82, set z to 32.5
  //       targetZ = 32.5;
  //     }

  //     gsap.to(camera.position, {
  //       y: targetY,
  //       z: targetZ,
  //       duration: 1.3,
  //       ease: "power2.out",
  //     });
  //   }

  //   //......Actual Scroll
  //   if (scrollOffset > scrollStartingPoint && scrollOffset < 0.52) {
  //     // Apply scroll effect when outside the snapping range

  //     // const speed = scrollOffset < 0.3 ? 100 : 250;
  //     const speed = 50 + 400 * Math.pow((scrollOffset - 0.3) / 0.3, 1.5);

  //     let speedFactor = MathUtils.lerp(
  //       0.5,
  //       speed,
  //       Math.min(
  //         1,
  //         Math.max(
  //           0,
  //           (scrollOffset - scrollStartingPoint) / (1 - scrollStartingPoint)
  //         )
  //       )
  //     );

  //     gsap.to(oceanGroupRef.current.position, {
  //       y: scrollOffset * speedFactor,
  //       duration: 0.5,
  //       ease: "power2.out",
  //     });
  //   }
  // });

  if (!isMounted) return null;

  return (
    <group ref={oceanGroupRef} frustumCulled={false} renderOrder={-1}>
      <group ref={groupRef}>

        {/* <Windmills /> */}
        {/* <OceanBackground /> */}
        {/* <OilRig /> */}
        <SimpleOcean />
        {/* <CustomGodRays /> */}
      </group>

      {/* <Environment files="/textures/ocean/sunset_env.hdr" background /> */}
    </group>
  );
};

export default OceanScene;
