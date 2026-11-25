import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/motion/section-heading";
import { FadeUp } from "@/components/motion/fade";
import { ProjectCard } from "@/components/projects/project-card";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section id="featured" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="// selected work"
          title="Featured"
          highlight="Projects"
          description="A snapshot of what I've shipped — full-stack platforms, enterprise ServiceNow automation, and backend APIs built for production."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        <FadeUp className="mt-12 text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-xl border border-line px-6 py-3 text-sm font-semibold text-mist-100 transition-all hover:border-primary-500/50 hover:text-primary-400"
          >
            View all projects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
