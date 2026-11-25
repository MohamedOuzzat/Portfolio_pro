"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Mail, ArrowUpRight, ArrowUp, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Magnetic } from "@/components/motion/magnetic";
import { site, navLinks } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  const [localTime, setLocalTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      try {
        setLocalTime(
          new Intl.DateTimeFormat("en-GB", {
            timeZone: "Africa/Casablanca",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }).format(new Date())
        );
      } catch {
        setLocalTime("");
      }
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-900/25">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <Link
              href="/"
              className="group inline-flex items-baseline gap-2 font-display text-3xl font-bold tracking-tight"
            >
              <span className="text-mist-100">MO</span>
              <span className="text-gradient transition-all group-hover:brightness-125">.</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist-400">
              Mohamed Ouzzat — Full Stack Developer, AI Engineer &amp; ServiceNow Specialist.{" "}
              {site.tagline}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-line bg-overlay px-3 py-1 font-mono text-[11px] text-mist-400">
              <MapPin className="size-3 text-cyan-400" />
              <span>{site.location}</span>
              {localTime && (
                <>
                  <span className="text-mist-600">·</span>
                  <span className="text-mist-200">{localTime} UTC+1</span>
                </>
              )}
            </div>
            <div className="mt-6 flex gap-2.5">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex size-10 items-center justify-center rounded-xl border border-line bg-overlay text-mist-400 transition-all hover:-translate-y-0.5 hover:border-violet-500/50 hover:text-violet-400"
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex size-10 items-center justify-center rounded-xl border border-line bg-overlay text-mist-400 transition-all hover:-translate-y-0.5 hover:border-violet-500/50 hover:text-cyan-400"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="inline-flex size-10 items-center justify-center rounded-xl border border-line bg-overlay text-mist-400 transition-all hover:-translate-y-0.5 hover:border-violet-500/50 hover:text-violet-400"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="md:justify-self-end">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-widest text-mist-500">
              {"// navigation"}
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-1 text-sm text-mist-400 transition-colors hover:text-mist-100"
                >
                  {link.label}
                  <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-70" />
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="font-mono text-xs text-mist-500">
            © {year} {site.name} — Crafted with Next.js, Tailwind &amp; Framer Motion
          </p>
          <Magnetic strength={0.25}>
            <button
              type="button"
              onClick={scrollTop}
              className="group inline-flex items-center gap-2 rounded-xl border border-line bg-overlay px-4 py-2 text-xs font-semibold text-mist-300 transition-all hover:-translate-y-0.5 hover:border-violet-500/50 hover:text-mist-100"
            >
              Back to top
              <ArrowUp className="size-3.5 text-cyan-400 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
