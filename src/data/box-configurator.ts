import type { BoxLocale } from "@/data/distribution-boxes";
import { enclosureSeries } from "@/data/enclosures";

// Data for the distribution box configurator (/products/distribution-boxes/configurator).
// Empty-box sizes are read from enclosures.ts so both pages stay in sync.

export type L = Record<BoxLocale, string>;
export type Flow = "empty" | "ac" | "dc";
export type Material = "abs" | "metal";

export const EMPTY_BOX_MOQ = 500;

/* ---------- Enclosures ---------- */

export type BoxSize = { model: string; ways: number; dims?: string };

export type ConfigSeries = {
  code: string;
  material: Material;
  ip: string;
  indoorOnly?: boolean;
  image: string;
  href?: string;
  name: L;
  tag: L;
  sizes: BoxSize[];
};

function rowsOf(slug: string, tableIndex = 0): BoxSize[] {
  const s = enclosureSeries.find((x) => x.slug === slug);
  const rows = s?.tables[tableIndex]?.rows ?? [];
  return rows.map((r) => {
    const ways = Number(String(r[1]).split(/[–-]/).pop());
    const [w, h, d] = [r[2], r[3], r[4]];
    const dims = s?.tables[tableIndex].headers.en[2]?.startsWith("Width") && w && h ? `${w}×${h}${d ? `×${d}` : ""} mm` : undefined;
    return { model: String(r[0]), ways, dims };
  });
}

export const configSeries: ConfigSeries[] = [
  {
    code: "HT",
    material: "abs",
    ip: "IP65",
    image: "/assets/enclosures/enclosure-ht.webp",
    href: "/products/enclosure-ht",
    name: { en: "HT Waterproof", ru: "HT влагозащищённый" },
    tag: { en: "Compact outdoor box", ru: "Компактный уличный" },
    sizes: rowsOf("enclosure-ht"),
  },
  {
    code: "HA",
    material: "abs",
    ip: "IP65",
    image: "/assets/enclosures/enclosure-ha.webp",
    href: "/products/enclosure-ha",
    name: { en: "HA Waterproof", ru: "HA влагозащищённый" },
    tag: { en: "Deeper body, more cable space", ru: "Увеличенная глубина" },
    sizes: rowsOf("enclosure-ha"),
  },
  {
    code: "HV",
    material: "abs",
    ip: "IP65",
    image: "/assets/enclosures/enclosure-hv.webp",
    href: "/products/enclosure-hv",
    name: { en: "HV Waterproof", ru: "HV влагозащищённый" },
    tag: { en: "Widest range, up to 36 ways", ru: "Самый широкий ряд, до 36 модулей" },
    sizes: rowsOf("enclosure-hv"),
  },
  {
    code: "TPMS",
    material: "abs",
    ip: "IP50",
    indoorOnly: true,
    image: "/assets/enclosures/enclosure-ms-mf.webp",
    href: "/products/enclosure-ms-mf",
    name: { en: "TPMS Surface-Mounted", ru: "TPMS накладной" },
    tag: { en: "Indoor, transparent door", ru: "Для помещений, прозрачная дверца" },
    sizes: rowsOf("enclosure-ms-mf", 0),
  },
  {
    code: "TPMF",
    material: "abs",
    ip: "IP50",
    indoorOnly: true,
    image: "/assets/enclosures/enclosure-ms-mf.webp",
    href: "/products/enclosure-ms-mf",
    name: { en: "TPMF Flush-Mounted", ru: "TPMF встраиваемый" },
    tag: { en: "Indoor, set into the wall", ru: "Для помещений, в стену" },
    sizes: rowsOf("enclosure-ms-mf", 1),
  },
  // Metal catalog not published yet: empty sizes -> customer enters ways / dimensions.
  {
    code: "METAL",
    material: "metal",
    ip: "IP40–IP65",
    image: "/assets/enclosures/metal-placeholder.svg",
    name: { en: "Metal Enclosure", ru: "Металлический корпус" },
    tag: { en: "Powder-coated steel, sized to order", ru: "Сталь с порошковой окраской, под заказ" },
    sizes: [],
  },
];

