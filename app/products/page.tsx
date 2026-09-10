import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Cable Products | Power, Solar, LSZH, Control and Overhead Cables",
  description:
    "Explore Huanyu Cable product families including low voltage and medium voltage power cables, solar cables, LSZH and fire-safe cables, building wires, control cables and overhead line products.",
  path: "/products",
  image: "/images/site/heroes/products-hero-copper-production.webp",
  imageAlt: "Huanyu Cable product portfolio",
});

const productCategories = [
  {
    id: "low-voltage-power-cables",
    title: "Low Voltage Power Cables",
    label: "Primary category",
    image: "/images/products/final-refined/products-low-voltage-category-card.webp",
    imageAlt: "Low-voltage XLPE and armoured power cable product family",
    description: "Low-voltage armoured power cables and low-voltage XLPE cable families for distribution systems.",
    href: "/products/low-voltage-armoured-power-cables",
    cta: "View low-voltage armoured cable page",
    keywords: ["0.6/1 kV", "YJV / YJY / YJLV", "YJV22 / YJV23", "VV / VV22 options"],
    subItems: [
      {
        title: "Low Voltage XLPE Power Cables",
        models: "YJV / YJY / YJLV / YJLV22",
        href: "/products/low-voltage-xlpe-power-cables",
        note: "YJV / YJY / YJLV / YJLV22 options for common low-voltage distribution projects.",
      },
      {
        title: "Low Voltage Armoured Power Cables",
        models: "YJV22 / YJV23 / YJV32 / YJV33",
        href: "/products/low-voltage-armoured-power-cables",
        note: "YJV22 / YJV23 / YJV32 / YJV33 options with steel tape or steel wire armour.",
      },
      {
        title: "PVC Insulated Power Cable Options",
        models: "VV / VV22",
        note: "Project-dependent options reviewed when PVC insulated power cable construction is requested",
      },
    ],
  },
  {
    id: "medium-voltage-power-cables",
    title: "Medium Voltage Power Cables",
    label: "Primary category",
    image: "/images/products/medium-voltage-xlpe/mv-xlpe-hero.png",
    imageAlt: "Medium voltage copper tape screened XLPE power cable",
    description: "XLPE insulated MV cables with unarmoured, STA and SWA options reviewed for medium-voltage distribution projects.",
    href: "/products/medium-voltage-xlpe-power-cables",
    cta: "View medium-voltage cable page",
    keywords: [
      "3.6/6 kV to 35 kV",
      "YJV / YJY",
      "YJV22 STA",
      "YJV32 SWA",
    ],
    subItems: [
      {
        title: "Unarmoured MV Cable",
        models: "YJV / YJY",
        href: "/products/medium-voltage-xlpe-power-cables",
        note: "Screened XLPE construction for protected routes, distribution networks and substations",
      },
      {
        title: "STA MV Cable",
        models: "YJV22 / YJV23",
        href: "/products/medium-voltage-xlpe-power-cables",
        note: "Steel tape armour reviewed against installation requirements",
      },
      {
        title: "SWA MV Cable",
        models: "YJV32 / YJV33",
        href: "/products/medium-voltage-xlpe-power-cables",
        note: "Steel wire armour reviewed against route and mechanical protection requirements",
      },
    ],
  },
  {
    id: "lszh-fire-safe-power-cables",
    title: "LSZH & Fire-safe Cables",
    label: "Primary category",
    image: "/images/products/final-refined/products-lszh-category-card.webp",
    imageAlt: "LSZH and fire-safe cable product options",
    description: "Low-smoke, halogen-free, flame-retardant and fire-resistant cable options reviewed with the required base cable structure.",
    href: "/products/lszh-fire-safe-cables",
    cta: "View LSZH and fire-safe page",
    keywords: ["LSZH / LSOH", "Flame-retardant", "Fire-resistant", "Specification review"],
    subItems: [
      {
        title: "LSZH / LSOH Cable Options",
        models: "WDZ / LSOH references",
        href: "/products/lszh-fire-safe-cables",
        note: "Low-smoke, halogen-free material requirements reviewed by cable family",
      },
      {
        title: "Flame-retardant Cable Options",
        models: "ZR / ZC references",
        href: "/products/lszh-fire-safe-cables",
        note: "Flame spread requirements reviewed against project test scope",
      },
      {
        title: "Fire-resistant Cable Options",
        models: "NH / WDZN references",
        href: "/products/lszh-fire-safe-cables",
        note: "Circuit integrity requirements reviewed where specified and tested",
      },
    ],
  },
  {
    id: "building-wires-flexible-cables",
    title: "Building Wires & House Wiring Cables",
    label: "Featured category",
    image: "/images/products/building-wires/bw-hub-hero.png",
    imageAlt: "Huanyu BV, BVR and BVVB PVC insulated building wire product family",
    description: "PVC insulated building wires for residential, commercial and general fixed wiring, covering rigid single-core, flexible stranded and flat sheathed constructions.",
    href: "/products/building-wires-flexible-cables",
    cta: "Explore Building Wires",
    keywords: ["BV", "BVR", "BVVB", "Copper conductor"],
    subItems: [
      {
        title: "BV — rigid single-core PVC insulated building wire",
        models: "BV",
        href: "/products/single-core-pvc-building-wire",
        note: "View BV Details →",
      },
      {
        title: "BVR — flexible stranded PVC insulated building wire",
        models: "BVR",
        href: "/products/flexible-pvc-building-wire",
        note: "View BVR Details →",
      },
      {
        title: "BVVB — flat PVC insulated & sheathed building cable",
        models: "BVVB",
        href: "/products/building-wires-flexible-cables#bvvb",
        note: "View BVVB Sizes →",
      },
    ],
  },
  {
    id: "overhead-line-products",
    title: "Overhead Line Products",
    label: "Supporting category",
    image: "/images/products/overhead-acsr/overhead-insulated-cables-hero.png",
    imageAlt: "Overhead insulated cable and line product category",
    description: "Overhead insulated cables and bare overhead conductors for distribution and line construction projects.",
    href: "/products/overhead-insulated-cables",
    cta: "Explore overhead line products",
    keywords: ["JKYJ / JKLYJ", "LGJ / ACSR", "Insulated cable", "Bare conductor"],
    subItems: [
      {
        title: "Overhead Insulated Cables",
        models: "JKYJ / JKLYJ",
        href: "/products/overhead-insulated-cables",
        note: "Copper or aluminium conductor XLPE insulated overhead cables",
      },
      {
        title: "Bare Overhead Conductors",
        models: "LGJ / ACSR",
        href: "/products/acsr-bare-overhead-conductors",
        note: "Steel reinforced aluminium bare conductors for overhead line projects",
      },
    ],
  },
  {
    id: "control-instrumentation-cables",
    title: "Control & Instrumentation Cables",
    label: "Supporting category",
    image: "/images/products/control-instrumentation/control-cable-shielded-kyjvp.png",
    imageAlt: "Representative control and instrumentation cable product image",
    description: "Control, screened, flexible and armoured cable options for control circuits, panels and industrial project packages.",
    href: "/products/control-instrumentation-cables",
    cta: "View control cable page",
    keywords: ["KVV", "KVVP", "KVVR", "KVVRP", "KVV22"],
    subItems: [
      {
        title: "PVC Insulated Control Cable",
        models: "KVV",
        href: "/products/control-instrumentation-cables",
        note: "Fixed control cable routes for panels, equipment and industrial circuits",
      },
      {
        title: "Screened Control Cable",
        models: "KVVP / KVVRP",
        href: "/products/control-instrumentation-cables",
        note: "Screened variants reviewed when the project specifies signal route protection",
      },
      {
        title: "Armoured Control Cable",
        models: "KVV22",
        href: "/products/control-instrumentation-cables",
        note: "Steel tape armoured control cable options for fixed routes requiring protection",
      },
    ],
  },
  {
    id: "solar-cables",
    title: "Solar Cables",
    label: "Supporting category",
    image: "/images/products/solar-cables/pv1-f-solar-dc-cable.webp",
    imageAlt: "PV1-F red single-core solar DC cable product view",
    description: "Selected PV cable solutions for solar DC connections, including PV1-F and H1Z2Z2-K types for photovoltaic module, combiner box and inverter wiring.",
    href: "/products/solar-cables",
    cta: "View Solar Cables",
    keywords: ["PV1-F", "H1Z2Z2-K", "Solar DC wiring", "Tinned Copper"],
    subItems: [
      {
        title: "PV1-F Solar DC Cable",
        models: "PV1-F",
        href: "/products/pv1-f-solar-dc-cable",
        note: "Flexible solar DC cable for photovoltaic panel, string and inverter connections.",
      },
      {
        title: "H1Z2Z2-K Solar DC Cable",
        models: "H1Z2Z2-K",
        href: "/products/h1z2z2-k-solar-dc-cable",
        note: "Cross-linked halogen-free solar DC cable for long-term outdoor photovoltaic installations.",
      },
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero page-hero-products">
        <div className="container">
          <span className="eyebrow light">Products</span>
          <h1>A focused product portfolio for project buyers</h1>
          <p>Our export portfolio is organized around clear product categories, with detailed model pages available where technical review is needed.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Product category directory</span>
              <h2>Primary, Featured and Supporting Product Categories</h2>
            </div>
            <p>Each category shows its representative product families or models so buyers can move from a high-level category to the relevant detail page. Where Chinese model references are shown, they are used for construction comparison. Final cable designation follows the applicable project specification.</p>
          </div>

          <div className="product-family-grid product-category-grid">
            {productCategories.map((category, index) => (
              <article className={`product-family-card product-category-card${category.label === "Featured category" ? " product-category-card-featured" : ""}`} id={category.id} key={category.title}>
                <div className={`product-family-image${category.image.startsWith("/images/products/final-refined/") ? " product-family-image-refined" : ""}`}>
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    width={category.image.startsWith("/images/products/final-refined/") ? 1600 : 760}
                    height={category.image.startsWith("/images/products/final-refined/") ? 1200 : 520}
                    sizes="(max-width: 980px) 100vw, 33vw"
                  />
                  <span className="priority-badge">0{index + 1}</span>
                </div>
                <div className="product-family-body">
                  <span className="eyebrow">{category.label}</span>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <div className="tag-row product-family-tags">
                    {category.keywords.map((keyword) => (
                      <span key={keyword}>{keyword}</span>
                    ))}
                  </div>
                  <div className={`model-link-list${category.label === "Featured category" ? " model-link-list-featured" : ""}`}>
                    {category.subItems.map((item) =>
                      item.href ? (
                        <Link href={item.href} key={item.title} className="model-link-card">
                          <strong>{item.title}</strong>
                          <em>{item.models}</em>
                          <span>{item.note}</span>
                        </Link>
                      ) : (
                        <div className="model-link-card no-link" key={item.title}>
                          <strong>{item.title}</strong>
                          <em>{item.models}</em>
                          <span>{item.note}</span>
                        </div>
                      ),
                    )}
                  </div>
                  <Link className={category.label === "Featured category" ? "button button-small product-featured-cta" : "text-link"} href={category.href}>
                    {category.cta} <span>{category.label === "Featured category" ? "→" : "->"}</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
