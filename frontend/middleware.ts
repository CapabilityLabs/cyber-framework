import { NextRequest, NextResponse } from 'next/server'

/**
 * Public site: no authentication required.
 * If auth is needed in future, add it here behind a feature flag.
 */
export function middleware(_req: NextRequest) {
  return NextResponse.next();
}
