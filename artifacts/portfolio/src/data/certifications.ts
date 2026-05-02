export type CertStatus = "completed" | "in-progress" | "planned"

export type Certification = {
  id: string
  title: string
  issuer: string
  issuedDate: string
  credentialId?: string
  credentialUrl?: string
  category: "ML" | "DL" | "CV" | "Dev" | "Cloud" | "General"
  status: CertStatus
  skills: string[]
  featured: boolean
}

export const certifications: Certification[] = [
  {
    id: "cert-001",
    title: "// Add Your Certification Title",
    issuer: "Issuer Name",
    issuedDate: "MMM YYYY",
    credentialId: "",
    credentialUrl: "",
    category: "ML",
    status: "completed",
    skills: ["Python", "ML"],
    featured: true
  },
  {
    id: "cert-002",
    title: "// Add Your Certification Title",
    issuer: "Issuer Name",
    issuedDate: "MMM YYYY",
    credentialId: "",
    credentialUrl: "",
    category: "DL",
    status: "completed",
    skills: ["TensorFlow", "Keras"],
    featured: true
  },
  {
    id: "cert-003",
    title: "// In Progress Certification",
    issuer: "Issuer Name",
    issuedDate: "Expected Dec 2025",
    credentialId: "",
    credentialUrl: "",
    category: "CV",
    status: "in-progress",
    skills: ["Computer Vision", "CNN"],
    featured: false
  },
  {
    id: "cert-004",
    title: "// Planned Certification",
    issuer: "Issuer Name",
    issuedDate: "Expected 2026",
    credentialId: "",
    credentialUrl: "",
    category: "DL",
    status: "planned",
    skills: ["Deep Learning"],
    featured: false
  }
]

export const categoryConfig: Record<Certification["category"], { label: string; color: string }> = {
  ML:      { label: "ML",      color: "var(--px-accent)"  },
  DL:      { label: "DL",      color: "var(--px-accent2)" },
  CV:      { label: "CV",      color: "#22C55E"            },
  Dev:     { label: "Dev",     color: "#F59E0B"            },
  Cloud:   { label: "Cloud",   color: "#3B82F6"            },
  General: { label: "General", color: "var(--px-border)"  }
}
