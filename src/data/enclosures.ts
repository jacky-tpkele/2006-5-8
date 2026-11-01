import type { BoxLocale } from "@/data/distribution-boxes";

type L = Record<BoxLocale, string>;

// null cell = not specified in the catalog; rendered as "Customizable"
export type ModelTable = {
  title: L;
  headers: Record<BoxLocale, string[]>;
  rows: Array<Array<string | null>>;
  note?: L;
  empty?: L;
};

export type EnclosureSeries = {
  slug: string;
  code: string;
  group: "plastic" | "metal";
  image: string;
  name: L;
  summary: L;
  intro: L;
  seoTitle: L;
  seoDescription: L;
  seoKeywords: Record<BoxLocale, string[]>;
  specs: Array<{ label: L; value: L }>;
  tables: ModelTable[];
};

const metalImg = "/assets/enclosures/metal-placeholder.svg";

const sizeHeaders = {
  en: ["Model", "Ways", "Width W (mm)", "Height H (mm)", "Depth D (mm)"],
  ru: ["Модель", "Модулей", "Ширина W (мм)", "Высота H (мм)", "Глубина D (мм)"],
};

const waterproofSpecs = (ways: L): EnclosureSeries["specs"] => [
  { label: { en: "Housing material", ru: "Материал корпуса" }, value: { en: "ABS", ru: "ABS" } },
  { label: { en: "Protection rating", ru: "Степень защиты" }, value: { en: "IP65", ru: "IP65" } },
  { label: { en: "Ways", ru: "Количество модулей" }, value: ways },
  { label: { en: "Color", ru: "Цвет" }, value: { en: "White; other colors on request", ru: "Белый; другие цвета под заказ" } },
  { label: { en: "Inside", ru: "Внутри" }, value: { en: "35mm DIN rail for modular devices", ru: "DIN-рейка 35 мм для модульных устройств" } },
];

