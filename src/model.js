import * as THREE from 'three'
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

//  V3 has red model
// import world from './assets/levi-v3.glb';

// V6 is in color
// import world from './assets/levi-v6.glb';

// V6 No Floor is in color
import world from './assets/levi-v6-no-floor.glb';

const Model = () => {
  const gltf = useLoader(GLTFLoader, world);
  const modelRef = useRef();
  const mixer = useRef();

  // Rotates Model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.004; // Adjust the rotation speed here
    }
  });

  // Play the "ArmatureAction" animation
  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
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

  // Camera animation

  return (
    <primitive object={gltf.scene} scale={2.5} position={[0, -.7, 0]} rotation={[.8, 0, 0]} ref={modelRef} />
  );
};

export default function ModelViewer() {

  return (
    <Canvas orthographic camera={{ zoom: 150, position: [0, 0, 100] }} style={{ height: '100vh', position: 'absolute', top: 0, zIndex: -5 }}>
      <ambientLight intensity={0.2} />
      <directionalLight intensity={0.8} position={[5, 5, 15]} />
      <pointLight position={[0, 20, 10]} intensity={0.75} color={0xc883e6} />
      <pointLight position={[3, 0, 0]} intensity={0.75} color={0x83e6af} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
}