export function seriesByCode(code: string) {
  return configSeries.find((s) => s.code === code);
}

/** Smallest ABS box with at least `need` ways; outdoor excludes IP50 series. */
export function recommendBox(need: number, outdoor: boolean): { series: ConfigSeries; size: BoxSize } | null {
  let best: { series: ConfigSeries; size: BoxSize } | null = null;
  for (const series of configSeries) {
    if (series.material !== "abs" || (outdoor && series.indoorOnly)) continue;
    for (const size of series.sizes) {
      if (size.ways >= need && (!best || size.ways < best.size.ways)) best = { series, size };
    }
  }
  return best;
}

/* ---------- Components ---------- */

export type SpecOption = {
  v: string;
  note?: L;
  /** 1–4: relative cost / duty level, shown as dots */
  tier?: number;
};

export type SpecGroup = {
  key: string;
  label: L;
  hint?: L;
  options: SpecOption[];
  /** default option value */
  def: string;
  /** render as a chip grid instead of a segmented control */
  wide?: boolean;
};

export type Kind = "mcb" | "mccb" | "rcbo" | "rccb" | "spd" | "meter" | "vp" | "ats" | "contactor" | "smart" | "fuse" | "isolator" | "acc";

export type ComponentDef = {
  id: string;
  flow: Exclude<Flow, "empty">;
  kind: Kind;
  name: L;
  desc: L;
  image: string;
  href?: string;
  specs: SpecGroup[];
  /** DIN modules (18mm) per unit, from chosen specs. 0 = not on the rail */
  modules: (s: Record<string, string>) => number;
  /** short label printed on the rail block */
  badge: (s: Record<string, string>) => string;
};

const poles = (list: string[], def: string): SpecGroup => ({
  key: "poles",
  label: { en: "Poles", ru: "Полюса" },
  options: list.map((v) => ({ v })),
  def,
});

const amps = (list: number[], def: number, label?: L): SpecGroup => ({
  key: "amps",
  label: label ?? { en: "Rated current", ru: "Номинальный ток" },
  options: list.map((a) => ({ v: `${a}A` })),
  def: `${def}A`,
  wide: true,
});

const curve: SpecGroup = {
  key: "curve",
  label: { en: "Trip curve", ru: "Характеристика" },
  options: [
    { v: "B", note: { en: "Lighting, resistive loads", ru: "Освещение, активная нагрузка" } },
    { v: "C", note: { en: "General distribution", ru: "Общая распределительная сеть" } },
    { v: "D", note: { en: "Motors, high inrush", ru: "Двигатели, большие пусковые токи" } },
  ],
  def: "C",
};

const breakingHint: L = {
  en: "Higher breaking capacity handles larger short-circuit currents. It affects build quality and price.",
  ru: "Чем выше отключающая способность, тем больший ток КЗ выдерживает автомат. Влияет на качество и цену.",
};

const acBreaking: SpecGroup = {
  key: "icn",
  label: { en: "Breaking capacity", ru: "Отключающая способность" },
  hint: breakingHint,
  options: [
    { v: "4.5kA", tier: 1, note: { en: "Economy, residential", ru: "Эконом, жилые объекты" } },
    { v: "6kA", tier: 2, note: { en: "Standard, most projects", ru: "Стандарт, большинство проектов" } },
    { v: "10kA", tier: 3, note: { en: "Commercial & industrial", ru: "Коммерция и промышленность" } },
  ],
  def: "6kA",
};

const dcBreaking: SpecGroup = {
  ...acBreaking,
  options: [
    { v: "4.5kA", tier: 1, note: { en: "Small residential PV", ru: "Небольшие бытовые СЭС" } },
    { v: "6kA", tier: 2, note: { en: "Standard PV & storage", ru: "Стандарт: СЭС и накопители" } },
    { v: "10kA", tier: 3, note: { en: "C&I, battery banks", ru: "Коммерческие объекты, АКБ" } },
    { v: "15kA", tier: 4, note: { en: "High fault level", ru: "Высокий ток КЗ" } },
    { v: "20kA", tier: 4, note: { en: "Large battery systems", ru: "Крупные батарейные системы" } },
  ],
};

