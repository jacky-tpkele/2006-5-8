import { Guide } from "./index";

const voltageProtectorSelectionGuide: Guide = {
  slug: "voltage-protector-selection-guide",
  title: "Voltage Protector Selection Guide for Over and Under Voltage Protection",
  description: "Learn how adjustable voltage protectors are selected for residential and commercial low-voltage systems.",
  product: "Voltage Protector",
  application: "Residential",
  sections: [
    {
      id: "selection-overview",
      title: "Selection Overview",
      content: `
        <p>Selecting the right Voltage Protector is critical for safety, reliability and commercial success. In real projects, a product decision should reflect the electrical system, the installation conditions and the buyer's documentation expectations, not just a basic catalogue line. This guide helps procurement teams, engineers and distributors move from a general product name to a usable specification path.</p>
        <p>The correct Voltage Protector selection process starts by understanding the actual application context. For TPKELE customers, this usually means matching product performance to solar PV, building electrical distribution or power-switching conditions, and then connecting the technical decision to quotation, export and project-delivery needs.</p>
        <div class="callout">Do not select a Voltage Protector only by one headline parameter. Review system voltage, current, switching duty, coordination and application context together.</div>
      `,
    },
    {
      id: "what-is-it",
      title: "What is a Voltage Protector?",
      content: `
        <p>A Voltage Protector is a low-voltage electrical product used to perform a defined protective, switching, control or monitoring function inside the system. Its real value is not the device alone, but how accurately it matches the circuit, the environment and the maintenance expectations of the user.</p>
        <p>When evaluating products, understanding the operating duty, key ratings and failure modes is more important than comparing visual similarities across brands. That makes quotation more accurate and reduces risk during installation and commissioning.</p>
        <figure class="guide-figure">
          <img src="/images/guides/voltage-protector-selection-guide/figure.png" alt="Functional selection view for Voltage Protector" />
          <figcaption>Figure 1. Functional selection view for Voltage Protector</figcaption>
        </figure>
      `,
    },
    {
      id: "key-selection-parameters",
      title: "Key Selection Parameters",
      content: `
        <p>Before comparing suppliers, buyers should list the parameters that truly determine whether the Voltage Protector fits the project. Good product selection normally combines electrical ratings, application logic, physical arrangement and commercial documentation needs. That approach is more reliable than selecting by a model number alone.</p>
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
              <td>Over-voltage Setting</td>
              <td>Trip threshold above nominal voltage</td>
              <td>Adjustable</td>
              <td>Protects appliances from sustained high voltage</td>
            </tr>
            <tr>
              <td>Under-voltage Setting</td>
              <td>Trip threshold below nominal voltage</td>
              <td>Adjustable</td>
              <td>Prevents damage from low-voltage conditions</td>
            </tr>
            <tr>
              <td>Current Rating</td>
              <td>Continuous load capability</td>
              <td>40A / 63A / 80A</td>
              <td>Must match the protected circuit current</td>
            </tr>
            <tr>
              <td>Delay Time</td>
              <td>Reconnect or trip delay</td>
              <td>1s – 300s</td>
              <td>Improves stability and user experience</td>
            </tr>
            <tr>
              <td>Reset Logic</td>
              <td>How the device restores supply</td>
              <td>Automatic / Manual</td>
              <td>Affects operation after a fault</td>
            </tr>
          </tbody>
        </table>
      `,
    },
    {
      id: "application-match",
      title: "Application Matching",
      content: `
        <p>The same Voltage Protector family can be used in different projects, but the best specification often changes with the application. Residential systems usually focus on compactness, ease of installation and stable everyday use. Commercial and industrial projects may require higher ratings, more coordination and deeper documentation for internal review or export submission.</p>
        <p>Next, shortlist products that fit the technical envelope, check supporting documents such as datasheets or test reports, and then align the final choice with the buyer type. For example, a distributor may care more about standardized models and market breadth, while a project buyer may prioritize exact ratings, lead time and documentation completeness.</p>
        <figure class="guide-figure">
          <img src="/images/guides/voltage-protector-selection-guide/quick-flow.png" alt="Quick selection workflow for Voltage Protector" />
          <figcaption>Figure 2. Quick selection workflow for Voltage Protector</figcaption>
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
            <h4>What makes a voltage protector different from an SPD?</h4>
            <p>A voltage protector monitors sustained abnormal voltage and disconnects when the threshold is exceeded. An SPD handles transient surges.</p>
          </div>
          <div class="faq-item">
            <h4>What settings are normally checked?</h4>
            <p>Over-voltage threshold, under-voltage threshold, current rating, reconnection delay and reset logic.</p>
          </div>
          <div class="faq-item">
            <h4>Can I use the same settings everywhere?</h4>
            <p>No. Supply quality, appliance sensitivity and local installation practice can change the preferred settings.</p>
          </div>
          <div class="faq-item">
            <h4>Why link this page to the advisor?</h4>
            <p>The guide solves the selection logic, while the advisor helps with destination-market documentation review.</p>
          </div>
        </div>
      `,
    },
    {
      id: "related-products",
      title: "Related Products and Next Steps",
      content: `
        <p>A complete electrical protection system typically includes more than a single Voltage Protector. Projects often combine these devices with related products such as circuit breakers, surge protection devices, and monitoring equipment to create a coordinated protection system.</p>
        <p>After completing the technical review, open the TPKELE Market Access Advisor to continue with the next step: checking likely market requirements, evidence expectations and buyer-facing compliance context for the target product and application.</p>
      `,
    },
  ],
  marketAccessAdvisor: {
    enabled: true,
    product: "voltage-protector",
    application: "Residential",
  },
};

export default voltageProtectorSelectionGuide;
