import { Guide } from "./index";

const dcIsolatorSelectionGuide: Guide = {
  slug: "dc-isolator-selection-guide",
  title: "DC Isolator Selection Guide for Safe PV Disconnecting",
  description: "Understand how to select a DC isolator switch for safe isolation in solar and other DC applications.",
  product: "DC Isolator",
  application: "Solar PV",
  sections: [
    {
      id: "selection-overview",
      title: "Selection Overview",
      content: `
        <p>Selecting the right DC Isolator is critical for safety, reliability and commercial success. In real projects, a product decision should reflect the electrical system, the installation conditions and the buyer's documentation expectations, not just a basic catalogue line. This guide helps procurement teams, engineers and distributors move from a general product name to a usable specification path.</p>
        <p>The correct DC Isolator selection process starts by understanding the actual application context. For TPKELE customers, this usually means matching product performance to solar PV, building electrical distribution or power-switching conditions, and then connecting the technical decision to quotation, export and project-delivery needs.</p>
        <div class="callout">Do not select a DC Isolator only by one headline parameter. Review system voltage, current, switching duty, coordination and application context together.</div>
      `,
    },
    {
      id: "what-is-it",
      title: "What is a DC Isolator?",
      content: `
        <p>A DC Isolator is a low-voltage electrical product used to perform a defined protective, switching, control or monitoring function inside the system. Its real value is not the device alone, but how accurately it matches the circuit, the environment and the maintenance expectations of the user.</p>
        <p>When evaluating products, understanding the operating duty, key ratings and failure modes is more important than comparing visual similarities across brands. That makes quotation more accurate and reduces risk during installation and commissioning.</p>
        <figure class="guide-figure">
          <img src="/images/guides/dc-isolator-selection-guide/figure.png" alt="Functional selection view for DC Isolator" />
          <figcaption>Figure 1. Functional selection view for DC Isolator</figcaption>
        </figure>
      `,
    },
    {
      id: "key-selection-parameters",
      title: "Key Selection Parameters",
      content: `
        <p>Before comparing suppliers, buyers should list the parameters that truly determine whether the DC Isolator fits the project. Good product selection normally combines electrical ratings, application logic, physical arrangement and commercial documentation needs. That approach is more reliable than selecting by a model number alone.</p>
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
              <td>Rated Current</td>
              <td>Continuous load current</td>
              <td>32A / 63A / 125A / 250A+</td>
              <td>Must support the operating load</td>
            </tr>
            <tr>
              <td>Rated Voltage</td>
              <td>Operating system voltage</td>
              <td>230V / 400V AC or application-specific DC</td>
              <td>Must match the electrical system</td>
            </tr>
            <tr>
              <td>Transition / Duty</td>
              <td>Switching behavior or utilization category</td>
              <td>Open / Delayed / Load-break duty</td>
              <td>Defines suitability for the service</td>
            </tr>
            <tr>
              <td>Poles</td>
              <td>Number of switched conductors</td>
              <td>2P / 3P / 4P</td>
              <td>Depends on system design and isolation strategy</td>
            </tr>
            <tr>
              <td>Control Logic</td>
              <td>Automatic or manual logic</td>
              <td>Motorized / controller-based</td>
              <td>Affects application fit and wiring</td>
            </tr>
          </tbody>
        </table>
      `,
    },
    {
      id: "application-match",
      title: "Application Matching",
      content: `
        <p>The same DC Isolator family can be used in different projects, but the best specification often changes with the application. Residential systems usually focus on compactness, ease of installation and stable everyday use. Commercial and industrial projects may require higher ratings, more coordination and deeper documentation for internal review or export submission.</p>
        <p>Next, shortlist products that fit the technical envelope, check supporting documents such as datasheets or test reports, and then align the final choice with the buyer type. For example, a distributor may care more about standardized models and market breadth, while a project buyer may prioritize exact ratings, lead time and documentation completeness.</p>
        <figure class="guide-figure">
          <img src="/images/guides/dc-isolator-selection-guide/quick-flow.png" alt="Quick selection workflow for DC Isolator" />
          <figcaption>Figure 2. Quick selection workflow for DC Isolator</figcaption>
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
            <h4>What is the most important first step?</h4>
            <p>Define the actual switching duty, source arrangement or isolation requirement before comparing product sizes.</p>
          </div>
          <div class="faq-item">
            <h4>Should I only compare current rating?</h4>
            <p>No. Transfer mode, utilization category, voltage and system logic can all change the correct choice.</p>
          </div>
          <div class="faq-item">
            <h4>Why are application details important?</h4>
            <p>Because the same nominal rating may behave differently in generator, inverter or PV service.</p>
          </div>
          <div class="faq-item">
            <h4>How do I connect this to market requirements?</h4>
            <p>Use the Market Access Advisor after the technical shortlist is ready.</p>
          </div>
        </div>
      `,
    },
    {
      id: "related-products",
      title: "Related Products and Next Steps",
      content: `
        <p>A complete electrical protection system typically includes more than a single DC Isolator. Projects often combine these devices with related products such as circuit breakers, surge protection devices, and monitoring equipment to create a coordinated protection system.</p>
        <p>After completing the technical review, open the TPKELE Market Access Advisor to continue with the next step: checking likely market requirements, evidence expectations and buyer-facing compliance context for the target product and application.</p>
      `,
    },
  ],
  marketAccessAdvisor: {
    enabled: true,
    product: "dc-isolator",
    application: "Solar PV",
  },
};

export default dcIsolatorSelectionGuide;
