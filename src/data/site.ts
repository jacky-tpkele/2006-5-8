export type ProductCategory =
  | "MCB"
  | "MCCB"
  | "RCBO"
  | "SPD"
  | "Voltage Protector"
  | "ATS"
  | "Combiner Box"
  | "Energy Meter";

export type ProductFamily = {
  slug: string;
  name: string;
  shortName: string;
  category: ProductCategory;
  image: string;
  summary: string;
  description: string;
};

export type Product = ProductFamily & {
  parentCategory: ProductCategory;
  subCategorySlug?: string;
  series: string;
  seriesAliases?: string[];
  application: string;
  description: string;
  specs: string[];
  seoKeywords: string[];
  gallery?: string[];
  technicalSpecs?: Array<{ label: string; value: string }>;
  specMatrices?: SpecMatrix[];
  /** 技术图示（动作特性曲线、安装间距图等），显示在规格表之后 */
  diagrams?: Array<{ src: string; alt: string; caption?: string }>;
  /** 覆盖全局认证条上 IEC 那一格的说明文字（例如 RCBO 用 61009-1 / AS/NZS） */
  certIecDescription?: string;
  /** 相关阅读 / 区域市场专题（可选） */
  relatedReading?: Array<{
    title: string;
    href: string;
    description: string;
  }>;
};

export type SpecMatrix = {
  title: string;
  headers: string[];
  rows: string[][];
  note?: string;
};

export type SpecTableRow = {
  no: string;
  category: string;
  specs: string[];
};

export type SpecTable = {
  title: string;
  rows: SpecTableRow[];
};

export type SpecPairRow = {
  parameter: string;
  requirement: string;
};

export type SpecPairTable = {
  title: string;
  columns: [string, string];
  rows: SpecPairRow[];
};

export type SubCategory = {
  slug: string;
  label: string;
  parent: ProductCategory;
  hero: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  specTable?: SpecTable;
  mechTable?: SpecPairTable;
  materialTable?: SpecPairTable;
};

export const subCategories: SubCategory[] = [
  {
    slug: "ac-mcb",
    label: "AC MCB",
    parent: "MCB",
    hero: "AC Miniature Circuit Breakers (1P–4P) for Low Voltage Distribution",
    intro:
      "TPKELE AC MCBs deliver overload and short-circuit protection for residential, commercial and industrial AC distribution boards. Engineered to IEC 60898-1 with 6kA / 10kA breaking capacity, B/C/D trip curves and 1P–4P pole configurations, they suit panel builders, electrical distributors and EPC contractors who need a reliable, certified AC branch protection device.",
    seoTitle: "AC MCB Manufacturer | 1P-4P Miniature Circuit Breaker",
    seoDescription:
      "TPKELE AC MCB: 1P-4P, 6A-63A, 6/10kA, B/C/D curves, IEC 60898-1, CE & RoHS. OEM & project supply for distributors and panel builders worldwide.",
    seoKeywords: ["AC MCB", "AC miniature circuit breaker", "1P AC MCB", "2P AC MCB", "3P AC MCB", "4P AC MCB", "AC circuit breaker manufacturer", "IEC 60898 MCB", "C curve MCB"],
    specTable: {
      title: "AC MCB Technical Parameters",
      rows: [
        {
          no: "01",
          category: "Core Electrical Ratings",
          specs: [
            "Rated Current: 1A–125A | Rated Voltage: AC 230V (1P) / 400V (2P / 3P / 4P)",
            "Poles: 1P / 1P+N / 2P / 3P / 3P+N / 4P | Breaking Capacity: 4.5kA / 6kA / 10kA",
            "Rated Insulation Voltage (Ui): 500V | Rated Impulse Withstand Voltage (Uimp): 4kV / 6kV",
            "Frequency: 50 / 60 Hz",
          ],
        },
        {
          no: "02",
          category: "Trip & Protection Characteristics",
          specs: [
            "Protection Types: Overload Protection and Short Circuit Protection",
            "Trip Curves: B Curve (3–5×In), C Curve (5–10×In), D Curve (10–20×In)",
            "Typical Use: B Curve for resistive & lighting loads, C Curve for general distribution, D Curve for inductive & motor loads",
          ],
        },
        {
          no: "03",
          category: "Voltage & Pole Configuration",
          specs: [
            "1P: AC 230V | 2P: AC 230V / 400V",
            "3P: AC 400V | 4P: AC 400V",
            "AC arcs self-extinguish at current zero crossing — no special DC arc chamber required",
          ],
        },
        {
          no: "04",
          category: "Mechanical & Installation Data",
          specs: [
            "Mounting: 35mm DIN Rail | Cable Capacity: 1–25mm² / 1–35mm²",
            "Terminal Torque: typically 2.0–3.0 N·m | Mechanical Life: 20,000 cycles",
            "Electrical Life: 6,000–10,000 cycles | Protection Degree: IP20",
            "Ambient Temperature: -25°C to +55°C (reference temperature 30°C)",
          ],
        },
        {
          no: "05",
          category: "Materials & Safety Features",
          specs: [
            "Housing Material: Flame-retardant PA66, typically UL94 V-0 | Contact Material: Silver Alloy",
            "Arc Extinguishing: Arc chamber with splitter plates | Polarity: non-polarized, bidirectional",
            "Status Indication: red/green window | Isolation Function: positive contact indication",
          ],
        },
        {
          no: "06",
          category: "Standards & Applications",
          specs: [
            "Standards: IEC 60898-1, EN 60898-1, IEC 60947-2 (industrial)",
            "Applications: Residential & commercial distribution boards, lighting and socket circuits, AC motor protection, control panels, sub-distribution",
          ],
        },
      ],
    },
    mechTable: {
      title: "Mechanical & Installation Parameters",
      columns: ["Parameter", "Common Requirement"],
      rows: [
        { parameter: "Mounting", requirement: "35mm DIN rail" },
        { parameter: "Terminal", requirement: "Top & bottom wiring, copper wire / busbar connection" },
        { parameter: "Cable Capacity", requirement: "1–25mm² / 1–35mm²" },
        { parameter: "Torque", requirement: "2.0–3.0 N·m, depends on model" },
        { parameter: "Mechanical Life", requirement: "20,000 cycles" },
        { parameter: "Electrical Life", requirement: "6,000–10,000 cycles" },
        { parameter: "Protection Degree", requirement: "IP20 (typical)" },
        { parameter: "Ambient Temperature", requirement: "-25°C to +55°C (reference temperature 30°C)" },
      ],
    },
    materialTable: {
      title: "Materials & Safety Parameters",
      columns: ["Parameter", "Common Requirement"],
      rows: [
        { parameter: "Housing Material", requirement: "Flame-retardant nylon / PA66, typically UL94 V-0" },
        { parameter: "Contact Material", requirement: "Silver alloy contacts preferred" },
        { parameter: "Arc Extinguishing System", requirement: "Arc chamber with splitter plates; AC arcs self-extinguish at current zero crossing" },
        { parameter: "Polarity", requirement: "Non-polarized, bidirectional; wiring direction not restricted" },
        { parameter: "Indicator", requirement: "Red / green status indication window" },
        { parameter: "Isolation Function", requirement: "Some models can be used as an isolation switch" },
      ],
    },
  },
  {
    slug: "dc-mcb",
    label: "DC MCB",
    parent: "MCB",
    hero: "DC Miniature Circuit Breakers for Solar PV & Battery Storage",
    intro:
      "TPKELE DC MCBs are purpose-built for photovoltaic strings, battery energy storage and DC bus protection. Special arc-quenching contacts safely break DC arcs up to 1000V/1500V system voltages. 1P, 2P, 3P and 4P pole configurations support residential rooftop to utility-scale PV — the right DC circuit breaker for solar EPCs, combiner box assemblers and BESS integrators.",
    seoTitle: "DC MCB Manufacturer | Solar PV Breaker 1000V 1500V",
    seoDescription:
      "TPKELE DC MCB for solar PV, battery and DC distribution. 1P-4P, up to 1500V DC, 6A-63A, IEC 60947-2, CE & RoHS, OEM ready. Built for EPCs and panel builders.",
    seoKeywords: ["DC MCB", "solar circuit breaker", "PV DC breaker", "1000V DC MCB", "1500V DC MCB", "battery DC breaker", "DC miniature circuit breaker manufacturer", "photovoltaic DC breaker"],
    specTable: {
      title: "DC MCB Technical Parameters",
      rows: [
        {
          no: "01",
          category: "Core Electrical Ratings",
          specs: [
            "Rated Current: 1A–125A | Rated Voltage: DC 250V / 500V / 800V / 1000V / 1200V / 1500V",
            "Poles: 1P / 2P / 3P / 4P | Breaking Capacity: 4.5kA / 6kA / 10kA / 15kA / 20kA",
            "Rated Insulation Voltage (Ui): 500V / 1000V / 1500V | Rated Impulse Withstand Voltage (Uimp): 4kV / 6kV / 8kV",
            "Frequency: DC",
          ],
        },
        {
          no: "02",
          category: "Trip & Protection Characteristics",
          specs: [
            "Protection Types: Overload Protection and Short Circuit Protection",
            "Trip Curves: B Curve (3–5×In), C Curve (5–10×In), D Curve (10–20×In)",
            "Typical Use: C Curve for general DC distribution, PV and battery storage",
          ],
        },
        {
          no: "03",
          category: "Voltage & Pole Configuration",
          specs: [
            "1P: DC 250V / 500V | 2P: DC 500V / 1000V",
            "3P: DC 750V / 1000V / 1200V | 4P: DC 1000V / 1500V",
            "Multi-pole designs improve safe DC arc interruption",
          ],
        },
        {
          no: "04",
          category: "Mechanical & Installation Data",
          specs: [
            "Mounting: 35mm DIN Rail | Cable Capacity: 1–25mm² / 1–35mm² / 1–50mm²",
            "Terminal Torque: typically 2.0–3.5 N·m | Mechanical Life: 10,000–20,000 cycles",
            "Electrical Life: 1,500–6,000 cycles | Protection Degree: IP20",
            "Ambient Temperature: -25°C to +70°C",
          ],
        },
        {
          no: "05",
          category: "Materials & Safety Features",
          specs: [
            "Housing Material: Flame-retardant PA66, typically UL94 V-0 | Contact Material: Silver Alloy",
            "Arc Extinguishing: Special DC arc-quenching system | Polarity: polarity-sensitive on some models",
            "Status Indication: red/green window | Isolation Function: available on selected models",
          ],
        },
        {
          no: "06",
          category: "Standards & Applications",
          specs: [
            "Standards: IEC 60947-2, IEC 60898-2, EN 60947-2, UL 489B",
            "Applications: Solar PV strings, combiner boxes, battery energy storage systems, DC distribution, EV charging, control cabinets",
          ],
        },
      ],
    },
    mechTable: {
      title: "Mechanical & Installation Parameters",
      columns: ["Parameter", "Common Requirement"],
      rows: [
        { parameter: "Mounting", requirement: "35mm DIN rail" },
        { parameter: "Terminal", requirement: "Top & bottom wiring, copper wire / busbar connection" },
        { parameter: "Cable Capacity", requirement: "1–25mm² / 1–35mm² / 1–50mm²" },
        { parameter: "Torque", requirement: "2.0–3.5 N·m, depends on model" },
        { parameter: "Mechanical Life", requirement: "10,000–20,000 cycles" },
        { parameter: "Electrical Life", requirement: "1,500–6,000 cycles" },
        { parameter: "Protection Degree", requirement: "IP20 (typical)" },
        { parameter: "Ambient Temperature", requirement: "-25°C to +70°C (typical)" },
      ],
    },
    materialTable: {
      title: "Materials & Safety Parameters",
      columns: ["Parameter", "Common Requirement"],
      rows: [
        { parameter: "Housing Material", requirement: "Flame-retardant nylon / PA66, typically UL94 V-0" },
        { parameter: "Contact Material", requirement: "Silver alloy contacts preferred" },
        { parameter: "Arc Extinguishing System", requirement: "DC circuit breakers must have a dedicated arc-quenching structure" },
        { parameter: "Polarity", requirement: "Some DC MCBs are polarized (+/−); wiring direction cannot be reversed" },
        { parameter: "Indicator", requirement: "Red / green status indication window" },
        { parameter: "Isolation Function", requirement: "Some models can be used as an isolation switch" },
      ],
    },
  },
  {
    slug: "ac-spd",
    label: "AC SPD",
    parent: "SPD",
    hero: "AC Surge Protective Devices — Type 1, Type 2, Type 1+2",
    intro:
      "TPKELE AC SPDs protect low voltage distribution boards, telecom cabinets and inverter AC outputs against lightning surges and switching transients. Available as Type 1, Type 2 and Type 1+2 modules with pluggable cartridges, visual status indicators and remote signaling — compliant with IEC 61643-11 for European, Middle East and Southeast Asian project tenders.",
    seoTitle: "AC SPD Manufacturer | Type 1 Type 2 Surge Protector",
    seoDescription:
      "TPKELE AC SPD: Type 1, Type 2, Type 1+2 for distribution panels, inverter AC output and telecom. 20kA/40kA, IEC 61643-11, CE & RoHS, OEM ready.",
    seoKeywords: ["AC SPD", "AC surge protector", "Type 1 SPD", "Type 2 SPD", "Type 1+2 SPD", "230V SPD", "400V SPD", "IEC 61643 SPD", "AC surge protective device manufacturer"],
  },
  {
    slug: "dc-spd",
    label: "DC SPD",
    parent: "SPD",
    hero: "DC Surge Protective Devices for Solar PV — 600V / 1000V / 1500V",
    intro:
      "TPKELE DC SPDs protect photovoltaic systems and DC distribution against lightning-induced surges. Designed for PV string inputs, DC combiner boxes and inverter DC sides, they support Uoc up to 1500V DC with Type 1+2 / Type 2 protection levels and clear visual status windows. The trusted PV surge protector for solar EPCs, distributors and OEM buyers worldwide.",
    seoTitle: "DC SPD Manufacturer | PV Surge Protector 1000-1500V",
    seoDescription:
      "TPKELE DC SPD: Type 1+2 and Type 2 for solar PV, 600V/1000V/1500V Uoc, 20kA/40kA, IEC 61643-31, CE & RoHS. PV surge protector built for solar projects.",
    seoKeywords: ["DC SPD", "PV SPD", "solar SPD", "1500V DC SPD", "1000V DC SPD", "PV surge protector", "photovoltaic surge protective device", "solar surge arrester", "Type 1+2 DC SPD"],
  },
  {
    slug: "smart-circuit-breaker",
    label: "Smart Wi-Fi MCB",
    parent: "MCB",
    hero: "Smart Wi-Fi Circuit Breakers - Remote Control & Real-Time Monitoring",
    intro:
      "TPKELE Smart Wi-Fi Circuit Breakers enable remote control, real-time electrical parameter monitoring, and programmable protection via smartphone app. Built on the Tuya Smart ecosystem with support for energy metering, scheduled switching, and configurable voltage/current protection — designed for residential smart homes, commercial buildings, and distribution circuits requiring IoT integration. Available in compact 18mm, 2P dual-pole, and earth leakage protection configurations.",
    seoTitle: "Smart Wi-Fi Circuit Breaker Manufacturer | IoT MCB Remote Control",
    seoDescription:
      "TPKELE Smart Wi-Fi Circuit Breakers: Remote app control, real-time monitoring, energy metering, overvoltage/undervoltage protection. 18mm & 2P models, Tuya Smart compatible, for smart homes and commercial buildings.",
    seoKeywords: [
      "Smart circuit breaker manufacturer",
      "WiFi circuit breaker",
      "IoT MCB",
      "Remote control circuit breaker",
      "Smart MCB app control",
      "Tuya smart circuit breaker",
      "WiFi MCB manufacturer",
      "Smart home circuit breaker",
      "Energy monitoring breaker",
      "App controlled MCB"
    ],
  },
];

export const subCategoryBySlug: Record<string, SubCategory> = Object.fromEntries(
  subCategories.map((s) => [s.slug, s]),
);

export type ProductMenuGroup = {
  label: ProductCategory;
  href: string;
  children: Array<{
    label: string;
    href: string;
  }>;
};

export const site = {
  name: "TPKELE",
  tagline: "Solar & Low Voltage Electrical Protection Manufacturer",
  url: "https://www.tpkele.com",
  description:
    "TPKELE manufactures DC MCB, AC MCB, DC SPD, AC SPD, PV combiner boxes, ATS, voltage protectors and energy meters for solar EPCs and distributors worldwide.",
  phone: "+86 15067704501",
  whatsapp: "8615067704501",
  email: "jacky@tpkele.com",
  address: "Zhijiang, Wenzhou, Zhejiang, China",
  social: {
    linkedin: "https://www.linkedin.com/company/tpkele",
    youtube: "https://www.youtube.com/@tpkele",
    facebook: "https://www.facebook.com/tpkele",
  },
};

export const certifications = [
  { code: "CE", label: "CE Marking", description: "EU low voltage & EMC directives" },
  { code: "RoHS", label: "RoHS Compliant", description: "Restricted hazardous substances" },
  { code: "IEC", label: "IEC Standards", description: "60898 / 60947 / 61643 / 62052" },
  { code: "ISO", label: "ISO 9001", description: "Quality management system" },
  { code: "TUV", label: "TÜV Tested", description: "Independent lab verification" },
  { code: "CB", label: "CB Scheme", description: "Globally recognized test report" },
];

export const exportMarkets = [
  { region: "Europe", countries: "Germany, Spain, Italy, Netherlands, Poland, UK" },
  { region: "Middle East", countries: "UAE, Saudi Arabia, Jordan, Egypt, Turkey" },
  { region: "Southeast Asia", countries: "Vietnam, Philippines, Thailand, Indonesia, Malaysia" },
  { region: "South America", countries: "Brazil, Chile, Colombia, Peru, Mexico" },
  { region: "Africa", countries: "South Africa, Nigeria, Kenya, Morocco" },
  { region: "Oceania", countries: "Australia, New Zealand" },
];

export const buyerSegments = [
  {
    title: "Solar EPC Companies",
    icon: "PV",
    text: "PV combiner boxes, DC SPDs, DC MCBs and metering for utility, C&I and rooftop solar projects.",
    cta: "Solar protection bundle",
  },
  {
    title: "Electrical Distributors",
    icon: "DS",
    text: "Catalog-ready MCB, SPD and ATS lines with stable lead time, OEM labeling and color options.",
    cta: "Distributor pricing",
  },
  {
    title: "OEM / ODM Buyers",
    icon: "OE",
    text: "Logo, color, packaging and certificate documentation tailored to your brand program.",
    cta: "OEM proposal",
  },
  {
    title: "Panel Builders",
    icon: "PB",
    text: "DIN-rail components specified by current rating, breaking capacity and curve for switchboard projects.",
    cta: "Component selection",
  },
  {
    title: "Industrial Contractors",
    icon: "IC",
    text: "Voltage protectors, ATS and SPDs for factory, infrastructure and process power continuity.",
    cta: "Project package",
  },
  {
    title: "Importers",
    icon: "IM",
    text: "Container-load supply with CE/IEC certificates, export packaging and reliable shipping documentation.",
    cta: "Container quote",
  },
];

export const oemCapabilities = [
  "Custom logo printing on housing and packaging",
  "Color housing variants for product line differentiation",
  "Private-label catalogs and datasheet customization",
  "Project-spec drawings, single-line diagrams and labels",
  "Container-load supply with export documentation",
  "Sample preparation within 5–10 working days",
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "Manufacturing", href: "/mcb-manufacturer" },
  { label: "Contact", href: "/contact" },
];

// New grouped resources menu structure for Mega Menu
export type ResourcesMenuGroup = {
  label: string;
  type: "group";
  children: Array<{
    label: string;
    href: string;
    desc: string;
  }>;
};

export const resourcesMenu: ResourcesMenuGroup[] = [
  {
    label: "Engineering",
    type: "group",
    children: [
      {
        label: "Technical Guides",
        href: "/resources/technical-guides",
        desc: "Product selection & sizing guides"
      },
      {
        label: "Application Solutions",
        href: "/resources/application-solutions",
        desc: "System-level design guidance"
      },
    ]
  },
  {
    label: "Compliance",
    type: "group",
    children: [
      {
        label: "Market Access Advisor",
        href: "/resources/market-access-advisor",
        desc: "Country requirements & certification"
      },
      {
        label: "Standards Database",
        href: "/resources/standards-database",
        desc: "IEC & UL technical references"
      },
    ]
  },
  {
    label: "Buying & Support",
    type: "group",
    children: [
      {
        label: "Buyer Trade Support",
        href: "/resources/buyer-support",
        desc: "OEM, documents & trade terms"
      },
      {
        label: "FAQ Knowledge Base",
        href: "/resources/faq",
        desc: "Product & order questions"
      },
    ]
  }
];

// Flat menu for backward compatibility (legacy code)
export const resourcesMenuFlat = [
  { label: "Technical Guides", href: "/resources/technical-guides" },
  { label: "Market Access Advisor", href: "/resources/market-access-advisor" },
  { label: "Buyer Trade Support", href: "/resources/buyer-support" },
  { label: "Standards Database", href: "/resources/standards-database" },
  { label: "Application Solutions", href: "/resources/application-solutions" },
  { label: "FAQ Knowledge Base", href: "/resources/faq" },
];

export const manufacturerMenu = [
  { label: "MCB Manufacturer", href: "/mcb-manufacturer" },
  { label: "SPD Manufacturer", href: "/spd-manufacturer" },
  { label: "ATS Manufacturer", href: "/ats-manufacturer" },
  { label: "Voltage Protector Manufacturer", href: "/voltage-protector-manufacturer" },
  { label: "Energy Meter Manufacturer", href: "/energy-meter-manufacturer" },
  { label: "Combiner Box Manufacturer", href: "/combiner-box-manufacturer" },
];

export const productFamilies: ProductFamily[] = [
  {
    slug: "mcb",
    name: "MCB",
    shortName: "MCB",
    category: "MCB",
    image: "/assets/home-products-normalized/mcb.webp",
    summary: "AC & DC miniature circuit breakers, 1P–4P, 6–63A",
    description:
      "TPKELE supplies miniature circuit breakers (MCBs) for AC distribution boards, DC photovoltaic systems and battery energy storage.",
  },
  {
    slug: "spd",
    name: "SPD",
    shortName: "SPD",
    category: "SPD",
    image: "/assets/home-products-normalized/spd.webp",
    summary: "AC & DC surge protectors, Type 1/2, up to 1500V",
    description:
      "TPKELE surge protective devices (SPDs) safeguard low voltage equipment from lightning strikes and switching transients.",
  },
  {
    slug: "ats",
    name: "ATS",
    shortName: "ATS",
    category: "ATS",
    image: "/assets/home-products-normalized/ats.webp",
    summary: "Dual-power automatic transfer switch, 63A, 2/3/4P",
    description:
      "TPKELE automatic transfer switches (ATS) move critical loads between mains and backup power sources — PC-class fast changeover and CB-class motorized series.",
  },
  {
    slug: "combiner-box",
    name: "Combiner Box",
    shortName: "PV Combiner",
    category: "Combiner Box",
    image: "/assets/home-products-normalized/combiner-box.webp",
    summary: "Solar string combiner — IP65, 1000V/1500V",
    description:
      "TPKELE PV combiner boxes aggregate solar strings and bring DC fuses, DC SPDs and DC breakers into one IP-rated enclosure.",
  },
  {
    slug: "pn2-va2",
    name: "Voltage Protector",
    shortName: "OVP",
    category: "Voltage Protector",
    image: "/assets/products/gallery/pn2-va2-1.webp",
    summary: "Over / under voltage and over-current protection",
    description:
      "TPKELE PN2 series voltage protectors monitor incoming mains voltage and disconnect downstream loads when the line moves outside safe limits.",
  },
  {
    slug: "din-rail-energy-meter",
    name: "Energy Meter",
    shortName: "DIN Meter",
    category: "Energy Meter",
    image: "/assets/home-products-normalized/din-rail-energy-meter.webp",
    summary: "DIN-rail kWh meters with Modbus / pulse output",
    description:
      "TPKELE DIN rail energy meters measure active energy, current and voltage for distribution boards, sub-metering and tenant billing.",
  },
];

