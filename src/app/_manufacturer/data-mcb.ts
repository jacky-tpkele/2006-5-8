import type { ManufacturerData } from "./types";

export const mcbManufacturer: ManufacturerData = {
  slug: "mcb-manufacturer",
  category: "MCB",
  productLabel: "MCB",
  heroTitle: "MCB Manufacturer in China for OEM Miniature Circuit Breaker Supply",
  heroSubtitle:
    "TPKELE builds AC and DC miniature circuit breakers for distributors, EPC contractors, panel builders and project buyers who need repeatable tolerances, real certification paper and consistent packaging across repeat orders.",
  heroTags: ["1P / 2P / 3P / 4P", "6A – 63A", "B / C / D Curve", "IEC 60898-1 / IEC 60947-2"],
  heroImage: "/assets/landing/circuit-breakers/factory-1.webp",

  checklistTitle: "What serious buyers usually check first",
  checklist: [
    {
      title: "Whether the breaking capacity is tested or copied",
      text: "6kA and 10kA claims should map to a real test report, not a datasheet inherited from another factory.",
    },
    {
      title: "Whether trip curves stay inside band across batches",
      text: "B, C and D curves need to hold their thermal and magnetic window after the third and tenth production run, not only on the sample.",
    },
    {
      title: "Whether the DC series is actually a DC design",
      text: "A relabelled AC breaker will not clear a DC arc. Real DC MCBs need arc chambers and polarity marking built for the job.",
    },
    {
      title: "Whether certificates match the model being shipped",
      text: "CE and IEC documents must name the same series, pole count and current range that appear on your purchase order.",
    },
    {
      title: "Whether OEM branding survives production",
      text: "Logo print, packaging artwork and carton marking should stay identical from the sample to the container.",
    },
  ],

  whyTitle: "Why a dedicated MCB manufacturer is different from a generic trader",
  whyIntro:
    "A trader can quote anything. A manufacturer has to live with the tolerance, the return rate and the certificate. When your customer opens a panel two years after installation, the difference shows up in whether the breaker still trips inside its published band.",
  whyCards: [
    {
      title: "Repeatable product supply",
      text: "Tooling, contact material and calibration stay under one roof, so the tenth order behaves like the first. Traders re-source between suppliers when price moves, and the tolerance moves with it.",
    },
    {
      title: "Better technical communication",
      text: "Questions about let-through energy, coordination with upstream devices or DC polarity go to engineers who built the product, not to a sales desk forwarding emails.",
    },
    {
      title: "Stronger OEM fit",
      text: "Logo, curve mix, packaging language and carton quantity can be set per order because the line is ours to schedule. OEM work is a normal workflow rather than a favour.",
    },
  ],

  compare: {
    title: "Manufacturer vs trader — what changes for the buyer",
    headers: ["What a dedicated manufacturer gives you", "What usually happens with a generic trader"],
    rows: [
      {
        left: "Stable factory code, one tooling set, traceable batch numbers",
        right: "Source switches between factories when the market price moves",
      },
      {
        left: "Test reports issued for the exact series and pole count you buy",
        right: "Generic certificate covering a similar but different model",
      },
      {
        left: "Engineering answers on trip coordination and DC arc behaviour",
        right: "Datasheet forwarded without interpretation",
      },
      {
        left: "Sample approval that binds the production run",
        right: "Golden sample from one factory, mass order from another",
      },
      {
        left: "Packaging and marking held constant across repeat orders",
        right: "Carton artwork and logo drift between shipments",
      },
      {
        left: "Direct escalation path when a batch needs review",
        right: "Claim handling depends on whether the trader still buys from that plant",
      },
    ],
  },

  scopeTitle: "MCB product scope buyers should confirm by series",
  scopeIntro:
    "TPKELE supplies AC and DC miniature circuit breakers on the same DIN rail footprint, which lets a panel builder standardise one enclosure layout across grid-side and PV-side protection. Confirm the series, pole count and current band on your order rather than the family name alone.",
  series: [
    { label: "AC MCB 1P", meta: "Branch circuit protection · 6A–63A", href: "/products/ac-mcb-1p" },
    { label: "AC MCB 2P", meta: "Line + neutral · single phase", href: "/products/ac-mcb-2p" },
    { label: "AC MCB 3P", meta: "Three phase distribution", href: "/products/ac-mcb-3p" },
    { label: "AC MCB 4P", meta: "Three phase + neutral", href: "/products/ac-mcb-4p" },
    { label: "DC MCB 1P", meta: "PV string protection", href: "/products/dc-mcb-1p" },
    { label: "DC MCB 2P", meta: "PV positive and negative", href: "/products/dc-mcb-2p" },
  ],
  scopeNote:
    "Important: an AC breaker and a DC breaker can share an enclosure and still behave very differently under fault. If the application is photovoltaic or battery storage, specify the DC series explicitly and confirm the rated DC voltage per pole before sampling.",

  buyerTitle: "What export buyers usually need from an MCB factory",
  buyerIntro:
    "Most order problems are not about the breaker itself. They come from paperwork, packaging and tolerance drift that nobody agreed on in writing before production started.",
  buyerBlocks: [
    {
      title: "Product consistency",
      items: [
        "Same contact material and coil calibration across batches",
        "Trip curve verified per production lot, not per year",
        "Housing colour and flame rating held stable",
        "Terminal torque and busbar fit unchanged between runs",
        "Batch code printed so a field issue can be traced back",
      ],
    },
    {
      title: "Certification clarity",
      items: [
        "Certificate lists the exact series, poles and current range",
        "Test report available in full, not as a summary page",
        "Standard version stated — IEC 60898-1 or IEC 60947-2",
        "RoHS and REACH declarations issued for the shipped build",
        "Factory audit report available when the buyer requires one",
      ],
    },
    {
      title: "OEM and branding",
      items: [
        "Laser or pad-printed logo on the breaker face",
        "Custom label artwork and language per destination",
        "Retail or bulk packaging per order",
        "Carton marking that matches the buyer's warehouse system",
        "Artwork proof approved before the run starts",
      ],
    },
    {
      title: "Commercial predictability",
      items: [
        "Lead time quoted separately for sample and mass order",
        "Price tied to a stated current mix, not a single SKU",
        "Repeat order pricing held for an agreed window",
        "Shipping mode and carton dimensions confirmed early",
        "Written policy on batch review and replacement",
      ],
    },
  ],

  oemTitle: "OEM miniature circuit breaker workflow for branded supply",
  oemIntro:
    "OEM supply works when each stage is signed off in order. Skipping a step usually means the disagreement surfaces after the container is loaded.",
  oemCards: [
    {
      title: "01 · Confirm the technical scope",
      text: "Pole count, current band, curve mix, breaking capacity and standard version fixed in writing before any sample is cut.",
    },
    {
      title: "02 · Approve the sample build",
      text: "Sample produced on the same tooling as mass production, with the trip test data attached rather than described.",
    },
    {
      title: "03 · Lock the branding",
      text: "Logo placement, label artwork, language and carton marking proofed and approved as files, not as screenshots.",
    },
    {
      title: "04 · Set the inspection rule",
      text: "Sampling plan, trip test coverage and acceptance limits agreed so the pre-shipment check has a defined pass condition.",
    },
    {
      title: "05 · Release the production run",
      text: "Batch codes assigned, packaging staged and lead time confirmed against the approved sample and inspection rule.",
    },
    {
      title: "06 · Keep the repeat order aligned",
      text: "Same tooling, same specification file, same artwork revision — so the second and fifth order match the first.",
    },
  ],

  factoryTitle: "Factory capability, quality control, and documentation discipline",
  factoryIntro:
    "Capability is only useful if it is applied every run. The value of an in-house line is that calibration and testing sit in the same building as assembly, which shortens the loop when something drifts.",
  factoryBlocks: [
    {
      title: "Factory and production capability",
      items: [
        "Production lines held on one tooling set per series",
        "In-house calibration for thermal and magnetic trip elements",
        "Assembly and testing under the same quality system",
        "Support for AC and DC series on shared DIN footprint",
        "Capacity planned for repeat-order volume rather than one-off runs",
        "Product family continuity so replacements stay available",
      ],
    },
    {
      title: "Quality control and testing workflow",
      items: [
        "Incoming material inspection on contacts and housings",
        "Assembly process control at defined stations",
        "Trip curve verification per production lot",
        "Dielectric and insulation resistance testing",
        "Endurance sampling on mechanical and electrical operation",
        "Pre-shipment sampling against the approved acceptance rule",
      ],
    },
  ],

  docsTitle: "Documentation, sample handling, and repeat-order control buyers should confirm",
  docsIntro:
    "Paperwork is where most disputes are actually settled. Confirm what you will receive, in what format, and against which model number.",
  docsTable: {
    title: "Documentation checklist",
    headers: ["What to request", "Why it matters to the buyer"],
    rows: [
      {
        left: "Full test report for the shipped series",
        right: "Lets you defend the specification to your own customer or inspector",
      },
      {
        left: "Certificate naming exact poles and current range",
        right: "Prevents a mismatch between the certificate and the goods on the invoice",
      },
      {
        left: "Approved sample record with trip data",
        right: "Gives a reference point if a later batch behaves differently",
      },
      {
        left: "Artwork revision number on file",
        right: "Stops packaging drift between the first and the fifth order",
      },
      {
        left: "Batch code convention explained",
        right: "Makes a field complaint traceable to a specific production run",
      },
      {
        left: "Written inspection and acceptance rule",
        right: "Turns pre-shipment checking into a pass or fail decision, not an opinion",
      },
    ],
  },

  standardsTitle: "How a reliable MCB manufacturer should talk about standards and approvals",
  standardsIntro:
    "A standard number on a datasheet is a claim. What matters is which body issued the document, which model it covers, and whether the shipped build is the tested build.",
  standardsTable: {
    title: "Standards and approvals",
    headers: ["Standard or document", "What it should cover"],
    rows: [
      {
        left: "IEC 60898-1",
        right: "Circuit breakers for overcurrent protection in household and similar installations — the usual reference for AC MCB",
      },
      {
        left: "IEC 60947-2",
        right: "Low voltage switchgear circuit breakers, commonly referenced for industrial and DC applications",
      },
      {
        left: "CE marking",
        right: "Declaration supported by test evidence for the series and rating actually supplied",
      },
      {
        left: "RoHS / REACH",
        right: "Material compliance declarations issued against the shipped build",
      },
      {
        left: "Factory quality system",
        right: "Documented process control so the tested build and the produced build are the same product",
      },
      {
        left: "Test report traceability",
        right: "Report references the model, pole count and rating on your order rather than a similar variant",
      },
    ],
  },

  commercialTitle: "Commercial points buyers should align before sample or quotation",
  commercialIntro:
    "Getting these on paper early removes most of the friction later. None of them are unusual requests for a factory that handles export orders regularly.",
  commercialTable: {
    title: "Commercial alignment",
    headers: ["Point to align", "What to put in writing"],
    rows: [
      {
        left: "Product scope",
        right: "Series, pole count, current mix and curve mix per SKU",
      },
      {
        left: "Sample terms",
        right: "Sample lead time, cost treatment and whether it binds mass production",
      },
      {
        left: "Quotation basis",
        right: "Whether pricing assumes a current mix, a single rating or a full container load",
      },
      {
        left: "Lead time",
        right: "Separate figures for sample, first mass order and repeat order",
      },
      {
        left: "Packaging",
        right: "Retail or bulk, language per destination, carton quantity and marking",
      },
      {
        left: "Inspection",
        right: "Sampling plan, test coverage and acceptance limit before shipment",
      },
      {
        left: "After-sales handling",
        right: "How a batch review is raised and what replacement path applies",
      },
    ],
  },

  faqTitle: "MCB manufacturing questions buyers ask most",
  faq: [
    {
      q: "Can I order AC and DC MCB on the same purchase order?",
      a: "Yes. Both series run on the same DIN rail footprint, which is why panel builders often standardise one enclosure and split protection between grid-side AC and PV-side DC. Specify the DC series explicitly, since the internal arc design differs from the AC build.",
    },
    {
      q: "What breaking capacity is available?",
      a: "The AC series covers the common 6kA and 10kA levels used in residential, commercial and industrial distribution. Confirm the figure against the test report for the exact pole count and current range on your order rather than the family datasheet.",
    },
    {
      q: "Do you support OEM logo and packaging?",
      a: "Yes. Logo printing on the breaker face, custom label artwork, destination language and carton marking are all part of normal OEM work. Artwork is proofed and approved as files before the production run is released.",
    },
    {
      q: "How is trip curve consistency controlled between batches?",
      a: "Trip curve verification runs per production lot, not per year. Thermal and magnetic elements are calibrated in-house, and batch codes are printed so any field question can be traced back to a specific run.",
    },
    {
      q: "What documentation comes with the shipment?",
      a: "Test report for the shipped series, certification naming the exact poles and current range, material compliance declarations, and the approved sample record. Ask for the full report rather than a summary page.",
    },
    {
      q: "What is the typical lead time?",
      a: "Sample and mass production are quoted separately, and repeat orders are usually faster because tooling, artwork revision and inspection rule are already on file. Exact figures depend on the current mix and packaging format, so they are confirmed at quotation.",
    },
  ],

  seoTitle: "MCB Manufacturer China — OEM Circuit Breaker Supplier",
  seoDescription:
    "TPKELE supplies AC & DC miniature circuit breakers for OEM buyers. 1P–4P, 6A–63A, B/C/D curves, IEC 60898-1 certified. Solar & distribution applications.",
  seoKeywords: [
    "MCB manufacturer",
    "miniature circuit breaker manufacturer",
    "OEM MCB supplier",
    "MCB factory China",
    "AC MCB manufacturer",
    "DC MCB manufacturer",
    "circuit breaker OEM",
    "IEC 60898 MCB supplier",
  ],
};
