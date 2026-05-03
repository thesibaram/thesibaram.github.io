// Structured portfolio data — update this file whenever you update the portfolio.
// Dodo reads from this at request-time, so changes reflect instantly with no restart needed.

export const portfolioData = {
  person: {
    fullName: "Sibaram Behera",
    degree: "B.Tech Electrical Engineering, 3rd year (graduating May/June 2027)",
    college: "Parala Maharaja Engineering College (PMEC), Berhampur, Odisha",
    hometown: "Sanakholi, Ganjam, Odisha",
    careerGoal: "ML Engineer specializing in Computer Vision",
  },

  skills: {
    languages: ["Python (core)", "JavaScript (proficient)", "C (familiar)"],
    mlDeepLearning: ["TensorFlow", "Keras", "MobileNetV2", "Transfer Learning", "Scikit-learn", "Data Augmentation"],
    computerVision: ["Image Classification", "Fine-Grained Recognition", "Feature Extraction", "Grad-CAM", "Functional API modeling"],
    data: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
    devTools: ["Git", "GitHub", "VS Code", "PyCharm", "DirectML", "WSL2"],
    web: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
    hardware: "RTX 3050 Ti GPU training via DirectML on Windows",
  },

  projects: [
    {
      name: "Intel Image Classification",
      description: "Scene classifier using MobileNetV2 transfer learning on 6 natural categories — ~94% accuracy",
      tech: ["Python", "TensorFlow", "MobileNetV2", "DirectML"],
      github: "github.com/thesibaram",
      status: "completed",
      year: "2024",
    },
    {
      name: "Flowers102 Classifier",
      description: "102-class fine-grained flower recognition with MobileNetV2 functional API; Grad-CAM visualization completed",
      tech: ["Python", "TensorFlow", "Functional API", "Grad-CAM"],
      github: "github.com/thesibaram",
      status: "completed",
      year: "2025",
    },
    {
      name: "Harmonic Source Identification",
      description: "ML-based harmonic source detection in power distribution networks using current signature analysis",
      tech: ["Python", "Scikit-learn", "NumPy", "Pandas"],
      status: "completed",
      year: "2024",
    },
    {
      name: "PixelNest",
      description: "Personal photo archive website with darkroom film aesthetic",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "github.com/thesibaram/pixelnest",
      demo: "thesibaram.github.io/pixelnest",
      status: "in progress",
      year: "2024",
    },
    {
      name: "Dark Laboratory Portfolio",
      description: "This portfolio — React + Vite + Tailwind, pixel-lab aesthetic, AI chatbot (Dodo)",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "TypeScript"],
      status: "in progress",
      year: "2025",
    },
    {
      name: "GFG 21 Projects in 21 Days",
      description: "Structured ML sprint — 21 independent ML projects covering classification, regression, clustering",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      github: "github.com/thesibaram",
      status: "completed",
      year: "2024",
    },
  ],

  achievements: [
    "SIH 2024 National Finalist (Smart India Hackathon)",
    "GeeksforGeeks 21 Projects in 21 Days ML Program — completed",
  ],

  availability: {
    status: "Open to ML / Computer Vision / AI internships immediately",
    graduating: "May / June 2027",
    locations: "Remote or on-site across India (Odisha preferred)",
    preferredContact: "email",
  },

  contact: {
    email: "sibaram.work@gmail.com",
    github: "github.com/thesibaram",
    linkedin: "linkedin.com/in/sibaram-eng",
    instagram: "instagram.com/aarush.cla",
  },

  hobbies: ["Film photography", "Visual storytelling", "Maintaining PixelNest photo archive"],

  personality: [
    "Debugs problems others give up on",
    "Prefers building real things over just studying theory",
    "Self-taught GPU training environment from scratch using DirectML",
    "From a village (Sanakholi, Ganjam), building for the world",
    "Direct communicator — substance over formality",
  ],
};

export type PortfolioData = typeof portfolioData;
