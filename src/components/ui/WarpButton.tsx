"use client";

import { motion } from "framer-motion";
import { playWarpSound } from "@/lib/utils/audio";

interface WarpButtonProps {
  href: string;
  icon: string;
  label: string;
  onClick?: () => void;
}

export default function WarpButton({
  href,
  icon,
  label,
  onClick,
}: WarpButtonProps) {
  const handleClick = () => {
    playWarpSound();
    if (onClick) onClick();
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center justify-center p-6 bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-xl hover:border-blue-400/50 transition-all cursor-pointer"
    >
      <span className="text-4xl mb-3">{icon}</span>
      <span className="text-lg font-medium">{label}</span>
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-transparent"
        whileHover={{
          borderColor: "rgba(99, 102, 241, 0.5)",
          transition: { duration: 0.3 },
        }}
      />
    </motion.a>
  );
}
