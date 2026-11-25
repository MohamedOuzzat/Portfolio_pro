"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Fixed top scroll-progress hairline driven by GPU-composited scaleX.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2.5px] origin-left bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]"
    />
  );
}
