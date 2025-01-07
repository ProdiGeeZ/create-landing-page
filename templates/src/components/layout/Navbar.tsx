import React from 'react';

interface NavItem {
    label: string;
    href: string;
}

interface NavbarProps {
    items?: NavItem[];
}

export default function Navbar({ items = [] }: NavbarProps) {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5 text-lg font-semibold">
                        Create Landing Page
                    </a>
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-6 w-6"
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
                    </button>
                </div>

                {/* Desktop navigation */}
                <div className="hidden lg:flex lg:gap-x-8">
                    {items.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* CTA button */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 
                            text-sm font-medium text-primary-foreground shadow-sm transition-colors 
                            hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 
                            focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        Get Started
                    </a>
                </div>
            </nav>

            {/* Mobile menu, show/hide based on menu state */}
            <div className="lg:hidden" role="dialog" aria-modal="true">
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5 p-1.5 text-lg font-semibold">
                            Create Landing Page
                        </a>
                        <button
                            type="button"
                            className="rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <svg
                                className="h-6 w-6"
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
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {items.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium 
                                            text-gray-700 hover:bg-gray-50"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="block rounded-lg bg-primary px-4 py-2.5 text-center 
                                        text-base font-medium text-primary-foreground shadow-sm 
                                        transition-colors hover:bg-primary/90"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
} 