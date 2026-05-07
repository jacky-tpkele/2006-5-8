import Link from "next/link";
import { InquiryModal } from "@/components/InquiryModal";

export default function NotFound() {
  return (
    <main>
      <section className="section centered">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="product-copy">The page may have moved. You can return to product selection or send an inquiry directly.</p>
        <div className="button-row">
          <Link className="btn primary" href="/products">
            View Products
          </Link>
          <InquiryModal triggerLabel="Contact Us" triggerClassName="btn ghost dark" intent="quote" />
        </div>
      </section>
    </main>
  );
}
