import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { coreProducts, supportingProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Cable Products",
  description: "Explore Huanyu Cable's core LV armoured, MV power and LSZH fire-safe cable ranges, plus supporting project products.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero page-hero-products">
        <div className="container"><span className="eyebrow light">Products</span><h1>A focused product portfolio for project buyers</h1><p>Our export portfolio is centered on three core cable families, supported by selected complementary products for consolidated project supply.</p></div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">Primary capability</span><h2>Core product families</h2></div></div>
          <div className="product-grid core-grid">{coreProducts.map((product) => <ProductCard key={product.slug} product={product} numbered />)}</div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">Complementary supply</span><h2>Supporting products</h2></div><p>Product availability is confirmed according to the requested construction, applicable standard and project requirements.</p></div>
          <div className="product-grid supporting-product-grid">{supportingProducts.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
        </div>
      </section>
    </>
  );
}
