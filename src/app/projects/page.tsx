import ProjectsLanding from '@/components/projects/ProjectsLanding';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project References | Solar PV, Protection & Power Transfer | TPKELE',
  description: 'Real project references showing how TPKELE DC MCB, DC SPD, AC MCB, AC SPD and ATS products fit into solar PV, battery storage and low-voltage distribution systems.',
  openGraph: {
    title: 'Project References | Solar PV, Protection & Power Transfer | TPKELE',
    description: 'Real project references showing how TPKELE DC MCB, DC SPD, AC MCB, AC SPD and ATS products fit into solar PV, battery storage and low-voltage distribution systems.',
    images: ['/assets/projects/projects-og.jpg'],
    url: 'https://www.tpkele.com/projects',
  },
};

export default function ProjectsPage() {
  return <ProjectsLanding />;
}
