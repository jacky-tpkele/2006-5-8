import dcMcbSelectionGuide from '../data/guides/dc-mcb-selection-guide.json';
import dcSpdSelectionGuide from '../data/guides/dc-spd-selection-guide.json';
import atsSelectionGuide from '../data/guides/ats-selection-guide.json';
import acMcbSelectionGuide from '../data/guides/ac-mcb-selection-guide.json';
import voltageProtectorSelectionGuide from '../data/guides/voltage-protector-selection-guide.json';
import dinRailEnergyMeterGuide from '../data/guides/din-rail-energy-meter-guide.json';
import pvCombinerBoxGuide from '../data/guides/pv-combiner-box-guide.json';
import dcIsolatorSelectionGuide from '../data/guides/dc-isolator-selection-guide.json';
import rccbRcboSelectionGuide from '../data/guides/rccb-rcbo-selection-guide.json';
import solarPvProtectionSystemGuide from '../data/guides/solar-pv-protection-system-guide.json';

export const guides = [dcMcbSelectionGuide, dcSpdSelectionGuide, atsSelectionGuide, acMcbSelectionGuide, voltageProtectorSelectionGuide, dinRailEnergyMeterGuide, pvCombinerBoxGuide, dcIsolatorSelectionGuide, rccbRcboSelectionGuide, solarPvProtectionSystemGuide];

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug) || null;
}
