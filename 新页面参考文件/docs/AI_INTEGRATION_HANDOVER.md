# AI INTEGRATION HANDOVER

You are receiving a GitHub/Vercel/Next.js-ready reference implementation of the CONFIRMED TPKELE Market Access Advisor.

## First action
Open and compare:
- `reference/confirmed-pro-index.html`
- `/resources/market-access-advisor` after running this package

They must visually and functionally match.

## Integration target
Merge the module into the user's EXISTING TPKELE repository.

## Do NOT redesign
Do not create a new version of the page.
Do not simplify it.
Do not replace custom selectors with native `<select>`.
Do not remove panels, tabs, parameters, evidence metadata, or URL state.

## Files to integrate
- `app/resources/market-access-advisor/page.tsx`
- `components/market-access-advisor/MarketAccessAdvisor.tsx`
- `lib/market-access-advisor/*`
- `public/market-access/flags/*`
- `public/market-access/icons/*`

## Existing website integration
Inspect the existing repository before editing.

Reuse the existing:
- Header
- Footer
- layout
- i18n
- SEO helpers
- inquiry/contact system

If the existing site uses `src/app`, move the package's `app`, `components`, and `lib` folders under `src/`.
If it uses root-level `app`, keep the current layout.

## Critical integration rule
Do not ask the user to choose a new UI. The UI is already approved.

## Compliance data
Do not invent new certification facts.
The current data/logic is a safe prototype baseline.
Future verified data can be connected through a provider/API without redesigning the UI.

## Acceptance
After integration:
- npm/pnpm build succeeds
- no asset 404
- flags are local SVG
- query parameters restore state
- product search works
- country search works
- dynamic product parameters work
- tabs work
- Evidence metadata works
- mobile layout works
- visual comparison remains faithful to confirmed preview
