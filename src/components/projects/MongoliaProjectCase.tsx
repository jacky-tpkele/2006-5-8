import Image from 'next/image';
import Link from 'next/link';
import { mongoliaEquipment, mongoliaProductMatches, mongoliaProject } from '@/lib/projects';
import ExistingProductImage from './ExistingProductImage';
import styles from './projects.module.css';

const customizationHighlights = [
  ['300A DC protection', 'High-current 2-pole DC molded case circuit breakers for battery cabinet isolation — engineered for large-scale lithium storage systems.'],
  ['Multi-inverter AC distribution', '11 identical AC distribution boxes, each protecting one inverter output with 4P + 2P MCBs and three-phase surge protection.'],
  ['Pre-assembled & tested', 'All boxes factory-wired, torque-checked and hi-pot tested before shipment — reduces on-site installation time by 60%.'],
  ['UV-printed branding', 'Custom UV-printed panel with TPKELE logo and "DC DISTRIBUTION BOX" labeling — professional project identity.'],
  ['Coordinated protection', 'Unified SPD and MCB specification across 11 inverter boxes ensures consistent protection and simplified inventory.'],
  ['IP65 outdoor rating', 'Sealed enclosures with PG21 cable glands for Ulaanbaatar\'s harsh continental climate (−40°C winter capability).'],
];

const technicalDetails = [
  ['DC-01 & DC-02 Boxes', '2P 300A DC MCCB + 12× PG21 glands per box · 4 total boxes for dual battery cabinet architecture'],
  ['AC-01 Inverter Boxes', '3× 4P 25A MCB + 6× 2P 16A MCB + 3× 4P 20kA SPD + PE busbar + 6× PG21 · 11 boxes (one per inverter)'],
  ['AC-02 Collection Box', '2× 4P 25A MCB + 2× 4P 20kA SPD · Main AC collection point before grid connection'],
  ['System topology', 'Battery → DC-01/02 boxes → 11 parallel inverters → AC-01 boxes (×11) → AC-02 collection → Grid'],
];

const relatedSolutions = [
  ['/solutions/custom-distribution-boxes', 'Custom Distribution Box Solutions', 'Pre-engineered enclosures for PV and battery projects'],
  ['/products/ac-spd-4p', 'AC 4P SPD Product', 'Four-pole surge protection used in this project'],
  ['/products/ac-mcb', 'AC MCB Product Family', 'Miniature circuit breakers for AC distribution'],
  ['/contact', 'Request Custom Enclosure Quote', 'Send your single-line diagram for pricing'],
];

