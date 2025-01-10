interface Integration {
    name: string;
    description: string;
    logo: string;
}

export default function Integrations() {
    const integrations: Integration[] = [
        {
            name: "Next.js",
            description: "Built on React, providing hybrid static & server rendering",
            logo: "N"
        },
        {
            name: "TypeScript",
            description: "First-class TypeScript support out of the box",
            logo: "TS"
        },
        {
            name: "Tailwind CSS",
            description: "Utility-first CSS framework for rapid UI development",
            logo: "T"
        },
        {
            name: "shadcn/ui",
            description: "Re-usable components built with Radix UI and Tailwind",
            logo: "S"
        },
        {
            name: "Chakra UI",
            description: "Simple, modular and accessible component library",
            logo: "C"
        },
        {
            name: "Mantine",
            description: "Modern React components and hooks library",
            logo: "M"
        }
    ];

    return (
        <section id="integrations" className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground dark:text-foreground sm:text-3xl lg:text-4xl">
                        Seamless Integrations
                    </h2>
                    <p className="mt-4 text-base leading-7 text-muted-foreground dark:text-muted-foreground sm:text-lg">
                        Built with modern technologies and frameworks that you already know and love.
                    </p>
                </div>

                <div className="mx-auto mt-12 grid max-w-lg gap-6 sm:mt-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {integrations.map((integration) => (
                        <div
                            key={integration.name}
                            className="relative flex flex-col gap-6 rounded-2xl border border-border 
                                bg-card/50 dark:bg-card/50 p-8 shadow-sm transition duration-300 
                                hover:shadow-md hover:bg-muted/50 dark:hover:bg-muted/10
                                dark:border-border dark:hover:border-primary/50"
                        >
                            {/* Logo */}
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg 
                                bg-primary/10 dark:bg-primary/20 text-xl font-bold text-primary dark:text-primary"
                            >
                                {integration.logo}
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-lg font-semibold leading-6 text-foreground dark:text-foreground">
                                    {integration.name}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-muted-foreground dark:text-muted-foreground">
                                    {integration.description}
                                </p>
                            </div>

                            {/* Arrow icon */}
                            <svg
                                className="absolute right-6 top-6 h-6 w-6 text-muted-foreground/25 dark:text-muted-foreground/40"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                />
                            </svg>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-12 text-center sm:mt-16">
                    <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-primary dark:text-primary hover:text-primary/80"
                    >
                        View all integrations <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
} 