import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { ...userData } = await request.json();

    return NextResponse.json({ success: true, user: userData });
}