import { Feature } from '@/types';

interface FeaturesProps {
    features?: Feature[];
}

export default function Features({ features = [] }: FeaturesProps) {
    const defaultFeatures: Feature[] = [
        {
            title: "Quick Setup",
            description: "Get your landing page up and running in minutes with our intuitive CLI tool and pre-built components.",
            icon: "⚡"
        },
        {
            title: "Framework Choice",
            description: "Choose from popular UI frameworks like shadcn/ui, Chakra UI, or Mantine to match your preferences.",
            icon: "🎨"
        },
        {
            title: "SEO Optimized",
            description: "Built-in SEO best practices and semantic HTML to help your landing page rank better.",
            icon: "🔍"
        },
        {
            title: "Responsive Design",
            description: "Fully responsive components that look great on all devices and screen sizes.",
            icon: "📱"
        },
        {
            title: "Modern Stack",
            description: "Built with Next.js, TypeScript, and Tailwind CSS for a modern development experience.",
            icon: "🛠"
        },
        {
            title: "Easy Customization",
            description: "Easily customize colors, fonts, and components to match your brand identity.",
            icon: "✨"
        }
    ];

    const displayFeatures = features.length > 0 ? features : defaultFeatures;

    return (
        <section id="features" className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(35rem_35rem_at_top,theme(colors.primary/5),transparent)]" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">
                        Powerful Features
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Everything you need to build a great landing page
                    </p>
                    <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                        All the features you need to create high-converting landing pages,
                        without the complexity.
                    </p>
                </div>

                <div className="mx-auto mt-12 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {displayFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col gap-6 rounded-2xl border border-neutral-200 
                                dark:border-primary/20 bg-background p-8 shadow-sm transition-all duration-300 
                                hover:shadow-lg hover:bg-neutral-50/75 dark:bg-background/30 dark:hover:bg-primary/5 
                                dark:hover:border-primary/80 hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg 
                                bg-primary/10 text-xl ring-1 ring-primary/25 dark:ring-primary/40
                                group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                                <span className="text-primary group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-semibold leading-6 text-foreground group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-sm leading-6 text-muted-foreground">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Decorative corner gradients */}
                            <div className="absolute right-0 top-0 -z-10 h-24 w-24 rounded-br-2xl 
                                bg-gradient-to-bl from-primary/5 via-primary/2 to-transparent opacity-0 
                                transition-opacity group-hover:opacity-100" />
                            <div className="absolute left-0 bottom-0 -z-10 h-24 w-24 rounded-tl-2xl 
                                bg-gradient-to-tr from-primary/5 via-primary/2 to-transparent opacity-0 
                                transition-opacity group-hover:opacity-100" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 