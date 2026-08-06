"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, site } from "@/data/site";

const desktopLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "ServiceNow", href: "/servicenow" },
  { label: "Experience", href: "/experience" },
];

const moreLinks = navLinks.filter(
  (l) =>
    !desktopLinks.some((d) => d.href === l.href) && l.href !== "/contact"
);

function Logo() {
  return (
    <Link
      href="/"
      className="group font-display text-xl font-bold tracking-tight"
      aria-label="Back to home"
    >
      <img src="/mo-logo.png" alt="MO logo" className="h-24 w-auto" />
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/8 bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {desktopLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive(link.href)
                  ? "text-primary-400"
                  : "text-mist-400 hover:text-mist-100"
              )}
            >
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-md bg-primary-500/10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </Link>
          ))}

          <div className="relative">
            <button
              onClick={() => setMoreOpen((v) => !v)}
              onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
              className={cn(
                "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                moreLinks.some((l) => isActive(l.href))
                  ? "text-primary-400"
                  : "text-mist-400 hover:text-mist-100"
              )}
              aria-expanded={moreOpen}
            >
              More
              <ChevronDown
                className={cn("size-4 transition-transform", moreOpen && "rotate-180")}
              />
            </button>
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="glass absolute right-0 top-full mt-2 w-52 rounded-xl p-2 shadow-soft"
                >
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                        isActive(link.href)
                          ? "bg-primary-500/10 text-primary-400"
                          : "text-mist-400 hover:bg-white/5 hover:text-mist-100"
                      )}
                    >
                      {link.label}
                      <ArrowUpRight className="size-3.5 opacity-50" />
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-lg bg-gradient-to-br from-primary-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:-translate-y-0.5 hover:shadow-glow sm:inline-flex"
          >
            Contact
            <ArrowUpRight className="size-4" />
          </Link>
          <button
            className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 text-mist-100 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <Logo />
              <button
                className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 text-mist-100"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>
            <motion.div
              className="flex flex-col gap-1 overflow-y-auto px-5 py-6"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-4 py-3.5 text-lg font-medium transition-colors",
                      isActive(link.href)
                        ? "bg-primary-500/10 text-primary-400"
                        : "text-mist-400 hover:bg-white/5 hover:text-mist-100"
                    )}
                  >
                    {link.label}
                    <ArrowUpRight className="size-4 opacity-50" />
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 flex flex-wrap gap-2 px-4">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-mist-400 hover:text-mist-100"
                >
                  GitHub
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-mist-400 hover:text-mist-100"
                >
                  LinkedIn
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-mist-400 hover:text-mist-100"
                >
                  Email
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
