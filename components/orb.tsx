"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Rig() {
  const outer = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.Mesh>(null);

  useFrame((_, dt) => {
    if (outer.current) {
      outer.current.rotation.y += dt * 0.28;
      outer.current.rotation.x += dt * 0.08;
    }
    if (inner.current) {
      inner.current.rotation.y -= dt * 0.5;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.9}>
      <mesh ref={outer}>
        <icosahedronGeometry args={[1.75, 1]} />
        <meshBasicMaterial
          color="#1b4d3a"
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>
      <mesh ref={inner} scale={0.45}>
        <icosahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#c7f24e" />
      </mesh>
    </Float>
  );
}

export default function Orb({ className = "" }: { className?: string }) {
  return (
    <div className={className} data-cursor>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Rig />
      </Canvas>
    </div>
  );
}
