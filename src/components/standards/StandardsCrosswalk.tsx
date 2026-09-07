export default function StandardsCrosswalk(){
  return <section className="contentSection"><div className="container">
    <div className="eyebrow">Standards Mapping</div>
    <h2 className="sectionTitle">Product Standard → Application Guidance → Installation Context</h2>
    <p className="sectionLead">V2 adds a second layer beyond product standards: selection/application, installation, assembly, enclosure, safety and EMC references. This helps buyers understand where each standard sits in the engineering chain.</p>
    <div className="crosswalkGrid">
      <Cross title="Circuit Protection" rows={[["Product","IEC 60947-2 / IEC 60898 family"],["General","IEC 60947-1"],["Installation","IEC 60364-4-43 / 5-53"],["Insulation","IEC 60664-1"]]} />
      <Cross title="Surge Protection" rows={[["Product","IEC 61643-11 / IEC 61643-31"],["Selection","IEC 61643-12 / IEC 61643-32"],["Lightning","IEC 62305-4"],["Installation","IEC 60364-5-53"]]} />
      <Cross title="PV Combiner / Array" rows={[["Array design","IEC 62548-1"],["PV installation","IEC 60364-7-712"],["Assembly","IEC 61439-1 / 61439-2"],["Enclosure","IEC 62208 / IEC 60529"]]} />
      <Cross title="Energy Metering" rows={[["General","IEC 62052-11"],["Safety","IEC 62052-31"],["Active energy","IEC 62053-21"],["Reactive energy","IEC 62053-23 / 24"]]} />
    </div>
    <div className="crosswalkNote">These mappings explain relationships between standards. They do not mean every TPKELE model is certified to every listed standard, and they do not establish equivalence between IEC, EN or UL systems.</div>
  </div></section>
}
function Cross({title,rows}:{title:string;rows:string[][]}){return <div className="crossCard"><h3>{title}</h3>{rows.map(([a,b])=><div className="crossRow" key={a}><b>{a}</b><span>{b}</span></div>)}</div>}
