import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

/**
 * 每个请求的 i18n 配置：决定当前语言、加载对应的 UI 文案。
 * messages/<locale>.json 只存界面文案（导航、按钮、表单标签）；
 * 产品与分类的业务内容走 src/data/site.ru.ts 的覆盖机制。
 */
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
