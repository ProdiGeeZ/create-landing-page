'use client';

import Link from 'next/link';
import { NavItem } from '@/types';

interface NavbarProps {
    items?: NavItem[];
}

export default function Navbar({ items = [] }: NavbarProps) {
    return (
        <header className="w-full border-b">
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