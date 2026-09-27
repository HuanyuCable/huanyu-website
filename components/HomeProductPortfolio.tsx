"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./HomeProductPortfolio.module.css";

const portfolioCategories = [
  {
    number: "01",
    title: "Power & Infrastructure",
    keywords: "LV Armoured · LV XLPE · MV XLPE · LSZH · Overhead",
    summary: "Cable solutions for power distribution, industrial facilities and infrastructure projects, covering key low- and medium-voltage and overhead product families.",
    families: [
      "Low Voltage Armoured Power Cables",
      "Low Voltage XLPE Power Cables",
      "Medium Voltage XLPE Power Cables",
      "LSZH & Fire-safe Cables",
      "Overhead Line Products",
    ],
    cta: "Explore Power & Infrastructure →",
    href: "/products#power-infrastructure",
    image: "/images/home/product-portfolio/01_power_infrastructure.webp",
    imageAlt: "Power and infrastructure cable applications",
  },
  {
    number: "02",
    title: "Building & Construction",
    keywords: "Building Wires · BV · BVR",
    summary: "PVC insulated building-wire families for fixed wiring, distribution boards and panel connections, with sheathed options where required.",
    families: [
      "Building Wires & House Wiring",
      "Single-Core PVC Building Wire (BV)",
      "Flexible PVC Building Wire (BVR)",
    ],
    cta: "Explore Building & Construction →",
    href: "/products#building-construction",
    image: "/images/home/product-portfolio/02_building_construction.webp",
    imageAlt: "Building and construction cable applications",
  },
  {
    number: "03",
    title: "Renewable Energy",
    keywords: "Solar · Energy Storage · EV Charging",
    summary: "Project-oriented cable families for photovoltaic systems, energy storage connections and EV charging infrastructure.",
    families: ["Solar Cables", "Energy Storage Cables", "EV Charging Cables"],
    cta: "Explore Renewable Energy →",
    href: "/products#renewable-energy",
    image: "/images/home/product-portfolio/03_renewable_energy.webp",
    imageAlt: "Renewable energy cable applications",
  },
  {
    number: "04",
    title: "Industrial Control & Automation",
    keywords: "Control · Screened · RS485 · Motion",
    summary: "Cable families for control circuits, screened control, RS485 data transmission and motion / automation requirements.",
    families: [
      "Control & Screened",
      "RS485 Data Transmission",
      "Cable-Carrier / Drag-Chain",
      "Motion / Automation",
    ],
    cta: "Explore Industrial Control & Automation →",
    href: "/products#industrial-control-automation",
    image: "/images/home/product-portfolio/04_industrial_control_automation.webp",
    imageAlt: "Industrial control and automation applications",
  },
  {
    number: "05",
    title: "Communication & ELV",
    keywords: "Network · CCTV & RF · Fire Alarm · Audio & PA",
    summary: "Project cable families for structured cabling, CCTV and RF, fire alarm, audio and PA requirements in ELV systems.",
    families: [
      "Structured Cabling & Network",
      "CCTV, Coaxial & RF",
      "Fire Alarm",
      "Audio, PA & Telephone",
    ],
    cta: "Explore Communication & ELV →",
    href: "/products#communication-elv",
    image: "/images/home/product-portfolio/05_communication_elv.webp",
    imageAlt: "Communication and ELV cable applications",
  },
  {
    number: "06",
    title: "Special Cable Solutions",
    keywords: "Rubber-Sheathed Flexible · IEC 60245",
    summary: "Rubber- or elastomer-sheathed flexible cord and cable families for portable, movable, construction and industrial equipment requirements.",
    families: [
      "60245 IEC 53",
      "60245 IEC 57",
      "60245 IEC 66",
      "Rubber-Sheathed Flexible Cables",
    ],
    cta: "Explore Special Cable Solutions →",
    href: "/products#special-cable-solutions",
    image: "/images/home/product-portfolio/06_special_cable_solutions.webp",
    imageAlt: "Flexible cable applications for portable and movable equipment",
  },
] as const;

export function HomeProductPortfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = portfolioCategories[activeIndex];

  return (
    <section className={styles.section} aria-labelledby="home-product-portfolio-title">
      <div className="container">
        <div className={styles.heading}>
          <div>
            <span className={styles.eyebrow}>Product Portfolio</span>
            <h2 id="home-product-portfolio-title">Cable Solutions Across Power, Building &amp; Industrial Applications</h2>
            <p>From power distribution and building wiring to renewable energy, industrial control, communication &amp; ELV and flexible cable applications — explore our cable families by project requirement.</p>
          </div>
          <Link className={styles.allProductsLink} href="/products">Explore All Cable Products <span aria-hidden="true">→</span></Link>
        </div>

        <div className={styles.desktopLayout}>
          <nav className={styles.directory} aria-label="Product portfolio categories">
            {portfolioCategories.map((category, index) => (
              <Link
                className={`${styles.directoryRow}${activeIndex === index ? ` ${styles.activeRow}` : ""}`}
                href={category.href}
                key={category.number}
                onFocus={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <span className={styles.rowNumber}>{category.number}</span>
                <span className={styles.thumbnail}>
                  <Image src={category.image} alt="" width={96} height={54} sizes="88px" />
                </span>
                <span className={styles.rowCopy}>
                  <strong>{category.title}</strong>
                  <small>{category.keywords}</small>
                </span>
                <span className={styles.rowArrow} aria-hidden="true">→</span>
              </Link>
            ))}
          </nav>

          <article className={styles.feature} key={activeCategory.number}>
            <Image
              className={styles.featureImage}
              src={activeCategory.image}
              alt={activeCategory.imageAlt}
              fill
              sizes="(max-width: 980px) 100vw, 61vw"
            />
            <div className={styles.featureShade} />
            <div className={styles.featureContent}>
              <span className={styles.featureNumber}>{activeCategory.number}<i aria-hidden="true" /></span>
              <h3>{activeCategory.title}</h3>
              <p>{activeCategory.summary}</p>
              <ul>
                {activeCategory.families.map((family) => <li key={family}>{family}</li>)}
              </ul>
              <Link className={styles.featureCta} href={activeCategory.href}>{activeCategory.cta}</Link>
            </div>
          </article>
        </div>

        <div className={styles.mobileList} aria-label="Product portfolio categories">
          {portfolioCategories.map((category) => (
            <Link className={styles.mobileEntry} href={category.href} key={category.number}>
              <span className={styles.mobileImage}>
                <Image src={category.image} alt={category.imageAlt} fill sizes="(max-width: 640px) calc(100vw - 28px), 92vw" />
              </span>
              <span className={styles.mobileCopy}>
                <span className={styles.mobileNumber}>{category.number}</span>
                <span>
                  <strong>{category.title}</strong>
                  <small>{category.keywords}</small>
                </span>
                <span className={styles.mobileArrow} aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
