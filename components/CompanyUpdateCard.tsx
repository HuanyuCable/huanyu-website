import Image from "next/image";
import Link from "next/link";
import { CompanyUpdate, formatUpdateDate } from "@/data/companyUpdates";

export function CompanyUpdateCard({ update }: { update: CompanyUpdate }) {
  return (
    <article className="update-card">
      <Link href={`/company-updates/${update.slug}`} className="update-card-image" aria-label={update.title}>
        <Image src={update.image} alt={update.imageAlt} width={720} height={430} sizes="(max-width: 760px) 100vw, 33vw" />
      </Link>
      <div className="update-card-body">
        <div className="update-meta">
          <span>{update.category}</span>
          <time dateTime={update.publishedAt}>{formatUpdateDate(update.publishedAt)}</time>
        </div>
        <h3><Link href={`/company-updates/${update.slug}`}>{update.title}</Link></h3>
        <p>{update.excerpt}</p>
      </div>
    </article>
  );
}
