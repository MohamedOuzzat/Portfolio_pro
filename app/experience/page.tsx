import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, workExperienceJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Experience — Mohamed Ouzzat",
  description:
    "The professional journey of Mohamed Ouzzat — from YouCode × Simplon full-stack training to enterprise ServiceNow development at UX4MATION in Morocco.",
  path: "/experience",
  keywords: ["Mohamed Ouzzat experience", "Mohamed Ouzzat UX4MATION", "YouCode Simplon Morocco"],
});

export default function ExperiencePage() {
  return (
    <>
      <JsonLd data={workExperienceJsonLd()} />
      <ExperienceTimeline />
    </>
  );
}
