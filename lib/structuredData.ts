import type { BuyerGuide } from "@/data/buyerGuides";
import type { CompanyUpdate } from "@/data/companyUpdates";
import { site } from "@/lib/site";

type BreadcrumbItem = {
  name: string;
  item: string;
};

export function absoluteUrl(path: string): string {
  return new URL(path, `${site.url}/`).toString();
}

export function createBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function createTechArticleJsonLd(guide: BuyerGuide) {
  const url = `${site.url}/resources/${guide.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline: guide.title,
    description: guide.description,
    url,
    mainEntityOfPage: url,
    image: absoluteUrl("/images/site/heroes/resources-hero-manufacturing-development-v2.webp"),
    author: { "@id": site.organizationId },
    publisher: { "@id": site.organizationId },
  };
}

export function createCompanyUpdateArticleJsonLd(update: CompanyUpdate) {
  const url = `${site.url}/company-updates/${update.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: update.title,
    description: update.metaDescription,
    url,
    mainEntityOfPage: url,
    image: absoluteUrl(update.image),
    author: { "@id": site.organizationId },
    publisher: { "@id": site.organizationId },
    datePublished: update.publishedAt,
  };
}
