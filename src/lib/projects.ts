export type ProjectEquipment = {
  title: string;
  spec: string;
  note?: string;
  category: 'generation' | 'conversion' | 'storage' | 'protection' | 'distribution' | 'installation';
};

export type ProductMatch = {
  name: string;
  procurementRequirement: string;
  fit: 'direct-family-fit' | 'technical-confirmation';
  role: string;
  href: string;
  image: string;
  fallback: string;
};

export const zimbabweProject = {
  slug: 'zimbabwe-sirdc-solar-project',
  route: '/projects/zimbabwe-sirdc-solar-project',
  country: 'Zimbabwe',
  organization: 'SIRDC',
  procurementReference: 'SIRDC 19/2026',
  officialTitle: 'Supply and Delivery of Solar Equipment and Accessories — SIRDC 19/2026',
  displayTitle: 'Zimbabwe Solar PV & Battery Storage Project — SIRDC 19/2026',
  seoTitle: 'Zimbabwe Solar PV & Battery Storage Project | SIRDC 19/2026',
  summary:
    'A buyer-provided solar equipment procurement reference in Zimbabwe covering bifacial PV modules, hybrid and off-grid inverters, 48V lithium battery storage, DC/AC protection, surge protection, automatic changeover and distribution equipment.',
  hero: '/assets/projects/project-hero.webp',
  og: '/assets/projects/zimbabwe-sirdc-project-og.jpg',
  tags: ['Solar PV', 'Battery Storage', 'DC/AC Protection', 'Automatic Transfer', 'Power Distribution'],
};

export const mongoliaProject = {
  slug: 'mongolia-ulaanbaatar-battery-storage',
  route: '/projects/mongolia-ulaanbaatar-battery-storage',
  country: 'Mongolia',
  city: 'Ulaanbaatar',
  completionDate: '2026-11-05',
  displayTitle: 'Mongolia Battery Storage & Multi-Inverter Distribution Project',
  seoTitle: 'Mongolia Battery Storage Distribution Box Project | Ulaanbaatar',
  summary:
    'Custom-engineered DC and AC distribution boxes for a large-scale battery energy storage system with 11 parallel inverters in Ulaanbaatar, Mongolia. Pre-assembled, tested enclosures with 300A DC breakers, modular AC protection and UV-printed branding.',
  hero: '/assets/projects/project-hero.webp',
  og: '/assets/projects/mongolia-project-og.jpg',
  tags: ['Battery Storage', 'Custom Distribution Box', 'Multi-Inverter System', 'Pre-Assembled Enclosure', 'OEM Panel'],
  systemCapacity: '~330kW',
  inverterCount: 11,
  batteryCapacity: 'Large-scale lithium battery bank',
};

export const procurementEquipment: ProjectEquipment[] = [
  {
    title: 'Solar PV Modules',
    spec: '600W · 55V · Monocrystalline · Split Cell · Bifacial',
    note: 'The procurement sheet also requests a consignment-based conformity assessment certificate on delivery.',
    category: 'generation',
  },
  {
    title: 'Hybrid Inverter — 3 Phase',
    spec: '12kVA · Inbuilt MPPT · 2 MPPT or more · IP65 or better',
    note: 'Deye / Sunsynk or equivalent; net metering, auxiliary load function and web/mobile monitoring are listed in the buyer specification.',
    category: 'conversion',
  },
  {
    title: 'Hybrid Inverter — Single Phase',
    spec: '8kVA · Inbuilt MPPT · 2 MPPT or more · IP65 or better',
    note: 'Deye / Sunsynk or equivalent; net metering, auxiliary load function and web/mobile monitoring are listed in the buyer specification.',
    category: 'conversion',
  },
  {
    title: 'Off-Grid Inverter',
    spec: '5kVA · Inbuilt MPPT · Single Phase',
    note: 'Deye / Sunsynk or equivalent with web/mobile monitoring as stated in the procurement sheet.',
    category: 'conversion',
  },
  {
    title: 'Lithium Battery Storage',
    spec: '48V · 200Ah · At least 9.6kWh usable energy',
    note: 'Power jumpers, lugs, communication cables and racking are included in the battery requirement.',
    category: 'storage',
  },
  {
    title: 'Battery-Side Components',
    spec: '250A battery fuse · 300A bus bar · 35mm / 25mm DC battery cables',
    note: 'These support the battery connection and DC distribution side of the system.',
    category: 'storage',
  },
  {
    title: 'Protection & Switching',
    spec: '63A 2P DC breaker · DC SPD · 63A AC breakers · AC SPD · Automatic changeover',
    note: 'The buyer lists both single-phase and three-phase AC / transfer configurations.',
    category: 'protection',
  },
  {
    title: 'Distribution & Installation',
    spec: '12-way / 18-way PVC DB · rails · trunking · conduit · couplings · saddles',
    note: 'Installation hardware and battery racking are part of the wider project procurement scope.',
    category: 'installation',
  },
];

