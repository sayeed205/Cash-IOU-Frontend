import Fetcher from '@/hooks/Fetcher';
import { NextResponse } from 'next/server';

type signupInput = {
    phone: string;
    password: string;
    name: string;
    confirmPassword: string;
};

export async function POST(req: Request) {
    const res: signupInput = await req.json();
    console.log(res);
    const { data } = await Fetcher('/api/auth/signup', {
        method: 'POST',
        data: JSON.stringify(res),
    });

    return NextResponse.json(data);
}
