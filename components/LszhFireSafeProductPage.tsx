import Image from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";

const lszhImages = {
  hero: "/images/products/final-refined/lszh-detail-hero-clean.webp",
  flameRetardant: "/images/products/lszh-fire-safe/zc-yjv-flame-retardant-closeup.png",
  fireResistant: "/images/products/final-refined/lszh-detail-fire-resistant-pair-clean.webp",
  comparison: "/images/products/final-refined/lszh-detail-model-pair-clean.webp",
  wdzn: "/images/products/lszh-fire-safe/wdzn-yjy-lszh-fire-resistant-closeup.png",
  wdzbn: "/images/products/final-refined/lszh-detail-parameter-closeup-clean.webp",
};

const requirementTypes = [
  [
    "LSZH / LSOH cable",
    "Low-smoke, halogen-free sheath or compound options help reduce smoke density and acidic gas release in occupied or smoke-sensitive spaces. LSZH is a material characteristic, not the same as fire-resistant circuit integrity.",
    "Material and sheath requirement",
  ],
  [
    "Flame-retardant cable",
    "Flame-retardant cable designs are reviewed to limit flame spread along a cable route. Single-cable or bunched-cable test requirements depend on the project specification and confirmed cable construction.",
    "Flame spread requirement",
  ],
  [
    "Fire-resistant cable",
    "Fire-resistant cable designs focus on maintaining circuit integrity under specified fire conditions. Fire barrier layers, mica tape or other details are confirmed according to the required test scope.",
    "Circuit integrity requirement",
  ],
];

const productFamilies = [
  [
    "LSZH low voltage power cables",
    "Low-smoke, halogen-free sheath options for low voltage power distribution cables where project routes require smoke and halogen control.",
  ],
  [
    "LSZH armoured power cables",
    "Unarmoured, STA or SWA designs can be reviewed separately according to the base cable structure and installation route.",
  ],
  [
    "Fire-resistant power cables",
    "Fire-resistant power cable options for critical circuits where circuit integrity is specified and tested by the project requirement.",
  ],
  [
    "LSZH building wires",
    "Building wire options can be reviewed when indoor distribution, lighting or panel wiring requires low-smoke materials.",
  ],
  [
    "LSZH control cables",
    "Control and instrumentation cable requirements can be reviewed where signal or control routes require LSZH or flame-retardant sheath options.",
  ],
  [
    "Project-specific MV cable review",
    "Medium voltage LSZH or fire-safe requirements can be reviewed per project, with screening, armour, sheath and test scope confirmed separately.",
  ],
];

const referenceRows = [
  ["WDZ", "Low smoke zero halogen reference", "Usually indicates low-smoke, halogen-free material requirements in the Chinese model system, subject to cable construction."],
  ["ZR", "Flame-retardant reference", "Usually indicates flame-retardant performance requirements. Test method and flame category are confirmed by project specification."],
  ["NH", "Fire-resistant reference", "Usually indicates a fire-resistant design for circuit integrity under specified test conditions."],
  ["WDZN", "LSZH fire-resistant reference", "A combined low-smoke, halogen-free and fire-resistant reference, confirmed against the actual cable structure."],
  ["WDZB / WDZBN", "Combined performance references", "Can indicate LSZH with flame-retardant or combined LSZH, flame-retardant and fire-resistant requirements where specified."],
];

const structureRows = [
  ["Conductor", "Copper or aluminum conductor according to the base cable design."],
  ["Insulation", "PVC, XLPE or other confirmed insulation material depending on the product family."],
  ["Fire-resistant layer", "Applied where fire-resistant circuit integrity is required, with material and layer design confirmed by test scope."],
  ["Filling / bedding", "Used for multi-core or armoured construction where required by the cable design."],
  ["Armour", "Unarmoured, steel tape armour or steel wire armour selected according to installation requirements."],
  ["LSZH outer sheath", "Low-smoke, halogen-free sheath compound reviewed where the project requires LSZH / LSOH performance."],
];

const reviewRows = [
  ["Voltage rating", "Low voltage, building wire, control cable or project-specific medium voltage requirement."],
  ["Cable type or application", "Power cable, building wire, control cable, emergency circuit or other confirmed use case."],
  ["Conductor material and size", "Copper or aluminum conductor, core number and cross-section."],
  ["LSZH / LSOH requirement", "Smoke, halogen and sheath compound requirements reviewed according to the project specification."],
  ["Flame-retardant requirement", "Single-cable or bunched-cable flame spread requirement reviewed per project."],
  ["Fire-resistant requirement", "Circuit integrity requirement, fire condition and duration reviewed only where specified and tested."],
  ["Armour requirement", "Unarmoured, STA, SWA or other confirmed mechanical protection requirement."],
  ["Outer sheath", "Material, colour, marking and route environment confirmed before quotation."],
  ["Documentation scope", "Required test report, inspection, packing, marking and project document scope reviewed before supply."],
  ["Quantity and destination", "Cable length, drum requirement, delivery destination and schedule."],
];

