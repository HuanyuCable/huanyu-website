import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import styles from "./products.module.css";

export const metadata = createPageMetadata({
  title: "Cable Products & Project Solutions | Huanyu Cable",
  description:
    "Explore HUANYU CABLE product families for low- and medium-voltage power distribution, building wiring, renewable energy, industrial control, communication & ELV and selected special cable projects.",
  path: "/products",
  image: "/images/site/heroes/products-hero-copper-production.webp",
  imageAlt: "Huanyu Cable manufacturing facility with copper conductor production",
});

type ProductEntry = {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  cue: string;
  copy?: string;
  fit?: "cover" | "contain";
  position: string;
};

const powerProducts: ProductEntry[] = [
  {
    title: "Low Voltage Armoured Power Cables",
    href: "/products/low-voltage-armoured-power-cables",
    image: "/images/products/products-main-v3/01_low_voltage_armoured_power_cables_APPROVED.png",
    imageAlt: "Low-voltage armoured power cable product view",
    cue: "STA / SWA construction options",
    fit: "contain",
    position: "50% 43%",
  },
  {
    title: "Low Voltage XLPE Power Cables",
    href: "/products/low-voltage-xlpe-power-cables",
    image: "/images/products/products-main-v3/02_low_voltage_xlpe_power_cables_APPROVED.png",
    imageAlt: "Low-voltage XLPE power cable family",
    cue: "0.6/1 kV · XLPE insulated",
    fit: "contain",
    position: "50% 42%",
  },
  {
    title: "Medium Voltage XLPE Power Cables",
    href: "/products/medium-voltage-xlpe-power-cables",
    image: "/images/products/products-main-v3/03_medium_voltage_xlpe_power_cables_APPROVED.png",
    imageAlt: "Medium-voltage XLPE power cable",
    cue: "3.6/6 kV to 26/35 kV project range",
    fit: "contain",
    position: "50% 42%",
  },
  {
    title: "LSZH & Fire-safe Cables",
    href: "/products/lszh-fire-safe-cables",
    image: "/images/products/products-main-v3/04_lszh_fire_safe_cables_APPROVED.png",
    imageAlt: "LSZH and fire-safe cable product options",
    cue: "LSZH, flame-retardant and fire-resistant options by project specification.",
    fit: "contain",
    position: "50% 50%",
  },
  {
    title: "Overhead Line Products",
    href: "/products/overhead-insulated-cables",
    image: "/images/products/products-main-v3/05_overhead_line_products_APPROVED.png",
    imageAlt: "Overhead line conductor and hardware installation",
    cue: "Insulated cables and bare conductors",
    fit: "cover",
    position: "54% 50%",
  },
];

const buildingProducts: ProductEntry[] = [
  {
    title: "Building Wires & House Wiring",
    href: "/products/building-wires-flexible-cables",
    image: "/images/products/products-main-v3/06_building_wires_house_wiring_hub_APPROVED.png",
    imageAlt: "Residential building application",
    cue: "Fixed wiring · Panel connections · Sheathed options where required",
    copy: "PVC insulated building-wire families for fixed wiring, distribution boards and panel connections, with sheathed options where required.",
    position: "50% 54%",
  },
  {
    title: "Single-Core PVC Building Wire (BV)",
    href: "/products/single-core-pvc-building-wire",
    image: "/images/products/products-main-v3/07_bv_single_core_pvc_building_wire_APPROVED.png",
    imageAlt: "Huanyu BV rigid copper single-core PVC insulated building wire",
    cue: "Rigid-conductor building wire",
    copy: "Rigid-conductor PVC-insulated building wire for project review.",
    position: "50% 48%",
  },
  {
    title: "Flexible PVC Building Wire (BVR)",
    href: "/products/flexible-pvc-building-wire",
    image: "/images/products/products-main-v3/08_bvr_flexible_pvc_building_wire_APPROVED.png",
    imageAlt: "Huanyu BVR flexible stranded PVC insulated building wire",
    cue: "Flexible stranded · Fixed / panel wiring",
    copy: "Flexible stranded building wire for fixed and panel wiring.",
    position: "50% 48%",
  },
];

