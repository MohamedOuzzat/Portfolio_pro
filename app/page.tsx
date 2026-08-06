import { Hero } from "@/components/home/hero";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { SkillsPreview } from "@/components/home/skills-preview";
import { ServiceNowStrip } from "@/components/home/servicenow-strip";
import { TestimonialStrip } from "@/components/home/testimonial-strip";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <SkillsPreview />
      <ServiceNowStrip />
      <TestimonialStrip />
      <CTASection />
    </>
  );
}
