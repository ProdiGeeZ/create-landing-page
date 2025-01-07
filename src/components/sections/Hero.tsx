export default function Hero() {
    return (
        <section id="hero" className="relative isolate py-12 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Build Landing Pages That Convert
                            <span className="mt-2 block text-2xl text-gray-600/90 sm:text-3xl lg:text-4xl">
                                Without Writing Code From Scratch
                            </span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-600 sm:text-xl">
                            Create high-converting landing pages in minutes with our CLI tool.
                            Choose your UI framework, customize components, and launch faster.
                        </p>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <a
                                href="#features"
                                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 
                                    text-base font-medium text-primary-foreground shadow-sm transition-colors 
                                    hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 
                                    focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Get Started Free
                            </a>
                            <a
                                href="#how-it-works"
                                className="inline-flex items-center justify-center rounded-lg border border-gray-300 
                                    px-6 py-3 text-base font-medium transition-colors hover:bg-gray-50 
                                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                                    focus-visible:outline-gray-600"
                            >
                                See How It Works
                            </a>
                        </div>

                        <div className="mt-8 flex items-center gap-3 text-sm">
                            <div className="-space-x-2 overflow-hidden">
                                {[1, 2, 3].map((_, i) => (
                                    <div
                                        key={i}
                                        className="inline-block h-8 w-8 rounded-full border-2 border-white 
                                            bg-gray-200 ring-2 ring-white"
                                    />
                                ))}
                            </div>
                            <span className="text-gray-600">
                                Trusted by <span className="font-semibold">1+ (Myself)</span> developer(s)
                            </span>
                        </div>
                    </div>

                    <div className="relative mt-8 lg:mt-0">
                        <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br 
                            from-primary/5 to-primary/10 backdrop-blur-sm">
                            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
                                <div className="w-full max-w-md rounded-lg bg-white/90 p-4 shadow-xl 
                                    ring-1 ring-gray-900/5 backdrop-blur sm:p-6">
                                    <div className="mb-4 h-4 w-1/3 rounded bg-gray-200" />
                                    <div className="space-y-3">
                                        <div className="h-2.5 w-5/6 rounded bg-gray-200" />
                                        <div className="h-2.5 w-4/6 rounded bg-gray-200" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 gap-2 
                            whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm shadow-lg 
                            ring-1 ring-gray-900/5">
                            <span className="font-medium text-primary">Next.js</span>
                            <span className="text-gray-300">•</span>
                            <span className="font-medium text-primary">TypeScript</span>
                            <span className="text-gray-300">•</span>
                            <span className="font-medium text-primary">Tailwind</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 