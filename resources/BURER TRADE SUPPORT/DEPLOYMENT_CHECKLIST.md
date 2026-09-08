# V9 Deployment Checklist

## Merge safety
- [ ] Create a new Git branch / backup current site
- [ ] Keep existing TPKELE homepage and global components
- [ ] Add route `/resources/buyer-trade-support`

## UI
- [ ] Existing site Header/Footer reused
- [ ] Sticky Page Navigation has correct header offset
- [ ] Active state is TPKELE green
- [ ] Mobile navigation works
- [ ] Page is comfortable to scan on desktop and mobile

## Buyer interaction
- [ ] Custom Paper Box opens detailed options
- [ ] Plastic Packaging opens detailed options
- [ ] Logo / Label opens detailed options
- [ ] Certificate of Origin opens purpose field
- [ ] Incoterms helper works
- [ ] Trade term is single-select
- [ ] Payment is single-select
- [ ] Shipping is single-select
- [ ] Documents remain multi-select
- [ ] Requirement Brief updates correctly

## Uploads
- [ ] PDF upload tested
- [ ] XLSX/CSV upload tested
- [ ] image upload tested
- [ ] unsupported extension rejected
- [ ] oversized file rejected
- [ ] remove-file button works

## API / email
- [ ] `RESEND_API_KEY` configured
- [ ] `TRADE_SUPPORT_TO_EMAIL=jacky@tpkele.com`
- [ ] verified sender configured
- [ ] email contains all V9 fields
- [ ] attachments arrive correctly
- [ ] request reference appears after success

## Optional CRM
- [ ] `CRM_WEBHOOK_URL` configured if ready
- [ ] CRM field mapping tested

## SEO
- [ ] canonical correct
- [ ] metadata correct
- [ ] Breadcrumb schema valid
- [ ] FAQ schema valid
- [ ] existing sitemap updated
- [ ] Resources navigation/internal link added

## Final
- [ ] `npm run build` succeeds
- [ ] Vercel Preview deployment tested
- [ ] one real inquiry submitted end-to-end
