import { Guide } from "./index";

const dcMcbGuide: Guide = {
  slug: "dc-mcb-selection-guide",
  title: "DC MCB Selection Guide for Solar PV Systems",
  description: "Complete technical guide for selecting DC miniature circuit breakers in solar photovoltaic applications.",
  product: "DC MCB",
  application: "Solar PV",
  sections: [
    {
      id: "selection-overview",
      title: "Selection Overview",
      content: `
        <p>DC miniature circuit breakers (MCBs) are essential protection devices in solar PV systems. Unlike AC applications, DC circuits present unique challenges including arc suppression difficulties and the need for specialized breaking mechanisms.</p>
        <p>This guide provides a systematic approach to selecting the correct DC MCB for your solar PV installation, covering voltage ratings, current capacity, breaking capacity, and compliance requirements.</p>
      `,
    },
    {
      id: "required-technical-inputs",
      title: "Required Technical Inputs",
      content: `
        <p>Before selecting a DC MCB, gather the following system parameters:</p>
        <ul>
          <li><strong>System voltage (Voc):</strong> Open-circuit voltage of the PV array</li>
          <li><strong>Maximum current (Isc):</strong> Short-circuit current of the string</li>
          <li><strong>Operating current:</strong> Maximum power point current (Imp)</li>
          <li><strong>Environmental conditions:</strong> Temperature range and altitude</li>
          <li><strong>Installation location:</strong> Indoor/outdoor and accessibility</li>
        </ul>
      `,
    },
    {
      id: "key-selection-parameters",
      title: "Key Selection Parameters",
      content: `
        <h3>1. Rated Voltage (Un)</h3>
        <p>The DC MCB rated voltage must exceed the maximum open-circuit voltage (Voc) of the PV string under all conditions, including cold weather when Voc increases.</p>

        <h3>2. Rated Current (In)</h3>
        <p>Select a rating between 1.25× and 1.56× the maximum operating current to prevent nuisance tripping while providing adequate protection.</p>

        <h3>3. Breaking Capacity (Icu/Icn)</h3>
        <p>Must exceed the maximum fault current available at the installation point, typically 1.25× Isc for solar applications.</p>
      `,
    },
    {
      id: "voltage-selection",
      title: "Voltage Selection",
      content: `
        <p><strong>Standard DC voltage ratings:</strong></p>
        <table>
          <thead>
            <tr>
              <th>Rating</th>
              <th>Typical Application</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DC 500V</td>
              <td>Residential PV systems (&lt;15 modules/string)</td>
            </tr>
            <tr>
              <td>DC 1000V</td>
              <td>Commercial PV systems (standard)</td>
            </tr>
            <tr>
              <td>DC 1500V</td>
              <td>Utility-scale PV installations</td>
            </tr>
          </tbody>
        </table>
        <p><strong>Important:</strong> Always verify Voc at minimum operating temperature. For example, a 450W module rated at 49V Voc can reach 58V at -25°C.</p>
      `,
    },
    {
      id: "current-rating-selection",
      title: "Current Rating Selection",
      content: `
        <p><strong>Calculation method:</strong></p>
        <ol>
          <li>Determine string Imp (maximum power current)</li>
          <li>Apply safety factor: In ≥ 1.25 × Imp</li>
          <li>Select next standard rating up</li>
        </ol>

        <p><strong>Example:</strong></p>
        <ul>
          <li>Module Imp: 11.5A</li>
          <li>Minimum rating: 1.25 × 11.5A = 14.4A</li>
          <li>Selected rating: 16A or 20A (standard)</li>
        </ul>

        <p><strong>Standard DC MCB current ratings:</strong> 6A, 10A, 16A, 20A, 25A, 32A, 40A, 50A, 63A</p>
      `,
    },
    {
      id: "breaking-capacity",
      title: "Breaking Capacity",
      content: `
        <p>Breaking capacity (Icu or Icn) is the maximum fault current the MCB can safely interrupt.</p>

        <h3>Solar PV Fault Current Calculation</h3>
        <p>Maximum fault current ≈ 1.25 × Isc × number of parallel strings</p>

        <h3>Standard Breaking Capacities</h3>
        <ul>
          <li><strong>3kA:</strong> Single-string residential systems</li>
          <li><strong>6kA:</strong> Multi-string residential (2-4 strings)</li>
          <li><strong>10kA:</strong> Commercial installations (5-10 strings)</li>
          <li><strong>15kA+:</strong> Large commercial/utility systems</li>
        </ul>
      `,
    },
    {
      id: "solar-pv-application-example",
      title: "Solar PV Application Example",
      content: `
        <h3>Scenario: 10kW Residential Rooftop System</h3>

        <p><strong>System specifications:</strong></p>
        <ul>
          <li>Module: 450W, Voc 49V, Isc 11.8A, Imp 11.5A</li>
          <li>Configuration: 2 strings, 11 modules per string</li>
          <li>System Voc: 11 × 49V = 539V</li>
          <li>String Isc: 11.8A</li>
        </ul>

        <p><strong>Selection process:</strong></p>
        <ol>
          <li><strong>Voltage:</strong> Voc = 539V → Select DC 1000V rated MCB</li>
          <li><strong>Current:</strong> 1.25 × 11.5A = 14.4A → Select 16A rating</li>
          <li><strong>Breaking capacity:</strong> 1.25 × 11.8A × 2 strings = 29.5A → 6kA is sufficient</li>
        </ol>

        <p><strong>Result:</strong> DC MCB 2P, 16A, 1000V, 6kA, curve C</p>
      `,
    },
    {
      id: "standards-reference",
      title: "Standards Reference",
      content: `
        <h3>International Standards</h3>
        <ul>
          <li><strong>IEC 60947-2:</strong> Low-voltage switchgear and controlgear - Circuit breakers</li>
          <li><strong>IEC 60364-7-712:</strong> Electrical installations of buildings - Solar photovoltaic systems</li>
          <li><strong>UL 489:</strong> Molded-Case Circuit Breakers (North America)</li>
          <li><strong>UL 1741:</strong> Inverters, Converters, Controllers and Interconnection System Equipment (US)</li>
        </ul>

        <h3>Certification Requirements</h3>
        <p>Ensure the DC MCB carries appropriate certifications for your target market:</p>
        <ul>
          <li>CE marking (Europe)</li>
          <li>UL listing (USA)</li>
          <li>CCC certification (China)</li>
          <li>TUV certification (international recognition)</li>
        </ul>
      `,
    },
    {
      id: "export-requirements",
      title: "Export Requirements",
      content: `
        <p>Market-specific requirements vary significantly. Use our Market Access Advisor to check compliance for your target country.</p>

        <h3>Common Regional Requirements</h3>

        <h4>European Union</h4>
        <ul>
          <li>CE marking mandatory</li>
          <li>Low Voltage Directive (LVD) compliance</li>
          <li>IEC 60947-2 certification</li>
        </ul>

        <h4>North America</h4>
        <ul>
          <li>UL 489 listing required</li>
          <li>UL 1741 for PV applications</li>
          <li>NEC Article 690 compliance</li>
        </ul>

        <h4>Middle East (Saudi Arabia, UAE)</h4>
        <ul>
          <li>SASO certification (Saudi)</li>
          <li>ESMA approval (UAE)</li>
          <li>IEC standards recognized</li>
        </ul>
      `,
    },
    {
      id: "faq",
      title: "Frequently Asked Questions",
      content: `
        <h3>Can I use an AC MCB for DC applications?</h3>
        <p><strong>No.</strong> AC MCBs are not designed for DC arc interruption. DC arcs do not have zero-crossing points, making them significantly harder to extinguish. Always use DC-rated circuit breakers.</p>

        <h3>What is the difference between 1-pole and 2-pole DC MCBs?</h3>
        <p>For grounded PV systems, 2-pole MCBs provide positive and negative pole protection. For floating/ungrounded systems, both poles must be switched. Check local codes - most require 2-pole protection.</p>

        <h3>Do I need an MCB on both string inputs to the combiner box?</h3>
        <p>Yes, each string should have individual overcurrent protection. This allows isolation of individual strings for maintenance and provides string-level fault protection.</p>

        <h3>What is the correct trip curve for solar applications?</h3>
        <p>Curve C is standard for most PV applications. It provides appropriate inrush tolerance while responding quickly to short circuits.</p>

        <h3>How does temperature affect DC MCB performance?</h3>
        <p>Ambient temperature affects the thermal trip point. MCBs are typically rated at 30°C. In hot climates (40°C+), consider derating or selecting the next size up to prevent nuisance tripping.</p>
      `,
    },
  ],
  marketAccessAdvisor: {
    enabled: true,
    product: "dc-mcb",
    application: "solar-pv",
  },
};

export default dcMcbGuide;
