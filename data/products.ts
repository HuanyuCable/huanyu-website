export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: "Core" | "Supporting";
  priority: 1 | 2 | 3 | 4;
  tagline: string;
  description: string;
  metaTitle?: string;
  metaDescription?: string;
  detailVariant?: "yjv22-yjv23" | "low-voltage-xlpe-family" | "medium-voltage-xlpe" | "lszh-fire-safe" | "overhead-insulated-cables" | "acsr-bare-overhead-conductors" | "building-wires-flexible-cables";
  imagePath: string;
  detailImagePath: string;
  imageAlt: string;
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
    imagePath: "/images/products/low-voltage-xlpe/yjv22-yjv23-hero.png",
    detailImagePath: "/images/products/low-voltage-xlpe/yjv22-yjv23-hero.png",
    imageAlt: "Low-voltage armoured power cable product family",
    fallbackImage: "/images/product-lv.svg",
    voltage: "0.6/1 kV and project-specific LV ratings",
    standards: ["GB/T 12706.1", "IEC 60502-1", "Project-specific specifications reviewed before quotation"],
    construction: ["Copper conductor", "XLPE or PVC insulation", "Project-specific armour reviewed before quotation", "PVC or LSZH outer sheath"],
    applications: ["Underground distribution", "Industrial plants", "Commercial complexes", "Infrastructure projects"],
    featuredModels: ["YJV22", "ZC-YJV22", "ZR-YJV22", "project-specific armoured variants"],
    note: "Available constructions and technical data are confirmed against the applicable standard and project specification before quotation.",
  },
  {
    slug: "medium-voltage-power-cables",
    name: "Medium Voltage Power Cables",
    shortName: "MV Power Cables",
    category: "Core",
    priority: 2,
    tagline: "XLPE insulated medium voltage power cables for distribution networks, substations and industrial projects from 3.6/6 kV up to 35 kV.",
    description:
      "Medium voltage XLPE power cables for distribution networks, substations and industrial projects, including unarmoured, steel tape armoured and steel wire armoured designs reviewed per project.",
    metaTitle: "Medium Voltage Power Cables | 3.6/6 kV to 35 kV MV Cable Manufacturer",
    metaDescription:
      "Huanyu Cable supplies medium voltage XLPE power cables for distribution networks, substations and industrial projects, including unarmoured, STA and SWA designs reviewed per project.",
    detailVariant: "medium-voltage-xlpe",
    imagePath: "/images/products/medium-voltage-xlpe/mv-xlpe-hero.png",
    detailImagePath: "/images/products/medium-voltage-xlpe/mv-xlpe-hero.png",
    imageAlt: "Medium voltage XLPE power cable for distribution projects",
    fallbackImage: "/images/product-mv.svg",
    voltage: "3.6/6 kV to 35 kV classes subject to confirmed project requirements",
    standards: ["Applicable GB/T or IEC-based requirements reviewed per project", "Project-specified testing and documentation scope"],
    construction: ["Copper or aluminum conductor", "Conductor screen", "XLPE insulation", "Insulation screen", "Metallic screen", "Unarmoured, steel tape armoured or steel wire armoured options", "PVC or PE outer sheath"],
    applications: ["Utility distribution networks", "Industrial substations", "Industrial power distribution", "Commercial infrastructure", "Renewable energy grid connection"],
    featuredModels: [
      "YJV / YJY",
      "YJV22 / YJV23 STA",
      "YJV32 / YJV33 SWA",
      "26/35 kV reviewed per project",
    ],
    note: "Voltage class, conductor size, screen design, armour, sheath and testing requirements are confirmed before quotation.",
  },
  {
    slug: "lszh-fire-safe-cables",
    name: "LSZH & Fire-safe Power Cables",
    shortName: "LSZH & Fire-safe",
    category: "Core",
    priority: 3,
    tagline: "Low smoke zero halogen, flame retardant and fire resistant power cables for safer building, infrastructure and industrial power distribution.",
    description:
      "Low smoke zero halogen, flame retardant and fire resistant power cables for commercial buildings, public facilities, industrial distribution and emergency power circuits. Representative models include ZC-YJV, NH-YJV, NH-VV22, WDZ-YJY, WDZB-YJY, WDZN-YJY and WDZBN-YJY.",
    metaTitle: "LSZH & Fire-safe Power Cables | HUANYU CABLE",
    metaDescription:
      "LSZH, flame retardant and fire-resistant cable options for projects requiring low smoke, halogen-free or fire-safe cable performance.",
    detailVariant: "lszh-fire-safe",
    imagePath: "/images/products/lszh-fire-safe/lszh-fire-safe-hero.png",
    detailImagePath: "/images/products/lszh-fire-safe/lszh-fire-safe-hero.png",
    imageAlt: "LSZH and fire-safe power cable product family",
    fallbackImage: "/images/product-fire.svg",
    voltage: "0.6/1 kV",
    standards: ["Project-specified flame retardant, LSZH and fire resistant requirements", "Applicable cable construction standards"],
    construction: ["Copper conductor", "PVC or XLPE insulation", "PVC or LSZH sheath", "Unarmoured or steel tape armoured options"],
    applications: ["Commercial buildings", "Hospitals and public buildings", "Transport infrastructure", "Data centers", "Emergency power circuits"],
    featuredModels: ["ZC-YJV", "NH-YJV", "NH-VV22", "WDZ-YJY", "WDZB-YJY", "WDZN-YJY", "WDZBN-YJY"],
    note: "Safety-performance claims are confirmed against the specified test standard and the corresponding product construction.",
  },
  {
    slug: "overhead-insulated-cables",
    name: "Overhead Insulated Cables",
    shortName: "Overhead Insulated",
    category: "Supporting",
    priority: 4,
    tagline: "JKYJ and JKLYJ XLPE insulated overhead cables for 1 kV and 10 kV urban and rural distribution lines.",
    description:
      "JKYJ and JKLYJ XLPE insulated overhead cables with copper or aluminium conductors for 1 kV and 10 kV overhead distribution lines.",
    metaTitle: "Overhead Line Products | Insulated Overhead Cables | HUANYU CABLE",
    metaDescription:
      "Overhead insulated cable products including JKYJ and JKLYJ options for urban and rural distribution line projects.",
    detailVariant: "overhead-insulated-cables",
    imagePath: "/images/products/overhead-acsr/overhead-insulated-cables-hero.png",
    detailImagePath: "/images/products/overhead-acsr/overhead-insulated-cables-hero.png",
    imageAlt: "JKYJ and JKLYJ overhead insulated cable product family",
    fallbackImage: "/images/product-support.svg",
    voltage: "1 kV and 10 kV",
    standards: ["Applicable GB/T standards", "Project-specified standards"],
    construction: ["Copper conductor for JKYJ", "Aluminium conductor for JKLYJ", "XLPE insulation", "Single-core overhead construction"],
    applications: ["Urban distribution lines", "Rural power networks", "Service connections", "Distribution network renovation"],
    featuredModels: ["JKYJ", "JKLYJ"],
    note: "ABC cable options can be discussed as related project requirements, while JKYJ and JKLYJ remain the primary promoted products on this page.",
  },
  {
    slug: "acsr-bare-overhead-conductors",
    name: "ACSR Bare Overhead Conductors",
    shortName: "ACSR Conductors",
    category: "Supporting",
    priority: 4,
    tagline: "LGJ / ACSR steel reinforced aluminium bare conductors for overhead transmission and distribution line projects.",
    description:
      "LGJ / ACSR aluminium conductor steel reinforced bare conductors for overhead transmission and distribution lines, using a steel core for mechanical strength and aluminium strands for electrical conductivity.",
    metaTitle: "ACSR Bare Overhead Conductors | LGJ Steel Reinforced Aluminium Conductor | HUANYU CABLE",
    metaDescription:
      "LGJ / ACSR aluminium conductor steel reinforced bare conductors for overhead transmission and distribution lines, using a steel core for mechanical strength and aluminium strands for electrical conductivity.",
    detailVariant: "acsr-bare-overhead-conductors",
    imagePath: "/images/products/overhead-acsr/acsr-lgj-hero.png",
    detailImagePath: "/images/products/overhead-acsr/acsr-lgj-hero.png",
    imageAlt: "LGJ ACSR bare overhead conductor product view",
    fallbackImage: "/images/product-support.svg",
    voltage: "Project-specified overhead line conductor sizes",
    standards: ["Applicable bare conductor standards", "Project-specified standards"],
    construction: ["Steel core", "Aluminium strands", "Concentric stranded bare conductor"],
    applications: ["Overhead transmission lines", "Distribution lines", "Long-span line sections", "Rural and grid projects"],
    featuredModels: ["LGJ / ACSR"],
    note: "AAC and AAAC can be discussed as related bare conductor options according to project requirements.",
  },
  {
    slug: "yjv22-yjv23-low-voltage-armoured-power-cables",
    name: "YJV22 / YJV23 Armoured Power Cables",
    shortName: "YJV22 / YJV23 Armoured",
    category: "Supporting",
    priority: 4,
    tagline: "Steel tape armoured XLPE power cables for fixed installation, underground routes and power distribution systems.",
    description:
      "YJV22 and YJV23 are 0.6/1 kV XLPE insulated steel tape armoured power cables for fixed installation and power distribution systems. YJV22 uses a PVC outer sheath, while YJV23 uses a PE outer sheath.",
    metaTitle: "YJV22 / YJV23 Low Voltage Armoured Power Cables | HUANYU CABLE",
    metaDescription:
      "YJV22 and YJV23 are 0.6/1 kV XLPE insulated steel tape armoured power cables for fixed installation and power distribution systems. YJV22 uses a PVC outer sheath, while YJV23 uses a PE outer sheath.",
    detailVariant: "yjv22-yjv23",
    imagePath: "/images/products/low-voltage-xlpe/yjv22-yjv23-hero.png",
    detailImagePath: "/images/products/low-voltage-xlpe/yjv22-yjv23-hero.png",
    imageAlt: "YJV22 and YJV23 low-voltage steel tape armoured XLPE power cables",
    fallbackImage: "/images/product-lv.svg",
    voltage: "0.6/1 kV",
    standards: ["GB/T 12706.1", "IEC 60502-1", "IEC 60228"],
    construction: ["Copper conductor", "XLPE insulation", "Filler / bedding", "PVC inner sheath", "Steel tape armour", "PVC or PE outer sheath"],
    applications: ["Power distribution", "Underground routes", "Cable trench installation", "Industrial infrastructure"],
    featuredModels: ["YJV22", "YJV23"],
    note: "YJV22 uses a PVC outer sheath, while YJV23 uses a PE outer sheath.",
  },
  {
    slug: "low-voltage-xlpe-power-cables",
    name: "Low Voltage XLPE Power Cables",
    shortName: "LV XLPE Power Cables",
    category: "Supporting",
    priority: 4,
    tagline: "Combined family of YJV, YJY, YJLV and YJLV22 low-voltage XLPE insulated power cables with copper or aluminium conductors.",
    description:
      "Combined product family page for low-voltage XLPE power cables including YJV, YJY, YJLV and YJLV22, covering copper and aluminium conductor options, PVC or PE sheath options, and unarmoured or steel tape armoured constructions.",
    metaTitle: "Low Voltage XLPE Power Cables | HUANYU CABLE",
    metaDescription:
      "Low voltage XLPE insulated power cables including YJV, YJY, YJLV and YJLV22 options for project quotation and engineering supply.",
    detailVariant: "low-voltage-xlpe-family",
    imagePath: "/images/products/low-voltage-xlpe/xlpe-family-hero-yjv-yjy-yjlv-yjlv22.png",
    detailImagePath: "/images/products/low-voltage-xlpe/xlpe-family-hero-yjv-yjy-yjlv-yjlv22.png",
    imageAlt: "YJV, YJY, YJLV and YJLV22 low-voltage XLPE power cable family",
    fallbackImage: "/images/product-lv.svg",
    voltage: "0.6/1 kV",
    standards: ["GB/T 12706.1", "IEC 60502-1", "IEC 60228"],
    construction: ["Copper or aluminium conductor", "XLPE insulation", "PVC or PE outer sheath", "Unarmoured or steel tape armoured structure"],
    applications: ["Building distribution", "Industrial installation", "Cable trench and duct routes", "Protected underground installation"],
    featuredModels: ["YJV", "YJY", "YJLV", "YJLV22"],
    note: "The dedicated YJV22 / YJV23 copper armoured page remains separate for steel tape armoured copper constructions.",
  },
  {
    slug: "low-voltage-unarmoured-power-cables",
    name: "Low Voltage Unarmoured Power Cables",
    shortName: "LV Unarmoured Cables",
    category: "Supporting",
    priority: 4,
    tagline: "General distribution cables for trays, ducts and protected installations.",
    description: "A supporting range for complete project supply and standard low-voltage distribution requirements.",
    imagePath: "/images/products/low-voltage-xlpe/xlpe-unarmoured-yjv-yjy-yjlv.png",
    detailImagePath: "/media/products/categories/lv-unarmoured-power-cable.webp",
    imageAlt: "Illustrative product-family rendering of a low-voltage unarmoured power cable",
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
    tagline: "BV and BVR copper conductor PVC insulated wires for building wiring and interior distribution.",
    description: "PVC insulated building wires and flexible copper conductor cables for residential wiring, interior distribution and selected general-purpose installation applications.",
    metaTitle: "Building Wires & Flexible Cables | BV and BVR | HUANYU CABLE",
    metaDescription:
      "Building wires and flexible cable options including BV and BVR for fixed wiring, lighting, socket circuits and distribution box wiring.",
    detailVariant: "building-wires-flexible-cables",
    imagePath: "/images/products/building-wires-flexible/building-wires-bv-bvr-hero.png",
    detailImagePath: "/images/products/building-wires-flexible/building-wires-bv-bvr-hero.png",
    imageAlt: "BV and BVR copper PVC building wires with solid and stranded copper conductors",
    fallbackImage: "/images/product-support.svg",
    voltage: "Common building wire voltage grades",
    standards: ["Project-specified standards", "Applicable building wire requirements"],
    construction: ["Copper conductor", "PVC insulation", "Solid or stranded conductor options"],
    applications: ["Residential wiring", "Lighting circuits", "Socket connections", "Distribution board internal wiring"],
    featuredModels: ["BV", "BVR", "RV", "RVV", "RVVB"],
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
    imagePath: "/media/products/categories/control-cable.webp",
    detailImagePath: "/media/products/categories/control-cable.webp",
    imageAlt: "Illustrative product-family rendering of a multicore control cable",
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
    description: "Selected overhead insulated and rubber-sheathed cable solutions can be reviewed for project-based supply according to the required construction and application.",
    imagePath: "/media/products/categories/overhead-rubber-cable.webp",
    detailImagePath: "/media/products/categories/overhead-rubber-cable.webp",
    imageAlt: "Illustrative product-family rendering of overhead conductors and rubber-sheathed cable solutions",
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
