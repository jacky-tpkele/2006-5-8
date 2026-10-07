/**
 * @jest-environment node
 */

import { describe, it, expect } from '@jest/globals';

describe('Robots.txt Tests', () => {
  it('should export robots configuration', async () => {
    const robotsModule = await import('../src/app/robots');
    expect(robotsModule.default).toBeDefined();
    expect(typeof robotsModule.default).toBe('function');
  });

  it('should allow all user agents', async () => {
    const robots = await import('../src/app/robots');
    const config = robots.default();

    expect(config.rules).toBeDefined();
    expect(Array.isArray(config.rules)).toBe(true);

    const rules = Array.isArray(config.rules) ? config.rules : [config.rules];
    const mainRule = rules.find((rule) => rule.userAgent === '*');
    expect(mainRule).toBeDefined();
    if (!mainRule) throw new Error('Missing wildcard robots rule');
    expect(mainRule.allow).toBe('/');
  });

  it('should disallow preview and api routes', async () => {
    const robots = await import('../src/app/robots');
    const config = robots.default();

    const rules = Array.isArray(config.rules) ? config.rules : [config.rules];
    const mainRule = rules.find((rule) => rule.userAgent === '*');
    if (!mainRule) throw new Error('Missing wildcard robots rule');
    expect(mainRule.disallow).toContain('/blog/preview/');
    expect(mainRule.disallow).toContain('/api/');
  });

  it('should include sitemap references', async () => {
    const robots = await import('../src/app/robots');
    const config = robots.default();

    const sitemaps = Array.isArray(config.sitemap)
      ? config.sitemap
      : config.sitemap
        ? [config.sitemap]
        : [];

    expect(sitemaps.length).toBeGreaterThan(0);
    expect(sitemaps[0]).toContain('sitemap.xml');
  });
});