const applications = [
  ["Metro and railway facilities", "Cable requirements reviewed for transit stations, platforms, service routes and equipment rooms."],
  ["Hospitals and healthcare buildings", "Low-smoke or fire-resistant cable options for public building power and control routes."],
  ["Data centers and control rooms", "Cable routes where smoke control, power continuity or technical room requirements may apply."],
  ["Airports and transport hubs", "Public infrastructure routes where low-smoke or flame-retardant materials may be specified."],
  ["Shopping malls and public buildings", "Building power distribution routes with occupant safety and evacuation considerations."],
  ["Tunnels and basements", "Routes where smoke accumulation and evacuation conditions require careful cable selection."],
  ["Emergency lighting and alarm systems", "Fire-resistant circuit requirements reviewed according to the specified system design."],
  ["Critical power and control circuits", "Power and control routes where circuit integrity or low-smoke performance is requested."],
];

const faqs = [
  [
    "Is LSZH the same as fire-resistant?",
    "No. LSZH or LSOH describes low-smoke, halogen-free material behaviour. Fire-resistant cable focuses on circuit integrity under specified fire conditions.",
  ],
  [
    "Is flame-retardant the same as fire-resistant?",
    "No. Flame-retardant cable is reviewed to limit flame spread. Fire-resistant cable is reviewed to maintain circuit function under defined fire test conditions.",
  ],
  [
    "Can armoured power cables be supplied with LSZH sheath?",
    "Armoured cable designs can be reviewed with LSZH sheath requirements. Unarmoured, STA and SWA constructions should be confirmed separately.",
  ],
  [
    "What do WDZ, WDZN, ZR and NH generally refer to?",
    "They are Chinese model or performance references. Exact meaning depends on the base cable structure, material design and project testing requirements.",
  ],
  [
    "Can you supply LSZH cables for metro, hospitals or data centers?",
    "Project requirements for metro, healthcare, data center and public building routes can be reviewed against the required cable structure, performance and document scope.",
  ],
  [
    "What information is needed for quotation?",
    "Please send voltage, cable type, conductor, cores, cross-section, LSZH, flame-retardant or fire-resistant requirement, armour, standard, route, quantity and destination.",
  ],
  [
    "Can LSZH requirements be applied to medium voltage cables?",
    "Medium voltage LSZH or fire-safe requirements can be reviewed per project. MV screening, armour, sheath and test scope must be confirmed separately.",
  ],
];

const relatedProducts = [
  ["Low Voltage Armoured Power Cables", "/products/low-voltage-armoured-power-cables", "STA and SWA power cable structures that can be reviewed with LSZH or fire-safe requirements."],
  ["Medium Voltage Power Cables", "/products/medium-voltage-xlpe-power-cables", "MV cable requirements reviewed separately for voltage class, screen design, sheath and testing scope."],
  ["Building Wires & Flexible Cables", "/products/building-wires-flexible-cables", "Building wire options for indoor distribution, lighting and panel wiring projects."],
  ["Contact Huanyu Cable", "/contact", "Send your route, structure, safety-performance and document requirements for specification review."],
];

