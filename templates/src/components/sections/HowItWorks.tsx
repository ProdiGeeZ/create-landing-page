export default function HowItWorks() {
    const steps = [
        {
            title: 'Choose Your Framework',
            description: 'Select from popular UI frameworks like shadcn, Chakra UI, or Mantine.'
        },
        {
            title: 'Customize Components',
            description: 'Easily modify pre-built sections to match your brand.'
        },
        {
            title: 'Deploy & Launch',
            description: 'Deploy your landing page with a single command.'
        }
    ];

    return (
        <section id="how-it-works" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-xl font-bold text-primary">{index + 1}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 