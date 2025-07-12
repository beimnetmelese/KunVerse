"use client";

import { useEffect, useState } from "react";

export default function TypingIntro() {
  const text =
    "🚀 Welcome, traveler. You’ve entered Beimnet’s Dev Multiverse...";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i++));
      if (i > text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-2xl sm:text-4xl font-bold max-w-3xl leading-relaxed text-[#4bffa5]">
      {displayed}
    </h1>
  );
}
