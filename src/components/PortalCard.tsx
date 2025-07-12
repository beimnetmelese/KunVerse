"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  title: string;
  emoji: string;
  href: string;
}

export default function PortalCard({ title, emoji, href }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      className="w-60 h-60 bg-[#1e1e2e] text-white p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg hover:shadow-neon/40 transition"
    >
      <Link href={href}>
        <div className="cursor-pointer">
          <div className="text-4xl">{emoji}</div>
          <h3 className="mt-4 text-xl font-semibold">{title}</h3>
        </div>
      </Link>
    </motion.div>
  );
}
