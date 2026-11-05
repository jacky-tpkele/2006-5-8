/**
 * How to Specify a PV DC Combiner Box: Strings, Voltage, and Protection
 *
 * 由 TPKELE BLOG 图文工作台生成，请勿手工编辑结构。
 * 生成时间：2026-11-05T07:41:20.438Z
 */

import type { RichBlogArticle } from "@/lib/rich-blog/types";

export const article: RichBlogArticle = {
  "slug": "how-to-specify-a-pv-dc-combiner-box-strings-voltage-and-protection",
  "title": "How to Specify a PV DC Combiner Box: Strings, Voltage, and Protection",
  "seoTitle": "How to Specify a PV DC Combiner Box: Strings, Voltage, and Protection | TPKELE",
  "seoDescription": "PV DC combiners bring multiple array circuits into a defined output arrangement, but the required protection and enclosure depend on the system design. This gui",
  "canonical": "",
  "date": "2026-11-04",
  "readingTime": 3,
  "category": "selection-guides",
  "eyebrow": "PV DC Combiner Selection Guide",
  "lead": "PV DC combiners bring multiple array circuits into a defined output arrangement, but the required protection and enclosure depend on the system design. This guide will compare common configurations and identify the information buyers should provide before requesting a quotation.",
  "complianceNote": "PV DC combiner boxes are configured to project specifications; enclosure, protection, and approval requirements depend on the installed components and final application. Buyers must verify the complete assembly’s documentation and applicable EU, Australian/New Zealand, or North American requirements before ordering.",
  "heroImage": "https://res.cloudinary.com/dueuguqi1/image/upload/v1793795680/blog-studio/how-to-specify-a-pv-dc-combiner-box-strings-voltage-and-prot-Hero-mw23mtcv.webp",
  "heroImageCard": "https://res.cloudinary.com/dueuguqi1/image/upload/v1793795681/blog-studio/how-to-specify-a-pv-dc-combiner-box-strings-voltage-and-prot-Hero-mw23mtcv-card.webp",
  "heroImageAlt": "Hero",
  "ogImage": "https://res.cloudinary.com/dueuguqi1/image/upload/v1793795681/blog-studio/how-to-specify-a-pv-dc-combiner-box-strings-voltage-and-prot-Hero-mw23mtcv-card.webp",
  "journey": [],
  "quickNavigator": {
    "eyebrow": "",
    "title": "",
    "text": "",
    "cards": []
  },
  "sections": [
    {
      "id": "what-a-pv-dc-combiner-does",
      "inSidebar": true,
      "role": "intro",
      "heading": "What a PV DC Combiner Does",
      "blocks": [
        {
          "kind": "p",
          "html": "A PV DC combiner is installed between the PV strings and the inverter's DC input. It provides a defined point for string connections and, where the design calls for it, combines multiple string circuits into one or more output circuits. The assembly may also incorporate string overcurrent protection, DC isolation, and surge protection. Its configuration depends on the array layout, inverter inputs, and applicable installation requirements."
        },
        {
          "kind": "specGrid",
          "items": [
            {
              "label": "Complete assembly",
              "text": "The specified combination of enclosure, terminals, internal wiring, busbars, and fitted protection or switching devices."
            },
            {
              "label": "Enclosure",
              "text": "The housing that accommodates the components and provides the specified environmental protection; it is not, by itself, a complete combiner."
            },
            {
              "label": "Individual devices",
              "text": "Fuses, disconnectors, and surge protective devices perform specific functions. Their individual ratings do not establish the rating of the complete assembly."
            }
          ]
        },
        {
          "kind": "p",
          "html": "When reviewing a combiner specification, identify both the installed components and the ratings of the assembled unit. In particular, confirm the number of inputs and outputs, maximum DC voltage, current ratings, and enclosure protection rating for the specific model. An enclosure rating or a device datasheet alone does not describe the complete combiner configuration."
        }
      ]
    },
    {
      "id": "inside-a-typical-combiner",
      "inSidebar": true,
      "role": "detail",
      "heading": "Inside a Typical Combiner",
      "blocks": [
        {
          "kind": "p",
          "html": "A typical layout starts with separately identified string inputs and ends at output terminals sized for the combined circuit. Between them, the design may include string overcurrent protection, a DC isolating device, surge protection, and monitoring connections. Their presence and ratings follow the array design and applicable installation rules; the list is not a mandatory bill of materials for every combiner. IEC 62548-1 addresses PV array wiring, protection, switching, and earthing provisions. ([webstore.iec.ch](https://webstore.iec.ch/en/publication/110893?utm_source=openai))"
        },
        {
          "kind": "specGrid",
          "items": [
            {
              "label": "String inputs",
              "text": "Specify the number of inputs, connector or terminal arrangement, cable sizes, polarity identification, and maximum design voltage."
            },
            {
              "label": "Output terminals",
              "text": "Specify the number of outputs and terminal capacity against the calculated combined current and outgoing conductor size."
            },
            {
              "label": "Overcurrent protection",
              "text": "Where the design requires string protection, specify the protected conductors and device ratings. PV fuse-links are covered by IEC 60269-6; the need for them must be established from the array design. ([webstore.iec.ch](https://webstore.iec.ch/en/publication/68843?utm_source=openai))"
            },
            {
              "label": "Isolation",
              "text": "If isolation is to be provided inside the enclosure, define its location, pole arrangement, DC voltage and current ratings, and operating requirements. IEC 60947-3 covers switches and switch-disconnectors; confirm suitability for the specific device. ([webstore.iec.ch](https://webstore.iec.ch/en/publication/59785?utm_source=openai))"
            },
            {
              "label": "Surge protection",
              "text": "Where the surge assessment calls for a DC-side SPD, define its PV voltage rating, protection arrangement, and coordination requirements. IEC 61643-31 covers SPDs for the DC side of PV installations. ([webstore.iec.ch](https://webstore.iec.ch/en/publication/26931?utm_source=openai))"
            },
            {
              "label": "Optional monitoring",
              "text": "If required, define which strings or outputs need current measurement, status indication, or communications, together with auxiliary power and signal interfaces."
            }
          ]
        },
        {
          "kind": "callout",
          "tone": "info",
          "title": "Confirm the actual circuit arrangement",
          "html": "A switch, fuse, or SPD installed elsewhere in the system should not be assumed to be inside the combiner. Provide a single-line diagram showing device locations and the intended isolation boundary when specifying the enclosure. Confirm final component ratings and assembly requirements for the specific configuration and destination market."
        },
        {
          "kind": "figure",
          "url": "https://res.cloudinary.com/dueuguqi1/image/upload/v1793795709/blog-studio/how-to-specify-a-pv-dc-combiner-box-strings-voltage-and-prot-Product-Anatomy-mw23nfjd.webp",
          "alt": "Product Anatomy",
          "caption": "img-1",
          "width": 1408,
          "height": 768,
          "size": "md",
          "ratio": "original"
        }
      ]
    },
    {
      "id": "common-combiner-configurations",
      "inSidebar": true,
      "role": "comparison",
      "heading": "Common Combiner Configurations",
      "blocks": [
        {
          "kind": "p",
          "html": "Select the configuration from the array design, not the string count alone. The decision depends on whether parallel strings can drive reverse current into a faulted string, the module’s maximum series fuse rating, and the protection already provided elsewhere in the DC circuit. IEC 62548-1 addresses PV array wiring and electrical protection; IEC 61439-2 includes provisions for assemblies used in PV installations. For approval, identify the applicable requirements in the destination market and request evidence for the specific assembly configuration. ([webstore.iec.ch](https://webstore.iec.ch/en/publication/110893?utm_source=openai))"
        },
        {
          "kind": "comparison",
          "items": [
            {
              "title": "Fused combiner",
              "lines": [
                "Design condition: Use string-level overcurrent protection where the calculated reverse-current exposure or applicable installation requirements call for it.",
                "Protective function: Appropriately rated DC fuses protect individual string circuits; specify any required DC isolation and surge protection separately.",
                "Approval documents: Provide the string count, module and inverter data, maximum calculated DC voltage, current calculations, proposed fuse ratings, single-line diagram, and component and assembly rating evidence."
              ]
            },
            {
              "title": "Unfused combiner",
              "lines": [
                "Design condition: Consider only when the array design demonstrates that string-level overcurrent protection is not required.",
                "Protective function: Combines circuits without string fuses; any required isolation and surge protection must still be specified.",
                "Approval documents: Provide the reverse-current assessment, module maximum series fuse rating, conductor ratings, single-line diagram, and evidence supporting the proposed protection arrangement."
              ]
            },
            {
              "title": "Monitored combiner",
              "lines": [
                "Design condition: Specify when string-level current data or fault indication is needed for operation and maintenance; monitoring may be added to a fused or an unfused design.",
                "Protective function: Monitoring reports operating conditions but does not replace required overcurrent protection, isolation, or surge protection.",
                "Approval documents: Provide the underlying protection calculations plus the monitoring channel count, measurement requirements, communications protocol, auxiliary-power requirements, and wiring diagram."
              ]
            }
          ]
        },
        {
          "kind": "callout",
          "tone": "info",
          "title": "Approval is configuration-specific",
          "html": "Ask for the assembly drawing, rated DC voltage and current, enclosure rating, component schedule, and applicable verification or certification documents for the exact proposed build. Availability and approval of each feature must be confirmed for the specific model and destination market."
        },
        {
          "kind": "figure",
          "url": "https://res.cloudinary.com/dueuguqi1/image/upload/v1793795738/blog-studio/how-to-specify-a-pv-dc-combiner-box-strings-voltage-and-prot-Comparison-Infographic-mw23o1w8.webp",
          "alt": "Comparison Infographic",
          "caption": "img-2",
          "width": 1408,
          "height": 768,
          "size": "md",
          "ratio": "original"
        }
      ]
    },
    {
      "id": "specifications-to-confirm-before-selection",
      "inSidebar": true,
      "role": "core",
      "heading": "Specifications to Confirm Before Selection",
      "blocks": [
        {
          "kind": "p",
          "html": "Provide the array layout and site conditions with the quotation request, not just a nominal combiner voltage and string count. The supplier needs the module data, inverter input limits, and circuit arrangement to assess conductor and protection ratings. Confirm the following values for each combiner location, particularly where arrays with different orientations or module types are involved."
        },
        {
          "kind": "table",
          "head": [
            "Specification",
            "Information to provide",
            "Selection check"
          ],
          "rows": [
            [
              "String count",
              "Number of incoming strings, required outgoing circuits, and any planned spare inputs.",
              "Confirm terminal positions and whether strings are combined into one output or kept in separate groups."
            ],
            [
              "Maximum DC voltage",
              "Module open-circuit voltage, modules in series, and the site's minimum design temperature.",
              "Use the temperature-corrected maximum array voltage to check the ratings of every DC component; do not rely on nominal system voltage alone."
            ],
            [
              "Current and reverse current",
              "Module short-circuit current, strings in parallel, module maximum series fuse rating, and applicable design factors.",
              "Check output current and conductor ratings separately from possible reverse current into a faulted string; determine whether string overcurrent protection is required under the applicable installation rules."
            ],
            [
              "Fault ratings",
              "Calculated prospective fault current at the installation point and the required DC protective-device arrangement.",
              "Confirm DC breaking capacity, voltage rating, and any polarity or connection restrictions for the specific devices proposed."
            ],
            [
              "Enclosure protection",
              "Indoor or outdoor location, mounting position, ambient temperature range, and exposure to water, dust, UV, or corrosion.",
              "Specify the required installed IP rating under IEC 60529 and confirm enclosure material and environmental suitability for the site."
            ],
            [
              "Cable entries",
              "Incoming and outgoing cable quantities, outside diameters, conductor sizes, entry direction, and termination requirements.",
              "Confirm gland sizes, entry spacing, bending space, and that the completed entries maintain the required enclosure protection."
            ]
          ]
        },
        {
          "kind": "callout",
          "tone": "warn",
          "title": "Verify the complete assembly",
          "html": "A component rating does not establish the rating of the assembled combiner. Request the proposed assembly's rated DC voltage and current, protective-device specifications, and installed IP rating for the exact configuration. Confirm applicable local installation requirements and suitability of the specific model before approval."
        },
        {
          "kind": "figure",
          "url": "https://res.cloudinary.com/dueuguqi1/image/upload/v1793795469/blog-studio/how-to-specify-a-pv-dc-combiner-box-strings-voltage-and-prot-Selection-Flowchart-mw23iaem.webp",
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
      "id": "applications-from-rooftops-to-ground-mount-arrays",
      "inSidebar": true,
      "role": "comparison",
      "heading": "Applications from Rooftops to Ground-Mount Arrays",
      "blocks": [
        {
          "kind": "p",
          "html": "The installation layout determines where string circuits converge and whether a separate combiner is needed. Roof area, cable routes, and inverter location affect the practical number and placement of enclosures. Exposure, maintenance access, and the level of string-level monitoring required can then change the enclosure and internal arrangement."
        },
        {
          "kind": "comparison",
          "items": [
            {
              "title": "Small rooftop systems",
              "lines": [
                "A separate combiner may be unnecessary when a small number of strings connect directly to suitable inverter inputs.",
                "If installed outdoors, assess roof access, solar exposure, cable entry orientation, and the enclosure rating required at the mounting location."
              ]
            },
            {
              "title": "Large commercial rooftops",
              "lines": [
                "Strings spread across multiple roof zones may be grouped near their source to organize cable runs to the inverter.",
                "Confirm safe maintenance access and whether operations staff need circuit identification or string-level monitoring."
              ]
            },
            {
              "title": "Ground-mount arrays",
              "lines": [
                "Distributed array rows can require multiple field-mounted combiners, with output circuits routed toward central equipment.",
                "Specify for site-specific dust, rain, temperature, and UV exposure, and consider how technicians will isolate and inspect each field location."
              ]
            }
          ]
        },
        {
          "kind": "p",
          "html": "For any layout, place enclosures where cable routing remains practical and technicians can reach them without creating an avoidable access hazard. Monitoring requirements should be stated explicitly: total output measurement and individual string measurement call for different provisions. Final enclosure and component suitability must be confirmed against the specific installation conditions and equipment model."
        },
        {
          "kind": "figure",
          "url": "https://res.cloudinary.com/dueuguqi1/image/upload/v1793795502/blog-studio/how-to-specify-a-pv-dc-combiner-box-strings-voltage-and-prot-Application-Diagram-mw23izjp.webp",
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
      "id": "regional-documentation-and-approval-checks",
      "inSidebar": true,
      "role": "detail",
      "heading": "Regional Documentation and Approval Checks",
      "blocks": [
        {
          "kind": "p",
          "html": "Request a documentation package for the exact combiner configuration, including its model reference, drawing revision, and component schedule. Assembly ratings and approval evidence should match the quoted string count, DC voltage, current ratings, and installed protective devices. A certificate for an individual component does not establish compliance of the complete combiner assembly."
        },
        {
          "kind": "documentGrid",
          "items": [
            {
              "title": "Assembly drawings and component schedule",
              "text": "Request a single-line diagram, internal wiring diagram, general arrangement, terminal schedule, and bill of materials with manufacturer and part references. Drawings should identify polarity, earthing and bonding, cable entry provisions, and any required external protection."
            },
            {
              "title": "Component ratings and application limits",
              "text": "Obtain datasheets for fuse links and holders, switching devices, SPDs, terminals, and other installed equipment. Check DC voltage, current, breaking capacity or short-circuit rating as applicable, temperature derating, and permitted conductor sizes. Confirm ratings for the specified pole connections and PV earthing arrangement."
            },
            {
              "title": "Assembly verification and production tests",
              "text": "Request the declared assembly standard, supporting verification records, and routine verification or production test records. Where IEC 61439-1 and IEC 61439-2 are specified, request evidence covering applicable requirements such as temperature rise, dielectric properties, protective circuits, short-circuit withstand, and enclosure protection. Evidence should identify the assembly or design family covered and any limits on configuration changes."
            },
            {
              "title": "European Union documentation",
              "text": "Request the EU Declaration of Conformity identifying the exact product, applicable legislation, and standards used, together with marking and installation instructions. Ask for supporting technical evidence relevant to the quoted configuration. CE marking is a manufacturer declaration of conformity; any separate third-party certificate should be checked for its scope and model coverage."
            },
            {
              "title": "United States and Canada approval evidence",
              "text": "Confirm the assembly certification or field evaluation route required by the project and authority having jurisdiction. For the United States, request the relevant NRTL listing information where required; for Canada, request certification acceptable to the provincial or territorial authority. Verify the complete assembly designation, applicable standard, certification record, and conditions of acceptability."
            },
            {
              "title": "Australia and New Zealand documentation",
              "text": "Request evidence supporting the applicable assembly requirements, including AS/NZS 61439.1 and AS/NZS 61439.2 where specified, and installation information needed for compliance with AS/NZS 5033. Confirm any applicable supplier registration, declaration, or marking obligations for the destination and equipment classification. These requirements must be confirmed for the specific model and supply arrangement."
            }
          ]
        },
        {
          "kind": "p",
          "html": "Before purchase, reconcile the quotation, drawings, nameplate details, and approval records against the same configuration. Check certificate numbers and model coverage with the issuing body where verification is available, and resolve substitutions before release for manufacture. TPKELE certification status, available test evidence, and destination-market acceptance must be confirmed for the specific model."
        }
      ]
    },
    {
      "id": "send-your-combiner-specification",
      "inSidebar": true,
      "role": "cta",
      "heading": "Send Your Combiner Specification",
      "blocks": [
        {
          "kind": "p",
          "html": "For a configuration review, submit your single-line diagram and string data, including the number of strings, maximum DC voltage, and string current. State the installation location and destination market so the enclosure requirements and applicable documentation can be reviewed against the project conditions. Any proposed device ratings or approvals must be confirmed for the specific configuration."
        },
        {
          "kind": "contextAction",
          "title": "Submit your PV combiner requirements",
          "text": "Send the single-line diagram, string data, installation location, and destination market for a configuration review.",
          "href": "/contact",
          "label": "Contact TPKELE"
        }
      ]
    }
  ],
  "faq": [],
  "references": [],
  "internalLinks": [],
  "relatedProducts": [
    "metal-box-series",
    "plastic-box-series",
    "dc-mcb-2p",
    "dc-spd-2p"
  ],
  "inquiryProduct": "",
  "sidebarActionTitle": "Next Buyer Step",
  "sidebarActions": [
    {
      "label": "View METAL BOX SERIES",
      "href": "/products/metal-box-series"
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
  "intent": "Commercial research into PV DC combiner types, applications, and specifications before requesting a quote.",
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
