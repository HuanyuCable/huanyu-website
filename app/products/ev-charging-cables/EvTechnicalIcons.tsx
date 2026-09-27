export type EvTechnicalIconKind =
  | "interface"
  | "electrical"
  | "cores"
  | "flexibility"
  | "environment"
  | "document"
  | "mechanical";

export function EvTechnicalIcon({ kind }: { kind: EvTechnicalIconKind }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (kind === "interface") {
    return (
      <svg {...common}>
        <path d="M8 4.5h8v5.2a4 4 0 0 1-4 4 4 4 0 0 1-4-4V4.5Z" />
        <path d="M10.5 4.5V2.7M13.5 4.5V2.7M12 13.8v2.4a3.2 3.2 0 0 0 3.2 3.2H18" />
        <path d="M18 17.3v4.2M20.1 19.4h-4.2" />
      </svg>
    );
  }

  if (kind === "electrical") {
    return (
      <svg {...common}>
        <path d="m13.2 2.8-6 10h4l-.5 8.4 6.1-10.5h-4.1l.5-7.9Z" />
      </svg>
    );
  }

  if (kind === "cores") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.7" />
        <circle cx="9" cy="9.2" r="2.1" />
        <circle cx="15" cy="9.2" r="2.1" />
        <circle cx="12" cy="15" r="2.1" />
      </svg>
    );
  }

  if (kind === "flexibility") {
    return (
      <svg {...common}>
        <path d="M4 8.2c3.2 0 3.2 7.6 6.4 7.6s3.2-7.6 6.4-7.6c1.5 0 2.4 1.6 3.2 3.2" />
        <path d="m17.2 4.9-.4 3.3 3.1.9" />
        <path d="M4.2 19.5h15.6" />
      </svg>
    );
  }

  if (kind === "environment") {
    return (
      <svg {...common}>
        <path d="M5 20V9.5l7-5 7 5V20" />
        <path d="M8.1 20v-5.2h7.8V20M3 20h18" />
        <path d="M17.2 4.1c1.9.2 3 1.2 3.4 3" />
      </svg>
    );
  }

  if (kind === "mechanical") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="3.1" />
        <path d="M12 2.8v2M12 19.2v2M2.8 12h2M19.2 12h2M5.5 5.5l1.4 1.4M17.1 17.1l1.4 1.4M18.5 5.5l-1.4 1.4M6.9 17.1l-1.4 1.4" />
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
