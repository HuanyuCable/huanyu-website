import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buyerGuides, getBuyerGuide } from "@/data/buyerGuides";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { createBreadcrumbJsonLd, createTechArticleJsonLd } from "@/lib/structuredData";

export function generateStaticParams() {
  return buyerGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getBuyerGuide(slug);
  if (!guide) return {};

  const title = guide.metaTitle ?? `${guide.shortTitle} | HUANYU CABLE`;
  const url = `${site.url}/resources/${guide.slug}`;

  return {
    title: { absolute: title },
    description: guide.description,
    alternates: { canonical: `/resources/${guide.slug}` },
    openGraph: {
      type: "article",
      title,
      description: guide.description,
      url,
      images: [{
        url: "/images/site/heroes/resources-hero-manufacturing-development-v2.webp",
        alt: "Huanyu Cable technical buyer guides",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: guide.description,
      images: ["/images/site/heroes/resources-hero-manufacturing-development-v2.webp"],
    },
  };
}

function GuideShell({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <article className="buyer-guide">
      <section
        className="page-hero page-hero-resources buyer-guide-hero"
        style={{
          backgroundImage:
            'linear-gradient(115deg, rgba(4, 20, 33, 0.93), rgba(8, 58, 87, 0.72)), url("/images/site/heroes/resources-hero-manufacturing-development-v2.webp")',
          backgroundPosition: "center 50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <Link className="back-link" href="/resources">Back to Resources</Link>
          <span className="eyebrow light">Buyer Guide</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>
      <section className="section">
        <div className="container buyer-guide-layout">{children}</div>
      </section>
    </article>
  );
}

function StaVsSwaGuide() {
  return (
    <GuideShell
      title="STA vs SWA Armoured Cable: Selection Guide for Underground Power Projects"
      description="A practical comparison for project buyers reviewing armour type, installation route and RFQ information."
    >
      <div className="buyer-guide-body">
        <p className="lead">
          STA and SWA are two common armour approaches for power cables, but the correct choice cannot be made from the three-letter abbreviation alone. The installation route, expected mechanical stress, pulling conditions, cable core configuration and project specification all affect the review. This guide explains what to confirm before requesting a quotation for an underground or industrial power cable project.
        </p>

        <h2>What is STA?</h2>
        <p>
          STA means steel tape armour. In a typical armoured power cable, overlapping steel tapes are applied over the bedding or inner sheath before the outer sheath. The armour provides radial mechanical protection against external pressure and impact. STA is commonly reviewed for multicore fixed-installation cables in underground routes, cable trenches and other locations where additional mechanical protection is specified.
        </p>
        <p>
          This does not mean that STA is automatically suitable for every buried route. Soil conditions, duct or trench arrangement, installation method, bending, handling and the governing project specification still need to be checked. Chinese model references such as YJV22 or YJV23 indicate steel tape armoured constructions within their model system; they should be described internationally by the confirmed cable structure rather than treated as overseas certification designations.
        </p>

        <h2>What is SWA?</h2>
        <p>
          SWA means steel wire armour. Steel wires are applied around the cable bedding to provide mechanical protection and, depending on the confirmed design, can provide greater axial tensile capability than steel tape armour in suitable cable designs. SWA is typically considered where installation or pulling conditions create a defined tensile requirement, or where the project specification directly calls for steel wire armour.
        </p>
        <p>
          SWA selection remains subject to the cable design and circuit conditions. Core configuration, conductor material, voltage class, installation method and applicable specification must be reviewed together. A supplier should not replace STA with SWA, or SWA with STA, simply because both are described as armoured cable.
        </p>

        <h2>STA and SWA at a glance</h2>
        <div className="buyer-guide-table-wrap">
          <table className="buyer-guide-table">
            <thead>
              <tr>
                <th>Review point</th>
                <th>STA</th>
                <th>SWA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Armour form</td>
                <td>Overlapping steel tapes</td>
                <td>Steel wires around the cable</td>
              </tr>
              <tr>
                <td>Typical review focus</td>
                <td>Radial mechanical protection for applicable fixed routes</td>
                <td>Mechanical and tensile protection where required by route and design</td>
              </tr>
              <tr>
                <td>Selection basis</td>
                <td colSpan={2}>Installation route, pulling conditions, core configuration and project specification</td>
              </tr>
              <tr>
                <td>Quotation status</td>
                <td colSpan={2}>Final construction is confirmed before quotation; the options are not automatically interchangeable</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Five selection factors to confirm</h2>
        <h3>1. Installation route</h3>
        <p>
          Identify whether the cable will run in a duct, trench, tunnel, tray, direct-burial route or another fixed installation. Note changes along the route, entry points and any exposed sections. The word “underground” is not enough to define the armour because underground routes can impose different handling and mechanical conditions.
        </p>
        <h3>2. Mechanical protection requirement</h3>
        <p>
          State the expected external pressure, impact or other mechanical exposure and follow the project designer’s requirement. STA is typically reviewed for radial protection, while SWA may be reviewed where the design calls for wire armour. The final choice remains subject to the complete cable construction and specification.
        </p>
        <h3>3. Pulling and tensile conditions</h3>
        <p>
          Provide the planned pulling method, route length, bends, elevation changes and any defined tensile requirement. These details help determine whether the proposed armour and overall construction are appropriate. They also affect drum length and installation planning, so they should be shared before the supplier confirms an offer.
        </p>
        <h3>4. Cable core configuration</h3>
        <p>
          Confirm single-core or multicore construction, conductor material, number of cores and cross-section. Armour selection must be reviewed together with the circuit design and applicable requirements. Do not assume that an armour arrangement used on a multicore cable can be transferred unchanged to every single-core circuit.
        </p>
        <h3>5. Project specification</h3>
        <p>
          The BOQ, cable schedule, drawings and technical specification take priority over a generic product description. Confirm voltage rating, applicable standard, insulation, bedding, armour, sheath, fire-performance requirement, tests and documents. If documents conflict, highlight the discrepancy rather than asking the supplier to guess.
        </p>

        <h2>Quotation and RFQ checklist</h2>
        <ul className="buyer-guide-checklist">
          <li>System voltage and required cable voltage rating</li>
          <li>Single-core or multicore configuration</li>
          <li>Copper or aluminium conductor and cross-section</li>
          <li>Insulation, bedding and outer sheath requirement</li>
          <li>Required armour: STA, SWA or supplier review against the route</li>
          <li>Installation route, burial or duct details and pulling conditions</li>
          <li>Applicable standard and project specification</li>
          <li>Required tests, inspection and document scope</li>
          <li>Quantity, drum length, delivery destination and schedule</li>
        </ul>

        <div className="buyer-guide-related">
          <h2>Related product pages</h2>
          <p>
            Review Huanyu Cable’s <Link href="/products/low-voltage-armoured-power-cables">Low Voltage Armoured Power Cables</Link> for STA and SWA project options, or the <Link href="/products/medium-voltage-xlpe-power-cables">Medium Voltage Power Cables</Link> page for screened XLPE constructions up to 35 kV. Available designs are confirmed against the submitted specification before quotation.
          </p>
        </div>
      </div>

      <div className="update-article-cta buyer-guide-cta">
        <h2>Send BOQ / Specification</h2>
        <p>Send the cable schedule, installation route, armour requirement, quantity and required document scope for a project-specific quotation review.</p>
        <Link className="button" href="/contact" data-ga-event="rfq_click" data-ga-cta-location="buyer_guide_cta">Send BOQ / Specification</Link>
      </div>
    </GuideShell>
  );
}

function MediumVoltageSelectionGuide() {
  return (
    <GuideShell
      title="Medium Voltage XLPE Cable Selection Guide: Voltage Rating, Armour and IEC 60502-2"
      description="A practical RFQ checklist for EPC teams, project buyers and specification reviewers sourcing MV XLPE cable up to 35 kV."
    >
      <div className="buyer-guide-body">
        <p className="lead">
          A medium voltage cable inquiry needs more than conductor size and total length. Voltage class, core configuration, conductor material, screen design, armour, sheath, installation route, testing and documentation must be reviewed as one cable design. The following sequence helps EPC and procurement teams prepare a clear RFQ for medium voltage XLPE power cables from 3.6/6 kV to 35 kV.
        </p>

        <h2>1. Identify the system voltage and cable voltage class</h2>
        <p>
          Start with the system nominal voltage, maximum system voltage where specified, earthing arrangement and the cable voltage designation required by the project. Common project classes can include 3.6/6 kV, 6/10 kV, 8.7/15 kV, 12/20 kV, 18/30 kV, 21/35 kV and 26/35 kV, but these designations are not automatically interchangeable. The cable rating must follow the confirmed system and project specification.
        </p>
        <p>
          IEC 60502-2 is commonly referenced for medium-voltage power cable project specifications within its applicable scope. IEC 60502-2-based project requirements can be reviewed against the confirmed cable design, testing scope and documentation requirements. This is a specification-review statement, not a certification claim.
        </p>

        <h2>2. Confirm single-core or three-core construction</h2>
        <p>
          State whether the circuit requires single-core or three-core cable. The decision affects the physical construction, installation arrangement, armour review, drum planning and accessories. Provide the cable schedule or single-line diagram where available. If the BOQ and technical specification show different core configurations, resolve the conflict before the quotation is finalized.
        </p>

        <h2>3. Select copper or aluminium conductor</h2>
        <p>
          Copper and aluminium conductor options can be reviewed, depending on the project requirement. Confirm the required material explicitly and consider the project’s termination design, size, installation constraints and commercial evaluation. A quotation should not substitute one conductor material for the other without an agreed technical and commercial review.
        </p>

        <h2>4. Confirm conductor cross-section</h2>
        <p>
          Provide the specified nominal cross-section for each circuit. Cable sizing is normally determined by the project designer using load, voltage drop, short-circuit, installation and derating criteria. Huanyu Cable can review the requested construction for quotation, but unconfirmed project calculations should not be replaced by a generic size recommendation.
        </p>

        <h2>5. Define conductor, insulation and metallic screens</h2>
        <p>
          A screened MV XLPE cable typically includes a conductor screen, XLPE insulation, an insulation screen and a metallic screen. Confirm the metallic screen form and required area, such as a specified copper tape or other project-defined arrangement. Screen design influences the cable construction and must match the system, fault-current study, accessories and specification. Do not submit only “XLPE cable” if the screen details are stated elsewhere in the project documents.
        </p>

        <h2>6. Review unarmoured, STA or SWA construction</h2>
        <p>
          Unarmoured cable may be reviewed for protected routes. Steel tape armour, or STA, is typically considered for applicable multicore designs requiring radial mechanical protection. Steel wire armour, or SWA, may be reviewed where the route and specification require wire armour or defined mechanical and tensile protection. The choice depends on installation route, pulling conditions, core configuration and circuit design; the three options should not be treated as automatic substitutes.
        </p>
        <p>
          For a focused comparison of the two armour approaches, see the <Link href="/resources/sta-vs-swa-armoured-cable-guide">STA vs SWA Armoured Cable guide</Link>. Huanyu’s <Link href="/products/low-voltage-armoured-power-cables">Low Voltage Armoured Power Cables</Link> page is relevant only when the project package also includes LV armoured circuits.
        </p>

        <h2>7. Confirm PVC, PE or project-specific sheath requirements</h2>
        <p>
          Specify the outer sheath material, colour, marking and any route-specific environmental requirement. PVC and PE sheath options are reviewed according to the cable design and project conditions. If the route requires low-smoke, flame-retardant or fire-resistant performance, define each requirement separately rather than using “fire-safe” as a substitute for a test scope. The <Link href="/products/lszh-fire-safe-cables">LSZH &amp; Fire-safe Cables</Link> page explains these distinctions and the information required for review.
        </p>

        <h2>8. Describe the installation route</h2>
        <p>
          Identify ducts, trenches, tunnels, trays, direct-burial sections, substation entries, vertical runs and changes along the route. Include planned pulling conditions and relevant environmental information. Route details support the review of armour, sheath, cable dimensions, drum length and handling requirements. A single route label rarely provides enough information for final construction confirmation.
        </p>

        <h2>9. Confirm standards, testing and document scope</h2>
        <p>
          List the applicable standard and any project-specific additions. State the required routine, sample or type-test evidence, inspection arrangement, test reports, drawings, data sheets, packing records and marking requirements. Third-party inspection or testing can be discussed when specified, but the organization, witness scope, acceptance criteria, timing and cost responsibility should be confirmed before quotation.
        </p>
        <p>
          Huanyu Cable reviews IEC 60502-2-based, applicable GB/T or project-specific requirements against the confirmed cable design. Final testing and document commitments should appear in the quotation or agreed technical file; a general reference to a standard should not be read as an unverified product certification.
        </p>

        <h2>BOQ and RFQ checklist</h2>
        <ul className="buyer-guide-checklist">
          <li>System voltage, cable voltage designation and earthing information where specified</li>
          <li>Single-core or three-core construction</li>
          <li>Copper or aluminium conductor and nominal cross-section</li>
          <li>Conductor screen, insulation screen and metallic screen design</li>
          <li>Unarmoured, STA or SWA requirement</li>
          <li>PVC, PE or project-specific sheath and fire-performance requirements</li>
          <li>Installation route and pulling conditions</li>
          <li>Applicable standard, testing, inspection and document scope</li>
          <li>Cable quantity, drum length, destination and required schedule</li>
        </ul>

        <div className="buyer-guide-related">
          <h2>Review the medium voltage product range</h2>
          <p>
            See <Link href="/products/medium-voltage-xlpe-power-cables">Medium Voltage XLPE Power Cables</Link> for representative voltage classes, conductor and screen layers, unarmoured, STA and SWA options, applications and the project inquiry route. Final availability remains subject to the confirmed specification.
          </p>
        </div>
      </div>

      <div className="update-article-cta buyer-guide-cta">
        <h2>Send BOQ / Specification</h2>
        <p>Share the cable schedule, technical specification, route, testing scope, quantity and document requirements for a specification-based quotation review.</p>
        <Link className="button" href="/contact" data-ga-event="rfq_click" data-ga-cta-location="buyer_guide_cta">Send BOQ / Specification</Link>
      </div>
    </GuideShell>
  );
}

function Mv35KvRfqGuide() {
  return (
    <GuideShell
      title="What We Check When an MV Cable RFQ Only Says “35 kV”"
      description="A practical quotation-readiness checklist for EPC teams, contractors and project buyers preparing a medium-voltage cable RFQ."
    >
      <div className="buyer-guide-body">
        <h2>“35 kV cable” is a starting point — not a quotation-ready specification</h2>
        <p className="lead">
          “35 kV cable” identifies the general voltage class, but it does not define the complete cable construction, test scope, packing requirement or commercial basis needed for an accurate quotation.
        </p>
        <p>
          Before preparing a quotation, we review the initial inquiry against a technical and commercial checklist and confirm any missing items with the buyer. Our quotation review focuses on turning the initial request into a complete technical and commercial checklist. For broader cable-selection and specification guidance, use the <Link href="/resources/medium-voltage-xlpe-cable-selection-guide">Medium Voltage XLPE Cable Selection Guide</Link>; this page focuses specifically on whether an inquiry is ready for quotation.
        </p>

        <h2>What can be reviewed immediately — and what still needs clarification?</h2>
        <div className="buyer-guide-table-wrap">
          <table className="buyer-guide-table rfq-stacked-table">
            <thead>
              <tr>
                <th>RFQ information received</th>
                <th>Can technical review start?</th>
                <th>Ready for final quotation?</th>
                <th>What still needs clarification?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="RFQ information received">“35 kV cable” only</td>
                <td data-label="Can technical review start?">Yes, very preliminary</td>
                <td data-label="Ready for final quotation?">No</td>
                <td data-label="What still needs clarification?">Full cable designation and construction</td>
              </tr>
              <tr>
                <td data-label="RFQ information received">“35 kV, XLPE, 3×300 mm²”</td>
                <td data-label="Can technical review start?">Yes</td>
                <td data-label="Ready for final quotation?">Usually no</td>
                <td data-label="What still needs clarification?">Voltage designation, screen, armour, sheath, standard, quantity and drum requirements</td>
              </tr>
              <tr>
                <td data-label="RFQ information received">Full cable schedule and quantity</td>
                <td data-label="Can technical review start?">Yes</td>
                <td data-label="Ready for final quotation?">Usually close</td>
                <td data-label="What still needs clarification?">Tests, documents, packing, destination and delivery</td>
              </tr>
              <tr>
                <td data-label="RFQ information received">Approved technical specification and BOQ</td>
                <td data-label="Can technical review start?">Yes</td>
                <td data-label="Ready for final quotation?">Usually, subject to final commercial details</td>
                <td data-label="What still needs clarification?">Commercial terms and final document scope</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>1. Confirm the exact voltage designation</h2>
        <p>
          Provide the project or system voltage information and the required cable voltage designation. Include the maximum system voltage, or Um, when it is stated in the project specification. Common project designations can include 21/35 kV and 26/35 kV, but they should not be treated as interchangeable without checking the project specification.
        </p>
        <p>
          Do not select the cable designation from the words “35 kV” alone. If the BOQ, single-line diagram and technical specification use different voltage expressions, the discrepancy needs to be resolved before the offer is finalized.
        </p>

        <h2>2. Confirm conductor, cores and cross-section</h2>
        <div className="buyer-guide-table-wrap">
          <table className="buyer-guide-table rfq-stacked-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Typical information to confirm</th>
                <th>Why it matters to quotation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Item">Conductor</td>
                <td data-label="Typical information to confirm">Copper / aluminium</td>
                <td data-label="Why it matters to quotation">Material and cable construction</td>
              </tr>
              <tr>
                <td data-label="Item">Core configuration</td>
                <td data-label="Typical information to confirm">Single-core / three-core</td>
                <td data-label="Why it matters to quotation">Construction, armour and installation</td>
              </tr>
              <tr>
                <td data-label="Item">Cross-section</td>
                <td data-label="Typical information to confirm">Project-specified mm²</td>
                <td data-label="Why it matters to quotation">Dimensions, material and design basis</td>
              </tr>
              <tr>
                <td data-label="Item">Conductor requirement</td>
                <td data-label="Typical information to confirm">According to the agreed standard</td>
                <td data-label="Why it matters to quotation">Avoid assumptions</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>3. Confirm screen construction — not just “copper screen”</h2>
        <p>
          “Copper screen” may still be incomplete. A project may also define the screen construction, cross-sectional area or fault-current requirement. Confirm the conductor screen, insulation screen and metallic screen information stated in the project documents.
        </p>
        <p>
          Copper tape and copper wire are examples of metallic-screen forms, not defaults for every inquiry. If a specific metallic-screen area or short-circuit duty is required, include the project design basis or specified value so it can be reflected correctly in the quotation.
        </p>

        <h2>4. Confirm armour based on project construction</h2>
        <p>
          State whether the cable is armoured or unarmoured and describe the route or installation context. STA and SWA can be considered as project-dependent examples, but neither should be selected from the voltage class alone. Single-core armour may require special attention because electromagnetic considerations depend on the circuit arrangement, armour material and applicable specification.
        </p>
        <p>
          Use the <Link href="/resources/sta-vs-swa-armoured-cable-guide">STA vs SWA Armoured Cable Selection Guide</Link> to prepare route, mechanical-protection and pulling information. Final armour selection should follow the approved project specification and installation requirements.
        </p>

        <h2>5. Confirm sheath and special performance requirements</h2>
        <p>
          Confirm the required outer sheath, including PVC or PE where applicable. If flame-retardant, low-smoke halogen-free (LSZH), fire-resistant, water-blocking, colour or special marking requirements apply, state them explicitly in the RFQ. These requirements should come from the project specification rather than being assumed from the voltage class.
        </p>

        <h2>6. Confirm standard, tests and document scope</h2>
        <p>
          State the governing standard and the exact voltage designation. IEC 60502-2 applies within its specified voltage scope, while GB/T 12706.3 covers 35 kV (Um = 40.5 kV) cable ratings such as 21/35(40.5) kV and 26/35(40.5) kV where applicable. Project-specific requirements should be reviewed separately.
        </p>
        <p>
          Product standards, certificates, test reports and inspection documents should be listed separately in the RFQ so that each requirement can be reviewed against the correct basis.
        </p>
        <p>
          List the required routine test report, datasheet, drawings, inspection and document list. If third-party inspection is contractually required, identify the expected witness scope, acceptance basis and document requirements. The final test and document scope should follow the agreed project specification and purchase requirements.
        </p>

        <h2>7. Confirm quantity, drum length and destination</h2>
        <p>
          Provide the total quantity, requested continuous length, preferred drum length, destination, delivery schedule and packing requirement. Include shipping or handling constraints when they are available, especially where drum dimensions, weight or route access may affect the proposed arrangement.
        </p>
        <p>
          Even with a technically complete cable construction, quotation still depends on quantity, drum arrangement, destination and delivery requirements.
        </p>

        <h2>Five RFQ gaps that can delay final quotation</h2>
        <ol className="buyer-guide-blockers">
          <li>Voltage class is given, but there is no exact cable designation.</li>
          <li>“Copper screen” is stated, but the screen construction or area is missing.</li>
          <li>The armour requirement is not defined.</li>
          <li>Total quantity is given, but the preferred or required drum length is not stated.</li>
          <li>A technical specification is provided, but the test or document scope is missing.</li>
        </ol>

        <h2>RFQ before and after</h2>
        <div className="buyer-guide-related">
          <span className="eyebrow">Illustrative RFQ example</span>
          <h3>Incomplete RFQ</h3>
          <p>35 kV XLPE cable, 3 × 300 mm², 2,000 m. Please quote.</p>
          <h3>Quotation-ready checklist</h3>
          <ul>
            <li>Required cable voltage designation: [confirm]</li>
            <li>Conductor: [Cu / Al]</li>
            <li>Core configuration: [confirm]</li>
            <li>Cross-section: 300 mm²</li>
            <li>Insulation: XLPE</li>
            <li>Screen construction / area: [confirm]</li>
            <li>Armour: [confirm]</li>
            <li>Outer sheath: [confirm]</li>
            <li>Standard: [confirm]</li>
            <li>Total quantity: 2,000 m</li>
            <li>Drum length: [confirm]</li>
            <li>Destination: [confirm]</li>
            <li>Testing / documentation: [confirm]</li>
            <li>Required delivery date: [confirm]</li>
          </ul>
          <p>
            Example values are shown only to illustrate the information structure used for quotation review. Final requirements should follow the buyer’s approved specification.
          </p>
        </div>

        <h2>35 kV RFQ quotation-readiness checklist</h2>
        <ul className="buyer-guide-checklist">
          <li>☐ Exact cable voltage designation</li>
          <li>☐ Applicable project standard</li>
          <li>☐ Copper or aluminium conductor</li>
          <li>☐ Single-core or three-core</li>
          <li>☐ Cross-section</li>
          <li>☐ Screen construction / area</li>
          <li>☐ Armour requirement</li>
          <li>☐ Outer sheath / special performance</li>
          <li>☐ Total quantity</li>
          <li>☐ Drum length</li>
          <li>☐ Destination</li>
          <li>☐ Testing and inspection</li>
          <li>☐ Documentation</li>
          <li>☐ Required delivery date</li>
        </ul>

        <div className="buyer-guide-related">
          <h2>Related technical pages</h2>
          <p>
            Review the <Link href="/products/medium-voltage-xlpe-power-cables">Medium Voltage XLPE Power Cables</Link> page for representative constructions, or return to the <Link href="/resources/medium-voltage-xlpe-cable-selection-guide">comprehensive MV cable selection guide</Link> when the cable design itself is still being prepared. Final cable construction should follow the approved project specification.
          </p>
        </div>
      </div>

      <div className="update-article-cta buyer-guide-cta">
        <h2>Is your 35 kV cable BOQ still missing technical details?</h2>
        <p>Send the BOQ, cable schedule or project specification. We can review the missing construction, test, documentation and packing items before preparing a quotation.</p>
        <div className="hero-actions">
          <Link className="button" href="/contact" data-ga-event="rfq_click" data-ga-cta-location="buyer_guide_cta" data-ga-product-slug="medium-voltage-xlpe-power-cables">Send Project Requirements</Link>
          <Link className="button" href="/products/medium-voltage-xlpe-power-cables">View Medium Voltage Cables</Link>
        </div>
      </div>
    </GuideShell>
  );
}

function EpcDocumentsBeforeShipmentGuide() {
  return (
    <GuideShell
      title="What Cable Documents Should an EPC Buyer Request Before Shipment?"
      description="A practical document and inspection checklist for EPC contractors, project buyers and engineering procurement teams reviewing power cable orders before shipment."
    >
      <div className="buyer-guide-body">
        <p className="lead">
          Before shipment, EPC buyers should confirm not only the cable datasheet and routine test report, but also the agreed inspection records, drum schedule, packing information, marking details and any project-specific certificate or third-party inspection requirements.
        </p>
        <p>
          The exact document package should be defined by the purchase order, approved technical specification and inspection plan. A generic “certificate package” is not a substitute for a project-specific document list.
        </p>

        <h2>Four document groups to confirm before shipment</h2>
        <ol className="buyer-guide-blockers">
          <li><strong>Technical approval documents</strong><br />Approved datasheet, cable construction and technical data, plus the cable schedule or item reference where applicable.</li>
          <li><strong>Test and inspection documents</strong><br />Routine test report, agreed inspection records, witness or hold-point records if required, and a third-party inspection report only when contractually required.</li>
          <li><strong>Packing and drum documents</strong><br />Drum schedule, drum number and length, packing list, weights where applicable, and agreed shipping marks.</li>
          <li><strong>Compliance and project documents</strong><br />Certificates explicitly required by the order, agreed declarations or project forms, and country- or project-specific documents only when included in the contract scope.</li>
        </ol>

        <h2>1. Approved technical datasheet</h2>
        <p>
          The approved datasheet should identify the ordered cable construction, rather than only describing a generic product family. Confirm the cable designation, rated voltage, conductor material, number of cores and cross-section, insulation, screen, armour, sheath, applicable standard, marking and any special performance requirement stated in the order.
        </p>
        <p>
          Buyers can compare the approved information with the relevant <Link href="/products/medium-voltage-xlpe-power-cables">Medium Voltage XLPE Power Cables</Link> or <Link href="/products/low-voltage-xlpe-power-cables">Low Voltage XLPE Power Cables</Link> product family, while the final construction remains subject to the approved project specification and order.
        </p>

        <h2>2. Routine test report</h2>
        <p>
          A routine test report should relate to the ordered product and be traceable to the cable item, production batch or other identification used by the agreed project document system. The test scope and acceptance basis should follow the applicable standard and approved technical specification.
        </p>
        <p>
          Report format, identification fields and submission requirements may vary by project and should be agreed through the document register or inspection plan.
        </p>

        <h2>3. Inspection and witness records</h2>
        <p>
          Inspection may be performed by the factory, the buyer or an appointed third party according to the agreed inspection and test plan. Where the project defines witness points, hold points or a release note, the responsible party and required record should be identified before production and shipment.
        </p>
        <p>
          Third-party inspection, where required, should be defined in the inspection and test plan, purchase order or project specification.
        </p>

        <h2>4. Drum schedule and cable-length records</h2>
        <p>
          A project drum schedule can identify the drum number, cable item, length, drum count, continuous-length requirement, packing reference and destination or site reference where required. The exact fields should align with the buyer’s receiving, storage and installation process.
        </p>
        <p>
          For project cable orders, the drum schedule is often the bridge between the BOQ, production packing and site receiving process.
        </p>

        <h2>5. Packing list and shipping marks</h2>
        <p>
          The packing list should identify the cable and drum information needed to check the dispatch against the order. Shipping marks, handling marks and consignee or destination references should follow the agreed packing and shipping instruction.
        </p>
        <p>
          Commercial shipping documents are handled according to the agreed trade and logistics terms, while this checklist focuses on cable-specific technical and packing records.
        </p>

        <h2>6. Certificates and compliance documents</h2>
        <h3>Company-level documents</h3>
        <p>
          Company management-system documents describe the certified management-system scope shown on the relevant certificate. Review the <Link href="/quality">Quality &amp; Testing</Link> page and, where requested, the <Link href="/quality/credentials/management-systems">Management Systems</Link> records as company-level information.
        </p>
        <h3>Product- or order-level documents</h3>
        <p>
          Product certificates, declarations and project forms should be checked against the exact cable item, standard, scope and order requirement. The <Link href="/quality/credentials/product-compliance">Product Compliance</Link> page summarizes the product-related credentials currently published by Huanyu and their stated scope.
        </p>
        <p>
          A company management-system certificate should not be treated as proof that every cable item carries the same product certification.
        </p>

        <h2>7. Define the project-specific document list</h2>
        <p>
          The final submission package should be assembled from the documents that govern the order. Aligning these sources before production helps the buyer, supplier and inspection parties work from the same document obligations.
        </p>
        <div className="buyer-guide-table-wrap">
          <table className="buyer-guide-table rfq-stacked-table">
            <thead>
              <tr><th>Project document</th><th>What it defines</th></tr>
            </thead>
            <tbody>
              <tr><td data-label="Project document">Purchase order</td><td data-label="What it defines">Commercial/order document obligations</td></tr>
              <tr><td data-label="Project document">Approved technical specification</td><td data-label="What it defines">Cable construction and technical requirements</td></tr>
              <tr><td data-label="Project document">ITP / inspection plan</td><td data-label="What it defines">Inspection, witness and hold points</td></tr>
              <tr><td data-label="Project document">Document register</td><td data-label="What it defines">Required submissions and approval status</td></tr>
              <tr><td data-label="Project document">Packing / shipping instruction</td><td data-label="What it defines">Drum, marking and dispatch records</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Document readiness matrix</h2>
        <div className="buyer-guide-table-wrap">
          <table className="buyer-guide-table rfq-stacked-table">
            <thead>
              <tr><th>Document</th><th>Define requirement before order</th><th>Verify before shipment</th><th>Include in final package</th></tr>
            </thead>
            <tbody>
              <tr><td data-label="Document">Approved datasheet</td><td data-label="Define requirement before order">Yes</td><td data-label="Verify before shipment">Yes</td><td data-label="Include in final package">As required</td></tr>
              <tr><td data-label="Document">Routine test report</td><td data-label="Define requirement before order">Yes</td><td data-label="Verify before shipment">Yes</td><td data-label="Include in final package">As required by PO / specification</td></tr>
              <tr><td data-label="Document">Inspection record</td><td data-label="Define requirement before order">If required</td><td data-label="Verify before shipment">If required</td><td data-label="Include in final package">If required</td></tr>
              <tr><td data-label="Document">Third-party inspection report</td><td data-label="Define requirement before order">Only if required</td><td data-label="Verify before shipment">Only if required</td><td data-label="Include in final package">Only if required</td></tr>
              <tr><td data-label="Document">Drum schedule</td><td data-label="Define requirement before order">Often</td><td data-label="Verify before shipment">Yes</td><td data-label="Include in final package">As required</td></tr>
              <tr><td data-label="Document">Packing list</td><td data-label="Define requirement before order">Yes</td><td data-label="Verify before shipment">Yes</td><td data-label="Include in final package">Yes</td></tr>
              <tr><td data-label="Document">Product certificate</td><td data-label="Define requirement before order">Only if applicable / required</td><td data-label="Verify before shipment">If required</td><td data-label="Include in final package">If required</td></tr>
              <tr><td data-label="Document">Management system certificate</td><td data-label="Define requirement before order">Company-level</td><td data-label="Verify before shipment">Usually no</td><td data-label="Include in final package">If requested</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Five document gaps that can delay shipment approval</h2>
        <ol className="buyer-guide-blockers">
          <li>The approved cable datasheet does not clearly match the ordered item or latest technical revision.</li>
          <li>The routine test report cannot be traced to the cable item or agreed production identification.</li>
          <li>A witness, hold point or third-party inspection requirement was raised without an agreed inspection plan.</li>
          <li>The drum schedule does not align with the ordered quantities, cable lengths or site receiving references.</li>
          <li>A generic certificate package is submitted without checking the product- and project-specific document register.</li>
        </ol>

        <div className="buyer-guide-related">
          <span className="eyebrow">ILLUSTRATIVE DOCUMENT CHECKLIST</span>
          <h3>Technical</h3>
          <ul><li>Approved cable datasheet</li><li>Construction and technical data</li><li>Cable schedule / item reference, where applicable</li></ul>
          <h3>Testing / Inspection</h3>
          <ul><li>Routine test report</li><li>Agreed inspection or witness records</li><li>Third-party report, only if contractually required</li></ul>
          <h3>Packing</h3>
          <ul><li>Drum schedule and cable-length records</li><li>Packing list</li><li>Agreed shipping and handling marks</li></ul>
          <h3>Compliance</h3>
          <ul><li>Applicable product certificate or declaration</li><li>Project-specific forms and records</li><li>Company-level certificate only if requested</li></ul>
          <p>
            This is an example document structure only. The final submission list should follow the project purchase order, approved specification and document register.
          </p>
        </div>

        <h2>Cable shipment document checklist for EPC buyers</h2>
        <ul className="buyer-guide-checklist">
          <li>☐ Approved datasheet matches the ordered cable item</li>
          <li>☐ Cable designation and voltage rating are confirmed</li>
          <li>☐ Conductor, cores, cross-section and construction are confirmed</li>
          <li>☐ Applicable standard and special performance requirements are listed</li>
          <li>☐ Routine test report scope and traceability are confirmed</li>
          <li>☐ Inspection, witness and hold points follow the agreed ITP</li>
          <li>☐ Third-party inspection is included only when required</li>
          <li>☐ Drum numbers, lengths and quantities align with the order</li>
          <li>☐ Packing list and shipping marks follow the agreed instruction</li>
          <li>☐ Product certificates are applicable to the specified item and scope</li>
          <li>☐ Company-level and product-level credentials are kept separate</li>
          <li>☐ Final submissions match the document register and approval status</li>
        </ul>
      </div>

      <div className="update-article-cta buyer-guide-cta">
        <h2>Need to define the document package before placing a cable order?</h2>
        <p>Send the BOQ, project specification, ITP or document list together with the cable requirements. We can review which technical, test, inspection and packing documents need to be included in the quotation and order scope.</p>
        <div className="hero-actions">
          <Link className="button" href="/contact" data-ga-event="rfq_click" data-ga-cta-location="buyer_guide_cta">Send Project Requirements</Link>
          <Link className="button" href="/quality">View Quality &amp; Testing</Link>
        </div>
      </div>
    </GuideShell>
  );
}

function LowVoltageXlpeRfqChecklistGuide() {
  return (
    <GuideShell
      title="Low Voltage XLPE Cable RFQ Checklist for 0.6/1 kV Projects"
      description="A practical checklist for confirming the cable construction and quotation information required for a 0.6/1 kV XLPE power cable enquiry."
    >
      <div className="buyer-guide-body">
        <p className="lead">
          A request for “0.6/1 kV XLPE power cable” is usually not enough for an accurate quotation. Before pricing can be confirmed, the cable construction should be defined together with the conductor material, number of cores, conductor cross-section, armour requirement, outer sheath, applicable standard or project specification, quantity and delivery information.
        </p>
        <p>
          Huanyu Cable reviews low-voltage cable enquiries against the submitted project specification and BOQ. Where information is incomplete, the final cable construction should be confirmed before quotation or order confirmation.
        </p>

        <h2>Quick answer</h2>
        <p>
          Before requesting a quotation for a low-voltage XLPE power cable, buyers should normally confirm the system voltage, conductor material, number of cores, conductor size, armour requirement, sheath material, applicable standard or project specification, total quantity and delivery destination.
        </p>

        <h2>1. Confirm the voltage class</h2>
        <p>
          For this product range, the typical project reference is 0.6/1 kV low-voltage power distribution. The cable voltage designation should follow the project document, cable schedule or technical specification.
        </p>
        <p>
          If different voltage descriptions appear in the BOQ and technical specification, the discrepancy should be clarified before the cable construction is finalized.
        </p>

        <h2>2. Confirm copper or aluminium conductor</h2>
        <p>
          Copper and aluminium conductor options can both be reviewed depending on the project requirement. The conductor material should be stated clearly in the RFQ because it affects cable construction, dimensions, weight, termination arrangement and commercial comparison.
        </p>
        <p>
          A quotation should not automatically substitute aluminium for copper, or copper for aluminium, unless the project buyer accepts the alternative.
        </p>

        <h2>3. Confirm number of cores and conductor cross-section</h2>
        <p>
          The RFQ should state the required number of cores and nominal conductor cross-section for each cable item. Common project configurations may include single-core and multicore designs, but the final construction should follow the cable schedule and project specification.
        </p>
        <p>
          Where several cable sizes are required, each size should be listed separately with its corresponding quantity.
        </p>

        <h2>4. Confirm unarmoured or armoured construction</h2>
        <p>
          Unarmoured XLPE power cables are commonly reviewed for protected installation routes. Where additional mechanical protection is required, an armoured construction may be specified.
        </p>
        <p>
          Steel tape armour, or STA, is one common armoured construction for applicable multicore low-voltage power cables. Steel wire armour, or SWA, should not be treated as an automatic substitute for STA. Armour selection should follow the installation route, cable construction and project specification. For a focused comparison, review the <Link href="/resources/sta-vs-swa-armoured-cable-guide">STA vs SWA Armoured Cable guide</Link>.
        </p>

        <h2>5. Confirm PVC, PE or project-specific sheath</h2>
        <p>
          The outer sheath material should be stated in the project specification. PVC and PE sheath options can be reviewed for suitable cable constructions, while other sheath or fire-performance requirements should be confirmed separately.
        </p>
        <p>
          LSZH, flame-retardant and fire-resistant requirements should not be assumed simply from the term “XLPE power cable”.
        </p>

        <h2>6. Confirm standards, testing and documentation</h2>
        <p>
          IEC 60502-1 is commonly referenced for low-voltage power cables within its applicable scope. Applicable GB/T requirements or project-specific specifications may also be reviewed when required.
        </p>
        <p>
          The buyer should clearly state the required standard, routine or type-test documentation, inspection requirements, cable data sheets, drawings, packing documents and any project-specific approval procedure.
        </p>
        <p>
          A reference to a standard should not be interpreted as a certification claim. Certification status should be confirmed separately where certification is required.
        </p>

        <h2>7. Quantity, packing and delivery information</h2>
        <p>
          For quotation preparation, provide the total cable length for each item, preferred drum or packing length where applicable, destination country or port and required delivery schedule.
        </p>
        <p>
          Packing arrangements should be confirmed together with the final cable size and order quantity rather than assumed from a generic product listing.
        </p>

        <h2>Low Voltage XLPE Cable RFQ Checklist</h2>
        <ul className="buyer-guide-checklist">
          <li>Rated / system voltage</li>
          <li>Copper or aluminium conductor</li>
          <li>Number of cores</li>
          <li>Conductor cross-section</li>
          <li>Unarmoured / armour requirement</li>
          <li>PVC / PE / specified sheath</li>
          <li>Applicable standard / specification</li>
          <li>Required testing / documents</li>
          <li>Quantity and packing</li>
          <li>Destination and schedule</li>
        </ul>

        <div className="buyer-guide-related">
          <h2>Related product pages</h2>
          <p>
            Review <Link href="/products/low-voltage-xlpe-power-cables">Low Voltage XLPE Power Cables</Link> for the general low-voltage family, <Link href="/products/low-voltage-armoured-power-cables">Low Voltage Armoured Power Cables</Link> for project-specified armoured constructions, and the <Link href="/resources/sta-vs-swa-armoured-cable-guide">STA vs SWA Armoured Cable guide</Link> for armour selection factors. To request a project review, use the <Link href="/contact">Contact / RFQ</Link> page.
          </p>
        </div>
      </div>

      <div className="update-article-cta buyer-guide-cta">
        <h2>Send Your LV Cable BOQ / Specification</h2>
        <p>Provide the cable schedule, conductor requirement, armour and sheath requirement, applicable standard, quantity and project documents for review before quotation.</p>
        <Link className="button" href="/contact" data-ga-event="rfq_click" data-ga-cta-location="buyer_guide_cta" data-ga-product-slug="low-voltage-xlpe-power-cables">Send LV Cable Requirements</Link>
      </div>
    </GuideShell>
  );
}

function LszhFlameFireComparisonGuide() {
  return (
    <GuideShell
      title="LSZH vs Flame-Retardant vs Fire-Resistant Cable: What Project Buyers Should Specify"
      description="A practical procurement guide for identifying separate LSZH, flame-retardant and fire-resistant cable requirements before quotation."
    >
      <div className="buyer-guide-body">
        <p className="lead">
          LSZH, flame-retardant and fire-resistant are often used together in cable project enquiries, but they do not describe the same performance requirement.
        </p>
        <p>
          A project may require one, two or all three characteristics depending on the installation environment and technical specification. Before quotation, each requirement should therefore be identified separately together with the applicable test method, cable construction and project documentation.
        </p>

        <h2>Quick answer</h2>
        <div className="buyer-guide-table-wrap">
          <table className="buyer-guide-table">
            <thead>
              <tr>
                <th>Requirement</th>
                <th>Main focus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LSZH / LSOH</td>
                <td>Smoke and halogen-related performance</td>
              </tr>
              <tr>
                <td>Flame-retardant</td>
                <td>Limiting flame propagation</td>
              </tr>
              <tr>
                <td>Fire-resistant</td>
                <td>Maintaining circuit integrity under specified fire-test conditions</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>These terms are related to fire performance, but they are not interchangeable.</p>

        <>
          <h2>1. What does LSZH mean?</h2>
          <p>
            LSZH generally refers to cable constructions designed to meet low-smoke and halogen-free material requirements under the applicable project and test criteria.
          </p>
          <p>
            For project buyers, the important point is that “LSZH” should not be treated as a complete cable specification. The cable voltage, conductor, insulation, sheath, armour and required fire-performance tests still need to be confirmed.
          </p>
          <p>
            Huanyu Cable’s LSZH-related pages describe finished cable products and project-specific cable review. They are not raw LSZH compound supply pages.
          </p>
        </>

        <>
          <h2>2. What does flame-retardant mean?</h2>
          <p>
            Flame-retardant requirements focus on limiting the propagation of flame when cables are exposed to defined fire-test conditions.
          </p>
          <p>
            A flame-retardant cable is not automatically an LSZH cable, and flame-retardant performance alone does not mean that the cable will maintain circuit operation during a fire.
          </p>
          <p>
            The applicable flame test and project requirement should therefore be stated in the RFQ.
          </p>
        </>

        <>
          <h2>3. What does fire-resistant mean?</h2>
          <p>
            Fire-resistant cable requirements focus on maintaining circuit integrity for a defined period under specified fire-test conditions.
          </p>
          <p>
            The required construction depends on the cable type, voltage class, circuit requirement and applicable project specification. A fire-resistant design should therefore be confirmed against the required test and cable construction rather than assumed from a general product name.
          </p>
        </>

        <h2>4. Why they are not interchangeable</h2>
        <div className="buyer-guide-table-wrap">
          <table className="buyer-guide-table">
            <thead>
              <tr>
                <th>Review point</th>
                <th>LSZH</th>
                <th>Flame-retardant</th>
                <th>Fire-resistant</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Core focus</td>
                <td>Smoke / halogen performance</td>
                <td>Flame propagation</td>
                <td>Circuit integrity during fire</td>
              </tr>
              <tr>
                <td>Automatically equivalent?</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Test requirement must be confirmed?</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Can affect cable construction / quotation?</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A project may specify LSZH materials but still require separate flame-propagation testing. Another project may require a fire-resistant circuit while also specifying LSZH materials.
        </p>
        <p>
          For this reason, the buyer should list the requirements separately rather than using a single term such as “fire-safe cable”.
        </p>

        <h2>5. What buyers should include in the RFQ</h2>
        <ul className="buyer-guide-checklist">
          <li>Cable type and voltage class</li>
          <li>Conductor material, number of cores and conductor size</li>
          <li>LSZH / LSOH requirement, if applicable</li>
          <li>Flame-retardant requirement, if applicable</li>
          <li>Fire-resistant requirement, if applicable</li>
          <li>Applicable standard, test method or project specification</li>
          <li>Installation route and operating environment</li>
          <li>Required test reports, inspection and documentation</li>
          <li>Quantity and delivery requirements</li>
        </ul>

        <h2>6. Product scope for project review</h2>
        <p>
          Huanyu Cable reviews project requirements for finished cable products including LSZH power cables, armoured power cables, building wires, control cables and fire-resistant cable designs.
        </p>
        <p>
          Final construction, test requirements and documentation are confirmed against the submitted project specification before quotation.
        </p>

        <div className="buyer-guide-related">
          <h2>Related product pages</h2>
          <p>
            Review <Link href="/products/lszh-fire-safe-cables">LSZH &amp; Fire-safe Cables</Link>, <Link href="/products/low-voltage-xlpe-power-cables">Low Voltage XLPE Power Cables</Link>, <Link href="/products/low-voltage-armoured-power-cables">Low Voltage Armoured Power Cables</Link>, <Link href="/products/building-wires-flexible-cables">Building Wires &amp; Flexible Cables</Link>, and <Link href="/products/control-instrumentation-cables">Control &amp; Instrumentation Cables</Link>. To submit a project requirement, use the <Link href="/contact">Contact / RFQ</Link> page.
          </p>
        </div>
      </div>

      <div className="update-article-cta buyer-guide-cta">
        <h2>Send Your Fire-performance Cable Specification</h2>
        <p>Provide the cable type, voltage, construction, fire-performance requirement, applicable standard, quantity and project documents for review.</p>
        <Link className="button" href="/contact" data-ga-event="rfq_click" data-ga-cta-location="buyer_guide_cta" data-ga-product-slug="lszh-fire-safe-cables">Send Cable Requirements</Link>
      </div>
    </GuideShell>
  );
}

function SolarCableSelectionGuide() {
  return (
    <GuideShell
      title="PV1-F vs H1Z2Z2-K Solar Cable: Selection Guide for PV Projects"
      description="A practical procurement guide for comparing PV1-F and H1Z2Z2-K solar DC cable requirements before quotation."
    >
      <div className="buyer-guide-body">
        <p className="lead">
          An enquiry that says only “solar cable” rarely provides enough information for an accurate quotation. PV projects may refer to PV1-F or H1Z2Z2-K, but the designation is only one part of the purchasing requirement. Before quotation, confirm the applicable standard or technical specification, conductor material and construction, cross-section, quantity, packing and project documents. These details allow the requested cable construction and supply arrangement to be reviewed without assuming that two solar cable references are automatically interchangeable.
        </p>

        <h2>1. What is PV1-F?</h2>
        <p>
          PV1-F is a solar DC cable designation used in project documents and enquiries for photovoltaic module, string, combiner-box and inverter connections. Buyers should treat it as a reference that helps identify the requested cable family, then confirm the governing specification and required documents. The designation alone does not establish that every PV1-F offer has the same construction, test evidence or certification status.
        </p>

        <h2>2. What is H1Z2Z2-K?</h2>
        <p>
          H1Z2Z2-K is another common solar DC cable designation used for photovoltaic project procurement. A quotation should be checked against the project’s applicable standard, technical data sheet, conductor requirement and document scope. Where a project specifically calls for H1Z2Z2-K, do not substitute another designation without written technical review and acceptance by the responsible project party.
        </p>

        <h2>3. PV1-F and H1Z2Z2-K at a glance</h2>
        <div className="buyer-guide-table-wrap">
          <table className="buyer-guide-table">
            <thead>
              <tr>
                <th>Review point</th>
                <th>PV1-F</th>
                <th>H1Z2Z2-K</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Designation</td>
                <td>PV project cable designation/reference</td>
                <td>PV project cable designation/reference</td>
              </tr>
              <tr>
                <td>Conductor</td>
                <td>Confirm required conductor construction and material</td>
                <td>Confirm required conductor construction and material</td>
              </tr>
              <tr>
                <td>Common RFQ sizes</td>
                <td>4 mm² / 6 mm² frequently requested</td>
                <td>4 mm² / 6 mm² frequently requested</td>
              </tr>
              <tr>
                <td>Project confirmation</td>
                <td>Standard and technical specification required</td>
                <td>Standard and technical specification required</td>
              </tr>
              <tr>
                <td>Quotation basis</td>
                <td>Final construction must be confirmed</td>
                <td>Final construction must be confirmed</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          This table is a purchasing comparison, not a ranking. Neither column is a universal “better” option, and the two designations should not be accepted as direct substitutes without checking the project file. When comparing suppliers, place offers against the same construction, standard, testing and document requirements so that commercial differences are not caused by an incomplete or different technical scope.
        </p>

        <h2>4. Confirm conductor material and construction</h2>
        <p>
          State the conductor material and the required conductor construction rather than relying on the cable name alone. If the specification calls for a flexible tinned copper conductor, include that wording in the RFQ together with the required conductor class or construction. Also identify any project-specific marking or colour requirement. Huanyu Cable can review the submitted construction for supply, but unprovided conductor details should not be inferred from a short product designation.
        </p>
        <p>
          A clear conductor description also helps the buyer compare cable dimensions, termination compatibility and submitted technical documents on the same basis. If the project data sheet already defines the conductor, copy that requirement into the cable schedule or attach the original document instead of shortening it to “copper solar cable.” Any requested alternative should be shown separately and remain subject to project approval.
        </p>

        <h2>5. Confirm 4 mm² or 6 mm² cross-section</h2>
        <p>
          Solar cable enquiries frequently request 4 mm² or 6 mm², but a commonly requested size is not automatically the correct size for a particular circuit. The project designer should determine the cross-section using the circuit current, voltage drop, installation conditions, route, grouping, temperature and other applicable design criteria. For quotation, state the selected nominal cross-section and total length for each colour or circuit requirement.
        </p>
        <p>
          If a cable schedule includes several circuit groups, separate the quantities by designation, cross-section and colour. Do not combine 4 mm² and 6 mm² requirements into one total. Huanyu Cable reviews the requested size for quotation and does not replace the project designer’s cable-sizing calculation or final approval responsibility.
        </p>

        <h2>6. Confirm standard and project document requirements</h2>
        <p>
          Provide the required standard, cable data sheet or technical specification and list the testing and document scope expected with the offer or delivery. If a certification is required, name it explicitly and request confirmation of its availability for the final product and supply arrangement. Standards and documentation requirements should be confirmed before quotation. A product designation alone should not be treated as proof of a specific certification.
        </p>
        <p>
          The technical file should also identify any marking, colour, test-report, inspection or delivery-document requirement. If the BOQ and specification use different designations, ask the project engineer to resolve the conflict before commercial comparison. This avoids evaluating quotations built around different cable constructions or evidence packages.
        </p>

        <h2>7. Confirm quantity, packing and delivery information</h2>
        <p>
          State the total metres required for each size and colour, together with the preferred coil, reel or drum arrangement. Include any preferred packing length, delivery destination and required schedule. Packing can affect handling, shipment planning and the number of joints or terminations on site, so it should be reviewed with the final order rather than assumed from a generic product listing.
        </p>
        <p>
          Where the destination has specific shipping marks, pallet, reel or import-document requirements, include them in the RFQ. The supplier can then confirm a proposed packing arrangement and delivery scope in the quotation. No fixed minimum order quantity or packing length should be assumed until the final size, quantity and supply arrangement have been reviewed.
        </p>

        <h2>8. Solar Cable RFQ Checklist</h2>
        <ul className="buyer-guide-checklist">
          <li>Cable designation required</li>
          <li>Applicable standard / technical specification</li>
          <li>Conductor material and construction</li>
          <li>Cross-section, such as 4 mm² or 6 mm²</li>
          <li>Colour / marking if specified</li>
          <li>Quantity and packing length</li>
          <li>Required testing / documentation</li>
          <li>Delivery destination and schedule</li>
        </ul>

        <h2>9. Related product pages</h2>
        <div className="buyer-guide-related">
          <p>
            Review the <Link href="/products/solar-cables">Solar Cables</Link> category and the individual <Link href="/products/pv1-f-solar-dc-cable">PV1-F Solar DC Cable</Link> and <Link href="/products/h1z2z2-k-solar-dc-cable">H1Z2Z2-K Solar DC Cable</Link> pages before preparing the RFQ. For a project-specific review, send the cable schedule and technical documents through the <Link href="/contact">Contact / RFQ</Link> page. Final construction, testing and documentation remain subject to the submitted project specification and quotation confirmation.
          </p>
        </div>
      </div>

      <div className="update-article-cta buyer-guide-cta">
        <h2>Send Your Solar Cable Specification</h2>
        <p>Provide the designation or standard, cross-section, quantity, packing, destination and project technical documents for review before quotation.</p>
        <Link className="button" href="/contact" data-ga-event="rfq_click" data-ga-cta-location="buyer_guide_cta" data-ga-product-slug="solar-cables">Send Solar Cable Requirements</Link>
      </div>
    </GuideShell>
  );
}

export default async function BuyerGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getBuyerGuide(slug);
  if (!guide) notFound();

  return (
    <>
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: "Home", item: site.url },
          { name: "Resources", item: `${site.url}/resources` },
          { name: guide.title, item: `${site.url}/resources/${guide.slug}` },
        ])}
      />
      <JsonLd data={createTechArticleJsonLd(guide)} />
      {slug === "sta-vs-swa-armoured-cable-guide" && <StaVsSwaGuide />}
      {slug === "medium-voltage-xlpe-cable-selection-guide" && <MediumVoltageSelectionGuide />}
      {slug === "what-we-check-when-mv-cable-rfq-only-says-35-kv" && <Mv35KvRfqGuide />}
      {slug === "cable-documents-epc-buyers-should-request-before-shipment" && <EpcDocumentsBeforeShipmentGuide />}
      {slug === "pv1-f-vs-h1z2z2-k-solar-cable-selection-guide" && <SolarCableSelectionGuide />}
      {slug === "low-voltage-xlpe-cable-rfq-checklist" && <LowVoltageXlpeRfqChecklistGuide />}
      {slug === "lszh-vs-flame-retardant-vs-fire-resistant-cable" && <LszhFlameFireComparisonGuide />}
    </>
  );
}