export const products: Product[] = [
  {
    slug: "ac-mcb-1p",
    name: "AC MCB 1P",
    shortName: "AC 1P",
    category: "MCB",
    parentCategory: "MCB",
    subCategorySlug: "ac-mcb",
    series: "AC/1P",
    application: "AC distribution protection",
    image: "/assets/products/gallery/ac-mcb-1p-1.webp",
    summary: "Single-pole AC miniature circuit breaker for branch circuit protection.",
    description: "TPKELE AC MCB 1P is a single-pole AC miniature circuit breaker for branch circuit overload and short circuit protection in low voltage distribution boards.",
    specs: ["1 Pole AC", "Rated current options for branch circuits", "DIN rail mount", "OEM logo and packaging available"],
    seoKeywords: ["AC MCB 1P", "1P AC circuit breaker", "single pole MCB"],
    gallery: [
      "/assets/products/gallery/ac-mcb-1p-1.webp",
      "/assets/products/gallery/ac-mcb-1p-2.webp",
      "/assets/products/gallery/ac-mcb-1p-3.webp",
      "/assets/products/gallery/ac-mcb-1p-4.webp",
    ],
  },
  {
    slug: "ac-mcb-2p",
    name: "AC MCB 2P",
    shortName: "AC 2P",
    category: "MCB",
    parentCategory: "MCB",
    subCategorySlug: "ac-mcb",
    series: "AC/2P",
    application: "AC distribution protection",
    image: "/assets/products/gallery/ac-mcb-2p-1.webp",
    summary: "Two-pole AC miniature circuit breaker for line + neutral protection.",
    description: "TPKELE AC MCB 2P is a two-pole AC miniature circuit breaker designed for line and neutral protection in single phase circuits and small AC distribution boards.",
    specs: ["2 Pole AC", "Line + neutral protection", "DIN rail mount", "OEM logo and packaging available"],
    seoKeywords: ["AC MCB 2P", "2P AC circuit breaker", "two pole MCB"],
    gallery: [
      "/assets/products/gallery/ac-mcb-2p-1.webp",
      "/assets/products/gallery/ac-mcb-2p-2.webp",
      "/assets/products/gallery/ac-mcb-2p-3.webp",
      "/assets/products/gallery/ac-mcb-2p-4.webp",
    ],
  },
  {
    slug: "ac-mcb-3p",
    name: "AC MCB 3P",
    shortName: "AC 3P",
    category: "MCB",
    parentCategory: "MCB",
    subCategorySlug: "ac-mcb",
    series: "AC/3P",
    application: "Three phase AC protection",
    image: "/assets/products/gallery/ac-mcb-3p-1.webp",
    summary: "Three-pole AC miniature circuit breaker for three phase circuits.",
    description: "TPKELE AC MCB 3P is a three-pole AC miniature circuit breaker for three phase distribution branch protection in commercial and industrial systems.",
    specs: ["3 Pole AC", "Three phase protection", "DIN rail mount", "OEM logo and packaging available"],
    seoKeywords: ["AC MCB 3P", "3P AC circuit breaker", "three phase MCB"],
    gallery: [
      "/assets/products/gallery/ac-mcb-3p-1.webp",
      "/assets/products/gallery/ac-mcb-3p-2.webp",
      "/assets/products/gallery/ac-mcb-3p-3.webp",
      "/assets/products/gallery/ac-mcb-3p-4.webp",
    ],
  },
  {
    slug: "ac-mcb-4p",
    name: "AC MCB 4P",
    shortName: "AC 4P",
    category: "MCB",
    parentCategory: "MCB",
    subCategorySlug: "ac-mcb",
    series: "AC/4P",
    application: "Three phase + neutral AC protection",
    image: "/assets/products/gallery/ac-mcb-4p-1.webp",
    summary: "Four-pole AC miniature circuit breaker for three phase plus neutral.",
    description: "TPKELE AC MCB 4P is a four-pole AC miniature circuit breaker for three phase plus neutral distribution branch protection in commercial and industrial systems.",
    specs: ["4 Pole AC", "Three phase + neutral protection", "DIN rail mount", "OEM logo and packaging available"],
    seoKeywords: ["AC MCB 4P", "4P AC circuit breaker", "four pole MCB"],
    gallery: [
      "/assets/products/gallery/ac-mcb-4p-1.webp",
      "/assets/products/gallery/ac-mcb-4p-2.webp",
      "/assets/products/gallery/ac-mcb-4p-3.webp",
    ],
  },
  {
    slug: "dc-mcb-1p",
    name: "DC MCB 1P",
    shortName: "DC 1P",
    category: "MCB",
    parentCategory: "MCB",
    subCategorySlug: "dc-mcb",
    series: "DC/1P",
    application: "Solar DC string protection",
    image: "/assets/products/gallery/dc-mcb-1p-1.webp",
    summary: "Single-pole DC miniature circuit breaker for PV string protection.",
    description: "TPKELE DC MCB 1P is a single-pole DC miniature circuit breaker engineered for PV string and DC bus overload and short circuit protection.",
    specs: ["1 Pole DC", "PV string protection", "DC arc breaking design", "DIN rail mount"],
    seoKeywords: ["DC MCB 1P", "1P DC breaker", "PV DC breaker"],
    gallery: [
      "/assets/products/gallery/dc-mcb-1p-1.webp",
      "/assets/products/gallery/dc-mcb-1p-2.webp",
      "/assets/products/gallery/dc-mcb-1p-3.webp",
      "/assets/products/gallery/dc-mcb-1p-4.webp",
    ],
  },
  {
    slug: "dc-mcb-2p",
    name: "DC MCB 2P",
    shortName: "DC 2P",
    category: "MCB",
    parentCategory: "MCB",
    subCategorySlug: "dc-mcb",
    series: "DC/2P",
    application: "Solar DC + and − protection",
    image: "/assets/products/gallery/dc-mcb-2p-1.webp",
    summary: "Two-pole DC miniature circuit breaker for PV positive and negative.",
    description: "TPKELE DC MCB 2P is a two-pole DC miniature circuit breaker for PV string positive and negative line protection in DC distribution and combiner boxes.",
    specs: ["2 Pole DC", "PV +/− protection", "DC arc breaking design", "DIN rail mount"],
    seoKeywords: ["DC MCB 2P", "2P DC breaker", "PV DC 2 pole"],
    gallery: [
      "/assets/products/gallery/dc-mcb-2p-1.webp",
      "/assets/products/gallery/dc-mcb-2p-2.webp",
      "/assets/products/gallery/dc-mcb-2p-3.webp",
      "/assets/products/gallery/dc-mcb-2p-4.webp",
    ],
  },
  {
    slug: "dc-mcb-3p",
    name: "DC MCB 3P",
    shortName: "DC 3P",
    category: "MCB",
    parentCategory: "MCB",
    subCategorySlug: "dc-mcb",
    series: "DC/3P",
    application: "High voltage DC string protection",
    image: "/assets/products/gallery/dc-mcb-3p-1.webp",
    summary: "Three-pole DC miniature circuit breaker for higher voltage DC systems.",
    description: "TPKELE DC MCB 3P is a three-pole DC miniature circuit breaker, suitable for higher system voltage PV and battery DC bus protection where additional poles are connected in series.",
    specs: ["3 Pole DC", "Higher DC voltage rating", "Series-pole arc breaking", "DIN rail mount"],
    seoKeywords: ["DC MCB 3P", "3P DC breaker", "high voltage DC MCB"],
    gallery: [
      "/assets/products/gallery/dc-mcb-3p-1.webp",
      "/assets/products/gallery/dc-mcb-3p-2.webp",
      "/assets/products/gallery/dc-mcb-3p-3.webp",
      "/assets/products/gallery/dc-mcb-3p-4.webp",
    ],
  },
  {
    slug: "dc-mcb-4p",
    name: "DC MCB 4P",
    shortName: "DC 4P",
    category: "MCB",
    parentCategory: "MCB",
    subCategorySlug: "dc-mcb",
    series: "DC/4P",
    application: "Utility-scale DC protection",
    image: "/assets/products/gallery/dc-mcb-4p-1.webp",
    summary: "Four-pole DC miniature circuit breaker for utility-scale PV systems.",
    description: "TPKELE DC MCB 4P is a four-pole DC miniature circuit breaker designed for utility-scale photovoltaic and DC bus systems requiring four-pole series breaking for high system voltage.",
    specs: ["4 Pole DC", "Utility-scale DC voltage rating", "Series-pole arc breaking", "DIN rail mount"],
    seoKeywords: ["DC MCB 4P", "4P DC breaker", "utility DC MCB"],
    gallery: [
      "/assets/products/gallery/dc-mcb-4p-1.webp",
      "/assets/products/gallery/dc-mcb-4p-2.webp",
      "/assets/products/gallery/dc-mcb-4p-3.webp",
      "/assets/products/gallery/dc-mcb-4p-4.webp",
    ],
  },
  {
    slug: "ac-spd",
    name: "AC SPD",
    shortName: "AC SPD",
    category: "SPD",
    parentCategory: "SPD",
    subCategorySlug: "ac-spd",
    series: "AC SPD",
    application: "AC surge protection",
    image: "/assets/home-products-normalized/spd.webp",
    summary: "Type 1 / Type 2 AC surge protective device for distribution boards.",
    description: "TPKELE AC SPD products protect AC electrical equipment from lightning surge and switching transients. Suitable for low voltage distribution boards, telecom cabinets and inverter AC outputs, with pluggable Type 1, Type 2 and Type 1+2 modules per IEC 61643-11.",
    specs: ["AC system protection up to 400V", "Type 1 / Type 2 / Type 1+2 modules", "Visual status window + remote signaling option", "Pluggable cartridge for fast field replacement", "20kA / 40kA Imax (8/20μs)", "IEC 61643-11, CE & RoHS compliant"],
    seoKeywords: ["AC SPD", "AC surge protector", "Type 1 SPD", "Type 2 SPD", "230V SPD", "400V AC surge protective device"],
  },
  {
    slug: "ac-spd-4p",
    name: "AC 4P SPD",
    shortName: "AC 4P SPD",
    category: "SPD",
    parentCategory: "SPD",
    subCategorySlug: "ac-spd",
    series: "AC SPD",
    application: "Three-phase + neutral AC surge protection",
    image: "/assets/products/ac-spd-4p-2.webp",
    gallery: [
      "/assets/products/gallery/ac-spd-4p-1.webp",
      "/assets/products/gallery/ac-spd-4p-2.webp",
      "/assets/products/gallery/ac-spd-4p-3.webp",
      "/assets/products/gallery/ac-spd-4p-4.webp",
    ],
    summary: "4-pole AC surge protector — 385V, 20kA/40kA, Type 2 protection for three-phase distribution systems.",
    description: "TPKELE AC 4P SPD is a four-pole surge protective device engineered for three-phase + neutral AC distribution systems. Designed for commercial buildings, industrial facilities, and inverter AC outputs, it delivers Type 2 surge protection across all four conductors (L1, L2, L3, N) with independent pluggable cartridges for each pole. The modular design enables selective cartridge replacement without system downtime, while quadruple visual status windows provide instant operational feedback for each phase and neutral. Clear terminal labeling (L1, L2, L3, N) simplifies installation and reduces wiring errors in busy panel builds. Ideal for three-phase distribution boards, inverter outputs, telecom base stations, and any AC system requiring comprehensive multi-pole surge defense.",
    specs: [
      "4-pole (L1, L2, L3, N) configuration for three-phase + neutral systems",
      "Uc 385V AC — covers standard 400V three-phase networks",
      "In 20kA / Imax 40kA (8/20μs) — Type 2 protection level",
      "Independent pluggable cartridges per pole for selective replacement",
      "Quadruple visual status indicators (green = OK, red = replace)",
      "Clear terminal labeling for error-free three-phase wiring",
      "72mm DIN rail width (4 modules) for standard panel mounting",
      "IEC 61643-11 compliant, CE & RoHS certified"
    ],
    seoKeywords: ["AC 4P SPD", "4 pole AC SPD", "three-phase surge protector", "385V AC SPD", "3-phase surge protection", "four pole SPD", "L1 L2 L3 N surge protector", "three-phase SPD manufacturer"],
    technicalSpecs: [
      { label: "Product Type", value: "4-Pole AC Surge Protective Device (Type 2)" },
      { label: "Model", value: "AC 4P SPD" },
      { label: "Pole Configuration", value: "4P (L1, L2, L3, N)" },
      { label: "Max. Continuous Operating Voltage (Uc)", value: "385V AC" },
      { label: "Nominal Discharge Current (In)", value: "20kA (8/20μs)" },
      { label: "Max. Discharge Current (Imax)", value: "40kA (8/20μs)" },
      { label: "Voltage Protection Level (Up)", value: "≤1.5kV" },
      { label: "Response Time", value: "<25ns" },
      { label: "Protection Type", value: "Type 2 (IEC 61643-11)" },
      { label: "Status Indication", value: "Quadruple visual window per pole (Green = Normal / Red = Fault)" },
      { label: "Cartridge Type", value: "Pluggable per pole, tool-free replacement" },
      { label: "Remote Signaling", value: "Optional NC/NO contact output" },
      { label: "Mounting", value: "35mm DIN rail (IEC/EN 60715)" },
      { label: "Width", value: "72mm (4 modules)" },
      { label: "Connection", value: "Screw terminal, 6–25mm² cable capacity" },
      { label: "Torque", value: "2.5 N·m" },
      { label: "Protection Degree", value: "IP20 (when mounted)" },
      { label: "Operating Temperature", value: "−40°C to +85°C" },
      { label: "Housing Material", value: "Flame-retardant thermoplastic, UL94 V-0" },
      { label: "Standards Compliance", value: "IEC 61643-11, EN 61643-11" },
      { label: "Certifications", value: "CE, RoHS" },
      { label: "Applications", value: "Three-phase distribution boards, inverter AC outputs, commercial buildings, industrial facilities, telecom base stations" },
    ],
  },
  {
    slug: "dc-spd",
    name: "DC SPD",
    shortName: "DC SPD",
    category: "SPD",
    parentCategory: "SPD",
    subCategorySlug: "dc-spd",
    series: "DC SPD",
    application: "PV DC surge protection",
    image: "/assets/home-products-normalized/spd.webp",
    summary: "PV DC surge protective device — 600V / 1000V / 1500V Uoc options.",
    description: "TPKELE DC SPD products protect photovoltaic strings, combiner boxes and inverter DC inputs from lightning-induced surges. Available in 600V, 1000V and 1500V DC Uoc, with Type 1+2 / Type 2 protection levels and visual status windows. The PV surge protector specified by solar EPCs and combiner-box assemblers worldwide.",
    specs: ["PV DC system protection 600V / 1000V / 1500V", "Type 1+2 / Type 2 modules for solar", "Visual status window for inspection", "Pluggable module for fast service", "20kA / 40kA Imax (8/20μs)", "IEC 61643-31, CE & RoHS compliant"],
    seoKeywords: ["DC SPD", "PV SPD", "solar SPD", "1500V DC SPD", "1000V DC SPD", "PV surge protector", "photovoltaic surge protective device"],
  },
  {
    slug: "dc-spd-2p",
    name: "DC 2P SPD",
    shortName: "DC 2P SPD",
    category: "SPD",
    parentCategory: "SPD",
    subCategorySlug: "dc-spd",
    series: "DC SPD",
    application: "Compact 2-pole PV surge protection",
    image: "/assets/products/dc-spd-2p-product.webp",
    gallery: [
      "/assets/products/gallery/dc-spd-2p-1.webp",
      "/assets/products/gallery/dc-spd-2p-2.webp",
    ],
    summary: "Compact 2-pole DC surge protector — 1000V, 20kA/40kA, space-saving design for PV combiner boxes.",
    description: "TPKELE DC 2P SPD is a compact two-pole surge protective device engineered for space-constrained solar PV installations. Designed specifically for DC combiner boxes and string-level protection, it delivers Type 2 surge protection in a minimal footprint — reducing DIN rail occupation by 33% compared to 3P/4P models while maintaining full IEC 61643-31 compliance. The pluggable cartridge design enables fast field replacement without rewiring, and the dual visual status windows provide instant operational feedback. Ideal for residential rooftop systems, commercial C&I projects, and any PV application where panel real estate is at a premium.",
    specs: [
      "2-pole (DC+/DC−) configuration for compact installations",
      "Ucpv 1000V DC — suits most residential and C&I PV systems",
      "In 20kA / Imax 40kA (8/20μs) — Type 2 protection level",
      "Pluggable cartridge module for tool-free replacement",
      "Dual visual status indicators (green = OK, red = replace)",
      "35mm DIN rail mounting, occupies 36mm width",
      "IEC 61643-31 compliant, CE & RoHS certified"
    ],
    seoKeywords: ["DC 2P SPD", "2 pole DC SPD", "compact DC surge protector", "1000V DC SPD", "PV combiner box SPD", "solar surge protector 2P", "space-saving DC SPD", "2-pole PV surge protection"],
    technicalSpecs: [
      { label: "Product Type", value: "2-Pole DC Surge Protective Device (Type 2)" },
      { label: "Model", value: "DC 2P SPD" },
      { label: "Pole Configuration", value: "2P (DC+ / DC−)" },
      { label: "Max. Continuous Operating Voltage (Ucpv)", value: "1000V DC" },
      { label: "Nominal Discharge Current (In)", value: "20kA (8/20μs)" },
      { label: "Max. Discharge Current (Imax)", value: "40kA (8/20μs)" },
      { label: "Voltage Protection Level (Up)", value: "≤3.5kV" },
      { label: "Response Time", value: "<25ns" },
      { label: "Protection Type", value: "Type 2 (IEC 61643-31)" },
      { label: "Status Indication", value: "Dual visual window (Green = Normal / Red = Fault)" },
      { label: "Cartridge Type", value: "Pluggable, tool-free replacement" },
      { label: "Mounting", value: "35mm DIN rail (IEC/EN 60715)" },
      { label: "Width", value: "36mm (2 modules)" },
      { label: "Connection", value: "Screw terminal, 4–16mm² cable capacity" },
      { label: "Torque", value: "1.2–1.5 N·m" },
      { label: "Protection Degree", value: "IP20 (when mounted)" },
      { label: "Operating Temperature", value: "−40°C to +85°C" },
      { label: "Housing Material", value: "Flame-retardant thermoplastic, UL94 V-0" },
      { label: "Standards Compliance", value: "IEC 61643-31, EN 61643-31" },
      { label: "Certifications", value: "CE, RoHS" },
      { label: "Applications", value: "PV combiner boxes, string-level DC surge protection, residential & C&I solar" },
    ],
  },
  {
    slug: "green-spd-series",
    name: "Green SPD Series",
    shortName: "Green SPD",
    category: "SPD",
    parentCategory: "SPD",
    series: "Color Series",
    application: "Color-coded surge protection",
    image: "/assets/home-products-normalized/spd.webp",
    summary: "Green color series for visual product line differentiation.",
    description: "TPKELE SPD color series supports visual differentiation for distributors, OEM branding and project product line planning.",
    specs: ["Green color housing option", "AC or DC model matching available", "OEM branding support"],
    seoKeywords: ["green SPD", "SPD color series", "OEM surge protector"],
  },
  {
    slug: "white-spd-series",
    name: "White SPD Series",
    shortName: "White SPD",
    category: "SPD",
    parentCategory: "SPD",
    series: "Color Series",
    application: "Color-coded surge protection",
    image: "/assets/home-products-normalized/spd.webp",
    summary: "White color series for standard catalog and OEM programs.",
    description: "TPKELE white SPD series provides a clean standard appearance for catalog sales, OEM labeling and project supply.",
    specs: ["White color housing option", "AC or DC model matching available", "Label customization support"],
    seoKeywords: ["white SPD", "SPD color series", "surge protector manufacturer"],
  },
  {
    slug: "pn2-va2",
    name: "PN2-VA2 Voltage Protector",
    shortName: "PN2-VA2",
    category: "Voltage Protector",
    parentCategory: "Voltage Protector",
    series: "PN2 Series",
    application: "Residential over/under voltage protection",
    image: "/assets/products/gallery/pn2-va2-1.webp",
    gallery: [
      "/assets/products/gallery/pn2-va2-1.webp",
      "/assets/products/gallery/pn2-va2-2.webp",
      "/assets/products/gallery/pn2-va2-3.webp",
      "/assets/products/gallery/pn2-va2-4.webp",
      "/assets/products/gallery/pn2-va2-5.webp",
      "/assets/products/gallery/pn2-va2-6.webp",
    ],
    summary: "Self-resetting over/under voltage protector with dual voltage + current display.",
    description:
      "TPKELE PN2-VA2 is a self-resetting over/under voltage protector with a dual digital display showing voltage (red) and current (green). It disconnects the load on over-voltage, under-voltage and over-current, then reconnects automatically after an adjustable delay — ideal for residential distribution boards and home appliance protection in unstable grid areas.",
    specs: [
      "Self-resetting over / under voltage protection",
      "Dual display — voltage (red) + current (green)",
      "Max working current 40A / 63A / 80A optional",
      "Adjustable reset delay 0–999s (default 60s)",
      "35mm DIN-rail mounting",
    ],
    seoKeywords: ["PN2-VA2", "voltage protector", "self-resetting voltage protector", "over under voltage protector", "DIN rail voltage protector", "63A voltage protector"],
    technicalSpecs: [
      { label: "Product Type", value: "Self-Resetting Over/Under Voltage Protector" },
      { label: "Model", value: "PN2-VA2" },
      { label: "Rated Supply Voltage", value: "AC 220V (AC 110V Customizable)" },
      { label: "Rated Frequency", value: "40 / 50 / 60 / 70Hz" },
      { label: "Over-Voltage Setting Range", value: "AC 130–300V" },
      { label: "Under-Voltage Setting Range", value: "AC 80–210V" },
      { label: "Over-Voltage Trip Delay", value: "0.5 Seconds" },
      { label: "Voltage Accuracy", value: "<1%" },
      { label: "Max. Working Current", value: "40A / 63A / 80A (Optional)" },
      { label: "Reset Delay Time", value: "0–999 Seconds (Adjustable, Default 60s)" },
      { label: "Display Mode", value: "Dual Digital Display — Voltage (Red) + Current (Green)" },
      { label: "Password Protection", value: "Supported — prevents unauthorized parameter changes" },
      { label: "Energy-Saving Mode", value: "Switchable" },
      { label: "Housing Material", value: "Flame-retardant PC (UL94 V-0)" },
      { label: "Dimensions", value: "81 × 36 × 66mm" },
      { label: "Installation", value: "35mm DIN Rail" },
      { label: "Ambient Temperature", value: "-25°C to +55°C" },
      { label: "Permitted Relative Humidity", value: "≤50% at 40°C (Non-condensing)" },
      { label: "Mechanical Life", value: "≥10,000 Cycles" },
      { label: "Protection Functions", value: "Over-voltage, Under-voltage, Over-current, Delay Protection" },
      { label: "OEM Customization", value: "Logo customization supported" },
      { label: "Application", value: "Residential Distribution Boards, Light Commercial Premises, Home Appliance Protection" },
      { label: "Conformity", value: "CE marking, RoHS compliant" },
    ],
  },
  {
    slug: "pn2-va3",
    name: "PN2-VA3 Voltage Protector",
    shortName: "PN2-VA3",
    category: "Voltage Protector",
    parentCategory: "Voltage Protector",
    series: "PN2 Series",
    application: "Commercial over/under voltage protection",
    image: "/assets/products/gallery/pn2-va3-1.webp",
    gallery: [
      "/assets/products/gallery/pn2-va3-1.webp",
      "/assets/products/gallery/pn2-va3-2.webp",
      "/assets/products/gallery/pn2-va3-3.webp",
      "/assets/products/gallery/pn2-va3-4.webp",
      "/assets/products/gallery/pn2-va3-5.webp",
      "/assets/products/gallery/pn2-va3-6.webp",
    ],
    summary: "Self-resetting voltage protector with white voltage + green current dual display.",
    description:
      "TPKELE PN2-VA3 is a self-resetting over/under voltage protector featuring a dual digital display with white voltage and green current readouts. It guards loads against over-voltage, under-voltage and over-current with automatic reconnection — suited to commercial installations, contractor panel builds and export projects.",
    specs: [
      "Self-resetting over / under voltage protection",
      "Dual display — voltage (white) + current (green)",
      "Max working current 40A / 63A / 80A optional",
      "Adjustable reset delay 0–999s (default 60s)",
      "35mm DIN-rail mounting",
    ],
    seoKeywords: ["PN2-VA3", "voltage protector", "self-resetting voltage protector", "over under voltage protector", "DIN rail voltage protector", "commercial voltage protector"],
    technicalSpecs: [
      { label: "Product Type", value: "Self-Resetting Over/Under Voltage Protector" },
      { label: "Model", value: "PN2-VA3" },
      { label: "Rated Supply Voltage", value: "AC 220V (AC 110V Customizable)" },
      { label: "Rated Frequency", value: "40 / 50 / 60 / 70Hz" },
      { label: "Over-Voltage Setting Range", value: "AC 130–300V" },
      { label: "Under-Voltage Setting Range", value: "AC 80–210V" },
      { label: "Over-Voltage Trip Delay", value: "0.5 Seconds" },
      { label: "Voltage Accuracy", value: "<1%" },
      { label: "Max. Working Current", value: "40A / 63A / 80A (Optional)" },
      { label: "Reset Delay Time", value: "0–999 Seconds (Adjustable, Default 60s)" },
      { label: "Display Mode", value: "Dual Digital Display — Voltage (White) + Current (Green)" },
      { label: "Password Protection", value: "Supported — prevents unauthorized parameter changes" },
      { label: "Energy-Saving Mode", value: "Switchable" },
      { label: "Housing Material", value: "Flame-retardant PC (UL94 V-0)" },
      { label: "Dimensions", value: "81 × 36 × 66mm" },
      { label: "Installation", value: "35mm DIN Rail" },
      { label: "Ambient Temperature", value: "-25°C to +55°C" },
      { label: "Permitted Relative Humidity", value: "≤50% at 40°C (Non-condensing)" },
      { label: "Mechanical Life", value: "≥10,000 Cycles" },
      { label: "Protection Functions", value: "Over-voltage, Under-voltage, Over-current, Delay Protection" },
      { label: "Application", value: "Commercial Electrical Installations, Contractor Panel Builds, Office Buildings, Export Projects" },
      { label: "Conformity", value: "CE marking, RoHS compliant" },
    ],
  },
  {
    slug: "pn2-va4",
    name: "PN2-VA4 Voltage Protector",
    shortName: "PN2-VA4",
    category: "Voltage Protector",
    parentCategory: "Voltage Protector",
    series: "PN2 Series",
    application: "Distributor & OEM voltage protection",
    image: "/assets/products/gallery/pn2-va4-1.webp",
    gallery: [
      "/assets/products/gallery/pn2-va4-1.webp",
      "/assets/products/gallery/pn2-va4-2.webp",
      "/assets/products/gallery/pn2-va4-3.webp",
      "/assets/products/gallery/pn2-va4-4.webp",
      "/assets/products/gallery/pn2-va4-5.webp",
      "/assets/products/gallery/pn2-va4-6.webp",
    ],
    summary: "Self-resetting voltage protector built for wholesale and OEM private-label programs.",
    description:
      "TPKELE PN2-VA4 is a self-resetting over/under voltage protector with dual voltage (red) and current (green) display, designed for wholesale distribution and OEM private-label programs. Logo customization on housing and packaging is supported, making it a strong catalog item for distributors and panel builders.",
    specs: [
      "Self-resetting over / under voltage protection",
      "Dual display — voltage (red) + current (green)",
      "OEM logo on housing & packaging supported",
      "Max working current 40A / 63A / 80A optional",
      "35mm DIN-rail mounting",
    ],
    seoKeywords: ["PN2-VA4", "voltage protector", "OEM voltage protector", "private label voltage protector", "DIN rail voltage protector", "wholesale voltage protector"],
    technicalSpecs: [
      { label: "Product Type", value: "Self-Resetting Over/Under Voltage Protector" },
      { label: "Model", value: "PN2-VA4" },
      { label: "Rated Supply Voltage", value: "AC 220V (AC 110V Customizable)" },
      { label: "Rated Frequency", value: "40 / 50 / 60 / 70Hz" },
      { label: "Over-Voltage Setting Range", value: "AC 130–300V" },
      { label: "Under-Voltage Setting Range", value: "AC 80–210V" },
      { label: "Over-Voltage Trip Delay", value: "0.5 Seconds" },
      { label: "Voltage Accuracy", value: "<1%" },
      { label: "Max. Working Current", value: "40A / 63A / 80A (Optional)" },
      { label: "Reset Delay Time", value: "0–999 Seconds (Adjustable, Default 60s)" },
      { label: "Display Mode", value: "Dual Digital Display — Voltage (Red) + Current (Green)" },
      { label: "Password Protection", value: "Supported — prevents unauthorized parameter changes" },
      { label: "Energy-Saving Mode", value: "Switchable" },
      { label: "OEM Customization", value: "Logo customization on housing and packaging supported" },
      { label: "Housing Material", value: "Flame-retardant PC (UL94 V-0)" },
      { label: "Dimensions", value: "81 × 36 × 66mm" },
      { label: "Installation", value: "35mm DIN Rail" },
      { label: "Ambient Temperature", value: "-25°C to +55°C" },
      { label: "Permitted Relative Humidity", value: "≤50% at 40°C (Non-condensing)" },
      { label: "Mechanical Life", value: "≥10,000 Cycles" },
      { label: "Protection Functions", value: "Over-voltage, Under-voltage, Over-current, Delay Protection" },
      { label: "Application", value: "Wholesale Distribution Programs, Panel Builder OEM Projects, Private-Label Electrical Brands" },
      { label: "Target Buyer", value: "Electrical Distributors, Panel Builders, OEM Wholesale Customers" },
      { label: "Conformity", value: "CE marking, RoHS compliant" },
    ],
  },
  {
    slug: "pn2-va5",
    name: "PN2-VA5 Voltage Protector",
    shortName: "PN2-VA5",
    category: "Voltage Protector",
    parentCategory: "Voltage Protector",
    series: "PN2 Series",
    application: "Premium OEM voltage protection",
    image: "/assets/products/gallery/pn2-va5-1.webp",
    gallery: [
      "/assets/products/gallery/pn2-va5-1.webp",
      "/assets/products/gallery/pn2-va5-2.webp",
      "/assets/products/gallery/pn2-va5-3.webp",
      "/assets/products/gallery/pn2-va5-4.webp",
      "/assets/products/gallery/pn2-va5-5.webp",
      "/assets/products/gallery/pn2-va5-6.webp",
    ],
    summary: "Premium self-resetting voltage protector with display logo customization for branded programs.",
    description:
      "TPKELE PN2-VA5 is a premium self-resetting over/under voltage protector with dual voltage (red) and current (green) display and digital-display logo customization. It targets high-end OEM electrical brands and branded distribution board manufacturers needing a polished, certified protection device.",
    specs: [
      "Self-resetting over / under voltage protection",
      "Dual display — voltage (red) + current (green)",
      "Digital display logo customization supported",
      "Max working current 40A / 63A / 80A optional",
      "35mm DIN-rail mounting",
    ],
    seoKeywords: ["PN2-VA5", "voltage protector", "premium voltage protector", "OEM voltage protector", "DIN rail voltage protector", "branded voltage protector"],
    technicalSpecs: [
      { label: "Product Type", value: "Self-Resetting Over/Under Voltage Protector" },
      { label: "Model", value: "PN2-VA5" },
      { label: "Rated Supply Voltage", value: "AC 220V (AC 110V Customizable)" },
      { label: "Rated Frequency", value: "40 / 50 / 60 / 70Hz" },
      { label: "Over-Voltage Setting Range", value: "AC 130–300V" },
      { label: "Under-Voltage Setting Range", value: "AC 80–210V" },
      { label: "Over-Voltage Trip Delay", value: "0.5 Seconds" },
      { label: "Voltage Accuracy", value: "<1%" },
      { label: "Max. Working Current", value: "40A / 63A / 80A (Optional)" },
      { label: "Reset Delay Time", value: "0–999 Seconds (Adjustable, Default 60s)" },
      { label: "Display Mode", value: "Dual Digital Display — Voltage (Red) + Current (Green)" },
      { label: "Password Protection", value: "Supported — prevents unauthorized parameter changes" },
      { label: "Energy-Saving Mode", value: "Switchable" },
      { label: "OEM Customization", value: "Digital display logo customization supported" },
      { label: "Housing Material", value: "Flame-retardant PC (UL94 V-0)" },
      { label: "Dimensions", value: "81 × 36 × 66mm" },
      { label: "Installation", value: "35mm DIN Rail" },
      { label: "Ambient Temperature", value: "-25°C to +55°C" },
      { label: "Permitted Relative Humidity", value: "≤50% at 40°C (Non-condensing)" },
      { label: "Mechanical Life", value: "≥10,000 Cycles" },
      { label: "Protection Functions", value: "Over-voltage, Under-voltage, Over-current, Delay Protection" },
      { label: "Application", value: "Premium OEM Electrical Brands, High-End Panel Manufacturing, Branded Distribution Boards" },
      { label: "Target Buyer", value: "Premium OEM Customers, Electrical Equipment Manufacturers, High-End Panel Builders" },
      { label: "Conformity", value: "CE marking, RoHS compliant" },
    ],
  },
  {
    slug: "pn2-vak",
    name: "PN2-VAK Voltage Protector",
    shortName: "PN2-VAK",
    category: "Voltage Protector",
    parentCategory: "Voltage Protector",
    series: "PN2 Series",
    application: "Voltage protection with kWh metering",
    image: "/assets/products/gallery/pn2-vak-1.webp",
    gallery: [
      "/assets/products/gallery/pn2-vak-1.webp",
      "/assets/products/gallery/pn2-vak-2.webp",
      "/assets/products/gallery/pn2-vak-3.webp",
      "/assets/products/gallery/pn2-vak-4.webp",
      "/assets/products/gallery/pn2-vak-5.webp",
      "/assets/products/gallery/pn2-vak-6.webp",
    ],
    summary: "Self-resetting voltage protector with built-in kWh energy meter and tri-color display.",
    description:
      "TPKELE PN2-VAK combines a self-resetting over/under voltage protector with a built-in kWh energy meter. A tri-color display shows voltage (red), current (green) and accumulated energy (blue) — ideal for rental-property sub-metering and tenant electricity billing while protecting the circuit from voltage and current faults.",
    specs: [
      "Voltage protection + built-in kWh energy meter",
      "Tri-color display — voltage / current / kWh",
      "Over-current setting 1–40A / 1–63A / 1–80A",
      "Adjustable reset delay 0–999s (default 60s)",
      "35mm DIN-rail mounting",
    ],
    seoKeywords: ["PN2-VAK", "voltage protector with meter", "voltage protector kWh meter", "sub-metering voltage protector", "tenant billing voltage protector", "DIN rail voltage protector"],
    technicalSpecs: [
      { label: "Product Type", value: "Self-Resetting Voltage Protector with kWh Energy Meter" },
      { label: "Model", value: "PN2-VAK" },
      { label: "Rated Supply Voltage", value: "AC 220V (AC 110V Customizable)" },
      { label: "Rated Frequency", value: "40 / 50 / 60 / 70Hz" },
      { label: "Over-Voltage Setting Range", value: "AC 240–300V" },
      { label: "Under-Voltage Setting Range", value: "AC 140–230V" },
      { label: "Over-Current Setting Range", value: "1–40A / 1–63A / 1–80A (per rated model)" },
      { label: "Max. Working Current", value: "40A / 63A / 80A (Optional)" },
      { label: "Trip Delay (Over-Voltage)", value: "0.5 Seconds" },
      { label: "Voltage Accuracy", value: "<1%" },
      { label: "Display Mode", value: "Tri-color — Voltage (Red) + Current (Green) + kWh (Blue)" },
      { label: "Current Display Note", value: "Not displayed when current is below 1A" },
      { label: "kWh Display Note", value: "Cumulative; not displayed below 0.01 kWh" },
      { label: "Reset Delay Time", value: "0–999 Seconds (Adjustable, Default 60s)" },
      { label: "Password Protection", value: "Supported — prevents unauthorized parameter changes" },
      { label: "Energy-Saving Mode", value: "Switchable" },
      { label: "Housing Material", value: "Flame-retardant PC (UL94 V-0)" },
      { label: "Dimensions", value: "81 × 36 × 66mm" },
      { label: "Installation", value: "35mm DIN Rail" },
      { label: "Ambient Temperature", value: "-25°C to +55°C" },
      { label: "Permitted Relative Humidity", value: "≤50% at 40°C (Non-condensing)" },
      { label: "Mechanical Life", value: "≥10,000 Cycles" },
      { label: "Protection Functions", value: "Over-voltage, Under-voltage, Over-current, Delay Protection, kWh Metering" },
      { label: "Application", value: "Rental Property Sub-metering, Tenant Electricity Billing, Light Commercial Premises" },
      { label: "Conformity", value: "CE marking, RoHS compliant" },
    ],
  },
  {
    slug: "pn2-vafdm",
    name: "PN2-VAFDM Voltage Protector",
    shortName: "PN2-VAFDM",
    category: "Voltage Protector",
    parentCategory: "Voltage Protector",
    series: "PN2 Series",
    application: "5-in-1 voltage protection & power monitoring",
    image: "/assets/products/gallery/pn2-vafdm-1.webp",
    gallery: [
      "/assets/products/gallery/pn2-vafdm-1.webp",
      "/assets/products/gallery/pn2-vafdm-2.webp",
      "/assets/products/gallery/pn2-vafdm-3.webp",
      "/assets/products/gallery/pn2-vafdm-4.webp",
      "/assets/products/gallery/pn2-vafdm-5.webp",
      "/assets/products/gallery/pn2-vafdm-6.webp",
      "/assets/products/gallery/pn2-vafdm-7.webp",
      "/assets/products/gallery/pn2-vafdm-8.webp",
    ],
    summary: "5-in-1 self-resetting voltage protector with voltage, current, power, frequency and kWh metering.",
    description:
      "TPKELE PN2-VAFDM is a 5-in-1 self-resetting voltage protector with a multi-function meter displaying voltage, current, power (W), frequency (Hz) and accumulated energy (kWh). With over-current counting, preset power level and fast power-off protection, it suits home energy monitoring, light-commercial power-quality analysis and solar PV installations.",
    specs: [
      "5-in-1 — voltage, current, power, frequency, kWh",
      "Self-resetting over / under voltage & over-current protection",
      "Over-current counting + preset power level",
      "Fast power-off protection",
      "35mm DIN-rail mounting",
    ],
    seoKeywords: ["PN2-VAFDM", "multifunction voltage protector", "5 in 1 voltage protector", "power meter voltage protector", "voltage protector with kWh", "DIN rail voltage protector"],
    technicalSpecs: [
      { label: "Product Type", value: "5-in-1 Self-Resetting Voltage Protector with Multi-Function Meter" },
      { label: "Model", value: "PN2-VAFDM" },
      { label: "Rated Supply Voltage", value: "AC 220V (AC 110V Customizable)" },
      { label: "Rated Frequency", value: "40 / 50 / 60 / 70Hz" },
      { label: "Over-Voltage Setting Range", value: "AC 240–300V" },
      { label: "Under-Voltage Setting Range", value: "AC 140–230V" },
      { label: "Over-Current Setting Range", value: "1–40A / 1–63A / 1–80A (per rated model)" },
      { label: "Max. Working Current", value: "40A / 63A / 80A (Optional)" },
      { label: "Trip Delay (Over-Voltage)", value: "0.5 Seconds" },
      { label: "Voltage Accuracy", value: "<1%" },
      { label: "Display Mode", value: "Multi-Color — Voltage + Current + Power (W) + Frequency (Hz) + kWh" },
      { label: "Current Display Note", value: "Not displayed when current is below 1A" },
      { label: "kWh Display Note", value: "Cumulative; not displayed below 0.01 kWh" },
      { label: "Additional Functions", value: "Over-current counting, preset power level, fast power-off protection" },
      { label: "Reset Delay Time", value: "0–999 Seconds (Adjustable, Default 60s)" },
      { label: "Password Protection", value: "Supported — prevents unauthorized parameter changes" },
      { label: "Energy-Saving Mode", value: "Switchable" },
      { label: "Housing Material", value: "Flame-retardant PC (UL94 V-0)" },
      { label: "Dimensions", value: "81 × 36 × 66mm" },
      { label: "Installation", value: "35mm DIN Rail" },
      { label: "Ambient Temperature", value: "-25°C to +55°C" },
      { label: "Permitted Relative Humidity", value: "≤50% at 40°C (Non-condensing)" },
      { label: "Mechanical Life", value: "≥10,000 Cycles" },
      { label: "Protection & Measurement Functions", value: "Over-voltage, Under-voltage, Over-current, Delay, kWh, Power (W), Frequency (Hz), Over-current counting, Preset power level" },
      { label: "Application", value: "Home Energy Monitoring, Light Commercial Power Quality Analysis, Solar PV Installations" },
      { label: "Conformity", value: "CE marking, RoHS compliant" },
    ],
  },
  {
    slug: "stats-03",
    name: "STATS-03 Voltage Protector",
    shortName: "STATS-03",
    category: "Voltage Protector",
    parentCategory: "Voltage Protector",
    series: "STATS Series",
    application: "3-input automatic transfer with triple voltage display",
    image: "/assets/products/gallery/stats-03-1.webp",
    gallery: [
      "/assets/products/gallery/stats-03-1.webp",
      "/assets/products/gallery/stats-03-2.webp",
      "/assets/products/gallery/stats-03-3.webp",
      "/assets/products/gallery/stats-03-4.webp",
      "/assets/products/gallery/stats-03-5.webp",
      "/assets/products/gallery/stats-03-6.webp",
      "/assets/products/gallery/stats-03-7.webp",
      "/assets/products/gallery/stats-03-8.webp",
    ],
    summary: "3-input automatic transfer switch with triple L1/L2/L3 input voltage display.",
    description:
      "TPKELE STATS-03 is a 3-input automatic transfer switch with over/under voltage and over-current protection. A triple digital display shows L1 / L2 / L3 input voltages, and priority switching (L1 → L2 → L3, customizable) keeps loads supplied from the first healthy source — ideal for CNC machinery, server rooms and solar-grid hybrid systems.",
    specs: [
      "3-way priority switching (L1 → L2 → L3, customizable)",
      "Triple display — L1 / L2 / L3 input voltage",
      "Over / under voltage + over-current protection",
      "Switching response time < 0.2s",
      "35mm DIN-rail mounting",
    ],
    seoKeywords: ["STATS-03", "automatic transfer switch", "3 input transfer switch", "voltage protector transfer switch", "DIN rail ATS", "priority switching"],
    technicalSpecs: [
      { label: "Product Model", value: "STATS-03" },
      { label: "Product Type", value: "3-Input Automatic Transfer Switch with Triple Voltage Display" },
      { label: "Rated Supply Voltage", value: "AC 3×220V (N-L1/L2/L3)" },
      { label: "Rated Frequency", value: "40 / 50 / 60 / 70Hz" },
      { label: "Over-Voltage Protection Range", value: "AC 130–300V" },
      { label: "Under-Voltage Protection Range", value: "AC 80–210V" },
      { label: "Over-Current Protection Range", value: "1–63A / 1–80A / 1–100A (per rated model)" },
      { label: "Rated Working Current", value: "63A / 80A / 100A (Optional)" },
      { label: "Voltage Accuracy", value: "<1%" },
      { label: "Display Mode", value: "Triple Digital Display — L1 / L2 / L3 Input Voltage only" },
      { label: "Priority Switching Sequence", value: "L1 → L2 → L3 (Customizable)" },
      { label: "Startup Delay Time", value: "1–600s (Adjustable)" },
      { label: "Auto-Recovery Delay Time", value: "1–600s (Adjustable)" },
      { label: "Switching Response Time", value: "<0.2s" },
      { label: "Installation", value: "35mm DIN Rail" },
      { label: "Housing Material", value: "Flame-Retardant PC (UL94 V-0)" },
      { label: "Mechanical Life", value: "≥10,000 Cycles" },
      { label: "Operating Temperature", value: "-25°C to +50°C" },
      { label: "Relative Humidity", value: "≤50% at 40°C (Non-Condensing)" },
      { label: "Core Functions", value: "3-Way Priority Switching, Over/Under Voltage Protection, Over-Current Protection, Triple Input Voltage Monitoring" },
      { label: "Application", value: "CNC Machinery, Server Rooms, Generator-Backed Retail, Solar-Grid Hybrid Systems" },
      { label: "Conformity", value: "CE marking, RoHS compliant" },
    ],
  },
  {
    slug: "stats-04",
    name: "STATS-04 Voltage Protector",
    shortName: "STATS-04",
    category: "Voltage Protector",
    parentCategory: "Voltage Protector",
    series: "STATS Series",
    application: "3-input automatic transfer with current display",
    image: "/assets/products/gallery/stats-04-1.webp",
    gallery: [
      "/assets/products/gallery/stats-04-1.webp",
      "/assets/products/gallery/stats-04-2.webp",
      "/assets/products/gallery/stats-04-3.webp",
      "/assets/products/gallery/stats-04-4.webp",
      "/assets/products/gallery/stats-04-5.webp",
      "/assets/products/gallery/stats-04-6.webp",
      "/assets/products/gallery/stats-04-7.webp",
      "/assets/products/gallery/stats-04-8.webp",
    ],
    summary: "3-input automatic transfer switch with triple input voltage plus output current display.",
    description:
      "TPKELE STATS-04 is a 3-input automatic transfer switch that adds output current to the display, showing L1 / L2 / L3 input voltages plus load current on four parameters. With priority switching and over/under voltage and over-current protection, it suits generator sizing verification, panel commissioning and solar load monitoring.",
    specs: [
      "3-way priority switching (L1 → L2 → L3, customizable)",
      "4-parameter display — 3× input voltage + output current",
      "Over / under voltage + over-current protection",
      "Switching response time < 0.2s",
      "35mm DIN-rail mounting",
    ],
    seoKeywords: ["STATS-04", "automatic transfer switch", "3 input transfer switch", "transfer switch with current display", "DIN rail ATS", "priority switching"],
    technicalSpecs: [
      { label: "Product Model", value: "STATS-04" },
      { label: "Product Type", value: "3-Input Automatic Transfer Switch with Current Display" },
      { label: "Rated Supply Voltage", value: "AC 3×220V (N-L1/L2/L3)" },
      { label: "Rated Frequency", value: "40 / 50 / 60 / 70Hz" },
      { label: "Over-Voltage Protection Range", value: "AC 130–300V" },
      { label: "Under-Voltage Protection Range", value: "AC 80–210V" },
      { label: "Over-Current Protection Range", value: "1–63A / 1–80A / 1–100A (per rated model)" },
      { label: "Rated Working Current", value: "63A / 80A / 100A (Optional)" },
      { label: "Voltage Accuracy", value: "<1%" },
      { label: "Display Mode", value: "4-Parameter Display — L1/L2/L3 Input Voltage + Output Current" },
      { label: "Priority Switching Sequence", value: "L1 → L2 → L3 (Customizable)" },
      { label: "Startup Delay Time", value: "1–600s (Adjustable)" },
      { label: "Auto-Recovery Delay Time", value: "1–600s (Adjustable)" },
      { label: "Switching Response Time", value: "<0.2s" },
      { label: "Installation", value: "35mm DIN Rail" },
      { label: "Housing Material", value: "Flame-Retardant PC (UL94 V-0)" },
      { label: "Mechanical Life", value: "≥10,000 Cycles" },
      { label: "Operating Temperature", value: "-25°C to +50°C" },
      { label: "Relative Humidity", value: "≤50% at 40°C (Non-Condensing)" },
      { label: "Core Functions", value: "3-Way Priority Switching, Over/Under Voltage Protection, Over-Current Protection, Triple Voltage + Output Current Monitoring" },
      { label: "Application", value: "Generator Sizing Verification, Electrical Panel Commissioning, Rental Property Sub-metering, Solar Load Monitoring" },
      { label: "Conformity", value: "CE marking, RoHS compliant" },
    ],
  },
  {
    slug: "stats-05",
    name: "STATS-05 Voltage Protector",
    shortName: "STATS-05",
    category: "Voltage Protector",
    parentCategory: "Voltage Protector",
    series: "STATS Series",
    application: "3-input automatic transfer with full monitoring display",
    image: "/assets/products/gallery/stats-05-1.webp",
    gallery: [
      "/assets/products/gallery/stats-05-1.webp",
      "/assets/products/gallery/stats-05-2.webp",
      "/assets/products/gallery/stats-05-3.webp",
      "/assets/products/gallery/stats-05-4.webp",
      "/assets/products/gallery/stats-05-5.webp",
      "/assets/products/gallery/stats-05-6.webp",
      "/assets/products/gallery/stats-05-7.webp",
      "/assets/products/gallery/stats-05-8.webp",
    ],
    summary: "3-input automatic transfer switch with full 5-parameter input/output monitoring.",
    description:
      "TPKELE STATS-05 is a 3-input automatic transfer switch with full monitoring — a 5-parameter display showing three input voltages plus output voltage and output current. Built for mission-critical multi-source cabinets, it suits data-center UPS bypass panels, hospital life-safety power and precision manufacturing lines.",
    specs: [
      "3-way priority switching (L1 → L2 → L3, customizable)",
      "5-parameter display — 3× input voltage + output voltage + output current",
      "Over / under voltage + over-current protection",
      "Switching response time < 0.2s",
      "35mm DIN-rail mounting",
    ],
    seoKeywords: ["STATS-05", "automatic transfer switch", "3 input transfer switch", "full monitoring transfer switch", "DIN rail ATS", "data center transfer switch"],
    technicalSpecs: [
      { label: "Product Model", value: "STATS-05" },
      { label: "Product Type", value: "3-Input Automatic Transfer Switch with Full Monitoring Display" },
      { label: "Rated Supply Voltage", value: "AC 3×220V (N-L1/L2/L3)" },
      { label: "Rated Frequency", value: "40 / 50 / 60 / 70Hz" },
      { label: "Over-Voltage Protection Range", value: "AC 130–300V" },
      { label: "Under-Voltage Protection Range", value: "AC 80–210V" },
      { label: "Over-Current Protection Range", value: "1–63A / 1–80A / 1–100A (Optional)" },
      { label: "Rated Working Current", value: "63A / 80A / 100A (Optional)" },
      { label: "Voltage Accuracy", value: "<1%" },
      { label: "Display Mode", value: "5-Parameter Display (3× Input Voltage + Output Voltage + Output Current)" },
      { label: "Priority Switching Sequence", value: "L1 → L2 → L3 (Customizable)" },
      { label: "Startup Delay Time", value: "1–600s (Adjustable)" },
      { label: "Auto-Recovery Delay Time", value: "1–600s (Adjustable)" },
      { label: "Switching Response Time", value: "<0.2s" },
      { label: "Installation", value: "35mm DIN Rail Mounting" },
      { label: "Housing Material", value: "Flame-Retardant PC Material (UL94 V-0)" },
      { label: "Mechanical Life", value: "≥10,000 Cycles" },
      { label: "Operating Temperature", value: "-25℃ to +50℃" },
      { label: "Relative Humidity", value: "≤50% at 40°C (Non-Condensing)" },
      { label: "Core Functions", value: "3-Way Priority Switching, Over/Under Voltage Protection, Over-Current Protection, Full Input/Output Voltage & Output Current Monitoring" },
      { label: "Application", value: "Data Center UPS Bypass Panels, Hospital Life-Safety Power Systems, Precision Manufacturing Lines, Industrial Automation Multi-Source Cabinets" },
      { label: "Conformity", value: "CE marking, RoHS compliant" },
    ],
  },
  {
    slug: "stats-06",
    name: "STATS-06 Voltage Protector",
    shortName: "STATS-06",
    category: "Voltage Protector",
    parentCategory: "Voltage Protector",
    series: "STATS Series",
    application: "3-phase 4-wire over/under voltage & over-current protection",
    image: "/assets/products/gallery/stats-06-1.webp",
    gallery: [
      "/assets/products/gallery/stats-06-1.webp",
      "/assets/products/gallery/stats-06-2.webp",
      "/assets/products/gallery/stats-06-3.webp",
      "/assets/products/gallery/stats-06-4.webp",
      "/assets/products/gallery/stats-06-5.webp",
      "/assets/products/gallery/stats-06-6.webp",
      "/assets/products/gallery/stats-06-7.webp",
      "/assets/products/gallery/stats-06-8.webp",
    ],
    summary: "3-phase 4-wire over/under voltage and over-current protector with full phase-fault detection.",
    description:
      "TPKELE STATS-06 is a 3-phase 4-wire (AC 380V) over/under voltage and over-current protector with real-time 3-phase voltage and current display. It detects phase loss, open neutral, phase sequence and 3-phase unbalance — built for photovoltaic energy storage, industrial motor panels, commercial HVAC and general 3-phase equipment protection.",
    specs: [
      "3-phase 4-wire AC 380V protection",
      "Over/under voltage, over-current, phase loss, open neutral, phase sequence, unbalance",
      "Real-time 3-phase voltage & current display",
      "Adjustable thresholds with recovery ranges",
      "35mm DIN-rail mounting",
    ],
    seoKeywords: ["STATS-06", "3 phase voltage protector", "phase loss protection", "phase sequence protection", "3 phase over under voltage", "DIN rail voltage protector"],
    technicalSpecs: [
      { label: "Product Model", value: "STATS-06" },
      { label: "Product Type", value: "3-Phase 4-Wire Over/Under Voltage & Over-Current Protector" },
      { label: "Rated Voltage", value: "AC 380V (N-L1/L2/L3)" },
      { label: "Rated Frequency", value: "40 / 50 / 60Hz" },
      { label: "Rated Current Options", value: "63A / 100A" },
      { label: "Over-Voltage Protection Range", value: "AC 230–300V (Default: 270V)" },
      { label: "Over-Voltage Recovery Range", value: "AC 225–295V (Default: 265V)" },
      { label: "Under-Voltage Protection Range", value: "AC 120–210V (Default: 170V)" },
      { label: "Under-Voltage Recovery Range", value: "AC 125–215V (Default: 175V)" },
      { label: "Over-Current Protection Range", value: "1–63A / 1–100A (Default: 63A)" },
      { label: "Over-Current Action Time", value: "0.1s–10s (Default: 0.5s)" },
      { label: "Continuous Over-Current Protection Times", value: "0–20 Times (Default: OFF)" },
      { label: "Power-On Delay Time", value: "1–600s (Default: 5s)" },
      { label: "Protection Recovery Delay Time", value: "1–600s (Default: 30s)" },
      { label: "Display Function", value: "Real-Time 3-Phase Voltage & Current Display (Current Not Displayed Below 1A)" },
      { label: "Core Protection Functions", value: "Over/Under Voltage, Over-Current, Phase Loss, Open Neutral, Phase Sequence, 3-Phase Unbalance" },
      { label: "Calibration Function", value: "3-Phase Voltage & Current Calibration" },
      { label: "Installation", value: "35mm DIN Rail Mounting" },
      { label: "Housing Color Options", value: "White / Dark Gray" },
      { label: "Application", value: "Photovoltaic Energy Storage, Industrial Motor Distribution Panels, Commercial HVAC Power Supply, 3-Phase Equipment Protection" },
      { label: "Warranty", value: "3 Years" },
    ],
  },
  {
    slug: "czva1",
    name: "CZVA1 Digital Voltage Protector Socket",
    shortName: "CZVA1",
    category: "Voltage Protector",
    parentCategory: "Voltage Protector",
    series: "CZVA Series",
    application: "Plug-in adjustable voltage protector socket",
    image: "/assets/products/gallery/czva1-1.webp",
    gallery: [
      "/assets/products/gallery/czva1-1.webp",
      "/assets/products/gallery/czva1-2.webp",
      "/assets/products/gallery/czva1-3.webp",
      "/assets/products/gallery/czva1-4.webp",
      "/assets/products/gallery/czva1-5.webp",
    ],
    summary: "Adjustable plug-in digital voltage protector socket with LED display and auto recovery.",
    description:
      "TPKELE CZVA1 is a plug-and-play adjustable digital voltage protector socket for EU (Schuko), UK and South Africa plug standards. It cuts power on over-voltage or under-voltage and automatically restores after a set delay, with a digital LED display and Power / SET / Up / Down buttons — protecting refrigerators, air conditioners, TVs and washing machines from unstable mains.",
    specs: [
      "Plug-and-play voltage protector socket",
      "EU (Schuko) / UK / South Africa plug standards",
      "Digital LED display with Power / SET / Up / Down buttons",
      "Adjustable over/under voltage thresholds + voltage correction",
      "Auto power cutoff and restore after set delay",
    ],
    seoKeywords: ["CZVA1", "voltage protector socket", "digital voltage protector", "plug-in voltage protector", "appliance voltage protector", "Schuko voltage protector"],
    technicalSpecs: [
      { label: "Product Name", value: "Adjustable Digital Voltage Protector Socket" },
      { label: "Compatible Plug Standards", value: "EU (Schuko) / UK / South Africa" },
      { label: "Rated Input Voltage", value: "AC 140–300V" },
      { label: "Rated Frequency", value: "50Hz / 60Hz" },
      { label: "Max Rated Power", value: "2300W" },
      { label: "Max Rated Current", value: "10(2)A / 16A Max" },
      { label: "Over-Voltage Protection Range", value: "230V–300V (Default: 260V)" },
      { label: "Over-Voltage Recovery Offset", value: "-5V (Default: 255V)" },
      { label: "Under-Voltage Protection Range", value: "140V–210V (Default: 175V)" },
      { label: "Under-Voltage Recovery Offset", value: "+5V (Default: 180V)" },
      { label: "Recovery Delay Time", value: "5s–999s (Default: 10s)" },
      { label: "Voltage Correction Range", value: "-20V ~ +20V (Default: 0V)" },
      { label: "Display Type", value: "Digital LED Display" },
      { label: "Control Buttons", value: "Power / SET / Up / Down" },
      { label: "Automatic Power Cutoff", value: "Yes (On Over/Under Voltage)" },
      { label: "Automatic Power Restore", value: "Yes (After Set Delay)" },
      { label: "Plug & Play Installation", value: "Yes" },
      { label: "Application", value: "Home Appliances, Refrigerators, Air Conditioners, Televisions, Washing Machines" },
      { label: "Operating Temperature", value: "-10℃ ~ +50℃" },
    ],
  },
  {
    slug: "czva2",
    name: "CZVA2 Digital Voltage Protector Socket",
    shortName: "CZVA2",
    category: "Voltage Protector",
    parentCategory: "Voltage Protector",
    series: "CZVA Series",
    application: "Plug-in voltage protector socket with LED indicators",
    image: "/assets/products/gallery/czva2-1.webp",
    gallery: [
      "/assets/products/gallery/czva2-1.webp",
      "/assets/products/gallery/czva2-2.webp",
      "/assets/products/gallery/czva2-3.webp",
      "/assets/products/gallery/czva2-4.webp",
      "/assets/products/gallery/czva2-5.webp",
    ],
    summary: "Plug-in voltage protector socket with 3 LED indicators and one-button power switch.",
    description:
      "TPKELE CZVA2 is a plug-in voltage protector socket compatible with EU Schuko, UK and South Africa standards. It cuts power on over-voltage or under-voltage and auto-recovers after 30 seconds, with three LED indicators (normal / low / high), a one-button power switch and optional child safety shutter — ideal for rental properties, home appliances and travel use.",
    specs: [
      "Plug-and-play universal 3-pin socket",
      "EU Schuko / UK / South Africa compatible",
      "3 LED indicators — normal / low / high voltage",
      "Over/under voltage cutoff with 30s auto recovery",
      "Optional child safety shutter",
    ],
    seoKeywords: ["CZVA2", "voltage protector socket", "plug-in voltage protector", "appliance surge protector socket", "over under voltage socket", "Schuko voltage protector"],
    technicalSpecs: [
      { label: "Product Type", value: "Plug-in Voltage Protector Socket" },
      { label: "Compatible Socket Standards", value: "EU Schuko / UK / South Africa Universal" },
      { label: "Rated Input Voltage", value: "AC 220–240V" },
      { label: "Rated Frequency", value: "50Hz" },
      { label: "Rated Current Options", value: "10(2)A / 13A" },
      { label: "Max Rated Power", value: "2200W (10A) / 2860W (13A)" },
      { label: "Low Voltage Cutoff", value: "165V ±5V" },
      { label: "High Voltage Cutoff", value: "265V ±5V" },
      { label: "Auto Recovery Delay Time", value: "30 Seconds (Fixed)" },
      { label: "Protection Function", value: "Over-Voltage & Under-Voltage Cutoff" },
      { label: "Operating Indicators", value: "3 LED Indicators (Normal / Low Voltage / High Voltage)" },
      { label: "Power Control", value: "One-Button Power Switch" },
      { label: "Child Safety Shutter", value: "Optional (With / Without)" },
      { label: "Socket Type", value: "Universal 3-Pin Socket" },
      { label: "Installation", value: "Plug-and-Play" },
      { label: "Application", value: "Rental Properties, Home Appliances, Office Equipment, Travel Use, Refrigerators, TVs, Air Conditioners" },
      { label: "Operating Temperature", value: "-10℃ ~ +50℃" },
      { label: "Color", value: "White" },
      { label: "Conformity", value: "CE marking, RoHS compliant" },
    ],
  },
  {
    slug: "czva3",
    name: "CZVA3 Digital Voltage Protector Socket",
    shortName: "CZVA3",
    category: "Voltage Protector",
    parentCategory: "Voltage Protector",
    series: "CZVA Series",
    application: "Plug-in self-resetting voltage & over-current protector socket",
    image: "/assets/products/gallery/czva3-1.webp",
    gallery: [
      "/assets/products/gallery/czva3-1.webp",
      "/assets/products/gallery/czva3-2.webp",
      "/assets/products/gallery/czva3-3.webp",
      "/assets/products/gallery/czva3-4.webp",
    ],
    summary: "Plug-in self-resetting voltage protector socket with dual voltage + current display, 16A / 3680W.",
    description:
      "TPKELE CZVA3 is a plug-in self-resetting over/under voltage and over-current protector socket (EU Schuko) with a dual digital display showing voltage (red) and current (green). Rated 16A / 3680W with password protection, energy-saving mode and adjustable reset delay, it suits shared accommodation, rental properties, small business and high-power appliances.",
    specs: [
      "Plug-in self-resetting protector socket (EU Schuko)",
      "Dual display — voltage (red) + current (green)",
      "16A / 3680W high-power rating",
      "Over/under voltage + over-current protection",
      "Password protection and adjustable reset delay",
    ],
    seoKeywords: ["CZVA3", "voltage protector socket", "16A voltage protector", "over current protector socket", "self-resetting voltage protector", "high power voltage protector socket"],
    technicalSpecs: [
      { label: "Product Type", value: "Plug-in Self-Resetting Over/Under Voltage & Over-Current Protector Socket" },
      { label: "Plug/Socket Standard", value: "EU Schuko" },
      { label: "Rated Supply Voltage", value: "AC 220V (AC 110V Customizable)" },
      { label: "Rated Frequency", value: "40 / 50 / 60 / 70Hz" },
      { label: "Over-Voltage Setting Range", value: "AC 130–300V" },
      { label: "Under-Voltage Setting Range", value: "AC 80–210V" },
      { label: "Over-Voltage Trip Delay", value: "0.5 Seconds" },
      { label: "Voltage Accuracy", value: "<1%" },
      { label: "Max Working Current", value: "16A" },
      { label: "Max Rated Power", value: "3680W" },
      { label: "Display Mode", value: "Dual Digital Display — Voltage (Red) + Current (Green)" },
      { label: "Password Protection", value: "Yes — supports password locking to prevent unauthorized parameter changes" },
      { label: "Energy-Saving Mode", value: "Yes — switchable to reduce self-consumption" },
      { label: "Reset Delay Time", value: "0–999 Seconds (Adjustable, Default: 60s)" },
      { label: "Protection Functions", value: "Over-Voltage, Under-Voltage, Over-Current, Delay Protection" },
      { label: "Housing Material", value: "Flame-Retardant PC (UL94 V-0)" },
      { label: "Mechanical Life", value: "≥10,000 Cycles" },
      { label: "Permitted Relative Humidity", value: "≤50% at 40°C (Non-Condensing)" },
      { label: "Ambient Temperature", value: "-25℃ to +55℃" },
      { label: "Application", value: "Shared Accommodation, Rental Properties, Small Business, High-Power Appliances, Workshop Equipment" },
      { label: "Customizable LOGO", value: "Yes" },
    ],
  },
  {
    slug: "ats-st-2p",
    name: "ATS-ST-2P Dual Power Automatic Transfer Switch",
    shortName: "ATS-ST-2P",
    category: "ATS",
    parentCategory: "ATS",
    series: "ATS-ST Series",
    seriesAliases: ["ats-st","ATS-ST","ATS-ST-2P"],
    application: "Single-phase fast dual-source changeover",
    image: "/assets/products/gallery/ats-st-2p-1.webp",
    summary: "PC-class single-phase (2P) dual-power automatic transfer switch — 63A, ≤0.05s changeover with built-in over/under-voltage protection.",
    description:
      "The TPKELE ATS-ST-2P is a PC-class (load-level) single-phase dual-power automatic transfer switch. It moves a 2P (live + neutral) load between two sources within ~50ms, with built-in over-voltage and under-voltage protection and auto/manual operation. Rated 63A at 110V / 220V AC in a flame-retardant PA6 housing — built for home emergency backup and RV power where fast, protected changeover matters.",
    specs: [
      "PC class (load level) — fast changeover ≤0.05s (50ms)",
      "2P (live + neutral), single phase",
      "63A rated current, operating range 6A–63A",
      "Built-in over-voltage & under-voltage protection",
      "110V / 220V AC, 50/60Hz, Auto & Manual",
      "PA6 flame-retardant housing, 35mm DIN rail",
    ],
    seoKeywords: [
      "ATS-ST-2P",
      "single phase ATS",
      "PC class transfer switch",
      "2P automatic transfer switch",
      "dual power ATS",
      "ATS manufacturer",
      "63A transfer switch",
    ],
    gallery: [
      "/assets/products/gallery/ats-st-2p-1.webp",
      "/assets/products/gallery/ats-st-2p-2.webp",
      "/assets/products/gallery/ats-st-2p-3.webp",
      "/assets/products/gallery/ats-st-2p-4.webp",
    ],
    technicalSpecs: [
      { label: "Product Model", value: "ATS-ST-2P" },
      { label: "Product Type", value: "Dual Power Automatic Transfer Switch" },
      { label: "Utilization Class", value: "PC Class (Load Level)" },
      { label: "Poles", value: "2P (Live + Neutral)" },
      { label: "Rated Current", value: "63A (Operating Range: 6A – 63A)" },
      { label: "Rated Voltage", value: "110V / 220V AC" },
      { label: "Frequency", value: "50 / 60 Hz" },
      { label: "Phase", value: "Single Phase" },
      { label: "I/O Configuration", value: "2 Inputs / 1 Output" },
      { label: "Priority Source", value: "Source I (Mains)" },
      { label: "Compatible Sources", value: "Mains, Inverter, Generator" },
      { label: "Switching Mode", value: "Auto & Manual" },
      { label: "Transfer Time", value: "≤ 0.05s (50ms)" },
      { label: "Over-Voltage Protection", value: "145V (110V mode) / 260V (220V mode)" },
      { label: "Under-Voltage Protection", value: "85V (110V mode) / 175V (220V mode)" },
      { label: "Housing Material", value: "PA6 Flame-Retardant" },
      { label: "Installation", value: "35mm DIN Rail" },
      { label: "Conformity", value: "CE marking, RoHS compliant" },
    ],
  },
  {
    slug: "ats-st-4p",
    name: "ATS-ST-4P Dual Power Automatic Transfer Switch",
    shortName: "ATS-ST-4P",
    category: "ATS",
    parentCategory: "ATS",
    series: "ATS-ST Series",
    seriesAliases: ["ats-st","ATS-ST","ATS-ST-4P"],
    application: "Three-phase + neutral fast dual-source changeover",
    image: "/assets/products/gallery/ats-st-4p-1.webp",
    summary: "PC-class three-phase (4P) dual-power automatic transfer switch — 63A, ≤0.05s changeover with built-in over/under-voltage protection.",
    description:
      "The TPKELE ATS-ST-4P is a PC-class (load-level) three-phase dual-power automatic transfer switch. It transfers a 4P (3 lines + neutral) load between two sources within ~50ms, with built-in over-voltage and under-voltage protection and auto/manual operation. Rated 63A at 110V / 220V AC in a flame-retardant PA6 housing — built for hospitals, cold storage and data centers needing fast, protected three-phase changeover.",
    specs: [
      "PC class (load level) — fast changeover ≤0.05s (50ms)",
      "4P (3 lines + neutral), three-phase with neutral",
      "63A rated current, operating range 6A–63A",
      "Built-in over-voltage & under-voltage protection",
      "110V / 220V AC, 50/60Hz, Auto & Manual",
      "PA6 flame-retardant housing, 35mm DIN rail",
    ],
    seoKeywords: [
      "ATS-ST-4P",
      "three phase ATS",
      "PC class transfer switch",
      "4P automatic transfer switch",
      "dual power ATS",
      "ATS manufacturer",
      "63A transfer switch",
    ],
    gallery: [
      "/assets/products/gallery/ats-st-4p-1.webp",
      "/assets/products/gallery/ats-st-4p-2.webp",
      "/assets/products/gallery/ats-st-4p-3.webp",
      "/assets/products/gallery/ats-st-4p-4.webp",
    ],
    technicalSpecs: [
      { label: "Product Model", value: "ATS-ST-4P" },
      { label: "Product Type", value: "Dual Power Automatic Transfer Switch" },
      { label: "Utilization Class", value: "PC Class (Load Level)" },
      { label: "Poles", value: "4P (3 Lines + Neutral)" },
      { label: "Rated Current", value: "63A (Operating Range: 6A – 63A)" },
      { label: "Rated Voltage", value: "110V / 220V AC" },
      { label: "Frequency", value: "50 / 60 Hz" },
      { label: "Phase", value: "Three-Phase with Neutral" },
      { label: "I/O Configuration", value: "2 Inputs / 1 Output" },
      { label: "Priority Source", value: "Source I (Mains)" },
      { label: "Compatible Sources", value: "Mains, Inverter, Generator" },
      { label: "Switching Mode", value: "Auto & Manual" },
      { label: "Transfer Time", value: "≤ 0.05s (50ms)" },
      { label: "Over-Voltage Protection", value: "145V (110V mode) / 260V (220V mode)" },
      { label: "Under-Voltage Protection", value: "85V (110V mode) / 175V (220V mode)" },
      { label: "Housing Material", value: "PA6 Flame-Retardant" },
      { label: "Installation", value: "35mm DIN Rail" },
      { label: "Conformity", value: "CE marking, RoHS compliant" },
    ],
  },
  {
    slug: "ats-w2r-2p",
    name: "ATS-W2R-2P Dual Power Automatic Transfer Switch",
    shortName: "ATS-W2R-2P",
    category: "ATS",
    parentCategory: "ATS",
    series: "ATS-W2R Series",
    seriesAliases: ["ats-w2r","ATS-W2R","W2R","W2R-100 II","ATS-W2R-2P"],
    application: "Single-phase mains / generator changeover",
    image: "/assets/products/gallery/ats-w2r-2p-1.webp",
    summary: "PC-class single-phase (2P) W2R dual-power automatic transfer switch — 63A, ≤0.05s mains-to-backup changeover, DIN-rail mount.",
    description:
      "The TPKELE ATS-W2R-2P (W2R-100 II) is a PC-class single-phase dual-power automatic transfer switch. It switches a 2P (live + neutral) load between Source A (mains / city power) and Source B (generator / backup) within ~50ms, with auto/manual operation and a flame-retardant PA6 housing. Rated 63A at 110V / 220V AC — built for home and small-commercial emergency backup and RV power.",
    specs: [
      "PC class — fast changeover ≤0.05s (50ms)",
      "2P (live + neutral), single phase",
      "63A rated current, operating range 6A–63A",
      "Source A (mains) priority, auto return on recovery",
      "110V / 220V AC, 50/60Hz, Auto & Manual",
      "PA6 flame-retardant housing, 35mm DIN rail",
    ],
    seoKeywords: [
      "ATS-W2R-2P",
      "W2R-100 II",
      "single phase ATS",
      "PC class transfer switch",
      "2P automatic transfer switch",
      "generator transfer switch",
      "ATS manufacturer",
    ],
    gallery: [
      "/assets/products/gallery/ats-w2r-2p-1.webp",
      "/assets/products/gallery/ats-w2r-2p-2.webp",
      "/assets/products/gallery/ats-w2r-2p-3.webp",
      "/assets/products/gallery/ats-w2r-2p-4.webp",
    ],
    technicalSpecs: [
      { label: "Product Model", value: "ATS-W2R-2P" },
      { label: "Product Type", value: "Dual Power Automatic Transfer Switch" },
      { label: "Utilization Class", value: "PC Class (Load Level)" },
      { label: "Poles", value: "2P (Live + Neutral)" },
      { label: "Rated Current", value: "63A (Operating Range: 6A – 63A)" },
      { label: "Rated Voltage", value: "110V / 220V AC" },
      { label: "Frequency", value: "50 / 60 Hz" },
      { label: "Phase", value: "Single Phase" },
      { label: "I/O Configuration", value: "2 Inputs / 1 Output" },
      { label: "Priority Source", value: "Source A (Mains)" },
      { label: "Compatible Sources", value: "Mains, Generator, PV Inverter" },
      { label: "Switching Mode", value: "Auto & Manual" },
      { label: "Transfer Time", value: "≤ 0.05s (50ms)" },
      { label: "Housing Material", value: "PA6 Flame-Retardant" },
      { label: "Installation", value: "35mm DIN Rail" },
      { label: "Conformity", value: "CE marking, RoHS compliant" },
    ],
  },
  {
    slug: "ats-w2r-3p",
    name: "ATS-W2R-3P Dual Power Automatic Transfer Switch",
    shortName: "ATS-W2R-3P",
    category: "ATS",
    parentCategory: "ATS",
    series: "ATS-W2R Series",
    seriesAliases: ["ats-w2r","ATS-W2R","W2R","W2R-100 II","ATS-W2R-3P"],
    application: "Three-phase (no neutral) mains / generator changeover",
    image: "/assets/products/gallery/ats-w2r-3p-1.webp",
    summary: "PC-class three-phase (3P) W2R dual-power automatic transfer switch — 63A, ≤0.05s mains-to-backup changeover, DIN-rail mount.",
    description:
      "The TPKELE ATS-W2R-3P (W2R-100 II) is a PC-class three-phase dual-power automatic transfer switch. It switches a 3P (3 lines, no neutral) load between Source A (mains / city power) and Source B (generator / backup) within ~50ms, with auto/manual operation and a flame-retardant PA6 housing. Rated 63A at 110V / 220V AC — built for three-phase motor and equipment feeds needing reliable source transfer.",
    specs: [
      "PC class — fast changeover ≤0.05s (50ms)",
      "3P (3 lines, no neutral), three-phase",
      "63A rated current, operating range 6A–63A",
      "Source A (mains) priority, auto return on recovery",
      "110V / 220V AC, 50/60Hz, Auto & Manual",
      "PA6 flame-retardant housing, 35mm DIN rail",
    ],
    seoKeywords: [
      "ATS-W2R-3P",
      "W2R-100 II",
      "three phase ATS",
      "PC class transfer switch",
      "3P automatic transfer switch",
      "generator transfer switch",
      "ATS manufacturer",
    ],
    gallery: [
      "/assets/products/gallery/ats-w2r-3p-1.webp",
      "/assets/products/gallery/ats-w2r-3p-2.webp",
      "/assets/products/gallery/ats-w2r-3p-3.webp",
      "/assets/products/gallery/ats-w2r-3p-4.webp",
    ],
    technicalSpecs: [
      { label: "Product Model", value: "ATS-W2R-3P" },
      { label: "Product Type", value: "Dual Power Automatic Transfer Switch" },
      { label: "Utilization Class", value: "PC Class (Load Level)" },
      { label: "Poles", value: "3P (3 Lines, No Neutral)" },
      { label: "Rated Current", value: "63A (Operating Range: 6A – 63A)" },
      { label: "Rated Voltage", value: "110V / 220V AC" },
      { label: "Frequency", value: "50 / 60 Hz" },
      { label: "Phase", value: "Three-Phase (No Neutral)" },
      { label: "I/O Configuration", value: "2 Inputs / 1 Output" },
      { label: "Priority Source", value: "Source A (Mains)" },
      { label: "Compatible Sources", value: "Mains, Generator, PV Inverter" },
      { label: "Switching Mode", value: "Auto & Manual" },
      { label: "Transfer Time", value: "≤ 0.05s (50ms)" },
      { label: "Housing Material", value: "PA6 Flame-Retardant" },
      { label: "Installation", value: "35mm DIN Rail" },
      { label: "Conformity", value: "CE marking, RoHS compliant" },
    ],
  },
  {
    slug: "ats-w2r-4p",
    name: "ATS-W2R-4P Dual Power Automatic Transfer Switch",
    shortName: "ATS-W2R-4P",
    category: "ATS",
    parentCategory: "ATS",
    series: "ATS-W2R Series",
    seriesAliases: ["ats-w2r","ATS-W2R","W2R","W2R-100 II","ATS-W2R-4P"],
    application: "Three-phase + neutral mains / generator changeover",
    image: "/assets/products/gallery/ats-w2r-4p-1.webp",
    summary: "PC-class three-phase (4P) W2R dual-power automatic transfer switch — 63A, ≤0.05s mains-to-backup changeover, DIN-rail mount.",
    description:
      "The TPKELE ATS-W2R-4P (W2R-100 II) is a PC-class three-phase dual-power automatic transfer switch. It switches a 4P (3 lines + neutral) load between Source A (mains / city power) and Source B (generator / backup) within ~50ms, with auto/manual operation and a flame-retardant PA6 housing. Rated 63A at 110V / 220V AC — built for hospitals, cold storage and data centers needing full four-pole source transfer.",
    specs: [
      "PC class — fast changeover ≤0.05s (50ms)",
      "4P (3 lines + neutral), three-phase with neutral",
      "63A rated current, operating range 6A–63A",
      "Source A (mains) priority, auto return on recovery",
      "110V / 220V AC, 50/60Hz, Auto & Manual",
      "PA6 flame-retardant housing, 35mm DIN rail",
    ],
    seoKeywords: [
      "ATS-W2R-4P",
      "W2R-100 II",
      "three phase ATS",
      "PC class transfer switch",
      "4P automatic transfer switch",
      "generator transfer switch",
      "ATS manufacturer",
    ],
    gallery: [
      "/assets/products/gallery/ats-w2r-4p-1.webp",
      "/assets/products/gallery/ats-w2r-4p-2.webp",
      "/assets/products/gallery/ats-w2r-4p-3.webp",
      "/assets/products/gallery/ats-w2r-4p-4.webp",
    ],
    technicalSpecs: [
      { label: "Product Model", value: "ATS-W2R-4P" },
      { label: "Product Type", value: "Dual Power Automatic Transfer Switch" },
      { label: "Utilization Class", value: "PC Class (Load Level)" },
      { label: "Poles", value: "4P (3 Lines + Neutral)" },
      { label: "Rated Current", value: "63A (Operating Range: 6A – 63A)" },
      { label: "Rated Voltage", value: "110V / 220V AC" },
      { label: "Frequency", value: "50 / 60 Hz" },
      { label: "Phase", value: "Three-Phase with Neutral" },
      { label: "I/O Configuration", value: "2 Inputs / 1 Output" },
      { label: "Priority Source", value: "Source A (Mains)" },
      { label: "Compatible Sources", value: "Mains, Generator, PV Inverter" },
      { label: "Switching Mode", value: "Auto & Manual" },
      { label: "Transfer Time", value: "≤ 0.05s (50ms)" },
      { label: "Housing Material", value: "PA6 Flame-Retardant" },
      { label: "Installation", value: "35mm DIN Rail" },
      { label: "Conformity", value: "CE marking, RoHS compliant" },
    ],
  },
  {
    slug: "stq1-2p",
    name: "STQ1-2P CB-Class Automatic Transfer Switch",
    shortName: "STQ1-2P",
    category: "ATS",
    parentCategory: "ATS",
    series: "STQ1 Series",
    seriesAliases: ["stq1","STQ1","STQ1-63","STQ1-2P"],
    application: "Single-phase motorized source transfer",
    image: "/assets/products/gallery/stq1-2p-1.webp",
    summary: "CB-class single-phase (2P) motorized automatic transfer switch with mechanical interlock — 63A, ~2s transfer, up to ~6.9kW.",
    description:
      "The TPKELE STQ1-2P is a CB-class (circuit breaker + mechanical interlock) single-phase automatic transfer switch driven by a built-in motor. It transfers a 2P load between normal (mains) and backup supply in about 2 seconds, with mechanical interlock preventing both sources connecting at once. Rated 63A at 110V / 220V AC, up to ~6.9kW — built for home emergency, fire protection, elevators and RV backup.",
    specs: [
      "CB class — circuit breaker + mechanical interlock",
      "Motorized auto transfer, ~2s changeover",
      "2P (live + neutral), single phase",
      "63A rated current, operating range 6A–63A",
      "Up to ~6.9kW (6930W) load capacity",
      "110V / 220V AC, 50/60Hz, Auto & Manual",
    ],
    seoKeywords: [
      "STQ1-2P",
      "single phase ATS",
      "CB class ATS",
      "motorized transfer switch",
      "mechanical interlock ATS",
      "2P transfer switch",
      "ATS manufacturer",
    ],
    gallery: [
      "/assets/products/gallery/stq1-2p-1.webp",
      "/assets/products/gallery/stq1-2p-2.webp",
      "/assets/products/gallery/stq1-2p-3.webp",
      "/assets/products/gallery/stq1-2p-4.webp",
    ],
    technicalSpecs: [
      { label: "Product Model", value: "STQ1-2P" },
      { label: "Product Type", value: "CB-Class Automatic Transfer Switch" },
      { label: "Utilization Class", value: "CB Class (Circuit Breaker + Mechanical Interlock)" },
      { label: "Poles", value: "2P (Live + Neutral)" },
      { label: "Rated Current", value: "63A (Working Range: 6A – 63A)" },
      { label: "Rated Voltage", value: "110V / 220V AC" },
      { label: "Frequency", value: "50 / 60 Hz" },
      { label: "Phase", value: "Single Phase" },
      { label: "I/O Configuration", value: "2 Inputs / 1 Output" },
      { label: "Priority Source", value: "Normal Power (N / Mains)" },
      { label: "Compatible Sources", value: "Mains, Generator, PV Inverter" },
      { label: "Switching Mode", value: "Auto & Manual" },
      { label: "Auto Transfer Time", value: "~2s" },
      { label: "Power Interruption", value: "Brief ~2s during transfer" },
      { label: "Max Load Power", value: "~6.9kW (6930W)" },
      { label: "Internal Components", value: "PCB Control Board, Motor, Thermal Relay" },
      { label: "Installation", value: "35mm DIN Rail" },
      { label: "Conformity", value: "CE marking, RoHS compliant" },
    ],
  },
  {
    slug: "stq1-3p",
    name: "STQ1-3P CB-Class Automatic Transfer Switch",
    shortName: "STQ1-3P",
    category: "ATS",
    parentCategory: "ATS",
    series: "STQ1 Series",
    seriesAliases: ["stq1","STQ1","STQ1-63","STQ1-3P"],
    application: "Three-phase motorized source transfer",
    image: "/assets/products/gallery/stq1-3p-1.webp",
    summary: "CB-class three-phase (3P) motorized automatic transfer switch with mechanical interlock — 63A, ~2s transfer, up to ~22kW.",
    description:
      "The TPKELE STQ1-3P is a CB-class (circuit breaker + mechanical interlock) three-phase automatic transfer switch with triple-pole simultaneous switching, driven by a built-in motor. It transfers a 3P load between normal (mains) and backup supply in about 2 seconds, with mechanical interlock preventing both sources connecting at once. Rated 63A at 110V / 220V AC, up to ~22kW three-phase — built for industrial equipment, commercial elevators and three-phase motors.",
    specs: [
      "CB class — circuit breaker + mechanical interlock",
      "Motorized auto transfer, ~2s changeover",
      "3P triple-pole, simultaneous switching",
      "63A rated current, operating range 6A–63A",
      "Up to ~22kW three-phase load capacity",
      "110V / 220V AC, 50/60Hz, Auto & Manual",
    ],
    seoKeywords: [
      "STQ1-3P",
      "three phase ATS",
      "CB class ATS",
      "motorized transfer switch",
      "mechanical interlock ATS",
      "3P transfer switch",
      "ATS manufacturer",
    ],
    gallery: [
      "/assets/products/gallery/stq1-3p-1.webp",
      "/assets/products/gallery/stq1-3p-2.webp",
      "/assets/products/gallery/stq1-3p-3.webp",
      "/assets/products/gallery/stq1-3p-4.webp",
    ],
    technicalSpecs: [
      { label: "Product Model", value: "STQ1-3P" },
      { label: "Product Type", value: "CB-Class Automatic Transfer Switch" },
      { label: "Utilization Class", value: "CB Class (Circuit Breaker + Mechanical Interlock)" },
      { label: "Poles", value: "3P (Triple-Pole, Simultaneous Switching)" },
      { label: "Rated Current", value: "63A (Working Range: 6A – 63A)" },
      { label: "Rated Voltage", value: "110V / 220V AC" },
      { label: "Frequency", value: "50 / 60 Hz" },
      { label: "Phase", value: "Three-Phase" },
      { label: "I/O Configuration", value: "2 Inputs / 1 Output" },
      { label: "Priority Source", value: "Normal Power (N / Mains)" },
      { label: "Compatible Sources", value: "Mains, Generator, PV Inverter" },
      { label: "Switching Mode", value: "Auto & Manual" },
      { label: "Auto Transfer Time", value: "~2s" },
      { label: "Power Interruption", value: "Brief ~2s during transfer" },
      { label: "Max Load Power", value: "~22kW (Three-Phase)" },
      { label: "Internal Components", value: "PCB Control Board, Motor, Thermal Relay" },
      { label: "Installation", value: "35mm DIN Rail" },
      { label: "Conformity", value: "CE marking, RoHS compliant" },
    ],
  },
  {
    slug: "stq1-4p",
    name: "STQ1-4P CB-Class Automatic Transfer Switch",
    shortName: "STQ1-4P",
    category: "ATS",
    parentCategory: "ATS",
    series: "STQ1 Series",
    seriesAliases: ["stq1","STQ1","STQ1-63","STQ1-4P"],
    application: "Three-phase + neutral motorized source transfer",
    image: "/assets/products/gallery/stq1-4p-1.webp",
    summary: "CB-class four-pole (4P) motorized automatic transfer switch with mechanical interlock and OV/UV protection — 63A, ~2s transfer, up to ~13.9kW.",
    description:
      "The TPKELE STQ1-4P is a CB-class (circuit breaker + mechanical interlock) four-pole automatic transfer switch driven by a built-in motor. It transfers a 4P (3 lines + neutral) load between normal (mains) and backup supply in about 2 seconds, with mechanical interlock plus over-voltage and under-voltage protection. Rated 63A at 110V / 220V AC, up to ~13.9kW, compatible with three-phase and single-phase loads — built for hospitals, cold storage and data centers.",
    specs: [
      "CB class — circuit breaker + mechanical interlock",
      "Motorized auto transfer, ~2s changeover",
      "4P (3 lines + neutral), 3-phase & single-phase compatible",
      "Mechanical interlock + over/under-voltage protection",
      "63A, up to ~13.9kW (13870W) load capacity",
      "110V / 220V AC, 50/60Hz, Auto & Manual",
    ],
    seoKeywords: [
      "STQ1-4P",
      "four pole ATS",
      "CB class ATS",
      "motorized transfer switch",
      "mechanical interlock ATS",
      "4P transfer switch",
      "ATS manufacturer",
    ],
    gallery: [
      "/assets/products/gallery/stq1-4p-1.webp",
      "/assets/products/gallery/stq1-4p-2.webp",
      "/assets/products/gallery/stq1-4p-3.webp",
      "/assets/products/gallery/stq1-4p-4.webp",
    ],
    technicalSpecs: [
      { label: "Product Model", value: "STQ1-4P" },
      { label: "Product Type", value: "CB-Class Automatic Transfer Switch" },
      { label: "Utilization Class", value: "CB Class (Circuit Breaker + Mechanical Interlock)" },
      { label: "Poles", value: "4P (3 Lines + Neutral)" },
      { label: "Rated Current", value: "63A (Working Range: 6A – 63A)" },
      { label: "Rated Voltage", value: "110V / 220V AC" },
      { label: "Frequency", value: "50 / 60 Hz" },
      { label: "Phase", value: "Three-Phase with Neutral (compatible with 3-phase & single-phase loads)" },
      { label: "I/O Configuration", value: "2 Inputs / 1 Output" },
      { label: "Priority Source", value: "Normal Power (N / Mains)" },
      { label: "Compatible Sources", value: "Mains, Generator, PV Inverter" },
      { label: "Switching Mode", value: "Auto & Manual" },
      { label: "Auto Transfer Time", value: "~2s" },
      { label: "Power Interruption", value: "Brief ~2s during transfer" },
      { label: "Protection", value: "Mechanical Interlock, Over-voltage & Under-voltage" },
      { label: "Max Load Power", value: "~13.9kW (13870W)" },
      { label: "Internal Components", value: "PCB Control Board, Motor, Thermal Relay" },
      { label: "Installation", value: "35mm DIN Rail" },
      { label: "Conformity", value: "CE marking, RoHS compliant" },
    ],
  },
  {
    slug: "stq2-2p",
    name: "STQ2-2P CB-Class Automatic Transfer Switch",
    shortName: "STQ2-2P",
    category: "ATS",
    parentCategory: "ATS",
    series: "STQ2 Series",
    seriesAliases: ["stq2","STQ2","STQ2-63","STQ2-2P"],
    application: "Single-phase motorized source transfer with rotary handle",
    image: "/assets/products/gallery/stq2-2p-1.webp",
    summary: "Heavy-duty CB-class single-phase (2P) automatic transfer switch with rotary handle and mechanical interlock — 63A, ~2s transfer, up to ~6.9kW.",
    description:
      "The TPKELE STQ2-2P is a heavy-duty CB-class (circuit breaker + mechanical interlock) single-phase automatic transfer switch with a rotary handle for clear position indication and manual override. A built-in motor transfers a 2P load between normal (mains) and emergency supply in about 2 seconds, with mechanical interlock ensuring only one source connects at a time. Rated 63A at 110V / 220V AC, up to ~6.9kW — built for home emergency, fire protection, elevators and RV backup.",
    specs: [
      "CB class — circuit breaker + mechanical interlock",
      "Rotary handle with clear Normal / Emergency indication",
      "Motorized auto transfer, ~2s changeover",
      "2P (live + neutral), single phase",
      "63A, up to ~6.9kW (6930W) load capacity",
      "110V / 220V AC, 50/60Hz, Auto & Manual",
    ],
    seoKeywords: [
      "STQ2-2P",
      "single phase ATS",
      "rotary handle transfer switch",
      "CB class ATS",
      "motorized transfer switch",
      "2P transfer switch",
      "ATS manufacturer",
    ],
    gallery: [
      "/assets/products/gallery/stq2-2p-1.webp",
      "/assets/products/gallery/stq2-2p-2.webp",
      "/assets/products/gallery/stq2-2p-3.webp",
      "/assets/products/gallery/stq2-2p-4.webp",
    ],
    technicalSpecs: [
      { label: "Product Model", value: "STQ2-2P" },
      { label: "Product Type", value: "CB-Class Automatic Transfer Switch (Rotary Handle)" },
      { label: "Utilization Class", value: "CB Class (Circuit Breaker + Mechanical Interlock)" },
      { label: "Poles", value: "2P (Live + Neutral)" },
      { label: "Rated Current", value: "63A (Working Range: 6A – 63A)" },
      { label: "Rated Voltage", value: "110V / 220V AC" },
      { label: "Frequency", value: "50 / 60 Hz" },
      { label: "Phase", value: "Single Phase" },
      { label: "I/O Configuration", value: "2 Inputs / 1 Output" },
      { label: "Priority Source", value: "Normal Power (N / Mains)" },
      { label: "Compatible Sources", value: "Mains, Generator, PV Inverter" },
      { label: "Switching Mode", value: "Auto & Manual" },
      { label: "Auto Transfer Time", value: "~2s" },
      { label: "Power Interruption", value: "Brief ~2s during transfer" },
      { label: "Max Load Power", value: "~6.9kW (6930W)" },
      { label: "Internal Components", value: "PCB Control Board, Motor, Thermal Relay" },
      { label: "Installation", value: "35mm DIN Rail" },
      { label: "Conformity", value: "CE marking, RoHS compliant" },
    ],
  },
  {
    slug: "stq2-3p",
    name: "STQ2-3P CB-Class Automatic Transfer Switch",
    shortName: "STQ2-3P",
    category: "ATS",
    parentCategory: "ATS",
    series: "STQ2 Series",
    seriesAliases: ["stq2","STQ2","STQ2-63","STQ2-3P"],
    application: "Three-phase motorized source transfer with rotary handle",
    image: "/assets/products/gallery/stq2-3p-1.webp",
    summary: "Heavy-duty CB-class three-phase (3P) automatic transfer switch with rotary handle and mechanical interlock — 63A, ~2s transfer, up to ~22kW.",
    description:
      "The TPKELE STQ2-3P is a heavy-duty CB-class (circuit breaker + mechanical interlock) three-phase automatic transfer switch with a rotary handle for clear position indication and manual override. A built-in motor transfers a 3P load between normal (mains) and emergency supply in about 2 seconds, with triple-pole simultaneous switching and mechanical interlock. Rated 63A at 110V / 220V AC, up to ~22kW three-phase — built for industrial equipment, commercial elevators and three-phase motors.",
    specs: [
      "CB class — circuit breaker + mechanical interlock",
      "Rotary handle with clear Normal / Emergency indication",
      "Motorized auto transfer, ~2s changeover",
      "3P triple-pole, simultaneous switching",
      "63A, up to ~22kW three-phase load capacity",
      "110V / 220V AC, 50/60Hz, Auto & Manual",
    ],
    seoKeywords: [
      "STQ2-3P",
      "three phase ATS",
      "rotary handle transfer switch",
      "CB class ATS",
      "motorized transfer switch",
      "3P transfer switch",
      "ATS manufacturer",
    ],
    gallery: [
      "/assets/products/gallery/stq2-3p-1.webp",
      "/assets/products/gallery/stq2-3p-2.webp",
      "/assets/products/gallery/stq2-3p-3.webp",
      "/assets/products/gallery/stq2-3p-4.webp",
    ],
    technicalSpecs: [
      { label: "Product Model", value: "STQ2-3P" },
      { label: "Product Type", value: "CB-Class Automatic Transfer Switch (Rotary Handle)" },
      { label: "Utilization Class", value: "CB Class (Circuit Breaker + Mechanical Interlock)" },
      { label: "Poles", value: "3P (Triple-Pole, Simultaneous Switching)" },
      { label: "Rated Current", value: "63A (Working Range: 6A – 63A)" },
      { label: "Rated Voltage", value: "110V / 220V AC" },
      { label: "Frequency", value: "50 / 60 Hz" },
      { label: "Phase", value: "Three-Phase" },
      { label: "I/O Configuration", value: "2 Inputs / 1 Output" },
      { label: "Priority Source", value: "Normal Power (N / Mains)" },
      { label: "Compatible Sources", value: "Mains, Generator, PV Inverter" },
      { label: "Switching Mode", value: "Auto & Manual" },
      { label: "Auto Transfer Time", value: "~2s" },
      { label: "Power Interruption", value: "Brief ~2s during transfer" },
      { label: "Max Load Power", value: "~22kW (Three-Phase)" },
      { label: "Internal Components", value: "PCB Control Board, Motor, Thermal Relay" },
      { label: "Installation", value: "35mm DIN Rail" },
      { label: "Conformity", value: "CE marking, RoHS compliant" },
    ],
  },
  {
    slug: "stq2-4p",
    name: "STQ2-4P CB-Class Automatic Transfer Switch",
    shortName: "STQ2-4P",
    category: "ATS",
    parentCategory: "ATS",
    series: "STQ2 Series",
    seriesAliases: ["stq2","STQ2","STQ2-63","STQ2-4P"],
    application: "Three-phase + neutral motorized source transfer with rotary handle",
    image: "/assets/products/gallery/stq2-4p-1.webp",
    summary: "Heavy-duty CB-class four-pole (4P) automatic transfer switch with rotary handle, mechanical interlock and OV/UV protection — 63A, ~2s transfer, up to ~13.9kW.",
    description:
      "The TPKELE STQ2-4P is a heavy-duty CB-class (circuit breaker + mechanical interlock) four-pole automatic transfer switch with a rotary handle for clear position indication and manual override. A built-in motor transfers a 4P (3 lines + neutral) load between normal (mains) and emergency supply in about 2 seconds, with mechanical interlock plus over-voltage and under-voltage protection. Rated 63A at 110V / 220V AC, up to ~13.9kW, compatible with three-phase and single-phase loads — built for hospitals, cold storage and data centers.",
    specs: [
      "CB class — circuit breaker + mechanical interlock",
      "Rotary handle with clear Normal / Emergency indication",
      "Motorized auto transfer, ~2s changeover",
      "4P (3 lines + neutral), 3-phase & single-phase compatible",
      "Mechanical interlock + over/under-voltage protection",
      "63A, up to ~13.9kW (13870W), 110V / 220V AC",
    ],
    seoKeywords: [
      "STQ2-4P",
      "four pole ATS",
      "rotary handle transfer switch",
      "CB class ATS",
      "motorized transfer switch",
      "4P transfer switch",
      "ATS manufacturer",
    ],
    gallery: [
      "/assets/products/gallery/stq2-4p-1.webp",
      "/assets/products/gallery/stq2-4p-2.webp",
      "/assets/products/gallery/stq2-4p-3.webp",
      "/assets/products/gallery/stq2-4p-4.webp",
    ],
    technicalSpecs: [
      { label: "Product Model", value: "STQ2-4P" },
      { label: "Product Type", value: "CB-Class Automatic Transfer Switch (Rotary Handle)" },
      { label: "Utilization Class", value: "CB Class (Circuit Breaker + Mechanical Interlock)" },
      { label: "Poles", value: "4P (3 Lines + Neutral)" },
      { label: "Rated Current", value: "63A (Working Range: 6A – 63A)" },
      { label: "Rated Voltage", value: "110V / 220V AC" },
      { label: "Frequency", value: "50 / 60 Hz" },
      { label: "Phase", value: "Three-Phase with Neutral (compatible with 3-phase & single-phase loads)" },
      { label: "I/O Configuration", value: "2 Inputs / 1 Output" },
      { label: "Priority Source", value: "Normal Power (N / Mains)" },
      { label: "Compatible Sources", value: "Mains, Generator, PV Inverter" },
      { label: "Switching Mode", value: "Auto & Manual" },
      { label: "Auto Transfer Time", value: "~2s" },
      { label: "Power Interruption", value: "Brief ~2s during transfer" },
      { label: "Protection", value: "Mechanical Interlock, Over-voltage & Under-voltage" },
      { label: "Max Load Power", value: "~13.9kW (13870W)" },
      { label: "Internal Components", value: "PCB Control Board, Motor, Thermal Relay" },
      { label: "Installation", value: "35mm DIN Rail" },
      { label: "Conformity", value: "CE marking, RoHS compliant" },
    ],
  },
  {
    slug: "plastic-box-series",
    name: "Plastic Box Series",
    shortName: "Plastic Box",
    category: "Combiner Box",
    parentCategory: "Combiner Box",
    series: "Plastic Box Series",
    application: "PV combiner protection",
    image: "/assets/products/gallery/plastic-box-series-1.webp",
    summary: "Plastic enclosure combiner box series for PV system protection.",
    description: "TPKELE plastic combiner box series supports lightweight PV protection assemblies with configurable branch and protection layouts.",
    specs: ["Plastic enclosure series", "Custom strings and enclosure size", "SPD, fuse and breaker configuration"],
    seoKeywords: ["plastic combiner box", "PV combiner box", "solar plastic box"],
    gallery: [
      "/assets/products/gallery/plastic-box-series-1.webp",
      "/assets/products/gallery/plastic-box-series-2.webp",
      "/assets/products/gallery/plastic-box-series-3.webp",
      "/assets/products/gallery/plastic-box-series-4.webp",
    ],
  },
  {
    slug: "metal-box-series",
    name: "Metal Box Series",
    shortName: "Metal Box",
    category: "Combiner Box",
    parentCategory: "Combiner Box",
    series: "Metal Box Series",
    application: "PV combiner protection",
    image: "/assets/home-products-normalized/combiner-box.webp",
    summary: "Metal enclosure combiner box series for demanding project environments.",
    description: "TPKELE metal combiner box series provides stronger enclosure options for solar protection and project distribution needs.",
    specs: ["Metal enclosure series", "Custom strings and component layout", "Label and wiring customization"],
    seoKeywords: ["metal combiner box", "PV metal box", "solar combiner box manufacturer"],
  },
  {
    slug: "din-rail-energy-meter",
    name: "Energy Meter",
    shortName: "DIN Meter",
    category: "Energy Meter",
    parentCategory: "Energy Meter",
    series: "Energy Meter",
    application: "Energy monitoring",
    image: "/assets/products/gallery/din-rail-energy-meter-1.webp",
    summary: "DIN rail energy meter for electrical measurement and monitoring.",
    description: "TPKELE DIN rail energy meters provide compact metering options for distribution panels and energy management projects.",
    specs: ["Single-phase and three-phase options", "Clear digital display", "Communication model available"],
    seoKeywords: ["DIN rail energy meter", "energy meter manufacturer", "power meter"],
    gallery: [
      "/assets/products/gallery/din-rail-energy-meter-1.webp",
      "/assets/products/gallery/din-rail-energy-meter-2.webp",
      "/assets/products/gallery/din-rail-energy-meter-3.webp",
    ],
  },
  {
    slug: "d52-2068-energy-meter",
    name: "D52-2068 Smart Digital Meter",
    shortName: "D52-2068",
    category: "Energy Meter",
    parentCategory: "Energy Meter",
    series: "Energy Meter",
    application: "6-in-1 AC energy monitoring",
    image: "/assets/products/gallery/d52-2068-energy-meter-1.webp",
    summary: "6-in-1 DIN rail smart digital meter for AC voltage, current, power, energy, frequency and power factor.",
    description:
      "The TPKELE D52-2068 is a 6-in-1 DIN rail smart digital energy meter that displays voltage, current, active power, energy, frequency and power factor on a single multi-color screen. Designed for home distribution boxes, control cabinets and equipment power monitoring, it offers clear real-time readout of AC circuits. Note: this is a measurement and monitoring meter only — it does not provide overload or short-circuit protection.",
    specs: [
      "6-in-1 display: W, kWh, V, Hz, A, PF",
      "35mm DIN rail mounting",
      "Multi-color digital display",
      "RESET button for setting / energy reset",
    ],
    seoKeywords: [
      "D52-2068",
      "smart digital meter",
      "6 in 1 energy meter",
      "DIN rail power meter",
      "AC voltage current power meter",
      "kWh frequency power factor meter",
      "energy meter manufacturer",
    ],
    gallery: [
      "/assets/products/gallery/d52-2068-energy-meter-1.webp",
      "/assets/products/gallery/d52-2068-energy-meter-2.webp",
      "/assets/products/gallery/d52-2068-energy-meter-3.webp",
      "/assets/products/gallery/d52-2068-energy-meter-4.webp",
    ],
    technicalSpecs: [
      { label: "Model", value: "D52-2068" },
      { label: "Product Name", value: "6-in-1 DIN Rail Smart Digital Energy Meter" },
      { label: "Main Functions", value: "Voltage, Current, Active Power, Energy, Frequency, Power Factor" },
      { label: "Displayed Values", value: "W, kWh, V, Hz, A, PF" },
      { label: "Rated / Measuring Voltage", value: "AC 40–300V / AC 80–300V (typical range)" },
      { label: "Current Measuring Range", value: "0–100A typical (built-in or external CT depending on version)" },
      { label: "Active Power Range", value: "0–30,000W typical" },
      { label: "Energy Range", value: "0–99,999kWh (cumulative active energy)" },
      { label: "Frequency Range", value: "45–65Hz (50/60Hz AC systems)" },
      { label: "Power Factor Range", value: "0.00–1.00 PF" },
      { label: "Mounting Method", value: "35mm DIN Rail" },
      { label: "Display Type", value: "Multi-color digital display" },
      { label: "Reset Function", value: "RESET button (setting / energy reset by version)" },
      { label: "Application", value: "Home distribution box, control cabinet, energy monitoring, equipment power monitoring" },
      { label: "Important Note", value: "Meter only — not a circuit breaker; no overload or short-circuit protection" },
    ],
  },
  {
    slug: "dds-series-energy-meter",
    name: "DDS Series Digital Energy Meter (DDS662 / DDS667 / DDS668)",
    shortName: "DDS Series",
    category: "Energy Meter",
    parentCategory: "Energy Meter",
    series: "Energy Meter",
    application: "Single-phase energy metering",
    image: "/assets/products/gallery/dds-series-energy-meter-1.webp",
    summary: "Single-phase 2-wire DIN rail digital energy meters in three feature tiers — DDS662, DDS667 and DDS668.",
    description:
      "The TPKELE DDS series is a family of single-phase 2-wire DIN rail digital energy meters available in three feature tiers. DDS662 covers core metering (LCD display, energy, voltage, power and current). DDS667 adds backlight, temporary power mode, manual switching, zero reset and frequency detection. DDS668 is the full-feature model, adding power factor display. All three mount on standard 35mm DIN rail and support universal AC 230V / 110V, 50/60Hz systems — select the model and voltage version that matches your project.",
    specs: [
      "Three feature tiers: DDS662 / DDS667 / DDS668",
      "Single-phase 2-wire, AC 230V / 110V universal, 50/60Hz",
      "35mm DIN rail mounting",
      "LCD digital display with up to power-factor readout (DDS668)",
    ],
    seoKeywords: [
      "DDS662",
      "DDS667",
      "DDS668",
      "DDS series energy meter",
      "single phase DIN rail energy meter",
      "single phase 2 wire kWh meter",
      "digital energy meter manufacturer",
    ],
    gallery: [
      "/assets/products/gallery/dds-series-energy-meter-1.webp",
      "/assets/products/gallery/dds-series-energy-meter-2.webp",
      "/assets/products/gallery/dds-series-energy-meter-3.webp",
      "/assets/products/gallery/dds-series-energy-meter-4.webp",
    ],
    specMatrices: [
      {
        title: "Feature Comparison",
        headers: ["Function", "DDS662", "DDS667", "DDS668", "Notes"],
        rows: [
          ["LCD Display", "✓", "✓", "✓", "Digital display screen"],
          ["Energy Metering", "✓", "✓", "✓", "kWh measurement"],
          ["Voltage Measurement", "✓", "✓", "✓", "AC voltage monitoring"],
          ["Power Measurement", "✓", "✓", "✓", "Active power display"],
          ["Current Measurement", "✓", "✓", "✓", "Current display"],
          ["Backlight Function", "—", "✓", "✓", "Backlight display available"],
          ["Temporary Power Mode", "—", "✓", "✓", "Temporary power mode supported"],
          ["Manual Switching", "—", "✓", "✓", "Manual display switching"],
          ["Zero Reset", "—", "✓", "✓", "Energy reset function"],
          ["Frequency Detection", "—", "✓", "✓", "Frequency display"],
          ["Power Factor", "—", "—", "✓", "PF display function"],
        ],
      },
      {
        title: "Dimensions & Installation Data",
        headers: ["Item", "Specification", "Description"],
        rows: [
          ["Product Front Width", "36 mm", "Front view width"],
          ["Side Top Width", "45 mm", "Side profile top width"],
          ["Product Height", "78 mm", "Front view height"],
          ["Side Height", "66 mm", "Side profile height"],
          ["DIN Rail Mounting", "35 mm", "Standard DIN rail mounting"],
          ["Product Type", "Single Phase 2 Wire Digital Energy Meter", "DIN rail energy meter"],
        ],
      },
      {
        title: "Product Voltage Parameters",
        headers: ["Model", "Rated Voltage", "Frequency", "Voltage Type", "Applicable System", "Remark"],
        rows: [
          ["DDS662", "AC 230V / 110V", "50Hz / 60Hz", "Voltage Universal", "Single Phase 2 Wire", "Universal voltage version"],
          ["DDS667", "AC 230V or AC 110V", "50Hz / 60Hz", "Model-dependent", "Single Phase 2 Wire", "Select voltage version before order"],
          ["DDS668", "AC 230V or AC 110V", "50Hz / 60Hz", "Model-dependent", "Single Phase 2 Wire", "Enhanced display functions"],
        ],
        note: "Ordering notes: 1) Confirm model (DDS662 / DDS667 / DDS668) before ordering. 2) Confirm rated voltage version: AC 230V, AC 110V, or universal voltage version. 3) Confirm whether backlight, zero reset, frequency detection and power factor display are required.",
      },
    ],
  },
  {
    slug: "qy2p-display-meter",
    name: "QY2P Display Meter Series (QY2P-E / QY2P-UID / QY2P-UIDY)",
    shortName: "QY2P Series",
    category: "Energy Meter",
    parentCategory: "Energy Meter",
    series: "Energy Meter",
    application: "DIN rail multifunction display metering",
    image: "/assets/products/gallery/qy2p-display-meter-1.webp",
    summary: "DIN rail LED / LCD display meters with 0.5% accuracy and color screen — available in LED (QY2P-E) and advanced LCD (QY2P-UID / QY2P-UIDY) versions.",
    description:
      "The TPKELE QY2P series is a family of DIN rail display meters with 0.5% measurement accuracy and a color screen. QY2P-E is the LED display version, showing current, voltage, power, power factor and energy. QY2P-UID and QY2P-UIDY are the advanced LCD display versions for current, voltage and energy monitoring. All models mount on standard 35mm DIN rail for distribution boards and control cabinets. Confirm the display type and required measurements when ordering.",
    specs: [
      "0.5% measurement accuracy with color screen",
      "LED (QY2P-E) and LCD (QY2P-UID / QY2P-UIDY) display versions",
      "Measures current, voltage, power, power factor and energy (by model)",
      "35mm DIN rail mounting",
    ],
    seoKeywords: [
      "QY2P",
      "QY2P-E",
      "QY2P-UID",
      "QY2P-UIDY",
      "DIN rail display meter",
      "LED LCD multifunction meter",
      "0.5% accuracy power meter",
      "energy meter manufacturer",
    ],
    gallery: [
      "/assets/products/gallery/qy2p-display-meter-1.webp",
      "/assets/products/gallery/qy2p-display-meter-2.webp",
      "/assets/products/gallery/qy2p-display-meter-3.webp",
      "/assets/products/gallery/qy2p-display-meter-4.webp",
      "/assets/products/gallery/qy2p-display-meter-5.webp",
    ],
    specMatrices: [
      {
        title: "Model Comparison",
        headers: ["Model", "Display Type", "Features", "Measurements"],
        rows: [
          ["QY2P-E", "LED Display Meter", "LED display, 0.5% accuracy, color screen", "Current, Voltage, Power, Power Factor, Energy"],
          ["QY2P-UID", "LCD Display Meter (Advanced)", "LCD display, 0.5% accuracy, color screen", "Current, Voltage, Energy"],
          ["QY2P-UIDY", "LCD Display Meter (Advanced)", "LCD display, 0.5% accuracy, color screen", "Current, Voltage, Energy"],
        ],
        note: "Confirm display type (LED / LCD) and required measurements before ordering.",
      },
    ],
  },
  {
    slug: "add-single-phase-energy-meter",
    name: "ADD Single Phase DIN Rail Energy Meter",
    shortName: "ADD Meter",
    category: "Energy Meter",
    parentCategory: "Energy Meter",
    series: "Energy Meter",
    application: "Single-phase energy metering",
    image: "/assets/products/gallery/add-meter-1.webp",
    summary: "Slim 18mm single-phase DIN rail energy meter, 230V 5(60)A, 1600 imp/kWh, with digital LCD display in multiple face styles.",
    description:
      "The TPKELE ADD single-phase DIN rail energy meter is a slim 18mm modular meter for single-phase energy metering and power consumption monitoring. Rated 230V AC, 5(60)A with a 1600 imp/kWh pulse constant, it mounts on standard 35mm DIN rail and fits standard modular panels and distribution boxes. A digital LCD numeric display is available in multiple face styles (black / gray / blue), making it a universally compatible, standard-size metering module for residential and commercial distribution boards.",
    specs: [
      "Slim 18mm single-module body",
      "230V AC, 5(60)A, 50/60Hz",
      "1600 imp/kWh pulse constant",
      "Digital LCD display, multiple face styles",
    ],
    seoKeywords: [
      "ADD energy meter",
      "single phase DIN rail energy meter",
      "230V 5(60)A energy meter",
      "1600 imp/kWh kWh meter",
      "18mm slim energy meter",
      "modular DIN rail kWh meter",
      "energy meter manufacturer",
    ],
    gallery: [
      "/assets/products/gallery/add-meter-1.webp",
      "/assets/products/gallery/add-meter-2.webp",
      "/assets/products/gallery/add-meter-3.webp",
      "/assets/products/gallery/add-meter-4.webp",
      "/assets/products/gallery/add-meter-5.webp",
    ],
    technicalSpecs: [
      { label: "Product Type", value: "Single Phase DIN Rail Energy Meter" },
      { label: "Rated Voltage", value: "230V AC" },
      { label: "Current Rating", value: "5(60)A (base current 5A, max current 60A)" },
      { label: "Frequency", value: "50/60Hz" },
      { label: "Pulse Constant", value: "1600 imp/kWh" },
      { label: "Display Type", value: "Digital LCD / numeric display (black / gray / blue face styles)" },
      { label: "Mounting Method", value: "35mm DIN rail mounting" },
      { label: "Meter Width", value: "18mm (slim single-module body)" },
      { label: "Meter Height", value: "91mm" },
      { label: "Meter Depth", value: "50mm" },
      { label: "Body / Side Height", value: "46mm" },
      { label: "Compatibility", value: "Standard modular panel / distribution box installation" },
      { label: "Application", value: "Single-phase energy metering and power consumption monitoring, indoor panel use" },
    ],
  },
  {
    slug: "ddr-din-rail-meter",
    name: "DDR Multifunction DIN Rail Meter Series",
    shortName: "DDR Series",
    category: "Energy Meter",
    parentCategory: "Energy Meter",
    series: "Energy Meter",
    application: "DIN rail voltage / current / frequency monitoring",
    image: "/assets/products/gallery/ddr-meter-1.webp",
    summary: "Slim 18mm DIN rail digital meters for voltage, current and frequency monitoring — five display configurations from single-parameter to multi-parameter.",
    description:
      "The TPKELE DDR series is a family of slim 18mm DIN rail digital meters for monitoring voltage, current and frequency in low-voltage panels. Five display configurations are available — from a single-parameter voltage or current meter up to a combined voltage + current + frequency multi-parameter display and a 3-channel current meter. With AC 80–500V measurement range, 1% accuracy, IP20 protection and flame-retardant housing, the DDR series mounts on standard 35mm DIN rail to save panel space in distribution boards and control cabinets.",
    specs: [
      "Five display configurations (voltage / current / frequency, single to multi-parameter)",
      "AC 80–500V measurement range, 1% accuracy",
      "Slim 18mm DIN rail body, IP20 protection",
      "Flame-retardant housing, ≥15,000 hours electrical life",
    ],
    seoKeywords: [
      "DDR meter",
      "DIN rail voltage meter",
      "DIN rail current meter",
      "DIN rail frequency meter",
      "multifunction panel meter",
      "digital voltage current meter",
      "energy meter manufacturer",
    ],
    gallery: [
      "/assets/products/gallery/ddr-meter-1.webp",
      "/assets/products/gallery/ddr-meter-2.webp",
      "/assets/products/gallery/ddr-meter-3.webp",
      "/assets/products/gallery/ddr-meter-4.webp",
      "/assets/products/gallery/ddr-meter-5.webp",
      "/assets/products/gallery/ddr-meter-6.webp",
      "/assets/products/gallery/ddr-meter-7.webp",
    ],
    specMatrices: [
      {
        title: "Product Types",
        headers: ["Type No.", "Display Category", "Channels", "Notes"],
        rows: [
          ["Type 1", "1 CH Voltage + 1 CH Current + 1 CH Frequency Meter", "3 CH", "Multi-parameter display"],
          ["Type 2", "3 CH Current Meter", "3 CH", "Three-channel current monitoring"],
          ["Type 3", "1 CH Voltage + 1 CH Current Meter", "2 CH", "Dual-parameter display"],
          ["Type 4", "1 CH Current Meter", "1 CH", "Single current display"],
          ["Type 5", "1 CH Voltage Meter", "1 CH", "Single voltage display"],
        ],
        note: "Confirm the display configuration (Type 1–5) and required parameters before ordering.",
      },
      {
        title: "Dimensions & Electrical Parameters",
        headers: ["Item", "Specification"],
        rows: [
          ["Front Height", "81 mm"],
          ["Front Width", "18 mm"],
          ["Overall Depth", "68 mm"],
          ["Body Width (Top)", "45 mm"],
          ["Side / Overall Height", "66 mm"],
          ["DIN Rail Slot Width", "35 mm"],
          ["Terminal for Wiring", "L+N / 3L+3N"],
          ["Measurement Voltage Range", "AC 80V–500V"],
          ["Measuring Accuracy", "1%"],
          ["Measuring Rate", ">200 ms / time"],
          ["Protection Degree", "IP20"],
          ["Electrical Life", "≥15,000 hours"],
          ["Mounting", "DIN rail"],
          ["Air Relative Humidity", "1–80% (no condensation)"],
          ["Working Temperature", "-5℃ to +40℃ (daily average ≤35℃)"],
        ],
      },
    ],
  },
  // RCBO
  {
    slug: "1pn-rcbo",
    name: "1P+N 18mm RCBO 6kA — Type A / AC, 1–40A",
    shortName: "RCBO 1P+N 18mm",
    category: "RCBO",
    parentCategory: "RCBO",
    series: "TPK L6-40 Series",
    application: "Residential & commercial switchboards, one RCBO per final circuit",
    image: "/assets/products/rcbo-1pn-18mm/rcbo-1pn-18mm-front.webp",
    summary: "Single-module 1P+N RCBO combining 30mA earth leakage and B/C curve overcurrent protection, 6kA breaking capacity.",
    description:
      "The TPKELE TPK L6-40 is a 1P+N double-break RCBO that fits earth leakage, overload and short-circuit protection into one 18mm DIN-rail module. Rated 1A–40A at 230V AC with 6kA breaking capacity and 100% service breaking, it is available in B or C curve with 10 / 30 / 50 / 100 mA sensitivity in Type A or Type AC — built to IEC/EN 61009-1 and AS/NZS 61009.1 for one-RCBO-per-circuit switchboards in Australia, New Zealand and global 230V markets.",
    specs: [
      "Poles: 1P+N double break, 18mm single module",
      "Rated current: 1A – 40A",
      "Rated voltage: 230V AC",
      "Breaking capacity: 6kA, Ics = 100% Icn",
      "Residual sensitivity: 10 / 30 / 50 / 100 mA",
      "Residual current type: Type A / Type AC",
      "Trip curve: B / C, thermal-magnetic",
      "Contact position indicator window",
      "Terminal capacity: 1–10 mm², IP20 terminals",
      "Operating temperature: -30°C to +70°C",
      "Standards: IEC/EN 61009-1, AS/NZS 61009.1",
    ],
    seoKeywords: [
      "1P+N RCBO",
      "18mm RCBO",
      "single module RCBO",
      "RCBO 6kA",
      "Type A RCBO",
      "30mA RCBO",
      "RCBO Australia",
      "RCBO New Zealand",
      "IEC 61009-1 RCBO",
      "AS/NZS 61009.1 RCBO",
      "RCBO manufacturer",
    ],
    gallery: [
      "/assets/products/rcbo-1pn-18mm/rcbo-1pn-18mm-front.webp",
      "/assets/products/rcbo-1pn-18mm/rcbo-1pn-18mm-side.webp",
      "/assets/products/rcbo-1pn-18mm/rcbo-1pn-18mm-dimensions.webp",
      "/assets/products/rcbo-1pn-18mm/rcbo-1pn-18mm-back.webp",
    ],
    technicalSpecs: [
      { label: "Product Model", value: "TPK L6-40" },
      { label: "Product Type", value: "RCBO — Residual Current Circuit Breaker with Overcurrent Protection" },
      { label: "Poles", value: "1P+N" },
      { label: "Frame Rated Current", value: "40A" },
      { label: "Rated Current (In)", value: "1, 2, 3, 4, 6, 10, 16, 20, 25, 32, 40A" },
      { label: "Rated Operational Voltage (Ue)", value: "230V AC" },
      { label: "Rated Residual Operating Current (IΔn)", value: "10 / 30 / 50 / 100 mA" },
      { label: "Residual Current Type", value: "Type A / Type AC" },
      { label: "Tripping Curve", value: "B, C" },
      { label: "Trip Mechanism", value: "Thermal-Magnetic" },
      { label: "Rated Short-Circuit Breaking Capacity (Icn)", value: "6kA" },
      { label: "Service Breaking Capacity (Ics)", value: "6kA (100% of Icn)" },
      { label: "Rated Insulation Voltage (Ui)", value: "500V" },
      { label: "Rated Impulse Withstand Voltage (Uimp)", value: "4kV" },
      { label: "Degree of Protection — Enclosure", value: "IP40" },
      { label: "Degree of Protection — Terminals", value: "IP20" },
      { label: "Terminal Capacity", value: "1–10 mm²" },
      { label: "Operating Temperature", value: "-30°C to +70°C" },
      { label: "Installation Altitude", value: "≤ 2000 m" },
      { label: "Pollution Degree", value: "3" },
      { label: "Installation Category", value: "Category III" },
      { label: "Mounting Method", value: "35mm DIN Rail" },
      { label: "Dimensions (W × H × D)", value: "18 × 82 × 71.6 mm" },
      { label: "Weight", value: "118 g" },
      { label: "Standards", value: "IEC/EN 61009-1, AS/NZS 61009.1" },
    ],
    certIecDescription: "IEC/EN 61009-1, AS/NZS 61009.1",
    relatedReading: [
      {
        title: "Australia & New Zealand RCBO selection guide",
        href: "/blog/rcbo-australia-new-zealand-selection-guide",
        description:
          "How to read 30mA sensitivity, Type A vs Type AC, 6kA breaking capacity and AS/NZS 61009.1 compliance checks for AU/NZ switchboards.",
      },
    ],
  },
  // Smart Wi-Fi Circuit Breakers
  {
    slug: "wifi-smart-mcb-1p",
    name: "18mm Wi-Fi Smart Circuit Breaker",
    shortName: "Smart MCB 18mm",
    category: "MCB",
    parentCategory: "MCB",
    subCategorySlug: "smart-circuit-breaker",
    series: "Smart Wi-Fi Series",
    application: "Residential smart homes, compact lighting control, remote switching",
    image: "/assets/products/smart-mcb-18mm.webp",
    summary: "Ultra-compact 18mm smart MCB with WiFi remote control, real-time monitoring, and programmable protection.",
    description: "The most compact smart circuit breaker in TPKELE's IoT lineup. At just 18mm wide, it fits standard DIN rails while delivering full remote control, real-time voltage/current/power monitoring, and programmable protection settings via the Tuya Smart app. Ideal for residential smart home retrofits where space is limited.",
    specs: [
      "Dimensions: 18×84×68mm",
      "Rated Voltage: AC 220V / 110V, 50/60Hz",
      "Current Setting: 1–63A (app configurable)",
      "WiFi Control: Tuya Smart ecosystem",
      "Real-time Monitoring: Voltage, Current, Power, Energy (kWh)",
      "Protection: Overvoltage (130-300V), Undervoltage (75-210V), Overcurrent, Overload",
      "Timer Functions: 15 programmable groups",
      "Energy Metering: 0–9999 kWh display",
      "IP Rating: IP30",
      "Relay Type: Single relay",
      "Electrical Life: 10,000 cycles"
    ],
    seoKeywords: [
      "18mm smart circuit breaker",
      "compact WiFi MCB",
      "single module smart breaker",
      "WiFi MCB 18mm",
      "ultra-slim smart MCB",
      "Tuya smart breaker",
      "smart home circuit breaker",
      "IoT MCB compact"
    ],
    gallery: [
      "/assets/products/smart-mcb-18mm.webp",
      "/assets/products/wifi-smart-mcb-1p/wifi-smart-mcb-1p-front-view.webp",
      "/assets/products/wifi-smart-mcb-1p/wifi-smart-mcb-1p-side-view.webp",
      "/assets/products/wifi-smart-mcb-1p/wifi-smart-mcb-1p-installation.webp",
      "/assets/products/smart-mcb-app.webp"
    ],
  },
  {
    slug: "wifi-smart-mcb-2p",
    name: "2P Wi-Fi Smart Circuit Breaker",
    shortName: "Smart MCB 2P",
    category: "MCB",
    parentCategory: "MCB",
    subCategorySlug: "smart-circuit-breaker",
    series: "Smart Wi-Fi Series",
    application: "Commercial buildings, office lighting control, distribution monitoring",
    image: "/assets/products/smart-mcb-2p.webp",
    summary: "Dual-pole smart MCB with single/dual relay options, WiFi control, and real-time electrical parameter monitoring.",
    description: "TPKELE 2P Smart Wi-Fi MCB combines dual-pole switching with IoT connectivity. Available in single-relay or dual-relay configurations, it supports 220V/400V systems and delivers the same remote control, monitoring, and protection features in a 36mm form factor. Perfect for commercial distribution panels and office building automation.",
    specs: [
      "Dimensions: 36×84×68mm",
      "Rated Voltage: AC 220V / 110V, 50/60Hz",
      "Poles: 2P (Single relay / Dual relay options)",
      "Current Setting: 1–63A (app configurable)",
      "WiFi Control: Tuya Smart ecosystem",
      "Real-time Monitoring: Voltage, Current, Power, Energy (kWh)",
      "Protection: Overvoltage (130-300V), Undervoltage (75-210V), Overcurrent, Overload, Delay",
      "Timer Functions: 15 programmable groups",
      "Energy Metering: 0–9999 kWh display",
      "IP Rating: IP30",
      "Relay Type: Single or Dual relay",
      "Electrical Life: 10,000 cycles"
    ],
    seoKeywords: [
      "2P smart circuit breaker",
      "dual pole WiFi MCB",
      "2P IoT circuit breaker",
      "smart MCB 2 pole",
      "WiFi MCB 400V",
      "commercial smart circuit breaker",
      "2P remote control MCB",
      "Tuya 2P breaker"
    ],
    gallery: [
      "/assets/products/smart-mcb-2p.webp",
      "/assets/products/wifi-smart-mcb-2p/wifi-smart-mcb-2p-front-view.webp",
      "/assets/products/wifi-smart-mcb-2p/wifi-smart-mcb-2p-terminal-view.webp",
      "/assets/products/wifi-smart-mcb-2p/wifi-smart-mcb-2p-installation.webp",
      "/assets/products/wifi-smart-mcb-2p/wifi-smart-mcb-2p-dimensions.webp",
      "/assets/products/smart-mcb-app.webp"
    ],
  },
  {
    slug: "wifi-earthleakage-mcb",
    name: "Wi-Fi Smart Earth Leakage Circuit Breaker",
    shortName: "Smart ELCB",
    category: "MCB",
    parentCategory: "MCB",
    subCategorySlug: "smart-circuit-breaker",
    series: "Smart Wi-Fi Series",
    application: "Residential bathrooms, commercial kitchens, wet location monitoring",
    image: "/assets/products/smart-mcb-leakage.webp",
    summary: "Smart earth leakage circuit breaker with real-time leakage current monitoring, temperature protection, and remote control.",
    description: "TPKELE's first smart earth leakage circuit breaker integrates residual current detection with IoT control. Monitor leakage current in real time via app, receive instant alerts, and remotely trip or reset the device. Temperature protection adds an extra layer of safety. Ideal for wet locations, residential bathrooms, and commercial kitchens requiring both leakage monitoring and remote management.",
    specs: [
      "Dimensions: 36×85×65mm",
      "Rated Voltage: AC 220V / 110V, 50/60Hz",
      "Poles: 2P (WiFi 2P Smart Earth Leakage Circuit Breaker)",
      "Current Setting: 1–63A (app configurable)",
      "Leakage Monitoring: 10–99mA range (display in app)",
      "WiFi Control: Tuya Smart ecosystem",
      "Real-time Monitoring: Voltage, Current, Power, Energy, Leakage Current",
      "Protection: Overvoltage (130-300V), Undervoltage (75-210V), Overcurrent, Overload, Earth Leakage, Temperature",
      "Timer Functions: 15 programmable groups",
      "Energy Metering: 0–9999 kWh display",
      "IP Rating: IP30",
      "Electrical Life: 10,000 cycles",
      "Special Features: Leakage current display, Temperature monitoring"
    ],
    seoKeywords: [
      "smart earth leakage circuit breaker",
      "WiFi ELCB",
      "IoT RCCB",
      "smart leakage protection",
      "WiFi residual current breaker",
      "remote control ELCB",
      "smart RCD manufacturer",
      "leakage monitoring breaker",
      "Tuya ELCB"
    ],
    gallery: [
      "/assets/products/smart-mcb-leakage.webp",
      "/assets/products/wifi-earthleakage-mcb/wifi-earthleakage-mcb-front-view.webp",
      "/assets/products/wifi-earthleakage-mcb/wifi-earthleakage-mcb-side-view.webp",
      "/assets/products/wifi-earthleakage-mcb/wifi-earthleakage-mcb-terminal-view.webp",
      "/assets/products/wifi-earthleakage-mcb/wifi-earthleakage-mcb-dimensions.webp",
      "/assets/products/smart-mcb-app.webp"
    ],
  },
  {
    slug: "dc-mccb",
    name: "DC MCCB PVM3 Series",
    shortName: "DC MCCB",
    category: "MCCB",
    parentCategory: "MCCB",
    series: "PVM3",
    application: "Solar PV, BESS and DC distribution main breaker",
    image: "/assets/products/gallery/dc-mccb-1.webp",
    summary: "PVM3 DC molded case circuit breaker, 250A–800A, up to 1500V DC.",
    description:
      "TPKELE PVM3 DC MCCB is a molded case circuit breaker for high-current DC circuits, with 250A to 800A frame sizes, 1000V / 1250V / 1500V DC working voltage options and 20kA breaking capacity. It provides overload and short-circuit protection and isolation, and protects PV modules from dangerous reverse DC current.",
    specs: [
      "250A–800A frames: 250H / 320H / 400H / 630H / 800H",
      "1000V / 1250V / 1500V DC working voltage options",
      "Icu = Ics = 20kA, total breaking time 20ms",
      "Zero-arc design, arcing distance ≥50mm",
      "Isolation function, protects PV modules from reverse DC current",
    ],
    seoKeywords: ["DC MCCB", "PVM3 MCCB", "1500V DC MCCB", "solar DC molded case circuit breaker", "PV MCCB 800A", "DC MCCB 250A"],
    certIecDescription: "Designed to IEC 60947-1 and IEC 60947-2 (GB/T 14048)",
    gallery: [
      "/assets/products/gallery/dc-mccb-1.webp",
      "/assets/products/gallery/dc-mccb-2.webp",
      "/assets/products/gallery/dc-mccb-3.webp",
    ],
    technicalSpecs: [
      { label: "Frame Size", value: "250 / 320 / 400 / 630 / 800 A" },
      { label: "Rated Working Voltage Ue", value: "1000V / 1250V / 1500V DC" },
      { label: "Breaking Capacity Icu / Ics", value: "20 kA / 20 kA" },
      { label: "Standard", value: "IEC 60947-1, IEC 60947-2" },
    ],
    specMatrices: [
      {
        title: "PVM3 DC MCCB Model Selection",
        headers: ["Model", "PVM3-250H", "PVM3-320H", "PVM3-400H", "PVM3-630H", "PVM3-800H"],
        rows: [
          ["Frame current Inm (A)", "250", "320", "400", "630", "800"],
          ["Rated current In (A)", "125, 140, 160, 180, 200, 225, 250", "280, 315, 320", "315, 350, 400", "400, 500, 630", "630, 700, 800"],
          ["Poles", "2P / 3P", "2P / 3P", "4P", "4P", "4P"],
          ["Rated working voltage Ue (V DC)", "1000 (2P) / 1250 (3P) / 1500 (3P)", "1000 (2P) / 1250 (3P) / 1500 (3P)", "1000 / 1250 / 1500", "1000 / 1250 / 1500", "1000 / 1250 / 1500"],
          ["Rated insulation voltage Ui (V)", "1000 (2P) / 1500 (3P)", "1000 (2P) / 1500 (3P)", "1500", "1500", "1500"],
          ["Overall dimensions L×W×H (mm)", "180×76×126 (2P) / 180×107×126 (3P)", "180×76×126 (2P) / 180×107×126 (3P)", "258×200×107", "280×280×115.5", "280×280×115.5"],
        ],
        note: "Please state the required system voltage, pole count and rated current when requesting a quotation.",
      },
      {
        title: "PVM3 DC MCCB Common Parameters",
        headers: ["Parameter", "Value"],
        rows: [
          ["Standard", "IEC 60947-1, IEC 60947-2 (GB/T 14048.1, GB/T 14048.2)"],
          ["Rated impulse withstand voltage Uimp", "12 kV"],
          ["Extreme short-circuit breaking capacity Icu", "20 kA"],
          ["Running short-circuit breaking capacity Ics", "20 kA"],
          ["Transient action value", "10 In"],
          ["Total breaking time", "20 ms"],
          ["Mechanical life", "10,000 operations"],
          ["Electrical life", "2,000 operations"],
          ["Isolation function", "Yes"],
          ["Arcing distance", "≥50 mm (zero arc, with arcing cover)"],
          ["Allowable ambient temperature", "-40°C to +70°C"],
          ["Degree of protection", "IP20"],
          ["Wiring mode", "Incoming line on top, load on bottom"],
          ["Installation", "Fixed type, plug-in type"],
          ["Accessories", "Auxiliary contact, alarm contact, shunt release, undervoltage release, electric operation"],
        ],
      },
      {
        title: "Safe Installation Clearance",
        headers: ["Type", "L (mm)", "A — no cover (mm)", "A — with arcing cover (mm)", "B (mm)", "C (mm)", "E — no cover (mm)", "E — with arcing cover (mm)"],
        rows: [
          ["PVM3-250H / 320H", "40", "50", "30", "25", "25", "50", "60"],
          ["PVM3-400H", "40", "50", "30", "25", "25", "50", "60"],
          ["PVM3-630H", "70", "100", "30", "25", "25", "100", "60"],
          ["PVM3-800H", "70", "100", "30", "25", "25", "100", "60"],
        ],
        note: "L = distance between adjacent breakers; A = clearance above and C = clearance to the side when mounted in an enclosure; B = clearance below; E = clearance below the terminals, with or without the zero-arc cover fitted. Confirm against the panel drawing for your specific frame and accessory combination before fabrication.",
      },
      {
        title: "Release Type & Accessory Codes",
        headers: ["Accessory Code", "Accessory", "250H / 320H (2P, 3P)", "400H–800H (4P)"],
        rows: [
          ["200 / 300", "Without inner accessory", "—", "—"],
          ["208 / 308", "Alarm contact", "Yes", "Yes"],
          ["210 / 310", "Shunt release", "Yes", "Yes"],
          ["220 / 320", "Auxiliary contact (1NO1NC)", "Yes", "—"],
          ["220 / 320", "Auxiliary contact (2NO2NC)", "—", "Yes"],
          ["230 / 330", "Undervoltage release", "Yes", "Yes"],
          ["240 / 340", "Shunt release + auxiliary contact (1NO1NC)", "Yes", "—"],
          ["240 / 340", "Shunt release + auxiliary contact (2NO2NC)", "—", "Yes"],
          ["250 / 350", "Shunt release + undervoltage release", "Yes", "Yes"],
          ["260 / 360", "Group 2 auxiliary contact (2NO2NC)", "Yes", "—"],
          ["260 / 360", "Group 2 auxiliary contact (4NO4NC)", "—", "Yes"],
          ["270 / 370", "Undervoltage release + auxiliary contact (1NO1NC)", "Yes", "—"],
          ["270 / 370", "Undervoltage release + auxiliary contact (2NO2NC)", "—", "Yes"],
          ["218 / 318", "Shunt release + alarm contact", "Yes", "Yes"],
          ["238 / 338", "Undervoltage release + alarm contact", "Yes", "Yes"],
          ["248 / 348", "Shunt release + auxiliary contact + alarm contact", "Yes", "Yes"],
          ["278 / 378", "Group 2 auxiliary contact + undervoltage release + alarm contact", "Yes", "Yes"],
        ],
        note: "Accessory availability and pole combinations vary by frame size. Please confirm the exact code with your order — state frame size, pole count and required accessory function in the inquiry.",
      },
    ],
    diagrams: [
      {
        src: "/assets/products/dc-mccb/trip-curve-dc.webp",
        alt: "PVM3DC-H DC MCCB action characteristic (trip) curve",
        caption: "PVM3DC-H action characteristic curve — DC trip time vs. rated current (×In)",
      },
      {
        src: "/assets/products/dc-mccb/trip-curve-ac.webp",
        alt: "PVM3-H AC MCCB action characteristic (trip) curve",
        caption: "PVM3-H action characteristic curve — AC trip time vs. rated current (×In), for reference on the shared PVM3 platform",
      },
      {
        src: "/assets/products/dc-mccb/installation-clearance-1.webp",
        alt: "PVM3 DC MCCB installation clearance diagram showing L, A, B and C dimensions",
        caption: "Side-by-side spacing (L) and enclosure clearance (A, B, C) — see the Safe Installation Clearance table above for values",
      },
      {
        src: "/assets/products/dc-mccb/installation-clearance-2.webp",
        alt: "PVM3 DC MCCB terminal clearance diagram showing E dimension with and without insulated links and cable terminals",
        caption: "Terminal clearance (E): 1 — no insulated link, 2 — insulated link, 3 — cable terminal",
      },
    ],
  },
];

