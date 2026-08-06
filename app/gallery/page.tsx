import type { Metadata } from "next";
import { GalleryClient } from "@/components/gallery/gallery-client";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual gallery of Mohamed Ouzzat — studio portraits, work moments, and certifications.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
