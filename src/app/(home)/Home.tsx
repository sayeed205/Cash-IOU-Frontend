import Header from '@/components/ui/Header';
import { homeConfig } from '@/config/Home';
import Fetcher from '@/hooks/Fetcher';
import { getCurrentUser } from '@/lib/auth/session';
import { notFound } from 'next/navigation';

const Home = async () => {
    const user = await getCurrentUser();
    if (!user) return notFound();

    const transactionRooms = await Fetcher({
        url: '/api/transaction-room/all',
        method: 'get',
        headers: {
            Authorization: `Bearer ${user.token}`,
        },
    });

    return (
        <div className="flex flex-col min-h-screen space-y-6">
            <Header items={homeConfig.mainNav} />

            <div className="">H</div>
        </div>
    );
};

export default Home;
