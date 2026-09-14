import Link from "next/link";
import { buyerGuides, type BuyerGuide } from "@/data/buyerGuides";
import { createPageMetadata } from "@/lib/metadata";

const buildingWireGuideSlugs = new Set([
  "bv-vs-bvr-building-wire-guide",
  "building-wire-size-guide",
  "awg-to-mm2-building-wire-guide",
]);

function BuyerGuideCard({ guide, headingLevel = "h2" }: { guide: BuyerGuide; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;

  return (
    <article>
      {guide.tags ? (
        <div className="resource-tags" aria-label="Guide topics">
          {guide.tags.map((tag) => <span className="resource-tag" key={tag}>{tag}</span>)}
        </div>
      ) : (
        <span className="resource-type">Buyer Guide</span>
      )}
      <Heading>{guide.shortTitle}</Heading>
      <p>{guide.excerpt}</p>
      <Link className="text-link" href={`/resources/${guide.slug}`}>Read guide <span>-&gt;</span></Link>
    </article>
  );
}

export const metadata = createPageMetadata({
  title: "Cable Resources | Technical Notes and Company Updates",
  description:
    "Read Huanyu Cable technical resources, product notes and company updates for cable buyers and engineering project teams.",
  path: "/resources",
  image: "/images/site/heroes/resources-hero-manufacturing-development-v2.webp",
  imageAlt: "Huanyu Cable technical resources",
});

export default function ResourcesPage() {
  const generalBuyerGuides = buyerGuides.filter((guide) => !buildingWireGuideSlugs.has(guide.slug));
  const buildingWireGuides = buyerGuides.filter((guide) => buildingWireGuideSlugs.has(guide.slug));

  return (
    <>
      <section
        className="page-hero page-hero-resources"
        style={{
          backgroundImage:
            'linear-gradient(115deg, rgba(4, 20, 33, 0.9), rgba(8, 58, 87, 0.66)), url("/images/site/heroes/resources-hero-manufacturing-development-v2.webp")',
          backgroundPosition: "center 50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <span className="eyebrow light">Resources</span>
          <h1>Technical Resources</h1>
          <p>Practical technical and procurement guides for project buyers, EPC teams and specification reviewers. For product datasheets or project-specific review, send your requirements to our team.</p>
          <div className="hero-actions">
            <Link className="button" href="/contact">Request Technical Information</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Buyer Guides</span>
              <h2>Technical guidance for cable procurement</h2>
            </div>
            <p>Use these guides to prepare cable specifications, RFQs, inspection requirements and project documentation for procurement review.</p>
          </div>
          <div className="resource-grid">
            {generalBuyerGuides.map((guide) => <BuyerGuideCard guide={guide} key={guide.slug} />)}
          </div>

          <section className="building-wire-guide-cluster" aria-labelledby="building-wire-guide-cluster-title">
            <div className="building-wire-guide-cluster-heading">
              <span className="eyebrow">BUILDING WIRE GUIDES</span>
              <h2 id="building-wire-guide-cluster-title">Building Wire Buyer Guides</h2>
              <p>Practical guidance for comparing building-wire constructions, metric conductor sizes and international wire-size specifications before preparing an RFQ.</p>
            </div>
            <div className="resource-grid building-wire-guide-grid">
              {buildingWireGuides.map((guide) => <BuyerGuideCard guide={guide} headingLevel="h3" key={guide.slug} />)}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
