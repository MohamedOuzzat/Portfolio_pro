import type { Metadata } from "next";
import { ContactClient } from "@/components/contact/contact-client";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mohamed Ouzzat — open to internships, collaborations and freelance projects.",
};

export default function ContactPage() {
  return <ContactClient />;
}
