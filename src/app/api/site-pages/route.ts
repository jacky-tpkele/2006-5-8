import { NextResponse } from "next/server";
import {
  BLOG_CATEGORY_LABELS,
  BLOG_CATEGORY_ORDER,
  fetchPublishedBlogPosts,
} from "@/lib/blog";
import {
  categorySlugMap,
  productFamilies,
  productMenu,
} from "@/data/site";

export const revalidate = 300;

export async function GET() {
  try {
    const blogs = await fetchPublishedBlogPosts();

    const productCategoryUrls = new Map<string, { url: string; title: string }>();
    const productSubCategoryUrls: Array<{ url: string; title: string }> = [];

    for (const group of productMenu) {
      productCategoryUrls.set(group.href, { url: group.href, title: group.label });
      for (const child of group.children) {
        if (child.href.includes("?")) continue;
        productSubCategoryUrls.push({ url: child.href, title: child.label });
      }
    }

    for (const [label, slug] of Object.entries(categorySlugMap)) {
      const url = `/products/category/${slug}`;
      if (!productCategoryUrls.has(url)) {
        productCategoryUrls.set(url, { url, title: label });
      }
    }

    return NextResponse.json({
      success: true,
      pages: {
        blogs: blogs
          .map((post) => ({
            url: `/blog/${post.slug}`,
            title: post.title,
            articleType: post.articleType,
          }))
          .filter((item) => item.url !== "/blog/"),
        products: productFamilies.map((product) => ({
          url: `/products/${product.slug}`,
          title: product.name,
        })),
        productCategories: Array.from(productCategoryUrls.values()),
        productSubCategories: productSubCategoryUrls,
        blogCategories: BLOG_CATEGORY_ORDER.map((slug) => ({
          url: `/blog/${slug}`,
          title: BLOG_CATEGORY_LABELS[slug],
        })),
      },
    });
  } catch (error) {
    console.error("Site pages API error:", error);
    return NextResponse.json({ error: "Failed to build site pages list" }, { status: 500 });
  }
}
