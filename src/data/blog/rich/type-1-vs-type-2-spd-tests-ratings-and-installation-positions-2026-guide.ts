/**
 * Type 1 vs Type 2 SPD: Tests, Ratings and Installation Positions (2026 Guide)
 *
 * 由 TPKELE BLOG 图文工作台生成，请勿手工编辑结构。
 * 生成时间：2026-11-07T02:42:24.254Z
 */

import type { RichBlogArticle } from "@/lib/rich-blog/types";

export const article: RichBlogArticle = {
  "slug": "type-1-vs-type-2-spd-tests-ratings-and-installation-positions-2026-guide",
  "title": "Type 1 vs Type 2 SPD: Tests, Ratings and Installation Positions (2026 Guide)",
  "seoTitle": "Type 1 vs Type 2 SPD: Tests, Ratings and Installation Positions (2026 Guide) | TPKELE",
  "seoDescription": "Type 1 and Type 2 SPDs are distinguished by their intended application and test classifications, not simply by which device has a higher current rating. This gu",
  "canonical": "",
  "date": "2026-11-07",
  "readingTime": 4,
  "category": "comparisons",
  "eyebrow": "AC Surge Protection Selection Guide",
  "lead": "Type 1 and Type 2 SPDs are distinguished by their intended application and test classifications, not simply by which device has a higher current rating. This guide will help buyers and panel engineers compare test waveforms, protection ratings and installation positions, then prepare a model-specific specification for quotation.",
  "complianceNote": "AC SPD requirements are addressed by IEC 61643-11:2025 and UL 1449; AS 1768:2021 addresses lightning protection system design in Australia. Buyers must verify the specific model's applicable test reports, EU conformity documentation, Australian approval or RCM requirements where applicable, or North American listing, as well as local installation rules before purchase. ([webstore.iec.ch](https://webstore.iec.ch/en/publication/65314?utm_source=openai))",
  "heroImage": "https://res.cloudinary.com/dueuguqi1/image/upload/v1794018918/blog-studio/type-1-vs-type-2-spd-tests-ratings-and-installation-position-Hero-mw5sjkqd.webp",
  "heroImageCard": "https://res.cloudinary.com/dueuguqi1/image/upload/v1794018919/blog-studio/type-1-vs-type-2-spd-tests-ratings-and-installation-position-Hero-mw5sjkqd-card.webp",
  "heroImageAlt": "Hero",
  "ogImage": "https://res.cloudinary.com/dueuguqi1/image/upload/v1794018919/blog-studio/type-1-vs-type-2-spd-tests-ratings-and-installation-position-Hero-mw5sjkqd-card.webp",
  "journey": [],
  "quickNavigator": {
    "eyebrow": "",
    "title": "",
    "text": "",
    "cards": []
  },
  "sections": [
    {
      "id": "why-the-type-1-vs-type-2-distinction-matters",
      "inSidebar": true,
      "role": "intro",
      "heading": "Why the Type 1 vs Type 2 Distinction Matters",
      "blocks": [
        {
          "kind": "p",
          "html": "An SPD cannot be selected by comparing discharge-current figures alone. The first question is which standard and installation position the specification addresses: IEC 61643-11 classifies AC SPDs by test class, while UL 1449 uses Type designations tied to installation conditions. Treating these labels as interchangeable can lead to a device being specified for the wrong duty or location."
        },
        {
          "kind": "callout",
          "tone": "info",
          "title": "Similar labels, different classifications",
          "html": "Under IEC 61643-11, Type 1 corresponds to Class I testing, which includes an impulse-current test using a 10/350 µs waveform; Type 2 corresponds to Class II testing using an 8/20 µs discharge-current waveform. Under UL 1449, a Type 1 SPD may be installed on the line or load side of the service equipment overcurrent device, whereas a Type 2 SPD is installed on its load side. An IEC Type 1 designation does not establish a UL Type 1 listing, or vice versa."
        },
        {
          "kind": "p",
          "html": "For an IEC-based specification, identify the required test class, impulse or nominal discharge-current rating, voltage protection level and intended position in the installation. For a UL-based project, confirm the required UL 1449 Type, installation location and applicable voltage and short-circuit ratings. In either case, confirm the published ratings and approvals for the specific model before placing it on a bill of materials."
        }
      ]
    },
    {
      "id": "how-type-1-and-type-2-spds-are-tested",
      "inSidebar": true,
      "role": "comparison",
      "heading": "How Type 1 and Type 2 SPDs Are Tested",
      "blocks": [
        {
          "kind": "p",
          "html": "IEC 61643-11 distinguishes Type 1 and Type 2 AC SPDs through different test classes and impulse waveforms. The Class I test uses a 10/350 µs current impulse, while the Class II test uses an 8/20 µs current impulse. Because these waveforms differ substantially in duration and energy, their stated current values cannot be compared as interchangeable performance rankings."
        },
        {
          "kind": "table",
          "head": [
            "Test characteristic",
            "Type 1 SPD",
            "Type 2 SPD"
          ],
          "rows": [
            [
              "IEC 61643-11 test classification",
              "Class I",
              "Class II"
            ],
            [
              "Current impulse waveform",
              "10/350 µs",
              "8/20 µs"
            ],
            [
              "Relevant declared current",
              "Impulse discharge current, Iimp",
              "Nominal discharge current, In"
            ],
            [
              "What the test evaluates",
              "Performance under the specified Class I impulse test conditions",
              "Performance under the specified Class II impulse test conditions"
            ]
          ]
        },
        {
          "kind": "callout",
          "tone": "warn",
          "title": "Do not rank Iimp against In",
          "html": "A Type 1 Iimp value and a Type 2 In value describe results from different tests. Specify the required test class and waveform first, then compare declared ratings and test evidence for the particular models under consideration."
        },
        {
          "kind": "figure",
          "url": "https://res.cloudinary.com/dueuguqi1/image/upload/v1794018949/blog-studio/type-1-vs-type-2-spd-tests-ratings-and-installation-position-Comparison-Infographic-mw5sk8b1.webp",
          "alt": "Comparison Infographic",
          "caption": "img-1",
          "width": 1408,
          "height": 768,
          "size": "md",
          "ratio": "original"
        }
      ]
    },
    {
      "id": "where-each-spd-fits-in-an-ac-installation",
      "inSidebar": true,
      "role": "core",
      "heading": "Where Each SPD Fits in an AC Installation",
      "blocks": [
        {
          "kind": "p",
          "html": "SPD location should be selected from the installation’s exposure, earthing arrangement, incoming supply, and required protection zone—not from the device label alone. A Type 1 SPD is generally considered at the service entrance or main distribution point where part of the lightning current may enter the installation, particularly where an external lightning protection system or overhead supply increases exposure. A Type 2 SPD is normally installed downstream in a main or sub-distribution board to limit switching and residual surge voltages after the service-entry stage."
        },
        {
          "kind": "comparison",
          "items": [
            {
              "title": "Service entrance or main distribution board",
              "lines": [
                "Use a Type 1 or Type 1+2 SPD when the installation may be exposed to direct or partial lightning current, subject to the earthing system and the applicable national rules.",
                "Position the device close to the origin of the installation, with short, low-inductance connecting conductors and suitable upstream overcurrent protection.",
                "Confirm the required impulse current rating, voltage protection level, short-circuit withstand, and conductor arrangement from the project risk assessment and the specific product data sheet."
              ]
            },
            {
              "title": "Downstream distribution or final circuit panel",
              "lines": [
                "Use a Type 2 SPD where the principal requirement is protection against induced lightning effects and switching overvoltages within the installation.",
                "Install it in a main distribution board, sub-board, control panel, or other suitable location close to the circuits and equipment requiring protection.",
                "Check the system voltage, earthing configuration, backup protection, and the manufacturer’s permitted connection scheme before selection."
              ]
            },
            {
              "title": "Coordinated protection at multiple locations",
              "lines": [
                "Use staged protection when the installation is large, has multiple distribution boards, long cable runs, sensitive equipment, or different exposure levels between buildings and panels.",
                "A typical arrangement is Type 1 or Type 1+2 at the service entrance followed by Type 2 devices in downstream boards; Type 3 protection may be added close to particularly sensitive loads where required.",
                "Coordination must be verified using the manufacturer’s installation instructions, specified cable lengths or decoupling requirements, and the applicable installation standard. Do not assume that two SPDs are coordinated solely because they have different Type classifications."
              ]
            }
          ]
        },
        {
          "kind": "p",
          "html": "Exposure assessment should consider overhead or underground supply, lightning protection on the building, local lightning activity, building-to-building cable routes, the length of downstream circuits, and the sensitivity or service continuity requirements of connected equipment. For projects designed to IEC practices, the selection and installation should be checked against IEC 61643-11 and the relevant requirements of IEC 60364-5-53; European, US, Australian, and New Zealand installations may require additional national provisions. The final quotation should state the installation position, system configuration, Uc, protection level, discharge or impulse current rating, backup protection, and coordination method, with values confirmed for the specific model."
        },
        {
          "kind": "figure",
          "url": "https://res.cloudinary.com/dueuguqi1/image/upload/v1794018971/blog-studio/type-1-vs-type-2-spd-tests-ratings-and-installation-position-Application-Diagram-mw5skpdu.webp",
          "alt": "Application Diagram",
          "caption": "img-2",
          "width": 1408,
          "height": 768,
          "size": "md",
          "ratio": "original"
        }
      ]
    },
    {
      "id": "ratings-to-check-before-specifying-a-model",
      "inSidebar": true,
      "role": "detail",
      "heading": "Ratings to Check Before Specifying a Model",
      "blocks": [
        {
          "kind": "p",
          "html": "Compare the ratings against the installation’s nominal voltage, earthing arrangement and prospective fault conditions. Confirm the applicable SPD product standard and the exact rating definitions on the manufacturer’s datasheet; similar-looking values may use different test waveforms or measurement conventions. The figures below are selection checks, not a substitute for model-specific coordination and installation instructions."
        },
        {
          "kind": "specGrid",
          "items": [
            {
              "label": "Uc or MCOV",
              "text": "Maximum continuous operating voltage: the highest RMS AC voltage, or DC voltage where applicable, that may be applied continuously to the SPD’s protection mode. Select it for the system voltage and earthing arrangement, including credible temporary overvoltage conditions; verify the definition and value for the specific model."
            },
            {
              "label": "Up or VPR",
              "text": "Up is the declared voltage protection level, typically expressed in kV; VPR is a UL voltage protection rating, expressed in volts. They are not interchangeable labels. Check the rating under the applicable standard and compare it with the withstand level of the equipment, allowing for additional voltage drop across connecting conductors."
            },
            {
              "label": "Iimp",
              "text": "Impulse current rating associated with the Type 1 test using the 10/350 μs waveform. Check the declared value per pole or protection mode and the required test classification for the application. Do not compare Iimp directly with an 8/20 μs current rating as though the waveforms were equivalent."
            },
            {
              "label": "In",
              "text": "Nominal discharge current, typically specified with the 8/20 μs waveform for Type 2 testing. Confirm whether the datasheet states the value per pole or for another configuration, and check any separately declared maximum discharge current (Imax) where relevant."
            },
            {
              "label": "Backup protection",
              "text": "Check the specified upstream fuse or circuit-breaker type and maximum rating, plus any conditions under which separate backup protection is required. Follow the SPD manufacturer’s coordination instructions and local installation rules; do not infer compatibility from the SPD current ratings alone."
            },
            {
              "label": "Prospective short-circuit conditions",
              "text": "Verify the installation’s prospective short-circuit current and the SPD’s declared short-circuit current rating or conditional short-circuit rating, including any required backup protective device. The assembly must satisfy the applicable fault-current and disconnection requirements."
            },
            {
              "label": "Connection configuration",
              "text": "Confirm the supported system and protection modes, such as L-N, L-PE and N-PE, or the manufacturer’s specified multipole arrangement. Check conductor routing, terminal capacity, required disconnector arrangement and the manufacturer’s instructions for the relevant earthing system."
            },
            {
              "label": "Indication options",
              "text": "Check whether status indication is visual, remote-contact, or both; confirm what the indication represents and how remote contacts are wired and monitored. Verify whether replaceable cartridges and a compatible replacement module are available for the selected model."
            }
          ]
        },
        {
          "kind": "callout",
          "tone": "warn",
          "title": "Confirm against the exact model",
          "html": "Ratings, backup-device limits, short-circuit conditions and connection diagrams vary by model and market. Obtain the current datasheet and installation instructions for the exact configuration; where a value or compatibility condition is not explicitly stated, confirm it with the manufacturer before specifying."
        },
        {
          "kind": "figure",
          "url": "https://res.cloudinary.com/dueuguqi1/image/upload/v1794018993/blog-studio/type-1-vs-type-2-spd-tests-ratings-and-installation-position-Selection-Flowchart-mw5sl6od.webp",
          "alt": "Selection Flowchart",
          "caption": "img-3",
          "width": 1408,
          "height": 768,
          "size": "md",
          "ratio": "original"
        }
      ]
    },
    {
      "id": "selection-examples-ac-panels-pv-systems",
      "inSidebar": true,
      "role": "example",
      "heading": "Selection Examples for AC Panels and PV Systems",
      "blocks": [
        {
          "kind": "p",
          "html": "For a building AC distribution board, select the SPD for the supply system, the board’s installation position and the applicable installation standard. A Type 2 SPD is commonly specified at a distribution board where the installation assessment calls for protection against induced surges; a Type 1 or combined Type 1+2 device may be required where the assessed lightning-current risk and installation arrangement call for it. Confirm the required voltage protection level (Up), maximum continuous operating voltage (Uc), short-circuit withstand and backup protection with the specific device data and project requirements."
        },
        {
          "kind": "table",
          "head": [
            "Application point",
            "Selection focus",
            "Specification notes"
          ],
          "rows": [
            [
              "Building AC distribution board",
              "AC system voltage and earthing arrangement; Type 1, Type 2 or Type 1+2 classification as required by the installation assessment",
              "State the installation position, required Uc and Up, short-circuit conditions, and any required backup overcurrent protection. Confirm coordination with upstream and downstream protective devices."
            ],
            [
              "PV inverter AC connection",
              "AC supply characteristics at the inverter connection and the protection required for that installation point",
              "Specify an AC SPD for the AC system and its earthing arrangement. Select its type and ratings from the site assessment and applicable installation requirements; do not infer the required type from the inverter alone."
            ],
            [
              "PV array DC circuit",
              "PV DC voltage and current conditions, array configuration, inverter limits, and exposure at the DC installation point",
              "Specify separately for the DC application. Confirm the SPD's DC operating voltage and ratings, polarity and circuit arrangement, and compatibility with the PV system and inverter using model-specific documentation."
            ]
          ]
        },
        {
          "kind": "callout",
          "tone": "warn",
          "title": "AC and PV DC require separate specifications",
          "html": "An AC SPD is not interchangeable with a PV DC SPD. A PV DC-side device requires a separate, application-specific specification based on the array's maximum system voltage, circuit configuration, inverter limits and applicable installation requirements. Verify all ratings and suitability against the exact device documentation before quotation or installation."
        },
        {
          "kind": "figure",
          "url": "https://res.cloudinary.com/dueuguqi1/image/upload/v1794019019/blog-studio/type-1-vs-type-2-spd-tests-ratings-and-installation-position-Application-Diagram-mw5slqpe.webp",
          "alt": "Application Diagram",
          "caption": "img-4",
          "width": 1408,
          "height": 768,
          "size": "md",
          "ratio": "original"
        }
      ]
    },
    {
      "id": "documentation-and-questions-for-suppliers",
      "inSidebar": true,
      "role": "core",
      "heading": "Documentation and Questions for Suppliers",
      "blocks": [
        {
          "kind": "p",
          "html": "Request documents for the exact SPD model, pole configuration and voltage variant proposed for the project. A product-family brochure alone does not establish the ratings, test classification or installation requirements of a specific variant. Ask the supplier to identify the applicable standard and the market for which each test report or listing applies."
        },
        {
          "kind": "documentGrid",
          "items": [
            {
              "title": "Model-specific datasheet",
              "text": "Obtain the full model designation, Type 1 or Type 2 classification, electrical ratings, terminal specifications, dimensions and any required external backup protection."
            },
            {
              "title": "Test or listing evidence",
              "text": "Request a report or listing record that identifies the proposed model and applicable standard, such as IEC 61643-11 or UL 1449. Confirm that its scope covers the quoted configuration and intended market."
            },
            {
              "title": "Wiring diagram",
              "text": "Request the connection diagram for the proposed earthing system and pole arrangement, including protective-device placement and any remote indication contacts."
            },
            {
              "title": "Installation instructions",
              "text": "Obtain the manufacturer's requirements for conductor size, terminal torque, mounting, lead length, backup protection and replacement of plug-in modules, where applicable."
            }
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Does the evidence identify the exact order code being quoted, including any replaceable module?",
            "Are the wiring diagram and installation instructions applicable to the project's supply voltage and earthing arrangement?",
            "Which protective device, if any, does the manufacturer require upstream of this specific SPD model?"
          ]
        }
      ]
    },
    {
      "id": "review-tpkele-spd-options-and-request-a-quote",
      "inSidebar": true,
      "role": "cta",
      "heading": "Review TPKELE SPD Options and Request a Quote",
      "blocks": [
        {
          "kind": "p",
          "html": "Review the documented AC SPD models at <a href=\"/products/ac-spd\">TPKELE AC SPDs</a> before requesting a quotation. Include the system voltage, earthing arrangement and intended installation position in your inquiry. Specify the required SPD type, maximum continuous operating voltage (Uc), voltage protection level (Up) and applicable discharge-current rating; confirm availability and values against the specific model documentation."
        },
        {
          "kind": "productAction",
          "eyebrow": "AC SPD selection",
          "title": "Compare AC SPD Models",
          "text": "Check model-specific ratings, then request a quote with your electrical system details and required protection ratings.",
          "href": "/products/ac-spd",
          "label": "View AC SPDs"
        }
      ]
    }
  ],
  "faq": [],
  "references": [],
  "internalLinks": [],
  "relatedProducts": [
    "ac-spd",
    "ac-spd-4p",
    "dc-spd",
    "dc-spd-2p"
  ],
  "inquiryProduct": "",
  "sidebarActionTitle": "Next Buyer Step",
  "sidebarActions": [
    {
      "label": "View AC SPD",
      "href": "/products/ac-spd"
    },
    {
      "label": "Check Market Access",
      "href": "/resources/market-access-advisor"
    },
    {
      "label": "Prepare Documents",
      "href": "/resources/buyer-support"
    },
    {
      "label": "Ask TPKELE",
      "href": "/contact"
    }
  ],
  "intent": "Commercial research to compare Type 1 and Type 2 SPDs before specifying a device or requesting a quote.",
  "disclaimer": "",
  "about": [],
  "layout": {
    "sidebar": "fixed",
    "showJourney": false,
    "defaultFigureSize": "md"
  },
  "mainKeyword": "",
  "subKeywords": []
};

export default article;
