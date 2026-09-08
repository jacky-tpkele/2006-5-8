import Link from 'next/link';

export default function GuideCard({ guide }: { guide: any }) {
  return (
    <Link href={`/guides/${guide.slug}`} className="tpk-guide-index__card">
      <span className="tpk-guide-index__tag">{guide.categoryTrail.join(' · ')}</span>
      <h2>{guide.title}</h2>
      <p>{guide.description}</p>
      <strong>Open Guide →</strong>
    </Link>
  );
}
