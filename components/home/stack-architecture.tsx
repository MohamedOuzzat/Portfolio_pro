"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GlowCard } from "@/components/motion/glow-card";
import { Counter } from "@/components/motion/counter";

const stackGroups = [
  {
    id: "frontend",
    title: "Frontend",
    color: "#8b5cf6",
    span: "lg:col-span-5",
    nodes: [
      { name: "Next.js", pct: 90 },
      { name: "React", pct: 92 },
      { name: "TypeScript", pct: 82 },
      { name: "Tailwind", pct: 95 },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    color: "#22d3ee",
    span: "lg:col-span-7",
    nodes: [
      { name: "Laravel / PHP", pct: 90 },
      { name: "Node.js", pct: 75 },
      { name: "Java Spring", pct: 68 },
      { name: "REST APIs", pct: 92 },
    ],
  },
  {
    id: "ai",
    title: "AI & Data",
    color: "#a78bfa",
    span: "lg:col-span-4",
    nodes: [
      { name: "Python", pct: 55 },
      { name: "LLM / GenAI", pct: 60 },
      { name: "RAG / Vectors", pct: 55 },
      { name: "Prompt Eng.", pct: 70 },
    ],
  },
  {
    id: "servicenow",
    title: "ServiceNow",
    color: "#22d3ee",
    span: "lg:col-span-4",
    nodes: [
      { name: "ITSM", pct: 88 },
      { name: "Flow Designer", pct: 84 },
      { name: "Script Includes", pct: 80 },
      { name: "REST Integr.", pct: 82 },
    ],
  },
  {
    id: "data",
    title: "Databases",
    color: "#8b5cf6",
    span: "lg:col-span-4",
    nodes: [
      { name: "MySQL", pct: 85 },
      { name: "PostgreSQL", pct: 70 },
      { name: "Redis", pct: 60 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    color: "#67e8f9",
    span: "lg:col-span-12",
    horizontal: true,
    nodes: [
      { name: "AWS", pct: 62 },
      { name: "Vercel", pct: 88 },
      { name: "Docker", pct: 60 },
      { name: "CI/CD", pct: 70 },
    ],
  },
];

export function StackArchitecture() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {[
          { top: "12%", left: "10%", size: 320, delay: "0s", color: "rgba(139,92,246,0.10)" },
          { top: "58%", left: "68%", size: 380, delay: "-4s", color: "rgba(34,211,238,0.08)" },
        ].map((b, i) => (
          <div
            key={i}
            className="animate-aurora absolute rounded-full blur-[120px]"
            style={{
              top: b.top,
              left: b.left,
              width: b.size,
              height: b.size,
              background: b.color,
              animationDelay: b.delay,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14 max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-violet-400">
            <span className="h-px w-8 bg-violet-500/50" />
            {"// architecture"}
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-mist-100 md:text-5xl">
            The <span className="text-gradient">stack</span> as a system
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mist-400 md:text-lg">
            Grouped by the context I use them in — not a flat list. Each node is a tool I reach
            for when a problem demands it.
          </p>
        </motion.div>

        {/* True asymmetric Bento Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {stackGroups.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: gi * 0.05 }}
              className={`sm:col-span-1 ${group.span} ${
                group.horizontal ? "sm:col-span-2" : ""
              }`}
            >
              <GlowCard color={`${group.color}22`} className="h-full p-6">
                <div className="mb-5 flex items-center justify-between">
                  <h3
                    className="font-display text-lg font-bold"
                    style={{ color: group.color }}
                  >
                    {group.title}
                  </h3>
                  <span className="rounded-md border border-line bg-overlay px-2 py-0.5 font-mono text-[10px] text-mist-500">
                    ./{group.id}
                  </span>
                </div>

                <div
                  className={
                    group.horizontal
                      ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
                      : "space-y-3.5"
                  }
                >
                  {group.nodes.map((node) => (
                    <div key={node.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-mono text-mist-200">{node.name}</span>
                        <span className="font-mono text-[11px] text-mist-500">
                          <Counter target={node.pct} suffix="%" duration={1.1} />
                        </span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-overlay-strong">
                        <motion.div
                          className="h-full origin-left rounded-full"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: node.pct / 100 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.0,
                            delay: 0.15 + gi * 0.06,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          style={{
                            background: `linear-gradient(90deg, ${group.color}, #22d3ee)`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-line pt-8 md:flex-row">
          <div className="flex items-center gap-3 font-mono text-xs text-mist-500">
            <span className="relative inline-flex size-2.5 items-center justify-center">
              <span className="absolute inline-flex size-2.5 animate-ping rounded-full bg-violet-400 opacity-60" />
              <span className="relative size-2 rounded-full bg-violet-400" />
            </span>
            Systems designed to interoperate
          </div>
          <Link
            href="/skills"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-mist-400 transition-colors hover:text-cyan-400"
          >
            Explore the full skills matrix
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
