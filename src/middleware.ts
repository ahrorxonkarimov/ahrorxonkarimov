import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const path = url.pathname;
  const hostname = request.headers.get("host") || "";

  const isAdminDomain = hostname === "abdulloh.ahrorxon.uz";
  
  const isAuth = request.cookies.get('admin_auth')?.value !== undefined && request.cookies.get('admin_auth')?.value !== '';
  const isAdminPath = path.startsWith('/admin') || isAdminDomain;
  const isLoginPath = path === '/admin/login' || path === '/admin/register' || (isAdminDomain && (path === '/login' || path === '/register'));

  // Auth tekshiruvi (faqat /admin yo'llari yoki admin domen uchun)
  if (isAdminPath && !isLoginPath) {
    if (!isAuth) {
      // Login sahifasiga yuboramiz
      const loginUrl = isAdminDomain ? new URL('/login', request.url) : new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Login sahifasida bo'lsa va allaqachon avtorizatsiyadan o'tgan bo'lsa
  if (isLoginPath && isAuth) {
    const dashboardUrl = isAdminDomain ? new URL('/', request.url) : new URL('/admin', request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  // Domain rewrites (abdulloh.ahrorxon.uz orqali kirganda)
  if (isAdminDomain) {
    if (path === "/") {
      return NextResponse.rewrite(new URL('/admin', request.url));
    }
    if (!path.startsWith("/admin")) {
      return NextResponse.rewrite(new URL(`/admin${path}`, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
