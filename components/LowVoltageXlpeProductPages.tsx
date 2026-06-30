import Image from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";

const yjv22Images = {
  hero: "/images/products/low-voltage-xlpe/yjv22-yjv23-hero.png",
  angled: "/images/products/low-voltage-xlpe/yjv23-angled-closeup.png",
  structure: "/images/products/low-voltage-xlpe/yjv22-yjv23-structure-comparison.png",
  marking: "/images/products/low-voltage-xlpe/yjv22-sheath-marking-detail.png",
};

const lowVoltageArmouredImages = {
  hero: "/media/products/hero/lv-armoured-power-cable-hero.webp",
};

const familyImages = {
  hero: "/images/products/low-voltage-xlpe/xlpe-family-hero-yjv-yjy-yjlv-yjlv22.png",
  unarmoured: "/images/products/low-voltage-xlpe/xlpe-unarmoured-yjv-yjy-yjlv.png",
  yjlv22: "/images/products/low-voltage-xlpe/yjlv22-armoured-aluminium-closeup.png",
};

const yjv22Specs = [
  ["Rated Voltage", "0.6/1 kV"],
  ["Conductor", "Copper"],
  ["Insulation", "XLPE"],
  ["Armour", "Steel tape armour"],
  ["Inner Sheath", "PVC inner sheath / bedding"],
  ["Outer Sheath", "PVC for YJV22; PE for YJV23"],
  ["Core Number", "Single-core, 2-core, 3-core, 4-core, 5-core, and multi-core with reduced neutral / earth conductor options"],
  ["Cross-sectional Area", "Wide range available. Typical configurations include 3 × 70 mm² + 1 × 35 mm², 3 × 120 mm² + 1 × 70 mm², 4 × 50 mm² and more. Other sizes available upon request."],
  ["Standards", "GB/T 12706.1, IEC 60502-1, IEC 60228"],
  ["Frequency", "50 Hz"],
  ["Installation", "Indoor, outdoor, tunnel, cable trench, duct and underground fixed installation"],
];

const familySpecs = [
  ["Rated Voltage", "0.6/1 kV"],
  ["Conductor", "Copper or aluminium, solid or stranded depending on size and standard requirement"],
  ["Insulation", "XLPE"],
  ["Outer Sheath", "PVC for YJV / YJLV / YJLV22; PE for YJY"],
  ["Armour", "Unarmoured for YJV, YJY and YJLV; steel tape armoured for YJLV22"],
  ["Core Number", "Single-core, 2-core, 3-core, 4-core, 5-core, and multi-core with reduced neutral or earth conductor options"],
  ["Cross-sectional Area", "Wide range available. Typical examples include 2 × 4 mm², 3 × 25 + 1 × 16 mm², 3 × 70 + 1 × 35 mm², 4 × 50 mm² and 5 × 120 mm²."],
  ["Standards", "GB/T 12706.1, IEC 60502-1, IEC 60228"],
  ["Installation", "Indoor, outdoor, cable trench, duct, tunnel and underground fixed installation depending on cable structure"],
  ["Optional Variants", "Flame retardant, LSZH or fire-resistant variants can be introduced separately under related product pages"],
];

const constructionItems = [
  "Copper conductor",
  "XLPE insulation",
  "Filler / bedding",
  "Inner sheath",
  "Steel tape armour",
  "Outer sheath",
];

const yjv22Applications = [
  ["Power Distribution", "Suitable for fixed low-voltage power transmission and distribution systems."],
  ["Underground & Cable Trench Installation", "Ideal for installation routes requiring additional mechanical protection."],
  ["Industrial & Infrastructure Projects", "Used in buildings, industrial plants, utilities and infrastructure power systems."],
];

