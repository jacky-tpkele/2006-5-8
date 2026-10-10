import ProjectsLanding from '@/components/projects/ProjectsLanding';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: 'Project References | Solar PV, Protection & Power Transfer',
  description: 'Real project references showing how TPKELE DC MCB, DC SPD, AC MCB, AC SPD and ATS products fit into solar PV, battery storage and low-voltage distribution systems.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Project References | Solar PV, Protection & Power Transfer | TPKELE',
    description: 'Real project references showing how TPKELE DC MCB, DC SPD, AC MCB, AC SPD and ATS products fit into solar PV, battery storage and low-voltage distribution systems.',
    images: ['/assets/projects/projects-og.jpg'],
  },
};

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProjectsLanding />;
}
