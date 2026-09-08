import { notFound } from 'next/navigation';
import GuidePage from '../../../components/technical-guide/GuidePage';
import { getGuideBySlug } from '../../../lib/guides';
import '../../../styles/tpkele-guide.css';

export default function GuideDetailPage({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();
  return <GuidePage guide={guide} />;
}
