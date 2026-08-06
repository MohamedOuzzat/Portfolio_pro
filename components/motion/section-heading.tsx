"use client";

import { cn } from "@/lib/utils";
import { BlurReveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <BlurReveal
      className={cn(
        "mb-14 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <div
        className={cn(
          "mb-4 flex items-center gap-2 font-mono text-xs tracking-widest text-primary-400 uppercase",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-px w-8 bg-primary-500/50" />
        {eyebrow}
        <span className="h-px w-8 bg-primary-500/50" />
      </div>
      <h2 className="font-display text-4xl font-bold tracking-tight text-mist-100 md:text-5xl">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="text-gradient">{highlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-mist-400 md:text-lg">
          {description}
        </p>
      )}
    </BlurReveal>
  );
}
