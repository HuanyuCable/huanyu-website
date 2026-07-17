"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

type NavDropdownItem =
  | { kind: "group"; label: string }
  | { href: string; label: string };

type NavItem = {
  href: string;
  label: string;
  items?: NavDropdownItem[];
};

const nav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/products",
    label: "Products",
    items: [
      { href: "/products/low-voltage-armoured-power-cables", label: "Low Voltage Armoured Power Cables" },
      { href: "/products/low-voltage-xlpe-power-cables", label: "Low Voltage XLPE Power Cables" },
      { href: "/products/medium-voltage-xlpe-power-cables", label: "Medium Voltage Power Cables" },
      { href: "/products/lszh-fire-safe-cables", label: "LSZH & Fire-safe Cables" },
      { href: "/products/overhead-insulated-cables", label: "Overhead Line Products" },
      { href: "/products/building-wires-flexible-cables", label: "Building Wires & Flexible Cables" },
      { href: "/products/control-instrumentation-cables", label: "Control & Instrumentation Cables" },
      { href: "/products/solar-cables", label: "Solar Cables" },
    ],
  },
  { href: "/applications", label: "Applications" },
  {
    href: "/quality",
    label: "Quality",
    items: [
      { href: "/quality", label: "Quality Overview" },
      { href: "/quality#credentials", label: "Credentials & Certificates" },
    ],
  },
  {
    href: "/resources",
    label: "Resources",
    items: [
      { href: "/resources", label: "Technical Resources" },
      { href: "/company-updates", label: "News & Updates" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const activeDropdownRef = useRef<string | null>(null);
  const pathname = usePathname();

  const closeNavigation = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const closeAllNavigation = useCallback(() => {
    setActiveDropdown(null);
    setOpen(false);
  }, []);

  useEffect(() => {
    closeAllNavigation();
  }, [pathname, closeAllNavigation]);

  useEffect(() => {
    activeDropdownRef.current = activeDropdown;
  }, [activeDropdown]);

  useEffect(() => {
    const handleScroll = () => {
      closeNavigation();
    };

    const handleResize = () => {
      closeAllNavigation();
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        closeAllNavigation();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      const dropdownToFocus = activeDropdownRef.current;
      closeAllNavigation();
      if (dropdownToFocus) {
        triggerRefs.current[dropdownToFocus]?.focus();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeAllNavigation, closeNavigation]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Huanyu Cable home" onClick={closeAllNavigation}>
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
          aria-controls="primary-navigation"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="primary-navigation" className={open ? "main-nav open" : "main-nav"} aria-label="Primary navigation">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            const dropdownId = `nav-dropdown-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
            const isDropdownOpen = activeDropdown === item.label;
            return (
              <div
                className={item.items && isDropdownOpen ? "nav-item has-dropdown dropdown-open" : item.items ? "nav-item has-dropdown" : "nav-item"}
                key={item.label}
                onMouseEnter={() => item.items && setActiveDropdown(item.label)}
                onMouseLeave={() => item.items && setActiveDropdown(null)}
                onFocus={() => item.items && setActiveDropdown(item.label)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                    setActiveDropdown(null);
                  }
                }}
              >
                <Link
                  href={item.href}
                  className={active ? "active" : ""}
                  aria-expanded={item.items ? isDropdownOpen : undefined}
                  aria-controls={item.items ? dropdownId : undefined}
                  aria-haspopup={item.items ? "true" : undefined}
                  ref={(element) => {
                    triggerRefs.current[item.label] = element;
                  }}
                  onClick={closeAllNavigation}
                >
                  {item.label}
                </Link>
                {item.items && (
                  <div className="nav-dropdown" id={dropdownId}>
                    {item.items.map((child) =>
                      "href" in child ? (
                        <Link href={child.href} key={`${item.label}-${child.label}`} onClick={closeAllNavigation}>
                          {child.label}
                        </Link>
                      ) : (
                        <span className="nav-dropdown-heading" key={`${item.label}-${child.label}`}>
                          {child.label}
                        </span>
                      ),
                    )}
                  </div>
                )}
              </div>
            );
          })}
          <Link className="button button-small" href="/contact" onClick={closeAllNavigation}>
            Request a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
