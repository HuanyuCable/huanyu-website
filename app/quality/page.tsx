import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CredentialGroupCard } from "@/components/CredentialGroupCard";
import { credentialGroups } from "@/data/credentials";

export const metadata: Metadata = {
  title: "Quality & Testing",
  description: "Huanyu Cable quality-control, testing and document structure for overseas project buyers.",
  alternates: { canonical: "/quality" },
};

export default function QualityPage() {
  return (
    <>
      <section className="quality-hero"><div className="container"><span className="eyebrow light">Quality & Testing</span><h1>Quality control across key production stages.</h1><p>Inspection covers incoming materials, in-process checks, routine testing and release documentation according to the applicable product and project requirements.</p></div></section>
      <section className="section quality-dimensions-section"><div className="container"><div className="quality-dimension-grid"><div><span>Material control</span><h3>Raw materials</h3><p>Conductor, insulation, sheath and armour materials are checked before production release.</p></div><div><span>Production checks</span><h3>In-process control</h3><p>Dimensions, eccentricity, spark testing and construction details are reviewed during manufacturing.</p></div><div><span>Test discipline</span><h3>Routine tests</h3><p>Electrical and physical tests are aligned with the agreed product standard and order requirements.</p></div><div><span>Release evidence</span><h3>Release documents</h3><p>Inspection records, packing lists, drum marks and required certificates support final shipment review.</p></div></div></div></section>
      <section className="section section-muted process-evidence-section">
        <div className="container split process-evidence">
          <div>
            <span className="eyebrow">Production Floor</span>
            <h2>Process Control on the Production Floor</h2>
            <p className="lead">Quality control is supported by defined production stages, operating checks and review of the requested construction and standard before release. Project-specific inspection and documentation requirements are confirmed during technical review.</p>
          </div>
          <div className="process-evidence-images">
            <Image src="/images/site/supporting/quality-high-voltage-test.webp" alt="Electrical testing equipment used for cable quality inspection" width={720} height={480} sizes="(max-width: 760px) 100vw, 45vw" />
            <Image src="/images/site/supporting/quality-control-panel.webp" alt="High-voltage and partial discharge testing control panel" width={720} height={480} sizes="(max-width: 760px) 100vw, 45vw" />
          </div>
        </div>
      </section>
      <section className="section section-muted documents-section">
        <div className="container">
          <span className="eyebrow">Documentation</span>
          <h2>Documents for Project Review</h2>
          <p className="lead">Available inspection records, test documents and certificates depend on the selected product, applicable standard and project requirements. Please contact our team to confirm the required documentation.</p>
        </div>
      </section>
      <section className="section credentials-section credentials-overview-section" id="credentials">
        <div className="container">
          <div className="credentials-intro">
            <span className="eyebrow">Credentials</span>
            <h2>Verified credentials, organized by purpose.</h2>
            <p className="lead">Explore Huanyu Cable&apos;s certified management systems, green and digital manufacturing credentials, official technical recognition and selected domestic compliance documents. Each category is presented separately so buyers can understand what each document demonstrates and where its stated scope applies.</p>
          </div>
          <div className="credential-overview-grid">
            {credentialGroups.map((group, index) => (
              <CredentialGroupCard group={group} index={index} key={group.id} />
            ))}
          </div>
        </div>
      </section>
      <section className="section cta-simple"><div className="container"><h2>Need a specific test or document?</h2><Link className="button" href="/contact">Send Requirements</Link></div></section>
    </>
  );
}
