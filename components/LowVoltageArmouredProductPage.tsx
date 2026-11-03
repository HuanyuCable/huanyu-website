import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { InquiryForm } from "@/components/InquiryForm";
import { TrackedLink } from "@/components/TrackedLink";
import { site } from "@/lib/site";
import styles from "./LowVoltageArmouredProductPage.module.css";

const heroImage = "/images/products/low-voltage-xlpe/yjv22-yjv23-hero.png";
const constructionImage = "/images/products/low-voltage-armoured/HUANYU_LV_Armoured_Construction_Official_Guose_Logo.webp";

const cableTypes = [
  ["YJV22", "STA + PVC sheath", "XLPE insulated, steel tape armoured, PVC sheathed power cable."],
  ["YJV23", "STA + PE sheath", "XLPE insulated, steel tape armoured, PE sheathed power cable."],
  ["YJV32", "SWA + PVC sheath", "XLPE insulated, steel wire armoured, PVC sheathed power cable."],
  ["YJV33", "SWA + PE sheath", "XLPE insulated, steel wire armoured, PE sheathed power cable."],
];

const constructionRows = [
  ["Rated voltage", "Mainly 0.6/1kV; 1.8/3kV constructions can be reviewed according to project requirements."],
  ["Conductor", "Copper is commonly supplied; aluminium can be reviewed only where the project specification permits. Some tenders require copper conductors only."],
  ["Insulation", "XLPE is the established range; PVC-insulated armoured options can be reviewed."],
  ["Armour", "Steel tape armour (STA) or steel wire armour (SWA), selected according to cable construction and installation requirements."],
  ["Outer sheath", "PVC or PE according to the cable design and project conditions."],
  ["Core configuration", "Single-core and multicore options, subject to the final cable design."],
];

const technicalRows: [string, ReactNode][] = [
  ["Rated voltage", <ul key="voltage"><li>0.6/1kV (600/1000V) — main range</li><li>1.8/3kV — subject to project requirements and confirmed production capability</li></ul>],
  ["Core configuration", <div key="cores">Available arrangements include: single-core, 2-core, 3-core, 4-core, 5-core, 3+1-core, 3+2-core and 4+1-core.</div>],
  ["Cable size expression", <div key="sizes">Examples of how cable sizes are expressed: <strong>3 × 120 mm²</strong> means three cores, each with a nominal cross-sectional area of 120 mm². <strong>3 × 240 + 1 × 120 mm²</strong> means three main cores of 240 mm² plus one reduced-size core of 120 mm². These examples explain cable size notation only. Actual size availability is confirmed against the required cable design and production capability.</div>],
  ["Referenced standards", <div key="standards">Commonly referenced cable standards include IEC 60502-1 and GB/T 12706.1. IEC 60228 covers conductor requirements and may be referenced where relevant; the complete cable design should be specified against the applicable cable standard. Final conductor resistance, insulation thickness, armour dimensions, sheath thickness, tests and documents must be confirmed against the applicable cable specification.</div>],
];

const applications = [
  ["Underground power distribution", "For fixed power distribution routes where additional mechanical protection is required."],
  ["Industrial plants", "For power feeders and electrical distribution within factories, workshops and industrial facilities."],
  ["Infrastructure projects", "For utility, municipal and project-based power installations."],
  ["Cable trench installation", "For fixed cable routes installed in trenches and other protected systems."],
  ["Duct installation", "For cable routes installed in ducts with suitable pulling and route protection arrangements."],
  ["Direct burial where suitable", "Direct burial suitability depends on cable construction, sheath material, soil conditions and project specification. Confirm these details before selecting a cable."],
];

const inquiryItems = [
  ["Rated voltage", "for example, 0.6/1kV or 600/1000V."],
  ["Cable size and core configuration", "for example, 4-core × 95mm², if specified."],
  ["Conductor material", "copper or aluminium, if known."],
  ["Insulation material", "XLPE or PVC, if specified."],
  ["Armour type", "steel tape armour (STA) or steel wire armour (SWA), if specified."],
  ["Outer sheath", "PVC or PE, if specified."],
  ["Required quantity", "total cable length and preferred delivery schedule."],
  ["Destination", "country and destination port."],
  ["Applicable standard", "IEC, GB/T, national standard or project specification, if available."],
];

