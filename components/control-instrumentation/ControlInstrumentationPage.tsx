import Image from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import styles from "./control-instrumentation.module.css";
import {
  ControlTechnicalIcon,
  PairedDataGlyph,
  type ControlTechnicalIconKind,
} from "./ControlTechnicalIcons";

const assetRoot = "/images/products/control-instrumentation-v2";

const heroCues: { icon: ControlTechnicalIconKind; text: string }[] = [
  { icon: "circuit", text: "Control Circuits" },
  { icon: "signal", text: "Signal / Data" },
  { icon: "motion", text: "Dynamic Motion" },
  { icon: "document", text: "Project Documentation" },
];

const reviewItems: {
  number: string;
  icon: ControlTechnicalIconKind;
  title: string;
  description: string;
}[] = [
  { number: "01", icon: "circuit", title: "Circuit Function", description: "Confirm control, signal or serial-data purpose" },
  { number: "02", icon: "arrangement", title: "Core / Pair Arrangement", description: "Confirm core count, conductor size and pair arrangement where applicable" },
  { number: "03", icon: "shield", title: "Shielding / Screening", description: "Confirm whether shielding is required and how it should be configured" },
  { number: "04", icon: "motion", title: "Flexibility & Motion", description: "Confirm fixed, flexible, cable-carrier or robotic movement requirement" },
  { number: "05", icon: "environment", title: "Installation Environment", description: "Confirm routing, mechanical conditions and operating environment" },
  { number: "06", icon: "document", title: "Standard & Documentation", description: "Confirm applicable project standard and required documents" },
];

type Family = {
  number: string;
  icon: ControlTechnicalIconKind;
  title: string;
  modelLabel: string;
  models: string;
  bullets: string[];
  boundary?: string;
  pairedData?: boolean;
};

const families: Family[] = [
  {
    number: "01",
    icon: "circuit",
    title: "Control & Shielded",
    modelLabel: "Representative models",
    models: "KVV / KVVR / KVVP / KVVRP / RVVP",
    bullets: [
      "Control-circuit and equipment connection",
      "Fixed or flexible installation to be confirmed",
      "Shielding / screening where specified",
      "Core count and conductor size by project",
    ],
  },
  {
    number: "02",
    icon: "signal",
    title: "Signal & Data",
    modelLabel: "Representative family",
    models: "RS485 Data Transmission Cable",
    bullets: [
      "Industrial serial-data transmission",
      "Core / pair arrangement by project",
      "Shielding / screening where specified",
      "Interface and transmission requirements to be confirmed",
    ],
    boundary: "Paired data-transmission requirement — exact construction to be confirmed by selected cable type.",
    pairedData: true,
  },
  {
    number: "03",
    icon: "automation",
    title: "Motion & Automation",
    modelLabel: "Representative models",
    models: "TRVV / TRVVP / IRS05VV / IRS07VV / IRS10VV",
    bullets: [
      "Cable-Carrier / Drag-Chain Cable",
      "Robotic / articulated movement review",
      "Flexibility and mechanical conditions to be confirmed",
      "Shielding / screening where specified",
      "Core arrangement and installation route by project",
    ],
    boundary: "Cable-carrier flexing and robotic torsional movement are different motion conditions and should be reviewed separately.",
  },
];

const constructions = [
  {
    image: `${assetRoot}/03_multicore_control_cable.png`,
    alt: "Representative multi-core control cable construction",
    title: "Multi-core Control Cable",
    models: "KVV / KVVR",
    labels: ["Insulated cores", "Core assembly", "Outer sheath"],
    boundary: "Representative unshielded control-cable construction only. Final core count, conductor construction, materials and dimensions depend on the selected cable type.",
  },
  {
    image: `${assetRoot}/04_shielded_control_cable.png`,
    alt: "Representative shielded control cable construction",
    title: "Shielded Control Cable",
    models: "KVVP / KVVRP / RVVP",
    labels: ["Insulated cores", "Core assembly", "Overall shielding / screening layer", "Outer sheath"],
    boundary: "Representative shielded construction only. Exact shielding method and coverage depend on the selected cable type.",
  },
  {
    image: `${assetRoot}/05_dynamic_motion_cable.png`,
    alt: "Representative dynamic motion cable construction",
    title: "Dynamic Motion Cable",
    models: "TRVV / TRVVP / Robot Cable",
    labels: ["Insulated cores", "Core assembly", "Outer sheath"],
    boundary: "Representative dynamic-motion cable only — cable-carrier and robotic applications may require different conductor, stranding, shielding and sheath designs according to the motion profile.",
    note: "TRVVP or selected motion cables may require shielding. Final structure and motion-performance requirements must be confirmed by model and project.",
  },
];

