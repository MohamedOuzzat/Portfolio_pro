"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect, type ReactNode } from "react";

/**
 * Ambient mouse-following spotlight gradient (tracks both X and Y smoothly).
 */
export function MouseLight({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  const mx = useMotionValue(-600);
  const my = useMotionValue(-600);
  const sx = useSpring(mx, { stiffness: 110, damping: 26 });
  const sy = useSpring(my, { stiffness: 110, damping: 26 });

  const bg = useMotionTemplate`radial-gradient(640px circle at ${sx}px ${sy}px, rgba(139, 92, 246, 0.11), rgba(34, 211, 238, 0.04) 40%, transparent 70%)`;

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <motion.div style={{ background: bg }} className={className}>
      {children}
    </motion.div>
  );
}
