# TPKELE Buyer Trade Support V9

Complete Next.js App Router project prepared for **GitHub + Vercel**.

## V9 vs V8

V9 upgrades the page from **Information + Selection** to a complete buyer workflow:

**Understand → Configure → Upload → Review → Send**

Main upgrades:

- sticky green Page Navigation for long-page reading;
- conditional configuration for paper box, plastic packaging, product marking and Certificate of Origin;
- Incoterms helper for buyers who are not sure what to choose;
- file upload for BOM, product list, Excel/PDF, logo and packaging references;
- Buyer Requirement Brief before submission;
- real `/api/trade-support` route;
- email delivery to TPKELE sales through Resend;
- optional CRM webhook;
- server-side validation and honeypot field;
- metadata, canonical, Breadcrumb schema, FAQ schema, sitemap and robots.

## Local development

```bash
npm install
npm run dev
```

Open:

`http://localhost:3000/resources/buyer-trade-support`

## Environment variables

Copy `.env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_SITE_URL=https://www.tpkele.com
RESEND_API_KEY=your_resend_api_key
TRADE_SUPPORT_TO_EMAIL=jacky@tpkele.com
TRADE_SUPPORT_FROM_EMAIL=TPKELE Website <website@tpkele.com>
CRM_WEBHOOK_URL=
```

`TRADE_SUPPORT_FROM_EMAIL` must use a sender/domain that is verified in the mail service.

## Vercel deployment

1. Push this project to GitHub.
2. Import the GitHub repository into Vercel.
3. Add the Environment Variables above in Vercel Project Settings.
4. Deploy.

## Upload defaults

The first V9 version uses conservative serverless upload limits:

- maximum 3 files;
- maximum 1 MB per file;
- maximum 3 MB total;
- PDF, XLSX, XLS, CSV, PNG, JPG/JPEG, WebP.

For larger production uploads, use direct-to-object-storage uploads rather than continually increasing serverless request-body size.

## What arrives in the email

Subject:

`New Trade Support Request - [Country] - [Product] - [Reference]`

Recipient defaults to:

`jacky@tpkele.com`

The email contains:

- company and market;
- contact details;
- product and quantity;
- destination and target date;
- customization selections;
- detailed paper-box configuration;
- detailed plastic-pack configuration;
- logo/label configuration;
- export-document requirements;
- Certificate of Origin purpose;
- Incoterm;
- payment preference;
- shipping method;
- uploaded filenames;
- notes.

Accepted files are attached to the email.

## Optional CRM integration

If `CRM_WEBHOOK_URL` is configured, the API sends the same structured request data to that endpoint after the email is sent.

## Important when merging into the existing tpkele.com repository

This ZIP is a **complete standalone project**, but your real website already has its own homepage, header, footer, SEO system and components.

Do not overwrite those blindly.

Use `AI_MERGE_PROMPT.md` when giving the ZIP to your coding AI. The coding AI should merge the V9 route and logic into your current TPKELE GitHub repository while reusing the existing site UI.
