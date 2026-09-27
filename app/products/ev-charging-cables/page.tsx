import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { JsonLd } from "@/components/JsonLd";
import { createBreadcrumbJsonLd } from "@/lib/structuredData";
import { site } from "@/lib/site";
import styles from "./ev-charging.module.css";
import { EvTechnicalIcon, type EvTechnicalIconKind } from "./EvTechnicalIcons";

const pageTitle = "EV Charging Cables for Charging Projects | Huanyu Cable";
const pageDescription =
  "EV charging cable solutions reviewed by charging interface, electrical requirement, core arrangement, flexibility, installation environment and project documentation.";
const pagePath = "/products/ev-charging-cables";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website",
    title: pageTitle,
    description: pageDescription,
    url: `${site.url}${pagePath}`,
    images: [{ url: "/images/products/ev-charging/huanyu-ev-hero-approved.png", alt: "EV charging equipment and vehicle" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/products/ev-charging/huanyu-ev-hero-approved.png"],
  },
};

const heroCues: { icon: EvTechnicalIconKind; text: string }[] = [
  { icon: "interface", text: "Charging connection review" },
  { icon: "flexibility", text: "Flexibility requirement" },
  { icon: "environment", text: "Installation environment" },
  { icon: "document", text: "Project documentation" },
];

const specificationItems: { number: string; icon: EvTechnicalIconKind; title: string; description: string }[] = [
  { number: "01", icon: "interface", title: "Charging System / Interface", description: "Confirm connector / interface and connection requirement" },
  { number: "02", icon: "electrical", title: "Electrical Requirement", description: "Confirm required voltage and current" },
  { number: "03", icon: "cores", title: "Conductor / Core Arrangement", description: "Confirm conductor size, number and function of cores" },
  { number: "04", icon: "flexibility", title: "Cable Flexibility", description: "Confirm fixed, flexible or frequently handled installation" },
  { number: "05", icon: "environment", title: "Installation Environment", description: "Confirm indoor / outdoor and operating conditions" },
  { number: "06", icon: "document", title: "Standard & Documentation", description: "Confirm applicable project standard and required documents" },
];

const applicationContexts = [
  "Station-to-vehicle connection",
  "Public charging infrastructure",
  "Fleet and depot charging projects",
  "Residential and workplace charging projects",
];

const selectionFactors: { number: string; icon: EvTechnicalIconKind; title: string; items: string[] }[] = [
  {
    number: "01",
    icon: "electrical",
    title: "Electrical",
    items: ["Required voltage / current", "Conductor size / cross-section", "Core arrangement", "Project electrical specification"],
  },
  {
    number: "02",
    icon: "interface",
    title: "Charging Interface",
    items: ["Connector / interface requirement", "Connection position", "Number and function of required cores", "Control / communication requirement where applicable"],
  },
  {
    number: "03",
    icon: "mechanical",
    title: "Mechanical / Flexibility",
    items: ["Fixed or flexible installation", "Handling / bending requirement", "Mechanical protection requirement", "Installation environment"],
  },
  {
    number: "04",
    icon: "document",
    title: "Documentation",
    items: ["Applicable standard to be confirmed", "Test reports where required", "Certificate where specifically required", "Other project-specific documents"],
  },
];