const familyApplications = [
  ["Building & Facility Distribution", "Suitable for fixed low-voltage power distribution in buildings, commercial facilities and industrial workshops."],
  ["Industrial Installation", "Used in cable trench, duct, indoor and outdoor fixed installations where reliable low-voltage power delivery is required."],
  ["Projects Requiring Mechanical Protection", "YJLV22 provides additional mechanical protection for underground or protected route installation compared with unarmoured cable types."],
];

const lowVoltageArmouredTypes = [
  ["YJV22", "STA + PVC sheath", "XLPE insulated, steel tape armoured, PVC sheathed power cable."],
  ["YJV23", "STA + PE sheath", "XLPE insulated, steel tape armoured, PE sheathed power cable."],
  ["YJV32", "SWA + PVC sheath", "XLPE insulated, steel wire armoured, PVC sheathed power cable."],
  ["YJV33", "SWA + PE sheath", "XLPE insulated, steel wire armoured, PE sheathed power cable."],
];

const lowVoltageConstructionRows = [
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

const lowVoltageTechnicalRows = [
  ["Rated voltage", "Mainly 0.6/1 kV; 1.8/3 kV construction reviewed according to project requirements."],
  ["Core configuration", "Single-core and multi-core designs such as 2-core, 3-core, 4-core, 5-core, 3+1-core, 3+2-core and 4+1-core."],
  ["Size expression", "3×120 mm² means three cores, each with a nominal cross-sectional area of 120 mm². 3×240 + 1×120 mm² means three main cores of 240 mm² plus one reduced-size core of 120 mm²."],
  ["Referenced standards", "Commonly referenced standards include GB/T 12706.1 and IEC 60502-1. Final construction and testing requirements should be reviewed according to project specifications."],
  ["Performance options", "Flame-retardant, fire-resistant and LSZH versions can be reviewed when required by the project."],
];

const lowVoltageApplications = [
  ["Underground power distribution", "Distribution networks and local power supply routes."],
  ["Industrial plants", "Factory, workshop and industrial facility power feeders."],
  ["Infrastructure projects", "Utility, municipal and project-based power installations."],
  ["Cable trench installation", "Fixed installation routes requiring additional mechanical protection."],
  ["Duct installation", "Cable routes with controlled pulling and route protection."],
  ["Direct burial where suitable", "Reviewed according to soil condition, sheath material, armour type and project specification."],
];

const lowVoltageInquiryItems = [
  "Rated voltage",
  "Cable type or armour type",
  "Core number and conductor size",
  "Copper or aluminium conductor",
  "PVC or PE sheath",
  "Installation environment",
  "Referenced standard",
  "Quantity and delivery plan",
];

const lowVoltageFaqs = [
  ["What is the difference between YJV22 and YJV23?", "Both use XLPE insulation and steel tape armour. YJV22 uses a PVC outer sheath, while YJV23 uses a PE outer sheath."],
  ["What is the difference between YJV32 and YJV33?", "Both use XLPE insulation and steel wire armour. YJV32 uses a PVC outer sheath, while YJV33 uses a PE outer sheath."],
  ["What is the difference between steel tape armour and steel wire armour?", "Steel tape armour and steel wire armour are selected according to installation method, mechanical protection requirements and project specifications."],
  ["Can aluminium conductor versions be supplied?", "Copper conductor is commonly supplied. Aluminium conductor versions can be reviewed according to suitable project requirements."],
  ["Can the cable be supplied according to IEC or GB/T standards?", "GB/T 12706.1 and IEC 60502-1 are commonly referenced for low voltage XLPE power cables. Final construction and testing requirements should be reviewed according to project specifications."],
  ["Can flame-retardant, fire-resistant or LSZH versions be considered?", "Yes. Flame-retardant, fire-resistant and LSZH versions can be reviewed when required by the project. Detailed safety cable requirements are handled under the LSZH & Fire-safe Cables range."],
];

function ProductHero({
  eyebrow,
  title,
  description,
  badges,
  image,
  imageAlt,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  badges: string[];
  image: string;
  imageAlt: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  return (
    <section className="product-detail-hero xlpe-product-hero">
      <div className="container product-detail-grid">
        <div>
          <Link className="back-link" href="/products">Back to all products</Link>
          <span className="eyebrow light">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="xlpe-hero-badges">
            {badges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
          <div className="hero-actions">
            <Link className="button" href={primaryHref}>{primaryLabel}</Link>
            <Link className="button button-ghost" href={secondaryHref}>{secondaryLabel}</Link>
          </div>
        </div>
        <div>
          <div className="product-detail-image xlpe-hero-image">
            <Image src={image} alt={imageAlt} width={1200} height={900} sizes="(max-width: 980px) 100vw, 45vw" priority />
          </div>
          <p className="product-image-note">Representative product image for structure and quotation discussion. Final construction is confirmed against the applicable specification before quotation.</p>
        </div>
      </div>
    </section>
  );
}

function SpecTable({ rows }: { rows: string[][] }) {
  return (
    <div className="spec-table xlpe-spec-table">
      {rows.map(([label, value]) => (
        <div key={label}>
          <strong>{label}</strong>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
}

function ApplicationCards({ applications }: { applications: string[][] }) {
  return (
    <div className="three-column-list xlpe-application-cards">
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

function InquirySection() {
  return (
    <section className="section quote-section" id="inquiry">
      <div className="container quote-grid">
        <div>
          <span className="eyebrow light">Quotation review</span>
          <h2>Send the model, size and project requirement for review.</h2>
          <p>Huanyu Cable will confirm available construction, standard, quantity and document requirements before quotation.</p>
        </div>
        <InquiryForm compact />
      </div>
    </section>
  );
}

export function LowVoltageArmouredProductPage() {
  return (
    <>
      <section className="product-detail-hero xlpe-product-hero">
        <div className="container product-detail-grid">
          <div>
            <Link className="back-link" href="/products">Back to all products</Link>
            <span className="eyebrow light">Core Product · Low Voltage Armoured Cable</span>
            <h1>Low Voltage Armoured Power Cables</h1>
            <p>
              XLPE insulated armoured power cables for underground distribution, industrial power systems and infrastructure projects. Main constructions include YJV22, YJV23, YJV32 and YJV33 with steel tape armour or steel wire armour.
            </p>
            <div className="xlpe-hero-badges">
              {["YJV22", "YJV23", "YJV32", "YJV33"].map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
            <div className="hero-actions">
              <Link className="button" href="#inquiry">Request Quote</Link>
              <Link className="button button-ghost" href="#technical-range">View Technical Range</Link>
            </div>
          </div>
          <div>
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
            {lowVoltageArmouredTypes.map(([type, label, description]) => (
              <article key={type}>
                <span>{label}</span>
                <h3>{type}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted product-detail-section">
        <div className="container">
          <div className="product-section-intro">
            <span className="eyebrow">Construction Options</span>
            <h2>Armour and Sheath Options for Project Installation</h2>
            <p>
              Steel tape armour, steel wire armour, PVC sheath and PE sheath are selected according to cable route, mechanical protection requirements, moisture exposure, soil conditions and project specifications.
            </p>
          </div>
          <div className="product-section-grid product-section-grid-wide">
            <div className="product-section-main">
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
                    {lowVoltageConstructionRows.map(([item, options, specify]) => (
                      <tr key={item}>
                        <td>{item}</td>
                        <td>{options}</td>
                        <td>{specify}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <aside className="product-section-visuals">
              <figure className="xlpe-feature-image product-compact-feature">
                <Image src={lowVoltageArmouredImages.hero} alt="Low voltage armoured power cable product view" width={1200} height={900} sizes="(max-width: 980px) 100vw, 34vw" />
              </figure>
            </aside>
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
            {lowVoltageTechnicalRows.map(([label, value]) => (
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
          <ApplicationCards applications={lowVoltageApplications} />
        </div>
      </section>

      <section className="section">
        <div className="container product-spec-layout">
          <div className="spec-main">
            <span className="eyebrow">Inquiry Preparation</span>
            <h2>Information Needed for Technical Review and Quotation</h2>
            <p>
              For a faster technical review and quotation, please provide the main project requirements such as rated voltage, core configuration, conductor size, armour type, sheath material, installation environment and quantity.
            </p>
            <ul className="check-list">
              {lowVoltageInquiryItems.map((item) => (
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
            {lowVoltageFaqs.map(([question, answer], index) => (
              <article key={question}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{question}</h3>
                <p>{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InquirySection />
    </>
  );
}

export function Yjv22Yjv23ProductPage() {
  return (
    <>
      <ProductHero
        eyebrow="Low Voltage XLPE Power Cables"
        title="YJV22 / YJV23 XLPE Insulated Steel Tape Armoured Power Cables"
        description="0.6/1 kV low-voltage power cables with copper conductors, XLPE insulation and steel tape armour, designed for fixed power transmission and distribution systems requiring mechanical protection."
        badges={["0.6/1 kV", "XLPE Insulation", "Steel Tape Armour", "PVC / PE Sheath"]}
        image={yjv22Images.hero}
        imageAlt="YJV22 and YJV23 steel tape armoured XLPE power cables"
        primaryHref="#inquiry"
        primaryLabel="Request Quote"
        secondaryHref="#specifications"
        secondaryLabel="View Specifications"
      />

      <section className="section">
        <div className="container xlpe-overview-grid">
          <article className="xlpe-info-card">
            <span className="eyebrow">Product overview</span>
            <h2>Fixed low-voltage distribution with mechanical protection</h2>
            <p>
              YJV22 and YJV23 are low-voltage XLPE insulated steel tape armoured power cables for AC power lines with rated voltage up to 0.6/1 kV. They are used for transmitting electrical power in fixed installations where the cable requires additional mechanical protection.
            </p>
          </article>
          <article className="xlpe-info-card">
            <span className="eyebrow">Representative specification</span>
            <h2>YJV22 0.6/1 kV 3 × 70 mm² + 1 × 35 mm²</h2>
            <p>
              This means three main phase cores with 70 mm² nominal cross-section and one smaller neutral or protective core with 35 mm² nominal cross-section.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">YJV22 vs YJV23</span>
              <h2>Same core structure, different outer sheath material.</h2>
            </div>
          </div>
          <div className="xlpe-table-wrap">
            <table className="xlpe-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Recommended English Name</th>
                  <th>Typical Structure</th>
                  <th>Main Difference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>YJV22</td>
                  <td>XLPE Insulated Steel Tape Armoured PVC Sheathed Power Cable</td>
                  <td>Copper conductor / XLPE insulation / filler / PVC inner sheath / steel tape armour / PVC outer sheath</td>
                  <td>PVC outer sheath, suitable for general fixed power distribution and underground or cable trench installations.</td>
                </tr>
                <tr>
                  <td>YJV23</td>
                  <td>XLPE Insulated Steel Tape Armoured PE Sheathed Power Cable</td>
                  <td>Copper conductor / XLPE insulation / filler / PVC inner sheath / steel tape armour / PE outer sheath</td>
                  <td>PE outer sheath, selected where improved moisture resistance and sheath durability are required.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section product-detail-section">
        <div className="container">
          <div className="product-section-intro">
            <span className="eyebrow">Cable construction</span>
            <h2>Layer logic for armoured fixed installation cables</h2>
          </div>
          <div className="product-section-grid">
            <div className="product-section-main">
            <ul className="detail-list">
              {constructionItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="review-note">
              YJV22 and YJV23 share the same core structure. The main difference is the outer sheath material: YJV22 uses PVC, while YJV23 uses PE.
            </div>
          </div>
          <aside className="product-section-visuals xlpe-image-stack product-compact-stack">
            <Image src={yjv22Images.structure} alt="YJV22 and YJV23 structure comparison infographic" width={1200} height={900} sizes="(max-width: 980px) 100vw, 46vw" />
            <Image src={yjv22Images.angled} alt="Angled close-up of YJV23 low-voltage XLPE armoured power cable" width={1200} height={900} sizes="(max-width: 980px) 100vw, 46vw" />
          </aside>
          </div>
        </div>
      </section>

      <section className="section section-muted product-detail-section" id="specifications">
        <div className="container">
          <div className="product-section-intro">
            <span className="eyebrow">Specifications</span>
            <h2>Key technical parameters</h2>
          </div>
          <div className="product-section-grid">
            <div className="product-section-main">
            <SpecTable rows={yjv22Specs} />
          </div>
          <aside className="product-section-visuals">
          <figure className="xlpe-feature-image product-compact-feature">
            <Image src={yjv22Images.marking} alt="Sheath marking detail for YJV22 low-voltage XLPE armoured cable" width={1200} height={900} sizes="(max-width: 980px) 100vw, 34vw" />
          </figure>
          </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Applications</span>
              <h2>Typical project use cases</h2>
            </div>
          </div>
          <ApplicationCards applications={yjv22Applications} />
        </div>
      </section>

      <InquirySection />
    </>
  );
}

export function LowVoltageXlpeFamilyProductPage() {
  const modelCards = [
    ["YJV", "Copper / Unarmoured", "XLPE insulated PVC sheathed power cable with copper conductor for fixed installation in buildings, industrial plants and power distribution systems."],
    ["YJY", "Copper / Unarmoured", "XLPE insulated PE sheathed power cable with copper conductor, typically chosen when better sheath durability or moisture resistance is desired."],
    ["YJLV", "Aluminium / Unarmoured", "Aluminium conductor XLPE insulated PVC sheathed power cable, used as a cost-effective alternative in fixed low-voltage power distribution projects."],
    ["YJLV22", "Aluminium / Armoured", "Aluminium conductor XLPE insulated steel tape armoured PVC sheathed power cable for fixed installations requiring additional mechanical protection."],
  ];

  return (
    <>
      <ProductHero
        eyebrow="Low Voltage XLPE Power Cables"
        title="YJV / YJY / YJLV / YJLV22 Product Family"
        description="A combined introduction page for Huanyu Cable's low-voltage XLPE insulated power cable family, covering copper and aluminium conductor options, PVC or PE outer sheath options, and both unarmoured and armoured structures."
        badges={["0.6/1 kV", "Copper / Aluminium", "PVC / PE Sheath", "Unarmoured / STA Armoured"]}
        image={familyImages.hero}
        imageAlt="YJV, YJY, YJLV and YJLV22 low-voltage XLPE power cable family"
        primaryHref="#model-family"
        primaryLabel="View Model Family"
        secondaryHref="#inquiry"
        secondaryLabel="Request Quote"
      />

      <section className="section">
        <div className="container xlpe-positioning">
          <span className="eyebrow">Product Family Positioning</span>
          <h2>Combined family page for general low-voltage XLPE cables.</h2>
          <p className="lead">
            This page acts as the combined introduction page for the general low-voltage XLPE cable family, while the dedicated armoured copper page for <strong>YJV22 / YJV23</strong> remains separate.
          </p>
        </div>
      </section>

      <section className="section section-muted" id="model-family">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Model family overview</span>
              <h2>Copper and aluminium options across unarmoured and armoured structures</h2>
            </div>
          </div>
          <div className="xlpe-model-grid">
            {modelCards.map(([model, label, text]) => (
              <article key={model}>
                <span>{label}</span>
                <h3>{model}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section product-detail-section">
        <div className="container">
          <div className="product-section-intro">
            <span className="eyebrow">Recommended English names</span>
            <h2>Product Family Positioning</h2>
          </div>
          <div className="product-section-grid product-section-grid-wide">
            <div className="product-section-main">
            <div className="xlpe-table-wrap">
              <table className="xlpe-table">
                <thead>
                  <tr>
                    <th>Chinese Type</th>
                    <th>Recommended English Name</th>
                    <th>Typical Structure</th>
                    <th>Website Position</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>YJV</td>
                    <td>Cu Conductor XLPE Insulated PVC Sheathed Power Cable</td>
                    <td>Copper conductor / XLPE insulation / filler / outer sheath</td>
                    <td>Main general low-voltage product</td>
                  </tr>
                  <tr>
                    <td>YJY</td>
                    <td>Cu Conductor XLPE Insulated PE Sheathed Power Cable</td>
                    <td>Copper conductor / XLPE insulation / filler / PE outer sheath</td>
                    <td>General family variant with PE sheath</td>
                  </tr>
                  <tr>
                    <td>YJLV</td>
                    <td>Al Conductor XLPE Insulated PVC Sheathed Power Cable</td>
                    <td>Aluminium conductor / XLPE insulation / filler / outer sheath</td>
                    <td>Economical aluminium option</td>
                  </tr>
                  <tr>
                    <td>YJLV22</td>
                    <td>Al Conductor XLPE Insulated Steel Tape Armoured PVC Sheathed Power Cable</td>
                    <td>Al conductor / XLPE insulation / filler / inner sheath / steel tape armour / outer sheath</td>
                    <td>Armoured aluminium variant in same family</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <aside className="product-section-visuals xlpe-image-stack product-compact-stack">
            <Image src={familyImages.hero} alt="Low-voltage XLPE cable family product overview" width={1200} height={900} sizes="(max-width: 980px) 100vw, 46vw" />
            <Image src={familyImages.unarmoured} alt="YJV, YJY and YJLV unarmoured XLPE cable comparison" width={1200} height={900} sizes="(max-width: 980px) 100vw, 46vw" />
          </aside>
          </div>
        </div>
      </section>

      <section className="section section-muted product-detail-section" id="specifications">
        <div className="container">
          <div className="product-section-intro">
            <span className="eyebrow">Key technical parameters</span>
            <h2>Common supply parameters for the family</h2>
          </div>
          <div className="product-section-grid">
            <div className="product-section-main">
            <SpecTable rows={familySpecs} />
          </div>
          <aside className="product-section-visuals">
          <figure className="xlpe-feature-image product-compact-feature">
            <Image src={familyImages.yjlv22} alt="YJLV22 armoured aluminium low-voltage XLPE power cable" width={1200} height={900} sizes="(max-width: 980px) 100vw, 34vw" />
          </figure>
          </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container xlpe-overview-grid">
          <article className="xlpe-info-card">
            <span className="eyebrow">Website copy</span>
            <h2>Low-voltage XLPE insulated power cables for fixed installation</h2>
            <p>
              YJV, YJY, YJLV and YJLV22 are low-voltage XLPE insulated power cables for fixed installation and power distribution. They are available in copper and aluminium conductor options, with PVC or PE sheath options, and can be supplied in both unarmoured and steel tape armoured structures according to project requirements.
            </p>
          </article>
          <article className="xlpe-info-card">
            <span className="eyebrow">Representative configurations</span>
            <h2>Typical examples for quotation discussion</h2>
            <ul className="xlpe-configuration-list">
              <li>YJV 0.6/1 kV 3 × 70 mm² + 1 × 35 mm²</li>
              <li>YJY 0.6/1 kV 4 × 50 mm²</li>
              <li>YJLV 0.6/1 kV 4 × 95 mm²</li>
              <li>YJLV22 0.6/1 kV 3 × 120 mm² + 1 × 70 mm²</li>
              <li>Other sizes available upon request</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Applications</span>
              <h2>Where this product family is commonly used</h2>
            </div>
          </div>
          <ApplicationCards applications={familyApplications} />
        </div>
      </section>

      <InquirySection />
    </>
  );
}
