import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CredentialCard } from "@/components/CredentialCard";
import { credentialGroups, getCredentialGroupBySlug, getCredentialsByCategory } from "@/data/credentials";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return credentialGroups.map((group) => ({ category: group.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const group = getCredentialGroupBySlug(category);
  if (!group) return {};

  return {
    title: `${group.title} | Quality Credentials`,
    description: group.summary,
    alternates: { canonical: `/quality/credentials/${group.slug}` },
  };
}

export default async function CredentialCategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const group = getCredentialGroupBySlug(category);
  if (!group) notFound();

  const credentials = getCredentialsByCategory(group.id);
  const documentCount = credentials.length + (group.id === "product-compliance" ? 1 : 0);

  return (
    <>
      <section className="credential-category-hero">
        <div className="container">
          <Link className="credential-breadcrumb" href="/quality#credentials">Quality / Credentials</Link>
          <span className="credential-category-eyebrow">{group.eyebrow}</span>
          <h1>{group.title}</h1>
          <p>{group.detailIntroduction}</p>
          <div className="credential-category-meta">
            <span>{documentCount} documents</span>
          </div>
          {group.id === "product-compliance" && (
            <p className="credential-document-count">3 documents: 1 manufacturing license and 2 CCC certificates</p>
          )}
          {group.notice && <p className="credential-category-notice">{group.notice}</p>}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          {group.id === "product-compliance" && <ProductionLicenseCard />}
          <div className="credential-detail-grid">
            {credentials.map((credential) => (
              <CredentialCard credential={credential} key={credential.slug} />
            ))}
          </div>
          <div className="credential-category-footer">
            <Link className="text-link" href="/quality#credentials">All Credentials <span>-&gt;</span></Link>
            <Link className="button" href="/contact">Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductionLicenseCard() {
  return (
    <article className="product-license-card">
      <div className="product-license-document">
        <Image
          src="/media/quality/china-industrial-product-production-license.webp"
          alt="China Industrial Product Production License document for Huanyu Cable"
          width={900}
          height={1250}
          sizes="(max-width: 560px) 140px, 150px"
        />
      </div>
      <div className="product-license-body">
        <span className="credential-tag">Domestic manufacturing authorization</span>
        <h2>China Industrial Product Production License</h2>
        <p className="credential-meta-line">Valid through 3 June 2028</p>
        <p className="credential-summary">Huanyu Cable holds a current industrial product production license covering wire and cable manufacturing within the scope stated in the original document.</p>
        <div className="credential-copy-block">
          <strong>For project buyers</strong>
          <p>This document confirms the company&apos;s domestic manufacturing authorization. Product construction, applicable standards and project documentation are confirmed separately during technical review.</p>
        </div>
        <a className="text-link credential-link" href="/media/quality/china-industrial-product-production-license.webp" target="_blank" rel="noreferrer">
          View license <span>-&gt;</span>
        </a>
      </div>
    </article>
  );
}
