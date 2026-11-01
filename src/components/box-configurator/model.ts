import {
  componentById,
  extras,
  recommendBox,
  seriesByCode,
  type Flow,
  type Material,
} from "@/data/box-configurator";
import type { BoxLocale } from "@/data/distribution-boxes";

export type Item = { uid: string; id: string; specs: Record<string, string>; qty: number };

export type Line = {
  uid: string;
  flow: Flow;
  material: Material;
  series?: string;
  model?: string;
  metalWays?: string;
  metalDims?: string;
  install: "indoor" | "outdoor";
  sizeMode: "auto" | "manual";
  items: Item[];
  engineerPicks: boolean;
  qty: number;
  extras: string[];
  notes: string;
};

export const uid = () => Math.random().toString(36).slice(2, 10);

export function newLine(flow: Flow): Line {
  return {
    uid: uid(),
    flow,
    material: "abs",
    install: "outdoor",
    sizeMode: flow === "empty" ? "manual" : "auto",
    items: [],
    engineerPicks: false,
    qty: flow === "empty" ? 500 : 1,
    extras: [],
    notes: "",
  };
}

export function itemModules(item: Item) {
  const def = componentById(item.id);
  return def ? def.modules(item.specs) * item.qty : 0;
}

export function usedModules(line: Line) {
  return line.items.reduce((sum, i) => sum + itemModules(i), 0);
}

export function chosenSize(line: Line) {
  const series = line.series ? seriesByCode(line.series) : undefined;
  const size = series?.sizes.find((s) => s.model === line.model);
  return series && size ? { series, size } : null;
}

/** Box capacity in modules: chosen size, metal ways, or the recommendation (used + 20%). */
export function boxFit(line: Line) {
  const used = usedModules(line);
  if (line.material === "metal") {
    const ways = Number(line.metalWays) || 0;
    return { used, capacity: ways || null, rec: null };
  }
  if (line.sizeMode === "manual") {
    const c = chosenSize(line);
    return { used, capacity: c?.size.ways ?? null, rec: null };
  }
  const rec = used > 0 ? recommendBox(Math.ceil(used * 1.2), line.install === "outdoor") : null;
  return { used, capacity: rec?.size.ways ?? null, rec };
}

export function specText(item: Item) {
  return Object.values(item.specs).join(" · ");
}

const flowName = { empty: "Empty enclosure", ac: "Custom AC distribution box", dc: "Custom DC distribution box" };

export function lineTitle(line: Line, lang: BoxLocale) {
  const c = chosenSize(line);
  if (line.flow === "empty") {
    if (line.material === "metal") return `${lang === "ru" ? "Металлический корпус" : "Metal enclosure"} ${line.metalWays ? `${line.metalWays}` : ""}`.trim();
    return c ? `${c.series.name[lang]} · ${c.size.model}` : flowName.empty;
  }
  return lang === "ru" ? (line.flow === "ac" ? "Щит AC на заказ" : "Щит DC на заказ") : flowName[line.flow].replace("distribution ", "");
}

/** Plain-text block sent to the CRM. Always English so sales reads one format. */
export function lineToText(line: Line, index: number) {
  const out: string[] = [`[${index + 1}] ${flowName[line.flow]} x ${line.qty} ${line.flow === "empty" ? "sets" : "boxes"}`];
  const c = chosenSize(line);
  const mat = line.material === "abs" ? "ABS plastic" : "Metal (steel)";
  if (line.material === "metal") {
    out.push(`Enclosure: ${mat}, ${line.metalWays || "?"} ways${line.metalDims ? `, ${line.metalDims} mm` : ""}`);
  } else if (c) {
    out.push(`Enclosure: ${mat}, ${c.series.code} ${c.size.model} (${c.size.ways} ways${c.size.dims ? `, ${c.size.dims}` : ""}, ${c.series.ip})`);
  } else if (line.flow !== "empty") {
    const fit = boxFit(line);
    out.push(`Enclosure: ${mat}, size to be recommended${fit.rec ? ` (suggested ${fit.rec.size.model}, ${fit.rec.size.ways} ways)` : ""}`);
  }
  if (line.flow !== "empty") {
    out.push(`Installation: ${line.install}`);
    if (line.engineerPicks && line.items.length === 0) out.push("Components: please recommend");
    else {
      out.push("Components per box:");
      for (const i of line.items) out.push(`  - ${componentById(i.id)?.name.en} | ${specText(i)} | x${i.qty}`);
      out.push(`DIN modules used: ${usedModules(line)}`);
    }
  }
  const ex = line.extras.map((id) => extras.find((e) => e.id === id)?.label.en).filter(Boolean);
  if (ex.length) out.push(`Options: ${ex.join(", ")}`);
  if (line.notes.trim()) out.push(`Notes: ${line.notes.trim()}`);
  return out.join("\n");
}

export function track(event: string, params: Record<string, unknown> = {}) {
  const w = window as unknown as { gtag?: (...a: unknown[]) => void };
  w.gtag?.("event", event, params);
}
