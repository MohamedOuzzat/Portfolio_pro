import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/layout/page-transition";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohamedouzzat.vercel.app"),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Premium portfolio of Mohamed Ouzzat — Full Stack Developer & ServiceNow Developer from Marrakech. Next.js, Laravel, ITSM automation.",
  keywords: [
    "Mohamed Ouzzat",
    "Full Stack Developer",
    "ServiceNow Developer",
    "Next.js",
    "Laravel",
    "React",
    "TypeScript",
    "Morocco",
    "Marrakech",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohamedouzzat.vercel.app",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    siteName: site.name,
    images: [{ url: "/images/profile.jpg", width: 1200, height: 1200, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    images: ["/images/profile.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="grain bg-ink-950">
        <Navbar />
        <main className="relative z-10">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
