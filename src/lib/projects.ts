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

export const projects = [zimbabweProject];
