import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { JsonLd } from "@/components/JsonLd";
import { createBreadcrumbJsonLd } from "@/lib/structuredData";
import { site } from "@/lib/site";
import styles from "./energy-storage.module.css";
import { TechnicalIcon, type TechnicalIconKind } from "./EssTechnicalIcons";

const pageTitle = "Energy Storage Cables for ESS & BESS Projects | Huanyu Cable";
const pageDescription =
  "Energy storage cable solutions for ESS and BESS projects, with specification review based on connection position, electrical requirements, construction, operating conditions and required documentation.";
const pagePath = "/products/energy-storage-cables";
const socialImage = "/images/products/energy-storage/ess-hero.png";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website",
    title: pageTitle,
    description: pageDescription,
    url: `${site.url}${pagePath}`,
    images: [{ url: socialImage, alt: "Energy storage system installation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [socialImage],
  },
};

const connectionContexts = [
  "Battery rack / cabinet related connections",
  "Internal ESS power connections",
  "Connections between energy-storage equipment",
  "Auxiliary project cable requirements",
];

const specificationItems: { icon: TechnicalIconKind; title: string; description: string }[] = [
  { icon: "connection", title: "Connection Position", description: "Identify where the cable is installed." },
  { icon: "voltage", title: "Voltage", description: "State the required project voltage." },
  { icon: "conductor", title: "Conductor Cross-section", description: "Specify the required conductor size." },
  { icon: "installation", title: "Installation", description: "Fixed or flexible installation requirements." },
  { icon: "environment", title: "Environment", description: "Indoor / outdoor and operating conditions." },
  { icon: "document", title: "Standard / Documentation", description: "Define the applicable project requirements." },
];
const factorIcons: TechnicalIconKind[] = ["voltage", "installation", "environment", "document"];

const selectionFactors = [
  {
    number: "01",
    title: "Electrical",
    items: ["Required voltage", "Conductor size / cross-section", "Project electrical specification"],
  },
  {
    number: "02",
    title: "Installation",
    items: ["Connection position", "Fixed or flexible installation", "Indoor / outdoor environment"],
  },
  {
    number: "03",
    title: "Performance",
    items: [
      "Mechanical requirement",
      "Temperature requirement",
      "Flame / halogen requirement if specified",
      "Oil / chemical / UV requirement if applicable",
    ],
  },
  {
    number: "04",
    title: "Documentation",
    items: ["Applicable standard", "Required test reports", "Required certification or project documents"],
  },
];

