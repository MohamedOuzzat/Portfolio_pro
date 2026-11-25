"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "portfolio-booted";

/**
 * Editorial first-visit preloader curtain.
 * Runs quickly once per browser session, never blocks SSR content, and
 * immediately bypasses when `prefers-reduced-motion` is enabled.
 */
export function Preloader() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    try {
      if (window.sessionStorage.getItem(STORAGE_KEY) === "1") return;
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      return;
    }

    const start = performance.now();
    const duration = 760;
    let raf = 0;
    let hideTimer: ReturnType<typeof setTimeout> | null = null;

    const tick = (now: number) => {
      setVisible(true);
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        hideTimer = setTimeout(() => setVisible(false), 180);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-6%" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-[#06060b] px-6 text-[#f3f4f8]"
        >
          <div className="w-full max-w-xs">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-3xl font-bold tracking-tight">
                MO<span className="text-gradient">.</span>
              </span>
              <span className="font-mono text-xs tabular-nums text-cyan-400">
                {String(progress).padStart(3, "0")}%
              </span>
            </div>

            <div className="mt-4 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full origin-left bg-gradient-to-r from-violet-500 to-cyan-400"
                style={{ transform: `scaleX(${progress / 100})` }}
              />
            </div>

            <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
              <span>Mohamed Ouzzat</span>
              <span>Marrakech // MA</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
