import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Fragment } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import OnThisPage from "@/components/technical-guide/OnThisPage";
import { findProduct } from "@/data/site";
import {
  type RichBlock,
  type RichBlogArticle,
  getRichArticleToc,
} from "@/data/blog/rcbo-au-nz-guide";
import BlogJourneyNav from "./BlogJourneyNav";
import "./blog-rich.css";

type RichBlogArticleProps = {
  article: RichBlogArticle;
  /** 面包屑与「On this page」文案，跟随站点语言 */
  labels: {
    home: string;
    blog: string;
    onThisPage: string;
    nextBuyerStep: string;
    faqHeading: string;
    relatedHeading: string;
    ctaEyebrow: string;
    ctaTitle: string;
    readMore: string;
  };
  /** 列表页筛选分类的中文/英文标签 */
  categoryLabel?: string;
  categoryHref?: string;
  locale: string;
};

function renderBlock(block: RichBlock, index: number) {
  switch (block.kind) {
    case "p":
      return <p key={index} dangerouslySetInnerHTML={{ __html: block.html }} />;

    case "comparison":
      return (
        <div className="blog-rich__grid2" key={index}>
          {block.items.map((item) => (
            <div className="blog-rich__tile" key={item.title}>
              <strong dangerouslySetInnerHTML={{ __html: item.title }} />
              {item.lines.map((line, i) => (
                <span key={i} dangerouslySetInnerHTML={{ __html: line }} />
              ))}
            </div>
          ))}
        </div>
      );

    case "figure":
      // 工作台发布的文章用 block.url，旧的用 block.png
      const imgSrc = (block as any).url || block.png;
      const imgWebp = block.webp;
      const imgWidth = block.width || 1254;
      const imgHeight = block.height || 1254;

      return (
        <figure key={index}>
          <Image
            src={imgSrc}
            alt={block.alt}
            width={imgWidth}
            height={imgHeight}
            quality={90}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmNWY1ZjUiLz48L3N2Zz4="
            style={{ width: '100%', height: 'auto' }}
          />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );

    case "specGrid":
      return (
        <div className="blog-rich__grid2" key={index}>
          {block.items.map((item) => (
            <div className="blog-rich__tile" key={item.label}>
              <strong dangerouslySetInnerHTML={{ __html: item.label }} />
              <span dangerouslySetInnerHTML={{ __html: item.text }} />
            </div>
          ))}
        </div>
      );

    case "table":
      return (
        <div className="blog-rich__tableWrap" key={index}>
          <table className="blog-rich__table">
            <thead>
              <tr>
                {block.head.map((cell) => (
                  <th scope="col" key={cell}>
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "contextAction":
      return (
        <div className="blog-rich__contextAction" key={index}>
          <div>
            <strong>{block.title}</strong>
            <p>{block.text}</p>
          </div>
          <Link href={block.href}>{block.label}</Link>
        </div>
      );

    case "resourceStrip":
      return (
        <div className="blog-rich__resourceStrip" key={index}>
          {block.items.map((item) => (
            <Link href={item.href} key={item.href}>
              <span className="num">{item.index}</span>
              <div>
                <strong>{item.title}</strong>
                <small>{item.sub}</small>
              </div>
            </Link>
          ))}
        </div>
      );

    case "productAction":
      return (
        <div className="blog-rich__productAction" key={index}>
          <div>
            <p className="blog-rich__eyebrow">{block.eyebrow}</p>
            <h3>{block.title}</h3>
            <p>{block.text}</p>
          </div>
          <Link className="blog-rich__button" href={block.href}>
            {block.label}
          </Link>
        </div>
      );

    case "documentGrid":
      return (
        <div className="blog-rich__grid3" key={index}>
          {block.items.map((item) => (
            <div className="blog-rich__tile" key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      );

    case "resourceHub":
      return (
        <div className="blog-rich__hub" key={index}>
          <h3>{block.title}</h3>
          <div className="blog-rich__hubGrid">
            {block.items.map((item) => (
              <Link href={item.href} key={item.href}>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </Link>
            ))}
          </div>
        </div>
      );

    case "purchaseSteps":
      return (
        <div className="blog-rich__steps" key={index}>
          {block.items.map((item) => (
            <Link href={item.href} key={item.href}>
              <span>{item.step}</span>
              <strong>{item.title}</strong>
              <small>{item.sub}</small>
            </Link>
          ))}
        </div>
      );

    default:
      return null;
  }
}

/**
 * 采购导航式 BLOG 文章模版。
 *
 * 与 blog-article 模版并存：普通文章继续用原模版，只有文章被登记到
 * data/blog/rcbo-au-nz-guide.ts 时才走这一套（sticky 采购导航 /
 * On This Page 侧栏 / 资源联动卡片 / FAQ accordion）。
 */
export default function RichBlogArticle({
  article,
  labels,
  categoryLabel,
  categoryHref,
  locale,
}: RichBlogArticleProps) {
  const toc = getRichArticleToc(article);

  const related = article.relatedProducts
    .map((slug) => findProduct(slug))
    .filter((product): product is NonNullable<ReturnType<typeof findProduct>> => Boolean(product));

  const formattedDate = new Intl.DateTimeFormat(locale, {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(article.date));

  return (
    <main className="blog-rich">
      <nav className="blog-rich__crumbs" aria-label="Breadcrumb">
        <Link href="/">{labels.home}</Link>
        <span aria-hidden="true">/</span>
        <Link href="/blog">{labels.blog}</Link>
        {categoryLabel && categoryHref ? (
          <>
            <span aria-hidden="true">/</span>
            <Link href={categoryHref}>{categoryLabel}</Link>
          </>
        ) : null}
        <span aria-hidden="true">/</span>
        <span aria-current="page">{article.title}</span>
      </nav>

      <header className="blog-rich__header" id="top">
        <p className="blog-rich__eyebrow">{article.eyebrow}</p>
        <h1>{article.title}</h1>
        <div className="blog-rich__meta">
          <time dateTime={article.date}>{formattedDate}</time>
          <span>
            {article.readingTime} min read
          </span>
        </div>
        <p className="blog-rich__lead">{article.lead}</p>
        <div className="blog-rich__notice">
          <strong>Compliance note:</strong> {article.complianceNote}
        </div>
      </header>

      <BlogJourneyNav steps={article.journey} ariaLabel="RCBO buyer journey" />

      <section className="blog-rich__quick" aria-labelledby="quick-path-title">
        <div>
          <p className="blog-rich__eyebrow">{article.quickNavigator.eyebrow}</p>
          <h2 id="quick-path-title">{article.quickNavigator.title}</h2>
          <p>{article.quickNavigator.text}</p>
        </div>
        <div className="blog-rich__quickGrid">
          {article.quickNavigator.cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={
                card.primary
                  ? "blog-rich__pathCard blog-rich__pathCard--primary"
                  : "blog-rich__pathCard"
              }
            >
              <span className="blog-rich__pathKicker">{card.kicker}</span>
              <strong>{card.title}</strong>
              <span>{card.cta}</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="blog-rich__layout">
        <article className="blog-rich__content">
          {article.sections.map((section) => (
            <section id={section.id} key={section.id}>
              <h2>{section.heading}</h2>
              {section.blocks.map((block, blockIndex) => renderBlock(block, blockIndex))}
            </section>
          ))}

          <section id="faq">
            <h2>{labels.faqHeading}</h2>
            {/* 复用 globals.css 已有的 .faq-item accordion 样式 */}
            <div className="faq-list blog-rich__faqList">
              {article.faq.map((item) => (
                <details className="faq-item" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="blog-rich__references">
            <h2>Official References</h2>
            <ul>
              {article.references.map((ref) => (
                <li key={ref.href}>
                  <a href={ref.href} target="_blank" rel="noopener noreferrer">
                    {ref.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <div className="blog-rich__backTop">
            <a href="#top">↑ Back to top</a>
          </div>

          <footer className="blog-rich__footer">
            <p>
              <strong>Technical disclaimer:</strong> {article.disclaimer}
            </p>
          </footer>
        </article>

        <aside className="blog-rich__toc" aria-label={labels.onThisPage}>
          <OnThisPage items={toc} offset={140} />
        </aside>
      </div>

      <aside className="blog-rich__cta-sidebar">
        <p className="blog-rich__actionTitle">{labels.nextBuyerStep}</p>
        <div className="blog-rich__actionLinks">
          <Link href="/products/1pn-rcbo">View 1P+N RCBO</Link>
          <Link href="/resources/market-access-advisor">Check Market Access</Link>
          <Link href="/resources/buyer-support">Prepare Documents</Link>
          <Link href="/contact">Ask TPKELE</Link>
        </div>
      </aside>

      {related.length > 0 ? (
        <aside className="blog-rich__related">
          <h2>{labels.relatedHeading}</h2>
          <div className="blog-rich__relatedGrid">
            {related.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="blog-rich__relatedCard"
              >
                <Image src={product.image} alt={product.name} width={76} height={76} />
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.application}</span>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      ) : null}

      <div className="blog-article-cta">
        <p className="eyebrow">{labels.ctaEyebrow}</p>
        <h2>{labels.ctaTitle}</h2>
        <div className="button-row" style={{ justifyContent: "center" }}>
          <InquiryModal
            triggerLabel="Request Quotation"
            triggerClassName="btn primary"
            product="RCBO Australia NZ"
            intent="quote"
          />
          <InquiryModal
            triggerLabel="Ask Technical Question"
            triggerClassName="btn ghost dark"
            product="RCBO Australia NZ"
            intent="technical"
            title="Ask Technical Question"
          />
        </div>
      </div>
    </main>
  );
}
