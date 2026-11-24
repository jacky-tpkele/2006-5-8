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
    image: "/assets/products/gallery/dc-mcb-1p-1.webp",
  },
  {
    name: "2P DC MCB",
    description: "Two-pole series-connected protection for higher DC voltages — typical for 1500VDC PV strings.",
    image: "/assets/products/gallery/dc-mcb-2p-1.webp",
  },
  {
    name: "3P DC MCB",
    description: "Three-pole DC distribution protection for battery storage cabinets and DC microgrids.",
    image: "/assets/products/gallery/dc-mcb-3p-1.webp",
  },
  {
    name: "4P DC MCB",
    description: "Four-pole DC isolation for redundant bipolar systems and high-voltage DC feeders.",
    image: "/assets/products/gallery/dc-mcb-4p-1.webp",
  },
];

export const curves = [
  {
    curve: "B Curve",
    trip: "3–5× rated current",
    application: "Resistive DC loads, long DC cable runs, lighting in DC systems",
    image: "/assets/landing/circuit-breakers/curve-b.webp",
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

export const applications = [
  {
    title: "Solar PV Systems",
    description:
      "DC MCBs protect photovoltaic strings from overcurrent and short circuits. They isolate faulty strings without shutting down the entire array and provide safe disconnect points for maintenance — from 3 kW rooftop systems to utility-scale solar farms.",
    icon: "☀️",
    link: { href: "/products/combiner-box", label: "View DC Combiner Boxes" },
  },
  {
    title: "Battery Energy Storage",
    description:
      "BESS systems require DC MCBs to isolate battery banks, protect DC bus bars, and provide emergency disconnect capability. Critical for lithium-ion cabinets rated 48 V to 1500 VDC, including residential and commercial C&I storage.",
    icon: "🔋",
    link: { href: "/products/energy-meter", label: "View Energy Meters" },
  },
  {
    title: "EV Charging Stations",
    description:
      "DC fast chargers operate at 400–1000 VDC and require high-breaking-capacity DC MCBs for feeder protection and emergency shutdown. Our DC MCBs handle high inrush current and provide reliable arc interruption for public and fleet charging infrastructure.",
    icon: "⚡",
    link: { href: "/contact", label: "Contact for EV Solutions" },
  },
];

export const faq = [
  {
    question: "What is a DC MCB and how is it different from an AC MCB?",
    answer:
      "A DC MCB (DC Miniature Circuit Breaker) is specifically engineered to interrupt direct current circuits. Unlike AC current, which crosses zero 50–60 times per second, DC is constant and creates a sustained arc when interrupted. DC MCBs use magnetic blowout chambers and special arc chutes to safely extinguish DC arcs. Using an AC MCB on a DC circuit is dangerous — AC breakers cannot reliably interrupt DC arcs and can cause fire hazards.",
  },
  {
    question: "What voltage rating do I need for my solar PV system?",
    answer:
      "For residential systems up to 10 kW, 1000 VDC MCBs are typically sufficient. Commercial and utility-scale systems often require 1500 VDC rated breakers. Calculate your string's maximum open-circuit voltage (Voc) at the coldest local temperature — the MCB voltage rating must exceed this value. As a rule of thumb, choose an MCB rated at least 20% above your calculated Voc.",
  },
  {
    question: "Does your DC MCB comply with IEC 60947-2?",
    answer:
      "Yes. Our DC MCB range is designed and tested to IEC 60947-2 (Low-voltage switchgear — Part 2: Circuit-breakers), which specifies breaking capacity, temperature rise, mechanical endurance, and arc interruption requirements for DC circuit breakers. We provide IEC test reports and CE declarations of conformity upon request.",
  },
  {
    question: "Can I use an AC MCB for DC circuits?",
    answer:
      "No. AC MCBs are rated only for alternating current. DC current has no natural zero-crossing point, so the arc formed during interruption will not self-extinguish inside an AC breaker. This leads to arc flash, equipment damage, and fire risk. Always use DC-rated circuit breakers — marked 'DC' with a DC voltage rating — for solar, battery, and all other DC systems.",
  },
  {
    question: "What trip curve should I select for solar PV applications?",
    answer:
      "C Curve (trips at 5–10× rated current) is the standard choice for PV string protection and DC distribution feeders. B Curve (3–5×) suits long cable runs with low prospective fault current. D Curve (10–20×) is used for DC motors and high-inductance loads such as battery cabinet feeders where high inrush is expected at startup.",
  },
  {
    question: "What is your lead time for bulk DC MCB orders?",
    answer:
      "Standard catalog models (1P–4P, 6–63 A, 1000 VDC) ship within 7–14 days for quantities up to 500 units. Larger orders (1,000+ units) typically require 15–25 days. Custom OEM/ODM orders with logo, label, or packaging require 25–35 days from design approval. Contact us with your project timeline and we will confirm the exact delivery schedule.",
  },
];
