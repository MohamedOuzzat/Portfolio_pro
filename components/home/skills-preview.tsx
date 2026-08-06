import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/motion/section-heading";
import { GlowCard } from "@/components/motion/glow-card";
import { Counter } from "@/components/motion/counter";

export function SkillsPreview() {
  const featured = skillCategories.slice(0, 4);

  return (
    <section className="relative border-y border-white/8 bg-ink-900/40 py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="// skills"
          title="Technical"
          highlight="Arsenal"
          description="Eight categories of skills sharpened through real projects — from pixel-perfect frontends to enterprise ITSM automation."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((cat) => {
            const Icon = cat.skills[0].icon;
            return (
            <GlowCard key={cat.id} color={`${cat.color}40`} className="p-6">
              <div
                className="flex size-11 items-center justify-center rounded-lg border"
                style={{ color: cat.color, borderColor: `${cat.color}33`, background: `${cat.color}14` }}
              >
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-mist-100">{cat.title}</h3>
              <p className="mt-1.5 text-xs text-mist-400">{cat.subtitle}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {cat.skills.slice(0, 4).map((s) => (
                  <span
                    key={s.name}
                    className="rounded-md border border-white/8 bg-ink-800/60 px-2 py-0.5 font-mono text-[10px] text-mist-400"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-end justify-between border-t border-white/8 pt-4">
                <span className="text-[11px] uppercase tracking-wider text-mist-500">Top skill</span>
                <span className="font-display text-xl font-bold text-gradient">
                  <Counter target={cat.skills[0].pct} suffix="%" />
                </span>
              </div>
            </GlowCard>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/skills"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-mist-400 transition-colors hover:text-primary-400"
          >
            Explore every skill
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
