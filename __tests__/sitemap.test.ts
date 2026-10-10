/**
 * @jest-environment jsdom
 */

import { describe, it, expect, jest } from '@jest/globals';

jest.mock('next-intl/routing', () => ({
  defineRouting: (config: unknown) => config,
}));

jest.mock('@/lib/blog', () => ({
  getPublishedBlogPostsWithFallback: async () => [
    { slug: 'current-article', date: '2026-09-07' },
    { slug: 'mcb-selection-guide', date: '2026-09-07' },
    { slug: 'pv-combiner-box-guide', date: '2026-09-07' },
  ],
}));

describe('Sitemap Tests', () => {
  it('should export sitemap function', async () => {
    const sitemapModule = await import('../src/app/sitemap');
    expect(sitemapModule.default).toBeDefined();
    expect(typeof sitemapModule.default).toBe('function');
  });

  it('should generate valid sitemap entries', async () => {
    const sitemap = await import('../src/app/sitemap');
    const entries = await sitemap.default();

    expect(Array.isArray(entries)).toBe(true);
    expect(entries.length).toBeGreaterThan(0);

    // Check first entry structure
    const firstEntry = entries[0];
    expect(firstEntry).toHaveProperty('url');
    expect(firstEntry).toHaveProperty('changeFrequency');
    expect(firstEntry).toHaveProperty('priority');
  });

  it('should include homepage in sitemap', async () => {
    const sitemap = await import('../src/app/sitemap');
    const entries = await sitemap.default();

    const hasHomepage = entries.some(entry =>
      entry.url === 'https://www.tpkele.com/' ||
      entry.url.endsWith('www.tpkele.com/')
    );

    expect(hasHomepage).toBe(true);
  });

  it('should include product pages in sitemap', async () => {
    const sitemap = await import('../src/app/sitemap');
    const entries = await sitemap.default();

    const hasProducts = entries.some(entry =>
      entry.url.includes('/products/')
    );

    expect(hasProducts).toBe(true);
  });

  it('lists final MCB landing pages instead of redirected subcategories', async () => {
    const { default: sitemap } = await import('../src/app/sitemap');
    const urls = (await sitemap()).map(entry => entry.url);
    for (const prefix of ['', '/ru']) {
      for (const slug of ['ac-mcb', 'dc-mcb']) {
        expect(urls).toContain(`https://www.tpkele.com${prefix}/products/${slug}`);
        expect(urls).not.toContain(`https://www.tpkele.com${prefix}/products/category/mcb/${slug}`);
      }
    }
  });

  it('includes current articles and excludes blogs that already redirect to guides', async () => {
    const { default: sitemap } = await import('../src/app/sitemap');
    const urls = (await sitemap()).map(entry => entry.url);
    expect(urls).toContain('https://www.tpkele.com/blog/current-article');
    expect(urls).toContain('https://www.tpkele.com/guides/ac-mcb-selection-guide');
    expect(urls).toContain('https://www.tpkele.com/guides/pv-combiner-box-guide');
    expect(urls.some(url => /\/blog\/(mcb-selection-guide|pv-combiner-box-guide)$/.test(url))).toBe(false);
  });

  it('includes every standard at its final English canonical URL without invented Russian alternatives', async () => {
    const { default: sitemap } = await import('../src/app/sitemap');
    const { standards } = await import('../src/data/standards');
    const entries = await sitemap();
    for (const standard of standards) {
      const entry = entries.find(item => item.url === `https://www.tpkele.com/resources/standards-database/${standard.slug}`);
      expect(entry).toBeDefined();
      expect(entry?.alternates).toBeUndefined();
    }
    expect(entries.some(entry => entry.url.includes('/electric-standards-database'))).toBe(false);
  });

  it('uses guide data, omits unverified revision dates and has unique URLs', async () => {
    const { default: sitemap } = await import('../src/app/sitemap');
    const { getAllGuideSlugs } = await import('../src/data/guides');
    const entries = await sitemap();
    const urls = entries.map(entry => entry.url);
    expect(new Set(urls).size).toBe(urls.length);
    expect(entries.every(entry => entry.lastModified === undefined)).toBe(true);
    for (const slug of getAllGuideSlugs()) {
      expect(urls).toContain(`https://www.tpkele.com/guides/${slug}`);
    }
    expect(urls).toContain('https://www.tpkele.com/products/ats');
    expect(urls).not.toContain('https://www.tpkele.com/rcbo-manufacturer');
    expect(urls).not.toContain('https://www.tpkele.com/ru/rcbo-manufacturer');
    for (const entry of entries) {
      for (const href of Object.values(entry.alternates?.languages ?? {})) {
        expect(href).not.toContain('tpkele.com/en/');
        expect(urls).toContain(href);
      }
    }
  });
});
