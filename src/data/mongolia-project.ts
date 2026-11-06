import type { ProjectEquipment, ProductMatch } from "@/lib/projects";

type Pair = [string, string];

export type MongoliaCopy = {
  seoTitle: string;
  seoDescription: string;
  heroAlt: string;
  breadcrumb: { home: string; projects: string; current: string };
  eyebrow: string;
  title: string;
  lead: string;
  facts: Pair[];
  toc: Pair[];
  overview: { eyebrow: string; title: string; p1: string; p2: string };
  system: { eyebrow: string; title: string; text: string; captions: Pair[] };
  equipment: { eyebrow: string; title: string; text: string; items: ProjectEquipment[] };
  custom: { eyebrow: string; title: string; items: Pair[]; panelAlt: string; panelCaption: string };
  products: {
    eyebrow: string;
    title: string;
    text: string;
    fitDirect: string;
    fitConfirm: string;
    requirement: string;
    viewLink: string;
    items: ProductMatch[];
  };
  technical: { eyebrow: string; title: string; items: Pair[] };
  solutions: { eyebrow: string; title: string; more: string; items: Array<[string, string, string]> };
  inquiry: { eyebrow: string; title: string; text: string; primary: string; secondary: string };
};

const sharedLinks = {
  dcBox: "/products/dc-distribution-box",
  acBox: "/products/ac-distribution-box",
};

