import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { standards } from "@/data/standards";
import { getRelatedStandards,getStandardBySlug } from "@/lib/standards";

export function generateStaticParams(){return standards.map((s)=>({slug:s.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;const s=getStandardBySlug(slug);if(!s)return{};
 return {title:`${s.code} Standard Guide | TPKELE`,description:`${s.summary} Review scope, reference type, product relevance and official source.`,alternates:{canonical:`/resources/standards-database/${s.slug}`}}
}
export default async function Detail({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const s=getStandardBySlug(slug);if(!s)notFound();const rel=getRelatedStandards(slug);
 const bc={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
  {"@type":"ListItem","position":1,"name":"Home","item":"https://www.tpkele.com/"},
  {"@type":"ListItem","position":2,"name":"Resources","item":"https://www.tpkele.com/resources"},
  {"@type":"ListItem","position":3,"name":"Standards Database","item":"https://www.tpkele.com/resources/standards-database"},
  {"@type":"ListItem","position":4,"name":s.code,"item":`https://www.tpkele.com/resources/standards-database/${s.slug}`}]};
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(bc)}}/><div className="breadcrumb"><div className="container"><Link href="/">Home</Link> / <Link href="/resources">Resources</Link> / <Link href="/resources/standards-database">Standards Database</Link> / <b>{s.code}</b></div></div>
 <main className="standardDetail"><div className="container"><Link className="backLink" href="/resources/standards-database">← Back to Standards Database</Link>
 <div className="detailHero"><div><div className="eyebrow">{s.system} · {s.referenceType}</div><h1>{s.code}</h1><p>{s.title}</p></div><a className="primaryButton" href={s.source} target="_blank" rel="noreferrer">Open Official Source ↗</a></div>
 <div className="detailMetrics"><Metric label="Organization" value={s.system}/><Metric label="Edition / Review Year" value={String(s.year)}/><Metric label="Status" value={s.status}/><Metric label="Reference Type" value={s.referenceType}/><Metric label="TPKELE Relevance" value={s.relevance}/></div>
 <div className="detailLayout"><article><Block title="What This Standard Covers"><p>{s.scope}</p></Block><Block title="Why It Matters to Buyers"><ul>{s.why.map((x)=><li key={x}>{x}</li>)}</ul></Block><Block title="Relevant TPKELE Products"><div className="tagWrap">{s.products.map((p)=><span className="productTag" key={p}>{p}</span>)}</div></Block><Block title="Typical Applications"><ul>{s.applications.map((x)=><li key={x}>{x}</li>)}</ul></Block><Block title="Related Standards / Notes"><ul>{s.related.map((x)=><li key={x}>{x}</li>)}</ul></Block></article>
 <aside><div className="scopeWarning">{s.warning}</div><div className="sideCard"><h3>Need country-specific compliance?</h3><p>Continue to the Market Access Advisor for destination-specific certification and evidence.</p><Link href="/resources/market-access-advisor">Check Market Access →</Link></div><div className="sideCard"><h3>Need test reports or certificates?</h3><p>Use Buyer Trade Support to request relevant documents and order support.</p><Link href="/resources/buyer-trade-support">Request Documents →</Link></div></aside></div>
 {rel.length>0&&<section className="relatedStandards"><h2>Related Standards</h2><div className="relatedGrid">{rel.map((r)=><Link className="relatedCard" href={`/resources/standards-database/${r.slug}`} key={r.slug}><strong>{r.code}</strong><span>{r.referenceType} · {r.title}</span></Link>)}</div></section>}
 </div></main></>
}
function Metric({label,value}:{label:string;value:string}){return <div className="metricCard"><b>{label}</b><span>{value}</span></div>}
function Block({title,children}:{title:string;children:React.ReactNode}){return <section className="detailBlock"><h2>{title}</h2>{children}</section>}
