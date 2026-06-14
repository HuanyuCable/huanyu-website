import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Quality & Testing", description: "Huanyu Cable quality-control, testing and document structure for overseas project buyers." };

export default function QualityPage() {
  return (
    <>
      <section className="page-hero page-hero-quality"><div className="container"><span className="eyebrow light">Quality & Testing</span><h1>Every important claim should lead to evidence.</h1><p>This page is a framework for Huanyu's actual inspection steps, laboratory equipment, certificates and test reports.</p></div></section>
      <section className="section"><div className="container"><div className="process-grid quality-process"><div><span>01</span><h3>Raw materials</h3><p>Conductor, insulation, sheath and armour material checks.</p></div><div><span>02</span><h3>In-process control</h3><p>Dimensions, eccentricity, spark testing and construction verification.</p></div><div><span>03</span><h3>Routine tests</h3><p>Electrical and physical tests aligned with the agreed product standard.</p></div><div><span>04</span><h3>Release documents</h3><p>Inspection records, packing list, drum marks and required certificates.</p></div></div></div></section>
      <section className="section section-muted"><div className="container split quality-grid"><div><img src="/images/quality-lab.svg" alt="Quality laboratory placeholder" /></div><div><span className="eyebrow">Before publishing</span><h2>Replace placeholders with verified records.</h2><ul className="check-list"><li>Certificate scans with number, issuer and validity</li><li>Test equipment photographs and model details</li><li>Routine test report samples with confidential data removed</li><li>Factory inspection workflow and responsible department</li><li>Third-party inspection options, if actually available</li></ul></div></div></section>
      <section className="section cta-simple"><div className="container"><h2>Need a specific test or document?</h2><Link className="button" href="/contact">Send Requirements</Link></div></section>
    </>
  );
}
