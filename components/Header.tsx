"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About Us",
    items: [
      { href: "/about#company-overview", label: "Company Overview" },
      { href: "/about#manufacturing-base", label: "Manufacturing Base" },
      { href: "/about#people-culture", label: "People & Culture" },
      { href: "/about#responsible-manufacturing", label: "Responsible Manufacturing" },
      { href: "/about", label: "View About Huanyu" },
    ],
  },
  {
    href: "/products",
    label: "Products",
    items: [
      { href: "/products/low-voltage-armoured-power-cables", label: "LV Armoured Power Cables" },
      { href: "/products/medium-voltage-power-cables", label: "Medium Voltage Power Cables" },
      { href: "/products/lszh-fire-safe-cables", label: "LSZH & Fire-safe Cables" },
      { href: "/products", label: "Complementary Ranges" },
      { href: "/products", label: "View All Products" },
    ],
  },
  {
    href: "/applications",
    label: "Applications",
    items: [
      { href: "/applications", label: "Power Distribution" },
      { href: "/applications", label: "Industrial Facilities" },
      { href: "/applications", label: "Commercial Buildings" },
      { href: "/applications", label: "Infrastructure" },
      { href: "/applications", label: "View All Applications" },
    ],
  },
  {
    href: "/quality",
    label: "Quality",
    items: [
      { href: "/quality", label: "Quality Overview" },
      { href: "/quality#credentials", label: "Credentials & Certificates" },
    ],
  },
  {
    href: "/company-updates",
    label: "Resources",
    items: [{ href: "/company-updates", label: "News & Updates" }],
  },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Huanyu Cable home">
          <Image className="brand-trademark" src="/media/brand/guose-trademark.png" alt="Guose registered trademark of Huanyu Cable" width={42} height={42} priority />
          <span>
            <strong>HUANYU CABLE</strong>
            <small>Powering Projects Since 1995</small>
          </span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={open ? "main-nav open" : "main-nav"} aria-label="Primary navigation">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <div className={item.items ? "nav-item has-dropdown" : "nav-item"} key={item.label}>
                <Link href={item.href} className={active ? "active" : ""} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
                {item.items && (
                  <div className="nav-dropdown">
                    {item.items.map((child) => (
                      <Link href={child.href} key={`${item.label}-${child.label}`} onClick={() => setOpen(false)}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <Link className="button button-small" href="/contact" onClick={() => setOpen(false)}>
            Request a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
