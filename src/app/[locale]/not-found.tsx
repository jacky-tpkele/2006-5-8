import { Link } from "@/i18n/navigation";
import { InquiryModal } from "@/components/InquiryModal";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles["not-found-page"]}>
      <div className={styles["not-found-container"]}>
        {/* 大数字404 */}
        <div className={styles["not-found-number"]}>
          <span className={styles["not-found-digit"]}>4</span>
          <span className={`${styles["not-found-digit"]} ${styles["not-found-digit-middle"]}`}>
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="3" strokeDasharray="8 6" />
              <path d="M60 30v20M60 70v20M30 60h20M70 60h20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <circle cx="60" cy="60" r="8" fill="currentColor" />
            </svg>
          </span>
          <span className={styles["not-found-digit"]}>4</span>
        </div>

        {/* 标题和描述 */}
        <h1 className={styles["not-found-title"]}>Page Not Found</h1>
        <p className={styles["not-found-description"]}>
          The page you're looking for doesn't exist or has been moved.<br />
          But don't worry — we have plenty of other pages to explore.
        </p>

        {/* CTA按钮 */}
        <div className={styles["not-found-actions"]}>
          <Link href="/" className="btn primary">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 8 }}>
              <path d="M8 2L2 7h2v5h3V9h2v3h3V7h2L8 2z" fill="currentColor" />
            </svg>
            Back to Home
          </Link>
          <Link href="/products" className="btn ghost dark">
            Browse Products
          </Link>
        </div>

        {/* 快速导航 */}
        <div className={styles["not-found-quick-links"]}>
          <h3>Quick Links</h3>
          <div className={styles["not-found-links-grid"]}>
            <Link href="/products/category/mcb/dc-mcb" className={styles["not-found-link-card"]}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
              </svg>
              <div>
                <strong>DC MCB</strong>
                <span>Solar Circuit Breakers</span>
              </div>
            </Link>
            <Link href="/products/category/spd/dc-spd" className={styles["not-found-link-card"]}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
              </svg>
              <div>
                <strong>DC SPD</strong>
                <span>PV Surge Protectors</span>
              </div>
            </Link>
            <Link href="/products/category/combiner-box" className={styles["not-found-link-card"]}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
              </svg>
              <div>
                <strong>Combiner Box</strong>
                <span>PV String Protection</span>
              </div>
            </Link>
            <Link href="/about" className={styles["not-found-link-card"]}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
              </svg>
              <div>
                <strong>About Us</strong>
                <span>Factory & Certifications</span>
              </div>
            </Link>
          </div>
        </div>

        {/* 联系CTA */}
        <div className={styles["not-found-contact"]}>
          <p>Need help finding something specific?</p>
          <InquiryModal
            triggerLabel="Contact Us"
            triggerClassName="btn ghost dark"
            intent="quote"
          />
        </div>
      </div>
    </main>
  );
}

