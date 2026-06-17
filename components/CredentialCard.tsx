import Image from "next/image";
import type { Credential, CredentialIssuerType } from "@/data/credentials";

const issuerLabels: Record<CredentialIssuerType, string> = {
  "management-system certification": "Management system",
  "third-party evaluation": "Independent evaluation",
  "government recognition": "Official recognition",
  "domestic product certification": "Domestic product certification",
};

export function CredentialCard({ credential }: { credential: Credential }) {
  const metadata = [credential.standard, credential.level, credential.validThrough && `Valid through ${credential.validThrough}`].filter(Boolean);

  return (
    <article className="credential-card">
      <div className="credential-document">
        <Image
          src={credential.imagePath}
          alt={credential.imageAlt}
          width={credential.imageWidth}
          height={credential.imageHeight}
          sizes="(max-width: 560px) 140px, 150px"
        />
      </div>
      <div className="credential-card-body">
        <span className="credential-tag">{issuerLabels[credential.issuerType]}</span>
        {credential.shortTitle !== credential.title && <p className="credential-short-title">{credential.shortTitle}</p>}
        <h3>{credential.title}</h3>
        {metadata.length > 0 && <p className="credential-meta-line">{metadata.join(" | ")}</p>}
        <p className="credential-summary">{credential.summary}</p>
        <div className="credential-copy-block">
          <strong>For project buyers</strong>
          <p>{credential.buyerRelevance}</p>
        </div>
        {credential.issued && <p className="credential-subtle">Issued {credential.issued}</p>}
        {credential.scopeNote && <p className="credential-scope">{credential.scopeNote}</p>}
        <a className="text-link credential-link" href={credential.imagePath} target="_blank" rel="noreferrer">
          View certificate <span>-&gt;</span>
        </a>
      </div>
    </article>
  );
}
