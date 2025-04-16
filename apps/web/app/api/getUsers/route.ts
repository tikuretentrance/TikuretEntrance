import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
            headers: {
                Cookie: cookies().toString(),
            },
        });

        if (!res.ok) {
            console.error(`Error fetching users: ${res.status} ${res.statusText}`);
            return NextResponse.json({ error: 'Failed to fetch users' }, { status: res.status });
        }

        const users = await res.json();
        return NextResponse.json(users);
    } catch (error) {
        console.error("Error in API route:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}