"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const commands = {
  help: () =>
    `Available commands:\n- projects: List all universes\n- contact: Show contact info\n- secret: Try it...`,
  projects: () => `Redirecting to multiverse...`,
  contact: () =>
    `Email: beimnet@devmultiverse.com\nGitHub: @beimnet\nLinkedIn: Beimnet`,
  secret: () => `Initiating recruiter protocol...`,
};

export default function QuantumTerminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([
    'Welcome to Quantum Terminal. Type "help" to begin.',
  ]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleCommand = (cmd: string) => {
    const lowerCmd = cmd.trim().toLowerCase();
    let response = `Command not found: ${cmd}`;

    if (lowerCmd in commands) {
      // @ts-ignore
      response = commands[lowerCmd]();

      // Special actions
      if (lowerCmd === "projects") {
        setTimeout(() => (window.location.href = "/multiverse"), 1000);
      } else if (lowerCmd === "secret") {
        setTimeout(() => (window.location.href = "/secret-admin"), 1500);
      }
    }

    setOutput((prev) => [...prev, `> ${cmd}`, response]);
    setInput("");
  };

  // Auto-scroll
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-8 left-8 z-50 w-96 max-w-full bg-black/90 backdrop-blur-md border border-green-400/30 rounded-lg overflow-hidden shadow-xl shadow-green-500/10"
    >
      <div className="p-3 border-b border-green-900/50 flex items-center">
        <div className="flex space-x-2 mr-3">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <h3 className="font-mono text-green-400 text-sm">quantum-terminal</h3>
      </div>

      <div
        ref={terminalRef}
        className="h-64 p-4 overflow-y-auto font-mono text-green-300 text-sm whitespace-pre-wrap"
      >
        {output.join("\n\n")}
      </div>

      <div className="p-4 border-t border-green-900/50 flex items-center">
        <span className="text-green-500 mr-2">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleCommand(input)}
          className="flex-1 bg-transparent border-none outline-none text-green-300 caret-green-500"
          autoFocus
        />
      </div>
    </motion.div>
  );
}
