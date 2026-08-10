import type { Metadata } from "next";
import Link from "next/link";
import { ProjectReferenceCarousel, type ProjectReference } from "@/components/ProjectReferenceCarousel";

const title = "Project References | Utility, Industrial & Infrastructure | HUANYU CABLE";
const description =
  "Explore selected historical cable supply references from Huanyu Cable across power utilities, industrial facilities, public infrastructure and commercial developments in China.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    title,
    description,
    url: "/projects",
  },
};

type ProjectSector = {
  number: string;
  id: string;
  title: string;
  overview: string;
  intro: string;
  references: ProjectReference[];
};

const sectors: ProjectSector[] = [
  {
    number: "01",
    id: "power-utility",
    title: "Power & Utility Projects",
    overview: "Power utilities, generation facilities and electricity infrastructure.",
    intro:
      "Selected historical references involving power utilities, generation facilities and electricity infrastructure.",
    references: [
      { name: "Pudong Power Supply Bureau", location: "Shanghai, China" },
      { name: "Xibaipo Power Plant Phase III Expansion", location: "Hebei, China" },
      { name: "Qianbei Power Plant", location: "Guizhou, China" },
      { name: "Nanjing Power Supply Bureau", location: "Jiangsu, China" },
      { name: "Xiamen Power Supply Company", location: "Fujian, China" },
      { name: "Huainan Power Supply Bureau", location: "Anhui, China" },
    ],
  },
  {
    number: "02",
    id: "industrial-manufacturing",
    title: "Industrial & Manufacturing",
    overview: "Steel, mining, petrochemical, shipbuilding and manufacturing facilities.",
    intro:
      "Selected references across steel, mining, petrochemical, shipbuilding, tyre and manufacturing environments.",
    references: [
      { name: "Jiangnan Shipyard", location: "Shanghai, China" },
      { name: "Hebei Jinxi Iron & Steel", location: "Hebei, China" },
      { name: "Handan Iron & Steel Group", location: "Hebei, China" },
      { name: "Maanshan Iron & Steel", location: "Anhui, China" },
      { name: "Huainan Mining Group", location: "Anhui, China" },
      { name: "Tongling Nonferrous Metals Group", location: "Anhui, China" },
      { name: "Giti Tire (Hefei)", location: "Anhui, China" },
      { name: "Anqing Petrochemical Phase II Project", location: "Anhui, China" },
    ],
  },
  {
    number: "03",
    id: "public-infrastructure",
    title: "Public Infrastructure & Institutions",
    overview: "Airports, bridges, telecommunications, education and other public-sector projects.",
    intro:
      "Selected references involving airports, bridges, telecommunications, education and public infrastructure.",
    references: [
      { name: "Shanghai Pudong International Airport", location: "Shanghai, China" },
      { name: "Xupu Bridge", location: "Shanghai, China" },
      { name: "Hefei Luogang Airport Expansion", location: "Anhui, China" },
      { name: "Huangshan Airport Expansion Project", location: "Anhui, China" },
      { name: "Tsinghua University Gymnasium", location: "Beijing, China" },
      { name: "Changsha Second Long-Distance Telecommunications Hub", location: "Hunan, China" },
    ],
  },
  {
    number: "04",
    id: "commercial-real-estate",
    title: "Commercial & Real Estate",
    overview: "Hotels, office buildings, retail, residential and mixed-use developments.",
    intro: "Selected historical references across high-rise, hotel, retail and commercial developments.",
    references: [
      { name: "Jin Mao Tower", location: "Shanghai, China" },
      { name: "Huafang Jinling International Hotel", location: "Zhangjiagang, Jiangsu, China" },
      { name: "New Dong'an Market", location: "Beijing, China" },
      { name: "Xiangtan Financial Building", location: "Hunan, China" },
    ],
  },
];

const regions = [
  "Shanghai",
  "Beijing",
  "Tianjin",
  "Jiangsu",
  "Fujian",
  "Anhui",
  "Hebei",
  "Henan",
  "Hubei",
  "Hunan",
  "Guizhou",
];

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero page-hero-projects">
        <div className="container">
          <span className="eyebrow light">Project References</span>
          <h1>Project References</h1>
          <p>
            Selected historical cable supply references across power utilities, industrial facilities, public
            infrastructure and commercial developments in China.
          </p>
        </div>
      </section>

      <section className="section projects-intro-section">
        <div className="container projects-intro-grid">
          <div>
            <span className="eyebrow">Supply Experience</span>
            <h2>Cable supply experience across diverse project environments.</h2>
          </div>
          <p className="lead">
            Huanyu Cable has supplied cables for utility networks, industrial facilities, infrastructure
            projects and commercial developments across multiple regions in China. The references below
            represent selected historical supply experience across key project sectors.
          </p>
        </div>
      </section>

      <section className="section section-muted projects-sectors-section">
        <div className="container">
          <div className="projects-section-heading">
            <span className="eyebrow">Project Sectors</span>
            <h2>Selected references across four project sectors.</h2>
            <p className="lead">Historical supply references are grouped by the type of project environment served.</p>
          </div>
          <div className="project-sector-grid">
            {sectors.map((sector) => (
              <a className="project-sector-card" href={`#${sector.id}`} key={sector.id}>
                <span>{sector.number}</span>
                <h3>{sector.title}</h3>
                <p>{sector.overview}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {sectors.map((sector, index) => (
        <section
          className={index % 2 === 0 ? "section project-reference-section" : "section section-muted project-reference-section"}
          id={sector.id}
          key={sector.id}
        >
          <div className="container">
            <div className="project-reference-heading">
              <span>{sector.number} / {sector.title}</span>
              <h2>{sector.title}</h2>
              <p>{sector.intro}</p>
            </div>
            <ProjectReferenceCarousel references={sector.references} sectorTitle={sector.title} />
          </div>
        </section>
      ))}

      <section className="section project-footprint-section">
        <div className="container project-footprint-grid">
          <div>
            <span className="eyebrow light">Project Footprint</span>
            <h2>Historical references across multiple regions in China.</h2>
            <p>
              Selected historical references span major utility, industrial, infrastructure and commercial
              projects across multiple regions in China.
            </p>
          </div>
          <div className="project-region-index" aria-label="Historical project reference regions">
            <div className="project-region-index-summary">
              <strong>{regions.length}</strong>
              <div>
                <span>Regions Represented</span>
                <small>Historical project reference regions</small>
              </div>
            </div>
            <ol className="project-region-index-grid">
              {regions.map((region, index) => (
                <li key={region}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{region}</strong>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="project-reference-note">
        <div className="container">
          <p>
            <strong>Reference note:</strong> The projects and organizations shown above are selected historical
            supply references. Project scope and supplied cable specifications varied according to individual
            procurement requirements.
          </p>
        </div>
      </section>

      <section className="section projects-cta">
        <div className="container projects-cta-grid">
          <div>
            <span className="eyebrow light">Project Inquiry</span>
            <h2>Planning a cable project?</h2>
            <p>
              Share your voltage level, cable type, conductor size, applicable standard and estimated quantity.
              Our team can support technical review and quotation preparation.
            </p>
          </div>
          <div className="projects-cta-actions">
            <Link className="button" href="/contact">Send Project Requirements</Link>
            <Link className="button button-ghost" href="/products">View Cable Products</Link>
          </div>
        </div>
      </section>
    </>
  );
}