export const productMatches: ProductMatch[] = [
  {
    name: 'DC MCB — 63A Double Pole',
    procurementRequirement: 'Breaker DC · 63A · Double Pole · DIN type · Array',
    fit: 'direct-family-fit',
    role: 'PV-array DC isolation and overcurrent protection. Final model still depends on confirmed PV string voltage and fault conditions.',
    href: '/products/dc-mcb',
    image: '/assets/products/gallery/dc-mcb-2p-1.webp',
    fallback: '/assets/projects/fallbacks/dc-mcb.svg',
  },
  {
    name: 'DC SPD',
    procurementRequirement: 'DC SPD · DIN · DC',
    fit: 'direct-family-fit',
    role: 'DC-side surge protection for the PV / inverter interface. System voltage and surge-protection design must be confirmed before selection.',
    href: '/products/dc-spd',
    image: '/assets/home-products-normalized/spd.webp',
    fallback: '/assets/projects/fallbacks/spd.svg',
  },
  {
    name: 'AC MCB — Single Phase',
    procurementRequirement: 'Breaker AC · DIN Type · 1 Phase · 63A · Double Pole',
    fit: 'direct-family-fit',
    role: 'Two-pole protection and isolation for the single-phase inverter output / distribution circuits specified by the buyer.',
    href: '/products/ac-mcb',
    image: '/assets/products/gallery/ac-mcb-2p-1.webp',
    fallback: '/assets/projects/fallbacks/ac-mcb.svg',
  },
  {
    name: 'AC MCB — Three Phase',
    procurementRequirement: 'Breaker AC · DIN Type · 3 Phase · 63A',
    fit: 'direct-family-fit',
    role: 'Three-phase output / distribution protection for the three-phase portion of the project.',
    href: '/products/ac-mcb',
    image: '/assets/products/gallery/ac-mcb-3p-1.webp',
    fallback: '/assets/projects/fallbacks/ac-mcb.svg',
  },
  {
    name: 'AC SPD — Single & Three Phase',
    procurementRequirement: 'AC SPD · Single Phase DIN + 4 Pole / 3 Phase DIN',
    fit: 'direct-family-fit',
    role: 'AC-side surge protection for both single-phase and three-phase distribution sections.',
    href: '/products/ac-spd',
    image: '/assets/home-products-normalized/spd.webp',
    fallback: '/assets/projects/fallbacks/spd.svg',
  },
  {
    name: 'Automatic Transfer — Single Phase',
    procurementRequirement: 'Changeover Switch · Auto · 1 Phase · Compatible with inverter output',
    fit: 'technical-confirmation',
    role: 'TPKELE automatic transfer switch families provide automatic source transfer, but final source pairing, neutral arrangement and inverter compatibility must be checked.',
    href: '/products/ats',
    image: '/assets/products/gallery/ats-st-2p-1.webp',
    fallback: '/assets/projects/fallbacks/ats.svg',
  },
  {
    name: 'Automatic Transfer — Three Phase',
    procurementRequirement: 'Changeover Switch · Auto · 3 Phase · Compatible with inverter output',
    fit: 'technical-confirmation',
    role: 'Three-phase ATS configuration can align functionally with the changeover requirement after voltage, poles, transfer logic and neutral switching are confirmed.',
    href: '/products/ats',
    image: '/assets/products/gallery/ats-w2r-3p-1.webp',
    fallback: '/assets/projects/fallbacks/ats.svg',
  },
  {
    name: 'AVS / Voltage Protection',
    procurementRequirement: 'Digital DIN AVS · 60A · 3 Phase / 3 Pole + Digital DIN Type 1 Phase',
    fit: 'technical-confirmation',
    role: 'TPKELE has single- and three-phase voltage-protection families, but this is not presented as a direct model match until the buyer AVS functions and thresholds are confirmed.',
    href: '/products/voltage-protector',
    image: '/assets/products/gallery/pn2-va2-1.webp',
    fallback: '/assets/projects/fallbacks/voltage-protector.svg',
  },
];

