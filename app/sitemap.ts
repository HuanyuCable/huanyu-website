import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/products", "/applications", "/quality", "/resources", "/about", "/contact"];
  return [
    ...pages.map((path) => ({ url: `${site.url}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : 0.7 })),
    ...products.map((product) => ({ url: `${site.url}/products/${product.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: product.category === "Core" ? 0.9 : 0.6 })),
  ];
}
