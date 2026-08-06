"use client";

import Link from "next/link";
import { Mail, ArrowUpRight, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/data/site";
import { navLinks } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/8">
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-40 bg-gradient-to-b from-transparent to-ink-950" />
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <Link
              href="/"
              className="group font-display text-2xl font-bold tracking-tight"
            >
              <span className="text-gradient group-hover:brightness-125 transition-all">MO.</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist-400">
              {site.role}. {site.tagline}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 text-mist-400 transition-all hover:-translate-y-0.5 hover:border-primary-500/50 hover:text-primary-400"
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 text-mist-400 transition-all hover:-translate-y-0.5 hover:border-primary-500/50 hover:text-primary-400"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 text-mist-400 transition-all hover:-translate-y-0.5 hover:border-primary-500/50 hover:text-primary-400"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <div className="grid grid-cols-2 gap-x-12 gap-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-1 text-sm text-mist-400 transition-colors hover:text-mist-100"
                >
                  {link.label}
                  <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-60" />
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 sm:flex-row">
          <p className="font-mono text-xs text-mist-500">
            © {year} {site.name} — Built with Next.js, Tailwind & Framer Motion
          </p>
          <button
            onClick={scrollTop}
            className="group inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-xs font-semibold text-mist-400 transition-all hover:-translate-y-0.5 hover:border-primary-500/50 hover:text-primary-400"
          >
            Back to top
            <Heart className="size-3.5 text-primary-500 transition-transform group-hover:scale-125" />
          </button>
        </div>
      </div>
    </footer>
  );
}