const poleWidth = (p: string) => (p === "1P+N" ? 2 : Number(p[0]) + (p.includes("+N") ? 1 : 0));
const ampNum = (s: Record<string, string>) => parseInt(s.amps ?? "0", 10);
/** 80–125A frame is 1.5 modules per pole */
const mcbWidth = (s: Record<string, string>) => poleWidth(s.poles) * (ampNum(s) > 63 ? 1.5 : 1);

const spdImax: SpecGroup = {
  key: "imax",
  label: { en: "Discharge current In / Imax", ru: "Ток разряда In / Imax" },
  hint: {
    en: "Higher Imax lasts longer in high-lightning areas. It affects price.",
    ru: "Больший Imax дольше служит в грозовых районах. Влияет на цену.",
  },
  options: [
    { v: "10/20kA", tier: 1, note: { en: "Final boards, low exposure", ru: "Конечные щиты, низкий риск" } },
    { v: "20/40kA", tier: 2, note: { en: "Standard Type 2", ru: "Стандарт, тип 2" } },
    { v: "30/60kA", tier: 3, note: { en: "High-lightning areas", ru: "Грозовые районы" } },
  ],
  def: "20/40kA",
};

const g = (p: string) => `/assets/products/gallery/${p}`;
/** Component photos supplied for the configurator (caption cropped, 480px WebP). */
const cfg = (n: string) => `/assets/configurator/${n}.webp`;

