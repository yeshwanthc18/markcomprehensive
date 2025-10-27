import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useCursor,
  MeshReflectorMaterial,
  Image,
  Text,
  Environment,
  Html,
} from "@react-three/drei";
import { useRoute, useLocation } from "wouter";
import { easing } from "maath";
import getUuid from "uuid-by-string";

const pexel = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;

type ProjectData = {
  position: [number, number, number];
  rotation: [number, number, number];
  url: string;
  name: string;
  region: string;
  type: string;
  city: string;
  year: string;
  status: string;
  area: string;
  description: string;
  system: string;
};

const projects: ProjectData[] = [
  {
    position: [0, 0, 1.5],
    rotation: [0, 0, 0],
    url: pexel(1103970),
    name: "Al Meera Hypermarket",
    region: "Oman",
    type: "Commercial",
    city: "Muscat",
    year: "2024",
    status: "Completed",
    area: "25,000 m²",
    description: "A modern hypermarket featuring a high-efficiency stick curtain wall system with shading fins and insulated roof glazing. Designed to maximize daylight and reduce energy consumption.",
    system: "Stick Curtain Wall with Shading Fins",
  },
  {
    position: [-0.8, 0, -0.6],
    rotation: [0, 0, 0],
    url: pexel(416430),
    name: "Alila Hotel",
    region: "Oman",
    type: "Hospitality",
    city: "Jabal Akhdar",
    year: "2023",
    status: "Completed",
    area: "30,000 m²",
    description: "A mountain resort blending natural stone architecture with contemporary façade systems, emphasizing sustainability and harmony with the surrounding landscape.",
    system: "Stone Cladding with Integrated Aluminum",
  },
  {
    position: [0.8, 0, -0.6],
    rotation: [0, 0, 0],
    url: pexel(310452),
    name: "Al Mouj Development",
    region: "Oman",
    type: "Residential",
    city: "Muscat",
    year: "2024",
    status: "In Progress",
    area: "50,000 m²",
    description: "A waterfront mixed-use development with contemporary glass façades and aluminum shading systems offering luxurious coastal living with marine-grade materials.",
    system: "Unitized Curtain Wall & Window Wall",
  },
  {
    position: [-1.75, 0, 0.25],
    rotation: [0, Math.PI / 2.5, 0],
    url: pexel(327482),
    name: "Dhar Hassan Villa",
    region: "Oman",
    type: "Residential",
    city: "Muscat",
    year: "2022",
    status: "Completed",
    area: "1,200 m²",
    description: "A luxury private villa featuring floor-to-ceiling glazing and locally crafted stone façades, creating a seamless indoor-outdoor connection.",
    system: "Hybrid Curtain Wall & Stone Cladding",
  },
  {
    position: [-2.15, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    url: pexel(325185),
    name: "Downe Tower",
    region: "Oman",
    type: "Highrise",
    city: "Muscat",
    year: "2023",
    status: "In Progress",
    area: "40,000 m²",
    description: "A contemporary highrise with a sleek glass façade utilizing a unitized system for rapid installation and superior thermal performance.",
    system: "Unitized Curtain Wall System",
  },
  {
    position: [-2, 0, 2.75],
    rotation: [0, Math.PI / 2.5, 0],
    url: pexel(358574),
    name: "Ibrahim Elite",
    region: "Oman",
    type: "Residential",
    city: "Muscat",
    year: "2023",
    status: "Completed",
    area: "18,000 m²",
    description: "A premium apartment complex featuring an elegant façade with vertical aluminum fins and solar-control glazing for improved comfort and privacy.",
    system: "Window Wall with Vertical Fins",
  },
  {
    position: [1.75, 0, 0.25],
    rotation: [0, -Math.PI / 2.5, 0],
    url: pexel(227675),
    name: "Juman Hotel",
    region: "Oman",
    type: "Hospitality",
    city: "Muscat",
    year: "2024",
    status: "Planned",
    area: "20,000 m²",
    description: "A 4-star beachfront hotel with panoramic glazing, combining transparency and performance through structural glass systems.",
    system: "Structural Glazing System",
  },
  {
    position: [2.15, 0, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    url: pexel(911738),
    name: "Rotana Hotel",
    region: "Oman",
    type: "Hospitality",
    city: "Muscat",
    year: "2023",
    status: "Completed",
    area: "35,000 m²",
    description: "Modern 4-star hotel featuring a glazed façade with integrated LED lighting and aluminum fins for an elegant night-time identity.",
    system: "Unitized Curtain Wall with LED",
  },
  {
    position: [2, 0, 2.75],
    rotation: [0, -Math.PI / 2.5, 0],
    url: pexel(1738986),
    name: "Pension Fund Building",
    region: "Oman",
    type: "Institutional",
    city: "Muscat",
    year: "2021",
    status: "Completed",
    area: "12,000 m²",
    description: "Institutional office building featuring a high-performance double-glazed façade and vertical shading screens for energy savings.",
    system: "Curtain Wall with External Screens",
  },
];

const GOLDENRATIO = 1.61803398875;

const RecentProjects = () => (
  <Canvas
    dpr={[1, 1.5]}
    camera={{ fov: 70, position: [0, 2, 15] }}
    style={{ width: "100dvw", height: "100dvh" }}
  >
    <color attach="background" args={["#191919"]} />
    <fog attach="fog" args={["#191919", 0, 15]} />
    <group position={[0, -0.5, 0]}>
      <Frames projects={projects} />
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={50}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#0a0a0a"
          metalness={0.5}
          mirror={0.5}
        />
      </mesh>
    </group>
    <Environment preset="city" />
  </Canvas>
);

function Frames({
  projects,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
}: {
  projects: ProjectData[];
  q?: THREE.Quaternion;
  p?: THREE.Vector3;
}) {
  const ref = useRef<THREE.Group>(null!);
  const clicked = useRef<THREE.Object3D | null>(null);
  const [, params] = useRoute<{ id: string }>("/item/:id");
  const [, setLocation] = useLocation();

  useEffect(() => {
    clicked.current =
      ref.current.getObjectByName(params?.id ?? "/item/:id") || null;
    if (clicked.current) {
      clicked.current.parent?.updateWorldMatrix(true, true);
      clicked.current.parent?.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25));
      clicked.current.parent?.getWorldQuaternion(q);
    } else {
      p.set(0, 0, 5.5);
      q.identity();
    }
  }, [params, p, q]);

  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt);
    easing.dampQ(state.camera.quaternion, q, 0.4, dt);
  });

  return (
    <group
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        setLocation(
          clicked.current === e.object ? "/" : "/item/" + e.object.name
        );
      }}
      onPointerMissed={() => setLocation("/")}
    >
      {projects.map((props) => (
        <Frame key={props.url} {...props} />
      ))}
    </group>
  );
}

