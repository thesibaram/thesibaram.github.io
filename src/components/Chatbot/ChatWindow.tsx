import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChatHeader } from "./ChatHeader";
import { ChatMessage, type Message } from "./ChatMessage";
import { TypingIndicator } from "./TypingIndicator";
import { SuggestedQuestions } from "./SuggestedQuestions";
import { ChatInput } from "./ChatInput";
import { PixelBotIcon } from "./PixelBotIcon";
import { getLocalChatResponse } from "@/lib/chatEngine";

interface ChatWindowProps {
  onClose: () => void;
  sessionId: string;
}

export function ChatWindow({ onClose, sessionId: _sessionId }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (content: string) => {
    const userMsg: Message = { role: "user", content };
    setMessages(prev => [...prev, userMsg]);
    setLoading(true);

    try {
      const responseText = await getLocalChatResponse(content);
      setMessages(prev => [...prev, { role: "assistant", content: responseText }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "ERROR_STATE" }]);
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
        width: "min(380px, calc(100vw - 32px))",
        height: "min(520px, calc(100dvh - 120px))",
        maxHeight: "70dvh",
        display: "flex",
        flexDirection: "column",
        border: "2px solid var(--px-border)",
        background: "var(--px-bg)",
        boxShadow: "8px 8px 0px rgba(0,0,0,0.25)",
        zIndex: 9998,
        transformOrigin: "bottom right",
        WebkitOverflowScrolling: "touch",
        overflow: "hidden",
      }}
    >
      <ChatHeader onClose={onClose} />

      <div
        style={{ flex: 1, overflowY: "auto", padding: "16px", scrollBehavior: "smooth" }}
        className="chat-scroll"
      >
        {messages.length === 0 ? (
          <div className="flex flex-col items-center text-center gap-3 pt-6">
            <div
              style={{
                width: "52px",
                height: "52px",
                background: "var(--px-accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0D0D10",
              }}
            >
              <PixelBotIcon size={28} />
            </div>
            <div>
              <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "13px", fontWeight: 700, color: "var(--px-text)" }}>
                Hi, I'm Dodo!
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "var(--px-muted)", marginTop: "4px" }}>
                Sibaram's AI assistant. Ask me anything about his skills, projects, or availability.
              </p>
            </div>
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
