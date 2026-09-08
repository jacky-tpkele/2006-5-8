"use client";

import { useEffect, useMemo, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { emptyRequirements, RequirementState, selectionCount } from "@/lib/trade-support";

type SingleKey = "tradeTerm" | "paymentPreference" | "shippingMethod";
type MultiKey = "customization" | "documents";

const NAV_ITEMS = [
  ["overview", "How This Buyer Guide Works"],
  ["customization", "Customization & Packaging"],
  ["documents", "Export Documents"],
  ["trade", "Trade Terms"],
  ["payment", "Payment Preferences"],
  ["shipping", "Shipping Methods"],
  ["leadtime", "Production & Lead Time"],
  ["upload", "Upload Files"],
  ["request", "Review & Send Request"],
  ["faq", "Buyer FAQ"]
] as const;

const Icon = ({ name }: { name: string }) => {
  const common = { width: 19, height: 19, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8 };
  const icons: Record<string, ReactNode> = {
    box: <svg {...common}><path d="M4 7l8-4 8 4-8 4-8-4z"/><path d="M4 7v10l8 4 8-4V7"/><path d="M12 11v10"/></svg>,
    plastic: <svg {...common}><rect x="4" y="3" width="16" height="18" rx="3"/><path d="M8 7h8M8 11h8M8 15h5"/></svg>,
    tag: <svg {...common}><path d="M4 6h10l6 6-8 8-8-8V6z"/><circle cx="8" cy="10" r="1.2"/></svg>,
    carton: <svg {...common}><path d="M3 7h18M5 7v10h14V7M8 17v3M16 17v3M3 20h18"/></svg>,
    file: <svg {...common}><path d="M6 3h9l3 3v15H6z"/><path d="M15 3v4h4M9 11h6M9 15h6"/></svg>,
    check: <svg {...common}><path d="M5 4h14v16H5z"/><path d="M8 9l2 2 5-5M8 15h8"/></svg>,
    invoice: <svg {...common}><path d="M6 3h12v18H6zM9 8h6M9 12h6M9 16h4"/></svg>,
    origin: <svg {...common}><circle cx="12" cy="9" r="5"/><path d="M9 14l-2 7 5-3 5 3-2-7"/></svg>,
    shipdoc: <svg {...common}><path d="M3 15h13V7H3zM16 10h3l2 3v2h-5zM7 18a2 2 0 1 0 0 .1M18 18a2 2 0 1 0 0 .1"/></svg>,
    question: <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 0 1 4.6 1c0 1.8-2.4 2-2.4 4M12 18h.01"/></svg>,
    bank: <svg {...common}><path d="M3 9h18M5 9v8M9 9v8M15 9v8M19 9v8M3 19h18M12 3l9 4H3z"/></svg>,
    truck: <svg {...common}><path d="M3 15h13V7H3zM16 10h3l2 3v2h-5zM7 18a2 2 0 1 0 0 .1M18 18a2 2 0 1 0 0 .1"/></svg>,
    plane: <svg {...common}><path d="M2 16l20-7-7 11-3-6-10 2zM12 14l3-9"/></svg>,
    ship: <svg {...common}><path d="M3 14h18l-3 5H6zM7 14V8h8v6M10 8V5h4v3"/></svg>,
    upload: <svg {...common}><path d="M12 16V4M7 9l5-5 5 5M5 20h14"/></svg>
  };
  return <>{icons[name] || icons.file}</>;
};

function SelectCard({ title, description, icon, selected, onSelect, children, tags }: {
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  onSelect: () => void;
  children?: ReactNode;
  tags?: string[];
}) {
  return (
    <div className={`select-card ${selected ? "selected" : ""}`}>
      <div className="card-head">
        <span className="icon-box"><Icon name={icon} /></span>
        <div className="card-title"><h3>{title}</h3><p>{description}</p></div>
        <button className="select-btn" type="button" onClick={onSelect}>{selected ? "Selected" : "Select"}</button>
      </div>
      {tags?.length ? <div className="tags">{tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div> : null}
      {children}
    </div>
  );
}

export default function BuyerTradeSupport() {
  const [requirements, setRequirements] = useState<RequirementState>(emptyRequirements);
  const [active, setActive] = useState("overview");
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [tradeHelperOpen, setTradeHelperOpen] = useState(false);
  const [hasForwarder, setHasForwarder] = useState("");
  const [helperShipment, setHelperShipment] = useState("");
  const [supplierFreight, setSupplierFreight] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [destination, setDestination] = useState("");
  const [submitState, setSubmitState] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [reference, setReference] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  const count = useMemo(() => selectionCount(requirements), [requirements]);

  useEffect(() => {
    const sections = NAV_ITEMS.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-20% 0px -70% 0px", threshold: 0 });
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function toggleMulti(key: MultiKey, value: string) {
    setRequirements((prev) => {
      const arr = prev[key];
      return { ...prev, [key]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value] };
    });
  }

  function chooseSingle(key: SingleKey, value: string) {
    setRequirements((prev) => ({ ...prev, [key]: prev[key] === value ? "" : value }));
  }

  function recommendTerm() {
    let suggestion = "Not Sure";
    let reason = "We recommend confirming the destination, freight mode and forwarder arrangement before choosing a term.";
    if (hasForwarder === "yes" && helperShipment === "sea") {
      suggestion = "FCA";
      reason = "You already have a forwarder and plan sea shipment. FCA is a practical starting point, especially for containerized or multimodal handover.";
    } else if (hasForwarder === "yes") {
      suggestion = "FCA";
      reason = "You already control the main forwarder relationship, so FCA is a practical starting point.";
    } else if (supplierFreight === "yes" && helperShipment === "sea") {
      suggestion = "CIF";
      reason = "You want TPKELE to arrange main sea freight. CIF is a useful quotation starting point when destination-port delivery is the goal.";
    } else if (supplierFreight === "yes") {
      suggestion = "DAP";
      reason = "You prefer supplier-arranged destination delivery. DAP is a useful starting point, subject to destination and route.";
    }
    setRecommendation(`${suggestion} — ${reason} Final Incoterm® basis is confirmed in the quotation.`);
    setRequirements((prev) => ({ ...prev, tradeTerm: suggestion === "Not Sure" ? "Not Sure - Please recommend" : suggestion }));
  }

  function handleFileChange(list: FileList | null) {
    if (!list) return;
    const incoming = Array.from(list);
    const allowedExt = /\.(pdf|xlsx|xls|csv|png|jpe?g|webp)$/i;
    const next = [...files, ...incoming].slice(0, 3);
    for (const file of next) {
      if (!allowedExt.test(file.name)) { setFileError("Allowed files: PDF, XLSX, XLS, CSV, PNG, JPG/JPEG and WebP."); return; }
      if (file.size > 1024 * 1024) { setFileError(`${file.name} is larger than 1 MB. Please compress it before upload.`); return; }
    }
    if (next.reduce((sum, f) => sum + f.size, 0) > 3 * 1024 * 1024) { setFileError("Total upload size must stay below 3 MB for this Vercel-ready default."); return; }
    setFiles(next); setFileError("");
  }

  function removeFile(name: string) { setFiles((prev) => prev.filter((f) => f.name !== name)); }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setSubmitState("sending"); setSubmitMessage("");
    const form = new FormData(e.currentTarget);
    form.set("requirements", JSON.stringify(requirements));
    form.set("destination", destination);
    files.forEach((f) => form.append("files", f));
    try {
      const res = await fetch("/api/trade-support", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed.");
      setReference(data.reference || ""); setSubmitState("success");
    } catch (err) {
      setSubmitState("error"); setSubmitMessage(err instanceof Error ? err.message : "Submission failed.");
    }
  }

  const customPaperSelected = requirements.customization.includes("Custom paper box packaging");
  const plasticSelected = requirements.customization.includes("Custom plastic packaging");
  const markingSelected = requirements.customization.includes("Logo, label and product marking customization");
  const originSelected = requirements.documents.includes("Certificate of Origin");

  return (
    <>
      <header className="site-header"><div className="container header-inner">
        <a className="brand" href="/"><span className="brand-mark">TPK</span><span>TPKELE</span></a>
        <nav className="header-nav"><a href="/">Home</a><a href="/about">About</a><a href="/products">Products</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav>
        <a className="header-quote" href="#request">Submit Inquiry</a>
      </div></header>

      <div className="breadcrumb"><div className="container"><a href="/">Home</a> / <span>Resources</span> / <b>Buyer Trade Support</b></div></div>

      <section className="hero"><div className="container">
        <div className="eyebrow">Buyer Resource Center</div>
        <h1>Plan Your Order Before You Send the Inquiry</h1>
        <p className="hero-copy">Review the options that matter to international buyers, configure what applies to your order, upload supporting files, and send TPKELE one structured requirement covering packaging, export documents, trade terms, payment, shipping and delivery planning.</p>
        <div className="hero-actions"><a className="btn btn-primary" href="#customization">Build My Requirement</a><a className="btn btn-secondary" href="#request">Review My Request</a></div>
        <div className="hero-trust">
          <div className="trust-item"><strong>OEM / ODM</strong><span>Logo, label, paper box, plastic packaging and private-label support.</span></div>
          <div className="trust-item"><strong>Export Support</strong><span>Commercial, origin, transport and technical documents as applicable.</span></div>
          <div className="trust-item"><strong>Buyer Uploads</strong><span>BOM, Excel, PDF, logo and packaging-reference files.</span></div>
          <div className="trust-item"><strong>Structured Inquiry</strong><span>Your selections are carried into one shorter final request.</span></div>
        </div>
      </div></section>

      <div className="mobile-nav"><div className="container"><select value={`#${active}`} onChange={(e) => { location.hash = e.target.value; }}>{NAV_ITEMS.map(([id, label], i) => <option key={id} value={`#${id}`}>{String(i+1).padStart(2,"0")} {label}</option>)}</select></div></div>

      <div className="container page-layout">
        <main className="main">
          <section id="overview">
            <div className="section-kicker">01 / Buyer Guide</div>
            <h2>Understand → Configure → Upload → Send</h2>
            <p className="section-lead">V9 is designed as a buyer decision tool rather than a long questionnaire. Secondary details stay collapsed until needed, and the final form only asks for buyer, product and delivery information that has not already been selected.</p>
            <div className="guide-flow four">
              <div className="guide-card"><div className="guide-num">STEP 01</div><h3>Understand</h3><p>Read short explanations for packaging, documents, Incoterms and shipping.</p></div>
              <div className="guide-card"><div className="guide-num">STEP 02</div><h3>Configure</h3><p>Choose requirements and reveal only the extra details relevant to that choice.</p></div>
              <div className="guide-card"><div className="guide-num">STEP 03</div><h3>Upload</h3><p>Add a BOM, Excel/PDF list, logo or packaging reference when useful.</p></div>
              <div className="guide-card"><div className="guide-num">STEP 04</div><h3>Send</h3><p>Review one structured brief and submit it directly to TPKELE sales.</p></div>
            </div>
          </section>

          <section id="customization">
            <div className="section-kicker">02 / OEM & Packaging</div><h2>Customization & Packaging</h2>
            <p className="section-lead">Select one or several items. Detailed choices appear only after selection, so buyers get specific configuration without seeing every field at once.</p>
            <div className="grid-2">
              <SelectCard title="Custom Paper Box" description="For branded retail presentation or private-label unit packaging." icon="box" selected={customPaperSelected} onSelect={() => toggleMulti("customization", "Custom paper box packaging")} tags={["Logo","Model info","Barcode / QR","Color printing"]}>
                <details><summary>See what can be customized</summary><ul className="detail-list"><li>Buyer logo and brand colors</li><li>Model, voltage/current and product wording</li><li>Barcode / QR area and market language</li><li>Final box dimensions after product and inserts are confirmed</li></ul></details>
                {customPaperSelected && <div className="conditional-panel"><div className="conditional-title">Paper box configuration</div><div className="mini-grid">
                  <label>Printing<select value={requirements.paperBox.printType} onChange={(e)=>setRequirements(p=>({...p,paperBox:{...p.paperBox,printType:e.target.value}}))}><option value="">Select</option><option>1-color printing</option><option>2-color printing</option><option>Full-color printing</option></select></label>
                  <label>Packaging language<input value={requirements.paperBox.language} onChange={(e)=>setRequirements(p=>({...p,paperBox:{...p.paperBox,language:e.target.value}}))} placeholder="English / Arabic / Other"/></label>
                </div><div className="check-row">
                  <label><input type="checkbox" checked={requirements.paperBox.barcode} onChange={(e)=>setRequirements(p=>({...p,paperBox:{...p.paperBox,barcode:e.target.checked}}))}/>Need barcode</label>
                  <label><input type="checkbox" checked={requirements.paperBox.qrCode} onChange={(e)=>setRequirements(p=>({...p,paperBox:{...p.paperBox,qrCode:e.target.checked}}))}/>Need QR code</label>
                  <label><input type="checkbox" checked={requirements.paperBox.customBoxSize} onChange={(e)=>setRequirements(p=>({...p,paperBox:{...p.paperBox,customBoxSize:e.target.checked}}))}/>Need custom box size</label>
                  <label><input type="checkbox" checked={requirements.paperBox.outerCartonMark} onChange={(e)=>setRequirements(p=>({...p,paperBox:{...p.paperBox,outerCartonMark:e.target.checked}}))}/>Need custom outer-carton mark</label>
                </div></div>}
              </SelectCard>

              <SelectCard title="Custom Plastic Packaging" description="For display, visibility, storage or added physical protection." icon="plastic" selected={plasticSelected} onSelect={() => toggleMulti("customization", "Custom plastic packaging")} tags={["Plastic box","Blister-style","Protective pack"]}>
                <details><summary>See what the buyer should provide</summary><ul className="detail-list"><li>Preferred packaging style or reference image</li><li>Whether display or protection is the main objective</li><li>Label or branding requirements</li></ul></details>
                {plasticSelected && <div className="conditional-panel"><div className="conditional-title">Plastic packaging configuration</div><div className="mini-grid">
                  <label>Preferred style<select value={requirements.plasticPack.style} onChange={(e)=>setRequirements(p=>({...p,plasticPack:{...p.plasticPack,style:e.target.value}}))}><option value="">Select</option><option>Plastic box</option><option>Blister-style pack</option><option>Transparent protective pack</option><option>Not sure</option></select></label>
                  <label>Main purpose<select value={requirements.plasticPack.purpose} onChange={(e)=>setRequirements(p=>({...p,plasticPack:{...p.plasticPack,purpose:e.target.value}}))}><option value="">Select</option><option>Retail display</option><option>Product protection</option><option>Storage / kit organization</option><option>Not sure</option></select></label>
                </div><label className="single-check"><input type="checkbox" checked={requirements.plasticPack.hangingDisplay} onChange={(e)=>setRequirements(p=>({...p,plasticPack:{...p.plasticPack,hangingDisplay:e.target.checked}}))}/>Need hanging / shelf display feature</label></div>}
              </SelectCard>

              <SelectCard title="Logo, Label & Product Marking" description="For customer brand identity directly on the product or label." icon="tag" selected={markingSelected} onSelect={() => toggleMulti("customization", "Logo, label and product marking customization")} tags={["Housing logo","Label","Custom model code"]}>
                <details><summary>Typical items to confirm</summary><ul className="detail-list"><li>Logo artwork and desired position</li><li>Electrical-rating text and language</li><li>Customer-specific model coding</li></ul></details>
                {markingSelected && <div className="conditional-panel"><div className="conditional-title">Marking configuration</div><div className="mini-grid">
                  <label>Preferred logo placement<input value={requirements.marking.logoPlacement} onChange={(e)=>setRequirements(p=>({...p,marking:{...p.marking,logoPlacement:e.target.value}}))} placeholder="Front / side / label / not sure"/></label>
                  <label>Label language<input value={requirements.marking.labelLanguage} onChange={(e)=>setRequirements(p=>({...p,marking:{...p.marking,labelLanguage:e.target.value}}))} placeholder="English / Arabic / Other"/></label>
                </div><label className="single-check"><input type="checkbox" checked={requirements.marking.customModelCode} onChange={(e)=>setRequirements(p=>({...p,marking:{...p.marking,customModelCode:e.target.checked}}))}/>Need customer-specific model code</label></div>}
              </SelectCard>

              <SelectCard title="Carton & Packing Data" description="For freight calculation, warehouse planning and container loading." icon="carton" selected={requirements.customization.includes("Packing size, carton and pallet information")} onSelect={() => toggleMulti("customization", "Packing size, carton and pallet information")} tags={["Unit box","Master carton","G.W. / N.W.","Pallet"]}>
                <details><summary>Data buyers may request</summary><ul className="detail-list"><li>Unit-box and master-carton dimensions</li><li>Pieces per carton and gross/net weight</li><li>Carton marking and pallet information where applicable</li></ul></details>
              </SelectCard>

              <SelectCard title="Manual, Datasheet & Catalog" description="For distributors building a branded documentation package." icon="file" selected={requirements.customization.includes("Customized datasheet, manual or catalog")} onSelect={() => toggleMulti("customization", "Customized datasheet, manual or catalog")} tags={["Datasheet","Manual","Catalog"]}/>
              <SelectCard title="Sample Approval" description="Useful for new private-label programs before larger production." icon="check" selected={requirements.customization.includes("Sample approval before mass production")} onSelect={() => toggleMulti("customization", "Sample approval before mass production")} tags={["OEM sample","Artwork check","Pre-production confirmation"]}/>
            </div>
            <div className="tip">No finished artwork yet? Select the relevant option now and upload a logo or reference image later on this page.</div>
          </section>

          <section id="documents">
            <div className="section-kicker">03 / Documentation</div><h2>Export & Order Documents</h2>
            <p className="section-lead">Documents are grouped by order stage so buyers can understand when they are normally used.</p>
            <div className="stage-band"><div className="stage-item"><strong>Before Order</strong><span>PI, datasheet, certificate or technical review</span></div><div className="stage-item"><strong>Before Shipment</strong><span>CI, packing list and shipment preparation</span></div><div className="stage-item"><strong>Import / Clearance</strong><span>Origin and transport documents where applicable</span></div></div>
            <div className="grid-3">
              {[
                ["PI - Proforma Invoice","PI","Proforma Invoice for quotation and commercial confirmation.","invoice"],
                ["CI - Commercial Invoice","CI","Commercial Invoice for the formal shipment document set.","invoice"],
                ["Packing List","Packing List","Packing data for logistics, customs and receiving.","file"],
                ["B/L, AWB or transport document","B/L / AWB","Transport document according to shipment mode.","shipdoc"],
                ["Datasheet, test report or certification file","Technical / Certification Files","Supporting files for product, project or market review where available.","file"]
              ].map(([value,title,description,icon])=><SelectCard key={value} title={title} description={description} icon={icon} selected={requirements.documents.includes(value)} onSelect={()=>toggleMulti("documents",value)}/>)}
              <SelectCard title="Certificate of Origin" description="Origin-related support where required by the destination market." icon="origin" selected={originSelected} onSelect={()=>toggleMulti("documents","Certificate of Origin")}>
                <details><summary>Important scope note</summary><ul className="detail-list"><li>Exact certificate type depends on destination and applicable origin rules</li><li>Preferential origin treatment requires separate eligibility confirmation</li></ul></details>
                {originSelected && <div className="conditional-panel"><div className="conditional-title">Why do you need the origin document?</div><select value={requirements.origin.purpose} onChange={(e)=>setRequirements(p=>({...p,origin:{purpose:e.target.value}}))}><option value="">Select purpose</option><option>Customs clearance</option><option>Preferential tariff / FTA review</option><option>Customer or tender requirement</option><option>Not sure</option></select><div className="micro-note">Certificate type and eligibility depend on destination, HS classification and applicable rules of origin.</div></div>}
              </SelectCard>
            </div>
          </section>

          <section id="trade">
            <div className="section-kicker">04 / Incoterms</div>
            <div className="section-heading-row"><div><h2>Compare & Select a Trade Term</h2><p className="section-lead">Choose one preferred term, or use the compact helper if you are not sure.</p></div><button type="button" className="btn btn-secondary small" onClick={()=>setTradeHelperOpen(v=>!v)}><Icon name="question"/> Help Me Choose</button></div>
            {tradeHelperOpen && <div className="decision-helper"><div className="helper-head"><strong>Trade-term starting point</strong><span>3 quick questions</span></div><div className="helper-grid">
              <label>Do you have your own freight forwarder?<select value={hasForwarder} onChange={(e)=>setHasForwarder(e.target.value)}><option value="">Select</option><option value="yes">Yes</option><option value="no">No</option></select></label>
              <label>Expected shipment mode<select value={helperShipment} onChange={(e)=>setHelperShipment(e.target.value)}><option value="">Select</option><option value="sea">Sea freight</option><option value="air">Air / courier</option><option value="unknown">Not sure</option></select></label>
              <label>Do you want TPKELE to arrange international freight?<select value={supplierFreight} onChange={(e)=>setSupplierFreight(e.target.value)}><option value="">Select</option><option value="yes">Yes</option><option value="no">No / my forwarder</option></select></label>
            </div><button className="btn btn-primary small" type="button" onClick={recommendTerm}>Suggest a starting point</button>{recommendation && <div className="helper-result">{recommendation}</div>}</div>}
            <div className="grid-2">
              {[
                ["Not Sure - Please recommend","Not Sure","Let TPKELE review your destination and logistics context.","question"],
                ["EXW","EXW","Buyer controls pickup and most onward logistics.","truck"],
                ["FCA","FCA","Seller hands goods to the buyer's carrier at the agreed named place.","truck"],
                ["FOB","FOB","Common sea term with seller-side export and loading responsibility.","ship"],
                ["CFR","CFR","Seller arranges ocean freight to the named destination port.","ship"],
                ["CIF","CIF","Seller arranges ocean freight and term-required insurance.","ship"],
                ["DAP","DAP","Delivery to named destination; buyer handles import clearance and duties.","truck"],
                ["DDP - Subject to feasibility","DDP","More complete destination delivery, subject to route and import feasibility.","truck"]
              ].map(([value,title,description,icon])=><SelectCard key={value} title={title} description={description} icon={icon} selected={requirements.tradeTerm===value} onSelect={()=>chooseSingle("tradeTerm",value)}/>)}
            </div>
            <div className="comparison-toggle"><details><summary>Open practical trade-term comparison</summary><div className="table-wrap"><table className="compare"><thead><tr><th>Term</th><th>Seller Scope (Simplified)</th><th>Buyer Scope (Simplified)</th><th>Typical Buyer</th></tr></thead><tbody>
              <tr><td>EXW</td><td>Goods made available</td><td>Pickup, main logistics and import</td><td>Experienced importer</td></tr><tr><td>FCA</td><td>Export clearance + carrier handover</td><td>Main freight onward + import</td><td>Buyer with own forwarder</td></tr><tr><td>FOB</td><td>Export + load on board</td><td>Ocean freight onward + import</td><td>Sea-freight importer</td></tr><tr><td>CFR</td><td>Export + ocean freight</td><td>Import + destination handling</td><td>Port-based buyer</td></tr><tr><td>CIF</td><td>Export + ocean freight + required insurance</td><td>Import + destination handling</td><td>Port-based buyer</td></tr><tr><td>DAP</td><td>Delivery to named destination</td><td>Import clearance and duties</td><td>Destination-delivery buyer</td></tr><tr><td>DDP</td><td>Broad seller-side responsibility where feasible</td><td>Receive goods</td><td>Selected routes / projects</td></tr>
            </tbody></table></div></details></div>
          </section>

          <section id="payment"><div className="section-kicker">05 / Payment</div><h2>Payment Preference</h2><p className="section-lead">Select a preference for discussion. Final schedule and conditions are confirmed in the PI.</p><div className="grid-3">
            {[["T/T Bank Transfer","T/T Bank Transfer","Common bank-transfer method for international orders.","bank"],["L/C - Subject to order review","L/C","Can be discussed for qualifying orders and banking conditions.","file"],["Other payment arrangement - Please discuss","Other / Discuss","Use this to propose another arrangement for review.","question"]].map(([value,title,description,icon])=><SelectCard key={value} title={title} description={description} icon={icon} selected={requirements.paymentPreference===value} onSelect={()=>chooseSingle("paymentPreference",value)}/>)}</div></section>

          <section id="shipping"><div className="section-kicker">06 / Logistics</div><h2>Shipping Method</h2><p className="section-lead">Choose one preferred method, or leave it unselected and let TPKELE recommend after reviewing quantity, urgency and destination.</p><div className="grid-2">
            <SelectCard title="Express Courier" description="Best for samples and small urgent orders." icon="truck" tags={["Fast","Small shipment","Easy tracking"]} selected={requirements.shippingMethod==="Express Courier"} onSelect={()=>chooseSingle("shippingMethod","Express Courier")}/>
            <SelectCard title="Air Freight" description="For time-sensitive commercial orders larger than a courier shipment." icon="plane" tags={["Urgent","Medium volume"]} selected={requirements.shippingMethod==="Air Freight"} onSelect={()=>chooseSingle("shippingMethod","Air Freight")}/>
            <SelectCard title="Sea Freight — LCL" description="For commercial orders that do not fill an entire container." icon="ship" tags={["Shared container","Commercial order"]} selected={requirements.shippingMethod==="Sea Freight LCL"} onSelect={()=>chooseSingle("shippingMethod","Sea Freight LCL")}/>
            <SelectCard title="Sea Freight — FCL" description="For larger distributor, project or container-load orders." icon="ship" tags={["High volume","Container planning"]} selected={requirements.shippingMethod==="Sea Freight FCL"} onSelect={()=>chooseSingle("shippingMethod","Sea Freight FCL")}/>
          </div></section>

          <section id="leadtime"><div className="section-kicker">07 / Delivery Planning</div><h2>Production & Lead Time</h2><p className="section-lead">A realistic delivery estimate is confirmed after reviewing the exact product, quantity and customization scope. Packaging approval, special marking, inspection, documents and shipping can influence the final schedule.</p><div className="flow">
            <div className="flow-step"><b>01</b><strong>Requirement Review</strong><span>Product, quantity, destination and market needs.</span></div><div className="flow-step"><b>02</b><strong>Artwork / Sample</strong><span>Logo, label, packaging and sample confirmation if needed.</span></div><div className="flow-step"><b>03</b><strong>PI & Order</strong><span>Commercial basis, terms and production scope confirmed.</span></div><div className="flow-step"><b>04</b><strong>Production & QC</strong><span>Manufacturing, inspection and packing preparation.</span></div><div className="flow-step"><b>05</b><strong>Documents & Dispatch</strong><span>Shipment documentation and logistics handover.</span></div>
          </div></section>

          <section id="upload"><div className="section-kicker">08 / Files</div><h2>Upload Supporting Files</h2><p className="section-lead">Optional. Upload a BOM/product list, Excel/PDF requirement, logo or packaging reference so sales can understand the request faster.</p><div className="upload-shell">
            <label className="dropzone"><span className="upload-icon"><Icon name="upload"/></span><strong>Choose files</strong><span>PDF, XLSX, XLS, CSV, PNG, JPG/JPEG or WebP</span><small>Up to 3 files, 1 MB each, 3 MB total in this Vercel-ready default.</small><input type="file" multiple accept=".pdf,.xlsx,.xls,.csv,.png,.jpg,.jpeg,.webp" onChange={(e)=>handleFileChange(e.target.files)}/></label>
            {fileError && <div className="file-error">{fileError}</div>}
            {files.length>0 && <div className="file-list">{files.map((f)=><div className="file-row" key={f.name}><div><strong>{f.name}</strong><span>{(f.size/1024).toFixed(0)} KB</span></div><button type="button" onClick={()=>removeFile(f.name)}>Remove</button></div>)}</div>}
          </div></section>

          <section id="request"><div className="section-kicker">09 / Inquiry</div><h2>Review & Send Your Buyer Requirement Brief</h2><p className="section-lead">Your selections and uploaded files are already attached to the request. Complete only the basic buyer and product information below.</p>
            <form className="form-shell" onSubmit={submit}><div className="form-top"><strong>Buyer & Product Information</strong><span>* Required fields</span></div><div className="form-body"><input className="hp-field" name="website" tabIndex={-1} autoComplete="off"/>
              <div className="form-grid"><div className="field"><label>Company Name *</label><input name="company" required placeholder="Your company name"/></div><div className="field"><label>Country / Market *</label><input name="country" required placeholder="Example: Saudi Arabia"/></div><div className="field"><label>Contact Name *</label><input name="contactName" required placeholder="Your name"/></div><div className="field"><label>Email / WhatsApp *</label><input name="contact" required placeholder="Email or WhatsApp"/></div><div className="field"><label>Product / Model *</label><input name="product" required placeholder="Example: DC MCB / SPD / ATS"/></div><div className="field"><label>Estimated Quantity *</label><input name="qty" required placeholder="Example: 500 pcs / 1×20GP"/></div><div className="field"><label>Destination Port / City</label><input name="destinationVisible" value={destination} onChange={(e)=>setDestination(e.target.value)} placeholder="Example: Jebel Ali / Riyadh"/></div><div className="field"><label>Target Delivery Date</label><input name="targetDate" placeholder="If you have a required deadline"/></div><div className="field full"><label>Additional Notes</label><textarea name="notes" placeholder="Artwork status, certification needs, local labeling, carton marks or other buyer requirements."/></div></div>
              <div className="review"><div className="review-title"><h3>Your Selected Trade Requirements</h3><a href="#customization">Edit selections ↑</a></div><div className="review-grid"><div className="review-item"><b>Customization & Packaging</b><span>{requirements.customization.length?requirements.customization.join(", "):"None selected"}</span></div><div className="review-item"><b>Documents</b><span>{requirements.documents.length?requirements.documents.join(", "):"None selected"}</span></div><div className="review-item"><b>Trade Term</b><span>{requirements.tradeTerm||"Not selected"}</span></div><div className="review-item"><b>Payment</b><span>{requirements.paymentPreference||"Not selected"}</span></div><div className="review-item"><b>Shipping</b><span>{requirements.shippingMethod||"Not selected"}</span></div><div className="review-item"><b>Destination</b><span>{destination||"Not entered"}</span></div><div className="review-item"><b>Uploaded Files</b><span>{files.length?files.map(f=>f.name).join(", "):"No files"}</span></div><div className="review-item"><b>Selected Items</b><span>{count}</span></div></div></div>
              <div className="submit-row"><div className="submit-note">This request is sent securely to TPKELE sales. The same structured fields can also be forwarded to your CRM when a webhook is configured.</div><button className="btn btn-primary" type="submit" disabled={submitState==="sending"}>{submitState==="sending"?"Sending...":"Send Requirement to TPKELE"}</button></div>
              {submitState==="success" && <div className="success-card"><div className="success-mark">✓</div><div><strong>Request received</strong><p>Reference: {reference||"Generated successfully"}</p><span>Next: product review → customization check → quotation / PI basis → lead-time & shipping confirmation.</span></div></div>}
              {submitState==="error" && <div className="error-card">{submitMessage||"Could not send the request. Please try again."}</div>}
            </div></form>
            <div className="after-submit"><div className="after-card"><strong>1. Requirement Review</strong><span>We review product, quantity, destination and selected trade needs.</span></div><div className="after-card"><strong>2. Commercial Reply</strong><span>We confirm quotation basis, trade terms and missing information.</span></div><div className="after-card"><strong>3. Customization Check</strong><span>OEM, packaging, labels and document feasibility are reviewed.</span></div><div className="after-card"><strong>4. Order Plan</strong><span>You receive the next steps for PI, lead time, shipment and document preparation.</span></div></div>
          </section>

          <section id="faq" className="faq"><div className="section-kicker">10 / FAQ</div><h2>Buyer FAQ</h2><p className="section-lead">Common order-planning questions stay collapsed by default to keep the page comfortable to scan.</p>
            <details><summary>Can I request custom packaging before I have final artwork?</summary><p>Yes. Select the packaging type first and describe your intended style. Final artwork, MOQ and feasibility are confirmed before mass production.</p></details><details><summary>Can I request packing dimensions before placing the order?</summary><p>Yes. This is useful for freight estimates, warehouse planning and container analysis. Final values follow the confirmed product and packaging combination.</p></details><details><summary>What if I do not know which Incoterm to choose?</summary><p>Use the Help Me Choose tool or select Not Sure. The recommendation is only a starting point; the final Incoterm® basis is confirmed in the quotation.</p></details><details><summary>Can I select PI, CI, Packing List and Certificate of Origin together?</summary><p>Yes. Select all documents you expect to need. TPKELE can clarify which are relevant at each order and shipment stage.</p></details><details><summary>What files can I upload?</summary><p>The V9 default accepts PDF, XLSX, XLS, CSV, PNG, JPG/JPEG and WebP. It is intended for BOMs, product lists, logos and packaging references.</p></details>
          </section>
        </main>

        <aside className="side"><div className="navbox"><h3>PAGE NAVIGATION</h3><ul className="page-nav">{NAV_ITEMS.map(([id,label],i)=><li className={active===id?"active":""} key={id}><a href={`#${id}`}><span className="num">{String(i+1).padStart(2,"0")}</span><span>{label}</span></a></li>)}</ul></div><div className="request-widget"><h4>Your Request</h4><p>Your choices are saved while you read this page.</p><div className="widget-line"><span>Selected items</span><b>{count}</b></div><div className="widget-line"><span>Files</span><b>{files.length}</b></div><a className="btn btn-primary" href="#request">Review Request</a></div></aside>
      </div>

      <footer><div className="container footer-row"><span>© 2026 TPKELE. Buyer Trade Support Center.</span><span>International electrical procurement support.</span></div></footer>
    </>
  );
}
