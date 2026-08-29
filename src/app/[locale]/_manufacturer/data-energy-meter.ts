import type { ManufacturerData } from "./types";

export const energyMeterManufacturer: ManufacturerData = {
  slug: "energy-meter-manufacturer",
  category: "Energy Meter",
  productLabel: "Energy Meter",
  heroTitle: "Energy Meter Manufacturer in China for OEM DIN Rail kWh Meter Supply",
  heroSubtitle:
    "TPKELE produces DIN rail energy meters for distributors, metering system integrators and panel builders who need accurate kWh measurement with Modbus or pulse output and repeatable calibration across production batches.",
  heroTags: ["Single & Three Phase", "Modbus RTU / Pulse output", "Class 1 Accuracy", "MID / IEC 62053"],
  heroImage: "/assets/landing/circuit-breakers/factory-1.webp",

  checklistTitle: "What serious buyers usually check first",
  checklist: [
    { title: "Whether the accuracy class is tested per lot", text: "Class 1 accuracy needs to be verified on the production line, not just on a type-test sample. Ask for the calibration method, not just the class claim." },
    { title: "Whether the Modbus register map is documented", text: "System integrators need a complete register map before they start integration work. A datasheet that lists Modbus as a feature without publishing the map creates integration delays." },
    { title: "Whether the MID or IEC certificate covers the shipped model", text: "Revenue metering often requires MID approval. The certificate must match the current transformer ratio and rated current on your order." },
    { title: "Whether the display is readable in the installation environment", text: "DIN rail meters in distribution panels are often read through closed panel doors. Display size, contrast and backlight availability affect whether the reading is actually usable." },
    { title: "Whether pulse output count and wiring are compatible with the logger", text: "Pulse rate, wiring polarity and dry-contact or open-collector output type must match the data logger or BMS the meter connects to." },
  ],

  whyTitle: "Why a dedicated energy meter manufacturer is different from a generic trader",
  whyIntro:
    "Energy meters are calibration instruments. Their value to the buyer depends entirely on the accuracy of the measurement across the operating temperature range, the Modbus implementation matching the documented register map, and the calibration holding across production batches.",
  whyCards: [
    { title: "Calibration controlled in-house", text: "Accuracy class verification runs on the production line under controlled conditions, so Class 1 accuracy is a production output rather than a type-test claim that may not reflect the shipped goods." },
    { title: "Modbus implementation matches the published map", text: "The register map is written by the same team that wrote the firmware. When a system integrator finds a discrepancy, there is someone who can answer the question and issue a correction rather than forward an email." },
    { title: "Certificate covers the specific rated current and CT ratio", text: "MID approval and IEC 62053 documentation name the rated current and measurement configuration, so they can be presented to a utility or building inspector without a mismatch." },
  ],

  compare: {
    title: "Manufacturer vs trader — what changes for the energy meter buyer",
    headers: ["What a dedicated manufacturer gives you", "What usually happens with a generic trader"],
    rows: [
      { left: "Calibration verified per production lot against a traceable reference", right: "Calibration claimed on the datasheet; verification method not documented" },
      { left: "Complete Modbus register map published and firmware-matched", right: "Register map incomplete or inconsistent with the firmware shipped" },
      { left: "MID or IEC certificate names the exact current rating and CT ratio", right: "Generic certificate covers the family; specific configuration may not be approved" },
      { left: "Firmware version controlled and documented per production batch", right: "Firmware version unknown; updates shipped without notification" },
      { left: "OEM display language and branding consistent across repeat orders", right: "Display firmware and label vary between shipments" },
      { left: "Batch traceability for calibration audit or field investigation", right: "No batch or calibration record available after shipment" },
    ],
  },

  scopeTitle: "Energy meter scope buyers should confirm by phase, output and CT ratio",
  scopeIntro:
    "TPKELE DIN rail energy meters cover single-phase and three-phase measurement with direct or current transformer connection. Confirm the rated current, CT ratio, output type and firmware version before sampling.",
  series: [
    { label: "Single Phase Direct", meta: "10–80A · Modbus + pulse", href: "/products/din-rail-energy-meter" },
    { label: "Three Phase Direct", meta: "3×80A · Modbus RTU", href: "/products/energy-meter" },
    { label: "Three Phase CT", meta: "3×5A CT input · MID", href: "/products/energy-meter" },
    { label: "Multi-function Meter", meta: "V / I / P / Q / kWh", href: "/products/energy-meter" },
  ],
  scopeNote:
    "Note: direct-connected and CT-connected versions are not interchangeable. A direct meter used with external CTs will read incorrectly unless the CT ratio is programmed. Confirm the connection type and rated current at quotation rather than at the sample stage.",

  buyerTitle: "What export buyers usually need from an energy meter factory",
  buyerIntro:
    "Energy metering projects typically involve system integrators who need documentation before they start and installers who need a meter that matches the specification approved by their client. Both groups rely on the factory getting the calibration and the register map right the first time.",
  buyerBlocks: [
    {
      title: "Product consistency",
      items: ["Accuracy class verified per production lot", "Firmware version controlled and documented", "Modbus register map matches the shipped firmware", "Display calibration stable across batches", "Batch code and firmware version printed on the label"],
    },
    {
      title: "Certification clarity",
      items: ["MID approval for revenue metering applications", "IEC 62053-21 or -22 for accuracy class", "CE declaration for the shipped configuration", "Complete Modbus register map document", "RoHS and REACH declarations for the built product"],
    },
    {
      title: "OEM and branding",
      items: ["Display language and unit configuration per destination", "Logo on housing and display bezel", "Custom label and packaging language", "Firmware version locked to OEM configuration", "Artwork proof before production"],
    },
    {
      title: "Commercial predictability",
      items: ["Lead time quoted for sample and mass order", "Pricing by phase, output and CT configuration", "Firmware version held for the order window", "Carton dimensions confirmed early", "Written policy on firmware update notification"],
    },
  ],

  oemTitle: "OEM energy meter workflow for branded supply",
  oemIntro: "Energy meter OEM work includes firmware configuration alongside physical branding, so the display language, unit settings and Modbus address need to be part of the sample approval scope.",
  oemCards: [
    { title: "01 · Confirm measurement scope", text: "Phase count, rated current, CT ratio, output type and firmware features fixed in writing." },
    { title: "02 · Approve sample with calibration data", text: "Sample produced on production tooling; accuracy verification and Modbus register map attached to the sample record." },
    { title: "03 · Lock firmware and branding", text: "Display language, unit settings, Modbus address range and housing label proofed as files." },
    { title: "04 · Set the inspection rule", text: "Accuracy spot-check, Modbus communication test and acceptance limits agreed before the run." },
    { title: "05 · Release and document", text: "Batch codes and firmware versions assigned; MID or IEC documentation issued against the shipped configuration." },
    { title: "06 · Maintain across repeat orders", text: "Same firmware revision and artwork so later orders match the first." },
  ],

  factoryTitle: "Factory capability, quality control, and documentation for energy meter supply",
  factoryIntro: "The accuracy claim on a DIN rail energy meter is only as good as the calibration process behind it. In-house calibration against a traceable reference is what separates a manufacturer from an assembler.",
  factoryBlocks: [
    {
      title: "Factory and production capability",
      items: ["Calibration bench with traceable reference standard", "Firmware loading and verification on the production line", "Single-phase and three-phase production on shared platform", "Volume capacity for metering project orders", "Firmware version controlled per production batch", "OEM configuration staging integrated into the schedule"],
    },
    {
      title: "Quality control and testing workflow",
      items: ["Incoming inspection on measurement ICs and CTs", "Accuracy verification per lot against reference standard", "Modbus communication test per unit", "Display function and contrast check", "Pulse output verification", "Pre-shipment sampling against the approved acceptance rule"],
    },
  ],

  docsTitle: "Documentation, sample handling, and repeat-order control",
  docsIntro: "The Modbus register map and the calibration record are the two documents that matter most for system integrators. Get both confirmed at the sample stage.",
  docsTable: {
    title: "Documentation checklist",
    headers: ["What to request", "Why it matters to the buyer"],
    rows: [
      { left: "Complete Modbus register map for the shipped firmware version", right: "Integration cannot start without a complete, firmware-matched register map" },
      { left: "Calibration record for the approved sample", right: "Reference point if a later batch shows different accuracy" },
      { left: "MID or IEC 62053 certificate for the shipped current rating", right: "Required for revenue metering applications and utility submissions" },
      { left: "Firmware version number documented", right: "Allows future lots to be confirmed against the approved version" },
      { left: "CE declaration for the shipped configuration", right: "Required for EU market entry" },
      { left: "Inspection and acceptance rule in writing", right: "Turns pre-shipment accuracy checking into a defined pass or fail" },
    ],
  },

  standardsTitle: "How a reliable energy meter manufacturer should talk about standards",
  standardsIntro: "Accuracy class without a calibration method is a marketing claim. A manufacturer who can describe the calibration process, the reference standard used and the test coverage per lot is working from verified data.",
  standardsTable: {
    title: "Standards and approvals",
    headers: ["Standard or document", "What it should cover"],
    rows: [
      { left: "IEC 62053-21", right: "Accuracy requirements for Class 1 and Class 2 static active energy meters" },
      { left: "IEC 62053-22", right: "Accuracy requirements for Class 0.2S and Class 0.5S meters" },
      { left: "MID (2014/32/EU)", right: "EU Measuring Instruments Directive — required for legal trade metering in the EU" },
      { left: "CE marking", right: "Declaration supported by test evidence for the rated current and configuration supplied" },
      { left: "Modbus RTU specification", right: "Complete register map document matched to the firmware version shipped" },
      { left: "RoHS / REACH", right: "Material compliance for the shipped build" },
    ],
  },

  commercialTitle: "Commercial points to align before energy meter sample or quotation",
  commercialIntro: "Energy meter projects often have a system integrator in the chain whose timeline depends on receiving the register map early. Include documentation delivery in the commercial scope.",
  commercialTable: {
    title: "Commercial alignment",
    headers: ["Point to align", "What to put in writing"],
    rows: [
      { left: "Measurement scope", right: "Phase count, rated current, CT ratio and output type per SKU" },
      { left: "Firmware version", right: "Version number locked for the order; notification process for updates" },
      { left: "Register map delivery", right: "When the full Modbus register map document will be provided" },
      { left: "Sample terms", right: "Lead time, cost treatment and binding scope for mass production" },
      { left: "Lead time", right: "Separate figures for sample and mass order" },
      { left: "Packaging", right: "Retail or bulk, language, manual language, carton marking" },
      { left: "Inspection", right: "Accuracy spot-check coverage and acceptance limit before shipment" },
    ],
  },

  faqTitle: "Energy meter manufacturing questions buyers ask most",
  faq: [
    { q: "What accuracy class are the meters calibrated to?", a: "The standard production build is calibrated to IEC 62053-21 Class 1, meaning the metering error is within ±1% at reference conditions. Class 0.5S is available on specific models for revenue metering applications that require tighter tolerance. Calibration is verified per production lot against a traceable reference standard." },
    { q: "Is a complete Modbus register map available?", a: "Yes. The full register map is published for each firmware version and is available before the sample stage so that system integrators can start integration work in parallel with the hardware approval process. The register map is firmware-version-specific; confirm the version when ordering." },
    { q: "Are the meters MID approved?", a: "MID (EU Measuring Instruments Directive) approval is available on specific models and is required for legal trade metering applications in the EU. The MID certificate names the rated current and CT ratio, so confirm the model before ordering for revenue metering projects." },
    { q: "Can the display language be configured?", a: "Yes. Display language, unit markings and default settings are configurable per destination market as part of OEM work. The firmware configuration is locked to the approved version before the production run is released." },
    { q: "What outputs are available beyond Modbus?", a: "Pulse output (S0) is standard on most models. The pulse rate (imp/kWh) and output type (open collector or dry contact) are stated in the datasheet and should be confirmed against the logger or BMS specifications before sampling." },
    { q: "What is the typical lead time?", a: "Sample and mass production are quoted separately. The firmware configuration and calibration specification need to be confirmed at the sample stage; once on file, repeat orders are faster." },
  ],

  seoTitle: "Energy Meter Manufacturer China — OEM DIN Rail Supplier",
  seoDescription: "TPKELE supplies DIN rail kWh meters with Modbus RTU & pulse output for OEM buyers. Single/three phase, Class 1, MID available. IEC 62053 certified.",
  seoKeywords: ["energy meter manufacturer", "DIN rail energy meter manufacturer", "kWh meter manufacturer China", "OEM energy meter supplier", "Modbus energy meter", "MID energy meter", "three phase meter manufacturer"],
};
