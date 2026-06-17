export type CredentialCategory =
  | "management"
  | "green-digital"
  | "recognition"
  | "product-compliance";

export type CredentialIssuerType =
  | "management-system certification"
  | "third-party evaluation"
  | "government recognition"
  | "domestic product certification";

export interface Credential {
  slug: string;
  category: CredentialCategory;
  issuerType: CredentialIssuerType;
  title: string;
  shortTitle: string;
  summary: string;
  buyerRelevance: string;
  imagePath: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  standard?: string;
  level?: string;
  issued?: string;
  validThrough?: string;
  scopeNote?: string;
}

export interface CredentialGroup {
  id: CredentialCategory;
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  detailIntroduction: string;
  highlights: string[];
  introduction?: string;
  notice?: string;
}

export const credentialGroups: CredentialGroup[] = [
  {
    id: "management",
    slug: "management-systems",
    title: "Management Systems",
    shortTitle: "Certified Management Systems",
    eyebrow: "04 VERIFIED SYSTEMS",
    summary:
      "Quality, environmental, occupational health and safety, and energy-management systems supporting structured manufacturing operations.",
    detailIntroduction:
      "Huanyu Cable maintains certified management systems covering quality, environmental management, occupational health and safety, and energy performance within the scope stated in each certificate.",
    highlights: ["ISO 9001", "ISO 14001", "ISO 45001", "ISO 50001"],
  },
  {
    id: "green-digital",
    slug: "green-digital-manufacturing",
    title: "Green and Digital Manufacturing",
    shortTitle: "Green and Digital Development",
    eyebrow: "05 THIRD-PARTY EVALUATIONS",
    summary:
      "Selected evaluations covering green-factory practices, supply-chain management, low-carbon operations, digital workshops and intelligent manufacturing.",
    detailIntroduction:
      "These third-party certificates document Huanyu Cable's ongoing work in green manufacturing, supply-chain management, digital operations and intelligent manufacturing. They are presented according to the scope and ratings shown in the original documents.",
    highlights: ["Green Factory", "Green Supply Chain", "Digital Operations"],
    introduction:
      "These third-party certificates document Huanyu Cable's ongoing work in green manufacturing, supply-chain management, digital operations and intelligent manufacturing. They are presented according to the scope and ratings shown in the original documents.",
  },
  {
    id: "recognition",
    slug: "recognition",
    title: "Government and Innovation Recognition",
    shortTitle: "Technical and Regional Recognition",
    eyebrow: "04 OFFICIAL RECOGNITIONS",
    summary:
      "Selected official recognitions related to technical development, specialization and the company's role in the regional manufacturing sector.",
    detailIntroduction:
      "Selected official recognitions provide additional context on Huanyu Cable's technical development and role in the local manufacturing sector. These recognitions are not product certifications.",
    highlights: ["High-Tech Enterprise", "Specialized SME", "Technology Center"],
    introduction:
      "Selected official recognitions provide additional context on Huanyu Cable's technical development and role in the local manufacturing sector. These recognitions are not product certifications and must not be presented as such.",
  },
  {
    id: "product-compliance",
    slug: "product-compliance",
    title: "Domestic Product Compliance",
    shortTitle: "Manufacturing Authorization and CCC",
    eyebrow: "03 DOMESTIC DOCUMENTS",
    summary:
      "A current domestic manufacturing authorization and selected China Compulsory Certification documents for specifically listed building-wire models.",
    detailIntroduction:
      "These documents relate to domestic manufacturing authorization and selected product models listed in the original certificates. They do not represent export-market certification for every Huanyu Cable product family.",
    highlights: ["Production License", "CCC", "Model-Specific Scope"],
    notice:
      "The following China Compulsory Certification documents apply only to the product models and voltage ranges listed in the original certificates. They do not represent export-market certification for every Huanyu Cable product family.",
  },
];

