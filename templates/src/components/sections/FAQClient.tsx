'use client';

import { useState } from 'react';
import { FAQ } from '@/types';

interface FAQProps {
    faqs: FAQ[];
}

export function FAQClient({ faqs }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="mx-auto mt-8 max-w-3xl divide-y divide-gray-900/10 sm:mt-12">
            {faqs.map((faq, index) => (
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
                                className={`h-6 w-6 transform text-gray-600 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
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
                        className={`mt-2 overflow-hidden transition-all duration-200 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <p className="text-base leading-7 text-gray-600">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
} 