const constructionItems = [
  {
    number: "01",
    title: "Power conductors",
    description: "Insulated power cores; quantity and size depend on the selected cable type.",
  },
  {
    number: "02",
    title: "Additional signal / control core(s), where specified",
    description: "Additional core(s) may be required for control, communication or auxiliary functions depending on the selected cable type.",
  },
  {
    number: "03",
    title: "Core assembly",
    description: "Core arrangement and fillers depend on the selected cable construction.",
  },
  {
    number: "04",
    title: "Outer sheath",
    description: "Outer protective sheath; material and performance requirements depend on the selected cable type and installation environment.",
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
  "Charging interface / connection requirement",
  "Required voltage / current",
  "Conductor size / core arrangement",
  "Cable flexibility / handling requirement",
  "Installation environment",
  "Applicable project standard, if specified",
  "Required documentation",
  "Quantity / total length",
  "Destination",
  "Delivery schedule, if known",
];

export default function EvChargingCablesPage() {
  return (
    <div className={styles.page}>
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: "Home", item: site.url },
          { name: "Products", item: `${site.url}/products` },
          { name: "EV Charging Cables", item: `${site.url}${pagePath}` },
        ])}
      />

      <section className={styles.hero} aria-labelledby="ev-title">
        <div className={styles.heroMedia}>
          <Image
            src="/images/products/ev-charging/huanyu-ev-hero-approved.png"
            alt="EV charging equipment and vehicle"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/products">Products</Link>
            <span aria-hidden="true">/</span>
            <span>EV Charging Cables</span>
          </nav>
          <div className={styles.heroLayout}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>EV / Charging Infrastructure</span>
              <h1 id="ev-title">EV Charging <span>Cables</span></h1>
              <p>Cable solutions for EV charging projects. Define the charging interface, electrical requirement, cable flexibility, installation environment and project specification before final cable selection.</p>
              <div className={styles.heroCues} aria-label="Project review scope">
                {heroCues.map((cue) => (
                  <div key={cue.text}><EvTechnicalIcon kind={cue.icon} /><span>{cue.text}</span></div>
                ))}
              </div>
              <Link
                className={`button ${styles.primaryAction}`}
                href="#inquiry"
                data-ga-event="rfq_click"
                data-ga-cta-location="product_hero"
                data-ga-product-slug="ev-charging-cables"
              >
                Send Project Requirements <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.specificationBand} aria-label="EV charging cable requirement review framework">
        <div className="container">
          <ol className={styles.specificationStrip}>
            {specificationItems.map((item) => (
              <li key={item.number}>
                <span className={styles.specNumber} aria-hidden="true">{item.number}</span>
                <EvTechnicalIcon kind={item.icon} />
                <div><strong>{item.title}</strong><p>{item.description}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <section className={styles.application} aria-labelledby="ev-application-title">
        <div className="container">
          <div className={styles.applicationLayout}>
            <div className={styles.applicationCopy}>
              <span className={styles.eyebrow}>02 / Application</span>
              <h2 id="ev-application-title">Application in EV Charging Systems</h2>
              <p>EV charging cables are used between charging equipment and electric vehicles. Cable selection depends on the charging interface, electrical requirement, core arrangement, flexibility, installation method and operating environment.</p>
              <p className={styles.applicationBoundary}>Different charging projects may require different cable types and constructions. These application references help define the project requirement and do not imply that one cable construction fits every charging system.</p>
              <a className={styles.outlineAction} href="#selection-requirements">Review selection factors <span aria-hidden="true">↗</span></a>
            </div>
            <div className={styles.applicationVisual}>
              <figure className={styles.applicationFigure}>
                <Image
                  src="/images/products/ev-charging/huanyu-ev-application-approved.png"
                  alt="EV charging station connected to a vehicle"
                  width={1800}
                  height={572}
                  sizes="(max-width: 680px) calc(100vw - 28px), (max-width: 980px) 60vw, 63vw"
                />
              </figure>
              <ol className={styles.applicationList}>
                {applicationContexts.map((context, index) => (
                  <li key={context}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><strong>{context}</strong></li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.selection} id="selection-requirements" aria-labelledby="ev-selection-title">
        <div className="container">
          <div className={styles.selectionHeading}>
            <span className={styles.eyebrow}>03 / Selection factors</span>
            <h2 id="ev-selection-title">How to Select the Right Charging Cable</h2>
            <p>Define each project requirement before cable selection. Final construction and document availability are confirmed against the selected cable type and project specification.</p>
          </div>
          <div className={styles.selectionDesktop}>
            {selectionFactors.map((factor) => (
              <article className={styles.selectionColumn} key={factor.number}>
                <div className={styles.factorHeading}>
                  <EvTechnicalIcon kind={factor.icon} />
                  <div><span>{factor.number}</span><h3>{factor.title}</h3></div>
                </div>
                <ul className={styles.factorList}>{factor.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className={styles.selectionMobile}>
            {selectionFactors.map((factor, index) => (
              <details className={styles.factorDetails} key={factor.number} open={index === 0}>
                <summary>
                  <span className={styles.factorNumber} aria-hidden="true">{factor.number}</span>
                  <span>{factor.title}</span>
                  <span className={styles.expandMark} aria-hidden="true" />
                </summary>
                <ul className={styles.factorList}>{factor.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.technical} aria-label="Representative EV charging cable construction and project documentation">
        <div className={`container ${styles.technicalLayout}`}>
          <div className={styles.construction}>
            <span className={styles.eyebrow}>04 / Representative cable construction</span>
            <h2>Representative EV Charging Cable Construction</h2>
            <p>EV charging cables may use different multi-core arrangements depending on the charging interface, electrical requirement and selected cable type. The example below is provided for construction review reference only.</p>
            <p className={styles.constructionBoundary}>Representative example only — actual core arrangement, materials, dimensions and optional screening shall be confirmed according to the selected cable type and project specification.</p>
            <figure className={styles.constructionFigure}>
              <Image
                src="/images/products/ev-charging/huanyu-ev-multicore-construction-approved.png"
                alt="Illustrative multi-core EV charging cable construction"
                width={1600}
                height={636}
                sizes="(max-width: 680px) calc(100vw - 28px), (max-width: 980px) 62vw, 57vw"
              />
              <figcaption>Illustrative construction only. Core colours and proportions do not define a specific product or wiring standard.</figcaption>
            </figure>
            <ol className={styles.constructionList}>
              {constructionItems.map((item) => (
                <li key={item.number}>
                  <span aria-hidden="true">{item.number}</span>
                  <div><strong>{item.title}</strong><p>{item.description}</p></div>
                </li>
              ))}
            </ol>
          </div>

          <aside className={styles.documentation} aria-labelledby="ev-documentation-title">
            <span className={styles.eyebrow}>05 / Documentation</span>
            <h2 id="ev-documentation-title">Project Documentation</h2>
            <p>State applicable standards and required documentation in the RFQ. Availability is confirmed against the selected cable type and final project specification.</p>
            <ul className={styles.documentList}>
              {documentTypes.map((item) => <li key={item}><EvTechnicalIcon kind="document" /><span>{item}</span></li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section className={styles.rfq} id="inquiry" aria-labelledby="ev-rfq-title">
        <div className="container">
          <div className={styles.rfqLayout}>
            <div className={styles.rfqCopy}>
              <span className={styles.eyebrow}>06 / Project enquiry</span>
              <h2 id="ev-rfq-title">Request an EV Charging Cable Quote</h2>
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