export const credentials: Credential[] = [
  {
    slug: "iso-9001-quality-management",
    category: "management",
    issuerType: "management-system certification",
    title: "ISO 9001 Quality Management System",
    shortTitle: "ISO 9001",
    standard: "GB/T 19001-2016 / ISO 9001:2015",
    summary:
      "A certified quality-management framework covering the production and sales of wire and cable within the stated certification scope.",
    buyerRelevance:
      "Supports defined process control, documentation and continual improvement across manufacturing operations.",
    issued: "29 May 2025",
    validThrough: "1 July 2028",
    imagePath: "/media/credentials/management/iso-9001-quality-management.webp",
    imageAlt: "Huanyu Cable ISO 9001 quality management system certificate",
    imageWidth: 1268,
    imageHeight: 1809,
  },
  {
    slug: "iso-14001-environmental-management",
    category: "management",
    issuerType: "management-system certification",
    title: "ISO 14001 Environmental Management System",
    shortTitle: "ISO 14001",
    standard: "GB/T 24001-2016 / ISO 14001:2015",
    summary:
      "A certified environmental-management framework covering the production and sales of wire and cable within the stated certification scope.",
    buyerRelevance:
      "Supports structured identification, control and review of environmental aspects in manufacturing operations.",
    issued: "29 May 2025",
    validThrough: "1 July 2028",
    imagePath: "/media/credentials/management/iso-14001-environmental-management.webp",
    imageAlt: "Huanyu Cable ISO 14001 environmental management system certificate",
    imageWidth: 1276,
    imageHeight: 1809,
  },
  {
    slug: "iso-45001-occupational-health-safety",
    category: "management",
    issuerType: "management-system certification",
    title: "ISO 45001 Occupational Health and Safety Management System",
    shortTitle: "ISO 45001",
    standard: "GB/T 45001-2020 / ISO 45001:2018",
    summary:
      "A certified occupational health and safety management framework covering the production and sales of wire and cable within the stated certification scope.",
    buyerRelevance:
      "Supports systematic workplace-risk management and occupational health and safety controls.",
    issued: "29 May 2025",
    validThrough: "1 July 2028",
    imagePath: "/media/credentials/management/iso-45001-occupational-health-safety.webp",
    imageAlt: "Huanyu Cable ISO 45001 occupational health and safety management system certificate",
    imageWidth: 1268,
    imageHeight: 1809,
  },
  {
    slug: "iso-50001-energy-management",
    category: "management",
    issuerType: "management-system certification",
    title: "ISO 50001 Energy Management System",
    shortTitle: "ISO 50001",
    standard: "GB/T 23331-2020 / ISO 50001:2018",
    summary:
      "A certified energy-management system covering energy-management activities involved in the production and sales of wire and cable.",
    buyerRelevance:
      "Supports systematic monitoring and improvement of energy performance within the certified operating scope.",
    issued: "16 June 2025",
    validThrough: "15 June 2028",
    imagePath: "/media/credentials/management/iso-50001-energy-management.webp",
    imageAlt: "Huanyu Cable ISO 50001 energy management system certificate",
    imageWidth: 1360,
    imageHeight: 1757,
    scopeNote: "The original certificate includes an energy-performance attachment and boundary information.",
  },
  {
    slug: "green-factory-evaluation",
    category: "green-digital",
    issuerType: "third-party evaluation",
    title: "Green Factory Evaluation Certification",
    shortTitle: "Green Factory",
    standard: "GB/T 36132-2018 and Q/GDZR 0006-2023",
    level: "AAAAA",
    summary:
      "A third-party green-factory evaluation covering the production and sales of wire and cable within the licensed scope.",
    buyerRelevance:
      "Reflects a structured approach to resource efficiency, environmental management and green-manufacturing practices.",
    issued: "20 May 2025",
    validThrough: "19 May 2028",
    imagePath: "/media/credentials/green/green-factory-evaluation.webp",
    imageAlt: "Huanyu Cable AAAAA green factory evaluation certificate",
    imageWidth: 1323,
    imageHeight: 1871,
  },
  {
    slug: "green-supply-chain",
    category: "green-digital",
    issuerType: "third-party evaluation",
    title: "Green Supply Chain Certification",
    shortTitle: "Green Supply Chain",
    standard: "GB/T 33635-2017 and Q/GDZR 066-2023",
    level: "Five-Star",
    summary:
      "A third-party certification covering green supply-chain management activities connected with the production and sales of wire and cable.",
    buyerRelevance:
      "Extends environmental-management attention beyond factory operations to relevant procurement and supply-chain activities.",
    issued: "20 May 2025",
    validThrough: "19 May 2028",
    imagePath: "/media/credentials/green/green-supply-chain.webp",
    imageAlt: "Huanyu Cable five-star green supply chain certificate",
    imageWidth: 1323,
    imageHeight: 1871,
  },
  {
    slug: "digital-green-low-carbon-management",
    category: "green-digital",
    issuerType: "third-party evaluation",
    title: "Digitalized Green and Low-Carbon Management System Certification",
    shortTitle: "Digital Green and Low-Carbon Management",
    standard: "Q/GDZR 01084-2023",
    summary:
      "A third-party management-system certification covering digitalized green and low-carbon management activities involved in wire and cable production and sales.",
    buyerRelevance:
      "Shows the integration of digital management tools with resource, energy and lower-carbon operating objectives.",
    issued: "20 May 2025",
    validThrough: "19 May 2028",
    imagePath: "/media/credentials/green/digital-green-low-carbon-management.webp",
    imageAlt: "Huanyu Cable digitalized green and low-carbon management system certificate",
    imageWidth: 1323,
    imageHeight: 1871,
  },
  {
    slug: "digital-leadership-enterprise",
    category: "green-digital",
    issuerType: "third-party evaluation",
    title: "Digital Leadership Enterprise Certification",
    shortTitle: "Digital Leadership Enterprise",
    standard: "Q/GDZR 01100-2024 Digital Workshop Certification Technical Specification",
    level: "AAAAA",
    summary:
      "A third-party certification evaluating digital-workshop development within the stated production and sales scope.",
    buyerRelevance:
      "Reflects continued development of digital production management and operational data application.",
    issued: "20 May 2025",
    validThrough: "19 May 2028",
    imagePath: "/media/credentials/green/digital-leadership-enterprise.webp",
    imageAlt: "Huanyu Cable AAAAA digital leadership enterprise certificate",
    imageWidth: 1323,
    imageHeight: 1871,
  },
  {
    slug: "intelligent-manufacturing-demonstration-factory",
    category: "green-digital",
    issuerType: "third-party evaluation",
    title: "Intelligent Manufacturing Demonstration Factory Certification",
    shortTitle: "Intelligent Manufacturing",
    standard: "Q/GDZR 01094-2024",
    level: "AAAA",
    summary:
      "A third-party certification evaluating intelligent-manufacturing development within the stated production and sales scope.",
    buyerRelevance:
      "Reflects ongoing investment in production equipment, process management and manufacturing digitalization.",
    issued: "20 May 2025",
    validThrough: "19 May 2028",
    imagePath: "/media/credentials/green/intelligent-manufacturing-demonstration-factory.webp",
    imageAlt: "Huanyu Cable AAAA intelligent manufacturing demonstration factory certificate",
    imageWidth: 1323,
    imageHeight: 1871,
  },
  {
    slug: "high-and-new-technology-enterprise",
    category: "recognition",
    issuerType: "government recognition",
    title: "High and New Technology Enterprise",
    shortTitle: "High-Tech Enterprise",
    summary:
      "A government-recognized High and New Technology Enterprise designation issued by the relevant Anhui provincial authorities.",
    buyerRelevance:
      "Provides context on the company's technical-development, innovation and enterprise-management capabilities.",
    issued: "28 October 2025",
    validThrough: "Valid for three years",
    imagePath: "/media/credentials/recognition/high-and-new-technology-enterprise.webp",
    imageAlt: "Huanyu Cable High and New Technology Enterprise certificate",
    imageWidth: 1600,
    imageHeight: 1131,
  },
  {
    slug: "anhui-specialized-innovative-sme",
    category: "recognition",
    issuerType: "government recognition",
    title: "Specialized and Innovative SME of Anhui Province",
    shortTitle: "Specialized and Innovative SME",
    summary: "An official provincial recognition of specialization, refined management and innovation capability.",
    buyerRelevance:
      "Highlights the company's focused manufacturing development and continued technical specialization.",
    issued: "August 2023",
    imagePath: "/media/credentials/recognition/anhui-specialized-innovative-sme.webp",
    imageAlt: "Anhui Province specialized and innovative SME plaque awarded to Huanyu Cable",
    imageWidth: 511,
    imageHeight: 318,
  },
  {
    slug: "hefei-enterprise-technology-center",
    category: "recognition",
    issuerType: "government recognition",
    title: "Hefei Municipal Enterprise Technology Center",
    shortTitle: "Enterprise Technology Center",
    summary: "A municipal recognition of the company's enterprise technology-center capabilities.",
    buyerRelevance:
      "Provides evidence of structured technical development and organizational support for product and process improvement.",
    issued: "June 2023",
    imagePath: "/media/credentials/recognition/hefei-enterprise-technology-center.webp",
    imageAlt: "Hefei Municipal Enterprise Technology Center plaque awarded to Huanyu Cable",
    imageWidth: 437,
    imageHeight: 334,
  },
  {
    slug: "luyang-top-10-high-quality-development",
    category: "recognition",
    issuerType: "government recognition",
    title: "2022 Top 10 Enterprise in High-Quality Industrial Development",
    shortTitle: "Top 10 Industrial Enterprise",
    summary: "A Luyang District recognition for high-quality industrial development in 2022.",
    buyerRelevance:
      "Provides regional context on the company's manufacturing contribution and industrial development.",
    issued: "January 2023",
    imagePath: "/media/credentials/recognition/luyang-top-10-high-quality-development.webp",
    imageAlt: "Luyang District top 10 enterprise in high-quality industrial development plaque awarded to Huanyu Cable",
    imageWidth: 321,
    imageHeight: 203,
  },
  {
    slug: "ccc-building-wire-1",
    category: "product-compliance",
    issuerType: "domestic product certification",
    title: "China Compulsory Certification - Selected PVC-Insulated Building Wires",
    shortTitle: "CCC Building Wire Certificate",
    standard: "JB/T 8734.2-2016",
    summary:
      "Domestic compulsory product certification for the listed PVC-insulated sheathed wire models and voltage ranges shown in the original certificate.",
    buyerRelevance:
      "Provides product-specific compliance evidence for the listed domestic building-wire models.",
    issued: "15 May 2026",
    validThrough: "14 May 2031",
    imagePath: "/media/credentials/product/ccc-building-wire-1.webp",
    imageAlt:
      "China Compulsory Certification certificate for selected Huanyu Cable PVC-insulated building wire models",
    imageWidth: 573,
    imageHeight: 806,
    scopeNote:
      "Certificate number 2002010105016062. Refer to the original document for the complete model and voltage scope.",
  },
  {
    slug: "ccc-building-wire-2",
    category: "product-compliance",
    issuerType: "domestic product certification",
    title: "China Compulsory Certification - Selected Single-Core Building Wires",
    shortTitle: "CCC Single-Core Wire Certificate",
    standard: "GB/T 5023.3-2008 / IEC 60227-3:1997 and JB/T 8734.2-2016",
    summary:
      "Domestic compulsory product certification for the listed single-core PVC-insulated wire models and voltage ranges shown in the original certificate.",
    buyerRelevance:
      "Provides product-specific compliance evidence for the listed domestic building-wire models.",
    issued: "15 May 2026",
    validThrough: "14 May 2031",
    imagePath: "/media/credentials/product/ccc-building-wire-2.webp",
    imageAlt:
      "China Compulsory Certification certificate for selected Huanyu Cable single-core building wire models",
    imageWidth: 574,
    imageHeight: 798,
    scopeNote:
      "Certificate number 2002010105016064. Refer to the original document for the complete model and voltage scope.",
  },
];

export function getCredentialsByCategory(category: CredentialCategory): Credential[] {
  return credentials.filter((credential) => credential.category === category);
}

export function getCredentialGroupBySlug(slug: string): CredentialGroup | undefined {
  return credentialGroups.find((group) => group.slug === slug);
}
