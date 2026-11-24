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
    image: "/assets/landing/circuit-breakers/curve-b.webp",
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

export const applications = [
  {
    title: "Residential Distribution Boards",
    description:
      "AC MCBs protect individual branch circuits in home distribution boards — lighting, sockets, air conditioning, and kitchen appliances. 1P and 2P models fit compact consumer units; B and C curve options match the load type and cable size.",
    link: { href: "/products/ac-mcb", label: "View AC MCB Range" },
  },
  {
    title: "Commercial & Industrial Panels",
    description:
      "3P and 4P AC MCBs protect three-phase feeders in office buildings, factories, and data centres. High breaking capacity models (10 kA) handle prospective fault currents in LV switchboards and motor control centres.",
    link: { href: "/mcb-manufacturer", label: "MCB Manufacturer Info" },
  },
  {
    title: "Solar Inverter AC Output",
    description:
      "AC MCBs protect the inverter AC output and grid interconnect in grid-tied solar systems. Correctly rated AC MCBs prevent nuisance tripping during inverter startup while providing reliable fault clearance.",
    link: { href: "/products/dc-mcb", label: "Also View DC MCB" },
  },
];

export const faq = [
  {
    question: "What is an AC MCB and what does it protect against?",
    answer:
      "An AC MCB (AC Miniature Circuit Breaker) is a resettable automatic switch that protects AC electrical circuits from two fault conditions: overload (sustained current above rated value) and short circuit (sudden very high current). It trips within seconds for overload and within milliseconds for a short circuit. Unlike a fuse, it can be reset manually after a fault is cleared.",
  },
  {
    question: "What is the difference between B curve, C curve, and D curve MCBs?",
    answer:
      "The trip curve defines how quickly the MCB responds to overcurrent. B curve (trips at 3–5× rated current) suits lighting circuits and resistive loads with low inrush. C curve (5–10×) is the standard choice for general distribution, sockets, and small motors. D curve (10–20×) handles high inrush equipment like transformers, welding machines, and large motors. Choosing the wrong curve causes either nuisance tripping (too sensitive) or delayed tripping (too slow).",
  },
  {
    question: "What breaking capacity do I need — 4.5 kA, 6 kA, or 10 kA?",
    answer:
      "Breaking capacity must exceed the prospective short circuit current (PSCC) at the installation point. Residential panels typically see 3–6 kA PSCC, so 6 kA MCBs are standard. Commercial buildings and industrial panels near the transformer can see 10 kA or higher — always use 10 kA MCBs in these locations. When in doubt, use the higher rating; there is no downside to specifying higher breaking capacity.",
  },
  {
    question: "What is the ac mcb market size and who are the main buyers?",
    answer:
      "The global AC MCB market is driven by residential construction, commercial fit-outs, industrial expansion, and solar inverter installations. Main buyers include electrical distributors, panel builders, electrical contractors, solar EPCs, and OEM equipment manufacturers. Demand is strongest in Asia-Pacific, Europe, the Middle East, and Africa, where grid infrastructure investment and building activity are highest.",
  },
  {
    question: "Does your AC MCB comply with IEC 60898-1?",
    answer:
      "Yes. Our AC MCB range is designed and tested to IEC 60898-1 (Electrical accessories — Circuit-breakers for overcurrent protection for household and similar installations), the main international standard for domestic and commercial MCBs. We also supply models tested to IEC 60947-2 for industrial applications requiring higher breaking capacity and rated operational voltage. CE and RoHS certificates are available on request.",
  },
  {
    question: "Can I use the same MCB for both AC and DC circuits?",
    answer:
      "No. AC MCBs are rated and tested only for alternating current. DC current has no natural zero-crossing, so the arc formed during interruption will not self-extinguish inside an AC breaker — this can lead to sustained arcing, equipment damage, and fire. Always use a DC-rated MCB for solar PV strings, battery systems, and other DC applications. See our DC MCB range for DC circuit protection.",
  },
];

