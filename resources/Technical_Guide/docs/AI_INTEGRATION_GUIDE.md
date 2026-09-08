# AI Integration Guide for Existing TPKELE Website

## Goal
Merge this package into the existing TPKELE GitHub + Vercel codebase without breaking the current site architecture.

## Required actions
1. Inspect the current repository and keep the existing framework and global layout.
2. Merge these folders into the live project:
   - `app/`
   - `components/`
   - `data/`
   - `lib/`
   - `styles/`
   - `public/images/guides/`
3. Register the Technical Guide hub route: `/technical-guide`.
4. Register the Market Access landing route: `/market-access`.
5. Register the dynamic guide detail route: `/guides/[slug]`.
6. Keep the left-side automatic scroll navigation and active-section highlight.
7. Keep the green TPKELE visual style. Do not turn the UI blue.
8. Keep the right-side conversion modules:
   - Related Products
   - Export Requirements / Open Market Access Advisor
   - Download Resources
9. Make sure each guide CTA links to `/market-access-advisor?product=...&application=...`.
10. Preserve all local article image assets in `public/images/guides/`.

## Required site-level navigation fit
Map these pages into the current top navigation:
- Technical Guide → `/technical-guide`
- Market Access → `/market-access` or direct link to the advisor
- Support → Keep your current support structure and let the guide CTA link to `/contact`

## Do not do these
- Do not rebuild the whole site from scratch.
- Do not flatten this package into a single HTML file.
- Do not remove the article data JSON files.
- Do not remove article images or replace them with missing placeholders.
- Do not simplify the content to short thin pages that hurt SEO.
