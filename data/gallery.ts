export type GalleryItem = {
  src: string;
  title: string;
  category: "Studio" | "Work" | "Certifications";
  caption: string;
  tall?: boolean;
};

export const galleryCategories = ["All", "Studio", "Certifications"] as const;

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/profile.jpg",
    title: "Mohamed Ouzzat Portrait",
    category: "Studio",
    caption: "Professional portrait of Mohamed Ouzzat — Full Stack & ServiceNow Developer from Marrakech, Morocco.",
    tall: true,
  },
  {
    src: "/images/csa-cert.jpg",
    title: "Mohamed Ouzzat ServiceNow CSA Certification",
    category: "Certifications",
    caption: "ServiceNow Certified System Administrator (CSA) earned by Mohamed Ouzzat.",
  },
];

export function getGalleryItem(src: string) {
  return galleryItems.find((g) => g.src === src);
}
