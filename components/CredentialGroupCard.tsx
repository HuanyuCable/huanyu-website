import Link from "next/link";
import type { CredentialGroup } from "@/data/credentials";

export function CredentialGroupCard({ group, index }: { group: CredentialGroup; index: number }) {
  return (
    <Link className="credential-group-card" href={`/quality/credentials/${group.slug}`}>
      <span className="credential-group-marker">{String(index + 1).padStart(2, "0")}</span>
      <span className="credential-group-eyebrow">{group.eyebrow}</span>
      <h3>{group.shortTitle}</h3>
      <p>{group.summary}</p>
      <div className="credential-highlights">
        {group.highlights.slice(0, 3).map((highlight) => (
          <span key={highlight}>{highlight}</span>
        ))}
      </div>
      <span className="text-link credential-group-link">Explore Credentials <span>-&gt;</span></span>
    </Link>
  );
}
