import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {

    const userCookie = request.cookies.get('telegram_user');


    if (!userCookie && request.nextUrl.pathname.startsWith('/profile')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (userCookie && request.nextUrl.pathname.startsWith('/login')) {
        return NextResponse.redirect(new URL('/profile', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/profile/:path*', '/login'],
};