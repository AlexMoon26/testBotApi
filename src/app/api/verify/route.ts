import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { hash, ...userData } = await request.json();

    // Здесь должна быть логика проверки данных с помощью hash
    // и секретного ключа вашего бота

    return NextResponse.json({ success: true, user: userData });
}