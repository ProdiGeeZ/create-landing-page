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
                            <span className="block text-foreground dark:text-foreground">
                                Build Landing Pages That Convert
                            </span>
                            <span className="mt-2 block text-2xl text-muted-foreground dark:text-muted-foreground sm:text-3xl lg:text-4xl">
                                Without Writing Code From Scratch
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 text-lg leading-8 text-muted-foreground dark:text-muted-foreground sm:text-xl">
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
                                            bg-primary dark:bg-neutral-800 
                                            ring-2 ring-background dark:ring-primary"
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Trusted by <span className="font-semibold text-foreground">1+ (Myself)</span> developer(s)
                            </p>
                        </div>
                    </div>

                    {/* Preview */}
                    <div className="relative mt-8 lg:mt-0">
                        {/* Preview card */}
                        <div className="group aspect-[4/3] overflow-hidden rounded-lg 
                            bg-gradient-to-br from-primary/5 via-primary/10 to-transparent 
                            dark:from-primary/10 dark:via-primary/20 dark:to-transparent
                            backdrop-blur-sm transition-all duration-300 hover:shadow-xl 
                            dark:shadow-primary/5 dark:hover:shadow-primary/10 lg:hover:scale-[1.02]">
                            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
                                <div className="w-full max-w-md rounded-lg bg-card/90 dark:bg-card/90
                                    p-4 shadow-xl ring-1 ring-border dark:ring-border/50
                                    backdrop-blur sm:p-6">
                                    <div className="mb-4 h-4 w-1/3 rounded bg-muted dark:bg-muted" />
                                    <div className="space-y-3">
                                        <div className="h-2.5 w-5/6 rounded bg-muted dark:bg-muted" />
                                        <div className="h-2.5 w-4/6 rounded bg-muted dark:bg-muted" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Technology stack badge */}
                        <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 gap-2 
                            whitespace-nowrap rounded-full border border-border bg-card/80 
                            dark:bg-card/80 px-4 py-2 text-sm shadow-lg backdrop-blur 
                            transition-all duration-300 hover:-translate-y-1 hover:shadow-xl 
                            dark:border-border/50">
                            {['Next.js', 'TypeScript', 'Tailwind'].map((tech, i) => (
                                <span key={tech} className="flex items-center">
                                    {i > 0 && (
                                        <span className="mx-2 text-muted-foreground/40 dark:text-muted-foreground/40">•</span>
                                    )}
                                    <span className="font-medium text-primary dark:text-primary">
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