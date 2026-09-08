import Link from 'next/link';
import { createAdvisorLink } from '../../lib/createAdvisorLink';

export default function AdvisorCard({ title, product, application, desc }: { title: string; product: string; application: string; desc: string }) {
  return (
    <div className="tpk-advisor__card">
      <div className="tpk-advisor__meta">{application}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <Link href={createAdvisorLink(product, application)} className="tpk-guide__button">Open Advisor</Link>
    </div>
  );
}
