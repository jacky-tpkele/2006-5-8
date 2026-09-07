export type StandardStatus = "Current" | "Scope check";
export type StandardRecord = {
  slug: string;
  code: string;
  system: "IEC" | "UL";
  status: StandardStatus;
  year: number;
  referenceType: string;
  title: string;
  products: string[];
  applications: string[];
  summary: string;
  scope: string;
  relevance: string;
  warning: string;
  why: string[];
  related: string[];
  source: string;
  lastReviewed: string;
  addedIn: "V1" | "V2";
};

export const standards: StandardRecord[] = [
  {
    "slug": "iec-60947-2",
    "code": "IEC 60947-2:2024",
    "system": "IEC",
    "status": "Current",
    "year": 2024,
    "referenceType": "Product standard",
    "title": "Low-voltage switchgear and controlgear — Part 2: Circuit-breakers",
    "products": [
      "DC MCB",
      "AC MCB"
    ],
    "applications": [
      "Industrial",
      "Solar / PV",
      "Power Distribution"
    ],
    "summary": "Industrial / skilled-person circuit-breaker standard for AC and DC applications up to 1,000 V AC or 1,500 V DC within scope.",
    "scope": "Applies to circuit-breakers intended to be installed and operated by instructed or skilled persons, with rated voltage not exceeding 1,000 V AC or 1,500 V DC.",
    "relevance": "High",
    "warning": "Product relevance is not a certification claim. Exact applicability depends on breaker design, ratings, intended installation and certificate scope.",
    "why": [
      "Relevant to many higher-voltage DC breaker applications.",
      "The 2024 sixth edition replaced the 2016 edition and its amendment."
    ],
    "related": [
      "Compare IEC 60898 family for household and similar-use circuit-breakers."
    ],
    "source": "https://webstore.iec.ch/en/publication/66277",
    "lastReviewed": "2026-09-07",
    "addedIn": "V1"
  },
  {
    "slug": "iec-60898-1",
    "code": "IEC 60898-1:2015+A1:2019",
    "system": "IEC",
    "status": "Current",
    "year": 2019,
    "referenceType": "Product standard",
    "title": "Circuit-breakers for overcurrent protection — Part 1: AC operation",
    "products": [
      "AC MCB"
    ],
    "applications": [
      "Residential",
      "Commercial"
    ],
    "summary": "Core IEC reference for household and similar-installation AC miniature circuit-breakers.",
    "scope": "Applies to AC air-break circuit-breakers up to 440 V, 125 A and 25 kA within scope.",
    "relevance": "High",
    "warning": "Do not automatically apply this standard to every industrial breaker. Intended users and installation context matter.",
    "why": [
      "Helps distinguish household/similar MCB requirements from industrial circuit-breaker requirements."
    ],
    "related": [
      "IEC 60947-2 covers a different circuit-breaker scope."
    ],
    "source": "https://webstore.iec.ch/en/publication/66269",
    "lastReviewed": "2026-09-07",
    "addedIn": "V1"
  },
  {
    "slug": "iec-60898-2",
    "code": "IEC 60898-2:2016",
    "system": "IEC",
    "status": "Scope check",
    "year": 2016,
    "referenceType": "Product standard",
    "title": "Circuit-breakers for overcurrent protection — Part 2: AC and DC operation",
    "products": [
      "DC MCB"
    ],
    "applications": [
      "Residential",
      "Commercial"
    ],
    "summary": "Household/similar-use AC/DC breaker reference with defined DC voltage limits.",
    "scope": "Adds requirements for single- and two-pole circuit-breakers suitable for DC, including rated DC voltage limits within its defined scope.",
    "relevance": "Conditional",
    "warning": "Many solar DC MCB configurations operate above the DC voltage limits stated in this standard; do not apply it solely from the product name.",
    "why": [
      "Useful for avoiding the common mistake of treating every DC MCB as an IEC 60898-2 application."
    ],
    "related": [
      "Read together with IEC 60898-1.",
      "Compare IEC 60947-2 for professional/industrial DC breaker applications."
    ],
    "source": "https://webstore.iec.ch/en/publication/25675",
    "lastReviewed": "2026-09-07",
    "addedIn": "V1"
  },
  {
    "slug": "iec-61643-11",
    "code": "IEC 61643-11:2025",
    "system": "IEC",
    "status": "Current",
    "year": 2025,
    "referenceType": "Product standard",
    "title": "Low-voltage surge protective devices — Part 11: SPDs connected to AC low-voltage power systems",
    "products": [
      "AC SPD"
    ],
    "applications": [
      "Residential",
      "Commercial",
      "Industrial",
      "Power Distribution"
    ],
    "summary": "Current IEC reference for surge protective devices connected to AC low-voltage power systems.",
    "scope": "Applies to devices for surge protection against lightning effects or other transient overvoltages within the standard's AC low-voltage scope.",
    "relevance": "High",
    "warning": "SPD type, protection mode, system voltage and installation location still need to be matched to the actual application.",
    "why": [
      "Directly relevant to TPKELE AC SPD product navigation."
    ],
    "related": [
      "IEC 61643-12 provides selection and application principles.",
      "IEC 61643-31 covers PV DC-side SPDs."
    ],
    "source": "https://webstore.iec.ch/en/publication/65314",
    "lastReviewed": "2026-09-07",
    "addedIn": "V1"
  },
  {
    "slug": "iec-61643-31",
    "code": "IEC 61643-31:2018",
    "system": "IEC",
    "status": "Current",
    "year": 2018,
    "referenceType": "Product standard",
    "title": "Low-voltage surge protective devices — Part 31: SPDs for photovoltaic installations",
    "products": [
      "DC SPD",
      "PV Combiner Box"
    ],
    "applications": [
      "Solar / PV"
    ],
    "summary": "PV-specific IEC SPD standard for DC-side surge protection up to 1,500 V DC.",
    "scope": "Applies to SPDs intended for the DC side of photovoltaic installations rated up to 1,500 V DC.",
    "relevance": "High",
    "warning": "This is a PV DC-side SPD standard; verify the actual system architecture and product certificate scope.",
    "why": [
      "Directly relevant to TPKELE DC SPD products used in PV combiner boxes and inverter DC inputs."
    ],
    "related": [
      "IEC 61643-32 provides PV SPD selection/application principles.",
      "IEC 61643-11 covers AC-side SPDs."
    ],
    "source": "https://webstore.iec.ch/en/publication/26931",
    "lastReviewed": "2026-09-07",
    "addedIn": "V1"
  },
  {
    "slug": "iec-60947-6-1",
    "code": "IEC 60947-6-1:2026",
    "system": "IEC",
    "status": "Current",
    "year": 2026,
    "referenceType": "Product standard",
    "title": "Low-voltage switchgear and controlgear — Part 6-1: Transfer switching equipment",
    "products": [
      "ATS"
    ],
    "applications": [
      "Commercial",
      "Industrial",
      "Power Distribution"
    ],
    "summary": "Current IEC reference for transfer switching equipment, including automatic transfer switching applications.",
    "scope": "Applies to transfer switching equipment used to transfer loads between sources within the standard's voltage and product scope.",
    "relevance": "High",
    "warning": "ATS construction, transition mode, controller arrangement and classification must still be checked against the exact scope.",
    "why": [
      "Directly relevant to TPKELE automatic transfer switch product selection.",
      "The 2026 edition supersedes the 2021 edition."
    ],
    "related": [
      "IEC 60947-1 supplies general rules where invoked by the product standard."
    ],
    "source": "https://webstore.iec.ch/en/publication/90494",
    "lastReviewed": "2026-09-07",
    "addedIn": "V1"
  },
  {
    "slug": "iec-62052-11",
    "code": "IEC 62052-11:2020",
    "system": "IEC",
    "status": "Current",
    "year": 2020,
    "referenceType": "General requirements",
    "title": "Electricity metering equipment — General requirements, tests and test conditions — Part 11",
    "products": [
      "Energy Meter"
    ],
    "applications": [
      "Metering",
      "Commercial",
      "Industrial"
    ],
    "summary": "General IEC requirements and test-condition reference for electricity metering equipment.",
    "scope": "Specifies general requirements and type-test conditions for AC and DC electricity metering equipment within its scope.",
    "relevance": "High",
    "warning": "Meter accuracy class and specialized functions can require additional IEC 62053-series parts.",
    "why": [
      "Useful as the general-requirements layer for DIN-rail electricity meters."
    ],
    "related": [
      "Pair with the appropriate IEC 62053 particular requirements.",
      "IEC 62052-31 covers safety requirements."
    ],
    "source": "https://webstore.iec.ch/en/publication/28212",
    "lastReviewed": "2026-09-07",
    "addedIn": "V1"
  },
  {
    "slug": "iec-62053-21",
    "code": "IEC 62053-21:2020",
    "system": "IEC",
    "status": "Current",
    "year": 2020,
    "referenceType": "Product standard",
    "title": "Electricity metering equipment — Particular requirements — Part 21: Static meters for AC active energy",
    "products": [
      "Energy Meter"
    ],
    "applications": [
      "Metering",
      "Commercial"
    ],
    "summary": "Particular requirements for static AC active-energy meters of defined accuracy classes.",
    "scope": "Applies to static watt-hour meters of specified accuracy classes for measuring AC active energy on 50/60 Hz networks within scope.",
    "relevance": "High",
    "warning": "Use only where the meter measurement function and accuracy class match the standard scope.",
    "why": [
      "Relevant to many DIN-rail kWh meter applications."
    ],
    "related": [
      "IEC 62052-11:2020 supplies general requirements."
    ],
    "source": "https://webstore.iec.ch/en/publication/28660",
    "lastReviewed": "2026-09-07",
    "addedIn": "V1"
  },
  {
    "slug": "iec-61439-2",
    "code": "IEC 61439-2:2020",
    "system": "IEC",
    "status": "Scope check",
    "year": 2020,
    "referenceType": "Assembly standard",
    "title": "Low-voltage switchgear and controlgear assemblies — Part 2: Power switchgear and controlgear assemblies",
    "products": [
      "PV Combiner Box"
    ],
    "applications": [
      "Solar / PV",
      "Industrial",
      "Power Distribution"
    ],
    "summary": "Assembly-level reference that can be relevant when an enclosure is treated as a low-voltage power switchgear/controlgear assembly.",
    "scope": "Defines specific requirements for power switchgear and controlgear assemblies within its AC/DC voltage scope.",
    "relevance": "System-level",
    "warning": "Do not present IEC 61439-2 as an automatic product standard for every PV combiner box; assembly design and declared scope must be assessed.",
    "why": [
      "Helps distinguish component standards from assembly-level verification."
    ],
    "related": [
      "IEC 61439-1 contains the general assembly rules."
    ],
    "source": "https://webstore.iec.ch/en/publication/30043",
    "lastReviewed": "2026-09-07",
    "addedIn": "V1"
  },
  {
    "slug": "iec-60269-6",
    "code": "IEC 60269-6:2010+A1:2021",
    "system": "IEC",
    "status": "Current",
    "year": 2021,
    "referenceType": "Product standard",
    "title": "Low-voltage fuses — Part 6: Supplementary requirements for PV fuse-links",
    "products": [
      "PV Combiner Box"
    ],
    "applications": [
      "Solar / PV"
    ],
    "summary": "PV-specific fuse-link requirements relevant to fuse protection inside solar combiner systems.",
    "scope": "Provides supplementary requirements for fuse-links protecting PV strings and arrays within the standard's DC voltage scope.",
    "relevance": "Component-level",
    "warning": "This is a fuse-link standard, not a complete combiner-box certification standard.",
    "why": [
      "Relevant when TPKELE PV combiner boxes include PV string fuses."
    ],
    "related": [
      "IEC 60269-1 provides the general low-voltage fuse requirements."
    ],
    "source": "https://webstore.iec.ch/en/publication/68843",
    "lastReviewed": "2026-09-07",
    "addedIn": "V1"
  },
  {
    "slug": "iec-60364-7-712",
    "code": "IEC 60364-7-712:2025",
    "system": "IEC",
    "status": "Scope check",
    "year": 2025,
    "referenceType": "Installation standard",
    "title": "Low-voltage electrical installations — Part 7-712: Solar photovoltaic power supply installations",
    "products": [
      "DC MCB",
      "DC SPD",
      "PV Combiner Box"
    ],
    "applications": [
      "Solar / PV"
    ],
    "summary": "Installation-level PV standard used to understand how protection devices fit into the overall solar electrical installation.",
    "scope": "Applies to electrical installations of photovoltaic systems within the standard's installation scope.",
    "relevance": "System-level",
    "warning": "This is an installation standard, not a standalone product certification standard for a breaker, SPD or combiner box.",
    "why": [
      "Connects device selection to real PV installation design.",
      "Useful for EPCs and engineers reviewing DC protection architecture."
    ],
    "related": [
      "Product standards still apply separately to breakers, SPDs, fuses and assembly components."
    ],
    "source": "https://webstore.iec.ch/en/publication/65748",
    "lastReviewed": "2026-09-07",
    "addedIn": "V1"
  },
  {
    "slug": "ul-489",
    "code": "UL 489 — 14th Edition",
    "system": "UL",
    "status": "Current",
    "year": 2025,
    "referenceType": "Regional product standard",
    "title": "Molded-Case Circuit Breakers, Molded-Case Switches and Circuit-Breaker Enclosures",
    "products": [
      "DC MCB",
      "AC MCB"
    ],
    "applications": [
      "Residential",
      "Commercial",
      "Industrial",
      "Power Distribution"
    ],
    "summary": "North American circuit-breaker standards pathway; not an IEC 60947-2 equivalent.",
    "scope": "Covers defined molded-case circuit breakers and related devices for the applications and ratings stated in UL 489.",
    "relevance": "Regional pathway",
    "warning": "A TPKELE model must have the appropriate UL evaluation/listing before any UL conformity claim is made.",
    "why": [
      "Provides a North American reference point for circuit-breaker buyers."
    ],
    "related": [
      "Compare market access separately with the TPKELE Market Access Advisor."
    ],
    "source": "https://www.shopulstandards.com/ProductDetail.aspx?productId=UL489",
    "lastReviewed": "2026-09-07",
    "addedIn": "V1"
  },
  {
    "slug": "ul-1449",
    "code": "UL 1449 — 5th Edition",
    "system": "UL",
    "status": "Current",
    "year": 2025,
    "referenceType": "Regional product standard",
    "title": "Surge Protective Devices",
    "products": [
      "AC SPD",
      "DC SPD"
    ],
    "applications": [
      "Residential",
      "Commercial",
      "Industrial",
      "Solar / PV"
    ],
    "summary": "North American SPD standards pathway with its own classification and testing framework.",
    "scope": "Covers surge protective devices within the defined UL 1449 scope, including specified AC and PV/DC applications.",
    "relevance": "Regional pathway",
    "warning": "IEC SPD Type 1/2 terminology should not be treated as automatically interchangeable with UL SPD types or listing requirements.",
    "why": [
      "Relevant to buyers comparing IEC and North American SPD pathways."
    ],
    "related": [
      "Use market-specific certification evidence before making a compliance claim."
    ],
    "source": "https://www.shopulstandards.com/ProductDetail.aspx?productId=UL1449",
    "lastReviewed": "2026-09-07",
    "addedIn": "V1"
  },
  {
    "slug": "ul-1008",
    "code": "UL 1008 — 9th Edition",
    "system": "UL",
    "status": "Current",
    "year": 2026,
    "referenceType": "Regional product standard",
    "title": "Transfer Switch Equipment",
    "products": [
      "ATS"
    ],
    "applications": [
      "Commercial",
      "Industrial",
      "Power Distribution"
    ],
    "summary": "North American transfer-switch standards pathway; separate from IEC 60947-6-1.",
    "scope": "Applies to transfer switch equipment within the ratings and applications defined by UL 1008.",
    "relevance": "Regional pathway",
    "warning": "UL 1008 and IEC 60947-6-1 are different standards systems and certification pathways.",
    "why": [
      "Useful for ATS buyers comparing IEC and North American market pathways."
    ],
    "related": [
      "Use the Market Access Advisor for destination-specific conformity requirements."
    ],
    "source": "https://www.shopulstandards.com/ProductDetail.aspx?UniqueKey=43103",
    "lastReviewed": "2026-09-07",
    "addedIn": "V1"
  },
  {
    "slug": "iec-60947-1",
    "code": "IEC 60947-1:2020",
    "system": "IEC",
    "status": "Current",
    "year": 2024,
    "referenceType": "General requirements",
    "title": "Low-voltage switchgear and controlgear — Part 1: General rules",
    "products": [
      "DC MCB",
      "AC MCB",
      "ATS"
    ],
    "applications": [
      "Commercial",
      "Industrial",
      "Power Distribution",
      "Solar / PV"
    ],
    "summary": "General rules and common safety requirements used by IEC 60947 product standards for low-voltage switchgear/controlgear.",
    "scope": "Applies when required by the relevant product standard to low-voltage switchgear and controlgear connected to circuits not exceeding 1,000 V AC or 1,500 V DC.",
    "relevance": "Foundational",
    "warning": "IEC 60947-1 is a general-rules document. It should not be used alone as the product standard for a circuit breaker or ATS.",
    "why": [
      "Provides common definitions, characteristics, markings and safety rules used across the IEC 60947 family.",
      "Useful context for IEC 60947-2, IEC 60947-3 and IEC 60947-6-1."
    ],
    "related": [
      "IEC 60947-2 for circuit-breakers.",
      "IEC 60947-3 for switches/disconnectors.",
      "IEC 60947-6-1 for transfer switching equipment.",
      "The IEC webstore lists a 2024 corrigendum to the 2020 edition."
    ],
    "source": "https://webstore.iec.ch/en/publication/26973",
    "lastReviewed": "2026-09-07",
    "addedIn": "V2"
  },
  {
    "slug": "iec-60947-3",
    "code": "IEC 60947-3:2020+A1:2025",
    "system": "IEC",
    "status": "Current",
    "year": 2025,
    "referenceType": "Product standard",
    "title": "Switches, disconnectors, switch-disconnectors and fuse-combination units",
    "products": [
      "PV Combiner Box"
    ],
    "applications": [
      "Solar / PV",
      "Industrial",
      "Power Distribution"
    ],
    "summary": "Product standard for switches, disconnectors, switch-disconnectors and fuse-combination units up to 1,000 V AC or 1,500 V DC.",
    "scope": "Applies to switching/disconnecting and fuse-combination devices used in distribution and motor circuits within the standard's voltage scope.",
    "relevance": "Component-level",
    "warning": "Relevant to isolating/switching components inside a combiner or distribution solution; it is not a complete PV combiner-box standard.",
    "why": [
      "Useful when a PV combiner box includes a DC switch-disconnector or fuse-combination device.",
      "The 2025 amendment adds updated requirements including DC switching considerations."
    ],
    "related": [
      "IEC 60947-1 provides general rules.",
      "IEC 61439 series can be relevant at assembly level."
    ],
    "source": "https://webstore.iec.ch/en/publication/107159",
    "lastReviewed": "2026-09-07",
    "addedIn": "V2"
  },
  {
    "slug": "iec-61643-12",
    "code": "IEC 61643-12:2020",
    "system": "IEC",
    "status": "Current",
    "year": 2020,
    "referenceType": "Selection & application",
    "title": "Surge protective devices connected to low-voltage power systems — Selection and application principles",
    "products": [
      "AC SPD"
    ],
    "applications": [
      "Residential",
      "Commercial",
      "Industrial",
      "Power Distribution"
    ],
    "summary": "Selection, operation, location and coordination guidance for SPDs connected to 50/60 Hz AC power circuits.",
    "scope": "Describes principles for selecting, locating and coordinating SPDs for AC power circuits and equipment rated up to 1,000 V RMS.",
    "relevance": "Application guidance",
    "warning": "This is a selection/application document, not a product certification standard.",
    "why": [
      "Helps engineers move from SPD product ratings to practical placement and coordination.",
      "Complements IEC 61643-11 product requirements."
    ],
    "related": [
      "IEC 61643-11 for AC SPD product requirements.",
      "IEC 60364 and IEC 62305-4 are also relevant to installation and lightning protection."
    ],
    "source": "https://webstore.iec.ch/en/publication/32531",
    "lastReviewed": "2026-09-07",
    "addedIn": "V2"
  },
  {
    "slug": "iec-61643-32",
    "code": "IEC 61643-32:2017+COR1:2019",
    "system": "IEC",
    "status": "Current",
    "year": 2019,
    "referenceType": "Selection & application",
    "title": "PV DC surge protective devices — Selection and application principles",
    "products": [
      "DC SPD",
      "PV Combiner Box"
    ],
    "applications": [
      "Solar / PV"
    ],
    "summary": "Selection, installation and coordination principles for SPDs used in photovoltaic systems up to 1,500 V DC.",
    "scope": "Addresses selection, installation and coordination of SPDs on the DC side of PV systems and related AC-side considerations within scope.",
    "relevance": "Application guidance",
    "warning": "This is system selection/application guidance; product conformity for PV SPDs is addressed by IEC 61643-31.",
    "why": [
      "Useful for selecting and coordinating DC SPDs in PV arrays, combiner boxes and inverter-side protection."
    ],
    "related": [
      "IEC 61643-31 for PV SPD product requirements.",
      "IEC 62548-1 for PV array design."
    ],
    "source": "https://webstore.iec.ch/en/publication/30774",
    "lastReviewed": "2026-09-07",
    "addedIn": "V2"
  },
  {
    "slug": "iec-60364-4-43",
    "code": "IEC 60364-4-43:2023",
    "system": "IEC",
    "status": "Current",
    "year": 2023,
    "referenceType": "Installation standard",
    "title": "Low-voltage electrical installations — Protection against overcurrent",
    "products": [
      "DC MCB",
      "AC MCB",
      "PV Combiner Box"
    ],
    "applications": [
      "Residential",
      "Commercial",
      "Industrial",
      "Power Distribution",
      "Solar / PV"
    ],
    "summary": "Installation-level requirements for protecting conductors against harmful effects caused by overcurrent.",
    "scope": "Provides requirements for protection of conductors against overcurrent and coordination of overcurrent-protection measures.",
    "relevance": "System-level",
    "warning": "This standard informs installation protection design; it does not replace the product standard for the breaker or fuse itself.",
    "why": [
      "Connects breaker/fuse selection with conductor protection and installation design.",
      "Useful for engineers evaluating overcurrent-protection architecture."
    ],
    "related": [
      "IEC 60947-2 and IEC 60898 family cover relevant breaker product requirements.",
      "IEC 60269 family covers fuses."
    ],
    "source": "https://webstore.iec.ch/en/publication/28432",
    "lastReviewed": "2026-09-07",
    "addedIn": "V2"
  },
  {
    "slug": "iec-60364-5-53",
    "code": "IEC 60364-5-53:2019+A1:2020+A2:2024",
    "system": "IEC",
    "status": "Current",
    "year": 2024,
    "referenceType": "Installation standard",
    "title": "Selection and erection of devices for protection, isolation, switching, control and monitoring",
    "products": [
      "DC MCB",
      "AC MCB",
      "AC SPD",
      "DC SPD",
      "ATS",
      "Voltage Protector"
    ],
    "applications": [
      "Residential",
      "Commercial",
      "Industrial",
      "Power Distribution",
      "Solar / PV"
    ],
    "summary": "Broad installation-level guidance for selecting and erecting protection, isolation, switching, control and monitoring devices.",
    "scope": "Deals with general requirements for isolation, switching and control and selection/erection of devices provided for these functions.",
    "relevance": "System-level",
    "warning": "It is an installation standard. Product-specific conformity must still be checked against each device's applicable product standard.",
    "why": [
      "Useful for connecting TPKELE protection/switching products to installation-level design decisions.",
      "The consolidated edition incorporates amendments through 2024."
    ],
    "related": [
      "Contains installation-level requirements that interact with overcurrent, SPD, isolation and monitoring devices."
    ],
    "source": "https://webstore.iec.ch/en/publication/104394",
    "lastReviewed": "2026-09-07",
    "addedIn": "V2"
  },
  {
    "slug": "iec-61439-1",
    "code": "IEC 61439-1:2020",
    "system": "IEC",
    "status": "Current",
    "year": 2023,
    "referenceType": "Assembly standard",
    "title": "Low-voltage switchgear and controlgear assemblies — Part 1: General rules",
    "products": [
      "PV Combiner Box"
    ],
    "applications": [
      "Industrial",
      "Power Distribution",
      "Solar / PV"
    ],
    "summary": "General definitions, service conditions, construction requirements, technical characteristics and verification requirements for LV assemblies.",
    "scope": "Provides general assembly rules that are used together with the relevant IEC 61439 product part; it is not normally used alone to determine assembly conformity.",
    "relevance": "Foundational assembly",
    "warning": "IEC 61439-1 is a general-rules standard and must be used with the appropriate assembly-specific part.",
    "why": [
      "Important when a PV combiner/distribution enclosure is treated as an LV switchgear/controlgear assembly.",
      "The current webstore copy includes corrigenda through 2023."
    ],
    "related": [
      "IEC 61439-2 for power switchgear/controlgear assemblies.",
      "IEC 62208 for empty enclosures."
    ],
    "source": "https://webstore.iec.ch/en/publication/32338",
    "lastReviewed": "2026-09-07",
    "addedIn": "V2"
  },
  {
    "slug": "iec-62548-1",
    "code": "IEC 62548-1:2023+A1:2025",
    "system": "IEC",
    "status": "Current",
    "year": 2025,
    "referenceType": "Installation standard",
    "title": "Photovoltaic arrays — Part 1: Design requirements",
    "products": [
      "DC MCB",
      "DC SPD",
      "PV Combiner Box"
    ],
    "applications": [
      "Solar / PV"
    ],
    "summary": "PV array design requirements covering DC wiring, electrical protection devices, switching and earthing provisions.",
    "scope": "Sets design requirements for PV arrays, including DC array wiring, electrical protection devices, switching and earthing, within the standard's defined system boundary.",
    "relevance": "High system-level",
    "warning": "This is a PV array design standard, not a product certification standard for an MCB, SPD or combiner box.",
    "why": [
      "Highly relevant to solar EPCs deciding where breakers, fuses, SPDs and disconnectors fit into the PV array.",
      "The 2025 amendment is incorporated into the current consolidated version."
    ],
    "related": [
      "IEC 60364-7-712 for PV electrical installations.",
      "IEC 61643-32 for PV SPD selection/application."
    ],
    "source": "https://webstore.iec.ch/en/publication/110893",
    "lastReviewed": "2026-09-07",
    "addedIn": "V2"
  },
  {
    "slug": "iec-62052-31",
    "code": "IEC 62052-31:2024",
    "system": "IEC",
    "status": "Current",
    "year": 2024,
    "referenceType": "Safety standard",
    "title": "Electricity metering equipment — Part 31: Product safety requirements and tests",
    "products": [
      "Energy Meter"
    ],
    "applications": [
      "Metering",
      "Commercial",
      "Industrial"
    ],
    "summary": "Current IEC general safety requirements and associated type tests for electricity metering equipment.",
    "scope": "Applies to electricity meters and load-control equipment within the AC/DC network voltage limits and configurations defined by the standard.",
    "relevance": "High",
    "warning": "Safety conformity does not by itself establish accuracy-class conformity; particular metering requirements may also apply.",
    "why": [
      "Adds the safety layer to the TPKELE meter standards map.",
      "Useful alongside IEC 62052-11 and IEC 62053 particular requirements."
    ],
    "related": [
      "IEC 62052-11 general requirements and test conditions.",
      "IEC 62053-21/23/24 for specific energy measurement functions."
    ],
    "source": "https://webstore.iec.ch/en/publication/64932",
    "lastReviewed": "2026-09-07",
    "addedIn": "V2"
  },
  {
    "slug": "iec-62053-23",
    "code": "IEC 62053-23:2020",
    "system": "IEC",
    "status": "Current",
    "year": 2020,
    "referenceType": "Product standard",
    "title": "Static meters for reactive energy — accuracy classes 2 and 3",
    "products": [
      "Energy Meter"
    ],
    "applications": [
      "Metering",
      "Commercial",
      "Industrial"
    ],
    "summary": "Particular requirements for static var-hour meters of accuracy classes 2 and 3 measuring AC reactive energy.",
    "scope": "Applies to static reactive-energy meters of the defined accuracy classes on 50/60 Hz AC networks within scope.",
    "relevance": "Conditional",
    "warning": "Relevant only when the meter measures reactive energy and matches the specified accuracy class.",
    "why": [
      "Expands the database beyond active-energy kWh metering to reactive-energy meters."
    ],
    "related": [
      "IEC 62052-11 general requirements.",
      "IEC 62053-24 covers additional reactive-energy accuracy classes based on fundamental-frequency components."
    ],
    "source": "https://webstore.iec.ch/en/publication/29239",
    "lastReviewed": "2026-09-07",
    "addedIn": "V2"
  },
  {
    "slug": "iec-62053-24",
    "code": "IEC 62053-24:2020",
    "system": "IEC",
    "status": "Current",
    "year": 2020,
    "referenceType": "Product standard",
    "title": "Static meters for fundamental component reactive energy",
    "products": [
      "Energy Meter"
    ],
    "applications": [
      "Metering",
      "Commercial",
      "Industrial"
    ],
    "summary": "Particular requirements for static reactive-energy meters across specified accuracy classes using fundamental-frequency components.",
    "scope": "Applies to defined static var-hour meters for AC reactive energy in 50/60 Hz systems within the stated accuracy-class scope.",
    "relevance": "Conditional",
    "warning": "Use only when the meter's reactive-energy calculation method and accuracy class match this standard.",
    "why": [
      "Useful for advanced DIN-rail meters that measure reactive energy, not only active kWh."
    ],
    "related": [
      "IEC 62052-11 general requirements.",
      "IEC 62053-23 covers classes 2 and 3 using its defined reactive-energy basis."
    ],
    "source": "https://webstore.iec.ch/en/publication/34533",
    "lastReviewed": "2026-09-07",
    "addedIn": "V2"
  },
  {
    "slug": "iec-60269-1",
    "code": "IEC 60269-1:2024",
    "system": "IEC",
    "status": "Current",
    "year": 2024,
    "referenceType": "General requirements",
    "title": "Low-voltage fuses — Part 1: General requirements",
    "products": [
      "PV Combiner Box"
    ],
    "applications": [
      "Industrial",
      "Power Distribution",
      "Solar / PV"
    ],
    "summary": "Current general requirements for enclosed current-limiting low-voltage fuse-links within defined AC/DC voltage limits.",
    "scope": "Applies to fuses incorporating enclosed current-limiting fuse-links with specified breaking capacity for AC circuits up to 1,000 V or DC circuits up to 1,500 V.",
    "relevance": "Component-level",
    "warning": "This is the general fuse standard; PV fuse-links also require the relevant supplementary product part.",
    "why": [
      "Provides the foundational fuse requirements behind PV fuse applications in combiner boxes."
    ],
    "related": [
      "IEC 60269-6 adds PV-specific fuse-link requirements."
    ],
    "source": "https://webstore.iec.ch/en/publication/66096",
    "lastReviewed": "2026-09-07",
    "addedIn": "V2"
  },
  {
    "slug": "iec-62305-4",
    "code": "IEC 62305-4:2024",
    "system": "IEC",
    "status": "Current",
    "year": 2024,
    "referenceType": "Installation standard",
    "title": "Protection against lightning — Part 4: Electrical and electronic systems within structures",
    "products": [
      "AC SPD",
      "DC SPD",
      "PV Combiner Box"
    ],
    "applications": [
      "Residential",
      "Commercial",
      "Industrial",
      "Solar / PV"
    ],
    "summary": "Requirements for surge protection measures that reduce permanent failures caused by lightning electromagnetic impulse.",
    "scope": "Covers design, installation, inspection, maintenance and testing of surge protection measures for electrical/electronic systems within structures.",
    "relevance": "System-level",
    "warning": "This is a lightning/surge-protection system standard, not an SPD product standard.",
    "why": [
      "Adds the lightning-protection system context around SPD selection and coordination.",
      "Useful when engineering surge protection beyond a single SPD device."
    ],
    "related": [
      "IEC 61643-11/31 for SPD product requirements.",
      "IEC 61643-12/32 for SPD selection/application."
    ],
    "source": "https://webstore.iec.ch/en/publication/29590",
    "lastReviewed": "2026-09-07",
    "addedIn": "V2"
  },
  {
    "slug": "iec-62446-1",
    "code": "IEC 62446-1:2016+A1:2018",
    "system": "IEC",
    "status": "Current",
    "year": 2018,
    "referenceType": "Commissioning & documentation",
    "title": "PV systems — Documentation, commissioning tests and inspection",
    "products": [
      "DC MCB",
      "DC SPD",
      "PV Combiner Box"
    ],
    "applications": [
      "Solar / PV"
    ],
    "summary": "PV system documentation, commissioning-test and inspection reference for grid-connected systems.",
    "scope": "Defines information/documentation to be handed over after installation and describes commissioning tests and inspection criteria for grid-connected PV systems.",
    "relevance": "System-level",
    "warning": "This is a system commissioning/documentation standard, not a product certification standard.",
    "why": [
      "Useful to EPCs and buyers who need to understand where protection-device documentation fits into PV project handover.",
      "Adds commissioning and documentation context to the database."
    ],
    "related": [
      "IEC 62548-1 for PV array design.",
      "IEC 60364-7-712 for PV installation requirements."
    ],
    "source": "https://webstore.iec.ch/en/publication/63726",
    "lastReviewed": "2026-09-07",
    "addedIn": "V2"
  },
  {
    "slug": "iec-60529",
    "code": "IEC 60529:1989+A1:1999+A2:2013",
    "system": "IEC",
    "status": "Current",
    "year": 2019,
    "referenceType": "Enclosure / IP classification",
    "title": "Degrees of protection provided by enclosures (IP Code)",
    "products": [
      "PV Combiner Box"
    ],
    "applications": [
      "Solar / PV",
      "Industrial",
      "Commercial",
      "Power Distribution"
    ],
    "summary": "Horizontal IEC standard for classifying degrees of protection provided by electrical-equipment enclosures using the IP Code.",
    "scope": "Applies to classification of enclosure protection degrees for electrical equipment within the standard's voltage scope.",
    "relevance": "Enclosure-level",
    "warning": "An IP rating claim must be supported by the actual enclosure design/test evidence; listing this standard does not establish a specific IP rating.",
    "why": [
      "Highly relevant to outdoor PV combiner-box enclosure discussions.",
      "Helps buyers interpret IP ratings separately from electrical protection-device standards."
    ],
    "related": [
      "IEC 62208 for empty LV switchgear/controlgear enclosures.",
      "IEC 61439 series for relevant LV assemblies."
    ],
    "source": "https://webstore.iec.ch/en/publication/2452",
    "lastReviewed": "2026-09-07",
    "addedIn": "V2"
  },
  {
    "slug": "iec-62208",
    "code": "IEC 62208:2023",
    "system": "IEC",
    "status": "Current",
    "year": 2023,
    "referenceType": "Enclosure standard",
    "title": "Empty enclosures for low-voltage switchgear and controlgear assemblies",
    "products": [
      "PV Combiner Box"
    ],
    "applications": [
      "Solar / PV",
      "Industrial",
      "Power Distribution"
    ],
    "summary": "General definitions, classifications, characteristics and test requirements for empty enclosures used with LV switchgear/controlgear assemblies.",
    "scope": "Applies to empty enclosures supplied before switchgear/controlgear components are incorporated, for LV assemblies within the standard's AC/DC voltage scope.",
    "relevance": "Enclosure-level",
    "warning": "Relevant to the enclosure itself; final assembled combiner-box conformity may require additional assembly and component standards.",
    "why": [
      "Useful for separating enclosure performance from the final assembled electrical system.",
      "Directly relevant to outdoor/indoor combiner enclosure selection."
    ],
    "related": [
      "IEC 61439-1/2 for final LV assemblies.",
      "IEC 60529 for IP classification."
    ],
    "source": "https://webstore.iec.ch/en/publication/67906",
    "lastReviewed": "2026-09-07",
    "addedIn": "V2"
  },
  {
    "slug": "iec-60664-1",
    "code": "IEC 60664-1:2020+A1:2025",
    "system": "IEC",
    "status": "Current",
    "year": 2025,
    "referenceType": "Basic safety / insulation",
    "title": "Insulation coordination for equipment within low-voltage supply systems — Part 1",
    "products": [
      "DC MCB",
      "AC MCB",
      "ATS",
      "Energy Meter",
      "Voltage Protector"
    ],
    "applications": [
      "Residential",
      "Commercial",
      "Industrial",
      "Power Distribution",
      "Solar / PV"
    ],
    "summary": "Basic safety principles and requirements for insulation coordination up to 1,000 V AC or 1,500 V DC.",
    "scope": "Addresses clearances, creepage distances, solid insulation and related test considerations for equipment connected to low-voltage supply systems.",
    "relevance": "Horizontal / foundational",
    "warning": "This is a horizontal basic-safety standard used by technical committees and product standards; it is not a standalone product certification route.",
    "why": [
      "Useful context for high-voltage DC spacing, pollution degree, altitude and insulation design.",
      "The 2025 amendment adds/updates 1,500 V DC-related provisions in the consolidated edition."
    ],
    "related": [
      "Use the applicable product standard for actual conformity requirements."
    ],
    "source": "https://webstore.iec.ch/en/publication/107319",
    "lastReviewed": "2026-09-07",
    "addedIn": "V2"
  },
  {
    "slug": "iec-61000-4-5",
    "code": "IEC 61000-4-5:2014+A1:2017",
    "system": "IEC",
    "status": "Current",
    "year": 2017,
    "referenceType": "EMC test method",
    "title": "Electromagnetic compatibility — Part 4-5: Surge immunity test",
    "products": [
      "ATS",
      "Energy Meter",
      "Voltage Protector"
    ],
    "applications": [
      "Residential",
      "Commercial",
      "Industrial",
      "Power Distribution"
    ],
    "summary": "EMC surge-immunity test method for electrical/electronic equipment exposed to switching and lightning transient surges.",
    "scope": "Defines immunity test methods and recommended test levels for unidirectional surges caused by switching and lightning transients.",
    "relevance": "Test-method context",
    "warning": "Passing an EMC surge-immunity test is not the same as being a surge protective device, and this test method is not an SPD product standard.",
    "why": [
      "Useful for electronic ATS controllers, meters and voltage-protection devices that need EMC immunity context.",
      "Separates equipment immunity testing from SPD product standards."
    ],
    "related": [
      "IEC 61643 family covers surge protective devices themselves."
    ],
    "source": "https://webstore.iec.ch/en/publication/61166",
    "lastReviewed": "2026-09-07",
    "addedIn": "V2"
  }
];
