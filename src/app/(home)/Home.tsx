import Header from '@/components/ui/Header';
import { homeConfig } from '@/config/Home';
import Fetcher from '@/hooks/Fetcher';
import { getCurrentUser } from '@/lib/auth/session';
import { PaginationResDto } from '@/types/pagination';
import { notFound } from 'next/navigation';

const Home = async () => {
    const user = await getCurrentUser();
    if (!user) return notFound();

    const res = await Fetcher({
        url: '/api/transaction-room/all',
        method: 'get',
        headers: {
            Authorization: `Bearer ${user.token}`,
        },
    });
    const transactionRoomsRes: PaginationResDto<transactionRooms> = res.data;
    const transactionRooms = transactionRoomsRes.results;

    return (
        <div className="flex flex-col min-h-screen space-y-6">
            <Header items={homeConfig.mainNav} />

            <div className="">
                {transactionRooms.map((transactionRoom) => (
                    <div className="" key={transactionRoom._id}>
                        <h3>{transactionRoom.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
