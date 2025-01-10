'use client';

import { HeroButtons } from "./HeroButtons";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative isolate overflow-hidden"
        >
            {/* Content container */}
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Content */}
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        {/* Heading */}
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="block text-foreground">
                                Build Landing Pages That Convert
                            </span>
                            <span className="mt-2 block text-2xl text-primary sm:text-3xl lg:text-4xl">
                                Without Writing Code From Scratch
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
                            Create high-converting landing pages in minutes with our CLI tool.
                            Choose your UI framework, customize components, and launch faster.
                        </p>

                        {/* Call to action */}
                        <HeroButtons />

                        {/* Social proof */}
                        <div className="mt-8 flex items-center gap-3">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((_, i) => (
                                    <div
                                        key={i}
                                        className="inline-block h-8 w-8 rounded-full 
                                            bg-primary/20 dark:bg-primary/30
                                            ring-2 ring-background dark:ring-background"
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Trusted by <span className="font-semibold text-primary">1+ (Myself)</span> developer(s)
                            </p>
                        </div>
                    </div>

                    {/* Preview */}
                    <div className="relative lg:mt-0">
                        {/* Preview card */}
                        <div className="aspect-[4/3] overflow-hidden rounded-xl bg-primary/10 
                            dark:bg-primary/20 shadow-lg ring-1 ring-primary/20 dark:ring-primary/30">
                            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
                                <div className="w-full max-w-md rounded-lg bg-background/80 dark:bg-background/80
                                    p-6 shadow-lg ring-1 ring-primary/30 dark:ring-primary/40 backdrop-blur-sm">
                                    {/* Header */}
                                    <div className="mb-6 space-y-4">
                                        <div className="h-4 w-1/3 rounded bg-primary/20 dark:bg-primary/30" />
                                        <div className="flex gap-2">
                                            <div className="h-8 w-8 rounded bg-primary/15 dark:bg-primary/25" />
                                            <div className="h-8 w-8 rounded bg-primary/15 dark:bg-primary/25" />
                                            <div className="h-8 w-8 rounded bg-primary/15 dark:bg-primary/25" />
                                        </div>
                                    </div>
                                    {/* Content */}
                                    <div className="space-y-3">
                                        <div className="h-2.5 w-5/6 rounded bg-primary/10 dark:bg-primary/20" />
                                        <div className="h-2.5 w-4/6 rounded bg-primary/10 dark:bg-primary/20" />
                                        <div className="h-2.5 w-3/6 rounded bg-primary/10 dark:bg-primary/20" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Technology stack badge */}
                        <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 gap-2 
                            whitespace-nowrap rounded-full border border-primary/20 bg-background/80 
                            px-4 py-2 text-sm shadow-lg backdrop-blur-sm">
                            {['Next.js', 'TypeScript', 'Tailwind'].map((tech, i) => (
                                <span key={tech} className="flex items-center">
                                    {i > 0 && (
                                        <span className="mx-2 text-primary/40">•</span>
                                    )}
                                    <span className="font-medium text-primary">
                                        {tech}
                                    </span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}