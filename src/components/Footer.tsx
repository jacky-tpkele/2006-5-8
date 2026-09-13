import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { BackToTop } from "@/components/BackToTop";
import { ChatWidget } from "@/components/ChatWidget";
import { blogPosts, categorySlugMap, site, subCategoryBySlug } from "@/data/site";

// 产品链接：href 由 site.ts 的映射生成，label 的 key 固定。
// 每个 href 对应一个唯一的翻译 key，href 本身不做任何改动。
const productLinkEntries: Array<{ key: string; href: string }> = [
  { key: "dc-mcb", href: `/products/category/${categorySlugMap.MCB}/${subCategoryBySlug["dc-mcb"]?.slug ?? "dc-mcb"}` },
  { key: "dc-spd", href: `/products/category/${categorySlugMap.SPD}/${subCategoryBySlug["dc-spd"]?.slug ?? "dc-spd"}` },
  { key: "combiner", href: `/products/category/${categorySlugMap["Combiner Box"]}` },
  { key: "ac-mcb", href: `/products/category/${categorySlugMap.MCB}/${subCategoryBySlug["ac-mcb"]?.slug ?? "ac-mcb"}` },
  { key: "ac-spd", href: `/products/category/${categorySlugMap.SPD}/${subCategoryBySlug["ac-spd"]?.slug ?? "ac-spd"}` },
  { key: "ats", href: `/products/category/${categorySlugMap.ATS}` },
  { key: "voltage", href: `/products/category/${categorySlugMap["Voltage Protector"]}` },
  { key: "meter", href: `/products/category/${categorySlugMap["Energy Meter"]}` },
];

const resourceLinkEntries: Array<{ key: string; href: string }> = [
  { key: "technical-guides", href: "/resources/technical-guides" },
  { key: "application-solutions", href: "/resources/application-solutions" },
  { key: "market-access", href: "/resources/market-access-advisor" },
  { key: "standards", href: "/resources/standards-database" },
  { key: "buyer-support", href: "/resources/buyer-support" },
  { key: "faq", href: "/resources/faq" },
];

const projectLinkEntries: Array<{ key: string; href: string }> = [
  { key: "zimbabwe", href: "/projects/zimbabwe-sirdc-solar-project" },
  { key: "viewAll", href: "/projects" },
];

const companyLinkEntries: Array<{ key: string; href: string }> = [
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
  { key: "certs", href: "/about#certifications" },
];

export async function Footer() {
  const t = await getTranslations("footer");
  const recentPosts = blogPosts.slice(0, 4);

  return (
    <>
      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <Link className="brand footer-brand" href="/">
              {site.name}
            </Link>
            <p>{t("tagline")}</p>
            <p className="footer-contact-line">
              <strong>{t("address")}</strong>
              <span>{site.address}</span>
            </p>
            <p className="footer-contact-line">
              <strong>{t("phone")}</strong>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </p>
            <p className="footer-contact-line">
              <strong>{t("email")}</strong>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p className="footer-contact-line">
              <strong>{t("whatsapp")}</strong>
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
                {t("chatWhatsapp")}
              </a>
            </p>
          </div>

          <div>
            <h2>{t("products")}</h2>
            {productLinkEntries.map((item) => (
              <Link key={item.href + item.key} href={item.href} title={t(`productLinks.${item.key}`)}>
                {t(`productLinks.${item.key}`)}
              </Link>
            ))}
          </div>

          <div>
            <h2>{t("resources")}</h2>
            {resourceLinkEntries.map((item) => (
              <Link key={item.href + item.key} href={item.href}>
                {t(`resourceLinks.${item.key}`)}
              </Link>
            ))}
          </div>

          <div>
            <h2>{t("projects")}</h2>
            {projectLinkEntries.map((item) => (
              <Link key={item.href + item.key} href={item.href}>
                {t(`projectLinks.${item.key}`)}
              </Link>
            ))}
            <h2 style={{ marginTop: 22 }}>{t("company")}</h2>
            {companyLinkEntries.map((item) => (
              <Link key={item.href + item.key} href={item.href}>
                {t(`companyLinks.${item.key}`)}
              </Link>
            ))}
          </div>

          <div>
            <h2>{t("blog")}</h2>
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} title={post.title}>
                {post.title}
              </Link>
            ))}
            <Link href="/blog" style={{ marginTop: 10, color: "var(--green)" }}>
              {t("viewAllArticles")}
            </Link>
          </div>
        </div>
        <p className="copyright">{t("copyright")}</p>
      </footer>
      <BackToTop />
      <ChatWidget />
    </>
  );
}
