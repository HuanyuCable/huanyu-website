import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { ReactNode } from "react";
import Link from "next/link";
import type { BuyerGuide } from "@/data/buyerGuides";
import styles from "./knowledgeHub.module.css";

const sourceFiles: Record<string, string> = {
  "cable-standards-vs-certifications": "cable-standards-vs-certifications.md",
  "how-to-identify-cable-specifications": "how-to-identify-cable-specifications.md",
  "shielded-vs-unshielded-control-instrumentation-cables": "shielded-vs-unshielded-control-instrumentation-cables.md",
};

type TocItem = { label: string; heading: string };

const tocItems: Record<string, TocItem[]> = {
  "cable-standards-vs-certifications": [
    { label: "Four evidence questions", heading: "1. Four different questions behind an RFQ" },
    { label: "Common terms", heading: "2. Quick-reference guide to common terms" },
    { label: "IEC, EN and BS", heading: "3. IEC: international standards are not automatically certificates" },
    { label: "UL and CE", heading: "5. UL: a standard, a certification status and a marking are different things" },
    { label: "TÜV, GOST and EAC", heading: "7. TÜV: verify the certificate, not merely the logo" },
    { label: "Procurement mistakes", heading: "9. Three common procurement mistakes" },
    { label: "Checklist and RFQ", heading: "10. Buyer checklist: what to ask for before approving a cable offer" },
  ],
  "how-to-identify-cable-specifications": [
    { label: "What 10 mm² means", heading: "1. First check what the dimension actually refers to" },
    { label: "Cable families", heading: "2. The same 10 mm² can belong to different cable families" },
    { label: "RFQ parameters", heading: "4. Eight parameters that identify most cable RFQs" },
    { label: "Markings and model codes", heading: "5. What a cable marking can tell you — and what it cannot" },
    { label: "Known or proposed", heading: "Before converting a brief enquiry into a quotation" },
    { label: "Incomplete requests", heading: "8. Three common incomplete requests, rewritten" },
    { label: "Checklist and RFQ", heading: "9. An RFQ checklist your engineering team can complete" },
  ],
  "shielded-vs-unshielded-control-instrumentation-cables": [
    { label: "What a screen does", heading: "1. What does a screen or shield do?" },
    { label: "Screen position", heading: "2. Four common screen configurations" },
    { label: "Foil or braid", heading: "3. Foil versus braid: what changes?" },
    { label: "Screen vs armour", heading: "4. Screen versus armour versus medium-voltage metallic screen" },
    { label: "Core and pair checks", heading: "5. Core, pair and triad are not interchangeable" },
    { label: "Two-stage review", heading: "8. When the buyer does not know whether screening is required" },
    { label: "RFQ comparison", heading: "9. Procurement comparison: avoid quotation mismatches" },
  ],
};

function headingId(text: string): string {
  return text.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

type Block =
  | { kind: "heading"; level: 2 | 3; text: string }
  | { kind: "paragraph"; text: string }
  | { kind: "quote"; text: string }
  | { kind: "list"; ordered: boolean; items: string[] }
  | { kind: "table"; rows: string[][] }
  | { kind: "rule" };

const tokenPattern = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)|\*\*([^*]+)\*\*|\x60([^\x60]+)\x60|\*([^*\n]+)\*/g;

function inline(text: string): ReactNode[] {
  const result: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(tokenPattern)) {
    const index = match.index ?? 0;
    if (index > last) result.push(text.slice(last, index));
    const key = String(index) + "-" + match[0];
    if (match[1] && match[2]) {
      const url = new URL(match[2]);
      const isLocal = url.hostname === "www.huanyucable.com";
      result.push(isLocal
        ? <Link key={key} href={url.pathname + url.search + url.hash}>{match[1]}</Link>
        : <a key={key} href={url.toString()} target="_blank" rel="noopener noreferrer">{match[1]}</a>);
    } else if (match[3]) {
      result.push(<strong key={key}>{match[3]}</strong>);
    } else if (match[4]) {
      result.push(<code key={key}>{match[4]}</code>);
    } else if (match[5]) {
      result.push(<em key={key}>{match[5]}</em>);
    }
    last = index + match[0].length;
  }
  if (last < text.length) result.push(text.slice(last));
  return result;
}

