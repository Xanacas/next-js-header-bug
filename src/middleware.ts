import { NextResponse, NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const headers = new Headers(req.headers);
    headers.set('set-header', 'this always works');
    const res = NextResponse.next({
        request: {
            headers: headers,
        },
    });
    res.headers.append('add-to-response', 'this only works in dev mode');

    return res;
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
