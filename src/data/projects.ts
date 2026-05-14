export type Project = {
  id: string
  title: string
  tagline: string
  description: string
  problem: string
  approach: string
  outcome: string
  category: "CV" | "ML" | "Web" | "Research" | "Systems"
  techStack: string[]
  metrics?: { label: string; value: string }[]
  status: "completed" | "in-progress" | "archived"
  year: string
  links: {
    demo?: string
    github?: string
    paper?: string
  }
  featured: boolean
}

export const projects: Project[] = [
  {
    id: "intel-image-classification",
    title: "Intel Image Classification",
    tagline: "Scene recognition across 6 natural categories using transfer learning",
    description: "Built a CNN classifier on the Intel Image Classification dataset using MobileNetV2 as the backbone. Applied fine-tuning on the top layers after freezing the base, trained on an RTX 3050 Ti via DirectML on Windows.",
    problem: "Raw training from scratch on a mid-range GPU was too slow and overfit quickly on the 25k image dataset.",
    approach: "Used MobileNetV2 pretrained on ImageNet, froze base layers, added custom dense head, used aggressive data augmentation to generalize.",
    outcome: "Achieved ~94% validation accuracy. Model generalizes well across buildings, forests, glaciers, mountains, sea, and street categories.",
    category: "CV",
    techStack: ["TensorFlow", "Keras", "MobileNetV2", "DirectML", "Python"],
    metrics: [
      { label: "Accuracy", value: "94.2%" },
      { label: "Classes", value: "6" },
      { label: "Dataset", value: "25k images" }
    ],
    status: "completed",
    year: "2024",
    links: { github: "https://github.com/thesibaram" },
    featured: true
  },
  {
    id: "flowers102-classification",
    title: "Flowers102 Classification",
    tagline: "102-category fine-grained flower recognition with Grad-CAM visualization",
    description: "Fine-grained classification on the Oxford Flowers102 dataset using MobileNetV2 functional API. Currently building Grad-CAM visualization to understand which regions the model attends to per class.",
    problem: "Fine-grained recognition is harder than scene classification - inter-class differences between flower species are subtle and intra-class variation is high.",
    approach: "Functional API model for flexibility, custom preprocessing layer, transfer learning from ImageNet weights. Grad-CAM integration currently blocked by TFOpLambda graph disconnection issue.",
    outcome: "Classification working with strong accuracy. Grad-CAM work in progress - debugging graph disconnection from preprocessing layers.",
    category: "CV",
    techStack: ["TensorFlow", "Keras", "MobileNetV2", "Grad-CAM", "DirectML"],
    metrics: [
      { label: "Classes", value: "102" },
      { label: "Dataset", value: "Flowers102" },
      { label: "Grad-CAM", value: "In Progress" }
    ],
    status: "in-progress",
    year: "2025",
    links: { github: "https://github.com/thesibaram" },
    featured: true
  },
  {
    id: "harmonic-source-identification",
    title: "Harmonic Source Identification",
    tagline: "ML-based harmonic detection in power distribution networks",
    description: "Research project on identifying harmonic sources in power distribution networks using current signature analysis. Applied supervised ML classifiers to distinguish harmonic-generating loads from clean ones.",
    problem: "Harmonic distortion from nonlinear loads degrades power quality. Manually identifying the source requires expensive measurement equipment.",
    approach: "Extracted features from current waveforms, trained classification models on labeled signature data, evaluated performance across load types.",
    outcome: "Demonstrated feasibility of ML-based detection as a low-cost alternative to traditional harmonic analyzers.",
    category: "Research",
    techStack: ["Python", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
    metrics: [
      { label: "Domain", value: "Power Systems" },
      { label: "Type", value: "Research" }
    ],
    status: "completed",
    year: "2024",
    links: {},
    featured: true
  },
  {
    id: "pixelnest",
    title: "PixelNest",
    tagline: "Personal photo archive with a darkroom and film photography aesthetic",
    description: "A personal photo archive website with a film photography aesthetic. Built as a digital memory vault with a darkroom visual identity.",
    problem: "Wanted a personal photo home that felt like a physical archive, not a social media feed.",
    approach: "Custom HTML/CSS/JS, dark background, grain texture, minimal UI. Planned upgrade to a photos.json data layer and lightbox integration.",
    outcome: "Live at thesibaram.github.io/pixelnest. Multi-phase redesign currently in progress.",
    category: "Web",
    techStack: ["HTML", "CSS", "JavaScript"],
    metrics: [
      { label: "Status", value: "Live" }
    ],
    status: "in-progress",
    year: "2024",
    links: { demo: "https://thesibaram.github.io/pixelnest", github: "https://github.com/thesibaram/pixelnest" },
    featured: false
  },
  {
    id: "gfg-21-projects",
    title: "21 ML Projects in 21 Days",
    tagline: "Structured ML sprint covering classification, regression, clustering",
    description: "Completed GeeksforGeeks structured ML program building 21 independent projects across 21 days. Covered the breadth of classical ML from linear models to ensemble methods.",
    problem: "Needed to rapidly build portfolio depth across multiple ML domains before internship application season.",
    approach: "One project per day, each using a different algorithm or dataset. Scikit-learn, Pandas, and Python throughout. All pushed to GitHub.",
    outcome: "21 completed, documented projects on GitHub. Solid foundation across supervised, unsupervised, and evaluation workflows.",
    category: "ML",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    metrics: [
      { label: "Projects", value: "21" },
      { label: "Duration", value: "21 days" }
    ],
    status: "completed",
    year: "2024",
    links: { github: "https://github.com/thesibaram" },
    featured: false
  },
  {
    id: "dark-laboratory-portfolio",
    title: "Dark Laboratory Portfolio",
    tagline: "Animated developer portfolio with pixel-lab aesthetic",
    description: "This portfolio website — built with React, Vite, Tailwind CSS, and Framer Motion. Features a cyan-on-dark 'calm pixel laboratory' aesthetic with animated sections, an AI chatbot (Dodo), and a responsive layout.",
    problem: "Needed a portfolio that stands out visually while staying fast and accessible.",
    approach: "Component-driven architecture, Framer Motion for scroll-triggered animations, JetBrains Mono for a terminal feel. AI chatbot powered by Claude via Replit integrations.",
    outcome: "Live portfolio website with full sections: Hero, About, Skills, Projects, Experience, Certifications, Blog, Contact.",
    category: "Web",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "TypeScript"],
    metrics: [
      { label: "Sections", value: "9" },
      { label: "AI", value: "Dodo" }
    ],
    status: "in-progress",
    year: "2025",
    links: { github: "https://github.com/thesibaram" },
    featured: false
  }
]
