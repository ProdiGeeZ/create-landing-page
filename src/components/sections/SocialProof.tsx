'use client';

import * as React from 'react';

export default function SocialProof() {
    const brands = [
        { name: "Acme Inc", logo: "A" },
        { name: "Business Corp", logo: "B" },
        { name: "Company Ltd", logo: "C" },
        { name: "Digital Co", logo: "D" },
        { name: "Enterprise", logo: "E" }
    ];

    const stats = [
        { value: "1000+", label: "Developers", description: "Building with our tools" },
        { value: "500K+", label: "Downloads", description: "In the last 12 months" },
        { value: "200+", label: "Components", description: "Ready to use" },
        { value: "99%", label: "Satisfaction", description: "From our users" },
    ];

    return (
        <>
            <style>
                {`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-10px); }
                    }
                    @keyframes fadeSlideUp {
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>

            <section id="social-proof" className="relative">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 
                        rotate-[30deg] bg-gradient-to-tr from-primary to-primary/70 opacity-30 sm:left-[calc(50%-30rem)] 
                        sm:w-[72.1875rem]"
                        style={{
                            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div className="mx-auto mt-8 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat, index) => (
                                <div key={stat.label}
                                    className="relative group"
                                    style={{
                                        animation: `fadeSlideUp 0.5s ease-out forwards ${index * 0.1}s`,
                                        opacity: 0,
                                        transform: 'translateY(20px)',
                                    }}>
                                    <div className="relative">
                                        <dt>
                                            <div className="flex flex-col space-y-2">
                                                <span className="text-4xl font-bold tracking-tight text-foreground 
                                                    transition-colors duration-300 group-hover:text-primary">
                                                    {stat.value}
                                                </span>
                                                <span className="text-base font-semibold text-foreground">
                                                    {stat.label}
                                                </span>
                                            </div>
                                        </dt>
                                        <dd className="mt-2 text-sm text-muted-foreground">
                                            {stat.description}
                                        </dd>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="relative mt-24">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            </div>

                            <div className="relative flex justify-center">
                                <span className="px-6 text-base font-semibold text-foreground">
                                    Trusted by these companies
                                </span>
                            </div>

                            <div className="mx-auto mt-12">
                                <div className="mx-auto grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
                                    {brands.map((brand, index) => (
                                        <div
                                            key={brand.name}
                                            className="group relative"
                                            style={{
                                                animation: `fadeSlideUp 0.5s ease-out forwards ${index * 0.1}s`,
                                                opacity: 0,
                                                transform: 'translateY(20px)',
                                            }}
                                        >
                                            <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden 
                                                rounded-xl border border-border bg-background p-2 transition duration-300 
                                                group-hover:border-primary/50 group-hover:shadow-lg dark:bg-background/50 
                                                dark:group-hover:bg-background/60"
                                            >
                                                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 
                                                    to-transparent opacity-0 transition-opacity duration-300 
                                                    group-hover:opacity-100"
                                                />

                                                <span className="text-2xl font-bold text-muted-foreground transition-colors 
                                                    duration-300 group-hover:text-primary">
                                                    {brand.logo}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
} 