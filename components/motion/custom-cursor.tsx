"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function subscribeCursorSupport(callback: () => void) {
  const fine = window.matchMedia("(pointer: fine)");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  fine.addEventListener("change", callback);
  reduced.addEventListener("change", callback);
  return () => {
    fine.removeEventListener("change", callback);
    reduced.removeEventListener("change", callback);
  };
}

function getCursorSupport() {
  return (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * GPU-accelerated custom magnetic cursor for fine-pointer desktop devices.
 * Automatically disables itself on touch screens and under `prefers-reduced-motion`.
 */
export function CustomCursor() {
  const enabled = useSyncExternalStore(
    subscribeCursorSupport,
    getCursorSupport,
    () => false
  );
  const [pressed, setPressed] = useState(false);
  const [hoverState, setHoverState] = useState<{ active: boolean; label: string | null }>({
    active: false,
    label: null,
  });

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);

  const ringX = useSpring(mx, { stiffness: 280, damping: 26, mass: 0.45 });
  const ringY = useSpring(my, { stiffness: 280, damping: 26, mass: 0.45 });
  const dotX = useSpring(mx, { stiffness: 800, damping: 38 });
  const dotY = useSpring(my, { stiffness: 800, damping: 38 });

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);

      const target = (e.target as HTMLElement | null)?.closest(
        'a, button, [role="button"], input, textarea, [data-cursor]'
      ) as HTMLElement | null;

      if (target) {
        const label = target.getAttribute("data-cursor-label");
        setHoverState({ active: true, label });
      } else {
        setHoverState({ active: false, label: null });
      }
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => {
      mx.set(-100);
      my.set(-100);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, mx, my]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[95]">
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hoverState.label ? 68 : hoverState.active ? 44 : 30,
          height: hoverState.label ? 68 : hoverState.active ? 44 : 30,
          scale: pressed ? 0.82 : 1,
          borderColor: hoverState.active
            ? "rgba(34, 211, 238, 0.75)"
            : "rgba(139, 92, 246, 0.45)",
          backgroundColor: hoverState.label
            ? "rgba(139, 92, 246, 0.22)"
            : hoverState.active
              ? "rgba(139, 92, 246, 0.08)"
              : "transparent",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border backdrop-blur-[1px]"
      >
        {hoverState.label && (
          <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-white">
            {hoverState.label}
          </span>
        )}
      </motion.div>

      <motion.div
        style={{ x: dotX, y: dotY }}
        animate={{
          scale: pressed ? 1.4 : hoverState.active ? 0.5 : 1,
          opacity: hoverState.label ? 0 : 1,
        }}
        className="-translate-x-1/2 -translate-y-1/2 size-1.5 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400"
      />
    </div>
  );
}
