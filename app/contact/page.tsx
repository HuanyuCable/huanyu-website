import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Request a Quote", description: "Send your cable specification, BOQ and project requirements to Huanyu Cable." };

export default function ContactPage() {
  return (
    <>
      <section className="page-hero page-hero-contact"><div className="container"><span className="eyebrow light">Request a Quote</span><h1>Send the specification before discussing the price.</h1><p>The more complete the technical and delivery information, the more useful the first response will be.</p></div></section>
      <section className="section"><div className="container contact-grid"><div><span className="eyebrow">Project inquiry</span><h2>Recommended information</h2><ol className="contact-checklist"><li>Applicable standard and voltage rating</li><li>Conductor material, cores and cross-section</li><li>Insulation, armour, sheath and fire performance</li><li>Quantity, drum length and destination port</li><li>Required documents, tests and delivery date</li></ol><div className="contact-box"><strong>{site.legalName}</strong><span>{site.address}</span><a href={`mailto:${site.email}`}>{site.email}</a><small>Replace the placeholder phone and WhatsApp values in lib/site.ts before deployment.</small></div></div><InquiryForm /></div></section>
    </>
  );
}
