"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/motion/section-heading";

export function TestimonialStrip() {
  const row = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden border-t border-white/8 bg-ink-900/40 py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="// testimonials"
          title="What people"
          highlight="say"
          description="Colleagues, mentors and clients on what it's like to work together."
        />
      </div>
      <motion.div
        className="flex w-max gap-5"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 45, ease: "linear", repeat: Infinity }}
      >
        {row.map((t, i) => (
          <div
            key={i}
            className="glass w-[320px] shrink-0 rounded-xl p-6 md:w-[380px]"
          >
            <div className="flex items-center justify-between">
              <Quote className="size-5 text-primary-500/60" />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className={`size-3.5 ${
                      s < t.rating ? "fill-amber-400 text-amber-400" : "text-mist-600"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-mist-400">{t.quote}</p>
            <div className="mt-5 flex items-center gap-3 border-t border-white/8 pt-4">
              <div
                className="flex size-10 items-center justify-center rounded-full font-display text-sm font-bold text-white"
                style={{ background: t.gradient }}
              >
                {t.initials}
              </div>
              <div>
                <div className="text-sm font-semibold text-mist-100">{t.name}</div>
                <div className="text-xs text-mist-500">
                  {t.role} · {t.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
