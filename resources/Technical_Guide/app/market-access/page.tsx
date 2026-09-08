import '../../styles/tpkele-guide.css';
import AdvisorCard from '../../components/market-access/AdvisorCard';
import { guides } from '../../lib/guides';

export default function MarketAccessLandingPage() {
  return (
    <main className="tpk-advisor">
      <div className="tpk-advisor__container">
        <section className="tpk-advisor__hero">
          <div className="tpk-guide-index__eyebrow">TPKELE Market Access</div>
          <h1>Connect Technical Product Selection to Market Access Guidance</h1>
          <p>
            Use this landing page as the bridge between technical learning and export-oriented next steps.
            Users can open the advisor with product and application information already prepared.
          </p>
        </section>

        <section className="tpk-advisor__grid">
          {guides.slice(0, 10).map((guide) => (
            <AdvisorCard
              key={guide.slug}
              title={guide.title}
              product={guide.advisor.product}
              application={guide.advisor.application}
              desc={guide.description}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
