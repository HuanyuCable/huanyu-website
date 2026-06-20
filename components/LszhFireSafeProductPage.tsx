import Image from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";

const lszhImages = {
  hero: "/images/products/lszh-fire-safe/lszh-fire-safe-hero.png",
  flameRetardant: "/images/products/lszh-fire-safe/zc-yjv-flame-retardant-closeup.png",
  fireResistant: "/images/products/lszh-fire-safe/fire-resistant-nh-yjv-vv22-options.png",
  comparison: "/images/products/lszh-fire-safe/lszh-wdzyjy-wdzbyjy-comparison.png",
  wdzn: "/images/products/lszh-fire-safe/wdzn-yjy-lszh-fire-resistant-closeup.png",
  wdzbn: "/images/products/lszh-fire-safe/wdzbn-yjy-lszh-b-flame-fire-resistant-closeup.png",
};

const safetyTypes = [
  ["Flame Retardant", "Helps reduce flame spread along the cable route.", "ZC-YJV"],
  ["Fire Resistant", "Helps maintain circuit integrity under fire conditions for a specified period according to project requirements.", "NH-YJV, NH-VV22"],
  ["LSZH", "Low smoke and halogen-free materials support safer evacuation environments.", "WDZ-YJY"],
  ["LSZH + Flame Retardant", "Combines low smoke zero halogen materials with enhanced flame retardant performance.", "WDZB-YJY"],
  ["LSZH + Fire Resistant", "Combines low smoke emission with fire resistant performance.", "WDZN-YJY"],
  ["LSZH + Flame Retardant + Fire Resistant", "A higher-performance combination for safety-focused power circuits.", "WDZBN-YJY"],
];

const modelRows = [
  ["ZC-YJV", "Flame Retardant XLPE Power Cable", "XLPE insulated power cable for standard flame retardant applications"],
  ["NH-YJV", "Fire Resistant XLPE Power Cable", "Fire resistant XLPE insulated power cable"],
  ["NH-VV22", "Fire Resistant Steel Tape Armoured Power Cable", "PVC insulated, steel tape armoured, fire resistant construction"],
  ["WDZ-YJY", "LSZH XLPE Power Cable", "Low smoke zero halogen power cable"],
  ["WDZB-YJY", "LSZH Class B Flame Retardant XLPE Power Cable", "LSZH cable with class B flame retardant performance"],
  ["WDZN-YJY", "LSZH Fire Resistant XLPE Power Cable", "LSZH and fire resistant"],
  ["WDZBN-YJY", "LSZH Class B Flame Retardant Fire Resistant XLPE Power Cable", "Combined LSZH, flame retardant and fire resistant performance"],
];

const parameterRows = [
  ["Rated Voltage", "0.6/1 kV"],
  ["Conductor", "Copper"],
  ["Insulation", "PVC or XLPE depending on product type"],
  ["Armour", "Unarmoured or steel tape armoured depending on product type"],
  ["Sheath", "PVC or LSZH / halogen-free sheath depending on product type"],
  ["Core Number", "1 core, 2 cores, 3 cores, 4 cores, 5 cores and combined configurations"],
  ["Typical Configurations", "1 × 300 mm², 3 × 6 mm², 4 × 1.5 mm², 3 × 25 mm², 3 × 70 + 2 × 35 mm², 3 × 185 + 1 × 95 mm²"],
  ["Performance Options", "Flame retardant, fire resistant, LSZH, LSZH flame retardant, LSZH fire resistant"],
];

const applications = [
  ["Commercial Buildings", "Power distribution circuits in office buildings, shopping centers and high-rise developments."],
  ["Hospitals & Public Buildings", "Suitable for projects where smoke control and circuit reliability are important."],
  ["Transport & Infrastructure", "Metro, airport, station and public infrastructure projects requiring safer cable systems."],
  ["Data Centers & Utility Rooms", "Power circuits in controlled indoor environments and technical rooms."],
  ["Emergency Power & Safety Systems", "Representative fire resistant and low-smoke cable options for emergency circuits and safety-related installations."],
];

