# Huanyu Cable Website Package

Deployable English B2B website starter for **Hefei Huanyu Wire & Cable Co., Ltd.**

## Strategy embodied in this package

- **Visual direction:** QRUNNING-style full-screen factory video and strong first-screen positioning.
- **Information architecture:** Jiapu-style simple, expandable product structure.
- **Business tone:** JENUIN-style standards, quality and technical-resource emphasis.
- **Core priorities:**
  1. Low Voltage Armoured Power Cables
  2. Medium Voltage Power Cables
  3. LSZH & Fire-safe Cables
- Supporting products remain visible but secondary.

## Technology

- Next.js 15 App Router
- TypeScript
- Plain responsive CSS (no UI framework dependency)
- Vercel deployment
- Cloudflare R2 media delivery through `assets.huanyucable.com`
- Resend-based inquiry email endpoint
- GitHub source control

## Local use

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Important before publication

1. Replace placeholder contact details in `lib/site.ts`.
2. Verify every technical claim in `data/products.ts`.
3. Upload real media to R2 using the paths in `CONTENT-CHECKLIST.md`.
4. Configure Resend and inquiry environment variables.
5. Replace placeholder SVG files with real factory and product images.
6. Add verified certificates, test reports and approved project cases.

See `DEPLOYMENT.md` for ACCIO WORK handoff instructions.
