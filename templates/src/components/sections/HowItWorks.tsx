export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 bg-gray-50" >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                <div className="flex flex-col md:flex-row gap-8 justify-center">
                    {[1, 2, 3].map((step, i) => (
                        <div key={i} className="flex-1 max-w-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                    {i + 1}
                                </div>
                                <h3 className="text-xl font-semibold">Step {i + 1}</h3>
                            </div>
                            <p className="text-gray-600">Description of step {i + 1} in the process.</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 