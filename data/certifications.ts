export type Certification = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  verificationUrl: string;
  image: string;
  skill: string;
};

export const certifications: Certification[] = [
  {
    id: "csa",
    title: "ServiceNow Certified System Administrator",
    issuer: "ServiceNow",
    year: "2024",
    description:
      "Validated hands-on expertise configuring and administering the ServiceNow platform: user administration, tables and forms, workflows, business rules, client scripts, security rules, and the Service Catalog.",
    verificationUrl: "https://nowlearning.servicenow.com/lxp/en/pages/experience",
    image: "/images/csa-cert.jpg",
    skill: "ITSM & Platform Administration",
  },
  {
    id: "web-development",
    title: "Full Stack Web Development",
    issuer: "YouCode × Simplon",
    year: "2023",
    description:
      "Intensive bootcamp credential covering modern full-stack development — HTML/CSS/JS, PHP, Laravel, databases, and version control with real-world project delivery.",
    verificationUrl: "https://youcode.ma",
    image: "/images/profile.jpg",
    skill: "Frontend + Backend",
  },
];

export const certificationsStats = [
  { value: 2, suffix: "", label: "Certifications" },
  { value: 100, suffix: "%", label: "Pass rate" },
  { value: 1, suffix: "", label: "Enterprise platform" },
];
