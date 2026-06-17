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
      <section className="page-hero page-hero-quality"><div className="container"><span className="eyebrow light">Quality & Testing</span><h1>Quality control across key production stages.</h1><p>Inspection covers incoming materials, in-process checks, routine testing and release documentation according to the applicable product and project requirements.</p></div></section>
      <section className="section"><div className="container"><div className="process-grid quality-process"><div><span>01</span><h3>Raw materials</h3><p>Conductor, insulation, sheath and armour material checks.</p></div><div><span>02</span><h3>In-process control</h3><p>Dimensions, eccentricity, spark testing and construction verification.</p></div><div><span>03</span><h3>Routine tests</h3><p>Electrical and physical tests aligned with the agreed product standard.</p></div><div><span>04</span><h3>Release documents</h3><p>Inspection records, packing list, drum marks and required certificates.</p></div></div></div></section>
      <section className="section section-muted">
        <div className="container split process-evidence">
          <div>
            <span className="eyebrow">Production Floor</span>
            <h2>Process Control on the Production Floor</h2>
            <p className="lead">Quality control is supported by defined production stages, operating checks and review of the requested construction and standard before release. Project-specific inspection and documentation requirements are confirmed during technical review.</p>
          </div>
          <div className="process-evidence-images">
            <Image src="/media/manufacturing/drawing-line-operation.webp" alt="Production-line operation for cable manufacturing" width={720} height={480} sizes="(max-width: 760px) 100vw, 45vw" />
            <Image src="/media/manufacturing/copper-conductor-line.webp" alt="Copper conductor processing for cable manufacturing" width={720} height={480} sizes="(max-width: 760px) 100vw, 45vw" />
          </div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container">
          <span className="eyebrow">Documentation</span>
          <h2>Documents for Project Review</h2>
          <p className="lead">Available inspection records, test documents and certificates depend on the selected product, applicable standard and project requirements. Please contact our team to confirm the required documentation.</p>
        </div>
      </section>
      <section className="section credentials-section" id="credentials">
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
