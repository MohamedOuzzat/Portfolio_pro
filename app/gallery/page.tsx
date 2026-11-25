import type { Metadata } from "next";
import { GalleryClient } from "@/components/gallery/gallery-client";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Gallery — Mohamed Ouzzat",
  description:
    "A visual gallery of Mohamed Ouzzat — studio portraits, work moments and the ServiceNow CSA certification.",
  path: "/gallery",
  keywords: ["Mohamed Ouzzat gallery", "Mohamed Ouzzat photos", "Mohamed Ouzzat work"],
});

export default function GalleryPage() {
  return <GalleryClient />;
}
