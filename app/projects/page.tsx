import type { Metadata } from "next";
import { ProjectsClient } from "@/components/projects/projects-client";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Premium projects by Mohamed Ouzzat — full-stack platforms, ServiceNow automation, and backend APIs with case studies.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
