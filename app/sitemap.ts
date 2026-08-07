import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const dynamic = "force-static";

const BASE_URL = site.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/skills",
    "/projects",
    "/servicenow",
    "/experience",
    "/certifications",
    "/gallery",
    "/testimonials",
    "/contact",
  ];

  const pages = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: route === "" ? "monthly" : "weekly",
    priority: route === "" ? 1 : 0.8,
  })) as MetadataRoute.Sitemap;

  const projectRoutes = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  })) as MetadataRoute.Sitemap;

  return [...pages, ...projectRoutes];
}
