"use client";

export type AnalyticsEventName =
  | "contact_form_submit_success"
  | "product_inquiry_submit_success"
  | "email_click"
  | "phone_click"
  | "whatsapp_click"
  | "catalog_download"
  | "product_specification_download";

type AnalyticsParameters = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, parameters?: AnalyticsParameters) => void;
  }
}

export function trackEvent(eventName: AnalyticsEventName, parameters: AnalyticsParameters = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", eventName, {
    page_path: window.location.pathname,
    page_title: document.title,
    ...parameters,
  });
}
