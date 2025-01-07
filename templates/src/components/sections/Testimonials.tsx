import { Testimonial } from '@/types';

interface TestimonialsProps {
    testimonials?: Testimonial[];
}

export default function Testimonials({ testimonials = [] }: TestimonialsProps) {
    const defaultTestimonials: Testimonial[] = [
        {
            author: "Sarah Johnson",
            role: "Marketing Director",
            content: "This CLI tool saved us weeks of development time. The pre-built sections are beautiful and highly customizable.",
            rating: 5
        },
        {
            author: "Michael Chen",
            role: "Startup Founder",
            content: "Perfect for quickly launching landing pages. The UI framework options make it flexible for any project.",
            rating: 5
        },
        {
            author: "Emily Davis",
            role: "Product Manager",
            content: "The best landing page solution we've used. Clean code and great documentation.",
            rating: 5
        },
        {
            author: "Alex Thompson",
            role: "Developer",
            content: "As a developer, I appreciate the attention to code quality and modern tech stack.",
            rating: 5
        }
    ];

    const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {displayTestimonials.map((testimonial, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`text-${i < (testimonial.rating || 5) ? 'yellow' : 'gray'}-400`}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-600 mb-4">{testimonial.content}</p>
                            <div className="font-semibold">{testimonial.author}</div>
                            {testimonial.role && (
                                <div className="text-sm text-gray-500">{testimonial.role}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 