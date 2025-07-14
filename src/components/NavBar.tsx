"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Code, Server, Bot, Mail, Sparkles } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  if (pathname === "/") return null;

  const navItems = [
    { label: "Multiverse", href: "/multiverse", icon: <Sparkles size={16} /> },
    {
      label: "Planet About",
      href: "/universe/about",
      icon: <Home size={16} />,
    },
    {
      label: "Planet Frontend",
      href: "/universe/frontend",
      icon: <Code size={16} />,
    },
    {
      label: "Planet Backend",
      href: "/universe/backend",
      icon: <Server size={16} />,
    },
    { label: "Planet Bot", href: "/universe/bots", icon: <Bot size={16} /> },
    {
      label: "Planet Contact",
      href: "/universe/contact",
      icon: <Mail size={16} />,
    },
  ];

  const getLinkClasses = (href: string) =>
    `relative text-sm font-medium transition-all flex items-center gap-2 px-3 py-2 rounded-lg ${
      pathname === href
        ? "text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <>
      {/* 🌌 Desktop Nav */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden md:flex fixed mb-6 top-2 left-1/2 -translate-x-1/2 z-50 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-2 py-1 gap-1 shadow-lg shadow-black/30"
      >
        {navItems.map((item) => (
          <motion.div
            key={item.href}
            onHoverStart={() => setHoveredItem(item.href)}
            onHoverEnd={() => setHoveredItem(null)}
            className="relative"
          >
            <Link
              href={item.href}
              className={`${getLinkClasses(
                item.href
              )} flex items-center gap-2 px-4 py-2 rounded-full`}
            >
              <span className="text-cyan-300">{item.icon}</span>
              <span className="whitespace-nowrap">{item.label}</span>
            </Link>

            {hoveredItem === item.href && (
              <motion.div
                layoutId="navHover"
                className="absolute inset-0 bg-white/10 rounded-full border border-white/20 -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.div>
        ))}

        {/* Floating particles for desktop */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-full">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, Math.random() * 30 - 15],
                y: [0, Math.random() * 10 - 5],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute rounded-full bg-white/30"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </motion.nav>

      {/* 📱 Mobile Toggle */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="md:hidden fixed top-4 left-4 z-50"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/10 backdrop-blur-xl p-3 rounded-full border border-white/20 text-white hover:bg-white/20 transition-all shadow-lg"
        >
          {isOpen ? (
            <X size={20} className="text-cyan-300" />
          ) : (
            <Menu size={20} className="text-purple-300" />
          )}
        </button>
      </motion.div>

      {/* 📱 Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="md:hidden fixed top-20 left-4 right-4 bg-gradient-to-br from-[#0f0f1a]/90 to-[#14142c]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 z-40 shadow-2xl shadow-black/50 space-y-2 overflow-hidden"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden -z-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
            </div>

            {navItems.map((item) => (
              <motion.div
                key={item.href}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={getLinkClasses(item.href) + " block"}
                >
                  <span className="text-cyan-300">{item.icon}</span>
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
