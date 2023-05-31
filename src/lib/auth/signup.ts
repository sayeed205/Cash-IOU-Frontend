import { loginErrRes, loginRes } from '@/types/auth';
import { SignupSchema } from '../validation/auth';

const signup = async (authInfo: SignupSchema) => {
    const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(authInfo),
    });

    if (res.status === 409) {
        const data = (await res.json()) as loginErrRes;
        return { error: data.message, data: null };
    } else {
        const data = (await res.json()) as loginRes;
        return { data: { token: data.data.token }, error: null };
    }
};

export default signup;
