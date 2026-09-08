# TPKELE Buyer Trade Support V8

## Deployment Target
This package is prepared for a GitHub + Vercel website.

## Recommended Next.js Conversion

Suggested route:
app/resources/buyer-trade-support/page.tsx

Recommended API:
app/api/trade-support/route.ts

The form should submit:
- company
- country
- contactName
- email / WhatsApp
- product
- quantity
- destination
- target delivery date
- notes
- customization selections
- export document selections
- trade term
- payment preference
- shipping method

## Email Receiving

Production API should send the structured inquiry to:

jacky@tpkele.com

Suggested subject:
New Trade Support Request - Country - Product

## Future CRM Integration

Keep JSON structure unchanged so it can later connect with:
- TPKELE CRM
- customer database
- AI inquiry assistant

## SEO

Recommended URL:
 /resources/buyer-trade-support/

Add:
- BreadcrumbList schema
- FAQ schema
- Organization schema

Recommended image format:
WebP
- desktop: optimized width
- mobile: responsive loading