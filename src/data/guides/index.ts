export type GuideSection = {
  id: string;
  title: string;
  content: string;
};

export type Guide = {
  slug: string;
  title: string;
  description?: string;
  product: string;
  application: string;
  sections: GuideSection[];
  marketAccessAdvisor?: {
    enabled: boolean;
    product: string;
    application: string;
    market?: string;
    buyer?: string;
  };
};

// Import all guides
import dcMcbGuide from "./dc-mcb-selection-guide";

const guides: Guide[] = [dcMcbGuide];

export function getAllGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuides(): Guide[] {
  return guides;
}
