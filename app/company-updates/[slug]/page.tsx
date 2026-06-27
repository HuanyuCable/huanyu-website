import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { companyUpdates, formatUpdateDate, getCompanyUpdate } from "@/data/companyUpdates";

export function generateStaticParams() {
  return companyUpdates.map((update) => ({ slug: update.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const update = getCompanyUpdate(slug);
  if (!update) return {};
  return {
    title: update.title,
    description: update.metaDescription,
    alternates: { canonical: `/company-updates/${update.slug}` },
    openGraph: {
      title: update.title,
      description: update.metaDescription,
      images: [{ url: update.image, width: 1200, height: 716, alt: update.imageAlt }],
    },
  };
}

export default async function CompanyUpdateDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const update = getCompanyUpdate(slug);
  if (!update) notFound();

  return (
    <article className="update-article">
      <section className="page-hero update-detail-hero">
        <div className="container">
          <Link className="back-link" href="/company-updates">Back to Company Updates</Link>
          <span className="eyebrow light">{update.category}</span>
          <h1>{update.title}</h1>
          <p><time dateTime={update.publishedAt}>{formatUpdateDate(update.publishedAt)}</time></p>
        </div>
      </section>
      <section className="section">
        <div className="container update-article-layout">
          <div className="update-article-image">
            <Image src={update.image} alt={update.imageAlt} width={1200} height={716} priority />
          </div>
          <div className="update-article-body">
            {update.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="update-article-cta">
            <h2>Discuss Your Cable Requirements</h2>
            <p>Share your project specification, required standard, quantity and destination with the Huanyu Cable team.</p>
            <Link className="button" href="/contact">Discuss Your Cable Requirements</Link>
          </div>
        </div>
      </section>
    </article>
  );
}
