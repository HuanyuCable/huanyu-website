import Image from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";

const mvImages = {
  hero: "/images/products/medium-voltage-xlpe/mv-xlpe-hero.png",
  angled: "/images/products/medium-voltage-xlpe/mv-xlpe-angled-closeup.png",
  structure: "/images/products/medium-voltage-xlpe/mv-xlpe-copper-tape-structure.png",
  brochure: "/images/products/medium-voltage-xlpe/mv-xlpe-overview-brochure.png",
  armoured: "/images/products/medium-voltage-xlpe/mv-xlpe-armoured-option.png",
};

const constructionRows = [
  ["Conductor", "Stranded copper conductor"],
  ["Conductor Screen", "Extruded semi-conductive layer"],
  ["Insulation", "XLPE insulation"],
  ["Insulation Screen", "Extruded semi-conductive layer"],
  ["Metallic Screen", "Copper tape screen"],
  ["Filler / Bedding", "Non-hygroscopic filler and wrapping / bedding materials"],
  ["Armour", "Unarmoured or armoured options depending on project requirement"],
  ["Outer Sheath", "PVC as standard; PE or LSZH options can be supplied upon request"],
];

const voltageRows = [
  ["6/10 kV", "Common medium-voltage distribution grade"],
  ["8.7/15 kV", "Typical 15 kV system cable grade; representative sample: 8.7/15 kV 3 × 300 mm²"],
  ["12/20 kV", "Used for 20 kV class distribution systems"],
  ["18/30 kV", "Used for 30 kV class distribution systems"],
  ["26/35 kV", "35 kV class cable grade, subject to applicable project and standard requirements"],
];

const configurationRows = [
  ["CU/XLPE/PVC", "Copper Conductor XLPE Insulated PVC Sheathed Medium Voltage Power Cable", "Cu / screen / XLPE / screen / PVC sheath"],
  ["CU/XLPE/CTS/PVC", "Copper Tape Screened XLPE Insulated PVC Sheathed Medium Voltage Power Cable", "Cu / screen / XLPE / screen / copper tape screen / PVC sheath"],
  ["CU/XLPE/CTS/STA/PVC", "Copper Tape Screened Steel Tape Armoured XLPE Medium Voltage Power Cable", "Cu / screen / XLPE / screen / copper tape screen / bedding / STA / PVC sheath"],
];

const typicalSpecs = [
  "CU/XLPE/CTS/PVC 8.7/15 kV 3 × 300 mm²",
  "CU/XLPE/CTS/PVC 12/20 kV 3 × 185 mm²",
  "CU/XLPE/CTS/PVC 18/30 kV 3 × 240 mm²",
  "CU/XLPE/CTS/STA/PVC 8.7/15 kV 3 × 300 mm²",
  "Other voltage grades, conductor sizes and sheath options can be supplied according to project requirements.",
];

const applications = [
  ["Distribution Networks", "Medium-voltage power distribution systems for utilities and industrial users."],
  ["Substations & Switchgear Connections", "Cable connections between transformers, switchgear, distribution rooms and power equipment."],
  ["Industrial Plants", "Power supply systems for factories, mining, chemical plants, manufacturing sites and large facilities."],
  ["Infrastructure Projects", "Suitable for fixed installation in cable trenches, ducts and project power distribution routes."],
];

