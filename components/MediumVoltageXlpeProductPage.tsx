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

const productTypes = [
  [
    "YJV / YJY",
    "Unarmoured MV cable",
    "XLPE insulated, PVC or PE sheathed medium voltage power cable for protected fixed installations where additional mechanical protection is not required.",
  ],
  [
    "YJV22 / YJV23",
    "STA MV cable",
    "Steel tape armoured medium voltage power cable for routes requiring radial mechanical protection, with PVC or PE sheath options.",
  ],
  [
    "YJV32 / YJV33",
    "SWA MV cable",
    "Steel wire armoured medium voltage power cable for projects requiring higher mechanical or tensile protection, subject to route design.",
  ],
  [
    "Project-specific designs",
    "Project-specific review",
    "Conductor material, screen design, sheath material, flame-retardant or LSZH requirements can be reviewed against confirmed specifications.",
  ],
];

const constructionRows = [
  ["Conductor", "Compacted copper or aluminum conductor, subject to project requirements."],
  ["Conductor screen", "Extruded semi-conductive layer."],
  ["Insulation", "XLPE insulation for medium voltage power distribution."],
  ["Insulation screen", "Extruded semi-conductive layer."],
  ["Metallic screen", "Copper tape screen or other confirmed metallic screen design."],
  ["Filling / bedding", "Fillers, wrapping and bedding applied for multi-core or armoured construction where required."],
  ["Armour", "Unarmoured, steel tape armoured or steel wire armoured construction according to installation conditions."],
  ["Outer sheath", "PVC or PE outer sheath, with flame-retardant or LSZH options reviewed per project."],
];

const specificationRows = [
  ["Rated voltage", "Typical classes include 3.6/6 kV, 6/10 kV, 8.7/15 kV, 12/20 kV, 18/30 kV, 21/35 kV and 26/35 kV, subject to confirmed project specifications."],
  ["Typical cable types", "YJV, YJY, YJV22, YJV23, YJV32 and YJV33 medium voltage cable designs."],
  ["Conductor material", "Copper or aluminum conductor options reviewed according to project requirements."],
  ["Number of cores", "Single-core or three-core designs, subject to voltage class, route design and confirmed specification."],
  ["Insulation and screens", "XLPE insulation with conductor screen, insulation screen and metallic screen according to confirmed design."],
  ["Armour option", "Unarmoured, steel tape armour or steel wire armour selected according to installation conditions."],
  ["Outer sheath", "PVC or PE sheath, with project-specific flame-retardant or LSZH options available for review."],
  ["Typical installation", "Underground duct, cable trench, cable tray, substation connection or direct-burial route where the cable design is properly selected."],
  ["Specification review", "Relevant GB/T and IEC-based requirements can be reviewed against the confirmed cable design, voltage class, structure and testing scope."],
];

const armourGuidance = [
  ["Unarmoured MV cables", "For protected routes such as ducts, trays or controlled installation environments."],
  ["STA MV cables", "For projects requiring steel tape armour and radial mechanical protection."],
  ["SWA MV cables", "For projects requiring steel wire armour or higher mechanical and tensile protection, subject to route design."],
];

const applications = [
  ["Utility distribution networks", "Medium voltage cable supply for project-based utility distribution routes."],
  ["Industrial substations", "Power cable connections for transformers, switchgear and substation equipment."],
  ["Industrial park power supply", "Fixed MV power distribution for factories, plants and industrial parks."],
  ["Commercial infrastructure", "Medium voltage cable for large buildings, campuses and public infrastructure."],
  ["Renewable energy connection", "Grid-connection cable requirements reviewed according to project specifications."],
  ["Large facility power systems", "Power distribution for data centers, large facilities and critical infrastructure projects."],
];

const qualityItems = [
  "Conductor resistance checks.",
  "Voltage test according to agreed requirements.",
  "Partial discharge test where applicable.",
  "Insulation and sheath dimensional checks.",
  "Screen and armour construction checks.",
  "Packing, marking and documentation review.",
];

