"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { flowSteps } from "@/data/servicenow";

export function FlowDiagram() {
  return (
    <div>
      <div className="mb-12 text-center">
        <div className="mb-4 flex items-center justify-center gap-2 font-mono text-xs tracking-widest text-aqua-400 uppercase">
          <span className="h-px w-8 bg-aqua-400/50" />
          architecture
          <span className="h-px w-8 bg-aqua-400/50" />
        </div>
        <h2 className="font-display text-4xl font-bold tracking-tight text-mist-100 md:text-5xl">
          The <span className="text-gradient-soft">Flow</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-mist-400">
          A production incident lifecycle — from trigger to resolution — automated with Flow
          Designer and Business Rules.
        </p>
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-[26px] hidden h-px bg-gradient-to-r from-aqua-400/0 via-aqua-400/50 to-aqua-400/0 md:block"
        />
        <div className="grid gap-6 md:grid-cols-5 md:gap-4">
          {flowSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex md:flex-col md:items-center md:text-center"
            >
              <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-aqua-400/40 bg-ink-950 text-aqua-400 shadow-glow">
                <Zap className="size-5" />
                <span className="absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-aqua-400 font-mono text-[9px] font-bold text-ink-950">
                  {i + 1}
                </span>
              </div>
              <div className="ml-4 md:ml-0 md:mt-4">
                <div className="text-sm font-bold text-mist-100">{step.step}</div>
                <div className="mt-1 max-w-[180px] text-xs leading-relaxed text-mist-400">
                  {step.desc}
                </div>
              </div>
              {i < flowSteps.length - 1 && (
                <ArrowRight className="absolute -right-2 top-3 hidden size-4 text-aqua-400/60 md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
