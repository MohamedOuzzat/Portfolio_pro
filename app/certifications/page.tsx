import type { Metadata } from "next";
import { CertificationsClient } from "@/components/certifications/certifications-client";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Certifications — Mohamed Ouzzat",
  description:
    "Certifications earned by Mohamed Ouzzat — ServiceNow CSA (Certified System Administrator) and full-stack web development credentials from YouCode × Simplon.",
  path: "/certifications",
  keywords: ["Mohamed Ouzzat certifications", "ServiceNow CSA", "Mohamed Ouzzat ServiceNow Developer"],
});

export default function CertificationsPage() {
  return <CertificationsClient />;
}
