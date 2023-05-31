import { Metadata } from 'next';
import Link from 'next/link';

import { Icons } from '@/components/icons';
import LoginForm from '@/components/login-form';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Login',
    description: 'Login to your account',
};

export default function LoginPage() {
    return (
        <>
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
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <Icons.logo className="w-6 h-6 mx-auto" />
                    <h1 className="text-2xl font-semibold tracking-tighter">
                        Cash IOU
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your credentials to sign in
                    </p>
                </div>
                <LoginForm />
                <p className="px-8 text-sm text-center text-muted-foreground">
                    <Link
                        href="/signup"
                        className="underline hover:text-brand underline-offset-4"
                    >
                        Don&apos;t have an account? Signup
                    </Link>
                </p>
            </div>
        </>
    );
}
