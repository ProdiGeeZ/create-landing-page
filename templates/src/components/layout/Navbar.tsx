import React from 'react';
import Link from 'next/link';
import { NavItem } from '@/types';
import { siteConfig } from '@/config/site';

interface NavbarProps {
    items?: NavItem[];
}

export default function Navbar({ items = siteConfig.nav }: NavbarProps) {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <div className="container flex h-16 items-center">
                <div className="mr-8">
                    <a href="/" className="flex items-center space-x-2">
                        <span className="font-bold">{siteConfig.name}</span>
                    </a>
                </div>
                <nav className="flex flex-1 items-center justify-between">
                    <ul className="flex gap-6">
                        {items.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="text-sm font-medium transition-colors hover:text-primary"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center space-x-4">
                        <a
                            href="#"
                            className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                            Get Started
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
} 