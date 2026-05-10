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
    hero: "AC Miniature Circuit Breakers (1P–4P) for Low Voltage Distribution",
    intro:
      "TPKELE AC MCBs deliver overload and short-circuit protection for residential, commercial and industrial AC distribution boards. Engineered to IEC 60898-1 with 6kA / 10kA breaking capacity, B/C/D trip curves and 1P–4P pole configurations, they suit panel builders, electrical distributors and EPC contractors who need a reliable, certified AC branch protection device.",
    seoTitle: "AC MCB Manufacturer | 1P 2P 3P 4P AC Miniature Circuit Breaker",
    seoDescription:
      "TPKELE AC MCB factory: 1P/2P/3P/4P AC miniature circuit breakers, 6A–63A, 6/10kA, B/C/D curves, IEC 60898-1, CE & RoHS. OEM & project supply for distributors and panel builders.",
    seoKeywords: ["AC MCB", "AC miniature circuit breaker", "1P AC MCB", "2P AC MCB", "3P AC MCB", "4P AC MCB", "AC circuit breaker manufacturer", "IEC 60898 MCB", "C curve MCB"],
  },
  {
    slug: "dc-mcb",
    label: "DC MCB",
    parent: "MCB",
    hero: "DC Miniature Circuit Breakers for Solar PV & Battery Storage",
    intro:
      "TPKELE DC MCBs are purpose-built for photovoltaic strings, battery energy storage and DC bus protection. Special arc-quenching contacts safely break DC arcs up to 1000V/1500V system voltages. 1P, 2P, 3P and 4P pole configurations support residential rooftop to utility-scale PV — the right DC circuit breaker for solar EPCs, combiner box assemblers and BESS integrators.",
    seoTitle: "DC MCB Manufacturer | Solar PV DC Circuit Breaker 1000V 1500V",
    seoDescription:
      "TPKELE DC MCB factory for solar PV, battery and DC distribution. 1P–4P, up to 1500V DC, 6A–63A, IEC 60947-2 design, CE & RoHS, OEM ready. Solar circuit breaker built for EPCs and panel builders.",
    seoKeywords: ["DC MCB", "solar circuit breaker", "PV DC breaker", "1000V DC MCB", "1500V DC MCB", "battery DC breaker", "DC miniature circuit breaker manufacturer", "photovoltaic DC breaker"],
  },
  {
    slug: "ac-spd",
    label: "AC SPD",
    parent: "SPD",
    hero: "AC Surge Protective Devices — Type 1, Type 2, Type 1+2",
    intro:
      "TPKELE AC SPDs protect low voltage distribution boards, telecom cabinets and inverter AC outputs against lightning surges and switching transients. Available as Type 1, Type 2 and Type 1+2 modules with pluggable cartridges, visual status indicators and remote signaling — compliant with IEC 61643-11 for European, Middle East and Southeast Asian project tenders.",
    seoTitle: "AC SPD Manufacturer | Type 1 Type 2 AC Surge Protector 230V 400V",
    seoDescription:
      "TPKELE AC SPD factory: Type 1, Type 2, Type 1+2 AC surge protective devices for distribution panels, inverter AC output and telecom. 20kA / 40kA, IEC 61643-11, CE & RoHS, OEM ready.",
    seoKeywords: ["AC SPD", "AC surge protector", "Type 1 SPD", "Type 2 SPD", "Type 1+2 SPD", "230V SPD", "400V SPD", "IEC 61643 SPD", "AC surge protective device manufacturer"],
  },
  {
    slug: "dc-spd",
    label: "DC SPD",
    parent: "SPD",
    hero: "DC Surge Protective Devices for Solar PV — 600V / 1000V / 1500V",
    intro:
      "TPKELE DC SPDs protect photovoltaic systems and DC distribution against lightning-induced surges. Designed for PV string inputs, DC combiner boxes and inverter DC sides, they support Uoc up to 1500V DC with Type 1+2 / Type 2 protection levels and clear visual status windows. The trusted PV surge protector for solar EPCs, distributors and OEM buyers worldwide.",
    seoTitle: "DC SPD Manufacturer | PV Solar Surge Protector 1000V 1500V",
    seoDescription:
      "TPKELE DC SPD factory: Type 1+2 and Type 2 DC surge protective devices for solar PV, 600V/1000V/1500V Uoc, 20kA/40kA, IEC 61643-31, CE & RoHS. PV surge protector built for solar projects.",
    seoKeywords: ["DC SPD", "PV SPD", "solar SPD", "1500V DC SPD", "1000V DC SPD", "PV surge protector", "photovoltaic surge protective device", "solar surge arrester", "Type 1+2 DC SPD"],
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
    "TPKELE is a Solar & Low Voltage Electrical Protection Manufacturer producing DC MCB, AC MCB, DC SPD, AC SPD, PV combiner boxes, ATS, voltage protectors and DIN rail energy meters for solar EPCs, electrical distributors, OEM buyers and panel builders worldwide.",
  phone: "+86 15067704501",
  whatsapp: "8615067704501",
  email: "jacky@tpkele.com",
  address: "Zhijiang, Wenzhou, Zhejiang, China",
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
    summary: "Automatic transfer switch, 16–125A, 2/3/4P",
    description:
      "TPKELE automatic transfer switches (ATS) move critical loads between primary and backup power sources within milliseconds.",
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
    slug: "over-voltage-protector",
    name: "Voltage Protector",
    shortName: "OVP",
    category: "Voltage Protector",
    image: "/assets/home-products-normalized/over-voltage-protector.webp",
    summary: "Over / under voltage and phase-loss protection",
    description:
      "TPKELE voltage protectors monitor incoming mains voltage and disconnect downstream loads when the line moves outside safe limits.",
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
    image: "/assets/products/gallery/dc-mcb-4p-1.webp",
    summary: "Four-pole DC miniature circuit breaker for utility-scale PV systems.",
    description: "TPKELE DC MCB 4P is a four-pole DC miniature circuit breaker designed for utility-scale photovoltaic and DC bus systems requiring four-pole series breaking for high system voltage.",
    specs: ["4 Pole DC", "Utility-scale DC voltage rating", "Series-pole arc breaking", "DIN rail mount"],
    seoKeywords: ["DC MCB 4P", "4P DC breaker", "utility DC MCB"],
    gallery: [
      "/assets/products/gallery/dc-mcb-4p-1.webp",
      "/assets/products/gallery/dc-mcb-4p-2.webp",
      "/assets/products/gallery/dc-mcb-4p-3.webp",
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
    image: "/assets/products/gallery/ats-1.webp",
    summary: "Automatic transfer switch for main and backup power supplies.",
    description: "TPKELE ATS products support automatic source transfer for standby power and critical low voltage distribution systems.",
    specs: ["Fast transfer response", "Compact modular structure", "Used in critical distribution systems"],
    seoKeywords: ["ATS manufacturer", "automatic transfer switch", "backup power transfer"],
    gallery: [
      "/assets/products/gallery/ats-1.webp",
      "/assets/products/gallery/ats-2.webp",
      "/assets/products/gallery/ats-3.webp",
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
  applications?: string[];
  buyerPersona?: string;
};

export const categoryContent: Record<ProductCategory, CategoryContent> = {
  MCB: {
    hero: "MCB Manufacturer — AC & DC Miniature Circuit Breakers",
    intro:
      "TPKELE manufactures AC and DC miniature circuit breakers for low voltage distribution boards, photovoltaic strings and battery energy storage. Our DZ47 / DZ47Z series cover 1P–4P pole configurations, 6A–63A current ratings and B / C / D trip curves to IEC 60898-1, with breaking capacities up to 10kA. Trusted by solar EPCs, electrical distributors and panel builders across Europe, the Middle East, Southeast Asia and South America.",
    bullets: [
      "AC MCB & DC MCB series for distribution and solar / BESS applications",
      "1P / 2P / 3P / 4P pole configurations, 6A–63A rated currents",
      "B / C / D trip curves, 6kA / 10kA breaking capacity",
      "Tested to IEC 60898-1 / IEC 60947-2, CE & RoHS compliant",
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
      { q: "Do your MCBs carry CE certification?", a: "Yes, all TPKELE MCBs are CE & RoHS compliant and tested per IEC 60898-1. Test reports are available for project tenders and customs documentation." },
    ],
    seoTitle: "MCB Manufacturer | AC & DC Miniature Circuit Breakers — TPKELE",
    seoDescription:
      "TPKELE: MCB manufacturer of AC MCB and DC MCB miniature circuit breakers, 1P–4P, 6A–63A, B/C/D curves, IEC 60898-1, CE & RoHS. OEM and project supply for distributors, panel builders and solar EPCs.",
    seoKeywords: ["MCB manufacturer", "miniature circuit breaker", "AC MCB", "DC MCB", "DZ47", "solar circuit breaker", "PV DC breaker", "low voltage breaker", "IEC 60898 MCB"],
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
    ],
    seoTitle: "SPD Manufacturer | AC SPD & DC PV Surge Protector — TPKELE",
    seoDescription:
      "TPKELE: SPD manufacturer of AC surge protectors (Type 1 / 2 / 1+2) and DC PV surge protectors (600V / 1000V / 1500V). IEC 61643-11 / 31, CE & RoHS, pluggable modules. OEM-ready solar surge protection.",
    seoKeywords: ["SPD manufacturer", "surge protective device", "AC SPD", "DC SPD", "PV SPD", "solar surge protector", "Type 1 SPD", "Type 2 SPD", "1500V DC SPD", "lightning surge protection"],
  },
  ATS: {
    hero: "ATS Manufacturer — Automatic Transfer Switches for Backup Power",
    intro:
      "TPKELE automatic transfer switches (ATS) move critical loads between mains and backup sources within milliseconds. Designed for low voltage distribution, generator integration and standby power, our ATS modules combine 2P / 3P / 4P configurations, 16A–125A current ratings, mechanical interlock and DIN-rail mounting per IEC 60947-6-1. Built for industrial contractors, panel builders and project distributors who need reliable source transfer.",
    bullets: [
      "Automatic source transfer between mains and generator / backup",
      "2P / 3P / 4P, 16A–125A current ratings",
      "Transfer time ≤ 0.4s, mechanical & electrical interlock",
      "DIN-rail mount — fits standard low voltage distribution boards",
      "IEC 60947-6-1 design, CE compliant",
      "Used in hospitals, data centers, factories and continuity-critical sites",
    ],
    applications: ["Hospitals & life-safety circuits", "Data centers & telecom rooms", "Process industry continuity loads", "Commercial buildings with diesel generator backup", "Solar / hybrid systems with grid-failover"],
    buyerPersona: "Specified by industrial contractors, panel builders and electrical distributors needing IEC-compliant automatic transfer switches with proven reliability and competitive lead time.",
    faq: [
      { q: "What current ratings are available?", a: "Standard ATS modules range from 16A to 125A across 2P, 3P and 4P configurations. Contact us with your line current and we will confirm a model and breaking specification." },
      { q: "Can the ATS work with diesel generators?", a: "Yes — the ATS is designed to work with mains plus diesel generator setups. It transfers loads automatically when the primary source fails and returns when mains is restored." },
      { q: "What is the typical transfer time?", a: "Transfer time is ≤ 0.4 seconds, suitable for non-UPS critical loads. For zero-break operation, an upstream UPS is recommended." },
      { q: "Do you support OEM branding for ATS?", a: "Yes — logo, label and packaging customization are available for distributor and brand-owner programs." },
    ],
    seoTitle: "ATS Manufacturer | Automatic Transfer Switch 2P 3P 4P — TPKELE",
    seoDescription:
      "TPKELE: automatic transfer switch (ATS) manufacturer for backup power and generator integration. 2P/3P/4P, 16A–125A, ≤ 0.4s transfer, IEC 60947-6-1, CE compliant. OEM-ready ATS modules.",
    seoKeywords: ["ATS manufacturer", "automatic transfer switch", "ATS 4P", "generator transfer switch", "backup power transfer", "IEC 60947-6 ATS", "DIN rail ATS"],
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
    ],
    seoTitle: "PV Combiner Box Manufacturer | Solar DC Combiner Box 1500V — TPKELE",
    seoDescription:
      "TPKELE: PV combiner box manufacturer with plastic & metal IP65 series. 2–16 string inputs, 1000V/1500V DC, pre-assembled DC fuse / SPD / MCB. CE, IEC 61439. Custom drawings for EPC projects.",
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
    ],
    seoTitle: "Voltage Protector Manufacturer | Over & Under Voltage Protection — TPKELE",
    seoDescription:
      "TPKELE: voltage protector manufacturer with single-phase & three-phase DIN-rail over/under voltage protection. Adjustable thresholds, auto reset, CE & RoHS. High-volume distributor program.",
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
    ],
    seoTitle: "DIN Rail Energy Meter Manufacturer | Modbus kWh Meter — TPKELE",
    seoDescription:
      "TPKELE: DIN-rail energy meter manufacturer. Single & three phase, direct & CT, pulse & RS485 Modbus, Class 1 accuracy, IEC 62052/62053, CE & RoHS. Built for sub-metering and energy management.",
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

