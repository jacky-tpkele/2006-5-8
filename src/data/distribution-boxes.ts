export type BoxLocale = "en" | "ru";

export type BoxTypeContent = {
  label: string;
  summary: string;
  hero: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  useCases: string[];
  configTitle: string;
  configRows: Array<{ item: string; options: string }>;
  checklist: string[];
  faq: Array<{ q: string; a: string }>;
};

export type BoxType = {
  slug: "dc-distribution-box" | "ac-distribution-box" | "ats-panel";
  image: string;
  components: Array<{ href: string; label: Record<BoxLocale, string> }>;
  caseHref?: string;
  content: Record<BoxLocale, BoxTypeContent>;
};

export type HubContent = {
  eyebrow: string;
  hero: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  typesTitle: string;
  pvCombinerLabel: string;
  pvCombinerSummary: string;
  processTitle: string;
  process: Array<{ title: string; text: string }>;
  checklistTitle: string;
  checklist: string[];
  casesTitle: string;
  mongoliaCase: string;
  zimbabweCase: string;
};

export const hubContent: Record<BoxLocale, HubContent> = {
  en: {
    eyebrow: "Custom Distribution Boxes",
    hero: "Distribution Boxes Built to Your Single-Line Diagram",
    intro:
      "TPKELE builds PV combiner, DC distribution, AC distribution and ATS boxes for solar, battery storage and backup-power projects. Send your drawing; we propose the layout and bill of materials, then assemble the boxes with TPKELE breakers, surge protectors and transfer switches.",
    seoTitle: "Custom Distribution Box Manufacturer | PV, DC, AC & ATS Boxes",
    seoDescription:
      "Custom PV combiner, DC distribution, AC distribution and ATS boxes for solar and battery storage projects. Built to your single-line diagram with TPKELE MCBs, SPDs and ATS.",
    seoKeywords: [
      "custom distribution box manufacturer",
      "solar distribution box",
      "battery storage distribution box",
      "DC distribution box",
      "AC distribution box",
      "ATS panel",
      "PV combiner box manufacturer",
      "OEM distribution box",
    ],
    typesTitle: "Four Box Types, One Power Path",
    pvCombinerLabel: "PV Combiner Box",
    pvCombinerSummary: "Combines PV strings with DC fuses, DC breakers and DC surge protection before the inverter.",
    processTitle: "How a Custom Box Order Works",
    process: [
      { title: "Send your drawing", text: "Single-line diagram, equipment list or a hand sketch with voltages and circuit counts." },
      { title: "Layout & BOM proposal", text: "TPKELE proposes the component list, enclosure size and panel layout for your review." },
      { title: "Confirm the design", text: "You approve the layout, labeling and quantities before production starts." },
      { title: "Assembly & shipping", text: "Boxes are assembled with TPKELE components and shipped with your project labeling." },
    ],
    checklistTitle: "What to Send With Your Inquiry",
    checklist: [
      "Single-line diagram or equipment list",
      "System voltage, phases and earthing system (TN-S, TN-C-S, TT, IT)",
      "Inverter, battery or generator model and quantity",
      "Number and rating of incoming and outgoing circuits",
      "Indoor or outdoor installation and required IP rating",
      "Quantity of boxes and labeling / branding requirements",
    ],
    casesTitle: "Project References",
    mongoliaCase: "Mongolia: DC and AC distribution boxes for 30kW and 20kW hybrid solar + battery systems.",
    zimbabweCase: "Zimbabwe: buyer procurement reference covering DC/AC protection and automatic changeover.",
  },
  ru: {
    eyebrow: "Распределительные щиты на заказ",
    hero: "Распределительные щиты по вашей однолинейной схеме",
    intro:
      "TPKELE собирает солнечные комбайнерные боксы, щиты постоянного и переменного тока и щиты АВР для солнечных электростанций, систем накопления энергии и резервного питания. Пришлите схему — мы предложим компоновку и спецификацию, а затем соберём щиты на автоматах, УЗИП и переключателях TPKELE.",
    seoTitle: "Производитель распределительных щитов на заказ | PV, DC, AC и АВР",
    seoDescription:
      "Солнечные комбайнерные боксы, щиты DC и AC, щиты АВР на заказ для солнечных электростанций и систем накопления энергии. Сборка по вашей однолинейной схеме на компонентах TPKELE.",
    seoKeywords: [
      "распределительный щит на заказ",
      "щит для солнечной электростанции",
      "щит постоянного тока",
      "щит переменного тока",
      "щит АВР",
      "комбайнерный бокс",
      "щит для системы накопления энергии",
    ],
    typesTitle: "Четыре типа щитов на одной линии питания",
    pvCombinerLabel: "Солнечный комбайнерный бокс",
    pvCombinerSummary: "Объединяет стринги солнечных панелей с предохранителями, автоматами и УЗИП постоянного тока перед инвертором.",
    processTitle: "Как проходит заказ щита",
    process: [
      { title: "Пришлите схему", text: "Однолинейная схема, перечень оборудования или эскиз с напряжениями и количеством линий." },
      { title: "Компоновка и спецификация", text: "TPKELE предлагает перечень компонентов, размер корпуса и компоновку панели." },
      { title: "Согласование", text: "Вы утверждаете компоновку, маркировку и количество до начала производства." },
      { title: "Сборка и отгрузка", text: "Щиты собираются на компонентах TPKELE и отгружаются с маркировкой вашего проекта." },
    ],
    checklistTitle: "Что приложить к запросу",
    checklist: [
      "Однолинейная схема или перечень оборудования",
      "Напряжение, количество фаз и система заземления (TN-S, TN-C-S, TT, IT)",
      "Модель и количество инверторов, батарей или генераторов",
      "Количество и номиналы вводных и отходящих линий",
      "Установка внутри или снаружи и требуемая степень защиты IP",
      "Количество щитов и требования к маркировке",
    ],
    casesTitle: "Референс-проекты",
    mongoliaCase: "Монголия: щиты DC и AC для гибридных солнечных систем с накопителями 30 кВт и 20 кВт.",
    zimbabweCase: "Зимбабве: закупочная спецификация с защитой DC/AC и автоматическим переключением.",
  },
};

