import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Cable Applications | Power Distribution, Buildings and Infrastructure" },
  description:
    "Huanyu Cable supports cable supply for power distribution, buildings, industrial facilities, infrastructure and project-based engineering applications.",
  alternates: { canonical: "/applications" },
};

const applications = [
  {
    title: "Power Distribution",
    products: "LV armoured and MV power cables",
    text: "Distribution feeders, substations and local power networks where construction and test requirements are clearly specified.",
    image: "/images/site/applications/power-distribution-bg.png",
  },
  {
    title: "Industrial Facilities",
    products: "Armoured, MV, control and fire-safe cables",
    text: "Manufacturing, mining, process plants and utility systems requiring mechanical protection and coordinated project supply.",
    image: "/images/site/applications/industrial-facilities-bg.png",
  },
  {
    title: "Commercial & Public Buildings",
    products: "LSZH, flame-retardant and fire-resistant cables",
    text: "Hospitals, data centres, transport hubs and high-occupancy buildings where fire performance is part of the design basis.",
    image: "/images/site/applications/commercial-public-buildings-bg.png",
  },
  {
    title: "Infrastructure Projects",
    products: "Project-specific power cable packages",
    text: "Rail, airport, municipal and construction projects requiring technical review, documents and shipment coordination.",
    image: "/images/site/applications/infrastructure-projects-bg.png",
  },
];

export default function ApplicationsPage() {
  return (
    <>
      <section className="page-hero page-hero-applications"><div className="container"><span className="eyebrow light">Applications</span><h1>Start with the project environment, then confirm the cable.</h1><p>Cable selection starts with the installation environment, applicable standard, voltage rating and required construction.</p></div></section>
      <section className="section">
        <div className="container application-showcase-list">
          {applications.map((item, index) => (
            <article className="application-showcase-row" key={item.title} style={{ backgroundImage: `url(${item.image})` }}>
              <div className="application-showcase-content">
                <span>0{index + 1}</span>
                <h2>{item.title}</h2>
                <strong>{item.products}</strong>
                <p>{item.text}</p>
                <Link className="button button-ghost" href="/contact">Discuss a project</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
