'use client';

import Image from 'next/image';
import OnThisPage from './OnThisPage';
import QuickSupportCard from './QuickSupportCard';
import RelatedSidebar from './RelatedSidebar';
import ResourceList from './ResourceList';
import { createAdvisorLink } from '../../lib/createAdvisorLink';

export default function GuidePage({ guide }: { guide: any }) {
  const advisorHref = createAdvisorLink(guide.advisor.product, guide.advisor.application);

  return (
    <main className="tpk-guide">
      <div className="tpk-guide__container">
        <aside className="tpk-guide__left">
          <OnThisPage items={guide.sections.map((section: any) => ({ id: section.id, title: section.title }))} />
          <QuickSupportCard />
        </aside>

        <article className="tpk-guide__article">
          <div className="tpk-guide__breadcrumbs">
            <a href="/">Home</a>
            <span>›</span>
            <a href="/technical-guide">Technical Guide</a>
            <span>›</span>
            <span>{guide.title}</span>
          </div>

          <section className="tpk-guide__hero">
            <div className="tpk-guide__heroContent">
              <div className="tpk-guide__eyebrow">{guide.categoryTrail.join('  |  ')}</div>
              <h1>{guide.title}</h1>
              <p className="tpk-guide__intro">{guide.description}</p>
              <div className="tpk-guide__meta">
                <div className="tpk-guide__avatar" />
                <div>
                  <strong>Reviewed by {guide.reviewedBy}</strong>
                  <div>Updated: {guide.updatedAt} | {guide.readTime}</div>
                </div>
              </div>
            </div>
            <div className="tpk-guide__heroImageWrap">
              <Image src={guide.heroImage} alt={guide.title} width={1600} height={900} className="tpk-guide__heroImage" priority />
            </div>
          </section>

          {guide.sections.map((section: any, index: number) => (
            <section id={section.id} key={section.id} className="tpk-guide__section">
              <h2>{index + 1}. {section.title}</h2>

              {section.content?.map((paragraph: string, idx: number) => (
                <p key={idx}>{paragraph}</p>
              ))}

              {section.callout ? (
                <div className="tpk-guide__callout">
                  <strong>Key Takeaway</strong>
                  <p>{section.callout}</p>
                </div>
              ) : null}

              {section.table ? (
                <div className="tpk-guide__tableWrap">
                  <table className="tpk-guide__table">
                    <thead>
                      <tr>
                        {section.table.headers.map((header: string) => <th key={header}>{header}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row: string[], rowIndex: number) => (
                        <tr key={rowIndex}>
                          {row.map((cell: string, cellIndex: number) => <td key={cellIndex}>{cell}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}

              {section.image ? (
                <figure className="tpk-guide__figure">
                  <Image src={section.image} alt={section.title} width={1200} height={900} className="tpk-guide__inlineImage" />
                  <figcaption>{section.imageCaption}</figcaption>
                </figure>
              ) : null}

              {section.faq ? (
                <div className="tpk-guide__faqList">
                  {section.faq.map((item: any, idx: number) => (
                    <div className="tpk-guide__faqItem" key={idx}>
                      <h3>{item.q}</h3>
                      <p>{item.a}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          ))}

          <section className="tpk-guide__advisorBlock">
            <div>
              <h2>Need market-specific export guidance?</h2>
              <p>Use the TPKELE Market Access Advisor to review likely standards, document expectations and buyer-facing market information for the selected product and application.</p>
            </div>
            <a href={advisorHref} className="tpk-guide__button">Open Market Access Advisor</a>
          </section>
        </article>

        <aside className="tpk-guide__right">
          <RelatedSidebar items={guide.relatedProducts} />
          <div className="tpk-guide__sidebarCard">
            <h3>Export Requirements?</h3>
            <p>Check standards, certification and required documents for your target market.</p>
            <a href={advisorHref} className="tpk-guide__button tpk-guide__button--full">Open Market Access Advisor</a>
          </div>
          <ResourceList items={guide.resources} />
          <div className="tpk-guide__sidebarCard">
            <Image src={`/images/guides/${guide.slug}/quick-flow.png`} alt="Quick selection flow" width={900} height={1200} className="tpk-guide__sidebarImage" />
          </div>
        </aside>
      </div>
    </main>
  );
}
