import type { Metadata } from "next";
import StandardsDatabaseClient from "@/components/standards/StandardsDatabaseClient";
import StandardsCrosswalk from "@/components/standards/StandardsCrosswalk";
import RelatedResources from "@/components/standards/RelatedResources";
import StandardsFaq,{standardsFaqs} from "@/components/standards/StandardsFaq";

export const metadata:Metadata={
 title:"Electrical Standards Database | IEC & UL Reference | TPKELE",
 description:"Search 32 electrical standards references for DC/AC MCB, SPD, ATS, energy meters, voltage protection and PV combiner systems. Compare scope, reference type, product relevance and official sources.",
 alternates:{canonical:"/resources/standards-database"},
 openGraph:{title:"Electrical Standards Database | TPKELE",description:"Search IEC and UL standards by product, application, reference type and standard number.",url:"https://www.tpkele.com/resources/standards-database",type:"website"}
};

export default function Page(){
 const breadcrumb={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
  {"@type":"ListItem","position":1,"name":"Home","item":"https://www.tpkele.com/"},
  {"@type":"ListItem","position":2,"name":"Resources","item":"https://www.tpkele.com/resources"},
  {"@type":"ListItem","position":3,"name":"Standards Database","item":"https://www.tpkele.com/resources/standards-database"}]};
 const faq={"@context":"https://schema.org","@type":"FAQPage","mainEntity":standardsFaqs.map((x)=>({"@type":"Question","name":x.q,"acceptedAnswer":{"@type":"Answer","text":x.a}}))};
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumb)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faq)}}/><div className="breadcrumb"><div className="container">Home / Resources / <b>Standards Database</b></div></div><StandardsDatabaseClient/><StandardsCrosswalk/><RelatedResources/><StandardsFaq/></>
}
