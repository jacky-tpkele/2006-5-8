import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 301重定向：旧URL → 新URL
  const redirects: Record<string, string> = {
    // MCB分类
    '/products/category/mcb': '/products/mcb',
    '/products/category/mcb/ac-mcb': '/products/ac-mcb',
    '/products/category/mcb/dc-mcb': '/products/dc-mcb',

    // SPD分类
    '/products/category/spd': '/products/spd',
    '/products/category/spd/ac-spd': '/products/ac-spd',
    '/products/category/spd/dc-spd': '/products/dc-spd',

    // 其他分类
    '/products/category/ats': '/products/ats',
    '/products/category/combiner-box': '/products/combiner-box',
    '/products/category/voltage-protector': '/products/voltage-protector',
    '/products/category/energy-meter': '/products/energy-meter',
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
  matcher: '/products/category/:path*',
};
