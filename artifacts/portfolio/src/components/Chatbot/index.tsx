import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PixelBotIcon } from "./PixelBotIcon";
import { ChatWindow } from "./ChatWindow";

function generateSessionId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [showDot, setShowDot] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const visitCountRef = useRef(0);
  const sessionIdRef = useRef(generateSessionId());

  useEffect(() => {
    const visits = parseInt(sessionStorage.getItem("chatbot_visits") || "0", 10);
    visitCountRef.current = visits;
  }, []);

  const handleOpen = () => {
    setOpen((prev) => {
      if (!prev) {
        setShowDot(false);
        const visits = visitCountRef.current + 1;
        visitCountRef.current = visits;
        sessionStorage.setItem("chatbot_visits", String(visits));
      }
      return !prev;
    });
  };

  const showTooltipCheck = visitCountRef.current < 3;

  return (
    <>
      <AnimatePresence>
        {open && (
          <ChatWindow
            onClose={() => setOpen(false)}
            sessionId={sessionIdRef.current}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTooltip && showTooltipCheck && !open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              bottom: "38px",
              right: "88px",
              background: "var(--px-surface)",
              border: "1px solid var(--px-border)",
              padding: "6px 10px",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "11px",
              color: "var(--px-text)",
              zIndex: 9999,
              whiteSpace: "nowrap",
              pointerEvents: "none",
            }}
          >
            Ask AI about Sibaram
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 9999 }}>
        {showDot && !open && (
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              position: "absolute",
              top: "-4px",
              right: "-4px",
              width: "8px",
              height: "8px",
              background: "#EF4444",
              zIndex: 1,
            }}
          />
        )}
        <button
          onClick={handleOpen}
          onMouseEnter={(e) => {
            setShowTooltip(true);
            const el = e.currentTarget;
            el.style.transform = "translate(-3px, -3px)";
            el.style.boxShadow = "6px 6px 0px rgba(0,180,216,0.5)";
          }}
          onMouseLeave={(e) => {
            setShowTooltip(false);
            const el = e.currentTarget;
            el.style.transform = "";
            el.style.boxShadow = "";
          }}
          style={{
            width: "52px",
            height: "52px",
            background: "var(--px-accent)",
            border: "2px solid var(--px-accent)",
            borderRadius: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#0D0D10",
            transition: "transform 150ms ease, box-shadow 150ms ease",
            willChange: "transform",
          }}
          aria-label="Ask AI about Sibaram"
        >
          <PixelBotIcon size={24} />
        </button>
      </div>
    </>
  );
}
