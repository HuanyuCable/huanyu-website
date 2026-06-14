const base = (process.env.NEXT_PUBLIC_R2_BASE_URL || "").replace(/\/$/, "");

export function mediaUrl(path: string, fallback: string): string {
  if (!base) return fallback;
  return `${base}/${path.replace(/^\//, "")}`;
}
