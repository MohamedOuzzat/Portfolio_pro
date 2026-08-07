import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { SkillsPreview } from "@/components/home/skills-preview";
import { ServiceNowStrip } from "@/components/home/servicenow-strip";
import { TestimonialStrip } from "@/components/home/testimonial-strip";
import { CTASection } from "@/components/home/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildMetadata,
  profilePageJsonLd,
  personJsonLd,
  portfolioItemJsonLd,
  skillsJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Mohamed Ouzzat — Full Stack & ServiceNow Developer Portfolio",
  description:
    "Mohamed Ouzzat — Full Stack Developer, ServiceNow Developer and Software Engineer from Marrakech, Morocco. Specializing in React, Next.js, TypeScript, Laravel and enterprise ITSM automation. Explore my projects and case studies.",
  path: "/",
  keywords: [
    "Mohamed Ouzzat",
    "Mohamed Ouzzat Portfolio",
    "Mohamed Ouzzat Full Stack Developer",
    "Mohamed Ouzzat ServiceNow Developer",
  ],
  type: "website",
});

export default function Home() {
  return (
    <>
      <JsonLd data={personJsonLd()} />
      <JsonLd data={profilePageJsonLd()} />
      <JsonLd data={portfolioItemJsonLd()} />
      <JsonLd data={skillsJsonLd()} />
      <Hero />
      <FeaturedProjects />
      <SkillsPreview />
      <ServiceNowStrip />
      <TestimonialStrip />
      <CTASection />
    </>
  );
}
