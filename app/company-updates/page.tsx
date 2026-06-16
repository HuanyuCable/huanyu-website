import type { Metadata } from "next";
import { CompanyUpdateCard } from "@/components/CompanyUpdateCard";
import { companyUpdates } from "@/data/companyUpdates";

export const metadata: Metadata = {
  title: "Company Updates",
  description: "Follow Huanyu Cable company updates related to manufacturing development, operations and quality responsibility.",
  alternates: { canonical: "/company-updates" },
};

export default function CompanyUpdatesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">Company Updates</span>
          <h1>Company development, manufacturing and quality responsibility.</h1>
          <p>Updates from Huanyu Cable focused on practical company development, responsible manufacturing and continued operational improvement.</p>
        </div>
      </section>
      <section className="section">
        <div className="container update-grid">
          {companyUpdates.map((update) => <CompanyUpdateCard key={update.slug} update={update} />)}
        </div>
      </section>
    </>
  );
}
