import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const footerProducts = [
  { href: "/products/yjv22-yjv23-low-voltage-armoured-power-cables", label: "LV Armoured Power Cables" },
  { href: "/products/medium-voltage-power-cables", label: "Medium Voltage Power Cables" },
  { href: "/products/lszh-fire-safe-cables", label: "LSZH & Fire-safe Cables" },
  { href: "/products#overhead-line-products", label: "Overhead Line Products" },
  { href: "/products/building-wires-flexible-cables", label: "Building Wires & Flexible Cables" },
  { href: "/products/control-instrumentation-cables", label: "Control & Instrumentation Cables" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-column footer-brand-column">
          <Link href="/" className="brand footer-brand" aria-label="Huanyu Cable home">
            <Image className="brand-trademark" src="/media/brand/guose-trademark.png" alt="Guose registered trademark of Huanyu Cable" width={42} height={42} />
            <span>
              <strong>HUANYU CABLE</strong>
              <small>Hefei, Anhui, China</small>
            </span>
          </Link>
          <p>{site.description}</p>
        </div>
        <div className="footer-column">
          <h3>Core Products</h3>
          {footerProducts.map((product) => (
            <Link key={product.href} href={product.href}>{product.label}</Link>
          ))}
        </div>
        <div className="footer-column">
          <h3>Company / Location</h3>
          <Link href="/about">About Huanyu</Link>
          <Link href="/applications">Applications</Link>
          <Link href="/quality">Quality & Testing</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/company-updates">Company Updates</Link>
          <span>Luyang Industrial Park, Luyang District</span>
          <span>Hefei, Anhui, China</span>
        </div>
        <div className="footer-column footer-contact-column">
          <h3>Contact</h3>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>WhatsApp: {site.whatsapp}</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 {site.legalName} All rights reserved.</span>
        <span>Technical data is subject to final confirmation.</span>
      </div>
    </footer>
  );
}
