import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "HUANYU CABLE | Power Cable Manufacturer in China",
    template: "%s | HUANYU CABLE",
  },
  description: site.description,
  applicationName: site.name,
  verification: {
    google: "GxvvRjzMuLGJgnCyegOwg545G0LUFLBFq8kYHZ9Q7Cg",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: "HUANYU CABLE | Power Cable Manufacturer in China",
    description: site.description,
    url: site.url,
    images: [{ url: "/images/og-cover.svg", width: 1200, height: 630, alt: "Huanyu Cable factory and core cable products" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HUANYU CABLE | Power Cable Manufacturer in China",
    description: site.description,
    images: ["/images/og-cover.svg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
    foundingDate: site.founded,
    address: { "@type": "PostalAddress", addressLocality: "Hefei", addressRegion: "Anhui", addressCountry: "CN" },
    email: site.email,
  };

  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      </body>
    </html>
  );
}
