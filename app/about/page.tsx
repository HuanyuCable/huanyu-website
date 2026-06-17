import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Huanyu Cable",
  description: "Learn about Huanyu Cable's focused manufacturing position, history and project-oriented approach.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero"><div className="container"><span className="eyebrow light">About Huanyu</span><h1>Cable manufacturing experience since 1995.</h1><p>Huanyu Cable is based in Hefei, Anhui, China. We focus on low-voltage armoured cables, medium-voltage power cables, and LSZH & fire-safe cable solutions for overseas engineering and project buyers.</p></div></section>
      <section className="section about-position-section"><div className="container split about-grid"><div><span className="eyebrow">Company position</span><h2>A focused product and project approach</h2></div><div><p className="lead">Rather than presenting an oversized product catalogue, Huanyu organizes its export offering around selected cable families supported by practical manufacturing and order experience.</p></div></div></section>
      <section className="section about-timeline-section"><div className="container timeline"><div><strong>1995</strong><span>Company foundation</span></div><div><strong>30+ Years</strong><span>Of industry expertise and focus</span></div></div></section>
      <section className="section section-muted about-manufacturing-section">
        <div className="container split manufacturing-base">
          <div>
            <span className="eyebrow">Manufacturing Base</span>
            <h2>A Manufacturing Base in Hefei, China</h2>
            <p className="lead">Huanyu Cable operates from Hefei, Anhui, with office, production and order-preparation areas supporting wire and cable manufacturing. The site combines practical production equipment with experienced operating teams and project-based technical review.</p>
          </div>
          <div className="about-image-pair">
            <Image src="/media/about/factory-gate.webp" alt="Huanyu Cable factory gate in Hefei" width={720} height={480} sizes="(max-width: 760px) 100vw, 45vw" />
            <Image src="/media/about/office-building.webp" alt="Huanyu Cable office building" width={720} height={480} sizes="(max-width: 760px) 100vw, 45vw" />
          </div>
        </div>
      </section>
      <section className="section about-trademark-section">
        <div className="container trademark-panel">
          <div className="trademark-image">
            <Image src="/media/brand/guose-trademark.png" alt="Guose registered trademark of Huanyu Cable" width={160} height={160} sizes="160px" />
          </div>
          <div>
            <span className="eyebrow">Registered Trademark</span>
            <h2>HUANYU CABLE and the Guose Registered Trademark</h2>
            <p>HUANYU CABLE is the company-facing name used in international communication. The Guose symbol is a registered trademark used across applicable company and product materials.</p>
          </div>
        </div>
      </section>
      <section className="section section-muted about-workshop-section">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Inside the Workshop</span><h2>Inside the Workshop</h2></div>
            <p>Selected views from Huanyu Cable production areas, shown as practical manufacturing evidence.</p>
          </div>
          <div className="factory-gallery">
            {[
              ["/media/manufacturing/workshop-overview.webp", "Workshop overview", "Huanyu Cable workshop overview"],
              ["/media/manufacturing/cabling-line.webp", "Cable processing equipment", "Cable processing equipment in the workshop"],
              ["/media/manufacturing/copper-conductor-line.webp", "Copper conductor processing", "Copper conductor processing area"],
              ["/media/manufacturing/drawing-line-operation.webp", "Production-line operation", "Production-line operation at Huanyu Cable"],
            ].map(([src, caption, alt]) => (
              <figure key={src}>
                <Image src={src} alt={alt} width={640} height={430} sizes="(max-width: 760px) 100vw, 25vw" />
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="section about-culture-section">
        <div className="container split culture-section">
          <div className="culture-image">
            <Image src="/media/about/team-culture.webp" alt="Huanyu Cable team culture activity" width={760} height={500} sizes="(max-width: 760px) 100vw, 45vw" />
          </div>
          <div>
            <span className="eyebrow">People & Culture</span>
            <h2>A Stable Team with Long-Term Commitment</h2>
            <p className="lead">Huanyu Cable supports employee welfare through annual staff activities, opportunities for family participation and seasonal workplace care. During hot-weather periods, the company provides heat allowances and refreshments for employees.</p>
          </div>
        </div>
      </section>
      <section className="section section-muted about-responsible-section">
        <div className="container split responsible-manufacturing">
          <div>
            <span className="eyebrow">Responsible Manufacturing</span>
            <h2>Management systems, green development and technical recognition.</h2>
            <p className="lead">Huanyu Cable continues to strengthen its manufacturing base through certified management systems, energy-management practices, green and digital manufacturing initiatives, and official technical-development recognition. These credentials support a more structured approach to quality, environmental responsibility, workplace safety, operational improvement and supply-chain management.</p>
            <Link className="text-link" href="/quality#credentials">View Credentials and Certifications <span>→</span></Link>
          </div>
          <div className="responsible-summary">
            {[
              "Quality, Environmental and Safety Management",
              "ISO 50001 Energy Management",
              "Green and Digital Manufacturing Development",
              "Government and Technical Recognition",
            ].map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-muted about-updates-section"><div className="container update-callout"><div><span className="eyebrow">Company Updates</span><h2>Follow Huanyu&apos;s company development.</h2><p>Read selected updates related to manufacturing development, operations and quality responsibility.</p></div><Link className="button" href="/company-updates">View Company Updates</Link></div></section>
      <section className="section cta-simple"><div className="container"><h2>Review Huanyu&apos;s product capability.</h2><Link className="button" href="/products">View Products</Link></div></section>
    </>
  );
}
