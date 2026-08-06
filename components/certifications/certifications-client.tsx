"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ExternalLink, BadgeCheck, Eye, CheckCircle2 } from "lucide-react";
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
import { certifications, certificationsStats } from "@/data/certifications";

export function CertificationsClient() {
  const [active, setActive] = useState<(typeof certifications)[number] | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="// certifications"
        title="Credentials &"
        highlight="Certifications"
        description="Proof of learning, verified and earned — click any card to preview, download, or verify."
      />

      <section className="border-b border-white/8 bg-ink-900/40 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-8 px-5 md:px-8">
          {certificationsStats.map((s, i) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-bold text-gradient">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.14em] text-mist-500">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60 backdrop-blur-sm"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-primary-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative overflow-hidden">
                <div className="transition-transform duration-700 group-hover:scale-105">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={600}
                    height={400}
                    className="h-56 w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <BadgeCheck className="size-5 text-aqua-400" />
                  <span className="font-mono text-xs font-semibold text-mist-100">
                    {cert.issuer} · {cert.year}
                  </span>
                </div>
              </div>

              <div className="p-7">
                <h2 className="font-display text-xl font-bold text-mist-100 transition-colors group-hover:text-primary-400">
                  {cert.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-mist-400">{cert.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-primary-500/30 bg-primary-500/8 px-3 py-1.5 font-mono text-xs text-primary-400">
                  <CheckCircle2 className="size-3.5" />
                  {cert.skill}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        onClick={() => setActive(cert)}
                        className="inline-flex items-center gap-2 rounded-lg border border-primary-500/40 bg-primary-500/10 px-4 py-2 text-xs font-semibold text-primary-400 transition-all hover:bg-primary-500/20"
                      >
                        <Eye className="size-3.5" /> Preview
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl border-white/10 bg-ink-900 text-mist-100">
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
                        className="w-full rounded-lg border border-white/10 object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                  <a
                    href={cert.image}
                    download
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-xs font-semibold text-mist-100 transition-all hover:border-primary-500/50 hover:text-primary-400"
                  >
                    <Download className="size-3.5" /> Download
                  </a>
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-xs font-semibold text-mist-100 transition-all hover:border-primary-500/50 hover:text-primary-400"
                  >
                    <ExternalLink className="size-3.5" /> Verify
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
