export const site = {
  name: "Mohamed Ouzzat",
  shortName: "MO.",
  role: "Full Stack Developer · AI Engineer · ServiceNow Specialist",
  url: "https://mohamed-ouzzat.vercel.app",
  location: "Marrakech, Morocco",
  nationality: "Moroccan",
  email: "mohamadzat6@gmail.com",
  github: "https://github.com/2003GG",
  linkedin: "https://www.linkedin.com/in/mohamed-ouzzat-0aa656343/",
  cv: "/Mohamed-Ouzzat-CV.pdf",
  tagline: "Engineering intelligent systems — from LLM-powered apps to enterprise ITSM automation.",
  seoDescription:
    "Mohamed Ouzzat — Full Stack Developer, AI/LLM Integration Engineer and ServiceNow Developer from Marrakech, Morocco. Building intelligent web applications with Next.js, React, TypeScript, Laravel, and automating enterprise ITSM with ServiceNow.",
  keywords: [
    "Mohamed Ouzzat",
    "Mohamed Ouzzat Portfolio",
    "Full Stack Developer Morocco",
    "AI Developer",
    "LLM Integration",
    "GenAI Developer",
    "ServiceNow Developer",
    "Next.js Developer",
    "Laravel Developer",
    "TypeScript Developer",
    "React Developer",
    "AI Engineer",
    "ServiceNow CSA",
    "Marrakech",
  ],
  available: true,
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "ServiceNow", href: "/servicenow" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Certifications", href: "/certifications" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export const socials = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Email", href: `mailto:${site.email}` },
];

export const heroStats = [
  { value: 2, suffix: "+", label: "Years building" },
  { value: 10, suffix: "+", label: "Projects shipped" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value: 1, suffix: "", label: "CSA Certified" },
];

export const typingWords = [
  "Full Stack Developer",
  "AI/LLM Integration",
  "ServiceNow Developer",
  "GenAI Engineer",
  "React + Next.js",
  "Laravel + PHP",
  "TypeScript Developer",
  "Workflow Automation",
];

export const bootLines = [
  { prefix: "$", text: "whoami", delay: 0 },
  { prefix: "", text: "Mohamed Ouzzat", delay: 600, highlight: true },
  { prefix: "$", text: "cat /etc/specialization.conf", delay: 1400 },
  { prefix: "", text: "fullstack=true | ai_engineering=true | servicenow=true", delay: 2000, highlight: true },
  { prefix: "$", text: "echo $CURRENT_FOCUS", delay: 2800 },
  { prefix: "", text: "Integrating LLMs into production systems", delay: 3400, highlight: true },
  { prefix: "$", text: "status --available", delay: 4200 },
  { prefix: "", text: "● Ready for new opportunities", delay: 4800, highlight: true, dot: true },
];

export const expertisePillars = [
  {
    id: "fullstack",
    label: "FULL_STACK",
    title: "Full Stack Development",
    color: "#8b5cf6",
    colorCyan: "#c4b5fd",
    description: "End-to-end web applications with modern frameworks, clean architecture, and pixel-perfect UIs.",
    capabilities: [
      "React / Next.js (App Router, RSC, SSR/SSG)",
      "Laravel / PHP (REST APIs, Sanctum, Queues)",
      "TypeScript full-stack type safety",
      "Tailwind CSS design systems",
      "Framer Motion micro-interactions",
    ],
    tools: ["Next.js", "React", "Laravel", "TypeScript", "Tailwind"],
    projectCount: 7,
  },
  {
    id: "ai",
    label: "AI_ENGINEERING",
    title: "AI / LLM Integration",
    color: "#22d3ee",
    colorCyan: "#22d3ee",
    description: "Integrating large language models and generative AI into production workflows and intelligent applications.",
    capabilities: [
      "LLM API integration (OpenAI, Claude, etc.)",
      "RAG pipelines and vector search",
      "Prompt engineering for production use",
      "AI-powered automation and workflows",
      "Python for ML/AI scripting",
    ],
    tools: ["Python", "OpenAI", "RAG", "LangChain", "Prompt Eng."],
    projectCount: 3,
  },
  {
    id: "servicenow",
    label: "SERVICENOW",
    title: "ServiceNow Platform",
    color: "#22d3ee",
    colorCyan: "#67e8f9",
    description: "Enterprise ITSM/ITOM automation — Flow Designer workflows, custom widgets, CMDB, and platform configuration.",
    capabilities: [
      "ITSM (Incident, Change, Problem, Request)",
      "Flow Designer & Business Rules",
      "Custom Service Portal widgets (AngularJS)",
      "CMDB, CSDM & Discovery",
      "REST integrations & IntegrationHub",
    ],
    tools: ["Flow Designer", "GlideRecord", "AngularJS", "CMDB", "ITSM"],
    projectCount: 3,
  },
];
