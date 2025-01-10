'use client';

import * as React from 'react';

export default function SocialProof() {
    const logos = [
        { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
        { name: 'TypeScript', url: '#' },
        { name: 'Tailwind CSS', url: '#' },
        { name: 'shadcn/ui', url: '#' },
    ];

    return (
        <section id="social-proof" className="relative overflow-hidden -mt-12">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(35rem_35rem_at_top,theme(colors.primary/5),transparent)]" />

            <div className="mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center">
                        <h2 className="text-base font-semibold leading-7 text-primary">
                            Built with modern technologies
                        </h2>
                        <p className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                            Trusted by 1+ developers
                        </p>
                    </div>

                    {/* Stats */}
                    <dl className="mt-10 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-3">
                        {[
                            ['5+', 'Components'],
                            ['100%', 'Test Coverage'],
                            ['24/7', 'Support'],
                        ].map(([stat, label]) => (
                            <div key={label} className="flex flex-col bg-primary/5 px-8 py-6">
                                <dt className="text-sm font-semibold leading-6 text-muted-foreground">
                                    {label}
                                </dt>
                                <dd className="order-first text-2xl font-semibold tracking-tight text-primary">
                                    {stat}
                                </dd>
                            </div>
                        ))}
                    </dl>

                    {/* Logos */}
                    <div className="relative mt-10">
                        <div className="absolute -inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                        <div className="absolute -inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                        <div className="relative mx-auto mt-6 flex flex-wrap justify-center gap-8 py-6">
                            {logos.map((logo) => (
                                <div
                                    key={logo.name}
                                    className="flex items-center justify-center"
                                >
                                    <span className="text-base font-semibold text-primary/80 hover:text-primary transition-colors">
                                        {logo.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 