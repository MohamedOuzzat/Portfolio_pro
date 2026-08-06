"use client";

import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/motion/tilt-card";
import { ProjectVisual } from "./project-visual";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="min-w-0 h-full"
    >
      <TiltCard className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/8 bg-ink-900/60 shadow-soft">
        <div className="relative">
          <div className="transition-transform duration-700 ease-out group-hover:scale-[1.04]">
            <ProjectVisual project={project} className="aspect-[16/9]" />
          </div>
          {project.featured && (
            <span className="absolute left-4 top-14 z-10 inline-flex items-center gap-1 rounded-md border border-primary-500/40 bg-ink-950/80 px-2 py-1 font-mono text-[10px] font-semibold tracking-wider text-primary-400 backdrop-blur">
              <Star className="size-3 fill-primary-400" /> FEATURED
            </span>
          )}
          <span
            className="absolute right-4 top-14 z-10 rounded-md border px-2 py-1 font-mono text-[10px] font-semibold backdrop-blur"
            style={{
              color: project.color,
              borderColor: `${project.color}44`,
              background: `${project.color}1a`,
            }}
          >
            {project.tag.toUpperCase()}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-bold tracking-tight text-mist-100 transition-colors group-hover:text-primary-400">
            {project.name}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-400">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 5).map((s) => (
              <span
                key={s}
                className="rounded-md border border-white/8 bg-ink-800/60 px-2 py-0.5 font-mono text-[10px] text-mist-400"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 border-t border-white/8 pt-4">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-primary-500/40 bg-primary-500/10 py-2 text-xs font-semibold text-primary-400 transition-all hover:bg-primary-500/20"
            >
              Case Study <ArrowUpRight className="size-3.5" />
            </Link>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} source on GitHub`}
              className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 text-mist-400 transition-all hover:border-primary-500/50 hover:text-primary-400"
            >
              <GithubIcon className="size-4" />
            </a>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
