import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Protect /admin routes, except /admin/login
  if (path.startsWith('/admin') && path !== '/admin/login') {
    const isAuth = request.cookies.get('admin_auth')?.value === 'true';

    if (!isAuth) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Redirect authenticated users away from login page
  if (path === '/admin/login') {
    const isAuth = request.cookies.get('admin_auth')?.value === 'true';
    if (isAuth) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
