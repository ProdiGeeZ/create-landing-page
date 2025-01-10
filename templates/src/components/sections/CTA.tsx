export default function CTA() {
    return (
        <section id="cta" className="relative isolate overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground dark:text-foreground sm:text-4xl">
                        Build your next landing page
                        <span className="block text-primary dark:text-primary">in minutes, not hours.</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground dark:text-muted-foreground">
                        Get started with our CLI tool and choose from multiple UI frameworks.
                        Create high-converting landing pages without writing code from scratch.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 
                                text-sm font-semibold text-primary-foreground shadow-sm transition-all 
                                duration-200 hover:bg-primary/90 hover:shadow-md active:bg-primary/80 
                                focus-visible:outline focus-visible:outline-2 
                                focus-visible:outline-offset-2 focus-visible:outline-primary dark:bg-primary dark:text-white"
                        >
                            Get Started Free
                            <svg
                                className="ml-2.5 h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center rounded-lg border border-border 
                                bg-card/50 dark:bg-card/50 px-6 py-3 text-sm font-semibold text-foreground 
                                dark:text-foreground shadow-sm transition-all duration-200 
                                hover:bg-muted/50 dark:hover:bg-muted/10 hover:shadow-md 
                                focus-visible:outline focus-visible:outline-2 
                                focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            View Documentation
                        </a>
                    </div>

                    {/* Social proof */}
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((_, i) => (
                                <div
                                    key={i}
                                    className="inline-block h-8 w-8 rounded-full border-2 
                                        border-background bg-muted ring-2 ring-background 
                                        dark:border-background dark:bg-muted dark:ring-background"
                                />
                            ))}
                        </div>
                        <div className="text-sm leading-6 text-muted-foreground dark:text-muted-foreground">
                            <span className="font-semibold text-foreground dark:text-foreground">1+</span> developers
                            <span className="block sm:inline sm:ml-1">already shipped with our tool</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 