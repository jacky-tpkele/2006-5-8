import MongoliaProjectCase from '@/components/projects/MongoliaProjectCase';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getMongoliaCopy } from '@/data/mongolia-project';
import { mongoliaProject } from '@/lib/projects';
import { alternateLanguages, localizedPath } from '@/lib/locale-path';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getMongoliaCopy(locale);
  const canonical = localizedPath(mongoliaProject.route, locale);
  return {
    title: c.seoTitle,
    description: c.seoDescription,
    alternates: { canonical, languages: alternateLanguages(mongoliaProject.route) },
    openGraph: { title: c.seoTitle, description: c.seoDescription, url: canonical, images: [mongoliaProject.og] },
  };
}

export default async function MongoliaProjectPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MongoliaProjectCase locale={locale} />;
}
