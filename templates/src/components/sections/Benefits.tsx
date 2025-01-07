export default function Benefits() {
    return (
        <section id="benefits" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Benefits</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((_, i) => (
                        <div key={i} className="p-6 border rounded-lg">
                            <div className="w-12 h-12 bg-primary/10 rounded-full mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Benefit {i + 1}</h3>
                            <p className="text-gray-600">
                                Description of how this benefit helps your customers achieve their goals.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 