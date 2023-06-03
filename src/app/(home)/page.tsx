import { getCurrentUser } from '@/lib/auth/session';
import Home from './Home';
import LandingPage from './Landing-Page';

const ConditionalHome = async () => {
    const user = await getCurrentUser();

    return user ? <Home /> : <LandingPage />;
};

export default ConditionalHome;
