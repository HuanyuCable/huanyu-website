import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InquiryForm } from "@/components/InquiryForm";
import { LowVoltageXlpeFamilyProductPage, Yjv22Yjv23ProductPage } from "@/components/LowVoltageXlpeProductPages";
import { MediumVoltageXlpeProductPage } from "@/components/MediumVoltageXlpeProductPage";
import { LszhFireSafeProductPage } from "@/components/LszhFireSafeProductPage";
import { AcsrBareOverheadConductorsProductPage, OverheadInsulatedCablesProductPage } from "@/components/OverheadAcsrProductPages";
import { BuildingWiresFlexibleCablesPage } from "@/components/BuildingWiresFlexibleCablesPage";
import { getProduct, products } from "@/data/products";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: { absolute: product.metaTitle ?? `${product.name} | HUANYU CABLE` },
    description: product.metaDescription ?? product.description,
    alternates: { canonical: `/products/${slug}` },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  if (product.detailVariant === "yjv22-yjv23") {
    return <Yjv22Yjv23ProductPage />;
  }

  if (product.detailVariant === "low-voltage-xlpe-family") {
    return <LowVoltageXlpeFamilyProductPage />;
  }

  if (product.detailVariant === "medium-voltage-xlpe") {
    return <MediumVoltageXlpeProductPage />;
  }

  if (product.detailVariant === "lszh-fire-safe") {
    return <LszhFireSafeProductPage />;
  }

  if (product.detailVariant === "overhead-insulated-cables") {
    return <OverheadInsulatedCablesProductPage />;
  }

  if (product.detailVariant === "acsr-bare-overhead-conductors") {
    return <AcsrBareOverheadConductorsProductPage />;
  }

  if (product.detailVariant === "building-wires-flexible-cables") {
    return <BuildingWiresFlexibleCablesPage />;
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    brand: { "@type": "Brand", name: "Huanyu Cable" },
  };

  return (
    <>
      <section className="product-detail-hero">
        <div className="container product-detail-grid">
          <div>
            <Link className="back-link" href="/products">← All products</Link>
            <span className="eyebrow light">{product.category} product family</span>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <div className="hero-actions"><Link className="button" href="#inquiry">Request Technical Review</Link><a className="button button-ghost" href={`mailto:${site.email}`}>Email Specification</a></div>
          </div>
          <div>
            <div className="product-detail-image">
              <Image
                src={product.detailImagePath}
                alt={product.imageAlt}
                width={1000}
                height={750}
                sizes="(max-width: 980px) 100vw, 45vw"
                priority
              />
            </div>
            <p className="product-image-note">Illustrative product-family rendering. Final construction is confirmed against the applicable specification before quotation.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container product-spec-layout">
          <div className="spec-main">
            <span className="eyebrow">Capability overview</span>
            <h2>Typical configuration</h2>
            <div className="spec-table">
              <div><strong>Voltage</strong><span>{product.voltage}</span></div>
              <div><strong>Featured models</strong><span>{product.featuredModels.join(" · ")}</span></div>
              <div><strong>Reference standards</strong><span>{product.standards.join(" · ")}</span></div>
            </div>
            <h2>Construction options</h2>
            <ul className="detail-list">{product.construction.map((item) => <li key={item}>{item}</li>)}</ul>
            <h2>Typical applications</h2>
            <div className="application-chips">{product.applications.map((item) => <span key={item}>{item}</span>)}</div>
            {product.note && <div className="review-note">{product.note}</div>}
          </div>
          <aside className="spec-aside">
            <h3>What to send for quotation</h3>
            <ol>
              <li>Voltage rating and applicable standard</li>
              <li>Conductor material, cores and cross-section</li>
              <li>Insulation, armour and sheath requirements</li>
              <li>Quantity, drum length and destination</li>
              <li>Required tests, documents and delivery date</li>
            </ol>
            <a className="button full" href="#inquiry">Send requirements</a>
          </aside>
        </div>
      </section>

      <section className="section quote-section" id="inquiry">
        <div className="container quote-grid"><div><span className="eyebrow light">Technical review</span><h2>Request a product and quotation review.</h2><p>Our commercial and technical teams will assess the requested construction before confirming availability.</p></div><InquiryForm compact /></div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
    </>
  );
}
