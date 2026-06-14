import type { Metadata } from "next";

export const metadata: Metadata = { title: "Technical Resources", description: "Technical guides, catalogues and project resources from Huanyu Cable." };

export default function ResourcesPage() {
  return (
    <>
      <section className="page-hero"><div className="container"><span className="eyebrow light">Resources</span><h1>Build a useful technical library, not an AI article warehouse.</h1><p>Each resource should answer a buyer's real selection, specification, testing or installation question.</p></div></section>
      <section className="section"><div className="container resource-grid">
        <article><span className="resource-type">Guide</span><h2>How to Specify a Low Voltage Armoured Cable</h2><p>Planned content: conductor, insulation, armour, sheath, standard, installation and quotation checklist.</p></article>
        <article><span className="resource-type">Guide</span><h2>8.7/15 kV Three-core Cable Selection Checklist</h2><p>Planned content: conductor size, screen, armour, sheath, test and drum requirements.</p></article>
        <article><span className="resource-type">Comparison</span><h2>LSZH, Flame-retardant and Fire-resistant Cable</h2><p>Planned content: definitions, test standards, construction differences and appropriate claims.</p></article>
        <article><span className="resource-type">Download</span><h2>Huanyu Cable Product Catalogue</h2><p>Upload the verified PDF to R2 and replace this placeholder with a direct download.</p></article>
      </div></section>
    </>
  );
}
