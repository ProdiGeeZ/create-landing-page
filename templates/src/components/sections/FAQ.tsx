import { FAQ } from '@/types';

interface FAQProps {
    faqs?: FAQ[];
}

export default function FAQSection({ faqs = [] }: FAQProps) {
    const defaultFaqs: FAQ[] = [
        {
            question: "What is Create Landing Page?",
            answer: "Create Landing Page is a CLI tool that helps you quickly create modern, high-converting landing pages using Next.js and your choice of UI framework."
        },
        {
            question: "Which UI frameworks are supported?",
            answer: "We currently support shadcn/ui, Chakra UI, and Mantine. Each framework is fully integrated with our components and styling system."
        },
        {
            question: "Is it customizable?",
            answer: "Yes! All components are built with customization in mind. You can easily modify colors, styles, and content to match your brand."
        },
        {
            question: "Do I need to know React?",
            answer: "Basic React knowledge is helpful, but our components are well-documented and easy to use even for beginners."
        },
        {
            question: "Is it SEO friendly?",
            answer: "Yes, all pages are built with SEO best practices in mind, including proper semantic HTML and metadata support."
        }
    ];

    const displayFaqs = faqs.length > 0 ? faqs : defaultFaqs;

    return (
        <section id="faq" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto">
                    {displayFaqs.map((faq, index) => (
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