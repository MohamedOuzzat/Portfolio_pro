"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Workflow, ShieldCheck } from "lucide-react";
import { snCapabilities } from "@/data/servicenow";
import { WordReveal } from "@/components/motion/reveal";

export function ServiceNowStrip() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aqua-400/5 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-2xl border border-aqua-400/20 shadow-soft"
            >
              <Image
                src="/images/ux4mation.jpg"
                alt="UX4MATION — enterprise ServiceNow solutions"
                width={686}
                height={386}
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg border border-white/10 bg-ink-950/60 px-3 py-2 backdrop-blur">
                <ShieldCheck className="size-4 text-aqua-400" />
                <span className="font-mono text-xs text-mist-100">CSA Certified · UX4MATION</span>
              </div>
            </motion.div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2 font-mono text-xs tracking-widest text-aqua-400 uppercase">
              <span className="h-px w-8 bg-aqua-400/50" />
              {"// servicenow"}
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              <WordReveal text="Enterprise" className="text-mist-100" />{" "}
              <span className="text-gradient-soft">ServiceNow</span>{" "}
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
                  className="rounded-md border border-white/8 bg-ink-900/60 px-2.5 py-1 font-mono text-[11px] text-mist-400"
                >
                  {c.name}
                </span>
              ))}
              <span className="inline-flex items-center rounded-md border border-aqua-400/30 bg-aqua-400/10 px-2.5 py-1 font-mono text-[11px] text-aqua-400">
                <Workflow className="mr-1 size-3" />
                +6 more
              </span>
            </div>
            <Link
              href="/servicenow"
              className="group mt-9 inline-flex items-center gap-2 rounded-xl border border-aqua-400/40 bg-aqua-400/10 px-6 py-3 text-sm font-semibold text-aqua-400 transition-all hover:-translate-y-0.5 hover:bg-aqua-400/20"
            >
              Explore the dashboard
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