const faqs: [string, ReactNode][] = [
  ["What is a 0.6/1kV armoured power cable used for?", "0.6/1kV armoured power cables are used for fixed power distribution in underground networks, industrial plants and infrastructure projects where additional mechanical protection is required."],
  ["What is the difference between STA and SWA armoured cables?", "STA uses steel tape armour, while SWA uses steel wire armour. The suitable construction depends on the cable design, installation route and project requirements."],
  ["What is the difference between XLPE and PVC insulated armoured cables?", "XLPE generally supports a higher conductor operating temperature than standard PVC insulation. PVC is widely used in conventional power distribution. The correct option depends on the required cable performance and applicable standard."],
  ["Can I request a quotation without a complete cable specification?", "Yes. Share the information you already have, such as voltage, cable size, core configuration, quantity or project documents. We can identify missing details before confirming the final construction and quotation."],
  ["Can copper and aluminium conductor armoured cables be supplied?", "Copper conductor cables are commonly supplied. Aluminium conductor constructions can be reviewed for suitable project requirements."],
  ["Can you review cables according to IEC 60502-1 or local project standards?", "Yes. We can review the requested cable construction, applicable standard, tests and documents against your project specification before confirming the supply proposal. A standards reference is not itself a certification claim."],
  ["Can flame-retardant, fire-resistant or LSZH versions be considered?", <>These options can be reviewed where required by the project and subject to the confirmed cable construction. For detailed low-smoke, halogen-free, flame-retardant and fire-resistant cable options, see our <Link href="/products/lszh-fire-safe-cables">LSZH &amp; Fire-safe Cables</Link> range.</>],
  ["Can single-core AC cables use steel armour?", "Single-core AC cables require special consideration when selecting armour materials. Conventional magnetic steel armour should not be specified automatically. The circuit type and required armour construction must be confirmed before quotation."],
];

