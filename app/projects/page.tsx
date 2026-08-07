import type { Metadata } from "next";
import { ProjectsClient } from "@/components/projects/projects-client";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, portfolioItemJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Projects — Mohamed Ouzzat Portfolio",
  description:
    "Explore the projects of Mohamed Ouzzat — full-stack platforms, ServiceNow automation, backend APIs and frontend apps built with Next.js, React, Laravel and TypeScript, each with a full case study.",
  path: "/projects",
  keywords: [
    "Mohamed Ouzzat projects",
    "Mohamed Ouzzat portfolio",
    "Full stack developer portfolio",
    "Laravel projects Morocco",
    "React projects",
    "ServiceNow automation projects",
  ],
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={portfolioItemJsonLd()} />
      <ProjectsClient />
    </>
  );
}
