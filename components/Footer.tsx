import Link from "next/link";
import { coreProducts } from "@/data/products";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">H</span>
            <span>
              <strong>HUANYU CABLE</strong>
              <small>Hefei, China</small>
            </span>
          </div>
          <p>{site.description}</p>
        </div>
        <div>
          <h3>Core Products</h3>
          {coreProducts.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`}>{product.shortName}</Link>
          ))}
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/about">About Huanyu</Link>
          <Link href="/quality">Quality & Testing</Link>
          <Link href="/applications">Applications</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.address}</span>
          <Link href="/contact">Send project requirements</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {site.legalName} All rights reserved.</span>
        <span>Technical data is subject to final confirmation.</span>
      </div>
    </footer>
  );
}
