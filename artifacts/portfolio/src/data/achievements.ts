export type AchievementType = "hackathon" | "award" | "competition" | "recognition" | "program";

export type Achievement = {
  id: string;
  title: string;
  event: string;
  organizer: string;
  type: AchievementType;
  year: string;
  description: string;
  result: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: "sih-2024",
    title: "National Finalist",
    event: "Smart India Hackathon 2024",
    organizer: "Ministry of Education, Govt. of India",
    type: "hackathon",
    year: "2024",
    description: "Selected as a National Finalist in SIH 2024 — one of India's largest hackathons, with thousands of teams competing across institutions nationwide. Our team built a tech solution for a real-world government problem statement.",
    result: "National Finalist",
    link: "https://www.sih.gov.in",
  },
  {
    id: "gfg-21-days",
    title: "21 ML Projects in 21 Days",
    event: "GeeksforGeeks ML Sprint Program",
    organizer: "GeeksforGeeks",
    type: "program",
    year: "2024",
    description: "Completed a structured ML challenge building 21 independent machine learning projects across 21 consecutive days. Covered classification, regression, clustering, and evaluation across real datasets using Scikit-learn and Python.",
    result: "Program Completion",
    link: "https://www.geeksforgeeks.org",
  },
];
