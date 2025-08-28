import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import { Resend } from "resend";

const schema = z.object({
  mode: z.enum(["contact", "preorder"]).default("preorder"),
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional().or(z.literal("")),
  message: z.string().optional().or(z.literal("")),
  eventId: z.string().nullable().optional(),
  items: z.array(z.object({ beerId: z.string(), qty: z.number().int().min(1).max(99) })).optional(),
  toEmail: z.string().email().optional(),
  turnstileToken: z.string().min(5)
});

async function verifyTurnstile(token: string, ip?: string) {
  const form = new URLSearchParams();
  form.append("secret", process.env.TURNSTILE_SECRET_KEY || "");
  form.append("response", token);
  if (ip) form.append("remoteip", ip);
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form
  });
  const data = await res.json();
  return !!data.success;
}

function renderEmailHTML(input: z.infer<typeof schema>) {
  const rows = [
    `<p><strong>Name:</strong> ${input.name}</p>`,
    `<p><strong>E-Mail:</strong> ${input.email}${input.phone ? `, Tel: ${input.phone}` : ""}</p>`,
    input.mode === "preorder" && input.eventId ? `<p><strong>Termin-ID:</strong> ${input.eventId}</p>` : "",
    input.items?.length ? `<p><strong>Vorbestellung:</strong><br/>${input.items.map(i => `• ${i.beerId} × ${i.qty}`).join("<br/>")}</p>` : "",
    input.message ? `<p><strong>Nachricht:</strong><br/>${input.message}</p>` : ""
  ].join("");
  return `<div>${rows}</div>`;
}

async function sendMail(input: z.infer<typeof schema>) {
  const to = input.toEmail || process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || input.email;
  if (!to) throw new Error("Missing CONTACT_TO_EMAIL");

  const subject = input.mode === "preorder" ? "Neue Vorbestellung" : "Neue Kontaktanfrage";
  const html = renderEmailHTML(input);

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from,
      to,
      subject,
      html
    });
    // customer copy
    await resend.emails.send({
      from,
      to: input.email,
      subject: `${subject} – Kopie deiner Anfrage`,
      html
    });
    return;
  }

  // SMTP fallback
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: process.env.SMTP_USER
      ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      : undefined
  });
  await transporter.sendMail({ from, to, subject, html });
  await transporter.sendMail({ from, to: input.email, subject: `${subject} – Kopie deiner Anfrage`, html });
}

export async function POST(req: NextRequest) {
  try {
    const input = schema.parse(await req.json());
    const ok = await verifyTurnstile(input.turnstileToken, req.ip ?? undefined);
    if (!ok) return NextResponse.json({ error: "Turnstile-Validierung fehlgeschlagen" }, { status: 400 });

    await sendMail(input);
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Fehler" }, { status: 400 });
  }
}

