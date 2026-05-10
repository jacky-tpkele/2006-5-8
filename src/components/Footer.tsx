import Link from "next/link";
import { InquiryModal } from "@/components/InquiryModal";
import { blogPosts, categorySlugMap, site, subCategoryBySlug } from "@/data/site";

const solutionLinks = [
  { label: "Solar DC Protection", href: "/solar-dc-protection" },
  { label: "Low Voltage Protection", href: "/products" },
  { label: "OEM / ODM Services", href: "/about" },
  { label: "View All Products", href: "/products" },
];

const productLinks = [
  { label: "DC MCB — Solar Circuit Breaker", href: `/products/category/${categorySlugMap.MCB}/${subCategoryBySlug["dc-mcb"]?.slug ?? "dc-mcb"}` },
  { label: "DC SPD — Solar Surge Protector", href: `/products/category/${categorySlugMap.SPD}/${subCategoryBySlug["dc-spd"]?.slug ?? "dc-spd"}` },
  { label: "PV Combiner Box", href: `/products/category/${categorySlugMap["Combiner Box"]}` },
  { label: "AC MCB — Miniature Circuit Breaker", href: `/products/category/${categorySlugMap.MCB}/${subCategoryBySlug["ac-mcb"]?.slug ?? "ac-mcb"}` },
  { label: "AC SPD — Surge Protective Device", href: `/products/category/${categorySlugMap.SPD}/${subCategoryBySlug["ac-spd"]?.slug ?? "ac-spd"}` },
  { label: "ATS — Automatic Transfer Switch", href: `/products/category/${categorySlugMap.ATS}` },
  { label: "Voltage Protector", href: `/products/category/${categorySlugMap["Voltage Protector"]}` },
  { label: "DIN Rail Energy Meter", href: `/products/category/${categorySlugMap["Energy Meter"]}` },
];

export function Footer() {
  const recentPosts = blogPosts.slice(0, 4);

  return (
    <>
      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <Link className="brand footer-brand" href="/">
              {site.name}
            </Link>
            <p>
              {site.tagline}. CE / IEC / RoHS certified — exporting to 100+ countries across Europe, the Middle East,
              Southeast Asia and South America.
            </p>
            <p className="footer-contact-line">
              <strong>Address</strong>
              <span>{site.address}</span>
            </p>
            <p className="footer-contact-line">
              <strong>Phone</strong>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </p>
            <p className="footer-contact-line">
              <strong>Email</strong>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p className="footer-contact-line">
              <strong>WhatsApp</strong>
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </p>
          </div>

          <div>
            <h2>Solutions</h2>
            {solutionLinks.map((item) => (
              <Link key={item.href + item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
            <h2 style={{ marginTop: 22 }}>Quick Links</h2>
            <Link href="/about">About TPKELE</Link>
            <Link href="/contact">Contact Sales</Link>
            <Link href="/about#certifications">Quality Certifications</Link>
          </div>

          <div>
            <h2>Products</h2>
            {productLinks.map((item) => (
              <Link key={item.href + item.label} href={item.href} title={item.label}>
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            <h2>From the Blog</h2>
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} title={post.title}>
                {post.title}
              </Link>
            ))}
            <Link href="/blog" style={{ marginTop: 10, color: "var(--green)" }}>
              View all articles →
            </Link>
          </div>
        </div>
        <p className="copyright">© 2026 TPKELE. All Rights Reserved.</p>
      </footer>
      <InquiryModal
        triggerLabel="Submit inquiry"
        triggerClassName="float-contact"
        triggerAriaLabel="Submit inquiry"
        triggerContent={<span aria-hidden="true">↑</span>}
        intent="quote"
      />
    </>
  );
}
