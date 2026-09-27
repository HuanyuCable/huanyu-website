import type { ReactNode } from "react";

export type TechnicalIconKind = "connection" | "voltage" | "conductor" | "installation" | "environment" | "document";

const iconPaths: Record<TechnicalIconKind, ReactNode> = {
  connection: <><rect x="3" y="3" width="8" height="8" rx="1" /><rect x="21" y="21" width="8" height="8" rx="1" /><path d="M7 11v13h14M11 7h14v14M12 24l3-3m-3 3 3 3" /></>,
  voltage: <path d="m18 2-12 17h9l-1 11 12-18h-9l1-10Z" />,
  conductor: <><circle cx="16" cy="16" r="13" /><circle cx="16" cy="16" r="3" /><path d="M16 6v4m0 12v4M6 16h4m12 0h4M9 9l3 3m8 8 3 3M9 23l3-3m8-8 3-3" /></>,
  installation: <><path d="M3 25h26M7 25V8h7v10h11V6M3 8h8m10-2h8M19 13l6 5 4-6" /><circle cx="7" cy="5" r="2" /></>,
  environment: <><path d="M14 5a4 4 0 0 1 8 0v14a7 7 0 1 1-8 0V5Zm4 5v14m-3 0h6M5 6v6M2 9h6M26 4v4m-2-2h4" /></>,
  document: <><path d="M7 3h12l7 7v19H7V3Zm12 0v8h7M12 16h9m-9 5h9M3 8v21" /></>,
};

export function TechnicalIcon({ kind, className }: { kind: TechnicalIconKind; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {iconPaths[kind]}
    </svg>
  );
}
