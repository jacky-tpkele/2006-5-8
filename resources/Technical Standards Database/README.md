# TPKELE Standards Database V2

Complete Next.js App Router package for GitHub + Vercel.

## Main route
`/resources/standards-database`

## Dynamic SEO detail routes
`/resources/standards-database/[slug]`

## V2 dataset
- 32 official-source reference records total
- 18 newly added in V2
- IEC + UL official-source links
- Product, application, reference type, status and relevance metadata
- Last-reviewed field on every record

## V2 UI / functionality
- Search by standard number / keyword / product / application
- Quick product filters
- Product-family filters
- Standards-system filters
- Application filters
- NEW Reference Type filters
- Status filters
- NEW "Show V2 additions only"
- Sort by relevance / newest / standard code
- Dynamic SEO standard detail pages
- Product/application relationship map
- Connected Technical Guides / Market Access Advisor / Buyer Trade Support
- FAQ
- Metadata / canonical
- BreadcrumbList schema
- FAQPage schema
- sitemap / robots

## Source-of-truth data
Maintain records in:
`data/standards.ts`

Do not hard-code standard cards into page components.

## Merge rule
This package is intended to be merged into the existing TPKELE GitHub/Vercel website. Do not overwrite the current homepage, header, footer, i18n system, analytics or site-wide SEO structure.

Read `AI_MERGE_PROMPT.md` before merging.

## Local
```bash
npm install
npm run dev
```

## Production verification
```bash
npm run build
```

## Standards accuracy rule
Before making any model-specific certification claim:
- verify official source
- verify current edition / amendment / corrigendum
- verify exact product scope
- verify certificate or test-report model coverage

Product relevance in this database is NOT itself a certification claim.
