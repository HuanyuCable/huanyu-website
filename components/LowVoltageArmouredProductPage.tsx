import Image from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { site } from "@/lib/site";

const heroImage = "/images/products/low-voltage-xlpe/yjv22-yjv23-hero.png";

const cableTypes = [
  ["YJV22", "STA + PVC sheath", "XLPE insulated, steel tape armoured, PVC sheathed power cable."],
  ["YJV23", "STA + PE sheath", "XLPE insulated, steel tape armoured, PE sheathed power cable."],
  ["YJV32", "SWA + PVC sheath", "XLPE insulated, steel wire armoured, PVC sheathed power cable."],
  ["YJV33", "SWA + PE sheath", "XLPE insulated, steel wire armoured, PE sheathed power cable."],
];

const constructionRows = [
  [
    "Conductor",
    "Copper conductor is commonly supplied; aluminium conductor can be reviewed for suitable project requirements.",
    "Cu or Al conductor, conductor class and cross-section.",
  ],
  [
    "Insulation",
    "XLPE insulation for low voltage power cable construction.",
    "Rated voltage and insulation requirement.",
  ],
  [
    "Armour",
    "Steel tape armour and steel wire armour are reviewed according to installation method and mechanical protection requirements.",
    "STA or SWA, installation route, trench, duct or direct burial condition.",
  ],
  [
    "Outer sheath",
    "PVC sheath is commonly used for general installation; PE sheath can be reviewed where project conditions require it.",
    "PVC or PE sheath, moisture exposure, soil condition and corrosion consideration.",
  ],
];

const technicalRows = [
  ["Rated voltage", "Mainly 0.6/1 kV; 1.8/3 kV construction reviewed according to project requirements."],
  ["Core configuration", "Single-core and multi-core designs such as 2-core, 3-core, 4-core, 5-core, 3+1-core, 3+2-core and 4+1-core."],
  ["Size expression", "3 x 120 mm2 means three cores, each with a nominal cross-sectional area of 120 mm2. 3 x 240 + 1 x 120 mm2 means three main cores of 240 mm2 plus one reduced-size core of 120 mm2."],
  ["Referenced standards", "Commonly referenced standards include GB/T 12706.1 and IEC 60502-1. Final construction and testing requirements should be reviewed according to project specifications."],
  ["Performance options", "Flame-retardant, fire-resistant and LSZH versions can be reviewed when required by the project."],
];

const applications = [
  ["Underground power distribution", "Distribution networks and local power supply routes."],
  ["Industrial plants", "Factory, workshop and industrial facility power feeders."],
  ["Infrastructure projects", "Utility, municipal and project-based power installations."],
  ["Cable trench installation", "Fixed installation routes requiring additional mechanical protection."],
  ["Duct installation", "Cable routes with controlled pulling and route protection."],
  ["Direct burial where suitable", "Reviewed according to soil condition, sheath material, armour type and project specification."],
];

const inquiryItems = [
  "Rated voltage",
  "Cable type or armour type",
  "Core number and conductor size",
  "Copper or aluminium conductor",
  "PVC or PE sheath",
  "Installation environment",
  "Referenced standard",
  "Quantity and delivery plan",
];

const faqs = [
  ["What is the difference between YJV22 and YJV23?", "Both use XLPE insulation and steel tape armour. YJV22 uses a PVC outer sheath, while YJV23 uses a PE outer sheath."],
  ["What is the difference between YJV32 and YJV33?", "Both use XLPE insulation and steel wire armour. YJV32 uses a PVC outer sheath, while YJV33 uses a PE outer sheath."],
  ["What is the difference between steel tape armour and steel wire armour?", "Steel tape armour and steel wire armour are selected according to installation method, mechanical protection requirements and project specifications."],
  ["Can aluminium conductor versions be supplied?", "Copper conductor is commonly supplied. Aluminium conductor versions can be reviewed according to suitable project requirements."],
  ["Can the cable be supplied according to IEC or GB/T standards?", "GB/T 12706.1 and IEC 60502-1 are commonly referenced for low voltage XLPE power cables. Final construction and testing requirements should be reviewed according to project specifications."],
  ["Can flame-retardant, fire-resistant or LSZH versions be considered?", "Yes. Flame-retardant, fire-resistant and LSZH versions can be reviewed when required by the project. Detailed safety cable requirements are handled under the LSZH & Fire-safe Cables range."],
];

