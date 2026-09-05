import Link from "next/link";
import { buyerGuides } from "@/data/buyerGuides";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Cable Resources | Technical Notes and Company Updates",
  description:
    "Read Huanyu Cable technical resources, product notes and company updates for cable buyers and engineering project teams.",
  path: "/resources",
  image: "/images/site/heroes/resources-hero-manufacturing-development-v2.webp",
  imageAlt: "Huanyu Cable technical resources",
});

export default function ResourcesPage() {
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
          <p>Practical cable selection guides for project buyers, EPC teams and specification reviewers. For a current product datasheet or project-specific review, send your requirements to our team.</p>
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
              <h2>Specification guidance for cable procurement</h2>
            </div>
            <p>Use these short guides to prepare the technical information required for cable selection and quotation review.</p>
          </div>
          <div className="resource-grid">
            {buyerGuides.map((guide) => (
              <article key={guide.slug}>
                <span className="resource-type">Buyer Guide</span>
                <h2>{guide.shortTitle}</h2>
                <p>{guide.excerpt}</p>
                <Link className="text-link" href={`/resources/${guide.slug}`}>Read guide <span>-&gt;</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
