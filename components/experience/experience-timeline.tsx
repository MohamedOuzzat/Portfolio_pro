"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { Building2, GraduationCap } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { experience, type ExperienceItem } from "@/data/experience";

const icons = { building: Building2, school: GraduationCap, trophy: Building2 };

export function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  return (
    <>
      <PageHeader
        eyebrow="// experience"
        title="Where I've"
        highlight="Worked"
        description="A vertical timeline of the roles, programs and projects that shaped me — scroll and watch it fill."
      />

      <section className="py-20">
        <div ref={ref} className="relative mx-auto max-w-4xl px-5 md:px-8">
          <div className="absolute bottom-0 left-[27px] top-0 w-px bg-white/8 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            aria-hidden
            style={{ scaleY: fill }}
            className="absolute bottom-0 left-[27px] top-0 w-px origin-top bg-gradient-to-b from-primary-500 via-violet-500 to-aqua-400 md:left-1/2 md:-translate-x-1/2"
          />

          {experience.map((exp, i) => {
            const Icon = icons[exp.icon];
            const right = i % 2 !== 0;
            return (
              <div key={exp.company} className="relative mb-14 pl-16 md:pl-0">
                {/* Node */}
                <div className="absolute left-0 top-2 md:left-1/2 md:-translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className="relative flex size-14 items-center justify-center rounded-full border border-primary-500/40 bg-ink-950 text-primary-400 shadow-glow"
                  >
                    <Icon className="size-6" />
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full border border-primary-500/30 animate-pulse-ring"
                    />
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: right ? 60 : -60, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`glass-card relative overflow-hidden rounded-xl p-7 md:w-[calc(50%-3.5rem)] ${
                    right ? "md:ml-auto" : "md:mr-auto"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {exp.image && (
                      <div className="size-12 shrink-0 overflow-hidden rounded-lg border border-white/10">
                        <Image
                          src={exp.image}
                          alt={exp.company}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <div className="font-display text-lg font-bold text-mist-100">
                        {exp.company}
                      </div>
                      <div className="font-mono text-xs text-primary-400">{exp.period}</div>
                    </div>
                  </div>
                  <div className="mt-5 text-sm font-semibold text-mist-300">{exp.role}</div>
                  <p className="mt-2 text-sm leading-relaxed text-mist-400">{exp.description}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/8 bg-ink-800/60 px-2 py-0.5 font-mono text-[10px] text-mist-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}

          {/* End marker */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 16 }}
            className="relative flex justify-center"
          >
            <div className="ml-16 flex size-6 items-center justify-center rounded-full border border-aqua-400/50 bg-ink-950 md:ml-0">
              <div className="size-2 rounded-full bg-aqua-400" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
