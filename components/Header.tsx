"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/quality", label: "Quality" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Huanyu Cable home">
          <span className="brand-mark">H</span>
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
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname.startsWith(item.href) ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link className="button button-small" href="/contact" onClick={() => setOpen(false)}>
            Request a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
