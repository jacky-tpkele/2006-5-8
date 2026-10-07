/**
 * @jest-environment jsdom
 */

import { describe, it, expect, jest } from '@jest/globals';

jest.mock('next-intl/routing', () => ({
  defineRouting: (config: unknown) => config,
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
    expect(firstEntry).toHaveProperty('lastModified');
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
});
