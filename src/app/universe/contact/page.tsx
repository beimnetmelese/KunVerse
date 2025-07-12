"use client";

import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

export default function ContactUniverse() {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="text-6xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
          >
            ✨
          </motion.div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-gray-300 mt-4"
          >
            Opening communication channels...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative w-screen h-full overflow-x-hidden bg-gradient-to-br from-black via-[#0f0f1a] to-[#1a1a2e] overflow-y-auto">
      {/* 🌌 Cosmic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas className="absolute inset-0 z-0">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars
            radius={150}
            depth={100}
            count={50000}
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
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
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
            }}
          />
        ))}
      </div>

      {/* 🚀 Main Content */}
      <div className="relative z-10 pt-8 pb-20 px-6">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6"
          >
            Contact Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-gray-300 mb-12"
          >
            Got an idea, project, or just want to vibe? Let's make something
            cosmic together.
          </motion.p>

          <AnimatePresence>
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 p-8 rounded-2xl border border-green-400/30"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl mb-4"
                >
                  🚀
                </motion.div>
                <h2 className="text-2xl font-bold text-green-400 mb-2">
                  Message Sent!
                </h2>
                <p className="text-gray-300">
                  I'll get back to you faster than light travels through space.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="grid gap-6 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
              >
                <motion.div whileHover={{ x: 3 }} className="relative">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 pl-12 pr-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </motion.div>

                <motion.div whileHover={{ x: 3 }} className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 pl-12 pr-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </motion.div>

                <motion.div whileHover={{ x: 3 }} className="relative">
                  <FiMessageSquare className="absolute left-4 top-4 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    rows={5}
                    placeholder="Your Message"
                    className="w-full bg-white/5 border border-white/10 pl-12 pr-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold py-4 px-8 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                >
                  <FiSend />
                  <span>Launch Message</span>
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-16 flex justify-center gap-6"
          >
            {[
              { icon: "💼", label: "LinkedIn", url: "#" },
              { icon: "🐙", label: "GitHub", url: "#" },
              { icon: "📧", label: "Email", url: "#" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                whileHover={{ y: -5 }}
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-full w-12 h-12 flex items-center justify-center text-xl transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
