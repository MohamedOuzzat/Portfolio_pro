"use client";

import {
  Braces,
  Cloud,
  Code2,
  Container,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Server,
  Sparkles,
  Terminal,
  Workflow,
} from "lucide-react";

const rowOne = [
  { name: "Next.js 16", icon: Sparkles },
  { name: "React 19", icon: Code2 },
  { name: "TypeScript", icon: Braces },
  { name: "Laravel / PHP 8", icon: Server },
  { name: "ServiceNow CSA", icon: Workflow },
  { name: "OpenAI & RAG", icon: Cpu },
  { name: "Tailwind CSS", icon: Layers },
  { name: "MySQL & PostgreSQL", icon: Database },
];

const rowTwo = [
  { name: "Flow Designer", icon: Workflow },
  { name: "Python AI/ML", icon: Terminal },
  { name: "Node.js", icon: Server },
  { name: "REST & Sanctum", icon: GitBranch },
  { name: "Docker", icon: Container },
  { name: "Vercel & AWS", icon: Cloud },
  { name: "Framer Motion", icon: Sparkles },
  { name: "Java Spring Boot", icon: Code2 },
];

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: typeof rowOne;
  reverse?: boolean;
}) {
  const repeated = [...items, ...items];
  return (
    <div className="marquee-track relative flex overflow-hidden py-1.5">
      <div
        className={`marquee-content flex w-max gap-3 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {repeated.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.name}-${idx}`}
              className="glass-card inline-flex shrink-0 items-center gap-2.5 rounded-full px-4 py-2 text-xs font-medium text-mist-200 transition-colors hover:border-violet-500/40 hover:text-mist-100"
            >
              <Icon className="size-3.5 text-cyan-400" />
              <span className="font-mono whitespace-nowrap">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Seamless 60fps infinite dual-track tech marquee with edge fade masks.
 */
export function TechMarquee() {
  return (
    <section
      aria-label="Core technologies"
      className="relative overflow-hidden border-y border-line bg-ink-900/30 py-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink-950 to-transparent md:w-32"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink-950 to-transparent md:w-32"
      />
      <div className="space-y-2">
        <MarqueeRow items={rowOne} />
        <MarqueeRow items={rowTwo} reverse />
      </div>
    </section>
  );
}
