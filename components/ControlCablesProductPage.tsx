import Image from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";

const productRows = [
  ["KVV", "PVC insulated control cable", "Fixed control wiring for panels, equipment and industrial circuits"],
  ["KVVP", "Screened PVC insulated control cable", "Control routes where screening is requested for the project"],
  ["KVVR", "Flexible control cable", "Control wiring requiring a more flexible stranded conductor construction"],
  ["KVVRP", "Screened flexible control cable", "Flexible control routes with a project-requested screen"],
  ["KVV22", "Steel tape armoured control cable", "Fixed routes requiring additional mechanical protection"],
];

const constructionRows = [
  ["Conductor", "Copper conductor, solid or stranded according to model and specification"],
  ["Insulation", "PVC or project-specified insulation options reviewed before quotation"],
  ["Screen", "Optional copper tape, copper wire braid or other project-specified screen"],
  ["Armour", "Optional steel tape armour for selected fixed control cable routes"],
  ["Sheath", "PVC or project-specified sheath material"],
];

const applicationCards = [
  ["Control Panels", "Multicore control cables for panel wiring, terminal connections and equipment control circuits."],
  ["Industrial Equipment", "Control cable options for machinery, production lines and facility equipment wiring."],
  ["Instrumentation Routes", "Screened variants can be reviewed where signal route requirements are specified."],
  ["Project Packages", "Supplied as a supporting cable line together with power cable and building wire packages."],
];

const inquiryRows = [
  ["Circuit requirement", "Control circuit, instrumentation route, panel wiring or equipment connection"],
  ["Cable construction", "Model, cores, conductor size, screen, armour and sheath"],
  ["Installation route", "Indoor tray, conduit, direct route, panel or equipment wiring"],
  ["Project documents", "Required tests, packing, drum length, labels and destination documents"],
];

export function ControlCablesProductPage() {
  return (
    <>
      <section className="product-detail-hero xlpe-product-hero">
        <div className="container product-detail-grid">
          <div>
            <Link className="back-link" href="/products">Back to all products</Link>
            <span className="eyebrow light">Control & Instrumentation Cables</span>
            <h1>Control & Instrumentation Cables</h1>
            <p>
              Control cables, screened control cables and instrumentation cable options are reviewed as supporting products for equipment wiring, control panels and industrial project packages.
            </p>
            <div className="xlpe-hero-badges">
              {["KVV", "KVVP", "KVVR", "KVVRP", "KVV22"].map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
            <div className="hero-actions">
              <Link className="button" href="#inquiry">Request Quote</Link>
              <Link className="button button-ghost" href="#representative-models">View Models</Link>
            </div>
          </div>
          <div>
            <div className="product-detail-image xlpe-hero-image control-cable-hero-image">
              <Image
                src="/images/products/control-instrumentation/control-instrumentation-cable-hero.png"
                alt="Multicore control and instrumentation cable close-up"
                width={1200}
                height={900}
                sizes="(max-width: 980px) 100vw, 45vw"
                priority
              />
            </div>
            <p className="product-image-note">
              Representative product-family image. Final cable construction is confirmed against the project specification before quotation.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container xlpe-overview-grid">
          <article className="xlpe-info-card">
            <span className="eyebrow">Product role</span>
            <h2>Supporting cables for control and signal routes</h2>
            <p>
              These products are used with power cable packages when a project also requires multicore control wiring, panel wiring or instrumentation routes. They are specified by circuit function, core count, conductor size and installation condition.
            </p>
          </article>
          <article className="xlpe-info-card">
            <span className="eyebrow">Specification review</span>
            <h2>Screened, flexible and armoured variants are reviewed separately</h2>
            <p>
              Screening, flexibility and armour are construction choices for different route conditions. They are not interchangeable, so each requested model is checked against the application and document requirements before quotation.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-muted" id="representative-models">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Representative models</span>
              <h2>Control cable options for project packages</h2>
            </div>
            <p>Chinese model references are used to describe construction families and are reviewed against the requested project specification.</p>
          </div>
          <div className="xlpe-table-wrap">
            <table className="xlpe-table">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Construction family</th>
                  <th>Typical review point</th>
                </tr>
              </thead>
              <tbody>
                {productRows.map(([model, family, note]) => (
                  <tr key={model}>
                    <td>{model}</td>
                    <td>{family}</td>
                    <td>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section product-detail-section">
        <div className="container">
          <div className="product-section-intro">
            <span className="eyebrow">Construction options</span>
            <h2>Typical control cable structure</h2>
          </div>
          <div className="product-section-grid">
            <div className="product-section-main">
              <div className="spec-table xlpe-spec-table">
                {constructionRows.map(([label, value]) => (
                  <div key={label}>
                    <strong>{label}</strong>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <aside className="product-section-visuals">
              <article className="xlpe-info-card product-support-card">
                <span className="eyebrow">Selection note</span>
                <h2>Match construction to the route</h2>
                <p>
                  Unscreened, screened, flexible and armoured control cables serve different installation needs. Selection should be based on route protection, signal environment, movement requirement and project documentation.
                </p>
              </article>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Typical applications</span>
              <h2>Where control cables are commonly requested</h2>
            </div>
          </div>
          <div className="application-grid xlpe-four-card-grid">
            {applicationCards.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section product-detail-section">
        <div className="container">
          <div className="product-section-intro">
            <span className="eyebrow">Quotation inputs</span>
            <h2>Typical parameters for control cable review</h2>
          </div>
          <div className="product-section-grid">
            <div className="product-section-main">
              <div className="spec-table xlpe-spec-table">
                {inquiryRows.map(([label, value]) => (
                  <div key={label}>
                    <strong>{label}</strong>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <aside className="product-section-visuals">
              <article className="xlpe-info-card product-support-card">
                <span className="eyebrow">Package supply</span>
                <h2>Reviewed together with the main cable schedule</h2>
                <p>
                  Control cables are normally confirmed alongside the broader cable list, including power cables, building wires, installation environment, packing and required documentation.
                </p>
              </article>
            </aside>
          </div>
        </div>
      </section>

      <section className="section quote-section" id="inquiry">
        <div className="container quote-grid">
          <div>
            <span className="eyebrow light">Quotation review</span>
            <h2>Send the model, core count, conductor size and route condition for review.</h2>
            <p>Huanyu Cable will confirm construction, screening, armour, sheath, quantity and document requirements before quotation.</p>
          </div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
