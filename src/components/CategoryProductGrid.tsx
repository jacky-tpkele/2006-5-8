"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { InquiryModal } from "@/components/InquiryModal";
import type { Product, ProductCategory } from "@/data/site";

type SeriesOption = { label: string; href: string };

type SubItem = {
  slug: string;
  label: string;
  count: number;
  image: string;
};

type Props = {
  category: ProductCategory;
  products: Product[];
  seriesOptions: SeriesOption[];
  initialSeries?: string;
  hasSubs?: boolean;
  subs?: SubItem[];
  categorySlug: string;
};

export function CategoryProductGrid(props: Props) {
  return (
    <Suspense fallback={null}>
      <CategoryProductGridInner {...props} />
    </Suspense>
  );
}

function CategoryProductGridInner({
  category,
  products,
  seriesOptions,
  initialSeries = "",
  hasSubs = false,
  subs = [],
  categorySlug,
}: Props) {
  const t = useTranslations("categoryGrid");
  const tc = useTranslations("common");
  const searchParams = useSearchParams();
  const [series, setSeries] = useState(initialSeries);

  useEffect(() => {
    setSeries(searchParams.get("series") ?? "");
  }, [searchParams]);

  const visible = useMemo(
    () =>
      series
        ? products.filter((p) => p.series === series || p.seriesAliases?.includes(series))
        : products,
    [products, series],
  );

  if (hasSubs) {
    return (
      <section className="section category-grid-section">
        <div className="category-grid-head">
          <div>
            <span className="section-mark" aria-hidden="true" />
            <h2 className="category-grid-title">{t("seriesHeading", { category })}</h2>
          </div>
          <p className="muted">
            {t("seriesCount", { count: subs.length })}
          </p>
        </div>

        <div className="sub-card-grid">
          {subs.map((s) => (
            <Link key={s.slug} className="sub-card" href={`/products/category/${categorySlug}/${s.slug}`}>
              <div className="sub-card-image">
                {s.image && <Image src={s.image} alt={s.label} width={320} height={320} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px" />}
              </div>
              <div className="sub-card-body">
                <h3>{s.label}</h3>
                <p>{t("productCount", { count: s.count })}</p>
                <span className="sub-card-cta">{t("exploreSeries")}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  }

  const showSeriesBar = seriesOptions.length > 1;

  return (
    <section className="section category-grid-section">
      <div className="category-grid-head">
        <div>
          <span className="section-mark" aria-hidden="true" />
          <h2 className="category-grid-title">{category} Products</h2>
        </div>
        <p className="muted">
          {t("productsAvailable", { count: products.length })}
        </p>
      </div>

      {showSeriesBar && (
        <div className="series-strip" aria-label={t("subSeriesAria")}>
          <button
            type="button"
            className={`series-chip ${series === "" ? "active" : ""}`}
            onClick={() => setSeries("")}
          >
            {t("allFilter", { category })}
          </button>
          {seriesOptions.map((opt) => {
            const value = decodeURIComponent(opt.href.split("series=")[1] || "");
            return (
              <button
                key={opt.label}
                type="button"
                className={`series-chip ${series === value ? "active" : ""}`}
                onClick={() => setSeries(value)}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      )}

      <div className="product-grid">
        {visible.map((product) => (
          <article className="product-card" key={product.slug}>
            <div className="product-card-image">
              <Image src={product.image} alt={product.name} width={220} height={220} />
            </div>
            <div className="product-card-body">
              <h3>{product.name}</h3>
              <div className="product-card-actions">
                <Link className="small-btn outline" href={`/products/${product.slug}`}>
                  {tc("viewDetails")}
                </Link>
                <InquiryModal
                  triggerLabel={tc("inquireNow")}
                  triggerClassName="small-btn primary"
                  product={product.name}
                  intent="quote"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
