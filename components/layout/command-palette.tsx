"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Code2,
  Command,
  Copy,
  Download,
  Moon,
  Search,
  Sparkles,
  Sun,
  Terminal,
  X,
} from "lucide-react";
import { navLinks, site } from "@/data/site";
import { projects } from "@/data/projects";
import { useTheme } from "@/components/theme-provider";

type PaletteItem = {
  id: string;
  group: "Pages" | "Projects" | "Actions";
  title: string;
  subtitle: string;
  keywords: string;
  action: () => void;
};

/**
 * Spotlight-style Ctrl+K / Cmd+K command palette for fast keyboard navigation,
 * quick actions, and a subtle developer Easter egg.
 */
export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [eggText, setEggText] = useState<string | null>(null);

  const closePalette = () => {
    setQuery("");
    setActiveIndex(0);
    setEggText(null);
    onOpenChange(false);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) {
          closePalette();
        } else {
          onOpenChange(true);
        }
      } else if (e.key === "Escape" && open) {
        closePalette();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const items: PaletteItem[] = useMemo(() => {
    const navItems: PaletteItem[] = navLinks.map((l) => ({
      id: `nav-${l.href}`,
      group: "Pages",
      title: l.label,
      subtitle: l.href,
      keywords: `${l.label} page route`,
      action: () => {
        router.push(l.href);
        onOpenChange(false);
      },
    }));

    const projectItems: PaletteItem[] = projects.map((p) => ({
      id: `proj-${p.slug}`,
      group: "Projects",
      title: p.name,
      subtitle: `${p.tag} · ${p.year}`,
      keywords: `${p.name} ${p.tag} ${p.stack.join(" ")}`,
      action: () => {
        router.push(`/projects/${p.slug}`);
        onOpenChange(false);
      },
    }));

    const actionItems: PaletteItem[] = [
      {
        id: "action-theme",
        group: "Actions",
        title: theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode",
        subtitle: `Current: ${theme}`,
        keywords: "theme dark light mode toggle",
        action: () => {
          toggleTheme();
          onOpenChange(false);
        },
      },
      {
        id: "action-email",
        group: "Actions",
        title: copiedEmail ? "Copied to clipboard!" : "Copy Email Address",
        subtitle: site.email,
        keywords: "copy email contact mail",
        action: () => {
          navigator.clipboard?.writeText(site.email).catch(() => {});
          setCopiedEmail(true);
          setTimeout(() => {
            setCopiedEmail(false);
            onOpenChange(false);
          }, 900);
        },
      },
      {
        id: "action-cv",
        group: "Actions",
        title: "Download Résumé (PDF)",
        subtitle: "Mohamed-Ouzzat-CV.pdf",
        keywords: "cv resume pdf download",
        action: () => {
          const link = document.createElement("a");
          link.href = site.cv;
          link.download = "Mohamed-Ouzzat-CV.pdf";
          link.click();
          onOpenChange(false);
        },
      },
      {
        id: "action-whoami",
        group: "Actions",
        title: "whoami // developer bio",
        subtitle: "Easter egg terminal output",
        keywords: "whoami easter egg bio morocco",
        action: () => {
          setEggText(
            "Mohamed Ouzzat — Marrakech, MA · Full Stack + AI/LLM + ServiceNow CSA · Obsessed with the last 10% of craft."
          );
        },
      },
    ];

    return [...navItems, ...projectItems, ...actionItems];
  }, [router, onOpenChange, theme, toggleTheme, copiedEmail]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (it) =>
        it.title.toLowerCase().includes(q) ||
        it.subtitle.toLowerCase().includes(q) ||
        it.keywords.toLowerCase().includes(q)
    );
  }, [items, query]);

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (filtered.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[activeIndex]?.action();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[85] flex items-start justify-center bg-black/60 px-4 pt-[14vh] backdrop-blur-md"
          onClick={closePalette}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card w-full max-w-xl overflow-hidden rounded-2xl border border-line-strong"
          >
            {/* Search bar */}
            <div className="flex items-center gap-3 border-b border-line px-4 py-3.5">
              <Search className="size-4 shrink-0 text-violet-400" />
              <input
                autoFocus
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIndex(0);
                }}
                onKeyDown={onInputKeyDown}
                placeholder="Jump to page, project, or action…"
                className="w-full bg-transparent text-sm text-mist-100 placeholder:text-mist-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={closePalette}
                aria-label="Close command palette"
                className="rounded-md border border-line p-1 text-mist-400 transition-colors hover:text-mist-100"
              >
                <X className="size-3.5" />
              </button>
            </div>

            {eggText && (
              <div className="border-b border-line bg-violet-500/10 px-4 py-3 font-mono text-xs text-cyan-400">
                <span className="text-violet-400">$ whoami → </span>
                {eggText}
              </div>
            )}

            {/* Results */}
            <div className="max-h-[54vh] overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <div className="py-10 text-center font-mono text-xs text-mist-500">
                  No matching commands for &ldquo;{query}&rdquo;
                </div>
              ) : (
                filtered.map((item, idx) => {
                  const selected = idx === activeIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onMouseEnter={() => setActiveIndex(idx)}
                      onClick={item.action}
                      className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left transition-colors ${
                        selected
                          ? "bg-gradient-to-r from-violet-500/15 to-cyan-500/10 text-mist-100"
                          : "text-mist-300 hover:bg-overlay"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-line bg-overlay text-violet-400">
                          {item.group === "Projects" ? (
                            <Code2 className="size-3.5" />
                          ) : item.id === "action-theme" ? (
                            theme === "light" ? <Moon className="size-3.5" /> : <Sun className="size-3.5" />
                          ) : item.id === "action-email" ? (
                            copiedEmail ? <Check className="size-3.5 text-cyan-400" /> : <Copy className="size-3.5" />
                          ) : item.id === "action-cv" ? (
                            <Download className="size-3.5" />
                          ) : item.id === "action-whoami" ? (
                            <Terminal className="size-3.5 text-cyan-400" />
                          ) : (
                            <Sparkles className="size-3.5" />
                          )}
                        </span>
                        <div className="min-w-0">
                          <div className="truncate text-sm font-medium">{item.title}</div>
                          <div className="truncate font-mono text-[11px] text-mist-500">
                            {item.subtitle}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="hidden rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-mist-500 sm:inline-block">
                          {item.group}
                        </span>
                        <ArrowUpRight className="size-3.5 text-mist-500" />
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer hints */}
            <div className="flex items-center justify-between border-t border-line px-4 py-2.5 font-mono text-[10px] text-mist-500">
              <div className="flex items-center gap-3">
                <span>↑↓ navigate</span>
                <span>↵ select</span>
                <span>esc close</span>
              </div>
              <span className="inline-flex items-center gap-1">
                <Command className="size-3" />K
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