export const boxTypes: BoxType[] = [
  {
    slug: "dc-distribution-box",
    image: "/assets/projects/mongolia-panel.webp",
    caseHref: "/projects/mongolia-ulaanbaatar-battery-storage",
    components: [
      { href: "/products/dc-mcb", label: { en: "DC MCB", ru: "Автоматы DC" } },
      { href: "/products/dc-spd", label: { en: "DC SPD", ru: "УЗИП DC" } },
      { href: "/products/dc-spd-2p", label: { en: "DC 2P SPD", ru: "УЗИП DC 2P" } },
    ],
    content: {
      en: {
        label: "DC Distribution Box",
        summary: "Battery-side isolation and DC bus distribution between the battery bank, inverters and DC loads.",
        hero: "DC Distribution Boxes for Battery Storage and DC Systems",
        intro:
          "A DC distribution box sits between the battery bank and the inverters, or feeds DC loads from a common DC bus. TPKELE builds the box to your drawing with DC breakers, DC surge protection and planned cable entry.",
        seoTitle: "DC Distribution Box Manufacturer | Battery Storage DC Box",
        seoDescription:
          "Custom DC distribution boxes for battery energy storage and DC bus systems: DC breakers, DC SPDs, cable glands and UV-printed panels, built to your single-line diagram.",
        seoKeywords: ["DC distribution box", "battery DC distribution box", "BESS DC box", "battery isolation box", "DC bus distribution", "DC breaker box"],
        useCases: [
          "Battery bank to hybrid inverter isolation",
          "Parallel battery cabinets feeding one DC bus",
          "DC loads: telecom, control and EV charging DC side",
        ],
        configTitle: "Typical Configuration Options",
        configRows: [
          { item: "System voltage", options: "48V battery systems up to 1500V DC, per project" },
          { item: "Main protection", options: "TPKELE DC MCB 1–125A; higher currents (e.g. 300A) with a project-specified DC MCCB" },
          { item: "Surge protection", options: "TPKELE DC SPD, Type 2" },
          { item: "Poles", options: "1P / 2P, per earthing arrangement" },
          { item: "Cable entry", options: "Cable glands sized and counted to your cables" },
          { item: "Labeling", options: "UV-printed front panel with circuit names and branding" },
        ],
        checklist: [
          "Battery voltage and maximum DC current",
          "Number of battery strings and inverters",
          "Cable sizes for each connection",
          "Earthed or floating DC system",
        ],
        faq: [
          {
            q: "Can you supply DC boxes above 125A?",
            a: "Yes. TPKELE DC MCBs cover 1–125A. For higher currents, such as the 300A battery isolation in the Mongolia project, the box uses a project-specified DC MCCB.",
          },
          {
            q: "Do you build to our own drawing?",
            a: "Yes. Send the single-line diagram; TPKELE returns a layout and bill of materials for approval before production.",
          },
        ],
      },
      ru: {
        label: "Щит постоянного тока",
        summary: "Отключение батарей и распределение по шине DC между батареями, инверторами и нагрузками DC.",
        hero: "Щиты постоянного тока для систем накопления энергии",
        intro:
          "Щит постоянного тока устанавливается между батареями и инверторами или питает нагрузки DC от общей шины. TPKELE собирает щит по вашей схеме с автоматами DC, УЗИП DC и продуманным вводом кабелей.",
        seoTitle: "Производитель щитов постоянного тока | Щит DC для накопителей",
        seoDescription:
          "Щиты постоянного тока на заказ для систем накопления энергии и шин DC: автоматы DC, УЗИП DC, кабельные вводы и панели с УФ-печатью. Сборка по вашей однолинейной схеме.",
        seoKeywords: ["щит постоянного тока", "щит DC", "щит для аккумуляторов", "щит для накопителя энергии", "распределение DC"],
        useCases: [
          "Отключение батарей от гибридного инвертора",
          "Параллельные батарейные шкафы на общей шине DC",
          "Нагрузки DC: телеком, управление, сторона DC зарядных станций",
        ],
        configTitle: "Типовые варианты комплектации",
        configRows: [
          { item: "Напряжение", options: "От батарей 48 В до 1500 В DC, по проекту" },
          { item: "Основная защита", options: "Автоматы DC TPKELE 1–125 А; большие токи (например 300 А) — автомат MCCB DC по проекту" },
          { item: "Защита от перенапряжений", options: "УЗИП DC TPKELE, тип 2" },
          { item: "Полюса", options: "1P / 2P, в зависимости от заземления" },
          { item: "Ввод кабелей", options: "Кабельные вводы под ваши кабели" },
          { item: "Маркировка", options: "Панель с УФ-печатью: названия линий и бренд" },
        ],
        checklist: [
          "Напряжение батарей и максимальный ток DC",
          "Количество батарейных стрингов и инверторов",
          "Сечения кабелей для каждого подключения",
          "Заземлённая или изолированная система DC",
        ],
        faq: [
          {
            q: "Можно ли заказать щит DC на ток выше 125 А?",
            a: "Да. Автоматы DC TPKELE рассчитаны на 1–125 А. Для больших токов, как 300 А в проекте в Монголии, в щит устанавливается автомат MCCB DC по проекту.",
          },
          {
            q: "Вы собираете по нашей схеме?",
            a: "Да. Пришлите однолинейную схему — TPKELE вернёт компоновку и спецификацию на согласование до начала производства.",
          },
        ],
      },
    },
  },
  {
    slug: "ac-distribution-box",
    image: "/assets/projects/mongolia-layout-2.webp",
    caseHref: "/projects/mongolia-ulaanbaatar-battery-storage",
    components: [
      { href: "/products/ac-mcb", label: { en: "AC MCB", ru: "Автоматы AC" } },
      { href: "/products/ac-spd-4p", label: { en: "AC 4P SPD", ru: "УЗИП AC 4P" } },
      { href: "/products/ac-spd", label: { en: "AC SPD", ru: "УЗИП AC" } },
      { href: "/products/energy-meter", label: { en: "Energy Meter", ru: "Счётчики энергии" } },
      { href: "/products/voltage-protector", label: { en: "Voltage Protector", ru: "Реле напряжения" } },
    ],
    content: {
      en: {
        label: "AC Distribution Box",
        summary: "Inverter AC output protection and distribution to outgoing feeders, single- or three-phase.",
        hero: "AC Distribution Boxes for Inverter Output and Feeder Distribution",
        intro:
          "An AC distribution box takes the inverter or grid AC output and distributes it to outgoing circuits. A typical solar + storage build has one 4P breaker and one 4P surge protector per inverter, then feeder breakers for the loads. TPKELE builds the box to your drawing.",
        seoTitle: "AC Distribution Box Manufacturer | Inverter AC Output Box",
        seoDescription:
          "Custom AC distribution boxes for inverter output and feeder distribution: AC MCBs, 4P AC SPDs, PE busbar, energy meters and cable glands, built to your single-line diagram.",
        seoKeywords: ["AC distribution box", "inverter AC distribution box", "solar AC combiner box", "three-phase distribution box", "AC output box", "AC SPD box"],
        useCases: [
          "Hybrid or grid-tie inverter AC output",
          "Combining several inverter outputs before the grid or loads",
          "Outgoing feeder distribution for buildings and sites",
        ],
        configTitle: "Typical Configuration Options",
        configRows: [
          { item: "System", options: "Single-phase 230V or three-phase 400V, TN-S / TN-C-S / TT" },
          { item: "Incoming protection", options: "TPKELE AC MCB 1P–4P, one per inverter or incoming source" },
          { item: "Surge protection", options: "TPKELE AC 4P SPD (Uc 385V, In 20kA / Imax 40kA) or 2P SPD for single-phase" },
          { item: "Outgoing feeders", options: "1P / 2P / 4P AC MCBs, quantity per load schedule" },
          { item: "Options", options: "Energy meter, voltage protector, RCBO" },
          { item: "Earthing & entry", options: "PE / N busbars, cable glands sized to your cables" },
        ],
        checklist: [
          "Inverter model, quantity and AC output current",
          "Single- or three-phase, and earthing system",
          "Number and rating of outgoing feeders",
          "Metering or monitoring requirements",
        ],
        faq: [
          {
            q: "How many SPDs does an AC box with several inverters need?",
            a: "It depends on the protection design. In the Mongolia project the customer specified one 4P SPD per inverter output; TPKELE can follow your design or a single SPD at the common busbar.",
          },
          {
            q: "Can you add energy metering?",
            a: "Yes. TPKELE DIN-rail energy meters can be added per incoming circuit or on the main busbar.",
          },
        ],
      },
      ru: {
        label: "Щит переменного тока",
        summary: "Защита выхода AC инверторов и распределение по отходящим линиям, одна или три фазы.",
        hero: "Щиты переменного тока для выхода инверторов и распределения нагрузок",
        intro:
          "Щит переменного тока принимает выход AC инвертора или сети и распределяет его по отходящим линиям. В типовой солнечной системе с накопителем на каждый инвертор ставится 4P автомат и 4P УЗИП, затем автоматы отходящих линий. TPKELE собирает щит по вашей схеме.",
        seoTitle: "Производитель щитов переменного тока | Щит выхода AC инвертора",
        seoDescription:
          "Щиты переменного тока на заказ для выхода инверторов и распределения: автоматы AC, УЗИП AC 4P, шина PE, счётчики и кабельные вводы. Сборка по вашей однолинейной схеме.",
        seoKeywords: ["щит переменного тока", "щит AC", "щит для инвертора", "трёхфазный распределительный щит", "щит с УЗИП"],
        useCases: [
          "Выход AC гибридного или сетевого инвертора",
          "Объединение выходов нескольких инверторов перед сетью или нагрузками",
          "Распределение по отходящим линиям здания или объекта",
        ],
        configTitle: "Типовые варианты комплектации",
        configRows: [
          { item: "Система", options: "Однофазная 230 В или трёхфазная 400 В, TN-S / TN-C-S / TT" },
          { item: "Вводная защита", options: "Автоматы AC TPKELE 1P–4P, по одному на инвертор или ввод" },
          { item: "Защита от перенапряжений", options: "УЗИП AC 4P TPKELE (Uc 385 В, In 20 кА / Imax 40 кА) или 2P для одной фазы" },
          { item: "Отходящие линии", options: "Автоматы AC 1P / 2P / 4P, по перечню нагрузок" },
          { item: "Опции", options: "Счётчик энергии, реле напряжения, дифавтомат" },
          { item: "Заземление и вводы", options: "Шины PE / N, кабельные вводы под ваши кабели" },
        ],
        checklist: [
          "Модель, количество и выходной ток инверторов",
          "Одна или три фазы, система заземления",
          "Количество и номиналы отходящих линий",
          "Требования к учёту и мониторингу",
        ],
        faq: [
          {
            q: "Сколько УЗИП нужно в щите с несколькими инверторами?",
            a: "Зависит от проекта защиты. В проекте в Монголии заказчик указал по одному 4P УЗИП на выход каждого инвертора; TPKELE может собрать по вашему проекту или с одним УЗИП на общей шине.",
          },
          {
            q: "Можно добавить учёт электроэнергии?",
            a: "Да. Счётчики TPKELE на DIN-рейку устанавливаются на каждый ввод или на общую шину.",
          },
        ],
      },
    },
  },
  {
    slug: "ats-panel",
    image: "/assets/navigation/ats.webp",
    caseHref: "/projects/zimbabwe-sirdc-solar-project",
    components: [
      { href: "/products/ats", label: { en: "Automatic Transfer Switch", ru: "Автоматические переключатели (АВР)" } },
      { href: "/products/ac-mcb", label: { en: "AC MCB", ru: "Автоматы AC" } },
      { href: "/products/ac-spd", label: { en: "AC SPD", ru: "УЗИП AC" } },
      { href: "/products/voltage-protector", label: { en: "Voltage Protector", ru: "Реле напряжения" } },
    ],
    content: {
      en: {
        label: "ATS Panel",
        summary: "Automatic changeover between mains, generator and inverter supply, with protection on each source.",
        hero: "ATS Panels for Mains, Generator and Inverter Changeover",
        intro:
          "An ATS panel switches the load automatically between two power sources, such as mains and a generator, or mains and an inverter. TPKELE builds the panel around its 63A automatic transfer switches, with breakers and surge protection on each source.",
        seoTitle: "ATS Panel Manufacturer | Automatic Changeover Panel up to 63A",
        seoDescription:
          "Custom ATS panels for mains, generator and inverter changeover: TPKELE 2P/3P/4P automatic transfer switches up to 63A, source breakers and AC SPDs, built to your drawing.",
        seoKeywords: ["ATS panel", "automatic changeover panel", "automatic transfer switch panel", "generator changeover box", "dual power transfer panel", "inverter ATS box"],
        useCases: [
          "Mains to diesel generator backup",
          "Mains to inverter / battery backup",
          "Two utility feeders for critical loads",
        ],
        configTitle: "Typical Configuration Options",
        configRows: [
          { item: "Transfer switch", options: "TPKELE ATS 2P / 3P / 4P, up to 63A" },
          { item: "Transfer speed", options: "PC-class (≤0.05s) or CB-class motorized (~2s)" },
          { item: "Source protection", options: "TPKELE AC MCB on each source and the load side" },
          { item: "Surge protection", options: "TPKELE AC SPD on the incoming sources" },
          { item: "Neutral", options: "Switched or solid neutral, per earthing system" },
          { item: "Options", options: "Voltage protector, source indicator lamps, labeling" },
        ],
        checklist: [
          "The two sources (mains, generator, inverter) and their voltage",
          "Load current and number of phases",
          "Whether the neutral must be switched",
          "Required changeover time",
        ],
        faq: [
          {
            q: "What is the maximum current?",
            a: "TPKELE automatic transfer switches are rated up to 63A, in 2P, 3P and 4P. Panels above 63A are outside the current TPKELE ATS range.",
          },
          {
            q: "Which ATS type suits an inverter backup?",
            a: "PC-class ATS changes over in ≤0.05s and suits loads that should not drop out. Confirm the inverter's output behaviour before final selection.",
          },
        ],
      },
      ru: {
        label: "Щит АВР",
        summary: "Автоматическое переключение между сетью, генератором и инвертором с защитой на каждом вводе.",
        hero: "Щиты АВР для переключения сеть — генератор — инвертор",
        intro:
          "Щит АВР автоматически переключает нагрузку между двумя источниками: сетью и генератором или сетью и инвертором. TPKELE собирает щит на своих автоматических переключателях до 63 А с автоматами и УЗИП на каждом вводе.",
        seoTitle: "Производитель щитов АВР | Щит автоматического переключения до 63 А",
        seoDescription:
          "Щиты АВР на заказ для переключения сеть — генератор — инвертор: переключатели TPKELE 2P/3P/4P до 63 А, автоматы на вводах и УЗИП AC. Сборка по вашей схеме.",
        seoKeywords: ["щит АВР", "щит автоматического ввода резерва", "АВР генератор", "щит переключения питания", "АВР для инвертора"],
        useCases: [
          "Сеть и резервный дизель-генератор",
          "Сеть и резерв от инвертора с батареями",
          "Два сетевых ввода для ответственных нагрузок",
        ],
        configTitle: "Типовые варианты комплектации",
        configRows: [
          { item: "Переключатель", options: "АВР TPKELE 2P / 3P / 4P, до 63 А" },
          { item: "Время переключения", options: "Класс PC (≤0,05 с) или класс CB с приводом (~2 с)" },
          { item: "Защита вводов", options: "Автоматы AC TPKELE на каждом вводе и на нагрузке" },
          { item: "Защита от перенапряжений", options: "УЗИП AC TPKELE на вводах" },
          { item: "Нейтраль", options: "Коммутируемая или неразрывная, по системе заземления" },
          { item: "Опции", options: "Реле напряжения, индикаторы вводов, маркировка" },
        ],
        checklist: [
          "Два источника (сеть, генератор, инвертор) и их напряжение",
          "Ток нагрузки и количество фаз",
          "Нужна ли коммутация нейтрали",
          "Требуемое время переключения",
        ],
        faq: [
          {
            q: "Какой максимальный ток?",
            a: "Переключатели АВР TPKELE рассчитаны до 63 А, в исполнении 2P, 3P и 4P. Щиты на ток выше 63 А не входят в текущую линейку TPKELE.",
          },
          {
            q: "Какой тип АВР подходит для резерва от инвертора?",
            a: "АВР класса PC переключает за ≤0,05 с и подходит для нагрузок, которые не должны отключаться. Перед выбором уточните поведение выхода инвертора.",
          },
        ],
      },
    },
  },
];

export function getBoxType(slug: string): BoxType | undefined {
  return boxTypes.find((b) => b.slug === slug);
}

export function boxLocale(locale: string): BoxLocale {
  return locale === "ru" ? "ru" : "en";
}
