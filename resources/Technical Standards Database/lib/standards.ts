import { standards } from "@/data/standards";

export const productFamilies = [
  "DC MCB","AC MCB","DC SPD","AC SPD","ATS","Energy Meter","PV Combiner Box","Voltage Protector"
];

export const standardsSystems = ["IEC","UL"];
export const applications = ["Solar / PV","Residential","Commercial","Industrial","Power Distribution","Metering"];
export const statuses = ["Current","Scope check"];
export const referenceTypes = Array.from(new Set(standards.map((s) => s.referenceType))).sort();

export function getStandardBySlug(slug: string) {
  return standards.find((item) => item.slug === slug);
}

export function getRelatedStandards(slug: string) {
  const current = getStandardBySlug(slug);
  if (!current) return [];
  return standards
    .filter((item) => item.slug !== slug && item.products.some((p) => current.products.includes(p)))
    .sort((a,b) => {
      const overlapA = a.products.filter((p) => current.products.includes(p)).length;
      const overlapB = b.products.filter((p) => current.products.includes(p)).length;
      return overlapB - overlapA || b.year - a.year;
    })
    .slice(0, 6);
}
