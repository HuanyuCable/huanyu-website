import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Cable Applications", description: "Cable solutions for power distribution, industrial facilities, commercial buildings and infrastructure projects." };

const applications = [
  { title: "Power Distribution", products: "LV armoured and MV power cables", text: "Distribution feeders, substations and local power networks where construction and test requirements are clearly specified." },
  { title: "Industrial Facilities", products: "Armoured, MV, control and fire-safe cables", text: "Manufacturing, mining, process plants and utility systems requiring mechanical protection and coordinated project supply." },
  { title: "Commercial & Public Buildings", products: "LSZH, flame-retardant and fire-resistant cables", text: "Hospitals, data centres, transport hubs and high-occupancy buildings where fire performance is part of the design basis." },
  { title: "Infrastructure Projects", products: "Project-specific power cable packages", text: "Rail, airport, municipal and construction projects requiring technical review, documents and shipment coordination." },
];

export default function ApplicationsPage() {
  return (
    <>
      <section className="page-hero page-hero-applications"><div className="container"><span className="eyebrow light">Applications</span><h1>Start with the project environment, then confirm the cable.</h1><p>Application pages should connect real use conditions to verified constructions rather than make broad unsupported claims.</p></div></section>
      <section className="section"><div className="container application-detail-grid">{applications.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h2>{item.title}</h2><strong>{item.products}</strong><p>{item.text}</p><Link className="text-link" href="/contact">Discuss a project <span>→</span></Link></article>)}</div></section>
    </>
  );
}
