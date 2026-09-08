'use client';

import {useEffect,useState} from 'react';

const sections=[
'Selection Overview',
'Required Technical Inputs',
'Key Selection Parameters',
'Voltage Selection',
'Current Rating Selection',
'Breaking Capacity',
'Solar PV Application Example',
'Standards Reference',
'Export Requirements',
'FAQ'
];

export default function GuideTemplate({slug}:{slug:string}){

const [active,setActive]=useState(sections[0]);

useEffect(()=>{
 const handler=()=>{
  let current=sections[0];
  sections.forEach(s=>{
   const el=document.getElementById(s);
   if(el && el.getBoundingClientRect().top<180){
    current=s;
   }
  });
  setActive(current);
 };
 window.addEventListener('scroll',handler);
 return()=>window.removeEventListener('scroll',handler);
},[]);

return (
<div className="guide-layout">

<aside className="floating-nav">
<h3>ON THIS PAGE</h3>
{sections.map(s=>(
<div className={active===s?'active item':'item'} key={s}>
{s}
</div>
))}
</aside>

<article>
<h1>DC MCB Selection Guide for Solar PV Systems</h1>

{sections.map(s=>(
<section id={s} key={s}>
<h2>{s}</h2>
<p>
Technical engineering content section. 
This area is generated from TPKELE guide database.
</p>
</section>
))}

<div>
<button>
Check Export Requirements
</button>
</div>

</article>

</div>
)

}