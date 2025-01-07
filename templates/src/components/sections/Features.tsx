import { Feature } from '@/types';

interface FeaturesProps {
    features?: Feature[];
}

export default function Features({ features = [] }: FeaturesProps) {
    return (
        <section id="features" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 rounded-lg border">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 