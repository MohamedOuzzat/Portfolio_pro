"use client";

import { motion } from "framer-motion";

const nodes = [
  { top: "18%", left: "12%", delay: "0s" },
  { top: "45%", left: "26%", delay: "1.2s" },
  { top: "70%", left: "18%", delay: "0.6s" },
  { top: "25%", left: "78%", delay: "1.8s" },
  { top: "60%", left: "88%", delay: "0.3s" },
  { top: "82%", left: "70%", delay: "2.1s" },
];

export function NeuralDivider() {
  return (
    <div aria-hidden className="relative flex h-10 items-center justify-center overflow-hidden">
      {/* Connecting line */}
      <svg className="absolute inset-0 h-full w-full opacity-40">
        <line
          x1="0%"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke="url(#divider-grad)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        <defs>
          <linearGradient id="divider-grad" x1="0" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="#8b5cf6" />
            <stop offset="70%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* Pulsing nodes */}
      {nodes.map((n, i) => (
        <motion.span
          key={i}
          className="absolute size-1.5 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400"
          style={{ top: n.top, left: n.left, animationDelay: n.delay }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.6, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: parseFloat(n.delay) }}
        />
      ))}

      {/* Center node */}
      <span className="absolute left-1/2 top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute inline-flex size-2.5 animate-ping rounded-full bg-violet-400 opacity-50" />
        <span className="relative block size-2.5 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500" />
      </span>
    </div>
  );
}
