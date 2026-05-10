import Link from "next/link";
import { site } from "@/data/site";

export type Crumb = { label: string; href?: string };

type PageTitleProps = {
  title: string;
  crumb: string;
  parents?: Crumb[];
};

export function PageTitle({ title, crumb, parents = [] }: PageTitleProps) {
  const trail: Array<{ label: string; href?: string }> = [
    { label: "Home", href: "/" },
    ...parents,
    { label: crumb },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${site.url}${item.href === "/" ? "" : item.href}` } : {}),
    })),
  };

  return (
    <section className="page-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav className="page-title-crumbs" aria-label="Breadcrumb">
        {trail.map((item, index) => {
          const isLast = index === trail.length - 1;
          return (
            <span key={`${item.label}-${index}`}>
              {item.href && !isLast ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined}>{item.label}</span>
              )}
              {!isLast ? <span aria-hidden="true"> / </span> : null}
            </span>
          );
        })}
      </nav>
      <h1>{title}</h1>
    </section>
  );
}
