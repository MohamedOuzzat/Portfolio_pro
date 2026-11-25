"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  Sun,
  Moon,
  Command,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, site } from "@/data/site";
import { useTheme } from "@/components/theme-provider";
import { CommandPalette } from "@/components/layout/command-palette";
import { Magnetic } from "@/components/motion/magnetic";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      suppressHydrationWarning
      aria-label={
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
      className="group inline-flex size-9 items-center justify-center rounded-xl border border-line bg-overlay text-mist-100 transition-all hover:border-violet-500/50 hover:text-violet-400"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -45, opacity: 0, scale: 0.7 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
      >
        {theme === "light" ? (
          <Moon className="size-4" aria-hidden="true" />
        ) : (
          <Sun className="size-4" aria-hidden="true" />
        )}
      </motion.span>
    </button>
  );
}

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
      className="group inline-flex items-center gap-2.5 font-display text-lg font-bold tracking-tight"
      aria-label="Back to home"
    >
      <span className="relative flex size-9 items-center justify-center overflow-hidden rounded-xl border border-line bg-ink-900/90 p-1 shadow-sm transition-all duration-300 group-hover:border-violet-500/50 group-hover:shadow-glow">
        <Image
          src="/mo-logo.png"
          alt="Mohamed Ouzzat logo"
          width={612}
          height={407}
          className="h-full w-full object-contain"
          priority
        />
      </span>
      <span className="hidden text-mist-100 sm:inline-block">
        MO<span className="text-gradient">.</span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6"
      >
        <nav
          aria-label="Primary"
          className={cn(
            "mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl px-4 transition-all duration-500 md:px-5",
            scrolled
              ? "glass shadow-soft"
              : "border border-transparent bg-transparent"
          )}
        >
          <Logo />

          <div className="hidden items-center gap-0.5 lg:flex">
            {desktopLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-xl px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "text-mist-100"
                    : "text-mist-400 hover:text-mist-100"
                )}
              >
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-xl border border-violet-500/30 bg-gradient-to-r from-violet-500/15 to-cyan-500/10"
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            ))}

            <div className="relative">
              <button
                type="button"
                onClick={() => setMoreOpen((v) => !v)}
                onBlur={() => setTimeout(() => setMoreOpen(false), 160)}
                className={cn(
                  "flex items-center gap-1 rounded-xl px-3.5 py-2 text-sm font-medium transition-colors",
                  moreLinks.some((l) => isActive(l.href))
                    ? "text-violet-400"
                    : "text-mist-400 hover:text-mist-100"
                )}
                aria-expanded={moreOpen}
              >
                More
                <ChevronDown
                  className={cn(
                    "size-4 transition-transform duration-200",
                    moreOpen && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className="glass-card absolute right-0 top-full mt-2 w-56 rounded-2xl p-2"
                  >
                    {moreLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMoreOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm transition-colors",
                          isActive(link.href)
                            ? "bg-violet-500/15 text-violet-400"
                            : "text-mist-400 hover:bg-overlay hover:text-mist-100"
                        )}
                      >
                        {link.label}
                        <ArrowUpRight className="size-3.5 opacity-55" />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              aria-label="Open command palette (Ctrl+K)"
              className="hidden items-center gap-1.5 rounded-xl border border-line bg-overlay px-2.5 py-1.5 font-mono text-[11px] text-mist-400 transition-colors hover:border-violet-500/40 hover:text-mist-100 sm:inline-flex"
            >
              <Command className="size-3" />
              <span>K</span>
            </button>
            <ThemeToggle />
            <Magnetic strength={0.22}>
              <Link
                href="/contact"
                className="btn-accent hidden items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 sm:inline-flex"
              >
                Contact
                <ArrowUpRight className="size-4" />
              </Link>
            </Magnetic>
            <button
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-xl border border-line bg-overlay text-mist-100 lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] bg-ink-950/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <Logo />
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setPaletteOpen(true);
                  }}
                  aria-label="Open command palette"
                  className="inline-flex size-9 items-center justify-center rounded-xl border border-line text-mist-300"
                >
                  <Command className="size-4" />
                </button>
                <button
                  type="button"
                  className="inline-flex size-9 items-center justify-center rounded-xl border border-line text-mist-100"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>
            <motion.div
              className="flex h-[calc(100dvh-4rem)] flex-col gap-1 overflow-y-auto px-5 py-6"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3 text-lg font-medium transition-colors",
                      isActive(link.href)
                        ? "bg-gradient-to-r from-violet-500/15 to-cyan-500/10 text-violet-400"
                        : "text-mist-300 hover:bg-overlay hover:text-mist-100"
                    )}
                  >
                    {link.label}
                    <ArrowUpRight className="size-4 opacity-50" />
                  </Link>
                </motion.div>
              ))}
              <div className="mt-6 flex flex-wrap gap-4 border-t border-line px-4 pt-5">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-mist-400 hover:text-mist-100"
                >
                  GitHub ↗
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-mist-400 hover:text-mist-100"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="font-mono text-xs text-mist-400 hover:text-mist-100"
                >
                  Email ↗
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </>
  );
}
