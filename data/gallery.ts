export type GalleryItem = {
  src: string;
  title: string;
  category: "Studio" | "Work" | "Certifications";
  caption: string;
  tall?: boolean;
};

export const galleryCategories = ["All", "Studio", "Work", "Certifications"] as const;

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/profile.jpg",
    title: "Portrait",
    category: "Studio",
    caption: "Professional portrait — the face behind the code.",
    tall: true,
  },
  {
    src: "/images/ux4mation.jpg",
    title: "UX4MATION",
    category: "Work",
    caption: "Where I build enterprise ServiceNow solutions and full-stack apps.",
  },
  {
    src: "/images/csa-cert.jpg",
    title: "CSA Certification",
    category: "Certifications",
    caption: "ServiceNow Certified System Administrator.",
  },
];

export function getGalleryItem(src: string) {
  return galleryItems.find((g) => g.src === src);
}
