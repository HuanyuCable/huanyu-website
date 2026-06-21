import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

export function ProductCard({ product, numbered = false }: { product: Product; numbered?: boolean }) {
  const isOverheadAcsr =
    product.detailVariant === "overhead-insulated-cables" ||
    product.detailVariant === "acsr-bare-overhead-conductors";

  return (
    <article className={`product-card${isOverheadAcsr ? " product-card-overhead-acsr" : ""}`}>
      <div className="product-image-wrap">
        <Image
          src={product.imagePath}
          alt={product.imageAlt}
          width={640}
          height={480}
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
        <Link className="text-link" href={`/products/${product.slug}`}>View product capability <span>→</span></Link>
      </div>
    </article>
  );
}
