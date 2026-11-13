import { NextResponse } from "next/server";
import { products } from "@/data/site";

// GET: 返回所有产品列表（用于工作台同步）
export async function GET() {
  try {
    const productList = products.map((product) => ({
      slug: product.slug,
      name: product.name,
      shortName: product.shortName,
      category: product.category,
      subCategorySlug: product.subCategorySlug,
      series: product.series,
      seriesAliases: product.seriesAliases,
    }));

    return NextResponse.json({
      products: productList,
      count: productList.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
