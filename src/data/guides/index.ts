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
import acMcbGuide from "./ac-mcb-selection-guide";
import dcSpdGuide from "./dc-spd-selection-guide";
import atsGuide from "./ats-selection-guide";
import voltageProtectorGuide from "./voltage-protector-selection-guide";
import dinRailEnergyMeterGuide from "./din-rail-energy-meter-guide";
import pvCombinerBoxGuide from "./pv-combiner-box-guide";
import dcIsolatorGuide from "./dc-isolator-selection-guide";
import rccbRcboGuide from "./rccb-rcbo-selection-guide";
import solarPvProtectionSystemGuide from "./solar-pv-protection-system-guide";

const guides: Guide[] = [
  dcMcbGuide,
  dcSpdGuide,
  atsGuide,
  acMcbGuide,
  voltageProtectorGuide,
  dinRailEnergyMeterGuide,
  pvCombinerBoxGuide,
  dcIsolatorGuide,
  rccbRcboGuide,
  solarPvProtectionSystemGuide,
];

export function getAllGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuides(): Guide[] {
  return guides;
}