function Frame({
  url,
  name,
  region,
  type,
  city,
  year,
  status,
  area,
  description,
  system,
  c = new THREE.Color(),
  ...props
}: ProjectData & { c?: THREE.Color }) {
  const image = useRef<THREE.Mesh>(null!);
  const frame = useRef<THREE.Mesh>(null!);
  const group = useRef<THREE.Group>(null!);
  const [, params] = useRoute<{ id: string }>("/item/:id");
  const [hovered, hover] = useState(false);
  const [rnd] = useState(() => Math.random());
  const uuid = getUuid(url);
  const isActive = params?.id === uuid;
  useCursor(hovered);

  useFrame((state, dt) => {
    const img = image.current as any;
    if (img?.material) {
      img.material.zoom =
        2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;
    }

    if (group.current) {
      const targetRotation = isActive ? Math.PI : 0;
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetRotation,
        dt * 3
      );
    }

    easing.damp3(
      image.current.scale,
      [
        0.85 * (!isActive && hovered ? 0.85 : 1),
        0.9 * (!isActive && hovered ? 0.905 : 1),
        1,
      ],
      0.1,
      dt
    );
    easing.dampC(
      (frame.current.material as THREE.MeshBasicMaterial).color,
      hovered ? "orange" : "white",
      0.1,
      dt
    );
  });

  return (
    <group {...props}>
      <group ref={group}>
        {/* Front - Image */}
        <mesh
          name={uuid}
          onPointerOver={(e) => {
            e.stopPropagation();
            hover(true);
          }}
          onPointerOut={() => hover(false)}
          scale={[1, GOLDENRATIO, 0.05]}
          position={[0, GOLDENRATIO / 2, 0]}
        >
          <boxGeometry />
          <meshStandardMaterial
            color="#151515"
            metalness={0.5}
            roughness={0.5}
            envMapIntensity={2}
          />
          <mesh
            ref={frame}
            raycast={() => null}
            scale={[0.9, 0.93, 0.9]}
            position={[0, 0, 0.2]}
          >
            <boxGeometry />
            <meshBasicMaterial toneMapped={false} fog={false} />
          </mesh>
          <Image
            raycast={() => null}
            ref={image as any}
            position={[0, 0, 0.7]}
            url={url}
          />
        </mesh>

        {/* Back - Project Details */}
        <mesh
          position={[0, GOLDENRATIO / 2, 0]}
          rotation={[0, Math.PI, 0]}
          scale={[1, GOLDENRATIO, 0.05]}
        >
          <boxGeometry />
          <meshStandardMaterial
            color="#1c345c"
            metalness={0.3}
            roughness={0.7}
          />
          <Html
            transform
            position={[0, 0, 0.3]}
            distanceFactor={0.78}
            style={{
              width: "270px",
              height: "420px",
              background: "#1c345c",
              padding: "20px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "inset 0 0 0 2px #01adff",
              overflow: "auto",
              fontFamily: "system-ui, -apple-system, sans-serif",
              pointerEvents: "auto",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginBottom: "8px",
                  lineHeight: "1.2",
                }}
              >
                {name}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  opacity: 0.8,
                  marginBottom: "16px",
                  display: "flex",
                  gap: "12px",
                }}
              >
                <span>{city}, {region}</span>
                <span>•</span>
                <span>{type}</span>
              </div>
              
              <div
                style={{
                  fontSize: "13px",
                  opacity: 0.95,
                  marginBottom: "16px",
                  lineHeight: "1.6",
                  fontWeight: "500",
                }}
              >
                DESCRIPTION
              </div>
              <div
                style={{
                  fontSize: "12px",
                  opacity: 0.9,
                  marginBottom: "18px",
                  lineHeight: "1.5",
                }}
              >
                {description}
              </div>
              
              <div style={{ marginBottom: "14px" }}>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: "600",
                    marginBottom: "8px",
                    opacity: 0.8,
                  }}
                >
                  SYSTEM
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    padding: "6px 12px",
                    background: "#01adff",
                    borderRadius: "4px",
                    display: "inline-block",
                    color: "#1c345c",
                    fontWeight: "600",
                  }}
                >
                  {system}
                </div>
              </div>
            </div>
            
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                  fontSize: "12px",
                  opacity: 0.9,
                }}
              >
                <div>
                  <div style={{ opacity: 0.7, marginBottom: "4px" }}>Area</div>
                  <div style={{ fontWeight: "600" }}>{area}</div>
                </div>
                <div>
                  <div style={{ opacity: 0.7, marginBottom: "4px" }}>Year</div>
                  <div style={{ fontWeight: "600" }}>{year}</div>
                </div>
                <div>
                  <div style={{ opacity: 0.7, marginBottom: "4px" }}>Status</div>
                  <div style={{ fontWeight: "600" }}>{status}</div>
                </div>
              </div>
              
              <button
                style={{
                  width: "100%",
                  padding: "10px 16px",
                  background: "#01adff",
                  border: "1px solid #01adff",
                  borderRadius: "6px",
                  color: "#1c345c",
                  fontSize: "12px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                View Project Details
              </button>
            </div>
          </Html>
        </mesh>

        <Text
          maxWidth={0.1}
          anchorX="left"
          anchorY="top"
          position={[0.55, GOLDENRATIO, 0]}
          fontSize={0.025}
          color="#ffffff"
        >
          {name}
        </Text>
      </group>
    </group>
  );
}

export default RecentProjects;