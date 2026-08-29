import type { ManufacturerData } from "./types";

export const combinerBoxManufacturer: ManufacturerData = {
  slug: "combiner-box-manufacturer",
  category: "Combiner Box",
  productLabel: "Combiner Box",
  heroTitle: "Combiner Box Manufacturer in China for OEM Solar PV Combiner Supply",
  heroSubtitle:
    "TPKELE produces IP65 photovoltaic combiner boxes for EPC contractors, solar system integrators and distributors who need string fusing, DC circuit breaking and surge protection in one weatherproof enclosure — built to the voltage and string count on their project.",
  heroTags: ["1000V / 1500V DC", "IP65 Enclosure", "2–16 Strings", "IEC 62548 / IEC 60439"],
  heroImage: "/assets/landing/circuit-breakers/factory-1.webp",

  checklistTitle: "What serious buyers usually check first",
  checklist: [
    { title: "Whether the system voltage rating is 1000V or 1500V", text: "1000V and 1500V combiner boxes are not interchangeable. Component ratings inside the box — fuses, DC breaker, SPD — must all match the system voltage." },
    { title: "Whether the string fuse rating matches the module Isc", text: "String fuse current must be selected based on module short-circuit current and the number of parallel strings. A generic fuse size is not a design." },
    { title: "Whether the SPD inside is rated for DC and the correct voltage class", text: "An AC SPD inside a DC combiner box is a common error in low-cost units. Confirm the DC SPD voltage class per pole." },
    { title: "Whether the IP65 seal is tested or labelled", text: "An IP65 label without a test report is a claim. Gland sealing, door gasket and cable entry design determine whether the box actually excludes water." },
    { title: "Whether the monitoring output matches the data logger", text: "String current monitoring output type — 4-20mA, RS485, or pulse — must match the inverter or SCADA system the combiner box connects to." },
  ],

  whyTitle: "Why a dedicated combiner box manufacturer is different from a generic trader",
  whyIntro:
    "A PV combiner box is assembled from matched components — fuses, DC breakers, DC SPD, busbars and an IP-rated enclosure — that need to work together at the rated system voltage. A manufacturer who designs and assembles these in-house can customise the configuration for the project; a trader who buys finished boxes from different sources cannot.",
  whyCards: [
    { title: "Component matching for the system voltage", text: "Fuse rating, DC breaker voltage class and SPD Ucpv are selected together for the stated system voltage, not assembled from whatever components are available at the time of order." },
    { title: "Enclosure design controlled at the factory", text: "IP65 gland sealing, cable entry size and busbar layout can be adjusted per project because the enclosure is produced in-house rather than sourced as a finished unit." },
    { title: "Documentation matched to the installed configuration", text: "Test reports and certificates reference the specific string count, fuse rating and system voltage on the project order, so they can be submitted to the EPC engineer or site inspector without a mismatch." },
  ],

  compare: {
    title: "Manufacturer vs trader — what changes for the combiner box buyer",
    headers: ["What a dedicated manufacturer gives you", "What usually happens with a generic trader"],
    rows: [
      { left: "Component ratings matched to the system voltage by the engineering team", right: "Standard configuration shipped regardless of whether it matches the project voltage" },
      { left: "String fuse selection based on module Isc and string count", right: "Generic fuse size applied across all orders" },
      { left: "DC SPD rated for the system voltage class per pole", right: "AC SPD or wrong voltage class SPD installed" },
      { left: "IP65 gland sealing tested and documented", right: "IP65 labelled but gland selection and torque not controlled" },
      { left: "Enclosure layout and cable entry configurable per project", right: "Fixed layout; site adapts the installation to the box rather than the other way around" },
      { left: "Documentation references the shipped configuration and string count", right: "Generic certificate for the product family; project-specific configuration not documented" },
    ],
  },

  scopeTitle: "Combiner box scope buyers should confirm by string count and system voltage",
  scopeIntro:
    "TPKELE PV combiner boxes are configured per order. String count, fuse rating, DC SPD class and whether string current monitoring is included are all confirmed at the quotation stage rather than selected from a fixed catalogue.",
  series: [
    { label: "2–4 String · 1000V", meta: "Small rooftop · IP65", href: "/products/combiner-box" },
    { label: "4–8 String · 1000V", meta: "Commercial rooftop · IP65", href: "/products/combiner-box" },
    { label: "8–16 String · 1500V", meta: "Utility ground mount · IP65", href: "/products/combiner-box" },
    { label: "With monitoring", meta: "String current · RS485 output", href: "/products/combiner-box" },
  ],
  scopeNote:
    "Note: utility-scale projects typically use 1500V systems where higher DC voltage increases wire run efficiency. 1500V components throughout the combiner box are required — confirm system voltage before specifying fuse ratings, SPD type and DC breaker.",

  buyerTitle: "What export buyers usually need from a PV combiner box factory",
  buyerIntro:
    "Combiner boxes are typically ordered on a project basis, which means the technical scope varies by order. Buyers who have used low-quality combiner boxes on a previous project usually have a specific list of failures they want to prevent on the next one.",
  buyerBlocks: [
    {
      title: "Product consistency",
      items: ["Component ratings verified against the confirmed system voltage", "Gland torque and IP seal checked per enclosure", "Busbar cross-section and torque consistent", "SPD voltage class confirmed per pole", "Batch code and wiring diagram inside the enclosure"],
    },
    {
      title: "Certification clarity",
      items: ["IP65 test report for the enclosure", "DC component certificates for fuses, breaker and SPD at system voltage", "IEC 62548 or IEC 60439 references for the assembled unit", "CE declaration for the shipped configuration", "RoHS declarations for the built product"],
    },
    {
      title: "OEM and branding",
      items: ["Logo and project nameplate on the enclosure", "Custom wiring label and terminal marking language", "Enclosure colour per project specification", "Documentation package inside the enclosure", "Artwork proof before production"],
    },
    {
      title: "Commercial predictability",
      items: ["Lead time quoted per string count and voltage class", "Pricing inclusive of SPD and monitoring if specified", "Shipping dimensions confirmed for container planning", "Written policy on component substitution if a part is unavailable", "Batch documentation included with the shipment"],
    },
  ],

  oemTitle: "OEM combiner box workflow for project supply",
  oemIntro: "Combiner box orders are almost always project-specific. The OEM workflow starts with a technical specification, not a catalogue selection.",
  oemCards: [
    { title: "01 · Confirm system voltage and string count", text: "1000V or 1500V, number of strings, fuse rating per string and whether monitoring output is required — fixed in writing." },
    { title: "02 · Approve the component selection", text: "Fuse type and rating, DC breaker model, SPD Ucpv and enclosure IP rating confirmed against the system specification." },
    { title: "03 · Approve sample and wiring", text: "Assembled sample inspected; wiring diagram, gland torque and component ratings verified." },
    { title: "04 · Lock branding and documentation", text: "Enclosure nameplate, terminal marking, wiring label language and documentation package proofed." },
    { title: "05 · Release production and document", text: "Batch codes assigned; IP65 test reference and component certificates issued with the shipment." },
    { title: "06 · Maintain configuration for repeat orders", text: "Component specification and artwork revision held on file so future project orders match the approved build." },
  ],

  factoryTitle: "Factory capability, quality control, and documentation for combiner box supply",
  factoryIntro: "Combiner box quality is an assembly discipline: every component must be the right specification, every connection must be made correctly, and the enclosure must seal properly. These are verified during assembly, not at final inspection.",
  factoryBlocks: [
    {
      title: "Factory and production capability",
      items: ["In-house enclosure production and gland assembly", "Component selection and qualification by voltage class", "Assembly and wiring verification at each stage", "Support for both 1000V and 1500V system configurations", "Project-based production scheduling", "Documentation package assembly integrated into the production process"],
    },
    {
      title: "Quality control and testing workflow",
      items: ["Incoming inspection on fuses, breakers, SPDs and glands", "Component rating verification against the project specification", "Wiring continuity and insulation resistance test per unit", "Gland torque check and IP seal verification", "String current monitoring output check if included", "Pre-shipment inspection against the approved wiring diagram"],
    },
  ],

  docsTitle: "Documentation, sample handling, and project-order control",
  docsIntro: "For project orders the documentation package ships with the goods and is presented to the site inspector. Agree the contents before production, not on delivery.",
  docsTable: {
    title: "Documentation checklist",
    headers: ["What to request", "Why it matters to the buyer"],
    rows: [
      { left: "Wiring diagram specific to the shipped string count and voltage", right: "Required by site installers and EPC engineers" },
      { left: "IP65 test reference for the enclosure", right: "Required for site acceptance in exposed installations" },
      { left: "Component certificates for fuses, DC breaker and SPD", right: "Each component needs to be rated for the system voltage; certificates confirm this" },
      { left: "Insulation resistance and continuity test record", right: "Pre-shipment verification that the assembled unit passes basic electrical tests" },
      { left: "Batch code inside the enclosure", right: "Makes a field issue traceable to the production run" },
      { left: "CE declaration for the assembled unit", right: "Required for EU project submissions" },
    ],
  },

  standardsTitle: "How a reliable combiner box manufacturer should talk about standards",
  standardsIntro: "PV combiner box standards reference the system voltage class and the individual component standards. A manufacturer should be able to discuss both rather than citing only a generic CE mark.",
  standardsTable: {
    title: "Standards and approvals",
    headers: ["Standard or document", "What it should cover"],
    rows: [
      { left: "IEC 62548", right: "Photovoltaic array design requirements — relevant for how the combiner box integrates into the string design" },
      { left: "IEC 60439 / IEC 61439", right: "Low voltage switchgear assemblies — applicable to the assembled combiner box" },
      { left: "IEC 60529 (IP65)", right: "Ingress protection rating for the enclosure, verified by test" },
      { left: "IEC 61643-31", right: "DC SPD standard for PV installations — the SPD inside the box must comply" },
      { left: "IEC 60269 / IEC 60947-3", right: "Fuse and switch standards applicable to the string protection components" },
      { left: "CE marking", right: "Declaration for the assembled unit, supported by component certificates at system voltage" },
    ],
  },

  commercialTitle: "Commercial points to align before combiner box sample or quotation",
  commercialIntro: "Combiner box projects have more variables than catalogue products. Getting the configuration on paper before quotation prevents surprises on both sides.",
  commercialTable: {
    title: "Commercial alignment",
    headers: ["Point to align", "What to put in writing"],
    rows: [
      { left: "System voltage", right: "1000V or 1500V DC — drives all component specifications" },
      { left: "String count and fuse rating", right: "Number of input strings and fuse current per string based on module Isc" },
      { left: "SPD specification", right: "Ucpv per pole, Imax class and DC SPD standard" },
      { left: "Monitoring output", right: "Whether string current monitoring is included and output type" },
      { left: "Enclosure options", right: "IP rating, cable entry count, enclosure colour, nameplate language" },
      { left: "Lead time and batch size", right: "Project quantities, delivery schedule and batch documentation requirements" },
      { left: "Component substitution policy", right: "What happens if a specified component is unavailable at production time" },
    ],
  },

  faqTitle: "PV combiner box manufacturing questions buyers ask most",
  faq: [
    { q: "What is the difference between a 1000V and a 1500V combiner box?", a: "Every component inside — string fuses, DC circuit breaker, DC SPD and busbars — must be rated for the system voltage. A 1000V component cannot be used in a 1500V system. TPKELE supplies both voltage classes with matching component specifications." },
    { q: "How is the string fuse rating selected?", a: "String fuse current is determined by the module short-circuit current (Isc) and the number of parallel strings per fuse. A generic fuse size applied across all orders is not a correct design. TPKELE confirms the fuse rating against the module Isc stated on the order." },
    { q: "Is the DC SPD inside the box rated for DC or AC?", a: "TPKELE uses DC-rated surge protective devices compliant with IEC 61643-31. The SPD voltage class per pole is matched to the system voltage. Using an AC SPD in a DC application is a known failure mode in low-cost combiner boxes." },
    { q: "What does the IP65 rating mean and how is it verified?", a: "IP65 means the enclosure is dust-tight and protected against water jets from any direction. The gland selection, cable entry sealing and door gasket all contribute to the rating. TPKELE verifies gland torque and seal condition per enclosure during production." },
    { q: "Is string current monitoring available?", a: "Yes. String current monitoring with RS485 (Modbus) or 4-20mA output is available as an option. The output type must be confirmed against the inverter or SCADA system before production." },
    { q: "What documentation ships with the combiner box?", a: "Wiring diagram for the shipped string count and voltage, IP65 test reference, component certificates for fuses, DC breaker and SPD, insulation resistance test record, and CE declaration. The batch code is affixed inside the enclosure." },
  ],

  seoTitle: "PV Combiner Box Manufacturer China — OEM Solar Supplier",
  seoDescription: "TPKELE supplies IP65 PV combiner boxes for solar projects. 1000V/1500V DC, 2–16 strings, string monitoring available. OEM & project supply.",
  seoKeywords: ["combiner box manufacturer", "PV combiner box manufacturer", "solar combiner box manufacturer China", "OEM combiner box supplier", "1500V combiner box", "IP65 combiner box", "string combiner box factory"],
};
