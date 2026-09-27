export type RubberFlexibleIconKind =
  | "designation"
  | "voltage"
  | "cores"
  | "duty"
  | "installation"
  | "document";

export function RubberFlexibleTechnicalIcon({ kind }: { kind: RubberFlexibleIconKind }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.55,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (kind === "designation") {
    return <svg {...common}><path d="M4 6.5h16v11H4zM7 10h10M7 14h6" /><path d="M7 3.5v3M17 3.5v3" /></svg>;
  }

  if (kind === "voltage") {
    return <svg {...common}><path d="m13 2-7 11h6l-1 9 7-12h-6z" /></svg>;
  }

  if (kind === "cores") {
    return <svg {...common}><circle cx="12" cy="12" r="8.7" /><circle cx="9" cy="9" r="2" /><circle cx="15" cy="9" r="2" /><circle cx="9" cy="15" r="2" /><circle cx="15" cy="15" r="2" /></svg>;
  }

  if (kind === "duty") {
    return <svg {...common}><path d="M3.5 15.8c3.1 0 3.1-7.6 6.2-7.6s3.1 7.6 6.2 7.6c2.1 0 2.8-3.4 4.6-5.8" /><path d="m17.1 8.1 3.4 1.9-1.4 3.5M4 20h16" /></svg>;
  }

  if (kind === "installation") {
    return <svg {...common}><path d="M4 20h16M6 20V9.5l6-4.5 6 4.5V20M9 20v-5h6v5" /><path d="M16.8 4.2c1.8.2 3 1.2 3.4 3" /></svg>;
  }

  return <svg {...common}><path d="M7 2.8h7l3 3V21H7zM14 2.8V6h3M9.5 10h5M9.5 13.5h5M9.5 17h3.5" /></svg>;
}
