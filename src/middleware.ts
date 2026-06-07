import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 301重定向：旧URL → 新URL
  const redirects: Record<string, string> = {
    // MCB分类 - 重定向到落地页面
    '/products/category/mcb/ac-mcb': '/circuit-breakers',
    '/products/category/mcb/dc-mcb': '/dc-circuit-breakers',
    '/products/ac-mcb': '/circuit-breakers',
    '/products/dc-mcb': '/dc-circuit-breakers',

    // SPD分类
    '/products/category/spd/ac-spd': '/products/category/spd/ac-spd',
    '/products/category/spd/dc-spd': '/products/category/spd/dc-spd',
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
  matcher: ['/products/category/:path*', '/products/ac-mcb', '/products/dc-mcb'],
};