export const categories: Array<"All Products" | ProductCategory> = [
  "All Products",
  "MCB",
  "MCCB",
  "RCBO",
  "SPD",
  "Voltage Protector",
  "ATS",
  "Combiner Box",
  "Energy Meter",
];

export const categorySlugMap: Record<ProductCategory, string> = {
  MCB: "mcb",
  MCCB: "mccb",
  RCBO: "rcbo",
  SPD: "spd",
  ATS: "ats",
  "Combiner Box": "combiner-box",
  "Voltage Protector": "voltage-protector",
  "Energy Meter": "energy-meter",
};

export const categoryBySlug: Record<string, ProductCategory> = Object.fromEntries(
  Object.entries(categorySlugMap).map(([k, v]) => [v, k as ProductCategory]),
) as Record<string, ProductCategory>;

export type CategoryContent = {
  hero: string;
  intro: string;
  bullets: string[];
  faq: Array<{ q: string; a: string }>;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  applications?: string[];
  buyerPersona?: string;
};

export const categoryContent: Record<ProductCategory, CategoryContent> = {
  MCB: {
    hero: "MCB Manufacturer — AC & DC Miniature Circuit Breakers",
    intro:
      "TPKELE manufactures AC and DC miniature circuit breakers for low voltage distribution boards, photovoltaic strings and battery energy storage. Our DZ47 / DZ47Z series cover 1P–4P pole configurations, 6A–63A current ratings and B / C / D trip curves, with breaking capacities up to 10kA. AC models are designed to IEC 60898-1; DC models follow IEC 60947-2. Trusted by solar EPCs, electrical distributors and panel builders across Europe, the Middle East, Southeast Asia and South America.",
    bullets: [
      "AC MCB & DC MCB series for distribution and solar / BESS applications",
      "1P / 2P / 3P / 4P pole configurations, 6A–63A rated currents",
      "B / C / D trip curves, 6kA / 10kA breaking capacity",
      "Tested to IEC 60898-1 (AC) / IEC 60947-2 (DC), CE & RoHS compliant",
      "OEM logo, color housing and packaging customization",
      "Stable lead time and container-load supply for distributors",
    ],
    applications: ["Residential & commercial distribution boards", "Solar PV string protection (DC MCB)", "Battery energy storage systems (BESS)", "Industrial panel building", "Infrastructure & data center distribution"],
    buyerPersona: "Specified by panel builders, solar EPCs and electrical distributors looking for IEC-compliant DC and AC circuit breakers with reliable lead times and OEM flexibility.",
    faq: [
      { q: "What is the difference between AC MCB and DC MCB?", a: "AC MCBs are designed for alternating current circuits — the AC zero-crossing helps extinguish arcs naturally. DC MCBs handle direct current with no zero-crossing, requiring specialized arc-quenching contact structures and magnets. Solar PV strings, batteries and DC bus systems must use DC MCBs rated for the system Uoc." },
      { q: "What system voltages do your DC MCBs cover?", a: "Standard DC MCBs cover up to 1000V DC; for utility-scale PV we offer up to 1500V DC versions using 3P / 4P series configuration." },
      { q: "Which curve should I choose — B, C or D?", a: "B curve (3–5 In) for resistive loads, C curve (5–10 In) for general-purpose distribution and mixed loads, D curve (10–20 In) for inductive loads with high inrush currents like motors and transformers." },
      { q: "Do you support OEM branding for MCBs?", a: "Yes — logo printing, custom housing color, dedicated packaging and private-label catalogs are supported for distributor and brand-owner programs." },
      { q: "Do your MCBs carry CE certification?", a: "Yes, TPKELE MCBs are CE & RoHS compliant. AC models are tested per IEC 60898-1; DC models per IEC 60947-2. Test reports are available for project tenders and customs documentation." },
      { q: "How do I coordinate MCB with SPD and voltage protector in a distribution board?", a: "Standard protection layout from upstream to downstream: (1) Main incomer AC MCB (80A–125A), (2) AC SPD Type 2 at incoming supply for surge protection, (3) Branch AC MCBs (6A–63A) for each circuit, (4) Voltage protectors on sensitive circuits downstream of branch MCBs. This sequence provides short-circuit protection (MCB), transient surge protection (SPD) and sustained voltage quality protection (voltage protector). For circuit-level earth leakage protection, use RCBOs instead of MCBs. View our AC SPD and voltage protector series." },
      { q: "What is the difference between AC MCB breaking capacity 6kA and 10kA?", a: "Breaking capacity (Icn or Icu) is the maximum short-circuit current the MCB can safely interrupt. 6kA breaking capacity is standard for residential and light commercial distribution where fault current is limited by upstream impedance. 10kA is specified for commercial, industrial and high-rise buildings where higher fault currents are possible. Check the prospective short-circuit current (Isc) at the point of installation — the MCB breaking capacity must exceed Isc. When in doubt, 10kA models provide greater safety margin with minimal cost difference." },
      { q: "Can I use AC MCB for DC circuits or DC MCB for AC circuits?", a: "No — AC and DC circuit breakers are not interchangeable. AC MCBs rely on the AC current zero-crossing to extinguish arcs; DC has no zero-crossing and requires specialized arc-quenching chambers and magnetic blowout. Using an AC MCB on a DC circuit (such as solar PV or battery) can result in failure to interrupt fault current, arc flash and fire hazard. Always use DC-rated MCBs for DC applications. AC MCBs are suitable only for AC distribution. View our DC MCB series for solar and battery applications." },
    ],
    seoTitle: "MCB Manufacturer | AC & DC Miniature Circuit Breakers",
    seoDescription:
      "TPKELE manufactures AC MCB and DC MCB, 1P–4P, 6A–63A, B/C/D curves. AC models: IEC 60898-1; DC models: IEC 60947-2. CE & RoHS compliant. OEM and project supply for distributors and solar EPCs.",
    seoKeywords: ["MCB manufacturer", "miniature circuit breaker", "AC MCB", "DC MCB", "DZ47", "solar circuit breaker", "PV DC breaker", "low voltage breaker", "IEC 60898 MCB"],
  },
  MCCB: {
    hero: "DC MCCB Manufacturer — Molded Case Circuit Breakers for Solar & DC Systems",
    intro:
      "TPKELE PVM3 DC molded case circuit breakers (MCCB) protect high-current DC circuits where miniature circuit breakers reach their limit. The series covers 250A to 800A frames with 1000V, 1250V and 1500V DC working voltage options, 20kA breaking capacity and built-in isolation. Designed to IEC 60947-1 and IEC 60947-2, they are used as PV array main breakers, battery energy storage disconnects and DC distribution incomers by solar EPCs, panel builders and distributors.",
    bullets: [
      "250A–800A frame sizes (250H / 320H / 400H / 630H / 800H)",
      "1000V / 1250V / 1500V DC working voltage options, 2P / 3P / 4P",
      "Icu = Ics = 20kA, total breaking time 20ms, zero-arc design with ≥50mm arcing distance",
      "Protects PV modules from dangerous reverse DC current, with isolation function",
      "Auxiliary, alarm, shunt release, undervoltage release and electric operation accessories",
    ],
    applications: ["PV array and combiner box main breakers", "Battery energy storage (BESS) DC disconnect", "DC distribution incomers", "Utility-scale solar plants (1500V DC)", "Telecom and industrial DC power systems"],
    buyerPersona: "Specified by solar EPCs, BESS integrators and DC panel builders who need a high-current DC breaker with a clear voltage and frame selection range.",
    faq: [
      { q: "When should I use a DC MCCB instead of a DC MCB?", a: "DC MCBs on DIN rail cover currents up to 125A. Above that, such as PV array main circuits and battery bank disconnects, a molded case breaker with a higher frame size (250A–800A) and higher breaking capacity is the usual choice." },
      { q: "What DC voltages does the PVM3 series support?", a: "Each frame is offered with 1000V, 1250V and 1500V DC working voltage options. 250H and 320H frames come in 2P and 3P versions; 400H, 630H and 800H frames are 4P." },
      { q: "What is the breaking capacity?", a: "Extreme and running short-circuit breaking capacity (Icu and Ics) is 20kA for the series, with a total breaking time of 20ms. Please confirm the value for your system voltage when requesting a quotation." },
      { q: "Which accessories are available?", a: "Auxiliary contacts, alarm contacts, shunt release, undervoltage release and electric operation. Available combinations depend on frame size and pole count, so please state your configuration in the inquiry." },
      { q: "How do the auxiliary and alarm contacts work?", a: "The auxiliary contact (terminals F11-F14, F21-F24) follows the breaker position: closed when the breaker is ON, open when it is OFF, for remote status indication. The alarm contact (terminals B11-B14) switches when the breaker trips on a fault — it stays in its normal state for a manual OFF, and changes state on a 'free trip' (automatic) opening, so it can be wired to a fault alarm separately from normal switching. Rated 220V AC, 3A." },
      { q: "How should the breaker be connected?", a: "The series is wired with the incoming line on the top terminals and the load on the bottom terminals. A protective cover must be installed before powering on." },
    ],
    seoTitle: "DC MCCB Manufacturer | 250A-800A 1500V DC Molded Case Circuit Breaker",
    seoDescription:
      "TPKELE PVM3 DC MCCB: 250A-800A, up to 1500V DC, 20kA breaking capacity, IEC 60947-2, isolation function. For solar PV, BESS and DC distribution. Request a quote.",
    seoKeywords: ["DC MCCB", "DC molded case circuit breaker", "1500V DC MCCB", "solar DC MCCB", "PV MCCB", "250A DC breaker", "800A DC breaker", "PVM3", "IEC 60947-2 MCCB"],
  },
  RCBO: {
    hero: "RCBO Manufacturer — 1P+N 18mm Residual Current Breakers with Overcurrent Protection",
    intro:
      "TPKELE RCBOs combine earth leakage protection and MCB overload / short-circuit protection in a single 18mm DIN-rail module. The TPL6-40 series is a 1P+N double-break RCBO rated 1A–40A at 230V AC with 6kA breaking capacity, B / C trip curves and 10 / 30 / 50 / 100 mA residual sensitivity in Type A or Type AC. Built to IEC 61009-1 for one-RCBO-per-circuit switchboards — the layout now standard in Australia and New Zealand — and supplied to distributors, switchboard builders and private-label brands.",
    bullets: [
      "RCD + MCB in one 18mm module — 1P+N double break",
      "1A–40A rated current, B / C trip curves, 230V AC",
      "6kA short-circuit breaking capacity, 100% service breaking (Ics = Icn)",
      "10 / 30 / 50 / 100 mA residual sensitivity, Type A or Type AC",
      "Contact position indicator, PA flame-retardant housing, IP20 terminals",
      "OEM logo, housing print and packaging for distributor programs",
    ],
    applications: ["Residential switchboards (one RCBO per circuit)", "Commercial & retail sub-boards", "Solar & battery storage AC circuits", "Wet areas, kitchens & outdoor circuits", "Switchboard builder & wholesaler stock programs"],
    buyerPersona: "Specified by electrical wholesalers, switchboard builders and private-label brand owners who need compact 1P+N RCBOs with consistent quality, full documentation and container-load supply.",
    faq: [
      { q: "What is the difference between an RCBO and an RCCB?", a: "An RCCB (RCD) only detects earth leakage and has no overcurrent protection, so it must be paired with MCBs. An RCBO combines residual current protection with thermal-magnetic overload and short-circuit protection in one device, so each circuit gets its own leakage protection and a fault on one circuit does not trip the others." },
      { q: "Type A or Type AC — which should I choose?", a: "Type AC detects sinusoidal AC residual current only. Type A also detects pulsating DC residual current produced by inverters, induction cooktops, LED drivers, variable-speed appliances and EV chargers. Type A is the safer default for modern installations and is increasingly specified in Australia, New Zealand and Europe." },
      { q: "Which residual current rating do I need?", a: "30 mA is the standard for personal protection on final circuits. 10 mA is used for special locations such as medical areas and some wet locations. 50 mA and 100 mA are used for equipment or fire protection where personal protection is provided elsewhere." },
      { q: "Can the RCBO be used on EV charger circuits?", a: "Yes — a Type A RCBO can protect an EV charger circuit when the charger has built-in 6 mA DC residual current detection (RDC-DD). Where the charger has no DC detection, a Type B device or a Type A RCBO plus a separate RDC-DD is required." },
      { q: "Do you support OEM branding for RCBOs?", a: "Yes — logo printing, housing print, rating labels and packaging can be customised for distributor and brand-owner programs. Samples are available within 5–10 working days." },
    ],
    seoTitle: "RCBO Manufacturer | 1P+N 18mm RCBO Type A 6kA",
    seoDescription:
      "TPKELE RCBO: 1P+N 18mm single-module RCBO, 1-40A, 6kA, B/C curve, 10/30/50/100mA, Type A & Type AC, IEC 61009-1. OEM supply for AU/NZ and global distributors.",
    seoKeywords: ["RCBO manufacturer", "RCBO", "1P+N RCBO", "18mm RCBO", "single module RCBO", "Type A RCBO", "30mA RCBO", "6kA RCBO", "IEC 61009-1 RCBO", "residual current breaker with overcurrent protection", "OEM RCBO"],
  },
  SPD: {
    hero: "SPD Manufacturer — AC & DC Solar Surge Protective Devices",
    intro:
      "TPKELE manufactures surge protective devices (SPDs) for AC distribution and DC photovoltaic systems. Our AC SPD line covers Type 1, Type 2 and Type 1+2 protection per IEC 61643-11; our DC SPD line is built specifically for solar with 600V / 1000V / 1500V Uoc options per IEC 61643-31. Pluggable modules, visual status windows and remote signaling make field service simple — the trusted surge protector choice for solar EPCs, panel builders and distributors.",
    bullets: [
      "AC SPD: Type 1 / Type 2 / Type 1+2 for distribution panels and inverters",
      "DC SPD: 600V / 1000V / 1500V Uoc for PV combiner boxes and inverter DC sides",
      "20kA / 40kA Imax (8/20μs), Up ≤ 1.5 kV",
      "Pluggable cartridges for fast field replacement",
      "Visual status window + optional remote signaling contact",
      "IEC 61643-11 / 61643-31, CE & RoHS compliant",
    ],
    applications: ["PV combiner boxes & inverter DC inputs", "AC distribution boards & sub-panels", "Telecom cabinets & base stations", "Inverter AC outputs & grid-tie connections", "Industrial process & data-center power"],
    buyerPersona: "Specified by solar EPCs, distributors and OEM buyers needing IEC-compliant AC and PV DC surge protectors with visible status indication and pluggable serviceability.",
    faq: [
      { q: "Which SPD type do I need for a solar PV project?", a: "PV strings, combiner boxes and inverter DC inputs require DC SPDs sized to the system Uoc (600V / 1000V / 1500V). Inverter AC outputs and the building distribution board use AC SPDs (Type 2 standard, Type 1+2 if direct lightning exposure is possible)." },
      { q: "What is the difference between Type 1, Type 2 and Type 1+2?", a: "Type 1 (10/350μs waveform) protects against direct lightning strike currents at the building entrance. Type 2 (8/20μs) protects against induced surges downstream. Type 1+2 combines both — used at the main distribution board when a lightning protection system is present." },
      { q: "What does Imax / In mean on an SPD?", a: "In = nominal discharge current (8/20μs) the SPD can pass repeatedly. Imax = maximum one-shot discharge current the SPD can handle once and remain functional. Choose In/Imax based on lightning exposure and project specs." },
      { q: "Are TPKELE SPDs CE certified?", a: "Yes — all SPDs comply with CE, RoHS and IEC 61643-11 (AC) / IEC 61643-31 (DC PV). Test reports are available for project files and tenders." },
      { q: "Do you offer SPDs with remote signaling output?", a: "Yes, selected models include a remote signaling contact (NO/NC) so you can monitor SPD health from a central control system or BMS." },
      { q: "What is the difference between Type 1 SPD and Type 2 SPD?", a: "Type 1 SPDs (tested with 10/350μs impulse current) protect against direct lightning strike currents at the building service entrance. Type 2 SPDs (tested with 8/20μs waveform) protect against induced surges downstream in distribution boards. Type 1 is installed at the main incomer where lightning protection system (LPS) is present; Type 2 is standard for sub-distribution boards. Type 1+2 combined devices are available where both functions are needed at one location. Read our complete guide: Type 1 SPD vs Type 2 SPD selection." },
      { q: "Do I need both AC SPD and DC SPD for a solar PV system?", a: "Yes — solar systems require protection on both DC and AC sides. Install DC SPDs rated for the system open-circuit voltage (Uoc) on PV strings, combiner box outputs and inverter DC inputs. Install AC SPDs (Type 2) on the inverter AC output and the building AC distribution board. DC SPDs must be sized to the PV system voltage (600V / 1000V / 1500V Uoc); AC SPDs are selected based on the AC system voltage (230V / 400V). View our DC SPD series for PV applications." },
      { q: "How do I know when an SPD needs replacement?", a: "TPKELE SPDs feature a visual status window (typically green = OK, red = replace) for quick field inspection. Selected models include a remote signaling contact (dry contact, NO/NC configurable) that changes state when the SPD fails, allowing integration with BMS or alarm systems. Pluggable cartridge designs allow fast field replacement without removing the base unit. Check SPD status during routine maintenance — a failed SPD offers no protection and should be replaced immediately." },
    ],
    seoTitle: "SPD Manufacturer | AC SPD & DC PV Surge Protector",
    seoDescription:
      "TPKELE manufactures AC SPD (Type 1/2/1+2) and DC PV SPD (600V/1000V/1500V). IEC 61643-11/31, CE & RoHS, pluggable modules. OEM-ready solar surge protection.",
    seoKeywords: ["SPD manufacturer", "surge protective device", "AC SPD", "DC SPD", "PV SPD", "solar surge protector", "Type 1 SPD", "Type 2 SPD", "1500V DC SPD", "lightning surge protection"],
  },
  ATS: {
    hero: "ATS Manufacturer — Dual Power Automatic Transfer Switches",
    intro:
      "TPKELE automatic transfer switches (ATS) move critical loads between the mains and a generator, inverter or backup source automatically. Four series cover every backup-power need: ATS-ST and ATS-W2R are PC-class (load-level) switches with fast ~50ms changeover, while STQ1 and STQ2 are CB-class motorized switches with mechanical interlock and ~2s transfer. All are rated 63A at 110V / 220V AC in 2P / 3P / 4P configurations, with auto/manual operation and flame-retardant housings — built for installers, panel builders and project distributors.",
    bullets: [
      "Four series — ATS-ST, ATS-W2R (PC class) and STQ1, STQ2 (CB class)",
      "Fast PC-class changeover ≤0.05s (50ms) on ATS-ST / ATS-W2R",
      "CB-class motorized transfer with mechanical interlock on STQ1 / STQ2",
      "2P / 3P / 4P, 63A rated current, 110V / 220V AC",
      "Auto & Manual operation, 2 inputs / 1 output",
      "Built-in over/under-voltage protection on ATS-W2R",
    ],
    applications: ["Hospitals & life-safety circuits", "Data centers & telecom rooms", "Process industry continuity loads", "Commercial buildings with diesel generator backup", "Solar / hybrid systems with grid-failover"],
    buyerPersona: "Specified by installers, panel builders and electrical distributors needing reliable automatic source transfer with proven quality and competitive lead time.",
    faq: [
      { q: "What is the difference between the PC-class and CB-class series?", a: "ATS-ST and ATS-W2R are PC-class (load-level) switches with very fast ~50ms changeover, ideal where short transfer time matters. STQ1 and STQ2 are CB-class motorized switches with mechanical interlock and a robust ~2s transfer, preferred for fire protection, elevators and heavy industrial backup." },
      { q: "What current ratings and poles are available?", a: "All four series are rated 63A (operating range 6A–63A) and offered in 2P, 3P and 4P (ATS-ST is 2P / 4P). Contact us with your line current and phase configuration and we will confirm the right model." },
      { q: "Can the ATS work with diesel generators?", a: "Yes — all series are designed for mains plus generator, inverter or backup setups. They transfer loads automatically when the primary source fails and return when mains is restored." },
      { q: "Do you support OEM branding for ATS?", a: "Yes — logo, label and packaging customization are available for distributor and brand-owner programs." },
      { q: "What is an automatic transfer switch (ATS) and how does it work?", a: "An automatic transfer switch (ATS) monitors the primary power source (typically mains) and automatically transfers critical loads to a secondary source (generator, inverter or backup mains) when the primary fails. When primary power is restored and stable, the ATS transfers the load back. TPKELE offers PC-class ATS (fast ~50ms transfer, solid-state or contactor) and CB-class ATS (motorized ~2s transfer with mechanical interlock). All models include auto and manual operation modes." },
      { q: "PC-class vs CB-class ATS — which should I choose?", a: "PC-class ATS (load-make-before-break, ATS-ST and ATS-W2R series) offers very fast transfer time (~50ms), ideal for IT equipment, medical devices and loads sensitive to interruption. CB-class ATS (circuit-breaker + mechanical interlock, STQ1 and STQ2 series) uses motorized switching with robust mechanical interlock (~2s transfer), preferred for fire protection systems, elevators, pumps and heavy industrial loads where a short interruption is acceptable. Both classes provide reliable source transfer; select based on load sensitivity and code requirements." },
      { q: "Can an ATS work with solar inverters and battery backup?", a: "Yes — TPKELE ATS models support dual-source configurations including mains + solar inverter, mains + battery inverter, or mains + diesel generator. The ATS treats any stable AC source as valid input. For solar + battery hybrid systems, the inverter output becomes the backup source, and the ATS transfers loads when the grid fails. Combine with voltage protectors downstream to protect loads from voltage transients during transfer." },
      { q: "What size ATS do I need for my application?", a: "TPKELE ATS models are rated 63A working current (operating range 6A–63A). Calculate the total load current of circuits you want to transfer: sum the MCB ratings or measure actual load current. For three-phase loads, account for all three phases. Select 2P ATS for single-phase loads (1 live + neutral), 3P for three-phase delta loads (3 lines, no neutral), or 4P for three-phase wye loads (3 lines + neutral). For loads above 63A, parallel multiple ATS units or consider a contactor-based transfer panel — contact us for project-specific recommendations." },
    ],
    seoTitle: "ATS Manufacturer | 2P 3P 4P Transfer Switch",
    seoDescription:
      "TPKELE ATS: PC class (~50ms) & CB class (motorized). 2P/3P/4P, 63A, 110V/220V. For mains-to-generator backup. CE & RoHS. OEM-ready.",
    seoKeywords: ["ATS manufacturer", "dual power automatic transfer switch", "ATS-ST", "ATS-W2R", "STQ1", "STQ2", "PC class ATS", "CB class ATS", "generator transfer switch", "2P 3P 4P ATS", "DIN rail ATS"],
  },
  "Combiner Box": {
    hero: "PV Combiner Box Manufacturer — Plastic & Metal IP65 Series",
    intro:
      "TPKELE PV combiner boxes aggregate solar strings and integrate DC fuses, DC SPDs and DC MCBs in IP65-rated enclosures. Plastic and metal series cover residential rooftop to utility-scale PV with 2 / 4 / 6 / 8 / 12 / 16 string inputs, 1000V / 1500V DC ratings and configurable single-line diagrams. Trusted by solar EPCs, panel builders and distributors across Europe, the Middle East, Southeast Asia and South America.",
    bullets: [
      "Plastic and metal PV combiner box series — IP65 outdoor rated",
      "2 / 4 / 6 / 8 / 12 / 16 string input configurations",
      "1000V DC / 1500V DC system options",
      "Pre-assembled with DC fuse, DC SPD and DC MCB",
      "Custom single-line diagram, labelling and wiring layout",
      "IEC 61439 design, CE & RoHS compliant",
    ],
    applications: ["Utility-scale solar farms & ground-mount PV", "Commercial & industrial rooftop solar", "Residential PV systems", "Solar + storage hybrid plants", "Off-grid and mini-grid solar projects"],
    buyerPersona: "Specified by solar EPCs, project developers and OEM buyers needing IP65-rated combiner boxes with configurable string inputs, certified protection components and project-specific drawings.",
    faq: [
      { q: "Plastic or metal PV combiner box — which should I choose?", a: "Plastic boxes are lighter, fully corrosion-resistant and ideal for residential and rooftop projects. Metal boxes provide greater mechanical strength, better heat dissipation and are common in utility-scale and harsh environments such as desert or coastal sites." },
      { q: "What system voltage do your combiner boxes support?", a: "We offer both 1000V DC and 1500V DC versions. 1500V DC is now the standard for utility-scale PV due to lower BOS cost." },
      { q: "Do combiner boxes include SPD, fuse and breaker?", a: "Yes — our standard combiner boxes are pre-assembled with DC fuses, DC SPDs and DC MCBs. The configuration is adjusted to match your project single-line diagram." },
      { q: "Do you provide drawings and BOMs for tender packs?", a: "Yes — we provide CAD drawings, single-line diagrams and BOMs in formats suitable for EPC tender submissions and engineer review." },
      { q: "What is the standard IP rating?", a: "Standard rating is IP65 for outdoor use. IP66 is available on request for harsh environments." },
      { q: "What is a PV combiner box and why is it needed?", a: "A PV combiner box aggregates multiple solar strings (parallel-connected) into a single DC output that feeds the inverter or charge controller. Each string input has a DC fuse (or DC MCB) for overcurrent protection, a blocking diode (optional, less common in modern designs), and shared DC SPD for surge protection. The combiner box simplifies wiring, reduces cable runs, and provides a single inspection and isolation point — required by most electrical codes for arrays with more than 2 strings." },
      { q: "How many strings can a PV combiner box handle?", a: "TPKELE PV combiner boxes are available in 2 / 4 / 6 / 8 / 12 / 16 string input configurations. Residential rooftop systems (2–10kW) typically use 2–4 string boxes. Commercial rooftop (10–100kW) uses 4–8 string boxes. Utility-scale ground-mount (MW+) uses 12–16 string boxes per inverter or array section. The string count depends on the array layout, inverter MPPT inputs and site design — consult your electrical drawings or contact us with your project single-line diagram for configuration recommendations." },
      { q: "Do I need DC MCB, DC fuse, or both inside the combiner box?", a: "Standard practice: install either DC fuses or DC MCBs per string input (one per string positive conductor), not both. DC fuses (gPV-rated, 10A–25A) are lower cost and common in utility-scale projects; they require manual replacement after a fault. DC MCBs are resettable and preferred for rooftop and commercial projects where access is easier. Some designs combine a string fuse per input with a single main DC MCB on the combiner output for additional protection. All TPKELE combiner boxes include DC SPD on the output for surge protection — view our DC SPD series." },
    ],
    seoTitle: "PV Combiner Box Manufacturer | Solar 1500V DC",
    seoDescription:
      "TPKELE PV combiner box: plastic & metal IP65, 2-16 string inputs, 1000V/1500V DC. Pre-assembled DC fuse/SPD/MCB. CE, IEC 61439. Custom drawings for EPCs.",
    seoKeywords: ["PV combiner box", "solar combiner box", "DC combiner box", "string combiner", "1500V combiner box", "photovoltaic combiner manufacturer", "IP65 combiner box", "solar combiner OEM"],
  },
  "Voltage Protector": {
    hero: "Voltage Protector Manufacturer — Over & Under Voltage Protection",
    intro:
      "TPKELE voltage protectors monitor incoming mains and disconnect downstream loads when voltage moves outside safe limits. Single-phase and three-phase versions on DIN rail protect refrigerators, AC, motors and electronics from over-voltage, under-voltage and phase-loss events — a high-volume product for distributors serving regions with unstable grid quality.",
    bullets: [
      "Automatic disconnect on over-voltage and under-voltage",
      "Adjustable trip thresholds and reconnection delay",
      "Single-phase and three-phase DIN-rail models",
      "Phase-loss / phase-sequence detection (3-phase)",
      "Auto reset after voltage returns to safe range",
      "CE & RoHS compliant — high-volume distributor stock item",
    ],
    applications: ["Residential consumer units in unstable grid markets", "Light commercial & retail circuits", "Motor and pump protection", "Sensitive appliances (refrigeration, HVAC)", "Emerging-market distributor stock programs"],
    buyerPersona: "Specified by electrical distributors and importers in markets with unstable mains, panel builders and contractors looking for reliable consumer-protection devices with stable supply.",
    faq: [
      { q: "When should I install a voltage protector?", a: "Voltage protectors are recommended where mains supply is unstable or where sensitive appliances such as refrigerators, air conditioners and electronics need protection from voltage fluctuations and phase-loss events." },
      { q: "Does the voltage protector reset automatically?", a: "Yes — after the mains voltage returns to a safe range, the protector reconnects the load automatically after a configurable delay (typically 5–600s)." },
      { q: "Do you have three-phase models with phase-loss protection?", a: "Yes, our three-phase voltage protectors detect over/under voltage on each phase, plus phase loss and phase sequence errors." },
      { q: "What is the difference between a voltage protector and a surge protector (SPD)?", a: "A voltage protector disconnects loads during sustained over-voltage or under-voltage conditions (lasting seconds or longer), protecting against brownouts and voltage swings. A surge protector (SPD) handles transient voltage spikes lasting microseconds, caused by lightning or switching events. For complete protection, use both: install an AC SPD at the distribution board incoming supply and voltage protectors on sensitive branch circuits. View our AC SPD series for surge protection solutions." },
      { q: "What is the difference between a voltage protector and a voltage stabilizer?", a: "A voltage protector disconnects the load when voltage goes outside safe limits and reconnects automatically when voltage returns to normal. A voltage stabilizer (AVR) continuously adjusts output voltage to maintain a steady level regardless of input fluctuations. Voltage protectors are simpler, more affordable and suitable where occasional disconnection is acceptable; stabilizers are used where continuous operation is critical (medical equipment, data centers)." },
      { q: "Can I use a voltage protector with an automatic transfer switch (ATS)?", a: "Yes — voltage protectors are commonly installed downstream of an ATS to protect loads from voltage fluctuations when switching between mains and generator supply. This combination is standard in hospitals, data centers and commercial buildings with backup power. Install the voltage protector after the ATS output, and size it to match the load current. View our ATS series for dual-power backup solutions." },
      { q: "Do I need a voltage protector if I already have an AC MCB installed?", a: "Yes — AC MCBs provide overload and short-circuit protection but do not protect against sustained over-voltage or under-voltage. In markets with unstable grid quality, the standard protection layout combines an upstream AC MCB (for overcurrent faults) with a downstream voltage protector (for voltage quality). This protects sensitive appliances like refrigerators, air conditioners and electronics from both fault currents and voltage swings." },
      { q: "What voltage levels trigger the voltage protector to disconnect?", a: "TPKELE voltage protectors have adjustable trip thresholds. For 230V single-phase systems, typical factory settings are: over-voltage trip at 260V–275V, under-voltage trip at 170V–200V. Three-phase 400V models have corresponding thresholds for each phase. The reconnection delay (typically 30s–300s, adjustable 5s–600s) prevents repeated cycling during short-duration voltage instability." },
    ],
    seoTitle: "Voltage Protector Manufacturer | Over Under Voltage",
    seoDescription:
      "TPKELE voltage protector: single & three-phase DIN-rail over/under voltage protection. Adjustable thresholds, auto reset, CE & RoHS. Distributor program.",
    seoKeywords: ["voltage protector", "over voltage protection", "under voltage protection", "phase loss protection", "DIN rail voltage protector", "automatic voltage protector"],
  },
  "Energy Meter": {
    hero: "DIN Rail Energy Meter Manufacturer — Single & Three Phase",
    intro:
      "TPKELE DIN-rail energy meters measure active energy, current and voltage for distribution boards, sub-metering and tenant billing. Single-phase and three-phase versions, direct-connect and CT-operated, pulse and RS485 Modbus output — designed to integrate with energy management platforms, BMS and SCADA systems for industrial and commercial customers.",
    bullets: [
      "Single-phase and three-phase DIN-rail energy meters",
      "Direct-connect and CT-operated versions",
      "Class 1 active energy accuracy",
      "Pulse output and RS485 Modbus communication options",
      "Clear LCD digital display",
      "IEC 62052 / 62053, CE & RoHS compliant",
    ],
    applications: ["Sub-metering in commercial buildings", "Tenant billing & landlord metering", "Industrial energy management & ISO 50001", "Solar self-consumption and feed-in metering", "Data center power monitoring"],
    buyerPersona: "Specified by energy management integrators, panel builders, building contractors and distributors needing certified DIN-rail meters with Modbus integration.",
    faq: [
      { q: "Do you support Modbus communication?", a: "Yes — RS485 Modbus output is available on selected models for integration with energy management, BMS and SCADA systems." },
      { q: "What accuracy class do the meters offer?", a: "Standard meters meet Class 1 active energy accuracy per IEC 62053-21, suitable for sub-metering and operational monitoring. Higher accuracy available on request." },
      { q: "Direct connect vs CT operated — which do I need?", a: "Direct-connect meters wire the load current directly through the meter, suitable up to 80A or 100A. CT-operated meters use external current transformers for higher currents (typically 100A and above)." },
      { q: "Are the meters MID approved?", a: "Standard models are CE / IEC certified. MID-approved versions for billing applications in the EU are available on request." },
      { q: "What is a DIN rail energy meter used for?", a: "DIN rail energy meters measure active energy (kWh), current, voltage and power in distribution boards and sub-panels. Common applications include tenant sub-metering and billing, industrial energy monitoring for ISO 50001 compliance, solar self-consumption tracking, and building energy management integration. Single-phase meters suit residential and light commercial circuits; three-phase meters suit industrial equipment and commercial buildings." },
      { q: "What is the difference between direct-connect and CT-operated energy meters?", a: "Direct-connect energy meters wire the load current directly through the meter terminals, suitable for circuits up to 80A or 100A depending on the model. CT-operated (current transformer) meters measure current indirectly via external CTs, suitable for higher currents (100A and above) or where the meter must be installed remotely from the load conductor. CT meters are common in three-phase industrial panels and main distribution boards." },
      { q: "Do TPKELE energy meters support Modbus communication?", a: "Yes — selected TPKELE energy meter models include RS485 Modbus RTU output for integration with building management systems (BMS), SCADA platforms and energy management software. Modbus allows centralized monitoring of multiple meters, alarm notification and data logging. Pulse output versions (S0 pulse) are also available for simple event counting. Contact us with your project communication requirements for model recommendations." },
      { q: "What accuracy class do I need for an energy meter?", a: "TPKELE DIN rail energy meters meet Class 1 active energy accuracy per IEC 62053-21, suitable for operational sub-metering, tenant billing (where local regulations permit) and energy monitoring. For legal billing applications in the EU, MID-approved meters are required — we offer MID versions on request. For ISO 50001 energy management and consumption analysis, Class 1 accuracy is sufficient." },
      { q: "Can I use an energy meter to monitor solar PV generation?", a: "Yes — DIN rail energy meters are commonly installed on the AC output of solar inverters to measure generation (kWh produced) and on the grid connection point to measure import/export. For complete solar monitoring, combine energy meters with voltage protectors (to protect the inverter from grid voltage swings) and AC MCBs (for overcurrent protection). RS485 Modbus meters allow integration with solar monitoring platforms." },
    ],
    seoTitle: "DIN Rail Energy Meter | Modbus kWh Meter",
    seoDescription:
      "TPKELE DIN-rail energy meter: single & three phase, direct & CT, pulse & RS485 Modbus, Class 1 accuracy, IEC 62052/62053, CE & RoHS. For sub-metering.",
    seoKeywords: ["DIN rail energy meter", "energy meter manufacturer", "kWh meter", "Modbus energy meter", "RS485 power meter", "sub-meter", "three phase energy meter"],
  },
};