function richText(text: string): ReactNode[] {
  const lines = text.split("\n");
  const result: ReactNode[] = [];
  lines.forEach((line, index) => {
    result.push(...inline(line.trimEnd()));
    if (index < lines.length - 1) result.push(line.endsWith("  ") ? <br key={"br-" + index} /> : " ");
  });
  return result;
}

function tableCells(line: string): string[] {
  return line.replace(/^\|\s*/, "").replace(/\s*\|$/, "").split("|").map((cell) => cell.trim());
}

function isList(line: string): boolean {
  return /^(- |\d+\. )/.test(line);
}

function isBlockStart(line: string): boolean {
  return /^(#{1,3} |\| |> |---\s*$)/.test(line) || isList(line);
}

function parseMarkdown(source: string): { title: string; blocks: Block[] } {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const title = lines[0].startsWith("# ") ? lines[0].slice(2).trim() : "";
  if (!title) throw new Error("Knowledge Hub source is missing its H1");
  const blocks: Block[] = [];
  let index = 1;
  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) { index++; continue; }
    if (line === "---") { blocks.push({ kind: "rule" }); index++; continue; }
    const heading = /^(#{2,3}) (.+)$/.exec(line);
    if (heading) { blocks.push({ kind: "heading", level: heading[1].length as 2 | 3, text: heading[2] }); index++; continue; }
    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        const cells = tableCells(lines[index]);
        if (!cells.every((cell) => /^:?-{3,}:?$/.test(cell))) rows.push(cells);
        index++;
      }
      blocks.push({ kind: "table", rows });
      continue;
    }
    if (line.startsWith("> ")) {
      const quote: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("> ")) quote.push(lines[index++].trim().slice(2));
      blocks.push({ kind: "quote", text: quote.join("\n") });
      continue;
    }
    if (isList(line)) {
      const ordered = /^\d+\. /.test(line);
      const items: string[] = [];
      while (index < lines.length && isList(lines[index].trim())) {
        items.push(lines[index++].trim().replace(/^(- |\d+\. )/, ""));
      }
      blocks.push({ kind: "list", ordered, items });
      continue;
    }
    const paragraph: string[] = [];
    while (index < lines.length && lines[index].trim() && !isBlockStart(lines[index].trim())) paragraph.push(lines[index++]);
    if (!paragraph.length) throw new Error("Unsupported Knowledge Hub Markdown at line " + String(index + 1));
    blocks.push({ kind: "paragraph", text: paragraph.join("\n") });
  }
  return { title, blocks };
}

function isTakeaway(text: string): boolean {
  return text.startsWith("**The short answer:**") || text.startsWith("The answer is that") || text.startsWith("**Do not choose from the conductor size alone.**");
}

