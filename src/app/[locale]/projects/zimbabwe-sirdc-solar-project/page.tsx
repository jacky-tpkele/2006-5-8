import ZimbabweProjectCase from '@/components/projects/ZimbabweProjectCase';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: 'Zimbabwe Solar PV & Battery Storage Project | SIRDC 19/2026',
  description: 'Buyer-provided procurement reference for solar PV modules, hybrid and off-grid inverters, 48V battery storage, DC/AC protection, surge protection, automatic changeover and distribution equipment in Zimbabwe.',
  alternates: { canonical: '/projects/zimbabwe-sirdc-solar-project' },
  openGraph: {
    title: 'Zimbabwe Solar PV & Battery Storage Project | SIRDC 19/2026',
    description: 'Solar equipment procurement reference covering bifacial PV, hybrid inverters, battery storage, DC/AC protection, surge protection and automatic transfer systems.',
    images: ['/assets/projects/zimbabwe-sirdc-project-og.jpg'],
  },
};

export default async function ZimbabweProjectPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ZimbabweProjectCase />;
}
