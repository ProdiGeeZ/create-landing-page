export default function Solution() {
    return (
        <section id="solutions" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Solution</h2>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <div className="aspect-video bg-gray-200 rounded-lg mb-4" />
                        <div className="grid grid-cols-3 gap-4">
                            {[1, 2, 3].map((stat, i) => (
                                <div key={i} className="p-4 bg-white rounded-lg shadow-sm">
                                    <div className="text-2xl font-bold mb-1">XX%</div>
                                    <div className="text-sm text-gray-600">Key Metric {i + 1}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 