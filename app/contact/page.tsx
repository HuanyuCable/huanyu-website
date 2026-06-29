import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Contact Huanyu Cable | Request a Cable Quotation" },
  description:
    "Contact Huanyu Cable to request a quotation for low voltage cables, medium voltage XLPE cables, LSZH cables, overhead line products and building wires.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero page-hero-contact"><div className="container"><span className="eyebrow light">Request a Quote</span><h1>Share Your Cable Specification for an Accurate Quotation</h1><p>The more complete the technical and delivery information, the more useful the first response will be.</p></div></section>
      <section className="section"><div className="container contact-grid"><div><span className="eyebrow">Project inquiry</span><h2>Recommended information</h2><ol className="contact-checklist"><li>Applicable standard and voltage rating</li><li>Conductor material, cores and cross-section</li><li>Insulation, armour, sheath and fire performance</li><li>Quantity, drum length and destination port</li><li>Required documents, tests and delivery date</li></ol><div className="contact-box"><strong>{site.legalName}</strong><span>{site.address}</span><a href={`mailto:${site.email}`}>{site.email}</a>{site.whatsapp && <span>WhatsApp: {site.whatsapp}</span>}</div></div><InquiryForm /></div></section>
    </>
  );
}
