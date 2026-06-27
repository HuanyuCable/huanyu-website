import Image from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";

const overheadImages = {
  hero: "/images/products/overhead-acsr/overhead-insulated-cables-hero.png",
  jkyj: "/images/products/overhead-acsr/jkyj-copper-conductor-closeup.png",
  jklyj: "/images/products/overhead-acsr/jklyj-aluminium-conductor-closeup.png",
  comparison: "/images/products/overhead-acsr/jkyj-jklyj-comparison.png",
  application: "/images/products/overhead-acsr/overhead-insulated-application.png",
};

const acsrImages = {
  hero: "/images/products/overhead-acsr/acsr-lgj-hero.png",
  closeup: "/images/products/overhead-acsr/acsr-conductor-closeup.png",
  structure: "/images/products/overhead-acsr/acsr-steel-core-structure.png",
  crossSection: "/images/products/overhead-acsr/acsr-cross-section.png",
  application: "/images/products/overhead-acsr/acsr-overhead-line-application.png",
};

const overheadModelRows = [
  ["JKYJ", "Copper Conductor XLPE Insulated Overhead Cable", "Copper conductor / black XLPE insulation"],
  ["JKLYJ", "Aluminium Conductor XLPE Insulated Overhead Cable", "Aluminium conductor / black XLPE insulation"],
];

const overheadConstructionRows = [
  ["Conductor", "Copper conductor", "Aluminium conductor"],
  ["Insulation", "XLPE", "XLPE"],
  ["Insulation Colour", "Mainly black", "Mainly black"],
  ["Core Type", "Single core", "Single core"],
  ["Installation", "Overhead distribution line", "Overhead distribution line"],
];

const overheadParameterRows = [
  ["Product Models", "JKYJ, JKLYJ"],
  ["Rated Voltage", "1 kV, 10 kV"],
  ["Conductor", "Copper for JKYJ; aluminium for JKLYJ"],
  ["Insulation", "XLPE"],
  ["Insulation Colour", "Mainly black"],
  ["Core Type", "Single core"],
  ["Typical Application", "Urban and rural overhead distribution lines"],
  ["Standards", "Applicable GB/T or project-specified standards, subject to voltage grade and customer requirements"],
];

const overheadApplications = [
  ["Urban Distribution Lines", "Overhead insulated line construction for urban and suburban distribution projects."],
  ["Rural Power Networks", "Power distribution lines in rural and township grid projects."],
  ["Service Connections", "Suitable for overhead service routes and feeder connections."],
  ["Distribution Network Renovation", "Used in power network renovation where insulated overhead construction is preferred."],
];

const acsrConstructionRows = [
  ["Steel Core", "Provides mechanical strength and tensile support"],
  ["Aluminium Strands", "Provide electrical conductivity"],
  ["Structure", "Concentric stranded bare conductor"],
  ["Insulation", "None; this is a bare overhead conductor"],
  ["Typical Use", "Overhead transmission and distribution lines"],
];

const acsrTypeRows = [
  ["LGJ / ACSR", "Aluminium Conductor Steel Reinforced", "Main promoted bare overhead conductor type"],
  ["JL", "Aluminium stranded conductor", "Related conductor type, subject to project confirmation"],
  ["LGJF", "Steel reinforced aluminium alloy conductor / anti-corrosion or project-specific variant", "Related option, subject to confirmation"],
  ["AAC / AAAC", "All aluminium or all aluminium alloy conductor", "Related bare conductor options can be discussed according to project requirements"],
];

const acsrFeatures = [
  ["Steel Core", "Mechanical strength and tensile support for overhead line design."],
  ["Aluminium Strands", "Reliable electrical conductivity around the reinforced core."],
  ["Overhead Line Use", "Suitable for transmission and distribution line projects."],
  ["Long-span Projects", "Applicable to span and line designs where reinforced construction is required."],
];

