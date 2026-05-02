export type BlogStatus = "published" | "draft" | "coming-soon"

export type ReadTime = {
  minutes: number
  words: number
}

export type BlogPost = {
  id: string
  slug: string
  title: string
  subtitle: string
  preview: string
  content: string
  tags: string[]
  category: "Debug" | "Tutorial" | "Project" | "Research" | "Opinion" | "Journey"
  status: BlogStatus
  publishedAt: string
  updatedAt?: string
  readTime: ReadTime
  featured: boolean
  series?: { name: string; part: number; total: number } | null
}

export const blogPosts: BlogPost[] = [
  {
    id: "blog-001",
    slug: "fixing-gradcam-functional-api",
    title: "Fixing Grad-CAM on a Functional API Model",
    subtitle: "TFOpLambda preprocessing layers and why they break your gradient graph",
    preview: "Grad-CAM stopped working the moment I switched to the functional API on Flowers102. The error was a graph disconnection from a TFOpLambda preprocessing layer. Here is what I found and how I fixed it.",
    content: "// COMING SOON - post in progress",
    tags: ["TensorFlow", "Grad-CAM", "Computer Vision", "Debugging", "MobileNetV2"],
    category: "Debug",
    status: "draft",
    publishedAt: "",
    readTime: { minutes: 6, words: 1400 },
    featured: true,
    series: { name: "Flowers102 Deep Dive", part: 2, total: 3 }
  },
  {
    id: "blog-002",
    slug: "transfer-learning-intel-what-worked",
    title: "Transfer Learning on Intel Image Dataset",
    subtitle: "What actually worked, what did not, and what the accuracy hides",
    preview: "94% sounds clean. The confusion matrix between glacier and mountain does not. Here is the full story of building the Intel classifier - the decisions, the failures, and the final setup that got there.",
    content: "// COMING SOON",
    tags: ["Transfer Learning", "MobileNetV2", "TensorFlow", "CNN", "Intel Dataset"],
    category: "Project",
    status: "coming-soon",
    publishedAt: "",
    readTime: { minutes: 8, words: 1900 },
    featured: true,
    series: null
  },
  {
    id: "blog-003",
    slug: "tensorflow-directml-windows-setup",
    title: "Setting Up TensorFlow with DirectML on Windows",
    subtitle: "RTX 3050 Ti, no CUDA, full GPU training",
    preview: "CUDA refused to cooperate. DirectML worked first try. This is the exact setup that got TensorFlow running on my RTX 3050 Ti on Windows without WSL2 or any CUDA configuration.",
    content: "// COMING SOON",
    tags: ["TensorFlow", "DirectML", "Windows", "GPU", "Setup"],
    category: "Tutorial",
    status: "coming-soon",
    publishedAt: "",
    readTime: { minutes: 5, words: 1100 },
    featured: false,
    series: null
  },
  {
    id: "blog-004",
    slug: "sih-2024-what-we-built",
    title: "SIH 2024: What We Built and What Broke",
    subtitle: "National Finalist. 36 hours. One team. Many bugs.",
    preview: "We made it to the national finals of Smart India Hackathon 2024. This is what the project was, what fell apart at 3am, and what it feels like to build something real under that kind of pressure.",
    content: "// COMING SOON",
    tags: ["SIH 2024", "Hackathon", "Team", "Story"],
    category: "Journey",
    status: "coming-soon",
    publishedAt: "",
    readTime: { minutes: 7, words: 1600 },
    featured: true,
    series: null
  },
  {
    id: "blog-005",
    slug: "flowers102-series-part1",
    title: "Starting Flowers102: Why 102 Classes is a Different Problem",
    subtitle: "Fine-grained recognition vs scene classification - not the same game",
    preview: "Going from 6 classes to 102 is not just more of the same. The model needs to learn subtle differences between species that look almost identical. Part 1 of the Flowers102 series.",
    content: "// COMING SOON",
    tags: ["Computer Vision", "Fine-Grained", "Flowers102", "MobileNetV2"],
    category: "Research",
    status: "coming-soon",
    publishedAt: "",
    readTime: { minutes: 5, words: 1200 },
    featured: false,
    series: { name: "Flowers102 Deep Dive", part: 1, total: 3 }
  }
]

export const categoryConfig: Record<BlogPost["category"], { label: string; color: string; icon: string }> = {
  Debug:    { label: "Debug",    color: "#EF4444",           icon: "bug"      },
  Tutorial: { label: "Tutorial", color: "#22C55E",           icon: "terminal" },
  Project:  { label: "Project",  color: "var(--px-accent)",  icon: "folder"   },
  Research: { label: "Research", color: "var(--px-accent2)", icon: "flask"    },
  Opinion:  { label: "Opinion",  color: "#F59E0B",           icon: "thought"  },
  Journey:  { label: "Journey",  color: "#3B82F6",           icon: "map"      }
}
