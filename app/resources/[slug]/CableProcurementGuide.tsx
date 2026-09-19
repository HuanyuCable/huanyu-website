import Link from "next/link";

const sevenChecks = [
  ["Identify the cable family", "Start from the application, BOQ, drawing or existing cable marking."],
  ["Control the technical basis", "Confirm voltage, conductor, cores, size, construction, standard and project-specific requirements."],
  ["Understand the cost drivers", "Conductor material, cable build, testing, packing and commercial basis can change the quotation."],
  ["Send a quotation-ready RFQ", "Give every supplier the same requirement and clearly mark unknown fields."],
  ["Compare like for like", "Establish technical equivalence before comparing price."],
  ["Check quality evidence and supplier scope", "Review datasheets, tests, certificates, deviations, traceability and inspection requirements as applicable."],
  ["Confirm packing and delivery", "Align quantity, continuous length, coil or drum arrangement, destination, Incoterm and schedule before award."],
];

const productFamilies = [
  ["Internal building or fixed wiring", "Building wire / house wiring cable", "/products/building-wires-flexible-cables", "Voltage, conductor construction, size, colour and standard"],
  ["Fixed low-voltage distribution", "Low Voltage XLPE Power Cable", "/products/low-voltage-xlpe-power-cables", "Voltage, conductor, cores, size, sheath, armour and standard"],
  ["Medium-voltage distribution or substation", "Medium Voltage XLPE Power Cable", "/products/medium-voltage-xlpe-power-cables", "Full voltage designation, conductor, screen system, armour, sheath and standard"],
  ["Route requiring mechanical protection", "Armoured Power Cable", "/products/low-voltage-armoured-power-cables", "Whether armour is specified, armour type, cores and route"],
  ["Overhead distribution", "Overhead Insulated Cable", "/products/overhead-insulated-cables", "System requirement, conductor, size and standard"],
  ["Solar DC circuit", "Solar Cable", "/products/solar-cables", "Designation, size, standard or certification requirement, colour and packing"],
  ["Control or signal circuits", "Control & Instrumentation Cable", "/products/control-instrumentation-cables", "Cores or pairs, shielding, conductor, voltage and standard"],
];

const construction = [
  ["Conductor", "The metallic conductor that carries electrical current, commonly copper or aluminium depending on the approved design. Material, nominal cross-section, core count and rigid or stranded construction affect the quote. Weight or a “high-purity copper” claim cannot replace the applicable conductor requirement and test evidence."],
  ["Insulation", "The electrical layer around a conductor. XLPE or PVC may be specified according to cable type. A material name alone does not define complete performance; the applicable product standard and project specification control the requirement."],
  ["Screens", "Medium-voltage designs may have conductor, insulation and metallic screens. These belong to the electrical design; removing one merely to lower price is not a buyer substitution. Confirm the screen system against the approved specification."],
  ["Fillers and bedding", "Materials used where required to form, protect or support the cable build. Their form depends on the complete construction, not just the printed conductor size."],
  ["Armour", "Mechanical protection when required by the design or installation specification. STA means steel tape armour; SWA means steel wire armour. An underground route does not automatically require either. Confirm route, cores and specified armour type."],
  ["Outer sheath", "The outer protective layer, which may be PVC, PE or a project-specific construction. An LSZH label alone does not prove flame-retardant or fire-resistant performance; confirm each requested standard and test scope separately."],
];

const priceFactors = [
  ["Copper vs aluminium", "Different conductor material and requirement"],
  ["Cross-section", "Changes conductor material quantity and overall build"],
  ["Number of cores", "Changes conductor quantity and cable construction"],
  ["Voltage designation", "Changes insulation and, for MV cable, screen construction"],
  ["Insulation and sheath", "Materials and performance requirements differ"],
  ["Armour", "Adds material and manufacturing steps where required"],
  ["Fire performance", "LSZH, flame-retardant and fire-resistant requirements are distinct"],
  ["Standard or certification", "May change design, tests, documentation or qualification scope"],
  ["Testing or inspection", "Project tests, witness points or agreed third-party inspection change scope"],
  ["Quantity and size mix", "One large item differs from many small SKUs for production and packing"],
  ["Coil or drum length", "Affects packing, drum planning and sometimes manufacturing arrangement"],
  ["Marking and packaging", "Project or resale requirements may add work and materials"],
  ["Destination and Incoterm", "Freight and commercial basis change the delivered quotation"],
  ["Quote validity", "The supplier may state a material-price basis and validity period"],
];

