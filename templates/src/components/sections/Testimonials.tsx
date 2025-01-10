import { Testimonial } from '@/types';

interface TestimonialsProps {
    testimonials?: Testimonial[];
}

export default function Testimonials() {
    const testimonials = [
        {
            content: "I used my own CLI tool and honestly, it's pretty good. I'm impressed. The components just work... most of the time.",
            author: "Mohammed Saabir",
            role: "Software Engineer",
            avatar: "MS"
        },
        {
            content: "As myself, I can confirm that this is indeed a tool I made. The dark mode is particularly nice, if I do say so myself... and I do.",
            author: "Saabir Ahmed",
            role: "Front End Developer",
            avatar: "SA"
        },
        {
            content: "10/10 would build again. Though I might be slightly biased since I'm also the same person as the other two reviewers.",
            author: "ProdiGeeZ",
            role: "Backend Developer",
            avatar: "PG"
        }
    ];

    return (
        <section id="testimonials" className="relative isolate overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(35rem_35rem_at_top,theme(colors.primary/5),transparent)]" />

            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">Testimonials</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Loved by One Developer Worldwide
                    </p>
                    <p className="mt-4 text-sm text-muted-foreground">
                        (Yes, it's all the same person)
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl bg-background p-6 shadow-md ring-1 ring-primary/10 
                                transition-all duration-300 hover:shadow-lg hover:ring-primary/20 
                                dark:bg-background/50 dark:ring-primary/20 dark:hover:ring-primary/30 
                                dark:hover:bg-primary/5"
                        >
                            <div className="flex flex-col gap-8">
                                {/* Quote */}
                                <div className="relative">
                                    <svg
                                        className="absolute -top-2 -left-2 h-8 w-8 -translate-x-2 -translate-y-2 transform text-primary/20 
                                            group-hover:text-primary/30 transition-colors"
                                        fill="currentColor"
                                        viewBox="0 0 32 32"
                                        aria-hidden="true"
                                    >
                                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                    </svg>
                                    <p className="relative text-base text-muted-foreground">
                                        {testimonial.content}
                                    </p>
                                </div>

                                {/* Author */}
                                <div className="relative mt-auto flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 dark:bg-primary/20 
                                        ring-1 ring-primary/20 dark:ring-primary/30 flex items-center justify-center">
                                        <span className="text-sm font-semibold text-primary">
                                            {testimonial.avatar}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {testimonial.author}
                                        </div>
                                        <div className="text-muted-foreground">
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative corner gradients */}
                            <div className="absolute right-0 top-0 -z-10 h-24 w-24 rounded-br-2xl 
                                bg-gradient-to-bl from-primary/5 via-primary/2 to-transparent opacity-0 
                                transition-opacity group-hover:opacity-100" />
                            <div className="absolute left-0 bottom-0 -z-10 h-24 w-24 rounded-tl-2xl 
                                bg-gradient-to-tr from-primary/5 via-primary/2 to-transparent opacity-0 
                                transition-opacity group-hover:opacity-100" />
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 flex items-center justify-center gap-4 sm:mt-20">
                    <a
                        href="https://github.com/your-repo"
                        className="rounded-lg bg-primary/10 dark:bg-primary/20 px-4 py-2 text-sm 
                            font-semibold text-primary ring-1 ring-primary/20 dark:ring-primary/30 
                            hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
                    >
                        View on GitHub
                    </a>
                    <div className="text-sm text-muted-foreground">
                        1 very happy developer
                    </div>
                </div>
            </div>
        </section>
    );
} 