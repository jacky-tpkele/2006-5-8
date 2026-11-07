import { Link } from "@/i18n/navigation";

type CategorySeoContentProps = {
  slug: string;
};

export function CategorySeoContent({ slug }: CategorySeoContentProps) {
  if (slug === "voltage-protector") {
    return <VoltageProtectorContent />;
  }
  if (slug === "energy-meter") {
    return <EnergyMeterContent />;
  }
  if (slug === "spd") {
    return <SpdContent />;
  }
  return null;
}

function VoltageProtectorContent() {
  return (
    <section className="section category-seo-content" style={{ paddingTop: 0 }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 24px" }}>
        <div className="seo-text-block" style={{ lineHeight: 1.7, color: "#333" }}>
          <h2 style={{ fontSize: "28px", marginTop: "40px", marginBottom: "16px", color: "#1a1a1a" }}>
            What is a Voltage Protector and Why You Need One
          </h2>
          <p style={{ marginBottom: "16px" }}>
            A voltage protector (also called a voltage protection device or voltage controller device) is an automatic
            protective relay that monitors incoming mains voltage and disconnects downstream loads when voltage moves
            outside safe operating limits. Unlike a surge protector (SPD) that handles transient voltage spikes lasting
            microseconds, a voltage protector addresses sustained over-voltage and under-voltage conditions — brownouts,
            voltage sags and swells — that can damage motors, compressors and sensitive electronics over seconds or
            minutes of exposure.
          </p>
          <p style={{ marginBottom: "16px" }}>
            In regions with unstable grid infrastructure, voltage fluctuations are a leading cause of appliance failure.
            Refrigerators, air conditioners, washing machines and HVAC equipment rely on motors and electronic
            controllers designed for a narrow voltage range (typically ±10% of nominal). Prolonged over-voltage
            accelerates insulation breakdown; prolonged under-voltage causes motor overheating and stalling. A voltage
            protector acts as a safety disconnect, isolating the load until mains quality returns to acceptable levels.
          </p>

          <h3 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "#1a1a1a" }}>
            How Voltage Protection Works
          </h3>
          <p style={{ marginBottom: "16px" }}>
            TPKELE voltage protectors use electronic voltage sensing to continuously monitor the supply. When voltage
            exceeds the upper threshold (typically 245V–280V adjustable for 230V systems) or drops below the lower
            threshold (150V–210V adjustable), the device opens an internal contactor or relay to disconnect the load
            within 200 milliseconds. This response time is fast enough to protect against sustained faults but slow
            enough to ignore brief transients (which the upstream{" "}
            <Link href="/products/category/spd/ac-spd">AC SPD</Link> handles).
          </p>
          <p style={{ marginBottom: "16px" }}>
            Once mains voltage returns to the safe window and remains stable for a configurable reconnection delay
            (typically 30 seconds, adjustable 5s–600s), the voltage protector automatically reconnects the load. The
            delay prevents repeated on-off cycling during short-duration instability and allows inductive loads (motors,
            transformers) to fully de-energize before reconnection.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Three-phase models monitor all three phases independently plus neutral, and include phase-loss and
            phase-sequence detection — critical for three-phase motors, which can be damaged by single-phase operation
            or reverse rotation.
          </p>

          <h3 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "#1a1a1a" }}>
            Voltage Protector vs Surge Protector (SPD): Key Differences
          </h3>
          <p style={{ marginBottom: "16px" }}>
            Many users confuse voltage protectors with surge protectors. Both protect electrical equipment, but they
            address different types of voltage disturbances:
          </p>
          <ul style={{ marginBottom: "16px", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "8px" }}>
              <strong>Voltage Protector:</strong> Protects against sustained over-voltage and under-voltage (seconds to
              minutes). Disconnects the load and reconnects automatically. Common in regions with unstable mains
              quality. Installed on sensitive branch circuits downstream of the{" "}
              <Link href="/products/category/mcb/ac-mcb">AC MCB</Link>.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Surge Protector (SPD):</strong> Protects against transient voltage spikes (microseconds to
              milliseconds) caused by lightning, switching operations or inductive load back-EMF. Clamps or diverts
              surge energy. Installed at distribution board incoming supply. Does not disconnect the load. Learn more
              about our <Link href="/products/category/spd/ac-spd">AC SPD series</Link>.
            </li>
          </ul>
          <p style={{ marginBottom: "16px" }}>
            For complete protection, many installations use both: an AC SPD at the main distribution board incoming
            supply (to handle transient surges) and voltage protectors on critical circuits (to handle sustained voltage
            quality issues).
          </p>

          <h3 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "#1a1a1a" }}>
            Voltage Protector vs Voltage Stabilizer
          </h3>
          <p style={{ marginBottom: "16px" }}>
            A voltage stabilizer (also called automatic voltage regulator, AVR) is a different device. Stabilizers
            continuously adjust output voltage to maintain a steady level (e.g. 230V ±2%) regardless of input
            fluctuations, using transformer taps, buck-boost circuits or electronic regulation. Voltage protectors simply
            disconnect when voltage goes outside limits; they do not regulate. Stabilizers are larger, more expensive and
            used where continuous operation is critical (medical equipment, data centers, precision machinery). Voltage
            protectors are simpler, lower cost and suitable where brief disconnection during a fault is acceptable — the
            standard choice for residential and light commercial protection.
          </p>

          <h3 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "#1a1a1a" }}>
            Applications: When to Install Voltage Protection
          </h3>
          <p style={{ marginBottom: "16px" }}>Voltage protectors are essential in these scenarios:</p>
          <ul style={{ marginBottom: "16px", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "8px" }}>
              <strong>Residential circuits in emerging markets:</strong> Regions with frequent brownouts, voltage swings
              or rural grid instability. Protects refrigerators, air conditioners, washing machines and home electronics.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Motor-driven loads:</strong> Refrigeration compressors, HVAC equipment, pumps and fans are
              particularly sensitive to under-voltage (motor overheating, stalling) and over-voltage (insulation stress).
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Commercial premises:</strong> Retail shops, restaurants and offices with sensitive electronics, POS
              systems or variable-speed drives.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Generator backup systems:</strong> When used downstream of an{" "}
              <Link href="/products/category/ats">automatic transfer switch (ATS)</Link>, voltage protectors guard loads
              against voltage transients during source switching and generator frequency/voltage instability during
              startup.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Solar hybrid installations:</strong> Grid-tied solar inverters can be damaged by sustained grid
              over-voltage or under-voltage. Install voltage protectors on the inverter AC output circuit to protect the
              inverter and comply with grid connection standards.
            </li>
          </ul>

          <h3 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "#1a1a1a" }}>
            How to Select the Right Voltage Protector
          </h3>
          <p style={{ marginBottom: "16px" }}>When specifying a voltage protector, confirm the following parameters:</p>
          <ol style={{ marginBottom: "16px", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "8px" }}>
              <strong>Phase configuration:</strong> Single-phase (230V, 1P+N or 2P) for residential and light commercial
              circuits; three-phase (400V, 3P or 4P) for industrial equipment and commercial building distribution.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Current rating:</strong> Match or exceed the upstream branch circuit{" "}
              <Link href="/products/category/mcb/ac-mcb">AC MCB</Link> rating. Common ratings: 40A, 63A, 80A, 100A. The
              voltage protector must handle the full load current continuously.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Adjustable thresholds:</strong> Models with field-adjustable over-voltage and under-voltage trip
              points allow site-specific tuning to match local grid conditions and load tolerance.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Reconnection delay:</strong> Configurable delay (5s–600s) prevents repeated cycling during unstable
              periods. Typical setting: 30s–60s for general loads, 120s–300s for sensitive equipment or unstable grids.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Protection features (three-phase):</strong> Confirm that three-phase models include phase-loss
              detection (single-phasing protection) and phase-sequence detection (prevents motor reverse rotation).
            </li>
          </ol>

          <h3 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "#1a1a1a" }}>
            System Integration: Complete Circuit Protection
          </h3>
          <p style={{ marginBottom: "16px" }}>
            Voltage protectors are part of a layered protection strategy. For complete branch circuit protection, the
            standard layout from upstream to downstream is:
          </p>
          <ol style={{ marginBottom: "16px", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "8px" }}>
              <strong>AC MCB</strong> (upstream): Provides overload and short-circuit protection. The MCB must be sized
              to the cable and load. View our <Link href="/products/category/mcb/ac-mcb">AC MCB selection guide</Link>.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Voltage Protector</strong> (downstream of MCB): Protects against sustained voltage quality issues.
              Disconnect/reconnect function isolates the load during faults.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>AC SPD</strong> (at distribution board incoming supply): Protects against transient surges. One SPD
              can protect multiple circuits; install at the main incomer or sub-distribution board. View our{" "}
              <Link href="/products/category/spd/ac-spd">AC SPD range</Link>.
            </li>
          </ol>
          <p style={{ marginBottom: "32px" }}>
            For automatic backup power systems, install voltage protectors downstream of the{" "}
            <Link href="/products/category/ats">ATS output</Link> to protect loads from voltage transients during
            mains-to-generator transfer and generator voltage regulation issues during startup.
          </p>

          <div
            style={{
              background: "#f8f9fa",
              padding: "24px",
              borderRadius: "8px",
              marginTop: "32px",
              marginBottom: "32px",
            }}
          >
            <h3 style={{ fontSize: "20px", marginBottom: "16px", color: "#1a1a1a" }}>
              Complete Your Protection System
            </h3>
            <p style={{ marginBottom: "16px", color: "#555" }}>
              Voltage protectors work best as part of a coordinated protection strategy:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
              <Link
                href="/products/category/mcb/ac-mcb"
                style={{
                  display: "block",
                  padding: "16px",
                  background: "white",
                  borderRadius: "6px",
                  textDecoration: "none",
                  border: "1px solid #e0e0e0",
                }}
              >
                <strong style={{ display: "block", marginBottom: "8px", color: "#1a1a1a" }}>AC MCB →</strong>
                <span style={{ fontSize: "14px", color: "#666" }}>
                  Upstream overload & short-circuit protection
                </span>
              </Link>
              <Link
                href="/products/category/spd/ac-spd"
                style={{
                  display: "block",
                  padding: "16px",
                  background: "white",
                  borderRadius: "6px",
                  textDecoration: "none",
                  border: "1px solid #e0e0e0",
                }}
              >
                <strong style={{ display: "block", marginBottom: "8px", color: "#1a1a1a" }}>AC SPD →</strong>
                <span style={{ fontSize: "14px", color: "#666" }}>
                  Transient surge protection at distribution board
                </span>
              </Link>
              <Link
                href="/products/category/ats"
                style={{
                  display: "block",
                  padding: "16px",
                  background: "white",
                  borderRadius: "6px",
                  textDecoration: "none",
                  border: "1px solid #e0e0e0",
                }}
              >
                <strong style={{ display: "block", marginBottom: "8px", color: "#1a1a1a" }}>ATS →</strong>
                <span style={{ fontSize: "14px", color: "#666" }}>
                  Use with voltage protector for generator backup
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EnergyMeterContent() {
  return (
    <section className="section category-seo-content" style={{ paddingTop: 0 }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 24px" }}>
        <div className="seo-text-block" style={{ lineHeight: 1.7, color: "#333" }}>
          <h2 style={{ fontSize: "28px", marginTop: "40px", marginBottom: "16px", color: "#1a1a1a" }}>
            DIN Rail Energy Meter: Measure, Monitor and Manage Electrical Consumption
          </h2>
          <p style={{ marginBottom: "16px" }}>
            A DIN rail energy meter (also called a kWh meter or power meter) measures active energy consumption, current,
            voltage and power factor in distribution boards and sub-panels. Mounted on standard 35mm DIN rail, these
            meters provide the measurement foundation for tenant sub-metering and billing, industrial energy monitoring,
            solar self-consumption tracking and building energy management (BMS) integration.
          </p>
          <p style={{ marginBottom: "16px" }}>
            TPKELE DIN rail energy meters are available in single-phase and three-phase configurations, direct-connect and
            CT-operated versions, with pulse output or RS485 Modbus communication for integration with SCADA, energy
            management software and IoT platforms. Class 1 active energy accuracy per IEC 62052-21 and IEC 62053-21
            ensures reliable measurement for operational monitoring and tenant billing applications (where local
            regulations permit).
          </p>

          <h3 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "#1a1a1a" }}>
            Why Install a DIN Rail Energy Meter?
          </h3>
          <p style={{ marginBottom: "16px" }}>
            Energy meters transform invisible consumption into visible, measurable data — the first step in managing
            energy cost and carbon footprint. Common applications include:
          </p>
          <ul style={{ marginBottom: "16px", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "8px" }}>
              <strong>Sub-metering in commercial buildings:</strong> Measure energy per tenant, department or floor for
              fair cost allocation. Energy meters installed on each tenant's distribution board enable accurate billing
              without estimated pro-rata splits.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Industrial energy management:</strong> ISO 50001 and energy audits require measurement of
              significant energy uses (SEUs). Install energy meters on major equipment (chillers, compressors, production
              lines) to identify waste and verify savings after efficiency improvements.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Solar PV generation monitoring:</strong> Measure solar inverter AC output (kWh generated) and grid
              connection point (kWh imported/exported). Energy meters with RS485 Modbus allow integration with solar
              monitoring platforms for real-time generation, self-consumption and feed-in tracking.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Data center power monitoring:</strong> Measure per-rack or per-cabinet consumption for capacity
              planning, PUE calculation and tenant billing in colocation facilities.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Building automation and BMS:</strong> RS485 Modbus energy meters integrate with building management
              systems (BMS) for centralized monitoring, alarm notification and energy dashboards.
            </li>
          </ul>

          <h3 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "#1a1a1a" }}>
            Direct-Connect vs CT-Operated Energy Meters
          </h3>
          <p style={{ marginBottom: "16px" }}>
            Energy meters are available in two current measurement configurations:
          </p>
          <p style={{ marginBottom: "16px" }}>
            <strong>Direct-connect meters</strong> (also called direct-wired or through-wired) pass the load current
            directly through the meter's terminals. This is the simpler and lower-cost option, suitable for circuits up to
            80A or 100A depending on the model. The meter sits in series with the load, typically installed on the DIN
            rail adjacent to the branch circuit <Link href="/products/category/mcb/ac-mcb">AC MCB</Link>. Common in
            residential, light commercial and small industrial applications.
          </p>
          <p style={{ marginBottom: "16px" }}>
            <strong>CT-operated meters</strong> (current transformer operated) measure current indirectly via external CTs
            (e.g. 100A/5A, 200A/5A, 500A/5A). The meter receives a low-current signal (typically 5A secondary)
            proportional to the actual load current. This configuration is used for high-current circuits (above 100A),
            where passing full load current through the meter is impractical, or where the meter must be installed
            remotely from the load conductor for safety or accessibility. CT-operated meters are standard in three-phase
            industrial panels, main distribution boards and heavy equipment monitoring.
          </p>
          <p style={{ marginBottom: "16px" }}>
            <strong>Selection tip:</strong> For branch circuits and sub-metering up to 63A–80A, choose direct-connect
            meters for simplicity. For main incomers, large equipment or retrofits where opening the conductor is
            difficult, choose CT-operated meters.
          </p>

          <h3 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "#1a1a1a" }}>
            Communication Options: Pulse Output vs RS485 Modbus
          </h3>
          <p style={{ marginBottom: "16px" }}>
            Modern DIN rail energy meters offer communication outputs for remote monitoring and integration:
          </p>
          <p style={{ marginBottom: "16px" }}>
            <strong>Pulse output (S0 pulse):</strong> A simple dry contact that closes once per unit of energy consumed
            (e.g. 1 pulse = 0.01 kWh or 1 Wh). The pulse output connects to a counter, PLC or BMS digital input for
            totalizing. Pulse output is passive, unidirectional and does not provide real-time power, voltage or current
            data — only cumulative energy. Suitable for basic energy logging and integration with older control systems.
          </p>
          <p style={{ marginBottom: "16px" }}>
            <strong>RS485 Modbus RTU:</strong> A digital communication bus that allows one or more meters to be connected
            to a central controller, gateway or SCADA system. Modbus provides bi-directional communication: the controller
            can query the meter for real-time voltage, current, power, power factor, frequency and cumulative energy
            (kWh). Multiple meters (up to 32 or 247 depending on configuration) share one RS485 bus, each with a unique
            address. Modbus is the standard choice for building energy management, ISO 50001 monitoring and solar PV
            systems where detailed data and remote access are required.
          </p>
          <p style={{ marginBottom: "16px" }}>
            For modern installations, RS485 Modbus meters offer the best flexibility and future-proofing. Pulse-output
            meters remain common in simple retrofit applications where only totalizing is needed.
          </p>

          <h3 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "#1a1a1a" }}>
            Accuracy Class and MID Approval
          </h3>
          <p style={{ marginBottom: "16px" }}>
            <strong>Class 1 accuracy</strong> (per IEC 62053-21) is the standard for TPKELE DIN rail energy meters. Class
            1 means ±1% measurement error under reference conditions, suitable for operational sub-metering, tenant billing
            (where local regulations permit Class 1) and energy monitoring for ISO 50001 or energy audits. For industrial
            energy management and consumption analysis, Class 1 accuracy is more than sufficient.
          </p>
          <p style={{ marginBottom: "16px" }}>
            <strong>MID approval</strong> (Measuring Instruments Directive, EU 2014/32/EU) is required for legal billing
            applications in the European Union — tenant billing, landlord metering and any commercial transaction based on
            the meter reading. MID approval requires third-party type testing, production quality control and meter
            sealing. TPKELE offers MID-approved energy meters on request for EU projects where legal metrology compliance
            is required. For operational monitoring (not billing), standard Class 1 CE-marked meters are appropriate and
            lower cost.
          </p>

          <h3 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "#1a1a1a" }}>
            Energy Meter Installation and Circuit Protection
          </h3>
          <p style={{ marginBottom: "16px" }}>
            Energy meters are installed on DIN rail inside distribution boards, typically adjacent to or downstream of the
            circuit's <Link href="/products/category/mcb/ac-mcb">AC MCB</Link>. For direct-connect meters, the meter sits
            in series with the load: incoming supply connects to the meter input terminals, and the load connects to the
            meter output terminals. The meter must be protected by an upstream MCB sized to the cable and load.
          </p>
          <p style={{ marginBottom: "16px" }}>
            For installations with <Link href="/products/category/ats">automatic transfer switches (ATS)</Link>, install
            the energy meter downstream of the ATS to measure total consumption regardless of source (mains or generator).
            To measure each source separately, install one meter on each ATS input.
          </p>
          <p style={{ marginBottom: "16px" }}>
            In solar PV systems, install one energy meter on the inverter AC output (to measure generation) and a second
            meter at the grid connection point (to measure import/export). This two-meter layout is standard for net
            metering, feed-in tariff schemes and self-consumption monitoring. Combine with{" "}
            <Link href="/products/category/voltage-protector">voltage protectors</Link> to protect the inverter from grid
            voltage swings.
          </p>

          <h3 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "#1a1a1a" }}>
            How to Select the Right DIN Rail Energy Meter
          </h3>
          <p style={{ marginBottom: "16px" }}>When specifying an energy meter, confirm the following parameters:</p>
          <ol style={{ marginBottom: "16px", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "8px" }}>
              <strong>Phase configuration:</strong> Single-phase (230V AC, 1P+N) for residential and light commercial
              circuits; three-phase (400V AC, 3P+N or 3P) for industrial equipment and commercial building distribution.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Current rating:</strong> Direct-connect meters are available in ratings like 5(80)A (5A reference
              current, 80A maximum). CT-operated meters use external CTs sized to the load (e.g. 100A/5A, 200A/5A,
              500A/5A).
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Communication:</strong> Choose pulse output for simple energy totalizing, or RS485 Modbus for
              integration with BMS, SCADA or energy management platforms.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Accuracy and approval:</strong> Class 1 for operational monitoring; MID-approved for legal tenant
              billing in the EU.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Display:</strong> LCD digital display showing real-time kWh, voltage, current and power simplifies
              field inspection and commissioning.
            </li>
          </ol>

          <div
            style={{
              background: "#f8f9fa",
              padding: "24px",
              borderRadius: "8px",
              marginTop: "32px",
              marginBottom: "32px",
            }}
          >
            <h3 style={{ fontSize: "20px", marginBottom: "16px", color: "#1a1a1a" }}>
              Related Products for Complete Metering and Protection
            </h3>
            <p style={{ marginBottom: "16px", color: "#555" }}>
              Energy meters work as part of a complete distribution system:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
              <Link
                href="/products/category/mcb/ac-mcb"
                style={{
                  display: "block",
                  padding: "16px",
                  background: "white",
                  borderRadius: "6px",
                  textDecoration: "none",
                  border: "1px solid #e0e0e0",
                }}
              >
                <strong style={{ display: "block", marginBottom: "8px", color: "#1a1a1a" }}>AC MCB →</strong>
                <span style={{ fontSize: "14px", color: "#666" }}>Upstream overload protection for metered circuits</span>
              </Link>
              <Link
                href="/products/category/voltage-protector"
                style={{
                  display: "block",
                  padding: "16px",
                  background: "white",
                  borderRadius: "6px",
                  textDecoration: "none",
                  border: "1px solid #e0e0e0",
                }}
              >
                <strong style={{ display: "block", marginBottom: "8px", color: "#1a1a1a" }}>Voltage Protector →</strong>
                <span style={{ fontSize: "14px", color: "#666" }}>Protect sensitive loads in monitored circuits</span>
              </Link>
              <Link
                href="/products/category/ats"
                style={{
                  display: "block",
                  padding: "16px",
                  background: "white",
                  borderRadius: "6px",
                  textDecoration: "none",
                  border: "1px solid #e0e0e0",
                }}
              >
                <strong style={{ display: "block", marginBottom: "8px", color: "#1a1a1a" }}>ATS →</strong>
                <span style={{ fontSize: "14px", color: "#666" }}>
                  Measure consumption downstream of transfer switch
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpdContent() {
  return (
    <section className="section category-seo-content" style={{ paddingTop: 0 }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 24px" }}>
        <div className="seo-text-block" style={{ lineHeight: 1.7, color: "#333" }}>
          <h2 style={{ fontSize: "28px", marginTop: "40px", marginBottom: "16px", color: "#1a1a1a" }}>
            Surge Protective Devices (SPD): Protect Against Lightning and Transient Over-Voltage
          </h2>
          <p style={{ marginBottom: "16px" }}>
            A surge protective device (SPD), also called a surge protector or surge arrester, protects electrical
            equipment from transient over-voltage spikes caused by lightning strikes, switching operations, grid faults or
            inductive load back-EMF. Unlike circuit breakers that interrupt overcurrent faults, or{" "}
            <Link href="/products/category/voltage-protector">voltage protectors</Link> that disconnect during sustained
            voltage issues, an SPD clamps or diverts surge energy within nanoseconds — fast enough to protect sensitive
            electronics, inverters and control systems before damage occurs.
          </p>
          <p style={{ marginBottom: "16px" }}>
            TPKELE manufactures AC SPDs for distribution boards and inverter AC outputs (per IEC 61643-11), and DC SPDs
            specifically designed for photovoltaic systems (per IEC 61643-31). Both lines feature pluggable varistor
            modules, visual status indication and optional remote signaling contacts — making field inspection and
            maintenance simple for solar EPCs, panel builders and distributors.
          </p>

          <h3 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "#1a1a1a" }}>
            How SPDs Work: Clamping Transient Surge Energy
          </h3>
          <p style={{ marginBottom: "16px" }}>
            SPDs use metal oxide varistors (MOVs), gas discharge tubes (GDTs) or a combination of both to divert surge
            current away from protected equipment. Under normal voltage, the SPD presents high impedance and does not
            conduct. When a transient over-voltage spike arrives (e.g. from a nearby lightning strike or inductive
            switching), the SPD's impedance drops sharply, creating a low-resistance path to ground and clamping the
            voltage to a safe level (the voltage protection level, Up). Response time is typically under 25 nanoseconds —
            far faster than any mechanical switch or circuit breaker.
          </p>
          <p style={{ marginBottom: "16px" }}>
            After the surge passes, the SPD returns to its high-impedance state and normal operation resumes. Repeated
            surge exposure gradually degrades the varistor material; when an SPD reaches end-of-life, its visual status
            window changes color (typically green → red) and an optional remote signaling contact opens or closes,
            allowing integration with building management systems (BMS) or alarm panels.
          </p>

          <h3 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "#1a1a1a" }}>
            Type 1 SPD vs Type 2 SPD: Which Do You Need?
          </h3>
          <p style={{ marginBottom: "16px" }}>
            IEC 61643-11 defines SPD classification by tested impulse waveform and intended location. Understanding the
            distinction is critical for correct specification:
          </p>

          <p style={{ marginBottom: "16px" }}>
            <strong>Type 1 SPD (Class I):</strong> Tested with 10/350μs impulse current waveform, which simulates a
            direct lightning strike current. Type 1 SPDs have high energy absorption capacity (typical Iimp 12.5kA or 25kA
            per pole) and are installed at the building service entrance (main distribution board incoming supply) where a
            lightning protection system (LPS, air terminal and down conductors) is present. Type 1 SPDs protect against
            the portion of lightning current that enters the electrical system via the down conductor. They are mandatory
            in many regions when an LPS is installed, to prevent side-flashing and internal system damage.
          </p>

          <p style={{ marginBottom: "16px" }}>
            <strong>Type 2 SPD (Class II):</strong> Tested with 8/20μs impulse current waveform, which represents induced
            surges and remote lightning effects. Type 2 is the standard SPD for sub-distribution boards, branch circuits
            and equipment protection. It handles surges caused by switching operations, nearby lightning (not direct
            strike), grid faults and inductive load back-EMF. Type 2 SPDs are installed at distribution boards throughout
            the building, downstream of any Type 1 device. Typical In (nominal discharge current) ranges from 5kA to 20kA
            per pole; Imax (maximum discharge current) from 20kA to 40kA.
          </p>

          <p style={{ marginBottom: "16px" }}>
            <strong>Type 1+2 SPD (combined):</strong> A single device tested to both Type 1 (10/350μs) and Type 2 (8/20μs)
            standards. Type 1+2 SPDs are used at the main distribution board when a lightning protection system is present
            but space or budget does not allow separate Type 1 and Type 2 devices. They provide both direct strike
            protection and induced surge protection in one unit.
          </p>

          <p style={{ marginBottom: "16px" }}>
            <strong>Selection rule:</strong> Install Type 1 (or Type 1+2) at the main incomer if an LPS is present.
            Install Type 2 at all sub-distribution boards and sensitive equipment. If no LPS is present, Type 2 at the
            main incomer is typically sufficient, though some codes and insurance requirements may specify Type 1+2
            regardless.
          </p>

          <h3 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "#1a1a1a" }}>
            AC SPD vs DC SPD: Different Systems, Different Requirements
          </h3>
          <p style={{ marginBottom: "16px" }}>
            AC and DC surge protective devices are not interchangeable. DC SPDs for photovoltaic systems face unique
            challenges:
          </p>

          <p style={{ marginBottom: "16px" }}>
            <strong>AC SPDs</strong> (per IEC 61643-11) are designed for alternating current systems with a natural
            current zero-crossing every half-cycle (50Hz or 60Hz). This zero-crossing helps extinguish any follow-on
            current after a surge event. AC SPDs are installed at distribution board incoming supplies, inverter AC outputs
            and sub-panels. Typical ratings: Uc (maximum continuous operating voltage) 275V / 320V / 385V for 230V / 400V
            systems, In 5–20kA, Imax 20–40kA.
          </p>

          <p style={{ marginBottom: "16px" }}>
            <strong>DC SPDs</strong> (per IEC 61643-31) are specifically designed for photovoltaic systems, where DC
            current has no zero-crossing and arc extinction is much more difficult. DC SPDs must handle the system
            open-circuit voltage (Uoc) under worst-case conditions (low temperature, high irradiance). They are installed
            on PV string inputs, <Link href="/products/combiner-box">combiner box</Link> outputs and inverter DC inputs.
            DC SPDs are rated by Ucpv (maximum continuous DC voltage, e.g. 600V / 1000V / 1200V / 1500V) and must include
            DC-rated disconnectors or fuses upstream to interrupt follow-on current after a surge. Using an AC SPD on a DC
            PV system is unsafe and will fail.
          </p>

          <p style={{ marginBottom: "16px" }}>
            <strong>Do you need both?</strong> Yes — solar PV systems require DC SPDs on the PV array side (strings,
            combiner boxes, inverter DC input) and AC SPDs on the inverter AC output and building distribution board. Each
            side faces different surge sources and requires protection matched to the voltage and waveform.
          </p>

          <h3 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "#1a1a1a" }}>
            Key SPD Specifications: In, Imax, Up and Uc
          </h3>
          <p style={{ marginBottom: "16px" }}>Understanding SPD ratings ensures correct selection and coordination:</p>
          <ul style={{ marginBottom: "16px", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "8px" }}>
              <strong>Uc (AC) / Ucpv (DC) — Maximum Continuous Operating Voltage:</strong> The maximum steady-state
              voltage the SPD can withstand continuously. For AC systems, Uc must exceed the system nominal voltage (e.g.
              Uc 275V for 230V system, Uc 385V for 400V system). For DC PV systems, Ucpv must exceed the array
              open-circuit voltage (Uoc) at minimum temperature — typically Ucpv = 1.2 × Uoc_STC as a safety margin.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>In — Nominal Discharge Current (8/20μs):</strong> The current the SPD can discharge repeatedly
              (typically 15–20 times) without degradation. Common values: 5kA, 10kA, 15kA, 20kA per pole. Higher In means
              longer service life in high-exposure environments.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Imax — Maximum Discharge Current (8/20μs):</strong> The peak current the SPD can handle in a single
              surge event and remain functional. Typical Imax values: 20kA, 40kA, 65kA. Imax must exceed the expected
              worst-case surge current at the installation location.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Up — Voltage Protection Level:</strong> The maximum voltage that appears at the SPD terminals during
              a surge (the clamping voltage). Lower Up means better protection for sensitive equipment. Typical Up for
              Type 2 AC SPDs: ≤1.5kV. Equipment withstand voltage (impulse immunity) should exceed Up.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Response time:</strong> Time from surge arrival to SPD conduction. Typical values: &lt;25ns for
              varistor-based SPDs, ensuring protection before equipment damage.
            </li>
          </ul>

          <h3 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "#1a1a1a" }}>
            SPD Installation and Coordination with Circuit Breakers
          </h3>
          <p style={{ marginBottom: "16px" }}>
            SPDs are installed on DIN rail inside distribution boards, typically at the incoming supply (for main board
            protection) or adjacent to sensitive equipment circuits. SPDs connect in parallel (line to ground, line to
            neutral) — they do not carry load current under normal operation.
          </p>
          <p style={{ marginBottom: "16px" }}>
            <strong>Upstream protection:</strong> Every SPD must have an upstream overcurrent protective device (
            <Link href="/products/category/mcb/ac-mcb">AC MCB</Link> or fuse) to interrupt follow-on current if the SPD
            fails short-circuit. The SPD datasheet specifies the maximum backup protection rating (e.g. "protected by 63A
            gG fuse" or "protected by C32 MCB"). Do not exceed this rating — an oversized MCB may not interrupt fault
            current fast enough, leading to fire hazard.
          </p>
          <p style={{ marginBottom: "16px" }}>
            <strong>Installation location:</strong> Install the SPD as close as possible to the equipment it protects, and
            use short, direct conductors (ideally &lt;0.5m) to minimize lead inductance. Long leads reduce SPD
            effectiveness by allowing inductive voltage drop during fast-rise surges.
          </p>
          <p style={{ marginBottom: "16px" }}>
            <strong>Cascading SPDs:</strong> In large installations, use cascaded protection: Type 1 or Type 1+2 at the
            main incomer, Type 2 at sub-distribution boards. Ensure adequate cable length (typically &gt;10m) or impedance
            between cascade stages to allow energy sharing and prevent back-feeding.
          </p>

          <h3 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "#1a1a1a" }}>
            SPD Maintenance: Visual Status and Remote Signaling
          </h3>
          <p style={{ marginBottom: "16px" }}>
            SPDs degrade with repeated surge exposure. TPKELE SPDs feature visual status indication (green window =
            operational, red window = replace) for quick inspection during routine maintenance. Pluggable cartridge designs
            allow varistor module replacement without removing the base unit or disconnecting wiring — minimizing downtime.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Selected models include an optional remote signaling contact (dry contact, normally open or normally closed)
            that changes state when the SPD reaches end-of-life or internal disconnector trips. This contact can be wired
            to a BMS, SCADA input or alarm panel for centralized monitoring — critical for unmanned sites such as solar
            farms, telecom cabinets and remote sub-stations.
          </p>

          <div
            style={{
              background: "#f8f9fa",
              padding: "24px",
              borderRadius: "8px",
              marginTop: "32px",
              marginBottom: "32px",
            }}
          >
            <h3 style={{ fontSize: "20px", marginBottom: "16px", color: "#1a1a1a" }}>
              Complete Your Surge Protection System
            </h3>
            <p style={{ marginBottom: "16px", color: "#555" }}>
              SPDs work as part of a layered protection strategy:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
              <Link
                href="/products/category/mcb/ac-mcb"
                style={{
                  display: "block",
                  padding: "16px",
                  background: "white",
                  borderRadius: "6px",
                  textDecoration: "none",
                  border: "1px solid #e0e0e0",
                }}
              >
                <strong style={{ display: "block", marginBottom: "8px", color: "#1a1a1a" }}>AC MCB →</strong>
                <span style={{ fontSize: "14px", color: "#666" }}>Upstream backup protection for SPDs</span>
              </Link>
              <Link
                href="/products/category/mcb/dc-mcb"
                style={{
                  display: "block",
                  padding: "16px",
                  background: "white",
                  borderRadius: "6px",
                  textDecoration: "none",
                  border: "1px solid #e0e0e0",
                }}
              >
                <strong style={{ display: "block", marginBottom: "8px", color: "#1a1a1a" }}>DC MCB →</strong>
                <span style={{ fontSize: "14px", color: "#666" }}>Pair with DC SPD in PV combiner boxes</span>
              </Link>
              <Link
                href="/products/combiner-box"
                style={{
                  display: "block",
                  padding: "16px",
                  background: "white",
                  borderRadius: "6px",
                  textDecoration: "none",
                  border: "1px solid #e0e0e0",
                }}
              >
                <strong style={{ display: "block", marginBottom: "8px", color: "#1a1a1a" }}>PV Combiner Box →</strong>
                <span style={{ fontSize: "14px", color: "#666" }}>Pre-assembled with DC SPD and DC MCB</span>
              </Link>
              <Link
                href="/products/category/voltage-protector"
                style={{
                  display: "block",
                  padding: "16px",
                  background: "white",
                  borderRadius: "6px",
                  textDecoration: "none",
                  border: "1px solid #e0e0e0",
                }}
              >
                <strong style={{ display: "block", marginBottom: "8px", color: "#1a1a1a" }}>Voltage Protector →</strong>
                <span style={{ fontSize: "14px", color: "#666" }}>
                  Protects against sustained voltage issues (SPD handles transients)
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
