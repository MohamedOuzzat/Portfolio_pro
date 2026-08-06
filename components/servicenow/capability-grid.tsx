"use client";

import { motion } from "framer-motion";
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
          <FadeUp key={cap.name} delay={(i % 3) * 0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              className="group relative h-full overflow-hidden rounded-xl border border-white/8 bg-ink-900/60 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-aqua-400/40"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-aqua-400/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="flex size-11 items-center justify-center rounded-lg border border-aqua-400/25 bg-aqua-400/10 text-aqua-400 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-mist-100 transition-colors group-hover:text-aqua-400">
                {cap.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-400">{cap.desc}</p>
            </motion.div>
          </FadeUp>
        );
      })}
    </div>
  );
}