export function LszhFireSafeProductPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "LSZH & Fire-safe Power Cables",
    description:
      "Low smoke zero halogen, flame retardant and fire resistant power cables for commercial buildings, public facilities, industrial distribution and emergency power circuits.",
    brand: { "@type": "Brand", name: "Huanyu Cable" },
    category: "LSZH & Fire-safe Power Cables",
  };

  return (
    <>
      <section className="product-detail-hero xlpe-product-hero">
        <div className="container product-detail-grid">
          <div>
            <Link className="back-link" href="/products">Back to all products</Link>
            <span className="eyebrow light">LSZH & Fire-safe Power Cables</span>
            <h1>LSZH & Fire-safe Power Cables</h1>
            <p>
              Safer low-voltage power cable solutions combining low smoke zero halogen materials, flame retardant performance and fire resistant options for commercial buildings, public infrastructure and industrial applications.
            </p>
            <div className="xlpe-hero-badges">
              {["0.6/1 kV", "LSZH Options", "Flame Retardant", "Fire Resistant"].map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
            <div className="hero-actions">
              <Link className="button" href="#inquiry">Request Quote</Link>
              <Link className="button button-ghost" href="#product-types">View Product Types</Link>
            </div>
          </div>
          <div>
            <div className="product-detail-image xlpe-hero-image">
              <Image src={lszhImages.hero} alt="LSZH and fire-safe power cable product family" width={1200} height={900} sizes="(max-width: 980px) 100vw, 45vw" priority />
            </div>
            <p className="product-image-note">Product image from the approved LSZH & Fire-safe product asset package.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container xlpe-overview-grid">
          <article className="xlpe-info-card">
            <span className="eyebrow">Product overview</span>
            <h2>Safety-performance cable options for building and infrastructure projects</h2>
            <p>
              LSZH and fire-safe power cables are widely used in projects where cable safety performance matters as much as electrical transmission. Depending on the application, these products can help reduce flame spread, limit smoke emission, reduce halogen release and maintain circuit integrity under fire conditions.
            </p>
          </article>
          <article className="xlpe-info-card">
            <span className="eyebrow">Representative supply scope</span>
            <h2>Flame retardant, fire resistant and low-smoke product variants</h2>
            <p>
              Huanyu Cable supplies representative low-voltage safety cable options based on common power cable structures, including flame retardant XLPE power cables, fire resistant power cables, low smoke zero halogen power cables and combined-performance variants.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-muted" id="product-types">
        <div className="container">
          <div className="section-heading lszh-section-heading">
            <div>
              <span className="eyebrow">Safety performance types</span>
              <h2>Representative performance categories without excessive test claims</h2>
            </div>
          </div>
          <div className="xlpe-model-grid lszh-type-grid">
            {safetyTypes.map(([type, description, models]) => (
              <article key={type}>
                <span>{models}</span>
                <h3>{type}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="representative-models">
        <div className="container xlpe-construction-grid">
          <div>
            <span className="eyebrow">Representative models</span>
            <h2>Common model names and website-friendly descriptions</h2>
            <div className="xlpe-table-wrap">
              <table className="xlpe-table lszh-model-table">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Recommended English Name</th>
                    <th>Typical Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {modelRows.map(([model, name, notes]) => (
                    <tr key={model}>
                      <td>{model}</td>
                      <td>{name}</td>
                      <td>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="xlpe-image-stack">
            <Image src={lszhImages.comparison} alt="WDZ-YJY and WDZB-YJY LSZH cable comparison" width={1200} height={900} sizes="(max-width: 980px) 100vw, 46vw" />
            <Image src={lszhImages.fireResistant} alt="Fire resistant NH-YJV and NH-VV22 power cable options" width={1200} height={900} sizes="(max-width: 980px) 100vw, 46vw" />
          </div>
        </div>
      </section>

      <section className="section section-muted" id="supporting-visuals">
        <div className="container xlpe-spec-layout">
          <div>
            <span className="eyebrow">Key technical parameters</span>
            <h2>Concise project quotation parameters</h2>
            <div className="spec-table xlpe-spec-table">
              {parameterRows.map(([label, value]) => (
                <div key={label}>
                  <strong>{label}</strong>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
          <figure className="xlpe-feature-image">
            <Image src={lszhImages.wdzn} alt="WDZN-YJY LSZH fire resistant XLPE power cable close-up" width={1200} height={900} sizes="(max-width: 980px) 100vw, 34vw" />
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Typical applications</span>
              <h2>Project environments where safety-performance cables are commonly reviewed</h2>
            </div>
          </div>
          <div className="application-grid lszh-application-grid">
            {applications.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Supporting visuals</span>
              <h2>Product views for safety cable discussions</h2>
            </div>
          </div>
          <div className="evidence-grid lszh-gallery-grid">
            {[
              [lszhImages.fireResistant, "Fire resistant NH-YJV and NH-VV22 cable options"],
              [lszhImages.comparison, "LSZH WDZ-YJY and WDZB-YJY comparison"],
              [lszhImages.wdzn, "WDZN-YJY LSZH fire resistant cable close-up"],
              [lszhImages.wdzbn, "WDZBN-YJY LSZH flame retardant fire resistant cable close-up"],
              [lszhImages.flameRetardant, "ZC-YJV flame retardant XLPE power cable close-up"],
            ].map(([src, alt]) => (
              <figure className="evidence-card" key={src}>
                <div className="evidence-image xlpe-gallery-image">
                  <Image src={src} alt={alt} width={900} height={900} sizes="(max-width: 760px) 100vw, 33vw" />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section quote-section" id="inquiry">
        <div className="container quote-grid">
          <div>
            <span className="eyebrow light">Quotation review</span>
            <h2>Send the model, performance option and project requirement for review.</h2>
            <p>Huanyu Cable will confirm product type, voltage, construction, quantity and document requirements before quotation.</p>
          </div>
          <InquiryForm compact />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
