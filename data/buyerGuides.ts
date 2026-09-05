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
];

export function getBuyerGuide(slug: string): BuyerGuide | undefined {
  return buyerGuides.find((guide) => guide.slug === slug);
}
