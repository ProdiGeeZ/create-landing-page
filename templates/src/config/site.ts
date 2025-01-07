import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
    name: "PROJECT_NAME",
    description: "A modern landing page built with Next.js",
    nav: [
        { label: "Features", href: "#features" },
        { label: "Benefits", href: "#benefits" },
        { label: "Solution", href: "#solution" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "FAQ", href: "#faq" }
    ],
    features: [
        {
            title: "Feature 1",
            description: "Description of feature 1",
            icon: "✨"
        },
        // Add more features...
    ],
    testimonials: [
        {
            author: "John Doe",
            role: "CEO",
            content: "This product has transformed our business",
            rating: 5
        },
        // Add more testimonials...
    ],
    faqs: [
        {
            question: "What is this?",
            answer: "A powerful landing page solution"
        },
        // Add more FAQs...
    ]
}; 