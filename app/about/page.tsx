import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About Huanyu Cable", description: "Learn about Huanyu Cable's focused manufacturing position, history and project-oriented approach." };

export default function AboutPage() {
  return (
    <>
      <section className="page-hero"><div className="container"><span className="eyebrow light">About Huanyu</span><h1>Manufacturing experience presented with evidence.</h1><p>The final page should use real factory footage, verified milestones, production data and customer-approved project cases.</p></div></section>
      <section className="section"><div className="container split about-grid"><div><span className="eyebrow">Company position</span><h2>Established in 1995, focused for the next stage of export growth.</h2></div><div><p className="lead">Huanyu Cable is based in Hefei, Anhui, China. The export website is designed to translate the company's strongest manufacturing experience into a clear offer for overseas engineering buyers.</p><p>Rather than presenting an unverified list of every cable type, the site leads with low-voltage armoured, medium-voltage and LSZH / fire-safe products, supported by selected complementary ranges.</p></div></div></section>
      <section className="section section-muted"><div className="container"><div className="section-heading"><div><span className="eyebrow">Evidence library</span><h2>Content required for the final version</h2></div></div><div className="three-column-list"><article><span>01</span><h3>Factory</h3><p>Aerial view, workshops, equipment, production processes and team photographs.</p></article><article><span>02</span><h3>Capability</h3><p>Verified production ranges, equipment list, annual output and testing capability.</p></article><article><span>03</span><h3>Track record</h3><p>Approved project cases showing supplied cable, application, standard and role.</p></article></div></div></section>
      <section className="section"><div className="container timeline"><div><strong>1995</strong><span>Company foundation</span></div><div><strong>Today</strong><span>Three core export product positions</span></div><div><strong>Next</strong><span>Build a technical content and international lead-generation system</span></div></div></section>
      <section className="section cta-simple"><div className="container"><h2>Review Huanyu's product capability.</h2><Link className="button" href="/products">View Products</Link></div></section>
    </>
  );
}
