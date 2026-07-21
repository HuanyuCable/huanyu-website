import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

export function ProductCard({ product, numbered = false }: { product: Product; numbered?: boolean }) {
  const isOverheadAcsr =
    product.detailVariant === "overhead-insulated-cables" ||
    product.detailVariant === "acsr-bare-overhead-conductors";
  const usesRefinedLszhImage = product.imagePath === "/images/products/final-refined/home-lszh-core-card.webp";

  return (
    <Link
      className={`product-card${isOverheadAcsr ? " product-card-overhead-acsr" : ""}${usesRefinedLszhImage ? " product-card-refined-image" : ""}`}
      href={`/products/${product.slug}`}
    >
      <div className="product-image-wrap">
        <Image
          src={product.imagePath}
          alt={product.imageAlt}
          width={usesRefinedLszhImage ? 1400 : 640}
          height={usesRefinedLszhImage ? 980 : 480}
          sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
        {numbered && <span className="priority-badge">0{product.priority}</span>}
      </div>
      <div className="product-card-body">
        <span className="eyebrow">{product.category === "Core" ? "Core product" : "Supporting range"}</span>
        <h3>{product.name}</h3>
        <p>{product.tagline}</p>
        <div className="tag-row">
          <span>{product.voltage}</span>
        </div>
        <span className="text-link">View product capability <span aria-hidden="true">→</span></span>
      </div>
    </Link>
  );
}
