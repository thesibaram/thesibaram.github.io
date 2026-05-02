import { motion } from "framer-motion";
import { PixelBotIcon } from "./PixelBotIcon";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";
  const isError = message.content === "ERROR_STATE";
  const isLimit = message.content === "MESSAGE_LIMIT";

  const displayContent = isError
    ? "Something went wrong. Try again."
    : isLimit
    ? "You've reached the message limit for this session. Contact Sibaram directly via the form above."
    : message.content;

  if (isUser) {
    return (
      <motion.div
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ display: "flex", justifyContent: "flex-end", marginBottom: "12px" }}
      >
        <div
          style={{
            background: "var(--px-accent)",
            color: "#0D0D10",
            padding: "8px 12px",
            maxWidth: "80%",
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            lineHeight: 1.5,
          }}
        >
          {displayContent}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "12px" }}
    >
      <div style={{ flexShrink: 0, color: "var(--px-accent)", marginTop: "4px" }}>
        <PixelBotIcon size={16} />
      </div>
      <div
        style={{
          background: "var(--px-surface)",
          color: isError || isLimit ? "#EF4444" : "var(--px-text)",
          border: "1px solid var(--px-border)",
          borderLeft: isError || isLimit ? "3px solid #EF4444" : "3px solid var(--px-accent)",
          padding: "8px 12px",
          maxWidth: "85%",
          fontFamily: "Inter, sans-serif",
          fontSize: "13px",
          lineHeight: 1.6,
        }}
      >
        {displayContent}
      </div>
    </motion.div>
  );
}
