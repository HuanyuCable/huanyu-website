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
  overviewTitle: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  features: string[];
  applications: string[];
  technicalData: [string, string][];
};

const solarDetails: Record<SolarDetailVariant, SolarDetail> = {
  "solar-pv1-f": {
    title: "PV1-F Solar DC Cable",
    summary:
      "PV1-F solar DC cable is designed for photovoltaic panel connections, string wiring, combiner boxes and inverter interconnections. Its flexible tinned copper conductor supports convenient installation and reliable DC power transmission in rooftop, commercial and ground-mounted photovoltaic systems.",
    overviewTitle: "Flexible Solar DC Cable for PV Connections",
    paragraphs: [
      "PV1-F is a flexible single-core cable used for DC wiring in photovoltaic installations. Its fine-stranded tinned copper conductor provides good flexibility and corrosion resistance for solar module, combiner box and inverter connections.",
      "The cable typically uses cross-linked insulation and sheath compounds selected for outdoor applications. The construction is designed to support reliable performance under sunlight, weather exposure and temperature variation during normal photovoltaic operation.",
      "Available conductor sizes, colours and packing options can be selected according to installation and order requirements.",
    ],
    image: "/images/products/solar-cables/pv1-f-solar-dc-cable-final.webp",
    imageAlt: "PV1-F red single-core solar DC cable with tinned copper conductor",
    features: [
      "Flexible single-core solar DC cable",
      "Fine-stranded tinned copper conductor",
      "Cross-linked insulation and sheath",
      "Suitable for solar module and inverter connections",
      "Good flexibility for installation and routing",
      "Designed for outdoor photovoltaic environments",
      "Available in red and black",
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
      ["Application", "DC wiring in photovoltaic systems"],
      ["Colour", "Red / Black"],
      ["Packing", "Coil or drum"],
    ],
  },
  "solar-h1z2z2-k": {
    title: "H1Z2Z2-K Solar DC Cable",
    summary:
      "H1Z2Z2-K is a flexible single-core solar DC cable designed for photovoltaic module strings, combiner boxes, inverter connections and other fixed DC wiring in modern PV systems.",
    overviewTitle: "H1Z2Z2-K Cable for Photovoltaic DC Systems",
    paragraphs: [
      "H1Z2Z2-K solar cable uses a Class 5 flexible tinned copper conductor with cross-linked halogen-free insulation and sheath materials. The construction is designed for reliable DC power transmission and long-term use in outdoor photovoltaic environments.",
      "The cable is suitable for installation along solar module frames, cable trays, conduits and inverter connection routes. Its material system provides resistance to UV radiation, ozone, weather exposure and temperature variation.",
      "H1Z2Z2-K is the cable designation specified by EN 50618 for photovoltaic applications rated up to 1.5 kV DC.",
    ],
    image: "/images/products/solar-cables/h1z2z2-k-solar-dc-cable-final.webp",
    imageAlt: "H1Z2Z2-K black solar DC cable with halogen-free insulation and tinned copper conductor",
    features: [
      "Flexible single-core cable for PV DC systems",
      "Class 5 tinned copper conductor",
      "Cross-linked halogen-free insulation and sheath",
      "Rated up to 1.5 kV DC",
      "Suitable for long-term outdoor installation",
      "Resistance to UV, ozone and weather exposure",
      "Suitable for module, combiner box and inverter wiring",
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
      ["Conductor", "Class 5 flexible tinned copper"],
      ["Core", "1 core"],
      ["Insulation", "Cross-linked halogen-free compound"],
      ["Sheath", "Cross-linked halogen-free compound"],
      ["Application", "DC side of photovoltaic systems"],
      ["Reference Standard", "EN 50618"],
      ["Rated Voltage", "1.5 kV DC"],
      ["Colour", "Black / Red"],
      ["Packing", "Coil or drum"],
    ],
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
              <Link className="button button-ghost" href="#inquiry">Request a Quote</Link>
            </div>
          </div>
          <div>
            <div className="product-detail-image">
              <Image src="/images/products/solar-cables/pv1-f-solar-dc-cable.webp" alt="Red and black single-core solar DC cable product view" width={1400} height={1050} sizes="(max-width: 980px) 100vw, 45vw" priority />
            </div>
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
          <div><span className="eyebrow light">Solar cable enquiry</span><h2>Request a Solar Cable Quote</h2><p>Send the required cable type, conductor size, quantity, standard and delivery destination for quotation.</p></div>
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
              <Link className="button" href="#inquiry">Request a Quote</Link>
              <a className="button button-ghost" href={`mailto:${site.email}`}>Send Specifications</a>
            </div>
          </div>
          <div>
            <div className="product-detail-image">
              <Image src={detail.image} alt={detail.imageAlt} width={1400} height={1050} sizes="(max-width: 980px) 100vw, 45vw" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container product-spec-layout">
          <div className="spec-main">
            <span className="eyebrow">Product overview</span>
            <h2>{detail.overviewTitle}</h2>
            {detail.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

            <h2>Typical Features</h2>
            <ul className="detail-list">{detail.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>

            <h2>Typical Technical Data</h2>
            <div className="spec-table">
              {detail.technicalData.map(([label, value]) => <div key={label}><strong>{label}</strong><span>{value}</span></div>)}
            </div>

            <h2>Typical Applications</h2>
            <div className="application-chips">{detail.applications.map((application) => <span key={application}>{application}</span>)}</div>
          </div>
          <aside className="spec-aside">
            <h3>What to Include in Your Enquiry</h3>
            <ol>
              <li>Cable type and conductor size</li>
              <li>Required quantity</li>
              <li>Rated voltage and applicable standard</li>
              <li>Colour and packing requirement</li>
              <li>Delivery destination</li>
            </ol>
            <a className="button full" href="#inquiry">Send Enquiry</a>
          </aside>
        </div>
      </section>

      <section className="section quote-section" id="inquiry">
        <div className="container quote-grid">
          <div><span className="eyebrow light">Solar cable enquiry</span><h2>Request a Solar Cable Quote</h2><p>Send the required cable type, conductor size, quantity, standard and delivery destination for quotation.</p></div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
