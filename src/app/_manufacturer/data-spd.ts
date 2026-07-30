import type { ManufacturerData } from "./types";

export const spdManufacturer: ManufacturerData = {
  slug: "spd-manufacturer",
  category: "SPD",
  productLabel: "SPD",
  heroTitle: "SPD Manufacturer in China for OEM Surge Protective Device Supply",
  heroSubtitle:
    "TPKELE produces AC and DC surge protective devices for distributors, EPC contractors and panel builders who need certified protection against lightning and switching transients with traceable test documentation on every order.",
  heroTags: ["Type 1 / Type 2 / Type 3", "AC & DC", "Up to 1500V DC", "IEC 61643-11 / IEC 61643-31"],
  heroImage: "/assets/landing/circuit-breakers/factory-1.webp",

  checklistTitle: "What serious buyers usually check first",
  checklist: [
    { title: "Whether the Imax and Iimp figures are tested", text: "Peak current claims need a test report, not a marketing value inherited from a similar model." },
    { title: "Whether the DC SPD handles PV voltage correctly", text: "1000V and 1500V DC applications need a device rated for the actual system voltage, not a derated AC unit." },
    { title: "Whether the disconnect mechanism is included", text: "A thermal disconnect or overcurrent protection built into the SPD matters for how the device fails safely." },
    { title: "Whether the certificate matches the shipped model", text: "CE and IEC documents must name the same type, voltage level and Imax that appear on your order." },
    { title: "Whether the indicator window is visible after installation", text: "Status indication needs to be accessible after the SPD is mounted on the rail inside a panel." },
  ],

  whyTitle: "Why a dedicated SPD manufacturer is different from a generic trader",
  whyIntro:
    "SPD performance depends on the varistor material, the disconnect design and how the housing channels heat. A trader cannot answer questions about any of these because they did not build the product. For buyers sourcing protection devices, traceability back to the factory is part of the specification.",
  whyCards: [
    { title: "Consistent protection level", text: "Varistor selection, Up value and Imax rating are controlled at source and stay stable across batches rather than varying with whatever the trader bought that month." },
    { title: "DC and AC on one supply chain", text: "Both series come from the same factory and documentation system, which simplifies qualification and repeat ordering for projects that need both grid-side and PV-side protection." },
    { title: "Certification aligned to the shipped build", text: "Test reports reference the exact model, voltage class and connection configuration being supplied, not a generic family approval." },
  ],

  compare: {
    title: "Manufacturer vs trader — what changes for the SPD buyer",
    headers: ["What a dedicated manufacturer gives you", "What usually happens with a generic trader"],
    rows: [
      { left: "Varistor specification fixed per series and documented", right: "Component source changes between orders without notification" },
      { left: "IEC 61643 test reports for the exact rated voltage and Imax", right: "Generic certificate covering a voltage family rather than the ordered model" },
      { left: "DC SPD designed for PV polarity and voltage class", right: "AC unit sold into DC applications with a disclaimer footnote" },
      { left: "Thermal disconnect and fail-safe mode described in the datasheet", right: "Disconnect behaviour not documented or confirmed" },
      { left: "OEM label and packaging consistent across repeat orders", right: "Artwork varies between shipments" },
      { left: "Batch traceability so a field issue can be traced back", right: "No batch information available after goods have shipped" },
    ],
  },

  scopeTitle: "SPD product scope buyers should confirm by type and voltage class",
  scopeIntro:
    "TPKELE supplies both AC and DC surge protective devices. For solar and BESS projects the DC class and rated voltage per pole need to be confirmed before sampling, since a 1000V and a 1500V device are not interchangeable.",
  series: [
    { label: "AC SPD Type 1", meta: "Lightning current · service entrance", href: "/products/ac-spd" },
    { label: "AC SPD Type 2", meta: "Switching transients · distribution board", href: "/products/ac-spd" },
    { label: "DC SPD Type 2", meta: "PV string · 600V / 1000V / 1500V", href: "/products/dc-spd" },
    { label: "Combined Type 1+2", meta: "Single device for main panel", href: "/products/ac-spd" },
  ],
  scopeNote:
    "Note: DC SPDs for photovoltaic systems must be rated for the maximum open-circuit voltage of the array at minimum operating temperature, not the nominal system voltage. Confirm Ucpv per IEC 61643-31 before placing a sample order.",

  buyerTitle: "What export buyers usually need from an SPD factory",
  buyerIntro:
    "Surge protection is a safety-critical component. The paperwork requirements are stricter than for passive components, and buyers who skip documentation alignment at the sample stage usually encounter delays at customs or during site commissioning.",
  buyerBlocks: [
    {
      title: "Product consistency",
      items: [
        "Same varistor lot and Up value across production batches", "Thermal disconnect design unchanged between runs",
        "Housing colour and indicator window position held stable", "DIN rail clip torque and fit consistent", "Batch code printed and traceable",
      ],
    },
    {
      title: "Certification clarity",
      items: [
        "IEC 61643-11 for AC or IEC 61643-31 for DC, whichever applies", "Certificate names exact type, Uc, Imax and connection class",
        "Full test report available, not a summary page", "CE declaration aligned to the shipped configuration", "RoHS and REACH declarations for the built product",
      ],
    },
    {
      title: "OEM and branding",
      items: [
        "Logo on the housing face and indicator label", "Custom packaging language per destination", "Artwork proof before production",
        "Carton marking aligned to buyer's warehouse system", "Consistent label revision across repeat orders",
      ],
    },
    {
      title: "Commercial predictability",
      items: [
        "Lead time quoted for sample and mass order separately", "Pricing by type and voltage class, not one blended rate",
        "Repeat order price held for an agreed window", "Shipping dimensions confirmed before first order", "Written policy on batch review",
      ],
    },
  ],

  oemTitle: "OEM surge protective device workflow for branded supply",
  oemIntro: "Each stage needs a sign-off before the next starts. SPD OEM work that skips the technical confirmation step tends to surface problems at the first inspection.",
  oemCards: [
    { title: "01 · Confirm type and voltage class", text: "Type 1, Type 2 or combined, AC or DC, Uc and Imax fixed in writing before sampling." },
    { title: "02 · Approve the sample and test data", text: "Sample produced on production tooling; Up and Imax values attached to the sample record." },
    { title: "03 · Lock the branding", text: "Logo, label language, indicator text and carton marking proofed as files." },
    { title: "04 · Set the inspection rule", text: "Sampling plan and acceptance criteria agreed before the production run is released." },
    { title: "05 · Release and document", text: "Batch codes assigned; certificate and test report issued against the shipped build." },
    { title: "06 · Maintain across repeat orders", text: "Same varistor specification and artwork revision so later orders match the first." },
  ],

  factoryTitle: "Factory capability, quality control, and documentation for SPD supply",
  factoryIntro: "SPD quality depends on component selection and the calibration of the disconnect trigger. Both of these need to be controlled in-house rather than checked at the end of the line.",
  factoryBlocks: [
    {
      title: "Factory and production capability",
      items: [
        "Varistor selection and qualification in-house", "Assembly and testing under one quality system",
        "AC and DC series on shared documentation platform", "Capacity planned for repeat-order volume",
        "Component lot traceability from intake to finished goods", "OEM packaging staging integrated into the production schedule",
      ],
    },
    {
      title: "Quality control and testing workflow",
      items: [
        "Incoming inspection on varistors and housings", "Up measurement per production lot",
        "Thermal disconnect verification", "Dielectric strength testing",
        "Indicator window check on every unit", "Pre-shipment sampling against the approved acceptance rule",
      ],
    },
  ],

  docsTitle: "Documentation, sample handling, and repeat-order control for SPD buyers",
  docsIntro: "For safety-rated components, documentation completeness at the first order sets the baseline for every repeat order. Get it on file before production, not after.",
  docsTable: {
    title: "Documentation checklist",
    headers: ["What to request", "Why it matters to the buyer"],
    rows: [
      { left: "IEC 61643-11 or -31 test report for the shipped model", right: "Required by most end-client specifications and customs authorities" },
      { left: "Certificate naming exact type, Uc and Imax", right: "Prevents a mismatch between the document and the goods on the invoice" },
      { left: "Sample record with Up measurement", right: "Reference point if a later batch shows different clamping behaviour" },
      { left: "Artwork revision number on file", right: "Stops label drift between orders" },
      { left: "Batch code convention explained", right: "Makes field complaints traceable to a specific production run" },
      { left: "Inspection and acceptance rule in writing", right: "Turns pre-shipment checking into a defined pass or fail" },
    ],
  },

  standardsTitle: "How a reliable SPD manufacturer should talk about standards",
  standardsIntro: "IEC standard numbers on a datasheet are claims. What matters is which lab issued the report, which model it covers, and whether the shipped build is the tested build.",
  standardsTable: {
    title: "Standards and approvals",
    headers: ["Standard or document", "What it should cover"],
    rows: [
      { left: "IEC 61643-11", right: "Low voltage SPDs connected to AC power systems — covers Type 1, Type 2 and Type 3" },
      { left: "IEC 61643-31", right: "Requirements for SPDs in photovoltaic installations — the DC reference standard" },
      { left: "CE marking", right: "Declaration supported by test evidence for the exact type and voltage class supplied" },
      { left: "RoHS / REACH", right: "Material compliance for the shipped build" },
      { left: "EN 50539-11", right: "European implementation of DC SPD requirements for PV — relevant for EU project tenders" },
      { left: "Test lab traceability", right: "Report names the model, rated voltage and Imax on your order" },
    ],
  },

  commercialTitle: "Commercial points to align before SPD sample or quotation",
  commercialIntro: "SPD orders that start with a clear technical scope produce fewer post-production disputes than those that start with a price.",
  commercialTable: {
    title: "Commercial alignment",
    headers: ["Point to align", "What to put in writing"],
    rows: [
      { left: "Type and voltage class", right: "Type 1 / 2 / combined, AC or DC, Uc and Imax per SKU" },
      { left: "Connection configuration", right: "3+1, 1+1 or other topology for the application" },
      { left: "Sample terms", right: "Lead time, cost treatment and binding scope for mass production" },
      { left: "Lead time", right: "Separate figures for sample, first mass order and repeat order" },
      { left: "Packaging", right: "Individual box or bulk, language, carton quantity and marking" },
      { left: "Inspection", right: "Sampling plan, Up check coverage and acceptance limit" },
      { left: "After-sales handling", right: "How a batch review is raised and what replacement path applies" },
    ],
  },

  faqTitle: "SPD manufacturing questions buyers ask most",
  faq: [
    { q: "What is the difference between Type 1 and Type 2 SPD?", a: "Type 1 devices handle direct lightning current (Iimp rated) and are installed at the service entrance where the lightning protection system connects to the building. Type 2 handles switching transients and indirect surges inside the distribution system. Both are available from TPKELE with the corresponding IEC 61643-11 test documentation." },
    { q: "Can I use your AC SPD in a DC solar application?", a: "No. AC and DC SPDs have different internal designs. A DC surge protective device must clear DC arc energy, which an AC varistor arrangement is not designed to do. TPKELE supplies separate DC SPD series rated for PV installations at 600V, 1000V and 1500V per IEC 61643-31." },
    { q: "Does the SPD include a thermal disconnect?", a: "Yes. The thermal disconnect isolates the varistor when it degrades, preventing a sustained fault. The indicator window shows status after disconnection. Confirm the disconnect type (built-in or external) for your specific model when ordering." },
    { q: "What documentation comes with the SPD shipment?", a: "IEC 61643-11 or -31 test report for the shipped model and rating, CE declaration, RoHS compliance, and the approved sample record. Ask for the full test report rather than a datasheet summary." },
    { q: "Can I order OEM branding on the SPD housing?", a: "Yes. Logo printing on the housing face, custom label text and destination-language packaging are all handled as normal OEM work. Artwork is proofed and approved before production starts." },
    { q: "What is the typical lead time?", a: "Sample and mass production lead times are quoted separately. Repeat orders are faster because the technical scope, artwork revision and inspection rule are already on file." },
  ],

  seoTitle: "SPD Manufacturer in China — OEM Surge Protective Device Supplier",
  seoDescription: "TPKELE is an SPD manufacturer in China supplying AC and DC surge protective devices for OEM and export buyers. Type 1/2, up to 1500V DC, IEC 61643 certified.",
  seoKeywords: ["SPD manufacturer", "surge protective device manufacturer", "OEM SPD supplier", "SPD factory China", "AC SPD manufacturer", "DC SPD manufacturer", "solar SPD supplier", "IEC 61643 SPD"],
};
