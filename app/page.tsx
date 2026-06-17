import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "@/components/HeroVideo";
import { InquiryForm } from "@/components/InquiryForm";
import { CompanyUpdateCard } from "@/components/CompanyUpdateCard";
import { ProductCard } from "@/components/ProductCard";
import { companyUpdates } from "@/data/companyUpdates";
import { coreProducts, supportingProducts } from "@/data/products";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <HeroVideo />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="hero-kicker">Cable manufacturing since 1995 · Hefei, China</span>
          <h1>Power Cables Built for Demanding Projects</h1>
          <p>Focused on low-voltage armoured cables, medium-voltage power cables and LSZH & fire-safe cable solutions.</p>
          <div className="hero-actions">
            <Link className="button" href="/contact">Request a Quote</Link>
            <Link className="button button-ghost" href="/products">Explore Products</Link>
          </div>
        </div>
        <div className="hero-stats">
          <div><strong>30+</strong><span>Years in cable manufacturing</span></div>
          <div><strong>Focused Portfolio</strong><span>LV Armoured · MV Power · LSZH & Fire-safe</span></div>
          <div><strong>Technical Review</strong><span>Construction and standards confirmed before quotation</span></div>
          <div><strong>OEM</strong><span>Specification-based production</span></div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container split intro-grid">
          <div>
            <span className="eyebrow">A focused cable partner</span>
            <h2>Built around the cable projects we know best.</h2>
          </div>
          <div>
            <p className="lead">Huanyu&apos;s export offering is built around practical manufacturing and order experience. Our priority is to help buyers identify a suitable construction, confirm technical requirements and obtain a practical quotation.</p>
            <Link className="text-link" href="/about">About Huanyu <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Focused Product Portfolio</span><h2>A focused power cable portfolio.</h2></div>
            <p>Our product portfolio is organized around three core cable families, supported by selected complementary ranges for project supply.</p>
          </div>
          <div className="product-grid core-grid">
            {coreProducts.map((product) => <ProductCard key={product.slug} product={product} numbered />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container capability-band">
          <div>
            <span className="eyebrow light">From requirement to shipment</span>
            <h2>A clearer path for engineering buyers</h2>
          </div>
          <div className="process-grid">
            <div><span>01</span><h3>Review</h3><p>Voltage, standard, construction, quantity and destination.</p></div>
            <div><span>02</span><h3>Confirm</h3><p>Technical deviations, testing, packaging and delivery terms.</p></div>
            <div><span>03</span><h3>Produce</h3><p>Manufacturing and inspection against the agreed specification.</p></div>
            <div><span>04</span><h3>Deliver</h3><p>Drum marking, documents, logistics and after-sales coordination.</p></div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Complete project supply</span><h2>Supporting Products for Broader Project Supply</h2></div>
            <p>These selected ranges support broader project packages and consolidated supply requirements.</p>
          </div>
          <div className="support-grid">
            {supportingProducts.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`} className="support-card">
                <span>{product.shortName}</span><strong>→</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section applications-section">
        <div className="container">
          <div className="section-heading light-heading">
            <div><span className="eyebrow light">Applications</span><h2>Built around real project requirements.</h2></div>
            <Link className="button button-ghost" href="/applications">View Applications</Link>
          </div>
          <div className="application-grid">
            {[
              ["Power Distribution", "Utility, substation and local distribution networks."],
              ["Industrial Facilities", "Plants, mining, manufacturing and process infrastructure."],
              ["Commercial Buildings", "Hospitals, data centres, public and high-occupancy buildings."],
              ["Infrastructure", "Rail, airports, municipal and large construction projects."],
            ].map(([title, text], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section quality-preview">
        <div className="container quality-preview-grid">
          <div>
            <span className="eyebrow">Quality Control</span>
            <h2>Quality control at every stage of production.</h2>
            <p className="lead">Quality control covers incoming materials, in-process checks, routine testing and shipment documentation. Test and document requirements are confirmed according to the applicable product standard and project specification.</p>
            <ul className="check-list">
              <li>Incoming material inspection</li>
              <li>In-process dimensional and electrical checks</li>
              <li>Routine and project-specific testing</li>
              <li>Traceable packing and shipment documentation</li>
            </ul>
            <Link className="text-link" href="/quality">Review quality structure <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Manufacturing & Delivery</span>
              <h2>Built in Hefei. Prepared for Project Supply.</h2>
            </div>
            <p>Huanyu Cable combines in-house cable manufacturing with practical order preparation and shipment coordination. Construction, standards, packaging and delivery requirements are reviewed before quotation.</p>
          </div>
          <div className="evidence-grid">
            {[
              {
                image: "/media/manufacturing/workshop-overview.webp",
                alt: "Huanyu Cable production workshop",
                title: "Production Workshop",
                text: "Dedicated production areas support conductor processing, cabling, insulation and related cable-manufacturing stages.",
              },
              {
                image: "/media/manufacturing/copper-conductor-line.webp",
                alt: "Copper conductor processing line at Huanyu Cable",
                title: "Conductor & Cable Processing",
                text: "Production details are reviewed against the requested construction, applicable standard and project conditions.",
              },
              {
                image: "/media/delivery/cable-drum-shipment.webp",
                alt: "Cable drums prepared for shipment",
                title: "Order Preparation & Shipment",
                text: "Cable drums, coils, identification and shipment arrangements are prepared according to confirmed order requirements.",
              },
            ].map((item) => (
              <article className="evidence-card" key={item.title}>
                <div className="evidence-image">
                  <Image src={item.image} alt={item.alt} width={720} height={480} sizes="(max-width: 760px) 100vw, 33vw" />
                </div>
                <div className="evidence-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="quality-preview-media">
            <Image src="/media/manufacturing/drawing-line-operation.webp" alt="Production-line operation for cable manufacturing" width={720} height={480} sizes="(max-width: 760px) 100vw, 42vw" />
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Latest Company Updates</span><h2>Company development and quality responsibility.</h2></div>
            <Link className="text-link" href="/company-updates">View all updates <span>→</span></Link>
          </div>
          <div className="update-grid">
            {companyUpdates.map((update) => <CompanyUpdateCard key={update.slug} update={update} />)}
          </div>
        </div>
      </section>

      <section className="section quote-section">
        <div className="container quote-grid">
          <div>
            <span className="eyebrow light">Start with the specification</span>
            <h2>Start with your BOQ or cable specification.</h2>
            <p>Include voltage, conductor size, number of cores, standard, quantity, destination and required delivery date.</p>
          </div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
