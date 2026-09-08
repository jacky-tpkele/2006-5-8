import Link from "next/link";
export default function RelatedResources(){
  return <section className="contentSection pale"><div className="container">
    <div className="eyebrow">Connected Resources</div><h2 className="sectionTitle">Use the Right TPKELE Tool for the Next Question</h2>
    <p className="sectionLead">The Standards Database explains technical standards and engineering context. Continue to another TPKELE resource when the buyer's question changes.</p>
    <div className="toolGrid">
      <Tool type="How to Select" title="Technical Guides" href="/resources/technical-guides">Sizing, application, installation and product-choice guidance.</Tool>
      <Tool type="What Market Requires" title="Market Access Advisor" href="/resources/market-access-advisor">Country-specific conformity, certification pathways and evidence status.</Tool>
      <Tool type="Documents / Buying" title="Buyer Trade Support" href="/resources/buyer-trade-support">Certificates, technical files, OEM packaging, trade terms and shipping support.</Tool>
    </div>
  </div></section>
}
function Tool({type,title,href,children}:{type:string;title:string;href:string;children:React.ReactNode}){return <div className="toolCard"><small>{type}</small><h3>{title}</h3><p>{children}</p><Link href={href}>Open {title} →</Link></div>}
