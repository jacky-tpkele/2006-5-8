import type { MarketAccessRule } from "@/lib/compliance/types";

/**
 * Market Access Rules - Initial Sample Data
 *
 * Important: These are verified sample rules only.
 * For product-market combinations not listed here, the system will display "UNKNOWN"
 * rather than guessing or inferring certification requirements.
 */

export const marketAccessRules: MarketAccessRule[] = [
  // ====================================
  // DC MCB Rules
  // ====================================
  {
    id: "dc-mcb-sa-solar",
    productSlug: "dc-mcb",
    countrySlug: "sa",
    application: "Solar PV",

    technicalStandard: {
      code: "IEC 60947-2",
      title: "Low-voltage switchgear and controlgear - Part 2: Circuit-breakers",
      description: "Potential technical basis for DC circuit-breakers used in photovoltaic systems.",
      applicability: "Applicable when the product meets the definition and ratings specified in IEC 60947-2 for DC operation.",
    },

    marketAccess: {
      framework: "Saudi Standards, Metrology and Quality Organization (SASO)",
      description: "Saudi Arabia maintains a technical regulation framework for electrical products. Compliance pathway depends on product scope and SASO classification.",
      obligations: [
        "Product must meet relevant Saudi standards or recognized international standards",
        "SABER platform registration required for customs clearance",
        "Product Conformity Certificate (PCoC) or Shipment Conformity Certificate (SCoC) depending on product category",
      ],
    },

    mandatoryCertification: {
      status: "PRODUCT_SCOPE_DEPENDENT",
      certificationName: "SASO / SABER",
      description: "Mandatory certification requirement depends on whether DC MCB falls under SASO's regulated product list for the intended application. Solar PV components may require SABER registration and conformity certification.",
      scope: "DC MCBs used in solar installations may require conformity assessment under SASO technical regulations. Verification with SASO or local certification body recommended.",
    },

    documents: [
      "IEC 60947-2 test report",
      "Product datasheet with DC ratings",
      "Manufacturing quality certificate",
      "SABER registration (if applicable)",
      "Certificate of Conformity from recognized body",
    ],

    productChecks: [
      "Rated DC voltage matches system voltage",
      "Breaking capacity suitable for PV string Isc",
      "Pole configuration (1P, 2P, 3P, 4P) appropriate",
      "Arc-quenching design confirmed for DC",
      "Operating temperature range suitable for local climate",
    ],

    applicationChecks: [
      "System voltage within MCB rating",
      "String short-circuit current below breaking capacity",
      "Installation location (combiner box, inverter DC input)",
      "Backup protection coordination",
      "Compliance with local electrical code",
    ],

    evidence: {
      sourceAuthority: "Saudi Standards, Metrology and Quality Organization (SASO)",
      sourceTitle: "SABER Platform - Regulated Products List",
      sourceUrl: "https://www.saso.gov.sa/en/saber",
      verificationStatus: "MARKET_FRAMEWORK_VERIFIED",
      lastReviewedDate: "2026-09-06",
      evidenceNote: "SASO market framework confirmed. Product-specific mandatory certification status requires verification against current SABER regulated product list for solar PV components.",
    },

    buyerAdvice: {
      "Distributor": "Request SABER registration documentation and CoC from supplier before importing. Verify product is certified to IEC 60947-2.",
      "EPC / Installer": "Confirm DC MCB rating matches PV system design. Request test reports and conformity certificates for project documentation.",
      "OEM Brand Owner": "Work with SASO-recognized certification body for product conformity assessment. Register on SABER platform before export to Saudi Arabia.",
    },

    projectContext: "Saudi Arabia solar projects typically require SASO/SABER compliance documentation for customs clearance and project acceptance. Early verification recommended.",
  },

  {
    id: "dc-mcb-de-solar",
    productSlug: "dc-mcb",
    countrySlug: "de",
    application: "Solar PV",

    technicalStandard: {
      code: "IEC 60947-2 / EN 60947-2",
      title: "Low-voltage switchgear and controlgear - Part 2: Circuit-breakers",
      description: "Technical standard for DC circuit-breakers in European market.",
      applicability: "Product must comply with EN 60947-2 (harmonized IEC standard) for DC operation.",
    },

    marketAccess: {
      framework: "EU Low Voltage Directive 2014/35/EU",
      description: "DC MCBs operating within 50-1500V DC fall under LVD scope. Manufacturer must demonstrate conformity with essential safety requirements.",
      obligations: [
        "Technical documentation demonstrating LVD compliance",
        "Declaration of Conformity (DoC)",
        "CE marking affixed to product",
        "Product must meet harmonized standards (EN 60947-2)",
      ],
    },

    mandatoryCertification: {
      status: "CONFIRMED",
      certificationName: "CE Marking (LVD)",
      description: "CE marking under Low Voltage Directive is mandatory for DC MCBs placed on the EU market.",
      scope: "Applies to DC circuit-breakers rated 50-1500V DC for PV and battery applications.",
    },

    documents: [
      "EN 60947-2 test report from accredited lab",
      "Technical construction file (TCF)",
      "Declaration of Conformity (DoC)",
      "Product manual in German (for Germany)",
      "Risk assessment documentation",
    ],

    productChecks: [
      "Rated DC voltage compliant with EN 60947-2",
      "Breaking capacity declared per EN standard",
      "CE marking and DoC available",
      "Technical documentation prepared",
      "Product manual available in local language",
    ],

    applicationChecks: [
      "System voltage within DC MCB rating",
      "Installation according to VDE standards",
      "Coordination with upstream protection",
      "Compliance with German electrical installation rules (VDE 0100)",
    ],

    evidence: {
      sourceAuthority: "European Commission",
      sourceTitle: "Low Voltage Directive 2014/35/EU",
      sourceUrl: "https://ec.europa.eu/growth/sectors/electrical-engineering/lvd-directive_en",
      verificationStatus: "VERIFIED",
      lastReviewedDate: "2026-09-06",
      evidenceNote: "LVD applicability to DC MCBs for PV confirmed. CE marking mandatory for market placement in Germany and EU.",
    },

    buyerAdvice: {
      "Distributor": "Verify supplier provides CE-marked products with DoC. Request EN 60947-2 test reports.",
      "EPC / Installer": "Only use CE-marked DC MCBs. Keep DoC on file for project documentation and inspections.",
      "Panel Builder": "Ensure DC MCB is CE-marked and rated for intended DC system voltage. Maintain technical documentation.",
    },

    projectContext: "Germany requires strict compliance with VDE standards and LVD for solar installations. CE marking and technical documentation are verified during inspections.",
  },

  {
    id: "dc-mcb-us-solar",
    productSlug: "dc-mcb",
    countrySlug: "us",
    application: "Solar PV",

    technicalStandard: {
      code: "UL 489B",
      title: "Molded-Case Circuit Breakers, Molded-Case Switches and Circuit-Breaker Enclosures - Supplement B (DC)",
      description: "US standard for DC circuit breakers.",
      applicability: "DC MCBs for PV applications in US market typically evaluated to UL 489B or UL 1741 (inverter-connected).",
    },

    marketAccess: {
      framework: "National Electrical Code (NEC) Article 690 - Solar Photovoltaic Systems",
      description: "NEC Article 690 specifies requirements for PV system equipment. DC overcurrent protection must be listed and rated for DC application.",
      obligations: [
        "Product must be UL Listed or equivalent NRTL certification",
        "Equipment must meet NEC Article 690 requirements",
        "Installation per NEC and local electrical code",
      ],
    },

    mandatoryCertification: {
      status: "CONFIRMED",
      certificationName: "UL Listing (UL 489B or UL 1741)",
      description: "UL listing or equivalent NRTL certification is mandatory for DC overcurrent protection devices used in PV systems in the United States.",
      scope: "DC MCBs must be UL Listed for DC voltage and current ratings used in solar applications.",
    },

    documents: [
      "UL 489B listing certificate",
      "UL test report",
      "Product datasheet with UL listing mark",
      "Installation manual (English)",
      "NEC compliance documentation",
    ],

    productChecks: [
      "UL Listed for DC operation",
      "Rated DC voltage matches PV system",
      "Current rating suitable for PV string",
      "Breaking capacity adequate for available fault current",
      "Product labeled with UL mark",
    ],

    applicationChecks: [
      "Compliance with NEC Article 690",
      "Proper conductor sizing per NEC",
      "System grounding per NEC 690.41",
      "Installation by licensed electrician",
      "Inspection by Authority Having Jurisdiction (AHJ)",
    ],

    evidence: {
      sourceAuthority: "National Fire Protection Association (NFPA) / UL",
      sourceTitle: "NEC Article 690 and UL 489B Standard",
      sourceUrl: "https://www.ul.com/resources/ul-489-standard-molded-case-circuit-breakers",
      verificationStatus: "VERIFIED",
      lastReviewedDate: "2026-09-06",
      evidenceNote: "NEC Article 690 and UL listing requirement for DC overcurrent protection in PV systems confirmed. UL 489B or UL 1741 listing mandatory.",
    },

    buyerAdvice: {
      "Distributor": "Only stock UL Listed DC MCBs. Verify UL mark on product and request listing certificate.",
      "EPC / Installer": "Ensure DC MCB is UL Listed before installation. Keep documentation for AHJ inspection.",
      "Project Contractor": "Coordinate with AHJ for approval. Use only UL Listed equipment per NEC requirements.",
    },

    projectContext: "US solar projects require strict NEC compliance and UL Listed equipment. AHJ inspections verify product listings and installation compliance.",
  },

  // ====================================
  // AC MCB Rules
  // ====================================
  {
    id: "ac-mcb-in-residential",
    productSlug: "ac-mcb",
    countrySlug: "in",
    application: "Residential",

    technicalStandard: {
      code: "IS 60898-1 / IEC 60898-1",
      title: "Electrical accessories - Circuit-breakers for overcurrent protection for household and similar installations",
      description: "Indian standard for AC MCBs, harmonized with IEC 60898-1.",
      applicability: "Applicable for AC MCBs rated up to 63A for household and similar installations.",
    },

    marketAccess: {
      framework: "Bureau of Indian Standards (BIS) Compulsory Registration Scheme",
      description: "AC MCBs are under BIS CRS (Compulsory Registration Scheme). Products must be registered and ISI marked before sale in India.",
      obligations: [
        "BIS registration (CRS) mandatory",
        "ISI mark on product",
        "Factory inspection by BIS",
        "Ongoing surveillance",
      ],
    },

    mandatoryCertification: {
      status: "CONFIRMED",
      certificationName: "BIS Registration (ISI Mark)",
      description: "BIS registration under CRS and ISI marking is mandatory for AC MCBs sold in India.",
      scope: "Covers all AC MCBs for household and similar installations per IS 60898-1.",
    },

    documents: [
      "IS 60898-1 test report from NABL accredited lab",
      "BIS CRS registration certificate",
      "Factory inspection report",
      "ISI mark approval",
      "Bill of materials",
    ],

    productChecks: [
      "Product complies with IS 60898-1",
      "ISI mark applied to product",
      "BIS registration certificate valid",
      "Rated for Indian grid voltage (230V AC)",
      "Suitable for ambient temperature up to 50°C",
    ],

    applicationChecks: [
      "Compliance with Indian Electricity Rules",
      "Proper installation per IE Rules 2023",
      "Coordination with RCCB/ELCB if used",
      "Wire gauge suitable for MCB rating",
    ],

    evidence: {
      sourceAuthority: "Bureau of Indian Standards (BIS)",
      sourceTitle: "BIS CRS - Mandatory Registration Scheme",
      sourceUrl: "https://www.bis.gov.in/",
      verificationStatus: "VERIFIED",
      lastReviewedDate: "2026-09-06",
      evidenceNote: "BIS CRS mandatory for AC MCBs confirmed. ISI marking required for market access in India.",
    },

    buyerAdvice: {
      "Distributor": "Verify BIS CRS registration and ISI mark before import. Request valid registration certificate from supplier.",
      "Panel Builder": "Only use BIS registered, ISI marked AC MCBs. Keep registration certificates on file.",
      "Project Contractor": "Ensure all AC MCBs have ISI mark for project acceptance and electrical inspections.",
    },

    projectContext: "India requires BIS registration and ISI marking for all AC MCBs. Products without ISI mark cannot be legally sold or installed.",
  },

  // ====================================
  // Energy Meter Rules
  // ====================================
  {
    id: "energy-meter-de-commercial",
    productSlug: "energy-meter",
    countrySlug: "de",
    application: "Commercial",

    technicalStandard: {
      code: "IEC 62052 / IEC 62053",
      title: "Electricity metering equipment - General requirements and accuracy",
      description: "International standards for electricity metering equipment.",
      applicability: "IEC 62052/62053 provide technical basis for energy meters. For billing applications in EU, MID compliance required.",
    },

    marketAccess: {
      framework: "EU Measuring Instruments Directive (MID) 2014/32/EU",
      description: "Energy meters used for billing or commercial transactions in EU must comply with MID. Sub-metering for monitoring only may not require MID.",
      obligations: [
        "MID compliance for billing meters",
        "CE marking under MID",
        "Accuracy class per MID Annex MI-003",
        "Conformity assessment by notified body",
      ],
    },

    mandatoryCertification: {
      status: "PROJECT_DEPENDENT",
      certificationName: "CE Marking (MID)",
      description: "CE marking under MID is mandatory for energy meters used for billing purposes. Sub-metering for monitoring only does not require MID certification.",
      scope: "MID applies when meter reading is used for commercial transaction or billing. Monitoring-only meters may use IEC standards without MID.",
    },

    documents: [
      "IEC 62052/62053 test report",
      "MID conformity certificate (if billing use)",
      "CE marking DoC",
      "Accuracy class documentation",
      "Product manual in German",
    ],

    productChecks: [
      "Accuracy class appropriate for intended use (Class B, Class C for billing)",
      "MID certification if used for billing",
      "CE marking present",
      "Rated for German grid (230V / 400V AC)",
      "Communication protocol compatible with local system",
    ],

    applicationChecks: [
      "Determine if meter is used for billing (MID required) or monitoring only",
      "Proper installation per VDE standards",
      "CT sizing correct for load",
      "Calibration seal intact (for billing meters)",
    ],

    evidence: {
      sourceAuthority: "European Commission / PTB (German National Metrology Institute)",
      sourceTitle: "Measuring Instruments Directive 2014/32/EU",
      sourceUrl: "https://ec.europa.eu/growth/single-market/european-standards/harmonised-standards/measuring-instruments_en",
      verificationStatus: "VERIFIED",
      lastReviewedDate: "2026-09-06",
      evidenceNote: "MID applicability to energy meters for billing confirmed. Monitoring-only meters not covered by MID, but must meet general electrical safety requirements.",
    },

    buyerAdvice: {
      "Distributor": "Clarify customer use case - billing (MID required) or monitoring only. Stock MID-certified meters for billing applications.",
      "Panel Builder": "Use MID-certified meters for tenant billing. Monitoring-only sub-meters can use IEC-compliant non-MID meters.",
      "Project Contractor": "Confirm meter use case with customer before procurement. MID required for any commercial billing application.",
    },

    projectContext: "Germany distinguishes between billing meters (MID mandatory) and monitoring meters (MID not required). Clarify use case early in project.",
  },
];

// Index by product-country for fast lookup
export const rulesIndex = marketAccessRules.reduce(
  (acc, rule) => {
    const key = `${rule.productSlug}-${rule.countrySlug}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(rule);
    return acc;
  },
  {} as Record<string, MarketAccessRule[]>
);
