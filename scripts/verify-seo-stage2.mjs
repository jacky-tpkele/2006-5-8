import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';

const base = process.argv[2] || 'http://localhost:3000';
const site = 'https://www.tpkele.com';
const canonicalWarnings = [];
const errors = [];

async function readPage(path) {
  const response = await fetch(new URL(path, base), { redirect: 'manual' });
  assert.equal(response.status, 200, `${path}: expected 200, got ${response.status}`);
  const dom = new JSDOM(await response.text());
  return dom.window.document;
}

const sitemapResponse = await fetch(new URL('/sitemap.xml', base));
assert.equal(sitemapResponse.status, 200);
const sitemapDom = new JSDOM(await sitemapResponse.text(), { contentType: 'text/xml' });
const entries = [...sitemapDom.window.document.getElementsByTagName('url')];
const urls = entries.map(entry => entry.getElementsByTagName('loc')[0].textContent);
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URLs');
assert.equal(sitemapDom.window.document.getElementsByTagName('lastmod').length, 0, 'Unverified lastmod');
assert.ok(urls.includes(`${site}/products/ats`));
assert.ok(urls.includes(`${site}/products/ac-mcb`));
assert.ok(urls.includes(`${site}/products/dc-mcb`));
assert.ok(!urls.some(url => /\/products\/category\/mcb\/(ac-mcb|dc-mcb)$/.test(url)));
assert.ok(!urls.some(url => /\/blog\/(solar-dc-circuit-breaker-selection|mcb-selection-guide|dc-circuit-breaker-selection-guide|pv-combiner-box-guide)$/.test(url)));

// Check rendered responses, including streamed metadata, rather than source strings.
for (let offset = 0; offset < urls.length; offset += 4) {
  await Promise.all(urls.slice(offset, offset + 4).map(async url => {
    const path = new URL(url).pathname;
    try {
      const document = await readPage(path);
      const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
      if (canonical !== url && !(path === '/' && canonical === site)) canonicalWarnings.push({ path, canonical });
      if (path.startsWith('/resources/standards-database/')) {
        assert.equal(canonical, url, `Standard canonical: ${path}`);
        const breadcrumbs = [...document.querySelectorAll('script[type="application/ld+json"]')]
          .map(script => JSON.parse(script.textContent))
          .filter(schema => schema['@type'] === 'BreadcrumbList');
        assert.ok(breadcrumbs.some(schema => schema.itemListElement.at(-1).item === url));
        assert.ok(![...document.querySelectorAll('a[href]')].some(link => link.getAttribute('href').includes('/electric-standards-database')));
      }
      document.defaultView.close();
    } catch (error) {
      errors.push({ path, error: error.message });
    }
  }));
}

for (const path of ['/resources/standards-database', '/resources/buyer-support', '/resources/market-access-advisor', '/projects', '/projects/zimbabwe-sirdc-solar-project']) {
  const document = await readPage(path);
  assert.equal(document.querySelector('link[rel="canonical"]')?.getAttribute('href'), `${site}${path}`);
  document.defaultView.close();
}

for (const prefix of ['', '/ru']) {
  for (const [oldPath, target] of [
    ['/electric-standards-database', '/resources/standards-database'],
    ['/electric-standards-database/iec-60947-2', '/resources/standards-database/iec-60947-2'],
    ['/products/category/mcb/ac-mcb', '/products/ac-mcb'],
    ['/products/category/mcb/dc-mcb', '/products/dc-mcb'],
    ['/resources/buyer-trade-support', '/resources/buyer-support'],
  ]) {
    const response = await fetch(new URL(`${prefix}${oldPath}`, base), { redirect: 'manual' });
    assert.ok([301, 308].includes(response.status), `${prefix}${oldPath}: redirect missing`);
    assert.equal(new URL(response.headers.get('location'), base).pathname, `${prefix}${target}`);
    const document = await readPage(`${prefix}${target}`);
    document.defaultView.close();
  }
  const path = '/guides/dc-mcb-selection-guide';
  const document = await readPage(`${prefix}${path}`);
  assert.equal(document.querySelector('link[rel="alternate"][hreflang="en"]')?.getAttribute('href'), `${site}${path}`);
  assert.equal(document.querySelector('link[rel="alternate"][hreflang="x-default"]')?.getAttribute('href'), `${site}${path}`);
  assert.equal(document.querySelector('link[rel="canonical"]')?.getAttribute('href'), `${site}${path}`);
  document.defaultView.close();
}

console.log(JSON.stringify({ base, sitemapUrls: urls.length, canonicalWarnings, errors }, null, 2));
assert.equal(errors.length, 0, 'Some sitemap pages failed verification');
assert.equal(canonicalWarnings.filter(item => !item.path.startsWith('/ru')).length, 0, 'English sitemap canonical mismatch');
