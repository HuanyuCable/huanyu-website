# Deployment Handoff: GitHub + Vercel + Cloudflare R2 + Namecheap

## 1. Responsibility of each platform

- **Namecheap:** domain registrar only.
- **Cloudflare:** DNS authority and R2 object storage/CDN for images, videos and PDFs.
- **GitHub:** private source repository and revision history.
- **Vercel:** builds and serves the Next.js website; preview deployments for every branch or pull request.
- **Resend:** sends inquiry emails from the Vercel API route.

## 2. Recommended domain topology

- `www.huanyucable.com` → Vercel production website
- `huanyucable.com` → redirect to `www.huanyucable.com`
- `assets.huanyucable.com` → Cloudflare R2 public custom domain
- `sales@huanyucable.com` → existing or chosen email provider

## 3. DNS sequence

1. At Namecheap, keep the domain registration but change nameservers to the two Cloudflare nameservers assigned to the zone.
2. Before changing nameservers, copy all current DNS records, especially MX, SPF, DKIM and DMARC.
3. In Cloudflare DNS, recreate all email records.
4. Import the GitHub repository into Vercel.
5. Add `huanyucable.com` and `www.huanyucable.com` to the Vercel project.
6. Add the exact A/CNAME records shown by the Vercel dashboard in Cloudflare DNS.
7. Set `www.huanyucable.com` as primary and redirect the apex domain to `www`.
8. In R2, create a bucket such as `huanyu-media`, then connect `assets.huanyucable.com` as its custom domain.
9. Disable the public `r2.dev` development URL after the custom domain is active.

## 4. R2 media configuration

Recommended object paths:

```text
video/huanyu-factory-desktop.mp4
video/huanyu-factory-mobile.mp4
video/huanyu-factory-poster.webp
products/lv-armoured-power-cable.webp
products/mv-power-cable.webp
products/lszh-fire-safe-cable.webp
products/lv-unarmoured-power-cable.webp
products/building-wire.webp
products/control-cable.webp
products/overhead-rubber-cable.webp
factory/aerial-view.webp
factory/workshop-01.webp
quality/lab-01.webp
certificates/<filename>.pdf
catalogues/huanyu-cable-catalogue.pdf
```

Set correct HTTP metadata on upload:

- MP4: `Content-Type: video/mp4`
- WebP: `Content-Type: image/webp`
- PDF: `Content-Type: application/pdf`
- Long-lived versioned assets: `Cache-Control: public, max-age=31536000, immutable`

Use versioned filenames when replacing important media, for example `huanyu-factory-desktop-v2.mp4`.

## 5. Homepage video recommendations

- Create a 6–12 second silent loop.
- Desktop: 1920×1080 H.264 MP4, target roughly 5–12 MB.
- Mobile: 720×1280 or landscape 960×540 depending on composition, target roughly 2–5 MB.
- Provide a compressed WebP poster.
- Avoid text inside the source video; website text remains HTML for SEO and responsive layout.
- The `<video>` element already uses `muted`, `loop`, `playsInline`, `preload="metadata"` and a poster fallback.

## 6. Vercel environment variables

Copy `.env.example` into Vercel Project Settings → Environment Variables.

Required for production inquiry delivery:

```text
NEXT_PUBLIC_SITE_URL=https://www.huanyucable.com
NEXT_PUBLIC_R2_BASE_URL=https://assets.huanyucable.com
RESEND_API_KEY=<secret>
INQUIRY_TO_EMAIL=sales@huanyucable.com
INQUIRY_FROM_EMAIL=Huanyu Cable Website <website@huanyucable.com>
```

The sending domain must be verified in Resend by adding the requested DNS records in Cloudflare.

## 7. Git and deployment workflow

- `main` branch → production
- `develop` branch → staging/preview
- Each change is made in a feature branch and reviewed through a Vercel preview URL.
- Do not edit production files directly in Vercel.
- Enable Dependabot or a monthly dependency-update routine.

## 8. Deployment acceptance checks

- Homepage video works on desktop and mobile; poster appears under slow connection.
- All navigation links and product slugs return HTTP 200.
- Inquiry form reaches the sales mailbox and replies go to the sender.
- `robots.txt` and `sitemap.xml` are accessible.
- Canonical URLs use `https://www.huanyucable.com`.
- Email MX/SPF/DKIM/DMARC records still work after DNS migration.
- No placeholder phone, WhatsApp, certificate or project data remains.
- Lighthouse checks are performed on mobile and desktop.
- Google Search Console and Bing Webmaster Tools are verified.

## 9. Optional second-stage additions

- Cloudflare Turnstile on the inquiry form.
- GA4 and Microsoft Clarity with consent controls where required.
- MDX-based technical article publishing workflow.
- Spanish, Russian or Arabic versions after the English information architecture is stable.
- CRM/webhook connection after inquiry quality is validated.
