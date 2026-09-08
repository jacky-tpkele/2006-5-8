import { NextRequest, NextResponse } from "next/server";

// Country mapping: ISO code → Market Access Advisor country name
const countryMap: Record<string, string> = {
  // European Union countries
  AT: "European Union", BE: "European Union", BG: "European Union", HR: "European Union",
  CY: "European Union", CZ: "European Union", DK: "European Union", EE: "European Union",
  FI: "European Union", FR: "European Union", DE: "European Union", GR: "European Union",
  HU: "European Union", IE: "European Union", IT: "European Union", LV: "European Union",
  LT: "European Union", LU: "European Union", MT: "European Union", NL: "European Union",
  PL: "European Union", PT: "European Union", RO: "European Union", SK: "European Union",
  SI: "European Union", ES: "European Union", SE: "European Union",

  // United Kingdom (post-Brexit)
  GB: "United Kingdom",

  // Middle East - major markets
  SA: "Saudi Arabia",
  AE: "United Arab Emirates",
  BH: "Saudi Arabia", // Bahrain → Saudi Arabia
  KW: "Saudi Arabia", // Kuwait → Saudi Arabia
  OM: "Saudi Arabia", // Oman → Saudi Arabia
  QA: "Saudi Arabia", // Qatar → Saudi Arabia
  JO: "Saudi Arabia", // Jordan → Saudi Arabia
  LB: "Saudi Arabia", // Lebanon → Saudi Arabia

  // Americas
  US: "United States",
  CA: "Canada",
  MX: "Mexico",
  BR: "Brazil",
  AR: "Brazil", // Argentina → Brazil
  CL: "Brazil", // Chile → Brazil
  CO: "Brazil", // Colombia → Brazil
  PE: "Brazil", // Peru → Brazil

  // Asia - major markets
  CN: "China",
  IN: "India",
  JP: "Japan",
  KR: "South Korea",
  TH: "Thailand",
  MY: "Malaysia",
  ID: "Indonesia",
  SG: "Malaysia", // Singapore → Malaysia
  VN: "Thailand", // Vietnam → Thailand
  PH: "Malaysia", // Philippines → Malaysia

  // Oceania
  AU: "Australia",
  NZ: "Australia", // New Zealand → Australia

  // Africa
  ZA: "South Africa",
  EG: "South Africa", // Egypt → South Africa
  KE: "South Africa", // Kenya → South Africa
  NG: "South Africa", // Nigeria → South Africa

  // Turkey
  TR: "Turkey",

  // Russia and nearby
  RU: "European Union", // Russia → EU (closest major market)
  UA: "European Union", // Ukraine → EU
  BY: "European Union", // Belarus → EU
};

// Fallback mapping by region (if country not in map)
const regionFallback: Record<string, string> = {
  EU: "European Union",
  AS: "China",
  AF: "South Africa",
  NA: "United States",
  SA: "Brazil",
  OC: "Australia",
};

export async function GET(request: NextRequest) {
  try {
    // Get country from Vercel's geo headers
    const country = request.headers.get("x-vercel-ip-country") || null;

    if (!country) {
      return NextResponse.json({
        country: null,
        mappedCountry: null,
        fallback: true
      });
    }

    // Map to Market Access Advisor country
    const mappedCountry = countryMap[country] || null;

    // If no direct mapping, try region fallback
    const region = request.headers.get("x-vercel-ip-country-region");
    const fallbackCountry = region && !mappedCountry ? regionFallback[region] : null;

    return NextResponse.json({
      detectedCountry: country,
      mappedCountry: mappedCountry || fallbackCountry || null,
      fallback: !mappedCountry,
    });
  } catch (error) {
    console.error("Country detection error:", error);
    return NextResponse.json({
      country: null,
      mappedCountry: null,
      error: "Detection failed"
    });
  }
}
