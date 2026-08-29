import { specs } from "./data";

export function SpecsSection() {
  return (
    <section className="section muted">
      <div className="section-heading centered">
        <p className="eyebrow">Technical Specifications</p>
        <h2>DC MCB Specification Summary</h2>
      </div>
      <div className="cb-spec-layout">
        <div className="cb-spec-highlights">
          <div className="cb-highlight-card">
            <div className="cb-highlight-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h4v4H7zM13 7h4v4h-4zM7 13h4v4H7zM13 13h4v4h-4z"/></svg>
            </div>
            <span className="cb-highlight-label">POLES</span>
            <span className="cb-highlight-value">1P–4P</span>
          </div>
          <div className="cb-highlight-card">
            <div className="cb-highlight-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
            </div>
            <span className="cb-highlight-label">RATED CURRENT</span>
            <span className="cb-highlight-value">6A–125A</span>
          </div>
          <div className="cb-highlight-card">
            <div className="cb-highlight-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <span className="cb-highlight-label">RATED VOLTAGE</span>
            <span className="cb-highlight-value">Up to 1500VDC</span>
          </div>
          <div className="cb-highlight-card">
            <div className="cb-highlight-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 17l4-4 4 4 5-6 5 6"/><path d="M3 7h18"/></svg>
            </div>
            <span className="cb-highlight-label">TRIP CURVE</span>
            <span className="cb-highlight-value">B/C/D/K</span>
          </div>
        </div>
        <div className="cb-spec-table-wrap">
          <table className="cb-spec-table">
            <tbody>
              {specs.map((s) => (
                <tr key={s.label}>
                  <th>{s.label}</th>
                  <td>{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
