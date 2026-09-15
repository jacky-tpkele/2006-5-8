import { Guide } from "./index";

const dinRailEnergyMeterGuide: Guide = {
  slug: "din-rail-energy-meter-guide",
  title: "DIN Rail Energy Meter Selection Guide for Monitoring and Billing",
  description: "Compare direct and CT-operated DIN rail energy meters and match the meter to your monitoring requirements.",
  product: "Energy Meter",
  application: "Commercial",
  sections: [
    {
      id: "selection-overview",
      title: "Selection Overview",
      content: `
        <p>Selecting the right Energy Meter is critical for safety, reliability and commercial success. In real projects, a product decision should reflect the electrical system, the installation conditions and the buyer's documentation expectations, not just a basic catalogue line. This guide helps procurement teams, engineers and distributors move from a general product name to a usable specification path.</p>
        <p>The correct Energy Meter selection process starts by understanding the actual application context. For TPKELE customers, this usually means matching product performance to solar PV, building electrical distribution or power-switching conditions, and then connecting the technical decision to quotation, export and project-delivery needs.</p>
        <div class="callout">Do not select a Energy Meter only by one headline parameter. Review system voltage, current, switching duty, coordination and application context together.</div>
      `,
    },
    {
      id: "what-is-it",
      title: "What is a Energy Meter?",
      content: `
        <p>A Energy Meter is a low-voltage electrical product used to perform a defined protective, switching, control or monitoring function inside the system. Its real value is not the device alone, but how accurately it matches the circuit, the environment and the maintenance expectations of the user.</p>
        <p>When evaluating products, understanding the operating duty, key ratings and failure modes is more important than comparing visual similarities across brands. That makes quotation more accurate and reduces risk during installation and commissioning.</p>
        <figure class="guide-figure">
          <img src="/images/guides/din-rail-energy-meter-guide/figure.png" alt="Functional selection view for Energy Meter" />
          <figcaption>Figure 1. Functional selection view for Energy Meter</figcaption>
        </figure>
      `,
    },
    {
      id: "key-selection-parameters",
      title: "Key Selection Parameters",
      content: `
        <p>Before comparing suppliers, buyers should list the parameters that truly determine whether the Energy Meter fits the project. Good product selection normally combines electrical ratings, application logic, physical arrangement and commercial documentation needs. That approach is more reliable than selecting by a model number alone.</p>
        <p>The most efficient workflow for distributors, EPC engineers and procurement managers is to confirm the project conditions first, then compare a short list of technically suitable products, and finally review destination-market and quotation details.</p>
        <table class="guide-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Meaning</th>
              <th>Typical Options</th>
              <th>Why It Matters</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Phase Type</td>
              <td>Electrical system form</td>
              <td>1P / 3P</td>
              <td>Must match the supply network</td>
            </tr>
            <tr>
              <td>Connection Method</td>
              <td>Direct or CT-operated</td>
              <td>Direct / CT</td>
              <td>Defines measurable current range</td>
            </tr>
            <tr>
              <td>Current Range</td>
              <td>Meter measurement capability</td>
              <td>5(80)A / CT input</td>
              <td>Avoids overload and improves accuracy</td>
            </tr>
            <tr>
              <td>Communication</td>
              <td>Data interface</td>
              <td>RS485 / Modbus</td>
              <td>Supports remote monitoring</td>
            </tr>
            <tr>
              <td>Display / Functions</td>
              <td>Local feature set</td>
              <td>kWh / V / A / PF</td>
              <td>Matches user monitoring needs</td>
            </tr>
          </tbody>
        </table>
      `,
    },
    {
      id: "application-match",
      title: "Application Matching",
      content: `
        <p>The same Energy Meter family can be used in different projects, but the best specification often changes with the application. Residential systems usually focus on compactness, ease of installation and stable everyday use. Commercial and industrial projects may require higher ratings, more coordination and deeper documentation for internal review or export submission.</p>
        <p>Next, shortlist products that fit the technical envelope, check supporting documents such as datasheets or test reports, and then align the final choice with the buyer type. For example, a distributor may care more about standardized models and market breadth, while a project buyer may prioritize exact ratings, lead time and documentation completeness.</p>
        <figure class="guide-figure">
          <img src="/images/guides/din-rail-energy-meter-guide/quick-flow.png" alt="Quick selection workflow for Energy Meter" />
          <figcaption>Figure 2. Quick selection workflow for Energy Meter</figcaption>
        </figure>
      `,
    },
    {
      id: "standards-and-compliance",
      title: "Standards and Compliance Perspective",
      content: `
        <p>Technical standards and market-access expectations should be understood as related but separate topics. A technical standard helps define how a product is evaluated, tested or described. However, mentioning a standard does not automatically mean that every destination market imposes the same mandatory certification route for every product scope.</p>
        <p>Commercially, another error is waiting too long to review certification documents and market-specific requirements. When this review happens late, quotation and shipment timelines become harder to control. A stronger process combines technical selection and document preparation from the beginning.</p>
      `,
    },
    {
      id: "faq",
      title: "FAQ",
      content: `
        <div class="faq-section">
          <div class="faq-item">
            <h4>Direct meter or CT-operated meter?</h4>
            <p>Choose direct connection for lower current ranges and CT-operated meters when circuit current exceeds direct meter capability.</p>
          </div>
          <div class="faq-item">
            <h4>Why is communication important?</h4>
            <p>Because many users need remote monitoring, building integration or energy management visibility.</p>
          </div>
          <div class="faq-item">
            <h4>What should be confirmed before ordering?</h4>
            <p>Phase type, current range, voltage system, communication protocol and whether MID or project-level billing logic is needed.</p>
          </div>
          <div class="faq-item">
            <h4>Can the advisor still help?</h4>
            <p>Yes. It can help structure export and regulatory requirements after the technical selection is made.</p>
          </div>
        </div>
      `,
    },
    {
      id: "related-products",
      title: "Related Products and Next Steps",
      content: `
        <p>A complete electrical protection system typically includes more than a single Energy Meter. Projects often combine these devices with related products such as circuit breakers, surge protection devices, and monitoring equipment to create a coordinated protection system.</p>
        <p>After completing the technical review, open the TPKELE Market Access Advisor to continue with the next step: checking likely market requirements, evidence expectations and buyer-facing compliance context for the target product and application.</p>
      `,
    },
  ],
  marketAccessAdvisor: {
    enabled: true,
    product: "energy-meter",
    application: "Commercial",
  },
};

export default dinRailEnergyMeterGuide;
