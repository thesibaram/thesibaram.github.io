export type SkillLevel = "core" | "proficient" | "familiar"

export type Skill = {
  name: string
  level: SkillLevel
}

export type SkillCategory = {
  id: string
  label: string
  iconKey: string
  description: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: "ml-dl",
    label: "ML / Deep Learning",
    iconKey: "brain",
    description: "Core stack for building and training models",
    skills: [
      { name: "TensorFlow",        level: "core"       },
      { name: "Keras",             level: "core"       },
      { name: "MobileNetV2",       level: "core"       },
      { name: "Transfer Learning", level: "core"       },
      { name: "Grad-CAM",          level: "proficient" },
      { name: "Scikit-learn",      level: "proficient" },
      { name: "Data Augmentation", level: "proficient" }
    ]
  },
  {
    id: "computer-vision",
    label: "Computer Vision",
    iconKey: "eye",
    description: "Image understanding and visual ML",
    skills: [
      { name: "Image Classification", level: "core"       },
      { name: "Feature Extraction",   level: "core"       },
      { name: "Fine-Grained Recog",   level: "proficient" },
      { name: "Functional API",       level: "proficient" },
      { name: "Model Visualization",  level: "proficient" }
    ]
  },
  {
    id: "languages",
    label: "Languages",
    iconKey: "code",
    description: "What I actually write",
    skills: [
      { name: "Python",     level: "core"       },
      { name: "JavaScript", level: "proficient" },
      { name: "TypeScript", level: "familiar"   },
      { name: "C",          level: "familiar"   }
    ]
  },
  {
    id: "data",
    label: "Data",
    iconKey: "chart",
    description: "Wrangling numbers and results",
    skills: [
      { name: "NumPy",      level: "core"       },
      { name: "Pandas",     level: "core"       },
      { name: "Matplotlib", level: "proficient" },
      { name: "Seaborn",    level: "familiar"   }
    ]
  },
  {
    id: "dev",
    label: "Dev Tools",
    iconKey: "terminal",
    description: "Environment and workflow",
    skills: [
      { name: "Git",       level: "core"       },
      { name: "GitHub",    level: "core"       },
      { name: "VS Code",   level: "core"       },
      { name: "DirectML",  level: "proficient" },
      { name: "WSL2",      level: "proficient" },
      { name: "PyCharm",   level: "familiar"   }
    ]
  },
  {
    id: "web",
    label: "Web",
    iconKey: "globe",
    description: "Frontend and portfolio work",
    skills: [
      { name: "React",    level: "proficient" },
      { name: "Next.js",  level: "proficient" },
      { name: "Tailwind", level: "proficient" },
      { name: "HTML/CSS", level: "core"       }
    ]
  }
]

export const levelConfig: Record<SkillLevel, { label: string; color: string; pixels: number }> = {
  core:       { label: "Core",       color: "var(--px-accent)",  pixels: 5 },
  proficient: { label: "Proficient", color: "var(--px-accent2)", pixels: 3 },
  familiar:   { label: "Familiar",   color: "var(--px-border)",  pixels: 1 }
}