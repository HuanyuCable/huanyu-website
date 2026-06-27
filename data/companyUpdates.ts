export type CompanyUpdate = {
  slug: string;
  title: string;
  publishedAt: string;
  category: string;
  excerpt: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  body: string[];
  sourceUrl?: string;
};

export const companyUpdates: CompanyUpdate[] = [
  {
    slug: "hefei-specialized-innovative-sme",
    title: "Huanyu Cable Recognized as a Hefei Specialized and Innovative SME",
    publishedAt: "2023-05-30",
    category: "Recognition",
    excerpt:
      "Huanyu Cable was included in Hefei's 2022 list of Specialized and Innovative SMEs, recognizing the company's focused manufacturing development and continuous improvement.",
    metaDescription:
      "Huanyu Cable was recognized as a 2022 Hefei Specialized and Innovative SME, reflecting the company's focus on cable manufacturing and continuous operational improvement.",
    image: "/media/company-updates/hefei-specialized-innovative-sme.webp",
    imageAlt: "Huanyu Cable company recognition update",
    body: [
      "Huanyu Cable has been recognized as a 2022 Hefei Specialized and Innovative Small and Medium-Sized Enterprise following the publication of the proposed recognition list by the Hefei Municipal Bureau of Economy and Information Technology.",
      "The designation, commonly described in China as specialized, refined, distinctive and innovative, is intended to recognize small and medium-sized enterprises that maintain a clear industrial focus, strengthen specialized capabilities and continue improving their management, products and operations.",
      "For Huanyu Cable, the recognition reflects the company's long-term concentration on wire and cable manufacturing and its continued efforts to improve production management, product development and customer service.",
      "Huanyu Cable will continue to build practical manufacturing capability around project requirements, applicable standards and stable production execution, while supporting customers with technical review and specification-based cable supply.",
    ],
    sourceUrl: "https://www.hfhuanyu.com/gongsixinwen-709.html",
  },
  {
    slug: "working-capital-support-program",
    title: "Huanyu Cable Receives Working-Capital Support Through the Per-Mu Hero Loan Program",
    publishedAt: "2023-04-12",
    category: "Business Development",
    excerpt:
      "Huanyu Cable successfully completed a digital application under a regional industrial finance program and received working-capital support for ongoing operations.",
    metaDescription:
      "Huanyu Cable completed a digital application under a regional industrial finance program and received working-capital support for continued business development.",
    image: "/media/company-updates/working-capital-support.webp",
    imageAlt: "Huanyu Cable working-capital support update",
    body: [
      "Huanyu Cable successfully completed an online application under the regional Per-Mu Hero Loan program and received working-capital support for its business operations.",
      "The program is a local industrial finance initiative designed to connect enterprise operating performance with access to financial services. The application process was completed digitally, reducing administrative steps and allowing the company to complete the procedure without repeated in-person visits.",
      "As a manufacturing enterprise based in Luyang District, Huanyu Cable continues to improve its management, production and sales processes while responding to changing market requirements.",
      "The additional working-capital support provides practical backing for daily operations and continued development. Huanyu Cable will continue to focus on stable manufacturing, responsible business management and the supply of cable products according to confirmed specifications and project requirements.",
    ],
    sourceUrl: "https://www.hfhuanyu.com/gongsixinwen-708.html",
  },
  {
    slug: "world-consumer-rights-day-2023",
    title: "World Consumer Rights Day: Our Commitment to Product Quality",
    publishedAt: "2023-03-15",
    category: "Quality & Responsibility",
    excerpt:
      "Huanyu Cable marks World Consumer Rights Day by reaffirming its focus on responsible manufacturing, product quality and clear communication with customers.",
    metaDescription:
      "On World Consumer Rights Day, Huanyu Cable reaffirms its commitment to responsible manufacturing, product quality and clear customer communication.",
    image: "/media/company-updates/world-consumer-rights-day.webp",
    imageAlt: "Huanyu Cable World Consumer Rights Day quality update",
    body: [
      "World Consumer Rights Day is observed each year on March 15 to promote awareness of consumer protection, responsible business conduct and fair market practices.",
      "For a cable manufacturer, customer responsibility begins with clear specification review and continues through material control, production, inspection and final delivery. Cable construction, applicable standards and project requirements must be confirmed before quotation and production.",
      "Huanyu Cable uses this occasion to reaffirm its commitment to responsible manufacturing, product quality and transparent communication. The company aims to provide customers with practical technical information, confirm product requirements carefully and support project review with relevant documentation when available.",
      "Long-term trust is built through consistent execution rather than broad claims. Huanyu Cable will continue to improve its processes and serve customers with a focused, specification-based approach to cable supply.",
    ],
    sourceUrl: "https://www.hfhuanyu.com/gongsixinwen-707.html",
  },
];

export function getCompanyUpdate(slug: string): CompanyUpdate | undefined {
  return companyUpdates.find((update) => update.slug === slug);
}

export function formatUpdateDate(date: string): string {
  return new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}