export default function MongoliaProjectCase() {
  return (
    <main className={styles.page}>
      <section className={styles.projectHero}>
        <Image src={mongoliaProject.hero} alt="Mongolia battery storage and multi-inverter distribution system" fill priority sizes="100vw" className={styles.heroBackground} />
        <div className={styles.projectHeroShade} />
        <div className={`${styles.container} ${styles.projectHeroInner}`}>
          <nav className={styles.breadcrumbsLight} aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span><Link href="/projects">Projects</Link><span>/</span><span>Mongolia · Ulaanbaatar</span>
          </nav>
          <span className={styles.eyebrowLight}>MONGOLIA · BATTERY STORAGE PROJECT</span>
          <h1>{mongoliaProject.displayTitle}</h1>
          <p className={styles.projectLead}>A turnkey custom distribution box solution for a large-scale battery energy storage system with 11 parallel three-phase inverters in Ulaanbaatar, Mongolia. TPKELE delivered 13 pre-assembled, tested enclosures with 300A DC protection, modular AC distribution and UV-printed project branding.</p>
          <div className={styles.heroFacts}>
            <div><span>Location</span><strong>Ulaanbaatar, Mongolia</strong></div>
            <div><span>Completion</span><strong>November 2026</strong></div>
            <div><span>System</span><strong>Battery Storage + 11 Inverters</strong></div>
            <div><span>TPKELE scope</span><strong>Custom distribution boxes</strong></div>
          </div>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.articleLayout}>
          <aside className={styles.toc}>
            <div className={styles.tocInner}>
              <span>ON THIS PAGE</span>
              <a href="#overview">Project overview</a>
              <a href="#system">System architecture</a>
              <a href="#equipment">Distribution box specifications</a>
              <a href="#customization">Customization highlights</a>
              <a href="#products">TPKELE product fit</a>
              <a href="#technical">Technical details</a>
              <a href="#solutions">Related solutions</a>
              <a href="#inquiry">Request custom enclosure quote</a>
            </div>
          </aside>

          <article className={styles.article}>
            <section id="overview">
              <span className={styles.eyebrow}>PROJECT OVERVIEW</span>
              <h2>From Component Supply to Turnkey Distribution Box Engineering</h2>
              <p>This Mongolia battery storage project represents a shift from selling individual MCBs and SPDs to delivering <strong>complete, pre-assembled distribution solutions</strong>. The customer needed 13 custom distribution boxes for a multi-inverter battery energy storage system in Ulaanbaatar — with specific requirements for high-current DC protection, coordinated three-phase AC distribution, outdoor IP65 rating and professional branding.</p>
              <p>TPKELE provided <strong>engineering, component integration, factory testing and UV-printed panels</strong> — delivering installation-ready boxes that reduced on-site labor by 60% and eliminated field wiring errors.</p>
            </section>

            <section id="system">
              <span className={styles.eyebrow}>SYSTEM ARCHITECTURE</span>
              <h2>Dual Battery Cabinets Feeding 11 Parallel Inverters</h2>
              <p>The system topology shows why custom distribution boxes add value: coordinating protection across 11 parallel inverter outputs requires consistent MCB/SPD specifications, clear labeling and pre-tested assemblies to avoid commissioning delays.</p>
              <div className={styles.layoutGrid}>
                <figure className={styles.layoutFigure}>
                  <Image src="/assets/projects/mongolia-layout-1.webp" alt="Mongolia project system layout — battery, inverters and AC collection topology" width={1200} height={400} />
                  <figcaption>System layout: Battery cabinets (left) → DC distribution → 11 inverters (center) → AC distribution boxes → AC collection (right)</figcaption>
                </figure>
                <figure className={styles.layoutFigure}>
                  <Image src="/assets/projects/mongolia-layout-2.webp" alt="Detailed distribution box placement and wiring schematic" width={1200} height={600} />
                  <figcaption>Detailed layout: DC-01/02 battery boxes, AC-01 inverter boxes (×11), AC-02 collection box and cable routing</figcaption>
                </figure>
              </div>
            </section>

            <section id="equipment">
              <span className={styles.eyebrow}>DISTRIBUTION BOX SPECIFICATIONS</span>
              <h2>Four Custom Enclosure Types — 13 Boxes Total</h2>
              <p>Each distribution box type was engineered for its specific role in the battery-to-grid power path. All boxes include UV-printed panels, IP65 enclosures, PG21 cable glands and factory hi-pot testing.</p>
              <div className={styles.equipmentGrid}>
                {mongoliaEquipment.map((item) => (
                  <div className={styles.equipmentCard} key={item.title}>
                    <span className={styles.categoryLabel}>{item.category}</span>
                    <h3>{item.title}</h3>
                    <strong>{item.spec}</strong>
                    {item.note ? <p>{item.note}</p> : null}
                  </div>
                ))}
              </div>
            </section>

            <section id="customization">
              <span className={styles.eyebrow}>CUSTOMIZATION HIGHLIGHTS</span>
              <h2>What Made This a Custom Distribution Box Project — Not Just Component Supply</h2>
              <div className={styles.checkGrid}>
                {customizationHighlights.map(([title, copy]) => (
                  <div className={styles.checkCard} key={title}>
                    <span>✓</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
              <figure className={styles.panelFigure}>
                <Image src="/assets/projects/mongolia-panel.webp" alt="UV-printed DC distribution box panel with TPKELE branding" width={800} height={400} />
                <figcaption>UV-printed panel: Custom branding with "TPKELE" logo and "DC DISTRIBUTION BOX" labeling for professional project identity</figcaption>
              </figure>
            </section>

            <section id="products">
              <span className={styles.eyebrow}>TPKELE PRODUCT FIT</span>
              <h2>Components and Services Delivered in This Project</h2>
              <p>This project combined TPKELE's standard product families with custom enclosure engineering. The result: installation-ready distribution boxes that match the customer's single-line diagram.</p>
              <div className={styles.productMatchGrid}>
                {mongoliaProductMatches.map((item) => (
                  <Link href={item.href} className={styles.productMatchCard} key={item.name}>
                    <div className={styles.productImageBox}>
                      <ExistingProductImage src={item.image} fallback={item.fallback} alt={`TPKELE ${item.name}`} className={styles.productImage} />
                    </div>
                    <div className={styles.productMatchBody}>
                      <span className={item.fit === 'direct-family-fit' ? styles.fitDirect : styles.fitConfirm}>
                        {item.fit === 'direct-family-fit' ? 'PRODUCT FAMILY FIT' : 'TECHNICAL CONFIRMATION'}
                      </span>
                      <h3>{item.name}</h3>
                      <div className={styles.procurementLine}>
                        <span>Project requirement</span>
                        <strong>{item.procurementRequirement}</strong>
                      </div>
                      <p>{item.role}</p>
                      <span className={styles.textLink}>View TPKELE product family →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section id="technical">
              <span className={styles.eyebrow}>TECHNICAL DETAILS</span>
              <h2>Box-by-Box Breakdown and System Topology</h2>
              <div className={styles.techGrid}>
                {technicalDetails.map(([label, spec]) => (
                  <div className={styles.techCard} key={label}>
                    <h3>{label}</h3>
                    <p>{spec}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="solutions">
              <span className={styles.eyebrow}>RELATED SOLUTIONS</span>
              <h2>Explore Custom Distribution Box Capabilities</h2>
              <div className={styles.linkGrid}>
                {relatedSolutions.map(([href, title, copy]) => (
                  <Link href={href} key={href}>
                    <strong>{title}</strong>
                    <p>{copy}</p>
                    <span>Learn more →</span>
                  </Link>
                ))}
              </div>
            </section>

            <section id="inquiry" className={styles.projectSupport}>
              <span className={styles.eyebrow}>REQUEST CUSTOM ENCLOSURE QUOTE</span>
              <h2>Working on a Battery Storage or Multi-Inverter Project?</h2>
              <p>Send your single-line diagram, system voltage, inverter count and enclosure requirements. TPKELE can engineer pre-assembled distribution boxes with integrated MCB/SPD protection, UV-printed panels and factory testing — ready for direct installation.</p>
              <div className={styles.supportActions}>
                <Link className={styles.primaryButton} href="/contact">Send Project Requirements</Link>
                <Link className={styles.outlineButton} href="/solutions/custom-distribution-boxes">View Custom Box Solutions</Link>
              </div>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
