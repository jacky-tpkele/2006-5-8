/**
 * How to Select an SPD: Type 1, Type 2, and Type 1+2 for AC and Solar DC Systems
 *
 * 由 TPKELE BLOG 图文工作台生成，请勿手工编辑结构。
 * 生成时间：2026-11-24T02:45:31.623Z
 */

import type { RichBlogArticle } from "@/lib/rich-blog/types";

export const article: RichBlogArticle = {
  "slug": "how-to-select-an-spd-type-1-type-2-and-type-12-for-ac-and-solar-dc-systems",
  "title": "How to Select an SPD: Type 1, Type 2, and Type 1+2 for AC and Solar DC Systems",
  "seoTitle": "How to Select an SPD: Type 1, Type 2, and Type 1+2 for AC and Solar DC Systems | TPKELE",
  "seoDescription": "This guide helps buyers and panel engineers distinguish AC from photovoltaic DC surge protection and determine when Type 1, Type 2, or a coordinated Type 1+2 so",
  "canonical": "",
  "date": "2026-11-23",
  "readingTime": 4,
  "category": "selection-guides",
  "eyebrow": "Surge Protection Selection Guide",
  "lead": "This guide helps buyers and panel engineers distinguish AC from photovoltaic DC surge protection and determine when Type 1, Type 2, or a coordinated Type 1+2 solution is appropriate. It identifies the ratings, installation details, and model-specific compliance documents to check before ordering.",
  "complianceNote": "SPD selection should be checked against IEC 61643-11 for AC power systems, IEC 61643-31 for photovoltaic DC applications, and applicable regional requirements, including UL 1449 in North America. Buyers must verify the specific model’s declared ratings, conformity or listing documents, and local installation requirements before purchase.",
  "heroImage": "https://res.cloudinary.com/dueuguqi1/image/upload/v1795488015/blog-studio/how-to-select-an-spd-type-1-type-2-and-type-12-for-ac-and-so-Hero-mwu37f4v.webp",
  "heroImageCard": "https://res.cloudinary.com/dueuguqi1/image/upload/v1795488016/blog-studio/how-to-select-an-spd-type-1-type-2-and-type-12-for-ac-and-so-Hero-mwu37f4v-card.webp",
  "heroImageAlt": "Hero",
  "ogImage": "https://res.cloudinary.com/dueuguqi1/image/upload/v1795488016/blog-studio/how-to-select-an-spd-type-1-type-2-and-type-12-for-ac-and-so-Hero-mwu37f4v-card.webp",
  "journey": [],
  "quickNavigator": {
    "eyebrow": "",
    "title": "",
    "text": "",
    "cards": []
  },
  "sections": [
    {
      "id": "start-with-the-system-and-surge-exposure",
      "inSidebar": true,
      "role": "step",
      "heading": "Start with the system and surge exposure",
      "blocks": [
        {
          "kind": "p",
          "html": "Before comparing SPDs, document the electrical system and the equipment to be protected. Identify whether each installation point is on an AC supply or a photovoltaic DC circuit; the two require different SPD ratings and product standards. Record the supply configuration, operating voltage, and earthing arrangement at each point. Then assess lightning exposure and the location of sensitive equipment."
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Supply and voltage: Record AC phase configuration and nominal voltage, or the photovoltaic string's maximum expected DC voltage under the site's lowest design temperature.",
            "Earthing: Identify the AC earthing arrangement, such as TN, TT, or IT, and whether the photovoltaic DC conductors are earthed or unearthed.",
            "Exposure: Note any external lightning protection system, overhead supply, exposed photovoltaic array, and site-specific lightning risk assessment.",
            "Protected equipment: Locate the main switchboard, downstream distribution boards, inverter, control equipment, and other surge-sensitive loads."
          ]
        },
        {
          "kind": "p",
          "html": "These inputs establish where surge protection is needed and which circuits require separate AC and DC devices. An external lightning protection system or a credible direct-lightning-current exposure may affect the required SPD type at the service entrance or array boundary. Final selection should follow the site's lightning risk assessment, applicable local installation rules, and the ratings and connection diagrams for the specific SPD model."
        }
      ]
    },
    {
      "id": "choose-type-1-type-2-or-type-1-plus-2",
      "inSidebar": true,
      "role": "comparison",
      "heading": "Choose Type 1, Type 2, or a coordinated Type 1+2 solution",
      "blocks": [
        {
          "kind": "p",
          "html": "Select the SPD type for its installation position and the impulse current it must withstand. Type 1 is used where lightning current may enter the installation; Type 2 is used where the expected duty is induced or switching surges. For AC systems, check classification against IEC 61643-11; for photovoltaic DC circuits, check IEC 61643-31. The same type number does not make an AC SPD suitable for a PV DC circuit."
        },
        {
          "kind": "comparison",
          "items": [
            {
              "title": "Type 1",
              "lines": [
                "Typically installed at the service entrance or another boundary where partial lightning current may be present.",
                "Class I testing includes the 10/350 µs impulse current, Iimp."
              ]
            },
            {
              "title": "Type 2",
              "lines": [
                "Typically installed in distribution boards or near equipment requiring local surge protection, subject to the installation design.",
                "Class II testing uses the 8/20 µs nominal discharge current, In."
              ]
            },
            {
              "title": "Type 1+2",
              "lines": [
                "A combined device may serve a position requiring both Type 1 and Type 2 performance.",
                "The specific product must have documented Class I and Class II test results; the designation alone does not establish coordination with other SPDs."
              ]
            }
          ]
        },
        {
          "kind": "callout",
          "tone": "warn",
          "title": "Verify the exact product",
          "html": "Before specifying a Type 1+2 SPD, obtain the model-specific datasheet and test documentation showing the applicable standard, Iimp (10/350 µs), and In (8/20 µs). For an installation with multiple SPDs, verify coordination and required separation or decoupling against the manufacturers’ instructions. Confirm that the documented ratings apply to the intended AC or PV DC circuit."
        },
        {
          "kind": "figure",
          "url": "https://res.cloudinary.com/dueuguqi1/image/upload/v1795488067/blog-studio/how-to-select-an-spd-type-1-type-2-and-type-12-for-ac-and-so-Comparison-Infographic-mwu38ja3.webp",
          "alt": "Comparison Infographic",
          "caption": "img-1",
          "width": 1254,
          "height": 1254,
          "size": "md",
          "ratio": "original"
        }
      ]
    },
    {
      "id": "check-the-ratings-that-govern-selection",
      "inSidebar": true,
      "role": "core",
      "heading": "Check the ratings that govern selection",
      "blocks": [
        {
          "kind": "p",
          "html": "Compare SPD ratings only after confirming the applicable circuit, protection mode, and test standard: IEC 61643-11 for low-voltage AC SPDs or IEC 61643-31 for photovoltaic DC SPDs. Uc and Up address continuous voltage and the declared protection level, while In, Imax, and Iimp describe different surge-current tests. A larger discharge-current figure alone does not establish that an SPD is suitable for the installation."
        },
        {
          "kind": "specGrid",
          "items": [
            {
              "label": "Uc",
              "text": "Maximum continuous operating voltage. For PV DC devices, check the declared maximum continuous PV operating voltage, Ucpv, against the maximum array voltage under the site's coldest design conditions."
            },
            {
              "label": "Up",
              "text": "Declared voltage protection level under the specified test conditions. Compare it with the protected equipment's impulse withstand voltage, allowing for additional voltage across connection leads."
            },
            {
              "label": "In",
              "text": "Nominal discharge current for repeated 8/20 µs current impulses. Check the declared value for the relevant protection mode."
            },
            {
              "label": "Imax",
              "text": "Maximum discharge current for an 8/20 µs impulse. It is not interchangeable with In and does not, by itself, demonstrate Type 1 capability."
            },
            {
              "label": "Iimp",
              "text": "Impulse discharge current associated with Type 1 testing, using a 10/350 µs impulse. Compare declared values and test conditions for the relevant protection mode."
            }
          ]
        },
        {
          "kind": "table",
          "head": [
            "Selection check",
            "AC system",
            "Solar PV DC system"
          ],
          "rows": [
            [
              "Continuous voltage",
              "Verify Uc against the voltage sustained across each protection mode, including the earthing arrangement.",
              "Verify Ucpv against the maximum PV array voltage, including the temperature-corrected open-circuit voltage."
            ],
            [
              "Protection level",
              "Check the declared Up for the applicable mode against equipment withstand and installation lead effects.",
              "Check the declared Up for the applicable PV protection mode against inverter or other equipment withstand and installation lead effects."
            ],
            [
              "Discharge capability",
              "Compare In, Imax, and, where Type 1 performance is required, Iimp using their declared waveforms and test conditions.",
              "Compare the values declared under IEC 61643-31 for the required PV SPD class; do not substitute an AC SPD rating."
            ]
          ]
        },
        {
          "kind": "p",
          "html": "Read all values from the same model's datasheet and test documentation, including the stated protection mode and any conditions attached to the rating. Do not rank an SPD with a higher Imax above another device without checking its Uc or Ucpv, Up, In, and applicable Iimp. Confirm model-specific declarations before ordering, especially when comparing Type 1+2 devices whose published ratings may use different test conditions."
        },
        {
          "kind": "figure",
          "url": "https://res.cloudinary.com/dueuguqi1/image/upload/v1795488122/blog-studio/how-to-select-an-spd-type-1-type-2-and-type-12-for-ac-and-so-Specification-Diagram-mwu39psz.webp",
          "alt": "Specification Diagram",
          "caption": "img-2",
          "width": 1254,
          "height": 1254,
          "size": "md",
          "ratio": "original"
        }
      ]
    },
    {
      "id": "separate-ac-and-photovoltaic-dc-requirements",
      "inSidebar": true,
      "role": "comparison",
      "heading": "Separate AC and photovoltaic DC requirements",
      "blocks": [
        {
          "kind": "p",
          "html": "Select AC and photovoltaic (PV) DC SPDs against their respective circuit conditions. On the AC side, record the nominal system voltage, single- or three-phase configuration, earthing arrangement, and whether a neutral conductor is present; these determine the required connection modes and help establish the appropriate continuous operating voltage (Uc). On the PV side, calculate the maximum array open-circuit voltage at the lowest expected temperature, including applicable design tolerances, and select a DC-rated SPD with a declared PV application and a maximum continuous PV voltage (Ucpv) at least as high as that value. Confirm the applicable voltage and connection arrangement against the specific model documentation."
        },
        {
          "kind": "table",
          "head": [
            "Application",
            "System information to confirm",
            "SPD documentation to check"
          ],
          "rows": [
            [
              "AC distribution",
              "Nominal voltage, phase and neutral configuration, and earthing arrangement (such as TN-S, TN-C, or TT).",
              "Declared Uc, connection modes, wiring diagram, and the applicable IEC 61643-11 documentation for the specific model."
            ],
            [
              "PV DC circuit",
              "Maximum array open-circuit voltage under the lowest expected operating temperature and the DC conductor configuration.",
              "Declared PV application, Ucpv, DC connection diagram, and the applicable IEC 61643-31 documentation for the specific model."
            ]
          ]
        },
        {
          "kind": "callout",
          "tone": "warn",
          "title": "Do not assume AC and PV DC ratings are interchangeable",
          "html": "An SPD specified only for AC service is not, on that basis, suitable for a PV DC circuit. Check the specific model's declared PV application and DC voltage rating before ordering; a Type designation alone does not establish DC suitability."
        },
        {
          "kind": "figure",
          "url": "https://res.cloudinary.com/dueuguqi1/image/upload/v1795488194/blog-studio/how-to-select-an-spd-type-1-type-2-and-type-12-for-ac-and-so-Application-Diagram-mwu3b9ka.webp",
          "alt": "Application Diagram",
          "caption": "img-3",
          "width": 1254,
          "height": 1254,
          "size": "md",
          "ratio": "original"
        }
      ]
    },
    {
      "id": "verify-installation-and-coordination-details",
      "inSidebar": true,
      "role": "detail",
      "heading": "Verify installation and coordination details",
      "blocks": [
        {
          "kind": "p",
          "html": "An SPD's performance depends on how it is installed as well as its selected ratings. Before ordering, check the proposed mounting position, connection layout, upstream protection and earthing arrangement against the specific manufacturer's instructions. Where SPDs are installed at more than one point, confirm how the devices are coordinated."
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Place the SPD at the intended protection boundary and as close as practicable to the equipment or conductors it protects, subject to the manufacturer's mounting and wiring requirements.",
            "Keep the supply and protective-earth connection leads short and direct. Check the manufacturer's permitted lead lengths and wiring arrangement; lead impedance adds to the voltage seen by protected equipment during a surge.",
            "Verify whether a dedicated upstream fuse or circuit breaker is required. Match its type and rating to the manufacturer's specified backup protection and the available prospective short-circuit current.",
            "Confirm the protective-earth connection, conductor size and bonding arrangement for the installation. For photovoltaic DC circuits, check that the specified connection scheme is compatible with the array's earthing configuration.",
            "For upstream and downstream SPDs, follow the selected manufacturer's coordination instructions, including any minimum cable separation or required decoupling device. Do not assume that devices from different product ranges coordinate solely because their types and voltage ratings appear compatible."
          ]
        },
        {
          "kind": "callout",
          "tone": "warn",
          "title": "Confirm the installation diagram for the exact model",
          "html": "Backup protection, terminal connections, earthing and coordination distances are model-specific. Obtain the installation instructions for each proposed AC or photovoltaic DC SPD before finalizing the panel layout or bill of materials."
        },
        {
          "kind": "figure",
          "url": "https://res.cloudinary.com/dueuguqi1/image/upload/v1795488231/blog-studio/how-to-select-an-spd-type-1-type-2-and-type-12-for-ac-and-so-Installation-Diagram-mwu3c23f.webp",
          "alt": "Installation Diagram",
          "caption": "img-4",
          "width": 1254,
          "height": 1254,
          "size": "md",
          "ratio": "original"
        }
      ]
    },
    {
      "id": "request-evidence-before-placing-an-order",
      "inSidebar": true,
      "role": "cta",
      "heading": "Request evidence before placing an order",
      "blocks": [
        {
          "kind": "p",
          "html": "Before ordering, request documents for the exact SPD model and configuration quoted, including its pole arrangement and AC or photovoltaic DC application. Check that the declared ratings and installation requirements match the project specification. Do not treat a product-family statement as evidence for every variant."
        },
        {
          "kind": "documentGrid",
          "items": [
            {
              "title": "Model-specific datasheet",
              "text": "Request the rated voltage, maximum continuous operating voltage, discharge-current ratings, voltage protection level, and Type classification. For photovoltaic DC models, confirm the stated DC voltage rating and application."
            },
            {
              "title": "Test or listing evidence",
              "text": "Request test reports or listing documents identifying the exact model and applicable standard, such as IEC 61643-11 for AC SPDs or IEC 61643-31 for photovoltaic DC SPDs. For projects requiring a regional listing, verify its scope and current status against the specified market requirements."
            },
            {
              "title": "Wiring diagram",
              "text": "Request a diagram showing the connection arrangement, protective-earth connection, required upstream protection, and remote signalling contacts where fitted."
            },
            {
              "title": "Installation instructions",
              "text": "Request terminal and conductor requirements, tightening torque, mounting conditions, permitted ambient conditions, and any specified backup-protection or coordination requirements."
            }
          ]
        },
        {
          "kind": "contextAction",
          "title": "Confirm the quoted SPD",
          "text": "Check the relevant TPKELE AC or photovoltaic DC SPD product page, or send the system details and project requirements with an inquiry to obtain documents for the specific model.",
          "href": "/contact",
          "label": "Request model-specific documents"
        }
      ]
    }
  ],
  "faq": [
    {
      "question": "When should I specify a Type 1 rather than a Type 2 SPD?",
      "answer": "The decision depends on lightning exposure, the installation location, and the applicable system design. Check whether the device has a declared Iimp rating for Type 1 testing; a Type 2 In rating alone does not establish Type 1 suitability."
    },
    {
      "question": "Can one SPD be used on both AC and photovoltaic DC circuits?",
      "answer": "Do not assume AC and PV DC SPDs are interchangeable. Verify the model’s declared application, continuous operating voltage, wiring configuration, and relevant test standard, such as IEC 61643-11 for AC or IEC 61643-31 for PV DC."
    },
    {
      "question": "Which ratings matter most when comparing SPDs?",
      "answer": "Check Uc against the system voltage, Up against the equipment’s required protection level, and the declared In, Imax, or Iimp for the intended SPD type. Compare those values alongside the specified earthing arrangement and upstream protection requirements."
    },
    {
      "question": "Where should an SPD be installed in a distribution system?",
      "answer": "Placement depends on the entry point, equipment location, lightning exposure, and whether multiple SPDs require coordination. Keep connections consistent with the manufacturer’s instructions and the applicable local installation rules."
    },
    {
      "question": "What compliance evidence should buyers request for Europe, Australia, and North America?",
      "answer": "For Europe, request the applicable EU declaration of conformity and supporting model documentation; for Australia, confirm applicable AS/NZS requirements and RCM obligations. For North America, verify the specific model’s UL 1449 listing or other acceptance required by the authority having jurisdiction."
    }
  ],
  "references": [
    {
      "title": "IEC 61643-11, Low-voltage surge protective devices - Part 11: Surge protective devices connected to low-voltage power systems - Requirements and test methods",
      "url": "https://webstore.iec.ch/",
      "reason": "Defines test and performance requirements relevant to AC power-system SPDs; confirm the applicable edition in the IEC catalogue."
    },
    {
      "title": "IEC 61643-31, Low-voltage surge protective devices - Part 31: Requirements and test methods for SPDs for photovoltaic installations",
      "url": "https://webstore.iec.ch/",
      "reason": "Provides the product-standard basis for selecting an SPD declared for photovoltaic DC applications."
    },
    {
      "title": "UL 1449, Surge Protective Devices",
      "url": "https://www.ulstandards.com/",
      "reason": "Identifies the North American SPD standard to check against a specific model’s listing documentation."
    }
  ],
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
  "intent": "Commercial research: selecting AC or DC surge protective devices by application, SPD type, electrical ratings, and market requirements.",
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
