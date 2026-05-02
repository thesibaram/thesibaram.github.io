import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChatHeader } from "./ChatHeader";
import { ChatMessage, type Message } from "./ChatMessage";
import { TypingIndicator } from "./TypingIndicator";
import { SuggestedQuestions } from "./SuggestedQuestions";
import { ChatInput } from "./ChatInput";
import { PixelBotIcon } from "./PixelBotIcon";

interface ChatWindowProps {
  onClose: () => void;
  sessionId: string;
}

export function ChatWindow({ onClose, sessionId }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (content: string) => {
    const userMsg: Message = { role: "user", content };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          messages: updatedMessages.slice(-10),
        }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "ERROR_STATE" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{
        position: "fixed",
        bottom: "88px",
        right: "24px",
        width: "clamp(calc(100vw - 32px), 360px, 360px)",
        height: "520px",
        maxHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        border: "2px solid var(--px-border)",
        background: "var(--px-bg)",
        boxShadow: "8px 8px 0px rgba(0,0,0,0.3)",
        zIndex: 9998,
        transformOrigin: "bottom right",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <ChatHeader onClose={onClose} />

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "16px",
          scrollBehavior: "smooth",
        }}
        className="chat-scroll"
      >
        {messages.length === 0 ? (
          <div className="flex flex-col items-center text-center gap-3 pt-8">
            <div style={{ color: "var(--px-accent)" }}>
              <PixelBotIcon size={32} />
            </div>
            <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "12px", color: "var(--px-text)" }}>
              Hi, I am Sibaram's AI assistant.
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "var(--px-muted)" }}>
              Ask me anything about his skills, projects, or availability.
            </p>
            <SuggestedQuestions onSelect={sendMessage} />
          </div>
        ) : (
          <>
            {messages.map((msg, i) => (
              <ChatMessage key={i} message={msg} />
            ))}
            {loading && <TypingIndicator />}
          </>
        )}
        <div ref={bottomRef} />
      </div>

      <ChatInput onSend={sendMessage} disabled={loading} />
    </motion.div>
  );
}
