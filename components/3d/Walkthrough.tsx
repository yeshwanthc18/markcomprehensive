"use client";

import React, { Suspense, useEffect, useRef, useState,useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  useGLTF,
  PointerLockControls,
} from "@react-three/drei";
import * as THREE from "three";

type Vec3 = [number, number, number];

/* -------------------- First Person Controller -------------------- */
function FirstPersonController({
  speed = 40,
  jumpStrength = 1,
  eyeOffset = 10,
  modelBox,
}: {
  speed?: number;
  jumpStrength?: number;
  eyeOffset?: number;
  modelBox: THREE.Box3 | null;
}) {
  const { camera, scene } = useThree();
  const velocity = useRef(new THREE.Vector3());
  const direction = useRef(new THREE.Vector3());
  const moveState = useRef({ forward: 0, back: 0, left: 0, right: 0 });
  const canJump = useRef(false);
  const downRay = useRef(new THREE.Raycaster());
  downRay.current.ray.direction.set(0, -1, 0);

  useEffect(() => {
    camera.position.set(0, eyeOffset, 350);

    const onKeyDown = (e: KeyboardEvent) => {
      switch (e.code) {
        case "KeyW":
        case "ArrowUp":
          moveState.current.forward = 1;
          break;
        case "KeyS":
        case "ArrowDown":
          moveState.current.back = 1;
          break;
        case "KeyA":
        case "ArrowLeft":
          moveState.current.left = 1;
          break;
        case "KeyD":
        case "ArrowRight":
          moveState.current.right = 1;
          break;
        case "Space":
          if (canJump.current) {
            velocity.current.y = jumpStrength * 1.2;
            canJump.current = false;
          }
          break;
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      switch (e.code) {
        case "KeyW":
        case "ArrowUp":
          moveState.current.forward = 0;
          break;
        case "KeyS":
        case "ArrowDown":
          moveState.current.back = 0;
          break;
        case "KeyA":
        case "ArrowLeft":
          moveState.current.left = 0;
          break;
        case "KeyD":
        case "ArrowRight":
          moveState.current.right = 0;
          break;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [camera, jumpStrength, eyeOffset]);

  useFrame((_, delta) => {
    direction.current.set(
      moveState.current.right - moveState.current.left,
      0,
      moveState.current.back - moveState.current.forward
    );
    if (direction.current.lengthSq() > 0) direction.current.normalize();

    const quat = new THREE.Quaternion();
    camera.getWorldQuaternion(quat);
    const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(quat);
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(quat);

    const move = new THREE.Vector3();
    move.addScaledVector(forward, -direction.current.z);
    move.addScaledVector(right, direction.current.x);
    if (move.lengthSq() > 0) move.normalize();

    const horizontalVel = move.multiplyScalar(speed);
    velocity.current.x = THREE.MathUtils.lerp(velocity.current.x, horizontalVel.x, 0.2);
    velocity.current.z = THREE.MathUtils.lerp(velocity.current.z, horizontalVel.z, 0.2);

    velocity.current.y += -9.8 * delta;

    const nextPos = camera.position.clone().addScaledVector(velocity.current, delta);

    downRay.current.ray.origin.set(nextPos.x, nextPos.y + 0.5, nextPos.z);
    const intersects = downRay.current.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      const hit = intersects[0];
      const groundY = hit.point.y;
      if (nextPos.y - eyeOffset <= groundY + 0.01) {
        nextPos.y = groundY + eyeOffset;
        velocity.current.y = 0;
        canJump.current = true;
      }
    }

    // 🔒 Restrict camera inside model bounds
    if (modelBox) {
      nextPos.x = THREE.MathUtils.clamp(nextPos.x, modelBox.min.x + 2, modelBox.max.x - 2);
      nextPos.y = THREE.MathUtils.clamp(nextPos.y, modelBox.min.y + 2, modelBox.max.y - 2);
      nextPos.z = THREE.MathUtils.clamp(nextPos.z, modelBox.min.z + 2, modelBox.max.z - 2);
    }

    camera.position.copy(nextPos);
  });

  return null;
}


function moveCameraTo(
  camera: THREE.PerspectiveCamera,
  target: [number, number, number],
  duration = 1
) {
  const start = camera.position.clone();
  const end = new THREE.Vector3(...target);
  let elapsed = 0;

  const animate = (delta: number) => {
    elapsed += delta;
    const t = Math.min(elapsed / duration, 1);
    camera.position.lerpVectors(start, end, t);
    if (t < 1) requestAnimationFrame((time) => animate(delta));
  };

  requestAnimationFrame((time) => animate(0.016));
}


/* -------------------- Building Model -------------------- */
function BuildingModel({
  url = "/office_building/servicepagemodel.glb",
  scale = 1,
  onLoaded,
}: {
  url?: string;
  scale?: number;
  onLoaded: (box: THREE.Box3) => void;
}) {
  const gltf = useGLTF(url);
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    if (ref.current) {
      const box = new THREE.Box3().setFromObject(ref.current);
      onLoaded(box);
    }
  }, [onLoaded]);

  return <primitive ref={ref} object={gltf.scene} scale={scale} />;
}

/* -------------------- Overlay Controls -------------------- */
function WalkUI({
  onEnter,
  onExit,
  onReset,
  locked,
}: {
  onEnter: () => void;
  onExit: () => void;
  onReset: () => void;
  locked: boolean;
}) {
  return (
    <div style={{ position: "absolute", left: 16, top: 16, zIndex: 50 }}>
      {!locked ? (
        <button
          onClick={onEnter}
          className="px-3 py-2 bg-[#01adff] text-white rounded-md shadow-md"
        >
          Enter Walkthrough
        </button>
      ) : (
        <button
          onClick={onExit}
          className="px-3 py-2 bg-white text-black rounded-md shadow-md"
        >
          Exit (Esc)
        </button>
      )}
      {/* <button
        onClick={onReset}
        className="ml-2 px-3 py-2 bg-gray-900 text-white rounded-md shadow-md"
      >
        Reset Position
      </button> */}
      {/* <div
        style={{
          marginTop: 8,
          color: "#222",
          background: "rgba(255,255,255,0.85)",
          padding: 8,
          borderRadius: 6,
        }}
      >
        <div style={{ fontSize: 12 }}>
          WASD to move • Mouse to look • Space to jump
        </div>
      </div> */}
    </div>
  );
}

/* -------------------- Main Component -------------------- */
export default function BuildingWalkthrough({
  modelUrl = "/office_building/servicepagemodel.glb",
  background = "city",
  cameraPosition = [40, 10, 120] as Vec3,
}: {
  modelUrl?: string;
  background?: string;
  cameraPosition?: Vec3;
}) {
  const pointerLockRef = useRef<THREE.Camera | null>(null);
  const [locked, setLocked] = useState(false);
  const [modelBox, setModelBox] = useState<THREE.Box3 | null>(null);
  const startPosition = useMemo(() => new THREE.Vector3(...cameraPosition), [cameraPosition]);

  const handleReset = () => {
    const camera = pointerLockRef.current as THREE.PerspectiveCamera | null;
    if (camera) {
      camera.position.copy(startPosition);
      camera.rotation.set(0, 0, 0);
    }
  };

  return (
    <div style={{ width: "100%", height: "720px", position: "relative" }}>
      <Canvas shadows camera={{ position: cameraPosition, fov: 60 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <color attach="background" args={["#e7eff5"]} />
          <Environment preset={background as any} />
          <ambientLight intensity={0.6} />
          <directionalLight
            castShadow
            position={[10, 20, 10]}
            intensity={1.0}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <spotLight
            position={[0, 10, 0]}
            angle={0.6}
            penumbra={0.4}
            intensity={1.2}
            castShadow
          />
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -0.01, 0]}
          >
            <planeGeometry args={[200, 200]} />
            <meshStandardMaterial color="#f6f6f6" />
          </mesh>
          <BuildingModel url={modelUrl} scale={1.0} onLoaded={setModelBox} />
          <PointerLockControls ref={pointerLockRef as any} />
          <FirstPersonController modelBox={modelBox} />
        </Suspense>
      </Canvas>

      <PointerLockUIOverlay
        pointerRef={pointerLockRef}
        locked={locked}
        setLocked={setLocked}
        onReset={handleReset}
      />
    </div>
  );
}

/* -------------------- Pointer Lock UI Overlay -------------------- */
function PointerLockUIOverlay({
  pointerRef,
  locked,
  setLocked,
  onReset,
}: {
  pointerRef: React.MutableRefObject<THREE.Object3D | null>;
  locked: boolean;
  setLocked: (v: boolean) => void;
  onReset: () => void;
}) {
  useEffect(() => {
    const onPointerLockChange = () => {
      const isLocked = document.pointerLockElement != null;
      setLocked(isLocked);
    };
    document.addEventListener("pointerlockchange", onPointerLockChange);
    document.addEventListener("pointerlockerror", onPointerLockChange);
    return () => {
      document.removeEventListener("pointerlockchange", onPointerLockChange);
      document.removeEventListener("pointerlockerror", onPointerLockChange);
    };
  }, [setLocked]);

  const enter = () => {
    const canvas = document.querySelector("canvas");
    if (canvas) canvas.requestPointerLock();
  };

  const exit = () => {
    if (document.exitPointerLock) document.exitPointerLock();
  };

  return (
    <WalkUI onEnter={enter} onExit={exit} onReset={onReset} locked={locked} />
  );
}
