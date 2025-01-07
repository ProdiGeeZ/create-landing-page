export default function Solution() {
    return (
        <section id="solution" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            The Complete Solution for Your Landing Page Needs
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Our platform provides everything you need to create, launch, and optimize
                            high-converting landing pages. From beautiful templates to powerful
                            analytics, we've got you covered.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Pre-built sections for quick assembly',
                                'Responsive design out of the box',
                                'SEO optimized structure',
                                'Performance focused architecture',
                                'Modern tech stack with Next.js'
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <svg
                                        className="w-5 h-5 text-green-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        {/* Add solution illustration or screenshot here */}
                        <div className="aspect-video bg-gray-200 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </section>
    );
} 