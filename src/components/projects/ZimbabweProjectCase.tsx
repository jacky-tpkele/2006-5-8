import Image from 'next/image';
import Link from 'next/link';
import { procurementEquipment, productMatches, zimbabweProject } from '@/lib/projects';
import ExistingProductImage from './ExistingProductImage';
import SystemArchitecture from './SystemArchitecture';
import styles from './projects.module.css';

const engineeringChecks = [
  ['PV string voltage', 'The procurement lists 600W / 55V modules but does not state final string count or maximum PV array voltage. Confirm string Voc and inverter DC input limits before selecting the DC breaker and DC SPD.'],
  ['AC system voltage & phase', 'The project includes both single-phase and three-phase inverter systems. Confirm the actual AC voltage and neutral arrangement for each protection and transfer circuit.'],
  ['Breaking capacity', 'The buyer specifies 63A breakers, but the required short-circuit breaking capacity is not stated in the supplied pages. Verify it against the prospective short-circuit current at each installation point.'],
  ['SPD coordination', 'Confirm DC Uoc, AC system voltage, earthing arrangement and the wider lightning / surge-protection design before selecting SPD type and ratings.'],
  ['Automatic transfer logic', 'The specification asks for automatic single- and three-phase changeover compatible with inverter output. Confirm source pair, pole count, neutral switching, transfer logic and inverter-generator / grid behaviour.'],
  ['AVS function', 'The procurement names Digital DIN AVS devices but the supplied pages do not define trip thresholds, delay logic or complete functional requirements. Match only after those details are confirmed.'],
];

const relatedGuides = [
  ['/downloads', 'Technical Resources', 'Product catalogs and technical documentation'],
  ['/solutions', 'Application Solutions', 'Solar PV and power distribution solutions'],
  ['/products/dc-mcb', 'DC MCB Products', 'DC circuit breaker selection'],
  ['/products/ats', 'Automatic Transfer Switch', 'ATS product families'],
];

