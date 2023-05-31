import { Metadata } from 'next';

import { Analytics } from '@/components/analytics';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: '%s | ' + siteConfig.name,
    },
    description: siteConfig.description,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
    icons: {
        icon: '/favicon.ico', //todo)) add icon shortcut apple
    },
    keywords: ['cash, iou, cash iou, money lending, money borrowing'],
    authors: [{ name: 'Sayed Ahmed', url: 'https://github.com/sayeed205' }],
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <head />
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    {children}
                    <Analytics />
                    <Toaster />
                    <TailwindIndicator />
                </ThemeProvider>
            </body>
        </html>
    );
}