const renewableProducts: ProductEntry[] = [
  {
    title: "Solar Cables",
    href: "/products/solar-cables",
    image: "/images/products/products-main-v3/09_solar_cables_APPROVED.png",
    imageAlt: "Solar photovoltaic installation",
    cue: "PV1-F / H1Z2Z2-K solar DC references",
    copy: "Solar DC cable families for photovoltaic project connections.",
    position: "52% 50%",
  },
  {
    title: "Energy Storage Cables",
    href: "/products/energy-storage-cables",
    image: "/images/products/products-main-v3/10_energy_storage_cables_APPROVED.png",
    imageAlt: "Energy storage system installation",
    cue: "ESS / BESS connection requirements",
    copy: "Project-oriented cable solutions for energy storage system requirements.",
    position: "69% 54%",
  },
  {
    title: "EV Charging Cables",
    href: "/products/ev-charging-cables",
    image: "/images/products/products-main-v3/11_ev_charging_cables_APPROVED.png",
    imageAlt: "EV charging equipment connected to a vehicle",
    cue: "EV charging connections · Infrastructure projects",
    copy: "For EV charging connections and charging-infrastructure projects.",
    position: "58% 50%",
  },
];

const featureProducts = [
  {
    number: "04",
    eyebrow: "Industrial Control & Automation",
    title: "Control & Instrumentation Cables",
    href: "/products/control-instrumentation-cables",
    image: "/images/products/products-main-v3/12_control_instrumentation_cables_APPROVED.png",
    imageAlt: "Representative screened multi-core control cable",
    copy: "Cables for control circuits, screened control, RS485 data transmission and motion / automation requirements.",
    cue: "Control · Screened Control · RS485 · Motion / Automation",
    position: "64% 50%",
  },
  {
    number: "05",
    eyebrow: "Communication & ELV",
    title: "Communication & ELV Cables",
    href: "/products/communication-elv-cables",
    image: "/images/products/products-main-v3/13_communication_elv_cables_APPROVED.png",
    imageAlt: "Representative blue communication cable with twisted pairs",
    copy: "Project cable families for network & data, CCTV & RF, fire alarm, audio & PA and other ELV systems.",
    cue: "Network & Data · CCTV & RF · Fire Alarm · Audio & PA",
    position: "50% 50%",
  },
];

function ProductCard({ product, emphasis = false }: { product: ProductEntry; emphasis?: boolean }) {
  return (
    <Link className={`${styles.productCard}${emphasis ? ` ${styles.productCardEmphasis}` : ""}`} href={product.href}>
      <span className={styles.cardMedia}>
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes={emphasis ? "(max-width: 720px) 88px, (max-width: 1100px) 45vw, 38vw" : "(max-width: 720px) 88px, (max-width: 1100px) 31vw, 20vw"}
          className={product.fit === "contain" ? styles.imageContain : styles.imageCover}
          style={{ objectPosition: product.position }}
        />
      </span>
      <span className={styles.cardBody}>
        <strong>{product.title}</strong>
        {product.copy && <span className={styles.cardCopy}>{product.copy}</span>}
        <span className={styles.cardCue}>{product.cue}</span>
      </span>
      <span className={styles.cardArrow} aria-hidden="true">→</span>
    </Link>
  );
}