export function LszhFireSafeProductPage() {
  return (
    <>
      <section className="product-detail-hero xlpe-product-hero">
        <div className="container product-detail-grid">
          <div>
            <Link className="back-link" href="/products">Back to all products</Link>
            <span className="eyebrow light">LSZH & Fire-safe Cables</span>
            <h1>LSZH & Fire-safe Cables</h1>
            <p>
              Low-smoke, halogen-free, flame-retardant and fire-resistant cable options for public buildings, transit systems, data centers and critical power circuits.
            </p>
            <div className="xlpe-hero-badges">
              {["LSZH / LSOH sheath options", "Flame-retardant cable designs", "Fire-resistant circuit integrity options", "Reviewed against project specifications"].map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
            <div className="hero-actions">
              <Link className="button" href="#inquiry">Request Specification Review</Link>
              <Link className="button button-ghost" href="#performance-types">Compare Requirements</Link>
            </div>
          </div>
          <div>
            <div className="product-detail-image xlpe-hero-image final-refined-hero-image">
              <Image src={lszhImages.hero} alt="LSZH and fire-safe cable options for project review" width={1200} height={900} sizes="(max-width: 980px) 100vw, 45vw" priority />
            </div>
            <p className="product-image-note">Representative cable image for LSZH and fire-safe specification review. Final construction is confirmed according to project voltage, route and fire performance requirements.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container xlpe-overview-grid">
          <article className="xlpe-info-card">
            <span className="eyebrow">Product positioning</span>
            <h2>Safety requirements applied to proven cable structures</h2>
            <p>
              LSZH and fire-safe requirements are reviewed together with the base cable design, such as low voltage power cables, medium voltage power cables, control cables and building wires. They are not a separate cable system outside the conductor, insulation, screen, armour and sheath structure.
            </p>
          </article>
          <article className="xlpe-info-card">
            <span className="eyebrow">Specification review</span>
            <h2>Material, flame spread and circuit integrity requirements are reviewed separately</h2>
            <p>
              Low-smoke materials, flame-retardant performance and fire-resistant circuit integrity describe different project requirements. Huanyu Cable reviews the requested cable type, installation route, test scope and documentation before confirming availability.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-muted" id="performance-types">
        <div className="container">
          <div className="section-heading lszh-section-heading">
            <div>
              <span className="eyebrow">Core concepts</span>
              <h2>Understand LSZH, flame-retardant and fire-resistant requirements</h2>
            </div>
          </div>
          <div className="xlpe-model-grid lszh-type-grid">
            {requirementTypes.map(([title, description, tag]) => (
              <article key={title}>
                <span>{tag}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Product family scope</span>
              <h2>LSZH and fire-safe options across cable families</h2>
            </div>
            <p>Representative families are shown for initial selection. Exact voltage, construction, sheath compound and fire performance scope are confirmed by project specification.</p>
          </div>
          <div className="xlpe-model-grid lszh-type-grid">
            {productFamilies.map(([title, text]) => (
              <article key={title}>
                <span>Project review</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted product-detail-section">
        <div className="container">
          <div className="product-section-intro">
            <span className="eyebrow">Model references</span>
            <h2>Typical Chinese model references and performance meaning</h2>
          </div>
          <div className="product-section-grid product-section-grid-wide">
            <div className="product-section-main">
              <div className="xlpe-table-wrap">
                <table className="xlpe-table lszh-model-table">
                  <thead>
                    <tr>
                      <th>Reference</th>
                      <th>General meaning</th>
                      <th>Project review note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {referenceRows.map(([model, meaning, note]) => (
                      <tr key={model}>
                        <td>{model}</td>
                        <td>{meaning}</td>
                        <td>{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="review-note">
                WDZ, WDZN, NH and ZR references are not universal overseas standard equivalents. They should be interpreted together with the final cable type, material design and project test requirements.
              </div>
            </div>
            <aside className="product-section-visuals xlpe-image-stack product-compact-stack final-refined-stack">
              <Image src={lszhImages.comparison} alt="WDZ and WDZB LSZH cable reference comparison" width={1200} height={900} sizes="(max-width: 980px) 100vw, 46vw" />
              <Image src={lszhImages.fireResistant} alt="Fire-resistant NH cable options for specification review" width={1200} height={900} sizes="(max-width: 980px) 100vw, 46vw" />
            </aside>
          </div>
        </div>
      </section>

      <section className="section product-detail-section">
        <div className="container">
          <div className="product-section-intro">
            <span className="eyebrow">Typical construction</span>
            <h2>Common layers reviewed for LSZH and fire-safe cable designs</h2>
          </div>
          <div className="product-section-grid">
            <div className="product-section-main">
              <div className="xlpe-table-wrap">
                <table className="xlpe-table lszh-model-table">
                  <thead>
                    <tr>
                      <th>Layer</th>
                      <th>Specification review scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    {structureRows.map(([layer, scope]) => (
                      <tr key={layer}>
                        <td>{layer}</td>
                        <td>{scope}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="review-note">
                Exact layer design, fire barrier material, sheath compound and test scope are confirmed according to the project specification.
              </div>
            </div>
            <aside className="product-section-visuals">
              <figure className="xlpe-feature-image product-compact-feature">
                <Image src={lszhImages.wdzn} alt="Representative LSZH fire-resistant cable structure for project review" width={1200} height={900} sizes="(max-width: 980px) 100vw, 34vw" />
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
              <h2>Project environments where LSZH or fire-safe cables are commonly reviewed</h2>
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

      <section className="section product-detail-section">
        <div className="container">
          <div className="product-section-intro">
            <span className="eyebrow">Inquiry parameters</span>
            <h2>Typical parameters for LSZH / fire-safe cable review</h2>
          </div>
          <div className="product-section-grid">
            <div className="product-section-main">
              <div className="spec-table xlpe-spec-table">
                {reviewRows.map(([label, value]) => (
                  <div key={label}>
                    <strong>{label}</strong>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <aside className="product-section-visuals">
              <figure className="xlpe-feature-image product-compact-feature final-refined-feature">
                <Image src={lszhImages.wdzbn} alt="Representative combined LSZH flame-retardant fire-resistant cable option" width={1200} height={900} sizes="(max-width: 980px) 100vw, 34vw" />
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
              <h2>LSZH and fire-safe cable questions for project buyers</h2>
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
              <h2>Related cable families for specification review</h2>
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
            <span className="eyebrow light">LSZH and fire-safe cable inquiry</span>
            <h2>Send your LSZH or fire-safe cable requirements for specification review.</h2>
            <p>
              Please include voltage, cable type, conductor material, core number, cross-section, LSZH, flame-retardant or fire-resistant requirement, armour, sheath, project specification, installation route, quantity and destination.
            </p>
          </div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
