"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
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

export function CategoryProductGrid({
  category,
  products,
  seriesOptions,
  initialSeries = "",
  hasSubs = false,
  subs = [],
  categorySlug,
}: Props) {
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
            <h2 className="category-grid-title">{category} Series</h2>
          </div>
          <p className="muted">
            {subs.length} {subs.length > 1 ? "series" : "series"}
          </p>
        </div>

        <div className="sub-card-grid">
          {subs.map((s) => (
            <Link key={s.slug} className="sub-card" href={`/products/category/${categorySlug}/${s.slug}`}>
              <div className="sub-card-image">
                {s.image && <Image src={s.image} alt={s.label} width={320} height={320} />}
              </div>
              <div className="sub-card-body">
                <h3>{s.label}</h3>
                <p>{s.count} {s.count > 1 ? "products" : "product"}</p>
                <span className="sub-card-cta">Explore series →</span>
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
          {products.length} {products.length > 1 ? "products available" : "product available"}
        </p>
      </div>

      {showSeriesBar && (
        <div className="series-strip" aria-label="Sub-series">
          <button
            type="button"
            className={`series-chip ${series === "" ? "active" : ""}`}
            onClick={() => setSeries("")}
          >
            All {category}
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
                  View Details
                </Link>
                <InquiryModal
                  triggerLabel="Inquire Now"
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
