export interface NavItem {
    label: string;
    href: string;
}

export interface Feature {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

export interface Testimonial {
    author: string;
    role?: string;
    content: string;
    rating?: number;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface SiteConfig {
    name: string;
    description: string;
    nav: NavItem[];
    features: Feature[];
    testimonials: Testimonial[];
    faqs: FAQ[];
} 