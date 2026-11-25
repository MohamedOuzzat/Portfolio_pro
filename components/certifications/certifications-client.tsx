"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Download,
  ExternalLink,
  BadgeCheck,
  Eye,
  CheckCircle2,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Counter } from "@/components/motion/counter";
import { GlowCard } from "@/components/motion/glow-card";
import { certifications, certificationsStats } from "@/data/certifications";

export function CertificationsClient() {
  const [, setActive] = useState<(typeof certifications)[number] | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="// certifications"
        title="Credentials &"
        highlight="Certifications"
        description="Proof of learning, verified and earned — click any card to preview, download, or verify."
      />

      <section className="border-b border-line bg-ink-900/25 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-8 px-5 md:px-8">
          {certificationsStats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-bold text-gradient">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-mist-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2 md:px-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <GlowCard className="h-full overflow-hidden">
                <div className="relative overflow-hidden">
                  <div className="transition-transform duration-700 group-hover:scale-105">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={600}
                      height={400}
                      sizes="(max-width: 768px) 100vw, 560px"
                      className="h-56 w-full object-cover"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06060b]/90 via-[#06060b]/25 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg border border-white/15 bg-[#08080f]/80 px-3 py-1.5 backdrop-blur-md">
                    <BadgeCheck className="size-4 text-cyan-400" />
                    <span className="font-mono text-xs font-semibold text-white">
                      {cert.issuer} · {cert.year}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <h2 className="font-display text-xl font-bold text-mist-100 transition-colors group-hover:text-violet-400">
                    {cert.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-mist-400">
                    {cert.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 font-mono text-xs text-violet-400">
                    <CheckCircle2 className="size-3.5" />
                    {cert.skill}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          type="button"
                          onClick={() => setActive(cert)}
                          className="inline-flex items-center gap-2 rounded-xl border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-xs font-semibold text-violet-400 transition-all hover:bg-violet-500/20"
                        >
                          <Eye className="size-3.5" /> Preview
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl border-line bg-ink-900 text-mist-100">
                        <DialogHeader>
                          <DialogTitle className="font-display text-xl text-mist-100">
                            {cert.title}
                          </DialogTitle>
                          <DialogDescription>
                            {cert.issuer} · {cert.year}
                          </DialogDescription>
                        </DialogHeader>
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          width={800}
                          height={600}
                          sizes="90vw"
                          className="w-full rounded-xl border border-line object-contain"
                        />
                      </DialogContent>
                    </Dialog>
                    <a
                      href={cert.image}
                      download
                      className="inline-flex items-center gap-2 rounded-xl border border-line bg-overlay px-4 py-2 text-xs font-semibold text-mist-100 transition-all hover:border-violet-500/50 hover:text-violet-400"
                    >
                      <Download className="size-3.5" /> Download
                    </a>
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-line bg-overlay px-4 py-2 text-xs font-semibold text-mist-100 transition-all hover:border-cyan-500/50 hover:text-cyan-400"
                    >
                      <ExternalLink className="size-3.5" /> Verify
                    </a>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
