import { getServerSession } from 'next-auth/next';

import CurrentUser from '@/types/current-user';
import { authOptions } from './auth';

export const getCurrentUser = async () => {
    const session = await getServerSession(authOptions);
    if (!session) return null;
    return session.user as CurrentUser;
};
