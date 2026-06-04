import Link from "next/link";
import { InquiryModal } from "@/components/InquiryModal";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-container">
        {/* 大数字404 */}
        <div className="not-found-number">
          <span className="not-found-digit">4</span>
          <span className="not-found-digit not-found-digit-middle">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="3" strokeDasharray="8 6" />
              <path d="M60 30v20M60 70v20M30 60h20M70 60h20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <circle cx="60" cy="60" r="8" fill="currentColor" />
            </svg>
          </span>
          <span className="not-found-digit">4</span>
        </div>

        {/* 标题和描述 */}
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-description">
          The page you're looking for doesn't exist or has been moved.<br />
          But don't worry — we have plenty of other pages to explore.
        </p>

        {/* CTA按钮 */}
        <div className="not-found-actions">
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
        <div className="not-found-quick-links">
          <h3>Quick Links</h3>
          <div className="not-found-links-grid">
            <Link href="/products/category/mcb/dc-mcb" className="not-found-link-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
              </svg>
              <div>
                <strong>DC MCB</strong>
                <span>Solar Circuit Breakers</span>
              </div>
            </Link>
            <Link href="/products/category/spd/dc-spd" className="not-found-link-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
              </svg>
              <div>
                <strong>DC SPD</strong>
                <span>PV Surge Protectors</span>
              </div>
            </Link>
            <Link href="/products/category/combiner-box" className="not-found-link-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
              </svg>
              <div>
                <strong>Combiner Box</strong>
                <span>PV String Protection</span>
              </div>
            </Link>
            <Link href="/about" className="not-found-link-card">
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
        <div className="not-found-contact">
          <p>Need help finding something specific?</p>
          <InquiryModal
            triggerLabel="Contact Us"
            triggerClassName="btn ghost dark"
            intent="quote"
          />
        </div>
      </div>

      <style jsx>{`
        .not-found-page {
          min-height: calc(100vh - 200px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .not-found-container {
          max-width: 800px;
          text-align: center;
        }

        .not-found-number {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 32px;
        }

        .not-found-digit {
          font-size: 140px;
          font-weight: 800;
          line-height: 1;
          color: var(--green);
          text-shadow: 0 4px 12px rgba(76, 175, 80, 0.2);
        }

        .not-found-digit-middle {
          color: var(--dark);
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .not-found-title {
          font-size: 36px;
          font-weight: 700;
          color: var(--dark);
          margin: 0 0 16px 0;
        }

        .not-found-description {
          font-size: 18px;
          color: var(--muted);
          line-height: 1.6;
          margin: 0 0 40px 0;
        }

        .not-found-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 60px;
        }

        .not-found-quick-links {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 40px;
        }

        .not-found-quick-links h3 {
          font-size: 20px;
          font-weight: 600;
          color: var(--dark);
          margin: 0 0 24px 0;
        }

        .not-found-links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
        }

        .not-found-link-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 24px 16px;
          background: #f8f9fa;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .not-found-link-card:hover {
          background: white;
          border-color: var(--green);
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(76, 175, 80, 0.15);
        }

        .not-found-link-card svg {
          color: var(--green);
        }

        .not-found-link-card strong {
          display: block;
          font-size: 16px;
          font-weight: 600;
          color: var(--dark);
          margin-bottom: 4px;
        }

        .not-found-link-card span {
          display: block;
          font-size: 13px;
          color: var(--muted);
        }

        .not-found-contact {
          padding-top: 24px;
          border-top: 1px solid #e9ecef;
        }

        .not-found-contact p {
          font-size: 16px;
          color: var(--muted);
          margin: 0 0 16px 0;
        }

        @media (max-width: 768px) {
          .not-found-digit {
            font-size: 80px;
          }

          .not-found-digit-middle svg {
            width: 60px;
            height: 60px;
          }

          .not-found-title {
            font-size: 28px;
          }

          .not-found-description {
            font-size: 16px;
          }

          .not-found-quick-links {
            padding: 24px 16px;
          }

          .not-found-links-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}

