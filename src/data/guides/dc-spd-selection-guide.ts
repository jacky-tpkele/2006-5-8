import { Guide } from "./index";

const dcSpdGuide: Guide = {
  slug: "dc-spd-selection-guide",
  title: "DC SPD Selection Guide for PV Surge Protection",
  description: "Understand how to choose a DC SPD for photovoltaic systems and protect inverters and strings from transient surges.",
  product: "DC SPD",
  application: "Solar PV",
  sections: [
    {
      id: "selection-overview",
      title: "Selection Overview",
      content: `
        <p>Selecting the right DC SPD is critical for safety, reliability and commercial success. In real projects, a product decision should reflect the electrical system, the installation conditions and the buyer's documentation expectations, not just a basic catalogue line. This guide helps procurement teams, engineers and distributors move from a general product name to a usable specification path.</p>
        <p>The correct DC SPD selection process starts by understanding the actual application context. For TPKELE customers, this usually means matching product performance to solar PV, building electrical distribution or power-switching conditions, and then connecting the technical decision to quotation, export and project-delivery needs.</p>
        <div class="callout">
          <strong>Key Takeaway:</strong> Do not select a DC SPD only by one headline parameter. Review system voltage, current, switching duty, coordination and application context together.
        </div>
      `,
    },
    {
      id: "what-is-it",
      title: "What is a DC SPD?",
      content: `
        <p>A DC SPD is a low-voltage electrical product used to perform a defined protective, switching, control or monitoring function inside the system. Its real value is not the device alone, but how accurately it matches the circuit, the environment and the maintenance expectations of the user.</p>
        <p>When evaluating products, understanding the operating duty, key ratings and failure modes is more important than comparing visual similarities across brands. That makes quotation more accurate and reduces risk during installation and commissioning.</p>
        <figure class="guide-figure">
          <img src="/images/guides/dc-spd-selection-guide/figure.png" alt="Functional selection view for DC SPD" />
          <figcaption>Figure 1. Functional selection view for DC SPD</figcaption>
        </figure>
      `,
    },
    {
      id: "key-selection-parameters",
      title: "Key Selection Parameters",
      content: `
        <p>Before comparing suppliers, buyers should list the parameters that truly determine whether the DC SPD fits the project. Good product selection normally combines electrical ratings, application logic, physical arrangement and commercial documentation needs. That approach is more reliable than selecting by a model number alone.</p>
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
              <td>Ucpv / MCOV</td>
              <td>Maximum continuous operating voltage</td>
              <td>600V / 1000V / 1500V DC</td>
              <td>Must be above the normal PV circuit voltage</td>
            </tr>
            <tr>
              <td>Imax</td>
              <td>Maximum discharge current</td>
              <td>20kA / 40kA</td>
              <td>Defines the surge handling capability</td>
            </tr>
            <tr>
              <td>Up / Protection Level</td>
              <td>Voltage let-through at Iimp</td>
              <td>Typically 1.5 - 3.5 kV</td>
              <td>Determines downstream component protection</td>
            </tr>
            <tr>
              <td>Class / Type</td>
              <td>Installation point in the system</td>
              <td>Type 1 / Type 2 / Type 1+2</td>
              <td>Based on lightning zone and coordination</td>
            </tr>
            <tr>
              <td>Poles</td>
              <td>Number of protected lines</td>
              <td>1P / 2P / 3P</td>
              <td>Matches PV string configuration</td>
            </tr>
          </tbody>
        </table>
      `,
    },
    {
      id: "application-match",
      title: "Application Matching",
      content: `
        <p>The same DC SPD family can be used in different projects, but the best specification often changes with the application. Residential systems usually focus on compactness, ease of installation and stable everyday use. Commercial and industrial projects may require higher ratings, more coordination and deeper documentation for internal review or export submission.</p>
        <p>Next, shortlist products that fit the technical envelope, check supporting documents such as datasheets or test reports, and then align the final choice with the buyer type. For example, a distributor may care more about standardized models and market breadth, while a project buyer may prioritize exact ratings, lead time and documentation completeness.</p>
        <figure class="guide-figure">
          <img src="/images/guides/dc-spd-selection-guide/quick-flow.png" alt="Quick selection workflow for DC SPD" />
          <figcaption>Figure 2. Quick selection workflow for DC SPD</figcaption>
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
            <h3>What is the difference between Type 1 and Type 2 SPDs?</h3>
            <p>Type 1 is used at the service entrance for direct lightning strikes, while Type 2 is used downstream for induced surges. For PV systems, Type 1+2 combined SPDs are often preferred.</p>
          </div>
          <div class="faq-item">
            <h3>How do I calculate the required MCOV?</h3>
            <p>MCOV must be higher than the maximum open-circuit voltage (Voc) of the PV string at the coldest temperature. A safety margin of 20-30% is recommended.</p>
          </div>
          <div class="faq-item">
            <h3>Can I use AC SPDs for DC PV systems?</h3>
            <p>No. DC SPDs are specifically designed for DC arc extinction and must be used in PV applications. AC SPDs will fail in DC circuits.</p>
          </div>
          <div class="faq-item">
            <h3>How does the guide connect to export work?</h3>
            <p>After product selection, use the Market Access Advisor to review likely standards, document expectations and market-specific questions.</p>
          </div>
        </div>
      `,
    },
    {
      id: "related-products",
      title: "Related Products and Next Steps",
      content: `
        <p>A complete electrical protection system typically includes more than a single DC SPD. Projects often combine these devices with related products such as circuit breakers, surge protection devices, and monitoring equipment to create a coordinated protection system.</p>
        <p>After completing the technical review, open the TPKELE Market Access Advisor to continue with the next step: checking likely market requirements, evidence expectations and buyer-facing compliance context for the target product and application.</p>
      `,
    },
  ],
  marketAccessAdvisor: {
    enabled: true,
    product: "dc-spd",
    application: "Solar PV",
  },
};

export default dcSpdGuide;