export type ProductMegaItem = { label: string; href: string; tag?: string };
export type ProductMegaColumn = {
  key: "solar" | "lv";
  title: string;
  subtitle: string;
  recommended?: boolean;
  cta: { label: string; href: string };
  items: ProductMegaItem[];
};

export const productMegaMenu: ProductMegaColumn[] = [
  {
    key: "solar",
    title: "Solar DC Protection",
    subtitle: "For PV Systems & Battery Storage",
    recommended: true,
    cta: { label: "View Solar DC →", href: "/solar-dc-protection" },
    items: [
      { label: "DC MCB", href: "/products/category/mcb/dc-mcb" },
      { label: "DC SPD", href: "/products/category/spd/dc-spd" },
      { label: "PV Combiner Box", href: "/products/category/combiner-box" },
    ],
  },
  {
    key: "lv",
    title: "Low Voltage Protection",
    subtitle: "For Distribution, Backup & Metering",
    cta: { label: "View All Products →", href: "/products" },
    items: [
      { label: "AC MCB", href: "/products/category/mcb/ac-mcb" },
      { label: "AC SPD", href: "/products/category/spd/ac-spd" },
      { label: "ATS", href: "/products/category/ats" },
      { label: "Voltage Protector", href: "/products/category/voltage-protector" },
      { label: "Energy Meter", href: "/products/category/energy-meter" },
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
    slug: "choose-right-mcb",
    title: "How to Choose the Right MCB for Your Application",
    seoTitle: "How to Choose the Right MCB — AC & DC Miniature Circuit Breaker Selection Guide",
    seoDescription:
      "Step-by-step MCB selection guide: rated current, breaking capacity, B/C/D trip curve, pole count and AC vs DC differences for solar and low voltage projects.",
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
    seoTitle: "Understanding SPD — Type 1, Type 2 & Type 1+2 Surge Protection Device Guide",
    seoDescription:
      "How surge protective devices work, where to install Type 1 / Type 2 / Type 1+2 SPDs, and how to compare AC SPD vs DC SPD specifications for solar and AC distribution.",
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
    seoTitle: "ATS Guide — Automatic Transfer Switch Sizing & Use Cases for Backup Power",
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
          "The four core parameters: pole count (2P / 3P / 4P depending on neutral switching needs), rated current (TPKELE [ATS units](/products/category/ats) cover 16A–125A for branch and small main applications), rated voltage (230V or 400V AC), and transfer time (typically ≤ 0.4s for IEC 60947-6-1 Class CB).",
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
    relatedProducts: ["ats"],
  },
  {
    slug: "solar-combiner-box-safety",
    title: "Solar Combiner Box: The Key to PV System Safety",
    seoTitle: "PV Combiner Box Guide — DC Protection and Safety for Solar Arrays",
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
    seoTitle: "Industrial Energy Meter Guide — DIN Rail kWh Meters for Sub-Metering",
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
    seoTitle: "TPKELE at SNEC 2026 — Solar DC Protection Highlights from Shanghai",
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
    { label: "Certification", value: "CE, RoHS, IEC 60898-1" },
    { label: "Contact Material", value: "High-Conductivity Copper Alloy" },
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
    { label: "Certification", value: "CE, RoHS, IEC 61643-11" },
  ],
  ATS: [
    { label: "Poles", value: "2P / 3P / 4P" },
    { label: "Rated Current", value: "16A – 125A" },
    { label: "Rated Voltage", value: "230V / 400V AC" },
    { label: "Transfer Time", value: "≤ 0.4 s" },
    { label: "Mechanical Life", value: "8,000 operations" },
    { label: "Electrical Life", value: "2,000 operations" },
    { label: "Mounting", value: "DIN-rail 35mm" },
    { label: "Certification", value: "CE, IEC 60947-6-1" },
  ],
  "Combiner Box": [
    { label: "Enclosure", value: "Plastic / Metal" },
    { label: "Protection Rating", value: "IP65" },
    { label: "Inputs", value: "2 / 4 / 6 / 8 / 12 / 16 strings" },
    { label: "Max DC Voltage", value: "1000V / 1500V DC" },
    { label: "Internal Components", value: "DC fuse, DC SPD, DC breaker" },
    { label: "Operating Temperature", value: "-25°C to +60°C" },
    { label: "Mounting", value: "Wall mount" },
    { label: "Certification", value: "CE, IEC 61439" },
  ],
  "Voltage Protector": [
    { label: "Phase", value: "Single phase / Three phase" },
    { label: "Rated Voltage", value: "230V / 400V AC" },
    { label: "Over Voltage Trip", value: "Adjustable, 245V – 280V" },
    { label: "Under Voltage Trip", value: "Adjustable, 150V – 210V" },
    { label: "Reconnection Delay", value: "Adjustable, 5s – 600s" },
    { label: "Response Time", value: "< 200 ms" },
    { label: "Mounting", value: "DIN-rail 35mm" },
    { label: "Certification", value: "CE, RoHS" },
  ],
  "Energy Meter": [
    { label: "Phase", value: "Single phase / Three phase" },
    { label: "Rated Voltage", value: "230V / 400V AC" },
    { label: "Rated Current", value: "5(80)A direct / CT operated" },
    { label: "Accuracy Class", value: "Class 1 (active energy)" },
    { label: "Display", value: "LCD digital display" },
    { label: "Communication", value: "Pulse output / RS485 Modbus (optional)" },
    { label: "Mounting", value: "DIN-rail 35mm" },
    { label: "Certification", value: "CE, IEC 62052/62053" },
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
  return list.slice(0, 3);
}

export function getRelatedProducts(product: Product, limit = 8): Product[] {
  const sameSub = product.subCategorySlug
    ? products.filter((p) => p.subCategorySlug === product.subCategorySlug && p.slug !== product.slug)
    : [];
  const sameCategory = products.filter(
    (p) => p.parentCategory === product.parentCategory && p.slug !== product.slug && !sameSub.includes(p),
  );
  return [...sameSub, ...sameCategory].slice(0, limit);
}