const faqs = [
  [
    "What voltage range do your medium voltage power cables cover?",
    "Huanyu Cable reviews MV cable requirements from 3.6/6 kV up to 35 kV classes, including common 6/10 kV, 8.7/15 kV, 12/20 kV, 18/30 kV, 21/35 kV and 26/35 kV projects.",
  ],
  [
    "What is the difference between YJV, YJV22 and YJV32 medium voltage cables?",
    "YJV or YJY are unarmoured XLPE insulated MV cables. YJV22 and YJV23 use steel tape armour. YJV32 and YJV33 use steel wire armour.",
  ],
  [
    "Can you supply both copper and aluminum conductor MV cables?",
    "Copper and aluminum conductor options can be reviewed per project, based on voltage class, conductor size, route design and confirmed specifications.",
  ],
  [
    "Can Huanyu Cable manufacture MV cables according to IEC-based project specifications?",
    "IEC-based medium voltage cable requirements can be reviewed project by project against the confirmed cable design, testing scope and documentation requirements.",
  ],
  [
    "How should I choose between unarmoured, STA and SWA MV cables?",
    "The selection depends on installation route, mechanical protection, pulling conditions and project specification. Unarmoured, STA and SWA designs should be confirmed before quotation.",
  ],
  [
    "Can flame-retardant or LSZH sheath options be reviewed for MV cables?",
    "Flame-retardant or LSZH sheath requirements can be reviewed where the project specifies fire-safety or smoke-performance requirements for the MV cable route.",
  ],
  [
    "What information should I provide for a medium voltage cable inquiry?",
    "Please send voltage class, cable type, conductor material, cores, cross-section, armour, sheath, standard, quantity and installation environment.",
  ],
];

