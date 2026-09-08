# AI MERGE PROMPT — TPKELE Standards Database V2

Integrate this feature into the EXISTING TPKELE production repository hosted on GitHub + Vercel.

## Do NOT
- do not replace the current homepage
- do not create a second website shell
- do not overwrite TPKELE Header/Footer
- do not remove current i18n / analytics / SEO components
- do not change existing package versions unless necessary

## Add / merge
- `/resources/standards-database`
- `/resources/standards-database/[slug]`
- `components/standards/*`
- `data/standards.ts`
- `lib/standards.ts`
- only the Standards Database CSS needed from `app/globals.css`

## Navigation
Replace:
`/resources#standards-database`

with:
`/resources/standards-database`

Fix the visible translation key so users see a human-readable label, not `nav.resources.standards-database`.

## Preserve production design
Reuse the live TPKELE:
- logo
- header
- footer
- typography
- green design tokens
- buttons
- responsive system
- breadcrumbs
- metadata patterns
- localization

## Data rules
`data/standards.ts` is the standards source of truth.

Do not convert the 32 records into duplicated JSX.

Keep:
- code
- system
- edition / year
- referenceType
- status
- products
- applications
- relevance
- warning
- official source
- lastReviewed

## Accuracy
Do not invent certification.
Do not say a TPKELE model is certified merely because a standard is product-relevant.
Do not claim IEC and UL standards are equivalent.
Do not copy full copyrighted standard text.

## SEO
Preserve:
- canonical
- dynamic detail metadata
- BreadcrumbList
- FAQPage
- sitemap entries

## Final check
Run:
```bash
npm install
npm run build
```
Resolve all Next.js / TypeScript build errors before deployment.
