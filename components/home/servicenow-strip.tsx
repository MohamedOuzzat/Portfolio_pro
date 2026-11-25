"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Workflow, ShieldCheck } from "lucide-react";
import { snCapabilities } from "@/data/servicenow";
import { WordReveal } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { Magnetic } from "@/components/motion/magnetic";

export function ServiceNowStrip() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/6 blur-[130px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <TiltCard className="relative overflow-hidden rounded-2xl border border-cyan-400/25 shadow-soft">
              <Image
                src="/images/og-image-twitter.jpg"
                alt="Mohamed Ouzzat — CSA-certified ServiceNow developer"
                width={1200}
                height={630}
                sizes="(max-width: 1024px) 100vw, 560px"
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06060b]/85 via-[#06060b]/15 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl border border-white/15 bg-[#08080f]/80 px-3.5 py-2 backdrop-blur-md">
                <ShieldCheck className="size-4 text-cyan-400" />
                <span className="font-mono text-xs font-medium text-white">
                  CSA Certified
                </span>
              </div>
            </TiltCard>
          </motion.div>

          <div>
            <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400">
              <span className="h-px w-8 bg-cyan-400/50" />
              {"// servicenow"}
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              <WordReveal text="Enterprise" className="text-mist-100" />{" "}
              <span className="text-gradient">ServiceNow</span>{" "}
              <WordReveal text="automation" className="text-mist-100" />
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-mist-400">
              CSA-certified developer automating incident lifecycles, building Flow Designer
              workflows, and shipping custom portal widgets that teams actually love to use.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {snCapabilities.slice(0, 6).map((c) => (
                <span
                  key={c.name}
                  className="rounded-lg border border-line bg-overlay px-3 py-1 font-mono text-[11px] text-mist-300"
                >
                  {c.name}
                </span>
              ))}
              <span className="inline-flex items-center rounded-lg border border-cyan-400/35 bg-cyan-400/10 px-3 py-1 font-mono text-[11px] text-cyan-400">
                <Workflow className="mr-1.5 size-3" />
                +6 more
              </span>
            </div>
            <div className="mt-9">
              <Magnetic strength={0.22}>
                <Link
                  href="/servicenow"
                  className="group inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-400 transition-all hover:-translate-y-0.5 hover:bg-cyan-400/20 hover:shadow-glow-cyan"
                >
                  Explore the dashboard
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
