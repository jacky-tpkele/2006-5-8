import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 301 重定向：旧 URL → 新 URL
  const redirects: Record<string, string> = {
    // Blog 分类路由迁移 (2026-06-07)
    '/blog/category/product': '/blog/product-knowledge',
    '/blog/category/buying': '/blog/selection-guides',
    '/blog/category/comparison': '/blog/comparisons',
    '/blog/category/application': '/blog/application-scenarios',
    '/blog/category/faq': '/blog/faqs',

    // MCB 产品路由简化 (2026-06-07)
    '/products/category/mcb/ac-mcb': '/products/ac-mcb',
    '/products/category/mcb/dc-mcb': '/products/dc-mcb',
    '/circuit-breakers': '/products/ac-mcb',
    '/dc-circuit-breakers': '/products/dc-mcb',
  };

  if (redirects[pathname]) {
    const url = request.nextUrl.clone();
    url.pathname = redirects[pathname];
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/blog/category/:path*',
    '/products/category/:path*',
    '/circuit-breakers',
    '/dc-circuit-breakers',
  ],
};
