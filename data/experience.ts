export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  tags: string[];
  icon: "building" | "school" | "trophy";
  image?: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer in Training",
    company: "YouCode × Simplon",
    period: "2023 — Present",
    location: "Marrakech, Morocco",
    description:
      "Intensive full-stack and AI development program. Building real-world projects in Laravel, Next.js, Java Spring Boot, and exploring the AI/ML pathway.",
    tags: ["Laravel", "Next.js", "Java", "Python", "AI/ML"],
    icon: "school",
  },
];

export const journey = [
  {
    year: "2023",
    title: "First lines of code",
    desc: "Joined YouCode × Simplon and discovered a passion for building things that people use.",
  },
  {
    year: "2024",
    title: "Full Stack focus",
    desc: "Dived deep into Laravel and Next.js, shipping real projects with REST APIs and polished UIs.",
  },
  {
    year: "2024",
    title: "ServiceNow certified",
    desc: "Earned the CSA certification and began automating enterprise ITSM workflows.",
  },
  {
    year: "2025",
    title: "Shipping in production",
    desc: "Launched CARFORFAR, a trilingual car rental platform now live in production.",
  },
  {
    year: "2026",
    title: "Leveling up",
    desc: "Exploring AI/ML pathways and pushing every project toward Awwwards-level craft.",
  },
];

export const aboutStats = [
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value: 24, suffix: "", label: "Months Experience" },
  { value: 300, suffix: "+", label: "GitHub Commits" },
];
