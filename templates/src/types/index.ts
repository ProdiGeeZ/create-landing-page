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
    content: string;
    author: string;
    role?: string;
    rating?: number;
}

export interface FAQ {
    question: string;
    answer: string;
} 