import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const protectedRoutes = [
  '/',
  '/profile',
  '/settings',
  '/add-training',
  '/board-training',
  '/stats-training',
]

const authRestrictedRoutes = ['/welcome', '/register']

export function middleware(request: NextRequest) {
  const token =
    request.cookies.get('authjs.session-token')?.value ||
    request.cookies.get('__Secure-authjs.session-token')?.value

  if (token && authRestrictedRoutes.includes(request.nextUrl.pathname)) {
    const url = new URL('/', request.url)
    return NextResponse.redirect(url)
  }

  if (!token && protectedRoutes.includes(request.nextUrl.pathname)) {
    const url = new URL('/welcome', request.url)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/((?!api|_next|static|public).*)',
}
