import { FAQ } from '@/types';

interface FAQProps {
    faqs?: FAQ[];
}

export default function FAQSection({ faqs = [] }: FAQProps) {
    return (
        <section id="faq" className="py-20" >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                            <p className="text-gray-600">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 