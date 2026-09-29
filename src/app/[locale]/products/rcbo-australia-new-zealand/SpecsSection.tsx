import { specs } from "./data";

export function SpecsSection() {
  return (
    <section className="section">
      <div className="section-heading centered">
        <p className="eyebrow">Technical Specifications</p>
        <h2>XYDL6-40 Series RCBO</h2>
      </div>
      <div className="cb-specs-table-wrap">
        <table className="cb-specs-table">
          <tbody>
            {specs.map((row) => (
              <tr key={row.label}>
                <th>{row.label}</th>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
