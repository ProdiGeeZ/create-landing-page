interface Step {
    title: string;
    description: string;
    icon?: string;
}

export default function HowItWorks() {
    const steps: Step[] = [
        {
            title: "Choose Your Framework",
            description: "Select from popular UI frameworks like shadcn, Chakra UI, or Mantine to match your project needs.",
            icon: "⚡"
        },
        {
            title: "Customize Components",
            description: "Easily modify pre-built sections and components to match your brand identity and requirements.",
            icon: "🎨"
        },
        {
            title: "Deploy & Launch",
            description: "Deploy your landing page with a single command and start converting visitors into customers.",
            icon: "🚀"
        }
    ];

    return (
        <section id="how-it-works" className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary/5),transparent)]" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                        How it works
                    </h2>
                    <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                        Get up and running in minutes with our simple three-step process.
                    </p>
                </div>

                <div className="mx-auto mt-12 grid max-w-lg gap-8 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative pl-16"
                        >
                            {/* Step number */}
                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <div className="font-semibold">{index + 1}</div>
                            </div>

                            {/* Content */}
                            <div className="relative">
                                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/20">
                                    {step.icon}
                                    <div className="ml-2">{step.title}</div>
                                </div>
                                <p className="mt-4 text-muted-foreground leading-7">
                                    {step.description}
                                </p>
                            </div>

                            {/* Connector line */}
                            {index !== steps.length - 1 && (
                                <div className="absolute left-5 top-16 -ml-px h-[calc(100%+2rem)] w-[1px] bg-border lg:hidden" />
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-12 flex justify-center sm:mt-16">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 
                            text-sm font-semibold text-primary-foreground shadow-sm transition-colors 
                            hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 
                            focus-visible:outline-offset-2 focus-visible:outline-primary dark:bg-primary dark:text-white"
                    >
                        Get Started Now
                        <svg
                            className="ml-2.5 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
} 