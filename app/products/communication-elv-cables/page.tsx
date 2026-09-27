import type { Metadata } from "next";
import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { JsonLd } from "@/components/JsonLd";
import { createBreadcrumbJsonLd } from "@/lib/structuredData";
import { site } from "@/lib/site";
import { CommunicationElvFamilyAccordion, type CommunicationElvFamily } from "./CommunicationElvFamilyAccordion";
import { CommunicationElvTechnicalIcon, type CommunicationElvIconKind } from "./CommunicationElvTechnicalIcons";
import styles from "./communication-elv.module.css";

const assetRoot = "/images/products/communication-elv";
const pageTitle = "Communication & ELV Cables | Huanyu Cable";
const pageDescription = "Communication and ELV cable solutions for structured cabling, CCTV and coaxial/RF, fire alarm, audio and telephone projects. Send your BOQ or specification for technical review.";
const pagePath = "/products/communication-elv-cables";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website",
    title: pageTitle,
    description: pageDescription,
    url: `${site.url}${pagePath}`,
    images: [{ url: `${assetRoot}/01_hero_communication_elv.png`, alt: "Communication and ELV systems in a modern commercial building" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${assetRoot}/01_hero_communication_elv.png`],
  },
};

const heroCues: { icon: CommunicationElvIconKind; text: string }[] = [
  { icon: "network", text: "Network & Data" },
  { icon: "cctv", text: "CCTV & RF" },
  { icon: "alarm", text: "Fire Alarm" },
  { icon: "audio", text: "Audio & PA" },
];

const reviewItems: { number: string; icon: CommunicationElvIconKind; title: string; description: string }[] = [
  { number: "01", icon: "system", title: "System Function", description: "Confirm network, CCTV, RF, fire alarm, audio, telephone or other ELV purpose" },
  { number: "02", icon: "category", title: "Cable Family / Category", description: "Confirm the required cable family, category or model reference" },
  { number: "03", icon: "arrangement", title: "Conductor / Core / Pair Arrangement", description: "Confirm conductor requirement, core count or pair arrangement where specified" },
  { number: "04", icon: "shield", title: "Shielding / Screening", description: "Confirm whether shielding is required and how it should be configured" },
  { number: "05", icon: "environment", title: "Installation Environment", description: "Confirm routing, installation method and operating environment" },
  { number: "06", icon: "document", title: "Project Standard & Documentation", description: "Confirm applicable standard, performance requirement and required documents" },
];

const applicationRoutes = [
  "Structured Cabling & Network",
  "CCTV, Coaxial & RF",
  "Fire Alarm",
  "Audio, PA & Telephone",
];

const families: CommunicationElvFamily[] = [
  {
    number: "01",
    icon: "network",
    title: "Structured Cabling & Network",
    modelLabel: "Representative families",
    models: "Cat5e / Cat6 / Cat6A / Cat7",
    bullets: [
      "Data communication and network connection",
      "Building / data-room / infrastructure routing",
      "Category and shielding requirement by project",
      "Final conductor and construction details to be confirmed",
    ],
  },
  {
    number: "02",
    icon: "cctv",
    title: "CCTV, Coaxial & RF",
    modelLabel: "Representative families",
    models: "RG6 / RG11 / RG58 / RG59 / RG213 / RG316",
    bullets: [
      "Coaxial / RF transmission requirements",
      "CCTV projects where coaxial cabling is specified",
      "Building / industrial / infrastructure routing",
      "Exact RG / RF cable type to be confirmed",
    ],
    note: "CCTV systems may use network or coaxial cabling depending on the system design.",
  },
  {
    number: "03",
    icon: "alarm",
    title: "Fire Alarm Cables",
    modelLabel: "Representative family",
    models: "Fire Alarm Cable",
    bullets: [
      "Fire alarm system cabling requirement",
      "Core count / conductor size by specification",
      "Shielding where specified",
      "Fire / smoke / certification requirement to be confirmed by project",
    ],
  },
  {
    number: "04",
    icon: "audio",
    title: "Audio, PA & Telephone",
    modelLabel: "Representative families",
    models: "Audio Cable / OFC Audio Speaker Cable / Telephone Cable (HYA)",
    bullets: [
      "Audio / speaker cabling requirements",
      "Public-address system connection",
      "Telephone / building communication",
      "Conductor / pair / shielding requirement by project",
    ],
  },
];

const constructions = [
  {
    image: `${assetRoot}/03_network_twisted_pair_construction.png`,
    alt: "Representative twisted-pair network cable construction",
    title: "Representative Twisted-Pair Network Cable",
    models: "Cat5e / Cat6 family example",
    labels: ["Four twisted pairs — representative arrangement", "Representative solid-conductor illustration", "Outer sheath"],
    boundary: "Representative unshielded twisted-pair example only. Cat6A, Cat7 and shielded network-cable constructions may use different pair separation, shielding, conductor and sheath arrangements.",
  },
  {
    image: `${assetRoot}/04_coaxial_construction.png`,
    alt: "Representative coaxial cable construction",
    title: "Representative Coaxial Cable",
    models: "RG6 / RG11 / RG58 / RG59 / RG213 / RG316 family",
    labels: ["Center conductor", "Dielectric", "Shielding / screening layer", "Outer sheath"],
    boundary: "Construction varies by selected RG / RF cable type. Center conductor, dielectric, shielding arrangement, dimensions and electrical characteristics shall be confirmed by model and project requirement.",
  },
  {
    image: `${assetRoot}/05_fire_alarm_construction.png`,
    alt: "Representative shielded fire alarm cable construction",
    title: "Representative Fire Alarm Cable",
    models: "Shielded multi-conductor example",
    labels: ["Insulated conductors", "Representative overall shielding", "Drain conductor where specified", "Outer sheath"],
    boundary: "One possible shielded multi-conductor example. Final conductor count, conductor size, shielding, sheath, fire-performance and certification requirements depend on the selected cable type and project standard.",
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
  "System / application purpose",
  "Cable family / category / model reference",
  "Conductor / core / pair requirement, if specified",
  "Shielding / screening requirement",
  "Fire / smoke / performance requirement, if specified",
  "Installation environment / routing",
  "Applicable project standard + required documentation / certification",
  "Quantity / total length",
  "Destination",
  "Delivery schedule, if known",
];

function ResponsivePicture({ desktopSrc, mobileSrc, desktopSize, mobileSize, alt, priority = false }: {
  desktopSrc: string;
  mobileSrc: string;
  desktopSize: { width: number; height: number };
  mobileSize: { width: number; height: number };
  alt: string;
  priority?: boolean;
}) {
  const common = { alt, sizes: "100vw" };
  const { props: { srcSet: mobileSrcSet } } = getImageProps({ ...common, src: mobileSrc, ...mobileSize });
  const { props: desktopProps } = getImageProps({ ...common, src: desktopSrc, ...desktopSize, priority });
  return (
    <picture>
      <source media="(max-width: 680px)" srcSet={mobileSrcSet} />
      <img {...desktopProps} alt={alt} />
    </picture>
  );
}

function DesktopFamily({ family }: { family: CommunicationElvFamily }) {
  return (
    <article className={styles.familyColumn}>
      <div className={styles.familyHeading}>
        <CommunicationElvTechnicalIcon kind={family.icon} />
        <div><span>{family.number}</span><h3>{family.title}</h3></div>
      </div>
      <p className={styles.modelLine}><span>{family.modelLabel}</span><strong>{family.models}</strong></p>
      <ul className={styles.familyList}>{family.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
      {family.note && <p className={styles.familyNote}>{family.note}</p>}
    </article>
  );
}

export default function CommunicationElvCablesPage() {
  return (
    <>
      <JsonLd data={createBreadcrumbJsonLd([
        { name: "Home", item: site.url },
        { name: "Products", item: `${site.url}/products` },
        { name: "Communication & ELV Cables", item: `${site.url}${pagePath}` },
      ])} />

      <div className={styles.page}>
        <section className={styles.hero} aria-labelledby="communication-elv-title">
          <div className={styles.heroMedia}>
            <ResponsivePicture
              desktopSrc={`${assetRoot}/01_hero_communication_elv.png`}
              mobileSrc={`${assetRoot}/01M_hero_mobile_crop.png`}
              desktopSize={{ width: 1672, height: 461 }}
              mobileSize={{ width: 737, height: 461 }}
              alt="Communication and ELV systems in a modern commercial building"
              priority
            />
          </div>
          <div className="container">
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/products">Products</Link><span aria-hidden="true">/</span><span>Communication &amp; ELV Cables</span>
            </nav>
            <div className={styles.heroLayout}>
              <div className={styles.heroCopy}>
                <span className={styles.eyebrow}>Communication &amp; ELV Solutions</span>
                <h1 id="communication-elv-title">Communication &amp; ELV <span>Cables</span></h1>
                <p>Project cable solutions for structured cabling, CCTV and RF, fire alarm, audio and building communication systems. Final cable selection depends on system function, cable family, core or pair arrangement, shielding, installation environment and project requirements.</p>
                <div className={styles.heroCues} aria-label="Buyer review scope">
                  {heroCues.map((cue) => <div key={cue.text}><CommunicationElvTechnicalIcon kind={cue.icon} /><span>{cue.text}</span></div>)}
                </div>
                <Link className={`button ${styles.primaryAction}`} href="#inquiry" data-ga-event="rfq_click" data-ga-cta-location="product_hero" data-ga-product-slug="communication-elv-cables">
                  Send Project Requirements <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.reviewBand} aria-labelledby="technical-review-title">
          <div className="container">
            <span className={styles.reviewEyebrow} id="technical-review-title">01 / Technical Review</span>
            <ol className={styles.reviewStrip}>
              {reviewItems.map((item) => (
                <li key={item.number}>
                  <span className={styles.reviewNumber} aria-hidden="true">{item.number}</span>
                  <CommunicationElvTechnicalIcon kind={item.icon} />
                  <div><strong>{item.title}</strong><p>{item.description}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.application} aria-labelledby="communication-application-title">
          <div className="container">
            <div className={styles.applicationLayout}>
              <div className={styles.applicationCopy}>
                <span className={styles.eyebrow}>02 / Application</span>
                <h2 id="communication-application-title">In Integrated ELV Systems</h2>
                <p>Communication and extra-low-voltage (ELV) cables are used across commercial buildings, industrial facilities, data centers, schools, hospitals, transportation hubs and public infrastructure. The final cable family should be selected according to the system function, routing method, installation environment and project specification.</p>
                <p className={styles.applicationBoundary}>System routes are illustrative only. Actual cable family, routing, quantity, installation method and performance requirements shall be confirmed according to the project design and specification.</p>
              </div>
              <div className={styles.applicationVisual}>
                <figure className={styles.applicationFigure}>
                  <ResponsivePicture
                    desktopSrc={`${assetRoot}/02_application_integrated_elv.png`}
                    mobileSrc={`${assetRoot}/02M_application_mobile_crop.png`}
                    desktopSize={{ width: 1672, height: 472 }}
                    mobileSize={{ width: 1062, height: 472 }}
                    alt="Illustrative integrated ELV systems in a commercial building"
                  />
                  <figcaption>Conceptual route colours only — not cable jacket or circuit-colour standards.</figcaption>
                </figure>
                <ol className={styles.applicationRoutes}>
                  {applicationRoutes.map((route, index) => <li key={route}><span>{String(index + 1).padStart(2, "0")}</span><strong>{route}</strong></li>)}
                </ol>
                <p className={styles.diagramNote}>Application illustration only — not an electrical wiring diagram.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.families} aria-labelledby="communication-families-title">
          <div className="container">
            <div className={styles.familiesHeading}>
              <span className={styles.eyebrow}>03 / Product Families</span>
              <h2 id="communication-families-title">Choose by System Requirement</h2>
              <p>Different ELV systems may require different cable constructions. Start with the system function, then confirm the final cable type against the project specification.</p>
            </div>
            <div className={styles.familiesDesktop}>{families.map((family) => <DesktopFamily family={family} key={family.number} />)}</div>
            <CommunicationElvFamilyAccordion families={families} />
          </div>
        </section>

        <section className={styles.technical} aria-label="Representative cable constructions and project documentation">
          <div className={`container ${styles.technicalLayout}`}>
            <div className={styles.constructions}>
              <span className={styles.eyebrow}>04 / Representative Constructions</span>
              <h2>Representative Cable Constructions</h2>
              <p>Different communication and ELV cable families may use different conductor, pair, shielding and sheath arrangements. The examples below are provided for construction review reference only.</p>
              <div className={styles.constructionGrid}>
                {constructions.map((item, index) => (
                  <article className={styles.constructionItem} key={item.title}>
                    <span className={styles.constructionIndex} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    <figure><Image src={item.image} alt={item.alt} width={1448} height={1086} sizes="(max-width: 680px) calc(100vw - 44px), (max-width: 1050px) 45vw, 24vw" /></figure>
                    <div className={styles.constructionCaption}>
                      <h3>{item.title}</h3>
                      <p className={styles.constructionModels}>{item.models}</p>
                      <ul>{item.labels.map((label) => <li key={label}>{label}</li>)}</ul>
                      <p className={styles.itemBoundary}>{item.boundary}</p>
                    </div>
                  </article>
                ))}
              </div>
              <p className={styles.constructionDisclaimer}>Illustrative constructions only. Core colours, jacket colours, layer appearance and proportions do not define a specific cable model, material specification, fire classification or wiring standard.</p>
            </div>

            <aside className={styles.documentation} aria-labelledby="communication-documentation-title">
              <span className={styles.eyebrow}>05 / Documentation</span>
              <h2 id="communication-documentation-title">Project Documentation</h2>
              <p>State the applicable project standard, performance requirement and required documentation in the RFQ. Availability is confirmed against the selected cable type and final project specification.</p>
              <ul className={styles.documentList}>{documentTypes.map((item) => <li key={item}><CommunicationElvTechnicalIcon kind="document" /><span>{item}</span></li>)}</ul>
            </aside>
          </div>
        </section>

        <section className={styles.rfq} id="inquiry" aria-labelledby="communication-rfq-title">
          <div className="container">
            <div className={styles.rfqLayout}>
              <div className={styles.rfqCopy}>
                <span className={styles.eyebrow}>06 / Project Enquiry</span>
                <h2 id="communication-rfq-title">Request a Communication &amp; ELV Cable Quote</h2>
                <p>If the specification is incomplete, send the available BOQ, drawing or datasheet. Huanyu can review the information and identify the cable details still required for quotation.</p>
                <h3>Information to include</h3>
                <ul className={styles.requirementsList}>{rfqItems.map((item) => <li key={item}>{item}</li>)}</ul>
                <p className={styles.opticalNote}>Optical cable requirements can also be reviewed separately by project.</p>
              </div>
              <div className={styles.formPanel}><InquiryForm compact /></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
