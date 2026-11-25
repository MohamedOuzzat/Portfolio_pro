import Link from "next/link";
import { ArrowUpRight, Download, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { BlurReveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-28">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, rgba(59,130,246,0.12), transparent 55%), radial-gradient(circle at 70% 50%, rgba(167,139,250,0.12), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <BlurReveal>
          <Sparkles className="mx-auto size-8 text-primary-400" />
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-mist-100 md:text-5xl">
            Let&apos;s build something{" "}
            <span className="text-gradient">unforgettable</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist-400">
            Open to internships, collaborations and freelance work. Tell me about your project
            and I&apos;ll bring the craft.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-primary-500 to-violet-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-500/25 transition-all hover:-translate-y-0.5 hover:shadow-glow"
              >
                Start a conversation
                <ArrowUpRight className="size-4" />
              </Link>
            </Magnetic>
            <a
              href={site.cv}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-overlay px-7 py-3.5 text-sm font-semibold text-mist-100 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary-500/50 hover:text-primary-400"
            >
              <Download className="size-4" />
              Download CV
            </a>
          </div>
        </BlurReveal>
      </div>
    </section>
  );
}
