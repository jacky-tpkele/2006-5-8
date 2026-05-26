export const features = [
  { title: "Protection", text: "Overload and short-circuit protection for low-voltage AC systems", image: "/assets/landing/circuit-breakers/feat-protection.png" },
  { title: "Installation", text: "35mm DIN rail mounting, tool-free snap-on design", image: "/assets/landing/circuit-breakers/feat-installation.png" },
  { title: "Options", text: "1P, 2P, 3P, 4P configurations available", image: "/assets/landing/circuit-breakers/feat-options.png" },
  { title: "Applications", text: "Distribution boards, control panels, machinery protection", image: "/assets/landing/circuit-breakers/feat-applications.png" },
];

export const specs = [
  { label: "Product Name", value: "AC Miniature Circuit Breaker" },
  { label: "Poles", value: "1P, 2P, 3P, 4P" },
  { label: "Rated Current", value: "6A, 10A, 16A, 20A, 25A, 32A, 40A, 50A, 63A" },
  { label: "Rated Voltage", value: "AC 230V / 400V" },
  { label: "Trip Curve", value: "B Curve, C Curve, D Curve" },
  { label: "Breaking Capacity", value: "4.5kA / 6kA / 10kA (model dependent)" },
  { label: "Mounting", value: "35mm DIN Rail" },
  { label: "Application", value: "Low-voltage power distribution" },
  { label: "Customization", value: "Logo, label, and packaging options available" },
];

export const options = [
  {
    name: "1P AC MCB",
    description: "Single-phase circuit protection for branch circuits in residential and light commercial panels.",
    image: "/assets/products/gallery/ac-mcb-1p-1.webp",
  },
  {
    name: "2P AC MCB",
    description: "Line and neutral protection for single-phase systems requiring full isolation.",
    image: "/assets/products/gallery/ac-mcb-2p-1.webp",
  },
  {
    name: "3P AC MCB",
    description: "Three-phase power distribution protection for commercial and industrial feeders.",
    image: "/assets/products/gallery/ac-mcb-3p-1.webp",
  },
  {
    name: "4P AC MCB",
    description: "Three-phase with neutral protection where full four-pole isolation is required.",
    image: "/assets/products/gallery/ac-mcb-4p-1.webp",
  },
];

export const curves = [
  {
    curve: "B Curve",
    trip: "3–5× rated current",
    application: "Lighting circuits, resistive loads, cable protection",
    image: "/assets/landing/circuit-breakers/curve-b.png",
  },
  {
    curve: "C Curve",
    trip: "5–10× rated current",
    application: "General power distribution, sockets, small motors",
    image: "/assets/landing/circuit-breakers/curve-c.png",
  },
  {
    curve: "D Curve",
    trip: "10–20× rated current",
    application: "High inrush current equipment, transformers, welding machines",
    image: "/assets/landing/circuit-breakers/curve-d.png",
  },
];
