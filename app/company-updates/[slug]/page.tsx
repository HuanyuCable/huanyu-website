import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { companyUpdates, formatUpdateDate, getCompanyUpdate } from "@/data/companyUpdates";
import { site } from "@/lib/site";
import { createBreadcrumbJsonLd, createCompanyUpdateArticleJsonLd } from "@/lib/structuredData";

export function generateStaticParams() {
  return companyUpdates.map((update) => ({ slug: update.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const update = getCompanyUpdate(slug);
  if (!update) return {};
  const title = `${update.title} | HUANYU CABLE`;
  const url = `/company-updates/${update.slug}`;
  return {
    title: { absolute: title },
    description: update.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description: update.metaDescription,
      url,
      images: [{ url: update.image, width: 1200, height: 716, alt: update.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: update.metaDescription,
      images: [update.image],
    },
  };
}

export default async function CompanyUpdateDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const update = getCompanyUpdate(slug);
  if (!update) notFound();

  const url = `${site.url}/company-updates/${update.slug}`;

  return (
    <>
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: "Home", item: site.url },
          { name: "Company Updates", item: `${site.url}/company-updates` },
          { name: update.title, item: url },
        ])}
      />
      <JsonLd data={createCompanyUpdateArticleJsonLd(update)} />
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
    </>
  );
}
