import * as THREE from 'three'
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Environment, OrbitControls, OrthographicCamera } from '@react-three/drei';

const CameraAnimation = () => {
    const cameraRef = useRef();
    const cameraSpeed = 5.01; // Adjust the camera movement speed here
  
    useFrame(() => {
      // Move the camera horizontally
      if (cameraRef.current) {
        cameraRef.current.position.x += cameraSpeed;
        // Reset camera position to the initial position if it moves too far
        if (cameraRef.current.position.x > 0) {
          cameraRef.current.position.x = 50; // Adjust the initial position as needed
        }
      }
    });
  
    return null;
  };

  export default CameraAnimation;