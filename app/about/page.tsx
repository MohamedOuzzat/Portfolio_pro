import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, Eye, Rocket } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { FadeUp } from "@/components/motion/fade";
import { WordReveal, BlurReveal } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";
import { Parallax } from "@/components/motion/parallax";
import { Magnetic } from "@/components/motion/magnetic";
import { GlowCard } from "@/components/motion/glow-card";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, personJsonLd } from "@/lib/seo";
import { site } from "@/data/site";
import { journey, aboutStats, experience } from "@/data/experience";

export const metadata: Metadata = buildMetadata({
  title: "About — Mohamed Ouzzat",
  description:
    "The story, mission and vision of Mohamed Ouzzat — Full Stack & ServiceNow Developer from Marrakech, Morocco. Learn how I build premium web apps with Next.js, React, Laravel and ServiceNow.",
  path: "/about",
  keywords: [
    "About Mohamed Ouzzat",
    "Mohamed Ouzzat Full Stack Developer",
    "Mohamed Ouzzat Morocco",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personJsonLd()} />
      <PageHeader
        eyebrow="// about"
        title="Turning curiosity into"
        highlight="craft"
        description="A developer journey measured in shipped products, enterprise automation, and an unreasonable love for detail."
      />

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <Parallax offset={36} className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-500/20 to-cyan-500/20 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-line-strong shadow-soft">
                <Image
                  src="/images/profile.jpg"
                  alt="Mohamed Ouzzat portrait — Full Stack & ServiceNow Developer, Marrakech Morocco"
                  width={900}
                  height={1000}
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06060b]/75 to-transparent" />
                <div className="absolute bottom-5 left-5 rounded-lg border border-white/15 bg-[#08080f]/80 px-3 py-1.5 font-mono text-xs text-white/85 backdrop-blur-md">
                  ./mohamed-ouzzat — Marrakech, Morocco
                </div>
              </div>
            </Parallax>

            <div>
              <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400">
                <span className="h-px w-8 bg-cyan-500/50" />
                the story
              </div>
              <h2 className="font-display text-4xl font-bold tracking-tight text-mist-100 md:text-5xl">
                <WordReveal text="I build software that" className="block" />{" "}
                <span className="text-gradient">feels effortless</span>
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-mist-400">
                <BlurReveal>
                  <p>
                    I&apos;m Mohamed Ouzzat, a Full Stack Developer based in Marrakech,
                    currently training at{" "}
                    <span className="text-mist-100">YouCode × Simplon</span> and building
                    enterprise ServiceNow solutions and premium web applications.
                  </p>
                </BlurReveal>
                <BlurReveal delay={0.08}>
                  <p>
                    My work sits where{" "}
                    <span className="text-mist-100">frontend taste</span> meets{" "}
                    <span className="text-mist-100">backend rigor</span>. I obsess over the
                    last 10% — the easing curve, the API contract, the edge case — because
                    that&apos;s what separates software that works from software people love.
                  </p>
                </BlurReveal>
                <BlurReveal delay={0.16}>
                  <p>
                    Alongside web development, I&apos;m a CSA-certified ServiceNow developer
                    automating enterprise ITSM workflows, and I&apos;m actively exploring
                    the <span className="text-mist-100">AI/ML pathway</span> at YouCode.
                  </p>
                </BlurReveal>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <GlowCard className="p-6">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400">
                    <Compass className="size-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-mist-100">
                    Mission
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-400">
                    Build software that is fast, accessible and beautiful — and ship it into
                    production, not just into portfolios.
                  </p>
                </GlowCard>
                <GlowCard color="rgba(34,211,238,0.2)" className="p-6">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
                    <Eye className="size-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-mist-100">
                    Vision
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-400">
                    Become a senior full-stack engineer who blends product design with
                    enterprise platform thinking.
                  </p>
                </GlowCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counters */}
      <section className="border-y border-line bg-ink-900/25 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-5 md:grid-cols-4 md:px-8">
          {aboutStats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.08} className="text-center">
              <div className="font-display text-4xl font-bold text-gradient md:text-5xl">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-mist-500">
                {s.label}
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Journey timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="mb-14 text-center">
            <div className="mb-4 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400">
              <span className="h-px w-8 bg-cyan-500/50" />
              the journey
              <span className="h-px w-8 bg-cyan-500/50" />
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-mist-100 md:text-5xl">
              Developer <span className="text-gradient">Journey</span>
            </h2>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-[19px] top-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500/40 to-transparent md:left-1/2 md:-translate-x-1/2"
            />
            {journey.map((step, i) => (
              <FadeUp key={`${step.year}-${step.title}`} delay={i * 0.05}>
                <div
                  className={`relative mb-10 flex gap-6 md:items-center ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-violet-500/45 bg-ink-950 font-mono text-[10px] font-bold text-cyan-400 shadow-glow md:absolute md:left-1/2 md:-translate-x-1/2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div
                    className={`w-full md:w-[calc(50%-3rem)] ${
                      i % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"
                    }`}
                  >
                    <div className="glass-card rounded-2xl p-6">
                      <div className="font-mono text-xs text-cyan-400">{step.year}</div>
                      <h3 className="mt-1.5 font-display text-lg font-bold text-mist-100">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-mist-400">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Experience cards */}
      <section className="border-t border-line bg-ink-900/25 py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-14 text-center">
            <div className="mb-4 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400">
              <span className="h-px w-8 bg-cyan-500/50" />
              where I&apos;ve worked
              <span className="h-px w-8 bg-cyan-500/50" />
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-mist-100 md:text-5xl">
              Experience <span className="text-gradient">Cards</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-1">
            {experience.map((exp, i) => (
              <FadeUp key={exp.company} delay={i * 0.1}>
                <GlowCard className="p-7">
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 font-display text-sm font-bold text-violet-400">
                      {exp.icon === "building" ? "UX" : "YC"}
                    </div>
                    <div>
                      <div className="font-display text-lg font-bold text-mist-100">
                        {exp.company}
                      </div>
                      <div className="font-mono text-xs text-cyan-400">
                        {exp.period} · {exp.role}
                      </div>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-mist-400">
                    {exp.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-line bg-overlay px-2.5 py-0.5 font-mono text-[10px] text-mist-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <BlurReveal>
            <Rocket className="mx-auto size-8 text-cyan-400" />
            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-mist-100">
              Want to see it in action?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-mist-400">
              Explore the projects I&apos;ve shipped, or get in touch to start something new
              together.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Magnetic strength={0.22}>
                <Link
                  href="/projects"
                  className="btn-accent inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-500/25"
                >
                  View my work <ArrowUpRight className="size-4" />
                </Link>
              </Magnetic>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-overlay px-7 py-3.5 text-sm font-semibold text-mist-100 transition-all hover:-translate-y-0.5 hover:border-violet-500/50 hover:text-violet-400"
              >
                Say hello
              </Link>
            </div>
            <p className="mt-10 font-mono text-xs text-mist-500">
              {site.email} · {site.location}
            </p>
          </BlurReveal>
        </div>
      </section>
    </>
  );
}
