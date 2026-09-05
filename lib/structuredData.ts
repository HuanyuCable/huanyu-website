import type { BuyerGuide } from "@/data/buyerGuides";
import type { CompanyUpdate } from "@/data/companyUpdates";
import type { Product } from "@/data/products";
import { site } from "@/lib/site";

type BreadcrumbItem = {
  name: string;
  item: string;
};

const productSchemaSlugs = new Set([
  "low-voltage-xlpe-power-cables",
  "low-voltage-armoured-power-cables",
  "medium-voltage-xlpe-power-cables",
  "solar-cables",
  "pv1-f-solar-dc-cable",
  "h1z2z2-k-solar-dc-cable",
]);

const productCategories: Record<string, string> = {
  "low-voltage-xlpe-power-cables": "Low Voltage Power Cables",
  "low-voltage-armoured-power-cables": "Low Voltage Armoured Power Cables",
  "medium-voltage-xlpe-power-cables": "Medium Voltage Power Cables",
  "solar-cables": "Solar Cables",
  "pv1-f-solar-dc-cable": "Solar Cables",
  "h1z2z2-k-solar-dc-cable": "Solar Cables",
};

const productModels: Record<string, string> = {
  "pv1-f-solar-dc-cable": "PV1-F",
  "h1z2z2-k-solar-dc-cable": "H1Z2Z2-K",
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

export function shouldAddProductSchema(slug: string): boolean {
  return productSchemaSlugs.has(slug);
}

export function createProductJsonLd(product: Product) {
  const url = `${site.url}/products/${product.slug}`;
  const additionalProperty = [
    product.voltage
      ? { "@type": "PropertyValue", name: "Rated voltage", value: product.voltage }
      : null,
    {
      "@type": "PropertyValue",
      name: "Reference standards",
      value: product.standards.join("; "),
    },
  ].filter((property) => property !== null);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.name,
    description: product.metaDescription ?? product.description,
    url,
    mainEntityOfPage: url,
    image: absoluteUrl(product.detailImagePath),
    brand: { "@id": site.brandId },
    manufacturer: { "@id": site.organizationId },
    category: productCategories[product.slug],
    ...(productModels[product.slug] ? { model: productModels[product.slug] } : {}),
    additionalProperty,
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
