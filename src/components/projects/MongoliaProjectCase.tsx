import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { getMongoliaCopy } from '@/data/mongolia-project';
import { mongoliaProject } from '@/lib/projects';
import ExistingProductImage from './ExistingProductImage';
import styles from './projects.module.css';

const layouts = [
  { src: '/assets/projects/mongolia-layout-1.webp', width: 1200, height: 450 },
  { src: '/assets/projects/mongolia-layout-2.webp', width: 1200, height: 540 },
];

export default function MongoliaProjectCase({ locale }: { locale: string }) {
  const c = getMongoliaCopy(locale);

  return (
    <main className={styles.page}>
      <section className={styles.projectHero}>
        <Image src={mongoliaProject.hero} alt={c.heroAlt} fill priority sizes="100vw" className={styles.heroBackground} />
        <div className={styles.projectHeroShade} />
        <div className={`${styles.container} ${styles.projectHeroInner}`}>
          <nav className={styles.breadcrumbsLight} aria-label="Breadcrumb">
            <Link href="/">{c.breadcrumb.home}</Link><span>/</span><Link href="/projects">{c.breadcrumb.projects}</Link><span>/</span><span>{c.breadcrumb.current}</span>
          </nav>
          <span className={styles.eyebrowLight}>{c.eyebrow}</span>
          <h1>{c.title}</h1>
          <p className={styles.projectLead}>{c.lead}</p>
          <div className={styles.heroFacts}>
            {c.facts.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
          </div>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.articleLayout}>
          <aside className={styles.toc}>
            <div className={styles.tocInner}>
              <span>{locale === 'ru' ? 'НА ЭТОЙ СТРАНИЦЕ' : 'ON THIS PAGE'}</span>
              {c.toc.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}
            </div>
          </aside>

          <article className={styles.article}>
            <section id="overview">
              <span className={styles.eyebrow}>{c.overview.eyebrow}</span>
              <h2>{c.overview.title}</h2>
              <p>{c.overview.p1}</p>
              <p>{c.overview.p2}</p>
            </section>

            <section id="system">
              <span className={styles.eyebrow}>{c.system.eyebrow}</span>
              <h2>{c.system.title}</h2>
              <p>{c.system.text}</p>
              <div className={styles.layoutGrid}>
                {layouts.map((img, i) => (
                  <figure className={styles.layoutFigure} key={img.src}>
                    <Image src={img.src} alt={c.system.captions[i][0]} width={img.width} height={img.height} />
                    <figcaption>{c.system.captions[i][1]}</figcaption>
                  </figure>
                ))}
              </div>
            </section>

            <section id="equipment">
              <span className={styles.eyebrow}>{c.equipment.eyebrow}</span>
              <h2>{c.equipment.title}</h2>
              <p>{c.equipment.text}</p>
              <div className={styles.equipmentGrid}>
                {c.equipment.items.map((item) => (
                  <div className={styles.equipmentCard} key={item.title}>
                    <h3>{item.title}</h3>
                    <strong>{item.spec}</strong>
                    {item.note ? <p>{item.note}</p> : null}
                  </div>
                ))}
              </div>
            </section>

            <section id="customization">
              <span className={styles.eyebrow}>{c.custom.eyebrow}</span>
              <h2>{c.custom.title}</h2>
              <div className={styles.checkGrid}>
                {c.custom.items.map(([title, copy]) => (
                  <div className={styles.checkCard} key={title}>
                    <span>✓</span>
                    <div><h3>{title}</h3><p>{copy}</p></div>
                  </div>
                ))}
              </div>
              <figure className={styles.panelFigure}>
                <Image src="/assets/projects/mongolia-panel.webp" alt={c.custom.panelAlt} width={800} height={960} />
                <figcaption>{c.custom.panelCaption}</figcaption>
              </figure>
            </section>

            <section id="products">
              <span className={styles.eyebrow}>{c.products.eyebrow}</span>
              <h2>{c.products.title}</h2>
              <p>{c.products.text}</p>
              <div className={styles.productMatchGrid}>
                {c.products.items.map((item) => (
                  <Link href={item.href} className={styles.productMatchCard} key={item.name}>
                    <div className={styles.productImageBox}>
                      <ExistingProductImage src={item.image} fallback={item.fallback} alt={`TPKELE ${item.name}`} className={styles.productImage} />
                    </div>
                    <div className={styles.productMatchBody}>
                      <span className={item.fit === 'direct-family-fit' ? styles.fitDirect : styles.fitConfirm}>
                        {item.fit === 'direct-family-fit' ? c.products.fitDirect : c.products.fitConfirm}
                      </span>
                      <h3>{item.name}</h3>
                      <div className={styles.procurementLine}>
                        <span>{c.products.requirement}</span>
                        <strong>{item.procurementRequirement}</strong>
                      </div>
                      <p>{item.role}</p>
                      <span className={styles.textLink}>{c.products.viewLink}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section id="technical">
              <span className={styles.eyebrow}>{c.technical.eyebrow}</span>
              <h2>{c.technical.title}</h2>
              <div className={styles.techGrid}>
                {c.technical.items.map(([label, spec]) => (
                  <div className={styles.techCard} key={label}><h3>{label}</h3><p>{spec}</p></div>
                ))}
              </div>
            </section>

            <section id="solutions">
              <span className={styles.eyebrow}>{c.solutions.eyebrow}</span>
              <h2>{c.solutions.title}</h2>
              <div className={styles.linkGrid}>
                {c.solutions.items.map(([href, title, copy]) => (
                  <Link href={href} key={href}><strong>{title}</strong><p>{copy}</p><span>{c.solutions.more}</span></Link>
                ))}
              </div>
            </section>

            <section id="inquiry" className={styles.projectSupport}>
              <span className={styles.eyebrow}>{c.inquiry.eyebrow}</span>
              <h2>{c.inquiry.title}</h2>
              <p>{c.inquiry.text}</p>
              <div className={styles.supportActions}>
                <Link className={styles.primaryButton} href="/contact">{c.inquiry.primary}</Link>
                <Link className={styles.outlineButton} href="/products/distribution-boxes">{c.inquiry.secondary}</Link>
              </div>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
