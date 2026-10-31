import MongoliaProjectCase from '@/components/projects/MongoliaProjectCase';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: 'Mongolia Battery Storage Distribution Box Project | Ulaanbaatar',
  description: 'Custom-engineered DC and AC distribution boxes for a 330kW battery energy storage system with 11 parallel inverters in Ulaanbaatar, Mongolia. Pre-assembled enclosures with 300A DC breakers, modular AC protection and UV-printed branding.',
  alternates: { canonical: '/projects/mongolia-ulaanbaatar-battery-storage' },
  openGraph: {
    title: 'Mongolia Battery Storage Distribution Box Project | Ulaanbaatar',
    description: 'Custom distribution box engineering for large-scale battery storage with 11 parallel three-phase inverters. Pre-assembled, tested and UV-printed enclosures.',
    images: ['/assets/projects/mongolia-project-og.jpg'],
  },
};

export default async function MongoliaProjectPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MongoliaProjectCase />;
}
