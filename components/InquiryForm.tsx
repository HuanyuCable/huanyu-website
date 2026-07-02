"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

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
            <option value="">Select a product family if applicable</option>
            <option>Low Voltage Armoured Power Cables</option>
            <option>Low Voltage XLPE Power Cables</option>
            <option>Medium Voltage Power Cables</option>
            <option>LSZH & Fire-safe Cables</option>
            <option>Building Wires & Flexible Cables</option>
            <option>Control & Instrumentation Cables</option>
            <option>Overhead Insulated Cables</option>
            <option>ACSR Bare Overhead Conductors</option>
            <option>Other / Project-specific Requirement</option>
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
