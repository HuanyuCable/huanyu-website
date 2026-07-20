import Image from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { site } from "@/lib/site";

const catalogHref = "/downloads/huanyu-cable-solar-pv-catalog.pdf";

const solarProducts = [
  {
    title: "H1Z2Z2-K Solar DC Cable",
    description: "EN 50618 solar DC cable with a Class 5 tinned copper conductor and halogen-free cross-linked construction.",
    href: "/products/h1z2z2-k-solar-dc-cable",
    image: "/images/products/solar-cables/h1z2z2-k-solar-dc-cable.webp",
    imageAlt: "H1Z2Z2-K black solar DC cable with halogen-free insulation and tinned copper conductor",
    tags: ["H1Z2Z2-K", "EN 50618:2014", "Primary PV cable"],
  },
  {
    title: "PV1-F Solar DC Cable",
    description: "Flexible solar DC cable for projects and markets that specifically request the PV1-F designation.",
    href: "/products/pv1-f-solar-dc-cable",
    image: "/images/products/solar-cables/pv1-f-solar-dc-cable.webp",
    imageAlt: "PV1-F red single-core solar DC cable with tinned copper conductor",
    tags: ["PV1-F", "2 PfG 1169/08.2007", "Specified projects"],
  },
];

const connectionSteps = [
  ["01", "PV Modules", "Module interconnection"],
  ["02", "String Circuit", "String wiring"],
  ["03", "Combiner Box", "DC collection"],
  ["04", "Inverter", "DC input connection"],
];

const serviceCards = [
  ["Class 5 Tinned Copper", "Flexible stranded conductor with a tin-plated surface for conductivity, flexibility and corrosion resistance."],
  ["Cross-linked Cable Structure", "Cross-linked insulation and sheath materials designed for photovoltaic cable service."],
  ["Outdoor Resistance", "Designed to withstand UV radiation, ozone, moisture, weather exposure and temperature variation."],
  ["Red and Black Identification", "Colour options support positive and negative DC circuit identification."],
];

const selectionRows = [
  ["Reference document", "EN 50618:2014", "2 PfG 1169/08.2007"],
  ["Primary voltage expression", "1.5/1.5 kV DC", "0.6/1 kV AC; DC system use per specification"],
  ["Short-circuit temperature", "250°C / 5 s", "200°C / 5 s"],
  ["Typical enquiry situation", "Projects following EN 50618", "Projects specifically requesting PV1-F"],
  ["Selection principle", "Confirm project standard and document scope", "Confirm project acceptance and document scope"],
];

const commonSizes = ["1×2.5 mm²", "1×4 mm²", "1×6 mm²", "1×10 mm²", "1×16 mm²"];

type SolarDetailVariant = "solar-pv1-f" | "solar-h1z2z2-k";

type SolarDetail = {
  title: string;
  summary: string;
  reference: string;
  overviewTitle: string;
  overview: string;
  image: string;
  imageAlt: string;
  ratings: [string, string][];
  ratingNote?: string;
  construction: string[];
  performance: [string, string][];
  applications: [string, string][];
  guidance?: string;
  accent: "orange" | "red";
};

