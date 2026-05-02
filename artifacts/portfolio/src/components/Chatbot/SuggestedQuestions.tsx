interface SuggestedQuestionsProps {
  onSelect: (q: string) => void;
}

const QUESTIONS = [
  "What are his top skills?",
  "Tell me about his projects",
  "Is he available for internships?",
  "What is his tech stack?",
];

export function SuggestedQuestions({ onSelect }: SuggestedQuestionsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mt-3">
      {QUESTIONS.map((q) => (
        <button
          key={q}
          onClick={() => onSelect(q)}
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "10px",
            color: "var(--px-text)",
            border: "1px solid var(--px-border)",
            padding: "6px 12px",
            background: "none",
            borderRadius: 0,
            cursor: "pointer",
            transition: "all 100ms",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = "var(--px-accent)";
            el.style.color = "var(--px-accent)";
            el.style.transform = "translate(-1px, -1px)";
            el.style.boxShadow = "2px 2px 0 var(--px-accent)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = "var(--px-border)";
            el.style.color = "var(--px-text)";
            el.style.transform = "";
            el.style.boxShadow = "";
          }}
        >
          {q}
        </button>
      ))}
    </div>
  );
}
