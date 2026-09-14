export type BuyerGuide = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle?: string;
  description: string;
  excerpt: string;
  tags?: string[];
};

export const buyerGuides: BuyerGuide[] = [
  {
    slug: "sta-vs-swa-armoured-cable-guide",
    title: "STA vs SWA Armoured Cable: Selection Guide for Underground Power Projects",
    shortTitle: "STA vs SWA Armoured Cable",
    description:
      "Compare STA and SWA armoured power cables by route, mechanical protection, pulling conditions, core configuration and project specification.",
    excerpt:
      "A practical procurement guide to selecting steel tape armour or steel wire armour and preparing a clear cable RFQ.",
    tags: ["Buyer Guide", "Armoured Cable"],
  },
  {
    slug: "medium-voltage-xlpe-cable-selection-guide",
    title: "Medium Voltage XLPE Cable Selection Guide: Voltage Rating, Armour and IEC 60502-2",
    shortTitle: "Medium Voltage XLPE Cable Selection Guide",
    description:
      "A buyer guide to MV XLPE cable voltage class, cores, conductor, screens, armour, sheath, testing, documents and IEC 60502-2 project review.",
    excerpt:
      "A specification and RFQ checklist for EPC teams and project buyers sourcing medium voltage XLPE power cables up to 35 kV.",
    tags: ["Buyer Guide", "Medium Voltage"],
  },
  {
    slug: "what-we-check-when-mv-cable-rfq-only-says-35-kv",
    title: "What We Check When an MV Cable RFQ Only Says “35 kV”",
    shortTitle: "35 kV Cable RFQ: What We Check Before Quotation",
    metaTitle: "35 kV Cable RFQ: What We Check Before Quotation | HUANYU CABLE",
    description:
      "A 35 kV cable request is not enough for an accurate quotation. See the voltage, conductor, screen, armour, testing, drum and BOQ details that should be confirmed before an MV cable RFQ is quotation-ready.",
    excerpt:
      "A practical checklist for turning an incomplete “35 kV cable” inquiry into a quotation-ready MV cable specification.",
    tags: ["Buyer Guide", "Medium Voltage", "RFQ Guide"],
  },
  {
    slug: "cable-documents-epc-buyers-should-request-before-shipment",
    title: "What Cable Documents Should an EPC Buyer Request Before Shipment?",
    shortTitle: "Cable Documents EPC Buyers Should Request Before Shipment",
    metaTitle: "Cable Documents EPC Buyers Should Request Before Shipment | HUANYU CABLE",
    description:
      "A practical checklist of cable datasheets, routine test reports, inspection records, drum schedules, packing documents and project certificates EPC buyers should confirm before shipment.",
    excerpt:
      "A practical checklist for reviewing cable datasheets, test reports, inspection records, drum schedules and project-required documents before shipment.",
    tags: ["Buyer Guide", "EPC Procurement", "Pre-Shipment"],
  },
  {
    slug: "how-cable-drum-length-affects-packing-handling-and-export-freight",
    title: "How Cable Drum Length Affects Packing, Handling and Export Freight",
    shortTitle: "How Cable Drum Length Affects Packing, Handling and Export Freight",
    metaTitle: "How Cable Drum Length Affects Packing, Handling and Export Freight | HUANYU CABLE",
    description:
      "Learn how cable drum length affects drum size, gross weight, continuous cable length, handling, container planning and export freight for project cable orders.",
    excerpt:
      "A practical guide to continuous cable length, drum size, gross weight, handling limits and export packing for project cable orders.",
    tags: ["Buyer Guide", "Packing & Logistics", "EPC Procurement"],
  },
  {
    slug: "pv1-f-vs-h1z2z2-k-solar-cable-selection-guide",
    title: "PV1-F vs H1Z2Z2-K Solar Cable: Selection Guide for PV Projects",
    shortTitle: "PV1-F vs H1Z2Z2-K Solar Cable",
    metaTitle: "PV1-F vs H1Z2Z2-K Solar Cable Selection Guide | HUANYU CABLE",
    description:
      "Compare PV1-F and H1Z2Z2-K solar DC cable requirements for PV projects, including conductor, 4 mm² / 6 mm² sizing, standards, packing and RFQ information.",
    excerpt:
      "A practical guide for comparing solar DC cable designation, conductor, size, standards and RFQ information before quotation.",
    tags: ["Buyer Guide", "Solar Cable"],
  },
  {
    slug: "low-voltage-xlpe-cable-rfq-checklist",
    title: "Low Voltage XLPE Cable RFQ Checklist for 0.6/1 kV Projects",
    shortTitle: "Low Voltage XLPE Cable RFQ Checklist for 0.6/1 kV Projects",
    metaTitle: "Low Voltage XLPE Cable RFQ Checklist: 0.6/1 kV, Conductor, Armour and Sheath | HUANYU CABLE",
    description:
      "A practical RFQ checklist for project buyers sourcing 0.6/1 kV XLPE power cables, covering conductor material, cable construction, armour, sheath, standards and quotation information.",
    excerpt:
      "A practical checklist for confirming 0.6/1 kV cable construction, conductor, armour, sheath, standards and quotation information.",
    tags: ["Buyer Guide", "Low Voltage", "RFQ Guide"],
  },
  {
    slug: "lszh-vs-flame-retardant-vs-fire-resistant-cable",
    title: "LSZH vs Flame-Retardant vs Fire-Resistant Cable: What Project Buyers Should Specify",
    shortTitle: "LSZH vs Flame-Retardant vs Fire-Resistant Cable",
    metaTitle: "LSZH vs Flame-Retardant vs Fire-Resistant Cable: Procurement Guide | HUANYU CABLE",
    description:
      "A practical procurement guide explaining the difference between LSZH, flame-retardant and fire-resistant cable requirements, and what project buyers should confirm before requesting a quotation.",
    excerpt:
      "A procurement guide explaining the difference between smoke, flame-propagation and circuit-integrity requirements.",
    tags: ["Buyer Guide", "Fire Performance"],
  },
  {
    slug: "bv-vs-bvr-building-wire-guide",
    title: "BV vs BVR Cable: Meaning, Differences & Buyer Guide",
    shortTitle: "BV vs BVR Building Wire: Meaning, Differences & Buyer Guide",
    metaTitle: "BV vs BVR Cable: Meaning, Differences & Buyer Guide",
    description:
      "Understand what BV and BVR mean, how rigid and flexible conductor constructions differ, and what international buyers should confirm before ordering PVC building wire.",
    excerpt:
      "A practical guide to BV and BVR building-wire designations, rigid versus flexible conductor construction and the specification details buyers should confirm before quotation.",
    tags: ["Buyer Guide", "Building Wire"],
  },
  {
    slug: "building-wire-size-guide",
    title: "Building Wire Size Guide: What 1.5, 2.5, 4, 6 and 10 mm² Actually Mean",
    shortTitle: "Building Wire Size Guide: 1.5, 2.5, 4, 6 & 10 mm²",
    metaTitle: "Building Wire Sizes: 1.5, 2.5, 4, 6 & 10 mm² | Huanyu Cable",
    description:
      "Understand what 1.5, 2.5, 4, 6 and 10 mm² mean for PVC building wire, how conductor construction changes, and what buyers should confirm before RFQ.",
    excerpt:
      "A buyer guide to 1.5, 2.5, 4, 6 and 10 mm² building-wire sizes, nominal conductor area, BV/BVR construction and what buyers should confirm before quotation.",
    tags: ["Buyer Guide", "Building Wire", "Size Guide"],
  },
  {
    slug: "awg-to-mm2-building-wire-guide",
    title: "AWG to mm² Building Wire Guide: Size Chart & Buyer Checks",
    shortTitle: "AWG to mm² Building Wire: Size Chart & Buyer Guide",
    metaTitle: "AWG to mm² Wire Size Chart for Building Wire | Huanyu Cable",
    description:
      "Compare 16–8 AWG with metric mm² building-wire sizes, nominal conductor areas and buyer checks before substituting an AWG specification.",
    excerpt:
      "Compare AWG nominal conductor areas with metric building-wire sizes and learn what must be checked before an AWG specification is replaced by a metric product.",
    tags: ["Buyer Guide", "Building Wire", "AWG / MM²"],
  },
];

export function getBuyerGuide(slug: string): BuyerGuide | undefined {
  return buyerGuides.find((guide) => guide.slug === slug);
}
