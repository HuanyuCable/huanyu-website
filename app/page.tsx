import Link from "next/link";
import { HeroVideo } from "@/components/HeroVideo";
import { InquiryForm } from "@/components/InquiryForm";
import { ProductCard } from "@/components/ProductCard";
import { coreProducts, supportingProducts } from "@/data/products";

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
          <div><strong>3</strong><span>Core product positions</span></div>
          <div><strong>35 kV</strong><span>Project capability subject to confirmation</span></div>
          <div><strong>OEM</strong><span>Specification-based production</span></div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container split intro-grid">
          <div>
            <span className="eyebrow">A focused cable partner</span>
            <h2>Not every cable. The right cables for the projects we know best.</h2>
          </div>
          <div>
            <p className="lead">Huanyu's website is structured around real manufacturing and order experience, rather than an oversized catalogue. Our priority is to help buyers identify a suitable construction, confirm technical requirements and obtain a practical quotation.</p>
            <Link className="text-link" href="/about">Learn about Huanyu <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Core product strategy</span><h2>Three product families lead the site</h2></div>
            <p>These categories receive the strongest homepage placement, product detail depth and SEO investment.</p>
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
            <div><span className="eyebrow">Complete project supply</span><h2>Supporting products without diluting the focus</h2></div>
            <p>These ranges help complete quotations while remaining secondary to the three core product positions.</p>
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
            <div><span className="eyebrow light">Applications</span><h2>Built around project environments</h2></div>
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
        <div className="container split quality-grid">
          <div className="quality-image"><img src="/images/quality-lab.svg" alt="Cable testing and quality control placeholder" /></div>
          <div>
            <span className="eyebrow">Quality & verification</span>
            <h2>Show test evidence, not generic claims.</h2>
            <p className="lead">The final site should connect each claim to a relevant certificate, test report, production process or inspection record. This section is intentionally designed to be populated with Huanyu's real documents and factory media.</p>
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

      <section className="section quote-section">
        <div className="container quote-grid">
          <div>
            <span className="eyebrow light">Start with the specification</span>
            <h2>Send your BOQ or cable requirement.</h2>
            <p>Include voltage, conductor size, number of cores, standard, quantity, destination and required delivery date.</p>
          </div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