export function LowVoltageArmouredProductPage() {
  return (
    <>
      <section className={`product-detail-hero xlpe-product-hero ${styles.hero}`}>
        <div className={`container product-detail-grid ${styles.heroGrid}`}>
          <div>
            <Link className="back-link" href="/products">Back to all products</Link>
            <span className="eyebrow light">LOW VOLTAGE POWER CABLES</span>
            <h1>Low Voltage Armoured Power Cables</h1>
            <p>0.6/1kV (600/1000V) Armoured Cables for Underground Distribution, Industrial Plants &amp; Infrastructure Projects</p>
            <p>Huanyu Cable supplies 0.6/1kV armoured power cables for importers, distributors and project buyers. Our range includes XLPE-insulated STA and SWA cables, with PVC-insulated options available for project review.</p>
            <p>Share your cable size, quantity or BOQ for an initial quotation.</p>
            <div className="hero-actions">
              <Link className="button" href="#inquiry" data-ga-event="rfq_click" data-ga-cta-location="product_hero" data-ga-product-slug="low-voltage-armoured-power-cables">Request Technical Review</Link>
              <TrackedLink className="button button-ghost" href={`mailto:${site.email}`} eventName="email_click" eventParameters={{ product_slug: "low-voltage-armoured-power-cables" }}>Email BOQ / Specs</TrackedLink>
            </div>
            <div className={`xlpe-hero-badges ${styles.heroBadges}`}>
              {["0.6/1kV (600/1000V)", "XLPE / PVC Options", "STA / SWA Armour", "Copper / Aluminium Options"].map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </div>
          <div className={`xlpe-image-stack ${styles.heroImageColumn}`}>
            <div className={`product-detail-image xlpe-hero-image ${styles.heroImageFrame}`}>
              <Image src={heroImage} alt="Low voltage armoured XLPE power cable" width={1254} height={1254} sizes="(max-width: 980px) 100vw, 48vw" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">ARMOURED CABLE TYPES</span>
              <h2>0.6/1kV Armoured Cable Types</h2>
            </div>
            <div>
              <p>Choose the cable according to its insulation material, armour construction, outer sheath and project requirements.</p>
              <p>The Chinese model references below help identify common cable constructions. Final design, production availability and applicable standards are confirmed against the project specification.</p>
            </div>
          </div>
          <div className="xlpe-overview-grid xlpe-two-note-grid">
            <article className="xlpe-info-card">
              <h3>XLPE Insulated Steel Tape Armoured Cable</h3>
              <p><strong>Model references:</strong> YJV22 / YJV23</p>
              <ul>
                <li>XLPE insulation</li>
                <li>Steel tape armour (STA)</li>
                <li>PVC outer sheath for YJV22</li>
                <li>PE outer sheath for YJV23</li>
              </ul>
              <p>For fixed power distribution installations where steel tape armour is specified.</p>
            </article>
            <article className="xlpe-info-card">
              <h3>XLPE Insulated Steel Wire Armoured Cable</h3>
              <p><strong>Model references:</strong> YJV32 / YJV33</p>
              <ul>
                <li>XLPE insulation</li>
                <li>Steel wire armour (SWA)</li>
                <li>PVC outer sheath for YJV32</li>
                <li>PE outer sheath for YJV33</li>
              </ul>
              <p>For fixed power distribution routes requiring additional mechanical protection.</p>
            </article>
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
          <div className="xlpe-overview-grid xlpe-two-note-grid">
            <article className="xlpe-info-card">
              <h3>PVC Insulated Steel Tape Armoured Cable — VV22</h3>
              <p>PVC-insulated cable with steel tape armour (STA) and PVC outer sheath, subject to confirmation of the required construction and production availability.</p>
            </article>
            <article className="xlpe-info-card">
              <h3>PVC Insulated Steel Wire Armoured Cable — VV32</h3>
              <p>PVC-insulated cable with steel wire armour (SWA) and PVC outer sheath, subject to confirmation of the required construction and production availability.</p>
            </article>
          </div>
          <div className="review-note">
            <p>VV22 and VV32 are Chinese model references for common PVC-insulated armoured cable constructions. Availability, final design, testing and documentation are confirmed against each project specification before quotation.</p>
            <p>YJV22, YJV23, YJV32, YJV33, VV22 and VV32 are Chinese model references. They are not automatic equivalents to IEC, BS, EN or other national cable designations. Confirm the actual cable design and applicable project specification before quotation.</p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">CABLE SELECTION GUIDE</span>
              <h2>Compare Insulation, Armour and Sheath Options</h2>
            </div>
            <p>
              The right armoured cable depends on the installation route, required mechanical protection and project specification. You do not need to know every technical detail before making an enquiry.
            </p>
          </div>
          <div className="xlpe-table-wrap">
            <table className="xlpe-table">
              <thead>
                <tr>
                  <th>Product feature</th>
                  <th>Options and buyer guidance</th>
                </tr>
              </thead>
              <tbody>
                {constructionRows.map(([item, guidance]) => (
                  <tr key={item}>
                    <td>{item}</td>
                    <td>{guidance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <figure className={styles.constructionFigure}>
            <Image
              src={constructionImage}
              alt="Typical four-core copper XLPE steel wire armoured power cable with PVC outer sheath"
              width={1536}
              height={1024}
              sizes="(max-width: 640px) calc(100vw - 28px), (max-width: 1200px) 90vw, 1100px"
            />
            <figcaption>The layer labelled &quot;Bedding Tape&quot; represents the bedding / inner covering beneath the armour. Depending on the specified cable design and applicable standard, this layer may be an extruded inner sheath or a lapped bedding layer. For STA versions, steel tape armour replaces the steel wire armour shown.</figcaption>
          </figure>
          <div className="spec-table xlpe-spec-table">
            <div>
              <strong>XLPE or PVC insulation?</strong>
              <span>XLPE and PVC are both used as insulation materials in low-voltage power cables. XLPE generally supports a higher conductor operating temperature than standard PVC insulation, while PVC is widely used in conventional power distribution. The applicable temperature rating must always follow the actual cable design and product standard.</span>
            </div>
            <div>
              <strong>Steel tape or steel wire armour?</strong>
              <span>Steel tape armour (STA) and steel wire armour (SWA) are different mechanical protection constructions. The suitable option depends on the cable design, installation route and project requirements. They should not be treated as automatic substitutes.</span>
            </div>
          </div>
          <p className="review-note">
            <strong>Single-core AC cable note:</strong> For single-core cables used in AC circuits, armour material requires special consideration. Conventional magnetic steel armour must not be specified automatically. Confirm the circuit type and required non-magnetic armour construction before quotation.
          </p>
          <div className="review-note">
            <strong>Performance options and related cable range:</strong> Flame-retardant, fire-resistant and LSZH versions can be reviewed when required by the project and subject to the confirmed cable construction. For detailed low-smoke, halogen-free, flame-retardant and fire-resistant cable options, see our <Link href="/products/lszh-fire-safe-cables">LSZH &amp; Fire-safe Cables</Link> range.
          </div>
        </div>
      </section>

      <section className="section" id="technical-range">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">TECHNICAL SPECIFICATIONS</span>
              <h2>Typical Specifications for Low Voltage Armoured Cables</h2>
            </div>
            <p>
              The following information is commonly reviewed when preparing an armoured cable quotation.
            </p>
          </div>
          <div className="spec-table xlpe-spec-table">
            {technicalRows.map(([label, value]) => (
              <div key={label}>
                <strong>{label}</strong>
                <div>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">STANDARDS &amp; PROJECT REQUIREMENTS</span>
              <h2>Review Cable Standards for Your Project Market</h2>
            </div>
            <p>Requirements vary by country, utility and project. Confirm the applicable standard and cable design against the tender documents and installation conditions.</p>
          </div>
          <div className="spec-table xlpe-spec-table">
            <div><strong>Nigeria</strong><span>NESIS 2015 lists armoured PVC-insulated cables and XLPE cables with reference to NIS IEC 60502-1 for fixed wiring. Its voltage-grading provisions identify 600/1000V grades for PVC-insulated, PVC-sheathed armoured cable and XLPE-insulated, PVC-sheathed armoured cable under NIS IEC 60502.</span></div>
            <div><strong>Ethiopia</strong><span>A published Addis Ababa building-project specification references ES 1483 and ES 1563 and requires 0.6/1kV cable with copper conductors for that particular project.</span></div>
            <div><strong>Zambia</strong><span>A ZAMEFA 600/1000V armoured PVC cable listing cites SANS 1507 and ZABS 688.</span></div>
          </div>
          <p className="review-note"><strong>Compliance note:</strong> These are examples, not universal requirements or HUANYU certification claims. Confirm the current edition, conductor material, cable design, tests and documentation for each tender.</p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">TYPICAL APPLICATIONS</span>
              <h2>Armoured Power Cables for Distribution and Industrial Projects</h2>
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
            <span className="eyebrow">RFQ PREPARATION</span>
            <h2>What Information Do We Need for an Armoured Cable Quotation?</h2>
            <p>You do not need to have every technical detail ready before contacting us.</p>
            <p>To prepare an initial quotation, please share the information you already have:</p>
            <ul className="check-list">
              {inquiryItems.map(([item, detail]) => (
                <li key={item}><strong>{item}</strong> — {detail}</li>
              ))}
            </ul>
            <div className="review-note">
              <p><strong>Don&apos;t have a complete specification?</strong> That&apos;s fine. Email your BOQ, cable schedule, technical datasheet, project description or a photo of the existing cable marking to <a href={`mailto:${site.email}`}>{site.email}</a>. We can review the information and identify the details that need confirmation before quotation.</p>
              <p>Preparing an XLPE cable enquiry? Use our <Link className="related-guide-link" href="/resources/low-voltage-xlpe-cable-rfq-checklist">Low Voltage XLPE Cable RFQ Checklist</Link> to organize the key information before quotation.</p>
              <p>Need help comparing steel tape and steel wire armour?</p>
              <p><Link className="text-link related-guide-link" href="/resources/sta-vs-swa-armoured-cable-guide"><strong>Compare STA vs SWA Armour</strong><span aria-hidden="true">→</span></Link></p>
            </div>
          </div>
          <aside className="spec-aside">
            <h3>Quotation focus</h3>
            <ol>
              <li>Confirm an XLPE model or review a PVC-insulated option.</li>
              <li>Specify STA or SWA, insulation and outer sheath.</li>
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
            <span className="eyebrow light">REQUEST A QUOTE</span>
            <h2>Request a Quote for 0.6/1kV Armoured Power Cables</h2>
            <p>Looking for a low-voltage armoured cable manufacturer in China?</p>
            <p>Send us your cable type, rated voltage, core configuration, conductor size, quantity and destination.</p>
            <p>If you have a BOQ, drawings, cable schedule or technical specification, please email them to <a href={`mailto:${site.email}`}>{site.email}</a>. If some details are not available, share the information you already have. We will review the requirements and confirm the suitable cable construction, applicable standard and quotation basis.</p>
            <p>Partial project information is also welcome for an initial review.</p>
          </div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
