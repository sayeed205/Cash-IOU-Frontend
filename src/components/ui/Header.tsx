import { getCurrentUser } from '@/lib/auth/session';
import { NavItem } from '@/types/nav';
import { notFound } from 'next/navigation';
import { MainNav } from '../main-nav';
import { ThemeToggle } from '../theme-toggle';
import { UserAccountNav } from '../user-account-nav';

interface HeaderProps {
    items: NavItem[];
}

export default async function Header({ items }: HeaderProps) {
    const user = await getCurrentUser();
    if (!user) return notFound();

    return (
        <header className="sticky top-0 z-40 border-b bg-background">
            <div className="container flex items-center justify-between h-16 py-4">
                <MainNav items={items} />
                <div className="flex gap-2">
                    <ThemeToggle />
                    <UserAccountNav
                        user={{
                            name: user.name,
                            image: user.image,
                            phone: user.phone,
                        }}
                    />
                </div>
            </div>
        </header>
    );
}
