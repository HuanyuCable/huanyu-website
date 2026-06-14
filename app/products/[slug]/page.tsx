import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InquiryForm } from "@/components/InquiryForm";
import { getProduct, products } from "@/data/products";
import { mediaUrl } from "@/lib/media";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: product.name, description: product.description };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

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
            <div className="hero-actions"><Link className="button" href="#inquiry">Request Technical Review</Link><a className="button button-ghost" href="mailto:sales@huanyucable.com">Email Specification</a></div>
          </div>
          <div className="product-detail-image"><img src={mediaUrl(product.imagePath, product.fallbackImage)} alt={product.name} /></div>
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
            {product.note && <div className="review-note"><strong>Publication review required:</strong> {product.note}</div>}
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

      <section className="section section-muted technical-section">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">Technical content structure</span><h2>Pages should become useful procurement documents</h2></div><p>Replace generic marketing paragraphs with verified tables, cross-section diagrams, test references, drum data and downloadable datasheets.</p></div>
          <div className="three-column-list">
            <article><span>01</span><h3>Structure diagram</h3><p>Label conductor, screens, insulation, bedding, armour and sheath.</p></article>
            <article><span>02</span><h3>Technical data</h3><p>Publish dimensions, weight, resistance and current data only after engineering verification.</p></article>
            <article><span>03</span><h3>Documents</h3><p>Attach datasheet, test report, certificate or catalogue relevant to this exact product family.</p></article>
          </div>
        </div>
      </section>

      <section className="section quote-section" id="inquiry">
        <div className="container quote-grid"><div><span className="eyebrow light">Technical review</span><h2>Request a product and quotation review.</h2><p>Our commercial and technical teams will assess the requested construction before confirming availability.</p></div><InquiryForm compact /></div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
    </>
  );
}
