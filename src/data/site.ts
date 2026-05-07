export type ProductCategory =
  | "MCB"
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
};

export const subCategories: SubCategory[] = [
  {
    slug: "ac-mcb",
    label: "AC MCB",
    parent: "MCB",
    hero: "AC Miniature Circuit Breakers (1P–4P)",
    intro:
      "TPKELE AC MCBs cover branch circuit protection for low voltage AC distribution systems in residential, commercial and industrial buildings. Available in 1P, 2P, 3P and 4P configurations with multiple current ratings and curve types.",
    seoTitle: "AC MCB Manufacturer | 1P 2P 3P 4P AC Circuit Breakers",
    seoDescription:
      "TPKELE AC MCB series covers 1P, 2P, 3P and 4P AC miniature circuit breakers for distribution boards, residential and commercial branch protection.",
    seoKeywords: ["AC MCB", "1P MCB", "2P MCB", "3P MCB", "4P MCB", "AC circuit breaker"],
  },
  {
    slug: "dc-mcb",
    label: "DC MCB",
    parent: "MCB",
    hero: "DC Miniature Circuit Breakers (1P–4P) for Solar & Battery",
    intro:
      "TPKELE DC MCBs are engineered for direct current circuit protection in photovoltaic strings, battery banks and DC distribution panels. Specialized arc-quenching contacts handle DC arc breaking up to high system voltages, with 1P, 2P, 3P and 4P pole options.",
    seoTitle: "DC MCB Manufacturer | 1P 2P 3P 4P DC Circuit Breakers",
    seoDescription:
      "TPKELE DC MCB series covers 1P, 2P, 3P and 4P DC miniature circuit breakers for PV strings, battery and DC distribution applications.",
    seoKeywords: ["DC MCB", "DC 1P MCB", "PV DC breaker", "solar DC breaker", "battery DC MCB"],
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
  url: "https://www.tpkele.com",
  description:
    "TPKELE manufactures low voltage electrical protection products including MCB, SPD, ATS, combiner boxes and DIN rail energy meters.",
  phone: "+86 15067704501",
  whatsapp: "8615067704501",
  email: "jacky@tpkele.com",
  address: "Zhijiang, Wenzhou, Zhejiang, China",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const productFamilies: ProductFamily[] = [
  {
    slug: "mcb",
    name: "MCB",
    shortName: "MCB",
    category: "MCB",
    image: "/assets/home-products-normalized/mcb.webp",
    summary: "Overload and short circuit protection",
  },
  {
    slug: "spd",
    name: "SPD",
    shortName: "SPD",
    category: "SPD",
    image: "/assets/home-products-normalized/spd.webp",
    summary: "Lightning and surge protection",
  },
  {
    slug: "over-voltage-protector",
    name: "Voltage Protector",
    shortName: "OVP",
    category: "Voltage Protector",
    image: "/assets/home-products-normalized/over-voltage-protector.webp",
    summary: "Voltage monitoring and protection",
  },
  {
    slug: "ats",
    name: "ATS",
    shortName: "ATS",
    category: "ATS",
    image: "/assets/home-products-normalized/ats.webp",
    summary: "Automatic power transfer",
  },
  {
    slug: "combiner-box",
    name: "Combiner Box",
    shortName: "Combiner Box",
    category: "Combiner Box",
    image: "/assets/home-products-normalized/combiner-box.webp",
    summary: "PV protection and wiring",
  },
  {
    slug: "din-rail-energy-meter",
    name: "Energy Meter",
    shortName: "DIN Meter",
    category: "Energy Meter",
    image: "/assets/home-products-normalized/din-rail-energy-meter.webp",
    summary: "Smart metering and monitoring",
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
    image: "/assets/home-products-normalized/mcb.webp",
    summary: "Single-pole AC miniature circuit breaker for branch circuit protection.",
    description: "TPKELE AC MCB 1P is a single-pole AC miniature circuit breaker for branch circuit overload and short circuit protection in low voltage distribution boards.",
    specs: ["1 Pole AC", "Rated current options for branch circuits", "DIN rail mount", "OEM logo and packaging available"],
    seoKeywords: ["AC MCB 1P", "1P AC circuit breaker", "single pole MCB"],
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
    image: "/assets/home-products-normalized/mcb.webp",
    summary: "Two-pole AC miniature circuit breaker for line + neutral protection.",
    description: "TPKELE AC MCB 2P is a two-pole AC miniature circuit breaker designed for line and neutral protection in single phase circuits and small AC distribution boards.",
    specs: ["2 Pole AC", "Line + neutral protection", "DIN rail mount", "OEM logo and packaging available"],
    seoKeywords: ["AC MCB 2P", "2P AC circuit breaker", "two pole MCB"],
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
    image: "/assets/home-products-normalized/mcb.webp",
    summary: "Three-pole AC miniature circuit breaker for three phase circuits.",
    description: "TPKELE AC MCB 3P is a three-pole AC miniature circuit breaker for three phase distribution branch protection in commercial and industrial systems.",
    specs: ["3 Pole AC", "Three phase protection", "DIN rail mount", "OEM logo and packaging available"],
    seoKeywords: ["AC MCB 3P", "3P AC circuit breaker", "three phase MCB"],
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
    image: "/assets/home-products-normalized/mcb.webp",
    summary: "Four-pole AC miniature circuit breaker for three phase plus neutral.",
    description: "TPKELE AC MCB 4P is a four-pole AC miniature circuit breaker for three phase plus neutral distribution branch protection in commercial and industrial systems.",
    specs: ["4 Pole AC", "Three phase + neutral protection", "DIN rail mount", "OEM logo and packaging available"],
    seoKeywords: ["AC MCB 4P", "4P AC circuit breaker", "four pole MCB"],
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
    image: "/assets/home-products-normalized/mcb.webp",
    summary: "Single-pole DC miniature circuit breaker for PV string protection.",
    description: "TPKELE DC MCB 1P is a single-pole DC miniature circuit breaker engineered for PV string and DC bus overload and short circuit protection.",
    specs: ["1 Pole DC", "PV string protection", "DC arc breaking design", "DIN rail mount"],
    seoKeywords: ["DC MCB 1P", "1P DC breaker", "PV DC breaker"],
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
    image: "/assets/home-products-normalized/mcb.webp",
    summary: "Two-pole DC miniature circuit breaker for PV positive and negative.",
    description: "TPKELE DC MCB 2P is a two-pole DC miniature circuit breaker for PV string positive and negative line protection in DC distribution and combiner boxes.",
    specs: ["2 Pole DC", "PV +/− protection", "DC arc breaking design", "DIN rail mount"],
    seoKeywords: ["DC MCB 2P", "2P DC breaker", "PV DC 2 pole"],
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
    image: "/assets/home-products-normalized/mcb.webp",
    summary: "Three-pole DC miniature circuit breaker for higher voltage DC systems.",
    description: "TPKELE DC MCB 3P is a three-pole DC miniature circuit breaker, suitable for higher system voltage PV and battery DC bus protection where additional poles are connected in series.",
    specs: ["3 Pole DC", "Higher DC voltage rating", "Series-pole arc breaking", "DIN rail mount"],
    seoKeywords: ["DC MCB 3P", "3P DC breaker", "high voltage DC MCB"],
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
    image: "/assets/home-products-normalized/mcb.webp",
    summary: "Four-pole DC miniature circuit breaker for utility-scale PV systems.",
    description: "TPKELE DC MCB 4P is a four-pole DC miniature circuit breaker designed for utility-scale photovoltaic and DC bus systems requiring four-pole series breaking for high system voltage.",
    specs: ["4 Pole DC", "Utility-scale DC voltage rating", "Series-pole arc breaking", "DIN rail mount"],
    seoKeywords: ["DC MCB 4P", "4P DC breaker", "utility DC MCB"],
  },
  {
    slug: "ac-spd",
    name: "AC SPD",
    shortName: "AC SPD",
    category: "SPD",
    parentCategory: "SPD",
    series: "AC SPD",
    application: "AC surge protection",
    image: "/assets/home-products-normalized/spd.webp",
    summary: "AC surge protective device for building and distribution systems.",
    description: "TPKELE AC SPD products help protect AC electrical equipment from lightning surge and transient overvoltage events.",
    specs: ["AC system protection", "Visual status window", "Pluggable module design"],
    seoKeywords: ["AC SPD", "surge protective device", "AC surge protection"],
  },
  {
    slug: "dc-spd",
    name: "DC SPD",
    shortName: "DC SPD",
    category: "SPD",
    parentCategory: "SPD",
    series: "DC SPD",
    application: "PV DC surge protection",
    image: "/assets/home-products-normalized/spd.webp",
    summary: "DC surge protective device for PV strings and solar systems.",
    description: "TPKELE DC SPD products are used for photovoltaic DC-side surge protection in solar combiner and distribution systems.",
    specs: ["PV DC system protection", "High surge discharge capacity options", "Modular DIN rail installation"],
    seoKeywords: ["DC SPD", "PV surge protection", "solar SPD"],
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
    slug: "over-voltage-protector",
    name: "Voltage Protector",
    shortName: "OVP",
    category: "Voltage Protector",
    parentCategory: "Voltage Protector",
    series: "Voltage Protector",
    application: "Voltage monitoring",
    image: "/assets/home-products-normalized/over-voltage-protector.webp",
    summary: "Automatic protector for abnormal power conditions.",
    description: "TPKELE over voltage protectors monitor incoming power and disconnect loads when voltage moves outside the safe operating range.",
    specs: ["Automatic disconnect and reset", "DIN rail installation", "Adjustable model options"],
    seoKeywords: ["over voltage protector", "under voltage protection", "DIN rail voltage protector"],
  },
  {
    slug: "ats",
    name: "ATS",
    shortName: "ATS",
    category: "ATS",
    parentCategory: "ATS",
    series: "ATS",
    application: "Backup power transfer",
    image: "/assets/home-products-normalized/ats.webp",
    summary: "Automatic transfer switch for main and backup power supplies.",
    description: "TPKELE ATS products support automatic source transfer for standby power and critical low voltage distribution systems.",
    specs: ["Fast transfer response", "Compact modular structure", "Used in critical distribution systems"],
    seoKeywords: ["ATS manufacturer", "automatic transfer switch", "backup power transfer"],
  },
  {
    slug: "plastic-box-series",
    name: "Plastic Box Series",
    shortName: "Plastic Box",
    category: "Combiner Box",
    parentCategory: "Combiner Box",
    series: "Plastic Box Series",
    application: "PV combiner protection",
    image: "/assets/home-products-normalized/combiner-box.webp",
    summary: "Plastic enclosure combiner box series for PV system protection.",
    description: "TPKELE plastic combiner box series supports lightweight PV protection assemblies with configurable branch and protection layouts.",
    specs: ["Plastic enclosure series", "Custom strings and enclosure size", "SPD, fuse and breaker configuration"],
    seoKeywords: ["plastic combiner box", "PV combiner box", "solar plastic box"],
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
    image: "/assets/home-products-normalized/din-rail-energy-meter.webp",
    summary: "DIN rail energy meter for electrical measurement and monitoring.",
    description: "TPKELE DIN rail energy meters provide compact metering options for distribution panels and energy management projects.",
    specs: ["Single-phase and three-phase options", "Clear digital display", "Communication model available"],
    seoKeywords: ["DIN rail energy meter", "energy meter manufacturer", "power meter"],
  },
];

export const categories: Array<"All Products" | ProductCategory> = [
  "All Products",
  "MCB",
  "SPD",
  "Voltage Protector",
  "ATS",
  "Combiner Box",
  "Energy Meter",
];

export const categorySlugMap: Record<ProductCategory, string> = {
  MCB: "mcb",
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
};

export const categoryContent: Record<ProductCategory, CategoryContent> = {
  MCB: {
    hero: "Miniature Circuit Breakers for AC and DC Distribution",
    intro:
      "TPKELE supplies miniature circuit breakers (MCBs) for AC distribution boards, DC photovoltaic systems and battery energy storage. Our DZ47 and DZ47Z series cover 1P to 4P configurations, with curve types and rated currents that match standard low voltage protection projects worldwide.",
    bullets: [
      "AC MCB and DC MCB series for distribution and solar applications",
      "1P / 2P / 3P / 4P pole options with multiple current ratings",
      "Tested for overload and short circuit protection performance",
      "OEM logo, color and packaging customization for distributors",
    ],
    faq: [
      { q: "What is the difference between AC MCB and DC MCB?", a: "AC MCBs are designed for alternating current circuits in buildings and factories. DC MCBs handle direct current arcs from PV strings, batteries and DC bus systems and use specialized contact and arc-extinguishing structures." },
      { q: "Do you support OEM branding for MCBs?", a: "Yes. We support OEM logo printing, custom color housing and dedicated packaging for distributor and brand owner programs." },
    ],
    seoTitle: "MCB Manufacturer | AC & DC Miniature Circuit Breakers",
    seoDescription:
      "TPKELE manufactures AC MCB and DC MCB miniature circuit breakers for low voltage distribution, solar and battery systems. OEM and project supply available.",
    seoKeywords: ["MCB manufacturer", "miniature circuit breaker", "AC MCB", "DC MCB", "DZ47", "low voltage breaker"],
  },
  SPD: {
    hero: "Surge Protective Devices for AC, DC and Solar Systems",
    intro:
      "TPKELE surge protective devices (SPDs) safeguard low voltage equipment from lightning strikes and switching transients. Our AC SPD, DC SPD and color series cover building distribution, telecom cabinets and photovoltaic combiner protection with pluggable Type 1, Type 2 and Type 1+2 modules.",
    bullets: [
      "AC SPD for distribution boards and commercial buildings",
      "DC SPD up to 1500V for PV string and inverter input protection",
      "Color housing series (green / white) for OEM and catalog programs",
      "Visual status window and pluggable module replacement",
    ],
    faq: [
      { q: "Which SPD type do I need for solar projects?", a: "PV strings and combiner boxes typically use DC SPDs rated for the system Uoc, while the AC output side uses AC Type 2 SPDs. We can recommend the right type based on your system voltage and structure." },
      { q: "Are TPKELE SPDs CE certified?", a: "Yes, our SPDs comply with CE and IEC 61643 standard requirements. Test reports are available for project files and tenders." },
    ],
    seoTitle: "SPD Manufacturer | AC, DC and Solar Surge Protectors",
    seoDescription:
      "TPKELE manufactures AC SPD, DC SPD and color series surge protective devices for distribution, telecom and PV systems. CE compliant and OEM ready.",
    seoKeywords: ["SPD manufacturer", "surge protective device", "AC SPD", "DC SPD", "PV SPD", "lightning surge protection"],
  },
  ATS: {
    hero: "Automatic Transfer Switches for Backup Power",
    intro:
      "TPKELE automatic transfer switches (ATS) move critical loads between primary and backup power sources within milliseconds. Designed for low voltage distribution boards, generator integration and standby power systems, our ATS modules combine fast transfer with compact DIN rail mounting.",
    bullets: [
      "Automatic source transfer between mains and generator",
      "Modular DIN rail mount, compatible with standard distribution boards",
      "Mechanical and electrical interlock for safe transfer",
      "Used in critical loads, hospitals, data rooms and process lines",
    ],
    faq: [
      { q: "What current ratings are available?", a: "Our ATS modules are available in standard low voltage current ratings to fit common distribution panel projects. Contact us with your line current to confirm a model." },
      { q: "Can the ATS work with diesel generators?", a: "Yes, the ATS is designed to work with utility plus diesel generator setups, transferring loads when the primary source fails." },
    ],
    seoTitle: "ATS Manufacturer | Automatic Transfer Switch",
    seoDescription:
      "TPKELE supplies automatic transfer switches (ATS) for backup power, generator integration and low voltage critical load distribution.",
    seoKeywords: ["ATS manufacturer", "automatic transfer switch", "backup power transfer", "generator transfer switch"],
  },
  "Combiner Box": {
    hero: "PV Combiner Boxes for Solar String Aggregation",
    intro:
      "TPKELE PV combiner boxes aggregate solar strings and bring DC fuses, DC SPDs and DC breakers into one IP-rated enclosure. Our plastic and metal series cover residential, commercial and utility-scale photovoltaic projects with configurable input and output layouts.",
    bullets: [
      "Plastic and metal box series for indoor and outdoor PV sites",
      "Configurable string inputs with DC fuse and SPD protection",
      "IP65 weather-rated enclosures for rooftop and ground installations",
      "Custom labelling, wiring layout and project-spec drawings supported",
    ],
    faq: [
      { q: "Plastic or metal combiner box, which should I choose?", a: "Plastic boxes are lighter and corrosion resistant, ideal for residential and rooftop projects. Metal boxes provide higher mechanical strength and are common in utility-scale and harsh environments." },
      { q: "Do combiner boxes include SPD and fuses?", a: "Yes, our standard combiner boxes are pre-assembled with DC SPDs and DC fuses. We can adjust the configuration based on your project single line diagram." },
    ],
    seoTitle: "PV Combiner Box Manufacturer | Plastic & Metal Series",
    seoDescription:
      "TPKELE manufactures PV combiner boxes with DC SPD, DC fuse and DC breaker integration. Plastic and metal series for residential to utility solar projects.",
    seoKeywords: ["PV combiner box", "solar combiner box", "DC combiner box", "string combiner", "photovoltaic combiner manufacturer"],
  },
  "Voltage Protector": {
    hero: "Voltage Protectors for Mains Quality Monitoring",
    intro:
      "TPKELE voltage protectors monitor incoming mains voltage and disconnect downstream loads when the line moves outside safe limits. Designed for residential, commercial and light industrial use, they reduce equipment damage from over voltage, under voltage and phase loss events.",
    bullets: [
      "Automatic disconnect on over voltage and under voltage events",
      "Auto-reset with adjustable delay options",
      "DIN rail mount, compatible with standard consumer units",
      "Single phase and three phase models for residential and commercial use",
    ],
    faq: [
      { q: "When should I install a voltage protector?", a: "Voltage protectors are recommended where mains supply is unstable or where sensitive appliances such as refrigerators, air conditioners and electronics need protection from voltage fluctuations." },
      { q: "Does the voltage protector reset automatically?", a: "Yes. After the mains voltage returns to a safe range, the protector reconnects the load automatically after a configurable delay." },
    ],
    seoTitle: "Voltage Protector Manufacturer | Over & Under Voltage",
    seoDescription:
      "TPKELE voltage protectors disconnect downstream loads on over voltage and under voltage events. DIN rail single and three phase models available.",
    seoKeywords: ["voltage protector", "over voltage protection", "under voltage protection", "DIN rail voltage protector"],
  },
  "Energy Meter": {
    hero: "DIN Rail Energy Meters for Smart Monitoring",
    intro:
      "TPKELE DIN rail energy meters measure active energy, current and voltage for distribution boards, sub-metering and tenant billing. With single phase and three phase versions and optional pulse or RS485 output, they integrate easily with monitoring systems and energy management platforms.",
    bullets: [
      "Single phase and three phase DIN rail energy meters",
      "Direct connect and CT operated versions",
      "Pulse and RS485 Modbus output options for monitoring",
      "Used for sub-metering, tenant billing and energy management",
    ],
    faq: [
      { q: "Do you support Modbus communication?", a: "Yes, RS485 Modbus output is available on selected models for integration with energy management and SCADA systems." },
      { q: "What accuracy class do the meters offer?", a: "Our standard meters meet Class 1 active energy accuracy, sufficient for sub-metering and operational monitoring applications." },
    ],
    seoTitle: "DIN Rail Energy Meter Manufacturer | Single & Three Phase",
    seoDescription:
      "TPKELE DIN rail energy meters for distribution boards, sub-metering and tenant billing. Direct, CT, pulse and RS485 Modbus output options.",
    seoKeywords: ["DIN rail energy meter", "energy meter manufacturer", "kWh meter", "Modbus energy meter", "sub-meter"],
  },
};

export const productMenu: ProductMenuGroup[] = [
  {
    label: "MCB",
    href: "/products/category/mcb",
    children: [
      { label: "AC MCB", href: "/products/category/mcb/ac-mcb" },
      { label: "DC MCB", href: "/products/category/mcb/dc-mcb" },
    ],
  },
  {
    label: "SPD",
    href: "/products/category/spd",
    children: [
      { label: "AC SPD", href: "/products/category/spd?series=AC%20SPD" },
      { label: "DC SPD", href: "/products/category/spd?series=DC%20SPD" },
      { label: "Color Series", href: "/products/category/spd?series=Color%20Series" },
    ],
  },
  {
    label: "ATS",
    href: "/products/category/ats",
    children: [{ label: "ATS", href: "/products/category/ats" }],
  },
  {
    label: "Combiner Box",
    href: "/products/category/combiner-box",
    children: [
      { label: "Plastic Box Series", href: "/products/category/combiner-box?series=Plastic%20Box%20Series" },
      { label: "Metal Box Series", href: "/products/category/combiner-box?series=Metal%20Box%20Series" },
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

export const applications = [
  { title: "Industrial", icon: "IN", text: "Factory power cabinets and machinery protection." },
  { title: "Solar Energy", icon: "PV", text: "PV combiner boxes, surge protection and metering." },
  { title: "Building", icon: "BD", text: "Commercial distribution boards and branch circuits." },
  { title: "Data Center", icon: "DC", text: "Reliable transfer, monitoring and circuit safety." },
  { title: "Infrastructure", icon: "IF", text: "Municipal, rail and public power systems." },
];

export const blogPosts = [
  {
    slug: "choose-right-mcb",
    title: "How to Choose the Right MCB for Your Application",
    date: "2026-05-26",
    image: "/assets/blog/mcb-guide.webp",
    excerpt: "A practical guide to matching rated current, breaking capacity and pole configuration.",
    intent: "MCB selection support",
  },
  {
    slug: "understanding-spd-surge",
    title: "Understanding SPD: Protection Against Surge",
    date: "2026-05-20",
    image: "/assets/blog/spd-surge.webp",
    excerpt: "Where to install surge protection devices and how to choose levels for different systems.",
    intent: "SPD project support",
  },
  {
    slug: "ats-modern-distribution",
    title: "ATS in Modern Power Distribution Systems",
    date: "2026-05-15",
    image: "/assets/blog/ats-system.webp",
    excerpt: "Automatic transfer switch use cases for standby power and continuity-critical facilities.",
    intent: "ATS solution inquiry",
  },
  {
    slug: "solar-combiner-box-safety",
    title: "Solar Combiner Box: The Key to PV System Safety",
    date: "2026-05-10",
    image: "/assets/blog/combiner-box.webp",
    excerpt: "How combiner boxes simplify wiring, improve safety and protect solar branches.",
    intent: "PV combiner box quote",
  },
  {
    slug: "energy-meter-selection",
    title: "Energy Meter Selection Guide for Industrial Use",
    date: "2026-05-05",
    image: "/assets/blog/energy-meter.webp",
    excerpt: "What to check when choosing metering, monitoring and DIN rail installation options.",
    intent: "Energy meter selection",
  },
  {
    slug: "tpkele-snec-2026",
    title: "TPKELE at SNEC 2026 Exhibition",
    date: "2026-04-25",
    image: "/assets/blog/exhibition.webp",
    excerpt: "Product updates and customer discussions from the renewable energy exhibition floor.",
    intent: "Exhibition follow-up",
  },
];

export function findProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
