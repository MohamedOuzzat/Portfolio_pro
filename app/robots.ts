import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/projects/*/error"],
    },
    sitemap: "https://mohamedouzzat.vercel.app/sitemap.xml",
  };
}
