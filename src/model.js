import * as THREE from 'three'
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Environment, OrbitControls } from '@react-three/drei';
import world from './assets/levi-v3.glb';

const Model = () => {
  const gltf = useLoader(GLTFLoader, world);
  const modelRef = useRef();
  const mixer = useRef();

  // Play the "ArmatureAction" animation
  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.004; // Adjust the rotation speed here
    }
  });

  // Find the animation clip by name
  const clip = gltf.animations.find((animation) => animation.name === 'ArmatureAction');

  // Set up the mixer and action for the animation
  useFrame(() => {
    if (modelRef.current) {
      if (clip) {
        if (!mixer.current) {
          mixer.current = new THREE.AnimationMixer(modelRef.current);
        }
        const action = mixer.current.clipAction(clip);
        action.play();
      }
    }
  });

  return (
    <primitive object={gltf.scene} scale={2} position={[2, -1, 0]} rotation={[0, 0, 0]} ref={modelRef} />
  );
};

export default function ModelViewer() {
  return (
    <Canvas style={{ height: '100vh', position: 'absolute', top: 0, zIndex: -5 }}>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.8} position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
}