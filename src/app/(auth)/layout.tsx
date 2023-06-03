import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { getCurrentUser } from '@/lib/auth/session';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { redirect } from 'next/navigation';

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
    const user = await getCurrentUser();
    if (user) redirect('/');

    return (
        <div className="container flex flex-col items-center justify-center w-screen h-screen min-h-screen">
            <Link
                href="/"
                className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'absolute left-4 top-4 md:left-8 md:top-8'
                )}
            >
                <>
                    <Icons.chevronLeft className="w-4 h-4 mr-2" />
                    Back
                </>
            </Link>
            {children}
        </div>
    );
}