export const productMenu: ProductMenuGroup[] = [
  {
    label: "MCB",
    href: "/products/category/mcb",
    children: [
      { label: "AC MCB", href: "/products/category/mcb/ac-mcb" },
      { label: "DC MCB", href: "/products/category/mcb/dc-mcb" },
      { label: "Smart Wi-Fi MCB", href: "/products/smart-circuit-breaker" },
    ],
  },
  {
    label: "MCCB",
    href: "/products/category/mccb",
    children: [{ label: "DC MCCB", href: "/products/dc-mccb" }],
  },
  {
    label: "RCBO",
    href: "/products/category/rcbo",
    children: [
      { label: "RCBO for Australia & NZ", href: "/products/rcbo-australia-new-zealand" },
      { label: "1P+N 18mm RCBO", href: "/products/1pn-rcbo" },
    ],
  },
  {
    label: "SPD",
    href: "/products/category/spd",
    children: [
      { label: "AC SPD", href: "/products/category/spd/ac-spd" },
      { label: "DC SPD (Solar)", href: "/products/category/spd/dc-spd" },
    ],
  },
  {
    label: "ATS",
    href: "/products/category/ats",
    children: [
      { label: "ATS-ST", href: "/products/category/ats?series=ATS-ST%20Series" },
      { label: "ATS-W2R", href: "/products/category/ats?series=ATS-W2R%20Series" },
      { label: "STQ1", href: "/products/category/ats?series=STQ1%20Series" },
      { label: "STQ2", href: "/products/category/ats?series=STQ2%20Series" },
    ],
  },
  {
    label: "Combiner Box",
    href: "/products/distribution-boxes",
    children: [
      { label: "PV Combiner Box", href: "/products/combiner-box" },
      { label: "DC Distribution Box", href: "/products/dc-distribution-box" },
      { label: "AC Distribution Box", href: "/products/ac-distribution-box" },
      { label: "ATS Panel", href: "/products/ats-panel" },
      { label: "Enclosures", href: "/products/enclosures" },
    ],
  },
  {
    label: "Voltage Protector",
    href: "/products/category/voltage-protector",
    children: [{ label: "Voltage Protector", href: "/products/category/voltage-protector" }],
  },
  {
    label: "Energy Meter",
    href: "/products/category/energy-meter",
    children: [{ label: "Energy Meter", href: "/products/category/energy-meter" }],
  },
];