export function LowVoltageArmouredProductPage() {
  return (
    <>
      <section className="product-detail-hero xlpe-product-hero">
        <div className="container product-detail-grid">
          <div>
            <Link className="back-link" href="/products">Back to all products</Link>
            <span className="eyebrow light">Core Product | Low Voltage Armoured Cable</span>
            <h1>Low Voltage Armoured Power Cables</h1>
            <p>
              XLPE insulated armoured power cables for underground distribution, industrial power systems and infrastructure projects. Main constructions include YJV22, YJV23, YJV32 and YJV33 with steel tape armour or steel wire armour.
            </p>
            <div className="xlpe-hero-badges">
              {["0.6/1 kV main range", "YJV22 / YJV23", "YJV32 / YJV33", "STA / SWA"].map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
            <div className="hero-actions">
              <Link className="button" href="#inquiry">Request Technical Review</Link>
              <a className="button button-ghost" href={`mailto:${site.email}`}>Email Specification</a>
            </div>
          </div>
          <div className="xlpe-image-stack">
            <div className="product-detail-image xlpe-hero-image">
              <Image src={heroImage} alt="Low voltage armoured XLPE power cable" width={1200} height={900} sizes="(max-width: 980px) 100vw, 45vw" priority />
            </div>
            <aside className="spec-aside">
              <h3>Typical Project Review Points</h3>
              <ol>
                <li>0.6/1 kV as the main low voltage range</li>
                <li>1.8/3 kV construction reviewed according to project requirements</li>
                <li>Steel tape armour or steel wire armour</li>
                <li>PVC or PE outer sheath options</li>
                <li>GB/T 12706.1 and IEC 60502-1 commonly referenced</li>
              </ol>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Product Scope</span>
              <h2>Low Voltage Armoured Cables for Fixed Power Distribution</h2>
            </div>
            <p>
              Huanyu Cable supplies low voltage armoured power cables for fixed installation where mechanical protection is required. Cable construction, testing requirements and compliance documents should be reviewed according to the project specification.
            </p>
          </div>
          <div className="xlpe-model-grid">
            {cableTypes.map(([type, label, description]) => (
              <article key={type}>
                <span>{label}</span>
                <h3>{type}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Construction Options</span>
              <h2>Armour and Sheath Options for Project Installation</h2>
            </div>
            <p>
              Steel tape armour, steel wire armour, PVC sheath and PE sheath are selected according to cable route, mechanical protection requirements, moisture exposure, soil conditions and project specifications.
            </p>
          </div>
          <div className="xlpe-table-wrap">
            <table className="xlpe-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Typical options</th>
                  <th>Information to specify</th>
                </tr>
              </thead>
              <tbody>
                {constructionRows.map(([item, options, information]) => (
                  <tr key={item}>
                    <td>{item}</td>
                    <td>{options}</td>
                    <td>{information}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" id="technical-range">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Technical Range</span>
              <h2>Typical Technical Parameters for Review</h2>
            </div>
            <p>
              The following specification fields are commonly reviewed before quotation, including voltage grade, conductor material, core configuration, armour type, sheath material and referenced standards.
            </p>
          </div>
          <div className="spec-table xlpe-spec-table">
            {technicalRows.map(([label, value]) => (
              <div key={label}>
                <strong>{label}</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>
          <div className="review-note">
            For detailed low-smoke, halogen-free, flame-retardant and fire-resistant cable options, please refer to the <Link href="/products/lszh-fire-safe-cables">LSZH & Fire-safe Cables</Link> range.
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Applications</span>
              <h2>Common Applications for Low Voltage Armoured Power Cables</h2>
            </div>
            <p>
              Low voltage armoured cables are commonly used in fixed power distribution routes where mechanical protection is required.
            </p>
          </div>
          <div className="three-column-list xlpe-application-cards">
            {applications.map(([title, description], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="inquiry-preparation">
        <div className="container product-spec-layout">
          <div className="spec-main">
            <span className="eyebrow">Inquiry Preparation</span>
            <h2>Information Needed for Technical Review and Quotation</h2>
            <p>
              For a faster technical review and quotation, please provide the main project requirements such as rated voltage, core configuration, conductor size, armour type, sheath material, installation environment and quantity.
            </p>
            <ul className="check-list">
              {inquiryItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <aside className="spec-aside">
            <h3>Quotation focus</h3>
            <ol>
              <li>Confirm YJV22, YJV23, YJV32 or YJV33.</li>
              <li>Specify STA or SWA with PVC or PE sheath.</li>
              <li>Share route, installation and project standard requirements.</li>
            </ol>
          </aside>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2>Common Questions for Low Voltage Armoured Cables</h2>
            </div>
          </div>
          <div className="three-column-list xlpe-application-cards">
            {faqs.map(([question, answer], index) => (
              <article key={question}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{question}</h3>
                <p>{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section quote-section" id="inquiry">
        <div className="container quote-grid">
          <div>
            <span className="eyebrow light">Quotation review</span>
            <h2>Send the cable type, size and project requirement for review.</h2>
            <p>Huanyu Cable will confirm available construction, standard, quantity and document requirements before quotation.</p>
          </div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