const en: MongoliaCopy = {
  seoTitle: "Mongolia Solar Battery Storage Distribution Box Project | Ulaanbaatar",
  seoDescription:
    "Custom DC and AC distribution boxes for 30kW and 20kW hybrid solar + battery storage systems in Ulaanbaatar, Mongolia: 300A battery-side DC MCCBs, 4P AC breakers and 4P AC SPDs per inverter, built to the customer single-line diagram.",
  heroAlt: "Mongolia hybrid solar and battery storage system wall layout with distribution boxes",
  breadcrumb: { home: "Home", projects: "Projects", current: "Mongolia · Ulaanbaatar" },
  eyebrow: "MONGOLIA · SOLAR + BATTERY STORAGE PROJECT",
  title: "Mongolia Solar + Battery Storage Distribution Box Project",
  lead: "Custom DC and AC distribution boxes for 30kW and 20kW hybrid solar + battery storage systems in Ulaanbaatar, Mongolia, built to the customer single-line diagram.",
  facts: [
    ["Location", "Ulaanbaatar, Mongolia"],
    ["Completion", "November 2026"],
    ["Systems", "30kW + 20kW hybrid PV + BESS"],
    ["TPKELE scope", "DC & AC distribution boxes"],
  ],
  toc: [
    ["overview", "Project overview"],
    ["system", "System layout"],
    ["equipment", "Box contents"],
    ["customization", "Customization"],
    ["products", "TPKELE product fit"],
    ["technical", "Technical details"],
    ["solutions", "Related solutions"],
    ["inquiry", "Request a quote"],
  ],
  overview: {
    eyebrow: "PROJECT OVERVIEW",
    title: "Distribution Boxes Built From the Customer Single-Line Diagram",
    p1: "The customer, a Mongolian system integrator, sent single-line diagrams for two hybrid systems: a 30kW system with three 10kW three-phase inverters and a 184.32kWh LFP battery bank, and a 20kW system with two inverters and 92.16kWh of storage.",
    p2: "TPKELE builds the distribution layer between the battery, inverters and loads: battery-side DC boxes with 300A DC MCCBs, and AC boxes with a 4P breaker and 4P surge protector on every inverter output. The inverters, batteries and PV modules are customer-supplied.",
  },
  system: {
    eyebrow: "SYSTEM LAYOUT",
    title: "Battery, Hybrid Inverters and Distribution Boxes on One Wall",
    text: "Wall layout drawings from the customer. Each inverter output gets its own 4P breaker and SPD in the AC box, and the battery bank connects through the DC box.",
    captions: [
      ["30kW system wall layout with three hybrid inverters, AC box and DC box", "30kW system: AC distribution box (left), three 10kW hybrid inverters, DC distribution box and battery cabinet (right)."],
      ["20kW system wall layout with two hybrid inverters, AC box and DC box", "20kW system: AC distribution box (left), two 10kW hybrid inverters, DC distribution box and battery cabinet (right)."],
    ],
  },
  equipment: {
    eyebrow: "DISTRIBUTION BOX CONTENTS",
    title: "What Goes Into Each Box",
    text: "Distribution box contents from the project bill of materials, followed by the customer-supplied system equipment for context.",
    items: [
      { title: "DC-01 / DC-02 Battery-Side DC Distribution Box", spec: "2P 300A DC MCCB · 12× PG21 cable glands per box", note: "Isolates and protects the 48V LFP battery bank on the DC side of the hybrid inverters.", category: "protection" },
      { title: "AC-01 AC Distribution Box — 30kW system", spec: "3× 4P 25A AC MCB · 6× 2P 16A AC MCB · 3× 4P 20kA AC SPD · PE busbar · 6× PG21", note: "One 4P breaker and one 4P SPD per inverter output, plus six 2P outgoing feeders, matching the customer single-line diagram.", category: "distribution" },
      { title: "AC-02 AC Distribution Box — 20kW system", spec: "2× 4P 25A AC MCB · 2× 4P 20kA AC SPD per box", note: "The same per-inverter protection logic applied to the two-inverter system.", category: "distribution" },
      { title: "Hybrid Inverters", spec: "SUN-10K-SG05LP3-EU-SM2 · 10kW three-phase · 3 units (30kW) / 2 units (20kW)", note: "Customer-supplied equipment shown in the single-line diagram.", category: "conversion" },
      { title: "Battery Storage", spec: "B-LFP48-300E · 12× 15.36kWh = 184.32kWh (30kW) / 6× 15.36kWh = 92.16kWh (20kW)", note: "Customer-supplied equipment shown in the single-line diagram.", category: "storage" },
      { title: "Solar PV Array", spec: "8× 630W modules per string · 4 strings per system shown", note: "Customer-supplied equipment shown in the single-line diagram.", category: "generation" },
    ],
  },
  custom: {
    eyebrow: "CUSTOMIZATION",
    title: "What Was Built Specifically for This Project",
    items: [
      ["Built to the customer drawing", "Box contents follow the customer single-line diagram: one 4P breaker and one 4P SPD per inverter output, plus the outgoing feeders."],
      ["300A battery-side DC isolation", "Each DC box carries a 2P 300A DC MCCB between the LFP battery bank and the hybrid inverters."],
      ["Repeatable AC-01 build", "The 30kW AC box is built as identical sets, so every site gets the same layout, labeling and spare parts."],
      ["Earthing included", "AC-01 boxes include a PE busbar for SPD and enclosure earthing."],
      ["Cable entry planned", "PG21 cable glands are specified per box: 12 on each DC box, 6 on each AC-01 box."],
      ["UV-printed front panel", "Project panels are UV-printed with the box type and TPKELE branding."],
    ],
    panelAlt: "UV-printed DC distribution box front panel with TPKELE branding",
    panelCaption: "UV-printed front panel artwork for the DC distribution box.",
  },
  products: {
    eyebrow: "TPKELE PRODUCT FIT",
    title: "TPKELE Products and Services in This Project",
    text: "Standard TPKELE breakers and surge protectors where the specification matches a product family, assembled into boxes built to the customer drawing.",
    fitDirect: "PRODUCT FAMILY FIT",
    fitConfirm: "PROJECT-SPECIFIED",
    requirement: "Project requirement",
    viewLink: "View details →",
    items: [
      { name: "Battery-Side DC Distribution Box", procurementRequirement: "2P 300A DC MCCB · 12× PG21 per box", fit: "technical-confirmation", role: "The 300A MCCB is above the TPKELE DC MCB range (up to 125A) and is specified per project. The enclosure, layout and wiring are built to the customer drawing.", href: sharedLinks.dcBox, image: "/assets/projects/mongolia-panel.webp", fallback: "/assets/projects/fallbacks/dc-mcb.svg" },
      { name: "AC MCB — 4P 25A", procurementRequirement: "4P 25A AC MCB for three-phase inverter output", fit: "direct-family-fit", role: "Three-phase + neutral protection for each inverter AC output.", href: "/products/ac-mcb", image: "/assets/products/gallery/ac-mcb-4p-1.webp", fallback: "/assets/projects/fallbacks/ac-mcb.svg" },
      { name: "AC MCB — 2P 16A", procurementRequirement: "2P 16A AC MCB for outgoing feeders", fit: "direct-family-fit", role: "Two-pole protection for the outgoing feeders in the AC-01 box.", href: "/products/ac-mcb", image: "/assets/products/gallery/ac-mcb-2p-1.webp", fallback: "/assets/projects/fallbacks/ac-mcb.svg" },
      { name: "AC 4P SPD — 20kA", procurementRequirement: "4P 20kA AC SPD for three-phase surge protection", fit: "direct-family-fit", role: "Four-pole surge protection on each inverter AC output (L1, L2, L3, N).", href: "/products/ac-spd-4p", image: "/assets/products/ac-spd-4p-2.webp", fallback: "/assets/projects/fallbacks/spd.svg" },
      { name: "AC Distribution Box Assembly", procurementRequirement: "AC-01 / AC-02 boxes built to the customer single-line diagram", fit: "direct-family-fit", role: "Enclosure, component layout, PE busbar, cable glands and UV-printed front panel, assembled at the TPKELE factory.", href: sharedLinks.acBox, image: "/assets/projects/mongolia-layout-2.webp", fallback: "/assets/projects/fallbacks/ac-mcb.svg" },
    ],
  },
  technical: {
    eyebrow: "TECHNICAL DETAILS",
    title: "Box-by-Box Breakdown and Power Path",
    items: [
      ["DC-01 / DC-02", "2P 300A DC MCCB + 12× PG21 per box"],
      ["AC-01 (30kW)", "3× 4P 25A AC MCB + 6× 2P 16A AC MCB + 3× 4P 20kA AC SPD + PE busbar + 6× PG21"],
      ["AC-02 (20kW)", "2× 4P 25A AC MCB + 2× 4P 20kA AC SPD"],
      ["Power path", "PV strings + LFP battery → DC box → 10kW hybrid inverters → AC box (4P MCB + 4P SPD per inverter) → 2P 16A outgoing feeders"],
    ],
  },
  solutions: {
    eyebrow: "RELATED SOLUTIONS",
    title: "Explore Custom Distribution Boxes",
    more: "Learn more →",
    items: [
      ["/products/distribution-boxes", "Custom Distribution Boxes", "PV combiner, DC, AC and ATS boxes built to your drawing"],
      [sharedLinks.dcBox, "DC Distribution Box", "Battery-side and DC bus distribution"],
      [sharedLinks.acBox, "AC Distribution Box", "Inverter AC output and feeder distribution"],
      ["/products/ac-spd-4p", "AC 4P SPD", "Four-pole surge protection used in this project"],
    ],
  },
  inquiry: {
    eyebrow: "REQUEST A QUOTE",
    title: "Building a Similar Solar + Battery Storage System?",
    text: "Send your single-line diagram, inverter model and quantity, battery voltage and the number of outgoing circuits. TPKELE will propose a box layout and bill of materials for your review.",
    primary: "Send Your Single-Line Diagram",
    secondary: "View Custom Distribution Boxes",
  },
};

