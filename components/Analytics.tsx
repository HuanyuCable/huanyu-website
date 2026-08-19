"use client";

import Script from "next/script";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const hasValidMeasurementId = Boolean(measurementId && /^G-[A-Z0-9]+$/i.test(measurementId));

export function Analytics() {
  useEffect(() => {
    if (!hasValidMeasurementId) return;

    function handleTrackedClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest<HTMLAnchorElement>('a[data-ga-event="rfq_click"]');
      if (!link) return;

      trackEvent("rfq_click", {
        cta_location: link.dataset.gaCtaLocation,
        product_slug: link.dataset.gaProductSlug,
      });
    }

    document.addEventListener("click", handleTrackedClick);
    return () => document.removeEventListener("click", handleTrackedClick);
  }, []);

  if (!hasValidMeasurementId) return null;

  return (
    <>
      <Script id="google-analytics-loader" src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${measurementId}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}