export const enclosureSeries: EnclosureSeries[] = [
  {
    slug: "enclosure-ht",
    code: "HT",
    group: "plastic",
    image: "/assets/enclosures/enclosure-ht.webp",
    name: { en: "HT Waterproof Distribution Box", ru: "Влагозащищённый щит HT" },
    summary: { en: "IP65 ABS enclosure, 2 to 24 ways.", ru: "Корпус ABS IP65, от 2 до 24 модулей." },
    intro: {
      en: "The HT series is a compact IP65 waterproof ABS distribution box for outdoor and damp locations. Nine sizes cover 2 to 24 ways of DIN-rail devices.",
      ru: "Серия HT — компактный влагозащищённый щит из ABS со степенью защиты IP65 для улицы и влажных помещений. Девять типоразмеров от 2 до 24 модулей на DIN-рейку.",
    },
    seoTitle: { en: "HT IP65 Waterproof Distribution Box | 2–24 Way ABS Enclosure", ru: "Влагозащищённый щит HT IP65 | Корпус ABS на 2–24 модуля" },
    seoDescription: {
      en: "TPKELE HT waterproof distribution box: IP65 ABS enclosure in 2, 3, 5, 6, 8, 12, 15, 18 and 24 ways. White, custom colors available. Dimensions table inside.",
      ru: "Влагозащищённый щит TPKELE HT: корпус ABS IP65 на 2, 3, 5, 6, 8, 12, 15, 18 и 24 модуля. Белый, другие цвета под заказ. Таблица размеров.",
    },
    seoKeywords: {
      en: ["IP65 waterproof distribution box", "ABS distribution box", "waterproof MCB box", "12 way waterproof box", "outdoor distribution box"],
      ru: ["влагозащищённый щит IP65", "щит ABS", "бокс для автоматов IP65", "уличный распределительный щит"],
    },
    specs: waterproofSpecs({ en: "2, 3, 5, 6, 8, 12, 15, 18, 24", ru: "2, 3, 5, 6, 8, 12, 15, 18, 24" }),
    tables: [
      {
        title: { en: "HT Series Sizes", ru: "Типоразмеры серии HT" },
        headers: sizeHeaders,
        rows: [
          ["HT2", "2", "53", "120", null],
          ["HT3", "3", "73", "152", null],
          ["HT5", "5", "119", "159", null],
          ["HT6", "6", "157", "200", "92"],
          ["HT8", "8", "201", "153", null],
          ["HT12", "12", "254", "195", null],
          ["HT15", "15", "299", "195", null],
          ["HT18", "18", "335.5", "194", null],
          ["HT24", "24", "247", "357", null],
        ],
      },
    ],
  },
  {
    slug: "enclosure-ha",
    code: "HA",
    group: "plastic",
    image: "/assets/enclosures/enclosure-ha.webp",
    name: { en: "HA Waterproof Distribution Box", ru: "Влагозащищённый щит HA" },
    summary: { en: "IP65 ABS enclosure, 4 to 24 ways.", ru: "Корпус ABS IP65, от 4 до 24 модулей." },
    intro: {
      en: "The HA series is an IP65 waterproof ABS distribution box with deeper bodies (91–128mm) for larger devices and cable bending space. Five sizes from 4 to 24 ways.",
      ru: "Серия HA — влагозащищённый щит из ABS IP65 с увеличенной глубиной (91–128 мм) для крупных устройств и запаса на изгиб кабеля. Пять типоразмеров от 4 до 24 модулей.",
    },
    seoTitle: { en: "HA IP65 Waterproof Distribution Box | 4–24 Way ABS Enclosure", ru: "Влагозащищённый щит HA IP65 | Корпус ABS на 4–24 модуля" },
    seoDescription: {
      en: "TPKELE HA waterproof distribution box: IP65 ABS enclosure in 4, 8, 12, 18 and 24 ways, depth 91–128mm. White, custom colors available. Full dimensions table.",
      ru: "Влагозащищённый щит TPKELE HA: корпус ABS IP65 на 4, 8, 12, 18 и 24 модуля, глубина 91–128 мм. Белый, другие цвета под заказ. Полная таблица размеров.",
    },
    seoKeywords: {
      en: ["IP65 distribution box", "waterproof ABS enclosure", "24 way waterproof box", "deep waterproof distribution box"],
      ru: ["щит IP65", "влагозащищённый корпус ABS", "щит на 24 модуля IP65"],
    },
    specs: waterproofSpecs({ en: "4, 8, 12, 18, 24", ru: "4, 8, 12, 18, 24" }),
    tables: [
      {
        title: { en: "HA Series Sizes", ru: "Типоразмеры серии HA" },
        headers: sizeHeaders,
        rows: [
          ["HA4", "4", "142", "210", "92.5"],
          ["HA8", "8", "215", "210", "91"],
          ["HA12", "12", "298", "258", "122"],
          ["HA18", "18", "410", "285", "125"],
          ["HA24", "24", "298", "422", "128"],
        ],
      },
    ],
  },
  {
    slug: "enclosure-hv",
    code: "HV",
    group: "plastic",
    image: "/assets/enclosures/enclosure-hv.webp",
    name: { en: "HV Waterproof Distribution Box", ru: "Влагозащищённый щит HV" },
    summary: { en: "IP65 ABS enclosure, 4 to 36 ways.", ru: "Корпус ABS IP65, от 4 до 36 модулей." },
    intro: {
      en: "The HV series is an IP65 waterproof ABS distribution box with the widest range in the TPKELE plastic line: seven sizes from 4 to 36 ways, including two-row layouts.",
      ru: "Серия HV — влагозащищённый щит из ABS IP65 с самым широким рядом в пластиковой линейке TPKELE: семь типоразмеров от 4 до 36 модулей, включая двухрядные.",
    },
    seoTitle: { en: "HV IP65 Waterproof Distribution Box | 4–36 Way ABS Enclosure", ru: "Влагозащищённый щит HV IP65 | Корпус ABS на 4–36 модулей" },
    seoDescription: {
      en: "TPKELE HV waterproof distribution box: IP65 ABS enclosure in 4, 6, 9, 12, 18, 24 and 36 ways. White, custom colors available. Full dimensions table.",
      ru: "Влагозащищённый щит TPKELE HV: корпус ABS IP65 на 4, 6, 9, 12, 18, 24 и 36 модулей. Белый, другие цвета под заказ. Полная таблица размеров.",
    },
    seoKeywords: {
      en: ["36 way waterproof distribution box", "IP65 ABS distribution box", "two row waterproof enclosure", "waterproof consumer unit"],
      ru: ["щит на 36 модулей IP65", "двухрядный влагозащищённый щит", "щит ABS IP65"],
    },
    specs: waterproofSpecs({ en: "4, 6, 9, 12, 18, 24, 36", ru: "4, 6, 9, 12, 18, 24, 36" }),
    tables: [
      {
        title: { en: "HV Series Sizes", ru: "Типоразмеры серии HV" },
        headers: sizeHeaders,
        rows: [
          ["HV4", "4", "165", "200", "100"],
          ["HV6", "6", "165", "200", "100"],
          ["HV9", "9", "219", "200", "100"],
          ["HV12", "12", "273", "230", "110"],
          ["HV18", "18", "381", "230", "110"],
          ["HV24", "24", "273", "380", "110"],
          ["HV36", "36", "381", "380", "110"],
        ],
      },
    ],
  },
  {
    slug: "enclosure-ms-mf",
    code: "TPMS / TPMF",
    group: "plastic",
    image: "/assets/enclosures/enclosure-ms-mf.webp",
    name: { en: "TPMS / TPMF Indoor Distribution Box", ru: "Щиты для помещений TPMS / TPMF" },
    summary: { en: "IP50 ABS box with transparent PC door, 2 to 36 ways.", ru: "Корпус ABS IP50 с прозрачной дверцей PC, от 2 до 36 модулей." },
    intro: {
      en: "The TPMS (surface-mounted) and TPMF (flush-mounted) series are IP50 ABS distribution boxes for indoor use, with a transparent PC door, DIN rail, neutral bar and earth bar fitted.",
      ru: "Серии TPMS (накладной монтаж) и TPMF (встраиваемый монтаж) — щиты из ABS IP50 для помещений с прозрачной дверцей из PC, DIN-рейкой, шиной N и шиной PE.",
    },
    seoTitle: { en: "TPMS / TPMF Indoor Distribution Box | 2–36 Way ABS, Surface & Flush", ru: "Щиты TPMS / TPMF для помещений | ABS на 2–36 модулей, накладные и встраиваемые" },
    seoDescription: {
      en: "TPKELE TPMS surface-mounted and TPMF flush-mounted distribution boxes: ABS housing, transparent PC door, copper neutral and earth bars, IP50, CE & RoHS. 2 to 36 ways.",
      ru: "Щиты TPKELE TPMS (накладные) и TPMF (встраиваемые): корпус ABS, прозрачная дверца PC, медные шины N и PE, IP50, CE и RoHS. От 2 до 36 модулей.",
    },
    seoKeywords: {
      en: ["flush mounted distribution box", "surface mounted distribution box", "plastic consumer unit", "MCB box with transparent door", "indoor distribution box"],
      ru: ["встраиваемый щит", "накладной щит", "пластиковый щит для автоматов", "щит с прозрачной дверцей"],
    },
    specs: [
      { label: { en: "Housing material", ru: "Материал корпуса" }, value: { en: "ABS", ru: "ABS" } },
      { label: { en: "Door", ru: "Дверца" }, value: { en: "Transparent PC", ru: "Прозрачный PC" } },
      { label: { en: "Terminals", ru: "Клеммы" }, value: { en: "Copper neutral bar and earth bar", ru: "Медные шины N и PE" } },
      { label: { en: "Protection rating", ru: "Степень защиты" }, value: { en: "IP50 (indoor use)", ru: "IP50 (для помещений)" } },
      { label: { en: "Mounting", ru: "Монтаж" }, value: { en: "TPMS surface-mounted / TPMF flush-mounted; 35mm DIN rail inside", ru: "TPMS накладной / TPMF встраиваемый; DIN-рейка 35 мм внутри" } },
      { label: { en: "Cable entry", ru: "Ввод кабелей" }, value: { en: "Knock-out holes for cable entry", ru: "Выламываемые отверстия для ввода кабелей" } },
      { label: { en: "Certification", ru: "Сертификаты" }, value: { en: "CE, RoHS", ru: "CE, RoHS" } },
    ],
    tables: [
      {
        title: { en: "TPMS Surface-Mounted — Packing Data", ru: "TPMS накладной — данные упаковки" },
        headers: {
          en: ["Model", "Ways", "Qty / carton", "Gross weight (kg)", "Carton size (cm)"],
          ru: ["Модель", "Модулей", "Шт. / коробка", "Вес брутто (кг)", "Размер коробки (см)"],
        },
        rows: [
          ["TPMS2-3", "2–3", "50", "14.5", "51.5×31.5×48"],
          ["TPMS4", "4", "30", "11.5", "51×36×42.5"],
          ["TPMS6", "6", "30", "14.9", "51×42.5×48.5"],
          ["TPMS8", "8", "30", "16.7", "51×42.5×58.5"],
          ["TPMS10", "10", "20", "13", "51×43×48"],
          ["TPMS12", "12", "20", "14.8", "51×43.5×54"],
          ["TPMS15", "15", "15", "12.8", "51×33×63.5"],
          ["TPMS18", "18", "15", "15.2", "52.5×38×70"],
          ["TPMS24", "24", "10", "13.2", "54×34.5×57"],
          ["TPMS36", "36", "5", "10.5", "54.5×29×48.5"],
        ],
      },
      {
        title: { en: "TPMF Flush-Mounted — Packing Data", ru: "TPMF встраиваемый — данные упаковки" },
        headers: {
          en: ["Model", "Ways", "Qty / carton", "Gross weight (kg)", "Carton size (cm)"],
          ru: ["Модель", "Модулей", "Шт. / коробка", "Вес брутто (кг)", "Размер коробки (см)"],
        },
        rows: [
          ["TPMF4", "4", "30", "12", "52×43×47"],
          ["TPMF6", "6", "30", "14", "48×47×54.5"],
          ["TPMF8", "8", "30", "17", "64×52×46.8"],
          ["TPMF10", "10", "20", "13.2", "48×47×51.5"],
          ["TPMF12", "12", "20", "14.5", "47×46×59.5"],
          ["TPMF15", "15", "15", "12.3", "49.5×35.5×71"],
          ["TPMF18", "18", "15", "17.5", "57.5×42×78"],
          ["TPMF24", "24", "10", "13", "57×36.5×63"],
          ["TPMF36", "36", "5", "11", "52×32×50.5"],
        ],
        note: { en: "Single-box dimensions available on request.", ru: "Размеры отдельного щита — по запросу." },
      },
    ],
  },
  {
    slug: "enclosure-pz30",
    code: "PZ30",
    group: "metal",
    image: metalImg,
    name: { en: "PZ30 Metal Distribution Box", ru: "Металлический щит PZ30" },
    summary: { en: "Powder-coated steel box, 2 to 60 ways, surface or flush.", ru: "Стальной щит с порошковой окраской, от 2 до 60 модулей, накладной или встраиваемый." },
    intro: {
      en: "The PZ30 series is a cold-rolled steel distribution box with electrostatic powder coating, available for surface or flush mounting. Eleven sizes from 2 to 60 ways in single-, double- and triple-row layouts.",
      ru: "Серия PZ30 — щит из холоднокатаной стали с электростатической порошковой окраской для накладного или встраиваемого монтажа. Одиннадцать типоразмеров от 2 до 60 модулей в один, два и три ряда.",
    },
    seoTitle: { en: "PZ30 Metal Distribution Box | 2–60 Way Surface & Flush Steel Enclosure", ru: "Металлический щит PZ30 | Стальной корпус на 2–60 модулей, накладной и встраиваемый" },
    seoDescription: {
      en: "TPKELE PZ30 metal distribution box: cold-rolled steel, powder coated, ABS+PC frosted window, brass terminals. 2 to 60 ways, surface or flush mounting, custom cut-outs.",
      ru: "Металлический щит TPKELE PZ30: холоднокатаная сталь, порошковая окраска, матовое окно ABS+PC, латунные клеммы. От 2 до 60 модулей, накладной или встраиваемый, вырезы под заказ.",
    },
    seoKeywords: {
      en: ["PZ30 distribution box", "metal distribution box", "flush mounted metal box", "steel consumer unit", "60 way distribution box"],
      ru: ["щит PZ30", "металлический распределительный щит", "встраиваемый металлический щит", "стальной щит"],
    },
    specs: [
      { label: { en: "Housing material", ru: "Материал корпуса" }, value: { en: "Cold-rolled steel sheet, one-piece formed frame", ru: "Холоднокатаная сталь, цельноформованная рамка" } },
      { label: { en: "Finish", ru: "Покрытие" }, value: { en: "Electrostatic powder coating, corrosion resistant", ru: "Электростатическая порошковая окраска, стойкая к коррозии" } },
      { label: { en: "Panel", ru: "Панель" }, value: { en: "ABS+PC with frosted viewing window", ru: "ABS+PC с матовым смотровым окном" } },
      { label: { en: "Terminals", ru: "Клеммы" }, value: { en: "Brass, large-bore", ru: "Латунные, с большим отверстием" } },
      { label: { en: "Mounting", ru: "Монтаж" }, value: { en: "Surface (no wall chasing) or flush (back box set into wall); adjustable DIN rail bracket", ru: "Накладной (без штробления) или встраиваемый (коробка в стене); регулируемый кронштейн DIN-рейки" } },
      { label: { en: "Customization", ru: "Под заказ" }, value: { en: "Custom cut-outs; custom colors for large orders", ru: "Вырезы под заказ; цвета под заказ для крупных партий" } },
    ],
    tables: [
      {
        title: { en: "PZ30 Sizes (mm)", ru: "Типоразмеры PZ30 (мм)" },
        headers: {
          en: ["Model", "Ways", "Rows", "Panel W×H", "Flush back box W×H×D", "Surface box W×H×D", "Sets / carton"],
          ru: ["Модель", "Модулей", "Рядов", "Панель Ш×В", "Встраиваемая коробка Ш×В×Г", "Накладной корпус Ш×В×Г", "Компл. / коробка"],
        },
        rows: [
          ["PZ30-4", "2–4", "1", "140×170", "120×150×75", "140×170×75", "40"],
          ["PZ30-6", "4–6", "1", "215×200", "182×180×75", "201×200×75", "30"],
          ["PZ30-9", "7–9", "1", "240×200", "220×180×75", "240×200×75", "20"],
          ["PZ30-13", "10–13", "1", "313×200", "293×180×75", "313×200×75", "20"],
          ["PZ30-17", "14–17", "1", "385×200", "365×180×75", "385×200×75", "15"],
          ["PZ30-20", "17–20", "1", "441×200", "421×190×75", "441×210×75", "10"],
          ["PZ30-26", "20–26", "2", null, "293×380×75", "313×400×75", "10"],
          ["PZ30-34", "28–34", "2", null, "365×380×75", "385×400×75", "5"],
          ["PZ30-40", "36–40", "2", null, "421×380×75", "441×420×75", "5"],
          ["PZ30-51", "42–51", "3", null, "365×570×75", "385×600×75", "5"],
          ["PZ30-60", "51–60", "3", null, "421×570×75", "441×630×75", "5"],
        ],
        empty: { en: "On request", ru: "По запросу" },
      },
    ],
  },
];

