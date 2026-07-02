import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Cable Products | Power, LSZH, Building, Control and Overhead Cables" },
  description:
    "Explore Huanyu Cable product families including low voltage power cables, medium voltage XLPE cables, LSZH and fire-safe cables, building wires, control cables and overhead line products.",
  alternates: { canonical: "/products" },
};

const productCategories = [
  {
    id: "low-voltage-power-cables",
    title: "Low Voltage Power Cables",
    label: "Primary category",
    image: "/images/products/low-voltage-xlpe/yjv22-yjv23-hero.png",
    imageAlt: "Low-voltage XLPE and armoured power cable product family",
    description: "Low-voltage XLPE insulated, armoured and project-dependent PVC power cable options for distribution systems.",
    href: "/products/low-voltage-xlpe-power-cables",
    cta: "Explore low-voltage cable families",
    keywords: ["0.6/1 kV", "YJV / YJY / YJLV", "YJV22 / YJV23", "VV / VV22 options"],
    subItems: [
      {
        title: "General LV XLPE Cables",
        models: "YJV / YJY / YJLV / YJLV22",
        href: "/products/low-voltage-xlpe-power-cables",
        note: "YJV / YJY / YJLV / YJLV22 options for common low-voltage distribution projects.",
      },
      {
        title: "Armoured LV Power Cables",
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
    href: "/products/medium-voltage-power-cables",
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
        href: "/products/medium-voltage-power-cables",
        note: "Screened XLPE construction for protected routes, distribution networks and substations",
      },
      {
        title: "STA MV Cable",
        models: "YJV22 / YJV23",
        href: "/products/medium-voltage-power-cables",
        note: "Steel tape armour reviewed against installation requirements",
      },
      {
        title: "SWA MV Cable",
        models: "YJV32 / YJV33",
        href: "/products/medium-voltage-power-cables",
        note: "Steel wire armour reviewed against route and mechanical protection requirements",
      },
    ],
  },
  {
    id: "lszh-fire-safe-power-cables",
    title: "LSZH & Fire-safe Cables",
    label: "Primary category",
    image: "/images/products/lszh-fire-safe/lszh-fire-safe-products-card.png",
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
    id: "building-wires-flexible-cables",
    title: "Building Wires & Flexible Cables",
    label: "Supporting category",
    image: "/images/products/building-wires-flexible/building-wires-bv-bvr-hero.png",
    imageAlt: "BV and BVR copper PVC building wire product category",
    description: "PVC insulated building wires and flexible copper conductor cables for residential wiring and interior distribution.",
    href: "/products/building-wires-flexible-cables",
    cta: "View building wire page",
    keywords: ["BV", "BVR", "PVC insulation", "Copper conductor"],
    subItems: [
      {
        title: "Copper Conductor PVC Insulated Wire",
        models: "BV",
        href: "/products/building-wires-flexible-cables",
        note: "Fixed building wiring for lighting, socket and interior distribution circuits",
      },
      {
        title: "Copper Conductor PVC Insulated Flexible Wire",
        models: "BVR",
        href: "/products/building-wires-flexible-cables",
        note: "Flexible stranded copper wire for distribution boards and easier routing",
      },
      {
        title: "Other Flexible Wire Options",
        models: "RV / RVV / RVVB",
        href: "/products/building-wires-flexible-cables",
        note: "Project-dependent flexible wire options discussed according to requirements",
      },
    ],
  },
  {
    id: "control-instrumentation-cables",
    title: "Control & Instrumentation Cables",
    label: "Supporting category",
    image: "/images/products/control-instrumentation/control-instrumentation-cable-hero.png",
    imageAlt: "Multicore control and instrumentation cable close-up",
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
              <h2>Primary and Supporting Product Categories</h2>
            </div>
            <p>Each category shows its representative product families or models so buyers can move from a high-level category to the relevant detail page.</p>
          </div>

          <div className="product-family-grid product-category-grid">
            {productCategories.map((category, index) => (
              <article className="product-family-card product-category-card" id={category.id} key={category.title}>
                <div className="product-family-image">
                  <Image src={category.image} alt={category.imageAlt} width={760} height={520} sizes="(max-width: 980px) 100vw, 33vw" />
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
                  <div className="model-link-list">
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
                  <Link className="text-link" href={category.href}>
                    {category.cta} <span>-&gt;</span>
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