const documentTypes = [
  "Datasheet",
  "Routine or project test documentation",
  "Certificate where specifically required",
  "Packing and marking requirements",
  "Other project-specific documents",
];

const rfqItems = [
  "Application / connection purpose",
  "Control / signal / serial-data / motion requirement",
  "Conductor size",
  "Core count / pair arrangement",
  "Shielding / screening requirement",
  "Fixed / flexible / cable-carrier / robotic installation",
  "Applicable project standard, if specified",
  "Required documentation",
  "Quantity / total length",
  "Destination",
  "Delivery schedule, if known",
];

function FamilyContent({ family }: { family: Family }) {
  return (
    <>
      <div className={styles.familyHeading}>
        <ControlTechnicalIcon kind={family.icon} />
        <div><span>{family.number}</span><h3>{family.title}</h3></div>
      </div>
      <p className={styles.modelLine}><span>{family.modelLabel}</span><strong>{family.models}</strong></p>
      {family.pairedData && <div className={styles.pairedData}><PairedDataGlyph /></div>}
      <ul className={styles.familyList}>{family.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
      {family.boundary && <p className={styles.familyBoundary}>{family.boundary}</p>}
    </>
  );
}

export function ControlInstrumentationPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="control-title">
        <div className={styles.heroMedia}>
          <Image
            src={`${assetRoot}/01_hero_industrial_automation.png`}
            alt="Industrial automation cell with control cabinet and robotic equipment"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/products">Products</Link>
            <span aria-hidden="true">/</span>
            <span>Control &amp; Instrumentation Cables</span>
          </nav>
          <div className={styles.heroLayout}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>Industrial Automation Solutions</span>
              <h1 id="control-title">Control &amp; Instrumentation <span>Cables</span></h1>
              <p>Cable solutions for industrial control, signal transmission and automation systems. Final cable selection depends on circuit function, core or pair arrangement, shielding requirement, flexibility, motion type and installation environment. Instrumentation-specific pair / core arrangement, shielding and project-standard requirements are reviewed against the buyer’s specification.</p>
              <div className={styles.heroCues} aria-label="Buyer review scope">
                {heroCues.map((cue) => <div key={cue.text}><ControlTechnicalIcon kind={cue.icon} /><span>{cue.text}</span></div>)}
              </div>
              <Link
                className={`button ${styles.primaryAction}`}
                href="#inquiry"
                data-ga-event="rfq_click"
                data-ga-cta-location="product_hero"
                data-ga-product-slug="control-instrumentation-cables"
              >
                Send Project Requirements <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.reviewBand} aria-labelledby="technical-review-title">
        <div className="container">
          <span className={styles.mobileSectionLabel} id="technical-review-title">01 / Technical review</span>
          <ol className={styles.reviewStrip}>
            {reviewItems.map((item) => (
              <li key={item.number}>
                <span className={styles.reviewNumber} aria-hidden="true">{item.number}</span>
                <ControlTechnicalIcon kind={item.icon} />
                <div><strong>{item.title}</strong><p>{item.description}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.application} aria-labelledby="control-application-title">
        <div className="container">
          <div className={styles.applicationLayout}>
            <div className={styles.applicationCopy}>
              <span className={styles.eyebrow}>02 / Application</span>
              <h2 id="control-application-title">In Industrial Automation Systems</h2>
              <p>Control and instrumentation-related cables are used between control equipment, machine components, field devices and moving automation systems. Cable selection depends on the circuit purpose, core or pair arrangement, shielding requirement, motion condition and installation environment.</p>
              <p className={styles.applicationBoundary}>Connection routes are illustrative only. Actual cable type, core or pair arrangement, shielding and motion requirements must be confirmed for the selected equipment and project specification.</p>
              <a className={styles.outlineAction} href="#connection-tasks">Review connection tasks <span aria-hidden="true">↗</span></a>
            </div>
            <div className={styles.applicationVisual}>
              <figure className={styles.applicationFigure}>
                <Image
                  src={`${assetRoot}/02_application_map.png`}
                  alt="Illustrative industrial automation connection overview"
                  width={1672}
                  height={941}
                  sizes="(max-width: 680px) calc(100vw - 44px), (max-width: 980px) 62vw, 64vw"
                />
                <figcaption>Application illustration only — not an electrical wiring diagram.</figcaption>
              </figure>
              <ol className={styles.applicationRoutes}>
                <li><span>01</span><strong>Control &amp; Shielded route</strong></li>
                <li><span>02</span><strong>Signal &amp; Data route</strong></li>
                <li><span>03</span><strong>Motion &amp; Automation route</strong></li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.families} id="connection-tasks" aria-labelledby="control-families-title">
        <div className="container">
          <div className={styles.familiesHeading}>
            <span className={styles.eyebrow}>03 / Product families</span>
            <h2 id="control-families-title">Choose by Connection Task</h2>
            <p>Different automation connections may require different cable constructions. Start with the circuit or motion requirement, then confirm the final cable type against the project specification.</p>
          </div>
          <div className={styles.familiesDesktop}>
            {families.map((family) => <article className={styles.familyColumn} key={family.number}><FamilyContent family={family} /></article>)}
          </div>
          <div className={styles.familiesMobile}>
            {families.map((family, index) => (
              <details className={styles.familyDetails} key={family.number} open={index === 0}>
                <summary><span>{family.number}</span><strong>{family.title}</strong><span className={styles.expandMark} aria-hidden="true" /></summary>
                <div className={styles.familyDetailsBody}><FamilyContent family={family} /></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.technical} aria-label="Representative cable constructions and project documentation">
        <div className={`container ${styles.technicalLayout}`}>
          <div className={styles.constructions}>
            <span className={styles.eyebrow}>04 / Representative constructions</span>
            <h2>Representative Cable Constructions</h2>
            <p>Different connection tasks may require different conductor, core, shielding and sheath arrangements. The examples below are provided for construction review reference only.</p>
            <p className={styles.constructionBoundary}>Representative examples only — actual conductor construction, core or pair arrangement, shielding, materials, dimensions and performance requirements shall be confirmed according to the selected cable type and project specification.</p>
            <div className={styles.constructionGrid}>
              {constructions.map((item, index) => (
                <article className={styles.constructionItem} key={item.title}>
                  <span className={styles.constructionIndex} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <figure>
                    <Image src={item.image} alt={item.alt} width={1448} height={1086} sizes="(max-width: 680px) calc(100vw - 44px), (max-width: 980px) 45vw, 24vw" />
                  </figure>
                  <div className={styles.constructionCaption}>
                    <h3>{item.title}</h3>
                    <p className={styles.constructionModels}>{item.models}</p>
                    <ul>{item.labels.map((label) => <li key={label}>{label}</li>)}</ul>
                    <p className={styles.itemBoundary}>{item.boundary}</p>
                    {item.note && <p className={styles.itemNote}>{item.note}</p>}
                  </div>
                </article>
              ))}
            </div>
            <p className={styles.constructionDisclaimer}>Illustrative constructions only. Core colours, layer appearance and proportions do not define a specific cable model, material specification or wiring standard.</p>
          </div>

          <aside className={styles.documentation} aria-labelledby="control-documentation-title">
            <span className={styles.eyebrow}>05 / Documentation</span>
            <h2 id="control-documentation-title">Project Documentation</h2>
            <p>State the applicable project standard and required documentation in the RFQ. Availability is confirmed against the selected cable type and final project specification.</p>
            <ul className={styles.documentList}>
              {documentTypes.map((item) => <li key={item}><ControlTechnicalIcon kind="document" /><span>{item}</span></li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section className={styles.rfq} id="inquiry" aria-labelledby="control-rfq-title">
        <div className="container">
          <div className={styles.rfqLayout}>
            <div className={styles.rfqCopy}>
              <span className={styles.eyebrow}>06 / Project enquiry</span>
              <h2 id="control-rfq-title">Request a Control &amp; Instrumentation Cable Quote</h2>
              <p>If the specification is incomplete, send the available BOQ, drawing or datasheet. Huanyu can review the information and identify the cable details still required for quotation.</p>
              <h3>Information to include</h3>
              <ul className={styles.requirementsList}>{rfqItems.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className={styles.formPanel}><InquiryForm compact /></div>
          </div>
        </div>
      </section>
    </div>
  );
}
