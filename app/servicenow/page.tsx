import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Trophy, Cpu } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { FadeUp } from "@/components/motion/fade";
import { Counter } from "@/components/motion/counter";
import { Parallax } from "@/components/motion/parallax";
import { CapabilityGrid } from "@/components/servicenow/capability-grid";
import { FlowDiagram } from "@/components/servicenow/flow-diagram";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, personJsonLd } from "@/lib/seo";
import { snStats } from "@/data/servicenow";

export const metadata: Metadata = buildMetadata({
  title: "ServiceNow — Mohamed Ouzzat, CSA Certified ServiceNow Developer",
  description:
    "Mohamed Ouzzat — CSA-certified ServiceNow Developer. ITSM, CMDB, Flow Designer automation, Service Portal widgets and enterprise ServiceNow solutions built at UX4MATION.",
  path: "/servicenow",
  keywords: [
    "Mohamed Ouzzat ServiceNow Developer",
    "ServiceNow developer Morocco",
    "ServiceNow CSA",
    "ITSM automation",
    "Flow Designer",
  ],
});

export default function ServiceNowPage() {
  return (
    <>
      <JsonLd data={personJsonLd()} />
      <PageHeader
        eyebrow="// servicenow"
        title="Enterprise ServiceNow"
        highlight="Dashboard"
        description="A CSA-certified developer's view of the platform — capabilities, automation flows, and the work shipped at UX4MATION."
      />

      {/* Stats */}
      <section className="border-b border-white/8 bg-ink-900/40 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-8">
          {snStats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.08} className="text-center">
              <div className="font-display text-4xl font-bold text-gradient">
                <Counter target={s.value} suffix={s.suffix} decimals={s.value % 1 !== 0 ? 1 : 0} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.14em] text-mist-500">
                {s.label}
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Certification banner */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <Parallax offset={30} className="relative mx-auto w-full max-w-sm">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[1.75rem] bg-aqua-400/15 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-2xl border border-aqua-400/25 shadow-soft">
                <Image
                  src="/images/csa-cert.jpg"
                  alt="Mohamed Ouzzat ServiceNow CSA Certification — Certified System Administrator"
                  width={736}
                  height={736}
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Parallax>
            <div>
              <div className="mb-4 flex items-center gap-2 font-mono text-xs tracking-widest text-aqua-400 uppercase">
                <span className="h-px w-8 bg-aqua-400/50" />
                certification
              </div>
              <h2 className="font-display text-4xl font-bold tracking-tight text-mist-100 md:text-5xl">
                ServiceNow Certified{" "}
                <span className="text-gradient-soft">System Administrator</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-mist-400">
                Hands-on, production experience configuring the ServiceNow platform — user
                administration, table schemas, security rules, workflow automation, and the
                Service Catalog. Currently applying it every day at UX4MATION on live ITSM
                implementations.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Platform Administration",
                  "Workflows",
                  "Business Rules",
                  "Security Rules",
                  "Service Catalog",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-aqua-400/25 bg-aqua-400/8 px-3 py-1.5 font-mono text-xs text-aqua-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flow diagram */}
      <section className="border-y border-white/8 bg-ink-900/40 py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FlowDiagram />
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-14 max-w-3xl">
            <div className="mb-4 flex items-center gap-2 font-mono text-xs tracking-widest text-aqua-400 uppercase">
              <span className="h-px w-8 bg-aqua-400/50" />
              capabilities
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-mist-100 md:text-5xl">
              Platform <span className="text-gradient-soft">Capabilities</span>
            </h2>
          </div>
          <CapabilityGrid />
        </div>
      </section>

      {/* Extra widgets */}
      <section className="border-t border-white/8 bg-ink-900/40 py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <FadeUp>
              <div className="glass-card h-full rounded-xl p-7">
                <ShieldCheck className="size-6 text-aqua-400" />
                <h3 className="mt-4 font-display text-lg font-bold text-mist-100">Governance first</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-400">
                  Everything I build respects ACLs, update sets and change management — no
                  shadow config.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="glass-card h-full rounded-xl p-7">
                <Trophy className="size-6 text-aqua-400" />
                <h3 className="mt-4 font-display text-lg font-bold text-mist-100">Flow over code</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-400">
                  Flow Designer and no-code first, scripts only where genuine logic demands them.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="glass-card h-full rounded-xl p-7">
                <Cpu className="size-6 text-aqua-400" />
                <h3 className="mt-4 font-display text-lg font-bold text-mist-100">Integration ready</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-400">
                  REST APIs and IntegrationHub to connect ServiceNow with the rest of the stack.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
