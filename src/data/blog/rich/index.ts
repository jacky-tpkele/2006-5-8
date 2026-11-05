/**
 * 富版式文章注册表。
 *
 * 由 TPKELE BLOG 图文工作台维护。静态发布的文章登记在这里，
 * 官网 blog/[slug] 页面会优先查这张表。
 */

import type { RichBlogArticle } from "@/lib/rich-blog/types";
import article_how_to_specify_a_pv_dc_combiner_box_strings_voltage_and_protection from "./how-to-specify-a-pv-dc-combiner-box-strings-voltage-and-protection";

const registry: Record<string, RichBlogArticle> = {
  [article_how_to_specify_a_pv_dc_combiner_box_strings_voltage_and_protection.slug]: article_how_to_specify_a_pv_dc_combiner_box_strings_voltage_and_protection,
};

export function getRichBlogArticle(slug: string): RichBlogArticle | undefined {
  return registry[slug];
}

export function getRichBlogSlugs(): string[] {
  return Object.keys(registry);
}

export function getRichBlogArticles(): RichBlogArticle[] {
  return Object.values(registry);
}

export function getRichBlogArticlesForSitemap(): RichBlogArticle[] {
  return Object.values(registry);
}