const ru: MongoliaCopy = {
  seoTitle: "Проект щитов для солнечной системы с накопителем в Монголии | Улан-Батор",
  seoDescription:
    "Щиты постоянного и переменного тока на заказ для гибридных солнечных систем с накопителями 30 кВт и 20 кВт в Улан-Баторе: автоматы MCCB DC 300 А на стороне батарей, автоматы AC 4P и УЗИП 4P на каждый инвертор, по однолинейной схеме заказчика.",
  heroAlt: "Схема размещения гибридной солнечной системы с накопителем и распределительными щитами в Монголии",
  breadcrumb: { home: "Главная", projects: "Проекты", current: "Монголия · Улан-Батор" },
  eyebrow: "МОНГОЛИЯ · СОЛНЕЧНАЯ СИСТЕМА С НАКОПИТЕЛЕМ",
  title: "Проект распределительных щитов для солнечной системы с накопителем в Монголии",
  lead: "Щиты постоянного и переменного тока на заказ для гибридных солнечных систем с накопителями 30 кВт и 20 кВт в Улан-Баторе, собранные по однолинейной схеме заказчика.",
  facts: [
    ["Место", "Улан-Батор, Монголия"],
    ["Завершение", "Ноябрь 2026"],
    ["Системы", "30 кВт + 20 кВт, гибрид PV + накопитель"],
    ["Объём TPKELE", "Щиты DC и AC"],
  ],
  toc: [
    ["overview", "Обзор проекта"],
    ["system", "Схема размещения"],
    ["equipment", "Состав щитов"],
    ["customization", "Индивидуальные решения"],
    ["products", "Продукция TPKELE"],
    ["technical", "Технические данные"],
    ["solutions", "Связанные решения"],
    ["inquiry", "Запрос расчёта"],
  ],
  overview: {
    eyebrow: "ОБЗОР ПРОЕКТА",
    title: "Щиты, собранные по однолинейной схеме заказчика",
    p1: "Заказчик — монгольский системный интегратор — прислал однолинейные схемы двух гибридных систем: 30 кВт с тремя трёхфазными инверторами по 10 кВт и батареями LFP на 184,32 кВт·ч, и 20 кВт с двумя инверторами и накопителем на 92,16 кВт·ч.",
    p2: "TPKELE отвечает за распределительную часть между батареями, инверторами и нагрузками: щиты DC на стороне батарей с автоматами MCCB DC 300 А и щиты AC с автоматом 4P и УЗИП 4P на выходе каждого инвертора. Инверторы, батареи и солнечные панели поставляет заказчик.",
  },
  system: {
    eyebrow: "СХЕМА РАЗМЕЩЕНИЯ",
    title: "Батареи, гибридные инверторы и щиты на одной стене",
    text: "Схемы размещения от заказчика. Выход каждого инвертора получает свой автомат 4P и УЗИП в щите AC, а батареи подключаются через щит DC.",
    captions: [
      ["Схема размещения системы 30 кВт: три гибридных инвертора, щит AC и щит DC", "Система 30 кВт: щит AC (слева), три гибридных инвертора по 10 кВт, щит DC и батарейный шкаф (справа)."],
      ["Схема размещения системы 20 кВт: два гибридных инвертора, щит AC и щит DC", "Система 20 кВт: щит AC (слева), два гибридных инвертора по 10 кВт, щит DC и батарейный шкаф (справа)."],
    ],
  },
  equipment: {
    eyebrow: "СОСТАВ ЩИТОВ",
    title: "Что установлено в каждом щите",
    text: "Состав щитов по спецификации проекта, а также оборудование заказчика для понимания системы.",
    items: [
      { title: "DC-01 / DC-02 — щит постоянного тока на стороне батарей", spec: "Автомат MCCB DC 2P 300 А · 12 кабельных вводов PG21 на щит", note: "Отключает и защищает батареи LFP 48 В на стороне DC гибридных инверторов.", category: "protection" },
      { title: "AC-01 — щит переменного тока, система 30 кВт", spec: "3× автомат AC 4P 25 А · 6× автомат AC 2P 16 А · 3× УЗИП AC 4P 20 кА · шина PE · 6× PG21", note: "Один автомат 4P и один УЗИП 4P на выход каждого инвертора плюс шесть отходящих линий 2P — по однолинейной схеме заказчика.", category: "distribution" },
      { title: "AC-02 — щит переменного тока, система 20 кВт", spec: "2× автомат AC 4P 25 А · 2× УЗИП AC 4P 20 кА на щит", note: "Та же схема защиты на каждый инвертор для системы с двумя инверторами.", category: "distribution" },
      { title: "Гибридные инверторы", spec: "SUN-10K-SG05LP3-EU-SM2 · 10 кВт, три фазы · 3 шт. (30 кВт) / 2 шт. (20 кВт)", note: "Оборудование заказчика по однолинейной схеме.", category: "conversion" },
      { title: "Накопитель энергии", spec: "B-LFP48-300E · 12× 15,36 кВт·ч = 184,32 кВт·ч (30 кВт) / 6× 15,36 кВт·ч = 92,16 кВт·ч (20 кВт)", note: "Оборудование заказчика по однолинейной схеме.", category: "storage" },
      { title: "Солнечные панели", spec: "8 панелей по 630 Вт в стринге · 4 стринга на систему", note: "Оборудование заказчика по однолинейной схеме.", category: "generation" },
    ],
  },
  custom: {
    eyebrow: "ИНДИВИДУАЛЬНЫЕ РЕШЕНИЯ",
    title: "Что сделано специально для этого проекта",
    items: [
      ["По схеме заказчика", "Состав щитов соответствует однолинейной схеме: один автомат 4P и один УЗИП 4P на выход каждого инвертора плюс отходящие линии."],
      ["Отключение батарей 300 А", "В каждом щите DC установлен автомат MCCB DC 2P 300 А между батареями LFP и гибридными инверторами."],
      ["Повторяемая сборка AC-01", "Щит AC системы 30 кВт собирается в одинаковых комплектах: на каждом объекте одинаковая компоновка, маркировка и ЗИП."],
      ["Заземление", "Щиты AC-01 комплектуются шиной PE для заземления УЗИП и корпуса."],
      ["Продуманный ввод кабелей", "Кабельные вводы PG21 заданы для каждого щита: 12 на щит DC, 6 на щит AC-01."],
      ["Панель с УФ-печатью", "Лицевые панели с УФ-печатью: тип щита и бренд TPKELE."],
    ],
    panelAlt: "Лицевая панель щита DC с УФ-печатью и логотипом TPKELE",
    panelCaption: "Макет лицевой панели щита постоянного тока с УФ-печатью.",
  },
  products: {
    eyebrow: "ПРОДУКЦИЯ TPKELE",
    title: "Продукция и услуги TPKELE в этом проекте",
    text: "Стандартные автоматы и УЗИП TPKELE там, где спецификация совпадает с линейкой, собранные в щиты по схеме заказчика.",
    fitDirect: "СОВПАДАЕТ С ЛИНЕЙКОЙ",
    fitConfirm: "ПО ПРОЕКТУ",
    requirement: "Требование проекта",
    viewLink: "Подробнее →",
    items: [
      { name: "Щит DC на стороне батарей", procurementRequirement: "Автомат MCCB DC 2P 300 А · 12× PG21 на щит", fit: "technical-confirmation", role: "Автомат MCCB на 300 А выходит за пределы линейки автоматов DC TPKELE (до 125 А) и подбирается под проект. Корпус, компоновка и монтаж — по схеме заказчика.", href: sharedLinks.dcBox, image: "/assets/projects/mongolia-panel.webp", fallback: "/assets/projects/fallbacks/dc-mcb.svg" },
      { name: "Автомат AC 4P 25 А", procurementRequirement: "Автомат AC 4P 25 А на трёхфазный выход инвертора", fit: "direct-family-fit", role: "Защита трёх фаз и нейтрали на выходе каждого инвертора.", href: "/products/ac-mcb", image: "/assets/products/gallery/ac-mcb-4p-1.webp", fallback: "/assets/projects/fallbacks/ac-mcb.svg" },
      { name: "Автомат AC 2P 16 А", procurementRequirement: "Автомат AC 2P 16 А на отходящие линии", fit: "direct-family-fit", role: "Двухполюсная защита отходящих линий в щите AC-01.", href: "/products/ac-mcb", image: "/assets/products/gallery/ac-mcb-2p-1.webp", fallback: "/assets/projects/fallbacks/ac-mcb.svg" },
      { name: "УЗИП AC 4P 20 кА", procurementRequirement: "УЗИП AC 4P 20 кА для трёхфазной сети", fit: "direct-family-fit", role: "Четырёхполюсная защита от перенапряжений на выходе каждого инвертора (L1, L2, L3, N).", href: "/products/ac-spd-4p", image: "/assets/products/ac-spd-4p-2.webp", fallback: "/assets/projects/fallbacks/spd.svg" },
      { name: "Сборка щитов AC", procurementRequirement: "Щиты AC-01 / AC-02 по однолинейной схеме заказчика", fit: "direct-family-fit", role: "Корпус, компоновка, шина PE, кабельные вводы и лицевая панель с УФ-печатью — сборка на заводе TPKELE.", href: sharedLinks.acBox, image: "/assets/projects/mongolia-layout-2.webp", fallback: "/assets/projects/fallbacks/ac-mcb.svg" },
    ],
  },
  technical: {
    eyebrow: "ТЕХНИЧЕСКИЕ ДАННЫЕ",
    title: "Состав каждого щита и путь питания",
    items: [
      ["DC-01 / DC-02", "Автомат MCCB DC 2P 300 А + 12× PG21 на щит"],
      ["AC-01 (30 кВт)", "3× автомат AC 4P 25 А + 6× автомат AC 2P 16 А + 3× УЗИП AC 4P 20 кА + шина PE + 6× PG21"],
      ["AC-02 (20 кВт)", "2× автомат AC 4P 25 А + 2× УЗИП AC 4P 20 кА"],
      ["Путь питания", "Стринги PV + батареи LFP → щит DC → гибридные инверторы 10 кВт → щит AC (автомат 4P + УЗИП 4P на инвертор) → отходящие линии 2P 16 А"],
    ],
  },
  solutions: {
    eyebrow: "СВЯЗАННЫЕ РЕШЕНИЯ",
    title: "Распределительные щиты на заказ",
    more: "Подробнее →",
    items: [
      ["/products/distribution-boxes", "Распределительные щиты на заказ", "Комбайнерные боксы, щиты DC, AC и АВР по вашей схеме"],
      [sharedLinks.dcBox, "Щит постоянного тока", "Сторона батарей и распределение по шине DC"],
      [sharedLinks.acBox, "Щит переменного тока", "Выход AC инверторов и отходящие линии"],
      ["/products/ac-spd-4p", "УЗИП AC 4P", "Четырёхполюсная защита от перенапряжений из этого проекта"],
    ],
  },
  inquiry: {
    eyebrow: "ЗАПРОС РАСЧЁТА",
    title: "Строите похожую солнечную систему с накопителем?",
    text: "Пришлите однолинейную схему, модель и количество инверторов, напряжение батарей и количество отходящих линий. TPKELE предложит компоновку щитов и спецификацию на согласование.",
    primary: "Отправить однолинейную схему",
    secondary: "Распределительные щиты на заказ",
  },
};

export function getMongoliaCopy(locale: string): MongoliaCopy {
  return locale === "ru" ? ru : en;
}
