import Fetcher from '@/hooks/Fetcher';
import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                phone: { label: 'Phone', type: 'tel', placeholder: 'Phone' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
                const res = await Fetcher('/api/auth/login', {
                    method: 'POST',
                    data: JSON.stringify(credentials),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (res.status === 201) {
                    return res.data;
                }

                return null;
            },
        }),
    ],
    pages: {
        signIn: '/login',
    },
    session: {
        strategy: 'jwt',
        maxAge: 7 * 24 * 60 * 60, // 7 days
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token = { ...token, ...user };
            }
            return {
                id: token.id || user?.id,
                name: token.name || user?.name,
                phone: token.phone || user?.phone,
                token: token.token || user?.token,
            };
        },
        async session({ session, token, user }) {
            session.user = token;
            return session;
        },
    },
};
