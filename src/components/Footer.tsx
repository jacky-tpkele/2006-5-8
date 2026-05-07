import Link from "next/link";
import { InquiryModal } from "@/components/InquiryModal";
import { categorySlugMap, productFamilies, site } from "@/data/site";

export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <Link className="brand footer-brand" href="/">
              {site.name}
            </Link>
            <p>Manufacturer of low voltage electrical products for global distribution and project customers.</p>
            <div className="social-row" aria-label="Social links">
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="LinkedIn">
                in
              </a>
              <a href="#" aria-label="YouTube">
                ▶
              </a>
            </div>
          </div>
          <div>
            <h2>Quick Links</h2>
            <Link href="/about">About Us</Link>
            <Link href="/products">Products</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <h2>Products</h2>
            {productFamilies.slice(0, 5).map((product) => (
              <Link href={`/products/category/${categorySlugMap[product.category]}`} key={product.slug}>
                {product.shortName}
              </Link>
            ))}
          </div>
          <div>
            <h2>Contact Info</h2>
            <p>{site.address}</p>
            <p>{site.phone}</p>
            <p>{site.email}</p>
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
