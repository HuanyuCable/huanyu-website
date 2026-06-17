import Image from "next/image";
import type { Credential } from "@/data/credentials";

export function CredentialCard({ credential }: { credential: Credential }) {
  const details = [
    credential.standard && ["Standard", credential.standard],
    credential.level && ["Level", credential.level],
  ].filter(Boolean) as [string, string][];

  return (
    <article className="credential-card">
      <div className="credential-document">
        <Image
          src={credential.imagePath}
          alt={credential.imageAlt}
          width={credential.imageWidth}
          height={credential.imageHeight}
          sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
      </div>
      <div className="credential-card-body">
        <span className="credential-tag">{credential.issuerType}</span>
        <h3>{credential.title}</h3>
        {details.length > 0 && (
          <dl className="credential-facts">
            {details.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        )}
        <p>{credential.summary}</p>
        <p className="credential-relevance">{credential.buyerRelevance}</p>
        {(credential.issued || credential.validThrough) && (
          <div className="credential-validity">
            {credential.issued && <span>Issued: {credential.issued}</span>}
            {credential.validThrough && <span>Valid: {credential.validThrough}</span>}
          </div>
        )}
        {credential.scopeNote && <p className="credential-scope">{credential.scopeNote}</p>}
        <a className="text-link credential-link" href={credential.imagePath} target="_blank" rel="noreferrer">
          View Document <span>→</span>
        </a>
      </div>
    </article>
  );
}
