import type { Metadata } from "next";
import { TestimonialsCarousel } from "@/components/testimonials/testimonials-carousel";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Testimonials — Mohamed Ouzzat",
  description:
    "What colleagues, mentors and clients say about working with Mohamed Ouzzat — Full Stack Developer and ServiceNow Developer.",
  path: "/testimonials",
  keywords: ["Mohamed Ouzzat reviews", "Mohamed Ouzzat testimonials", "Full stack developer Morocco"],
});

export default function TestimonialsPage() {
  return <TestimonialsCarousel />;
}
