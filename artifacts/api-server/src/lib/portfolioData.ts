// Structured portfolio data — update this file whenever you update the portfolio.
// The AI assistant (Dodo) reads from this at request-time, so changes reflect instantly.

export const portfolioData = {
  person: {
    fullName: "Sibaram Nayak",
    degree: "B.Tech Electrical Engineering, final year",
    college: "Parala Maharaja Engineering College (PMEC), Berhampur, Odisha",
    hometown: "Sanakholi, Ganjam, Odisha",
    careerGoal: "ML Engineer specializing in Computer Vision",
  },

  skills: {
    core: ["TensorFlow", "Keras", "MobileNetV2", "Transfer Learning", "Python", "NumPy", "Pandas", "Git", "HTML/CSS"],
    proficient: ["Grad-CAM", "Scikit-learn", "JavaScript", "React", "Next.js", "Tailwind CSS", "DirectML", "WSL2"],
    hardware: "RTX 3050 Ti with DirectML on Windows",
  },

  projects: [
    {
      name: "Intel Image Classification",
      description: "MobileNetV2-based 6-class scene recognition achieving ~94% accuracy",
      tech: ["TensorFlow", "MobileNetV2", "Transfer Learning"],
      status: "completed",
    },
    {
      name: "Flowers102",
      description: "102-class flower classification with functional API; Grad-CAM visualization in progress (debugging TFOpLambda issue)",
      tech: ["TensorFlow", "Grad-CAM", "Keras Functional API"],
      status: "in progress",
    },
    {
      name: "Harmonic Source Identification",
      description: "ML on power systems — current signature analysis for harmonic source identification, research project",
      tech: ["Machine Learning", "Signal Processing", "Python"],
      status: "research",
    },
    {
      name: "PixelNest",
      description: "Personal photo archive website with a darkroom aesthetic",
      tech: ["HTML", "CSS", "JavaScript"],
      url: "thesibaram.github.io/pixelnest",
      status: "live",
    },
    {
      name: "GFG 21 Projects",
      description: "21 ML projects in 21 days covering a wide range of scikit-learn and pandas techniques",
      tech: ["scikit-learn", "pandas", "Python"],
      status: "completed",
    },
  ],

  achievements: [
    "SIH 2024 National Finalist (Smart India Hackathon)",
    "GeeksforGeeks 21 Projects in 21 Days ML Program",
  ],

  availability: {
    status: "Actively seeking ML/CV internships",
    from: "May 2025",
    locations: "Remote and on-site roles across India",
    preferredContact: "email",
  },

  contact: {
    github: "github.com/thesibaram",
  },

  personality: [
    "Debugs problems others give up on — e.g., the TFOpLambda Grad-CAM issue",
    "Prefers building real things over just studying theory",
    "Self-taught his GPU training environment from scratch using DirectML",
    "Direct communicator, prefers substance over formality",
  ],
};

export type PortfolioData = typeof portfolioData;
