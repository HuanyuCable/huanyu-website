import Link from "next/link";
import type { Product } from "@/data/products";
import { mediaUrl } from "@/lib/media";

export function ProductCard({ product, numbered = false }: { product: Product; numbered?: boolean }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={mediaUrl(product.imagePath, product.fallbackImage)} alt={product.name} loading="lazy" />
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