const relatedProducts = [
  ["Low Voltage Armoured Power Cables", "/products/low-voltage-armoured-power-cables", "STA and SWA low-voltage power cable options for underground and industrial distribution."],
  ["Low Voltage XLPE Power Cables", "/products/low-voltage-xlpe-power-cables", "YJV, YJY, YJLV and related XLPE insulated power cable families."],
  ["LSZH & Fire-safe Cables", "/products/lszh-fire-safe-cables", "Low-smoke, flame-retardant and fire-resistant cable options reviewed per project."],
  ["Overhead Line Products", "/products/overhead-insulated-cables", "Insulated overhead cables and bare overhead conductor options for line projects."],
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
  return (
    <>
      <section className="product-detail-hero xlpe-product-hero">
        <div className="container product-detail-grid">
          <div>
            <Link className="back-link" href="/products">Back to all products</Link>
            <span className="eyebrow light">Medium Voltage Power Cables</span>
            <h1>Medium Voltage Power Cables</h1>
            <p>
              Medium voltage XLPE power cables for 3.6/6 kV to 35 kV distribution networks, industrial substations, utility projects and fixed power supply systems.
            </p>
            <div className="xlpe-hero-badges">
              {["3.6/6 kV to 35 kV", "XLPE insulated MV cables", "Unarmoured / STA / SWA", "Project-based specification review"].map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
            <div className="hero-actions">
              <Link className="button" href="#inquiry">Request MV Cable Quote</Link>
              <Link className="button button-ghost" href="#specifications">View Specifications</Link>
            </div>
          </div>
          <div>
            <div className="product-detail-image xlpe-hero-image">
              <Image src={mvImages.hero} alt="Medium voltage XLPE power cable for distribution projects" width={1200} height={1200} sizes="(max-width: 980px) 100vw, 45vw" priority />
            </div>
            <p className="product-image-note">Representative medium voltage cable image for structure and specification review. Final construction is confirmed against the project specification before quotation.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container xlpe-overview-grid">
          <article className="xlpe-info-card">
            <span className="eyebrow">Product overview</span>
            <h2>XLPE insulated MV cable for project power distribution</h2>
            <p>
              Huanyu Cable supplies medium voltage XLPE power cables for distribution networks, substations, industrial plants, renewable energy grid-connection projects and large facilities. Cable construction is reviewed according to the confirmed voltage class, route conditions, conductor material, screen design, armour requirement and documentation scope.
            </p>
          </article>
          <article className="xlpe-info-card">
            <span className="eyebrow">Design options</span>
            <h2>Copper or aluminum, unarmoured, STA and SWA designs</h2>
            <p>
              Typical MV cable designs include YJV, YJY, YJV22, YJV23, YJV32 and YJV33. Steel tape armour and steel wire armour are selected by installation conditions, while conductor and sheath options are confirmed project by project.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Product range</span>
              <h2>Typical medium voltage cable types</h2>
            </div>
            <p>Representative constructions are listed for initial selection. Final cable type, voltage class and testing scope are confirmed during specification review.</p>
          </div>
          <div className="xlpe-model-grid">
            {productTypes.map(([model, title, text]) => (
              <article key={model}>
                <span>{model}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section product-detail-section" id="cable-construction">
        <div className="container">
          <div className="product-section-intro">
            <span className="eyebrow">Typical construction</span>
            <h2>Screened XLPE cable structure for medium voltage systems</h2>
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
                Medium voltage XLPE cable construction normally includes conductor screen, insulation screen and metallic screen layers. Exact screen design and materials are confirmed against the project specification.
              </div>
            </div>
            <aside className="product-section-visuals xlpe-image-stack mv-image-stack">
              <figure className="mv-visual-card mv-structure-card">
                <Image src={mvImages.structure} alt="Typical screened structure of medium voltage XLPE power cable" width={1200} height={1200} sizes="(max-width: 980px) 100vw, 46vw" />
              </figure>
              <figure className="mv-visual-card mv-product-card">
                <Image src={mvImages.angled} alt="Close-up of medium voltage XLPE power cable" width={1200} height={1200} sizes="(max-width: 980px) 100vw, 46vw" />
              </figure>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="specifications">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Voltage and specification review</span>
              <h2>Typical parameters for MV cable specification</h2>
            </div>
            <p>These parameters are for specification review and should be confirmed with the required cable design, installation environment and documentation requirements.</p>
          </div>
          <div className="xlpe-table-wrap">
            <table className="xlpe-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Typical project review scope</th>
                </tr>
              </thead>
              <tbody>
                {specificationRows.map(([item, scope]) => (
                  <tr key={item}>
                    <td>{item}</td>
                    <td>{scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="review-note">
            Manufactured according to confirmed project specifications and applicable GB/T or IEC-based requirements. Third-party inspection or testing can be discussed when required by the project.
          </div>
        </div>
      </section>

      <section className="section product-detail-section">
        <div className="container">
          <div className="product-section-intro">
            <span className="eyebrow">Armour selection</span>
            <h2>Choose unarmoured, STA or SWA cable by installation route</h2>
          </div>
          <div className="product-section-grid">
            <div className="product-section-main">
              <div className="xlpe-overview-grid xlpe-two-note-grid">
                {armourGuidance.map(([title, text]) => (
                  <article className="xlpe-info-card" key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
            <aside className="product-section-visuals">
              <figure className="xlpe-feature-image mv-feature-image">
                <Image src={mvImages.armoured} alt="Armoured medium voltage XLPE power cable option" width={1200} height={1200} sizes="(max-width: 980px) 100vw, 34vw" />
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
              <h2>Medium voltage cable for substations and industrial power distribution</h2>
            </div>
          </div>
          <ApplicationCards />
        </div>
      </section>

      <section className="section product-detail-section">
        <div className="container">
          <div className="product-section-intro">
            <span className="eyebrow">Quality and documentation support</span>
            <h2>Testing and records reviewed against confirmed requirements</h2>
          </div>
          <div className="product-section-grid">
            <div className="product-section-main">
              <p className="lead">
                Routine electrical tests, dimensional checks and documentation support can be provided according to confirmed project requirements and agreed testing scope.
              </p>
              <ul className="xlpe-configuration-list">
                {qualityItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <aside className="product-section-visuals">
              <figure className="xlpe-feature-image mv-feature-image">
                <Image src={mvImages.brochure} alt="Medium voltage cable documentation and product overview" width={1200} height={1200} sizes="(max-width: 980px) 100vw, 34vw" />
              </figure>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2>Medium voltage cable questions for project buyers</h2>
            </div>
          </div>
          <div className="xlpe-overview-grid">
            {faqs.map(([question, answer]) => (
              <article className="xlpe-info-card" key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Related products</span>
              <h2>Other cable families for project packages</h2>
            </div>
          </div>
          <div className="model-link-list">
            {relatedProducts.map(([title, href, note]) => (
              <Link className="model-link-card" href={href} key={title}>
                <strong>{title}</strong>
                <span>{note}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section quote-section" id="inquiry">
        <div className="container quote-grid">
          <div>
            <span className="eyebrow light">Medium voltage cable inquiry</span>
            <h2>Send your MV cable requirements for specification review.</h2>
            <p>
              Please include voltage class, cable type, conductor material, core number, cross-section, armour type, sheath material, standard, quantity and installation environment.
            </p>
          </div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