const solarDetails: Record<SolarDetailVariant, SolarDetail> = {
  "solar-h1z2z2-k": {
    title: "H1Z2Z2-K Solar DC Cable",
    summary:
      "H1Z2Z2-K is a flexible single-core solar DC cable for photovoltaic module strings, combiner boxes, inverter connections and other fixed DC wiring in modern PV systems.",
    reference: "EN 50618:2014",
    overviewTitle: "Halogen-free Construction for Photovoltaic DC Systems",
    overview:
      "A Class 5 flexible tinned copper conductor is protected by cross-linked halogen-free insulation and an outer sheath designed for indoor and outdoor photovoltaic service.",
    image: "/images/products/solar-cables/h1z2z2-k-solar-dc-cable-final.webp",
    imageAlt: "H1Z2Z2-K black solar DC cable with halogen-free insulation and tinned copper conductor",
    ratings: [
      ["Rated DC Voltage", "1.5/1.5 kV"],
      ["Rated AC Voltage", "1.0/1.0 kV"],
      ["Normal Conductor Temperature", "90°C"],
      ["Short-circuit Temperature", "250°C / 5 s"],
    ],
    ratingNote: "Maximum operating DC voltage up to 1.8 kV under the referenced standard conditions.",
    construction: [
      "Class 5 Flexible Tinned Copper Conductor",
      "Cross-linked Halogen-free Insulation",
      "Cross-linked Halogen-free Outer Sheath",
    ],
    performance: [
      ["Electrical Performance", "1.5/1.5 kV DC rating, 1.0/1.0 kV AC rating and a maximum operating DC voltage not exceeding 1.8 kV under the referenced conditions."],
      ["Thermal Performance", "Normal maximum conductor temperature of 90°C; limited operation at 120°C for a cumulative period up to 20,000 hours; short-circuit conductor temperature of 250°C for 5 seconds."],
      ["Mechanical Performance", "Flexible Class 5 conductor construction with cold bend, cold elongation, impact, shrinkage and dynamic penetration test requirements."],
      ["Environmental Resistance", "UV weathering, ozone resistance, damp heat, moisture and outdoor service requirements for photovoltaic installations."],
      ["Fire and Material Behaviour", "Halogen-free materials, low-smoke performance and vertical flame propagation requirements under the applicable referenced methods."],
      ["Marking and Traceability", "Cable designation, nominal size and traceability information are repeated along the cable sheath."],
    ],
    applications: [
      ["Indoor / Outdoor", "Fixed PV DC installations"],
      ["Solar Modules", "Module and string wiring"],
      ["Combiner Boxes", "DC collection circuits"],
      ["Inverters", "DC input connections"],
    ],
    accent: "orange",
  },
  "solar-pv1-f": {
    title: "PV1-F Solar DC Cable",
    summary:
      "PV1-F is a flexible single-core solar DC cable for projects and markets specifically requesting the PV1-F designation.",
    reference: "2 PfG 1169/08.2007",
    overviewTitle: "PV1-F Construction for Specified Project Requirements",
    overview:
      "A Class 5 flexible tinned copper conductor with cross-linked insulation and outer sheath supports module, string, combiner box and inverter DC connections.",
    image: "/images/products/solar-cables/pv1-f-solar-dc-cable-final.webp",
    imageAlt: "PV1-F red single-core solar DC cable with tinned copper conductor",
    ratings: [
      ["Rated AC Voltage", "0.6/1 kV"],
      ["DC System Use", "Up to 1.8 kV"],
      ["Operating Temperature", "-40°C to +90°C"],
      ["Short-circuit Temperature", "200°C / 5 s"],
    ],
    construction: [
      "Class 5 Flexible Tinned Copper Conductor",
      "Cross-linked Insulation",
      "Cross-linked Outer Sheath",
    ],
    performance: [
      ["Electrical Performance", "0.6/1 kV AC rated design with DC application conditions up to 1.8 kV, subject to the relationship defined by the reference specification."],
      ["Thermal Performance", "Operating temperature range from -40°C to +90°C, conductor temperature up to 120°C under specified conditions and short-circuit temperature of 200°C for 5 seconds."],
      ["Mechanical Performance", "Flexible conductor construction with low-temperature impact, bend, elongation, dynamic penetration and cut-propagation test requirements."],
      ["Environmental Resistance", "UV weathering, ozone, damp heat, acid/alkali exposure and moisture-related requirements for outdoor photovoltaic use."],
      ["Fire and Chemical Behaviour", "Flame propagation, smoke density, halogen content, pH, conductivity and toxicity-related requirements are included in the reference specification."],
      ["Ordering Formats", "Red or black cable, supplied in coil or drum packing according to order requirements."],
    ],
    applications: [
      ["Solar Modules", "Module interconnection"],
      ["String Circuits", "String wiring"],
      ["Combiner Boxes", "DC collection circuits"],
      ["Inverters", "DC input connections"],
    ],
    guidance: "For new projects following EN 50618, review H1Z2Z2-K Solar DC Cable.",
    accent: "red",
  },
};

function CatalogLink({ className = "button" }: { className?: string }) {
  return (
    <a className={className} href={catalogHref} download>
      Download Solar PV Cable Catalog
    </a>
  );
}

