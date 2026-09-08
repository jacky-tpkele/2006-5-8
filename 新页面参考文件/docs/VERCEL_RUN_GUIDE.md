# RUN / VERCEL

Standalone verification:

```bash
npm install
npm run dev
```

Open:
`http://localhost:3000/resources/market-access-advisor`

Example:
`http://localhost:3000/resources/market-access-advisor?product=dc-mcb&market=Austria&application=Solar+PV&buyer=Distributor`

Vercel:
- Framework: Next.js
- Build command: `npm run build`
- Output: managed by Next.js/Vercel

For an existing TPKELE repo, do not deploy this as a second site.
Merge the module files into the existing repo as described in `AI_INTEGRATION_HANDOVER.md`.