export default function ProductsPage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="products-title">
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <span className={styles.heroEyebrow}>Products</span>
            <h1 id="products-title">Cable Products for Power, Industry &amp; Infrastructure</h1>
            <p>HUANYU CABLE supplies low- and medium-voltage power cables and supports project requirements across building wiring, renewable energy, industrial control, communication &amp; ELV, and selected special cable applications.</p>
          </div>
        </div>
        <div className={styles.heroImageMobile}>
          <Image
            src="/images/products/products-main-v3/products_hero_cable_reel_worker_HUANYU_MOBILE.webp"
            alt="Cable manufacturing scene with a large cable reel and Huanyu Cable worker"
            fill
            sizes="(max-width: 720px) 100vw, 1px"
            className={styles.heroMobileImage}
          />
        </div>
      </section>

      <section id="power-infrastructure" className={`${styles.section} ${styles.powerSection}`} aria-labelledby="power-products-title">
        <div className="container">
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionEyebrow}>01 / Power &amp; Infrastructure</span>
              <h2 id="power-products-title">Power &amp; Infrastructure Cables</h2>
            </div>
            <p>Cable solutions for power distribution, industrial facilities and infrastructure projects.</p>
          </div>
          <div className={styles.powerGrid}>
            {powerProducts.map((product) => <ProductCard key={product.href} product={product} />)}
          </div>
        </div>
      </section>

      <section id="building-construction" className={`${styles.section} ${styles.buildingSection}`} aria-labelledby="building-products-title">
        <div className="container">
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionEyebrow}>02 / Building &amp; Construction</span>
              <h2 id="building-products-title">Building &amp; House Wiring</h2>
            </div>
            <p>PVC-insulated building-wire families for residential and commercial building projects.</p>
          </div>
          <div className={styles.buildingGrid}>
            {buildingProducts.map((product, index) => <ProductCard key={product.href} product={product} emphasis={index === 0} />)}
          </div>
        </div>
      </section>

      <section id="renewable-energy" className={`${styles.section} ${styles.renewableSection}`} aria-labelledby="renewable-products-title">
        <div className="container">
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionEyebrow}>03 / Renewable Energy</span>
              <h2 id="renewable-products-title">Renewable Energy Cables</h2>
            </div>
            <p>Cable solutions for solar power, energy storage systems and electric-vehicle charging projects.</p>
          </div>
          <div className={styles.renewableGrid}>
            {renewableProducts.map((product) => <ProductCard key={product.href} product={product} />)}
          </div>
        </div>
      </section>

      <section className={styles.featureSection} aria-label="Industrial control and communication cable families">
        <div className={`container ${styles.featureGrid}`}>
          {featureProducts.map((product) => (
            <article id={product.number === "04" ? "industrial-control-automation" : "communication-elv"} className={styles.featureCard} key={product.href}>
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 720px) calc(100vw - 40px), (max-width: 1100px) 50vw, 620px"
                className={styles.featureImage}
                style={{ objectPosition: product.position }}
              />
              <div className={styles.featureShade} />
              <div className={styles.featureContent}>
                <span>{product.number} / {product.eyebrow}</span>
                <h2>{product.title}</h2>
                <p>{product.copy}</p>
                <small>{product.cue}</small>
                <Link href={product.href}>View details <span aria-hidden="true">→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="special-cable-solutions" className={styles.rubberSection} aria-labelledby="rubber-products-title">
        <div className="container">
          <article className={styles.rubberCard}>
            <Image
              src="/images/products/products-main-v3/14_rubber_sheathed_flexible_cables_APPROVED.png"
              alt="Representative black rubber-sheathed flexible multicore cable"
              fill
              sizes="(max-width: 720px) calc(100vw - 40px), 1240px"
              className={styles.featureImage}
              style={{ objectPosition: "60% 50%" }}
            />
            <div className={styles.rubberShade} />
            <div className={styles.rubberContent}>
              <span>06 / Special Cable Solutions</span>
              <h2 id="rubber-products-title">Rubber-Sheathed Flexible Cables</h2>
              <p>Rubber- or elastomer-sheathed flexible cord and cable families for portable, movable, construction and industrial equipment requirements.</p>
              <small>60245 IEC 53 · 60245 IEC 57 · 60245 IEC 66</small>
              <Link href="/products/rubber-sheathed-flexible-cables">View details <span aria-hidden="true">→</span></Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
