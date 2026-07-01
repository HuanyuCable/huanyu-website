import Link from "next/link";
import Image from "next/image";
import { InquiryForm } from "@/components/InquiryForm";

const productCards = [
  {
    model: "BV",
    name: "Copper Conductor PVC Insulated Wire",
    conductor: "Copper conductor",
    insulation: "PVC insulation",
    use: "Fixed building wiring, residential wiring, lighting and socket circuits",
    image: "/images/products/building-wires-flexible/bv-copper-pvc-wire.png",
    imageAlt: "BV copper conductor PVC insulated wire with solid copper conductor",
  },
  {
    model: "BVR",
    name: "Copper Conductor PVC Insulated Flexible Wire",
    conductor: "Stranded copper conductor",
    insulation: "PVC insulation",
    use: "Distribution box internal wiring, flexible building wiring routes and easier installation points",
    image: "/images/products/building-wires-flexible/bvr-stranded-copper-pvc-flexible-wire.png",
    imageAlt: "BVR PVC insulated flexible wire with stranded copper conductor",
  },
];

const comparisonRows = [
  ["Conductor", "Copper conductor", "Stranded copper conductor"],
  ["Insulation", "PVC", "PVC"],
  ["Flexibility", "For fixed wiring", "More flexible for installation"],
  ["Core Type", "Single core", "Single core"],
  ["Typical Application", "Residential and building fixed wiring", "Distribution boxes and flexible wiring routes"],
];

const parameterRows = [
  ["Product Models", "BV, BVR"],
  ["Conductor", "Copper"],
  ["Insulation", "PVC"],
  ["Conductor Type", "Solid copper conductor for BV; stranded copper conductor for BVR"],
  ["Core Type", "Single core"],
  ["Typical Voltage Grade", "Common building wire voltage grades"],
  ["Typical Application", "Residential wiring, lighting circuits, socket circuits and distribution board internal wiring"],
  ["Colour Options", "Confirmed according to project requirements"],
  ["Standards", "Project-specified standards and applicable building-wire requirements"],
];

const applications = [
  ["Residential Wiring", "Fixed wiring routes for residential and interior building circuits."],
  ["Lighting Circuits", "PVC insulated copper wire options for lighting circuit installation."],
  ["Socket Connections", "Building wire options for socket and interior power connection routes."],
  ["Distribution Board Internal Wiring", "BVR flexible wire options for wiring inside distribution boxes and panels."],
];

export function BuildingWiresFlexibleCablesPage() {
  return (
    <>
      <section className="product-detail-hero xlpe-product-hero building-wire-hero">
        <div className="container product-detail-grid">
          <div>
            <Link className="back-link" href="/products">Back to all products</Link>
            <span className="eyebrow light">Building Wires & Flexible Cables</span>
            <h1>Building Wires & Flexible Cables</h1>
            <p>
              PVC insulated building wires and flexible copper conductor cables for residential wiring, interior distribution and selected general-purpose installation applications.
            </p>
            <div className="xlpe-hero-badges">
              {["BV", "BVR", "PVC Insulation", "Copper Conductor", "Common building wire voltage grades"].map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
            <div className="hero-actions">
              <Link className="button" href="#inquiry">Request Quote</Link>
              <Link className="button button-ghost" href="#representative-products">View BV / BVR</Link>
            </div>
          </div>
          <div>
            <div className="product-detail-image building-wire-hero-image">
              <Image
                src="/images/products/building-wires-flexible/building-wires-bv-bvr-hero.png"
                alt="BV and BVR copper PVC building wires with solid and stranded copper conductors"
                width={1200}
                height={900}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container xlpe-overview-grid">
          <article className="xlpe-info-card">
            <span className="eyebrow">Product overview</span>
            <h2>BV for fixed building wiring</h2>
            <p>
              BV is a copper conductor PVC insulated wire used mainly for fixed building wiring, residential wiring, lighting circuits and socket circuits. It is positioned as the primary fixed wiring product on this page.
            </p>
          </article>
          <article className="xlpe-info-card">
            <span className="eyebrow">Flexible wiring route</span>
            <h2>BVR for easier installation routes</h2>
            <p>
              BVR uses a stranded copper conductor with PVC insulation. It is commonly reviewed for distribution box internal wiring, flexible building wiring routes and installation points requiring easier bending.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-muted" id="representative-products">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Representative products</span>
              <h2>BV and BVR representative building-wire products</h2>
            </div>
          </div>
          <div className="building-wire-card-grid">
            {productCards.map((product) => (
              <article className="building-wire-product-card" key={product.model}>
                <div className="building-wire-product-image">
                  <Image src={product.image} alt={product.imageAlt} width={900} height={675} />
                </div>
                <div>
                  <span className="eyebrow">{product.model}</span>
                  <h3>{product.name}</h3>
                  <div className="spec-table compact-spec-table">
                    <div><strong>Structure</strong><span>{product.conductor} / {product.insulation}</span></div>
                    <div><strong>Typical use</strong><span>{product.use}</span></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section product-detail-section">
        <div className="container">
          <div className="product-section-intro">
            <span className="eyebrow">Structure & construction</span>
            <h2>BV / BVR comparison</h2>
          </div>
          <div className="product-section-grid">
            <div className="product-section-main">
            <div className="xlpe-table-wrap">
              <table className="xlpe-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>BV</th>
                    <th>BVR</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([item, bv, bvr]) => (
                    <tr key={item}>
                      <td>{item}</td>
                      <td>{bv}</td>
                      <td>{bvr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <aside className="product-section-visuals">
          <article className="xlpe-info-card product-support-card">
            <span className="eyebrow">Secondary options</span>
            <h2>Other flexible wire options</h2>
            <p>
              Additional flexible cable types such as RV, RVV, RVVB and other light-duty installation wires can be discussed according to project requirements.
            </p>
          </article>
          </aside>
          </div>
        </div>
      </section>

      <section className="section section-muted product-detail-section">
        <div className="container">
          <div className="product-section-intro">
            <span className="eyebrow">Key technical parameters</span>
            <h2>Typical parameters for building wire review</h2>
          </div>
          <div className="product-section-grid">
            <div className="product-section-main">
            <div className="spec-table xlpe-spec-table">
              {parameterRows.map(([label, value]) => (
                <div key={label}>
                  <strong>{label}</strong>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
          <aside className="product-section-visuals product-support-panel">
            <span className="eyebrow">Typical applications</span>
            <div className="application-grid building-wire-application-grid">
              {applications.map(([title, text], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </aside>
          </div>
        </div>
      </section>

      <section className="section quote-section" id="inquiry">
        <div className="container quote-grid">
          <div>
            <span className="eyebrow light">Quotation review</span>
            <h2>Send the model, wire size, colour and application requirement for review.</h2>
            <p>Huanyu Cable will confirm conductor structure, insulation, packing, quantity and document requirements before quotation.</p>
          </div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
