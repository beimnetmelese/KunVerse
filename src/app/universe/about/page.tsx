"use client";

import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChatGroq } from "@/components/ChatGroq";

export default function AboutUniverse() {
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
              <p className="text-gray-300 text-lg leading-relaxed">
                It all kicked off with a simple question: How do apps actually
                work? My first coding attempts were messy and chaotic—think lots
                of trial, error, and confusion. But that early frustration
                quickly turned into passion when I realized that the code I
                wrote could solve real problems and make life easier for others.
                That spark lit the path to building meaningful projects and
                leveling up every day.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-8 w-64 h-40 relative rounded-xl overflow-hidden border border-white/20"
              >
                <Image
                  src="/me.jpg" // Replace with your image
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
            className="relative group text-justify"
          >
            <div className="absolute -left-8 top-0 h-full w-2 bg-gradient-to-b from-cyan-500/30 to-purple-500/30 rounded-full"></div>
            <div className="pr-5">
              <h2 className="text-3xl font-bold mb-6">
                <span className="mr-4 text-cyan-400">02</span>
                <span className="ml-4">The Grind: Learning & Growing</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Between AASTU lectures and late-night debugging sessions, I used
                every spare moment to build things that mattered. I wasn’t just
                coding for grades — I was coding to solve problems around me and
                explore every corner of tech I could touch. I built AddisGigs, a
                freelancing agency platform designed to help developers like me
                offer services across mobile, web, and bots — fast, scalable,
                and user-focused. Then there was Book Ethiopia, my take on
                modernizing hotel bookings across the country with a clean,
                intuitive interface and real-time listings. Entertainment?
                Covered that too. I built MovieMate, a Telegram bot that curates
                film recommendations based on your mood, and Stream Bot, a sleek
                web app where you can manage and view upcoming streams — because
                even devs need chill time. And yeah, I went 3D. Digital Pet Twin
                brought a virtual cat to life — it remembers, responds, and even
                reflects emotions thanks to AI and Three.js. Why? Because I
                wanted to see if I could give a web app a soul. Feedback
                systems, too — Smart Feedback Assistant became a tool for
                handling user messages intelligently, perfect for small
                businesses looking to scale their customer service. And I didn’t
                stop at flashy stuff. I built bots that connected students to
                tutors (Mentorix), helped people track lost items on campus,
                sent job alerts based on your interests, and kept fans updated
                with live football scores faster than most apps (ScoreSnap).
                These weren’t just side projects. They were each a new chapter
                in my journey — real problems, real users, and real code pushing
                me forward. Every line I wrote made me better. Every bug I
                squashed taught me something new. And through it all, I never
                stopped building.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
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
                    <strong className="text-cyan-300">AddisGigs</strong> – A
                    freelancing agency building mobile apps, Telegram bots, and
                    full-stack web apps delivering fast, scalable, and
                    user-focused digital solutions.
                  </div>
                </motion.li>

                <motion.li whileHover={{ x: 5 }} className="flex items-start">
                  <span className="text-purple-400 mr-3">✦</span>
                  <div>
                    <strong className="text-cyan-300">Book Ethiopia</strong> – A
                    platform that makes hotel booking in Ethiopia easy with
                    browsing, comparing, and booking hotels at the best prices.
                  </div>
                </motion.li>

                <motion.li whileHover={{ x: 5 }} className="flex items-start">
                  <span className="text-purple-400 mr-3">✦</span>
                  <div>
                    <strong className="text-cyan-300">Stream Bot</strong> – A
                    sleek, dark-themed React and Tailwind CSS interface for
                    managing and viewing live and planned streams.
                  </div>
                </motion.li>

                <motion.li whileHover={{ x: 5 }} className="flex items-start">
                  <span className="text-purple-400 mr-3">✦</span>
                  <div>
                    <strong className="text-cyan-300">Digital Pet Twin</strong>{" "}
                    – An AI-based 3D web app that brings a virtual cat to life
                    with real emotions, intelligent conversations, and memory.
                  </div>
                </motion.li>

                <motion.li whileHover={{ x: 5 }} className="flex items-start">
                  <span className="text-purple-400 mr-3">✦</span>
                  <div>
                    <strong className="text-cyan-300">
                      Smart Feedback Assistant
                    </strong>{" "}
                    – An AI-powered system helping businesses manage customer
                    questions and feedback efficiently.
                  </div>
                </motion.li>

                <motion.li whileHover={{ x: 5 }} className="flex items-start">
                  <span className="text-purple-400 mr-3">✦</span>
                  <div>
                    <strong className="text-cyan-300">MovieMate</strong> – A
                    Telegram bot recommending movies based on your favorite
                    genres, helping you find the perfect film for any mood or
                    movie night.
                  </div>
                </motion.li>

                <motion.li whileHover={{ x: 5 }} className="flex items-start">
                  <span className="text-purple-400 mr-3">✦</span>
                  <div>
                    <strong className="text-cyan-300">
                      Mentorix Employee Bot
                    </strong>{" "}
                    – Connects tutors with students, allowing tutors to
                    register, create profiles, and offer their expertise
                    hassle-free.
                  </div>
                </motion.li>

                <motion.li whileHover={{ x: 5 }} className="flex items-start">
                  <span className="text-purple-400 mr-3">✦</span>
                  <div>
                    <strong className="text-cyan-300">
                      Mentorix Client Bot
                    </strong>{" "}
                    – Helps users find and connect with qualified tutors on
                    Telegram.
                  </div>
                </motion.li>

                <motion.li whileHover={{ x: 5 }} className="flex items-start">
                  <span className="text-purple-400 mr-3">✦</span>
                  <div>
                    <strong className="text-cyan-300">
                      AASTU Lost And Found
                    </strong>{" "}
                    – A Telegram bot for AAStU students and staff to report and
                    recover lost items easily by matching belongings with
                    owners.
                  </div>
                </motion.li>

                <motion.li whileHover={{ x: 5 }} className="flex items-start">
                  <span className="text-purple-400 mr-3">✦</span>
                  <div>
                    <strong className="text-cyan-300">Score Snap</strong> – A
                    Telegram bot providing live football scores, recent results,
                    and real-time updates to keep fans connected with their
                    favorite teams.
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
              Good software solves real problems. Im driven by curiosity,
              creativity, and the belief that tech should feel like magic — but
              work like science. Every line of code is a chance to make someones
              life easier.
            </p>
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
            Lets connect and create digital experiences that feel like magic.
          </p>
          <motion.a
            href="/universe/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all"
          >
            🚀 Launch Collaboration
          </motion.a>
        </motion.section>
      </div>
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
