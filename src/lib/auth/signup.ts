import { SignupSchema } from '../validation/auth';

// This takes data from next client and brings it to the next server
const signup = async (authInfo: SignupSchema) => {
    const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(authInfo),
    });
    if (res.ok) {
        const data = await res.json();
        return data;
    }
};

export default signup;
