# TPKELE Smart Circuit Breaker BLOG — GitHub + Vercel integration package

## Deliverable
- Full English technical blog article with verified-in-context internal links and product-specific protection caveats.
- Three original customer product photos, optimized WebP; three selected previously generated art assets; and a 1200×630 OG image.
- Next.js App Router drop-in route at `/blog/smart-circuit-breaker-vs-traditional-breaker`: server-rendered content, SEO metadata, BlogPosting/BreadcrumbList/FAQPage JSON-LD, scoped responsive CSS and dynamic 'On this page' navigation.
- `PREVIEW.html` local preview, `ARTICLE_ENGLISH.html`, `SEO_METADATA.json`, and image placement map.

## IMPORTANT: This is a NON-DESTRUCTIVE patch for your existing site
**Do not deploy this ZIP by itself as a replacement for your live repository.** It deliberately does not contain `package.json`, root layout, global nav, sitemap or robots.txt; uploading an independent app could overwrite or orphan the live TPKELE site. A developer/AI should merge the new route and assets into the existing GitHub repository.

1. Inspect the real repo and determine its framework and current blog system (Next.js App Router, Pages Router, Vite/React, static HTML or a CMS). Do **not** assume it is App Router. If it is App Router, copy this package's `app/blog/smart-circuit-breaker-vs-traditional-breaker/` folder into your existing `app/` or `src/app/` location, and merge this package's `public/images/blog/smart-circuit-breaker-vs-traditional-breaker/` into the existing `public` directory. If it is **not** App Router, convert the article and metadata into the current blog template; `ARTICLE_ENGLISH.html` supplies reusable body HTML.
2. Keep the existing layout, header, footer, product nav, inquiry form, and dynamic routes; do not replace `app/layout.tsx` or the root package files. The `PREVIEW.html` contains a **mock header only** and must never be published or indexed.
3. Check the destination slug against existing routes and canonical duplication. Avoid an unnecessary redirect from an already indexed URL; prefer existing route patterns if they differ.
4. Use the content's internal links only after checking the production site; targeted routes include `https://www.tpkele.com/products/smart-circuit-breaker`, `https://www.tpkele.com/products/ac-mcb`, `https://www.tpkele.com/products/din-rail-energy-meter`, `https://www.tpkele.com/resources/standards-database`, `https://www.tpkele.com/resources/market-access-advisor`, `https://www.tpkele.com/resources/buyer-trade-support`, `https://www.tpkele.com/contact` and `https://www.tpkele.com/blog/choose-right-mcb`. Do not invent unpublished URLs. Site links are absolute HTTPS to the same domain and will work in local preview.
5. Add a single listing entry to the existing Blog index, add the URL into the **existing** sitemap generator without overwriting any older entries, and link back from the Smart Wi-Fi product page if editorially suitable.
6. Dates in metadata/JSON-LD are set to 2026-09-23 for handover and MUST be adjusted to the actual publication date; never assert the page was previously published.
7. If your current global layout already publishes Organization/Website JSON-LD, keep it; the article only adds page-specific BlogPosting/BreadcrumbList/FAQPage schema. Do not duplicate schemas on the same route.
8. Confirm with a qualified engineer/actual model datasheets that any planned claim about short-circuit interruption, RCD/RCBO performance, offline behavior or certification is supported. The article intentionally avoids blanket certifications or unverified model claims.
9. Build and preview via your existing commands; validate no 404s in browser devtools, view-source SSR of H1/body/meta, image alt/size, mobile layout, canonical/OG, and site-wide existing routes. Vercel should deploy from your existing GitHub repo without a new Vercel project unless you explicitly want one.

## Offline preview
Double-click `PREVIEW.html` or open via a static server. It uses relative local image/CSS paths. The preview has a mock TPKELE masthead for review; the deploy route relies on your site's existing shell.

## Visual asset caution
Only three of the five previously generated illustrations are published. The earlier comparison checklist image implicitly claimed every smart switch has overcurrent protection and the earlier selection decision diagram confused VA and residual-current protection. These two were excluded and replaced with structured, editable HTML content; see `IMAGE_PLACEMENT_图片位置清单.md`.

## Primary public reference pages used in editorial preparation
- TPKELE smart series: https://www.tpkele.com/products/smart-circuit-breaker
- TPKELE AC MCB: https://www.tpkele.com/products/ac-mcb
- TPKELE DIN rail energy meter: https://www.tpkele.com/products/din-rail-energy-meter
- TPKELE standards: https://www.tpkele.com/resources/standards-database
- IEC 60898-1: https://webstore.iec.ch/en/publication/66269
