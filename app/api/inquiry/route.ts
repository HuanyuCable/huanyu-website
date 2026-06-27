import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";

function clean(value: unknown, max = 3000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char] || char);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = clean(body.name, 120);
    const company = clean(body.company, 160);
    const email = clean(body.email, 200);
    const country = clean(body.country, 120);
    const phone = clean(body.phone, 120);
    const product = clean(body.product, 200);
    const requirements = clean(body.requirements, 5000);
    const website = clean(body.website, 200);

    if (website) return NextResponse.json({ ok: true });
    if (!name || !company || !email || !country || !requirements) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.INQUIRY_TO_EMAIL;
    const from = process.env.INQUIRY_FROM_EMAIL;
    if (!apiKey || !to || !from) {
      return NextResponse.json({ error: `The inquiry email service has not been configured. Please email ${site.email} directly.` }, { status: 503 });
    }

    const resend = new Resend(apiKey);
    const subject = `[Website Inquiry] ${company} · ${product || "Cable project"} · ${country}`;
    const html = `
      <h2>New Huanyu Cable website inquiry</h2>
      <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;border-color:#ddd">
        <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td><strong>Company</strong></td><td>${escapeHtml(company)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
        <tr><td><strong>Country</strong></td><td>${escapeHtml(country)}</td></tr>
        <tr><td><strong>Phone / WhatsApp</strong></td><td>${escapeHtml(phone || "Not provided")}</td></tr>
        <tr><td><strong>Product</strong></td><td>${escapeHtml(product || "Not selected")}</td></tr>
      </table>
      <h3>Requirements</h3>
      <p style="white-space:pre-wrap">${escapeHtml(requirements)}</p>
    `;

    const { error } = await resend.emails.send({ from, to: [to], replyTo: email, subject, html });
    if (error) throw new Error(error.message);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Inquiry submission error", error);
    return NextResponse.json({ error: `Unable to send the inquiry. Please email ${site.email} directly.` }, { status: 500 });
  }
}
