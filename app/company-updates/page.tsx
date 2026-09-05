import { CompanyUpdateCard } from "@/components/CompanyUpdateCard";
import { companyUpdates } from "@/data/companyUpdates";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Company Updates | HUANYU CABLE",
  description: "Follow Huanyu Cable company updates related to manufacturing development, operations and quality responsibility.",
  path: "/company-updates",
  image: "/images/site/heroes/resources-hero-manufacturing-development-v2.webp",
  imageAlt: "Huanyu Cable company updates",
});

export default function CompanyUpdatesPage() {
  return (
    <>
      <section
        className="page-hero page-hero-company-updates"
        style={{
          backgroundImage:
            'linear-gradient(115deg, rgba(4, 20, 33, 0.9), rgba(8, 58, 87, 0.66)), url("/images/site/heroes/resources-hero-manufacturing-development-v2.webp")',
          backgroundPosition: "center 50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
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
