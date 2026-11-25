"use client";

import {
  Award,
  ShieldCheck,
  Network,
  Boxes,
  Radar,
  Workflow,
  FileCode2,
  Settings,
  MonitorSmartphone,
  ShoppingBag,
  Plug,
  Waypoints,
  type LucideIcon,
} from "lucide-react";
import { FadeUp } from "@/components/motion/fade";
import { GlowCard } from "@/components/motion/glow-card";
import { snCapabilities } from "@/data/servicenow";

const iconMap: Record<string, LucideIcon> = {
  cert: Award,
  itsm: ShieldCheck,
  cmdb: Network,
  csdm: Boxes,
  discovery: Radar,
  flow: Workflow,
  script: FileCode2,
  rules: Settings,
  client: MonitorSmartphone,
  catalog: ShoppingBag,
  rest: Plug,
  hub: Waypoints,
};

export function CapabilityGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {snCapabilities.map((cap, i) => {
        const Icon = iconMap[cap.icon] ?? Award;
        return (
          <FadeUp key={cap.name} delay={(i % 3) * 0.06} className="h-full">
            <GlowCard
              color="rgba(34, 211, 238, 0.2)"
              className="h-full p-6 hover:border-cyan-400/40"
            >
              <div className="flex size-11 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-400 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-mist-100 transition-colors group-hover:text-cyan-400">
                {cap.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-400">
                {cap.desc}
              </p>
            </GlowCard>
          </FadeUp>
        );
      })}
    </div>
  );
}
