import { Clone, useAnimations, useGLTF } from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
 
const Birds: React.FC<MeshProps> = ({ ...props }) => {
  const cloneRef = useRef<any>(null);
  const { scene, animations } = useGLTF("/office_building/birds.glb");
  const { actions,mixer } = useAnimations(animations, cloneRef);
 
  // Randomize speed for variation
  const speed = useRef(0.002 + Math.random() * 0.0015);
 
const [x, _, __] = Array.isArray(props.position)
    ? props.position
    : props.position instanceof THREE.Vector3
    ? [props.position.x, props.position.y, props.position.z]
    : [0, 0, 0];
 
useEffect(() => {
    // Check if animation exists
    if (actions && actions["Scene"]) {
      const action = actions["Scene"];
      action.reset().play(); // Reset and play the animation
      action.setLoop(THREE.LoopRepeat, THREE.LoopPingPong); // Set loop type (optional)
 
      return () => {
        // Cleanup: Stop animation when the component unmounts
        scene.clear();
        action.stop();
      };
    }
  }, [actions, scene]);
 
  useFrame((_, delta) => {
    //For bird animation
    if (mixer) mixer.update(delta);
 
    const bird = cloneRef.current;
    if (!bird) return;
 
    if (x === 1) {
      // Move forward along -Z slowly
      bird.position.z += speed.current * 1.5;
 
      // Seamless looping — when too far, reset to front
      if (bird.position.z > 0) {
        bird.position.z = -10;
      }
    }
 
    if (x === -3) {
      // Move forward along -Z slowly
      bird.position.z -= speed.current * 1.5;
      bird.position.x -= speed.current;
 
      // Seamless looping — when too far, reset to front
      if (bird.position.z < -10) {
        bird.position.z = -1;
        bird.position.x = -3;
      }
    }
 
    if (x === -2) {
      // Move forward along -Z slowly
      bird.position.x += speed.current;
 
      // Seamless looping — when too far, reset to front
      if (bird.position.x > 8) {
        bird.position.x = -9;
      }
    }
 
    if (x === 3) {
      // Move forward along -Z slowly
      bird.position.x -= speed.current * 1.5;
 
      // Seamless looping — when too far, reset to front
      if (bird.position.x < -8) {
        bird.position.x = 4;
      }
    }
  });
 
  return (
    <Clone
      object={scene}
      //@ts-ignore
      ref={cloneRef}
      {...props}
    />
  );
};
 
export default Birds;