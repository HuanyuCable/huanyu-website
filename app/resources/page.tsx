import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technical Resources",
  description: "Our technical resource library is being prepared.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <section className="page-hero page-hero-resources">
        <div className="resources-hero-bg" aria-hidden="true" />
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
