"use client";

import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/motion/tilt-card";
import { ProjectVisual } from "./project-visual";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="h-full min-w-0"
    >
      <TiltCard
        data-cursor-label="CASE"
        className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl transition-colors duration-300 hover:border-violet-500/40"
      >
        <div className="relative overflow-hidden">
          <div className="transition-transform duration-700 ease-out group-hover:scale-[1.03]">
            <ProjectVisual project={project} className="aspect-[16/9]" />
          </div>
          {project.featured && (
            <span className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-1 rounded-md border border-violet-500/40 bg-[#08080f]/85 px-2 py-1 font-mono text-[10px] font-semibold tracking-wider text-violet-300 backdrop-blur">
              <Star className="size-3 fill-violet-400 text-violet-400" /> FEATURED
            </span>
          )}
          <span
            className="absolute bottom-3 right-3 z-10 rounded-md border px-2 py-1 font-mono text-[10px] font-semibold backdrop-blur"
            style={{
              color: project.color,
              borderColor: `${project.color}55`,
              background: "rgba(8, 8, 15, 0.85)",
            }}
          >
            {project.tag.toUpperCase()}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-display text-xl font-bold tracking-tight text-mist-100 transition-colors group-hover:text-violet-400">
              {project.name}
            </h3>
            <span className="font-mono text-[11px] text-mist-500">{project.year}</span>
          </div>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-400">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 5).map((s) => (
              <span
                key={s}
                className="rounded-md border border-line bg-overlay px-2 py-0.5 font-mono text-[10px] text-mist-300"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 border-t border-line pt-4">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-violet-500/35 bg-violet-500/10 py-2.5 text-xs font-semibold text-violet-400 transition-all hover:border-cyan-400/50 hover:bg-gradient-to-r hover:from-violet-500/20 hover:to-cyan-500/15 hover:text-mist-100"
            >
              Case Study <ArrowUpRight className="size-3.5" />
            </Link>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} source on GitHub`}
              className="inline-flex size-9 items-center justify-center rounded-xl border border-line bg-overlay text-mist-400 transition-all hover:border-violet-500/50 hover:text-mist-100"
            >
              <GithubIcon className="size-4" />
            </a>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
