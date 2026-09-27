"use client";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { productInterestGroups } from "@/data/inquiry";

type Status = "idle" | "sending" | "success" | "error";

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const pathname = usePathname();

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send inquiry.");
      form.reset();
      setStatus("success");
      const productSlug = pathname.startsWith("/products/") ? pathname.split("/")[2] : undefined;
      trackEvent("contact_form_submit", {
        form_name: productSlug ? "product_inquiry" : "contact_inquiry",
        product_slug: productSlug,
      });
      setMessage("Your request has been received. Our team will review the specification and respond by email.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send inquiry.");
    }
  }

  return (
    <form className={compact ? "inquiry-form compact" : "inquiry-form"} onSubmit={submit}>
      <div className="form-grid">
        <label>
          Name *
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          Company *
          <input name="company" required autoComplete="organization" />
        </label>
        <label>
          Email *
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          Country / Market *
          <input name="country" required autoComplete="country-name" />
        </label>
        <label>
          WhatsApp / Phone
          <input name="phone" autoComplete="tel" />
        </label>
        <label>
          Product Family / Interest
          <select name="product" defaultValue="">
            <option value="" disabled hidden>Select a product family if applicable</option>
            {productInterestGroups.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.options.map((option) => <option key={option}>{option}</option>)}
              </optgroup>
            ))}
          </select>
        </label>
      </div>
      <label>
        Project requirements *
        <textarea name="requirements" required rows={compact ? 4 : 6} placeholder="Please share any available details, such as cable type, voltage, cores, conductor size, quantity, destination or required date. Partial project information is also welcome." />
      </label>
      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <button className="button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send Project Requirements"}
      </button>
      {message && <p className={`form-message ${status}`}>{message}</p>}
      <p className="form-note">Partial project information is also welcome for initial review. If available, you can also email your BOQ or specification to ziheng@huanyucable.com.</p>
    </form>
  );
}