export default function ZimbabweProjectCase() {
  return (
    <main className={styles.page}>
      <section className={styles.projectHero}>
        <Image src={zimbabweProject.hero} alt="Zimbabwe solar PV, inverter, battery storage and electrical distribution system context" fill priority sizes="100vw" className={styles.heroBackground} />
        <div className={styles.projectHeroShade} />
        <div className={`${styles.container} ${styles.projectHeroInner}`}>
          <nav className={styles.breadcrumbsLight} aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/projects">Projects</Link><span>/</span><span>Zimbabwe · SIRDC 19/2026</span></nav>
          <span className={styles.eyebrowLight}>ZIMBABWE · PROJECT REFERENCE</span>
          <h1>{zimbabweProject.displayTitle}</h1>
          <p className={styles.officialTitle}>{zimbabweProject.officialTitle}</p>
          <p className={styles.projectLead}>A solar equipment procurement project combining bifacial PV generation, hybrid and off-grid inverters, 48V lithium battery storage, DC/AC protection, surge protection, automatic source transfer and low-voltage distribution.</p>
          <div className={styles.heroFacts}>
            <div><span>Country</span><strong>Zimbabwe</strong></div>
            <div><span>Reference</span><strong>SIRDC 19/2026</strong></div>
            <div><span>System</span><strong>Solar PV + BESS</strong></div>
            <div><span>TPKELE role</span><strong>Protection & switching fit</strong></div>
          </div>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.articleLayout}>
          <aside className={styles.toc}>
            <div className={styles.tocInner}>
              <span>ON THIS PAGE</span>
              <a href="#overview">Project overview</a>
              <a href="#equipment">Key equipment</a>
              <a href="#architecture">System architecture</a>
              <a href="#tpkele-scope">TPKELE product fit</a>
              <a href="#boundaries">Scope boundaries</a>
              <a href="#engineering">Engineering checks</a>
              <a href="#guides">Related resources</a>
              <a href="#support">Project support</a>
            </div>
          </aside>

          <article className={styles.article}>
            <section id="overview">
              <span className={styles.eyebrow}>PROJECT OVERVIEW</span>
              <h2>A Multi-Layer Solar, Storage and Distribution Requirement</h2>
              <p>The buyer-provided SIRDC 19/2026 technical specification is not limited to solar modules. It combines PV generation, three inverter configurations, lithium battery storage, battery-side hardware, DC and AC protection, automatic changeover, distribution boards and installation accessories.</p>
              <p>For TPKELE, the strongest fit is the <strong>protection and switching layer</strong>: the DC breaker and DC SPD ahead of the inverter, AC breakers and AC SPDs on the output / distribution side, and automatic transfer equipment where the inverter system changes between available power sources.</p>
              <div className={styles.sourceStrip}><strong>Source basis</strong><span>Buyer-provided Standard Bidding Document / Technical Specification and Compliance Sheet · SIRDC 19/2026. Public quantities are intentionally omitted; source specifications are preserved where relevant.</span></div>
            </section>

            <section id="equipment">
              <span className={styles.eyebrow}>KEY EQUIPMENT IN THE PROCUREMENT</span>
              <h2>The Project Starts With the Whole System — Not Just the Breakers</h2>
              <p>These are the major system categories visible in the supplied procurement pages. Showing them together makes it clear how the protection devices participate in the wider solar and battery architecture.</p>
              <div className={styles.equipmentGrid}>
                {procurementEquipment.map((item) => (
                  <div className={styles.equipmentCard} key={item.title}>
                    <span className={styles.categoryLabel}>{item.category}</span>
                    <h3>{item.title}</h3>
                    <strong>{item.spec}</strong>
                    {item.note ? <p>{item.note}</p> : null}
                  </div>
                ))}
              </div>
            </section>

            <section id="architecture">
              <span className={styles.eyebrow}>PROJECT SYSTEM ARCHITECTURE</span>
              <h2>Where Protection and Automatic Transfer Sit in the Energy Path</h2>
              <p>The diagram below is a conceptual interpretation of the buyer procurement scope. It shows the functional relationship between PV generation, the protection layer, inverter / battery storage, AC output protection, automatic changeover and final distribution. It is not a final single-line diagram.</p>
              <SystemArchitecture />
            </section>

            <section id="tpkele-scope">
              <span className={styles.eyebrow}>TPKELE PRODUCT FIT</span>
              <h2>Procurement Requirements That Align With TPKELE Product Families</h2>
              <p>Where the procurement wording directly matches a TPKELE product family, the match is shown as <strong>Product family fit</strong>. Items that still require function, voltage, poles or transfer-logic confirmation are labelled <strong>Technical confirmation</strong>.</p>
              <div className={styles.productMatchGrid}>
                {productMatches.map((item) => (
                  <Link href={item.href} className={styles.productMatchCard} key={item.name}>
                    <div className={styles.productImageBox}>
                      <ExistingProductImage src={item.image} fallback={item.fallback} alt={`TPKELE ${item.name}`} className={styles.productImage} />
                    </div>
                    <div className={styles.productMatchBody}>
                      <span className={item.fit === 'direct-family-fit' ? styles.fitDirect : styles.fitConfirm}>{item.fit === 'direct-family-fit' ? 'PRODUCT FAMILY FIT' : 'TECHNICAL CONFIRMATION'}</span>
                      <h3>{item.name}</h3>
                      <div className={styles.procurementLine}><span>Buyer requirement</span><strong>{item.procurementRequirement}</strong></div>
                      <p>{item.role}</p>
                      <span className={styles.textLink}>View TPKELE product family →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section id="boundaries">
              <span className={styles.eyebrow}>PROJECT SCOPE BOUNDARIES</span>
              <h2>Understand the Whole Project Without Pretending Every Item Is a TPKELE Product</h2>
              <div className={styles.boundaryGrid}>
                <div className={styles.boundaryCardPrimary}>
                  <h3>Featured TPKELE fit</h3>
                  <p>DC MCB, DC SPD, AC MCB, AC SPD, automatic transfer switch families and possible AVS / voltage-protection matching.</p>
                </div>
                <div className={styles.boundaryCard}>
                  <h3>Other procurement items</h3>
                  <p>Solar modules, inverters, lithium batteries, battery fuse / holder, busbar, distribution boards, mounting rails, solar and battery cables, trunking, conduit and installation hardware.</p>
                </div>
              </div>
              <p className={styles.microNote}>The presence of an item in the procurement document does not mean TPKELE manufactures or supplied that item. This page focuses on system understanding and the TPKELE categories that can be technically matched.</p>
            </section>

            <section id="engineering">
              <span className={styles.eyebrow}>BEFORE FINAL MODEL SELECTION</span>
              <h2>Six Engineering Points the Procurement Pages Do Not Fully Resolve</h2>
              <div className={styles.checkGrid}>{engineeringChecks.map(([title, copy]) => <div className={styles.checkCard} key={title}><span>✓</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div>
            </section>

            <section id="guides">
              <span className={styles.eyebrow}>RELATED RESOURCES</span>
              <h2>Explore TPKELE Products and Technical Solutions</h2>
              <div className={styles.linkGrid}>{relatedGuides.map(([href, title, copy]) => <Link href={href} key={href}><strong>{title}</strong><p>{copy}</p><span>Learn more →</span></Link>)}</div>
            </section>

            <section id="support" className={styles.projectSupport}>
              <span className={styles.eyebrow}>PROJECT SUPPORT</span>
              <h2>Working on a Similar Solar PV + Battery Storage Project?</h2>
              <p>Send the PV string data, inverter model / output voltage, single- or three-phase configuration, battery architecture and source-transfer requirement. TPKELE can help identify the protection and switching product families that deserve technical evaluation.</p>
              <div className={styles.supportActions}><Link className={styles.primaryButton} href="/contact">Send Project Requirements</Link><Link className={styles.outlineButton} href="/products">Browse Products</Link></div>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
