import {  Environment, useScroll } from "@react-three/drei";
import {  useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Group, MathUtils, Mesh, MeshStandardMaterial } from "three";

import SimpleOcean from "./WaterSimple/SimpleOcean";


const OceanScene = () => {
  const { camera } = useThree();

  const oceanGroupRef = useRef<Group>(null);
  const groupRef = useRef<Group>(null);


  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

useEffect(() => {
  if (oceanGroupRef.current) {
    oceanGroupRef.current.traverse((child) => {
      child.layers.set(1); 
    });
  }
  camera.layers.enable(1); 
}, [camera]);



  if (!isMounted) return null;

  return (
    <group ref={oceanGroupRef} frustumCulled={false} renderOrder={-1}>
      <group ref={groupRef}>


        <SimpleOcean />
      </group>

      {/* <Environment files="/textures/ocean/sunset_env.hdr" background /> */}
    </group>
  );
};

export default OceanScene;