const qualityChecks = [
  ["Product identity", "Match the datasheet and quote to conductor, voltage, cores, cross-section, insulation, screens, armour, sheath and standard."],
  ["Conductor", "Confirm copper or aluminium, nominal size, applicable class or construction and the conductor resistance requirement in the governing specification."],
  ["Dimensions and build", "Review relevant insulation, sheath and overall dimensions against the applicable standard or approved specification. Extra thickness is not automatically better."],
  ["Electrical tests", "Confirm routine testing and any project-required tests against the agreed scope. Ask which report will document the result."],
  ["Marking and length", "Check cable marking, drum or coil identity, declared length and traceability required for the order."],
  ["Documents and certificates", "Check product scope, standard, holder or manufacturer where relevant, validity and project requirement. A company management-system certificate is not product certification; citing a standard is not a certificate."],
  ["Inspection when required", "Agree buyer or third-party inspection, witness points and acceptance scope only where the contract or project calls for them."],
];

const rfqFields = [
  "Cable type or model, if known", "System voltage and required cable voltage designation, if known", "Copper or aluminium conductor", "Number of cores", "Conductor cross-section", "Insulation, screen, armour and sheath requirements", "Standard or certification requirement", "Quantity by item or SKU", "Required continuous length and coil or drum length", "Tests and documents", "Marking and packing", "Destination", "Incoterm, if decided", "Required delivery date or project schedule",
];

const quoteChecks = [
  ["Cable description", "Are the actual constructions the same?"],
  ["Conductor", "Same material, size and core arrangement?"],
  ["Voltage", "Same complete cable voltage designation?"],
  ["Insulation and screens", "Same design basis and required layers?"],
  ["Armour and sheath", "Same materials and protection?"],
  ["Standard", "Same required standard or project specification?"],
  ["Certification", "Same required product and certificate scope?"],
  ["Tests and documents", "Same included reports and inspection scope?"],
  ["Quantity", "Same length for every item or SKU?"],
  ["Length and packing", "Same continuous lengths and coil or drum assumptions?"],
  ["Price unit", "Per metre, kilometre, coil or drum?"],
  ["Currency", "Same currency and conversion basis?"],
  ["Incoterm", "Same EXW, FOB, CIF or other agreed term?"],
  ["Destination and freight", "Same delivery point and included freight?"],
  ["Quote validity", "Same validity period and stated material basis?"],
  ["Delivery", "Same production and shipment basis?"],
  ["Exclusions", "What is specifically outside each offer?"],
];

const workflow = [
  ["Identify", "Application, cable family and project basis", "Starting product scope"],
  ["Define", "Specification, BOQ and quantities", "Controlled requirement"],
  ["RFQ", "Send the same basis to suppliers", "Comparable inquiry"],
  ["Clarify", "Resolve missing fields and deviations", "Confirmed quote basis"],
  ["Compare", "Review technical and commercial terms", "Quotation review"],
  ["Confirm", "Agree construction, documents and packing", "Purchase-order basis"],
  ["Produce / inspect", "Apply agreed tests and inspection where required", "Production records"],
  ["Pack / deliver", "Confirm drum, coil, marks and shipment", "Controlled delivery"],
];

const relatedGuides = [
  ["Medium Voltage XLPE Cable Selection Guide", "/resources/medium-voltage-xlpe-cable-selection-guide"],
  ["35 kV Cable RFQ: What We Check Before Quotation", "/resources/what-we-check-when-mv-cable-rfq-only-says-35-kv"],
  ["Low Voltage XLPE Cable RFQ Checklist", "/resources/low-voltage-xlpe-cable-rfq-checklist"],
  ["STA vs SWA Armoured Cable", "/resources/sta-vs-swa-armoured-cable-guide"],
  ["LSZH vs Flame-Retardant vs Fire-Resistant Cable", "/resources/lszh-vs-flame-retardant-vs-fire-resistant-cable"],
  ["Cable Documents EPC Buyers Should Request Before Shipment", "/resources/cable-documents-epc-buyers-should-request-before-shipment"],
  ["Cable Drum Length, Packing and Export Freight", "/resources/how-cable-drum-length-affects-packing-handling-and-export-freight"],
];

