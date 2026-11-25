import type { Metadata } from "next";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { skillCategories } from "@/data/skills";

export const SITE_URL = site.url;

export const defaultOpenGraphImage = {
  url: "/images/og-image.jpg",
  width: 1200,
  height: 1200,
  alt: "Mohamed Ouzzat — Full Stack & ServiceNow Developer from Marrakech, Morocco",
};

export const twitterCardImage = {
  url: "/images/og-image-twitter.jpg",
  width: 1200,
  height: 630,
  alt: "Mohamed Ouzzat — Full Stack & ServiceNow Developer from Marrakech, Morocco",
};

type OgImage = { url: string; width: number; height: number; alt: string } | string;

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: OgImage;
  type?: "website" | "profile";
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  image = defaultOpenGraphImage,
  type = "website",
}: BuildMetadataArgs): Metadata {
  const url = `${SITE_URL}${path}`;
  const images = [image];
  return {
    title,
    description,
    keywords: [...site.keywords, ...keywords],
    authors: [{ name: site.name, url: SITE_URL }],
    creator: site.name,
    publisher: site.name,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type,
      locale: "en_US",
      url,
      siteName: site.name,
      title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [typeof image === "string" ? image : image.url],
    },
    category: "Portfolio",
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: site.name,
    givenName: "Mohamed",
    familyName: "Ouzzat",
    jobTitle: ["Full Stack Developer", "ServiceNow Developer", "Software Engineer"],
    description: site.seoDescription,
    url: SITE_URL,
    email: `mailto:${site.email}`,
    image: `${SITE_URL}/images/profile.jpg`,
    nationality: { "@type": "Country", name: "Morocco" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Marrakech",
      addressCountry: "MA",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Laravel",
      "PHP",
      "ServiceNow",
      "ITSM",
      "Tailwind CSS",
      "MySQL",
      "REST APIs",
    ],
    sameAs: [site.github, site.linkedin],
    hasOccupation: [
      { "@type": "Occupation", name: "Full Stack Developer" },
      { "@type": "Occupation", name: "ServiceNow Developer" },
      { "@type": "Occupation", name: "Software Engineer" },
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "YouCode × Simplon",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: `${site.name} — Full Stack & ServiceNow Developer Portfolio`,
    url: SITE_URL,
    description: site.seoDescription,
    inLanguage: "en-US",
    publisher: { "@id": `${SITE_URL}/#person` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/projects?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: site.name,
    url: SITE_URL,
    email: site.email,
    logo: `${SITE_URL}/mo-logo.png`,
    sameAs: [site.github, site.linkedin],
  };
}

export function profilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profile`,
    name: `${site.name} — Portfolio`,
    url: SITE_URL,
    inLanguage: "en-US",
    about: { "@id": `${SITE_URL}/#person` },
    mainEntity: { "@id": `${SITE_URL}/#person` },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function projectJsonLd(slug: string) {
  const project = projects.find((p) => p.slug === slug);
  if (!project) return null;
  const url = `${SITE_URL}/projects/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": ["SoftwareSourceCode", "CreativeWork"],
    name: project.name,
    description: project.description,
    url,
    image: `${SITE_URL}/images/profile.jpg`,
    datePublished: `${project.year}-01-01`,
    author: { "@id": `${SITE_URL}/#person` },
    creator: { "@id": `${SITE_URL}/#person` },
    programmingLanguage: project.stack[0] ?? "JavaScript",
    codeRepository: project.githubUrl,
    keywords: project.stack,
    applicationCategory: "DeveloperApplication",
    inLanguage: "en-US",
  };
}

export function portfolioItemJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${site.name} — Projects`,
    url: `${SITE_URL}/projects`,
    numberOfItems: projects.length,
    itemListElement: projects.map((p, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: p.name,
      url: `${SITE_URL}/projects/${p.slug}`,
    })),
  };
}

export function workExperienceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${site.name} — Professional Experience`,
    itemListElement: experience.map((exp, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "JobPosting",
        title: exp.role,
        hiringOrganization: { "@type": "Organization", name: exp.company },
        description: exp.description,
        jobLocation: exp.location
          ? { "@type": "Place", address: exp.location }
          : undefined,
      },
    })),
  };
}

export function skillsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${site.name} — Technical Skills`,
    itemListElement: skillCategories.flatMap((category, ci) =>
      category.skills.map((skill, si) => ({
        "@type": "ListItem",
        position: ci * 10 + si + 1,
        name: skill.name,
      }))
    ),
  };
}
