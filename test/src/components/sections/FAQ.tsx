import { FAQ } from '@/types';
import { FAQClient } from './FAQClient';

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
        <section id="faq" className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground dark:text-foreground sm:text-3xl lg:text-4xl">
                        Frequently asked questions
                    </h2>
                    <p className="mt-4 text-base leading-7 text-muted-foreground dark:text-muted-foreground sm:text-lg">
                        Have a question? Find answers to common questions about our landing page builder.
                    </p>
                </div>

                <FAQClient faqs={displayFaqs} />

                {/* CTA Section */}
                <div className="mt-12 text-center sm:mt-16">
                    <p className="text-base font-semibold leading-7 text-foreground dark:text-foreground">
                        Still have questions?
                    </p>
                    <a
                        href="#"
                        className="mt-2 text-sm font-semibold leading-6 text-primary dark:text-primary 
                            hover:text-primary/80 dark:hover:text-primary/80 transition-colors"
                    >
                        Contact our support team <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </section>
    );
} 