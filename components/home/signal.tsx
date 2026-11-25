"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  CheckCircle2,
  Loader2,
  Send,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Magnetic } from "@/components/motion/magnetic";
import { site } from "@/data/site";

type FormState = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof FormState, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const terminalPrompts: Record<keyof FormState, { label: string; command: string }> = {
  name: { label: "Your name", command: "--from" },
  email: { label: "you@example.com", command: "--reply-to" },
  subject: { label: "Project or collaboration", command: "--subject" },
  message: { label: "Tell me about your project…", command: "--body" },
};

export function Signal() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [submitError, setSubmitError] = useState("");

  const validate = (): Errors => {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Name required";
    if (!EMAIL_RE.test(form.email)) e.email = "Valid email required";
    if (form.message.trim().length < 10) e.message = "10+ characters";
    return e;
  };

  const onChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    setSubmitError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        }),
      });
      const data = (await res.json()) as {
        ok: boolean;
        errors?: string[];
      };
      if (!res.ok || !data.ok) {
        setSubmitError(
          data.errors?.[0] ?? "Could not send your message. Please try again."
        );
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setSubmitError("Could not send your message. Please try again.");
      setStatus("error");
    }
  };

  const fieldError = (key: keyof FormState) =>
    errors[key] ? (
      <span className="mt-1 block font-mono text-[10px] text-red-400">
        {"// error: "}
        {errors[key]}
      </span>
    ) : null;

  return (
    <section className="relative overflow-hidden border-t border-line bg-ink-900/25 py-24 md:py-32">
      <div aria-hidden="true" className="neural-grid absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14 max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400">
            <span className="h-px w-8 bg-cyan-500/50" />
            {"// establish connection"}
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-mist-100 md:text-5xl">
            Transmit a <span className="text-gradient">signal</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mist-400 md:text-lg">
            Open to internships, collaborations and freelance work. Drop a message and I&apos;ll
            respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Terminal-style form (dark surface across both themes) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <form
              onSubmit={submit}
              noValidate
              className="surface-terminal overflow-hidden rounded-2xl border border-violet-500/25 shadow-soft"
            >
              <div className="surface-terminal-bar flex items-center gap-2 border-b border-white/10 px-5 py-3">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-[#FF5F56]/85" />
                  <span className="size-2.5 rounded-full bg-[#FFBD2E]/85" />
                  <span className="size-2.5 rounded-full bg-[#27C93F]/85" />
                </div>
                <span className="ml-3 font-mono text-[11px] text-white/50">
                  transmit.sh — new message
                </span>
              </div>

              <div className="space-y-3 p-6 font-mono text-sm">
                <div className="text-white/45">
                  <span className="text-cyan-400">$</span> ./send_message.sh \
                </div>

                {(Object.keys(terminalPrompts) as (keyof FormState)[]).map((field) => {
                  const { command, label } = terminalPrompts[field];
                  const isTextarea = field === "message";
                  const shared = {
                    id: `signal-${field}`,
                    name: field,
                    value: form[field],
                    onChange: onChange(field),
                    "aria-label": label,
                    "aria-invalid": !!errors[field],
                    placeholder: label,
                    className:
                      "w-full rounded-md bg-white/[0.03] px-2.5 py-1.5 font-mono text-white placeholder:text-white/30 focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-colors",
                  };

                  return (
                    <div key={field} className="space-y-1">
                      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center">
                        <label
                          htmlFor={`signal-${field}`}
                          className="shrink-0 text-xs text-violet-400 sm:w-28"
                        >
                          {command}=
                        </label>
                        {!isTextarea ? (
                          <input type="text" {...shared} />
                        ) : (
                          <textarea rows={4} {...shared} />
                        )}
                      </div>
                      {fieldError(field)}
                    </div>
                  );
                })}

                <div className="flex items-center gap-3 pt-2">
                  <span className="text-cyan-400">$</span>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    disabled={status === "sending" || status === "sent"}
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-400/12 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition-all hover:-translate-y-0.5 hover:bg-cyan-400/20 hover:shadow-glow-cyan disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" /> transmitting…
                      </>
                    ) : status === "sent" ? (
                      <>
                        <CheckCircle2 className="size-4" /> message sent
                      </>
                    ) : (
                      <>
                        [TRANSMIT]
                        <Send className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </motion.button>
                </div>
                {status === "error" && submitError && (
                  <div className="pt-2 font-mono text-xs text-red-400">
                    {"// error: "}
                    {submitError}
                  </div>
                )}
              </div>
            </form>
          </motion.div>

          {/* Direct contact */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.1 }}
            className="space-y-5"
          >
            <div className="glass-card rounded-2xl p-7">
              <h3 className="font-display text-lg font-bold text-mist-100">
                Direct channels
              </h3>
              <div className="mt-5 space-y-4">
                {[
                  {
                    icon: <Mail className="size-4" />,
                    label: "Email",
                    value: site.email,
                    href: `mailto:${site.email}`,
                  },
                  {
                    icon: <MapPin className="size-4" />,
                    label: "Location",
                    value: site.location,
                    href: undefined,
                    sub: site.nationality,
                  },
                  {
                    icon: <Clock className="size-4" />,
                    label: "Response time",
                    value: "Within 24 hours",
                    href: undefined,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-400">
                      {item.icon}
                    </span>
                    <div>
                      <div className="text-xs text-mist-500">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-mist-100 transition-colors hover:text-cyan-400"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm font-medium text-mist-100">
                          {item.value}
                          {item.sub && (
                            <span className="mt-0.5 block font-mono text-[10px] text-mist-500">
                              {item.sub}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-2 border-t border-line pt-5">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-line bg-overlay px-4 py-2.5 text-sm font-medium text-mist-100 transition-all hover:border-violet-500/50 hover:text-violet-400"
                >
                  <GithubIcon className="size-4" /> GitHub
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-line bg-overlay px-4 py-2.5 text-sm font-medium text-mist-100 transition-all hover:border-cyan-500/50 hover:text-cyan-400"
                >
                  <LinkedinIcon className="size-4" /> LinkedIn
                </a>
              </div>
            </div>

            <Magnetic strength={0.18} className="block w-full">
              <a
                href={site.cv}
                download
                className="glass-card group flex items-center justify-between rounded-2xl border-violet-500/25 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 px-6 py-5 transition-all hover:border-cyan-400/45"
              >
                <div>
                  <div className="font-display text-lg font-bold text-mist-100">
                    Need the full picture?
                  </div>
                  <div className="mt-1 font-mono text-xs text-mist-400">
                    Download my résumé as PDF
                  </div>
                </div>
                <ArrowUpRight className="size-5 text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
