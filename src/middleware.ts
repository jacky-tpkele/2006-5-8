import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

// 301 重定向映射表（保留现有逻辑）
const redirects: Record<string, string> = {
  // Blog 分类路由迁移 (2026-06-07)
  "/blog/category/product": "/blog/product-knowledge",
  "/blog/category/buying": "/blog/selection-guides",
  "/blog/category/comparison": "/blog/comparisons",
  "/blog/category/application": "/blog/application-scenarios",
  "/blog/category/faq": "/blog/faqs",

  // MCB 产品路由简化 (2026-06-07)
  "/products/category/mcb/ac-mcb": "/products/ac-mcb",
  "/products/category/mcb/dc-mcb": "/products/dc-mcb",
  "/circuit-breakers": "/products/ac-mcb",
  "/dc-circuit-breakers": "/products/dc-mcb",
};

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. 先处理 301 重定向（优先级最高，避免被语言路由拦截）
  if (redirects[pathname]) {
    const url = request.nextUrl.clone();
    url.pathname = redirects[pathname];
    return NextResponse.redirect(url, 301);
  }

  // 2. 处理俄语路径的旧重定向（例如 /ru/circuit-breakers → /ru/products/ac-mcb）
  if (pathname.startsWith("/ru/")) {
    const stripped = pathname.replace(/^\/ru/, "");
    if (redirects[stripped]) {
      const url = request.nextUrl.clone();
      url.pathname = `/ru${redirects[stripped]}`;
      return NextResponse.redirect(url, 301);
    }
  }

  // 3. 交给 next-intl 处理语言路由
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // 匹配所有路径，但排除 Next.js 内部路径和静态资源
    "/((?!_next|_vercel|.*\\..*).*)",
    // 包含首页和多语言首页
    "/",
    "/(en|ru)/:path*",
  ],
};

