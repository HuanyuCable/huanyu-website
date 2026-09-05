import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "HUANYU CABLE | Power Cable Manufacturer in China",
    template: "%s | HUANYU CABLE",
  },
  description: site.description,
  applicationName: site.name,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": site.organizationId,
        name: site.legalName,
        legalName: site.legalName,
        alternateName: ["HUANYU CABLE", "合肥环宇电线电缆有限责任公司"],
        url: site.url,
        sameAs: ["https://www.hfhuanyu.com/"],
        logo: site.logoUrl,
        brand: { "@type": "Brand", "@id": site.brandId, name: "HUANYU CABLE" },
        foundingDate: site.founded,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Luyang Industrial Park, Luyang District",
          addressLocality: "Hefei",
          addressRegion: "Anhui",
          addressCountry: "CN",
        },
        email: site.email,
        contactPoint: { "@type": "ContactPoint", contactType: "sales", email: site.email, availableLanguage: "English" },
      },
      {
        "@type": "WebSite",
        "@id": site.websiteId,
        name: "HUANYU CABLE",
        url: site.url,
        publisher: { "@id": site.organizationId },
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <JsonLd data={structuredData} />
      </body>
    </html>
  );
}
