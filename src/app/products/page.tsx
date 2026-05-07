import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageTitle } from "@/components/PageTitle";
import { categoryContent, categorySlugMap, productMenu, products } from "@/data/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "TPKELE manufactures MCB, SPD, ATS, combiner box, voltage protector and energy meter for low voltage distribution and solar projects.",
};

export default function ProductsPage() {
  return (
    <main>
      <PageTitle title="Products" crumb="Products" />

      <section className="section category-index">
        <div className="section-heading centered">
          <p className="eyebrow">Product Categories</p>
          <h2>Choose a category to explore the full series.</h2>
        </div>

        <div className="category-index-grid">
          {productMenu.map((group) => {
            const slug = categorySlugMap[group.label];
            const items = products.filter((p) => p.parentCategory === group.label);
            const cover = items[0]?.image;
            const intro = categoryContent[group.label]?.intro?.split(".")[0] + ".";
            return (
              <Link key={group.label} className="category-index-card" href={`/products/category/${slug}`}>
                <div className="category-index-image">
                  {cover && <Image src={cover} alt={group.label} width={260} height={260} />}
                </div>
                <div className="category-index-body">
                  <h3>{group.label}</h3>
                  <p>{intro}</p>
                  <span className="category-index-cta">
                    View {items.length} {items.length > 1 ? "products" : "product"} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
