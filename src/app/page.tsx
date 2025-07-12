"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRouter } from "next/navigation";
import TypingIntro from "@/components/TypingIntro";

export default function HomePage() {
  const router = useRouter();

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
