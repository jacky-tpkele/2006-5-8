export const applications = [
  {
    title: "Main Distribution Boards",
    description:
      "Install Type 1+2 AC SPDs at the main LV panel to intercept lightning surges entering through the utility feed. Protects the entire building's electrical installation, including sensitive electronics, HVAC controls, and fire alarm systems.",
    link: { href: "/products/ac-spd", label: "View AC SPD Range" },
  },
  {
    title: "Solar Inverter AC Output",
    description:
      "Type 2 AC SPDs on the inverter AC output protect against switching surges generated during grid reconnection. Essential for grid-tied solar systems where inverter electronics are sensitive to transient overvoltage.",
    link: { href: "/products/dc-spd", label: "Also View DC SPD" },
  },
  {
    title: "Industrial Control Panels",
    description:
      "PLC systems, variable speed drives, and automation equipment are highly sensitive to voltage spikes. AC SPDs at the panel feeder and near sensitive loads provide coordinated surge protection across the full installation.",
    link: { href: "/contact", label: "Contact for Industrial Solutions" },
  },
];

export const selectionGuide = [
  {
    application: "Residential (single-phase)",
    type: "Type 2",
    voltage: "230V AC",
    notes: "Install at consumer unit",
  },
  {
    application: "Commercial building (3-phase)",
    type: "Type 1+2",
    voltage: "400V AC",
    notes: "Install at main LV panel",
  },
  {
    application: "Direct lightning risk area",
    type: "Type 1",
    voltage: "230/400V AC",
    notes: "Required with external LPS",
  },
  {
    application: "Solar inverter AC output",
    type: "Type 2",
    voltage: "230/400V AC",
    notes: "Protects inverter electronics",
  },
  {
    application: "Industrial control panel",
    type: "Type 2",
    voltage: "400V AC",
    notes: "Near sensitive loads",
  },
];

export const faq = [
  {
    question: "What is an AC SPD and what does it protect against?",
    answer:
      "An AC SPD (Surge Protection Device) protects electrical equipment from transient overvoltage — brief, high-amplitude voltage spikes caused by lightning strikes or grid switching events. These spikes can exceed 6,000 V and destroy electronics in microseconds. AC SPDs clamp the transient to a safe level by diverting surge current to earth, protecting connected equipment such as appliances, control systems, and solar inverters.",
  },
  {
    question: "What is the difference between Type 1, Type 2, and Type 1+2 AC SPDs?",
    answer:
      "Type 1 SPDs (Class I) handle direct lightning strike energy (10/350µs waveform) and are required at the service entrance when an external lightning protection system is present. Type 2 SPDs (Class II) protect against indirect surges and switching transients (8/20µs waveform) and are installed in distribution sub-panels. Type 1+2 combined devices provide both levels of protection in a single unit — the most common choice for new installations and solar projects.",
  },
  {
    question: "Where should I install an AC SPD in a building?",
    answer:
      "Install Type 1 or Type 1+2 at the main distribution board as close as possible to the meter or service entrance. Install Type 2 at each sub-panel feeding sensitive equipment. For best protection, use a cascaded approach: Type 1+2 at the main panel, Type 2 at sub-panels, and plug-in surge protectors at individual sensitive devices. Keep SPD connecting cables short — under 50 cm — to minimise lead inductance.",
  },
  {
    question: "Does your AC SPD comply with IEC 61643-11?",
    answer:
      "Yes. Our AC SPD range complies with IEC 61643-11 (Low-voltage surge protective devices — Part 11: Surge protective devices connected to low-voltage power systems). This standard defines test methods for voltage protection level (Up), maximum discharge current (Imax), and nominal discharge current (In). CE certificates and test reports are available on request.",
  },
  {
    question: "Do I need both AC SPD and DC SPD for a solar PV system?",
    answer:
      "Yes. Solar systems require surge protection on both the DC and AC sides. Install DC SPDs (rated for the system Voc) at PV string inputs, combiner box outputs, and inverter DC inputs. Install AC SPDs (Type 2) at the inverter AC output and the building distribution board. The two types are not interchangeable — DC SPDs are designed for sustained DC voltage while AC SPDs are optimised for 50/60 Hz alternating current.",
  },
  {
    question: "What is the typical service life of an AC SPD varistor?",
    answer:
      "MOV (metal oxide varistor) based SPDs degrade with each surge event. A quality AC SPD rated to IEC 61643-11 should handle the rated number of discharge events (typically 15–20 Class II surges at nominal In) before requiring replacement. All TPKELE AC SPDs include a visual status indicator window — green means serviceable, red means the varistor has failed and the device must be replaced. Regular inspection after known lightning events is recommended.",
  },
];
