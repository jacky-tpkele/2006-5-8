import { Guide } from "./index";

const atsSelectionGuide: Guide = {
  slug: "ats-selection-guide",
  title: "ATS Selection Guide for Backup Power and Critical Loads",
  description: "Choose an automatic transfer switch with the right current, transfer type and application logic for reliable power switching.",
  product: "ATS",
  application: "Commercial",
  sections: [
    {
      id: "selection-overview",
      title: "Selection Overview",
      content: `
        <p>Selecting the right ATS is critical for safety, reliability and commercial success. In real projects, a product decision should reflect the electrical system, the installation conditions and the buyer's documentation expectations, not just a basic catalogue line. This guide is written to help procurement teams, engineers and distributors move from a general product name to a usable specification path.</p>
        <p>The correct ATS selection process starts by understanding the actual application context. For TPKELE customers, this usually means matching product performance to solar PV, building electrical distribution or power-switching conditions, and then connecting the technical decision to quotation, export and project-delivery needs.</p>
        <div class="callout">Do not select an ATS only by one headline parameter. Review system voltage, current, switching duty, coordination and application context together.</div>
      `,
    },
    {
      id: "what-is-it",
      title: "What is an ATS?",
      content: `
        <p>An Automatic Transfer Switch (ATS) is a low-voltage switching device that automatically transfers electrical load between two power sources — typically between mains utility and backup generator, or between two independent utility feeds. When the primary source fails or its voltage drops below acceptable limits, the ATS detects the fault and switches the load to the secondary source within seconds.</p>
        <p>In commercial and industrial applications, ATS devices ensure continuous power to critical loads such as emergency lighting, fire safety systems, data centers, hospitals and telecommunications equipment. The switching logic can be either open transition (brief power interruption) or closed transition (momentary parallel operation), depending on the load requirements and system design.</p>
        <figure class="guide-figure">
          <img src="/images/guides/ats-selection-guide/figure.png" alt="Functional selection view for ATS" />
          <figcaption>Figure 1. Functional selection view for ATS</figcaption>
        </figure>
      `,
    },
    {
      id: "key-selection-parameters",
      title: "Key Selection Parameters",
      content: `
        <p>Before comparing suppliers, buyers should list the parameters that truly determine whether the ATS fits the project. Good product selection normally combines electrical ratings, application logic, physical arrangement and commercial documentation needs. That approach is more reliable than selecting by a model number alone.</p>
        <p>For TPKELE's target users such as distributors, EPC engineers and procurement managers, the most efficient workflow is to confirm the project conditions first, then compare a short list of technically suitable products, and finally review destination-market and quotation details.</p>
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
        <p>The same ATS family can be used in different projects, but the best specification often changes with the application. Residential backup systems typically require 2-pole switches with ratings up to 63A, focusing on simplicity and cost-effectiveness. Commercial buildings may need 3-pole or 4-pole units rated 125A to 400A, with more sophisticated control logic and monitoring capabilities.</p>
        <p>Industrial facilities often require ATS devices with higher breaking capacity, motorized operation, and integration with building management systems (BMS) or SCADA networks. Understanding these application-specific requirements helps buyers choose products that match both the electrical specifications and the operational environment.</p>
      `,
    },
    {
      id: "selection-workflow",
      title: "Recommended Selection Workflow",
      content: `
        <p>A practical selection workflow for ATS starts with the electrical system and not the catalogue. Confirm the system voltage, current or load duty, application type, pole or functional arrangement, installation conditions and coordination requirements. Only after that should model comparison begin.</p>
        <p>Next, shortlist products that fit the technical envelope, check supporting documents such as datasheets or test reports, and then align the final choice with the buyer type. For example, a distributor may care more about standardized models and market breadth, while a project buyer may prioritize exact ratings, lead time and documentation completeness.</p>
        <figure class="guide-figure">
          <img src="/images/guides/ats-selection-guide/quick-flow.png" alt="Quick selection workflow for ATS" />
          <figcaption>Figure 2. Quick selection workflow for ATS</figcaption>
        </figure>
      `,
    },
    {
      id: "standards-and-compliance",
      title: "Standards and Compliance Perspective",
      content: `
        <p>ATS devices are typically designed to meet IEC 60947-6-1 (Automatic Transfer Switching Equipment) or equivalent national standards such as UL 1008 (North America). These standards define performance requirements for voltage detection, transfer time, endurance testing and environmental conditions.</p>
        <p>For international projects, buyers should verify which certifications are mandatory in the destination market. European markets often require CE marking, while Middle Eastern and African markets may accept IEC test reports with additional third-party verification. Understanding these requirements early helps avoid delays during customs clearance and project commissioning.</p>
      `,
    },
    {
      id: "common-mistakes",
      title: "Common Mistakes to Avoid",
      content: `
        <p>The most frequent mistake is selecting an ATS by habit rather than by project conditions. Buyers may copy an old specification without checking if the new system voltage, environment, current level or use case has changed. Another mistake is assuming that all visually similar products from the market have the same internal performance or supporting evidence.</p>
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
        <p>A complete backup power system typically includes more than just an ATS. Projects often combine automatic transfer switches with circuit breakers (for overcurrent protection), surge protective devices (for lightning and transient protection), and energy meters (for load monitoring and power quality analysis).</p>
        <p>For comprehensive project planning, consider reviewing TPKELE's related product lines: AC MCBs for circuit protection, voltage protectors for under/over voltage conditions, and DIN rail energy meters for consumption monitoring. These components work together to create a reliable and maintainable power distribution system.</p>
        <figure class="guide-figure">
          <img src="/images/guides/ats-selection-guide/related-grid.png" alt="Related TPKELE product paths for ATS" />
          <figcaption>Figure 3. Related TPKELE product paths for ATS</figcaption>
        </figure>
      `,
    },
    {
      id: "conclusion",
      title: "Conclusion",
      content: `
        <p>A reliable ATS decision combines product knowledge, application matching and documentation readiness. If you define the use case clearly and review the key parameters in a structured order, selection becomes faster and more accurate.</p>
        <p>After completing the technical review, open the TPKELE Market Access Advisor to continue with the next step: checking likely market requirements, evidence expectations and buyer-facing compliance context for the target product and application.</p>
      `,
    },
  ],
  marketAccessAdvisor: {
    enabled: true,
    product: "ats",
    application: "Commercial",
  },
};

export default atsSelectionGuide;
