"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PointerLockControls, Environment, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

// 🎮 PLAYER SETTINGS - Adjust these values to change movement behavior
const PLAYER_SETTINGS = {
  SPEED: 0.05,           // 👉 Adjust movement speed (higher = faster)
  HEIGHT: 1,           // 👉 Adjust player eye level (meters from floor)
  MOUSE_SENSITIVITY: 1,  // 👉 Adjust mouse look sensitivity
};

// 🧱 MODEL BOUNDARIES - Adjust these based on your 3D model size
// ⚠️ IMPORTANT: Measure your model in Blender/3D editor to get accurate bounds
const BOUNDS = {
  xMin: -3,    // 👉 Adjust left boundary
  xMax: 3,     // 👉 Adjust right boundary  
  zMin: -3,    // 👉 Adjust back boundary
  zMax: 3,     // 👉 Adjust front boundary
  yMin: 0.5,   // 👉 Adjust minimum height (prevent going through floor)
  yMax: 4,     // 👉 Adjust maximum height (prevent flying too high)
};

// 🎯 INITIAL CAMERA POSITION - Adjust starting position
const INITIAL_CAMERA_POSITION = {
  x: 1,        // 👉 Adjust starting X position
  y: 1.8,      // 👉 Adjust starting Y position (eye height)
  z: 2,        // 👉 Adjust starting Z position
};

function BuildingModel() {
  const { scene } = useGLTF("/office_building/servicepagemodel.glb");

  // 🎨 MATERIAL SETTINGS - Adjust visual appearance
  scene.traverse((child: any) => {
    if (child.isMesh) {
      child.material.metalness = 0.3;    // 👉 Adjust metal reflection (0-1)
      child.material.roughness = 0.4;    // 👉 Adjust surface roughness (0-1)
      
      // 🔦 Enable shadows for better realism
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <primitive 
      object={scene} 
      scale={1.5}        // 👉 Adjust model scale if too big/small
      position={[0, -2, 0]} // 👉 Adjust model vertical position
    />
  );
}

function PlayerControls() {
  const { camera } = useThree();
  const keys = useRef<{ [key: string]: boolean }>({});
  const moveForward = useRef(false);
  const moveBackward = useRef(false);
  const moveLeft = useRef(false);
  const moveRight = useRef(false);

  // ⌨️ Keyboard input handling
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
          moveForward.current = true;
          break;
        case 'KeyS':
        case 'ArrowDown':
          moveBackward.current = true;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          moveLeft.current = true;
          break;
        case 'KeyD':
        case 'ArrowRight':
          moveRight.current = true;
          break;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
          moveForward.current = false;
          break;
        case 'KeyS':
        case 'ArrowDown':
          moveBackward.current = false;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          moveLeft.current = false;
          break;
        case 'KeyD':
        case 'ArrowRight':
          moveRight.current = false;
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // 🚶 Movement logic with proper collision prevention
  useFrame(() => {
    const direction = new THREE.Vector3();
    const frontVector = new THREE.Vector3();
    const sideVector = new THREE.Vector3();

    // Get camera direction (ignore Y axis for ground movement)
    camera.getWorldDirection(frontVector);
    frontVector.y = 0;
    frontVector.normalize();

    // Calculate side movement vector
    sideVector.crossVectors(camera.up, frontVector).normalize();

    // Apply movement based on input
    if (moveForward.current) direction.add(frontVector);
    if (moveBackward.current) direction.sub(frontVector);
    if (moveLeft.current) direction.sub(sideVector);
    if (moveRight.current) direction.add(sideVector);

    // Normalize and apply speed
    direction.normalize();
    camera.position.addScaledVector(direction, PLAYER_SETTINGS.SPEED);

    // 🚧 ENFORCE BOUNDARIES - Player cannot leave the model area
    camera.position.x = THREE.MathUtils.clamp(
      camera.position.x,
      BOUNDS.xMin,
      BOUNDS.xMax
    );
    camera.position.y = THREE.MathUtils.clamp(
      camera.position.y,
      BOUNDS.yMin,
      BOUNDS.yMax
    );
    camera.position.z = THREE.MathUtils.clamp(
      camera.position.z,
      BOUNDS.zMin,
      BOUNDS.zMax
    );
  });

  return (
    <PointerLockControls 
      // 🖱️ Mouse look sensitivity
      pointerSpeed={PLAYER_SETTINGS.MOUSE_SENSITIVITY}
    />
  );
}



export default function ServicePageWalkthrough() {
  return (
    <div className="w-full h-screen bg-black relative">
      {/* 🎪 Instructions for users */}
      {/* <InstructionsOverlay /> */}
      
      <Canvas
        // 📍 INITIAL CAMERA SETUP - Adjust starting view
        camera={{ 
          position: [
            INITIAL_CAMERA_POSITION.x, 
            INITIAL_CAMERA_POSITION.y, 
            INITIAL_CAMERA_POSITION.z
          ], 
          fov: 45, // 👉 Adjust field of view (45-75 typical)
        }}
        onCreated={({ gl }) => {
          // 🎨 RENDER SETTINGS - Adjust visual quality
          gl.toneMapping = THREE.ACESFilmicToneMapping; // 👉 Change tone mapping
          gl.toneMappingExposure = 1.2; // 👉 Adjust brightness (0.5-2.0)
          
          // Enable shadows
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
      >
        {/* 💡 LIGHTING SETUP - Adjust for different moods */}
        <ambientLight intensity={1.2} /> {/* 👉 Overall scene brightness */}
        <directionalLight 
          position={[10, 10, 10]} // 👉 Adjust sun/moon position
          intensity={2.5}         // 👉 Adjust direct light strength
          castShadow             // 👉 Enable shadows for realism
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <hemisphereLight
          groundColor="#b0b0b0" // 👉 Adjust ground reflection color
          intensity={1}         // 👉 Adjust environment light
        />

        {/* 🌆 ENVIRONMENT - Uncomment and adjust for different backgrounds */}
        {/* <Environment 
          preset="city" // 👉 Options: "apartment", "city", "dawn", "forest", "lobby", "night", "park", "studio", "sunset"
          background    // 👉 Remove to keep background black
        /> */}

        {/* 🏢 Your 3D building model */}
        <BuildingModel />

        {/* 🕹️ First-person controls with collision detection */}
        <PlayerControls />
      </Canvas>

      {/* 📝 Development notes overlay */}
      {/* <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-3 rounded text-xs max-w-xs">
        <strong>Dev Notes:</strong>
        <br/>• Adjust BOUNDS constants for model size
        <br/>• Modify PLAYER_SETTINGS for movement feel
        <br/>• Check INITIAL_CAMERA_POSITION for start location
      </div> */}
    </div>
  );
}