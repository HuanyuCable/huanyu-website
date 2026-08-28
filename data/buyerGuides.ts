export type BuyerGuide = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle?: string;
  description: string;
  excerpt: string;
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
  },
  {
    slug: "medium-voltage-xlpe-cable-selection-guide",
    title: "Medium Voltage XLPE Cable Selection Guide: Voltage Rating, Armour and IEC 60502-2",
    shortTitle: "Medium Voltage XLPE Cable Selection Guide",
    description:
      "A buyer guide to MV XLPE cable voltage class, cores, conductor, screens, armour, sheath, testing, documents and IEC 60502-2 project review.",
    excerpt:
      "A specification and RFQ checklist for EPC teams and project buyers sourcing medium voltage XLPE power cables up to 35 kV.",
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
  },
];

export function getBuyerGuide(slug: string): BuyerGuide | undefined {
  return buyerGuides.find((guide) => guide.slug === slug);
}
