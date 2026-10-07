/**
 * @jest-environment jsdom
 */

import { describe, it, expect } from '@jest/globals';

describe('Metadata Tests', () => {
  it('should have valid site metadata', () => {
    const { site } = require('../src/data/site');

    expect(site).toBeDefined();
    expect(site.name).toBe('TPKELE');
    expect(site.url).toBe('https://www.tpkele.com');
    expect(site.description).toBeDefined();
    expect(site.description.length).toBeGreaterThan(50);
  });

  it('should have valid product data', () => {
    const { products } = require('../src/data/site');

    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThan(0);

    // Check first product structure
    const firstProduct = products[0];
    expect(firstProduct).toHaveProperty('slug');
    expect(firstProduct).toHaveProperty('name');
    expect(firstProduct).toHaveProperty('category');
    expect(firstProduct).toHaveProperty('description');
  });

  it('should have unique product slugs', () => {
    const { products } = require('../src/data/site');
    const slugs = products.map((p: any) => p.slug);
    const uniqueSlugs = new Set(slugs);

    expect(slugs.length).toBe(uniqueSlugs.size);
  });
});
