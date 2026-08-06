"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

const container = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  }),
};

const word = {
  hidden: { opacity: 0, y: "0.6em", filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function WordReveal({
  text,
  className,
  as: Tag = "span",
  stagger = 0.045,
}: {
  text: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  stagger?: number;
}) {
  const MotionTag = motion(Tag) as typeof motion.span;
  const words = text.split(" ");

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={stagger}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          aria-hidden="true"
        >
          <motion.span className="inline-block will-change-transform" variants={word}>
            {w}
            {"\u00A0"}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

export function LetterReveal({
  text,
  className,
  as: Tag = "span",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  delay?: number;
}) {
  const MotionTag = motion(Tag) as typeof motion.span;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.035, delayChildren: delay } },
      }}
      aria-label={text}
    >
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          aria-hidden="true"
          variants={{
            hidden: { opacity: 0, y: 24, rotateX: 90 },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </MotionTag>
  );
}

export function BlurReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(14px)", y: 14 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
