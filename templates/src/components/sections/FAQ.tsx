import { FAQ } from '@/types';
import { useState } from 'react';

interface FAQProps {
    faqs?: FAQ[];
}

export default function FAQSection({ faqs = [] }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

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
        <section id="faq" className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(35rem_35rem_at_top,theme(colors.primary/5),transparent)]" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                        Frequently asked questions
                    </h2>
                    <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
                        Have a question? Find answers to common questions about our landing page builder.
                    </p>
                </div>

                <div className="mx-auto mt-8 max-w-3xl divide-y divide-gray-900/10 sm:mt-12">
                    {displayFaqs.map((faq, index) => (
                        <div key={index} className="py-6">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex w-full items-start justify-between text-left"
                            >
                                <span className="text-base font-semibold leading-7 text-gray-900 sm:text-lg">
                                    {faq.question}
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                    <svg
                                        className={`h-6 w-6 transform text-gray-600 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`mt-2 overflow-hidden transition-all duration-200 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-base leading-7 text-gray-600">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-12 text-center sm:mt-16">
                    <p className="text-base font-semibold leading-7 text-gray-900">
                        Still have questions?
                    </p>
                    <a
                        href="#"
                        className="mt-2 text-sm font-semibold leading-6 text-primary hover:text-primary/80"
                    >
                        Contact our support team <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </section>
    );
} 