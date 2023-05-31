import { loginErrRes, loginRes } from '@/types/auth';
import { AuthSchema } from '../validation/auth';

const login = async (authInfo: AuthSchema) => {
    const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(authInfo),
    });

    if (res.status === 401) {
        const data = (await res.json()) as loginErrRes;
        return { error: data.message, data: null };
    } else {
        const data = (await res.json()) as loginRes;
        return { data: { token: data.data.token }, error: null };
    }
};

export default login;
