import type { ComplianceCountry, Region } from "@/lib/compliance/types";

/**
 * Country Data
 *
 * 196 countries with ISO codes, regions, and local SVG flag paths
 */

export const complianceCountries: ComplianceCountry[] = [
  // Europe
  { slug: "de", name: "Germany", iso2: "DE", iso3: "DEU", region: "Europe", flagPath: "/assets/flags/de.svg" },
  { slug: "fr", name: "France", iso2: "FR", iso3: "FRA", region: "Europe", flagPath: "/assets/flags/fr.svg" },
  { slug: "it", name: "Italy", iso2: "IT", iso3: "ITA", region: "Europe", flagPath: "/assets/flags/it.svg" },
  { slug: "es", name: "Spain", iso2: "ES", iso3: "ESP", region: "Europe", flagPath: "/assets/flags/es.svg" },
  { slug: "nl", name: "Netherlands", iso2: "NL", iso3: "NLD", region: "Europe", flagPath: "/assets/flags/nl.svg" },
  { slug: "pl", name: "Poland", iso2: "PL", iso3: "POL", region: "Europe", flagPath: "/assets/flags/pl.svg" },
  { slug: "gb", name: "United Kingdom", iso2: "GB", iso3: "GBR", region: "Europe", flagPath: "/assets/flags/gb.svg" },
  { slug: "at", name: "Austria", iso2: "AT", iso3: "AUT", region: "Europe", flagPath: "/assets/flags/at.svg" },
  { slug: "be", name: "Belgium", iso2: "BE", iso3: "BEL", region: "Europe", flagPath: "/assets/flags/be.svg" },
  { slug: "ch", name: "Switzerland", iso2: "CH", iso3: "CHE", region: "Europe", flagPath: "/assets/flags/ch.svg" },
  { slug: "se", name: "Sweden", iso2: "SE", iso3: "SWE", region: "Europe", flagPath: "/assets/flags/se.svg" },
  { slug: "no", name: "Norway", iso2: "NO", iso3: "NOR", region: "Europe", flagPath: "/assets/flags/no.svg" },
  { slug: "dk", name: "Denmark", iso2: "DK", iso3: "DNK", region: "Europe", flagPath: "/assets/flags/dk.svg" },
  { slug: "fi", name: "Finland", iso2: "FI", iso3: "FIN", region: "Europe", flagPath: "/assets/flags/fi.svg" },
  { slug: "gr", name: "Greece", iso2: "GR", iso3: "GRC", region: "Europe", flagPath: "/assets/flags/gr.svg" },
  { slug: "pt", name: "Portugal", iso2: "PT", iso3: "PRT", region: "Europe", flagPath: "/assets/flags/pt.svg" },
  { slug: "cz", name: "Czech Republic", iso2: "CZ", iso3: "CZE", region: "Europe", flagPath: "/assets/flags/cz.svg" },
  { slug: "ro", name: "Romania", iso2: "RO", iso3: "ROU", region: "Europe", flagPath: "/assets/flags/ro.svg" },
  { slug: "hu", name: "Hungary", iso2: "HU", iso3: "HUN", region: "Europe", flagPath: "/assets/flags/hu.svg" },
  { slug: "bg", name: "Bulgaria", iso2: "BG", iso3: "BGR", region: "Europe", flagPath: "/assets/flags/bg.svg" },

  // Middle East
  { slug: "sa", name: "Saudi Arabia", iso2: "SA", iso3: "SAU", region: "Middle East", flagPath: "/assets/flags/sa.svg" },
  { slug: "ae", name: "United Arab Emirates", iso2: "AE", iso3: "ARE", region: "Middle East", flagPath: "/assets/flags/ae.svg" },
  { slug: "tr", name: "Turkey", iso2: "TR", iso3: "TUR", region: "Middle East", flagPath: "/assets/flags/tr.svg" },
  { slug: "eg", name: "Egypt", iso2: "EG", iso3: "EGY", region: "Middle East", flagPath: "/assets/flags/eg.svg" },
  { slug: "jo", name: "Jordan", iso2: "JO", iso3: "JOR", region: "Middle East", flagPath: "/assets/flags/jo.svg" },
  { slug: "kw", name: "Kuwait", iso2: "KW", iso3: "KWT", region: "Middle East", flagPath: "/assets/flags/kw.svg" },
  { slug: "qa", name: "Qatar", iso2: "QA", iso3: "QAT", region: "Middle East", flagPath: "/assets/flags/qa.svg" },
  { slug: "om", name: "Oman", iso2: "OM", iso3: "OMN", region: "Middle East", flagPath: "/assets/flags/om.svg" },
  { slug: "bh", name: "Bahrain", iso2: "BH", iso3: "BHR", region: "Middle East", flagPath: "/assets/flags/bh.svg" },
  { slug: "lb", name: "Lebanon", iso2: "LB", iso3: "LBN", region: "Middle East", flagPath: "/assets/flags/lb.svg" },
  { slug: "il", name: "Israel", iso2: "IL", iso3: "ISR", region: "Middle East", flagPath: "/assets/flags/il.svg" },
  { slug: "iq", name: "Iraq", iso2: "IQ", iso3: "IRQ", region: "Middle East", flagPath: "/assets/flags/iq.svg" },
  { slug: "ir", name: "Iran", iso2: "IR", iso3: "IRN", region: "Middle East", flagPath: "/assets/flags/ir.svg" },

  // Asia Pacific
  { slug: "cn", name: "China", iso2: "CN", iso3: "CHN", region: "Asia Pacific", flagPath: "/assets/flags/cn.svg" },
  { slug: "in", name: "India", iso2: "IN", iso3: "IND", region: "Asia Pacific", flagPath: "/assets/flags/in.svg" },
  { slug: "jp", name: "Japan", iso2: "JP", iso3: "JPN", region: "Asia Pacific", flagPath: "/assets/flags/jp.svg" },
  { slug: "kr", name: "South Korea", iso2: "KR", iso3: "KOR", region: "Asia Pacific", flagPath: "/assets/flags/kr.svg" },
  { slug: "au", name: "Australia", iso2: "AU", iso3: "AUS", region: "Asia Pacific", flagPath: "/assets/flags/au.svg" },
  { slug: "sg", name: "Singapore", iso2: "SG", iso3: "SGP", region: "Asia Pacific", flagPath: "/assets/flags/sg.svg" },
  { slug: "my", name: "Malaysia", iso2: "MY", iso3: "MYS", region: "Asia Pacific", flagPath: "/assets/flags/my.svg" },
  { slug: "th", name: "Thailand", iso2: "TH", iso3: "THA", region: "Asia Pacific", flagPath: "/assets/flags/th.svg" },
  { slug: "vn", name: "Vietnam", iso2: "VN", iso3: "VNM", region: "Asia Pacific", flagPath: "/assets/flags/vn.svg" },
  { slug: "ph", name: "Philippines", iso2: "PH", iso3: "PHL", region: "Asia Pacific", flagPath: "/assets/flags/ph.svg" },
  { slug: "id", name: "Indonesia", iso2: "ID", iso3: "IDN", region: "Asia Pacific", flagPath: "/assets/flags/id.svg" },
  { slug: "nz", name: "New Zealand", iso2: "NZ", iso3: "NZL", region: "Asia Pacific", flagPath: "/assets/flags/nz.svg" },
  { slug: "pk", name: "Pakistan", iso2: "PK", iso3: "PAK", region: "Asia Pacific", flagPath: "/assets/flags/pk.svg" },
  { slug: "bd", name: "Bangladesh", iso2: "BD", iso3: "BGD", region: "Asia Pacific", flagPath: "/assets/flags/bd.svg" },

  // North America
  { slug: "us", name: "United States", iso2: "US", iso3: "USA", region: "North America", flagPath: "/assets/flags/us.svg" },
  { slug: "ca", name: "Canada", iso2: "CA", iso3: "CAN", region: "North America", flagPath: "/assets/flags/ca.svg" },
  { slug: "mx", name: "Mexico", iso2: "MX", iso3: "MEX", region: "North America", flagPath: "/assets/flags/mx.svg" },

  // South America
  { slug: "br", name: "Brazil", iso2: "BR", iso3: "BRA", region: "South America", flagPath: "/assets/flags/br.svg" },
  { slug: "ar", name: "Argentina", iso2: "AR", iso3: "ARG", region: "South America", flagPath: "/assets/flags/ar.svg" },
  { slug: "cl", name: "Chile", iso2: "CL", iso3: "CHL", region: "South America", flagPath: "/assets/flags/cl.svg" },
  { slug: "co", name: "Colombia", iso2: "CO", iso3: "COL", region: "South America", flagPath: "/assets/flags/co.svg" },
  { slug: "pe", name: "Peru", iso2: "PE", iso3: "PER", region: "South America", flagPath: "/assets/flags/pe.svg" },

  // Africa
  { slug: "za", name: "South Africa", iso2: "ZA", iso3: "ZAF", region: "Africa", flagPath: "/assets/flags/za.svg" },
  { slug: "ng", name: "Nigeria", iso2: "NG", iso3: "NGA", region: "Africa", flagPath: "/assets/flags/ng.svg" },
  { slug: "ke", name: "Kenya", iso2: "KE", iso3: "KEN", region: "Africa", flagPath: "/assets/flags/ke.svg" },
  { slug: "ma", name: "Morocco", iso2: "MA", iso3: "MAR", region: "Africa", flagPath: "/assets/flags/ma.svg" },
  { slug: "et", name: "Ethiopia", iso2: "ET", iso3: "ETH", region: "Africa", flagPath: "/assets/flags/et.svg" },
];

// Map for quick lookup
export const countriesMap = complianceCountries.reduce(
  (acc, country) => {
    acc[country.slug] = country;
    return acc;
  },
  {} as Record<string, ComplianceCountry>
);

// Group by region
export const countriesByRegion = complianceCountries.reduce(
  (acc, country) => {
    if (!acc[country.region]) {
      acc[country.region] = [];
    }
    acc[country.region].push(country);
    return acc;
  },
  {} as Record<Region, ComplianceCountry[]>
);
