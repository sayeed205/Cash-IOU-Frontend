'use client';

import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { cn } from '@/lib/utils';
import { LoginSchema } from '@/lib/validation/auth';
import { Icons } from './icons';
import { buttonVariants } from './ui/button';
import { Input } from './ui/input';
import Label from './ui/label';
import { toast } from './ui/use-toast';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const LoginForm = ({ className, ...props }: UserAuthFormProps) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginSchema>({
        resolver: classValidatorResolver(LoginSchema),
    });

    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (data: LoginSchema) => {
        setIsLoading(true);
        const res = await signIn('credentials', {
            redirect: false,
            phone: data.phone,
            password: data.password,
            callbackUrl: searchParams?.get('from') || '/',
        });
        setIsLoading(false);

        if (!res?.ok) {
            return toast({
                title: 'Sign in failed',
                description:
                    res?.status === 401
                        ? 'Invalid credentials'
                        : 'Something went wrong' + res?.status,
                variant: 'destructive',
            });
        }

        router.refresh();
        return toast({
            title: 'Sign in successful',
            description: 'Welcome back',
            variant: 'default',
        });
    };

    return (
        <div className={cn('grid gap-6', className)} {...props}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="tel">
                            Phone
                        </Label>
                        <Input
                            id="tel"
                            type="tel"
                            placeholder="+91998877665544"
                            autoComplete="tel"
                            disabled={isLoading}
                            {...register('phone')}
                        />
                        {errors?.phone && (
                            <p className="px-1 text-xs text-red-600">
                                {errors.phone.message}
                            </p>
                        )}
                        <div className="relative">
                            <Label className="sr-only" htmlFor="password">
                                Password
                            </Label>
                            <Input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Abcd@1234"
                                disabled={isLoading}
                                {...register('password')}
                            />
                            {/* EYE toggle to show Password */}
                            <div
                                className="absolute top-0 bottom-0 right-0 flex items-center w-10 px-3 cursor-pointer text-muted-foreground"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <Icons.eyeOff />
                                ) : (
                                    <Icons.eye />
                                )}
                            </div>

                            {errors?.password && (
                                <p className="px-1 text-xs text-red-600">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <button
                        className={cn(buttonVariants())}
                        disabled={isLoading}
                    >
                        {isLoading && (
                            <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
                        )}
                        Sign In
                    </button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="px-2 bg-background text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <button
                type="button"
                className={cn(buttonVariants({ variant: 'outline' }))}
                // onClick={()=> {
                //     signIn
                // }}
                disabled={isLoading}
            >
                {/* add oauth buttons */}
            </button>
        </div>
    );
};

export default LoginForm;