function SolarCatalogCta() {
  return (
    <section className="section section-muted solar-catalog-section">
      <div className="container solar-catalog-panel">
        <div>
          <span className="eyebrow">Technical catalog</span>
          <h2>Solar PV Cable Catalog</h2>
          <p>Review the H1Z2Z2-K and PV1-F construction, ratings, performance categories and information required for quotation.</p>
        </div>
        <div className="solar-catalog-actions">
          <CatalogLink />
          <Link className="button solar-button-outline" href="#inquiry">Request a Quote</Link>
        </div>
      </div>
    </section>
  );
}

function CableConstructionVisual({ detail }: { detail: SolarDetail }) {
  const isPv1F = detail.accent === "red";
  const crossSectionImage = isPv1F
    ? "/images/products/solar-cables/pv1-f-cross-section.webp"
    : "/images/products/solar-cables/h1z2z2-k-cross-section.webp";
  const crossSectionAlt = `${detail.title} cross-section with tinned copper conductor, white insulation and ${isPv1F ? "red" : "black"} outer sheath`;

  return (
    <div className="solar-construction-grid">
      <figure className="solar-cable-visual">
        <Image src={crossSectionImage} alt={crossSectionAlt} width={1254} height={1254} sizes="(max-width: 980px) 100vw, 38vw" />
      </figure>
      <ol className="solar-layer-list">
        {detail.construction.map((layer, index) => (
          <li key={layer}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{layer}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function SolarCablesCategoryPage() {
  return (
    <>
      <section className="product-detail-hero solar-product-hero">
        <div className="container product-detail-grid">
          <div>
            <Link className="back-link" href="/products">Back to all products</Link>
            <span className="eyebrow light">Supporting product category</span>
            <h1>Solar Cables</h1>
            <p>Huanyu Cable supplies H1Z2Z2-K and PV1-F solar DC cable for photovoltaic module, string, combiner box and inverter connections.</p>
            <p>Available product constructions include flexible tinned copper conductors, cross-linked insulation and sheath materials, and designs for long-term outdoor photovoltaic service.</p>
            <div className="hero-actions">
              <Link className="button" href="#available-solar-cables">View Available Types</Link>
              <Link className="button button-ghost" href="#inquiry">Request a Quote</Link>
            </div>
          </div>
          <div className="product-detail-image">
            <Image src="/images/products/solar-cables/pv1-f-solar-dc-cable.webp" alt="Red and black single-core solar DC cables with tinned copper conductors" width={1400} height={1050} sizes="(max-width: 980px) 100vw, 45vw" priority />
          </div>
        </div>
      </section>

      <section className="section" id="available-solar-cables">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Solar DC cable range</span><h2>Available Solar Cable Types</h2></div>
            <p>H1Z2Z2-K is the primary option for projects following EN 50618. PV1-F is available where that designation is specifically requested.</p>
          </div>
          <div className="product-family-grid solar-product-family-grid">
            {solarProducts.map((product) => (
              <article className="product-family-card" key={product.title}>
                <div className="product-family-image"><Image src={product.image} alt={product.imageAlt} width={1400} height={1050} sizes="(max-width: 980px) 100vw, 50vw" /></div>
                <div className="product-family-body">
                  <span className="eyebrow">Solar cable</span>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <div className="tag-row product-family-tags">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <Link className="text-link" href={product.href}>View product details <span>-&gt;</span></Link>
                </div>
              </article>
            ))}
          </div>
          <div className="review-note">Looking for LV or MV cables for solar-related power distribution? Explore our <Link href="/products/low-voltage-armoured-power-cables">low-voltage</Link>, <Link href="/products/medium-voltage-xlpe-power-cables">medium-voltage</Link> and <Link href="/products/control-instrumentation-cables">control cable</Link> ranges.</div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">PV system connection</span><h2>Where Solar DC Cables Are Used</h2></div>
            <p>Solar DC cables carry power between photovoltaic modules and the inverter through the string and DC collection circuit.</p>
          </div>
          <div className="solar-flow-grid">
            {connectionSteps.map(([number, title, description]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Cable design</span><h2>Construction for Outdoor PV Service</h2></div>
          </div>
          <div className="solar-card-grid solar-service-grid">
            {serviceCards.map(([title, description], index) => (
              <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Product selection</span><h2>Choose the Cable Designation</h2></div>
            <p>Select the cable designation according to the project specification, market practice and required compliance documents.</p>
          </div>
          <div className="solar-comparison-wrap">
            <table className="solar-comparison-table">
              <thead><tr><th scope="col">Selection item</th><th scope="col">H1Z2Z2-K</th><th scope="col">PV1-F</th></tr></thead>
              <tbody>
                {selectionRows.map(([item, h1z2z2k, pv1f]) => <tr key={item}><th scope="row">{item}</th><td>{h1z2z2k}</td><td>{pv1f}</td></tr>)}
              </tbody>
            </table>
          </div>
          <div className="solar-guidance"><Link href="/products/h1z2z2-k-solar-dc-cable">For new projects following EN 50618, review H1Z2Z2-K Solar DC Cable. <span>-&gt;</span></Link></div>
        </div>
      </section>

      <SolarCatalogCta />

      <section className="section quote-section" id="inquiry">
        <div className="container quote-grid">
          <div><span className="eyebrow light">Solar cable enquiry</span><h2>Request a Solar Cable Quote</h2><p>Send the cable designation, conductor size, quantity, colour, packing and delivery destination for quotation.</p></div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}

export function SolarCableDetailPage({ variant }: { variant: SolarDetailVariant }) {
  const detail = solarDetails[variant];

  return (
    <>
      <section className="product-detail-hero solar-product-hero">
        <div className="container product-detail-grid">
          <div>
            <Link className="back-link" href="/products/solar-cables">Back to Solar Cables</Link>
            <span className="eyebrow light">Solar DC cable</span>
            <h1>{detail.title}</h1>
            <p>{detail.summary}</p>
            <div className="xlpe-hero-badges solar-standard-badge"><span>{detail.reference}</span></div>
            <div className="hero-actions">
              <Link className="button" href="#inquiry">Request a Quote</Link>
              <a className="button button-ghost" href={`mailto:${site.email}`}>Send Specifications</a>
            </div>
          </div>
          <div className="product-detail-image">
            <Image src={detail.image} alt={detail.imageAlt} width={1400} height={1050} sizes="(max-width: 980px) 100vw, 45vw" priority />
          </div>
        </div>
      </section>

      <section className="section solar-ratings-section">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Key ratings</span><h2>Electrical and Temperature Ratings</h2></div>
            <p>Technical values summarized from the applicable reference document for cable selection and enquiry preparation.</p>
          </div>
          <div className="solar-rating-grid">
            {detail.ratings.map(([label, value]) => <article key={label}><span>{label}</span><strong>{value}</strong></article>)}
          </div>
          {detail.ratingNote && <p className="solar-rating-note">{detail.ratingNote}</p>}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Product structure</span><h2>Cable Construction</h2></div>
            <p>{detail.overview}</p>
          </div>
          <CableConstructionVisual detail={detail} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Technical characteristics</span><h2>Performance Overview</h2></div>
            <p>{detail.overviewTitle}</p>
          </div>
          <div className="solar-card-grid solar-performance-grid">
            {detail.performance.map(([title, description], index) => (
              <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container solar-size-application-layout">
          <div>
            <span className="eyebrow">Cable sizes</span>
            <h2>Common Requested Sizes</h2>
            <div className="solar-size-list">{commonSizes.map((size) => <span key={size}>{size}</span>)}</div>
            <p>Other sizes can be reviewed according to the required cable specification.</p>
          </div>
          <div>
            <span className="eyebrow">PV DC connections</span>
            <h2>Typical Application Conditions</h2>
            <div className="solar-application-grid">
              {detail.applications.map(([title, description]) => <article key={title}><strong>{title}</strong><span>{description}</span></article>)}
            </div>
          </div>
        </div>
      </section>

      {detail.guidance && (
        <section className="section solar-guidance-section">
          <div className="container solar-guidance solar-guidance-large">
            <Link href="/products/h1z2z2-k-solar-dc-cable">{detail.guidance} <span>-&gt;</span></Link>
          </div>
        </section>
      )}

      <SolarCatalogCta />

      <section className="section quote-section" id="inquiry">
        <div className="container quote-grid">
          <div><span className="eyebrow light">Solar cable enquiry</span><h2>Request a Solar Cable Quote</h2><p>Send the cable designation, conductor size, quantity, colour, packing and delivery destination for quotation.</p></div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