export type ProductMegaItem = { label: string; href: string; tag?: string };
export type ProductMegaColumn = {
  key: "solar" | "lv" | "smart" | "metering";
  title: string;
  subtitle: string;
  recommended?: boolean;
  cta: { label: string; href: string };
  items: ProductMegaItem[];
};

export const productMegaMenu: ProductMegaColumn[] = [
  {
    key: "solar",
    title: "Solar Projects",
    subtitle: "For EPCs & Installers",
    recommended: true,
    cta: { label: "DC MCB Landing →", href: "/products/dc-mcb" },
    items: [
      { label: "DC MCB", href: "/products/category/mcb/dc-mcb" },
      { label: "DC SPD", href: "/products/category/spd/dc-spd" },
      { label: "PV Combiner Box", href: "/products/category/combiner-box" },
    ],
  },
  {
    key: "lv",
    title: "Distribution & Backup",
    subtitle: "For Panel Builders",
    cta: { label: "AC MCB Landing →", href: "/products/ac-mcb" },
    items: [
      { label: "AC MCB", href: "/products/category/mcb/ac-mcb" },
      { label: "RCBO", href: "/products/category/rcbo" },
      { label: "AC SPD", href: "/products/category/spd/ac-spd" },
      { label: "ATS", href: "/products/category/ats" },
    ],
  },
  {
    key: "smart",
    title: "Wi-Fi Smart Series",
    subtitle: "IoT & Remote Management",
    recommended: true,
    cta: { label: "Explore Smart Series →", href: "/products/smart-circuit-breaker" },
    items: [
      { label: "18mm Smart MCB (1P)", href: "/products/wifi-smart-mcb-1p" },
      { label: "36mm Smart MCB (2P)", href: "/products/wifi-smart-mcb-2p" },
      { label: "Earth Leakage MCB", href: "/products/wifi-earthleakage-mcb" },
    ],
  },
  {
    key: "metering",
    title: "Metering & Monitoring",
    subtitle: "For Sub-metering & Tenant Billing",
    cta: { label: "Browse All →", href: "/products" },
    items: [
      { label: "Energy Meter", href: "/products/category/energy-meter" },
      { label: "Voltage Protector", href: "/products/category/voltage-protector" },
    ],
  },
];