const faqs = [
  ["What information do I need to get a cable quotation?", "Provide the type or application, voltage, conductor, cores, cross-section, construction, standard, quantity, packing length, destination and required tests or documents. If some fields are unknown, send the BOQ, drawing or cable marking rather than guessing."],
  ["Why are cable prices different for the same mm² size?", "Nominal size is only one part of the product. Conductor material, cores, voltage, insulation, screens, armour, sheath, standard, tests, quantity, packing and freight basis can all differ."],
  ["How can I compare cable quality from different suppliers?", "First confirm technical equivalence. Then check the agreed construction, conductor requirement, applicable dimensions, required tests, marking, traceability and relevant reports or certificates. Appearance and weight alone are not proof."],
  ["Is copper cable always better than aluminium cable?", "No universal choice applies. Properties, sizes, terminations and project design differ. Follow the approved specification, or ask the project engineer to review any proposed alternative."],
  ["Do I always need armoured cable for underground installation?", "No. The cable design, route, installation method and project specification determine whether armour is required. Confirm the construction rather than deciding from the word “underground”."],
  ["What if I only know a Chinese or local cable model number?", "Send the complete model, marking, datasheet, drawing or clear photo with application and quantity. These can identify a starting family, but the quotation must confirm actual construction and applicable standard. A local model is not automatically an overseas certification designation."],
  ["What should a cable distributor confirm before bulk ordering?", "Confirm target market, required standard or certification, product and size mix, quantity by SKU, colours, coil or drum length, marking and packing, resale documents and repeat-delivery requirements."],
  ["Should I choose the lowest cable price?", "Only after the quotations describe the same technical and commercial scope. A different conductor, construction, standard, test scope, packing basis or freight term makes the unit prices unlike for like."],
];

function Takeaway({ children }: { children: React.ReactNode }) {
  return <div className="buyer-guide-takeaway"><strong>Buyer takeaway</strong><p>{children}</p></div>;
}

