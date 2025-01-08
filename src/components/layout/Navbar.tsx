'use client';

import Link from 'next/link';
import { NavItem } from '@/types';
import { useState } from 'react';

interface NavbarProps {
    items?: NavItem[];
}

export default function Navbar({ items = [] }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="container mx-auto px-4">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center text-2xl font-bold text-foreground transition-colors hover:text-primary"
                    >
                        Logo
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground 
                            hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 
                            focus:ring-inset focus:ring-primary md:hidden"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        {/* Icon when menu is closed */}
                        <svg
                            className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                        {/* Icon when menu is open */}
                        <svg
                            className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    {/* Desktop navigation */}
                    <div className="hidden md:flex md:gap-x-6">
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="relative text-sm font-medium text-muted-foreground transition-colors 
                                    hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px 
                                    after:w-0 after:bg-primary after:transition-all after:duration-300 
                                    hover:after:w-full"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 
                            text-sm font-medium text-primary-foreground shadow transition-all duration-200 
                            hover:bg-primary/90 hover:shadow-md active:scale-[0.98] active:bg-primary/70 
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary 
                            focus-visible:ring-offset-2"
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Mobile navigation */}
                    <div
                        className={`${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                            } absolute inset-x-0 top-full z-50 m-2 overflow-hidden rounded-lg border 
                        border-border bg-background shadow-lg transition-all duration-300 md:hidden`}
                    >
                        <div className="space-y-1 p-2">
                            {items.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground 
                                        transition-colors hover:bg-muted hover:text-foreground"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <button
                                className="mt-2 w-full rounded-md bg-primary px-3 py-2 text-sm 
                                    font-medium text-primary-foreground shadow transition-colors 
                                    hover:bg-primary/90 active:bg-primary/70"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
} 