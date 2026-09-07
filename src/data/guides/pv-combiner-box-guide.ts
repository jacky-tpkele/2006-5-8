import { Guide } from "./index";

const pvCombinerBoxGuide: Guide = {
  slug: "pv-combiner-box-guide",
  title: "PV Combiner Box Selection Guide for Solar Projects",
  description: "Specify a PV combiner box by string quantity, protection architecture, enclosure class and project environment.",
  product: "PV Combiner Box",
  application: "Solar PV",
  sections: [
    {
      id: "selection-overview",
      title: "Selection Overview",
      content: `
        <p>Selecting the right PV Combiner Box is critical for safety, reliability and commercial success. In real projects, a product decision should reflect the electrical system, the installation conditions and the buyer's documentation expectations, not just a basic catalogue line. This guide is written to help procurement teams, engineers and distributors move from a general product name to a usable specification path.</p>
        <p>The correct PV Combiner Box selection process starts by understanding the actual application context. For TPKELE customers, this usually means matching product performance to solar PV, building electrical distribution or power-switching conditions, and then connecting the technical decision to quotation, export and project-delivery needs.</p>
        <div class="callout">Do not select a PV Combiner Box only by one headline parameter. Review system voltage, current, switching duty, coordination and application context together.</div>
      `,
    },
    {
      id: "what-is-it",
      title: "What is a PV Combiner Box?",
      content: `
        <p>A PV Combiner Box is a low-voltage electrical product used to perform a defined protective, switching, control or monitoring function inside the system. Its real value is not the device alone, but how accurately it matches the circuit, the environment and the maintenance expectations of the user.</p>
        <p>In project supply, buyers often compare similar-looking products across different brands. A better approach is to understand the operating duty, key ratings and the failure modes that the device must handle. That makes quotation more accurate and reduces risk during installation and commissioning.</p>
        <figure class="guide-figure">
          <img src="/images/guides/pv-combiner-box-guide/figure.png" alt="Functional selection view for PV Combiner Box" />
          <figcaption>Figure 1. Functional selection view for PV Combiner Box</figcaption>
        </figure>
      `,
    },
    {
      id: "key-selection-parameters",
      title: "Key Selection Parameters",
      content: `
        <p>Before comparing suppliers, buyers should list the parameters that truly determine whether the PV Combiner Box fits the project. Good product selection normally combines electrical ratings, application logic, physical arrangement and commercial documentation needs. That approach is more reliable than selecting by a model number alone.</p>
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
              <td>String Inputs</td>
              <td>Number of PV strings entering the box</td>
              <td>2 / 4 / 6 / 8 / 12+</td>
              <td>Defines internal architecture</td>
            </tr>
            <tr>
              <td>Protection Scheme</td>
              <td>Internal protective arrangement</td>
              <td>Fuse + SPD + Isolator</td>
              <td>Determines safety and maintenance logic</td>
            </tr>
            <tr>
              <td>Enclosure Class</td>
              <td>Environmental protection level</td>
              <td>IP65 / IP66</td>
              <td>Important for outdoor reliability</td>
            </tr>
            <tr>
              <td>Rated Voltage</td>
              <td>Maximum DC system voltage</td>
              <td>600V / 1000V / 1500V</td>
              <td>Must match the PV system</td>
            </tr>
            <tr>
              <td>Mounting / Cable Entry</td>
              <td>Practical installation details</td>
              <td>Wall / String routing</td>
              <td>Improves site integration</td>
            </tr>
          </tbody>
        </table>
      `,
    },
    {
      id: "application-match",
      title: "Application Matching",
      content: `
        <p>The same PV Combiner Box family can be used in different projects, but the best specification often changes with the application. Residential systems usually focus on compactness, ease of installation and stable everyday use. Commercial and industrial projects may require higher ratings, more coordination and deeper documentation for internal review or export submission.</p>
        <p>That is why TPKELE's content strategy connects every guide to a product-focused Market Access Advisor. The guide helps the user understand how to select the product technically, while the advisor helps convert that technical decision into a market-facing action plan.</p>
      `,
    },
    {
      id: "selection-workflow",
      title: "Recommended Selection Workflow",
      content: `
        <p>A practical selection workflow for PV Combiner Box starts with the electrical system and not the catalogue. Confirm the system voltage, current or load duty, application type, pole or functional arrangement, installation conditions and coordination requirements. Only after that should model comparison begin.</p>
        <p>Next, shortlist products that fit the technical envelope, check supporting documents such as datasheets or test reports, and then align the final choice with the buyer type. For example, a distributor may care more about standardized models and market breadth, while a project buyer may prioritize exact ratings, lead time and documentation completeness.</p>
        <figure class="guide-figure">
          <img src="/images/guides/pv-combiner-box-guide/quick-flow.png" alt="Quick selection workflow for PV Combiner Box" />
          <figcaption>Figure 2. Quick selection workflow for PV Combiner Box</figcaption>
        </figure>
      `,
    },
    {
      id: "standards-and-compliance",
      title: "Standards and Compliance Perspective",
      content: `
        <p>Technical standards and market-access expectations should be understood as related but separate topics. A technical standard helps define how a product is evaluated, tested or described. However, mentioning a standard does not automatically mean that every destination market imposes the same mandatory certification route for every product scope.</p>
        <p>For this reason, TPKELE's website architecture benefits from connecting guides to the Market Access Advisor. Users can read the selection article first, then open an advisor link with the product and application pre-filled. That makes the buying journey smoother and reduces the risk of mixing engineering standards with destination-market certification assumptions.</p>
      `,
    },
    {
      id: "common-mistakes",
      title: "Common Mistakes to Avoid",
      content: `
        <p>The most frequent mistake is selecting a PV Combiner Box by habit rather than by project conditions. Buyers may copy an old specification without checking if the new system voltage, environment, current level or use case has changed. Another mistake is assuming that all visually similar products from the market have the same internal performance or supporting evidence.</p>
        <p>Commercially, another error is waiting too long to review documents, labels or market-facing requirements. When this review happens late, quotation and shipment timelines become harder to control. A stronger process combines technical selection and document preparation from the beginning.</p>
      `,
    },
    {
      id: "faq",
      title: "FAQ",
      content: `
        <div class="faq-section">
          <div class="faq-item">
            <h4>What defines the combiner box size?</h4>
            <p>String quantity, protective devices, isolation requirements and enclosure layout all define the final box configuration.</p>
          </div>
          <div class="faq-item">
            <h4>Why is enclosure protection important?</h4>
            <p>Because UV, dust, rain and installation conditions directly affect reliability and safety.</p>
          </div>
          <div class="faq-item">
            <h4>Is a combiner box a single product or a configured assembly?</h4>
            <p>In many projects it is a configured assembly built around string count, fuse architecture, SPD choice and isolator arrangement.</p>
          </div>
          <div class="faq-item">
            <h4>How does the advisor help after selection?</h4>
            <p>It helps prepare for market and document discussions once the technical structure is clear.</p>
          </div>
        </div>
      `,
    },
    {
      id: "related-products",
      title: "Related Products and Next Steps",
      content: `
        <p>A complete buying decision usually includes more than a single PV Combiner Box. Users often compare related products that work in the same project package so that protection, switching and monitoring decisions remain coordinated.</p>
        <p>On the TPKELE website, every guide should therefore link to related product pages, downloadable resources and the Market Access Advisor. This structure helps turn informational traffic into qualified inquiry traffic.</p>
        <figure class="guide-figure">
          <img src="/images/guides/pv-combiner-box-guide/related-grid.png" alt="Related TPKELE product paths for PV Combiner Box" />
          <figcaption>Figure 3. Related TPKELE product paths for PV Combiner Box</figcaption>
        </figure>
      `,
    },
    {
      id: "conclusion",
      title: "Conclusion",
      content: `
        <p>A reliable PV Combiner Box decision combines product knowledge, application matching and documentation readiness. If you define the use case clearly and review the key parameters in a structured order, selection becomes faster and more accurate.</p>
        <p>After completing the technical review, open the TPKELE Market Access Advisor to continue with the next step: checking likely market requirements, evidence expectations and buyer-facing compliance context for the target product and application.</p>
      `,
    },
  ],
  marketAccessAdvisor: {
    enabled: true,
    product: "pv-combiner-box",
    application: "Solar PV",
  },
};

export default pvCombinerBoxGuide;
