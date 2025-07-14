"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X, Send, Sparkles } from "lucide-react";

export function ChatGroq({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hey there! I'm Beimnet's AI twin 🤖 Ask me anything about him!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typingContent, setTypingContent] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typingContent]);

  // Simulate typing effect
  useEffect(() => {
    if (!isTyping) return;

    const fullText = messages[messages.length - 1]?.content || "";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypingContent(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        setTypingContent("");
      }
    }, 20); // Typing speed

    return () => clearInterval(typingInterval);
  }, [isTyping, messages]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const newMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsLoading(true);
    const systemPrompt = {
      role: "system",
      content: `You are a helpful AI assistant that answers as if you're Beimnet Melese's digital twin.

Here's what you know about Beimnet:
- Full Name: Beimnet Melese
-Email: beimnetmelese16@gmail.com
-phone number: +251963659350
-github link: https://github.com/BeimnetMelese
-linkdin: https://www.linkedin.com/in/beimnet-melese
- Profession: Software Engineer
- School: Addis Abeba Science And Technology
- 4th year student
- Favorite Team: Manchester City ⚽
- Loves: Football, movies, Telegram bots, React, Django, Tailwind, and building 3D portfolios
- Skills: Python, TypeScript, Java, JavaScript, PHP, C++, React, Next.js, Django REST Framework, FastAPI, Flask, Tailwind CSS, Chakra UI, React Native, Telegram Bot API, web scraping, databases (MySQL, PostgreSQL, MongoDB), Firebase, Git & GitHub
- Current Projects: A multiverse-themed portfolio featuring 3D planets and a chatbot powered by Groq AI
🚀 Current Project:
- A 3D multiverse-themed  portfolio built with React Three Fiber and Drei this is the website you are implemented so if they ask you about the website answer like using this info
- It features five planets:
  - **About Me**: Personal journey, background, and interests  
  - **Frontend**: Showcases stunning UIs and interactive React apps  
  - **Backend**: Covers RESTful APIs, server-side logic, and security  
  - **Bots**: Highlights intelligent Telegram bots for real-world use  
  - **Contact**: A portal to reach out and collaborate
- Notable Projects:
  - AddisGigs: A freelancing agency building fast, scalable mobile apps, Telegram bots, and web apps(https://addisgigs.vercel.app/)
  - Book Ethiopia: A hotel booking platform tailored for Ethiopia (https://book-ethiopia.vercel.app/)
  - Stream Bot: A sleek React/Tailwind app for managing live streams (https://yebkun-tv-five.vercel.app/)
  - Digital Pet Twin: An AI-driven 3D virtual cat with emotions and memory (https://digital-pet-twin.vercel.app/)
  - Smart Feedback Assistant: AI-powered customer feedback management system (https://feed-flow-ten.vercel.app/)
  - MovieMate: Telegram bot recommending movies based on user preferences (https://t.me/MovieMatePybot)
  - Mentorix Bots: Telegram bots connecting tutors and students seamlessly (https://t.me/MentorixEmployeeBot)
  - AASTU Lost & Found: Telegram bot helping students recover lost items (https://t.me/aastulostandfoundunionbot)
  - Score Snap: Telegram bot delivering live football scores and updates faster than most sports apps ( https://t.me/Scoresnapresultbot)
- Personality: Funny, clever, energetic, with strong Gen Z vibes 💙


Always respond like you're his cool twin — helpful, vibey, and ready to drop knowledge 😎. if they ask something you dont know say i don't know
`,
    };

    try {
      const res = await fetch("/api/groq-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [systemPrompt, ...messages, newMessage],
        }),
      });
      const data = await res.json();
      if (data.reply) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply },
        ]);
        setIsTyping(true);
      }
    } catch (err) {
      console.error("Error chatting with Groq:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I couldn't process that request. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className="relative bg-gradient-to-br from-[#0f0f1a] to-[#14142c] border border-white/10 backdrop-blur-lg text-white rounded-2xl shadow-2xl p-6 w-full max-w-md max-h-[80vh] flex flex-col overflow-hidden"
    >
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              y: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute rounded-full bg-white/20"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-purple-500/30 border-t-purple-500"
            />
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-sm font-bold">
              AI
            </div>
          </div>
          <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Ask AI About Beimnet
          </h3>
        </motion.div>
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-white/50 hover:text-white transition p-1 rounded-full"
        >
          <X size={20} />
        </motion.button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`rounded-xl px-4 py-3 max-w-[85%] ${
                msg.role === "user"
                  ? "bg-gradient-to-br from-cyan-600/40 to-cyan-600/20 text-cyan-100"
                  : "bg-white/5 text-white"
              }`}
            >
              {msg.content}
            </div>
          </motion.div>
        ))}

        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="rounded-xl px-4 py-3 max-w-[85%] bg-white/5 text-white">
              {typingContent}
              {typingContent.length > 0 && (
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="ml-0.5"
                >
                  |
                </motion.span>
              )}
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="mt-6">
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileFocus={{ scale: 1.01 }}
          className="relative"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something like 'What's Beimnet's favorite tech stack?'"
            className="w-full bg-white/10 text-white p-4 pr-12 rounded-xl outline-none placeholder:text-white/40 border border-white/10 focus:border-cyan-500/50 transition-all"
            disabled={isLoading}
          />
          <motion.button
            type="submit"
            disabled={isLoading || !input.trim()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full ${
              isLoading || !input.trim()
                ? "text-white/30"
                : "text-cyan-400 hover:text-cyan-300"
            }`}
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={20} />
              </motion.div>
            ) : (
              <Send size={20} />
            )}
          </motion.button>
        </motion.div>
      </form>

      {/* Watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1 }}
        className="absolute bottom-2 right-4 text-xs text-white/30"
      >
        Powered by Groq AI
      </motion.div>
    </motion.div>
  );
}
