import type { MetadataRoute } from "next";
import { companyUpdates } from "@/data/companyUpdates";
import { products } from "@/data/products";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/products", "/applications", "/quality", "/about", "/resources", "/company-updates", "/contact"];
  return [
    ...pages.map((path) => ({ url: `${site.url}${path}`, changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : 0.7 })),
    ...products.map((product) => ({ url: `${site.url}/products/${product.slug}`, changeFrequency: "monthly" as const, priority: product.category === "Core" ? 0.9 : 0.6 })),
    ...companyUpdates.map((update) => ({ url: `${site.url}/company-updates/${update.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
