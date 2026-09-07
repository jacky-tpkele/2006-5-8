import type {
  ComplianceProduct,
  ComplianceCountry,
  MarketAccessRule,
  ProductSlug,
  CountrySlug,
  ParameterField,
} from "./types";
import { complianceProducts, productsMap } from "@/data/compliance/products";
import { complianceCountries, countriesMap, countriesByRegion } from "@/data/compliance/countries";
import { marketAccessRules, rulesIndex } from "@/data/compliance/rules";

/**
 * Compliance Data Service
 *
 * Provides a unified interface for accessing compliance data.
 * Currently uses local data; designed to be easily swapped with API/database provider.
 */

export class ComplianceService {
  /**
   * Get all products
   */
  static getProducts(): ComplianceProduct[] {
    return complianceProducts;
  }

  /**
   * Get product by slug
   */
  static getProduct(slug: ProductSlug): ComplianceProduct | null {
    return productsMap[slug] || null;
  }

  /**
   * Get product parameter fields
   */
  static getProductParameters(slug: ProductSlug): ParameterField[] {
    const product = productsMap[slug];
    return product?.parameterFields || [];
  }

  /**
   * Get related products
   */
  static getRelatedProducts(slug: ProductSlug): ComplianceProduct[] {
    const product = productsMap[slug];
    if (!product) return [];

    return product.relatedProducts
      .map((relatedSlug) => productsMap[relatedSlug])
      .filter((p): p is ComplianceProduct => p !== undefined);
  }

  /**
   * Get all countries
   */
  static getCountries(): ComplianceCountry[] {
    return complianceCountries;
  }

  /**
   * Get country by slug
   */
  static getCountry(slug: CountrySlug): ComplianceCountry | null {
    return countriesMap[slug] || null;
  }

  /**
   * Get countries grouped by region
   */
  static getCountriesByRegion() {
    return countriesByRegion;
  }

  /**
   * Get market access rule
   *
   * Returns null if no verified rule exists (frontend will show UNKNOWN status)
   */
  static getRule(params: {
    product: ProductSlug;
    country: CountrySlug;
    application?: string;
  }): MarketAccessRule | null {
    const key = `${params.product}-${params.country}`;
    const rules = rulesIndex[key];

    if (!rules || rules.length === 0) {
      // No rule found - return null (will display UNKNOWN)
      return null;
    }

    // If application is specified, try to find exact match
    if (params.application) {
      const exactMatch = rules.find((r) => r.application === params.application);
      if (exactMatch) return exactMatch;
    }

    // Return first rule (may be generic without application specified)
    return rules[0];
  }

  /**
   * Get all rules for a product
   */
  static getRulesForProduct(productSlug: ProductSlug): MarketAccessRule[] {
    return marketAccessRules.filter((r) => r.productSlug === productSlug);
  }

  /**
   * Get all rules for a country
   */
  static getRulesForCountry(countrySlug: CountrySlug): MarketAccessRule[] {
    return marketAccessRules.filter((r) => r.countrySlug === countrySlug);
  }

  /**
   * Search products by query
   */
  static searchProducts(query: string): ComplianceProduct[] {
    if (!query.trim()) return complianceProducts;

    const lowerQuery = query.toLowerCase();
    return complianceProducts.filter((product) => {
      const searchText = `${product.name} ${product.fullName} ${product.category}`.toLowerCase();
      return searchText.includes(lowerQuery);
    });
  }

  /**
   * Search countries by query
   */
  static searchCountries(query: string): ComplianceCountry[] {
    if (!query.trim()) return complianceCountries;

    const lowerQuery = query.toLowerCase();
    return complianceCountries.filter((country) => {
      const searchText = `${country.name} ${country.iso2} ${country.iso3}`.toLowerCase();
      return searchText.includes(lowerQuery);
    });
  }

  /**
   * Get data statistics
   */
  static getStats() {
    return {
      totalProducts: complianceProducts.length,
      totalCountries: complianceCountries.length,
      totalRules: marketAccessRules.length,
      verifiedRules: marketAccessRules.filter(
        (r) => r.evidence.verificationStatus === "VERIFIED"
      ).length,
      coveragePercentage: (
        (marketAccessRules.length /
          (complianceProducts.length * complianceCountries.length)) *
        100
      ).toFixed(2),
    };
  }
}

/**
 * Provider Interface (for future API/database integration)
 */
export interface IComplianceDataProvider {
  getProducts(): Promise<ComplianceProduct[]>;
  getCountries(): Promise<ComplianceCountry[]>;
  getRule(params: {
    product: ProductSlug;
    country: CountrySlug;
    application?: string;
  }): Promise<MarketAccessRule | null>;
}

/**
 * Local Data Provider (current implementation)
 */
export class LocalComplianceProvider implements IComplianceDataProvider {
  async getProducts() {
    return ComplianceService.getProducts();
  }

  async getCountries() {
    return ComplianceService.getCountries();
  }

  async getRule(params: {
    product: ProductSlug;
    country: CountrySlug;
    application?: string;
  }) {
    return ComplianceService.getRule(params);
  }
}

/**
 * API Data Provider (placeholder for future implementation)
 */
export class APIComplianceProvider implements IComplianceDataProvider {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getProducts() {
    const res = await fetch(`${this.baseUrl}/api/compliance/products`);
    return res.json();
  }

  async getCountries() {
    const res = await fetch(`${this.baseUrl}/api/compliance/countries`);
    return res.json();
  }

  async getRule(params: {
    product: ProductSlug;
    country: CountrySlug;
    application?: string;
  }) {
    const query = new URLSearchParams(params as any).toString();
    const res = await fetch(`${this.baseUrl}/api/compliance/rule?${query}`);
    const data = await res.json();
    return data.rule || null;
  }
}

/**
 * Factory function (for future provider switching)
 */
export function getComplianceProvider(): IComplianceDataProvider {
  const mode = process.env.NEXT_PUBLIC_COMPLIANCE_MODE || "local";

  if (mode === "api") {
    const apiUrl = process.env.NEXT_PUBLIC_COMPLIANCE_API_URL || "";
    return new APIComplianceProvider(apiUrl);
  }

  return new LocalComplianceProvider();
}
