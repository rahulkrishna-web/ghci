import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of known spam/bot domains to block
const BLOCKED_REFERRERS = [
  'trafficcheap.cc',
  'bottraffic.live',
  'bot-traffic.icu',
  'trafficbot.live',
]

// List of known bad user agents (optional, add if needed)
const BLOCKED_USER_AGENTS = [
  'Python-urllib',
  'python-requests',
  'curl',
  'wget',
]

export function middleware(request: NextRequest) {
  const referer = request.headers.get('referer') || ''
  const userAgent = request.headers.get('user-agent') || ''

  // 1. Block by Referer
  if (referer) {
    const isBlockedReferrer = BLOCKED_REFERRERS.some(domain => 
      referer.toLowerCase().includes(domain)
    )
    if (isBlockedReferrer) {
      // Return a 403 Forbidden or 404 Not Found response for the bot
      return new NextResponse('Access Denied: Bot Traffic Detected', { status: 403 })
    }
  }

  // 2. Block by User Agent
  if (userAgent) {
    const isBlockedUserAgent = BLOCKED_USER_AGENTS.some(ua => 
      userAgent.toLowerCase().includes(ua.toLowerCase())
    )
    if (isBlockedUserAgent) {
      return new NextResponse('Access Denied: Bot Traffic Detected', { status: 403 })
    }
  }

  // Continue normally if not blocked
  return NextResponse.next()
}

// Optionally configure paths that the middleware should run on
export const config = {
  // Apply to all routes except static files, api routes, Next.js internals
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
