/**
 * 富版式文章注册表。
 *
 * 由 TPKELE BLOG 图文工作台维护。静态发布的文章登记在这里，
 * 官网 blog/[slug] 页面会优先查这张表。
 */

import type { RichBlogArticle } from "@/lib/rich-blog/types";
import article_how_to_select_an_spd_type_1_type_2_and_type_12_for_ac_and_solar_dc_systems from "./how-to-select-an-spd-type-1-type-2-and-type-12-for-ac-and-solar-dc-systems";
import article_circuit_breaker_structure_and_function_a_practical_guide_to_mcbs_and_rcbos from "./circuit-breaker-structure-and-function-a-practical-guide-to-mcbs-and-rcbos";
import article_type_1_vs_type_2_spd_tests_ratings_and_installation_positions_2026_guide from "./type-1-vs-type-2-spd-tests-ratings-and-installation-positions-2026-guide";
import article_how_to_specify_a_pv_dc_combiner_box_strings_voltage_and_protection from "./how-to-specify-a-pv-dc-combiner-box-strings-voltage-and-protection";

const registry: Record<string, RichBlogArticle> = {
  [article_how_to_select_an_spd_type_1_type_2_and_type_12_for_ac_and_solar_dc_systems.slug]: article_how_to_select_an_spd_type_1_type_2_and_type_12_for_ac_and_solar_dc_systems,
  [article_circuit_breaker_structure_and_function_a_practical_guide_to_mcbs_and_rcbos.slug]: article_circuit_breaker_structure_and_function_a_practical_guide_to_mcbs_and_rcbos,
  [article_type_1_vs_type_2_spd_tests_ratings_and_installation_positions_2026_guide.slug]: article_type_1_vs_type_2_spd_tests_ratings_and_installation_positions_2026_guide,
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
