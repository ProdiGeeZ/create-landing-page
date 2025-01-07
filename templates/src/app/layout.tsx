import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import UIProvider from '@/providers/UIProvider';
import './globals.css';

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <UIProvider>
                    <Navbar items={siteConfig.nav} />
                    {children}
                    <Footer />
                </UIProvider>
            </body>
        </html>
    );
} 