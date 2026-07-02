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
      <section className="page-hero page-hero-contact"><div className="container"><span className="eyebrow light">Request a Quote</span><h1>Share Your Cable Requirements for Review</h1><p>Send the project information you have. Partial details are welcome, and our team can review the specification with you.</p></div></section>
      <section className="section"><div className="container contact-grid"><div><span className="eyebrow">Project inquiry</span><h2>Recommended information</h2><p>If some details are not available yet, you can still send the basic application, voltage level or cable type for initial review.</p><ol className="contact-checklist"><li>Applicable standard and voltage rating, if available</li><li>Conductor material, cores and cross-section</li><li>Insulation, armour, sheath and fire performance</li><li>Quantity, drum length and destination port</li><li>Required documents, tests and delivery date, if known</li></ol><div className="contact-box"><strong>{site.legalName}</strong><span>{site.address}</span><a href={`mailto:${site.email}`}>{site.email}</a>{site.whatsapp && <a href={site.whatsappUrl}>WhatsApp: {site.whatsapp}</a>}</div></div><InquiryForm /></div></section>
    </>
  );
}
