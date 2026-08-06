"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, type ReactNode } from "react";

export function MouseLight({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const sx = useSpring(mx, { stiffness: 120, damping: 25 });
  const sy = useSpring(my, { stiffness: 120, damping: 25 });
  const bg = useTransform(
    sx,
    (v) =>
      `radial-gradient(600px circle at ${v}px 300px, rgba(59,130,246,0.09), transparent 60%)`
  );

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <motion.div style={{ background: bg }} className={className}>
      {children}
    </motion.div>
  );
}