const acsrApplications = [
  ["Overhead Transmission Lines", "Bare conductors for power transmission routes and line construction."],
  ["Distribution Lines", "Suitable for medium-distance overhead distribution line projects."],
  ["Long-span Line Sections", "Steel reinforced construction supports mechanical strength requirements."],
  ["Rural and Grid Projects", "Used in grid expansion, renovation and infrastructure projects."],
];

function ProductHero({
  eyebrow,
  title,
  description,
  badges,
  image,
  imageAlt,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  badges: string[];
  image: string;
  imageAlt: string;
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
            <Link className="button" href="#inquiry">Request Quote</Link>
            <Link className="button button-ghost" href={secondaryHref}>{secondaryLabel}</Link>
          </div>
        </div>
        <div>
          <div className="product-detail-image xlpe-hero-image overhead-product-image">
            <Image src={image} alt={imageAlt} width={1200} height={900} sizes="(max-width: 980px) 100vw, 45vw" priority />
          </div>
          <p className="product-image-note">Product image from the approved overhead and ACSR product asset package.</p>
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

function ApplicationCards({ applications, compact = false }: { applications: string[][]; compact?: boolean }) {
  return (
    <div className={`application-grid xlpe-four-card-grid${compact ? " overhead-compact-application-grid" : ""}`}>
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

export function OverheadInsulatedCablesProductPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Overhead Insulated Cables",
    description:
      "JKYJ and JKLYJ XLPE insulated overhead cables with copper or aluminium conductors for 1 kV and 10 kV overhead distribution lines.",
    brand: { "@type": "Brand", name: "Huanyu Cable" },
    category: "Overhead Insulated Cables",
  };

  return (
    <>
      <ProductHero
        eyebrow="Overhead Insulated Cables"
        title="Overhead Insulated Cables"
        description="Copper and aluminium conductor XLPE insulated overhead cables for 1 kV and 10 kV overhead power distribution applications."
        badges={["JKYJ / JKLYJ", "1 kV / 10 kV", "XLPE Insulation", "Black Insulation"]}
        image={overheadImages.hero}
        imageAlt="JKYJ and JKLYJ overhead insulated cable product family"
        secondaryHref="#representative-models"
        secondaryLabel="View Models"
      />

      <section className="section">
        <div className="container xlpe-overview-grid">
          <article className="xlpe-info-card">
            <span className="eyebrow">Product overview</span>
            <h2>JKYJ and JKLYJ for insulated overhead distribution</h2>
            <p>
              Huanyu Cable supplies JKYJ and JKLYJ overhead insulated cables with black XLPE insulation for urban and rural power distribution lines. These single-core overhead cables are used for reliable power distribution where insulated line construction is required.
            </p>
          </article>
          <article className="xlpe-info-card">
            <span className="eyebrow">Supply focus</span>
            <h2>Copper and aluminium conductor options</h2>
            <p>
              JKYJ uses a copper conductor, while JKLYJ uses an aluminium conductor. Both are designed for overhead installation, with 1 kV and 10 kV as commonly supplied voltage grades.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-muted" id="representative-models">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Representative models</span>
              <h2>JKYJ and JKLYJ are the primary promoted overhead insulated products</h2>
            </div>
          </div>
          <div className="evidence-grid">
            {[
              [overheadImages.jkyj, "JKYJ copper conductor XLPE insulated overhead cable close-up", overheadModelRows[0]],
              [overheadImages.jklyj, "JKLYJ aluminium conductor XLPE insulated overhead cable close-up", overheadModelRows[1]],
            ].map(([src, alt, row]) => {
              const [model, name, construction] = row as string[];
              return (
                <article className="evidence-card" key={model}>
                  <div className="evidence-image xlpe-gallery-image overhead-card-image">
                    <Image src={src as string} alt={alt as string} width={900} height={900} sizes="(max-width: 760px) 100vw, 33vw" />
                  </div>
                  <h3>{model}</h3>
                  <p><strong>{name}</strong></p>
                  <p>{construction}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" id="cable-construction">
        <div className="container xlpe-construction-grid">
          <div>
            <span className="eyebrow">Structure & construction</span>
            <h2>Single-core overhead cable construction</h2>
            <div className="xlpe-table-wrap">
              <table className="xlpe-table">
                <thead>
                  <tr>
                    <th>Layer / Item</th>
                    <th>JKYJ</th>
                    <th>JKLYJ</th>
                  </tr>
                </thead>
                <tbody>
                  {overheadConstructionRows.map(([item, jkyj, jklyj]) => (
                    <tr key={item}>
                      <td>{item}</td>
                      <td>{jkyj}</td>
                      <td>{jklyj}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="xlpe-image-stack overhead-image-stack">
            <figure className="overhead-media-frame">
              <Image src={overheadImages.comparison} alt="JKYJ and JKLYJ overhead insulated cable comparison" width={1200} height={900} sizes="(max-width: 980px) 100vw, 46vw" />
              <figcaption>JKYJ and JKLYJ conductor comparison</figcaption>
            </figure>
            <figure className="overhead-media-frame">
              <Image src={overheadImages.application} alt="Overhead insulated cable distribution line application" width={1200} height={900} sizes="(max-width: 980px) 100vw, 46vw" />
              <figcaption>Overhead insulated distribution line application</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container xlpe-spec-layout">
          <div>
            <span className="eyebrow">Key technical parameters</span>
            <h2>Concise parameters for project quotation</h2>
            <SpecTable rows={overheadParameterRows} />
          </div>
          <article className="xlpe-info-card">
            <span className="eyebrow">Related option</span>
            <h2>Aerial bundled cable discussion</h2>
            <p>
              Related aerial bundled cable options can be discussed according to project requirements. Huanyu Cable places primary emphasis on JKYJ and JKLYJ overhead insulated cable supply.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Typical applications</span>
              <h2>Overhead insulated line project scenarios</h2>
            </div>
          </div>
          <ApplicationCards applications={overheadApplications} />
        </div>
      </section>

      <section className="section quote-section" id="inquiry">
        <div className="container quote-grid">
          <div>
            <span className="eyebrow light">Quotation review</span>
            <h2>Send the model, voltage grade and line project requirement for review.</h2>
            <p>Huanyu Cable will confirm construction, standard, conductor material, quantity and document requirements before quotation.</p>
          </div>
          <InquiryForm compact />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}

export function AcsrBareOverheadConductorsProductPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ACSR Bare Overhead Conductors",
    description:
      "LGJ / ACSR aluminium conductor steel reinforced bare conductors for overhead transmission and distribution lines, using a steel core for mechanical strength and aluminium strands for electrical conductivity.",
    brand: { "@type": "Brand", name: "Huanyu Cable" },
    category: "ACSR Bare Overhead Conductors",
  };

  return (
    <>
      <ProductHero
        eyebrow="ACSR Bare Overhead Conductors"
        title="ACSR Bare Overhead Conductors"
        description="LGJ / ACSR steel reinforced aluminium conductors for overhead transmission and distribution lines requiring mechanical strength and reliable electrical conductivity."
        badges={["LGJ / ACSR", "Steel Core", "Aluminium Strands", "Bare Overhead Conductor"]}
        image={acsrImages.hero}
        imageAlt="LGJ ACSR bare overhead conductor product view"
        secondaryHref="#structure"
        secondaryLabel="View Structure"
      />

      <section className="section">
        <div className="container xlpe-overview-grid">
          <article className="xlpe-info-card">
            <span className="eyebrow">Product overview</span>
            <h2>Steel reinforced aluminium conductor for overhead line projects</h2>
            <p>
              ACSR conductors combine a steel core for mechanical strength and outer aluminium strands for electrical conductivity. They are widely used in overhead transmission and distribution lines where tensile strength, span capability and reliable current-carrying performance are required.
            </p>
          </article>
          <article className="xlpe-info-card">
            <span className="eyebrow">Designation note</span>
            <h2>LGJ corresponds to ACSR</h2>
            <p>
              LGJ is the common Chinese product designation corresponding to ACSR, Aluminium Conductor Steel Reinforced. This page treats LGJ / ACSR as a bare overhead conductor product.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-muted" id="structure">
        <div className="container xlpe-construction-grid">
          <div>
            <span className="eyebrow">Structure & construction</span>
            <h2>Concentric stranded bare conductor structure</h2>
            <div className="xlpe-table-wrap">
              <table className="xlpe-table">
                <thead>
                  <tr>
                    <th>Layer / Item</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {acsrConstructionRows.map(([item, description]) => (
                    <tr key={item}>
                      <td>{item}</td>
                      <td>{description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="review-note">
              ACSR is not described as an insulated cable on this page. It is presented as a bare overhead conductor.
            </div>
          </div>
          <div className="xlpe-image-stack overhead-image-stack">
            <figure className="overhead-media-frame">
              <Image src={acsrImages.structure} alt="ACSR steel core and aluminium strand structure" width={1200} height={900} sizes="(max-width: 980px) 100vw, 46vw" />
              <figcaption>Steel core and aluminium strand structure</figcaption>
            </figure>
            <figure className="overhead-media-frame">
              <Image src={acsrImages.crossSection} alt="ACSR bare conductor cross section" width={1200} height={900} sizes="(max-width: 980px) 100vw, 46vw" />
              <figcaption>ACSR bare conductor cross section</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section" id="representative-types">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Representative product types</span>
              <h2>LGJ / ACSR is the primary promoted bare conductor type</h2>
            </div>
          </div>
          <div className="xlpe-table-wrap">
            <table className="xlpe-table">
              <thead>
                <tr>
                  <th>Model / Type</th>
                  <th>Recommended English Name</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {acsrTypeRows.map(([type, name, notes]) => (
                  <tr key={type}>
                    <td>{type}</td>
                    <td>{name}</td>
                    <td>{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Key features</span>
              <h2>Website-friendly ACSR project discussion points</h2>
            </div>
          </div>
          <div className="xlpe-model-grid">
            {acsrFeatures.map(([title, text]) => (
              <article key={title}>
                <span>LGJ / ACSR</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="review-note">
            Typical LGJ / ACSR project specifications may include LGJ-35, LGJ-50, LGJ-70, LGJ-95, LGJ-120 and higher sizes, subject to project design, standard requirements and production confirmation.
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container xlpe-construction-grid">
          <div>
            <span className="eyebrow">Typical applications</span>
            <h2>Transmission and distribution line use cases</h2>
            <ApplicationCards applications={acsrApplications} compact />
          </div>
          <figure className="xlpe-feature-image overhead-media-frame overhead-feature-image">
            <Image src={acsrImages.application} alt="ACSR bare overhead conductor transmission line application" width={1200} height={900} sizes="(max-width: 980px) 100vw, 46vw" />
            <figcaption>ACSR overhead transmission line application</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Supporting visuals</span>
              <h2>Product views for bare conductor structure discussions</h2>
            </div>
          </div>
          <div className="evidence-grid">
            {[
              [acsrImages.closeup, "ACSR bare conductor close-up"],
              [acsrImages.crossSection, "ACSR conductor cross-section"],
              [acsrImages.structure, "ACSR steel core structure"],
            ].map(([src, alt]) => (
              <figure className="evidence-card overhead-supporting-visual" key={src}>
                <div className="evidence-image xlpe-gallery-image overhead-card-image">
                  <Image src={src} alt={alt} width={900} height={900} sizes="(max-width: 760px) 100vw, 33vw" />
                </div>
                <figcaption>{alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section quote-section" id="inquiry">
        <div className="container quote-grid">
          <div>
            <span className="eyebrow light">Quotation review</span>
            <h2>Send the conductor type, size and line design requirement for review.</h2>
            <p>Huanyu Cable will confirm conductor construction, applicable standard, quantity and document requirements before quotation.</p>
          </div>
          <InquiryForm compact />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
