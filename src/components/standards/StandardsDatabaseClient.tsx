"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { standards } from "@/data/standards";
import { applications, productFamilies, referenceTypes, standardsSystems, statuses } from "@/lib/standards";

type SortMode = "relevance" | "newest" | "code";
function toggle(list:string[], value:string){ return list.includes(value) ? list.filter((x)=>x!==value) : [...list,value]; }

export default function StandardsDatabaseClient() {
  const [query,setQuery] = useState("");
  const [products,setProducts] = useState<string[]>([]);
  const [systems,setSystems] = useState<string[]>([]);
  const [apps,setApps] = useState<string[]>([]);
  const [status,setStatus] = useState<string[]>([]);
  const [types,setTypes] = useState<string[]>([]);
  const [quick,setQuick] = useState("");
  const [sort,setSort] = useState<SortMode>("relevance");
  const [showNewOnly,setShowNewOnly] = useState(false);

  const filtered = useMemo(() => {
    const q=query.trim().toLowerCase();
    let rows=standards.filter((s)=>{
      const hay=[s.code,s.title,s.summary,s.scope,s.system,s.referenceType,...s.products,...s.applications].join(" ").toLowerCase();
      return (!q||hay.includes(q))
        && (!quick||s.products.includes(quick))
        && (!products.length||products.some((p)=>s.products.includes(p)))
        && (!systems.length||systems.includes(s.system))
        && (!apps.length||apps.some((a)=>s.applications.includes(a)))
        && (!status.length||status.includes(s.status))
        && (!types.length||types.includes(s.referenceType))
        && (!showNewOnly||s.addedIn==="V2");
    });
    if(sort==="newest") rows=[...rows].sort((a,b)=>b.year-a.year);
    if(sort==="code") rows=[...rows].sort((a,b)=>a.code.localeCompare(b.code));
    return rows;
  },[query,products,systems,apps,status,types,quick,sort,showNewOnly]);

  function reset(){
    setQuery("");setProducts([]);setSystems([]);setApps([]);setStatus([]);setTypes([]);setQuick("");setSort("relevance");setShowNewOnly(false);
  }

  return <>
    <section className="standardsHero">
      <div className="container">
        <div className="eyebrow">TPKELE Technical Reference</div>
        <h1>Electrical Standards Database</h1>
        <p className="heroLead">Search international electrical standards by standard number, product family, application or reference type. Review current editions, scope, TPKELE product relevance and official sources without confusing technical standards with country-specific market access.</p>
        <div className="searchBox">
          <span className="searchGlyph">⌕</span>
          <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search IEC 60947-2, DC MCB, SPD, ATS, IP Code, solar PV..." />
          <button type="button">Search Standards</button>
        </div>
        <div className="quickFilters">
          {productFamilies.map((p)=><button key={p} className={quick===p?"quickChip active":"quickChip"} onClick={()=>setQuick(quick===p?"":p)}>{p}</button>)}
        </div>
        <div className="heroMeta">
          <span><strong>{standards.length}</strong> official-source reference records</span>
          <span><strong>{standards.filter((s)=>s.addedIn==="V2").length} new</strong> records in V2</span>
          <span><strong>IEC + UL</strong> represented</span>
          <span><strong>Last source check:</strong> 7 Sep 2026</span>
        </div>
      </div>
    </section>

    <section className="databaseSection">
      <div className="container databaseLayout">
        <aside className="filtersPanel">
          <div className="filtersHeader"><h2>FILTER STANDARDS</h2><button onClick={reset}>Reset</button></div>
          <label className="newOnly"><input type="checkbox" checked={showNewOnly} onChange={(e)=>setShowNewOnly(e.target.checked)} /><span>Show V2 additions only</span></label>
          <FilterGroup title="Product Family">{productFamilies.map((x)=><CheckRow key={x} label={x} checked={products.includes(x)} onChange={()=>setProducts(toggle(products,x))}/>)}</FilterGroup>
          <FilterGroup title="Standards System">{standardsSystems.map((x)=><CheckRow key={x} label={x} checked={systems.includes(x)} onChange={()=>setSystems(toggle(systems,x))}/>)}</FilterGroup>
          <FilterGroup title="Application">{applications.map((x)=><CheckRow key={x} label={x} checked={apps.includes(x)} onChange={()=>setApps(toggle(apps,x))}/>)}</FilterGroup>
          <FilterGroup title="Reference Type">{referenceTypes.map((x)=><CheckRow key={x} label={x} checked={types.includes(x)} onChange={()=>setTypes(toggle(types,x))}/>)}</FilterGroup>
          <FilterGroup title="Reference Status">{statuses.map((x)=><CheckRow key={x} label={x==="Current"?"Current / Active":"Scope Check Required"} checked={status.includes(x)} onChange={()=>setStatus(toggle(status,x))}/>)}</FilterGroup>
        </aside>

        <div>
          <div className="resultsHeader">
            <div><h2>Standards Results</h2><p>Showing {filtered.length} matching record{filtered.length===1?"":"s"}.</p></div>
            <select value={sort} onChange={(e)=>setSort(e.target.value as SortMode)}>
              <option value="relevance">Sort: Relevance</option>
              <option value="newest">Sort: Newest edition</option>
              <option value="code">Sort: Standard number</option>
            </select>
          </div>
          <div className="standardList">
            {filtered.map((s)=><article className="standardCard" key={s.slug}>
              <div className="standardTop">
                <div>
                  <div className="standardId">
                    <span className="standardCode">{s.code}</span>
                    <span className={s.status==="Current"?"badge current":"badge scope"}>{s.status}</span>
                    <span className="badge system">{s.system}</span>
                    {s.addedIn==="V2" && <span className="badge newBadge">New V2</span>}
                  </div>
                  <div className="standardTitle">{s.title}</div>
                </div>
                <a className="officialButton" href={s.source} target="_blank" rel="noreferrer">Official Source ↗</a>
              </div>
              <div className="standardGrid">
                <div><b>SCOPE SUMMARY</b><p>{s.summary}</p></div>
                <div><b>RELEVANT TPKELE PRODUCTS</b><div className="tagWrap">{s.products.map((p)=><span className="productTag" key={p}>{p}</span>)}</div></div>
                <div><b>REFERENCE TYPE</b><p>{s.referenceType}</p><b className="appLabel">TYPICAL APPLICATION</b><p>{s.applications.join(" · ")}</p></div>
              </div>
              <div className="standardFooter"><small>Official-source record checked: {s.lastReviewed} · Relevance: {s.relevance}</small><Link className="detailLink" href={`/resources/standards-database/${s.slug}`}>View Standard Details →</Link></div>
            </article>)}
          </div>
          {!filtered.length && <div className="emptyState">No standards match this combination. Try removing a filter or searching by standard number.</div>}
        </div>
      </div>
    </section>
  </>;
}

function FilterGroup({title,children}:{title:string;children:React.ReactNode}){return <div className="filterGroup"><div className="filterTitle">{title}</div>{children}</div>}
function CheckRow({label,checked,onChange}:{label:string;checked:boolean;onChange:()=>void}){return <label className="checkRow"><input type="checkbox" checked={checked} onChange={onChange}/><span>{label}</span></label>}
