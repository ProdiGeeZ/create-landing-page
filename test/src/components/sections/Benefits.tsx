import { Benefit } from '@/types';

interface BenefitsProps {
    benefits?: Benefit[];
}

export default function Benefits({ benefits = [] }: BenefitsProps) {
    const defaultBenefits: Benefit[] = [
        {
            title: "Quick Setup",
            description: "Get your landing page up and running in minutes with our CLI tool",
            icon: "⚡"
        },
        {
            title: "Modern Stack",
            description: "Built with Next.js, TypeScript, and your choice of UI framework",
            icon: "🛠️"
        },
        {
            title: "SEO Optimized",
            description: "Best practices for search engine optimization built-in",
            icon: "🔍"
        },
        {
            title: "Customizable",
            description: "Easily modify components and styles to match your brand",
            icon: "🎨"
        }
    ];

    const displayBenefits = benefits.length > 0 ? benefits : defaultBenefits;

    return (
        <section id="benefits" className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground dark:text-foreground sm:text-3xl lg:text-4xl">
                        Everything you need to succeed
                    </h2>
                    <p className="mt-4 text-base leading-7 text-muted-foreground dark:text-muted-foreground sm:text-lg">
                        Our platform provides all the features you need to create high-converting
                        landing pages quickly and efficiently.
                    </p>
                </div>

                <div className="mx-auto mt-12 grid max-w-lg gap-8 sm:mt-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {displayBenefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col gap-6 rounded-2xl border border-border 
                                bg-card/50 dark:bg-card/50 p-8 shadow-sm transition duration-300 
                                hover:shadow-md hover:bg-muted/50 dark:hover:bg-muted/10
                                dark:border-border dark:hover:border-primary/50"
                        >
                            {/* Icon */}
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg 
                                bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary text-2xl"
                            >
                                {benefit.icon}
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-lg font-semibold leading-6 text-foreground dark:text-foreground">
                                    {benefit.title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-muted-foreground dark:text-muted-foreground">
                                    {benefit.description}
                                </p>
                            </div>

                            {/* Decorative arrow */}
                            <svg
                                className="absolute right-6 top-6 h-6 w-6 text-muted-foreground/25 
                                    dark:text-muted-foreground/40"
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
            </div>
        </section>
    );
} 