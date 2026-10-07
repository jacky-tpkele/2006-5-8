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

    const mainRule = config.rules.find((rule: any) => rule.userAgent === '*');
    expect(mainRule).toBeDefined();
    expect(mainRule.allow).toBe('/');
  });

  it('should disallow preview and api routes', async () => {
    const robots = await import('../src/app/robots');
    const config = robots.default();

    const mainRule = config.rules.find((rule: any) => rule.userAgent === '*');
    expect(mainRule.disallow).toContain('/blog/preview/');
    expect(mainRule.disallow).toContain('/api/');
  });

  it('should include sitemap references', async () => {
    const robots = await import('../src/app/robots');
    const config = robots.default();

    expect(config.sitemap).toBeDefined();
    expect(Array.isArray(config.sitemap)).toBe(true);
    expect(config.sitemap.length).toBeGreaterThan(0);
    expect(config.sitemap[0]).toContain('sitemap.xml');
  });
});