export const applications = [
  { title: "Solar PV", icon: "PV", text: "DC MCB, DC SPD and PV combiner boxes for utility, C&I and rooftop solar." },
  { title: "Industrial", icon: "IN", text: "ATS, voltage protectors and SPDs for factory and process power." },
  { title: "Commercial", icon: "CB", text: "Distribution boards, branch protection and energy meters." },
  { title: "Data Center", icon: "DC", text: "Reliable transfer, surge protection and circuit-level safety." },
  { title: "Infrastructure", icon: "IF", text: "Municipal, telecom, rail and public-sector power systems." },
];

export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle?: string;
  seoDescription: string;
  date: string;
  image: string;
  excerpt: string;
  intent: string;
  body: BlogSection[];
  faq?: { question: string; answer: string }[];
  relatedProducts?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "smart-circuit-breaker-vs-traditional-breaker",
    title: "Smart Circuit Breaker vs Traditional Circuit Breaker: Functions, Differences & Selection Guide",
    seoTitle: "Smart Circuit Breaker vs Traditional Breaker | TPKELE",
    seoDescription:
      "Compare smart Wi-Fi switches and traditional MCBs: verified protection, remote control, energy monitoring, safety standards and practical selection criteria.",
    date: "2026-09-23",
    image: "/images/blog/smart-circuit-breaker-vs-traditional-breaker/smart-vs-traditional-hero.webp",
    excerpt: "A practical comparison of overcurrent protection, Wi-Fi switching, electrical monitoring and model-specific safety requirements—written for electrical contractors, panel builders and procurement teams.",
    intent: "Smart circuit breaker selection support",
    body: [
      {
        heading: "Why compare smart and traditional breakers?",
        paragraphs: [
          "Electrical distribution boards once relied mainly on local switching, upstream protection and manual inspection. A connected distribution design may also require scheduled operation, energy tracking and remote status visibility. These goals involve different functions: protection against electrical faults, switching a load on command, and monitoring the circuit's operating conditions.",
          "A traditional miniature circuit breaker (MCB) is chosen according to voltage, current, trip characteristic and documented short-circuit breaking capacity. A smart Wi-Fi device may include a remote switching mechanism, electronic sensing, metering or additional protective functions. However, its exact capabilities depend on the device configuration; a Wi-Fi icon or a 63 A marking alone cannot establish that it has certified overcurrent breaking performance.",
          "TPKELE offers a [Smart Wi-Fi Circuit Breaker series](/products/smart-circuit-breaker) alongside its [AC miniature circuit breaker range](/products/ac-mcb). This guide explains how to read the distinctions without assuming that every product in the smart series performs all functions.",
        ],
      },
      {
        heading: "What is a smart circuit breaker—and what is a smart switch?",
        paragraphs: [
          "In common online searches, 'smart circuit breaker' is sometimes used loosely for three electrically different devices. Separating them at the beginning prevents incorrect substitution during panel design.",
        ],
        bullets: [
          "Conventional MCB: A circuit breaker that provides documented overload and short-circuit protection. Many models have a mechanical manual operating lever and no network connection.",
          "Connected smart switch: A switching device controlled locally or over a network. It may also monitor energy or voltage; do not assume it provides MCB-level short-circuit protection unless that function is explicitly rated and documented.",
          "Protective smart device: A specific model may combine connected switching with overcurrent, voltage or residual-current protection. Confirm the exact protection type, fault rating, applicable test standard and certification for that model.",
        ],
      },
      {
        heading: "Smart circuit breaker vs traditional breaker: key differences",
        paragraphs: [
          "Compare the functions that your project actually requires rather than using 'smart' as a shorthand for superior protection.",
          "Traditional MCBs provide documented overload and short-circuit interruption. Wi-Fi smart switches offer connected switching and/or monitoring; protection must be verified separately.",
          "Remote ON/OFF, voltage and energy data, scheduling and alerts are available on selected connected versions. Network outages may affect remote commands, so local protective behavior must be confirmed for each model.",
        ],
      },
      {
        heading: "How to select the right device for your project",
        paragraphs: [
          "The selection sequence below starts from the electrical design and works toward optional smart functions. It is intended for discussions between the buyer, panel builder and qualified designer.",
        ],
        bullets: [
          "Define the power system and load: Record AC or DC, nominal and maximum voltage, frequency, phase arrangement, prospective fault current, earthing system and load category.",
          "Specify protection independently of connectivity: Determine the required overcurrent and short-circuit protection, residual-current protection and any voltage-related disconnection.",
          "Check actual device ratings: Match rated operational voltage/current, poles, terminals, conductor sizes, ambient temperature, mechanical endurance, breaking capacity where applicable.",
          "Decide which connected functions are needed: Select remote ON/OFF, voltage/current display, kWh tracking, scheduling or alerts only where they serve a real operating need.",
          "Verify safe remote-operation policy: Review who is authorized to energize a circuit remotely. Equipment serving life safety, critical processes, or personnel performing maintenance requires additional restrictions.",
          "Request model-specific evidence: Ask for the datasheet, wiring diagram, short-circuit and residual-current test details, applicable standards, destination-market documents, firmware/app specifications and installation instructions.",
        ],
      },
      {
        heading: "Practical applications in low-voltage distribution",
        paragraphs: [
          "For non-critical lighting or selected auxiliary loads, a Wi-Fi switching device can add approved scheduled operation. Maintain independently specified electrical protection and ensure that unexpected remote energization will not expose maintenance personnel to hazards.",
          "Electricians may use metering-equipped connected devices to observe operating voltage, current or kWh readings. Where the project requires revenue-grade billing accuracy, three-phase measurement or integration over RS485/Modbus, evaluate a dedicated [DIN rail energy meter](/products/din-rail-energy-meter) instead.",
          "Remote visibility may reduce unnecessary site visits, but reliability still depends on safe fault response, communications availability and a documented local service procedure. Do not design essential protection around continuous internet access.",
        ],
      },
      {
        heading: "Standards and technical evidence to check",
        paragraphs: [
          "Different IEC documents govern different protective-device categories. Do not claim conformity based only on the product name or a visible CE marking. A manufacturer's model-specific declaration, test documentation and the destination market's requirements must be reviewed together.",
          "IEC 60898-1 covers household and similar AC circuit breakers for overcurrent protection. IEC 60947-2 addresses low-voltage circuit-breaker requirements. IEC 61009-1 is relevant to RCBOs with integral overcurrent protection. IEC 61008-1 applies to RCCBs without integral overcurrent protection.",
          "Explore the [TPKELE Standards Database](/resources/standards-database) for background and use the [Market Access Advisor](/resources/market-access-advisor) to structure country-specific questions.",
        ],
      },
    ],
    faq: [
      {
        question: "Can a Wi-Fi smart switch replace an MCB?",
        answer:
          "Not automatically. Remote switching and an adjustable current setting do not establish that a smart switch has a certified short-circuit interruption rating. Use the exact device classification and supporting test documentation when deciding whether a separate MCB is required.",
      },
      {
        question: "Will the protective function still work if Wi-Fi is disconnected?",
        answer:
          "For any protective function claimed by the manufacturer, ask for its local operating behavior and test evidence in offline conditions. Internet connectivity should not be assumed to provide the circuit's essential protection; remote operation and alerts may be unavailable while disconnected.",
      },
      {
        question: "Does a 30 mA mark prove that the device is an RCBO?",
        answer:
          "No. A 30 mA residual-current marking and a test button warrant a closer look, but they do not independently establish integral overcurrent protection, device classification or the applicable certification.",
      },
      {
        question: "Is a Wi-Fi smart circuit breaker suitable for a solar PV DC string?",
        answer:
          "Only if the specific device is rated, tested and approved for the required DC voltage, polarity and prospective fault current. A 230 V AC Wi-Fi product must not be assumed suitable for PV DC applications.",
      },
      {
        question: "Can the app's kWh reading replace a billing meter?",
        answer:
          "Not without verifying the required accuracy, calibration, applicable metering requirements and local billing rules. For sub-metering or billing applications, compare the specifications of a dedicated energy meter.",
      },
    ],
    relatedProducts: ["smart-circuit-breaker", "ac-mcb", "din-rail-energy-meter"],
  },
  {
    slug: "choose-right-mcb",
    title: "How to Choose the Right MCB for Your Application",
    seoTitle: "How to Choose the Right MCB | AC & DC Selection Guide",
    seoDescription:
      "MCB selection guide: rated current, breaking capacity, B/C/D trip curve, pole count and AC vs DC differences for solar and low voltage distribution projects.",
    date: "2026-05-26",
    image: "/assets/blog/mcb-guide.webp",
    excerpt: "A practical guide to matching rated current, breaking capacity and pole configuration.",
    intent: "MCB selection support",
    body: [
      {
        heading: "Why MCB Selection Matters",
        paragraphs: [
          "A miniature circuit breaker (MCB) is the first line of overcurrent and short-circuit protection in any low voltage distribution board. Pick the wrong rating and you either get nuisance tripping that frustrates the end-user, or worse — a breaker that fails to trip during a fault and exposes downstream equipment and people to risk.",
          "This guide walks through the four parameters professional installers and panel builders evaluate every time: rated current, breaking capacity, trip curve and pole configuration. We also cover the difference between [AC MCB](/products/category/mcb/ac-mcb) and [DC MCB](/products/category/mcb/dc-mcb) — they look similar but cannot be substituted.",
        ],
      },
      {
        heading: "Step 1 — Match the Rated Current (In)",
        paragraphs: [
          "The rated current is the continuous current the MCB will carry without tripping. It must be larger than the calculated load current but smaller than the cable ampacity behind it. Standard ratings on TPKELE [AC MCBs](/products/category/mcb/ac-mcb) include 6A, 10A, 16A, 20A, 25A, 32A, 40A, 50A and 63A.",
          "A common rule for branch circuits: pick the next standard rating above the load, then verify the cable rated for that current at the install temperature.",
        ],
      },
      {
        heading: "Step 2 — Choose the Right Breaking Capacity (Icn)",
        paragraphs: [
          "Breaking capacity is the highest short-circuit current the MCB can interrupt safely. For residential and small commercial boards, 4.5 kA is usually adequate. Industrial boards close to a transformer often need 6 kA or 10 kA. Always check the prospective short-circuit current at the installation point before specifying.",
        ],
      },
      {
        heading: "Step 3 — Pick a Trip Curve (B, C, or D)",
        paragraphs: [
          "The trip curve defines how fast the magnetic element responds to fault currents above the rated value:",
        ],
        bullets: [
          "B curve (3–5x In) — resistive loads, lighting circuits, residential.",
          "C curve (5–10x In) — general purpose with mixed inductive loads (most commercial).",
          "D curve (10–20x In) — high inrush loads such as motors, transformers, X-ray equipment.",
        ],
      },
      {
        heading: "Step 4 — Get the Pole Count Right",
        paragraphs: [
          "1P for single-phase line protection, 2P when you need to switch the neutral too, 3P for three-phase three-wire systems, and 4P for three-phase plus switched neutral. For solar DC strings, 2P MCBs disconnect both the positive and negative conductors — never use a single-pole AC MCB on a DC circuit.",
        ],
      },
      {
        heading: "AC vs DC: Don't Confuse Them",
        paragraphs: [
          "DC arcs are sustained — they do not extinguish naturally at zero crossings the way AC arcs do. A [DC MCB](/products/category/mcb/dc-mcb) uses arc-quenching chambers and magnetic blow-out designed for the energy in a PV string. Substituting an AC MCB on a DC circuit is one of the most dangerous mistakes in solar installation.",
          "TPKELE DC MCBs cover up to 1500V DC for utility-scale [solar DC protection](/solar-dc-protection).",
        ],
      },
      {
        heading: "Quick Selection Checklist",
        bullets: [
          "Load current calculated and 1.25x safety factor applied.",
          "Cable ampacity ≥ MCB rating at install temperature.",
          "Short-circuit current at panel < MCB breaking capacity.",
          "Trip curve matches load type (B/C/D).",
          "Pole count matches system topology.",
          "AC or DC variant matches circuit type.",
          "Certifications (CE, IEC 60898-1) verified for tender.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I use an AC MCB on a DC solar circuit?",
        answer:
          "No. AC MCBs are not designed to interrupt DC arcs and may fail to break a fault current safely. Always use a dedicated DC MCB rated for the system voltage.",
      },
      {
        question: "What breaking capacity is enough for residential boards?",
        answer:
          "4.5 kA is generally sufficient for residential distribution boards far from the transformer. Verify the prospective short-circuit current at your specific installation point.",
      },
      {
        question: "Do I need C-curve or D-curve for a motor circuit?",
        answer:
          "D-curve handles the higher inrush of motors, transformers and welding equipment without nuisance tripping. C-curve is acceptable for small motors with soft-start drives.",
      },
    ],
    relatedProducts: ["ac-mcb-1p", "ac-mcb-3p", "dc-mcb-2p"],
  },
  {
    slug: "understanding-spd-surge",
    title: "Understanding SPD: Protection Against Surge",
    seoTitle: "Understanding SPD | Type 1 Type 2 Protection Guide",
    seoDescription:
      "How surge protective devices work, where to install Type 1/Type 2/Type 1+2 SPDs, and how to compare AC SPD vs DC SPD specs for solar & AC distribution.",
    date: "2026-05-20",
    image: "/assets/blog/spd-surge.webp",
    excerpt: "Where to install surge protection devices and how to choose levels for different systems.",
    intent: "SPD project support",
    body: [
      {
        heading: "What Is a Surge?",
        paragraphs: [
          "A surge — also called transient overvoltage — is a brief, high-amplitude voltage spike that can damage electronic equipment in milliseconds. The two main causes are direct or nearby lightning strikes and switching events on the utility grid (capacitor banks, large motor starts, fault clearing).",
          "A surge protective device ([SPD](/products/category/spd)) clamps the overvoltage to a safe level by diverting the surge current to ground, protecting downstream equipment such as PV inverters, control systems and telecom gear.",
        ],
      },
      {
        heading: "Type 1, Type 2, and Type 1+2 Explained",
        bullets: [
          "Type 1 — installed at the service entrance to handle direct lightning current (10/350µs waveform). Required where there is an external lightning protection system.",
          "Type 2 — installed in distribution panels to clamp residual surges and switching transients (8/20µs waveform). The most common SPD class.",
          "Type 1+2 — combined unit for projects that need both direct-strike capability and downstream clamping in a single device.",
        ],
      },
      {
        heading: "Where to Install SPDs",
        paragraphs: [
          "Best practice is a coordinated cascade: a Type 1 (or 1+2) at the main panel, Type 2 in sub-panels, and finer protection close to sensitive equipment. In a solar PV system, install [DC SPDs](/products/category/spd/dc-spd) in the combiner box and at the inverter DC input, plus [AC SPDs](/products/category/spd/ac-spd) on the inverter AC output and at the grid interconnect.",
          "Keep SPD lead lengths short (typically under 50 cm total loop length) — long leads add inductance that defeats the protection.",
        ],
      },
      {
        heading: "AC SPD vs DC SPD",
        paragraphs: [
          "AC SPDs are sized by Uc (maximum continuous operating voltage) — typical values are 275V for 230V AC systems and 385–440V for 400V AC three-phase. DC SPDs are sized for the maximum PV string voltage at the coldest expected temperature: 600V, 1000V or 1500V Uoc options cover most installations.",
          "DC arcs do not self-extinguish, so a DC SPD must include disconnection technology that isolates a failed varistor without sustaining an arc.",
        ],
      },
      {
        heading: "Key Specs to Compare",
        bullets: [
          "Type (1 / 2 / 1+2) — matches install location and lightning risk.",
          "Uc / Uoc — must exceed the system's maximum continuous voltage.",
          "In (nominal discharge current) — typically 20 kA for Type 2.",
          "Imax (maximum discharge current) — repeated 8/20µs withstand.",
          "Up (voltage protection level) — clamping voltage seen by the load; lower is better.",
          "Indicator window — visual end-of-life status.",
          "Certification — IEC 61643-11 (AC) / IEC 61643-31 (DC).",
        ],
      },
    ],
    faq: [
      {
        question: "Do I need an SPD if I have a lightning rod?",
        answer:
          "Yes. A lightning rod handles direct strikes to the structure, but coupled surges still propagate on the power lines. SPDs clamp those induced overvoltages before they reach equipment.",
      },
      {
        question: "How often should SPDs be replaced?",
        answer:
          "An SPD with an indicator window should be inspected during every electrical maintenance visit. Replace immediately if the indicator shows red or the unit has been exposed to a major surge event.",
      },
    ],
    relatedProducts: ["ac-spd", "dc-spd", "green-spd-series"],
  },
  {
    slug: "ats-modern-distribution",
    title: "ATS in Modern Power Distribution Systems",
    seoTitle: "ATS Guide | Transfer Switch Sizing & Backup Power",
    seoDescription:
      "How an automatic transfer switch (ATS) protects critical loads, common applications, sizing rules and the difference between ATS and manual transfer switches.",
    date: "2026-05-15",
    image: "/assets/blog/ats-system.webp",
    excerpt: "Automatic transfer switch use cases for standby power and continuity-critical facilities.",
    intent: "ATS solution inquiry",
    body: [
      {
        heading: "What an ATS Does",
        paragraphs: [
          "An automatic transfer switch ([ATS](/products/category/ats)) monitors the primary utility supply and, when it falls outside acceptable limits, transfers connected loads to a secondary source — usually a generator or alternate utility feed — within milliseconds. When utility power returns, the ATS retransfers loads back automatically.",
          "Without an ATS, transfer between sources is manual and slow, which is unacceptable for hospitals, data centers and any facility with continuity-critical loads.",
        ],
      },
      {
        heading: "Common Applications",
        bullets: [
          "Hospitals and clinics — life-safety circuits, OR/ICU equipment.",
          "Data centers and telecom — server, cooling and BMS continuity.",
          "Industrial process plants — avoid product loss from interrupted batches.",
          "Commercial buildings — fire pumps, elevators, emergency lighting.",
          "Rural and off-grid sites — utility plus diesel generator handover.",
        ],
      },
      {
        heading: "Specifying an ATS",
        paragraphs: [
          "The four core parameters: pole count (2P / 3P / 4P depending on neutral switching needs), rated current (TPKELE [ATS units](/products/category/ats) are rated 63A for branch and small-main applications), rated voltage (110V or 220V AC), and transfer time (PC-class units transfer in ~50ms; CB-class motorized units in ~2s).",
          "Mechanical and electrical life ratings tell you how many transfer cycles the unit will survive — important for facilities that test their backup weekly.",
        ],
      },
      {
        heading: "ATS vs Manual Transfer Switch",
        paragraphs: [
          "Manual transfer switches are cheaper and simpler but require an operator to physically move the handle when utility fails. They make sense for sites where downtime is tolerable. For anything with safety, financial or continuity stakes, an ATS pays for itself the first time it operates without human intervention at 3 a.m.",
        ],
      },
      {
        heading: "Sizing Tips for Generator Backup",
        bullets: [
          "Confirm the generator's continuous output rating exceeds the connected load with margin (typically 1.25x).",
          "Match the ATS rated current to the generator output, not the utility feed.",
          "If the generator is downstream of a step-down transformer, account for inrush during retransfer.",
          "Coordinate ATS settings with generator warm-up and cool-down times to avoid premature retransfer.",
        ],
      },
    ],
    relatedProducts: ["ats-st-4p", "ats-w2r-4p", "stq1-3p", "stq2-3p"],
  },
  {
    slug: "solar-combiner-box-safety",
    title: "Solar Combiner Box: The Key to PV System Safety",
    seoTitle: "PV Combiner Box Guide | DC Protection for Solar",
    seoDescription:
      "What a PV combiner box does, what's inside it, how to choose between plastic and metal enclosures, and how to specify string count, voltage class and IP rating.",
    date: "2026-05-10",
    image: "/assets/blog/combiner-box.webp",
    excerpt: "How combiner boxes simplify wiring, improve safety and protect solar branches.",
    intent: "PV combiner box quote",
    body: [
      {
        heading: "Why PV Systems Need a Combiner Box",
        paragraphs: [
          "A [PV combiner box](/products/category/combiner-box) consolidates multiple solar string outputs into a single DC trunk that feeds the inverter. Beyond simplifying field wiring, the combiner box concentrates protection — fuses, breakers, disconnects and surge protection — at one accessible point.",
          "On utility-scale farms, combiner boxes also provide string-level monitoring data so operators can detect a single underperforming string out of dozens without sending a technician up the field.",
        ],
      },
      {
        heading: "What's Inside a TPKELE Combiner Box",
        bullets: [
          "DC fuses or DC MCBs on every string for overcurrent protection.",
          "DC SPD (Type 1+2 or Type 2) for lightning and switching surges.",
          "Lockable DC isolator for safe maintenance disconnection.",
          "Surge-suppressed monitoring outputs (optional, on smart boxes).",
          "IP65 enclosure for outdoor mounting.",
        ],
      },
      {
        heading: "Choosing String Count, IP Rating and Voltage Class",
        paragraphs: [
          "Pick the string count that matches your array layout — TPKELE offers boxes for 2 to 16 string inputs. IP65 is standard for ground-mount and rooftop installations; IP66 is preferred for marine and dusty industrial environments.",
          "The voltage class must match the system's open-circuit voltage at the coldest temperature: 1000V Uoc for residential and many commercial installations, 1500V Uoc for utility-scale arrays where higher voltage reduces conductor losses.",
        ],
      },
      {
        heading: "Plastic vs Metal Enclosures",
        paragraphs: [
          "[Plastic (ABS) combiner boxes](/products/plastic-box-series) are corrosion-immune, light, easy to drill in the field, and the right choice for coastal and humid sites. [Metal enclosures](/products/products/metal-box-series) provide better mechanical protection on industrial sites and on poles where impact and vandalism are concerns.",
        ],
      },
      {
        heading: "Common Specifications",
        bullets: [
          "Residential rooftop — 2 to 4 strings, plastic, 1000V Uoc.",
          "Commercial / C&I — 4 to 8 strings, plastic or metal, 1000V or 1500V.",
          "Utility-scale — 8 to 16 strings, metal, 1500V, with monitoring.",
        ],
      },
    ],
    relatedProducts: ["plastic-box-series", "metal-box-series", "dc-spd"],
  },
  {
    slug: "energy-meter-selection",
    title: "Energy Meter Selection Guide for Industrial Use",
    seoTitle: "Energy Meter Guide | DIN Rail kWh for Sub-Metering",
    seoDescription:
      "How to choose a DIN-rail energy meter: single vs three-phase, direct vs CT connect, accuracy class, and Modbus / MID communications for industrial sub-metering.",
    date: "2026-05-05",
    image: "/assets/blog/energy-meter.webp",
    excerpt: "What to check when choosing metering, monitoring and DIN rail installation options.",
    intent: "Energy meter selection",
    body: [
      {
        heading: "Why Metering Matters in Modern Distribution",
        paragraphs: [
          "Sub-metering is no longer optional in commercial real estate, manufacturing and multi-tenant facilities. Tenants expect transparent cost allocation, and operations teams need consumption data to identify waste and verify equipment efficiency.",
          "A modern [DIN-rail energy meter](/products/category/energy-meter) replaces costly mechanical meters with compact, accurate electronic units that measure active energy, current, voltage, power factor and frequency in a 1 or 4-module form factor.",
        ],
      },
      {
        heading: "Single-Phase vs Three-Phase",
        paragraphs: [
          "Use a single-phase meter for residential apartments, retail tenant sub-metering and lighting circuits. Use a three-phase meter for HVAC plants, motor feeders, EV chargers and industrial process equipment. Always confirm the system topology — three-phase three-wire versus three-phase four-wire (with neutral) — affects meter wiring and accuracy.",
        ],
      },
      {
        heading: "Direct Connect vs CT Connect",
        paragraphs: [
          "Direct-connect meters wire the load current straight through the meter, typically up to 80A or 100A. Above that current, use a CT-connect meter with current transformers — this lets a small meter measure feeders rated 200A, 400A or higher without huge conductors crossing the meter terminals.",
        ],
      },
      {
        heading: "Accuracy Class",
        paragraphs: [
          "IEC 62052-11 specifies accuracy classes 0.5S, 1 and 2. Class 1 is adequate for cost-allocation sub-metering. Class 0.5S is required for revenue-grade and utility tariff metering, and worth the modest premium when the data is used for billing.",
        ],
      },
      {
        heading: "Communication Options",
        bullets: [
          "Modbus RTU (RS-485) — most common; integrates with BMS, PLCs and energy dashboards.",
          "Pulse output — simple kWh pulse that any logger can count.",
          "MID approval — required in EU member states for sub-tenant billing.",
          "M-Bus, KNX or LoRa — niche options for specific BMS or smart-building protocols.",
        ],
      },
    ],
    relatedProducts: ["din-rail-energy-meter"],
  },
  {
    slug: "tpkele-snec-2026",
    title: "TPKELE at SNEC 2026 Exhibition",
    seoTitle: "TPKELE at SNEC 2026 | Solar DC Protection Highlights",
    seoDescription:
      "TPKELE recap from SNEC 2026 Shanghai: 1500V DC MCBs, PV combiner boxes, DC SPD updates and customer feedback themes from Asia's largest solar exhibition.",
    date: "2026-04-25",
    image: "/assets/blog/exhibition.webp",
    excerpt: "Product updates and customer discussions from the renewable energy exhibition floor.",
    intent: "Exhibition follow-up",
    body: [
      {
        heading: "SNEC 2026 — Asia's Largest Solar Show",
        paragraphs: [
          "SNEC PV Power Expo is the largest annual gathering for the global solar industry, held every spring in Shanghai. The 2026 edition drew over 3,000 exhibitors and engineers, EPCs and distributors from 100+ countries — a critical chance for the TPKELE team to meet partners face-to-face and showcase our latest [solar DC protection](/solar-dc-protection) range.",
        ],
      },
      {
        heading: "Products We Showed",
        bullets: [
          "1500V [DC MCBs](/products/category/mcb/dc-mcb) for utility-scale string protection.",
          "Updated [DC SPD](/products/category/spd/dc-spd) range with improved indicator windows.",
          "Pre-assembled [plastic combiner boxes](/products/plastic-box-series) for 4 / 8 / 12 / 16 string inputs.",
          "Smart string-monitoring metal combiner boxes for utility EPCs.",
        ],
      },
      {
        heading: "Customer Feedback Themes",
        paragraphs: [
          "Three topics dominated booth conversations. First, EPCs in MENA and Latin America asked for shorter lead times on container loads — we are expanding warehouse capacity in response. Second, distributors increasingly request OEM logo and packaging programs to differentiate against generic imports. Third, solar developers want longer warranty windows tied to documented quality data — TPKELE is preparing extended warranty programs for verified project lots.",
        ],
      },
      {
        heading: "What's Next",
        paragraphs: [
          "Beyond SNEC we are attending Intersolar Europe and Solar Power International in 2026. If you would like a sample kit, project quotation or factory visit, [reach out via the contact form](/contact) and we will respond within one business day.",
        ],
      },
    ],
    relatedProducts: ["dc-mcb-2p", "dc-spd", "plastic-box-series"],
  },
];

