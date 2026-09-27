export type ControlTechnicalIconKind =
  | "circuit"
  | "arrangement"
  | "shield"
  | "motion"
  | "environment"
  | "document"
  | "signal"
  | "automation";

export function ControlTechnicalIcon({ kind }: { kind: ControlTechnicalIconKind }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (kind === "circuit") {
    return (
      <svg {...common}>
        <path d="M7 3v5M17 3v5M5 8h14v3.2a7 7 0 0 1-14 0V8Z" />
        <path d="M12 18.2V21M9.5 12h5" />
      </svg>
    );
  }

  if (kind === "arrangement") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.7" />
        <circle cx="9" cy="9" r="2" />
        <circle cx="15" cy="9" r="2" />
        <circle cx="9" cy="15" r="2" />
        <circle cx="15" cy="15" r="2" />
      </svg>
    );
  }

  if (kind === "shield") {
    return (
      <svg {...common}>
        <path d="M12 2.8 19 5v5.5c0 4.6-2.8 8.2-7 10.7-4.2-2.5-7-6.1-7-10.7V5l7-2.2Z" />
        <path d="M8.5 12h7M10 9.5l-1.5 2.5L10 14.5M14 9.5l1.5 2.5-1.5 2.5" />
      </svg>
    );
  }

  if (kind === "motion") {
    return (
      <svg {...common}>
        <path d="M3.5 15.8c3.1 0 3.1-7.6 6.2-7.6s3.1 7.6 6.2 7.6c2.1 0 2.8-3.4 4.6-5.8" />
        <path d="m17.1 8.1 3.4 1.9-1.4 3.5M4 20h16" />
      </svg>
    );
  }

  if (kind === "environment") {
    return (
      <svg {...common}>
        <path d="M4 20h16M6 20V9.5l6-4.5 6 4.5V20" />
        <path d="M9 20v-5h6v5M16.8 4.2c1.8.2 3 1.2 3.4 3" />
      </svg>
    );
  }

  if (kind === "signal") {
    return (
      <svg {...common}>
        <path d="M3 13h3l2-5 3.5 9 2.8-7 1.8 3H21" />
        <path d="M4 20h16" />
      </svg>
    );
  }

  if (kind === "automation") {
    return (
      <svg {...common}>
        <circle cx="7" cy="17" r="2" />
        <circle cx="11" cy="10" r="2" />
        <circle cx="18" cy="6" r="2" />
        <path d="m8.2 15.4 1.6-3.7M12.8 8.9l3.4-1.8M18 8v5l-4 3H9" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M7 2.8h7l3 3V21H7z" />
      <path d="M14 2.8V6h3M9.5 10h5M9.5 13.5h5M9.5 17h3.5" />
    </svg>
  );
}

export function PairedDataGlyph() {
  return (
    <svg viewBox="0 0 180 52" fill="none" aria-hidden="true">
      <path d="M5 15c20 0 20 22 40 22s20-22 40-22 20 22 40 22 20-22 50-22" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 37c20 0 20-22 40-22s20 22 40 22 20-22 40-22 20 22 50 22" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="5" cy="15" r="2.5" fill="currentColor" />
      <circle cx="5" cy="37" r="2.5" fill="currentColor" />
      <circle cx="175" cy="15" r="2.5" fill="currentColor" />
      <circle cx="175" cy="37" r="2.5" fill="currentColor" />
    </svg>
  );
}
