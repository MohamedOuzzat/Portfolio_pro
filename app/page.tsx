import type { Metadata } from "next";
import { BootSequence } from "@/components/home/boot-sequence";
import { TechMarquee } from "@/components/home/tech-marquee";
import { NeuralDivider } from "@/components/home/neural-divider";
import { ExpertiseMatrix } from "@/components/home/expertise-matrix";
import { CaseStudies } from "@/components/home/case-studies";
import { StackArchitecture } from "@/components/home/stack-architecture";
import { ServiceNowStrip } from "@/components/home/servicenow-strip";
import { Timeline } from "@/components/home/timeline";
import { TestimonialStrip } from "@/components/home/testimonial-strip";
import { Signal } from "@/components/home/signal";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, personJsonLd, profilePageJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Mohamed Ouzzat — Full Stack · AI · ServiceNow Developer",
  description:
    "Mohamed Ouzzat — Full Stack Developer, AI/LLM Integration Engineer and ServiceNow Developer from Marrakech, Morocco. Building intelligent web applications with Next.js, React, TypeScript, Laravel, and automating enterprise ITSM with ServiceNow.",
  path: "/",
  keywords: [
    "Mohamed Ouzzat",
    "Full Stack Developer Morocco",
    "AI Developer",
    "LLM Integration",
    "GenAI",
    "ServiceNow Developer",
    "Next.js",
    "Laravel",
  ],
  type: "website",
});

export default function Home() {
  return (
    <>
      <JsonLd data={personJsonLd()} />
      <JsonLd data={profilePageJsonLd()} />
      <BootSequence />
      <TechMarquee />
      <ExpertiseMatrix />
      <NeuralDivider />
      <CaseStudies />
      <StackArchitecture />
      <ServiceNowStrip />
      <Timeline />
      <TestimonialStrip />
      <Signal />
    </>
  );
}
