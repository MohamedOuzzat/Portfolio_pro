import type { SkillCategory } from "@/data/skills";
import { FadeUp } from "@/components/motion/fade";
import { SkillBar } from "@/components/skills/skill-bar";

export function SkillCategoryCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const Icon = category.skills[0].icon;

  return (
    <FadeUp delay={(index % 2) * 0.1} className="h-full">
      <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/8 bg-ink-900/60 p-7 backdrop-blur-sm transition-colors duration-500 hover:border-white/20">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
          style={{ background: category.color }}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div
              className="flex size-12 items-center justify-center rounded-xl border transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110"
              style={{ color: category.color, borderColor: `${category.color}33`, background: `${category.color}14` }}
            >
              <Icon className="size-6" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-mist-100">{category.title}</h2>
              <p className="font-mono text-xs text-mist-500">{category.subtitle}</p>
            </div>
          </div>
          <span className="font-mono text-[11px] text-mist-500">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="mt-7 space-y-5">
          {category.skills.map((skill, i) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              pct={skill.pct}
              color={skill.color}
              gradientTo={category.color}
              blurb={skill.blurb}
              delay={0.15 + i * 0.07}
            />
          ))}
        </div>
      </div>
    </FadeUp>
  );
}
