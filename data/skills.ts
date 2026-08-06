import {
  Code2,
  Palette,
  Braces,
  Sparkles,
  Server,
  Terminal,
  Cloud,
  ShieldCheck,
  Database,
  HardDrive,
  Boxes,
  Cpu,
  Workflow,
  GitBranch,
  Wrench,
  Link2,
  CloudUpload,
  Globe,
  Network,
  Container,
  RefreshCw,
  Rocket,
  Layers,
  FileCode,
  Bug,
  Settings,
  Puzzle,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";

export type Skill = {
  name: string;
  pct: number;
  icon: LucideIcon;
  color: string;
  blurb: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "Interfaces that feel alive",
    color: "#3B82F6",
    skills: [
      { name: "Next.js", pct: 90, icon: Sparkles, color: "#3B82F6", blurb: "App Router, RSC, ISR & streaming." },
      { name: "React", pct: 92, icon: Code2, color: "#60A5FA", blurb: "Hooks, context, headless UI patterns." },
      { name: "TypeScript", pct: 82, icon: Braces, color: "#8B5CF6", blurb: "Strict typing across full-stack apps." },
      { name: "Tailwind CSS", pct: 95, icon: Palette, color: "#22D3EE", blurb: "Design systems & dark luxury UI." },
      { name: "Framer Motion", pct: 80, icon: Sparkles, color: "#A78BFA", blurb: "Scroll storytelling & micro-interactions." },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    subtitle: "APIs built for production",
    color: "#10B981",
    skills: [
      { name: "Laravel / PHP", pct: 90, icon: Server, color: "#F43F5E", blurb: "REST APIs, queues, Sanctum auth." },
      { name: "Node.js", pct: 75, icon: Terminal, color: "#22C55E", blurb: "Express, REST, real-time services." },
      { name: "Java Spring Boot", pct: 68, icon: Cloud, color: "#F59E0B", blurb: "Enterprise-grade backend services." },
      { name: "REST APIs", pct: 92, icon: GitBranch, color: "#3B82F6", blurb: "Resource design, versioning, docs." },
      { name: "Authentication", pct: 85, icon: ShieldCheck, color: "#A78BFA", blurb: "Sanctum, JWT, OAuth, 2FA, roles." },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    subtitle: "Data modeled with care",
    color: "#F59E0B",
    skills: [
      { name: "MySQL", pct: 85, icon: Database, color: "#38BDF8", blurb: "Schemas, indexes, complex queries." },
      { name: "PostgreSQL", pct: 70, icon: HardDrive, color: "#60A5FA", blurb: "JSONB, window functions, migrations." },
      { name: "SQLite", pct: 75, icon: Boxes, color: "#34D399", blurb: "Lightweight embedded data layers." },
      { name: "Redis", pct: 60, icon: Cpu, color: "#F87171", blurb: "Caching, sessions, rate limiting." },
    ],
  },
  {
    id: "servicenow",
    title: "ServiceNow",
    subtitle: "Enterprise ITSM automation",
    color: "#22D3EE",
    skills: [
      { name: "ITSM", pct: 88, icon: Workflow, color: "#22D3EE", blurb: "Incident, change & problem management." },
      { name: "Flow Designer", pct: 84, icon: GitBranch, color: "#38BDF8", blurb: "No-code workflow automation." },
      { name: "Script Includes", pct: 80, icon: FileCode, color: "#A78BFA", blurb: "Reusable server-side logic." },
      { name: "Business Rules", pct: 85, icon: Settings, color: "#34D399", blurb: "Server-side automation & validation." },
      { name: "REST Integrations", pct: 82, icon: Link2, color: "#F59E0B", blurb: "Bridging Now with external systems." },
    ],
  },
  {
    id: "cloud",
    title: "Cloud",
    subtitle: "Infrastructure that scales",
    color: "#38BDF8",
    skills: [
      { name: "AWS", pct: 62, icon: Cloud, color: "#F59E0B", blurb: "S3, EC2, Lambda foundations." },
      { name: "Vercel", pct: 88, icon: CloudUpload, color: "#E2E8F0", blurb: "Edge deployments, previews, CI." },
      { name: "Netlify", pct: 80, icon: Globe, color: "#22D3EE", blurb: "Static sites & serverless functions." },
      { name: "Networking", pct: 65, icon: Network, color: "#60A5FA", blurb: "DNS, TLS, CDN fundamentals." },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    subtitle: "Ship safely, ship often",
    color: "#A78BFA",
    skills: [
      { name: "Git / GitHub", pct: 90, icon: GitBranch, color: "#F1F5F9", blurb: "Branching, CI workflows, code review." },
      { name: "Docker", pct: 60, icon: Container, color: "#38BDF8", blurb: "Containers & compose for dev envs." },
      { name: "CI/CD", pct: 70, icon: RefreshCw, color: "#34D399", blurb: "Automated test & deploy pipelines." },
      { name: "Deployment", pct: 78, icon: Rocket, color: "#F59E0B", blurb: "Zero-downtime releases on Vercel." },
    ],
  },
  {
    id: "languages",
    title: "Programming Languages",
    subtitle: "The tools I think in",
    color: "#F87171",
    skills: [
      { name: "TypeScript / JS", pct: 88, icon: Braces, color: "#3178C6", blurb: "Front & back, types everywhere." },
      { name: "PHP", pct: 90, icon: FileCode, color: "#4F5D95", blurb: "Modern PHP 8 with Laravel." },
      { name: "Java", pct: 68, icon: Cpu, color: "#B07219", blurb: "Spring Boot applications." },
      { name: "Python", pct: 55, icon: Code2, color: "#3572A5", blurb: "Scripting & exploring AI/ML." },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    subtitle: "Everyday workflow",
    color: "#E2E8F0",
    skills: [
      { name: "VS Code", pct: 96, icon: Wrench, color: "#38BDF8", blurb: "Daily driver, crafted workspace." },
      { name: "Postman", pct: 85, icon: Puzzle, color: "#F59E0B", blurb: "API testing & documentation." },
      { name: "Figma", pct: 70, icon: Palette, color: "#A78BFA", blurb: "Rapid UI mockups & design." },
      { name: "Linux / CLI", pct: 75, icon: Terminal, color: "#34D399", blurb: "Shell, servers & automation." },
    ],
  },
];
