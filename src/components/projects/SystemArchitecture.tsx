import styles from './projects.module.css';

const mainNodes = [
  { key: 'pv', title: 'PV Array', spec: '600W · 55V · Bifacial' },
  { key: 'dc', title: 'DC Protection', spec: '63A 2P DC MCB + DC SPD' },
  { key: 'inv', title: 'Hybrid / Off-Grid Inverters', spec: '12kVA 3Φ · 8kVA 1Φ · 5kVA 1Φ' },
  { key: 'ac', title: 'AC Protection', spec: '63A AC MCB + AC SPD' },
  { key: 'ats', title: 'Automatic Changeover', spec: '1Φ + 3Φ · inverter-compatible' },
  { key: 'db', title: 'Distribution', spec: '12-way / 18-way DB → loads' },
];

export default function SystemArchitecture() {
  return (
    <div className={styles.architectureWrap} aria-label="Conceptual project power and protection architecture">
      <div className={styles.architectureMain}>
        {mainNodes.map((node, index) => (
          <div className={styles.archStep} key={node.key}>
            <div className={styles.archNode}>
              <span className={styles.archIndex}>{String(index + 1).padStart(2, '0')}</span>
              <strong>{node.title}</strong>
              <small>{node.spec}</small>
            </div>
            {index < mainNodes.length - 1 ? <span className={styles.archArrow} aria-hidden="true">→</span> : null}
          </div>
        ))}
      </div>
      <div className={styles.batteryBranch}>
        <span className={styles.branchLine} aria-hidden="true" />
        <div className={styles.batteryNode}>
          <span className={styles.archIndex}>BESS</span>
          <strong>48V / 200Ah Lithium Battery</strong>
          <small>≥9.6kWh usable · 250A battery fuse · 300A bus bar · battery cables / racking</small>
        </div>
        <p>Battery storage interfaces with the hybrid / off-grid inverter section; exact connection topology is to be confirmed by the final system design.</p>
      </div>
    </div>
  );
}
