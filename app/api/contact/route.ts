import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let transporter: Transporter | null = null;

function getTransporter(): Transporter | null {
  const host = process.env.BREVO_SMTP_HOST;
  const port = Number(process.env.BREVO_SMTP_PORT ?? 587);
  const user = process.env.BREVO_SMTP_USER;
  const pass = process.env.BREVO_SMTP_KEY;

  if (!host || !user || !pass) return null;

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
  }
  return transporter;
}

function validate(payload: unknown): { ok: true; data: ContactPayload } | { ok: false; errors: string[] } {
  if (typeof payload !== "object" || payload === null) {
    return { ok: false, errors: ["Invalid payload."] };
  }
  const { name, email, subject, message } = payload as Record<string, unknown>;
  const errors: string[] = [];

  const nameStr = typeof name === "string" ? name.trim() : "";
  const emailStr = typeof email === "string" ? email.trim() : "";
  const messageStr = typeof message === "string" ? message.trim() : "";
  const subjectStr = typeof subject === "string" ? subject.trim() : "";

  if (nameStr.length < 2) {
    errors.push("Please enter your name.");
  }
  if (!EMAIL_RE.test(emailStr)) {
    errors.push("Please enter a valid email.");
  }
  if (messageStr.length < 10) {
    errors.push("Tell me a little more (10+ characters).");
  }

  return errors.length > 0
    ? { ok: false, errors }
    : {
        ok: true,
        data: {
          name: nameStr,
          email: emailStr,
          subject: subjectStr,
          message: messageStr,
        },
      };
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, errors: ["Could not read request body."] },
      { status: 400 }
    );
  }

  const result = validate(payload);
  if (!result.ok) {
    return NextResponse.json({ ok: false, errors: result.errors }, { status: 400 });
  }

  const tr = getTransporter();
  if (!tr) {
    return NextResponse.json(
      { ok: false, errors: ["Email service is not configured on the server."] },
      { status: 500 }
    );
  }

  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!to || !from) {
    return NextResponse.json(
      { ok: false, errors: ["Email service is not configured on the server."] },
      { status: 500 }
    );
  }

  const { name, email, subject = "", message } = result.data;

  try {
    await tr.sendMail({
      from: `"${name}" <${from}>`,
      to,
      replyTo: email,
      subject: subject || `Portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#1a1a2e">
          <h2 style="margin:0 0 12px">Portfolio inquiry</h2>
          <p style="margin:0 0 8px"><strong>Name:</strong> ${name.replace(/[<>&]/g, "")}</p>
          <p style="margin:0 0 8px"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin:0 0 20px"><strong>Subject:</strong> ${subject.replace(/[<>&]/g, "") || "(none)"}</p>
          <p style="margin:0;white-space:pre-wrap">${message.replace(/[<>&]/g, "")}</p>
        </div>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return NextResponse.json(
      { ok: false, errors: ["Could not send your message. Please try again."] },
      { status: 500 }
    );
  }
}