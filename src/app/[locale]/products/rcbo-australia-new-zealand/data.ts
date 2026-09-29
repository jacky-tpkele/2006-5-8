export const features = [
  { title: "IEC/EN 61009-1 & AS/NZS 61009.1", text: "Dual standard compliance for global and AU/NZ markets — CE marking plus AS/NZS certification for local switchboard approval", image: "/assets/landing/circuit-breakers/feat-protection.png" },
  { title: "1P+N in 18mm Module", text: "Single-module RCBO combines earth leakage and overcurrent protection — saves switchboard space vs separate RCD + MCB", image: "/assets/landing/circuit-breakers/feat-options.png" },
  { title: "Type A for Modern Loads", text: "Detects both AC and pulsating DC residual current — safe for inverters, induction cooktops, LED drivers, and EV chargers", image: "/assets/landing/circuit-breakers/feat-installation.png" },
  { title: "One RCBO Per Circuit", text: "Independent leakage protection for each final circuit — fault on one circuit does not trip others, standard AU/NZ layout", image: "/assets/landing/circuit-breakers/feat-applications.png" },
];

export const specs = [
  { label: "Product Model", value: "XYDL6-40" },
  { label: "Product Type", value: "RCBO — Residual Current Circuit Breaker with Overcurrent Protection" },
  { label: "Poles", value: "1P+N (double break)" },
  { label: "Frame Rated Current", value: "40A" },
  { label: "Rated Current (In)", value: "1A, 2A, 3A, 4A, 6A, 10A, 16A, 20A, 25A, 32A, 40A" },
  { label: "Rated Operational Voltage (Ue)", value: "230V AC" },
  { label: "Rated Residual Operating Current (IΔn)", value: "10mA, 30mA, 50mA, 100mA" },
  { label: "Residual Current Type", value: "Type A / Type AC" },
  { label: "Tripping Curve", value: "B, C (thermal-magnetic)" },
  { label: "Rated Short-Circuit Breaking Capacity (Icn)", value: "6kA" },
  { label: "Service Breaking Capacity (Ics)", value: "6kA (100% of Icn)" },
  { label: "Rated Insulation Voltage (Ui)", value: "500V" },
  { label: "Rated Impulse Withstand Voltage (Uimp)", value: "4kV" },
  { label: "Terminal Capacity", value: "1–10 mm²" },
  { label: "Operating Temperature", value: "-30°C to +70°C" },
  { label: "Dimensions (W × H × D)", value: "18 × 82 × 71.6 mm" },
  { label: "Weight", value: "118 g" },
  { label: "Mounting", value: "35mm DIN Rail" },
  { label: "Degree of Protection", value: "IP40 (enclosure), IP20 (terminals)" },
  { label: "Standards", value: "IEC/EN 61009-1, AS/NZS 61009.1, CE marking, RoHS compliant" },
];

export const options = [
  {
    name: "Type A RCBO",
    description: "Detects AC and pulsating DC residual current — required for inverters, induction cooktops, LED drivers, EV chargers, and modern appliances.",
    image: "/assets/products/rcbo-1pn-18mm/rcbo-1pn-18mm-front.webp",
    specs: ["1–40A", "10/30mA", "Type A", "IEC/EN & AS/NZS"],
  },
  {
    name: "Type AC RCBO",
    description: "Detects sinusoidal AC residual current only — suitable for resistive loads without electronic power conversion.",
    image: "/assets/products/rcbo-1pn-18mm/rcbo-1pn-18mm-side.webp",
    specs: ["1–40A", "10/30mA", "Type AC", "IEC/EN & AS/NZS"],
  },
];

export const sensitivityOptions = [
  {
    sensitivity: "10 mA",
    application: "Special locations requiring enhanced protection — bathrooms, medical areas, or circuits specified for 10mA sensitivity.",
    standard: "AS/NZS 3000 special locations",
  },
  {
    sensitivity: "30 mA",
    application: "Personal protection on final circuits — the standard for socket outlets, lighting, and general circuits in residential and commercial switchboards.",
    standard: "AS/NZS 3000 mandatory for socket circuits",
  },
  {
    sensitivity: "50 mA / 100 mA",
    application: "Equipment or fire protection where personal protection is provided upstream — sub-boards, industrial equipment, or specific installation requirements.",
    standard: "AS/NZS 3000 fire protection",
  },
];
