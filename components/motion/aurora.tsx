"use client";

import { cn } from "@/lib/utils";

export function Aurora({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute -top-1/4 left-[8%] h-[60vh] w-[45vw] rounded-full bg-primary-600/20 blur-[120px] animate-aurora" />
      <div className="absolute top-[20%] right-[5%] h-[55vh] w-[40vw] rounded-full bg-violet-500/20 blur-[120px] animate-aurora [animation-delay:-6s]" />
      <div className="absolute bottom-[-10%] left-[35%] h-[45vh] w-[35vw] rounded-full bg-aqua-400/10 blur-[120px] animate-aurora [animation-delay:-3s]" />
    </div>
  );
}
