import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('next-auth.session-token')?.value

  const redirectUrl = new URL('/', request.url)

  if (!token) {
    return NextResponse.redirect(redirectUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/dashboard/:path*',
}