export const components: ComponentDef[] = [
  /* ---- AC ---- */
  {
    id: "ac-mcb",
    flow: "ac",
    kind: "mcb",
    name: { en: "AC MCB", ru: "Автомат AC" },
    desc: { en: "Overload & short-circuit protection, IEC 60898-1", ru: "Защита от перегрузки и КЗ, IEC 60898-1" },
    image: cfg("ac-mcb"),
    href: "/products/ac-mcb",
    specs: [
      poles(["1P", "1P+N", "2P", "3P", "3P+N", "4P"], "1P"),
      amps([1, 2, 3, 4, 6, 10, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125], 16),
      curve,
      acBreaking,
    ],
    modules: mcbWidth,
    badge: (s) => `${s.curve}${ampNum(s)}`,
  },
  {
    id: "mccb",
    flow: "ac",
    kind: "mccb",
    name: { en: "MCCB (Molded Case Circuit Breaker)", ru: "Автомат в литом корпусе (MCCB)" },
    desc: { en: "High-current circuit breaker, 63–1600A, IEC 60947-2", ru: "Силовой автомат, 63–1600А, IEC 60947-2" },
    image: cfg("mccb"),
    specs: [
      poles(["3P", "4P"], "3P"),
      {
        key: "frame",
        label: { en: "Frame size", ru: "Размер корпуса" },
        options: [
          { v: "100A frame", note: { en: "63–100A", ru: "63–100А" } },
          { v: "225A frame", note: { en: "125–225A", ru: "125–225А" } },
          { v: "400A frame", note: { en: "250–400A", ru: "250–400А" } },
          { v: "630A frame", note: { en: "400–630A", ru: "400–630А" } },
        ],
        def: "225A frame",
      },
      {
        key: "amps",
        label: { en: "Rated current", ru: "Номинальный ток" },
        options: [63, 80, 100, 125, 160, 200, 225, 250, 315, 400, 500, 630].map((a) => ({ v: `${a}A` })),
        def: "160A",
        wide: true,
      },
      {
        key: "icn",
        label: { en: "Breaking capacity Icu", ru: "Отключающая способность Icu" },
        options: [
          { v: "25kA", tier: 1 },
          { v: "35kA", tier: 2 },
          { v: "50kA", tier: 3 },
          { v: "65kA", tier: 4 },
        ],
        def: "35kA",
      },
    ],
    modules: (s) => {
      const p = s.poles === "4P" ? 4 : 3;
      const frame = s.frame || "225A frame";
      if (frame.startsWith("100A")) return p * 1.5;
      if (frame.startsWith("225A")) return p * 2;
      return 0; // >225A: off-rail, mounted separately
    },
    badge: (s) => {
      const a = parseInt(s.amps || "0", 10);
      return a > 0 ? `${a}A` : "MCCB";
    },
  },
  {
    id: "rcbo",
    flow: "ac",
    kind: "rcbo",
    name: { en: "RCBO", ru: "АВДТ (RCBO)" },
    desc: { en: "Earth leakage + overcurrent in one 18mm module", ru: "Защита от утечки и сверхтока в одном модуле 18 мм" },
    image: cfg("rcbo"),
    href: "/products/rcbo-australia-new-zealand",
    specs: [
      amps([6, 10, 16, 20, 25, 32, 40], 20),
      {
        key: "ma",
        label: { en: "Sensitivity IΔn", ru: "Ток утечки IΔn" },
        options: [{ v: "10mA" }, { v: "30mA", note: { en: "Personal protection", ru: "Защита людей" } }, { v: "50mA" }, { v: "100mA" }],
        def: "30mA",
      },
      {
        key: "rtype",
        label: { en: "Residual type", ru: "Тип утечки" },
        options: [
          { v: "Type AC", note: { en: "Sinusoidal AC leakage", ru: "Синусоидальная утечка" } },
          { v: "Type A", note: { en: "Also pulsating DC: inverters, EV, appliances", ru: "Также пульсирующий DC: инверторы, техника" } },
        ],
        def: "Type A",
      },
      { ...curve, options: curve.options.slice(0, 2) },
    ],
    modules: () => 1,
    badge: (s) => `${s.curve}${ampNum(s)}`,
  },
  {
    id: "rccb",
    flow: "ac",
    kind: "rccb",
    name: { en: "RCCB (RCD)", ru: "УЗО (RCCB)" },
    desc: { en: "Earth leakage protection for a group of circuits", ru: "Защита от утечки для группы линий" },
    image: cfg("rccb"),
    specs: [
      poles(["2P", "4P"], "2P"),
      amps([25, 40, 63, 80, 100], 40),
      {
        key: "ma",
        label: { en: "Sensitivity IΔn", ru: "Ток утечки IΔn" },
        options: [{ v: "30mA" }, { v: "100mA" }, { v: "300mA", note: { en: "Fire protection", ru: "Противопожарная" } }],
        def: "30mA",
      },
      {
        key: "rtype",
        label: { en: "Residual type", ru: "Тип утечки" },
        options: [{ v: "Type AC" }, { v: "Type A" }],
        def: "Type A",
      },
    ],
    modules: (s) => (s.poles === "4P" ? 4 : 2),
    badge: (s) => `${parseInt(s.ma, 10)}mA`,
  },
  {
    id: "ac-spd",
    flow: "ac",
    kind: "spd",
    name: { en: "AC Surge Protector (SPD)", ru: "УЗИП AC" },
    desc: { en: "Lightning & switching surge protection, IEC 61643-11", ru: "Защита от грозовых и коммутационных перенапряжений" },
    image: cfg("ac-spd"),
    href: "/products/ac-spd",
    specs: [
      {
        key: "type",
        label: { en: "SPD type", ru: "Класс УЗИП" },
        options: [
          { v: "Type 2", note: { en: "Distribution boards (most common)", ru: "Распределительные щиты (чаще всего)" } },
          { v: "Type 1+2", note: { en: "Main board, buildings with lightning rod", ru: "ГРЩ, здания с молниеотводом" } },
          { v: "Type 1", note: { en: "Service entrance, direct strike", ru: "Ввод, прямой удар молнии" } },
        ],
        def: "Type 2",
      },
      poles(["1P", "1P+N", "2P", "3P", "3P+N", "4P"], "4P"),
      {
        key: "uc",
        label: { en: "Max. operating voltage Uc", ru: "Напряжение Uc" },
        options: [{ v: "275V" }, { v: "320V" }, { v: "385V", note: { en: "400V three-phase", ru: "Трёхфазная 400 В" } }, { v: "420V" }],
        def: "385V",
      },
      spdImax,
    ],
    modules: (s) => poleWidth(s.poles),
    badge: () => "SPD",
  },
  {
    id: "ac-meter",
    flow: "ac",
    kind: "meter",
    name: { en: "DIN-Rail Energy Meter", ru: "Счётчик на DIN-рейку" },
    desc: { en: "kWh metering, optional RS485 / Modbus", ru: "Учёт кВт·ч, опционально RS485 / Modbus" },
    image: cfg("energy-meter"),
    href: "/products/energy-meter",
    specs: [
      {
        key: "phase",
        label: { en: "System", ru: "Сеть" },
        options: [
          { v: "1-phase 1-module", note: { en: "Slim 18mm", ru: "Узкий 18 мм" } },
          { v: "1-phase 2-module" },
          { v: "3-phase 4-wire" },
        ],
        def: "1-phase 2-module",
      },
      {
        key: "load",
        label: { en: "Current", ru: "Ток" },
        options: [{ v: "5(60)A" }, { v: "10(80)A" }, { v: "20(100)A" }, { v: "1.5(6)A via CT", note: { en: "With current transformers", ru: "Через трансформаторы тока" } }],
        def: "5(60)A",
      },
      {
        key: "comm",
        label: { en: "Communication", ru: "Связь" },
        options: [{ v: "None" }, { v: "RS485 Modbus" }, { v: "Pulse output" }],
        def: "None",
      },
    ],
    modules: (s) => (s.phase.startsWith("3") ? 4 : s.phase.includes("1-module") ? 1 : 2),
    badge: () => "kWh",
  },
  {
    id: "vp",
    flow: "ac",
    kind: "vp",
    name: { en: "Over/Under Voltage Protector", ru: "Реле напряжения" },
    desc: { en: "Self-resetting, voltage + current display", ru: "Автовозврат, индикация напряжения и тока" },
    image: cfg("voltage-protector"),
    href: "/products/voltage-protector",
    specs: [
      {
        key: "model",
        label: { en: "Type", ru: "Тип" },
        options: [{ v: "Single-phase (PN2 series)" }, { v: "Three-phase" }],
        def: "Single-phase (PN2 series)",
      },
      amps([40, 63, 80], 63, { en: "Max. working current", ru: "Макс. рабочий ток" }),
    ],
    modules: (s) => (s.model.startsWith("Three") ? 4 : 2),
    badge: () => "V",
  },
  {
    id: "contactor",
    flow: "ac",
    kind: "contactor",
    name: { en: "AC Contactor", ru: "Контактор AC" },
    desc: { en: "Electromagnetic contactor for motor control & switching", ru: "Электромагнитный контактор для управления двигателями и коммутации" },
    image: cfg("contactor"),
    specs: [
      poles(["3P", "4P"], "3P"),
      {
        key: "amps",
        label: { en: "Rated current Ie (AC-3)", ru: "Номинальный ток Ie (AC-3)" },
        options: [9, 12, 18, 25, 32, 40, 50, 65, 80, 95].map((a) => ({ v: `${a}A` })),
        def: "32A",
        wide: true,
      },
      {
        key: "coil",
        label: { en: "Coil voltage", ru: "Напряжение катушки" },
        options: [
          { v: "24V AC" },
          { v: "110V AC" },
          { v: "230V AC", note: { en: "Most common", ru: "Наиболее распространённый" } },
          { v: "400V AC" },
          { v: "24V DC" },
        ],
        def: "230V AC",
      },
      {
        key: "aux",
        label: { en: "Auxiliary contacts", ru: "Вспомогательные контакты" },
        options: [
          { v: "None" },
          { v: "1NO+1NC" },
          { v: "2NO+2NC" },
        ],
        def: "1NO+1NC",
      },
    ],
    modules: (s) => {
      const p = s.poles === "4P" ? 4 : 3;
      const a = parseInt(s.amps || "0", 10);
      if (a <= 32) return p * 1.5;
      if (a <= 65) return p * 2;
      return 0; // >65A: typically off-rail
    },
    badge: (s) => {
      const a = parseInt(s.amps || "0", 10);
      return `K${a}`;
    },
  },
  {
    id: "ats",
    flow: "ac",
    kind: "ats",
    name: { en: "Dual-Power ATS", ru: "АВР (ATS)" },
    desc: { en: "Automatic changeover mains / generator / inverter", ru: "Автоматическое переключение сеть / генератор / инвертор" },
    image: cfg("ats"),
    href: "/products/ats",
    specs: [poles(["2P", "3P", "4P"], "2P"), amps([16, 25, 32, 40, 50, 63, 80, 100, 125], 63)],
    modules: (s) => (s.poles === "2P" ? 4 : s.poles === "3P" ? 5 : 6),
    badge: () => "ATS",
  },
  {
    id: "smart-mcb",
    flow: "ac",
    kind: "smart",
    name: { en: "Wi-Fi Smart MCB", ru: "Умный автомат Wi-Fi" },
    desc: { en: "App control & metering (Tuya)", ru: "Управление и учёт через приложение (Tuya)" },
    image: "/assets/products/wifi-smart-mcb-1p/wifi-smart-mcb-1p-front-view.webp",
    href: "/products/smart-circuit-breaker",
    specs: [
      {
        key: "model",
        label: { en: "Model", ru: "Модель" },
        options: [{ v: "1P 18mm" }, { v: "2P" }, { v: "With earth leakage" }],
        def: "1P 18mm",
      },
      amps([10, 16, 20, 25, 32, 40, 50, 63], 32),
    ],
    modules: (s) => (s.model === "1P 18mm" ? 1 : 2),
    badge: () => "Wi-Fi",
  },

  /* ---- DC ---- */
  {
    id: "dc-mcb",
    flow: "dc",
    kind: "mcb",
    name: { en: "DC MCB", ru: "Автомат DC" },
    desc: { en: "PV string, battery & DC bus protection, IEC 60947-2", ru: "Защита стрингов, АКБ и шины DC, IEC 60947-2" },
    image: cfg("dc-mcb"),
    href: "/products/dc-mcb",
    specs: [
      poles(["1P", "2P", "3P", "4P"], "2P"),
      {
        key: "vdc",
        label: { en: "Rated voltage", ru: "Номинальное напряжение" },
        hint: { en: "Choose at least your system's maximum DC voltage.", ru: "Не ниже максимального напряжения вашей системы DC." },
        options: [{ v: "250V DC" }, { v: "500V DC" }, { v: "800V DC" }, { v: "1000V DC" }, { v: "1200V DC" }, { v: "1500V DC" }],
        def: "500V DC",
        wide: true,
      },
      amps([1, 2, 3, 4, 6, 10, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125], 16),
      { ...curve, def: "C" },
      dcBreaking,
    ],
    modules: mcbWidth,
    badge: (s) => `${ampNum(s)}A`,
  },
  {
    id: "dc-spd",
    flow: "dc",
    kind: "spd",
    name: { en: "DC Surge Protector (SPD)", ru: "УЗИП DC" },
    desc: { en: "PV & DC surge protection, IEC 61643-31", ru: "Защита СЭС и цепей DC, IEC 61643-31" },
    image: cfg("dc-spd"),
    href: "/products/dc-spd",
    specs: [
      {
        key: "type",
        label: { en: "SPD type", ru: "Класс УЗИП" },
        options: [
          { v: "Type 2", note: { en: "Most PV & storage systems", ru: "Большинство СЭС и накопителей" } },
          { v: "Type 1+2", note: { en: "Exposed sites, lightning rod", ru: "Открытые объекты, молниеотвод" } },
        ],
        def: "Type 2",
      },
      poles(["2P", "3P"], "2P"),
      {
        key: "ucpv",
        label: { en: "Ucpv", ru: "Ucpv" },
        options: [{ v: "600V DC" }, { v: "1000V DC" }, { v: "1200V DC" }, { v: "1500V DC" }],
        def: "1000V DC",
      },
      { ...spdImax, options: spdImax.options.slice(1) },
    ],
    modules: (s) => Number(s.poles[0]),
    badge: () => "SPD",
  },
  {
    id: "dc-fuse",
    flow: "dc",
    kind: "fuse",
    name: { en: "DC Fuse + Fuse Holder", ru: "Предохранитель DC с держателем" },
    desc: { en: "gPV string fuse, 10×38mm", ru: "Стринговый предохранитель gPV, 10×38 мм" },
    image: "/assets/home-products-normalized/combiner-box.webp",
    href: "/products/combiner-box",
    specs: [
      {
        key: "vdc",
        label: { en: "Rated voltage", ru: "Номинальное напряжение" },
        options: [{ v: "1000V DC" }, { v: "1500V DC" }],
        def: "1000V DC",
      },
      amps([10, 12, 15, 16, 20, 25, 30, 32], 15),
    ],
    modules: () => 1,
    badge: (s) => `F${ampNum(s)}`,
  },
  {
    id: "dc-isolator",
    flow: "dc",
    kind: "isolator",
    name: { en: "DC Isolator Switch", ru: "Выключатель-разъединитель DC" },
    desc: { en: "Lockable manual disconnect for maintenance", ru: "Ручное отключение для обслуживания, с блокировкой" },
    image: "/assets/home-products-normalized/combiner-box.webp",
    specs: [
      poles(["2P", "4P"], "2P"),
      { key: "vdc", label: { en: "Rated voltage", ru: "Напряжение" }, options: [{ v: "1000V DC" }, { v: "1200V DC" }], def: "1000V DC" },
      amps([16, 25, 32, 40, 63], 32),
    ],
    modules: (s) => (s.poles === "4P" ? 4 : 2),
    badge: () => "ISO",
  },
  {
    id: "dc-meter",
    flow: "dc",
    kind: "meter",
    name: { en: "DC Energy Meter", ru: "Счётчик DC" },
    desc: { en: "Battery / PV energy metering with shunt", ru: "Учёт энергии АКБ / СЭС с шунтом" },
    image: g("din-rail-energy-meter-1.webp"),
    href: "/products/energy-meter",
    specs: [
      {
        key: "range",
        label: { en: "Voltage range", ru: "Диапазон напряжения" },
        options: [{ v: "0–300V DC" }, { v: "0–1000V DC" }],
        def: "0–300V DC",
      },
      {
        key: "shunt",
        label: { en: "Shunt", ru: "Шунт" },
        options: [{ v: "50A" }, { v: "100A" }, { v: "200A" }, { v: "300A" }],
        def: "100A",
      },
      { key: "comm", label: { en: "Communication", ru: "Связь" }, options: [{ v: "None" }, { v: "RS485 Modbus" }], def: "None" },
    ],
    modules: () => 2,
    badge: () => "kWh",
  },
];

/** Extras that are not rail devices; toggled on the enclosure step. */
export const extras: Array<{ id: string; flows: Flow[]; label: L }> = [
  { id: "busbar", flows: ["ac", "dc"], label: { en: "N / PE busbars", ru: "Шины N / PE" } },
  { id: "glands", flows: ["ac", "dc"], label: { en: "Cable glands", ru: "Кабельные вводы" } },
  { id: "label", flows: ["ac", "dc", "empty"], label: { en: "Logo / label printing", ru: "Печать логотипа / маркировки" } },
  { id: "terminals", flows: ["ac", "dc"], label: { en: "Terminal blocks", ru: "Клеммные колодки" } },
  { id: "mc4", flows: ["dc"], label: { en: "MC4 connectors", ru: "Разъёмы MC4" } },
  { id: "color", flows: ["empty"], label: { en: "Custom color", ru: "Цвет под заказ" } },
];

export function componentById(id: string) {
  return components.find((c) => c.id === id);
}

export function defaultSpecs(def: ComponentDef): Record<string, string> {
  return Object.fromEntries(def.specs.map((s) => [s.key, s.def]));
}
