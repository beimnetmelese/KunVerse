"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Stars,
  Text,
  Float,
  useTexture,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";
import { useRef, useState } from "react";
import { universes } from "@/lib/constants/galaxies";
import { motion } from "framer-motion";

type Universe = (typeof universes)[number];

const UniverseCard3D = ({ universe }: { universe: Universe }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const texture = useTexture(universe.texture || "/default-card-bg.jpg");

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
      meshRef.current.position.y =
        Math.sin(state.clock.getElapsedTime() * 0.8) * 0.2;
    }
  });

  return (
    <group position={universe.position}>
      {/* Glowing Aura */}
      {hovered && (
        <Sparkles
          position={[0, 0, -0.5]}
          count={20}
          size={3}
          speed={0.1}
          color={universe.color}
          scale={[3.5, 4.5, 1]}
        />
      )}

      {/* 3D Card */}
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => (window.location.href = `/universe/${universe.id}`)}
      >
        <boxGeometry args={[3, 4, 0.2]} />
        <meshStandardMaterial
          map={texture}
          roughness={0.2}
          metalness={0.8}
          emissive={hovered ? universe.color : "#000000"}
          emissiveIntensity={hovered ? 0.5 : 0}
        />
      </mesh>

      {/* Holographic Title */}
      <Text
        position={[0, 2.5, 0.21]}
        fontSize={0.4}
        color={hovered ? universe.color : "#ffffff"}
        outlineWidth={0.02}
        outlineColor="#000000"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      >
        {universe.name}
      </Text>

      {/* Floating Description */}
      {hovered && (
        <Text
          position={[0, 0, 0.21]}
          fontSize={0.2}
          color="#ffffff"
          maxWidth={2.8}
          lineHeight={1.2}
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        >
          {universe.description}
        </Text>
      )}
    </group>
  );
};

const DynamicStars = () => {
  const starsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.x =
        Math.sin(state.clock.getElapsedTime() * 0.1) * 0.2;
      starsRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <Stars
      ref={starsRef}
      radius={150}
      depth={100}
      count={8000}
      factor={6}
      saturation={0}
      fade
      speed={0.5}
    />
  );
};

export default function MultiverseScene() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Cosmic Canvas */}
      <Canvas
        className="fixed inset-0 z-0"
        camera={{ position: [0, 0, 20], fov: 60 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.8}
          color="#4466ff"
        />

        <DynamicStars />

        {/* Floating Cards */}
        <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
          {universes.map((universe, i) => {
            const angle = (i / universes.length) * Math.PI * 2;
            const x = Math.sin(angle) * 10;
            const z = Math.cos(angle) * 10;
            return (
              <UniverseCard3D key={universe.id} universe={{ ...universe }} />
            );
          })}
        </Float>

        <OrbitControls
          enableZoom={true}
          minDistance={10}
          maxDistance={30}
          autoRotate
          autoRotateSpeed={0.5}
          enablePan={false}
        />
      </Canvas>

      {/* UI Overlay */}
      <motion.div
        className="relative z-10 pt-20 px-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          Cosmic Portfolio
        </h1>
        <p className="text-xl text-white/80 mb-12">
          Hover over cards to explore
        </p>
      </motion.div>
    </div>
  );
}
