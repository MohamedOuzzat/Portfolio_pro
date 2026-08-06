import type { Metadata } from "next";
import { TestimonialsCarousel } from "@/components/testimonials/testimonials-carousel";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What colleagues, mentors and clients say about working with Mohamed Ouzzat.",
};

export default function TestimonialsPage() {
  return <TestimonialsCarousel />;
}
