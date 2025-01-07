import { siteConfig } from '@/config/site';

export default function Hero() {
    return (
        <section id="hero" className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Build High-Converting Landing Pages
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        {siteConfig.description}
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a
                            href="#features"
                            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                            Get Started
                        </a>
                        <a
                            href="#"
                            className="px-6 py-3 rounded-lg border border-gray-300 hover:border-gray-400"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
} 