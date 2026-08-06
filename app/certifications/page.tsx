import type { Metadata } from "next";
import { CertificationsClient } from "@/components/certifications/certifications-client";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Certifications earned by Mohamed Ouzzat — ServiceNow CSA and full-stack web development credentials.",
};

export default function CertificationsPage() {
  return <CertificationsClient />;
}
