import { getCurrentUser } from '@/lib/auth/session';
import { redirect } from 'next/navigation';

const DashboardPage = async () => {
    const user = await getCurrentUser();

    if (!user) redirect('/login');

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
};

export default DashboardPage;
