interface Integration {
    name: string;
    icon: string;
    description: string;
}

export default function Integrations() {
    const integrations: Integration[] = [
        {
            name: "Next.js",
            icon: "/next.svg",
            description: "Built on the latest Next.js features"
        },
        {
            name: "Tailwind CSS",
            icon: "/window.svg",
            description: "Modern utility-first styling"
        },
        {
            name: "TypeScript",
            icon: "/file.svg",
            description: "Type-safe development"
        },
        {
            name: "UI Frameworks",
            icon: "/globe.svg",
            description: "Multiple UI framework options"
        }
    ];

    return (
        <section id="integrations" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Built With Modern Tech</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {integrations.map((integration, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                            <img
                                src={integration.icon}
                                alt={integration.name}
                                className="w-12 h-12 mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">{integration.name}</h3>
                            <p className="text-gray-600">{integration.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 