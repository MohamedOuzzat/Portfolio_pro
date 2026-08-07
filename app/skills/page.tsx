import type { Metadata } from "next";
import { skillCategories } from "@/data/skills";
import { PageHeader } from "@/components/layout/page-header";
import { SkillCategoryCard } from "@/components/skills/skill-category-card";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, skillsJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Skills — Mohamed Ouzzat",
  description:
    "Frontend, backend, databases, ServiceNow, cloud, DevOps and tools — the full technical arsenal of Mohamed Ouzzat: React, Next.js, TypeScript, Laravel, PHP, MySQL and more.",
  path: "/skills",
  keywords: [
    "Mohamed Ouzzat skills",
    "React developer skills",
    "Laravel developer skills",
    "Next.js developer",
    "TypeScript developer Morocco",
  ],
});

export default function SkillsPage() {
  return (
    <>
      <JsonLd data={skillsJsonLd()} />
      <PageHeader
        eyebrow="// skills"
        title="Technical"
        highlight="Arsenal"
        description="Eight categories, sharpened through real projects. Hover a card to see the glow — every bar animates as it comes into view."
      />
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2 md:px-8">
          {skillCategories.map((cat, i) => (
            <SkillCategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
