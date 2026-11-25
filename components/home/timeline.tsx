"use client";

import { motion } from "framer-motion";
import { Route, School, Trophy, Building2 } from "lucide-react";
import { journey, experience } from "@/data/experience";

const iconMap = {
  "2023": School,
  "2024": Trophy,
  "2025": Building2,
  "2026": Route,
} as const;

export function Timeline() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-ink-900/25 py-24 md:py-32">
      <div aria-hidden="true" className="data-stream absolute inset-y-0 left-1/2 hidden lg:block" />

      <div className="relative mx-auto max-w-5xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 max-w-3xl md:mb-20"
        >
          <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400">
            <span className="h-px w-8 bg-cyan-500/50" />
            {"// system history"}
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-mist-100 md:text-5xl">
            Runtime <span className="text-gradient">log</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mist-400 md:text-lg">
            A chronological trace of my evolution — every commit counts.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical rail */}
          <div
            aria-hidden="true"
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-violet-500/60 via-indigo-500/30 to-cyan-500/40 md:left-1/2 md:-translate-x-1/2"
          />

          {journey.map((item, i) => {
            const Icon = iconMap[item.year as keyof typeof iconMap] ?? Route;
            const left = i % 2 === 0;
            return (
              <motion.div
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={`relative mb-10 flex items-start md:mb-12 ${
                  left ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Node dot — cleanly aligned on mobile left-4 AND desktop center */}
                <div
                  aria-hidden="true"
                  className="absolute left-4 top-5 z-10 -translate-x-1/2 md:left-1/2"
                >
                  <div className="relative flex size-5 items-center justify-center">
                    <span className="absolute inline-flex size-5 animate-ping rounded-full bg-violet-400 opacity-30" />
                    <span className="relative size-3 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 ring-4 ring-ink-950" />
                  </div>
                </div>

                <div
                  className={`ml-11 w-full md:ml-0 md:w-[calc(50%-2.25rem)] ${
                    left ? "md:text-right" : ""
                  }`}
                >
                  <div className="glass-card rounded-2xl p-6 transition-colors hover:border-violet-500/35">
                    <div
                      className={`flex items-center gap-3 ${
                        left ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-violet-500/12 text-violet-400">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-bold text-cyan-400">
                          {item.year}
                        </span>
                        <h3 className="font-display text-lg font-bold text-mist-100">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-mist-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          className="mt-14 grid gap-4 md:grid-cols-1"
        >
          {experience.map((exp) => (
            <div
              key={exp.company}
              className="glass-card flex flex-col gap-4 rounded-2xl p-6 transition-colors hover:border-violet-500/35 sm:flex-row sm:items-start"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/25 bg-cyan-500/10 text-cyan-400">
                <Building2 className="size-5" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-bold text-mist-100">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-xs text-cyan-400">
                    {exp.period}
                  </span>
                </div>
                <div className="mt-0.5 font-mono text-xs text-violet-400">
                  {exp.company} {exp.location ? `· ${exp.location}` : ""}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-mist-400">
                  {exp.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-line bg-overlay px-2.5 py-0.5 font-mono text-[10px] text-mist-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
