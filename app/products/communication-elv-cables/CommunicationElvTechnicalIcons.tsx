export type CommunicationElvIconKind =
  | "network"
  | "cctv"
  | "alarm"
  | "audio"
  | "system"
  | "category"
  | "arrangement"
  | "shield"
  | "environment"
  | "document";

export function CommunicationElvTechnicalIcon({ kind }: { kind: CommunicationElvIconKind }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.55,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (kind === "network") {
    return <svg {...common}><rect x="4" y="4" width="16" height="5" rx="1" /><rect x="4" y="15" width="16" height="5" rx="1" /><path d="M8 9v6M16 9v6M8 6.5h.01M11 6.5h.01M8 17.5h.01M11 17.5h.01" /></svg>;
  }

  if (kind === "cctv") {
    return <svg {...common}><path d="m4 8 12-3 2 6-12 3zM7 14l1 3h6M11 17v3M6 20h10" /><path d="m17.2 7.1 2.8-.7" /></svg>;
  }

  if (kind === "alarm") {
    return <svg {...common}><path d="M8 10a4 4 0 0 1 8 0v5H8zM6 18h12M12 4V2M5.6 6.2 4.2 4.8M18.4 6.2l1.4-1.4" /><path d="M10 12h4" /></svg>;
  }

  if (kind === "audio") {
    return <svg {...common}><path d="M5 10h4l5-4v12l-5-4H5zM17 9.3a4 4 0 0 1 0 5.4M19 6.8a7.5 7.5 0 0 1 0 10.4" /></svg>;
  }

  if (kind === "system") {
    return <svg {...common}><circle cx="6" cy="6" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" /><path d="M8 6h8M6 8v8M18 8v8M8 18h8" /></svg>;
  }

  if (kind === "category") {
    return <svg {...common}><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" /></svg>;
  }

  if (kind === "arrangement") {
    return <svg {...common}><path d="M5 4v5a3 3 0 0 0 3 3h8a3 3 0 0 1 3 3v5M19 4v5a3 3 0 0 1-3 3H8a3 3 0 0 0-3 3v5" /><circle cx="5" cy="3" r="1" /><circle cx="19" cy="3" r="1" /><circle cx="5" cy="21" r="1" /><circle cx="19" cy="21" r="1" /></svg>;
  }

  if (kind === "shield") {
    return <svg {...common}><path d="M12 2.8 19 5v5.5c0 4.6-2.8 8.2-7 10.7-4.2-2.5-7-6.1-7-10.7V5z" /><path d="M8.5 12h7M10 9.5 8.5 12 10 14.5M14 9.5l1.5 2.5-1.5 2.5" /></svg>;
  }

  if (kind === "environment") {
    return <svg {...common}><path d="M4 20h16M6 20V9.5l6-4.5 6 4.5V20M9 20v-5h6v5" /><path d="M16.8 4.2c1.8.2 3 1.2 3.4 3" /></svg>;
  }

  return <svg {...common}><path d="M7 2.8h7l3 3V21H7zM14 2.8V6h3M9.5 10h5M9.5 13.5h5M9.5 17h3.5" /></svg>;
}
