# Prompt for the coding AI maintaining tpkele.com

I am giving you a complete standalone Next.js V9 project for a new TPKELE resource page.

## Goal

Merge V9 into my **existing GitHub + Vercel TPKELE website**.

Target route:

`/resources/buyer-trade-support`

## Critical requirements

1. Do not replace or break my existing homepage, root layout, global navigation, footer, fonts, analytics, sitemap, SEO framework or existing routes.
2. Reuse the current TPKELE site's real:
   - header;
   - footer;
   - logo;
   - green brand colors/tokens;
   - container widths;
   - buttons;
   - breadcrumb component;
   - SEO utilities.
3. Preserve V9 functionality:
   - narrow sticky right-side Page Navigation on desktop;
   - TPKELE-green active section indicator;
   - compact mobile page navigation;
   - multi-select packaging/customization;
   - multi-select export documents;
   - conditional paper-box fields;
   - conditional plastic-pack fields;
   - conditional logo/label fields;
   - conditional COO purpose field;
   - Incoterms helper;
   - single-select trade term/payment/shipping;
   - file upload;
   - Buyer Requirement Brief;
   - real POST submission;
   - success state with request reference.
4. Preserve the detailed buyer-facing content. Do not simplify it into generic marketing copy.
5. Keep secondary explanations collapsed so the long page stays comfortable to read.
6. Use only TPKELE green for active navigation/selected states. Do not introduce VIOX-style red.
7. Do not expose developer notes or internal design explanation to visitors.
8. The final CTA must submit the inquiry. Do not use Generate Summary / Copy Summary as the main flow.

## Backend

Merge or create:

`POST /api/trade-support`

It must:

- validate required fields;
- receive the complete structured requirement state;
- validate uploads;
- send the formatted inquiry to `jacky@tpkele.com`;
- use server-only environment variables;
- optionally send the same structured data to a CRM webhook;
- return a reference ID to the front end.

Use the V9 `app/api/trade-support/route.ts` as the baseline.

## Environment variables

- `RESEND_API_KEY`
- `TRADE_SUPPORT_TO_EMAIL`
- `TRADE_SUPPORT_FROM_EMAIL`
- optional `CRM_WEBHOOK_URL`

Never expose secret keys to the browser.

## Uploads

Keep the conservative V9 upload limits unless my current website already has a better direct-to-storage upload system.

If the existing project has S3/R2/Vercel Blob or another object storage solution, prefer direct uploads and pass file references to the inquiry API.

## SEO

Integrate into the existing SEO framework:

- unique title;
- meta description;
- canonical;
- Breadcrumb schema;
- FAQ schema;
- sitemap inclusion;
- internal link from the Resources area.

Do not create duplicate global `robots.ts` or `sitemap.ts` if the existing repo already owns them.

## Final verification

After merge:

1. run TypeScript/build checks;
2. test desktop + mobile layouts;
3. test sticky page navigation;
4. test all selected/unselected states;
5. test all conditional configuration panels;
6. test Incoterms helper;
7. test valid and rejected file uploads;
8. test form success and error states;
9. confirm email reaches `jacky@tpkele.com`;
10. verify the rest of tpkele.com is unchanged.
