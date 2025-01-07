interface Benefit {
    title: string;
    description: string;
    icon: string;
}

export default function Benefits() {
    const benefits: Benefit[] = [
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

    return (
        <section id="benefits" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Benefits</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="p-6 border rounded-lg">
                            <div className="w-12 h-12 bg-primary/10 rounded-full mb-4 flex items-center justify-center text-2xl">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 