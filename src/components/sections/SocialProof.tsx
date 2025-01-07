export default function SocialProof() {
    return (
        <section id="social-proof" className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-8 items-center">
                    {/* Add your social proof logos or metrics here */}
                    <div className="flex gap-8">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <div key={i} className="w-24 h-12 bg-gray-200 rounded animate-pulse" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 