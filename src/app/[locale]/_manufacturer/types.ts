export type CheckItem = {
  title: string;
  text: string;
};

export type ContrastCard = {
  title: string;
  text: string;
};

export type CompareRow = {
  left: string;
  right: string;
};

export type CompareTable = {
  title: string;
  headers: [string, string];
  rows: CompareRow[];
};

export type SeriesCard = {
  label: string;
  meta: string;
  href: string;
};

export type ListBlock = {
  title: string;
  items: string[];
};

export type FaqItem = {
  q: string;
  a: string;
};

export type ManufacturerData = {
  slug: string;
  category: string;
  productLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  heroTags: string[];
  heroImage: string;
  checklistTitle: string;
  checklist: CheckItem[];
  whyTitle: string;
  whyIntro: string;
  whyCards: ContrastCard[];
  compare: CompareTable;
  scopeTitle: string;
  scopeIntro: string;
  series: SeriesCard[];
  scopeNote: string;
  buyerTitle: string;
  buyerIntro: string;
  buyerBlocks: ListBlock[];
  oemTitle: string;
  oemIntro: string;
  oemCards: ContrastCard[];
  factoryTitle: string;
  factoryIntro: string;
  factoryBlocks: ListBlock[];
  docsTitle: string;
  docsIntro: string;
  docsTable: CompareTable;
  standardsTitle: string;
  standardsIntro: string;
  standardsTable: CompareTable;
  commercialTitle: string;
  commercialIntro: string;
  commercialTable: CompareTable;
  faqTitle: string;
  faq: FaqItem[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
};
