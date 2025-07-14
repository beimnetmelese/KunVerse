"use client";

import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChatGroq } from "@/components/ChatGroq";

const botProjects = [
  {
    id: 1,
    name: "MovieMate",
    description:
      "Telegram bot that recommends movies based on genre preferences and vibes.",
    image: "/movie.jpg",
    stack: ["Python", "Telegram Bot API"],
    link: "https://t.me/MovieMatePybot",
  },
  {
    id: 2,
    name: "Mentorix Employee Bot",
    description:
      "Connects tutors with students through registration and profile management on Telegram.",
    image: "/mentorix.jpg",
    stack: ["Python", "Telegram Bot API"],
    link: "https://t.me/MentorixEmployeeBot",
  },
  {
    id: 3,
    name: "Mentorix Client Bot",
    description:
      "Client-side bot that helps users find available tutors via Telegram.",
    image: "/mentorix.jpg",
    stack: ["Python", "Telegram Bot API"],
    link: "https://t.me/MentorixClientBot",
  },

  {
    id: 4,
    name: "AASTU Lost And Found",
    description:
      "Bot for AASTU students to report and recover lost items easily.",
    image: "/aastu.jpg",
    stack: ["Python", "Telegram Bot API"],
    link: "https://t.me/aastulostandfoundunionbot",
  },
  {
    id: 5,
    name: "ScoreSnap",
    description:
      "Live football score bot with real-time updates for your favorite teams.",
    image: "/scoresnap.jpg",
    stack: ["Python", "Telegram Bot API", "Football API"],
    link: "https://t.me/Scoresnapresultbot",
  },
];

export default function MultiversePage() {
  const [hoveredId, setHoveredId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showChat, setShowChat] = useState(false);

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
    <div className="relative w-screen h-screen bg-gradient-to-br from-black via-[#0f0f1a] to-[#1a1a2e] overflow-hidden">
      <Canvas className="absolute inset-0 z-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars
          radius={150}
          depth={100}
          count={8000}
          factor={6}
          saturation={0.2}
          fade
          speed={2}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-16 px-4 overflow-y-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Bot Universe
          </h1>
          <p className="text-xl text-cyan-200/80 max-w-2xl mx-auto">
            Welcome to the automagical world of bots 🤖 — from Telegram
            assistants to intelligent customer support, this universe is all
            about building bots that actually *do* things. Smart, fast, and
            kinda charming (just like their creator).
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl pb-16"
        >
          {botProjects.map((universe) => (
            <motion.div
              key={universe.id}
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setHoveredId(universe.id)}
              onHoverEnd={() => setHoveredId(0)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`relative bg-gradient-to-br rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                hoveredId === universe.id
                  ? "from-purple-600/30 to-cyan-500/30 border-2 border-cyan-300/50"
                  : "from-purple-900/30 to-indigo-900/30 border border-white/20"
              }`}
              onClick={() => (window.location.href = universe.link)}
            >
              {hoveredId === universe.id && (
                <motion.div
                  className="absolute inset-0 bg-cyan-400/10 rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              <div className="relative h-56 w-full overflow-hidden group">
                <Image
                  src={universe.image || "/images/fallback.jpg"}
                  alt={universe.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10" />
              </div>
              <div className="p-6 relative z-10">
                <div className="flex items-center mb-3">
                  <h2 className="text-2xl font-bold text-white mr-3">
                    {universe.name}
                  </h2>
                </div>
                <p className="text-gray-300 mb-4">{universe.description}</p>
                <div className="flex flex-wrap gap-2">
                  {universe.stack.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      className="text-xs bg-cyan-600/20 text-cyan-300 px-3 py-1.5 rounded-full"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              {hoveredId === universe.id && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{
                        x: Math.random() * 100,
                        y: Math.random() * 100,
                        opacity: 0,
                      }}
                      animate={{
                        y: [0, Math.random() * 40 - 20],
                        x: [0, Math.random() * 40 - 20],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                      className="absolute w-1 h-1 rounded-full bg-cyan-400"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 4 + 2}px`,
                        height: `${Math.random() * 4 + 2}px`,
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="fixed bottom-8 right-8 z-20"
      >
        <button
          onClick={() => setShowChat(true)}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold shadow-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 flex items-center"
        >
          <span className="mr-2">Message the AI</span>
          <span className="text-xl">🤖</span>
        </button>
      </motion.div>

      {showChat && (
        <div className="fixed bottom-24 right-6 w-full max-w-md z-50">
          <ChatGroq onClose={() => setShowChat(false)} />
        </div>
      )}
    </div>
  );
}
