import type { ComplianceProduct, ProductCategory, ProductSlug, ParameterField } from "@/lib/compliance/types";

/**
 * Product Parameter Definitions
 * Each product has its own set of parameter fields
 */

export const productParameters: Record<ProductSlug, ParameterField[]> = {
  "dc-mcb": [
    {
      key: "voltage",
      label: "Rated DC Voltage",
      type: "select",
      options: ["250V", "500V", "800V", "1000V", "1200V", "1500V"],
      required: false,
    },
    {
      key: "current",
      label: "Rated Current",
      type: "number",
      placeholder: "e.g. 16",
      unit: "A",
      required: false,
    },
    {
      key: "poles",
      label: "Poles",
      type: "select",
      options: ["1P", "2P", "3P", "4P"],
      required: false,
    },
    {
      key: "breaking_capacity",
      label: "Breaking Capacity",
      type: "select",
      options: ["4.5kA", "6kA", "10kA", "15kA", "20kA"],
      required: false,
    },
  ],

  "ac-mcb": [
    {
      key: "voltage",
      label: "Rated AC Voltage",
      type: "select",
      options: ["230V", "400V", "230/400V"],
      required: false,
    },
    {
      key: "current",
      label: "Rated Current",
      type: "select",
      options: ["6A", "10A", "16A", "20A", "25A", "32A", "40A", "50A", "63A"],
      required: false,
    },
    {
      key: "poles",
      label: "Poles",
      type: "select",
      options: ["1P", "2P", "3P", "4P"],
      required: false,
    },
    {
      key: "curve",
      label: "Trip Curve",
      type: "select",
      options: ["B", "C", "D"],
      required: false,
    },
  ],

  "dc-spd": [
    {
      key: "ucpv",
      label: "Ucpv (Max Continuous Voltage)",
      type: "select",
      options: ["600V", "800V", "1000V", "1200V", "1500V"],
      required: false,
    },
    {
      key: "type",
      label: "SPD Type",
      type: "select",
      options: ["Type 1", "Type 2", "Type 1+2"],
      required: false,
    },
    {
      key: "in",
      label: "In (Nominal Discharge Current)",
      type: "select",
      options: ["5kA", "10kA", "15kA", "20kA", "40kA"],
      required: false,
    },
    {
      key: "imax",
      label: "Imax (Max Discharge Current)",
      type: "select",
      options: ["20kA", "40kA", "65kA", "100kA"],
      required: false,
    },
  ],

  "ac-spd": [
    {
      key: "voltage",
      label: "System Voltage",
      type: "select",
      options: ["230V", "400V", "230/400V"],
      required: false,
    },
    {
      key: "type",
      label: "SPD Type",
      type: "select",
      options: ["Type 1", "Type 2", "Type 1+2"],
      required: false,
    },
    {
      key: "in",
      label: "In (Nominal Discharge Current)",
      type: "select",
      options: ["5kA", "10kA", "15kA", "20kA", "40kA"],
      required: false,
    },
    {
      key: "poles",
      label: "Poles",
      type: "select",
      options: ["1P+N", "3P+N", "4P"],
      required: false,
    },
  ],

  "ats": [
    {
      key: "current",
      label: "Rated Current",
      type: "select",
      options: ["16A", "20A", "25A", "32A", "40A", "50A", "63A"],
      required: false,
    },
    {
      key: "poles",
      label: "Poles",
      type: "select",
      options: ["2P", "3P", "4P"],
      required: false,
    },
    {
      key: "class",
      label: "Transfer Class",
      type: "select",
      options: ["PC-class (fast)", "CB-class (motorized)"],
      required: false,
    },
    {
      key: "source",
      label: "Source Configuration",
      type: "select",
      options: ["Dual power", "Generator backup"],
      required: false,
    },
  ],

  "voltage-protector": [
    {
      key: "voltage",
      label: "Rated Voltage",
      type: "select",
      options: ["230V", "400V"],
      required: false,
    },
    {
      key: "current",
      label: "Max Current",
      type: "select",
      options: ["40A", "63A", "80A", "100A"],
      required: false,
    },
    {
      key: "function",
      label: "Protection Function",
      type: "select",
      options: ["Over/Under Voltage", "Over Voltage", "Under Voltage", "Full Protection"],
      required: false,
    },
  ],

  "energy-meter": [
    {
      key: "phase",
      label: "Phase",
      type: "select",
      options: ["Single Phase", "Three Phase"],
      required: false,
    },
    {
      key: "voltage",
      label: "Rated Voltage",
      type: "select",
      options: ["AC 230V", "AC 400V"],
      required: false,
    },
    {
      key: "current_input",
      label: "Current Input / CT",
      type: "select",
      options: ["Direct 5A-100A", "CT 5A", "CT /5A"],
      required: false,
    },
    {
      key: "accuracy_class",
      label: "Accuracy Class",
      type: "select",
      options: ["Class 1", "Class 2", "Class B", "MID"],
      required: false,
    },
    {
      key: "communication",
      label: "Communication",
      type: "select",
      options: ["None", "RS485 Modbus", "Pulse Output", "DLMS"],
      required: false,
    },
  ],

  "combiner-box": [
    {
      key: "voltage",
      label: "System Voltage",
      type: "select",
      options: ["1000V", "1200V", "1500V"],
      required: false,
    },
    {
      key: "strings",
      label: "String Count",
      type: "select",
      options: ["4 strings", "6 strings", "8 strings", "12 strings", "16 strings"],
      required: false,
    },
    {
      key: "isc",
      label: "String Isc",
      type: "number",
      placeholder: "e.g. 12",
      unit: "A",
      required: false,
    },
    {
      key: "fuse",
      label: "Fuse Rating",
      type: "select",
      options: ["10A", "15A", "20A", "25A"],
      required: false,
    },
  ],

  "dc-mccb": [],
  "fuse": [],
  "dc-isolator": [],
  "contactor": [],
  "relay": [],
  "ssr": [],
  "terminal-block": [],
  "busbar": [],
  "battery-disconnect": [],
  "battery-fuse": [],
  "pv-cable": [],
  "cable-lug": [],
  "pv-connector": [],
};

