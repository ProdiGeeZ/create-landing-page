'use client';

import { FAQ } from '@/types';
import { useState } from 'react';

interface FAQClientProps {
    faqs: FAQ[];
}

export function FAQClient({ faqs }: FAQClientProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-neutral-200 dark:divide-neutral-800">
            {faqs.map((faq, index) => (
                <div key={index} className="py-6">
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="flex w-full items-start justify-between text-left"
                    >
                        <span className="text-base font-semibold leading-7 text-foreground">
                            {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                            <svg
                                className={`h-6 w-6 transition-transform duration-200 
                                    text-neutral-600 dark:text-neutral-400
                                    ${openIndex === index ? 'rotate-45' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v12m6-6H6"
                                />
                            </svg>
                        </span>
                    </button>
                    {openIndex === index && (
                        <div className="mt-2 pr-12">
                            <p className="text-base leading-7 text-muted-foreground">
                                {faq.answer}
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
} 