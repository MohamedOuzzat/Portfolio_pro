import type { Metadata } from "next";
import { ContactClient } from "@/components/contact/contact-client";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact — Mohamed Ouzzat",
  description:
    "Get in touch with Mohamed Ouzzat — Full Stack Developer and ServiceNow Developer from Morocco. Open to internships, collaborations, freelance projects and full-time opportunities.",
  path: "/contact",
  keywords: ["Contact Mohamed Ouzzat", "Hire Mohamed Ouzzat", "Mohamed Ouzzat full stack developer"],
});

export default function ContactPage() {
  return <ContactClient />;
}