const representativeConstructionLayers = [
  {
    number: "01",
    title: "Conductor",
    description: "Current-carrying conductor",
  },
  {
    number: "02",
    title: "Insulation",
    description: "Primary insulation layer",
  },
  {
    number: "03",
    title: "Optional additional layer",
    description: "Screening, tape or other additional layer, where specified.",
  },
  {
    number: "04",
    title: "Outer sheath",
    description: "Outer protective sheath",
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
  "Application / connection position",
  "Required voltage",
  "Conductor size / cross-section",
  "Cable construction / reference specification",
  "Quantity / total length",
  "Installation environment",
  "Applicable standard",
  "Required documentation",
  "Packing requirement",
  "Destination",
  "Delivery schedule if known",
];

export default function EnergyStorageCablesPage() {
  return (
    <div className={styles.page}>
      <JsonLd data={createBreadcrumbJsonLd([
        { name: "Home", item: site.url },
        { name: "Products", item: `${site.url}/products` },
        { name: "Energy Storage Cables", item: `${site.url}${pagePath}` },
      ])} />

      <section className={styles.hero} aria-labelledby="ess-title">
        <div className={styles.heroMedia}>
          <Image
            src="/images/products/energy-storage/ess-hero.png"
            alt="Energy storage system installation"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/products">Products</Link>
            <span aria-hidden="true">/</span>
            <span>Energy Storage Cables</span>
          </div>
          <div className={styles.heroLayout}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>Energy Storage Cables / ESS &amp; BESS</span>
              <h1 id="ess-title">Energy Storage <span>Cables</span></h1>
              <p>Energy storage cable solutions reviewed against connection position, electrical requirements, cable construction and project specifications.</p>
              <div className={styles.heroReview}>
                <div><TechnicalIcon kind="connection" /><span>Connection-based review</span></div>
                <div><TechnicalIcon kind="installation" /><span>Installation requirements</span></div>
                <div><TechnicalIcon kind="document" /><span>Project documentation</span></div>
              </div>
              <Link className={`button ${styles.primaryAction}`} href="#inquiry" data-ga-event="rfq_click" data-ga-cta-location="product_hero" data-ga-product-slug="energy-storage-cables">
                Send Project Requirements <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className={styles.heroSystemRail} aria-label="Energy storage cable review scope">
              <span>ESS / BESS</span>
              <span>Connection position</span>
              <span>Installation conditions</span>
              <span>Project documents</span>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.specificationBand} aria-label="Cable specification requirements">
        <div className="container">
          <ul className={styles.specificationStrip}>
            {specificationItems.map((item) => (
              <li key={item.title}>
                <TechnicalIcon kind={item.icon} />
                <div><strong>{item.title}</strong><p>{item.description}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className={styles.application} aria-labelledby="ess-application-title">
        <div className="container">
          <div className={styles.applicationLayout}>
            <div className={styles.applicationCopy}>
              <span className={styles.eyebrow}>02 / Application</span>
              <h2 id="ess-application-title">Application in ESS Systems</h2>
              <p>Cable requirements depend on the connection position within an ESS / BESS project and on the electrical, mechanical and environmental conditions.</p>
              <p className={styles.applicationBoundary}>Different ESS connection positions may require different cable types and constructions; these application references are used to define the project requirement, not to imply that one construction fits every connection.</p>
              <a className={styles.outlineAction} href="#selection-requirements">Review selection factors <span aria-hidden="true">↗</span></a>
            </div>
            <div className={styles.applicationSystem}>
              <figure className={styles.systemFigure}>
                <Image
                  src="/images/products/energy-storage/ess-connection-diagram.png"
                  alt="Illustrative ESS connection layout"
                  width={1920}
                  height={482}
                  sizes="(max-width: 640px) calc(100vw - 28px), (max-width: 980px) 58vw, 60vw"
                />
                <figcaption>Conceptual connection positions only. Not a wiring diagram or a defined system topology.</figcaption>
              </figure>
              <ol className={styles.applicationLegend}>
                {connectionContexts.map((context, index) => (
                  <li key={context}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span>{context}</span></li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.selection} id="selection-requirements" aria-labelledby="ess-selection-title">
        <div className="container">
          <div className={styles.selectionHeading}>
            <span className={styles.eyebrow}>03 / Selection factors</span>
            <h2 id="ess-selection-title">How to Select the Right Cable</h2>
            <p>Define the project requirements in each area. Performance and document availability are confirmed against the final cable specification.</p>
          </div>
          <div className={styles.selectionDesktop}>
            {selectionFactors.map((factor, index) => (
              <div className={styles.selectionColumn} key={factor.title}>
                <div className={styles.factorHeading}><TechnicalIcon kind={factorIcons[index]} /><h3>{factor.title}</h3></div>
                <span className={styles.factorNumber} aria-hidden="true">{factor.number}</span>
                <ul className={styles.factorList}>{factor.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className={styles.selectionMobile}>
            {selectionFactors.map((factor, index) => (
              <details className={styles.factorDetails} key={factor.title} open={index === 0}>
                <summary><span className={styles.factorNumber} aria-hidden="true">{factor.number}</span><span>{factor.title}</span><span className={styles.expandMark} aria-hidden="true" /></summary>
                <ul className={styles.factorList}>{factor.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.technical} aria-label="Representative cable construction and project documentation">
        <div className={`container ${styles.technicalLayout}`}>
          <div className={styles.construction}>
            <span className={styles.eyebrow}>04 / Representative cable construction</span>
            <h2>Representative Cable Construction</h2>
            <p>Energy storage cable applications may involve different conductor, insulation, protection and sheath arrangements depending on the connection position, electrical duty and installation conditions. The example below is provided for construction review reference only.</p>
            <p className={styles.constructionBoundary}>Representative example only — actual cable structure, materials and dimensions shall be confirmed according to the selected cable type and project specification.</p>
            <figure className={styles.constructionFigure}>
              <Image
                src="/images/products/energy-storage/ess-cable-construction.png"
                alt="Representative cable construction example"
                width={1920}
                height={483}
                sizes="(max-width: 640px) calc(100vw - 28px), (max-width: 980px) 56vw, 54vw"
              />
            </figure>
            <ol className={styles.constructionLegend}>
              {representativeConstructionLayers.map((item) => (
                <li key={item.number}>
                  <span aria-hidden="true">{item.number}</span>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
            <p className={styles.constructionFooterNote}>The construction above is a representative example for review purposes. Final cable construction shall be confirmed according to the selected application and project specification.</p>
          </div>
          <div className={styles.documentation}>
            <span className={styles.eyebrow}>05 / Documentation</span>
            <h2>Project Documentation</h2>
            <p>Applicable standards and documentation requirements should be stated in the RFQ. Availability is confirmed against the final cable specification.</p>
            <ul className={styles.documentIndex}>
              {documentTypes.map((item) => <li key={item}><TechnicalIcon kind="document" /><span>{item}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.rfq} id="inquiry" aria-labelledby="ess-rfq-title">
        <div className="container">
          <div className={styles.rfqLayout}>
            <div className={styles.rfqCopy}>
              <span className={styles.eyebrow}>06 / Project enquiry</span>
              <h2 id="ess-rfq-title">Request an Energy Storage Cable Quote</h2>
              <p>If the specification is incomplete, send the available BOQ, drawing or datasheet. Huanyu can review the information and identify the cable details still required for quotation.</p>
              <h3 className={styles.requirementsTitle}>Information to include</h3>
              <ul className={styles.requirementsList}>{rfqItems.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className={styles.formPanel}><InquiryForm compact /></div>
          </div>
          <div className={styles.related}>
            <Link href="/products/solar-cables"><span>Related product</span><span aria-hidden="true">—</span><strong>Solar Cables <span aria-hidden="true">→</span></strong></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
