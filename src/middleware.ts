import { NextResponse, NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    console.log('middle ware executed for: ', req.nextUrl.pathname);
    const headers = new Headers(req.headers);
    headers.set('userId', '12345');
    const res = NextResponse.next({
        request: {
            headers: headers,
        },
    });
    res.headers.append('x-user-id', 'test' as string);
    console.log('middleware executed, userId set');
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
