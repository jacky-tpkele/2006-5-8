/**
 * Market Access Adviser - TypeScript Type Definitions
 *
 * Core types for the compliance data model
 */

// ====================================
// Product Types
// ====================================

export type ProductSlug =
  | "dc-mcb"
  | "ac-mcb"
  | "dc-spd"
  | "ac-spd"
  | "ats"
  | "voltage-protector"
  | "energy-meter"
  | "combiner-box"
  | "dc-mccb"
  | "fuse"
  | "dc-isolator"
  | "contactor"
  | "relay"
  | "ssr"
  | "terminal-block"
  | "busbar"
  | "battery-disconnect"
  | "battery-fuse"
  | "pv-cable"
  | "cable-lug"
  | "pv-connector";

export type ProductCategory =
  | "Circuit Protection"
  | "Surge Protection"
  | "Automatic Switching & Control"
  | "Solar / DC"
  | "Power Distribution"
  | "Metering & Protection"
  | "Connection & Accessories";

export type ParameterFieldType = "text" | "number" | "select";

export type ParameterField = {
  key: string;
  label: string;
  type: ParameterFieldType;
  options?: string[];
  placeholder?: string;
  unit?: string;
  required?: boolean;
};

export type ComplianceProduct = {
  slug: ProductSlug;
  name: string;
  fullName: string;
  category: ProductCategory;
  parameterFields?: ParameterField[];
  relatedProducts: ProductSlug[];
};

// ====================================
// Country Types
// ====================================

export type CountrySlug = string;

export type Region =
  | "Europe"
  | "Middle East"
  | "Asia Pacific"
  | "North America"
  | "South America"
  | "Africa"
  | "Oceania";

export type ComplianceCountry = {
  slug: CountrySlug;
  name: string;
  iso2: string;
  iso3: string;
  region: Region;
  flagPath: string;
};

// ====================================
// Market Access Rule Types
// ====================================

export type ConfidenceLevel =
  | "CONFIRMED"
  | "LIKELY"
  | "PRODUCT_SCOPE_DEPENDENT"
  | "PROJECT_DEPENDENT"
  | "UNKNOWN"
  | "NOT_REQUIRED"
  | "NOT_IDENTIFIED";

export type VerificationStatus =
  | "VERIFIED"
  | "MARKET_FRAMEWORK_VERIFIED"
  | "NEEDS_REVIEW"
  | "DRAFT"
  | "OUTDATED"
  | "CONFLICT";

export type TechnicalStandard = {
  code: string;
  title: string;
  description: string;
  applicability: string;
};

export type MarketAccess = {
  framework: string;
  description: string;
  obligations: string[];
};

export type MandatoryCertification = {
  status: ConfidenceLevel;
  certificationName?: string;
  description: string;
  scope?: string;
};

export type Evidence = {
  sourceAuthority: string;
  sourceTitle?: string;
  sourceUrl?: string;
  verificationStatus: VerificationStatus;
  lastReviewedDate: string;
  evidenceNote?: string;
};

export type MarketAccessRule = {
  id: string;
  productSlug: ProductSlug;
  countrySlug: CountrySlug;
  application?: string;
  technicalStandard: TechnicalStandard;
  marketAccess: MarketAccess;
  mandatoryCertification: MandatoryCertification;
  documents: string[];
  productChecks: string[];
  applicationChecks: string[];
  evidence: Evidence;
  buyerAdvice?: Record<string, string>;
  projectContext?: string;
};

// ====================================
// UI State Types
// ====================================

export type ApplicationContext =
  | "Solar PV"
  | "Energy Storage"
  | "Residential"
  | "Commercial"
  | "Industrial"
  | "Power Distribution";

export type BuyerType =
  | "Distributor"
  | "Panel Builder"
  | "EPC / Installer"
  | "OEM Brand Owner"
  | "Project Contractor"
  | "End User";

export type AdvisorState = {
  product: ProductSlug | null;
  country: CountrySlug | null;
  application: ApplicationContext;
  buyer: BuyerType;
  parameters: Record<string, string>;
};
