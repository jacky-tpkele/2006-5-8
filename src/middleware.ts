import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 301重定向：旧URL → 新URL
  const redirects: Record<string, string> = {
    // MCB分类 - 重定向到短路径
    '/products/category/mcb/ac-mcb': '/products/ac-mcb',
    '/products/category/mcb/dc-mcb': '/products/dc-mcb',
    '/circuit-breakers': '/products/ac-mcb',
    '/dc-circuit-breakers': '/products/dc-mcb',

    // Blog 分类 - 重定向到新路径
    '/blog/category/product': '/blog/product-knowledge',
    '/blog/category/buying': '/blog/selection-guides',
    '/blog/category/comparison': '/blog/comparisons',
    '/blog/category/application': '/blog/application-scenarios',
    '/blog/category/faq': '/blog/faqs',
  };

  // 检查是否需要重定向
  if (redirects[pathname]) {
    const url = request.nextUrl.clone();
    url.pathname = redirects[pathname];
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/products/category/:path*', '/circuit-breakers', '/dc-circuit-breakers', '/blog/category/:path*'],
};
