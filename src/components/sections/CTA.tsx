export default function CTA() {
    return (
        <section id="cta" className="relative isolate overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary/5),transparent)]" />

            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Build your next landing page
                        <span className="block text-primary">in minutes, not hours.</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
                        Get started with our CLI tool and choose from multiple UI frameworks.
                        Create high-converting landing pages without writing code from scratch.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 
                                text-sm font-semibold text-white shadow-sm transition-all 
                                hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 
                                focus-visible:outline-offset-2 focus-visible:outline-primary"
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
                            className="inline-flex items-center justify-center rounded-lg border border-gray-300 
                                px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition-all 
                                hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 
                                focus-visible:outline-offset-2 focus-visible:outline-gray-600"
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
                                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white 
                                        bg-gradient-to-r from-primary/30 to-primary/10"
                                />
                            ))}
                        </div>
                        <div className="text-sm leading-6 text-gray-600">
                            <span className="font-semibold text-gray-900">1000+</span> developers
                            <span className="block sm:inline sm:ml-1">already shipped with our tool</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 