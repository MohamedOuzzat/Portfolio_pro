"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { testimonials } from "@/data/testimonials";

const AUTOPLAY_MS = 6500;

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => go(1), AUTOPLAY_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [go, paused]);

  const t = testimonials[index];

  return (
    <>
      <PageHeader
        eyebrow="// testimonials"
        title="Kind words from"
        highlight="great people"
        description="An auto-playing carousel of feedback from clients, mentors and teammates. Pause to read, navigate with the arrows or dots."
      />

      <section className="relative overflow-hidden py-20">
        {/* Ambient glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.14), transparent 65%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-[15%] top-[15%] size-64 animate-float-slow rounded-full bg-violet-500/10 blur-[100px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[12%] bottom-[12%] size-64 animate-float rounded-full bg-aqua-400/10 blur-[100px]"
        />

        <div className="relative mx-auto max-w-4xl px-5 md:px-8">
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative min-h-[420px] md:min-h-[380px]">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={index}
                  initial={{ opacity: 0, y: 28, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-card relative overflow-hidden rounded-2xl p-8 md:p-12"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, #3B82F6, transparent)" }}
                  />
                  <Quote className="absolute right-8 top-8 size-12 text-primary-500/15" />
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className={`size-4 ${
                          s < t.rating ? "fill-amber-400 text-amber-400" : "text-mist-600"
                        }`}
                      />
                    ))}
                  </div>
                  <blockquote className="mt-6 font-display text-xl leading-relaxed text-mist-100 md:text-2xl">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4 border-t border-white/8 pt-6">
                    <ParallaxAvatar gradient={t.gradient} initials={t.initials} />
                    <div>
                      <div className="font-semibold text-mist-100">{t.name}</div>
                      <div className="font-mono text-xs text-mist-500">
                        {t.role} · {t.company}
                      </div>
                    </div>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-8 bg-primary-500" : "w-3 bg-white/15 hover:bg-white/30"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous testimonial"
                  className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 text-mist-100 transition-all hover:border-primary-500/50 hover:text-primary-400"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next testimonial"
                  className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 text-mist-100 transition-all hover:border-primary-500/50 hover:text-primary-400"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ParallaxAvatar({ gradient, initials }: { gradient: string; initials: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 20 });
  const sy = useSpring(my, { stiffness: 200, damping: 20 });

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        mx.set((e.clientX - r.left - r.width / 2) * 0.2);
        my.set((e.clientY - r.top - r.height / 2) * 0.2);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative"
    >
      <div
        aria-hidden
        className="absolute -inset-1 rounded-full blur-lg opacity-60"
        style={{ background: gradient }}
      />
      <div
        className="relative flex size-14 items-center justify-center rounded-full border-2 border-white/20 font-display text-lg font-bold text-white shadow-soft"
        style={{ background: gradient }}
      >
        {initials}
      </div>
    </motion.div>
  );
}
