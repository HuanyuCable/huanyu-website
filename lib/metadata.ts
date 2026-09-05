import type { Metadata } from "next";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
}: PageMetadataInput): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title,
      description,
      url: path,
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
