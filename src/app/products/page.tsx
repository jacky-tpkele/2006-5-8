import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageTitle } from "@/components/PageTitle";
import { categoryContent, categorySlugMap, productMenu, products } from "@/data/site";

export const metadata: Metadata = {
  title: "Products — Solar DC Protection, MCB, SPD, ATS, PV Combiner Box, Energy Meter",
  description:
    "TPKELE product range: DC MCB, AC MCB, DC SPD, AC SPD, PV combiner box, ATS, voltage protector and DIN-rail energy meter. CE / IEC / RoHS, OEM ready, built for solar EPCs and panel builders.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <main>
      <PageTitle title="Products" crumb="Products" />

      <section className="section category-index">
        <div className="section-heading centered">
          <p className="eyebrow">Solar DC Protection · Circuit Protection · Surge Protection · Power Distribution</p>
          <h2>Six product families for low voltage and solar projects</h2>
          <p style={{ color: "var(--muted)", marginTop: 12, maxWidth: 720, marginInline: "auto" }}>
            Specified by solar EPCs, electrical distributors, OEM buyers and panel builders worldwide. All products carry CE,
            IEC and RoHS certification with OEM logo, color and packaging customization available.
          </p>
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
