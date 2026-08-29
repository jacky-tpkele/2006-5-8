import type { ManufacturerData } from "./types";

export const atsManufacturer: ManufacturerData = {
  slug: "ats-manufacturer",
  category: "ATS",
  productLabel: "ATS",
  heroTitle: "ATS Manufacturer in China for OEM Automatic Transfer Switch Supply",
  heroSubtitle:
    "TPKELE produces automatic transfer switches for distributors, panel builders and critical-power project buyers who need fast, reliable changeover between mains and backup with full documentation and consistent OEM packaging.",
  heroTags: ["2P / 3P / 4P", "Up to 63A", "PC-class & CB-class", "IEC 60947-6-1"],
  heroImage: "/assets/landing/circuit-breakers/factory-1.webp",

  checklistTitle: "What serious buyers usually check first",
  checklist: [
    { title: "Whether the changeover time is confirmed", text: "Transfer time affects how long the load sees a voltage interruption. PC-class ATS and CB-class units have different transfer profiles — confirm which applies." },
    { title: "Whether the neutral overlap or break-before-make is appropriate", text: "Some loads require neutral continuity during transfer; others require a clear break. The ATS design must match the load type." },
    { title: "Whether the voltage sensing window is adjustable", text: "Under-voltage and over-voltage thresholds that can be set on site reduce commissioning calls and avoid nuisance transfers." },
    { title: "Whether the certificate covers the exact pole count and rating", text: "IEC documentation must match the 2P, 3P or 4P configuration and current rating on your purchase order." },
    { title: "Whether the enclosure and terminal layout suit the panel", text: "DIN rail fit, terminal torque and busbar spacing need to match the enclosure the ATS will be installed in." },
  ],

  whyTitle: "Why a dedicated ATS manufacturer is different from a generic trader",
  whyIntro:
    "An automatic transfer switch is an electromechanical device that operates under fault conditions. Its reliability depends on the actuator mechanism, contact design and control circuit — all of which need to be consistent across production batches, not just on the sample.",
  whyCards: [
    { title: "Consistent mechanical performance", text: "Contact mechanism, actuator spring force and transfer timing are held to the same tolerance across batches because they are calibrated on the production line, not just on the approval sample." },
    { title: "Control circuit matched to the mechanism", text: "Voltage sensing thresholds, time delays and manual override are designed around the specific actuator rather than added as an aftermarket control board." },
    { title: "Documentation for critical-power applications", text: "Panel builders and EPC contractors who install ATS in hospitals, data centres or telecoms sites need test reports and certificates that match what is installed, not a generic approval." },
  ],

  compare: {
    title: "Manufacturer vs trader — what changes for the ATS buyer",
    headers: ["What a dedicated manufacturer gives you", "What usually happens with a generic trader"],
    rows: [
      { left: "Actuator mechanism and control circuit from the same engineering team", right: "Mechanical and control sourced separately and assembled without matched calibration" },
      { left: "Transfer time verified per production batch", right: "Transfer time stated on datasheet but not tested per batch" },
      { left: "IEC 60947-6-1 documentation for the exact pole count and rating", right: "Certificate covers the family; the specific configuration may not be tested" },
      { left: "Voltage sensing thresholds documented and adjustable range confirmed", right: "Threshold range described verbally, not documented in the test report" },
      { left: "OEM branding and panel cutout dimensions held stable", right: "Mechanical dimensions change between production runs without notification" },
      { left: "Batch traceability so a field failure can be investigated", right: "No batch information available after goods have shipped" },
    ],
  },

  scopeTitle: "ATS product scope buyers should confirm by class and pole count",
  scopeIntro:
    "TPKELE supplies PC-class ATS for fast electronic transfer and CB-class motorised ATS for applications where circuit breaker-level interruption is required. Both are available in 2P, 3P and 4P configurations.",
  series: [
    { label: "PC-class ATS 2P", meta: "Fast transfer · single phase", href: "/products/ats" },
    { label: "PC-class ATS 3P", meta: "Fast transfer · three phase", href: "/products/ats" },
    { label: "PC-class ATS 4P", meta: "Fast transfer · three phase + neutral", href: "/products/ats" },
    { label: "CB-class ATS 63A", meta: "Motorised breaker · 2P/3P/4P", href: "/products/ats" },
  ],
  scopeNote:
    "Note: PC-class and CB-class ATS have different transfer time profiles and different interrupting ratings. Confirm the class, pole count, rated current and neutral handling requirement before placing a sample order.",

  buyerTitle: "What export buyers usually need from an ATS factory",
  buyerIntro:
    "ATS is installed in critical-power applications where a changeover failure is a site incident. Buyers who work in these markets need documentation and testing that reflects actual production, not just the engineering sample.",
  buyerBlocks: [
    {
      title: "Product consistency",
      items: ["Actuator mechanism and spring force held constant across batches", "Transfer time verified per lot", "Voltage sensing thresholds stable across production runs", "Terminal torque and DIN rail fit unchanged", "Batch code printed and traceable"],
    },
    {
      title: "Certification clarity",
      items: ["IEC 60947-6-1 for the exact class, pole count and rated current", "Test report available in full", "CE declaration for the shipped configuration", "Neutral handling behaviour documented", "RoHS declarations for the shipped build"],
    },
    {
      title: "OEM and branding",
      items: ["Logo on housing face and front panel", "Custom label and packaging language", "Panel cutout dimensions confirmed before artwork", "Artwork proof before production", "Consistent marking across repeat orders"],
    },
    {
      title: "Commercial predictability",
      items: ["Lead time quoted for sample and mass order", "Pricing by pole count and class", "Repeat order price held for an agreed window", "Shipping carton dimensions confirmed early", "Written policy on batch review"],
    },
  ],

  oemTitle: "OEM automatic transfer switch workflow for branded supply",
  oemIntro: "ATS OEM work follows the same staged sign-off as any electromechanical component, with an additional step to confirm the control circuit settings for the application.",
  oemCards: [
    { title: "01 · Confirm class and configuration", text: "PC or CB class, pole count, rated current, neutral overlap or break-before-make — fixed in writing." },
    { title: "02 · Approve sample and transfer test", text: "Sample produced on production tooling; transfer time and voltage threshold data attached to the sample record." },
    { title: "03 · Lock the branding", text: "Logo, label, panel cutout drawing and carton marking proofed as files." },
    { title: "04 · Set the inspection rule", text: "Transfer time check, contact resistance and acceptance limits agreed before the run." },
    { title: "05 · Release and document", text: "Batch codes assigned; IEC certificate and test report issued against the shipped configuration." },
    { title: "06 · Maintain across repeat orders", text: "Same actuator specification and artwork revision so later orders match the first." },
  ],

  factoryTitle: "Factory capability, quality control, and documentation for ATS supply",
  factoryIntro: "ATS reliability is set during calibration, not at final inspection. Actuator spring force and control circuit thresholds need to be verified during assembly, not only on a sample at the end of the line.",
  factoryBlocks: [
    {
      title: "Factory and production capability",
      items: ["Actuator assembly and calibration in-house", "Control circuit matched to the mechanical design", "PC-class and CB-class on shared documentation platform", "Volume capacity for repeat project orders", "Component lot traceability from intake to finished goods"],
    },
    {
      title: "Quality control and testing workflow",
      items: ["Incoming inspection on actuators and contacts", "Transfer time verification per lot", "Voltage sensing threshold check", "Insulation resistance and dielectric test", "Mechanical endurance sampling", "Pre-shipment sampling against approved acceptance rule"],
    },
  ],

  docsTitle: "Documentation, sample handling, and repeat-order control for ATS buyers",
  docsIntro: "Critical-power applications require documentation that can be presented to a building inspector or an EPC engineer. Confirm the document set before production, not on delivery.",
  docsTable: {
    title: "Documentation checklist",
    headers: ["What to request", "Why it matters to the buyer"],
    rows: [
      { left: "IEC 60947-6-1 test report for the shipped class and rating", right: "Required for project submission in most critical-power applications" },
      { left: "Certificate naming exact class, poles and current", right: "Prevents a mismatch between the document and the goods" },
      { left: "Sample record with transfer time data", right: "Reference if a later batch shows different changeover behaviour" },
      { left: "Control circuit threshold documentation", right: "Allows the buyer to set voltage windows correctly on site" },
      { left: "Artwork revision number on file", right: "Stops label and marking drift between orders" },
      { left: "Inspection and acceptance rule in writing", right: "Turns pre-shipment checking into a defined pass or fail" },
    ],
  },

  standardsTitle: "How a reliable ATS manufacturer should talk about standards",
  standardsIntro: "ATS applications in critical infrastructure are subject to project specifications that reference specific IEC clauses. A manufacturer who can answer questions at that level of detail is working from test data, not from a datasheet.",
  standardsTable: {
    title: "Standards and approvals",
    headers: ["Standard or document", "What it should cover"],
    rows: [
      { left: "IEC 60947-6-1", right: "Low voltage switchgear — transfer switching equipment, covering PC and CB class" },
      { left: "CE marking", right: "Declaration with test evidence for the class, pole count and rated current supplied" },
      { left: "RoHS / REACH", right: "Material compliance for the shipped build" },
      { left: "Neutral handling documentation", right: "Overlap or break-before-make behaviour stated and tested" },
      { left: "Factory quality system", right: "Process control linking calibration records to batch codes" },
      { left: "Test report traceability", right: "Report references the class, poles and rating on your order" },
    ],
  },

  commercialTitle: "Commercial points to align before ATS sample or quotation",
  commercialIntro: "ATS projects tend to have tighter delivery windows than commodity components. Getting the technical scope and documentation requirements on file early avoids last-minute delays.",
  commercialTable: {
    title: "Commercial alignment",
    headers: ["Point to align", "What to put in writing"],
    rows: [
      { left: "Class and configuration", right: "PC or CB class, pole count, rated current, neutral handling" },
      { left: "Voltage sensing range", right: "Threshold adjustability range and default factory settings" },
      { left: "Sample terms", right: "Lead time, cost treatment and whether sample binds mass production" },
      { left: "Lead time", right: "Separate figures for sample and mass order" },
      { left: "Packaging", right: "Individual box or bulk, language, carton marking" },
      { left: "Inspection", right: "Transfer time check, contact resistance and acceptance limit" },
      { left: "After-sales handling", right: "How a batch review is raised and what replacement path applies" },
    ],
  },

  faqTitle: "ATS manufacturing questions buyers ask most",
  faq: [
    { q: "What is the difference between PC-class and CB-class ATS?", a: "PC-class (power controller class) ATS uses a dedicated switching mechanism designed specifically for transfer — it cannot interrupt fault current independently. CB-class uses two coordinated circuit breakers with a motorised interlock and can interrupt fault current. PC-class is faster; CB-class offers higher interrupting capacity. Both are available from TPKELE." },
    { q: "Does the ATS handle neutral before live conductors during transfer?", a: "This depends on the configuration. Break-before-make prevents any parallel path between sources; overlap maintains neutral continuity during transfer for sensitive loads. The neutral handling behaviour is documented in the product specification and should be confirmed for the application before ordering." },
    { q: "Can voltage sensing thresholds be adjusted on site?", a: "Yes. The under-voltage and over-voltage trip windows are adjustable within a defined range, which is documented in the product datasheet. Default factory settings are stated and can be confirmed at the sample stage." },
    { q: "What documentation is available for project submission?", a: "IEC 60947-6-1 test report for the shipped class and rated current, CE declaration, and the approved sample record. The neutral handling behaviour is documented separately and available on request." },
    { q: "Is OEM branding available?", a: "Yes. Logo on the housing, custom label and packaging language, and carton marking are all handled as normal OEM work. Artwork is proofed before the production run is released." },
    { q: "What is the typical lead time?", a: "Sample and mass production lead times are quoted separately. The exact figure depends on pole count and class mix; repeat orders are faster because the technical scope is already on file." },
  ],

  seoTitle: "ATS Manufacturer China — OEM Transfer Switch Supplier",
  seoDescription: "TPKELE supplies PC & CB-class automatic transfer switches for OEM buyers. 2P–4P, up to 63A, IEC 60947-6-1 certified. Fast transfer, reliable changeover.",
  seoKeywords: ["ATS manufacturer", "automatic transfer switch manufacturer", "OEM ATS supplier", "transfer switch factory China", "PC class ATS", "CB class ATS", "dual power transfer switch"],
};
