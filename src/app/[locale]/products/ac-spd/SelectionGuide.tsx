import { selectionGuide } from "./data";

export function SelectionGuide() {
  return (
    <section className="section muted">
      <div className="section-heading centered">
        <p className="eyebrow">Selection Guide</p>
        <h2>Which AC SPD Do I Need?</h2>
        <p className="detail-copy" style={{ maxWidth: "600px", margin: "0 auto" }}>
          Match your installation type and voltage to the right SPD specification.
        </p>
      </div>
      <div className="cb-spec-table-wrap">
        <table className="cb-spec-table">
          <thead>
            <tr>
              <th>Application</th>
              <th>SPD Type</th>
              <th>Voltage Rating</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {selectionGuide.map((row) => (
              <tr key={row.application}>
                <td>{row.application}</td>
                <td><strong>{row.type}</strong></td>
                <td>{row.voltage}</td>
                <td>{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
