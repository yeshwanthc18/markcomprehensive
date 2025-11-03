import { useScroll } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";
import WaterSimple from "./WaterSimple.js";

const SimpleOcean = () => {
  const groupRef = useRef<THREE.Group>(null!);
  // ✅ Use a mutable variable instead of assigning to ref.current (to satisfy TS)
  const waterMesh = useRef<THREE.Mesh | null>(null);

  // ✅ Load water normal texture
  const waterNormals = useLoader(
    THREE.TextureLoader,
    "/textures/ocean/waternormals.jpg"
  );
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

  // ✅ Optional scroll (if used)
  const scroll = useScroll();

  // 🎛 Leva controls
  const { position, waterColor, distortionScale } = useControls("🌊 Ocean Controls", {
    position: {
      value: [0, -170, 0],
      step: 0.1,
      label: "Position (x, y, z)",
    },
    waterColor: {
      value: "#1ba5d7",
      label: "Water Color",
    },
    distortionScale: {
      value: 0.7,
      min: 0,
      max: 5,
      step: 0.1,
      label: "Distortion Scale",
    },
  });

  // ✅ Create & add water mesh
  useEffect(() => {
    if (!groupRef.current) return;

    const water = new WaterSimple(new THREE.PlaneGeometry(2000, 2000, 128, 128), {
      textureWidth: 1024,
      textureHeight: 1024,
      waterNormals,
      sunDirection: new THREE.Vector3(1, 1, 1).normalize(),
      sunColor: 0xffffff,
      waterColor,
      distortionScale,
      side: THREE.DoubleSide,
    });

    water.rotation.x = -Math.PI / 2;
    groupRef.current.add(water);
    waterMesh.current = water; // ✅ Safe assignment

    return () => {
      if (groupRef.current && waterMesh.current) {
        groupRef.current.remove(waterMesh.current);
      }
    };
  }, [waterNormals, waterColor, distortionScale]);

  // ✅ Animate water surface
  useFrame((_, delta) => {
    if (!waterMesh.current) return;

    const material: any = waterMesh.current.material;
    if (material?.uniforms?.time) {
      material.uniforms.time.value += delta * 0.5;
    }

    // Optional scroll-based interaction
    if (scroll && material.uniforms?.underwaterBlueIntensity) {
      material.uniforms.underwaterBlueIntensity.value = Math.min(
        0.75,
        scroll.offset / 3
      );
    }
  });

  return <group ref={groupRef} position={position} renderOrder={1} />;
};

export default SimpleOcean;
