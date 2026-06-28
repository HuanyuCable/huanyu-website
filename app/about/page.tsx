import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SelectedCredentialsCarousel } from "@/components/SelectedCredentialsCarousel";

export const metadata: Metadata = {
  title: "About Huanyu Cable",
  description: "Learn about Huanyu Cable's manufacturing base, company development and quality-oriented approach.",
  alternates: { canonical: "/about" },
};

const strengths = [
  {
    title: "Focused export portfolio",
    copy: "Low-voltage armoured cables, medium-voltage power cables and LSZH fire-safe cable solutions remain the core public product families.",
  },
  {
    title: "Project-based review",
    copy: "Cable selection, documentation and packing details are reviewed against project requirements before order confirmation.",
  },
  {
    title: "Manufacturing evidence",
    copy: "Workshop, equipment and production-site materials are presented to help buyers review the operating base behind the offer.",
  },
  {
    title: "Documented quality process",
    copy: "Quality control, release documents and available certificates are organized for practical project communication.",
  },
  {
    title: "Responsible operation",
    copy: "Management-system and green-manufacturing credentials support a structured approach to quality, safety, environment and energy use.",
  },
  {
    title: "Long-term local presence",
    copy: "Huanyu Cable is based in Hefei, Anhui, China, with continuous wire and cable industry experience since 1995.",
  },
];

const capabilityImages = [
  ["/images/site/supporting/factory-production-lines.webp", "Production line overview", "Cable manufacturing lines and copper reels in Huanyu Cable workshop"],
  ["/images/site/supporting/factory-copper-aisle.webp", "Copper conductor area", "Copper conductors and production equipment inside Huanyu Cable workshop"],
  ["/images/site/supporting/factory-conductor-process-detail.webp", "Conductor processing detail", "Copper conductor processing detail during cable manufacturing"],
  ["/images/site/supporting/factory-cable-drum-lifting.webp", "Cable drum handling", "Large cable drum handled by overhead crane in Huanyu Cable workshop"],
];

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <Image
          src="/images/site/heroes/about-hero-factory-entrance.webp"
          alt="Huanyu Cable factory entrance and production building in Hefei, China"
          fill
          priority
          sizes="100vw"
        />
        <div className="about-hero-overlay" />
        <div className="container about-hero-content">
          <span className="eyebrow light">About Huanyu Cable</span>
          <h1>About Huanyu Cable</h1>
          <p>
            Huanyu Cable is a Hefei-based wire and cable manufacturer focused on practical project supply,
            documented quality control and export documentation and communication for overseas engineering buyers.
          </p>
        </div>
      </section>

      <section className="section about-company-section" id="company-overview">
        <div className="container split company-overview">
          <div>
            <span className="eyebrow">Company Overview</span>
            <h2>Cable manufacturing experience since 1995.</h2>
            <p className="lead">
              Huanyu Cable is based in Hefei, Anhui, China. The company presents its international offering around
              selected cable families, practical manufacturing evidence and project-oriented documentation.
            </p>
            <p>
              For overseas buyers, the public website is structured to make the main product position, manufacturing
              base, quality process and verified credentials easier to review before detailed inquiry discussion.
            </p>
          </div>
          <Image
            src="/images/site/refinement/about-factory-gate.png"
            alt="Huanyu Cable factory gate and company entrance in Hefei, China"
            width={760}
            height={500}
            sizes="(max-width: 760px) 100vw, 45vw"
          />
        </div>
      </section>

      <section className="section section-muted about-strengths-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Why Huanyu</span>
              <h2>Practical evidence for project buyers.</h2>
            </div>
            <p>Huanyu Cable keeps the About page focused on buyer-relevant trust signals rather than broad claims.</p>
          </div>
          <div className="why-huanyu-grid">
            {strengths.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-manufacturing-section" id="manufacturing-base">
        <div className="container split manufacturing-base">
          <div>
            <span className="eyebrow">Manufacturing Base</span>
            <h2>A manufacturing base in Hefei, China.</h2>
            <p className="lead">
              Huanyu Cable operates from a site that includes office, production and order-preparation areas supporting
              wire and cable manufacturing. The factory-gate and office images provide a direct view of the company site.
            </p>
          </div>
          <div className="about-image-pair">
            <Image
              src="/images/site/heroes/contact-hero-office-reception.webp"
              alt="Huanyu Cable office and visitor reception area"
              width={720}
              height={480}
              sizes="(max-width: 760px) 100vw, 45vw"
            />
            <Image
              src="/images/site/supporting/about-brand-wall-reception.webp"
              alt="Huanyu Cable brand wall and office reception area"
              width={720}
              height={480}
              sizes="(max-width: 760px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="section section-muted about-capability-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Manufacturing and Technical Capability</span>
              <h2>Workshop evidence connected with quality review.</h2>
            </div>
            <p>
              Production areas, process control and release documentation are reviewed together with the selected cable
              standard and order requirements.
            </p>
          </div>
          <div className="factory-gallery">
            {capabilityImages.map(([src, caption, alt]) => (
              <figure key={src}>
                <Image src={src} alt={alt} width={640} height={430} sizes="(max-width: 760px) 100vw, 25vw" />
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>
          <Link className="text-link about-quality-link" href="/quality">
            Review quality control and documentation <span>-&gt;</span>
          </Link>
        </div>
      </section>

      <section className="section about-people-section" id="people-culture">
        <div className="container split people-responsible">
          <div className="culture-image culture-image-wide">
            <Image
              src="/images/site/heroes/resources-hero-employee-culture.webp"
              alt="Huanyu Cable employees during the 2025 company welfare trip to Zhangjiajie"
              width={760}
              height={500}
              sizes="(max-width: 760px) 100vw, 45vw"
            />
          </div>
          <div id="responsible-manufacturing">
            <span className="eyebrow">People & Responsible Manufacturing</span>
            <h2>A stable team and structured operating discipline.</h2>
            <p className="lead">
              Huanyu Cable supports employee welfare through staff activities, family participation opportunities and
              seasonal workplace care. These people-focused practices sit alongside management-system, energy-management
              and green-manufacturing credentials.
            </p>
            <p>
              The credentials are presented according to their stated scope and category, including management-system
              certifications, third-party green and digital manufacturing evaluations, official recognitions and selected
              domestic product compliance documents.
            </p>
            <Link className="text-link" href="/quality#credentials">
              View credentials and certificates <span>-&gt;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-muted selected-credentials-section" id="selected-credentials">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Selected Credentials</span>
              <h2>Verified documents presented by category.</h2>
            </div>
            <Link className="button button-small" href="/quality#credentials">
              View All Credentials
            </Link>
          </div>
          <SelectedCredentialsCarousel />
        </div>
      </section>

      <section className="section about-updates-section">
        <div className="container update-callout">
          <div>
            <span className="eyebrow">Company Updates</span>
            <h2>Follow Huanyu&apos;s company development.</h2>
            <p>Read selected updates related to manufacturing development, operations and quality responsibility.</p>
          </div>
          <Link className="button" href="/company-updates">
            View Company Updates
          </Link>
        </div>
      </section>
    </>
  );
}
