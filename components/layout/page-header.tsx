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
        "relative overflow-hidden border-b border-white/8 pt-36 pb-20",
        className
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <Aurora className="opacity-60" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <BlurReveal>
          <div className="mb-5 flex items-center gap-2 font-mono text-xs tracking-widest text-primary-400 uppercase">
            <span className="h-px w-10 bg-primary-500/50" />
            {eyebrow}
          </div>
          <h1 className="font-display max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-mist-100 md:text-6xl">
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
