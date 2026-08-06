"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Lightbulb,
  Rocket,
  Sparkles,
  Wrench,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { FadeUp } from "@/components/motion/fade";
import { WordReveal, BlurReveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { ProjectVisual } from "./project-visual";
import { getAdjacentProjects, type Project } from "@/data/projects";

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span className="flex size-10 items-center justify-center rounded-lg border border-primary-500/30 bg-primary-500/10 text-primary-400">
        {icon}
      </span>
      <h2 className="font-display text-2xl font-bold tracking-tight text-mist-100 md:text-3xl">
        {title}
      </h2>
    </div>
  );
}

export function ProjectDetailsClient({ project }: { project: Project }) {
  const { prev, next } = getAdjacentProjects(project.slug);
  const { prev: prevReal, next: nextReal } = { prev, next };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/8 pt-32 pb-16">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          aria-hidden
          className="absolute -top-32 right-0 h-96 w-96 rounded-full blur-[120px]"
          style={{ background: `${project.color}22` }}
        />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <Link
            href="/projects"
            className="group mb-8 inline-flex items-center gap-2 font-mono text-xs text-mist-400 transition-colors hover:text-primary-400"
          >
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
            Back to projects
          </Link>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <BlurReveal>
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="rounded-md border px-2.5 py-1 font-mono text-[11px] font-bold tracking-wider"
                    style={{ color: project.color, borderColor: `${project.color}44`, background: `${project.color}1a` }}
                  >
                    {project.tag.toUpperCase()}
                  </span>
                  <span className="font-mono text-xs text-mist-500">{project.year}</span>
                </div>
                <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-mist-100 md:text-6xl">
                  <WordReveal text={project.name} />
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-mist-400 md:text-lg">
                  {project.longDescription}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <Magnetic>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-primary-500 to-violet-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary-500/25 transition-all hover:-translate-y-0.5 hover:shadow-glow"
                      >
                        Live Demo <ArrowUpRight className="size-4" />
                      </a>
                    </Magnetic>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-mist-100 transition-all hover:-translate-y-0.5 hover:border-primary-500/50 hover:text-primary-400"
                  >
                    <GithubIcon className="size-4" /> Source Code
                  </a>
                </div>
              </BlurReveal>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateY: -8 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-2xl border border-white/10 shadow-soft"
            >
              <ProjectVisual project={project} className="aspect-[16/10]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-5 md:grid-cols-4 md:px-8">
          {project.highlights.map((h, i) => (
            <FadeUp key={h.label} delay={i * 0.07}>
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="font-display text-3xl font-bold text-gradient">{h.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.12em] text-mist-500">
                  {h.label}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionTitle icon={<Sparkles className="size-5" />} title="Key Features" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((f, i) => (
              <FadeUp key={f.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-xl border border-white/8 bg-ink-900/60 p-6 transition-colors duration-300 hover:border-primary-500/40">
                  <CheckCircle2
                    className="size-5 text-primary-400 transition-transform group-hover:scale-110"
                  />
                  <h3 className="mt-4 font-display text-base font-bold text-mist-100">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-400">{f.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture + Tech */}
      <section className="border-y border-white/8 bg-ink-900/40 py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionTitle icon={<Layers className="size-5" />} title="Architecture" />
          <div className="grid gap-5 lg:grid-cols-3">
            {project.architecture.map((layer, i) => (
              <FadeUp key={layer.title} delay={i * 0.1}>
                <div className="glass-card h-full rounded-xl p-6">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-primary-400">
                    <span className="size-2 rounded-full bg-primary-500" />
                    {layer.title}
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {layer.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-mist-400">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-violet-400/70" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>

          <div className="mt-16">
            <SectionTitle icon={<Wrench className="size-5" />} title="Technologies" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.tech.map((t, i) => (
                <FadeUp key={t.name} delay={(i % 3) * 0.07}>
                  <div className="flex items-start gap-3 rounded-xl border border-white/8 bg-ink-900/60 p-5">
                    <span className="mt-0.5 font-display text-sm font-bold text-gradient">
                      {t.name}
                    </span>
                    <span className="flex-1 text-sm leading-relaxed text-mist-400">{t.use}</span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <SectionTitle icon={<Lightbulb className="size-5" />} title="Challenges" />
              <div className="space-y-4">
                {project.challenges.map((c, i) => (
                  <FadeUp key={i} delay={i * 0.08}>
                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                      <div className="font-mono text-xs text-red-400">CHALLENGE {i + 1}</div>
                      <p className="mt-2 text-sm leading-relaxed text-mist-300">{c}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
            <div>
              <SectionTitle icon={<Rocket className="size-5" />} title="Solutions" />
              <div className="space-y-4">
                {project.solutions.map((s, i) => (
                  <FadeUp key={i} delay={i * 0.08}>
                    <div className="rounded-xl border border-aqua-400/20 bg-aqua-400/5 p-5">
                      <div className="font-mono text-xs text-aqua-400">SOLUTION {i + 1}</div>
                      <p className="mt-2 text-sm leading-relaxed text-mist-300">{s}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process + Results */}
      <section className="border-y border-white/8 bg-ink-900/40 py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionTitle icon={<Sparkles className="size-5" />} title="Development Process" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {project.process.map((step, i) => (
              <FadeUp key={step.title} delay={i * 0.1}>
                <div className="relative rounded-xl border border-white/8 bg-ink-900/60 p-6">
                  <div className="font-display text-3xl font-bold text-gradient opacity-60">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-2 font-display text-base font-bold text-mist-100">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-400">{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <div className="mt-16">
            <SectionTitle icon={<Rocket className="size-5" />} title="Results" />
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
              {project.results.map((r, i) => (
                <FadeUp key={r.label} delay={i * 0.07}>
                  <div className="glass-card rounded-xl p-6 text-center">
                    <div className="font-display text-3xl font-bold text-gradient">{r.metric}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.12em] text-mist-500">
                      {r.label}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-2 md:px-8">
          {prevReal && (
            <Link
              href={`/projects/${prevReal.slug}`}
              className="group rounded-xl border border-white/10 p-6 transition-all hover:-translate-y-1 hover:border-primary-500/40"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-mist-500">
                <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
                Previous project
              </div>
              <div className="mt-2 font-display text-xl font-bold text-mist-100 transition-colors group-hover:text-primary-400">
                {prevReal.name}
              </div>
            </Link>
          )}
          {nextReal && (
            <Link
              href={`/projects/${nextReal.slug}`}
              className="group rounded-xl border border-white/10 p-6 text-right transition-all hover:-translate-y-1 hover:border-primary-500/40 md:col-start-2"
            >
              <div className="flex items-center justify-end gap-2 font-mono text-xs text-mist-500">
                Next project
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </div>
              <div className="mt-2 font-display text-xl font-bold text-mist-100 transition-colors group-hover:text-primary-400">
                {nextReal.name}
              </div>
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