export function CableProcurementGuide() {
  return (
    <>
      <div className="buyer-guide-body procurement-guide">
        <p className="lead">Buying cable in bulk or for a project can be difficult because the product name alone rarely defines the complete product. “4 × 95 mm² cable,” “35 kV cable,” “SWA cable” or a local model number may leave questions about conductor material, voltage designation, insulation, screens, armour, sheath, standard, tests and packing.</p>
        <p>A practical cable procurement strategy identifies the right product family, explains which construction details affect price and quality, prepares a quotation-ready RFQ and compares suppliers on the same technical and commercial basis. This power cable buying guide is for distributors, wholesalers, stockists, electrical merchants, contractors, engineering buyers, EPC procurement teams and other bulk buyers. Final sizing, system design and project approval remain with the project engineer and applicable specification.</p>

        <h2>Cable Procurement Strategy in 7 Checks</h2>
        <ol className="procurement-seven-checks">
          {sevenChecks.map(([name, detail]) => <li key={name}><strong>{name}</strong><span>{detail}</span></li>)}
        </ol>
        <Takeaway>A good cable procurement strategy controls the product definition first, aligns the quotation basis second, and confirms quality evidence, packing and delivery requirements before award.</Takeaway>

        <h2>Start Here: What Do You Already Know About the Cable?</h2>
        <p>You do not need a perfect English product name to start an inquiry. Choose the path closest to the information already on hand, and label anything uncertain for review.</p>
        <div className="procurement-card-grid procurement-paths">
          <article><span>Path 1</span><h3>I have a full specification or BOQ</h3><p>Send the BOQ or cable schedule, specification or standard, item quantities, required documents, packing and destination. The supplier can review quotation scope and identify deviations.</p></article>
          <article><span>Path 2</span><h3>I know the application, voltage and size</h3><p>Send the use, voltage designation if known, specified copper or aluminium, cores and size, installation route, destination and target market. Ask the supplier to identify missing construction details for review.</p></article>
          <article><span>Path 3</span><h3>I have a model, photo or old marking</h3><p>Send the complete marking, clear photos, available datasheet or drawing, application, quantity and destination. The model can start identification, but is not a complete quotation specification.</p></article>
        </div>
        <div className="buyer-guide-caution"><strong>Check before final quotation</strong><p>A photo or model name may not reveal the full standard, conductor construction, insulation, screen, armour or test requirements.</p></div>

        <h2>First Identify the Cable Family You Are Buying</h2>
        <p>Use the application as a starting point, then confirm the cable construction against the drawing or specification. This orientation is for purchasing discussions, not engineering selection or cable sizing.</p>
        <div className="buyer-guide-table-wrap procurement-table-wrap"><table className="buyer-guide-table procurement-table procurement-family-table"><thead><tr><th>Buyer requirement</th><th>Starting product family</th><th>Still confirm</th></tr></thead><tbody>{productFamilies.map(([need, family, href, confirm]) => <tr key={need}><td>{need}</td><td><Link href={href}>{family}</Link></td><td>{confirm}</td></tr>)}</tbody></table></div>
        <Takeaway>If you are unsure of the cable family, start with the application and project information rather than guessing a model.</Takeaway>

        <h2>Power Cable Construction in Plain English</h2>
        <p>A cable is a combination of layers and requirements. A printed conductor size describes only one part of what the supplier is being asked to make.</p>
        <div className="procurement-card-grid procurement-construction">{construction.map(([name, detail]) => <article key={name}><h3>{name}</h3><p>{detail}</p></article>)}</div>
        <Takeaway>Cable price and quality depend on the complete construction, not only on the printed conductor size.</Takeaway>

        <h2>What Actually Changes the Price of a Cable?</h2>
        <p>Two quotations can show the same nominal cable size and still describe different products. Record these power cable price factors before deciding that one quotation is cheaper.</p>
        <div className="buyer-guide-table-wrap procurement-table-wrap"><table className="buyer-guide-table procurement-table procurement-pair-table"><thead><tr><th>Price factor</th><th>Why it changes the quotation</th></tr></thead><tbody>{priceFactors.map(([factor, reason]) => <tr key={factor}><td>{factor}</td><td>{reason}</td></tr>)}</tbody></table></div>
        <p>For a material-sensitive quote, record the supplier’s stated validity and material-price basis when provided. A fixed percentage of “copper cost” or a commodity forecast cannot substitute for the actual quoted construction and terms.</p>

        <h2>Why “Same Size” Does Not Always Mean “Same Cable”</h2>
        <div className="procurement-example-list"><article><h3>Same conductor size, different build</h3><p><code>4 × 95 mm² Cu / XLPE / PVC unarmoured</code> and <code>4 × 95 mm² Cu / XLPE / SWA / PVC</code> differ in armour and complete construction.</p></article><article><h3>Same nominal size, different conductor</h3><p><code>3 × 95 mm² copper</code> and <code>3 × 95 mm² aluminium</code> are not the same electrical or project basis. Follow the approved design.</p></article><article><h3>Voltage shorthand is incomplete</h3><p>“35 kV cable” leaves the full voltage designation, screens, conductor, cores, armour, sheath and standard unresolved. See <Link href="/resources/what-we-check-when-mv-cable-rfq-only-says-35-kv">35 kV Cable RFQ: What We Check Before Quotation</Link>.</p></article></div>
        <Takeaway>Before comparing unit price, confirm that suppliers are quoting the same cable.</Takeaway>

        <h2>How Can a Non-Specialist Buyer Compare Cable Quality?</h2>
        <p>Colour, surface appearance, weight and product photos may show obvious differences, but they do not prove quality or compliance. For bulk and project buying, ask whether the supplied cable conforms to the agreed specification and whether appropriate evidence supports it.</p>
        <ol className="procurement-quality-list">{qualityChecks.map(([name, detail]) => <li key={name}><strong>{name}</strong><p>{detail}</p></li>)}</ol>
        <p>Review the site’s <Link href="/quality">Quality &amp; Testing</Link> information and the <Link href="/resources/cable-documents-epc-buyers-should-request-before-shipment">Cable Documents Guide</Link> for a deeper document checklist.</p>
        <Takeaway>Good cable procurement means specification conformity plus evidence — not simply choosing the heaviest or most expensive cable.</Takeaway>

        <h2>Different Buyers Need Different Information</h2>
        <div className="procurement-card-grid procurement-buyers"><article><h3>Distributor, wholesaler, stockist or electrical merchant</h3><p>Confirm target market, standard or certification requirement, product family and size mix, conductor, colours, quantity by SKU, coil or drum length, marking, labels, packing, resale documents and repeat-order needs. Send any mixed-SKU, branding, delivery or stock expectation for supplier review rather than assuming it is available.</p></article><article><h3>Contractor or engineering-company buyer</h3><p>Confirm application, voltage, BOQ or drawing, size, cores, route, armour, sheath, standard, total length and delivery sequence. Check that each quoted line matches the drawing and installation requirement.</p></article><article><h3>EPC or project procurement</h3><p>Confirm the approved schedule and specification, allowed deviations, certificate requirements, datasheet approval, test and inspection scope, ITP or witness needs where applicable, document register, project marks, drum schedule and destination.</p></article></div>

        <h2>What Information Is Needed for an Accurate Cable Quotation?</h2>
        <p>A cable RFQ checklist gives every supplier the same starting basis and makes gaps visible. Identify each line item separately, especially when a distribution order includes several sizes or a project has different circuits.</p>
        <ol className="procurement-rfq-list">{rfqFields.map((field) => <li key={field}>{field}</li>)}</ol>
        <div className="buyer-guide-caution"><strong>Unknown is better than a guess</strong><p>Mark missing fields as unknown. Send the BOQ, drawing, old cable marking or project specification for review. For more detail, use the <Link href="/resources/low-voltage-xlpe-cable-rfq-checklist">Low Voltage XLPE Cable RFQ Checklist</Link> or <Link href="/resources/medium-voltage-xlpe-cable-selection-guide">Medium Voltage Selection Guide</Link>.</p></div>

        <h2>How to Read and Compare Cable Quotations</h2>
        <p>A lower price is meaningful only after the technical and commercial basis is aligned. Use the same cable RFQ for each supplier, then record all clarifications and exceptions beside the offers.</p>
        <div className="buyer-guide-table-wrap procurement-table-wrap"><table className="buyer-guide-table procurement-table procurement-pair-table"><thead><tr><th>Compare</th><th>Buyer question</th></tr></thead><tbody>{quoteChecks.map(([field, question]) => <tr key={field}><td>{field}</td><td>{question}</td></tr>)}</tbody></table></div>
        <Takeaway>Establish technical equivalence first. Compare commercial terms second.</Takeaway>

        <h2>How to Evaluate a Cable Supplier Without Being a Cable Engineer</h2>
        <div className="procurement-question-list"><p><strong>Requirement review:</strong> Does the supplier flag missing information instead of silently assuming it?</p><p><strong>Relevant scope:</strong> Can they review the requested voltage class, construction and quantity?</p><p><strong>Specific evidence:</strong> Do datasheets, test reports and certificates relate to the requested product and project, rather than only a company brochure?</p><p><strong>Transparent deviations:</strong> Is every proposed alternative described and submitted for approval?</p><p><strong>Commercial clarity:</strong> Are MOQ, lead time, packing, drum length and exclusions explained for this inquiry?</p><p><strong>Agreed inspection:</strong> Can any project inspection and document requirements be settled before order release?</p><p><strong>Repeatability:</strong> For stockists and repeat buyers, can the confirmed specification and commercial basis be used again?</p></div>
        <p>These questions support a supplier review; they do not imply that a manufacturer is always better than a distributor or that a trader cannot meet the agreed scope.</p>

        <h2>Commercial Terms That Matter Beyond Unit Price</h2>
        <p>Compare the stated price unit, currency, quotation validity, quantity per item, MOQ if stated, Incoterm, freight, destination, packing, inspection or testing cost, documentation scope and lead time. Ask which costs are included and which are excluded. Payment terms should come from the actual quotation or contract, not an assumed standard arrangement.</p>

        <h2>Drum Length, Packing and Delivery Can Change the Buying Decision</h2>
        <p>Total metres and required continuous length are different: a project pulling section may need a defined unbroken length, while a reseller may need a particular coil presentation and clear SKU separation. Drum dimensions and gross weight affect handling; the agreed delivery sequence, destination and transport constraints affect packing review. Confirm these before award rather than leaving the supplier to infer them from total quantity.</p>
        <p>For practical planning questions, read <Link href="/resources/how-cable-drum-length-affects-packing-handling-and-export-freight">How Cable Drum Length Affects Packing, Handling and Export Freight</Link>. Actual lengths and packing arrangements remain subject to the confirmed cable and order.</p>

        <h2>Agree Tests, Inspection and Documents Before Order Release or Production</h2>
        <p>Inspection, witness points and document requirements are easier to control when agreed before production or order release, rather than introduced when cable is ready to ship. Depending on the order, confirm an approved datasheet, drawings, routine test report, required type or design evidence, project or market certificate, ITP, buyer or third-party witness scope, packing list, drum schedule and shipping marks. Certificate of origin and other shipment documents apply only where commercially or contractually required.</p>
        <p>Not every document or inspection point applies to every cable order. The <Link href="/resources/cable-documents-epc-buyers-should-request-before-shipment">Cable Documents EPC Buyers Should Request Before Shipment</Link> guide explains how to set the document scope.</p>

        <h2>Cable Procurement Workflow: From Requirement to Delivery</h2>
        <div className="buyer-guide-table-wrap procurement-table-wrap"><table className="buyer-guide-table procurement-table procurement-workflow-table"><thead><tr><th>Stage</th><th>Buyer action</th><th>Output</th></tr></thead><tbody>{workflow.map(([stage, action, output], index) => <tr key={stage}><td>{index + 1}. {stage}</td><td>{action}</td><td>{output}</td></tr>)}</tbody></table></div>
        <p>A stock order, contractor purchase and EPC project can follow different approval steps. In all three, keep the product definition and quotation basis clear from inquiry through delivery.</p>

        <h2>Common Cable Buying Mistakes</h2>
        <ol className="procurement-mistakes"><li>Requesting a price using only size and total quantity.</li><li>Comparing copper and aluminium offers as the same cable.</li><li>Missing an armoured versus unarmoured construction difference.</li><li>Treating “35 kV cable” or a local model as a complete specification.</li><li>Choosing unit price before standards, tests, packing and freight are aligned.</li><li>Judging quality by appearance, weight or marketing claims alone.</li><li>Treating a company certificate as product certification.</li><li>Confirming inspection and documents after production has finished.</li><li>Giving total metres without continuous-length or drum requirements.</li><li>For distributors, ordering many SKUs without quantity and packing per item.</li></ol>

        <h2>Related Huanyu Cable Buyer Guides</h2>
        <ul className="procurement-related-guides">{relatedGuides.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul>

        <h2>Frequently Asked Questions</h2>
        <div className="buyer-guide-faq">{faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div>
      </div>

      <div className="update-article-cta buyer-guide-cta procurement-cta">
        <h2>Not Sure How to Specify the Cable? Send What You Have.</h2>
        <p>Send your BOQ, cable schedule, model number, cable marking, clear photos, drawing or available specification together with quantity and destination. Huanyu Cable can review the available information, identify missing quotation details and clarify the supply scope before preparing an offer.</p>
        <Link className="button" href="/contact" data-ga-event="rfq_click" data-ga-cta-location="buyer_guide_cta">Send Your Cable Requirements</Link>
        <div className="buyer-guide-cta-links" aria-label="Further cable resources"><Link href="/products/low-voltage-xlpe-power-cables">View Low Voltage XLPE Cables</Link><Link href="/products/medium-voltage-xlpe-power-cables">View Medium Voltage XLPE Cables</Link><Link href="/resources">Explore Technical Resources</Link></div>
      </div>
    </>
  );
}
