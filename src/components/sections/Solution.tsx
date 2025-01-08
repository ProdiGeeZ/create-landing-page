export default function Solution() {
    const features = [
        'Pre-built sections for quick assembly',
        'Responsive design out of the box',
        'SEO optimized structure',
        'Performance focused architecture',
        'Modern tech stack with Next.js'
    ];

    return (
        <section id="solution" className="relative isolate overflow-hidden">
            {/* Background with gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-100/80 to-background 
                dark:from-black-0/50 dark:to-background" />

            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="grid gap-x-12 gap-y-8 lg:grid-cols-2">
                    {/* Content */}
                    <div className="max-w-xl lg:max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                            The Complete Solution for Your Landing Page Needs
                        </h2>
                        <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                            Our platform provides everything you need to create, launch, and optimize
                            high-converting landing pages. From beautiful templates to powerful
                            analytics, we've got you covered.
                        </p>
                        <ul className="mt-8 space-y-3 sm:mt-10">
                            {features.map((feature, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3 text-muted-foreground"
                                >
                                    <svg
                                        className="h-5 w-5 flex-shrink-0 text-primary"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-sm sm:text-base">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <div className="mt-10">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center rounded-lg 
                                    bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground 
                                    shadow-sm transition-colors hover:bg-primary/90 
                                    focus-visible:outline focus-visible:outline-2 
                                    focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Get Started Free
                            </a>
                        </div>
                    </div>

                    {/* Preview/Demo */}
                    <div className="relative lg:mt-0">
                        <div className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100 
                            dark:bg-neutral-200 shadow-lg">
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                {/* Preview Window */}
                                <div className="w-full space-y-6 rounded-lg bg-background dark:bg-neutral-100 p-6 shadow-sm 
                                    ring-1 ring-neutral-900/5 dark:ring-neutral-100">
                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-3 gap-4">
                                        {[1, 2, 3].map((_, i) => (
                                            <div key={i} className="rounded-lg bg-neutral-100 
                                                dark:bg-neutral-200 p-4">
                                                <div className="font-semibold text-primary">
                                                    {i === 0 ? '179%' : i === 1 ? '500+' : '24/7'}
                                                </div>
                                                <div className="mt-1 text-xs text-muted-foreground">
                                                    {i === 0 ? 'Conversion' : i === 1 ? 'Components' : 'Support'}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Preview Content */}
                                    <div className="space-y-2">
                                        <div className="h-2 w-2/3 rounded bg-neutral-200 dark:bg-neutral-700" />
                                        <div className="h-2 w-full rounded bg-neutral-200 dark:bg-neutral-700" />
                                        <div className="h-2 w-1/2 rounded bg-neutral-200 dark:bg-neutral-700" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full 
                            bg-primary/5 dark:bg-primary/10 lg:-left-12" />
                        <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full 
                            bg-primary/5 dark:bg-primary/10 lg:-right-12" />
                    </div>
                </div>
            </div>
        </section>
    );
} 