// TODO: replace placeholder images with DC-specific photos when available.
// Currently reusing AC card/feature images — product line is visually similar.

export const features = [
  { title: "DC Arc Extinction", text: "Magnetic blowout chamber safely interrupts sustained DC arcs that conventional AC breakers cannot quench", image: "/assets/landing/circuit-breakers/feat-protection.png" },
  { title: "Polarity-Independent", text: "Bidirectional protection for PV strings and battery banks where current can flow either direction", image: "/assets/landing/circuit-breakers/feat-options.png" },
  { title: "DIN Rail Installation", text: "35mm DIN rail mounting, tool-free snap-on design — identical footprint to AC MCBs", image: "/assets/landing/circuit-breakers/feat-installation.png" },
  { title: "Solar / Storage / EV", text: "Engineered for PV strings, battery storage cabinets, EV charging stations, and DC traction systems", image: "/assets/landing/circuit-breakers/feat-applications.png" },
];

export const specs = [
  { label: "Product Name", value: "DC Miniature Circuit Breaker" },
  { label: "Poles", value: "1P, 2P, 3P, 4P" },
  { label: "Rated Current", value: "6A, 10A, 16A, 20A, 25A, 32A, 40A, 50A, 63A, 80A, 100A, 125A" },
  { label: "Rated Voltage", value: "DC 250V / 500V / 750V / 1000V / 1500V" },
  { label: "Trip Curve", value: "B Curve, C Curve, D Curve, K Curve" },
  { label: "Breaking Capacity", value: "6kA / 10kA DC (model dependent)" },
  { label: "Arc Interruption", value: "Magnetic blowout, polarity-independent" },
  { label: "Mounting", value: "35mm DIN Rail" },
  { label: "Application", value: "Solar PV, battery storage, EV charging, DC power systems" },
  { label: "Standards", value: "IEC 60947-2 / EN 60947-2" },
  { label: "Customization", value: "Logo, label, and packaging options available" },
];

export const options = [
  {
    name: "1P DC MCB",
    description: "Single-pole DC protection for PV string positive or negative line, up to 1000VDC per pole.",
    image: "/assets/landing/circuit-breakers/card-1p.png",
  },
  {
    name: "2P DC MCB",
    description: "Two-pole series-connected protection for higher DC voltages — typical for 1500VDC PV strings.",
    image: "/assets/landing/circuit-breakers/card-2p.png",
  },
  {
    name: "3P DC MCB",
    description: "Three-pole DC distribution protection for battery storage cabinets and DC microgrids.",
    image: "/assets/landing/circuit-breakers/card-3p.png",
  },
  {
    name: "4P DC MCB",
    description: "Four-pole DC isolation for redundant bipolar systems and high-voltage DC feeders.",
    image: "/assets/landing/circuit-breakers/card-4p.png",
  },
];

export const curves = [
  {
    curve: "B Curve",
    trip: "3–5× rated current",
    application: "Resistive DC loads, long DC cable runs, lighting in DC systems",
    image: "/assets/landing/circuit-breakers/curve-b.png",
  },
  {
    curve: "C Curve",
    trip: "5–10× rated current",
    application: "General DC distribution, PV combiner outputs, DC sockets",
    image: "/assets/landing/circuit-breakers/curve-c.png",
  },
  {
    curve: "D Curve",
    trip: "10–20× rated current",
    application: "DC motors, high-inductance DC loads, battery cabinet feeders",
    image: "/assets/landing/circuit-breakers/curve-d.png",
  },
];
