"use client";

import { cn } from "@/lib/utils";

export function Aurora({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute -top-1/4 left-[6%] h-[58vh] w-[46vw] rounded-full bg-violet-600/20 blur-[130px] animate-aurora" />
      <div className="absolute top-[18%] right-[4%] h-[52vh] w-[40vw] rounded-full bg-cyan-500/15 blur-[130px] animate-aurora [animation-delay:-6s]" />
      <div className="absolute bottom-[-12%] left-[32%] h-[44vh] w-[36vw] rounded-full bg-indigo-500/15 blur-[130px] animate-aurora [animation-delay:-3s]" />
    </div>
  );
}
