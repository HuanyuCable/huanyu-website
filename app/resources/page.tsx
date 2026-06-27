import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technical Resources",
  description: "Request current Huanyu Cable product datasheets, specification review and company catalogue materials.",
  alternates: { canonical: "/resources" },
};

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
          <p>Our technical resource library is being prepared. For a current product datasheet, specification review or company catalogue, please send your requirements to our team.</p>
          <div className="hero-actions">
            <Link className="button" href="/contact">Request Technical Information</Link>
          </div>
        </div>
      </section>
    </>
  );
}
