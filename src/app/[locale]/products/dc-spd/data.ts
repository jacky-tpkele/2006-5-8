export const applications = [
  {
    title: "Rooftop Solar PV",
    description:
      "Protect inverters and monitoring equipment from lightning-induced surges transmitted through long DC cables. DC SPDs prevent costly inverter failures and reduce insurance claims in lightning-prone regions.",
    icon: "🏠",
    link: { href: "/products/combiner-box", label: "View Solar Solutions" },
  },
  {
    title: "Ground-Mounted Solar Farms",
    description:
      "Large arrays are prime lightning targets. Install Type 1 DC SPDs at the array field and Type 2 at each inverter station to create coordinated surge protection — essential for bankable solar projects.",
    icon: "⚡",
    link: { href: "/projects", label: "View Solar Projects" },
  },
  {
    title: "Battery Storage Systems",
    description:
      "Battery Management Systems (BMS) are sensitive to voltage spikes. DC SPDs protect battery cabinets from surges propagating through DC bus bars, extending battery life and preventing thermal runaway events.",
    icon: "🔋",
    link: { href: "/contact", label: "Get Storage Solution" },
  },
];

export const selectionGuide = [
  {
    application: "Residential PV (3–10 kW)",
    type: "Type 2",
    voltage: "1000 VDC",
    notes: "1–2 strings, rooftop mount",
  },
  {
    application: "Commercial PV (50–500 kW)",
    type: "Type 1+2",
    voltage: "1500 VDC",
    notes: "Multiple strings, ground mount",
  },
  {
    application: "Utility-Scale PV (1 MW+)",
    type: "Type 1",
    voltage: "1500 VDC",
    notes: "High Iimp rating required",
  },
  {
    application: "Battery Storage (48–1000 V)",
    type: "Type 2",
    voltage: "1000 VDC",
    notes: "Install at battery cabinet",
  },
  {
    application: "Off-Grid Solar Home",
    type: "Type 2",
    voltage: "1000 VDC",
    notes: "Protects charge controller",
  },
];

export const faq = [
  {
    question: "What is a DC SPD and why do I need it for solar systems?",
    answer:
      "A DC SPD (Surge Protection Device) protects solar PV systems from overvoltage caused by lightning strikes, switching surges, and grid disturbances. Lightning-induced surges can exceed 10,000 V and destroy inverters, charge controllers, and battery management systems within microseconds. DC SPDs clamp these transient voltages to safe levels, preventing equipment damage and costly system downtime.",
  },
  {
    question: "Type 1 vs Type 2 DC SPD — which one do I need?",
    answer:
      "Type 1 SPDs (Class I) handle direct lightning strike energy and are installed at the service entrance or array field. Type 2 SPDs (Class II) protect against indirect surges and are installed at distribution panels or inverter inputs. For rooftop solar, Type 2 is typically sufficient. For ground-mounted arrays in lightning-prone areas, install Type 1 at the array and Type 2 at the inverter. Many commercial projects use combined Type 1+2 devices for comprehensive protection.",
  },
  {
    question: "Should I choose a 1000 VDC or 1500 VDC rated SPD?",
    answer:
      "Match the SPD voltage rating to your system's maximum DC voltage (Voc at the lowest local temperature). Systems up to 1000 VDC — typical for residential arrays of 15–20 panels per string — use 1000 VDC SPDs. Commercial systems with 1200–1500 VDC strings require 1500 VDC SPDs. The SPD's Maximum Continuous Operating Voltage (MCOV) must exceed your system Voc. For safety margin, choose an SPD rated at least 20% above your calculated Voc.",
  },
  {
    question: "How do I install a DC SPD in a solar combiner box?",
    answer:
      "DC SPDs install in parallel across the positive and negative DC bus bars, as close as possible to the equipment being protected. Connect the SPD terminals to the DC+ and DC− rails, and the ground terminal to the system's protective earth (PE). Keep connecting cables short (under 50 cm) and avoid sharp bends to minimize lead inductance. Most combiner boxes include dedicated SPD mounting rails and terminal blocks.",
  },
  {
    question: "Does your DC SPD meet IEC 61643-31?",
    answer:
      "Yes. Our DC SPD range complies with IEC 61643-31 (Low-voltage surge protective devices — Part 31: Requirements and test methods for SPDs for use in PV power systems). This standard defines test procedures for lightning impulse current (Iimp), maximum discharge current (Imax), voltage protection level (Up), and service life under repeated surges. CE certificates and test reports are available on request.",
  },
  {
    question: "Can I use an AC SPD for DC solar applications?",
    answer:
      "No. AC SPDs use varistor technology optimised for 50/60 Hz alternating current and will fail prematurely on DC circuits. DC SPDs are engineered to handle continuous DC voltage and use spark gap or hybrid varistor designs that safely disconnect under DC fault conditions. Installing AC SPDs on DC circuits voids warranties and creates fire risk — always specify DC-rated SPDs for solar, battery, and all other DC systems.",
  },
];
