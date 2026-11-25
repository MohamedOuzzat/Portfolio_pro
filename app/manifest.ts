import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — Full Stack & ServiceNow Developer Portfolio`,
    short_name: site.shortName,
    description: site.seoDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#06060b",
    theme_color: "#06060b",
    categories: ["portfolio", "developer", "software"],
    icons: [
      { src: "/icon.png", sizes: "256x256", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