export const enclosureHub = {
  en: {
    label: "Enclosures",
    hero: "Empty Distribution Box Enclosures — Plastic and Metal",
    intro:
      "Empty distribution boxes for panel builders, electricians and distributors. IP65 waterproof ABS boxes for outdoor use, IP50 ABS boxes for indoors, and PZ30 powder-coated steel boxes, from 2 to 60 ways.",
    seoTitle: "Distribution Box Enclosure Manufacturer | IP65 Plastic & Metal Boxes",
    seoDescription:
      "Empty distribution box enclosures from TPKELE: IP65 waterproof ABS (HT, HA, HV), indoor ABS (TPMS, TPMF) and PZ30 metal boxes, 2 to 60 ways. Custom colors and OEM supply.",
    seoKeywords: ["distribution box enclosure", "empty distribution box", "IP65 plastic enclosure", "metal distribution box", "waterproof MCB box", "OEM enclosure supplier"],
    plastic: "Plastic Enclosures",
    metal: "Metal Enclosures",
    upsellTitle: "Need It Assembled?",
    upsellText: "TPKELE can fit breakers, surge protectors and busbars into these enclosures and deliver ready-to-install boxes built to your drawing.",
    upsellLink: "View custom distribution boxes →",
    checklist: ["Series and model", "Quantity per model", "Color, if not white", "Logo or label printing", "Cut-outs or extra cable entries"],
    checklistTitle: "What to Include in Your Inquiry",
    faq: [
      { q: "Which enclosure should I use outdoors?", a: "Use the HT, HA or HV series, rated IP65. The TPMS / TPMF series is IP50 and intended for indoor use only." },
      { q: "Can you supply other colors?", a: "Plastic HT, HA and HV boxes are white as standard; other colors are available on request. PZ30 metal boxes can be supplied in custom colors for large orders." },
      { q: "Do the boxes come with a DIN rail?", a: "Yes. All series include a 35mm DIN rail for modular devices; TPMS / TPMF boxes also include neutral and earth bars." },
    ],
  },
  ru: {
    label: "Корпуса щитов",
    hero: "Пустые корпуса распределительных щитов — пластиковые и металлические",
    intro:
      "Пустые корпуса щитов для сборщиков, электромонтажников и дистрибьюторов. Влагозащищённые корпуса ABS IP65 для улицы, корпуса ABS IP50 для помещений и стальные щиты PZ30 с порошковой окраской, от 2 до 60 модулей.",
    seoTitle: "Производитель корпусов щитов | Пластиковые IP65 и металлические щиты",
    seoDescription:
      "Пустые корпуса щитов TPKELE: влагозащищённые ABS IP65 (HT, HA, HV), ABS для помещений (TPMS, TPMF) и металлические PZ30, от 2 до 60 модулей. Цвета под заказ, поставки OEM.",
    seoKeywords: ["корпус распределительного щита", "пустой щит", "пластиковый корпус IP65", "металлический щит", "бокс для автоматов"],
    plastic: "Пластиковые корпуса",
    metal: "Металлические корпуса",
    upsellTitle: "Нужна сборка?",
    upsellText: "TPKELE установит автоматы, УЗИП и шины в эти корпуса и поставит готовые к монтажу щиты по вашей схеме.",
    upsellLink: "Распределительные щиты на заказ →",
    checklist: ["Серия и модель", "Количество по каждой модели", "Цвет, если не белый", "Печать логотипа или маркировки", "Вырезы или дополнительные кабельные вводы"],
    checklistTitle: "Что указать в запросе",
    faq: [
      { q: "Какой корпус подходит для улицы?", a: "Серии HT, HA и HV со степенью защиты IP65. Серия TPMS / TPMF имеет IP50 и предназначена только для помещений." },
      { q: "Можно ли заказать другой цвет?", a: "Пластиковые корпуса HT, HA и HV стандартно белые, другие цвета — по запросу. Металлические щиты PZ30 окрашиваются в нужный цвет для крупных партий." },
      { q: "Есть ли в корпусах DIN-рейка?", a: "Да. Во всех сериях есть DIN-рейка 35 мм для модульных устройств; в корпусах TPMS / TPMF также установлены шины N и PE." },
    ],
  },
};

export function getEnclosureSeries(slug: string): EnclosureSeries | undefined {
  return enclosureSeries.find((s) => s.slug === slug);
}
