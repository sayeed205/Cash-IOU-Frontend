import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
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
