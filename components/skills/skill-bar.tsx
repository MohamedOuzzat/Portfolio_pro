"use client";

import { motion } from "framer-motion";

export function SkillBar({
  name,
  pct,
  color,
  gradientTo,
  blurb,
  delay,
}: {
  name: string;
  pct: number;
  color: string;
  gradientTo: string;
  blurb: string;
  delay: number;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm text-mist-100">
          <span
            className="inline-block size-1.5 rounded-full"
            style={{ background: color, boxShadow: `0 0 8px ${color}` }}
          />
          {name}
        </span>
        <span className="font-mono text-xs" style={{ color }}>
          {pct}%
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-ink-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${gradientTo})`,
            boxShadow: `0 0 12px ${color}66`,
          }}
        />
      </div>
      <p className="mt-1 text-[11px] text-mist-500">{blurb}</p>
    </div>
  );
}
