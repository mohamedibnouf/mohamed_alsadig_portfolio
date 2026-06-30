"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function GradientMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color("#3B82F6") },
      uColor2: { value: new THREE.Color("#8B5CF6") },
    }),
    []
  );

  useFrame((state) => {
    if (meshRef.current) {
      uniforms.uTime.value = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={2.5}>
      <icosahedronGeometry args={[1, 4]} />
      <shaderMaterial
        uniforms={uniforms}
        wireframe
        transparent
        opacity={0.15}
        vertexShader={`
          varying vec2 vUv;
          varying vec3 vPosition;
          void main() {
            vUv = uv;
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec3 uColor1;
          uniform vec3 uColor2;
          varying vec2 vUv;
          varying vec3 vPosition;
          void main() {
            float mixValue = sin(vPosition.x * 2.0 + uTime) * 0.5 + 0.5;
            vec3 color = mix(uColor1, uColor2, mixValue);
            gl_FragColor = vec4(color, 0.6);
          }
        `}
      />
    </mesh>
  );
}

export function Hero3DGradient() {
  return (
    <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] opacity-40">
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <GradientMesh />
      </Canvas>
    </div>
  );
}
