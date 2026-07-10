import Image from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { site } from "@/lib/site";

const solarProducts = [
  {
    title: "PV1-F Solar DC Cable",
    description: "Flexible solar DC cable for photovoltaic panel, string and inverter connections.",
    href: "/products/pv1-f-solar-dc-cable",
    image: "/images/products/solar-cables/pv1-f-solar-dc-cable.webp",
    imageAlt: "PV1-F red single-core solar DC cable with tinned copper conductor",
    tags: ["PV1-F", "Flexible conductor", "PV DC wiring"],
  },
  {
    title: "H1Z2Z2-K Solar DC Cable",
    description: "Cross-linked halogen-free solar DC cable for long-term outdoor photovoltaic installations.",
    href: "/products/h1z2z2-k-solar-dc-cable",
    image: "/images/products/solar-cables/h1z2z2-k-solar-dc-cable.webp",
    imageAlt: "H1Z2Z2-K black solar DC cable with halogen-free insulation and tinned copper conductor",
    tags: ["H1Z2Z2-K", "Halogen-free", "Outdoor PV use"],
  },
];

type SolarDetailVariant = "solar-pv1-f" | "solar-h1z2z2-k";

type SolarDetail = {
  title: string;
  summary: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  features: string[];
  applications: string[];
  technicalData: [string, string][];
  note: string;
};

const solarDetails: Record<SolarDetailVariant, SolarDetail> = {
  "solar-pv1-f": {
    title: "PV1-F Solar DC Cable",
    summary:
      "PV1-F solar DC cable is supplied for photovoltaic panel connections, string wiring, combiner boxes and inverter interconnections. It is suitable for fixed DC applications requiring reliable conductivity, outdoor durability and stable long-term service performance.",
    paragraphs: [
      "This cable type is commonly used in rooftop photovoltaic systems, distributed solar installations and utility-scale solar farms where cable flexibility, environmental resistance and dependable electrical performance are important.",
      "Typical supplied constructions may include a flexible tinned copper conductor with cross-linked insulation and sheath materials designed to support resistance to UV exposure, weathering, ozone and temperature variation in outdoor PV environments.",
      "Final conductor class, material system, cable size, colour, packing and supporting technical documentation can be confirmed according to the selected project specification.",
    ],
    image: "/images/products/solar-cables/pv1-f-solar-dc-cable.webp",
    imageAlt: "PV1-F red single-core solar DC cable with tinned copper conductor",
    features: [
      "Flexible single-core PV cable",
      "Tinned copper conductor",
      "Suitable for photovoltaic DC wiring",
      "Good flexibility for installation",
      "Resistant to UV exposure and environmental ageing",
      "Suitable for rooftop, commercial and utility PV projects",
      "Available based on confirmed project specification",
    ],
    applications: [
      "Solar panel interconnection",
      "String wiring",
      "Combiner box connection",
      "Inverter DC connection",
      "Fixed outdoor PV installations",
    ],
    technicalData: [
      ["Cable Type", "PV1-F"],
      ["Conductor", "Flexible stranded tinned copper"],
      ["Core", "1 core"],
      ["Insulation", "Cross-linked compound"],
      ["Sheath", "Cross-linked compound"],
      ["Application", "PV DC cabling"],
      ["Reference Standards", "According to requested model / project requirement"],
      ["Rated Voltage", "Typically up to 1.5 kV DC"],
      ["Colour", "Black / Red / custom by request"],
      ["Packing", "Coil / drum by request"],
    ],
    note: "Available based on confirmed project specification.",
  },
  "solar-h1z2z2-k": {
    title: "H1Z2Z2-K Solar DC Cable",
    summary:
      "H1Z2Z2-K solar DC cable is supplied for photovoltaic module strings, combiner box wiring, inverter links and other fixed DC applications in modern solar power systems.",
    paragraphs: [
      "This cable type is commonly selected for projects requiring a flexible stranded conductor, cross-linked insulation and sheath construction, and stable performance in long-term outdoor photovoltaic environments.",
      "Typical supplied constructions are intended to support resistance to UV exposure, weathering, ozone and temperature variation, making them suitable for rooftop systems, commercial arrays and utility-scale PV installations.",
      "Applicable standards, test reports and supporting technical documents can be confirmed according to the selected model and project requirements.",
    ],
    image: "/images/products/solar-cables/h1z2z2-k-solar-dc-cable.webp",
    imageAlt: "H1Z2Z2-K black solar DC cable with halogen-free insulation and tinned copper conductor",
    features: [
      "Single-core cable for PV DC applications",
      "Flexible stranded tinned copper conductor",
      "Cross-linked insulation and sheath",
      "Suitable for long-term outdoor use",
      "Good UV, weather and ozone resistance",
      "Suitable for photovoltaic module, combiner and inverter wiring",
      "Available based on confirmed project specification",
    ],
    applications: [
      "Solar module string connections",
      "Combiner box wiring",
      "Inverter DC input connections",
      "PV farm DC-side cabling",
      "Fixed outdoor photovoltaic installations",
    ],
    technicalData: [
      ["Cable Type", "H1Z2Z2-K"],
      ["Conductor", "Flexible stranded tinned copper"],
      ["Core", "1 core"],
      ["Insulation", "Cross-linked halogen-free compound"],
      ["Sheath", "Cross-linked halogen-free compound"],
      ["Application", "DC side of photovoltaic systems"],
      ["Reference Standards", "EN 50618 / IEC 62930 (subject to supplied model)"],
      ["Rated Voltage", "Typically up to 1.5 kV DC"],
      ["Colour", "Black / Red / custom by request"],
      ["Packing", "Coil / drum by request"],
    ],
    note: "Applicable standards, test reports and supporting technical documents can be confirmed according to the selected model and project requirements.",
  },
};

