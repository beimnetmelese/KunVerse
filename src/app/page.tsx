"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRouter } from "next/navigation";
import TypingIntro from "@/components/TypingIntro";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HomePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          ⚡
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative w-screen h-screen bg-gradient-to-br from-black via-[#0f0f1a] to-[#1a1a2e]">
      {/* 🌌 Stars background */}
      <Canvas
        className="absolute inset-0 z-0"
        camera={{ position: [0, 0, 1], fov: 75 }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <Stars
          radius={100}
          depth={70}
          count={3000}
          factor={6}
          saturation={0}
          fade
          speed={0.4}
        />
        <OrbitControls
          enableZoom={true}
          minDistance={5}
          maxDistance={25}
          autoRotate
          autoRotateSpeed={0.6}
        />
      </Canvas>

      {/* 💫 Foreground content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center p-4">
        <TypingIntro />

        <button
          onClick={() => router.push("/multiverse")}
          className="px-6 py-3 mt-10 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold shadow-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 flex items-center"
        >
          🌌 Enter the Multiverse
        </button>
      </div>
    </div>
  );
}
