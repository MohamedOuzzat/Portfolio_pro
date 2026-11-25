"use client";

import { motion } from "framer-motion";
import { Check, Boxes, Cpu, Workflow, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { expertisePillars } from "@/data/site";
import { Counter } from "@/components/motion/counter";
import { GlowCard } from "@/components/motion/glow-card";

const pillarIcons = {
  fullstack: Boxes,
  ai: Cpu,
  servicenow: Workflow,
} as const;

const pillarlinks = {
  fullstack: "/skills",
  ai: "/about",
  servicenow: "/servicenow",
} as const;

export function ExpertiseMatrix() {
  return (
    <section id="expertise" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden="true" className="data-stream absolute inset-y-0 left-1/2 hidden lg:block" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-violet-400">
            <span className="h-px w-8 bg-violet-500/50" />
            {"// expertise"}
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-mist-100 md:text-5xl">
            Three signal <span className="text-gradient">channels</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mist-400 md:text-lg">
            Where I operate across the software intelligence stack — building the interfaces,
            wiring the intelligence, and automating the enterprise.
          </p>
        </motion.div>

        {/* Asymmetric bento-style 3-column grid */}
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr_1.05fr]">
          {expertisePillars.map((pillar, i) => {
            const Icon = pillarIcons[pillar.id as keyof typeof pillarIcons];
            const link = pillarlinks[pillar.id as keyof typeof pillarlinks];
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={i === 1 ? "lg:translate-y-6" : ""}
              >
                <GlowCard
                  color={`${pillar.color}28`}
                  className="h-full p-7"
                >
                  {/* Top accent gradient bar */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[2px] opacity-75 transition-opacity group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${pillar.color}, transparent)`,
                    }}
                  />

                  <div className="flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <div
                        className="flex size-12 items-center justify-center rounded-xl border"
                        style={{
                          color: pillar.color,
                          borderColor: `${pillar.color}38`,
                          background: `${pillar.color}16`,
                        }}
                      >
                        <Icon className="size-6" />
                      </div>
                      <span
                        className="font-mono text-[10px] tracking-widest"
                        style={{ color: pillar.color }}
                      >
                        {pillar.label}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-2xl font-bold text-mist-100">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist-400">
                      {pillar.description}
                    </p>

                    <ul className="mt-6 space-y-2.5">
                      {pillar.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2.5">
                          <Check
                            className="mt-0.5 size-4 shrink-0"
                            style={{ color: pillar.color }}
                          />
                          <span className="text-sm text-mist-200">{cap}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {pillar.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-md border border-line bg-overlay px-2.5 py-0.5 font-mono text-[10px] text-mist-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-7">
                      <div className="flex items-center justify-between border-t border-line pt-5">
                        <Link
                          href={link}
                          className="group/link inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                          style={{ color: pillar.color }}
                        >
                          Explore
                          <ArrowUpRight className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </Link>
                        <span className="font-mono text-xs text-mist-500">
                          <Counter target={pillar.projectCount} /> projects
                        </span>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
