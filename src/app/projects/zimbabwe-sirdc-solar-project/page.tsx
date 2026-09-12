import ZimbabweProjectCase from '@/components/projects/ZimbabweProjectCase';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zimbabwe Solar PV & Battery Storage Project | SIRDC 19/2026',
  description: 'Buyer-provided procurement reference for solar PV modules, hybrid and off-grid inverters, 48V battery storage, DC/AC protection, surge protection, automatic changeover and distribution equipment in Zimbabwe.',
  openGraph: {
    title: 'Zimbabwe Solar PV & Battery Storage Project | SIRDC 19/2026',
    description: 'Solar equipment procurement reference covering bifacial PV, hybrid inverters, battery storage, DC/AC protection, surge protection and automatic transfer systems.',
    images: ['/assets/projects/zimbabwe-sirdc-project-og.jpg'],
    url: 'https://www.tpkele.com/projects/zimbabwe-sirdc-solar-project',
  },
};

export default function ZimbabweProjectPage() {
  return <ZimbabweProjectCase />;
}