function ApplicationCards() {
  return (
    <div className="application-grid xlpe-four-card-grid">
      {applications.map(([title, text], index) => (
        <article key={title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}

export function MediumVoltageXlpeProductPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Medium Voltage XLPE Power Cables",
    description:
      "Medium voltage XLPE insulated power cables with copper conductor, conductor screen, XLPE insulation, insulation screen, copper tape screen and PVC outer sheath for distribution networks, substations and industrial power systems.",
    brand: { "@type": "Brand", name: "Huanyu Cable" },
    category: "Medium Voltage XLPE Power Cables",
  };

  return (
    <>
      <section className="product-detail-hero xlpe-product-hero">
        <div className="container product-detail-grid">
          <div>
            <Link className="back-link" href="/products">Back to all products</Link>
            <span className="eyebrow light">Medium Voltage XLPE Power Cables</span>
            <h1>Medium Voltage XLPE Power Cables</h1>
            <p>
              Copper conductor medium-voltage power cables with XLPE insulation, conductor screen, insulation screen and copper tape screen for reliable power distribution up to 35 kV.
            </p>
            <div className="xlpe-hero-badges">
              {["IEC 60502-2 / GB/T 12706 series", "Copper Tape Screen", "3-Core Construction", "Up to 35 kV"].map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
            <div className="hero-actions">
              <Link className="button" href="#inquiry">Request Quote</Link>
              <Link className="button button-ghost" href="#cable-construction">View Cable Construction</Link>
            </div>
          </div>
          <div>
            <div className="product-detail-image xlpe-hero-image">
              <Image src={mvImages.hero} alt="Medium voltage copper tape screened XLPE power cable" width={1200} height={1200} sizes="(max-width: 980px) 100vw, 45vw" priority />
            </div>
            <p className="product-image-note">Representative product image for structure and quotation discussion. Final construction is confirmed against the applicable specification before quotation.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container xlpe-overview-grid">
          <article className="xlpe-info-card">
            <span className="eyebrow">Product overview</span>
            <h2>Screened construction for medium-voltage distribution</h2>
            <p>
              Medium voltage XLPE power cables are used for fixed power transmission and distribution in utility networks, substations, industrial plants and infrastructure projects. Compared with low-voltage power cables, medium-voltage cables include electrical screening layers around the conductor and insulation to control the electric field and support stable operation.
            </p>
          </article>
          <article className="xlpe-info-card">
            <span className="eyebrow">Representative structure</span>
            <h2>Copper tape screened cable with optional armour</h2>
            <p>
              A typical copper tape screened construction includes copper conductor, conductor screen, XLPE insulation, insulation screen, copper tape screen, filler or bedding and black PVC outer sheath. Armoured versions can be supplied for installation routes requiring additional mechanical protection.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-muted product-detail-section" id="cable-construction">
        <div className="container">
          <div className="product-section-intro">
            <span className="eyebrow">Cable construction</span>
            <h2>Medium-voltage screened cable layers</h2>
          </div>
          <div className="product-section-grid product-section-grid-wide">
            <div className="product-section-main">
            <div className="xlpe-table-wrap">
              <table className="xlpe-table">
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {constructionRows.map(([layer, description]) => (
                    <tr key={layer}>
                      <td>{layer}</td>
                      <td>{description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="review-note">
              Unlike low-voltage YJV / YJV22 cables, medium-voltage XLPE cables must clearly show conductor screen, insulation screen and metallic screen layers.
            </div>
          </div>
          <aside className="product-section-visuals xlpe-image-stack mv-image-stack">
            <figure className="mv-visual-card mv-structure-card">
              <Image src={mvImages.structure} alt="Medium voltage copper tape screened XLPE cable layer structure" width={1200} height={1200} sizes="(max-width: 980px) 100vw, 46vw" />
            </figure>
            <figure className="mv-visual-card mv-product-card">
              <Image src={mvImages.angled} alt="Angled close-up of medium-voltage XLPE power cable" width={1200} height={1200} sizes="(max-width: 980px) 100vw, 46vw" />
            </figure>
          </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Voltage grades & standards</span>
              <h2>Concise voltage-grade reference for project discussions</h2>
            </div>
          </div>
          <div className="xlpe-table-wrap">
            <table className="xlpe-table">
              <thead>
                <tr>
                  <th>Voltage Grade</th>
                  <th>Website Expression</th>
                </tr>
              </thead>
              <tbody>
                {voltageRows.map(([grade, expression]) => (
                  <tr key={grade}>
                    <td>{grade}</td>
                    <td>{expression}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="review-note">
            Manufactured according to IEC 60502-2, GB/T 12706 series or project-specified standards, subject to voltage grade and customer requirements.
          </div>
        </div>
      </section>

      <section className="section section-muted product-detail-section">
        <div className="container">
          <div className="product-section-intro">
            <span className="eyebrow">Common product types</span>
            <h2>Representative configurations with CTS defined as Copper Tape Screen</h2>
          </div>
          <div className="product-section-grid">
            <div className="product-section-main">
            <div className="xlpe-table-wrap">
              <table className="xlpe-table">
                <thead>
                  <tr>
                    <th>Product Type</th>
                    <th>Recommended English Name</th>
                    <th>Typical Structure</th>
                  </tr>
                </thead>
                <tbody>
                  {configurationRows.map(([type, name, structure]) => (
                    <tr key={type}>
                      <td>{type}</td>
                      <td>{name}</td>
                      <td>{structure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <aside className="product-section-visuals">
          <article className="xlpe-info-card mv-examples-card">
            <span className="eyebrow">Typical specifications</span>
            <h2>Representative examples</h2>
            <ul className="xlpe-configuration-list">
              {typicalSpecs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          </aside>
          </div>
        </div>
      </section>

      <section className="section product-detail-section">
        <div className="container">
          <div className="product-section-intro">
            <span className="eyebrow">Screened vs armoured</span>
            <h2>Electrical screening and mechanical protection are separate design concepts</h2>
          </div>
          <div className="product-section-grid">
            <div className="product-section-main">
            <div className="xlpe-overview-grid xlpe-two-note-grid">
              <article className="xlpe-info-card">
                <h3>Screened construction</h3>
                <p>Screened construction refers to the electrical screening layers used in medium-voltage cable design, including conductor screen, insulation screen and metallic screen.</p>
              </article>
              <article className="xlpe-info-card">
                <h3>Armoured construction</h3>
                <p>Armoured construction refers to an additional mechanical protection layer, such as steel tape armour, used when the installation route requires better resistance to external mechanical stress.</p>
              </article>
            </div>
          </div>
          <aside className="product-section-visuals">
          <figure className="xlpe-feature-image mv-feature-image">
            <Image src={mvImages.armoured} alt="Armoured medium-voltage XLPE power cable option" width={1200} height={1200} sizes="(max-width: 980px) 100vw, 34vw" />
          </figure>
          </aside>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Applications</span>
              <h2>Typical medium-voltage installation scenarios</h2>
            </div>
          </div>
          <ApplicationCards />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Supporting visuals</span>
              <h2>Product views for structure and project discussion</h2>
            </div>
          </div>
          <div className="evidence-grid">
            {[
              [mvImages.angled, "Medium-voltage XLPE cable angled product close-up"],
              [mvImages.brochure, "Medium-voltage XLPE cable overview brochure visual"],
              [mvImages.armoured, "Medium-voltage XLPE cable armoured option"],
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
            <h2>Send the voltage grade, construction and project requirement for review.</h2>
            <p>Huanyu Cable will confirm available construction, standard, quantity and document requirements before quotation.</p>
          </div>
          <InquiryForm compact />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
