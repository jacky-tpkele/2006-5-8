import { Guide } from "./index";

const acMcbGuide: Guide = {
  slug: "ac-mcb-selection-guide",
  title: "AC MCB Selection Guide for Building and Industrial Circuits",
  description: "Review current rating, breaking capacity and trip curves when selecting an AC miniature circuit breaker.",
  product: "AC MCB",
  application: "Commercial",
  sections: [
    {
      id: "selection-overview",
      title: "Selection Overview",
      content: `
        <p>Selecting the right AC MCB is critical for safety, reliability and commercial success. In real projects, a product decision should reflect the electrical system, the installation conditions and the buyer's documentation expectations, not just a basic catalogue line. This guide helps procurement teams, engineers and distributors move from a general product name to a usable specification path.</p>
        <p>The correct AC MCB selection process starts by understanding the actual application context. For TPKELE customers, this usually means matching product performance to solar PV, building electrical distribution or power-switching conditions, and then connecting the technical decision to quotation, export and project-delivery needs.</p>
        <div class="callout">
          <strong>Key Takeaway:</strong> Do not select a AC MCB only by one headline parameter. Review system voltage, current, switching duty, coordination and application context together.
        </div>
      `,
    },
    {
      id: "what-is-it",
      title: "What is a AC MCB?",
      content: `
        <p>A AC MCB is a low-voltage electrical product used to perform a defined protective, switching, control or monitoring function inside the system. Its real value is not the device alone, but how accurately it matches the circuit, the environment and the maintenance expectations of the user.</p>
        <p>When evaluating products, understanding the operating duty, key ratings and failure modes is more important than comparing visual similarities across brands. That makes quotation more accurate and reduces risk during installation and commissioning.</p>
        <figure class="guide-figure">
          <img src="/images/guides/ac-mcb-selection-guide/figure.png" alt="Functional selection view for AC MCB" />
          <figcaption>Figure 1. Functional selection view for AC MCB</figcaption>
        </figure>
      `,
    },
    {
      id: "key-selection-parameters",
      title: "Key Selection Parameters",
      content: `
        <p>Before comparing suppliers, buyers should list the parameters that truly determine whether the AC MCB fits the project. Good product selection normally combines electrical ratings, application logic, physical arrangement and commercial documentation needs. That approach is more reliable than selecting by a model number alone.</p>
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
              <td>Rated Voltage</td>
              <td>Maximum operating voltage</td>
              <td>Application-specific</td>
              <td>Must exceed the real system voltage</td>
            </tr>
            <tr>
              <td>Rated Current</td>
              <td>Continuous operating current</td>
              <td>Standard current steps</td>
              <td>Must match the circuit load</td>
            </tr>
            <tr>
              <td>Breaking / Withstand Duty</td>
              <td>Fault or switching performance</td>
              <td>Model-specific</td>
              <td>Ensures safe operation</td>
            </tr>
            <tr>
              <td>Poles / Configuration</td>
              <td>Mechanical and electrical arrangement</td>
              <td>1P / 2P / 3P / 4P</td>
              <td>Depends on system wiring</td>
            </tr>
            <tr>
              <td>Standards Basis</td>
              <td>Technical evaluation foundation</td>
              <td>IEC / project-specific</td>
              <td>Supports engineering review</td>
            </tr>
          </tbody>
        </table>
      `,
    },
    {
      id: "application-match",
      title: "Application Matching",
      content: `
        <p>The same AC MCB family can be used in different projects, but the best specification often changes with the application. Residential systems usually focus on compactness, ease of installation and stable everyday use. Commercial and industrial projects may require higher ratings, more coordination and deeper documentation for internal review or export submission.</p>
        <p>Next, shortlist products that fit the technical envelope, check supporting documents such as datasheets or test reports, and then align the final choice with the buyer type. For example, a distributor may care more about standardized models and market breadth, while a project buyer may prioritize exact ratings, lead time and documentation completeness.</p>
        <figure class="guide-figure">
          <img src="/images/guides/ac-mcb-selection-guide/quick-flow.png" alt="Quick selection workflow for AC MCB" />
          <figcaption>Figure 2. Quick selection workflow for AC MCB</figcaption>
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
            <h3>What is the first parameter to confirm?</h3>
            <p>Start from the maximum system voltage and the actual circuit architecture before checking current and accessory details.</p>
          </div>
          <div class="faq-item">
            <h3>Can I select only by current rating?</h3>
            <p>No. Current alone is not enough. Voltage, fault level, poles and application environment also matter.</p>
          </div>
          <div class="faq-item">
            <h3>Why does breaking capacity matter?</h3>
            <p>Because the device must safely interrupt the fault level that can appear at the installation point.</p>
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
        <p>A complete electrical protection system typically includes more than a single AC MCB. Projects often combine these devices with related products such as circuit breakers, surge protection devices, and monitoring equipment to create a coordinated protection system.</p>
        <p>After completing the technical review, open the TPKELE Market Access Advisor to continue with the next step: checking likely market requirements, evidence expectations and buyer-facing compliance context for the target product and application.</p>
      `,
    },
  ],
  marketAccessAdvisor: {
    enabled: true,
    product: "ac-mcb",
    application: "Commercial",
  },
};

export default acMcbGuide;
