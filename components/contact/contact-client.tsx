"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Loader2,
  MapPin,
  Mail,
  Send,
  Clock,
  Globe,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { PageHeader } from "@/components/layout/page-header";
import { FadeUp } from "@/components/motion/fade";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, contactInfo } from "@/data/faqs";

type FormState = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof FormState, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactClient() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const validate = (): Errors => {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Please enter your name.";
    if (!EMAIL_RE.test(form.email)) e.email = "Please enter a valid email.";
    if (form.message.trim().length < 10) e.message = "Tell me a little more (10+ characters).";
    return e;
  };

  const onChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    const subject = encodeURIComponent(form.subject || `Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    // Email integration via mailto — swap for an API route or service if desired.
    setTimeout(() => {
      window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
    }, 900);
  };

  return (
    <>
      <PageHeader
        eyebrow="// contact"
        title="Let's build something"
        highlight="unforgettable"
        description="Open to internships, collaborations, and freelance projects. Fill the form and I'll reply within 24 hours."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1.1fr_0.9fr] md:px-8">
          {/* Form */}
          <FadeUp>
            <form onSubmit={submit} className="glass-card relative overflow-hidden rounded-2xl p-8" noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="relative">
                  <Input
                    id="name"
                    value={form.name}
                    onChange={onChange("name")}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    className={`peer pt-6 ${errors.name ? "border-red-500/60" : ""}`}
                  />
                  <Label htmlFor="name" className="absolute left-3.5 top-2 text-[11px] text-primary-400">
                    Name
                  </Label>
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={onChange("email")}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    className={`peer pt-6 ${errors.email ? "border-red-500/60" : ""}`}
                  />
                  <Label htmlFor="email" className="absolute left-3.5 top-2 text-[11px] text-primary-400">
                    Email
                  </Label>
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>
              <div className="relative mt-6">
                <Input
                  id="subject"
                  value={form.subject}
                  onChange={onChange("subject")}
                  placeholder="Project inquiry, internship, collaboration…"
                  className="pt-6"
                />
                <Label htmlFor="subject" className="absolute left-3.5 top-2 text-[11px] text-primary-400">
                  Subject
                </Label>
              </div>
              <div className="relative mt-6">
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={onChange("message")}
                  placeholder="Tell me about your project…"
                  rows={5}
                  aria-invalid={!!errors.message}
                  className={`pt-6 ${errors.message ? "border-red-500/60" : ""}`}
                />
                <Label htmlFor="message" className="absolute left-3.5 top-2 text-[11px] text-primary-400">
                  Message
                </Label>
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              <div className="mt-8">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  disabled={status !== "idle"}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-primary-500 to-violet-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary-500/25 transition-all hover:-translate-y-0.5 hover:shadow-glow disabled:opacity-80"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" /> Sending…
                    </>
                  ) : status === "sent" ? (
                    <>
                      <CheckCircle2 className="size-4" /> Opening your mail client…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </motion.button>
                <AnimatePresence>
                  {status === "sent" && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 text-center text-sm text-aqua-400"
                    >
                      Thanks for reaching out — I&apos;ll get back to you shortly!
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </FadeUp>

          {/* Info + map */}
          <div className="space-y-6">
            <FadeUp delay={0.1}>
              <div className="glass-card rounded-2xl p-7">
                <h3 className="font-display text-lg font-bold text-mist-100">Direct contact</h3>
                <div className="mt-5 space-y-4">
                  {[
                    { icon: <Mail className="size-4" />, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
                    { icon: <MapPin className="size-4" />, label: "Location", value: contactInfo.location, href: undefined },
                    { icon: <Clock className="size-4" />, label: "Response time", value: contactInfo.responseTime, href: undefined },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-lg border border-primary-500/30 bg-primary-500/10 text-primary-400">
                        {item.icon}
                      </span>
                      <div>
                        <div className="text-xs text-mist-500">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-medium text-mist-100 transition-colors hover:text-primary-400">
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-sm font-medium text-mist-100">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex gap-2 border-t border-white/8 pt-5">
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-mist-100 transition-all hover:border-primary-500/50 hover:text-primary-400"
                  >
                    <GithubIcon className="size-4" /> GitHub
                  </a>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-mist-100 transition-all hover:border-primary-500/50 hover:text-primary-400"
                  >
                    <LinkedinIcon className="size-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="glass-card overflow-hidden rounded-2xl">
                <div className="flex items-center gap-2 border-b border-white/8 px-6 py-4">
                  <Globe className="size-4 text-mist-400" />
                  <span className="font-mono text-xs text-mist-400">
                    Marrakech, Morocco · UTC+1
                  </span>
                </div>
                <div className="relative h-64 w-full">
                  <iframe
                    title="Map — Marrakech, Morocco"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-8.0611%2C31.5845%2C-7.9011%2C31.6745&layer=mapnik&marker=31.6295%2C-7.9811"
                    className="h-full w-full border-0 grayscale-[0.4] contrast-[0.9] invert-[0.88] hue-rotate-180"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/8 bg-ink-900/40 py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <div className="mb-10 text-center">
            <div className="mb-4 flex items-center justify-center gap-2 font-mono text-xs tracking-widest text-primary-400 uppercase">
              <span className="h-px w-8 bg-primary-500/50" />
              faq
              <span className="h-px w-8 bg-primary-500/50" />
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-mist-100">
              Frequently asked <span className="text-gradient">questions</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((f, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <div className="rounded-xl border border-white/8 bg-ink-900/60 px-6">
                  <AccordionItem value={`faq-${i}`} className="border-0">
                    <AccordionTrigger className="py-5 text-base">{f.question}</AccordionTrigger>
                    <AccordionContent>{f.answer}</AccordionContent>
                  </AccordionItem>
                </div>
              </FadeUp>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