export function findProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

const defaultTechnicalSpecsByCategory: Record<ProductCategory, Array<{ label: string; value: string }>> = {
  MCB: [
    { label: "Poles", value: "1P / 2P / 3P / 4P" },
    { label: "Rated Current", value: "6A, 10A, 16A, 20A, 25A, 32A, 40A, 50A, 63A" },
    { label: "Rated Voltage", value: "120V / 230V / 400V AC" },
    { label: "Breaking Capacity", value: "4.5 kA, 6 kA, 10 kA" },
    { label: "Trip Curve", value: "B, C, D" },
    { label: "Housing Material", value: "Flame-Retardant Thermoplastic" },
    { label: "Mechanical Life", value: "20,000 operations" },
    { label: "Electrical Life", value: "10,000 operations" },
    { label: "Mounting", value: "DIN-rail 35mm" },
    { label: "Conformity", value: "CE marking, RoHS compliant" },
      { label: "Standard", value: "IEC 60898-1" },
    { label: "Contact Material", value: "High-Conductivity Copper Alloy" },
  ],
  MCCB: [
    { label: "Frame Size", value: "250 / 320 / 400 / 630 / 800 A" },
    { label: "Poles", value: "2P / 3P (250H, 320H) / 4P (400H, 630H, 800H)" },
    { label: "Rated Working Voltage Ue", value: "1000V / 1250V / 1500V DC" },
    { label: "Breaking Capacity Icu / Ics", value: "20 kA / 20 kA" },
    { label: "Rated Impulse Withstand Voltage Uimp", value: "12 kV" },
    { label: "Mounting", value: "Fixed type, plug-in type" },
    { label: "Standard", value: "IEC 60947-1, IEC 60947-2" },
  ],
  RCBO: [
    { label: "Poles", value: "1P+N" },
    { label: "Rated Current", value: "1A, 2A, 3A, 4A, 6A, 10A, 16A, 20A, 25A, 32A, 40A" },
    { label: "Rated Voltage", value: "230V AC" },
    { label: "Breaking Capacity", value: "6 kA" },
    { label: "Residual Current Type", value: "Type A / Type AC" },
    { label: "Residual Sensitivity", value: "10mA, 30mA, 50mA, 100mA" },
    { label: "Trip Curve", value: "B, C" },
    { label: "Width", value: "18mm (single module)" },
    { label: "Mounting", value: "DIN-rail 35mm" },
    { label: "Conformity", value: "CE marking, RoHS compliant" },
    { label: "Standard", value: "IEC/EN 61009-1, AS/NZS 61009.1" },
  ],
  SPD: [
    { label: "Type", value: "Type 1 / Type 2 / Type 1+2" },
    { label: "Max Continuous Voltage Uc", value: "275V / 385V / 440V AC" },
    { label: "Nominal Discharge Current In", value: "20 kA (8/20μs)" },
    { label: "Max Discharge Current Imax", value: "40 kA (8/20μs)" },
    { label: "Voltage Protection Level Up", value: "≤ 1.5 kV" },
    { label: "Response Time", value: "≤ 25 ns" },
    { label: "Indicator", value: "Visual status window" },
    { label: "Mounting", value: "DIN-rail 35mm" },
    { label: "Conformity", value: "CE marking, RoHS compliant" },
      { label: "Standard", value: "IEC 61643-11" },
  ],
  ATS: [
    { label: "Utilization Class", value: "PC Class (ATS-ST / W2R) / CB Class (STQ1 / STQ2)" },
    { label: "Poles", value: "2P / 3P / 4P" },
    { label: "Rated Current", value: "63A (Operating Range 6A – 63A)" },
    { label: "Rated Voltage", value: "110V / 220V AC" },
    { label: "Frequency", value: "50 / 60 Hz" },
    { label: "Transfer Time", value: "≤ 0.05s (PC class) / ~2s (CB class)" },
    { label: "Operation", value: "Manual / Auto, mechanical interlock" },
    { label: "Mounting", value: "DIN-rail 35mm" },
    { label: "Conformity", value: "CE marking, RoHS compliant" },
  ],
  "Combiner Box": [
    { label: "Enclosure", value: "Plastic / Metal" },
    { label: "Protection Rating", value: "IP65" },
    { label: "Inputs", value: "2 / 4 / 6 / 8 / 12 / 16 strings" },
    { label: "Max DC Voltage", value: "1000V / 1500V DC" },
    { label: "Internal Components", value: "DC fuse, DC SPD, DC breaker" },
    { label: "Operating Temperature", value: "-25°C to +60°C" },
    { label: "Mounting", value: "Wall mount" },
    { label: "Conformity", value: "CE marking" },
      { label: "Standard", value: "IEC 61439" },
  ],
  "Voltage Protector": [
    { label: "Phase", value: "Single phase / Three phase" },
    { label: "Rated Voltage", value: "230V / 400V AC" },
    { label: "Over Voltage Trip", value: "Adjustable, 245V – 280V" },
    { label: "Under Voltage Trip", value: "Adjustable, 150V – 210V" },
    { label: "Reconnection Delay", value: "Adjustable, 5s – 600s" },
    { label: "Response Time", value: "< 200 ms" },
    { label: "Mounting", value: "DIN-rail 35mm" },
    { label: "Conformity", value: "CE marking, RoHS compliant" },
  ],
  "Energy Meter": [
    { label: "Phase", value: "Single phase / Three phase" },
    { label: "Rated Voltage", value: "230V / 400V AC" },
    { label: "Rated Current", value: "5(80)A direct / CT operated" },
    { label: "Accuracy Class", value: "Class 1 (active energy)" },
    { label: "Display", value: "LCD digital display" },
    { label: "Communication", value: "Pulse output / RS485 Modbus (optional)" },
    { label: "Mounting", value: "DIN-rail 35mm" },
    { label: "Conformity", value: "CE marking" },
      { label: "Standard", value: "IEC 62052/62053" },
  ],
};

