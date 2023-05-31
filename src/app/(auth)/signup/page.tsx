import { Metadata } from 'next';
import Link from 'next/link';

import { Icons } from '@/components/icons';
import SignupFrom from '@/components/signup-form';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Create an account',
    description: 'Create an account to start using Cash IOU',
};

export default function SignupPage() {
    return (
        <>
            <Link
                href="/login"
                className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'absolute right-4 top-4 md:right-8 md:top-8'
                )}
            >
                Login
            </Link>
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <Icons.logo className="w-6 h-6 mx-auto" />
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Create an account
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Enter you phone and password to create an account
                    </p>
                </div>
                <SignupFrom />
                <p className="px-8 text-sm text-center text-muted-foreground">
                    By clicking Sign Up, you agree to our{' '}
                    <Link
                        href="/terms"
                        className="underline hover:text-brand underline-offset-4"
                    >
                        Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link
                        href="/privacy"
                        className="underline hover:text-brand underline-offset-4"
                    >
                        Privacy Policy
                    </Link>
                    .
                </p>
            </div>
        </>
    );
}
