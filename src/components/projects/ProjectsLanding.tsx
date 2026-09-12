import Image from 'next/image';
import Link from 'next/link';
import { zimbabweProject } from '@/lib/projects';
import styles from './projects.module.css';

const supportItems = [
  ['Project Context', 'Show the real system requirement before discussing individual devices.'],
  ['Protection Architecture', 'Connect DC protection, AC protection, surge control and source transfer into one understandable flow.'],
  ['Product Matching', 'Map buyer requirements to TPKELE product families without claiming a model match before technical confirmation.'],
  ['Engineering Notes', 'Surface the parameters that still need confirmation before final device selection.'],
];

const applicationAreas = ['Solar PV', 'Battery Energy Storage', 'Low-Voltage Distribution', 'ATS & Backup Power', 'Industrial Panels', 'Commercial Buildings'];

export default function ProjectsLanding() {
  return (
    <main className={styles.page}>
      <section className={styles.landingHero}>
        <Image
          src="/assets/projects/landing-hero.webp"
          alt="Solar PV, battery storage and low-voltage distribution project context"
          fill
          priority
          sizes="100vw"
          className={styles.heroBackground}
        />
        <div className={styles.heroShade} />
        <div className={`${styles.container} ${styles.landingHeroInner}`}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Projects</span></nav>
          <span className={styles.eyebrowLight}>PROJECT REFERENCES</span>
          <h1>Electrical Protection in Real Project Contexts</h1>
          <p>See how TPKELE protection and switching product families fit into solar PV, energy storage and low-voltage distribution projects — from the buyer requirement to the system architecture.</p>
          <div className={styles.heroActions}><Link className={styles.primaryButton} href="#featured">Explore Projects</Link><Link className={styles.secondaryButtonLight} href="/contact">Discuss a Project</Link></div>
        </div>
      </section>

      <section id="featured" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div><span className={styles.eyebrow}>FEATURED PROJECT REFERENCE</span><h2>Zimbabwe Solar PV & Battery Storage Project</h2></div>
            <p>One buyer-provided procurement reference, presented with the quantities removed but the technical system context preserved.</p>
          </div>
          <Link href={zimbabweProject.route} className={styles.featuredProjectCard}>
            <div className={styles.featuredVisual}>
              <Image src={zimbabweProject.hero} alt="Zimbabwe SIRDC 19/2026 solar PV and battery storage project" fill sizes="(max-width: 900px) 100vw, 55vw" />
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.badgeRow}><span>Zimbabwe</span><span>SIRDC 19/2026</span></div>
              <h3>{zimbabweProject.displayTitle}</h3>
              <p>{zimbabweProject.officialTitle}</p>
              <div className={styles.tagRow}>{zimbabweProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <strong className={styles.textLink}>View project →</strong>
            </div>
          </Link>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionSoft}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}><div><span className={styles.eyebrow}>WHAT A PROJECT PAGE SHOULD SHOW</span><h2>From Product List to System Understanding</h2></div><p>Project references are designed to explain where protection devices sit in the system, not to turn a buyer list into a sales brochure.</p></div>
          <div className={styles.supportGrid}>{supportItems.map(([title, copy], index) => <div className={styles.supportCard} key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p></div>)}</div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}><div><span className={styles.eyebrow}>APPLICATION COVERAGE</span><h2>Project Areas We Can Document</h2></div><p>As more verified project material becomes available, new references can be added under the same short <code>/projects/</code> route structure.</p></div>
          <div className={styles.applicationPills}>{applicationAreas.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={`${styles.container} ${styles.ctaBox}`}>
          <div><span className={styles.eyebrow}>PROJECT SUPPORT</span><h2>Have a Similar Solar or Backup-Power Project?</h2><p>Share the system voltage, inverter configuration, phase arrangement and protection requirements. TPKELE can help map the relevant product families and the parameters that need confirmation.</p></div>
          <Link className={styles.primaryButton} href="/contact">Send Project Requirements</Link>
        </div>
      </section>
    </main>
  );
}
