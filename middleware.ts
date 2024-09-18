import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('jwtToken')

  if (!token) {
    return NextResponse.redirect(new URL('/welcome', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/'],
}
