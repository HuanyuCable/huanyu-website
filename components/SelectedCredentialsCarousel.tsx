"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { credentialGroups, credentials, type Credential, type CredentialCategory } from "@/data/credentials";

const selectedSlugs = [
  "iso-9001-quality-management",
  "iso-14001-environmental-management",
  "iso-45001-occupational-health-safety",
  "iso-50001-energy-management",
  "green-factory-evaluation",
  "green-supply-chain",
  "intelligent-manufacturing-demonstration-factory",
  "ccc-building-wire-1",
];

const categoryLabels: Record<CredentialCategory, string> = {
  management: "Management System",
  "green-digital": "Green & Digital",
  recognition: "Recognition",
  "product-compliance": "Domestic Compliance",
};

const groupHrefByCategory = new Map(
  credentialGroups.map((group) => [group.id, `/quality/credentials/${group.slug}`]),
);

export function SelectedCredentialsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const selectedCredentials = useMemo(
    () => selectedSlugs.map((slug) => credentials.find((credential) => credential.slug === slug)).filter(Boolean) as Credential[],
    [],
  );

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    const firstCard = track?.querySelector<HTMLElement>(".selected-credential-card");

    if (!track || !firstCard) return;

    const gap = 18;
    const distance = firstCard.offsetWidth + gap;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - distance;

    track.scrollTo({
      left: direction > 0 && atEnd ? 0 : track.scrollLeft + distance * direction,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || paused) return;

    const timer = window.setInterval(() => {
      if (document.hidden) return;
      scrollByCard(1);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [paused, scrollByCard]);

  return (
    <div className="selected-credentials-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="carousel-controls" aria-label="Selected credentials carousel controls">
        <button type="button" aria-label="Previous credential" onClick={() => scrollByCard(-1)}>
          &lsaquo;
        </button>
        <button type="button" aria-label="Next credential" onClick={() => scrollByCard(1)}>
          &rsaquo;
        </button>
      </div>

      <div
        className="selected-credentials-track"
        ref={trackRef}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        tabIndex={0}
        aria-label="Selected Huanyu Cable credentials"
      >
        {selectedCredentials.map((credential) => (
          <Link
            className="selected-credential-card"
            href={groupHrefByCategory.get(credential.category) ?? "/quality#credentials"}
            key={credential.slug}
          >
            <span className="credential-card-image">
              <Image
                src={credential.imagePath}
                alt={credential.imageAlt}
                width={credential.imageWidth}
                height={credential.imageHeight}
                sizes="(max-width: 640px) 72vw, (max-width: 1024px) 36vw, 220px"
              />
            </span>
            <span className="credential-card-copy">
              <span>{categoryLabels[credential.category]}</span>
              <strong>{credential.shortTitle}</strong>
              <small>{credential.validThrough ? `Valid through ${credential.validThrough}` : credential.issuerType}</small>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
