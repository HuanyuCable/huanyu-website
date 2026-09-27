import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { JsonLd } from "@/components/JsonLd";
import { createBreadcrumbJsonLd } from "@/lib/structuredData";
import { site } from "@/lib/site";
import { RubberFlexibleFamilyAccordion, type RubberFlexibleFamily } from "./RubberFlexibleFamilyAccordion";
import { RubberFlexibleTechnicalIcon, type RubberFlexibleIconKind } from "./RubberFlexibleTechnicalIcons";
import styles from "./rubber-flexible.module.css";

const assetRoot = "/images/products/rubber-sheathed-flexible";
const pagePath = "/products/rubber-sheathed-flexible-cables";
const pageTitle = "Rubber-Sheathed Flexible Cables | 60245 IEC 53, 57 & 66 | Huanyu Cable";
const pageDescription = "Project-oriented rubber-sheathed flexible cable references for 60245 IEC 53, 57 and 66, with China type mappings YZ, YZW and YCW and specification review before quotation.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website",
    title: pageTitle,
    description: pageDescription,
    url: `${site.url}${pagePath}`,
    images: [{ url: `${assetRoot}/01_hero_equipment_connection_HD.png`, alt: "Equipment connection with flexible cable" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${assetRoot}/01_hero_equipment_connection_HD.png`],
  },
};

const reviewItems: { number: string; icon: RubberFlexibleIconKind; title: string; description: string }[] = [
  { number: "01", icon: "designation", title: "Requested Designation", description: "60245 IEC 53, 57, 66 or another project-specified designation" },
  { number: "02", icon: "voltage", title: "Rated Voltage", description: "Confirm the voltage reference required by the project" },
  { number: "03", icon: "cores", title: "Cores & Conductor Size", description: "Confirm number of cores and nominal conductor cross-section" },
  { number: "04", icon: "duty", title: "Connection Duty", description: "Confirm the equipment connection and expected handling / movement" },
  { number: "05", icon: "installation", title: "Installation Conditions", description: "Confirm the actual installation and environmental conditions" },
  { number: "06", icon: "document", title: "Standard & Documents", description: "Confirm the required standard, edition and project documentation" },
];

const families: RubberFlexibleFamily[] = [
  {
    designation: "60245 IEC 53",
    name: "Ordinary Tough Rubber-Sheathed Cord",
    chinaType: "YZ",
    voltage: "300/500 V reference",
    body: "For RFQs referencing 60245 IEC 53. Final construction, available size range and required documentation are confirmed against the project specification.",
  },
  {
    designation: "60245 IEC 57",
    name: "Ordinary Polychloroprene or Equivalent Synthetic Elastomer Sheathed Cord",
    chinaType: "YZW",
    voltage: "300/500 V reference",
    body: "For RFQs referencing 60245 IEC 57. Final construction, material requirements, available size range and documentation are confirmed before quotation.",
  },
  {
    designation: "60245 IEC 66",
    name: "Heavy Polychloroprene or Equivalent Synthetic Elastomer Sheathed Flexible Cable",
    chinaType: "YCW",
    voltage: "450/750 V reference",
    body: "For RFQs referencing 60245 IEC 66. Final construction, available size range, application requirements and documentation are confirmed against the project specification.",
  },
];

const applications = [
  {
    image: `${assetRoot}/04_application_portable_movable_HD.png`,
    width: 552,
    height: 228,
    alt: "Portable or movable electrical equipment connection context",
    title: "Portable / Movable Equipment",
    copy: "For project requirements involving portable or movable electrical equipment where a 60245 IEC flexible-cable designation is specified.",
  },
  {
    image: `${assetRoot}/05_application_construction_maintenance_HD.png`,
    width: 550,
    height: 228,
    alt: "Construction and maintenance equipment connection context",
    title: "Construction & Maintenance Equipment",
    copy: "For construction or maintenance equipment connections where the requested cable designation and operating conditions are confirmed.",
  },
  {
    image: `${assetRoot}/06_application_industrial_workshop_HD.png`,
    width: 558,
    height: 228,
    alt: "Industrial equipment and workshop connection context",
    title: "Industrial Equipment & Workshops",
    copy: "For industrial equipment and workshop connections where the project specification calls for a rubber- or elastomer-sheathed flexible cable family.",
  },
];

const documentTypes = [
  "Technical datasheet",
  "Test documents required by the project",
  "Certificate, where specifically required and verified",
  "Cable marking / packing requirement",
  "Other project-specific documents",
];

const rfqItems = [
  "Requested cable designation",
  "Required standard / edition",
  "Rated voltage",
  "Number of cores",
  "Conductor size",
  "Equipment / application",
  "Expected movement / handling",
  "Installation conditions",
  "Any specific environmental / material requirement",
  "Required certification / documents",
  "Quantity / total length",
  "Packing requirement",
  "Destination",
];

export default function RubberSheathedFlexibleCablesPage() {
  return (
    <>
      <JsonLd data={createBreadcrumbJsonLd([
        { name: "Home", item: site.url },
        { name: "Products", item: `${site.url}/products` },
        { name: "Rubber-Sheathed Flexible Cables", item: `${site.url}${pagePath}` },
      ])} />

      <div className={styles.page}>
        <section className={styles.hero} aria-labelledby="rubber-flexible-title">
          <div className={styles.heroMedia}>
            <Image
              src={`${assetRoot}/01_hero_equipment_connection_HD.png`}
              width={1672}
              height={322}
              sizes="(max-width: 1672px) 100vw, 1672px"
              alt="Equipment connection with flexible cable"
              priority
              unoptimized
            />
          </div>
          <div className="container">
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/products">Products</Link><span aria-hidden="true">/</span><span>Rubber-Sheathed Flexible Cables</span>
            </nav>
            <div className={styles.heroLayout}>
              <div className={styles.heroCopy}>
                <span className={styles.eyebrow}>Rubber-Sheathed Flexible Cables</span>
                <h1 id="rubber-flexible-title">Rubber-Sheathed <span>Flexible Cables</span></h1>
                <p className={styles.heroLead}>Project-oriented cable families for requirements referencing 60245 IEC 53, 57 and 66.</p>
                <p className={styles.heroSupport}>Final construction, materials, available size range, application suitability and documentation are confirmed against the requested designation and project specification.</p>
                <div className={styles.heroActions}>
                  <Link className={`button ${styles.primaryAction}`} href="#inquiry" data-ga-event="rfq_click" data-ga-cta-location="product_hero" data-ga-product-slug="rubber-sheathed-flexible-cables">Send Project Requirements <span aria-hidden="true">↗</span></Link>
                  <Link className={styles.secondaryAction} href="/contact">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.reviewBand} aria-labelledby="selection-review-title">
          <div className="container">
            <span className={styles.sectionLabel}>01 / Cable Selection Review</span>
            <h2 id="selection-review-title">What to Confirm Before Cable Selection</h2>
            <ol className={styles.reviewStrip}>
              {reviewItems.map((item) => (
                <li key={item.number}>
                  <span className={styles.reviewNumber} aria-hidden="true">{item.number}</span>
                  <RubberFlexibleTechnicalIcon kind={item.icon} />
                  <div><strong>{item.title}</strong><p>{item.description}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.families} aria-labelledby="rubber-families-title">
          <div className="container">
            <div className={styles.sectionIntro}>
              <span className={styles.sectionLabel}>02 / Product Families</span>
              <h2 id="rubber-families-title">60245 IEC 53 / 57 / 66 Product References</h2>
              <p>Use the requested designation as the starting point; confirm the final construction and project specification before quotation.</p>
            </div>
            <div className={styles.familiesDesktop}>
              {families.map((family) => (
                <article className={styles.familyCard} key={family.designation}>
                  <div className={styles.familyCopy}>
                    <span className={styles.familyDesignation}>{family.designation}</span>
                    <h3>{family.name}</h3>
                    <p className={styles.familyMetadata}>China type reference: <strong>{family.chinaType}</strong></p>
                    <p className={styles.familyVoltage}>{family.voltage}</p>
                    <p className={styles.familyBody}>{family.body}</p>
                  </div>
                </article>
              ))}
            </div>
            <RubberFlexibleFamilyAccordion families={families} />
            <Link className={styles.familyAction} href="#inquiry">Send Your Specification <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className={styles.construction} aria-labelledby="construction-title">
          <div className={`container ${styles.constructionLayout}`}>
            <div className={styles.constructionCopy}>
              <span className={styles.sectionLabel}>03 / Representative Construction</span>
              <h2 id="construction-title">Representative Flexible Cable Construction</h2>
              <figure className={styles.constructionMobileVisual}>
                <Image src={`${assetRoot}/03_construction_mobile_visual_v2.png`} alt="Representative flexible multicore cable construction showing conductor, insulation, insulated cores and outer sheath." width={915} height={815} sizes="calc(100vw - 44px)" unoptimized />
              </figure>
              <p className={styles.constructionBoundary}>Representative multicore construction only. Actual conductor construction, core count, insulation and sheath materials, dimensions and performance requirements depend on the selected cable type and confirmed project specification.</p>
            </div>
            <figure className={styles.constructionDesktopVisual}>
              <Image src={`${assetRoot}/03_construction_desktop_visual_v2.png`} alt="Representative flexible multicore cable construction showing conductor, insulation, insulated cores and outer sheath." width={1022} height={650} sizes="(max-width: 900px) 58vw, 880px" unoptimized />
            </figure>
          </div>
        </section>

        <section className={styles.applications} aria-labelledby="application-contexts-title">
          <div className="container">
            <div className={styles.sectionIntro}>
              <span className={styles.sectionLabel}>04 / Application Context</span>
              <h2 id="application-contexts-title">Typical Equipment-Connection Contexts</h2>
            </div>
            <div className={styles.applicationGrid}>
              {applications.map((application, index) => (
                <article className={styles.applicationItem} key={application.title}>
                  <figure><Image src={application.image} alt={application.alt} width={application.width} height={application.height} sizes="(max-width: 680px) calc(100vw - 44px), 32vw" unoptimized /></figure>
                  <div><span>{String(index + 1).padStart(2, "0")}</span><h3>{application.title}</h3><p>{application.copy}</p></div>
                </article>
              ))}
            </div>
            <p className={styles.applicationBoundary}>Application examples are illustrative only. Final cable selection depends on the requested designation, electrical requirements, installation conditions and project specification.</p>
          </div>
        </section>

        <section className={styles.documentation} aria-labelledby="documentation-title">
          <div className={`container ${styles.documentationLayout}`}>
            <div>
              <span className={styles.sectionLabel}>05 / Project Documentation</span>
              <h2 id="documentation-title">Documents to Confirm for the Project</h2>
              <p className={styles.documentationBoundary}>Document availability and certificate scope are confirmed only after the cable designation and final project specification are defined.</p>
            </div>
            <ul className={styles.documentList}>{documentTypes.map((item) => <li key={item}><RubberFlexibleTechnicalIcon kind="document" /><span>{item}</span></li>)}</ul>
          </div>
        </section>

        <section className={styles.rfq} id="inquiry" aria-labelledby="rubber-rfq-title">
          <div className="container">
            <div className={styles.rfqLayout}>
              <div className={styles.rfqCopy}>
                <span className={styles.sectionLabel}>06 / Project Enquiry</span>
                <h2 id="rubber-rfq-title">Request a Rubber-Sheathed Flexible Cable Review</h2>
                <ul className={styles.requirementsList}>{rfqItems.map((item) => <li key={item}>{item}</li>)}</ul>
                <p>If the requirement is based on an international designation or customer datasheet, send the original specification for review rather than assuming an equivalent China type code.</p>
              </div>
              <div className={styles.formPanel}><InquiryForm compact /></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
