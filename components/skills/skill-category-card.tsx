import type { SkillCategory } from "@/data/skills";
import { FadeUp } from "@/components/motion/fade";
import { GlowCard } from "@/components/motion/glow-card";
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
    <FadeUp delay={(index % 2) * 0.08} className="h-full">
      <GlowCard color={`${category.color}22`} className="h-full p-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-45"
          style={{ background: category.color }}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div
              className="flex size-12 items-center justify-center rounded-xl border transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110"
              style={{
                color: category.color,
                borderColor: `${category.color}38`,
                background: `${category.color}16`,
              }}
            >
              <Icon className="size-6" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-mist-100">
                {category.title}
              </h2>
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
              delay={0.12 + i * 0.06}
            />
          ))}
        </div>
      </GlowCard>
    </FadeUp>
  );
}
