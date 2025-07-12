"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCompletion } from "ai/react";

export default function CosmoAI() {
  const [isVisible, setIsVisible] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [conversation, setConversation] = useState<
    Array<{ role: string; content: string }>
  >([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Groq API streaming
  const { complete, completion, isLoading } = useCompletion({
    api: "/api/groq",
    onFinish: () => {
      setConversation((prev) => [...prev, { role: "ai", content: completion }]);
      setIsThinking(false);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const question = inputRef.current?.value;
    if (!question) return;

    setConversation((prev) => [...prev, { role: "user", content: question }]);
    setIsThinking(true);
    complete(question);
    if (inputRef.current) inputRef.current.value = "";
  };

  // Cosmic appearance effect
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 right-6 z-50 w-96 max-w-full"
        >
          <div className="bg-black/90 backdrop-blur-lg border border-cyan-400/30 rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/20">
            {/* Cosmic Header */}
            <div className="bg-gradient-to-r from-purple-900/80 to-blue-900/80 p-4 flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-400 pulse-cosmic mr-2"></div>
              <h3 className="font-mono text-cyan-300 flex-1">
                COSMO_AI v2.3.7
              </h3>
              <button
                onClick={() => setIsVisible(false)}
                className="text-cyan-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Chat Log */}
            <div className="h-64 p-4 overflow-y-auto space-y-4 font-mono text-sm">
              {conversation.length === 0 ? (
                <div className="text-gray-400">
                  <p>
                    // Ask me about Beimnet's skills, projects, or why he's
                    awesome!
                  </p>
                  <p>// Try: "What's the most impressive project?"</p>
                </div>
              ) : (
                conversation.map((msg, i) => (
                  <div
                    key={i}
                    className={
                      msg.role === "user" ? "text-cyan-300" : "text-white"
                    }
                  >
                    <span className="text-purple-400">
                      {msg.role === "user" ? ">" : "AI:"}
                    </span>{" "}
                    {msg.content}
                  </div>
                ))
              )}
              {isThinking && (
                <div className="flex space-x-1 text-cyan-400">
                  <span>Cosmo is thinking</span>
                  <span className="animate-pulse">...</span>
                </div>
              )}
            </div>

            {/* Input with cosmic flare */}
            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-cyan-900/50"
            >
              <div className="flex">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Ask the cosmos..."
                  className="flex-1 bg-gray-900/70 text-cyan-100 border border-cyan-900/50 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-cyan-500 font-mono text-sm"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-4 py-2 rounded-r-lg font-mono text-sm disabled:opacity-50"
                >
                  {isLoading ? "WARPING..." : "SEND"}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
