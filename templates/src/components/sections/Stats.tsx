interface Stat {
    value: string;
    label: string;
    description?: string;
}

export default function Stats() {
    const stats: Stat[] = [
        {
            value: "179%",
            label: "Conversion Rate",
            description: "Average increase in conversion rates"
        },
        {
            value: "5min",
            label: "Setup Time",
            description: "Quick project initialization"
        },
        {
            value: "100+",
            label: "Components",
            description: "Pre-built components ready to use"
        }
    ];

    return (
        <section id="stats" className="relative isolate">
            {/* Background with gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 lg:gap-x-12">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col gap-2 p-6 text-center sm:p-8"
                        >
                            {/* Value */}
                            <dt className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                                {stat.value}
                            </dt>

                            {/* Label */}
                            <dd className="text-lg font-semibold leading-6 text-gray-900">
                                {stat.label}
                            </dd>

                            {/* Description */}
                            {stat.description && (
                                <dd className="text-sm leading-5 text-gray-600">
                                    {stat.description}
                                </dd>
                            )}

                            {/* Decorative element */}
                            <div
                                className="absolute -inset-x-3 -inset-y-2 z-0 hidden rounded-2xl 
                                    bg-primary/[0.03] peer-hover:bg-primary/[0.05] sm:block"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 