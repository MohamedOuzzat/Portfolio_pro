"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Mail, Sparkles, ShieldCheck, Code2 } from "lucide-react";
import { Aurora } from "@/components/motion/aurora";
import { MouseLight } from "@/components/motion/mouse-light";
import { Magnetic } from "@/components/motion/magnetic";
import { Counter } from "@/components/motion/counter";
import { Typing } from "@/components/motion/typing";
import { LetterReveal } from "@/components/motion/reveal";
import { site, heroStats, typingWords } from "@/data/site";

const Particles = dynamic(
  () => import("@/components/motion/particles").then((m) => m.Particles),
  { ssr: false }
);

function FloatingBadge({
  className,
  icon,
  label,
  delay = 0,
}: {
  className: string;
  icon: React.ReactNode;
  label: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      className={`absolute z-20 animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="glass flex items-center gap-2 rounded-xl px-3.5 py-2.5 shadow-soft">
        <span className="flex size-8 items-center justify-center rounded-lg bg-primary-500/15 text-primary-400">
          {icon}
        </span>
        <span className="font-mono text-[11px] font-medium text-mist-100">{label}</span>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Layered backgrounds */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <Aurora />
      <Particles count={55} className="absolute inset-0 h-full w-full" />
      <MouseLight className="pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pb-20 pt-16 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/8 px-4 py-1.5"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aqua-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-aqua-400" />
            </span>
            <span className="text-xs font-medium text-mist-400">
              Available for opportunities
            </span>
          </motion.div>

          <h1 className="mt-6 font-display text-[clamp(3rem,8vw,5.5rem)] font-bold leading-[1.02] tracking-tight">
            <LetterReveal text="Mohamed" as="span" className="text-gradient" />
            <br />
            <LetterReveal text="Ouzzat" as="span" delay={0.4} className="text-mist-100" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-5 font-mono text-lg text-primary-400"
          >
            <Typing words={typingWords} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-mist-400 md:text-lg"
          >
            {site.tagline} I&apos;m a <span className="text-mist-100">React Developer</span>,{" "}
            <span className="text-mist-100">Laravel Developer</span>, and{" "}
            <span className="text-mist-100">Next.js Developer</span> based in Marrakech,
            Morocco — <span className="text-mist-100">10+ shipped projects</span>, one obsession
            with craft.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href={site.cv}
                download
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-primary-500 to-violet-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-500/25 transition-all hover:-translate-y-0.5 hover:shadow-glow"
              >
                Download CV
                <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </Magnetic>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-mist-100 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary-500/50 hover:text-primary-400"
            >
              <Mail className="size-4" />
              Contact
            </Link>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-mist-400 transition-colors hover:text-primary-400"
            >
              View Projects
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.15 }}
            className="mt-12 flex flex-wrap gap-10"
          >
            {heroStats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-bold text-gradient">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-mist-500">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column — floating profile */}
        <div className="relative mx-auto flex w-full max-w-[320px] items-center justify-center lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative animate-float"
          >
            {/* Glow ring */}
            <div
              aria-hidden
              className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary-500/30 via-transparent to-violet-500/30 blur-2xl"
            />
            <div
              aria-hidden
              className="absolute -inset-1 animate-spin-slow rounded-full border border-dashed border-primary-500/30"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-soft">
              <Image
                src="/images/profile.jpg"
                alt="Mohamed Ouzzat — Full Stack & ServiceNow Developer from Marrakech, Morocco"
                width={480}
                height={520}
                priority
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 backdrop-blur">
                <div>
                  <div className="text-sm font-semibold text-mist-100">{site.name}</div>
                  <div className="text-[11px] text-mist-400">{site.role}</div>
                </div>
                <Sparkles className="size-4 text-primary-400" />
              </div>
            </div>
          </motion.div>

          <FloatingBadge
            className="-left-8 top-10 hidden sm:block"
            icon={<ShieldCheck className="size-4" />}
            label="CSA Certified"
            delay={1.2}
          />
          <FloatingBadge
            className="-right-6 top-1/2 hidden sm:block"
            icon={<Code2 className="size-4" />}
            label="Full Stack"
            delay={1.4}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() =>
          document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" })
        }
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-mist-500 transition-colors hover:text-mist-100"
        aria-label="Scroll down"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown className="size-4" />
      </motion.button>
    </section>
  );
}
