export interface SiteConfig {
  name: string;
  description: string;
  nav: Array<{
    title: string;
    href: string;
  }>;
  features: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  testimonials: Array<Testimonial>;
  faqs: Array<FAQ>;
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