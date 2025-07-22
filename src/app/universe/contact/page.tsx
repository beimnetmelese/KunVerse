"use client";

import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiSend,
  FiUser,
  FiMail,
  FiMessageSquare,
  FiPhone,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { ChatGroq } from "@/components/ChatGroq";

export default function ContactUniverse() {
  const [isLoading, setIsLoading] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    setIsSubmitted(true);
    fetch("https://formsubmit.co/beimnetmelese16@gmail.com", {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => {
        setFormData({ email: "", subject: "", message: "" });
      })
      .catch((err) => {
        console.error("Form submission error:", err);
      });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

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
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
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
        {[...Array(60)].map((_, i) => (
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
      <div className="relative z-10 pt-24 pb-20 px-6">
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
            Got an idea, project, or just want to vibe? Lets make something
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
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl mb-4"
                >
                  🚀
                </motion.div>
                <h2 className="text-2xl font-bold text-green-400 mb-2">
                  Message Sent!
                </h2>
                <p className="text-gray-300">
                  I will get back to you faster than light travels through
                  space.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                onSubmit={handleSubmit}
                className="grid gap-6 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
              >
                <motion.div whileHover={{ x: 3 }} className="relative">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-16"
          >
            <h3 className="text-xl font-semibold text-gray-300 mb-6">
              Direct Contact
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-cyan-500/20 text-cyan-400">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">Email</h4>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-400">
                        beimnetmelese16@gmail.com
                      </p>
                      <motion.button
                        onClick={() =>
                          copyToClipboard("beimnetmelese16@gmail.com", "email")
                        }
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-xs bg-white/10 px-2 py-1 rounded"
                      >
                        {copied === "email" ? "Copied!" : "Copy"}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* LinkedIn */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-blue-500/20 text-blue-400">
                    <FiLinkedin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/beimnetmelese"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 hover:underline"
                    >
                      linkedin.com/in/beimnetmelese
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* GitHub */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-gray-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-purple-500/20 text-purple-400">
                    <FiGithub size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">GitHub</h4>
                    <a
                      href="https://github.com/beimnetmelese"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-purple-400 hover:underline"
                    >
                      github.com/beimnetmelese
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-green-500/20 text-green-400">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">Phone</h4>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-400">+251 963659350</p>
                      <motion.button
                        onClick={() =>
                          copyToClipboard("+251912345678", "phone")
                        }
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-xs bg-white/10 px-2 py-1 rounded"
                      >
                        {copied === "phone" ? "Copied!" : "Copy"}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      </div>

      {/* AI Chat Button */}
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

      {/* AI Chat Popup */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-8 w-full max-w-md z-50"
          >
            <ChatGroq onClose={() => setShowChat(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
