export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: "Core" | "Supporting";
  priority: 1 | 2 | 3 | 4;
  tagline: string;
  description: string;
  imagePath: string;
  fallbackImage: string;
  voltage: string;
  standards: string[];
  construction: string[];
  applications: string[];
  featuredModels: string[];
  note?: string;
};

export const products: Product[] = [
  {
    slug: "low-voltage-armoured-power-cables",
    name: "Low Voltage Armoured Power Cables",
    shortName: "LV Armoured Cables",
    category: "Core",
    priority: 1,
    tagline: "Project-ready steel tape and steel wire armoured power cables.",
    description:
      "Our primary product family for underground distribution, industrial facilities and infrastructure projects. Configurations can be developed around conductor, insulation, armour, sheath and project specification requirements.",
    imagePath: "products/lv-armoured-power-cable.webp",
    fallbackImage: "/images/product-lv.svg",
    voltage: "0.6/1 kV and project-specific LV ratings",
    standards: ["IEC 60502-1", "BS 5467 where applicable", "Customer specification"],
    construction: ["Copper conductor", "XLPE or PVC insulation", "STA or SWA armour", "PVC or LSZH outer sheath"],
    applications: ["Underground distribution", "Industrial plants", "Commercial complexes", "Infrastructure projects"],
    featuredModels: ["YJV22", "ZC-YJV22", "ZR-YJV22", "SWA / STA project variants"],
    note: "Available constructions and technical data are confirmed against the applicable standard and project specification before quotation.",
  },
  {
    slug: "medium-voltage-power-cables",
    name: "Medium Voltage Power Cables",
    shortName: "MV Power Cables",
    category: "Core",
    priority: 2,
    tagline: "XLPE insulated MV cables for utility and industrial distribution.",
    description:
      "A focused medium-voltage range built around Huanyu's practical order experience, with emphasis on three-core, large cross-section and armoured project cables.",
    imagePath: "products/mv-power-cable.webp",
    fallbackImage: "/images/product-mv.svg",
    voltage: "Common focus: 8.7/15 kV; other voltage ratings are reviewed against the applicable specification.",
    standards: ["IEC 60502-2", "Project specification", "Factory test requirements"],
    construction: ["Copper conductor", "Conductor screen", "XLPE insulation", "Insulation screen", "Metallic screen", "Armoured or unarmoured sheath"],
    applications: ["Substations", "Industrial power distribution", "Utilities", "Mining and infrastructure"],
    featuredModels: ["8.7/15 kV three-core cable", "Armoured MV cable", "Unarmoured MV cable"],
    note: "Voltage rating, conductor size, screen construction, armour and test requirements are confirmed before quotation.",
  },
  {
    slug: "lszh-fire-safe-cables",
    name: "LSZH & Fire-safe Cables",
    shortName: "LSZH & Fire-safe",
    category: "Core",
    priority: 3,
    tagline: "Low-smoke, flame-retardant and fire-resistant solutions for critical buildings.",
    description:
      "Cable solutions for projects where smoke emission, halogen content, flame spread or circuit integrity are part of the design requirement.",
    imagePath: "products/lszh-fire-safe-cable.webp",
    fallbackImage: "/images/product-fire.svg",
    voltage: "Building wire and power cable voltage classes",
    standards: ["IEC 60332 series", "IEC 60754 series", "IEC 61034 series", "IEC 60331 where applicable"],
    construction: ["Copper conductor", "XLPE or fire-resistant insulation system", "LSZH sheath", "Optional armour"],
    applications: ["Hospitals", "Rail and transit", "Data centres", "Public buildings", "Fire protection systems"],
    featuredModels: ["WDZ-YJY", "WDZB series", "Flame-retardant power cable", "Fire-resistant cable", "Flexible fireproof cable"],
    note: "Fire-performance claims are confirmed against the specified test standard and the corresponding product construction.",
  },
  {
    slug: "low-voltage-unarmoured-power-cables",
    name: "Low Voltage Unarmoured Power Cables",
    shortName: "LV Unarmoured Cables",
    category: "Supporting",
    priority: 4,
    tagline: "General distribution cables for trays, ducts and protected installations.",
    description: "A supporting range for complete project supply and standard low-voltage distribution requirements.",
    imagePath: "products/lv-unarmoured-power-cable.webp",
    fallbackImage: "/images/product-support.svg",
    voltage: "0.6/1 kV and related LV ratings",
    standards: ["IEC 60502-1", "Customer specification"],
    construction: ["Copper conductor", "XLPE or PVC insulation", "PVC or LSZH sheath"],
    applications: ["Cable trays", "Ducts", "Indoor distribution", "Protected outdoor installation"],
    featuredModels: ["YJV", "YJY", "Flame-retardant variants"],
    note: "Availability is confirmed according to the requested construction and project requirements.",
  },
  {
    slug: "building-wires-flexible-cables",
    name: "Building Wires & Flexible Cables",
    shortName: "Building Wires",
    category: "Supporting",
    priority: 4,
    tagline: "Frequently ordered supporting wires for project packages.",
    description: "Single-core building wires and flexible cables supplied as complementary items to power cable packages.",
    imagePath: "products/building-wire.webp",
    fallbackImage: "/images/product-support.svg",
    voltage: "300/500 V and 450/750 V families",
    standards: ["IEC 60227 family where applicable", "Customer specification"],
    construction: ["Copper conductor", "PVC or LSZH insulation", "Solid, stranded or flexible conductor options"],
    applications: ["Building wiring", "Panels", "Internal circuits", "Project accessories"],
    featuredModels: ["BV", "BVR", "RV", "RVV", "LSZH building wire"],
    note: "Availability is confirmed according to the requested construction and project requirements.",
  },
  {
    slug: "control-instrumentation-cables",
    name: "Control & Instrumentation Cables",
    shortName: "Control Cables",
    category: "Supporting",
    priority: 4,
    tagline: "Supporting control cables for industrial project packages.",
    description: "Control, screened and armoured variants can be assessed for project-based supply.",
    imagePath: "products/control-cable.webp",
    fallbackImage: "/images/product-support.svg",
    voltage: "Common control cable voltage classes",
    standards: ["IEC or customer specification", "Project-specific construction"],
    construction: ["Copper conductor", "PVC or XLPE insulation", "Optional screen", "Optional armour", "Outer sheath"],
    applications: ["Industrial control", "Instrumentation", "Panels", "Process facilities"],
    featuredModels: ["KVV", "KVV22", "Screened control cable", "Instrumentation variants"],
    note: "Availability is confirmed according to the requested construction and project requirements.",
  },
  {
    slug: "overhead-rubber-cables",
    name: "Overhead & Rubber Cables",
    shortName: "Other Cable Solutions",
    category: "Supporting",
    priority: 4,
    tagline: "Selected complementary products subject to project review.",
    description: "A controlled supporting category that demonstrates broader capability without diluting the website's three core product positions.",
    imagePath: "products/overhead-rubber-cable.webp",
    fallbackImage: "/images/product-support.svg",
    voltage: "Product-dependent",
    standards: ["Project specification", "Product-dependent standards"],
    construction: ["Product-dependent conductor", "Insulation and sheath selected by application"],
    applications: ["Overhead distribution", "Mobile equipment", "Temporary power", "Industrial applications"],
    featuredModels: ["Overhead insulated cable", "Rubber sheathed cable", "Project variants"],
    note: "Availability is confirmed according to the requested construction and project requirements.",
  },
];

export const coreProducts = products.filter((product) => product.category === "Core");
export const supportingProducts = products.filter((product) => product.category === "Supporting");

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