export function KnowledgeHubArticle({ guide }: { guide: BuyerGuide }) {
  const filename = sourceFiles[guide.slug];
  if (!filename) throw new Error("Unknown Knowledge Hub article: " + guide.slug);
  const source = readFileSync(join(process.cwd(), "content", "knowledge-hub", filename), "utf8");
  const { title, blocks } = parseMarkdown(source);
  if (title !== guide.title) throw new Error("Knowledge Hub title mismatch: " + guide.slug);
  const headings = blocks.filter((block): block is Extract<Block, { kind: "heading" }> => block.kind === "heading");
  const ids = headings.map((heading) => headingId(heading.text));
  if (new Set(ids).size !== ids.length) throw new Error("Duplicate Knowledge Hub heading anchor: " + guide.slug);
  const toc = tocItems[guide.slug];
  if (!toc || toc.some((item) => !headings.some((heading) => heading.text === item.heading))) {
    throw new Error("Knowledge Hub table of contents target is missing: " + guide.slug);
  }
  const firstSectionIndex = blocks.findIndex((block) => block.kind === "heading" && block.level === 2);
  const groups = new Map<number, { kind: "mistake" | "case" | "foil"; parts: Block[] }>();
  const groupedTail = new Set<number>();
  function addGroup(start: number, end: number, kind: "mistake" | "case" | "foil") {
    groups.set(start, { kind, parts: blocks.slice(start, end) });
    for (let tail = start + 1; tail < end; tail++) groupedTail.add(tail);
  }
  if (guide.slug === "cable-standards-vs-certifications") {
    blocks.forEach((block, index) => {
      if (block.kind !== "heading" || block.level !== 3 || !block.text.startsWith("Mistake ")) return;
      let end = index + 1;
      while (end < blocks.length && blocks[end].kind !== "heading") end++;
      addGroup(index, end, "mistake");
    });
  }
  if (guide.slug === "how-to-identify-cable-specifications") {
    blocks.forEach((block, index) => {
      if (block.kind !== "heading" || block.level !== 3 || !block.text.startsWith("Case ")) return;
      let end = index + 1;
      while (end < blocks.length && blocks[end].kind !== "heading" &&
        !(blocks[end].kind === "paragraph" && (blocks[end] as Extract<Block, { kind: "paragraph" }>).text.startsWith("**Procurement tip:**"))) end++;
      addGroup(index, end, "case");
    });
  }
  if (guide.slug === "shielded-vs-unshielded-control-instrumentation-cables") {
    const foil = blocks.findIndex((block) => block.kind === "heading" && block.text === "Foil screen");
    const braid = blocks.findIndex((block) => block.kind === "heading" && block.text === "Braided screen");
    if (foil < 0 || braid !== foil + 3 || blocks[braid + 1]?.kind !== "paragraph" || blocks[braid + 2]?.kind !== "paragraph") {
      throw new Error("Foil and braid source structure has changed");
    }
    addGroup(foil, braid + 3, "foil");
  }
  let section = "";
  return (
    <article className={"buyer-guide " + styles.article}>
      <section className="page-hero page-hero-resources buyer-guide-hero" style={{
        backgroundImage: 'linear-gradient(115deg, rgba(4, 20, 33, 0.93), rgba(8, 58, 87, 0.72)), url("/images/site/heroes/resources-hero-manufacturing-development-v2.webp")',
        backgroundPosition: "center 50%", backgroundSize: "cover", backgroundRepeat: "no-repeat",
      }}>
        <div className="container">
          <Link className="back-link" href="/resources">Back to Resources</Link>
          <span className="eyebrow light">Buyer Guide</span>
          <h1>{title}</h1>
          <p>{guide.description}</p>
        </div>
      </section>
      <section className="section">
        <div className="container buyer-guide-layout">
          <div className={"buyer-guide-body " + styles.body}>
            {blocks.map((block, index) => {
              const key = String(index) + "-" + block.kind;
              if (groupedTail.has(index)) return null;
              const group = groups.get(index);
              if (group?.kind === "mistake") {
                const [heading, reason, better, note] = group.parts;
                if (heading.kind !== "heading" || reason.kind !== "paragraph" || better.kind !== "paragraph" || (note && note.kind !== "paragraph")) {
                  throw new Error("Procurement mistake source structure has changed");
                }
                return <article className={styles.mistakeCard} key={key}>
                  <h3 id={headingId(heading.text)}>{heading.text}</h3>
                  <div className={styles.mistakeDetails}>
                    <div><span>Why this is incomplete</span><p>{richText(reason.text)}</p></div>
                    <div><span>Clearer RFQ wording</span><p>{richText(better.text)}</p></div>
                  </div>
                  {note && <p className={styles.mistakeNote}>{richText(note.text)}</p>}
                </article>;
              }
              if (group?.kind === "case") {
                const [heading, detail] = group.parts;
                if (heading.kind !== "heading" || detail.kind !== "paragraph" || group.parts.length !== 2) {
                  throw new Error("Incomplete request case source structure has changed");
                }
                return <article className={styles.caseCard} key={key}>
                  <h3 id={headingId(heading.text)}>{heading.text}</h3>
                  <p>{richText(detail.text)}</p>
                </article>;
              }
              if (group?.kind === "foil") {
                const foilParts = group.parts.slice(0, 3);
                const braidParts = group.parts.slice(3);
                return <div className={styles.constructionComparison} key={key}>
                  {[foilParts, braidParts].map((parts) => {
                    const [heading, explanation, action] = parts;
                    if (heading.kind !== "heading" || explanation.kind !== "paragraph" || action.kind !== "paragraph") {
                      throw new Error("Screen construction source structure has changed");
                    }
                    return <article key={heading.text}>
                      <h3 id={headingId(heading.text)}>{heading.text}</h3>
                      <p>{richText(explanation.text)}</p>
                      <p>{richText(action.text)}</p>
                    </article>;
                  })}
                </div>;
              }
              if (block.kind === "rule") return <hr className={styles.rule} key={key} />;
              if (block.kind === "heading") {
                section = block.text.toLowerCase();
                const Heading = block.level === 2 ? "h2" : "h3";
                const isRelated = section.startsWith("related huanyu cable");
                const isSources = /^(technical sources|references|authoritative reference|standards & official references|technical construction examples)/.test(section);
                return <div className={styles.headingGroup} key={key}>
                  {index === firstSectionIndex && <nav className={styles.toc} aria-label="In this guide">
                    <p className={styles.tocTitle}>In This Guide</p>
                    <ol>{toc.map((item) => <li key={item.heading}><a href={"#" + headingId(item.heading)}>{item.label}</a></li>)}</ol>
                  </nav>}
                  <Heading id={headingId(block.text)} className={isRelated ? styles.relatedHeading : isSources ? styles.sourcesHeading : ""}>{block.text}</Heading>
                </div>;
              }
              if (block.kind === "paragraph") {
                if (guide.slug === "shielded-vs-unshielded-control-instrumentation-cables" && /^\*\*Stage [12] —/.test(block.text)) return <h3 className={styles.stageHeading} key={key}>{richText(block.text)}</h3>;
                const faq = section === "frequently asked questions";
                const caution = block.text.startsWith("**Important:**") || block.text.startsWith("**Buyer rule:**") || block.text.startsWith("**Procurement tip:**");
                if (guide.slug === "how-to-identify-cable-specifications" && block.text.startsWith("**Confirmed / proposed / unknown**")) {
                  return <div className={styles.statusBlock} key={key}>
                    <p>{richText(block.text)}</p>
                    <h3>Separate What Is Stated, Proposed, and Still Unknown</h3>
                    <p className={styles.statusIntro}>Illustrative example only. A buyer&apos;s wording is not an approved engineering specification.</p>
                    <div className={styles.statuses} aria-label="RFQ information states">
                      <section><h4>Known / Stated in the RFQ</h4><p>The buyer wrote “4 × 10 mm² XLPE cable”. This is the information supplied, not independent verification of the construction.</p></section>
                      <section><h4>Proposed / For engineering review</h4><p>A supplier may describe an explicitly labelled candidate construction for review. The proposal is not yet approved or interchangeable with the original requirement.</p></section>
                      <section><h4>To be confirmed</h4><p>Rated voltage, conductor material and class, sheath, screen/armour, installation conditions and applicable standard.</p></section>
                    </div>
                  </div>;
                }
                return <p className={[isTakeaway(block.text) ? styles.takeaway : "", caution ? styles.caution : "", faq ? styles.faq : ""].join(" ")} key={key}>{richText(block.text)}</p>;
              }
              if (block.kind === "quote") return <blockquote className={styles.quote} key={key}>{richText(block.text)}</blockquote>;
              if (block.kind === "table") {
                const conceptTable = (guide.slug === "cable-standards-vs-certifications" && section.startsWith("1. four different questions")) ||
                  (guide.slug === "shielded-vs-unshielded-control-instrumentation-cables" && (section.startsWith("2. four common screen") || section.startsWith("4. screen versus armour")));
                return <div className={[styles.tableArea, conceptTable ? styles.conceptTable : ""].join(" ")} key={key}>
                <p className={styles.tableHint}>Table: swipe horizontally to see all columns.</p>
                <div className="buyer-guide-table-wrap">
                  <table className={"buyer-guide-table " + styles.table}>
                    <thead><tr>{block.rows[0]?.map((cell, cellIndex) => <th scope="col" key={cellIndex}>{richText(cell)}</th>)}</tr></thead>
                    <tbody>{block.rows.slice(1).map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{richText(cell)}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              </div>;
              }
              const isSources = /^(technical sources|references|authoritative reference|standards & official references|technical construction examples)/.test(section);
              const isRelated = section.startsWith("related huanyu cable");
              const isChecklist = /checklist/.test(section) || (guide.slug === "shielded-vs-unshielded-control-instrumentation-cables" && section.startsWith("5. core, pair"));
              const isDimension = guide.slug === "how-to-identify-cable-specifications" && section.startsWith("1. first check what the dimension");
              const ListTag = block.ordered ? "ol" : "ul";
              if (isSources && guide.slug === "cable-standards-vs-certifications") {
                if (block.items.length !== 14) throw new Error("K01 authoritative source count has changed: " + section + " " + block.items.length);
                const sourceGroups = [
                  { label: "IEC", indices: [0, 1, 2] },
                  { label: "European standards and regulation", indices: [3, 4, 5, 6, 12] },
                  { label: "UL", indices: [7, 8] },
                  { label: "Certification bodies and other official sources", indices: [9, 10, 11, 13] },
                ];
                return <div className={styles.sourceGroups} key={key}>
                  {sourceGroups.map((group) => <section key={group.label}>
                    <h4>{group.label}</h4>
                    <ol className={styles.sources}>{group.indices.map((sourceIndex) =>
                      <li key={sourceIndex}>{richText(block.items[sourceIndex])}</li>)}</ol>
                  </section>)}
                </div>;
              }
              return <ListTag className={[styles.list, isSources ? styles.sources : "", isRelated ? styles.related : "", isChecklist ? styles.checklist : "", isDimension ? styles.dimensions : ""].join(" ")} key={key}>
                {block.items.map((item, itemIndex) => {
                  if (guide.slug === "shielded-vs-unshielded-control-instrumentation-cables" &&
                      section.startsWith("8. when the buyer") && item.startsWith("Does the original schedule")) {
                    const splitAt = item.indexOf(" Abbreviations such as ");
                    if (splitAt < 0) throw new Error("IS/OS/IOS caution was not found");
                    return <li key={itemIndex}>{richText(item.slice(0, splitAt))}
                      <aside className={styles.abbreviationNote}>{richText(item.slice(splitAt + 1))}</aside>
                    </li>;
                  }
                  return <li key={itemIndex}>{richText(item)}</li>;
                })}
              </ListTag>;
            })}
          </div>
          <div className="update-article-cta buyer-guide-cta">
            <h2>Send Your Cable Requirements</h2>
            <p>Share your cable schedule, drawing or available specification for project-specific quotation review.</p>
            <Link className="button" href="/contact" data-ga-event="rfq_click" data-ga-cta-location="buyer_guide_cta">Send Requirements</Link>
          </div>
        </div>
      </section>
    </article>
  );
}


