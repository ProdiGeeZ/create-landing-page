import { Testimonial } from '@/types';

interface TestimonialsProps {
    testimonials?: Testimonial[];
}

export default function Testimonials({ testimonials = [] }: TestimonialsProps) {
    const defaultTestimonials: Testimonial[] = [
        {
            content: "This tool has transformed how I build landing pages. The CLI setup is brilliant, and the components are incredibly well-designed.",
            author: "Sarah Chen",
            role: "Frontend Developer",
            rating: 5
        },
        {
            content: "I've tried many landing page builders, but this one stands out. The combination of Next.js and choice of UI frameworks is perfect.",
            author: "Michael Torres",
            role: "Tech Lead",
            rating: 5
        },
        {
            content: "Setup in minutes, customization in seconds. This is exactly what I needed for rapid prototyping and production builds.",
            author: "Emily Parker",
            role: "Product Designer",
            rating: 5
        }
    ];

    const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

    return (
        <section id="testimonials" className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground dark:text-foreground sm:text-3xl lg:text-4xl">
                        Loved by developers worldwide
                    </h2>
                    <p className="mt-4 text-base leading-7 text-muted-foreground dark:text-muted-foreground sm:text-lg">
                        See what others are saying about their experience with our landing page builder.
                    </p>
                </div>
                <div className="mx-auto mt-12 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
                    {displayTestimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col gap-6 rounded-2xl bg-card/50 dark:bg-card/50 p-6 
                                shadow-sm ring-1 ring-border dark:ring-border/50 
                                transition-all hover:shadow-lg hover:bg-muted/50 dark:hover:bg-muted/10 sm:p-8"
                        >
                            {testimonial.rating && (
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`h-5 w-5 ${i < testimonial.rating!
                                                ? "text-yellow-400 dark:text-yellow-300"
                                                : "text-muted dark:text-muted"
                                                }`}
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ))}
                                </div>
                            )}
                            <blockquote className="flex-1 text-base leading-7 text-foreground dark:text-foreground">
                                "{testimonial.content}"
                            </blockquote>
                            <footer>
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 dark:bg-primary/20" />
                                    <div>
                                        <div className="font-semibold text-foreground dark:text-foreground">
                                            {testimonial.author}
                                        </div>
                                        <div className="text-sm text-muted-foreground dark:text-muted-foreground">
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 