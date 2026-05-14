/**
 * Local Chat Engine - Provides responses to user queries
 * This is a simple implementation that can be enhanced with:
 * - API integrations (OpenAI, Anthropic, etc.)
 * - Knowledge base from portfolio content
 * - Local LLM models
 */

// Sample knowledge base about Sibaram
const KNOWLEDGE_BASE = {
  about: "I am Sibaram, a full-stack developer passionate about creating beautiful and functional web applications.",
  skills: [
    "TypeScript/JavaScript",
    "React",
    "Node.js",
    "Python",
    "Web Development",
    "UI/UX Design",
    "Database Design",
  ],
  availability: "I'm available for freelance projects and full-time opportunities.",
  contact: "You can reach me through the contact section on this site.",
};

// Simple response patterns
const RESPONSE_PATTERNS = [
  {
    keywords: ["hello", "hi", "hey"],
    responses: [
      "Hey there! Welcome to my portfolio. How can I help you today?",
      "Hi! I'm Dodo, Sibaram's AI assistant. What would you like to know?",
    ],
  },
  {
    keywords: ["skills", "what can you do", "expertise"],
    responses: [
      `My main skills include: ${KNOWLEDGE_BASE.skills.join(", ")}. I'm constantly learning and exploring new technologies!`,
    ],
  },
  {
    keywords: ["project", "work", "portfolio"],
    responses: [
      "I've worked on various projects showcasing my skills in web development. Check out the Projects section to see what I've built!",
    ],
  },
  {
    keywords: ["hire", "available", "contact", "work with you"],
    responses: [
      `${KNOWLEDGE_BASE.availability} ${KNOWLEDGE_BASE.contact}`,
    ],
  },
  {
    keywords: ["about", "who are you", "tell me about"],
    responses: [KNOWLEDGE_BASE.about],
  },
];

/**
 * Generates a response based on user input
 * Can be extended to use actual AI APIs
 */
export async function getLocalChatResponse(userMessage: string): Promise<string> {
  const message = userMessage.toLowerCase().trim();

  // Check for pattern matches
  for (const pattern of RESPONSE_PATTERNS) {
    if (pattern.keywords.some((keyword) => message.includes(keyword))) {
      const response =
        pattern.responses[Math.floor(Math.random() * pattern.responses.length)];
      return response;
    }
  }

  // Default response
  return "That's an interesting question! For more information, feel free to reach out through the contact section on my site.";
}