export const mongoliaEquipment: ProjectEquipment[] = [
  {
    title: 'DC-01 Battery DC Distribution Box (×2)',
    spec: '2P 300A DC MCCB · 12× PG21 cable glands',
    note: 'High-current DC protection for battery-side connection. Two identical boxes for dual battery cabinet configuration.',
    category: 'protection',
  },
  {
    title: 'DC-02 Battery DC Distribution Box (×2)',
    spec: '2P 300A DC MCCB · 12× PG21 cable glands',
    note: 'Duplicate battery-side DC boxes matching DC-01 specification for system redundancy.',
    category: 'protection',
  },
  {
    title: 'AC-01 Inverter AC Distribution Box (×11)',
    spec: '3× 4P 25A AC MCB · 6× 2P 16A AC MCB · 3× 4P 20kA AC SPD · PE busbar · 6× PG21',
    note: 'One box per inverter. Three-phase + neutral protection with comprehensive surge protection and earth bonding.',
    category: 'protection',
  },
  {
    title: 'AC-02 AC Collection Box (×1)',
    spec: '2× 4P 25A AC MCB · 2× 4P 20kA AC SPD',
    note: 'Main AC collection point aggregating outputs from 11 inverter distribution boxes before grid connection.',
    category: 'protection',
  },
  {
    title: 'Inverter System',
    spec: '11× parallel three-phase inverters · estimated 30kW each',
    note: 'Multi-inverter parallel configuration requiring coordinated AC protection and collection.',
    category: 'conversion',
  },
  {
    title: 'Battery Storage System',
    spec: 'Large-scale lithium battery bank · dual cabinet configuration',
    note: 'High-capacity battery array with dual DC distribution for safety and maintenance isolation.',
    category: 'storage',
  },
];

export const mongoliaProductMatches: ProductMatch[] = [
  {
    name: 'DC MCCB — 300A 2-Pole',
    procurementRequirement: '2P 300A DC MCCB for battery-side protection',
    fit: 'technical-confirmation',
    role: 'High-current DC molded case circuit breaker for battery cabinet isolation and overcurrent protection. Requires confirmation of DC voltage, breaking capacity and battery system architecture.',
    href: '/products/dc-mcb',
    image: '/assets/products/gallery/dc-mcb-2p-1.webp',
    fallback: '/assets/projects/fallbacks/dc-mcb.svg',
  },
  {
    name: 'AC MCB — 4P 25A',
    procurementRequirement: '4P 25A AC MCB for three-phase inverter output',
    fit: 'direct-family-fit',
    role: 'Three-phase + neutral protection for individual inverter AC outputs. Direct product family match.',
    href: '/products/ac-mcb',
    image: '/assets/products/gallery/ac-mcb-4p-1.webp',
    fallback: '/assets/projects/fallbacks/ac-mcb.svg',
  },
  {
    name: 'AC MCB — 2P 16A',
    procurementRequirement: '2P 16A AC MCB for branch circuit protection',
    fit: 'direct-family-fit',
    role: 'Two-pole branch circuit protection within inverter distribution boxes. Direct product family match.',
    href: '/products/ac-mcb',
    image: '/assets/products/gallery/ac-mcb-2p-1.webp',
    fallback: '/assets/projects/fallbacks/ac-mcb.svg',
  },
  {
    name: 'AC 4P SPD — 20kA',
    procurementRequirement: '4P 20kA AC SPD for three-phase surge protection',
    fit: 'direct-family-fit',
    role: 'Four-pole surge protection for three-phase distribution. Matches newly added AC 4P SPD product family.',
    href: '/products/ac-spd-4p',
    image: '/assets/products/ac-spd-4p-2.webp',
    fallback: '/assets/projects/fallbacks/spd.svg',
  },
  {
    name: 'Custom Distribution Box Assembly',
    procurementRequirement: 'Pre-assembled, tested distribution boxes with UV-printed panels',
    fit: 'direct-family-fit',
    role: 'TPKELE custom enclosure service: component integration, wiring, testing, UV panel printing and project-specific labeling.',
    href: '/solutions/custom-distribution-boxes',
    image: '/assets/products/mongolia-panel.webp',
    fallback: '/assets/projects/fallbacks/distribution-box.svg',
  },
];

export const projects = [mongoliaProject, zimbabweProject];
