import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailsClient } from "@/components/projects/project-details-client";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getProject,
  getAdjacentProjects,
  projects,
} from "@/data/projects";
import {
  buildMetadata,
  breadcrumbJsonLd,
  projectJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return buildMetadata({
    title: `${project.name} — ${project.tag} Project | Mohamed Ouzzat`,
    description: project.description,
    path: `/projects/${project.slug}`,
    keywords: [
      project.name,
      `${project.name} case study`,
      `${project.tag} project Morocco`,
      ...project.stack,
    ],
    type: "website",
  });
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { prev, next } = getAdjacentProjects(slug);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: project.name, path: `/projects/${slug}` },
        ])}
      />
      <JsonLd data={projectJsonLd(slug)} />
      <ProjectDetailsClient project={project} prev={prev} next={next} />
    </>
  );
}
