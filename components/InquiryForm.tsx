"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { productInterestGroups } from "@/data/inquiry";

type Status = "idle" | "sending" | "success" | "error";

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [confirmedSuccessCount, setConfirmedSuccessCount] = useState(0);
  const pathname = usePathname();
  const formStarted = useRef(false);
  const submitting = useRef(false);
  const trackedSuccessCount = useRef(0);
  const formContext = pathname === "/"
    ? "home_inquiry"
    : pathname === "/contact"
      ? "contact_inquiry"
      : pathname.startsWith("/products/")
        ? "product_inquiry"
        : "site_inquiry";

  useEffect(() => {
    if (status !== "success" || confirmedSuccessCount === trackedSuccessCount.current) return;
    trackedSuccessCount.current = confirmedSuccessCount;
    try {
      trackEvent("rfq_submit_success", { form_context: formContext });
    } catch {
      // Analytics must not affect the inquiry result shown to the visitor.
    }
  }, [status, confirmedSuccessCount, formContext]);

  function startOnMeaningfulChange(event: FormEvent<HTMLFormElement>) {
    if (formStarted.current) return;
    const field = event.target;
    if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement || field instanceof HTMLSelectElement)) return;
    if (!(["name", "company", "email", "country", "phone", "product", "requirements"].includes(field.name))) return;
    if (!field.value.trim()) return;

    formStarted.current = true;
    try {
      trackEvent("rfq_form_start", { form_context: formContext });
    } catch {
      // Analytics must not interrupt typing or form submission.
    }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
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
      setMessage("Your request has been received. Our team will review the specification and respond by email.");
      if (result?.submissionConfirmed === true) setConfirmedSuccessCount((count) => count + 1);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send inquiry.");
    } finally {
      submitting.current = false;
    }
  }

  return (
    <form className={compact ? "inquiry-form compact" : "inquiry-form"} onSubmit={submit} onInput={startOnMeaningfulChange} onChange={startOnMeaningfulChange}>
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
