import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "The professional journey of Mohamed Ouzzat — from YouCode × Simplon training to enterprise ServiceNow at UX4MATION.",
};

export default function ExperiencePage() {
  return <ExperienceTimeline />;
}
