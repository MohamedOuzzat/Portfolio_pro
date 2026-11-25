"use client";

import Link from "next/link";
import { Quote, Star, ArrowUpRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/motion/section-heading";

export function TestimonialStrip() {
  const row = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden border-t border-line bg-ink-900/20 py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="// testimonials"
          title="What people"
          highlight="say"
          description="Colleagues, mentors and clients on what it's like to work together."
        />
      </div>

      <div className="marquee-track relative overflow-hidden py-2">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ink-950 to-transparent md:w-28"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ink-950 to-transparent md:w-28"
        />

        <div className="marquee-content flex w-max animate-marquee gap-5 px-3">
          {row.map((t, i) => (
            <div
              key={`${t.company}-${i}`}
              className="glass-card w-[310px] shrink-0 rounded-2xl p-6 sm:w-[370px]"
            >
              <div className="flex items-center justify-between">
                <Quote className="size-5 text-violet-400/70" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={`size-3.5 ${
                        s < t.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-mist-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-mist-300">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                <div
                  className="flex size-10 items-center justify-center rounded-full font-display text-sm font-bold text-white"
                  style={{ background: t.gradient }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-mist-100">
                    {t.name}
                  </div>
                  <div className="font-mono text-[11px] text-mist-500">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/testimonials"
          className="group inline-flex items-center gap-1.5 font-mono text-xs text-mist-400 transition-colors hover:text-cyan-400"
        >
          Read full testimonials
          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  );
}
