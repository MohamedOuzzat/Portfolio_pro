"use client";

import Link from "next/link";
import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Target,
  Lightbulb,
  Gauge,
} from "lucide-react";
import { projects } from "@/data/projects";
import { TiltCard } from "@/components/motion/tilt-card";

export function CaseStudies() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState({ left: false, right: true });

  const checkScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScroll({
      left: el.scrollLeft > 10,
      right: el.scrollLeft < el.scrollWidth - el.clientWidth - 10,
    });
  }, []);

  useEffect(() => {
    checkScroll();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? 390) + 24;
    el.scrollBy({ left: amount * dir, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden border-y border-line bg-ink-900/25 py-24 md:py-28">
      <div aria-hidden="true" className="neural-grid absolute inset-0 opacity-35" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-2xl"
          >
            <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400">
              <span className="h-px w-8 bg-cyan-500/50" />
              {"// case studies"}
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-mist-100 md:text-5xl">
              Deployed <span className="text-gradient">systems</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-mist-400 md:text-lg">
              Real problems, engineered solutions, measured results. Scroll the pipeline.
            </p>
          </motion.div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={!canScroll.left}
              aria-label="Scroll projects left"
              className="inline-flex size-11 items-center justify-center rounded-xl border border-line bg-overlay text-mist-100 transition-all hover:border-violet-500/50 hover:text-violet-400 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={!canScroll.right}
              aria-label="Scroll projects right"
              className="inline-flex size-11 items-center justify-center rounded-xl border border-line bg-overlay text-mist-100 transition-all hover:border-violet-500/50 hover:text-violet-400 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal snap track */}
      <div
        ref={trackRef}
        className="no-scrollbar relative mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 pt-2 md:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
      >
        {featured.map((p, i) => {
          const inkColor = p.color || "#8b5cf6";
          return (
            <motion.div
              key={p.slug}
              data-card
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="w-[330px] shrink-0 snap-start sm:w-[390px] md:w-[430px]"
            >
              <TiltCard
                data-cursor-label="VIEW"
                className="case-study-card group flex h-full flex-col"
              >
                {/* Gradient top strip */}
                <div
                  aria-hidden="true"
                  className="h-1 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${inkColor}, #22d3ee)`,
                  }}
                />
                <div className="flex flex-1 flex-col p-7">
                  {/* Tag + year */}
                  <div className="flex items-center justify-between">
                    <span
                      className="rounded-md px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider"
                      style={{
                        color: p.color,
                        background: `${p.color}16`,
                        border: `1px solid ${p.color}38`,
                      }}
                    >
                      {p.tag}
                    </span>
                    <span className="font-mono text-[11px] text-mist-500">
                      {p.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-display text-2xl font-bold text-mist-100 transition-colors group-hover:text-violet-400">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-400">
                    {p.description}
                  </p>

                  {/* Problem / Solution / Result */}
                  <div className="mt-6 space-y-4 border-t border-line pt-5">
                    <div className="flex gap-3">
                      <Target
                        className="mt-0.5 size-4 shrink-0"
                        style={{ color: inkColor }}
                      />
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-wider text-mist-500">
                          Problem
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-mist-200">
                          {p.challenges[0]}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Lightbulb
                        className="mt-0.5 size-4 shrink-0"
                        style={{ color: inkColor }}
                      />
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-wider text-mist-500">
                          Solution
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-mist-200">
                          {p.solutions[0]}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Gauge
                        className="mt-0.5 size-4 shrink-0"
                        style={{ color: inkColor }}
                      />
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-wider text-mist-500">
                          Result
                        </div>
                        <div className="mt-1.5 flex flex-wrap gap-2">
                          {p.results.slice(0, 3).map((r) => (
                            <span
                              key={r.label}
                              className="rounded-md border border-line bg-overlay px-2 py-0.5 font-mono text-[10px] text-mist-200"
                            >
                              <span style={{ color: inkColor }}>{r.metric}</span>{" "}
                              {r.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stack + CTA */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-line bg-overlay px-2 py-0.5 font-mono text-[10px] text-mist-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <Link
                      href={`/projects/${p.slug}`}
                      className="group/link inline-flex items-center gap-1.5 text-sm font-semibold"
                      style={{ color: p.color }}
                    >
                      <Code2 className="size-4" />
                      Read the case study
                      <ArrowUpRight className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}

        {/* Trailing CTA card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex w-[260px] shrink-0 snap-start items-center justify-center"
        >
          <Link
            href="/projects"
            className="glass-card flex h-full min-h-[280px] w-full items-center justify-center rounded-2xl border-dashed border-violet-500/35 text-center transition-all hover:border-cyan-400/60 hover:bg-violet-500/5"
          >
            <div>
              <div className="font-display text-3xl font-bold text-gradient">
                +4 more
              </div>
              <p className="mt-2 font-mono text-xs text-mist-400">
                Browse the full archive
              </p>
              <span className="mt-4 inline-block font-mono text-xs text-cyan-400">
                all projects →
              </span>
            </div>
          </Link>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-8 max-w-7xl px-5 md:px-8">
        <div className="flex items-center gap-2 font-mono text-[11px] text-mist-500">
          <span className="inline-block size-1.5 animate-pulse-dot rounded-full bg-cyan-400" />
          Swipe or use the arrows to explore the pipeline
        </div>
      </div>
    </section>
  );
}
