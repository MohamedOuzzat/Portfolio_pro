import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/layout/page-transition";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { Preloader } from "@/components/layout/preloader";
import { CustomCursor } from "@/components/motion/custom-cursor";
import { JsonLd } from "@/components/seo/json-ld";
import { Analytics } from "@/components/analytics/analytics";
import { ThemeProvider } from "@/components/theme-provider";
import {
  SITE_URL,
  defaultOpenGraphImage,
  twitterCardImage,
  personJsonLd,
  websiteJsonLd,
  organizationJsonLd,
} from "@/lib/seo";
import { site } from "@/data/site";

const themeInitScript = `
(function () {
  var t;
  try { t = localStorage.getItem("portfolio-theme"); } catch (e) {}
  if (t !== "dark" && t !== "light") {
    t = "dark";
  }
  var root = document.documentElement;
  root.classList.toggle("light", t === "light");
  root.classList.toggle("dark", t === "dark");
  root.style.colorScheme = t;
})();
`;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — Full Stack · AI · ServiceNow Developer`,
    template: `%s`,
  },
  description: site.seoDescription,
  keywords: site.keywords,
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  publisher: site.name,
  applicationName: site.name,
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: `${site.name} — Full Stack · AI · ServiceNow Developer`,
    description: site.seoDescription,
    siteName: site.name,
    images: [
      {
        url: `${SITE_URL}${defaultOpenGraphImage.url}`,
        width: defaultOpenGraphImage.width,
        height: defaultOpenGraphImage.height,
        alt: defaultOpenGraphImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Full Stack & ServiceNow Developer`,
    description: site.seoDescription,
    images: [`${SITE_URL}${twitterCardImage.url}`],
  },
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
  alternates: { canonical: "/" },
  category: "Portfolio",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: site.shortName,
  },
  formatDetection: { telephone: true, email: true },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
  process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
    ? {
        verification: {
          ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
            ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
            : {}),
          ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
            ? { other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } }
            : {}),
        },
      }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#06060b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <JsonLd data={personJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={organizationJsonLd()} />
      </head>
      <body className="grain bg-ink-950 text-mist-100">
        <Analytics />
        <ThemeProvider>
          <Preloader />
          <ScrollProgress />
          <SmoothScroll />
          <CustomCursor />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-violet-600 focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="relative z-10">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