export function getProductTechnicalSpecs(product: Product) {
  if (product.technicalSpecs && product.technicalSpecs.length > 0) return product.technicalSpecs;
  return defaultTechnicalSpecsByCategory[product.parentCategory] ?? [];
}

const extraKeyFeaturesByCategory: Record<ProductCategory, string[]> = {
  MCB: [
    "CE & RoHS certified – accepted in EU, UK, and global markets",
    "High-conductivity copper alloy contacts – 20,000 mechanical operations rated",
    "Flame-retardant thermoplastic housing for fire safety",
    "ISO 9001 certified manufacturing facility",
    "Stable lead time and project quantity supply support",
  ],
  MCCB: [
    "250A–800A frames with 1000V / 1250V / 1500V DC working voltage options",
    "20kA breaking capacity with zero-arc design",
    "Isolation function and protection against PV reverse current",
    "Accessories: auxiliary, alarm, shunt release, undervoltage release, electric operation",
    "ISO 9001 certified manufacturing facility",
  ],
  RCBO: [
    "1P+N double break in 18mm single module – space-saving design",
    "Type A detects AC and pulsating DC residual current – safe for modern appliances",
    "6kA breaking capacity with 100% service breaking (Ics = Icn)",
    "CE, RoHS and IEC 61009-1 compliant for global distribution",
    "OEM branding and packaging for distributor programs",
    "ISO 9001 certified manufacturing facility",
  ],
  SPD: [
    "Pluggable module design for fast field replacement",
    "Visual status window for easy maintenance inspection",
    "CE, RoHS and IEC 61643 compliant for global projects",
    "Suitable for AC distribution, telecom and PV combiner protection",
    "ISO 9001 certified manufacturing facility",
  ],
  ATS: [
    "Mechanical and electrical interlock for safe transfer",
    "Compatible with mains plus diesel generator setups",
    "DIN-rail mount fits standard low voltage distribution boards",
    "CE and IEC 60947-6-1 compliant",
    "ISO 9001 certified manufacturing facility",
  ],
  "Combiner Box": [
    "IP65 weather-rated enclosure for outdoor PV sites",
    "Pre-assembled with DC SPD, DC fuse and DC breaker",
    "Configurable string inputs for residential to utility-scale projects",
    "Custom labelling and wiring layout supported",
    "ISO 9001 certified manufacturing facility",
  ],
  "Voltage Protector": [
    "Automatic disconnect on over voltage and under voltage",
    "Auto reconnection with adjustable delay",
    "Protects refrigerators, AC, electronics and sensitive loads",
    "CE and RoHS compliant",
    "ISO 9001 certified manufacturing facility",
  ],
  "Energy Meter": [
    "Class 1 active energy accuracy",
    "Pulse output and RS485 Modbus options for monitoring",
    "Suitable for sub-metering, tenant billing and energy management",
    "Direct connect and CT operated versions",
    "ISO 9001 certified manufacturing facility",
  ],
};

export function getProductKeyFeatures(product: Product, target = 7): string[] {
  const own = product.specs ?? [];
  if (own.length >= target) return own.slice(0, target);
  const extras = extraKeyFeaturesByCategory[product.parentCategory] ?? [];
  const merged = [...own];
  for (const item of extras) {
    if (merged.length >= target) break;
    if (!merged.includes(item)) merged.push(item);
  }
  return merged.slice(0, target);
}

export function getProductGallery(product: Product): string[] {
  const fallback = [product.image, product.image, product.image];
  if (!product.gallery || product.gallery.length === 0) return fallback;
  const list = [...product.gallery];
  while (list.length < 3) list.push(product.image);
  return list.slice(0, 8);
}

export function getRelatedProducts(product: Product, limit = 8): Product[] {
  const sameSub = product.subCategorySlug
    ? products.filter((p) => p.subCategorySlug === product.subCategorySlug)
    : [];
  const sameCategory = products.filter(
    (p) => p.parentCategory === product.parentCategory && p.slug !== product.slug && !sameSub.includes(p),
  );
  return [...sameSub, ...sameCategory].slice(0, limit);
}
