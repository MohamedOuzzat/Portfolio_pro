"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
  ShieldCheck,
  Sparkles,
  Cpu,
  RotateCcw,
} from "lucide-react";
import { Aurora } from "@/components/motion/aurora";
import { MouseLight } from "@/components/motion/mouse-light";
import { Magnetic } from "@/components/motion/magnetic";
import { Counter } from "@/components/motion/counter";
import { Typing } from "@/components/motion/typing";
import { TiltCard } from "@/components/motion/tilt-card";
import { LetterReveal } from "@/components/motion/reveal";
import { site, heroStats, bootLines, typingWords } from "@/data/site";

const Particles = dynamic(
  () => import("@/components/motion/particles").then((m) => m.Particles),
  { ssr: false }
);

function BootTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [started, setStarted] = useState(false);

  const startBoot = useCallback(() => {
    setStarted(true);
  }, []);

  const replay = () => {
    setVisibleLines(0);
    setCurrentChar(0);
    setStarted(true);
  };

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = setTimeout(
      () => {
        if (prefersReduced) {
          setStarted(true);
          setVisibleLines(bootLines.length);
        } else {
          startBoot();
        }
      },
      prefersReduced ? 0 : 550
    );
    return () => clearTimeout(timer);
  }, [startBoot]);

  useEffect(() => {
    if (!started || visibleLines >= bootLines.length) return;

    const line = bootLines[visibleLines];
    const isCommand = line.prefix === "$";

    if (currentChar < line.text.length) {
      const speed = isCommand ? 38 : 7;
      const timer = setTimeout(() => setCurrentChar((c) => c + 1), speed);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setVisibleLines((v) => v + 1);
      setCurrentChar(0);
    }, line.delay ? Math.min(line.delay, 500) : 240);
    return () => clearTimeout(timer);
  }, [started, visibleLines, currentChar]);

  return (
    <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-violet-500/25 shadow-soft">
      {/* Terminal window chrome (dark surface in both themes for crisp contrast) */}
      <div className="surface-terminal-bar flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-[#FF5F56]/85" />
            <span className="size-2.5 rounded-full bg-[#FFBD2E]/85" />
            <span className="size-2.5 rounded-full bg-[#27C93F]/85" />
          </div>
          <span className="ml-2 font-mono text-[11px] text-white/55">
            mohamed@portfolio ~ %
          </span>
        </div>
        <button
          type="button"
          onClick={replay}
          aria-label="Replay terminal sequence"
          className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 font-mono text-[10px] text-white/45 transition-colors hover:bg-white/5 hover:text-cyan-300"
        >
          <RotateCcw className="size-3" />
          <span className="hidden sm:inline">replay</span>
        </button>
      </div>

      {/* Terminal body */}
      <div className="surface-terminal min-h-[192px] p-4 font-mono text-xs sm:p-5 sm:text-sm">
        {bootLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex gap-2 py-0.5 leading-relaxed">
            {line.prefix && (
              <span className="shrink-0 text-cyan-400">{line.prefix}</span>
            )}
            <span
              className={
                line.highlight
                  ? line.dot
                    ? "text-emerald-400"
                    : "text-violet-300"
                  : "text-white/85"
              }
            >
              {line.text}
            </span>
          </div>
        ))}
        {visibleLines < bootLines.length && started && (
          <div className="flex gap-2 py-0.5 leading-relaxed">
            {bootLines[visibleLines].prefix && (
              <span className="shrink-0 text-cyan-400">
                {bootLines[visibleLines].prefix}
              </span>
            )}
            <span className="text-white/90">
              {bootLines[visibleLines].text.slice(0, currentChar)}
              <span className="terminal-cursor" />
            </span>
          </div>
        )}
        {visibleLines >= bootLines.length && (
          <div className="mt-2 flex gap-2 text-white/40">
            <span className="text-cyan-400">$</span>
            <span className="animate-pulse">█</span>
          </div>
        )}
      </div>
    </div>
  );
}

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
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, delay }}
      className={`absolute z-20 animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="glass-card flex items-center gap-2.5 rounded-xl px-3.5 py-2.5">
        <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-violet-400">
          {icon}
        </span>
        <span className="font-mono text-[11px] font-semibold text-mist-100">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

export function BootSequence() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Layered architectural backgrounds */}
      <div aria-hidden="true" className="neural-grid absolute inset-0 opacity-65" />
      <Aurora />
      <Particles count={46} className="pointer-events-none absolute inset-0 h-full w-full" />
      <MouseLight className="pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-24 pt-10 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
        {/* Left column — headline, rotating role, terminal & CTAs */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mb-5 inline-flex flex-wrap items-center gap-2.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[11px] font-medium text-mist-200">
              System online — available
            </span>
            <span className="hidden text-mist-500 sm:inline">·</span>
            <span className="hidden font-mono text-[11px] text-cyan-400 sm:inline">
              {site.location}
            </span>
          </motion.div>

          <h1 className="font-display text-[clamp(2.75rem,6.6vw,5.25rem)] font-bold leading-[1.01] tracking-[-0.03em]">
            <LetterReveal text="Mohamed" as="span" className="text-gradient" />{" "}
            <LetterReveal
              text="Ouzzat"
              as="span"
              delay={0.25}
              className="text-mist-100"
            />
          </h1>

          {/* Typing / rotating specialization + static semantic subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm sm:text-base"
          >
            <span className="text-cyan-400">
              <Typing words={typingWords} />
            </span>
            <span className="hidden text-mist-600 md:inline">{"//"}</span>
            <span className="hidden text-xs text-mist-400 md:inline">
              {site.role}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6"
          >
            <BootTerminal />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Magnetic strength={0.25}>
              <a
                href={site.cv}
                download
                data-cursor-label="CV"
                className="btn-accent group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-500/25"
              >
                Download CV
                <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-overlay px-6 py-3.5 text-sm font-semibold text-mist-100 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-violet-500/50 hover:text-violet-400"
              >
                <Mail className="size-4" />
                Contact
              </Link>
            </Magnetic>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-1.5 px-2 py-2 text-sm font-semibold text-mist-400 transition-colors hover:text-cyan-400"
            >
              View Projects
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          {/* Animated stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="mt-10 grid max-w-xl grid-cols-2 gap-6 border-t border-line pt-7 sm:grid-cols-4"
          >
            {heroStats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-bold text-gradient">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-mist-500">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column — interactive 3D tilt portrait */}
        <div className="relative mx-auto flex w-full max-w-[330px] items-center justify-center sm:max-w-[360px] lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[390px]"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-full bg-gradient-to-br from-violet-500/25 via-transparent to-cyan-500/25 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute -inset-2 animate-spin-slow rounded-[2.4rem] border border-dashed border-violet-500/25"
            />

            <TiltCard className="relative overflow-hidden rounded-[2rem] border border-line-strong bg-ink-900 shadow-soft">
              <Image
                src="/images/profile.jpg"
                alt="Mohamed Ouzzat — Full Stack Developer, AI Engineer and ServiceNow Specialist from Marrakech, Morocco"
                width={480}
                height={520}
                sizes="(max-width: 768px) 340px, 390px"
                priority
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06060b]/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/15 bg-[#08080f]/80 px-4 py-3 text-white backdrop-blur-md">
                <div>
                  <div className="font-display text-sm font-semibold text-white">
                    {site.name}
                  </div>
                  <div className="font-mono text-[11px] text-white/65">
                    {site.location}
                  </div>
                </div>
                <Sparkles className="size-4 text-cyan-400" />
              </div>
            </TiltCard>
          </motion.div>

          <FloatingBadge
            className="-left-6 top-10 hidden sm:block"
            icon={<ShieldCheck className="size-4" />}
            label="CSA Certified"
            delay={0.95}
          />
          <FloatingBadge
            className="-right-4 top-1/2 hidden sm:block"
            icon={<Cpu className="size-4" />}
            label="AI / LLM"
            delay={1.15}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        onClick={() =>
          document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" })
        }
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 text-mist-500 transition-colors hover:text-mist-100"
        aria-label="Scroll down"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
          Scroll
        </span>
        <ArrowDown className="size-4" />
      </motion.button>
    </section>
  );
}
