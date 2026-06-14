import Link from "next/link";

export default function NotFound() {
  return <section className="section not-found"><div className="container"><span className="eyebrow">404</span><h1>Page not found</h1><p>The requested page may have moved or is not yet published.</p><Link className="button" href="/">Return Home</Link></div></section>;
}
