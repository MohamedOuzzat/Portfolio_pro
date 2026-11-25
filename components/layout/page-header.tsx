import { Aurora } from "@/components/motion/aurora";
import { BlurReveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  highlight,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-line pb-20 pt-36",
        className
      )}
    >
      <div aria-hidden="true" className="neural-grid absolute inset-0 opacity-60" />
      <Aurora className="opacity-70" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <BlurReveal>
          <div className="mb-5 flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-cyan-400">
            <span className="h-px w-10 bg-gradient-to-r from-violet-500 to-cyan-400" />
            {eyebrow}
          </div>
          <h1 className="font-display max-w-3xl text-5xl font-bold leading-[1.03] tracking-[-0.03em] text-mist-100 md:text-6xl">
            {title}
            {highlight && (
              <>
                {" "}
                <span className="text-gradient">{highlight}</span>
              </>
            )}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist-400 md:text-lg">
              {description}
            </p>
          )}
        </BlurReveal>
      </div>
    </section>
  );
}
