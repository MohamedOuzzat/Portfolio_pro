"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";

const filters = ["All", "Full Stack", "Frontend", "Backend", "ServiceNow", "Laravel", "React", "Next.js"] as const;

export function ProjectsClient() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.categories.includes(filter)),
    [filter]
  );

  return (
    <>
      <PageHeader
        eyebrow="// projects"
        title="Featured"
        highlight="Work"
        description="Six projects, each with its own case study — filter by stack, hover for the 3D tilt, and open a project to see the full story."
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-10 flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                  filter === f
                    ? "border-primary-500/50 text-primary-400"
                    : "border-white/10 text-mist-400 hover:border-white/25 hover:text-mist-100"
                }`}
              >
                {filter === f && (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-0 rounded-lg bg-primary-500/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{f}</span>
              </button>
            ))}
            <span className="ml-auto hidden items-center gap-2 font-mono text-xs text-mist-500 sm:flex">
              <LayoutGrid className="size-3.5" />
              {visible.length} of {projects.length}
            </span>
          </div>

          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((p, i) => (
                <motion.div
                  key={p.slug}
                  layout
                  className="min-w-0"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                >
                  <ProjectCard project={p} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
