import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const nestResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/stats/dashboard`, {
            // headers: {
            //     'Authorization': `Bearer ${process.env.CLERK_SECRET_KEY}`
            // },
            headers: {
                Cookie: cookies().toString(),
            },
            credentials: 'include'
        });

        if (!nestResponse.ok) {
            throw new Error('Failed to fetch stats');
        }

        const data = await nestResponse.json();
        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}