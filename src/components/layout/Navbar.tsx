'use client';

import Link from 'next/link';
import { NavItem } from '@/types';

interface NavbarProps {
    items?: NavItem[];
}

export default function Navbar({ items = [] }: NavbarProps) {
    return (
        <header className="sticky top-0 z-50 w-full border-b dark:border-neutral-100 bg-background/90 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">
                    Logo
                </Link>
                <nav className="hidden md:flex gap-6">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="text-gray-600 hover:text-gray-900"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <button className="bg-primary text-white px-4 py-2 rounded-md">
                    Get Started
                </button>
            </div>
        </header>
    );
} 