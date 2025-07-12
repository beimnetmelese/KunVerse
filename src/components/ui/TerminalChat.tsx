"use client";

import { useState } from "react";
import { useCompletion } from "ai/react";

export default function TerminalChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const { complete, completion, isLoading } = useCompletion({
    api: "/api/groq",
    onFinish: () => {
      setMessages((prev) => [...prev, { role: "ai", content: completion }]);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    complete(input);
    setInput("");
  };

  return (
    <div className="fixed bottom-8 left-8 bg-black/90 border border-green-400/30 rounded-lg w-96 h-64 overflow-hidden">
      <div className="p-4 h-[calc(100%-60px)] overflow-y-auto font-mono text-green-400 text-sm">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={msg.role === "user" ? "text-cyan-400" : "text-white"}
          >
            {msg.role === "user" ? "> " : "AI: "}
            {msg.content}
          </div>
        ))}
        {isLoading && <div className="text-green-400">Thinking...</div>}
      </div>
      <form
        onSubmit={handleSubmit}
        className="p-4 border-t border-green-400/30"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-transparent border-none outline-none text-green-400"
          placeholder="Ask about Beimnet..."
        />
      </form>
    </div>
  );
}
