import type { ManufacturerData } from "./types";

export const voltageProtectorManufacturer: ManufacturerData = {
  slug: "voltage-protector-manufacturer",
  category: "Voltage Protector",
  productLabel: "Voltage Protector",
  heroTitle: "Voltage Protector Manufacturer in China for OEM Over / Under Voltage Protection",
  heroSubtitle:
    "TPKELE produces voltage protection relays for distributors and panel builders supplying markets with unstable grid conditions, where over-voltage and under-voltage events damage downstream equipment on a regular basis.",
  heroTags: ["1P / 2P / 3P / 4P", "Adjustable thresholds", "Auto-recovery delay", "IEC 60947-related"],
  heroImage: "/assets/landing/circuit-breakers/factory-1.webp",

  checklistTitle: "What serious buyers usually check first",
  checklist: [
    { title: "Whether the trip thresholds are actually adjustable", text: "Fixed-threshold devices are cheaper but unusable in markets where grid voltage varies widely. Confirm the adjustment range, not just that adjustment exists." },
    { title: "Whether the recovery delay prevents rapid cycling", text: "Without a reconnection delay, the device will chatter during marginal grid conditions and damage the load it is meant to protect." },
    { title: "Whether the display shows actual measured voltage", text: "A digital readout that shows live line voltage is significantly more useful during commissioning and fault-finding than an LED indicator alone." },
    { title: "Whether the contact rating matches the load", text: "The internal relay contact must be rated for the actual load current, or an external contactor is required. Confirm which arrangement applies." },
    { title: "Whether the housing suits the destination market", text: "DIN rail width, terminal size and display orientation vary by regional installation practice." },
  ],

  whyTitle: "Why a dedicated voltage protector manufacturer is different from a generic trader",
  whyIntro:
    "Voltage protection devices are sold into markets where grid instability is a daily reality — parts of Africa, South Asia, the Middle East and Latin America. The threshold accuracy and recovery logic determine whether the device protects equipment or becomes a nuisance that installers bypass.",
  whyCards: [
    { title: "Threshold accuracy held across batches", text: "Measurement circuit calibration is controlled in-house, so the trip point stays inside its stated tolerance across production runs rather than drifting with component substitutions." },
    { title: "Recovery logic designed for real grid conditions", text: "Reconnection delay and hysteresis are set based on how unstable grids actually behave, not on a generic timer circuit copied from a reference design." },
    { title: "Regional configuration handled at the factory", text: "Voltage range, display language, terminal size and default threshold settings can be set per destination market because the production line is ours to configure." },
  ],

  compare: {
    title: "Manufacturer vs trader — what changes for the buyer",
    headers: ["What a dedicated manufacturer gives you", "What usually happens with a generic trader"],
    rows: [
      { left: "Measurement circuit calibrated and verified per lot", right: "Threshold accuracy varies between batches as components are substituted" },
      { left: "Recovery delay and hysteresis documented and adjustable", right: "Reconnection behaviour undocumented; device cycles in marginal conditions" },
      { left: "Default thresholds configurable per destination market", right: "One factory default shipped everywhere regardless of local grid conditions" },
      { left: "Contact rating stated and tested against real load current", right: "Contact rating copied from a datasheet without verification" },
      { left: "Display language and terminal size configurable", right: "Fixed configuration; installers modify the unit on site" },
      { left: "Batch traceability for field failure investigation", right: "No batch information available after shipment" },
    ],
  },

  scopeTitle: "Voltage protector scope buyers should confirm by pole count and range",
  scopeIntro:
    "TPKELE PN2 and VA2 series voltage protectors monitor incoming mains and disconnect downstream loads when the line moves outside the configured window. Confirm the pole count, voltage range and whether internal contacts or an external contactor will carry the load.",
  series: [
    { label: "PN2 Series 1P", meta: "Single phase · adjustable window", href: "/products/pn2-va2" },
    { label: "PN2 Series 2P", meta: "Line + neutral protection", href: "/products/pn2-va2" },
    { label: "PN2 Series 3P", meta: "Three phase monitoring", href: "/products/pn2-va2" },
    { label: "VA2 Series", meta: "Digital display · voltage + current", href: "/products/voltage-protector" },
  ],
  scopeNote:
    "Note: for loads above the internal contact rating, the voltage protector must drive an external contactor rather than switch the load directly. Confirm the load current at the quotation stage so the correct arrangement is specified.",

  buyerTitle: "What export buyers usually need from a voltage protector factory",
  buyerIntro:
    "These devices are typically sold in volume into distribution channels where the end user is a residential or small commercial customer. Consistency and clear labelling matter more than exotic specifications.",
  buyerBlocks: [
    {
      title: "Product consistency",
      items: ["Trip threshold accuracy held within stated tolerance across lots", "Recovery delay timing consistent between batches", "Display readout accuracy verified per lot", "Terminal torque and DIN fit unchanged", "Batch code printed and traceable"],
    },
    {
      title: "Certification clarity",
      items: ["CE declaration for the shipped voltage range and pole count", "Test report covering threshold accuracy and contact rating", "RoHS and REACH declarations for the built product", "Standards references stated clearly on the datasheet", "Factory audit report available if required"],
    },
    {
      title: "OEM and branding",
      items: ["Logo on the housing face and display bezel", "Display language and unit markings per destination", "Custom packaging and instruction leaflet language", "Artwork proof before production", "Consistent label revision across repeat orders"],
    },
    {
      title: "Commercial predictability",
      items: ["Lead time quoted for sample and mass order separately", "Pricing by pole count and display type", "Repeat order price held for an agreed window", "Carton quantity and dimensions confirmed early", "Written policy on batch review"],
    },
  ],

  oemTitle: "OEM voltage protector workflow for branded supply",
  oemIntro: "Voltage protector OEM work usually includes regional configuration, so the destination market and its typical grid behaviour should be confirmed alongside the technical scope.",
  oemCards: [
    { title: "01 · Confirm scope and market", text: "Pole count, voltage range, default thresholds and destination market fixed in writing before sampling." },
    { title: "02 · Approve sample and threshold data", text: "Sample produced on production tooling; measured trip points and recovery timing attached to the record." },
    { title: "03 · Lock branding and language", text: "Logo, display language, unit markings and instruction leaflet proofed as files." },
    { title: "04 · Set the inspection rule", text: "Threshold accuracy check, display verification and acceptance limits agreed before the run." },
    { title: "05 · Release and document", text: "Batch codes assigned; CE declaration and test data issued against the shipped configuration." },
    { title: "06 · Maintain across repeat orders", text: "Same calibration specification and artwork revision so later orders match the first." },
  ],

  factoryTitle: "Factory capability, quality control, and documentation discipline",
  factoryIntro: "The value of in-house production for this category is calibration control. Threshold accuracy is a calibration output, so it has to be verified on the line rather than sampled after the fact.",
  factoryBlocks: [
    {
      title: "Factory and production capability",
      items: ["Measurement circuit calibration in-house", "Display and firmware configuration per destination market", "Assembly and testing under one quality system", "Volume capacity for distribution-channel orders", "Component lot traceability from intake to finished goods", "OEM packaging staging integrated into the schedule"],
    },
    {
      title: "Quality control and testing workflow",
      items: ["Incoming inspection on relays and measurement components", "Trip threshold accuracy verified per lot", "Recovery delay timing check", "Display readout accuracy verification", "Dielectric and insulation resistance testing", "Pre-shipment sampling against the approved acceptance rule"],
    },
  ],

  docsTitle: "Documentation, sample handling, and repeat-order control",
  docsIntro: "For this category the most valuable document is the measured threshold data from the approved sample, because it gives you a reference point if a later batch behaves differently.",
  docsTable: {
    title: "Documentation checklist",
    headers: ["What to request", "Why it matters to the buyer"],
    rows: [
      { left: "Sample record with measured trip thresholds", right: "Reference point if a later batch shows different trip behaviour" },
      { left: "Test report covering threshold accuracy and contact rating", right: "Lets you defend the specification to a distributor or end client" },
      { left: "CE declaration for the shipped range and pole count", right: "Prevents a mismatch between the document and the goods" },
      { left: "Recovery delay timing documented", right: "Allows installers to predict reconnection behaviour on site" },
      { left: "Artwork and leaflet revision on file", right: "Stops packaging and language drift between orders" },
      { left: "Inspection and acceptance rule in writing", right: "Turns pre-shipment checking into a defined pass or fail" },
    ],
  },

  standardsTitle: "How a reliable manufacturer should talk about standards and approvals",
  standardsIntro: "Voltage protection relays sit across several standards depending on construction and application. A manufacturer should be able to state which apply to the specific build rather than listing every standard in the field.",
  standardsTable: {
    title: "Standards and approvals",
    headers: ["Standard or document", "What it should cover"],
    rows: [
      { left: "CE marking", right: "Declaration supported by test evidence for the voltage range and pole count supplied" },
      { left: "IEC 60947 series", right: "Low voltage switchgear and controlgear requirements applicable to the switching element" },
      { left: "RoHS / REACH", right: "Material compliance declarations for the shipped build" },
      { left: "Threshold accuracy test data", right: "Measured trip points against the stated tolerance for the shipped lot" },
      { left: "Contact rating verification", right: "Evidence the internal relay is rated for the stated load current" },
      { left: "Factory quality system", right: "Documented calibration process linking records to batch codes" },
    ],
  },

  commercialTitle: "Commercial points to align before sample or quotation",
  commercialIntro: "This category usually moves in volume through distribution, so packaging and carton configuration matter as much as the technical scope.",
  commercialTable: {
    title: "Commercial alignment",
    headers: ["Point to align", "What to put in writing"],
    rows: [
      { left: "Product scope", right: "Series, pole count, voltage range and display type per SKU" },
      { left: "Default settings", right: "Factory default thresholds and recovery delay per destination market" },
      { left: "Load arrangement", right: "Whether internal contacts switch the load or an external contactor is required" },
      { left: "Sample terms", right: "Lead time, cost treatment and binding scope for mass production" },
      { left: "Lead time", right: "Separate figures for sample, first mass order and repeat order" },
      { left: "Packaging", right: "Retail or bulk, leaflet language, carton quantity and marking" },
      { left: "Inspection", right: "Threshold accuracy coverage and acceptance limit before shipment" },
    ],
  },

  faqTitle: "Voltage protector manufacturing questions buyers ask most",
  faq: [
    { q: "How wide is the adjustable trip range?", a: "The PN2 and VA2 series allow the over-voltage and under-voltage thresholds to be set within a defined window, which is stated in the product datasheet. The range is chosen so that it covers the grid conditions typical of the destination market. Confirm the exact range for your model at quotation." },
    { q: "Can the voltage protector switch the load directly?", a: "Up to the internal contact rating, yes. Above that, the device should drive an external contactor rather than carry the load through its own contacts. Confirm the load current at the quotation stage so the correct arrangement is specified." },
    { q: "Why does the recovery delay matter?", a: "Without a reconnection delay the device reconnects as soon as voltage returns to the acceptable window, which in marginal grid conditions causes rapid cycling. That cycling stresses motors and compressors more than the original voltage excursion would have. The recovery delay is adjustable and documented." },
    { q: "Is the display language configurable?", a: "Yes. Display markings, units and the instruction leaflet language are set per destination market as part of normal OEM work. Artwork is proofed before the production run starts." },
    { q: "What documentation comes with the shipment?", a: "CE declaration for the shipped voltage range and pole count, test report covering threshold accuracy and contact rating, RoHS compliance, and the approved sample record with measured trip points." },
    { q: "What is the typical lead time?", a: "Sample and mass production are quoted separately. Repeat orders are faster because the calibration specification, default settings and artwork revision are already on file." },
  ],

  seoTitle: "Voltage Protector Manufacturer in China — OEM Over / Under Voltage Relay",
  seoDescription: "TPKELE is a voltage protector manufacturer in China supplying over and under voltage protection relays for OEM and export buyers. 1P–4P, adjustable thresholds, CE certified.",
  seoKeywords: ["voltage protector manufacturer", "over voltage protector manufacturer", "under voltage relay supplier", "OEM voltage protection device", "voltage protector factory China", "adjustable voltage relay"],
};
