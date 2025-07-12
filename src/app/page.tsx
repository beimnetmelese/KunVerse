"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRouter } from "next/navigation";
import TypingIntro from "@/components/TypingIntro";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="relative w-screen h-screen bg-black">
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
          className="mt-8 px-6 py-3 bg-[#61dafb] text-black text-lg font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
        >
          🌌 Enter the Multiverse
        </button>
      </div>
    </div>
  );
}
