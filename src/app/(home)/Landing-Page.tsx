import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type Props = {};

const LandingPage = (props: Props) => {
    return (
        <div className="">
            <Link
                href="/login"
                className={cn(
                    buttonVariants({ variant: 'default' }),
                    ' md:left-8 md:top-8'
                )}
            >
                Login
            </Link>
            <Link
                href="/signup"
                className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    ' md:left-8 md:top-8'
                )}
            >
                Signup
            </Link>
        </div>
    );
};

export default LandingPage;
