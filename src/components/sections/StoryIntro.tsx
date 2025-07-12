"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function StoryIntro({
  phrases,
  currentPhase,
  onComplete,
}: {
  phrases: string[];
  currentPhase: number;
  onComplete: () => void;
}) {
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    if (currentPhase < phrases.length) {
      const currentPhrase = phrases[currentPhase];

      const handleTyping = () => {
        if (isDeleting) {
          setDisplayText(currentPhrase.substring(0, displayText.length - 1));
          setTypingSpeed(50);
        } else {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        }

        if (!isDeleting && displayText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2000);
        }

        if (isDeleting && displayText === "") {
          setIsDeleting(false);
          onComplete();
        }
      };

      const timer = setTimeout(handleTyping, typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [displayText, currentPhase, isDeleting, phrases, typingSpeed, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-8 min-h-24 cosmic-text">
        {displayText}
        <span className="animate-pulse">|</span>
      </h1>

      {currentPhase === phrases.length - 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <p className="text-xl mb-6">Ready to explore the multiverse?</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={onComplete}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all"
            >
              Begin Journey
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