export function SolarCablesCategoryPage() {
  return (
    <>
      <section className="product-detail-hero solar-product-hero">
        <div className="container product-detail-grid">
          <div>
            <Link className="back-link" href="/products">Back to all products</Link>
            <span className="eyebrow light">Supporting product category</span>
            <h1>Solar Cables</h1>
            <p>Huanyu Cable supplies selected solar cable solutions for photovoltaic DC connections, including PV1-F and H1Z2Z2-K cable types. These cables are commonly used for module strings, combiner boxes, inverter connections and other fixed DC wiring in rooftop, commercial and utility-scale PV installations.</p>
            <p>Available constructions may include flexible tinned copper conductors, cross-linked insulation and sheath compounds, and cable designs intended for long-term outdoor use. Cable size, colour, packing, applicable standards and supporting technical documents can be confirmed according to the selected model and project requirements.</p>
            <div className="hero-actions">
              <Link className="button" href="#available-solar-cables">View Available Types</Link>
              <Link className="button button-ghost" href="#inquiry">Request Technical Review</Link>
            </div>
          </div>
          <div>
            <div className="product-detail-image">
              <Image src="/images/products/solar-cables/pv1-f-solar-dc-cable.webp" alt="Red and black single-core solar DC cable product view" width={1400} height={1050} sizes="(max-width: 980px) 100vw, 45vw" priority />
            </div>
            <p className="product-image-note">Illustrative product view. Final construction is confirmed against the selected model and project specification.</p>
          </div>
        </div>
      </section>

      <section className="section" id="available-solar-cables">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Solar DC cable range</span>
              <h2>Available Solar Cable Types</h2>
            </div>
            <p>Two selected product types for photovoltaic module, combiner box and inverter DC connections.</p>
          </div>
          <div className="product-family-grid">
            {solarProducts.map((product) => (
              <article className="product-family-card" key={product.title}>
                <div className="product-family-image">
                  <Image src={product.image} alt={product.imageAlt} width={1400} height={1050} sizes="(max-width: 980px) 100vw, 50vw" />
                </div>
                <div className="product-family-body">
                  <span className="eyebrow">Solar cable</span>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <div className="tag-row product-family-tags">
                    {product.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <Link className="text-link" href={product.href}>View product details <span>-&gt;</span></Link>
                </div>
              </article>
            ))}
          </div>
          <div className="review-note">
            Looking for LV or MV cables for solar-related power distribution? Explore our <Link href="/products/low-voltage-armoured-power-cables">low-voltage</Link>, <Link href="/products/medium-voltage-power-cables">medium-voltage</Link> and <Link href="/products/control-instrumentation-cables">control cable</Link> ranges.
          </div>
        </div>
      </section>

      <section className="section quote-section" id="inquiry">
        <div className="container quote-grid">
          <div><span className="eyebrow light">Technical review</span><h2>Request a solar cable and quotation review.</h2><p>Share the selected model, cable size, quantity, packing and required project documents for confirmation.</p></div>
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
            <div className="hero-actions">
              <Link className="button" href="#inquiry">Request Technical Review</Link>
              <a className="button button-ghost" href={`mailto:${site.email}`}>Email Specification</a>
            </div>
          </div>
          <div>
            <div className="product-detail-image">
              <Image src={detail.image} alt={detail.imageAlt} width={1400} height={1050} sizes="(max-width: 980px) 100vw, 45vw" priority />
            </div>
            <p className="product-image-note">Illustrative product view. Final construction is confirmed against the selected model and project specification.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container product-spec-layout">
          <div className="spec-main">
            <span className="eyebrow">Product overview</span>
            <h2>Solar DC cable for project-specific supply</h2>
            {detail.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

            <h2>Typical Features</h2>
            <ul className="detail-list">{detail.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>

            <h2>Typical Technical Data</h2>
            <div className="spec-table">
              {detail.technicalData.map(([label, value]) => <div key={label}><strong>{label}</strong><span>{value}</span></div>)}
            </div>

            <h2>Typical Applications</h2>
            <div className="application-chips">{detail.applications.map((application) => <span key={application}>{application}</span>)}</div>
            <div className="review-note">{detail.note}</div>
          </div>
          <aside className="spec-aside">
            <h3>What to send for quotation</h3>
            <ol>
              <li>Selected cable type and applicable project standard</li>
              <li>Conductor size, colour and required quantity</li>
              <li>Voltage rating and installation environment</li>
              <li>Packing, delivery destination and required date</li>
              <li>Required tests and supporting documents</li>
            </ol>
            <a className="button full" href="#inquiry">Send requirements</a>
          </aside>
        </div>
      </section>

      <section className="section quote-section" id="inquiry">
        <div className="container quote-grid">
          <div><span className="eyebrow light">Technical review</span><h2>Request a product and quotation review.</h2><p>Our commercial and technical teams will assess the selected model and project specification before confirming availability.</p></div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
