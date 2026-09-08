import '../../styles/tpkele-guide.css';
import GuideCard from '../../components/technical-guide/GuideCard';
import { guides } from '../../lib/guides';

export default function TechnicalGuideIndexPage() {
  return (
    <main className="tpk-guide-index">
      <div className="tpk-guide-index__container">
        <div className="tpk-guide-index__hero">
          <div className="tpk-guide-index__eyebrow">TPKELE Technical Guide System</div>
          <h1>Technical Guides Built for Search Traffic, Product Education and Inquiry Conversion</h1>
          <p>
            This guide hub connects SEO-friendly technical articles, product education,
            related product paths and the TPKELE Market Access Advisor into one structured user journey.
          </p>
        </div>

        <div className="tpk-guide-index__grid">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </div>
    </main>
  );
}
