import type { Metadata } from "next";
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
      <section className="section"><div className="container split about-grid"><div><span className="eyebrow">Company position</span><h2>A focused product and project approach</h2></div><div><p className="lead">Rather than presenting an oversized product catalogue, Huanyu organizes its export offering around selected cable families supported by practical manufacturing and order experience.</p></div></div></section>
      <section className="section"><div className="container timeline"><div><strong>1995</strong><span>Company foundation</span></div><div><strong>30+ Years</strong><span>Of industry expertise and focus</span></div></div></section>
      <section className="section section-muted"><div className="container update-callout"><div><span className="eyebrow">Company Updates</span><h2>Follow Huanyu&apos;s company development.</h2><p>Read selected updates related to manufacturing development, operations and quality responsibility.</p></div><Link className="button" href="/company-updates">View Company Updates</Link></div></section>
      <section className="section cta-simple"><div className="container"><h2>Review Huanyu&apos;s product capability.</h2><Link className="button" href="/products">View Products</Link></div></section>
    </>
  );
}