/**
 * Product Definitions
 */

export const complianceProducts: ComplianceProduct[] = [
  // Circuit Protection
  {
    slug: "dc-mcb",
    name: "DC MCB",
    fullName: "DC miniature circuit breaker",
    category: "Circuit Protection",
    parameterFields: productParameters["dc-mcb"],
    relatedProducts: ["dc-spd", "combiner-box", "dc-isolator"],
  },
  {
    slug: "ac-mcb",
    name: "AC MCB",
    fullName: "AC miniature circuit breaker",
    category: "Circuit Protection",
    parameterFields: productParameters["ac-mcb"],
    relatedProducts: ["ac-spd", "voltage-protector", "energy-meter"],
  },
  {
    slug: "dc-mccb",
    name: "DC MCCB",
    fullName: "DC molded case circuit breaker",
    category: "Circuit Protection",
    parameterFields: productParameters["dc-mccb"],
    relatedProducts: ["dc-mcb", "dc-spd"],
  },

  // Surge Protection
  {
    slug: "dc-spd",
    name: "DC SPD",
    fullName: "DC surge protective device",
    category: "Surge Protection",
    parameterFields: productParameters["dc-spd"],
    relatedProducts: ["dc-mcb", "combiner-box"],
  },
  {
    slug: "ac-spd",
    name: "AC SPD",
    fullName: "AC surge protective device",
    category: "Surge Protection",
    parameterFields: productParameters["ac-spd"],
    relatedProducts: ["ac-mcb", "voltage-protector"],
  },

  // Automatic Switching & Control
  {
    slug: "ats",
    name: "ATS",
    fullName: "Automatic transfer switch",
    category: "Automatic Switching & Control",
    parameterFields: productParameters["ats"],
    relatedProducts: ["ac-mcb", "contactor"],
  },
  {
    slug: "voltage-protector",
    name: "Voltage Protector",
    fullName: "Over/Under voltage protector",
    category: "Automatic Switching & Control",
    parameterFields: productParameters["voltage-protector"],
    relatedProducts: ["ac-mcb", "ats"],
  },

  // Metering & Protection
  {
    slug: "energy-meter",
    name: "Energy Meter",
    fullName: "DIN-rail energy meter",
    category: "Metering & Protection",
    parameterFields: productParameters["energy-meter"],
    relatedProducts: ["ac-mcb", "voltage-protector"],
  },

  // Solar / DC
  {
    slug: "combiner-box",
    name: "PV Combiner Box",
    fullName: "Photovoltaic string combiner box",
    category: "Solar / DC",
    parameterFields: productParameters["combiner-box"],
    relatedProducts: ["dc-mcb", "dc-spd", "fuse", "dc-isolator"],
  },
  {
    slug: "fuse",
    name: "gPV Fuse & Fuse Holder",
    fullName: "Photovoltaic fuse and holder",
    category: "Solar / DC",
    parameterFields: productParameters["fuse"],
    relatedProducts: ["combiner-box", "dc-isolator"],
  },
  {
    slug: "dc-isolator",
    name: "DC Isolator Switch",
    fullName: "DC load break switch",
    category: "Solar / DC",
    parameterFields: productParameters["dc-isolator"],
    relatedProducts: ["dc-mcb", "combiner-box"],
  },
  {
    slug: "pv-connector",
    name: "PV Connector",
    fullName: "MC4 photovoltaic connector",
    category: "Solar / DC",
    parameterFields: productParameters["pv-connector"],
    relatedProducts: ["pv-cable", "combiner-box"],
  },

  // Power Distribution
  {
    slug: "contactor",
    name: "Contactor",
    fullName: "Modular contactor",
    category: "Power Distribution",
    parameterFields: productParameters["contactor"],
    relatedProducts: ["relay", "ats"],
  },
  {
    slug: "relay",
    name: "Relay",
    fullName: "Control relay",
    category: "Power Distribution",
    parameterFields: productParameters["relay"],
    relatedProducts: ["contactor", "ssr"],
  },
  {
    slug: "ssr",
    name: "SSR",
    fullName: "Solid state relay",
    category: "Power Distribution",
    parameterFields: productParameters["ssr"],
    relatedProducts: ["relay", "contactor"],
  },

  // Connection & Accessories
  {
    slug: "terminal-block",
    name: "Terminal Block",
    fullName: "DIN-rail terminal block",
    category: "Connection & Accessories",
    parameterFields: productParameters["terminal-block"],
    relatedProducts: ["busbar"],
  },
  {
    slug: "busbar",
    name: "Busbar / Distribution Block",
    fullName: "Power distribution busbar",
    category: "Connection & Accessories",
    parameterFields: productParameters["busbar"],
    relatedProducts: ["terminal-block"],
  },
  {
    slug: "battery-disconnect",
    name: "Battery Disconnect",
    fullName: "Battery disconnect switch",
    category: "Connection & Accessories",
    parameterFields: productParameters["battery-disconnect"],
    relatedProducts: ["battery-fuse", "dc-mcb"],
  },
  {
    slug: "battery-fuse",
    name: "Battery Fuse",
    fullName: "Battery protection fuse",
    category: "Connection & Accessories",
    parameterFields: productParameters["battery-fuse"],
    relatedProducts: ["battery-disconnect", "fuse"],
  },
  {
    slug: "pv-cable",
    name: "PV Cable",
    fullName: "Photovoltaic solar cable",
    category: "Connection & Accessories",
    parameterFields: productParameters["pv-cable"],
    relatedProducts: ["pv-connector", "cable-lug"],
  },
  {
    slug: "cable-lug",
    name: "Cable Lug",
    fullName: "Copper cable terminal lug",
    category: "Connection & Accessories",
    parameterFields: productParameters["cable-lug"],
    relatedProducts: ["pv-cable", "busbar"],
  },
];

// Map for quick lookup
export const productsMap = complianceProducts.reduce(
  (acc, product) => {
    acc[product.slug] = product;
    return acc;
  },
  {} as Record<ProductSlug, ComplianceProduct>
);

// Group by category
export const productsByCategory = complianceProducts.reduce(
  (acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  },
  {} as Record<ProductCategory, ComplianceProduct[]>
);
