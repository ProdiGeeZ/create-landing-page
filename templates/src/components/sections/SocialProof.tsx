export default function SocialProof() {
    const brands = [
        { name: "Acme Inc", logo: "A" },
        { name: "Business Corp", logo: "B" },
        { name: "Company Ltd", logo: "C" },
        { name: "Digital Co", logo: "D" },
        { name: "Enterprise", logo: "E" }
    ];

    return (
        <section id="social-proof" className="relative isolate -mt-8 sm:-mt-12 lg:-mt-16">
            {/* Gradient overlay */}
            <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
                <div
                    className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-primary to-primary/70"
                    style={{
                        clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    {/* Stats */}
                    <div className="mx-auto mt-8 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            ["1000+", "Developers"],
                            ["500K+", "Downloads"],
                            ["200+", "Components"],
                            ["99%", "Satisfaction"],
                        ].map(([stat, label]) => (
                            <div key={label} className="flex flex-col items-center gap-y-2">
                                <dt className="text-3xl font-semibold tracking-tight text-gray-900">
                                    {stat}
                                </dt>
                                <dd className="text-sm text-gray-600">{label}</dd>
                            </div>
                        ))}
                    </div>

                    {/* Brand logos */}
                    <div className="relative mt-12 sm:mt-16">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-200" />
                        </div>
                        <div className="relative">
                            <div className="mx-auto mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
                                {brands.map((brand) => (
                                    <div
                                        key={brand.name}
                                        className="flex items-center justify-center grayscale transition hover:grayscale-0"
                                    >
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-2xl font-bold text-gray-500">
                                            {brand.logo}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 