export type BuyerGuide = {
  slug: string;
  title: string;
  shortTitle: string;
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
];

export function getBuyerGuide(slug: string): BuyerGuide | undefined {
  return buyerGuides.find((guide) => guide.slug === slug);
}
