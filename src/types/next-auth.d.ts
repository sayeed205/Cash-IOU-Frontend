import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
    interface Session {
        id: string;
        name: string;
        phone: string;
        token: string;
    }

    interface User {
        id: string;
        name: string;
        phone: string;
        token: string;
    }

    interface JWT {
        id: string;
        name: string;
        phone: string;
        token: string;
    }
}
