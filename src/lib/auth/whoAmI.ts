import Fetcher from '@/hooks/Fetcher';

const whoAmI = async (token: string) => {
    const res = await Fetcher('/api/whoami', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });

    if (res.status === 200) {
        return res.data;
    } else {
        return null;
    }
};

export default whoAmI;
