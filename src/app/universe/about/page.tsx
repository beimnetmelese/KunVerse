"use client";

import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutUniverse() {
  const [activeSection, setActiveSection] = useState(0);
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
    <div className="relative w-screen h-full overflow-x-hidden bg-gradient-to-br from-black via-[#0f0f1a] to-[#1a1a2e] overflow-y-auto">
      {/* 🌌 3D Cosmic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas className="absolute inset-0 z-0">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars
            radius={150}
            depth={100}
            count={90000}
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
      </div>

      {/* ✨ Floating Particles */}
      <div className="relative z-10 max-w-6xl mx-auto px-1">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-white/30"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
            }}
          />
        ))}
      </div>

      {/* 🚀 Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
          >
            Welcome to My Universe
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="relative inline-block"
          >
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto relative z-10">
              Every dev has a story. Mine started with curiosity, football, and
              a burning desire to build things people actually use.
            </p>
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
            />
          </motion.div>
        </motion.section>

        {/* Chapters */}
        <div className="space-y-40">
          {/* Chapter 1 */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative group"
          >
            <div className="absolute -left-8 top-0 h-full w-1 bg-gradient-to-b from-purple-500/30 to-cyan-500/30 rounded-full"></div>
            <div className="pl-10">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="mr-4 text-cyan-400">01</span>
                <span>Genesis: Where It All Began</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                It started with curiosity — how do apps work? My first line of
                code? Chaos. But that spark turned into fire when I realized I
                could build solutions that impact real people.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-8 w-64 h-40 relative rounded-xl overflow-hidden border border-white/20"
              >
                <Image
                  src="/images/beginning.jpg" // Replace with your image
                  alt="Early coding days"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.section>

          {/* Chapter 2 */}
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative group text-right"
          >
            <div className="absolute -right-8 top-0 h-full w-1 bg-gradient-to-b from-cyan-500/30 to-purple-500/30 rounded-full"></div>
            <div className="pr-10">
              <h2 className="text-3xl font-bold mb-6 flex justify-end items-center">
                <span>02</span>
                <span className="ml-4">The Grind: Learning & Growing</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl ml-auto">
                Between AASTU lectures and midnight debugging, I built
                e-commerce platforms, rain alert bots, and campus tools that
                actually helped people.
              </p>
              <div className="flex flex-wrap justify-end gap-3 mt-6">
                {[
                  "React",
                  "Next.js",
                  "Django",
                  "DRF",
                  "Tailwind",
                  "Telegram Bot",
                  "Firebase",
                  "Git",
                ].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ y: -3 }}
                    className="bg-white/10 px-4 py-2 rounded-full text-sm backdrop-blur-sm hover:bg-cyan-500/20 hover:text-cyan-300 transition-all"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Chapter 3 */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative group"
          >
            <div className="absolute -left-8 top-0 h-full w-1 bg-gradient-to-b from-purple-500/30 to-cyan-500/30 rounded-full"></div>
            <div className="pl-10">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="mr-4 text-cyan-400">03</span>
                <span>The Lab: My Creations</span>
              </h2>
              <ul className="text-gray-300 space-y-6 text-lg">
                <motion.li whileHover={{ x: 5 }} className="flex items-start">
                  <span className="text-purple-400 mr-3">✦</span>
                  <div>
                    <strong className="text-cyan-300">Book Ethiopia</strong> – A
                    booking platform tailored for Ethiopian users with real-time
                    availability tracking.
                  </div>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-start">
                  <span className="text-purple-400 mr-3">✦</span>
                  <div>
                    <strong className="text-cyan-300">Score Snap</strong> – For
                    football lovers who want live results faster than ESPN.
                  </div>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-start">
                  <span className="text-purple-400 mr-3">✦</span>
                  <div>
                    <strong className="text-cyan-300">MovieMate Bot</strong> –
                    Your Telegram movie companion with personalized
                    recommendations.
                  </div>
                </motion.li>
              </ul>
            </div>
          </motion.section>

          {/* Chapter 4 */}
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-to-br p-10 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 from-purple-600/30 to-cyan-500/30 border-2 border-cyan-300/50"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              The Core: Why I Do This
            </h2>
            <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
              Good software solves real problems. I'm driven by curiosity,
              creativity, and the belief that tech should feel like magic — but
              work like science. Every line of code is a chance to make
              someone's life easier.
            </p>
          </motion.section>

          {/* Chapter 5 */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br p-10 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 from-purple-600/30 to-cyan-500/30 border-2 border-cyan-300/50">
              <h2 className="text-3xl font-bold mb-6">
                Bonus Planet: Fun Facts
              </h2>
              <ul className="text-gray-300 space-y-4 text-lg">
                <motion.li whileHover={{ x: 5 }} className="flex items-center">
                  <span className="text-cyan-400 mr-3">⚽</span>
                  <span>Manchester City fan until the servers shut down</span>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-center">
                  <span className="text-cyan-400 mr-3">🍟</span>
                  <span>Bulking with potatoes like a true budget king</span>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-center">
                  <span className="text-cyan-400 mr-3">🎬</span>
                  <span>Consumes Netflix like it's research</span>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-center">
                  <span className="text-cyan-400 mr-3">🤖</span>
                  <span>Made bots that reply faster than your crush</span>
                </motion.li>
              </ul>
            </div>
          </motion.section>
        </div>

        {/* Final CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-40 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Something Cosmic?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's connect and create digital experiences that feel like magic.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all"
          >
            🚀 Launch Collaboration
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
}
